import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite dev middleware to handle /.netlify/functions/game locally without Netlify CLI
function netlifyFunctionsDevPlugin(): Plugin {
  return {
    name: 'netlify-functions-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || '';
        if (url.startsWith('/.netlify/functions/game')) {
          try {
            // Dynamically import the game service
            const { gameService } = await server.ssrLoadModule('../helpers/gameService.ts');
            const parsedUrl = new URL(url, 'http://localhost:5173');
            const searchParams = parsedUrl.searchParams;
            const method = (req.method || 'GET').toUpperCase();

            let bodyData: any = null;
            if (method === 'POST') {
              const buffers: Buffer[] = [];
              for await (const chunk of req) {
                buffers.push(Buffer.from(chunk));
              }
              const rawBody = Buffer.concat(buffers).toString('utf-8');
              if (rawBody) {
                try {
                  bodyData = JSON.parse(rawBody);
                } catch {}
              }
            }

            const action = (bodyData?.action || searchParams.get('action') || '').toLowerCase();
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');

            if (action === 'get_state' || (method === 'GET' && searchParams.get('roomCode'))) {
              const roomCode = (bodyData?.roomCode || searchParams.get('roomCode') || '').toUpperCase();
              const stateRes = await gameService.getState(roomCode);
              res.statusCode = stateRes.success ? 200 : 404;
              res.end(JSON.stringify(stateRes));
              return;
            }

            if (action === 'join_room' || action === 'create_room') {
              const joinRes = await gameService.joinRoom({
                roomCode: bodyData?.roomCode,
                playerName: bodyData?.playerName || 'Player',
                avatar: bodyData?.avatar || '👑',
                playerCount: bodyData?.playerCount || 4,
                playerId: bodyData?.playerId,
                maxRounds: bodyData?.maxRounds || 3
              });
              res.statusCode = joinRes.success ? 200 : 400;
              res.end(JSON.stringify(joinRes));
              return;
            }

            if (action === 'quick_match') {
              const qRes = await gameService.joinRoom({
                playerName: bodyData?.playerName || 'Player',
                avatar: bodyData?.avatar || '👑',
                playerCount: bodyData?.playerCount || 4,
                playerId: bodyData?.playerId,
                maxRounds: bodyData?.maxRounds || 3
              });
              res.statusCode = qRes.success ? 200 : 400;
              res.end(JSON.stringify(qRes));
              return;
            }

            if (action === 'start_game') {
              const startRes = await gameService.startGame(bodyData?.roomCode, bodyData?.playerId);
              res.statusCode = startRes.success ? 200 : 400;
              res.end(JSON.stringify(startRes));
              return;
            }

            if (action === 'roll_dice') {
              const rollRes = await gameService.rollDice(bodyData?.roomCode, bodyData?.playerId);
              res.statusCode = rollRes.success ? 200 : 400;
              res.end(JSON.stringify(rollRes));
              return;
            }

            if (action === 'move_token') {
              const moveRes = await gameService.moveToken(bodyData?.roomCode, bodyData?.playerId, bodyData?.tokenIndex);
              res.statusCode = moveRes.success ? 200 : 400;
              res.end(JSON.stringify(moveRes));
              return;
            }

            if (action === 'rematch') {
              const remRes = await gameService.rematch(bodyData?.roomCode, bodyData?.playerId);
              res.statusCode = remRes.success ? 200 : 400;
              res.end(JSON.stringify(remRes));
              return;
            }

            if (action === 'reaction') {
              const rxRes = await gameService.sendReaction(bodyData?.roomCode, bodyData?.playerId, bodyData?.emoji);
              res.statusCode = rxRes.success ? 200 : 400;
              res.end(JSON.stringify(rxRes));
              return;
            }

            res.statusCode = 400;
            res.end(JSON.stringify({ success: false, error: 'Unknown action' }));
          } catch (e: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, error: e.message }));
          }
        } else {
          next();
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), netlifyFunctionsDevPlugin()],
  resolve: {
    alias: {
      '@royal-ludo/shared': path.resolve(__dirname, '../shared/src')
    }
  },
  build: {
    outDir: path.resolve(__dirname, '../dist'),
    emptyOutDir: true
  },
  server: {
    port: 5173
  }
});
