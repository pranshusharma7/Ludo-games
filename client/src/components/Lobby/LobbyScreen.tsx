import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Plus, ArrowRight, Share2, Crown, Sparkles, Bot } from 'lucide-react';
import { DEFAULT_AVATARS, GameState, PlayerColor } from '@royal-ludo/shared';
import { ShareRoomModal } from '../Modals/ShareRoomModal';
import { useTheme } from '../../context/ThemeContext';

interface LobbyScreenProps {
  myPlayerId: string;
  gameState: GameState | null;
  onQuickMatch: (name: string, avatar: string, count: number) => Promise<any>;
  onPlayVsComputer: (name: string, avatar: string, count: number, color: PlayerColor) => Promise<any>;
  onCreateRoom: (name: string, avatar: string, count: number, color?: PlayerColor) => Promise<any>;
  onJoinRoom: (code: string, name: string, avatar: string) => Promise<any>;
  onStartGame: () => Promise<any>;
}

export const LobbyScreen: React.FC<LobbyScreenProps> = ({
  myPlayerId,
  gameState,
  onQuickMatch,
  onPlayVsComputer,
  onCreateRoom,
  onJoinRoom,
  onStartGame
}) => {
  const { theme } = useTheme();

  const [name, setName] = useState<string>(() => localStorage.getItem('ludo_name') || 'Royal Player');
  const [avatar, setAvatar] = useState<string>(() => localStorage.getItem('ludo_avatar') || '👑');
  const [selectedColor, setSelectedColor] = useState<PlayerColor>('blue');
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [joinCodeInput, setJoinCodeInput] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'solo' | 'create' | 'join'>('solo');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showShareModal, setShowShareModal] = useState<boolean>(false);

  const saveProfile = (newName: string, newAvatar: string) => {
    setName(newName);
    setAvatar(newAvatar);
    localStorage.setItem('ludo_name', newName);
    localStorage.setItem('ludo_avatar', newAvatar);
  };

  const handlePlaySolo = async () => {
    setErrorMsg(null);
    setIsLoading(true);
    const res = await onPlayVsComputer(name, avatar, playerCount, selectedColor);
    setIsLoading(false);
    if (!res.success) setErrorMsg(res.error || 'Failed to start game');
  };

  const handleCreateRoom = async () => {
    setErrorMsg(null);
    setIsLoading(true);
    const res = await onCreateRoom(name, avatar, playerCount, selectedColor);
    setIsLoading(false);
    if (!res.success) setErrorMsg(res.error || 'Failed to create room');
  };

  const handleJoinRoom = async () => {
    if (!joinCodeInput.trim()) {
      setErrorMsg('Please enter a 6-character room code.');
      return;
    }
    setErrorMsg(null);
    setIsLoading(true);
    const res = await onJoinRoom(joinCodeInput.trim().toUpperCase(), name, avatar);
    setIsLoading(false);
    if (!res.success) setErrorMsg(res.error || 'Could not join room');
  };

  // If in a waiting room, render Waiting Room View!
  if (gameState && gameState.turnState.phase === 'waiting') {
    const isHost = gameState.hostId === myPlayerId;

    return (
      <div className="w-full max-w-md mx-auto p-4 sm:p-6 flex flex-col items-center">
        <div className="w-full bg-[#1b1009]/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-amber-500/35 text-center">
          <div className="flex items-center justify-between pb-4 border-b border-amber-500/20 mb-5">
            <div>
              <span className="text-[10px] font-serif font-black tracking-widest text-amber-400 uppercase block">
                MATCH WAITING ROOM
              </span>
              <h2 className="text-xl font-display font-black text-white">
                Room: <span className="font-mono text-amber-400">{gameState.roomCode}</span>
              </h2>
            </div>
            <button
              onClick={() => setShowShareModal(true)}
              className="p-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-amber-950 font-black transition shadow-md flex items-center gap-1.5 text-xs border border-amber-300/60"
            >
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>

          {/* Seated Players List */}
          <div className="space-y-2.5 mb-6 text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-200/70 block mb-1">
              Seated Players ({gameState.players.length}/{gameState.playerCount})
            </span>
            {gameState.players.map(p => (
              <div
                key={p.color}
                className="flex items-center justify-between p-3 rounded-2xl bg-[#23150d] border border-amber-500/25 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{p.avatar}</span>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {p.name} {p.id === myPlayerId ? '(You)' : ''}
                    </span>
                    <span
                      className="text-[9px] font-black uppercase tracking-wider"
                      style={{ color: theme.colors[p.color].primary }}
                    >
                      {p.color} Sovereign
                    </span>
                  </div>
                </div>
                {p.id === gameState.hostId && (
                  <span className="flex items-center gap-1 text-[10px] font-black text-amber-400 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-full">
                    <Crown size={12} /> HOST
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          {isHost ? (
            <button
              onClick={onStartGame}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 font-display font-black text-sm tracking-wider shadow-xl hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2 border border-amber-300/70"
            >
              <Sparkles size={18} />
              <span>START MATCH NOW</span>
            </button>
          ) : (
            <div className="p-3.5 rounded-2xl bg-[#23150d] border border-amber-500/20 text-xs font-semibold text-amber-200/80 animate-pulse">
              Waiting for the host to start the match…
            </div>
          )}
        </div>

        <ShareRoomModal
          roomCode={gameState.roomCode}
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 flex flex-col items-center">
      {/* Profile Card */}
      <div className="w-full bg-[#1b1009]/95 backdrop-blur-md rounded-3xl p-5 shadow-2xl border border-amber-500/35 mb-5">
        <div className="flex items-center gap-4">
          {/* Avatar Selector */}
          <div className="relative group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-600 p-0.5 shadow-md">
              <div className="w-full h-full rounded-[14px] bg-[#23150d] flex items-center justify-center text-3xl">
                {avatar}
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <label className="text-[10px] font-bold uppercase tracking-wider text-amber-200/70 block mb-1">
              Your Player Nickname
            </label>
            <input
              type="text"
              maxLength={15}
              value={name}
              onChange={e => saveProfile(e.target.value, avatar)}
              className="w-full py-2 px-3 rounded-xl bg-[#120a05] border border-amber-500/40 text-sm font-bold text-white outline-none focus:border-amber-400 transition"
              placeholder="Enter name…"
            />
          </div>
        </div>

        {/* Quick Avatar Carousel */}
        <div className="flex items-center gap-2 overflow-x-auto pt-3 mt-3 border-t border-amber-500/20">
          {DEFAULT_AVATARS.map(av => (
            <button
              key={av}
              type="button"
              onClick={() => saveProfile(name, av)}
              className={`p-1.5 text-xl rounded-xl transition ${
                avatar === av ? 'bg-amber-400 text-amber-950 shadow-md scale-110' : 'hover:bg-[#2a1a10] text-white'
              }`}
            >
              {av}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection Pill */}
      <div className="w-full bg-[#1b1009]/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-amber-500/35 mb-4">
        <label className="text-[10px] font-bold uppercase tracking-wider text-amber-200/70 block mb-2 text-center">
          Choose Your Sovereign Color
        </label>
        <div className="grid grid-cols-4 gap-2">
          {[
            { id: 'blue' as PlayerColor, label: 'Blue', emoji: '🔵', bg: '#1d4ed8' },
            { id: 'red' as PlayerColor, label: 'Red', emoji: '🔴', bg: '#b91c1c' },
            { id: 'green' as PlayerColor, label: 'Green', emoji: '🟢', bg: '#15803d' },
            { id: 'yellow' as PlayerColor, label: 'Yellow', emoji: '🟡', bg: '#b45309' }
          ].map(c => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedColor(c.id)}
              className={`py-2 px-1 rounded-xl text-xs font-black transition flex flex-col items-center gap-1 border ${
                selectedColor === c.id
                  ? 'border-amber-300 ring-2 ring-amber-400 scale-105 shadow-lg'
                  : 'border-white/10 opacity-70 hover:opacity-100'
              }`}
              style={{ background: c.bg }}
            >
              <span className="text-sm">{c.emoji}</span>
              <span className="text-[10px] text-white uppercase tracking-wider">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Tabs (Solo vs Bot | Host Room | Join Room) */}
      <div className="w-full grid grid-cols-3 p-1 rounded-2xl bg-[#140c06] border border-amber-500/30 backdrop-blur mb-5 text-xs font-bold">
        <button
          onClick={() => setActiveTab('solo')}
          className={`py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 ${
            activeTab === 'solo' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 shadow-md font-black' : 'text-amber-200/60 hover:text-white'
          }`}
        >
          <Bot size={14} /> Solo (Bot)
        </button>
        <button
          onClick={() => setActiveTab('create')}
          className={`py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 ${
            activeTab === 'create' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 shadow-md font-black' : 'text-amber-200/60 hover:text-white'
          }`}
        >
          <Plus size={14} /> Host
        </button>
        <button
          onClick={() => setActiveTab('join')}
          className={`py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 ${
            activeTab === 'join' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 shadow-md font-black' : 'text-amber-200/60 hover:text-white'
          }`}
        >
          <Users size={14} /> Join
        </button>
      </div>

      {/* Tab Panels */}
      <div className="w-full bg-[#1b1009]/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-amber-500/35">
        {errorMsg && (
          <div className="p-3 mb-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-bold">
            {errorMsg}
          </div>
        )}

        {/* 1. Solo vs Computer Tab */}
        {activeTab === 'solo' && (
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-amber-200/70 block mb-2">
                Match Configuration
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setPlayerCount(4)}
                  className={`p-3 rounded-2xl border text-center transition ${
                    playerCount === 4
                      ? 'border-amber-400 bg-amber-500/20 font-black text-amber-300 shadow-md'
                      : 'border-amber-500/20 bg-[#120a05] text-amber-200/60 hover:border-amber-500/40'
                  }`}
                >
                  <span className="text-xl block">4</span>
                  <span className="text-xs font-bold">4 Players (You + 3 Bots)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPlayerCount(2)}
                  className={`p-3 rounded-2xl border text-center transition ${
                    playerCount === 2
                      ? 'border-amber-400 bg-amber-500/20 font-black text-amber-300 shadow-md'
                      : 'border-amber-500/20 bg-[#120a05] text-amber-200/60 hover:border-amber-500/40'
                  }`}
                >
                  <span className="text-xl block">2</span>
                  <span className="text-xs font-bold">Duel (1v1 vs Bot)</span>
                </button>
              </div>
            </div>

            <button
              onClick={handlePlaySolo}
              disabled={isLoading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 font-display font-black text-sm tracking-wider shadow-xl hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2 mt-2 border border-amber-300/70"
            >
              <Sparkles size={18} />
              <span>{isLoading ? 'STARTING MATCH…' : 'PLAY NOW (VS BOTS)'}</span>
            </button>
          </div>
        )}

        {/* 2. Create Private Room Tab */}
        {activeTab === 'create' && (
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-amber-200/70 block mb-2">
                Room Player Capacity
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[4, 2, 3].map(cnt => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setPlayerCount(cnt)}
                    className={`p-3 rounded-2xl border text-center transition ${
                      playerCount === cnt
                        ? 'border-amber-400 bg-amber-500/20 font-black text-amber-300 shadow-md'
                        : 'border-amber-500/20 bg-[#120a05] text-amber-200/60 hover:border-amber-500/40'
                    }`}
                  >
                    <span className="text-lg font-black block">{cnt}</span>
                    <span className="text-[10px]">Players</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleCreateRoom}
              disabled={isLoading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 font-display font-black text-sm tracking-wider shadow-xl hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2 mt-2 border border-amber-300/70"
            >
              <Plus size={18} />
              <span>{isLoading ? 'CREATING ROOM…' : 'CREATE ROOM FOR FRIENDS'}</span>
            </button>
          </div>
        )}

        {/* 3. Join With Code Tab */}
        {activeTab === 'join' && (
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-amber-200/70 block mb-2">
                Enter 6-Character Room Code
              </label>
              <input
                type="text"
                maxLength={6}
                value={joinCodeInput}
                onChange={e => setJoinCodeInput(e.target.value.toUpperCase())}
                placeholder="e.g. LUDO7X"
                className="w-full py-3 px-4 rounded-2xl bg-[#120a05] border-2 border-amber-500/40 text-center font-mono text-xl font-black tracking-widest text-amber-300 outline-none focus:border-amber-400 transition"
              />
            </div>

            <button
              onClick={handleJoinRoom}
              disabled={isLoading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 font-display font-black text-sm tracking-wider shadow-xl hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2 mt-2 border border-amber-300/70"
            >
              <span>{isLoading ? 'JOINING…' : 'JOIN ROOM'}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

