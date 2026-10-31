import React, { useState, useEffect } from 'react';
import { LudoEngine, PlayerColor } from '@royal-ludo/shared';
import { useSocket } from './hooks/useSocket';
import { useTheme } from './context/ThemeContext';
import { useAudio } from './hooks/useAudio';
import { Board } from './components/Board/Board';
import { Dice3D } from './components/Board/Dice3D';
import { PlayerAvatar } from './components/PlayerHUD/PlayerAvatar';
import { ReactionOverlay } from './components/PlayerHUD/ReactionOverlay';
import { SplashScreen } from './components/Lobby/SplashScreen';
import { LobbyScreen } from './components/Lobby/LobbyScreen';
import { ShareRoomModal } from './components/Modals/ShareRoomModal';
import { WinningPodium } from './components/Modals/WinningPodium';
import { SettingsModal } from './components/Modals/SettingsModal';
import { Volume2, VolumeX, Settings, Share2, Wifi, WifiOff } from 'lucide-react';

export const App: React.FC = () => {
  const { theme } = useTheme();
  const {
    isConnected,
    isReconnecting,
    latency,
    myPlayerId,
    myColor,
    gameState,
    setGameState,
    reactions,
    lastDiceEvent,
    joinRoom,
    playVsComputer,
    quickMatch,
    startGame,
    rollDice,
    moveToken,
    sendReaction,
    requestRematch
  } = useSocket();

  const { isMuted, toggleMute } = useAudio();

  const [hasStartedApp, setHasStartedApp] = useState<boolean>(() => {
    return localStorage.getItem('ludo_onboarded') === 'true';
  });

  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Check URL params for direct invite link (?room=CODE)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomFromUrl = params.get('room');
    if (roomFromUrl && !gameState) {
      setHasStartedApp(true);
      const name = localStorage.getItem('ludo_name') || 'Guest Player';
      const avatar = localStorage.getItem('ludo_avatar') || '👑';
      joinRoom(roomFromUrl.toUpperCase(), name, avatar);
    }
  }, [joinRoom, gameState]);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  const handleEnterLobby = () => {
    setHasStartedApp(true);
    localStorage.setItem('ludo_onboarded', 'true');
  };

  const handleReturnToLobby = () => {
    setGameState(null);
  };

  // If first visit, render Splash Screen
  if (!hasStartedApp) {
    return (
      <div style={{ background: theme.bgGradient }} className="min-h-screen text-slate-900 dark:text-white">
        <SplashScreen onEnter={handleEnterLobby} />
      </div>
    );
  }

  // Active game check
  const isPlaying = gameState && gameState.turnState.phase !== 'waiting';
  const activeColor = gameState?.turnState.activeColor || 'red';
  const isMyTurn = myColor ? activeColor === myColor : true;
  const canRoll = gameState?.turnState.phase === 'roll';

  // Automated Autonomous Bot Turns Runner
  useEffect(() => {
    if (!isPlaying || !gameState) return;

    const currentActiveColor = gameState.turnState.activeColor;
    const activePlayer = gameState.players.find(p => p.color === currentActiveColor);

    if (activePlayer && activePlayer.isBot) {
      if (gameState.turnState.phase === 'roll') {
        const timer = setTimeout(() => {
          rollDice();
        }, 800);
        return () => clearTimeout(timer);
      }

      if (gameState.turnState.phase === 'move' && gameState.turnState.roll !== null) {
        const timer = setTimeout(() => {
          const legal = gameState.turnState.availableMoves;
          if (legal && legal.length > 0) {
            const best = LudoEngine.chooseBestMove(gameState, currentActiveColor, gameState.turnState.roll!, legal);
            moveToken(best);
          }
        }, 1250);
        return () => clearTimeout(timer);
      }
    }
  }, [isPlaying, gameState, rollDice, moveToken]);

  return (
    <div
      style={{ background: theme.bgGradient }}
      className="min-h-screen flex flex-col justify-between transition-colors duration-500 overflow-x-hidden text-slate-900 dark:text-white"
    >
      {/* Top Header Bar */}
      <header className="w-full max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between z-30 bg-[#140c07]/85 backdrop-blur-md rounded-b-2xl border-b border-amber-500/25 shadow-xl mb-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 p-0.5 shadow-md flex items-center justify-center text-xl select-none">
            <span className="drop-shadow">🎲</span>
          </div>
          <div>
            <h1 className="font-display font-black text-lg tracking-tight leading-none text-white">
              Royal <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Ludo</span>
            </h1>
            <span className="text-[9px] font-black text-amber-400/80 uppercase tracking-widest block font-serif">
              Grand Walnut Edition
            </span>
          </div>
        </div>

        {/* Center Room Code Pill (if in a room) */}
        {gameState && (
          <div
            onClick={() => setShowShareModal(true)}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#23150d] backdrop-blur rounded-full border border-amber-500/40 shadow-inner cursor-pointer hover:border-amber-400 transition"
          >
            <span className="text-[10px] font-bold text-amber-200/60 uppercase">ROOM:</span>
            <span className="font-mono text-xs font-black text-amber-400 tracking-wider">{gameState.roomCode}</span>
            <Share2 size={12} className="text-amber-400" />
          </div>
        )}

        {/* Right Action Icons */}
        <div className="flex items-center gap-2">
          {/* Latency & Connection Status */}
          <div
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur ${
              isConnected
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                : 'bg-rose-500/15 text-rose-400 border border-rose-500/30 animate-pulse'
            }`}
          >
            {isConnected ? <Wifi size={12} /> : <WifiOff size={12} />}
            <span className="hidden sm:inline">{isConnected ? `${latency}ms` : 'Offline'}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleMute}
            className="p-2 rounded-xl bg-[#23150d] border border-amber-500/30 text-amber-300 hover:border-amber-400 hover:text-amber-200 transition shadow-sm"
            aria-label="Toggle sound"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* Settings Modal */}
          <button
            onClick={() => setShowSettingsModal(true)}
            className="p-2 rounded-xl bg-[#23150d] border border-amber-500/30 text-amber-300 hover:border-amber-400 hover:text-amber-200 transition shadow-sm"
            aria-label="Settings"
          >
            <Settings size={16} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-2 py-2">
        {!isPlaying ? (
          <LobbyScreen
            myPlayerId={myPlayerId}
            gameState={gameState}
            onQuickMatch={quickMatch}
            onPlayVsComputer={playVsComputer}
            onCreateRoom={(name, avatar, count, color) => joinRoom(undefined, name, avatar, count, color)}
            onJoinRoom={(code, name, avatar) => joinRoom(code, name, avatar)}
            onStartGame={startGame}
          />
        ) : (
          <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Left Column: Player Avatars for Top/Left Positions */}
            <div className="flex lg:flex-col gap-2 justify-center w-full lg:w-48 overflow-x-auto pb-1">
              {gameState?.players.slice(0, 2).map(p => (
                <PlayerAvatar
                  key={p.color}
                  player={p}
                  isActive={p.color === activeColor}
                  turnDeadline={gameState.turnState.turnDeadline}
                  isMe={p.id === myPlayerId}
                />
              ))}
            </div>

            {/* Center: The Board */}
            <div className="flex-1 w-full max-w-[560px]">
              <Board
                players={gameState?.players || []}
                activeColor={activeColor}
                myColor={myColor}
                phase={gameState?.turnState.phase || 'roll'}
                roll={gameState?.turnState.roll || null}
                availableMoves={gameState?.turnState.availableMoves || []}
                onMoveToken={moveToken}
              />
            </div>

            {/* Right Column: Dice Station, Remaining Avatars & Turn Controls */}
            <div className="flex flex-col items-center gap-3 w-full lg:w-56">
              {/* Bottom/Right Avatars */}
              <div className="flex lg:flex-col gap-2 justify-center w-full">
                {gameState?.players.slice(2).map(p => (
                  <PlayerAvatar
                    key={p.color}
                    player={p}
                    isActive={p.color === activeColor}
                    turnDeadline={gameState.turnState.turnDeadline}
                    isMe={p.id === myPlayerId}
                  />
                ))}
              </div>

              {/* 3D Dice Station */}
              <div className="w-full bg-[#1b1009]/90 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-amber-500/35 flex flex-col items-center">
                <Dice3D
                  rollValue={gameState?.turnState.roll || null}
                  lastDiceEvent={lastDiceEvent}
                  isMyTurn={isMyTurn}
                  canRoll={canRoll}
                  activeColor={activeColor}
                  onRoll={rollDice}
                />

                {/* Move Hint */}
                {gameState?.turnState.phase === 'move' && (
                  <div className="mt-3 text-center animate-bounce">
                    <span className="text-[12px] font-display font-bold text-amber-300 bg-amber-500/20 border border-amber-400/50 px-4 py-1.5 rounded-full shadow-lg">
                      {isMyTurn ? 'Tap an active token to move!' : 'Waiting for move…'}
                    </span>
                  </div>
                )}
              </div>

              {/* Emoji Reactions Bar */}
              <ReactionOverlay reactions={reactions} onSendReaction={sendReaction} />
            </div>
          </div>
        )}
      </main>

      {/* Reconnecting Banner */}
      {isReconnecting && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 py-2 px-4 rounded-full bg-rose-600 text-white font-bold text-xs shadow-2xl animate-pulse">
          Reconnecting to match…
        </div>
      )}

      {/* Toast Alert */}
      {toastMsg && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 py-2 px-5 rounded-full bg-slate-900/90 text-amber-400 border border-amber-400/40 text-xs font-black shadow-2xl">
          {toastMsg}
        </div>
      )}

      {/* Modals */}
      <ShareRoomModal
        roomCode={gameState?.roomCode || ''}
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
      />

      <SettingsModal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
      />

      {gameState?.winner && (
        <WinningPodium
          winner={gameState.winner}
          rankings={gameState.rankings}
          players={gameState.players}
          rematchVotes={gameState.rematchVotes}
          myPlayerId={myPlayerId}
          onRequestRematch={requestRematch}
          onReturnLobby={handleReturnToLobby}
        />
      )}
    </div>
  );
};
