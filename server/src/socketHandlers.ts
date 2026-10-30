import { Server, Socket } from 'socket.io';
import { GameManager } from './gameManager';
import { ClientToServerEvents, ServerToClientEvents, EmojiReaction } from '@royal-ludo/shared';

export function setupSocketHandlers(
  io: Server<ClientToServerEvents, ServerToClientEvents>,
  gameManager: GameManager
) {
  // Map of socket.id -> { playerId, roomCode }
  const socketSessions = new Map<string, { playerId: string; roomCode?: string }>();

  io.on('connection', (socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {
    // Generate or receive persistent playerId from auth handshake
    const playerId = (socket.handshake.auth?.playerId as string) || `user-${socket.id.slice(0, 8)}`;
    socketSessions.set(socket.id, { playerId });

    // 1. Join or Create Room
    socket.on('join_room', async (data, callback) => {
      try {
        let roomCode = data.roomCode?.trim().toUpperCase();
        let result;

        if (roomCode) {
          result = await gameManager.joinRoom(roomCode, playerId, data.playerName, data.avatar);
        } else {
          result = await gameManager.createRoom(playerId, data.playerName, data.avatar, data.playerCount || 4);
          roomCode = result.roomCode;
          result = { success: true, gameState: result.gameState, playerColor: result.gameState.players[0].color };
        }

        if (result.success && result.gameState) {
          socket.join(roomCode!);
          socketSessions.set(socket.id, { playerId, roomCode: roomCode! });

          // Broadcast state sync to room
          socket.to(roomCode!).emit('state_sync', { gameState: result.gameState });

          callback({
            success: true,
            roomCode: roomCode!,
            gameState: result.gameState
          });

          socket.emit('room_joined', {
            roomCode: roomCode!,
            playerId,
            playerColor: result.playerColor!,
            gameState: result.gameState
          });
        } else {
          callback({ success: false, error: result.error || 'Failed to join room' });
        }
      } catch (err: any) {
        callback({ success: false, error: err.message || 'Server error joining room' });
      }
    });

    // 2. Quick Match
    socket.on('quick_match', async (data, callback) => {
      try {
        const match = await gameManager.findQuickMatch(playerId, data.playerName, data.avatar, data.playerCount);
        socket.join(match.roomCode);
        socketSessions.set(socket.id, { playerId, roomCode: match.roomCode });

        socket.to(match.roomCode).emit('state_sync', { gameState: match.gameState });
        callback({ success: true, roomCode: match.roomCode, gameState: match.gameState });
      } catch (err: any) {
        callback({ success: false, error: err.message || 'Quick match error' });
      }
    });

    // 3. Start Game
    socket.on('start_game', async callback => {
      const session = socketSessions.get(socket.id);
      if (!session || !session.roomCode) {
        return callback({ success: false, error: 'Not in a room' });
      }

      const res = await gameManager.startGame(session.roomCode, session.playerId);
      if (res.success && res.gameState) {
        io.to(session.roomCode).emit('state_sync', { gameState: res.gameState });
        callback({ success: true });
      } else {
        callback({ success: false, error: res.error });
      }
    });

    // 4. Roll Dice (Server-authoritative)
    socket.on('roll_dice', async callback => {
      const session = socketSessions.get(socket.id);
      if (!session || !session.roomCode) {
        return callback({ success: false, error: 'Not in a room' });
      }

      const res = await gameManager.rollDice(session.roomCode, session.playerId);
      if (res.success && res.gameState && res.roll !== undefined) {
        const activeColor = res.gameState.players.find(p => p.id === session.playerId)?.color || 'red';

        io.to(session.roomCode).emit('dice_rolled', {
          playerColor: activeColor,
          roll: res.roll,
          sixesStreak: res.gameState.turnState.sixesStreak,
          availableMoves: res.gameState.turnState.availableMoves
        });

        io.to(session.roomCode).emit('state_sync', { gameState: res.gameState });
        callback({ success: true, roll: res.roll });
      } else {
        callback({ success: false, error: res.error });
      }
    });

    // 5. Move Token
    socket.on('move_token', async (data, callback) => {
      const session = socketSessions.get(socket.id);
      if (!session || !session.roomCode) {
        return callback({ success: false, error: 'Not in a room' });
      }

      const res = await gameManager.moveToken(session.roomCode, session.playerId, data.tokenIndex);
      if (res.success && res.moveResult && res.gameState) {
        io.to(session.roomCode).emit('token_moved', {
          moveResult: res.moveResult,
          gameState: res.gameState
        });

        io.to(session.roomCode).emit('state_sync', { gameState: res.gameState });

        // If game ended, broadcast game_over
        if (res.gameState.winner) {
          io.to(session.roomCode).emit('game_over', {
            winner: res.gameState.winner,
            rankings: res.gameState.rankings,
            gameState: res.gameState
          });
        }

        callback({ success: true, moveResult: res.moveResult });
      } else {
        callback({ success: false, error: res.error });
      }
    });

    // 6. In-Game Emoji Reaction
    socket.on('send_reaction', async data => {
      const session = socketSessions.get(socket.id);
      if (!session || !session.roomCode) return;

      const state = await gameManager.getGameState(session.roomCode);
      if (!state) return;

      const player = state.players.find(p => p.id === session.playerId);
      if (!player) return;

      const reaction: EmojiReaction = {
        id: `react-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        senderId: session.playerId,
        senderColor: player.color,
        emoji: data.emoji,
        timestamp: Date.now()
      };

      io.to(session.roomCode).emit('reaction_received', reaction);
    });

    // 7. Rematch Request
    socket.on('request_rematch', async () => {
      const session = socketSessions.get(socket.id);
      if (!session || !session.roomCode) return;

      const { gameState, restarted } = await gameManager.handleRematch(session.roomCode, session.playerId);
      io.to(session.roomCode).emit('state_sync', { gameState });
    });

    // 8. Heartbeat
    socket.on('heartbeat', () => {
      // Keepalive acknowledge
    });

    // 9. Disconnect & Bot Takeover
    socket.on('disconnect', async () => {
      const session = socketSessions.get(socket.id);
      socketSessions.delete(socket.id);

      if (session && session.roomCode) {
        const state = await gameManager.getGameState(session.roomCode);
        if (state) {
          const player = state.players.find(p => p.id === session.playerId);
          if (player) {
            player.isConnected = false;
            // Bot automatically takes over to keep match alive
            player.isBot = true;
            await gameManager.saveGameState(state);

            io.to(session.roomCode).emit('player_disconnected', {
              playerId: session.playerId,
              playerColor: player.color,
              replacedByBot: true
            });
            io.to(session.roomCode).emit('state_sync', { gameState: state });
          }
        }
      }
    });
  });
}

