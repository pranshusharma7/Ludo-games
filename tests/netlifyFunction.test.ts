import { describe, it } from 'node:test';
import assert from 'node:assert';
import handler, { handler as awsHandler } from '../netlify/functions/game';
import { blobsRoomStore } from '../helpers/blobsStorage';

describe('Netlify Function Endpoint Verification', () => {
  it('handles standard Web API Request/Response and AWS Event invocations directly', async () => {
    blobsRoomStore.clearMemoryFallback();

    // 1. Create room via POST request
    const createReq = new Request('http://localhost/.netlify/functions/game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'create_room',
        playerName: 'RoyalHost',
        avatar: '👑',
        playerCount: 2
      })
    });

    const createRes = await handler(createReq);
    assert.strictEqual(createRes.status, 200);
    const createData = await createRes.json();
    assert.strictEqual(createData.success, true);
    assert.ok(createData.roomCode);
    const roomCode = createData.roomCode;

    // 2. Poll state via GET request with searchParams
    const getReq = new Request(`http://localhost/.netlify/functions/game?action=get_state&roomCode=${roomCode}`);
    const getRes = await handler(getReq);
    assert.strictEqual(getRes.status, 200);
    const getData = await getRes.json();
    assert.strictEqual(getData.success, true);
    assert.strictEqual(getData.gameState.roomCode, roomCode);

    // 3. Test legacy AWS Lambda Event handler compatibility
    const awsEvent = {
      httpMethod: 'POST',
      body: JSON.stringify({
        action: 'join_room',
        roomCode,
        playerName: 'GuestPlayer',
        avatar: '🦁'
      })
    };

    const awsRes = await awsHandler(awsEvent);
    assert.strictEqual(awsRes.statusCode, 200);
    const awsData = JSON.parse(awsRes.body);
    assert.strictEqual(awsData.success, true);
    assert.strictEqual(awsData.gameState.players.length, 2);

    // 4. Start game via AWS Event
    const startEvent = {
      httpMethod: 'POST',
      body: JSON.stringify({
        action: 'start_game',
        roomCode,
        playerId: createData.gameState.hostId
      })
    };
    const startRes = await awsHandler(startEvent);
    assert.strictEqual(startRes.statusCode, 200);
    const startData = JSON.parse(startRes.body);
    assert.strictEqual(startData.success, true);
    assert.strictEqual(startData.gameState.turnState.phase, 'roll');
  });
});

