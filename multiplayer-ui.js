// ============================================
//  D&D Online - Multiplayer UI Overlay System
//  Injected into every page when a session is active
//  Depends on: multiplayer.js (window.Multiplayer)
// ============================================

(function () {
    'use strict';

    // ------------------------------------------
    //  Session Detection
    // ------------------------------------------
    function getSession() {
        try {
            const raw = localStorage.getItem('mp_session');
            return raw ? JSON.parse(raw) : null;
        } catch { return null; }
    }

    const session = getSession();
    if (!session) return; // No active session — bail silently

    const mp = window.Multiplayer || null;
    const isDM = session.role === 'dm';
    let chatOpen = false;
    let playersOpen = false;
    let dmPanelOpen = false;
    let unreadCount = 0;
    let activeChannel = 'general';
    const channels = isDM
        ? [{ id: 'general', label: 'General' }]
        : [{ id: 'general', label: 'General' }, { id: 'whisper-dm', label: 'Whisper to DM' }];

    // ------------------------------------------
    //  Inject Styles
    // ------------------------------------------
    const styleEl = document.createElement('style');
    styleEl.textContent = `
/* ============================================
   Multiplayer Overlay — Injected Styles
   ============================================ */

/* ---------- Shared Tokens ---------- */
:root {
    --mp-gold: #c9a227;
    --mp-gold-dim: rgba(201, 162, 39, 0.35);
    --mp-gold-glow: rgba(201, 162, 39, 0.6);
    --mp-bg: rgba(20, 20, 24, 0.95);
    --mp-bg-light: rgba(35, 35, 42, 0.95);
    --mp-bg-input: rgba(0, 0, 0, 0.4);
    --mp-text: #e8e8e8;
    --mp-text-muted: #999;
    --mp-green: #27ae60;
    --mp-red: #e74c3c;
    --mp-purple: #9b59b6;
    --mp-purple-dim: rgba(155, 89, 182, 0.15);
    --mp-radius: 8px;
    --mp-transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --mp-z-bar: 9000;
    --mp-z-panel: 8999;
    --mp-z-toast: 9500;
    --mp-z-dm: 8998;
}

/* ---------- Session Status Bar ---------- */
#mp-status-bar {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 42px;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 16px;
    background: var(--mp-bg);
    border-bottom: 1px solid var(--mp-gold-dim);
    z-index: var(--mp-z-bar);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 0.85rem;
    color: var(--mp-text);
    box-shadow: 0 2px 12px rgba(0,0,0,0.5);
}
#mp-status-bar .mp-session-name {
    color: var(--mp-gold);
    font-weight: 700;
    letter-spacing: 0.03em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
}
#mp-status-bar .mp-session-code {
    background: var(--mp-bg-input);
    padding: 2px 8px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.8rem;
    color: var(--mp-text-muted);
    user-select: all;
}
#mp-status-bar .mp-role-badge {
    padding: 2px 10px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}
#mp-status-bar .mp-role-badge.dm {
    background: linear-gradient(135deg, #8b0000, #5c0000);
    color: #ffd700;
    border: 1px solid rgba(255,215,0,0.4);
}
#mp-status-bar .mp-role-badge.player {
    background: linear-gradient(135deg, #2a2a5a, #4a4a8a);
    color: #a8c4ff;
    border: 1px solid rgba(168,196,255,0.3);
}
#mp-status-bar .mp-player-count {
    color: var(--mp-text-muted);
    font-size: 0.8rem;
}
#mp-status-bar .mp-connection-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    transition: background var(--mp-transition);
}
#mp-status-bar .mp-connection-dot.connected { background: var(--mp-green); box-shadow: 0 0 6px var(--mp-green); }
#mp-status-bar .mp-connection-dot.disconnected { background: var(--mp-red); box-shadow: 0 0 6px var(--mp-red); }
#mp-status-bar .mp-bar-spacer { flex: 1; }
#mp-status-bar .mp-leave-btn {
    padding: 4px 14px;
    border: 1px solid var(--mp-red);
    border-radius: 4px;
    background: transparent;
    color: var(--mp-red);
    font-size: 0.78rem;
    font-weight: 600;
    cursor: pointer;
    transition: all var(--mp-transition);
}
#mp-status-bar .mp-leave-btn:hover {
    background: var(--mp-red);
    color: #fff;
}

/* Push page content down so it isn't hidden behind the bar */
body.mp-active { padding-top: 46px !important; }

/* ---------- Chat Toggle Button ---------- */
#mp-chat-toggle {
    position: fixed;
    right: 16px;
    top: 56px;
    width: 44px; height: 44px;
    border-radius: 50%;
    background: var(--mp-bg);
    border: 1px solid var(--mp-gold-dim);
    color: var(--mp-gold);
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--mp-z-panel);
    transition: all var(--mp-transition);
    box-shadow: 0 2px 10px rgba(0,0,0,0.4);
}
#mp-chat-toggle:hover {
    border-color: var(--mp-gold);
    box-shadow: 0 0 14px var(--mp-gold-glow);
}
#mp-chat-toggle .mp-unread-badge {
    position: absolute;
    top: -4px; right: -4px;
    min-width: 18px; height: 18px;
    border-radius: 9px;
    background: var(--mp-red);
    color: #fff;
    font-size: 0.65rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
    opacity: 0;
    transform: scale(0);
    transition: all var(--mp-transition);
}
#mp-chat-toggle .mp-unread-badge.visible {
    opacity: 1;
    transform: scale(1);
}

/* ---------- Chat Panel ---------- */
#mp-chat-panel {
    position: fixed;
    top: 42px; right: 0;
    width: 360px;
    bottom: 0;
    background: var(--mp-bg);
    border-left: 1px solid var(--mp-gold-dim);
    z-index: var(--mp-z-panel);
    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform var(--mp-transition);
    box-shadow: -4px 0 20px rgba(0,0,0,0.5);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#mp-chat-panel.open { transform: translateX(0); }

/* Channel tabs */
#mp-chat-panel .mp-channel-tabs {
    display: flex;
    border-bottom: 1px solid var(--mp-gold-dim);
    flex-shrink: 0;
    overflow-x: auto;
}
#mp-chat-panel .mp-channel-tab {
    padding: 10px 16px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--mp-text-muted);
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    white-space: nowrap;
    transition: all var(--mp-transition);
}
#mp-chat-panel .mp-channel-tab:hover { color: var(--mp-text); }
#mp-chat-panel .mp-channel-tab.active {
    color: var(--mp-gold);
    border-bottom-color: var(--mp-gold);
}

/* Messages area */
#mp-chat-panel .mp-messages {
    flex: 1;
    overflow-y: auto;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
#mp-chat-panel .mp-messages::-webkit-scrollbar { width: 6px; }
#mp-chat-panel .mp-messages::-webkit-scrollbar-track { background: transparent; }
#mp-chat-panel .mp-messages::-webkit-scrollbar-thumb { background: var(--mp-gold-dim); border-radius: 3px; }

/* Message bubbles */
.mp-msg {
    max-width: 85%;
    padding: 8px 12px;
    border-radius: var(--mp-radius);
    font-size: 0.85rem;
    line-height: 1.45;
    word-break: break-word;
    animation: mp-msg-in 0.25s ease-out;
}
@keyframes mp-msg-in {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
}
.mp-msg .mp-msg-sender {
    font-weight: 700;
    font-size: 0.78rem;
    margin-bottom: 2px;
    color: var(--mp-gold);
}
.mp-msg .mp-msg-time {
    font-size: 0.65rem;
    color: var(--mp-text-muted);
    margin-left: 6px;
    font-weight: 400;
}
.mp-msg .mp-msg-text { color: var(--mp-text); }

/* Own messages */
.mp-msg.mp-own {
    align-self: flex-end;
    background: rgba(74, 74, 138, 0.35);
    border: 1px solid rgba(74, 74, 138, 0.4);
}
.mp-msg.mp-own .mp-msg-sender { color: #a8c4ff; }

/* Others' messages */
.mp-msg.mp-other {
    align-self: flex-start;
    background: var(--mp-bg-light);
    border: 1px solid rgba(255,255,255,0.06);
}

/* Whisper messages */
.mp-msg.mp-whisper {
    background: var(--mp-purple-dim);
    border: 1px solid rgba(155,89,182,0.3);
    font-style: italic;
}
.mp-msg.mp-whisper .mp-msg-sender { color: var(--mp-purple); }
.mp-msg.mp-whisper::before {
    content: '\\1F512 ';
    font-style: normal;
    font-size: 0.7rem;
}

/* System messages */
.mp-msg.mp-system {
    align-self: center;
    max-width: 90%;
    text-align: center;
    background: transparent;
    border: none;
    color: var(--mp-text-muted);
    font-size: 0.75rem;
    font-style: italic;
    padding: 4px 0;
}

/* Chat input area */
#mp-chat-panel .mp-chat-input-area {
    display: flex;
    gap: 8px;
    padding: 10px 12px;
    border-top: 1px solid var(--mp-gold-dim);
    background: rgba(15,15,18,0.6);
    flex-shrink: 0;
}
#mp-chat-panel .mp-chat-input {
    flex: 1;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid var(--mp-gold-dim);
    background: var(--mp-bg-input);
    color: var(--mp-text);
    font-size: 0.85rem;
    outline: none;
    transition: border-color var(--mp-transition);
}
#mp-chat-panel .mp-chat-input:focus { border-color: var(--mp-gold); }
#mp-chat-panel .mp-chat-input::placeholder { color: var(--mp-text-muted); }
#mp-chat-panel .mp-chat-send-btn {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    background: linear-gradient(135deg, var(--mp-gold), #a08020);
    color: #1a1a2e;
    font-weight: 700;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all var(--mp-transition);
    white-space: nowrap;
}
#mp-chat-panel .mp-chat-send-btn:hover {
    box-shadow: 0 0 12px var(--mp-gold-glow);
    transform: translateY(-1px);
}

/* ---------- Players Toggle Button ---------- */
#mp-players-toggle {
    position: fixed;
    left: 16px;
    top: 56px;
    width: 44px; height: 44px;
    border-radius: 50%;
    background: var(--mp-bg);
    border: 1px solid var(--mp-gold-dim);
    color: var(--mp-gold);
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--mp-z-panel);
    transition: all var(--mp-transition);
    box-shadow: 0 2px 10px rgba(0,0,0,0.4);
}
#mp-players-toggle:hover {
    border-color: var(--mp-gold);
    box-shadow: 0 0 14px var(--mp-gold-glow);
}

/* ---------- Players Panel ---------- */
#mp-players-panel {
    position: fixed;
    top: 42px; left: 0;
    width: 280px;
    bottom: 0;
    background: var(--mp-bg);
    border-right: 1px solid var(--mp-gold-dim);
    z-index: var(--mp-z-panel);
    display: flex;
    flex-direction: column;
    transform: translateX(-100%);
    transition: transform var(--mp-transition);
    box-shadow: 4px 0 20px rgba(0,0,0,0.5);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#mp-players-panel.open { transform: translateX(0); }

#mp-players-panel .mp-panel-header {
    padding: 14px 16px;
    border-bottom: 1px solid var(--mp-gold-dim);
    color: var(--mp-gold);
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.03em;
    flex-shrink: 0;
}
#mp-players-panel .mp-player-list {
    flex: 1;
    overflow-y: auto;
    padding: 8px;
}
.mp-player-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: var(--mp-radius);
    background: var(--mp-bg-light);
    border: 1px solid rgba(255,255,255,0.05);
    margin-bottom: 6px;
    transition: all var(--mp-transition);
    cursor: default;
}
.mp-player-card:hover { border-color: var(--mp-gold-dim); }
.mp-player-card .mp-player-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
}
.mp-player-card .mp-player-dot.online { background: var(--mp-green); box-shadow: 0 0 5px var(--mp-green); }
.mp-player-card .mp-player-dot.offline { background: var(--mp-red); box-shadow: 0 0 5px var(--mp-red); }
.mp-player-card .mp-player-info { flex: 1; min-width: 0; }
.mp-player-card .mp-player-name {
    font-weight: 700;
    font-size: 0.85rem;
    color: var(--mp-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mp-player-card .mp-player-detail {
    font-size: 0.72rem;
    color: var(--mp-text-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mp-player-card .mp-player-actions { display: flex; gap: 4px; flex-shrink: 0; }
.mp-player-card .mp-kick-btn {
    padding: 3px 8px;
    border: 1px solid var(--mp-red);
    border-radius: 4px;
    background: transparent;
    color: var(--mp-red);
    font-size: 0.68rem;
    font-weight: 600;
    cursor: pointer;
    transition: all var(--mp-transition);
}
.mp-player-card .mp-kick-btn:hover { background: var(--mp-red); color: #fff; }
.mp-player-card .mp-whisper-btn {
    padding: 3px 8px;
    border: 1px solid var(--mp-purple);
    border-radius: 4px;
    background: transparent;
    color: var(--mp-purple);
    font-size: 0.68rem;
    font-weight: 600;
    cursor: pointer;
    transition: all var(--mp-transition);
}
.mp-player-card .mp-whisper-btn:hover { background: var(--mp-purple); color: #fff; }

/* ---------- DM Controls Panel ---------- */
#mp-dm-panel {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 240px;
    background: var(--mp-bg);
    border: 1px solid var(--mp-gold-dim);
    border-radius: var(--mp-radius);
    z-index: var(--mp-z-dm);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: 0 4px 20px rgba(0,0,0,0.6);
    transform: scale(0);
    transform-origin: bottom right;
    transition: transform var(--mp-transition);
    overflow: hidden;
}
#mp-dm-panel.open { transform: scale(1); }

#mp-dm-panel .mp-dm-header {
    padding: 10px 14px;
    background: linear-gradient(135deg, #8b0000, #5c0000);
    color: #ffd700;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#mp-dm-panel .mp-dm-close {
    background: none; border: none;
    color: #ffd700; font-size: 1.1rem;
    cursor: pointer; line-height: 1;
    opacity: 0.7; transition: opacity 0.2s;
}
#mp-dm-panel .mp-dm-close:hover { opacity: 1; }
#mp-dm-panel .mp-dm-body { padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; }

.mp-dm-toggle-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: 6px 0; font-size: 0.82rem; color: var(--mp-text);
}
.mp-dm-toggle-row label { cursor: pointer; }
.mp-dm-switch {
    position: relative; width: 36px; height: 20px;
    background: #444; border-radius: 10px;
    cursor: pointer; transition: background 0.2s;
    border: none; padding: 0;
}
.mp-dm-switch.active { background: var(--mp-gold); }
.mp-dm-switch::after {
    content: ''; position: absolute;
    top: 2px; left: 2px;
    width: 16px; height: 16px;
    border-radius: 50%; background: #fff;
    transition: transform 0.2s;
}
.mp-dm-switch.active::after { transform: translateX(16px); }

.mp-dm-btn {
    width: 100%; padding: 8px 12px;
    border: 1px solid var(--mp-gold-dim);
    border-radius: 6px;
    background: var(--mp-bg-light);
    color: var(--mp-text);
    font-size: 0.8rem; font-weight: 600;
    cursor: pointer; transition: all var(--mp-transition);
    text-align: center;
}
.mp-dm-btn:hover { border-color: var(--mp-gold); background: rgba(201,162,39,0.12); color: var(--mp-gold); }

#mp-dm-fab {
    position: fixed;
    bottom: 20px; right: 20px;
    width: 48px; height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #8b0000, #5c0000);
    border: 2px solid rgba(255,215,0,0.4);
    color: #ffd700;
    font-size: 1.3rem;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    z-index: var(--mp-z-dm);
    transition: all var(--mp-transition);
    box-shadow: 0 4px 16px rgba(139,0,0,0.5);
}
#mp-dm-fab:hover { transform: scale(1.1); box-shadow: 0 0 20px rgba(255,215,0,0.3); }

/* ---------- Toast Notifications ---------- */
#mp-toast-container {
    position: fixed;
    top: 54px; right: 16px;
    display: flex; flex-direction: column;
    gap: 8px;
    z-index: var(--mp-z-toast);
    pointer-events: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.mp-toast {
    padding: 10px 18px;
    border-radius: var(--mp-radius);
    background: var(--mp-bg);
    border: 1px solid var(--mp-gold-dim);
    color: var(--mp-text);
    font-size: 0.82rem;
    max-width: 320px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.5);
    pointer-events: auto;
    animation: mp-toast-in 0.35s ease-out forwards;
}
.mp-toast.mp-toast-out { animation: mp-toast-out 0.3s ease-in forwards; }
@keyframes mp-toast-in {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
}
@keyframes mp-toast-out {
    from { opacity: 1; transform: translateX(0); }
    to   { opacity: 0; transform: translateX(40px); }
}
.mp-toast.info { border-left: 3px solid #3498db; }
.mp-toast.success { border-left: 3px solid var(--mp-green); }
.mp-toast.warning { border-left: 3px solid var(--mp-gold); }
.mp-toast.error { border-left: 3px solid var(--mp-red); }
.mp-toast.whisper { border-left: 3px solid var(--mp-purple); }

/* ---------- Responsive ---------- */
@media (max-width: 600px) {
    #mp-chat-panel { width: 100vw; }
    #mp-players-panel { width: 100vw; }
    #mp-dm-panel { width: calc(100vw - 40px); right: 20px; left: 20px; }
}
`;
    document.head.appendChild(styleEl);

    // Mark body as multiplayer-active for the padding offset
    document.body.classList.add('mp-active');

    // ------------------------------------------
    //  Utility Helpers
    // ------------------------------------------
    function el(tag, attrs, ...children) {
        const e = document.createElement(tag);
        if (attrs) {
            for (const [k, v] of Object.entries(attrs)) {
                if (k === 'className') e.className = v;
                else if (k === 'dataset') Object.assign(e.dataset, v);
                else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
                else e.setAttribute(k, v);
            }
        }
        for (const c of children) {
            if (typeof c === 'string') e.appendChild(document.createTextNode(c));
            else if (c) e.appendChild(c);
        }
        return e;
    }

    function timeStr(date) {
        const d = date instanceof Date ? date : new Date(date);
        return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // ------------------------------------------
    //  Build: Status Bar
    // ------------------------------------------
    const statusBar = el('div', { id: 'mp-status-bar' },
        el('span', { className: 'mp-session-name' }, session.name || 'Session'),
        el('span', { className: 'mp-session-code' }, session.code || '------'),
        el('span', { className: `mp-role-badge ${isDM ? 'dm' : 'player'}` }, isDM ? 'DM' : 'Player'),
        el('span', { className: 'mp-player-count', id: 'mp-player-count' },
            `${session.playerCount || 1}/${session.maxPlayers || 4} players`),
        el('span', { className: 'mp-connection-dot connected', id: 'mp-connection-dot' }),
        el('span', { className: 'mp-bar-spacer' }),
        el('button', {
            className: 'mp-leave-btn',
            onClick: handleLeave
        }, isDM ? 'End Session' : 'Leave Session')
    );
    document.body.appendChild(statusBar);

    // ------------------------------------------
    //  Build: Toast Container
    // ------------------------------------------
    const toastContainer = el('div', { id: 'mp-toast-container' });
    document.body.appendChild(toastContainer);

    // ------------------------------------------
    //  Build: Chat Toggle + Panel
    // ------------------------------------------
    const unreadBadge = el('span', { className: 'mp-unread-badge', id: 'mp-unread-badge' }, '0');
    const chatToggle = el('button', { id: 'mp-chat-toggle', onClick: toggleChat, 'aria-label': 'Toggle chat' },
        el('span', null, '\u{1F4AC}'),
        unreadBadge
    );
    document.body.appendChild(chatToggle);

    // Chat panel
    const channelTabsContainer = el('div', { className: 'mp-channel-tabs' });
    const messagesContainer = el('div', { className: 'mp-messages', id: 'mp-messages' });
    const chatInput = el('input', {
        className: 'mp-chat-input',
        type: 'text',
        placeholder: 'Type a message...',
        'aria-label': 'Chat message input'
    });
    chatInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    const sendBtn = el('button', { className: 'mp-chat-send-btn', onClick: sendMessage }, 'Send');

    const chatPanel = el('div', { id: 'mp-chat-panel' },
        channelTabsContainer,
        messagesContainer,
        el('div', { className: 'mp-chat-input-area' }, chatInput, sendBtn)
    );
    document.body.appendChild(chatPanel);

    renderChannelTabs();

    // ------------------------------------------
    //  Build: Players Toggle + Panel
    // ------------------------------------------
    const playersToggle = el('button', { id: 'mp-players-toggle', onClick: togglePlayers, 'aria-label': 'Toggle player list' },
        el('span', null, '\u{1F464}')
    );
    document.body.appendChild(playersToggle);

    const playerListContainer = el('div', { className: 'mp-player-list', id: 'mp-player-list' });
    const playersPanel = el('div', { id: 'mp-players-panel' },
        el('div', { className: 'mp-panel-header' }, 'Connected Players'),
        playerListContainer
    );
    document.body.appendChild(playersPanel);

    // ------------------------------------------
    //  Build: DM Controls (DM only)
    // ------------------------------------------
    let dmPanel = null;
    let dmFab = null;
    let secretRollActive = false;

    if (isDM) {
        const secretRollSwitch = el('button', {
            className: 'mp-dm-switch',
            id: 'mp-secret-roll-switch',
            onClick: toggleSecretRoll,
            'aria-label': 'Toggle secret rolls'
        });

        dmPanel = el('div', { id: 'mp-dm-panel' },
            el('div', { className: 'mp-dm-header' },
                el('span', null, 'DM Controls'),
                el('button', { className: 'mp-dm-close', onClick: toggleDMPanel, 'aria-label': 'Close DM panel' }, '\u2715')
            ),
            el('div', { className: 'mp-dm-body' },
                el('div', { className: 'mp-dm-toggle-row' },
                    el('label', null, 'Secret Roll'),
                    secretRollSwitch
                ),
                el('button', { className: 'mp-dm-btn', onClick: handleSyncState }, '\u{1F504} Sync State'),
                el('button', { className: 'mp-dm-btn', onClick: handlePushMap }, '\u{1F5FA}\uFE0F Push Map'),
                el('button', { className: 'mp-dm-btn', onClick: handleRequestRolls }, '\u{1F3B2} Request Rolls'),
                el('button', { className: 'mp-dm-btn', onClick: handlePauseGame }, '\u23F8\uFE0F Pause Game')
            )
        );
        document.body.appendChild(dmPanel);

        dmFab = el('button', { id: 'mp-dm-fab', onClick: toggleDMPanel, 'aria-label': 'Open DM controls' },
            el('span', null, '\u2694\uFE0F')
        );
        document.body.appendChild(dmFab);
    }

    // ------------------------------------------
    //  Channel Management
    // ------------------------------------------
    function renderChannelTabs() {
        channelTabsContainer.innerHTML = '';
        channels.forEach(ch => {
            const tab = el('button', {
                className: `mp-channel-tab${ch.id === activeChannel ? ' active' : ''}`,
                dataset: { channel: ch.id },
                onClick: () => switchChannel(ch.id)
            }, ch.label);
            channelTabsContainer.appendChild(tab);
        });
    }

    function switchChannel(channelId) {
        activeChannel = channelId;
        renderChannelTabs();
        renderMessages();
    }

    function addWhisperChannel(playerId, playerName) {
        const chId = 'whisper-' + playerId;
        if (!channels.find(c => c.id === chId)) {
            channels.push({ id: chId, label: playerName });
            renderChannelTabs();
        }
        switchChannel(chId);
    }

    // ------------------------------------------
    //  Messages Store & Rendering
    // ------------------------------------------
    const messageStore = []; // { channel, sender, senderName, text, timestamp, type: 'normal'|'whisper'|'system', own }

    function renderMessages() {
        messagesContainer.innerHTML = '';
        const filtered = messageStore.filter(m => m.channel === activeChannel);
        filtered.forEach(m => {
            const classes = ['mp-msg'];
            if (m.type === 'system') classes.push('mp-system');
            else if (m.type === 'whisper') classes.push('mp-whisper');

            if (m.type !== 'system') {
                classes.push(m.own ? 'mp-own' : 'mp-other');
            }

            const msgEl = el('div', { className: classes.join(' ') });
            if (m.type !== 'system') {
                msgEl.appendChild(el('div', null,
                    el('span', { className: 'mp-msg-sender' }, m.senderName || 'Unknown'),
                    el('span', { className: 'mp-msg-time' }, timeStr(m.timestamp))
                ));
            }
            msgEl.appendChild(el('div', { className: 'mp-msg-text' }, m.text));
            messagesContainer.appendChild(msgEl);
        });
        scrollChatToBottom();
    }

    function scrollChatToBottom() {
        requestAnimationFrame(() => {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        });
    }

    // ------------------------------------------
    //  Chat Actions
    // ------------------------------------------
    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        const msg = {
            channel: activeChannel,
            sender: session.playerId,
            senderName: session.characterName || session.playerName || 'You',
            text,
            timestamp: new Date().toISOString(),
            type: activeChannel.startsWith('whisper') ? 'whisper' : 'normal',
            own: true
        };

        messageStore.push(msg);
        renderMessages();
        chatInput.value = '';

        // Send via multiplayer layer
        if (mp && mp.sendChatMessage) {
            mp.sendChatMessage({
                channel: msg.channel,
                text: msg.text,
                type: msg.type
            });
        }
    }

    // ------------------------------------------
    //  Toggle Functions
    // ------------------------------------------
    function toggleChat() {
        chatOpen = !chatOpen;
        chatPanel.classList.toggle('open', chatOpen);
        if (chatOpen) {
            unreadCount = 0;
            updateUnreadBadge();
            chatInput.focus();
            scrollChatToBottom();
        }
    }

    function togglePlayers() {
        playersOpen = !playersOpen;
        playersPanel.classList.toggle('open', playersOpen);
    }

    function toggleDMPanel() {
        dmPanelOpen = !dmPanelOpen;
        if (dmPanel) dmPanel.classList.toggle('open', dmPanelOpen);
        if (dmFab) dmFab.style.display = dmPanelOpen ? 'none' : 'flex';
    }

    function toggleSecretRoll() {
        secretRollActive = !secretRollActive;
        const sw = document.getElementById('mp-secret-roll-switch');
        if (sw) sw.classList.toggle('active', secretRollActive);
        if (mp && mp.setSecretRoll) mp.setSecretRoll(secretRollActive);
    }

    // ------------------------------------------
    //  DM Action Handlers
    // ------------------------------------------
    function handleSyncState() {
        if (mp && mp.syncState) mp.syncState();
        showNotification('State synced to all players', 'success');
    }

    function handlePushMap() {
        if (mp && mp.pushMap) mp.pushMap();
        showNotification('Map pushed to all players', 'info');
    }

    function handleRequestRolls() {
        if (mp && mp.requestRolls) mp.requestRolls();
        showNotification('Roll request sent to all players', 'info');
    }

    function handlePauseGame() {
        if (mp && mp.pauseGame) mp.pauseGame();
        showNotification('Game paused', 'warning');
    }

    function handleLeave() {
        const confirmMsg = isDM
            ? 'End this session? All players will be disconnected.'
            : 'Leave this session?';
        if (!confirm(confirmMsg)) return;

        if (mp) {
            if (isDM && mp.endSession) mp.endSession();
            else if (mp.leaveSession) mp.leaveSession();
        }
        localStorage.removeItem('mp_session');
        // Remove the multiplayer UI overlay instead of reloading the page
        const bar = document.getElementById('mp-status-bar');
        if (bar) bar.remove();
        const chatPanel = document.querySelector('.mp-chat-panel');
        if (chatPanel) chatPanel.remove();
        const playersPanel = document.querySelector('.mp-players-panel');
        if (playersPanel) playersPanel.remove();
        const dmPanel = document.querySelector('.mp-dm-panel');
        if (dmPanel) dmPanel.remove();
        document.body.style.paddingTop = '';
    }

    // ------------------------------------------
    //  Unread Badge
    // ------------------------------------------
    function updateUnreadBadge() {
        unreadBadge.textContent = unreadCount > 99 ? '99+' : String(unreadCount);
        unreadBadge.classList.toggle('visible', unreadCount > 0);
    }

    // ------------------------------------------
    //  Notification / Toast System
    // ------------------------------------------
    function showNotification(text, type) {
        type = type || 'info';
        const toast = el('div', { className: `mp-toast ${type}` }, text);
        toastContainer.appendChild(toast);

        // Auto-dismiss
        setTimeout(() => {
            toast.classList.add('mp-toast-out');
            toast.addEventListener('animationend', () => toast.remove());
        }, 4000);
    }

    // ------------------------------------------
    //  Player List Rendering
    // ------------------------------------------
    function renderPlayerList(players) {
        playerListContainer.innerHTML = '';
        if (!players || !players.length) {
            playerListContainer.appendChild(
                el('div', { style: 'text-align:center;color:var(--mp-text-muted);padding:24px;font-size:0.82rem;' },
                    'No players connected')
            );
            return;
        }

        players.forEach(p => {
            const actions = [];

            if (isDM) {
                actions.push(el('button', {
                    className: 'mp-whisper-btn',
                    onClick: () => addWhisperChannel(p.id, p.characterName || p.name)
                }, 'Whisper'));
                actions.push(el('button', {
                    className: 'mp-kick-btn',
                    onClick: () => handleKick(p.id, p.name)
                }, 'Kick'));
            }

            const card = el('div', { className: 'mp-player-card' },
                el('div', { className: `mp-player-dot ${p.connected !== false ? 'online' : 'offline'}` }),
                el('div', { className: 'mp-player-info' },
                    el('div', { className: 'mp-player-name' }, p.characterName || p.name || 'Unknown'),
                    el('div', { className: 'mp-player-detail' },
                        [p.class, p.level ? `Lv${p.level}` : null].filter(Boolean).join(' \u2022 ') || p.name || '')
                ),
                ...(actions.length ? [el('div', { className: 'mp-player-actions' }, ...actions)] : [])
            );
            playerListContainer.appendChild(card);
        });

        // Update count in status bar
        const countEl = document.getElementById('mp-player-count');
        if (countEl) {
            countEl.textContent = `${players.length}/${session.maxPlayers || 4} players`;
        }
    }

    function handleKick(playerId, playerName) {
        if (!confirm(`Kick ${playerName || 'this player'}?`)) return;
        if (mp && mp.kickPlayer) mp.kickPlayer(playerId);
        showNotification(`${playerName || 'Player'} has been kicked`, 'warning');
    }

    // ------------------------------------------
    //  Connection Status
    // ------------------------------------------
    function setConnectionStatus(connected) {
        const dot = document.getElementById('mp-connection-dot');
        if (dot) {
            dot.classList.toggle('connected', connected);
            dot.classList.toggle('disconnected', !connected);
        }
    }

    // ------------------------------------------
    //  Public API — window.MultiplayerUI
    // ------------------------------------------
    window.MultiplayerUI = {

        /**
         * Add a chat message to the display.
         * @param {Object} msg - { channel, sender, senderName, text, timestamp, type, own }
         */
        addChatMessage(msg) {
            const message = {
                channel: msg.channel || 'general',
                sender: msg.sender || null,
                senderName: msg.senderName || 'Unknown',
                text: msg.text || '',
                timestamp: msg.timestamp || new Date().toISOString(),
                type: msg.type || 'normal', // 'normal', 'whisper', 'system'
                own: msg.own === true
            };
            messageStore.push(message);

            // If whisper from a new player, create a channel for DM
            if (isDM && message.type === 'whisper' && message.sender && !message.own) {
                const chId = 'whisper-' + message.sender;
                if (!channels.find(c => c.id === chId)) {
                    channels.push({ id: chId, label: message.senderName });
                    renderChannelTabs();
                }
            }

            // If viewing the same channel, render; otherwise bump unread
            if (chatOpen && message.channel === activeChannel) {
                renderMessages();
            } else if (!message.own) {
                unreadCount++;
                updateUnreadBadge();
            }
        },

        /**
         * Refresh the connected players list.
         * @param {Array} players - [{ id, name, characterName, class, level, connected }]
         */
        updatePlayerList(players) {
            renderPlayerList(players);
        },

        /**
         * Display a toast notification.
         * @param {string} text
         * @param {string} type - 'info' | 'success' | 'warning' | 'error' | 'whisper'
         */
        showNotification(text, type) {
            showNotification(text, type);
        },

        /** @returns {boolean} Whether the chat panel is open */
        isOpen() {
            return chatOpen;
        },

        /** Open the chat panel */
        openChat() {
            if (!chatOpen) toggleChat();
        },

        /** Close the chat panel */
        closeChat() {
            if (chatOpen) toggleChat();
        },

        /** Update connection status indicator */
        setConnected(connected) {
            setConnectionStatus(connected);
        },

        /** Update the player count display */
        setPlayerCount(current, max) {
            const countEl = document.getElementById('mp-player-count');
            if (countEl) countEl.textContent = `${current}/${max} players`;
        }
    };

    // ------------------------------------------
    //  Listen for Multiplayer Events (if available)
    // ------------------------------------------
    if (mp) {
        if (mp.on) {
            mp.on('chat-message', msg => {
                window.MultiplayerUI.addChatMessage(msg);
            });

            mp.on('player-joined', data => {
                showNotification(`${data.name || 'A player'} joined the session`, 'success');
            });

            mp.on('player-left', data => {
                showNotification(`${data.name || 'A player'} left the session`, 'warning');
            });

            mp.on('player-list-updated', players => {
                window.MultiplayerUI.updatePlayerList(players);
            });

            mp.on('whisper-received', msg => {
                showNotification(`Whisper from ${msg.senderName || 'someone'}`, 'whisper');
                window.MultiplayerUI.addChatMessage({
                    ...msg,
                    type: 'whisper',
                    own: false
                });
            });

            mp.on('action-requested', data => {
                showNotification(data.text || 'The DM has requested an action', 'info');
            });

            mp.on('connection-changed', status => {
                setConnectionStatus(status.connected);
                if (!status.connected) {
                    showNotification('Connection lost. Attempting to reconnect...', 'error');
                }
            });
        }
    }

    // ------------------------------------------
    //  Keyboard Shortcuts
    // ------------------------------------------
    document.addEventListener('keydown', function (e) {
        // Escape closes any open panel
        if (e.key === 'Escape') {
            if (chatOpen) toggleChat();
            else if (playersOpen) togglePlayers();
            else if (dmPanelOpen) toggleDMPanel();
        }
        // Ctrl+Shift+C toggles chat
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            toggleChat();
        }
        // Ctrl+Shift+P toggles players
        if (e.ctrlKey && e.shiftKey && e.key === 'P') {
            e.preventDefault();
            togglePlayers();
        }
    });

    // ------------------------------------------
    //  Initial Render
    // ------------------------------------------
    // Populate with any stored players from session
    if (session.players) {
        renderPlayerList(session.players);
    }

    // System welcome message
    messageStore.push({
        channel: 'general',
        sender: null,
        senderName: null,
        text: `Connected to "${session.name || 'session'}". ${isDM ? 'You are the Dungeon Master.' : 'Adventurers, prepare yourselves!'}`,
        timestamp: new Date().toISOString(),
        type: 'system',
        own: false
    });
    renderMessages();

    console.log('[MultiplayerUI] Overlay injected for session:', session.code);

})();
