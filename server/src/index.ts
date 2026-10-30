import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import { GameManager } from './gameManager';
import { setupSocketHandlers } from './socketHandlers';
import { ClientToServerEvents, ServerToClientEvents } from '@royal-ludo/shared';

dotenv.config();

const app = express();
const server = http.createServer(app);

const PORT = Number(process.env.PORT) || 4000;
const CLIENT_URL = process.env.CLIENT_URL || '*';

app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(express.json());

// Healthcheck endpoint for Railway / Render / Fly.io / Kubernetes
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: Date.now()
  });
});

// Setup Socket.IO
const io = new Server<ClientToServerEvents, ServerToClientEvents>(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ['GET', 'POST'],
    credentials: true
  },
  pingInterval: 10000,
  pingTimeout: 5000,
  transports: ['websocket', 'polling']
});

const gameManager = new GameManager(io);
setupSocketHandlers(io, gameManager);

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

