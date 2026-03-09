/**
 * server.js — Simple LAN multiplayer WebSocket server for D&D Online Companion
 *
 * Serves static files over HTTP and relays WebSocket messages between clients
 * in the same session. No auth, no database — just a relay.
 *
 * Usage:
 *   npm install
 *   npm start
 *
 * Then open http://<LAN_IP>:8080 on any device on the network.
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const { WebSocketServer } = require("ws");

const PORT = parseInt(process.env.PORT, 10) || 8080;
const STATIC_DIR = __dirname;

// ---------------------------------------------------------------------------
// MIME types for static file serving
// ---------------------------------------------------------------------------

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
};

// ---------------------------------------------------------------------------
// HTTP server — serves static files from the project directory
// ---------------------------------------------------------------------------

const server = http.createServer(function (req, res) {
  // Only allow GET/HEAD
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405);
    res.end("Method Not Allowed");
    return;
  }

  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";

  // Prevent directory traversal
  const filePath = path.join(STATIC_DIR, urlPath);
  if (!filePath.startsWith(STATIC_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, function (err, stats) {
    if (err || !stats.isFile()) {
      res.writeHead(404);
      res.end("Not Found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

// ---------------------------------------------------------------------------
// WebSocket server — relay messages between clients in the same session
// ---------------------------------------------------------------------------

const wss = new WebSocketServer({ server: server });

/**
 * Sessions map: sessionCode -> Set<WebSocket>
 * Each client tells us their session code in every message.
 */
const sessions = new Map();

wss.on("connection", function (ws) {
  // Track which session this socket has been associated with.
  ws._sessionCode = null;

  ws.on("message", function (raw) {
    let msg;
    try {
      msg = JSON.parse(raw);
    } catch (e) {
      return; // Ignore non-JSON
    }

    // Every message must include a sessionCode so we can route it.
    const code = msg.sessionCode;
    if (!code) return;

    // Register this client in the session if not already.
    if (ws._sessionCode !== code) {
      // Remove from old session if switching
      if (ws._sessionCode && sessions.has(ws._sessionCode)) {
        sessions.get(ws._sessionCode).delete(ws);
        if (sessions.get(ws._sessionCode).size === 0) {
          sessions.delete(ws._sessionCode);
        }
      }
      ws._sessionCode = code;
      if (!sessions.has(code)) {
        sessions.set(code, new Set());
      }
      sessions.get(code).add(ws);
      console.log(
        "[Session %s] Client joined (%d clients)",
        code,
        sessions.get(code).size
      );
    }

    // Relay to all OTHER clients in the same session.
    const peers = sessions.get(code);
    if (!peers) return;

    const rawStr = typeof raw === "string" ? raw : raw.toString();
    peers.forEach(function (peer) {
      if (peer !== ws && peer.readyState === 1 /* WebSocket.OPEN */) {
        peer.send(rawStr);
      }
    });
  });

  ws.on("close", function () {
    const code = ws._sessionCode;
    if (code && sessions.has(code)) {
      sessions.get(code).delete(ws);
      const remaining = sessions.get(code).size;
      console.log("[Session %s] Client left (%d clients)", code, remaining);
      if (remaining === 0) {
        sessions.delete(code);
      }
    }
  });

  ws.on("error", function (err) {
    console.error("[WebSocket] Error:", err.message);
  });
});

// ---------------------------------------------------------------------------
// Get LAN IP address for display
// ---------------------------------------------------------------------------

function getLANAddress() {
  const os = require("os");
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal/loopback and non-IPv4
      if (iface.internal || iface.family !== "IPv4") continue;
      return iface.address;
    }
  }
  return "127.0.0.1";
}

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------

server.listen(PORT, function () {
  const lanIP = getLANAddress();
  console.log("=========================================");
  console.log("  D&D Online Companion — LAN Server");
  console.log("=========================================");
  console.log("");
  console.log("  Local:   http://localhost:" + PORT);
  console.log("  Network: http://" + lanIP + ":" + PORT);
  console.log("");
  console.log("  Share the Network URL with players on your LAN.");
  console.log("  Press Ctrl+C to stop.");
  console.log("=========================================");
});
