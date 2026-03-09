/**
 * multiplayer.js — Cross-tab multiplayer engine for D&D 5e Web App
 *
 * Uses BroadcastChannel API and localStorage for real-time cross-tab
 * communication. No server required — all state lives in the browser.
 *
 * Exposed as window.Multiplayer.
 */
(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // Constants
  // ---------------------------------------------------------------------------

  const HEARTBEAT_INTERVAL_MS = 3000;
  const HEARTBEAT_TIMEOUT_MS = 10000;
  const STATE_SYNC_INTERVAL_MS = 10000;
  const AUTOSAVE_INTERVAL_MS = 30000;
  const SESSION_PREFIX = "dnd-session-";
  const CHANNEL_PREFIX = "dnd-session-";
  const CODE_LENGTH = 6;
  const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no ambiguous chars

  // All recognised message types.
  const MESSAGE_TYPES = Object.freeze([
    "join-request",
    "join-accepted",
    "join-rejected",
    "player-left",
    "heartbeat",
    "state-sync",
    "dice-roll",
    "chat",
    "initiative-update",
    "combat-update",
    "hp-change",
    "condition-change",
    "map-push",
    "token-move",
    "fog-update",
    "dm-delegate",
    "session-end",
    "request-action",
    "kick-player",
    "dm-promotion",
  ]);

  // ---------------------------------------------------------------------------
  // Utility helpers
  // ---------------------------------------------------------------------------

  /** Generate a cryptographically-ish random ID. */
  function uid() {
    const rand =
      typeof crypto !== "undefined" && crypto.getRandomValues
        ? Array.from(crypto.getRandomValues(new Uint8Array(8)))
            .map((b) => b.toString(36))
            .join("")
        : Math.random().toString(36).slice(2, 12);
    return "tab-" + Date.now().toString(36) + "-" + rand;
  }

  /** Generate a 6-char alphanumeric session code. */
  function generateCode() {
    let code = "";
    for (let i = 0; i < CODE_LENGTH; i++) {
      const idx =
        typeof crypto !== "undefined" && crypto.getRandomValues
          ? crypto.getRandomValues(new Uint8Array(1))[0] % CODE_CHARS.length
          : Math.floor(Math.random() * CODE_CHARS.length);
      code += CODE_CHARS[idx];
    }
    return code;
  }

  /** Return current Unix-epoch ms timestamp. */
  function now() {
    return Date.now();
  }

  // ---------------------------------------------------------------------------
  // Tab Identity
  // ---------------------------------------------------------------------------

  /**
   * Every tab receives a unique ID persisted in sessionStorage so it survives
   * soft refreshes but not new tabs.
   */
  function getOrCreateTabId() {
    let id = sessionStorage.getItem("dnd-tab-id");
    if (!id) {
      id = uid();
      sessionStorage.setItem("dnd-tab-id", id);
    }
    return id;
  }

  const TAB_ID = getOrCreateTabId();

  // ---------------------------------------------------------------------------
  // Local Event Emitter
  // ---------------------------------------------------------------------------

  /**
   * Lightweight pub/sub so UI code can listen for multiplayer events without
   * touching BroadcastChannel directly.
   *
   *   Multiplayer.events.on("dice-roll", (payload, meta) => { ... });
   *   Multiplayer.events.off("dice-roll", handler);
   *   Multiplayer.events.once("state-sync", handler);
   */
  function createEventEmitter() {
    const listeners = {};

    function on(type, cb) {
      if (!listeners[type]) listeners[type] = [];
      listeners[type].push(cb);
    }

    function off(type, cb) {
      if (!listeners[type]) return;
      listeners[type] = listeners[type].filter((fn) => fn !== cb);
    }

    function once(type, cb) {
      const wrapper = function (...args) {
        off(type, wrapper);
        cb.apply(null, args);
      };
      on(type, wrapper);
    }

    function emit(type, ...args) {
      if (!listeners[type]) return;
      // Iterate over a copy so handlers can remove themselves safely.
      listeners[type].slice().forEach((fn) => {
        try {
          fn.apply(null, args);
        } catch (err) {
          console.error(`[Multiplayer] Error in "${type}" handler:`, err);
        }
      });
    }

    return { on, off, once, emit };
  }

  // ---------------------------------------------------------------------------
  // Core Session State (private)
  // ---------------------------------------------------------------------------

  let _channel = null; // BroadcastChannel instance
  let _sessionCode = null;
  let _sessionName = null;
  let _role = null; // "dm" | "player" | null
  let _playerName = null;
  let _characterData = null;
  let _maxPlayers = 8;

  /**
   * Authoritative player list maintained by the DM.
   * Map<tabId, { tabId, name, role, characterData, status, lastHeartbeat,
   *              joinedAt, delegatedTokens: Set }>
   */
  let _players = new Map();

  /** Full session state blob — DM is the source of truth. */
  let _sessionState = {
    initiative: [],
    combat: null,
    map: null,
    fog: null,
    tokens: [],
    custom: {},
  };

  /** Timers we need to clean up on disconnect. */
  let _heartbeatTimer = null;
  let _heartbeatCheckTimer = null;
  let _stateSyncTimer = null;
  let _autosaveTimer = null;
  let _dmPresenceTimer = null;

  /** BroadcastChannel message handlers keyed by type. */
  const _messageHandlers = {};

  /** The local event emitter instance. */
  const _events = createEventEmitter();

  // ---------------------------------------------------------------------------
  // BroadcastChannel Messaging
  // ---------------------------------------------------------------------------

  /**
   * Open (or reopen) a BroadcastChannel for the given session code.
   */
  function openChannel(code) {
    if (_channel) {
      _channel.close();
    }
    _channel = new BroadcastChannel(CHANNEL_PREFIX + code);
    _channel.onmessage = function (event) {
      handleIncomingMessage(event.data);
    };
  }

  /**
   * Build and broadcast a message to the channel.
   */
  function broadcast(type, payload) {
    if (!_channel) {
      console.warn("[Multiplayer] Cannot broadcast — no active channel.");
      return;
    }
    const msg = {
      type: type,
      senderId: TAB_ID,
      senderName: _playerName || "Unknown",
      senderRole: _role || "unknown",
      timestamp: now(),
      payload: payload || {},
    };
    _channel.postMessage(msg);
    // Also emit locally so the sending tab sees its own messages in the event
    // bus (BroadcastChannel does NOT deliver to the sender).
    _events.emit(type, msg.payload, msg);
  }

  /**
   * Register a handler for a specific message type (on the BroadcastChannel).
   */
  function on(type, callback) {
    if (!_messageHandlers[type]) _messageHandlers[type] = [];
    _messageHandlers[type].push(callback);
  }

  /**
   * Remove a handler for a specific message type.
   */
  function off(type, callback) {
    if (!_messageHandlers[type]) return;
    _messageHandlers[type] = _messageHandlers[type].filter(
      (fn) => fn !== callback
    );
  }

  /**
   * Internal dispatcher — route incoming messages to registered handlers and
   * to the local event emitter so UI code receives them.
   */
  function handleIncomingMessage(msg) {
    if (!msg || !msg.type) return;

    // Ignore our own messages (BroadcastChannel shouldn't deliver them, but
    // guard anyway).
    if (msg.senderId === TAB_ID) return;

    // Route to channel-level handlers.
    const handlers = _messageHandlers[msg.type];
    if (handlers) {
      handlers.slice().forEach(function (fn) {
        try {
          fn(msg);
        } catch (err) {
          console.error(
            `[Multiplayer] Error in handler for "${msg.type}":`,
            err
          );
        }
      });
    }

    // Also emit on the local event bus for UI listeners.
    _events.emit(msg.type, msg.payload, msg);
  }

  // ---------------------------------------------------------------------------
  // Built-in message handlers (registered once when session is active)
  // ---------------------------------------------------------------------------

  function registerCoreHandlers() {
    // Clear any existing handlers to prevent duplicates on rejoin/resume.
    Object.keys(_messageHandlers).forEach(function (key) {
      delete _messageHandlers[key];
    });

    // --- DM-side handlers ---------------------------------------------------

    on("join-request", function (msg) {
      if (_role !== "dm") return;

      const { playerName, characterData } = msg.payload;

      // Check capacity.
      const activePlayers = Array.from(_players.values()).filter(
        (p) => p.role === "player" && p.status === "connected"
      );
      if (activePlayers.length >= _maxPlayers) {
        broadcast("join-rejected", {
          targetTabId: msg.senderId,
          reason: "Session is full.",
        });
        return;
      }

      // Accept.
      _players.set(msg.senderId, {
        tabId: msg.senderId,
        name: playerName,
        role: "player",
        characterData: characterData || null,
        status: "connected",
        lastHeartbeat: now(),
        joinedAt: now(),
        delegatedTokens: [],
      });

      broadcast("join-accepted", {
        targetTabId: msg.senderId,
        players: serializePlayers(),
        sessionState: _sessionState,
        sessionName: _sessionName,
      });

      _events.emit("player-joined", {
        tabId: msg.senderId,
        name: playerName,
      });
    });

    on("heartbeat", function (msg) {
      if (_role !== "dm") return;
      const player = _players.get(msg.senderId);
      if (player) {
        player.lastHeartbeat = now();
        if (player.status === "disconnected") {
          player.status = "connected";
          _events.emit("player-reconnected", {
            tabId: msg.senderId,
            name: player.name,
          });
        }
      }
    });

    on("player-left", function (msg) {
      if (_role !== "dm") return;
      const player = _players.get(msg.senderId);
      if (player) {
        player.status = "disconnected";
        _events.emit("player-left", {
          tabId: msg.senderId,
          name: player.name,
        });
      }
    });

    // --- Player-side handlers -----------------------------------------------

    on("join-accepted", function (msg) {
      if (msg.payload.targetTabId !== TAB_ID) return;
      _role = "player";
      sessionStorage.setItem("dnd-role", "player");

      // Rebuild player list from DM.
      rebuildPlayersFromArray(msg.payload.players);
      _sessionState = msg.payload.sessionState || _sessionState;
      _sessionName = msg.payload.sessionName || _sessionName;

      _events.emit("session-joined", {
        code: _sessionCode,
        sessionName: _sessionName,
      });
    });

    on("join-rejected", function (msg) {
      if (msg.payload.targetTabId !== TAB_ID) return;
      _events.emit("join-rejected", { reason: msg.payload.reason });
      cleanup();
    });

    on("state-sync", function (msg) {
      if (_role === "dm") return; // DM is the authority.
      _sessionState = msg.payload.sessionState || _sessionState;
      rebuildPlayersFromArray(msg.payload.players);
    });

    on("kick-player", function (msg) {
      if (msg.payload.targetTabId !== TAB_ID) return;
      _events.emit("kicked", { reason: msg.payload.reason || "No reason." });
      cleanup();
    });

    on("session-end", function () {
      _events.emit("session-ended", {});
      cleanup();
    });

    on("dm-delegate", function (msg) {
      if (msg.payload.targetTabId !== TAB_ID) return;
      // DM has delegated a token to us.
      _events.emit("delegation-received", {
        tokenId: msg.payload.tokenId,
      });
    });

    on("dm-promotion", function (msg) {
      // Only the promoted player becomes DM; others just acknowledge.
      if (msg.payload.newDMTabId === TAB_ID) {
        _role = "dm";
        sessionStorage.setItem("dnd-role", "dm");
        _events.emit("promoted-to-dm", {});
        startDMTimers();
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Player list serialization helpers
  // ---------------------------------------------------------------------------

  function serializePlayers() {
    const arr = [];
    _players.forEach(function (p) {
      arr.push({
        tabId: p.tabId,
        name: p.name,
        role: p.role,
        characterData: p.characterData,
        status: p.status,
        lastHeartbeat: p.lastHeartbeat,
        joinedAt: p.joinedAt,
        delegatedTokens: Array.isArray(p.delegatedTokens)
          ? p.delegatedTokens
          : [],
      });
    });
    return arr;
  }

  function rebuildPlayersFromArray(arr) {
    if (!Array.isArray(arr)) return;
    _players.clear();
    arr.forEach(function (p) {
      _players.set(p.tabId, {
        tabId: p.tabId,
        name: p.name,
        role: p.role,
        characterData: p.characterData || null,
        status: p.status || "connected",
        lastHeartbeat: p.lastHeartbeat || now(),
        joinedAt: p.joinedAt || now(),
        delegatedTokens: Array.isArray(p.delegatedTokens)
          ? p.delegatedTokens
          : [],
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Heartbeat system
  // ---------------------------------------------------------------------------

  function startHeartbeat() {
    stopHeartbeat();
    _heartbeatTimer = setInterval(function () {
      broadcast("heartbeat", { tabId: TAB_ID });
    }, HEARTBEAT_INTERVAL_MS);
  }

  function stopHeartbeat() {
    if (_heartbeatTimer) {
      clearInterval(_heartbeatTimer);
      _heartbeatTimer = null;
    }
  }

  /**
   * DM-only: periodically check for players that missed heartbeats.
   */
  function startHeartbeatCheck() {
    stopHeartbeatCheck();
    _heartbeatCheckTimer = setInterval(function () {
      const cutoff = now() - HEARTBEAT_TIMEOUT_MS;
      _players.forEach(function (p) {
        if (p.tabId === TAB_ID) return; // don't check self
        if (p.status === "connected" && p.lastHeartbeat < cutoff) {
          p.status = "disconnected";
          _events.emit("player-disconnected", {
            tabId: p.tabId,
            name: p.name,
          });
        }
      });
    }, HEARTBEAT_TIMEOUT_MS);
  }

  function stopHeartbeatCheck() {
    if (_heartbeatCheckTimer) {
      clearInterval(_heartbeatCheckTimer);
      _heartbeatCheckTimer = null;
    }
  }

  // ---------------------------------------------------------------------------
  // State sync (DM broadcasts periodically)
  // ---------------------------------------------------------------------------

  function startStateSync() {
    stopStateSync();
    _stateSyncTimer = setInterval(function () {
      if (_role !== "dm") return;
      broadcast("state-sync", {
        sessionState: _sessionState,
        players: serializePlayers(),
      });
    }, STATE_SYNC_INTERVAL_MS);
  }

  function stopStateSync() {
    if (_stateSyncTimer) {
      clearInterval(_stateSyncTimer);
      _stateSyncTimer = null;
    }
  }

  // ---------------------------------------------------------------------------
  // Autosave (DM only)
  // ---------------------------------------------------------------------------

  function startAutosave() {
    stopAutosave();
    _autosaveTimer = setInterval(function () {
      if (_role !== "dm") return;
      saveSession();
    }, AUTOSAVE_INTERVAL_MS);
  }

  function stopAutosave() {
    if (_autosaveTimer) {
      clearInterval(_autosaveTimer);
      _autosaveTimer = null;
    }
  }

  function saveSession() {
    if (!_sessionCode) return;
    const data = {
      code: _sessionCode,
      name: _sessionName,
      maxPlayers: _maxPlayers,
      dmTabId: TAB_ID,
      dmName: _playerName,
      players: serializePlayers(),
      sessionState: _sessionState,
      savedAt: now(),
    };
    try {
      localStorage.setItem(
        SESSION_PREFIX + _sessionCode,
        JSON.stringify(data)
      );
    } catch (err) {
      console.error("[Multiplayer] Autosave failed:", err);
    }
  }

  // ---------------------------------------------------------------------------
  // DM timers convenience
  // ---------------------------------------------------------------------------

  function startDMTimers() {
    startHeartbeat();
    startHeartbeatCheck();
    startStateSync();
    startAutosave();
  }

  function stopAllTimers() {
    stopHeartbeat();
    stopHeartbeatCheck();
    stopStateSync();
    stopAutosave();
    if (_dmPresenceTimer) {
      clearInterval(_dmPresenceTimer);
      _dmPresenceTimer = null;
    }
  }

  // ---------------------------------------------------------------------------
  // Cleanup
  // ---------------------------------------------------------------------------

  function cleanup() {
    stopAllTimers();
    if (_channel) {
      _channel.close();
      _channel = null;
    }
    _sessionCode = null;
    _sessionName = null;
    _role = null;
    _players.clear();
    _sessionState = {
      initiative: [],
      combat: null,
      map: null,
      fog: null,
      tokens: [],
      custom: {},
    };
    // Clear channel handlers.
    Object.keys(_messageHandlers).forEach(function (key) {
      delete _messageHandlers[key];
    });
    sessionStorage.removeItem("dnd-role");
    sessionStorage.removeItem("dnd-session-code");
  }

  // ---------------------------------------------------------------------------
  // DM disconnect detection (player-side)
  // ---------------------------------------------------------------------------

  /**
   * If a player hasn't received a state-sync from the DM in a while, the DM
   * is likely gone. The oldest connected player can be promoted.
   */
  let _lastDMSync = 0;

  function monitorDMPresence() {
    // Clear any existing monitor to prevent duplicates.
    if (_dmPresenceTimer) {
      clearInterval(_dmPresenceTimer);
      _dmPresenceTimer = null;
    }

    // Players listen for state-sync to know DM is alive.
    _events.on("state-sync", function () {
      _lastDMSync = now();
    });

    // Check periodically.
    _dmPresenceTimer = setInterval(function () {
      if (_role !== "player" || !_sessionCode) {
        clearInterval(_dmPresenceTimer);
        _dmPresenceTimer = null;
        return;
      }
      // If we've been connected for a while and DM hasn't synced...
      if (_lastDMSync > 0 && now() - _lastDMSync > HEARTBEAT_TIMEOUT_MS * 3) {
        _events.emit("dm-disconnected", {});
        // Attempt auto-promotion: the player with the lowest joinedAt takes over.
        attemptDMPromotion();
        _lastDMSync = now(); // reset so we don't spam
      }
    }, HEARTBEAT_INTERVAL_MS * 2);
  }

  function attemptDMPromotion() {
    // Find oldest connected player.
    let oldest = null;
    _players.forEach(function (p) {
      if (p.role !== "player" || p.status !== "connected") return;
      if (!oldest || p.joinedAt < oldest.joinedAt) {
        oldest = p;
      }
    });
    if (oldest && oldest.tabId === TAB_ID) {
      // We are the oldest — self-promote and notify everyone.
      _role = "dm";
      sessionStorage.setItem("dnd-role", "dm");
      broadcast("dm-promotion", { newDMTabId: TAB_ID, newDMName: _playerName });
      _events.emit("promoted-to-dm", {});
      startDMTimers();
    }
  }

  // ---------------------------------------------------------------------------
  // Handle page unload — notify peers before the tab closes.
  // ---------------------------------------------------------------------------

  function registerUnloadHandler() {
    window.addEventListener("beforeunload", function () {
      if (_channel && _sessionCode) {
        if (_role === "dm") {
          // Optionally save before leaving.
          saveSession();
        }
        broadcast("player-left", { tabId: TAB_ID, name: _playerName });
      }
    });
  }

  registerUnloadHandler();

  // ---------------------------------------------------------------------------
  // SessionManager — Public API
  // ---------------------------------------------------------------------------

  const SessionManager = {
    /**
     * DM creates a new session.
     *
     * @param {string} sessionName — Human-readable name (e.g. "Curse of Strahd Night 12").
     * @param {number} [maxPlayers=8] — Max number of players (excluding DM).
     * @returns {{ code: string }} — The generated session code.
     */
    createSession: function (sessionName, maxPlayers) {
      if (_sessionCode) {
        console.warn("[Multiplayer] Already in a session. Leave first.");
        return null;
      }

      // Generate a unique code (guard against collisions).
      let code = generateCode();
      let attempts = 0;
      while (localStorage.getItem(SESSION_PREFIX + code) && attempts < 50) {
        code = generateCode();
        attempts++;
      }

      _sessionCode = code;
      _sessionName = sessionName || "Unnamed Session";
      _role = "dm";
      _playerName = _playerName || "Dungeon Master";
      _maxPlayers = maxPlayers || 8;

      sessionStorage.setItem("dnd-role", "dm");
      sessionStorage.setItem("dnd-session-code", code);

      // Add DM to player list.
      _players.set(TAB_ID, {
        tabId: TAB_ID,
        name: _playerName,
        role: "dm",
        characterData: null,
        status: "connected",
        lastHeartbeat: now(),
        joinedAt: now(),
        delegatedTokens: [],
      });

      openChannel(code);
      registerCoreHandlers();
      startDMTimers();

      // Initial save.
      saveSession();

      _events.emit("session-created", { code: code, name: _sessionName });

      return { code: code };
    },

    /**
     * Player joins an existing session by code.
     *
     * @param {string} code — 6-char session code.
     * @param {string} playerName — Display name.
     * @param {object} [characterData] — Serialised character sheet.
     * @returns {Promise<void>} — Resolves when accepted, rejects on failure.
     */
    joinSession: function (code, playerName, characterData) {
      return new Promise(function (resolve, reject) {
        if (_sessionCode) {
          reject(new Error("Already in a session. Leave first."));
          return;
        }

        code = (code || "").toUpperCase().trim();
        if (code.length !== CODE_LENGTH) {
          reject(new Error("Invalid session code."));
          return;
        }

        _sessionCode = code;
        _playerName = playerName || "Adventurer";
        _characterData = characterData || null;
        _role = null; // not yet confirmed

        sessionStorage.setItem("dnd-session-code", code);

        openChannel(code);
        registerCoreHandlers();

        // Set up a one-time listener for acceptance/rejection.
        let settled = false;

        const acceptHandler = function () {
          if (settled) return;
          settled = true;
          _events.off("session-joined", acceptHandler);
          _events.off("join-rejected", rejectHandler);
          startHeartbeat();
          _lastDMSync = now();
          monitorDMPresence();
          resolve();
        };

        const rejectHandler = function (payload) {
          if (settled) return;
          settled = true;
          _events.off("session-joined", acceptHandler);
          _events.off("join-rejected", rejectHandler);
          reject(new Error(payload.reason || "Join rejected."));
        };

        _events.on("session-joined", acceptHandler);
        _events.on("join-rejected", rejectHandler);

        // Timeout after 15 seconds.
        setTimeout(function () {
          if (!settled) {
            settled = true;
            _events.off("session-joined", acceptHandler);
            _events.off("join-rejected", rejectHandler);
            cleanup();
            reject(
              new Error("Join timed out — DM may not be connected.")
            );
          }
        }, 15000);

        // Send the join request.
        broadcast("join-request", {
          playerName: _playerName,
          characterData: _characterData,
        });
      });
    },

    /**
     * Leave the current session gracefully.
     */
    leaveSession: function () {
      if (!_sessionCode) return;
      broadcast("player-left", { tabId: TAB_ID, name: _playerName });
      if (_role === "dm") {
        saveSession();
      }
      cleanup();
      _events.emit("session-left", {});
    },

    /**
     * DM ends the session for everyone.
     */
    endSession: function () {
      if (_role !== "dm") {
        console.warn("[Multiplayer] Only the DM can end the session.");
        return;
      }
      broadcast("session-end", {});
      _events.emit("session-ended", {});
      cleanup();
    },

    /**
     * DM resumes a previously saved session.
     *
     * @param {string} code — Session code to resume.
     * @returns {{ code: string }|null}
     */
    resumeSession: function (code) {
      code = (code || "").toUpperCase().trim();
      const raw = localStorage.getItem(SESSION_PREFIX + code);
      if (!raw) {
        console.warn("[Multiplayer] No saved session found for code:", code);
        return null;
      }

      let data;
      try {
        data = JSON.parse(raw);
      } catch (e) {
        console.error("[Multiplayer] Corrupt session data for", code);
        return null;
      }

      if (_sessionCode) {
        this.leaveSession();
      }

      _sessionCode = code;
      _sessionName = data.name || "Unnamed Session";
      _role = "dm";
      _playerName = data.dmName || _playerName || "Dungeon Master";
      _maxPlayers = data.maxPlayers || 8;
      _sessionState = data.sessionState || _sessionState;

      sessionStorage.setItem("dnd-role", "dm");
      sessionStorage.setItem("dnd-session-code", code);

      // Restore player list but mark all players as disconnected until they
      // reconnect via heartbeat.
      if (Array.isArray(data.players)) {
        data.players.forEach(function (p) {
          p.status = p.tabId === TAB_ID ? "connected" : "disconnected";
          p.lastHeartbeat = p.tabId === TAB_ID ? now() : 0;
        });
        rebuildPlayersFromArray(data.players);
      }

      // Update DM entry.
      _players.set(TAB_ID, {
        tabId: TAB_ID,
        name: _playerName,
        role: "dm",
        characterData: null,
        status: "connected",
        lastHeartbeat: now(),
        joinedAt: now(),
        delegatedTokens: [],
      });

      openChannel(code);
      registerCoreHandlers();
      startDMTimers();

      // Broadcast state immediately so reconnecting players get it.
      broadcast("state-sync", {
        sessionState: _sessionState,
        players: serializePlayers(),
      });

      _events.emit("session-resumed", { code: code, name: _sessionName });

      return { code: code };
    },

    /**
     * DM kicks a player.
     *
     * @param {string} tabId — The tab ID of the player to kick.
     * @param {string} [reason] — Optional reason.
     */
    kickPlayer: function (tabId, reason) {
      if (_role !== "dm") {
        console.warn("[Multiplayer] Only the DM can kick players.");
        return;
      }
      broadcast("kick-player", {
        targetTabId: tabId,
        reason: reason || "Removed by DM.",
      });
      const player = _players.get(tabId);
      if (player) {
        _events.emit("player-kicked", {
          tabId: tabId,
          name: player.name,
          reason: reason,
        });
        _players.delete(tabId);
      }
    },

    /**
     * DM delegates control of a token/NPC to a player.
     *
     * @param {string} tokenId — ID of the token on the map.
     * @param {string} tabId — The tab ID of the player receiving control.
     */
    delegateControl: function (tokenId, tabId) {
      if (_role !== "dm") {
        console.warn("[Multiplayer] Only the DM can delegate control.");
        return;
      }
      const player = _players.get(tabId);
      if (player) {
        if (!player.delegatedTokens.includes(tokenId)) {
          player.delegatedTokens.push(tokenId);
        }
      }
      broadcast("dm-delegate", { tokenId: tokenId, targetTabId: tabId });
    },

    /**
     * DM revokes delegated control of a token from a player.
     *
     * @param {string} tokenId
     * @param {string} tabId
     */
    revokeControl: function (tokenId, tabId) {
      if (_role !== "dm") return;
      const player = _players.get(tabId);
      if (player) {
        player.delegatedTokens = player.delegatedTokens.filter(
          (t) => t !== tokenId
        );
      }
      broadcast("dm-delegate", {
        tokenId: tokenId,
        targetTabId: tabId,
        revoked: true,
      });
    },
  };

  // ---------------------------------------------------------------------------
  // Permission Helpers
  // ---------------------------------------------------------------------------

  function isDM() {
    return _role === "dm";
  }

  function isPlayer() {
    return _role === "player";
  }

  /**
   * Returns true if the current tab may move/act with the given token.
   * DM always can; players can if delegated.
   */
  function canControl(tokenId) {
    if (_role === "dm") return true;
    const me = _players.get(TAB_ID);
    if (!me) return false;
    return (
      Array.isArray(me.delegatedTokens) &&
      me.delegatedTokens.includes(tokenId)
    );
  }

  function getMyTabId() {
    return TAB_ID;
  }

  function getMyRole() {
    return _role;
  }

  function getMyName() {
    return _playerName;
  }

  function getSessionCode() {
    return _sessionCode;
  }

  /**
   * Returns an array of connected players (copies, not references).
   */
  function getPlayers() {
    const out = [];
    _players.forEach(function (p) {
      out.push({
        tabId: p.tabId,
        name: p.name,
        role: p.role,
        status: p.status,
        characterData: p.characterData,
        delegatedTokens: p.delegatedTokens.slice(),
      });
    });
    return out;
  }

  /**
   * Returns a deep-ish copy of the current session state.
   */
  function getSessionState() {
    try {
      return JSON.parse(JSON.stringify(_sessionState));
    } catch (e) {
      return _sessionState;
    }
  }

  /**
   * DM can update parts of the session state and it will auto-propagate.
   *
   * @param {string} key — Top-level key in session state (e.g. "combat").
   * @param {*} value — New value.
   */
  function updateSessionState(key, value) {
    _sessionState[key] = value;
    if (_role === "dm") {
      // Broadcast immediately for important updates.
      broadcast("state-sync", {
        sessionState: _sessionState,
        players: serializePlayers(),
      });
    }
  }

  /**
   * Set the player name (useful before joining).
   */
  function setMyName(name) {
    _playerName = name;
    const me = _players.get(TAB_ID);
    if (me) me.name = name;
  }

  // ---------------------------------------------------------------------------
  // Saved Sessions
  // ---------------------------------------------------------------------------

  /**
   * Returns a list of all saved sessions that could be resumed.
   *
   * @returns {Array<{ code, name, savedAt, playerCount }>}
   */
  function getSavedSessions() {
    const sessions = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(SESSION_PREFIX)) continue;
      try {
        const data = JSON.parse(localStorage.getItem(key));
        sessions.push({
          code: data.code,
          name: data.name,
          savedAt: data.savedAt,
          playerCount: Array.isArray(data.players) ? data.players.length : 0,
        });
      } catch (e) {
        // Skip corrupt entries.
      }
    }
    // Sort newest first.
    sessions.sort(function (a, b) {
      return (b.savedAt || 0) - (a.savedAt || 0);
    });
    return sessions;
  }

  /**
   * Delete a saved session from localStorage.
   *
   * @param {string} code
   */
  function deleteSavedSession(code) {
    localStorage.removeItem(SESSION_PREFIX + (code || "").toUpperCase().trim());
  }

  // ---------------------------------------------------------------------------
  // Expose window.Multiplayer
  // ---------------------------------------------------------------------------

  window.Multiplayer = Object.freeze({
    // Session management
    createSession: SessionManager.createSession.bind(SessionManager),
    joinSession: SessionManager.joinSession.bind(SessionManager),
    leaveSession: SessionManager.leaveSession.bind(SessionManager),
    endSession: SessionManager.endSession.bind(SessionManager),
    resumeSession: SessionManager.resumeSession.bind(SessionManager),
    kickPlayer: SessionManager.kickPlayer.bind(SessionManager),
    delegateControl: SessionManager.delegateControl.bind(SessionManager),
    revokeControl: SessionManager.revokeControl.bind(SessionManager),

    // Messaging
    broadcast: broadcast,
    on: on,
    off: off,

    // Permission helpers
    isDM: isDM,
    isPlayer: isPlayer,
    canControl: canControl,
    getMyTabId: getMyTabId,
    getMyRole: getMyRole,
    getMyName: getMyName,
    getSessionCode: getSessionCode,
    getPlayers: getPlayers,
    getSessionState: getSessionState,
    updateSessionState: updateSessionState,
    setMyName: setMyName,

    // Saved sessions
    getSavedSessions: getSavedSessions,
    deleteSavedSession: deleteSavedSession,

    // Local event emitter for UI subscriptions
    events: _events,

    // Constants (useful for external code)
    MESSAGE_TYPES: MESSAGE_TYPES,
    HEARTBEAT_INTERVAL_MS: HEARTBEAT_INTERVAL_MS,
    HEARTBEAT_TIMEOUT_MS: HEARTBEAT_TIMEOUT_MS,
  });
})();
