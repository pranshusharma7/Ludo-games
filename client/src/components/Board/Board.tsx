import React, { useState } from 'react';
import { Player, PlayerColor, SAFE_TILES, START_TILES } from '@royal-ludo/shared';
import { useTheme } from '../../context/ThemeContext';
import { Token } from './Token';
import {
  PERIMETER_PATH,
  HOME_LANES,
  getTokenCoordinates
} from '../../utils/boardCoordinates';

interface BoardProps {
  players: Player[];
  activeColor: PlayerColor;
  myColor: PlayerColor | null;
  phase: string;
  roll: number | null;
  availableMoves: number[];
  onMoveToken: (tokenIndex: number) => void;
}

export const Board: React.FC<BoardProps> = ({
  players,
  activeColor,
  myColor,
  phase,
  roll,
  availableMoves,
  onMoveToken
}) => {
  const { theme } = useTheme();
  const [hoveredToken, setHoveredToken] = useState<{ color: PlayerColor; tokenIndex: number } | null>(null);

  // Group tokens for stacking offsets
  const occupancyMap: Record<number, Array<{ player: Player; tokenIdx: number }>> = {};
  players.forEach(p => {
    p.tokens.forEach((pos, tokenIdx) => {
      if (pos >= 0 && pos <= 50) {
        const gPos = (START_TILES[p.color] + pos) % 52;
        if (!occupancyMap[gPos]) occupancyMap[gPos] = [];
        occupancyMap[gPos].push({ player: p, tokenIdx });
      }
    });
  });

  // Calculate destination preview for hovered token
  let previewTarget: { x: number; y: number; badge: string } | null = null;
  if (hoveredToken && roll && phase === 'move') {
    const player = players.find(p => p.color === hoveredToken.color);
    if (player) {
      const pos = player.tokens[hoveredToken.tokenIndex];
      const targetPos = pos === -1 ? 0 : pos + roll;
      if (targetPos <= 56) {
        const coords = getTokenCoordinates(hoveredToken.color, targetPos, hoveredToken.tokenIndex);
        let badge = `+${roll}`;
        if (pos === -1) badge = '✦ START';
        else if (targetPos === 56) badge = '🏆 HOME!';
        else if (targetPos <= 50) {
          const gPos = (START_TILES[hoveredToken.color] + targetPos) % 52;
          if (SAFE_TILES.includes(gPos)) {
            badge = '★ SAFE HAVEN';
          } else {
            // Check enemy token
            const hasEnemy = players.some(
              op => op.color !== hoveredToken.color && op.tokens.some(opos => opos >= 0 && opos <= 50 && (START_TILES[op.color] + opos) % 52 === gPos)
            );
            if (hasEnemy) badge = '⚔ CAPTURE!';
          }
        }
        previewTarget = { x: coords.x, y: coords.y, badge };
      }
    }
  }

  return (
    <div className="relative w-full max-w-[580px] aspect-square mx-auto p-3 sm:p-5 rounded-[32px] select-none transition-all duration-500">
      {/* Heavy Carved Rosewood Outer Frame with Brass Filigrees */}
      <div
        className="relative w-full h-full rounded-[24px] overflow-hidden p-2.5 sm:p-3.5 shadow-2xl border-4"
        style={{
          background: 'linear-gradient(135deg, #422312 0%, #201108 50%, #4a2815 100%)',
          borderColor: '#190c05',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), inset 0 2px 4px rgba(255, 235, 190, 0.45), inset 0 -3px 6px rgba(0, 0, 0, 0.9)'
        }}
      >
        {/* Solid Brass Corner Brackets with Screw Studs */}
        <div className="absolute top-1.5 left-1.5 w-7 h-7 border-t-2 border-l-2 border-amber-400/90 rounded-tl-xl pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
        <div className="absolute top-1.5 right-1.5 w-7 h-7 border-t-2 border-r-2 border-amber-400/90 rounded-tr-xl pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
        <div className="absolute bottom-1.5 left-1.5 w-7 h-7 border-b-2 border-l-2 border-amber-400/90 rounded-bl-xl pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
        <div className="absolute bottom-1.5 right-1.5 w-7 h-7 border-b-2 border-r-2 border-amber-400/90 rounded-br-xl pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />

        {/* Board Surface Playing Field */}
        <div
          className="relative w-full h-full rounded-xl overflow-hidden border-2 shadow-inner"
          style={{
            background: theme.boardBg,
            borderColor: '#5c381c'
          }}
        >
          {/* 4 Colored Home Base Yards (6x6 cells = 40% width/height each) */}
          {/* Red Base: Top-Left */}
          <div
            className={`absolute top-0 left-0 w-[40%] h-[40%] p-3 border-r-2 border-b-2 border-slate-900/40 flex flex-col items-center justify-between transition-all ${
              activeColor === 'red' ? 'ring-4 ring-rose-500 ring-inset shadow-lg' : ''
            }`}
            style={{
              background: 'linear-gradient(135deg, #a81c1c, #6c0a0a)'
            }}
          >
            {/* Inner Felt Inset */}
            <div className="w-full h-full rounded-xl bg-[#f6e6cb] dark:bg-[#1f1610] p-2.5 border-2 border-amber-500/50 shadow-inner flex flex-col items-center justify-between">
              <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-serif font-black text-[10px] tracking-wider">
                <span>♔</span>
                <span>RUBY RED</span>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-3 place-items-center">
                {[0, 1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-slate-900/30 border-2 border-amber-400/60 shadow-inner flex items-center justify-center"
                  >
                    <div className="w-5 h-5 rounded-full bg-black/40 shadow-inner" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Green Base: Top-Right */}
          <div
            className={`absolute top-0 right-0 w-[40%] h-[40%] p-3 border-l-2 border-b-2 border-slate-900/40 flex flex-col items-center justify-between transition-all ${
              activeColor === 'green' ? 'ring-4 ring-emerald-500 ring-inset shadow-lg' : ''
            }`}
            style={{
              background: 'linear-gradient(135deg, #1b6827, #0b3814)'
            }}
          >
            <div className="w-full h-full rounded-xl bg-[#f6e6cb] dark:bg-[#1f1610] p-2.5 border-2 border-amber-500/50 shadow-inner flex flex-col items-center justify-between">
              <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-serif font-black text-[10px] tracking-wider">
                <span>♕</span>
                <span>EMERALD GREEN</span>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-3 place-items-center">
                {[0, 1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-slate-900/30 border-2 border-amber-400/60 shadow-inner flex items-center justify-center"
                  >
                    <div className="w-5 h-5 rounded-full bg-black/40 shadow-inner" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Yellow Base: Bottom-Right */}
          <div
            className={`absolute bottom-0 right-0 w-[40%] h-[40%] p-3 border-l-2 border-t-2 border-slate-900/40 flex flex-col items-center justify-between transition-all ${
              activeColor === 'yellow' ? 'ring-4 ring-amber-500 ring-inset shadow-lg' : ''
            }`}
            style={{
              background: 'linear-gradient(135deg, #c79100, #735400)'
            }}
          >
            <div className="w-full h-full rounded-xl bg-[#f6e6cb] dark:bg-[#1f1610] p-2.5 border-2 border-amber-500/50 shadow-inner flex flex-col items-center justify-between">
              <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-serif font-black text-[10px] tracking-wider">
                <span>♗</span>
                <span>AMBER GOLD</span>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-3 place-items-center">
                {[0, 1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-slate-900/30 border-2 border-amber-400/60 shadow-inner flex items-center justify-center"
                  >
                    <div className="w-5 h-5 rounded-full bg-black/40 shadow-inner" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Blue Base: Bottom-Left */}
          <div
            className={`absolute bottom-0 left-0 w-[40%] h-[40%] p-3 border-r-2 border-t-2 border-slate-900/40 flex flex-col items-center justify-between transition-all ${
              activeColor === 'blue' ? 'ring-4 ring-sky-500 ring-inset shadow-lg' : ''
            }`}
            style={{
              background: 'linear-gradient(135deg, #1255a4, #082d5a)'
            }}
          >
            <div className="w-full h-full rounded-xl bg-[#f6e6cb] dark:bg-[#1f1610] p-2.5 border-2 border-amber-500/50 shadow-inner flex flex-col items-center justify-between">
              <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-serif font-black text-[10px] tracking-wider">
                <span>♘</span>
                <span>SAPPHIRE BLUE</span>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-3 place-items-center">
                {[0, 1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-slate-900/30 border-2 border-amber-400/60 shadow-inner flex items-center justify-center"
                  >
                    <div className="w-5 h-5 rounded-full bg-black/40 shadow-inner" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 52 Perimeter Circuit Tiles (Canonical Grid) */}
          {PERIMETER_PATH.map((tile, idx) => {
            const isSafe = SAFE_TILES.includes(idx);
            const isRedStart = idx === 0;
            const isGreenStart = idx === 13;
            const isYellowStart = idx === 26;
            const isBlueStart = idx === 39;

            let tileBg = 'radial-gradient(circle at 50% 50%, #fef8ee 0%, #edd9b4 85%, #d6bd91 100%)';
            let tileBorder = '1px solid #9c7b50';

            if (isRedStart) {
              tileBg = 'radial-gradient(circle at 50% 50%, #e8554b 0%, #c2201a 80%, #750e0a 100%)';
              tileBorder = '1px solid #570000';
            } else if (isGreenStart) {
              tileBg = 'radial-gradient(circle at 50% 50%, #46bf63 0%, #1b7a32 80%, #0b3d16 100%)';
              tileBorder = '1px solid #002c04';
            } else if (isYellowStart) {
              tileBg = 'radial-gradient(circle at 50% 50%, #ffd647 0%, #c99106 80%, #7a5400 100%)';
              tileBorder = '1px solid #543900';
            } else if (isBlueStart) {
              tileBg = 'radial-gradient(circle at 50% 50%, #479ff7 0%, #1860ad 80%, #083461 100%)';
              tileBorder = '1px solid #001f4d';
            }

            return (
              <div
                key={idx}
                className="absolute w-[6.666667%] h-[6.666667%] flex items-center justify-center text-xs font-bold shadow-inner"
                style={{
                  left: `${(tile.c / 15) * 100}%`,
                  top: `${(tile.r / 15) * 100}%`,
                  background: tileBg,
                  border: tileBorder
                }}
              >
                {/* 8 Canonical Safe Haven Stars */}
                {isSafe && (
                  <span
                    className={`font-serif select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] ${
                      isRedStart || isGreenStart || isYellowStart || isBlueStart
                        ? 'text-white text-sm'
                        : 'text-amber-500 text-sm'
                    }`}
                  >
                    ★
                  </span>
                )}
              </div>
            );
          })}

          {/* 4 Colored Home Run Lanes (5 tiles each) */}
          {Object.entries(HOME_LANES).map(([color, laneTiles]) =>
            laneTiles.map((tile, laneIdx) => {
              const bg =
                color === 'red'
                  ? 'radial-gradient(circle at 50% 50%, #e65f57 0%, #b72823 80%, #7d1713 100%)'
                  : color === 'green'
                  ? 'radial-gradient(circle at 50% 50%, #4db567 0%, #1e7a33 80%, #0d421a 100%)'
                  : color === 'yellow'
                  ? 'radial-gradient(circle at 50% 50%, #fbd558 0%, #c9930f 80%, #855f04 100%)'
                  : 'radial-gradient(circle at 50% 50%, #4fa1eb 0%, #1a62ab 80%, #0a335c 100%)';

              return (
                <div
                  key={`${color}-${laneIdx}`}
                  className="absolute w-[6.666667%] h-[6.666667%] border border-slate-900/40 flex items-center justify-center shadow-inner"
                  style={{
                    left: `${(tile.c / 15) * 100}%`,
                    top: `${(tile.r / 15) * 100}%`,
                    background: bg
                  }}
                />
              );
            })
          )}

          {/* Symmetrical Central Victory Pyramid */}
          <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] border-2 border-slate-950 overflow-hidden shadow-2xl flex items-center justify-center z-10">
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 0, 50% 50%, 0 100%)',
                background: 'linear-gradient(135deg, #d32f2f, #7f0000)'
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
                background: 'linear-gradient(135deg, #388e3c, #1b5e20)'
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
                background: 'linear-gradient(135deg, #fbc02d, #f57f17)'
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)',
                background: 'linear-gradient(135deg, #1976d2, #0d47a1)'
              }}
            />
            {/* Center Royal Medallion */}
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 border-2 border-white shadow-xl flex flex-col items-center justify-center text-amber-950 select-none">
              <span className="text-xs leading-none">✦</span>
              <span className="font-serif font-black text-[6px] tracking-widest leading-none mt-0.5">ROYAL</span>
              <span className="font-serif font-bold text-[5px] tracking-wider leading-none">LUDO</span>
            </div>
          </div>

          {/* Interactive Ghost Path Landing Preview */}
          {previewTarget && (
            <div
              className="absolute w-[6.666667%] h-[6.666667%] pointer-events-none z-30 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${previewTarget.x}%`,
                top: `${previewTarget.y}%`
              }}
            >
              <div className="w-full h-full rounded-lg border-2 border-dashed border-amber-400 bg-amber-400/40 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.8)]" />
              <span className="absolute -top-7 whitespace-nowrap bg-slate-900/95 text-amber-300 border border-amber-400/60 text-[9px] font-black px-2 py-0.5 rounded shadow-xl tracking-wider">
                {previewTarget.badge}
              </span>
            </div>
          )}

          {/* Dynamic 3D Royal Tokens Layer */}
          {players.map(player =>
            player.tokens.map((pos, tokenIdx) => {
              const coords = getTokenCoordinates(player.color, pos, tokenIdx);
              const isEligible =
                phase === 'move' &&
                player.color === activeColor &&
                availableMoves.includes(tokenIdx) &&
                (myColor === null || player.color === myColor);

              // Stacking offsets calculation
              let offsetX = 0;
              let offsetY = 0;
              let scale = 1;

              if (pos >= 0 && pos <= 50) {
                const gPos = (START_TILES[player.color] + pos) % 52;
                const occupants = occupancyMap[gPos] || [];
                if (occupants.length > 1) {
                  const idxInCell = occupants.findIndex(
                    o => o.player.color === player.color && o.tokenIdx === tokenIdx
                  );
                  if (occupants.length === 2) {
                    offsetX = idxInCell === 0 ? -5 : 5;
                    scale = 0.9;
                  } else if (occupants.length === 3) {
                    offsetX = idxInCell === 0 ? -5 : idxInCell === 1 ? 5 : 0;
                    offsetY = idxInCell === 2 ? 6 : -4;
                    scale = 0.82;
                  } else {
                    offsetX = idxInCell % 2 === 0 ? -5 : 5;
                    offsetY = idxInCell < 2 ? -5 : 5;
                    scale = 0.75;
                  }
                }
              }

              return (
                <Token
                  key={`${player.color}-${tokenIdx}`}
                  color={player.color}
                  tokenIndex={tokenIdx}
                  xPercent={coords.x}
                  yPercent={coords.y}
                  offsetX={offsetX}
                  offsetY={offsetY}
                  scale={scale}
                  isEligible={isEligible}
                  isFinished={pos === 56}
                  onHoverStart={() => isEligible && setHoveredToken({ color: player.color, tokenIndex: tokenIdx })}
                  onHoverEnd={() => setHoveredToken(null)}
                  onClick={() => {
                    setHoveredToken(null);
                    onMoveToken(tokenIdx);
                  }}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
