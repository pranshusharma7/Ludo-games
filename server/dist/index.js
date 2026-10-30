"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const gameManager_1 = require("./gameManager");
const socketHandlers_1 = require("./socketHandlers");
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = Number(process.env.PORT) || 4000;
const CLIENT_URL = process.env.CLIENT_URL || '*';
app.use((0, cors_1.default)({ origin: CLIENT_URL, credentials: true }));
app.use(express_1.default.json());
// Healthcheck endpoint for Railway / Render / Fly.io / Kubernetes
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: Date.now()
    });
});
// Setup Socket.IO
const io = new socket_io_1.Server(server, {
    cors: {
        origin: CLIENT_URL,
        methods: ['GET', 'POST'],
        credentials: true
    },
    pingInterval: 10000,
    pingTimeout: 5000,
    transports: ['websocket', 'polling']
});
const gameManager = new gameManager_1.GameManager(io);
(0, socketHandlers_1.setupSocketHandlers)(io, gameManager);
server.listen(PORT, '0.0.0.0', () => {
    console.log(`🎲 Royal Ludo Multiplayer Server running on http://0.0.0.0:${PORT}`);
    console.log(`📡 WebSocket ready for real-time matches`);
});
// Handle graceful termination
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received. Closing HTTP server…');
    server.close(() => {
        console.log('HTTP server closed.');
        process.exit(0);
    });
});
//# sourceMappingURL=index.js.map