import { gameService } from '../../helpers/gameService';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, If-Match, If-None-Match',
  'Cache-Control': 'no-store, no-cache, must-revalidate'
};

async function handleGameRequest(
  method: string,
  searchParams: URLSearchParams,
  bodyData?: any
): Promise<{ status: number; body: any; headers?: Record<string, string> }> {
  if (method === 'OPTIONS') {
    return { status: 204, body: {}, headers: CORS_HEADERS };
  }

  try {
    const action = (bodyData?.action || searchParams.get('action') || '').toLowerCase();

    // 1. Get State (Polling / Sync)
    if (action === 'get_state' || (method === 'GET' && searchParams.get('roomCode'))) {
      const roomCode = (bodyData?.roomCode || searchParams.get('roomCode') || '').toUpperCase();
      if (!roomCode) {
        return { status: 400, body: { success: false, error: 'Missing roomCode' }, headers: CORS_HEADERS };
      }

      const res = await gameService.getState(roomCode);
      if (!res.success || !res.gameState) {
        return { status: 404, body: { success: false, error: 'Room not found' }, headers: CORS_HEADERS };
      }

      return {
        status: 200,
        body: { success: true, gameState: res.gameState, etag: res.etag },
        headers: {
          ...CORS_HEADERS,
          ...(res.etag ? { ETag: res.etag } : {})
        }
      };
    }

    // 2. Join or Create Room
    if (action === 'join_room' || action === 'create_room') {
      const res = await gameService.joinRoom({
        roomCode: bodyData?.roomCode,
        playerName: bodyData?.playerName || 'Player',
        avatar: bodyData?.avatar || '👑',
        playerCount: bodyData?.playerCount || 4,
        playerId: bodyData?.playerId,
        maxRounds: bodyData?.maxRounds || 3
      });
      return { status: res.success ? 200 : 400, body: res, headers: CORS_HEADERS };
    }

    // 3. Quick Match
    if (action === 'quick_match') {
      const res = await gameService.joinRoom({
        playerName: bodyData?.playerName || 'Player',
        avatar: bodyData?.avatar || '👑',
        playerCount: bodyData?.playerCount || 4,
        playerId: bodyData?.playerId,
        maxRounds: bodyData?.maxRounds || 3
      });
      return { status: res.success ? 200 : 400, body: res, headers: CORS_HEADERS };
    }

    // 4. Start Game
    if (action === 'start_game') {
      const roomCode = (bodyData?.roomCode || '').toUpperCase();
      const playerId = bodyData?.playerId || '';
      const res = await gameService.startGame(roomCode, playerId);
      return { status: res.success ? 200 : 400, body: res, headers: CORS_HEADERS };
    }

    // 5. Roll Dice
    if (action === 'roll_dice') {
      const roomCode = (bodyData?.roomCode || '').toUpperCase();
      const playerId = bodyData?.playerId || '';
      const res = await gameService.rollDice(roomCode, playerId);
      return { status: res.success ? 200 : 400, body: res, headers: CORS_HEADERS };
    }

    // 6. Move Token
    if (action === 'move_token') {
      const roomCode = (bodyData?.roomCode || '').toUpperCase();
      const playerId = bodyData?.playerId || '';
      const tokenIndex = Number(bodyData?.tokenIndex ?? -1);
      const res = await gameService.moveToken(roomCode, playerId, tokenIndex);
      return { status: res.success ? 200 : 400, body: res, headers: CORS_HEADERS };
    }

    // 7. Request Rematch
    if (action === 'rematch' || action === 'request_rematch') {
      const roomCode = (bodyData?.roomCode || '').toUpperCase();
      const playerId = bodyData?.playerId || '';
      const res = await gameService.rematch(roomCode, playerId);
      return { status: res.success ? 200 : 400, body: res, headers: CORS_HEADERS };
    }

    // 8. Reaction
    if (action === 'reaction' || action === 'send_reaction') {
      const roomCode = (bodyData?.roomCode || '').toUpperCase();
      const playerId = bodyData?.playerId || '';
      const emoji = bodyData?.emoji || '🎲';
      const res = await gameService.sendReaction(roomCode, playerId, emoji);
      return { status: res.success ? 200 : 400, body: res, headers: CORS_HEADERS };
    }

    return {
      status: 400,
      body: { success: false, error: `Unknown action: "${action}"` },
      headers: CORS_HEADERS
    };
  } catch (error: any) {
    return {
      status: 500,
      body: { success: false, error: error.message || 'Internal Server Error' },
      headers: CORS_HEADERS
    };
  }
}

/**
 * Standard Netlify Web API Handler (Request -> Response)
 */
export default async function (req: Request): Promise<Response> {
  const url = new URL(req.url);
  const method = req.method.toUpperCase();
  let bodyData: any = null;

  if (method === 'POST') {
    try {
      bodyData = await req.json();
    } catch {
      bodyData = {};
    }
  }

  const result = await handleGameRequest(method, url.searchParams, bodyData);
  return new Response(JSON.stringify(result.body), {
    status: result.status,
    headers: {
      'Content-Type': 'application/json',
      ...result.headers
    }
  });
}

/**
 * Legacy AWS Lambda Event Handler for backward compatibility
 */
export const handler = async (event: any) => {
  const method = (event.httpMethod || 'GET').toUpperCase();
  const searchParams = new URLSearchParams(event.queryStringParameters || {});
  let bodyData: any = null;

  if (event.body) {
    try {
      bodyData = JSON.parse(event.body);
    } catch {
      bodyData = {};
    }
  }

  const result = await handleGameRequest(method, searchParams, bodyData);
  return {
    statusCode: result.status,
    headers: {
      'Content-Type': 'application/json',
      ...result.headers
    },
    body: JSON.stringify(result.body)
  };
};

