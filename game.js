/**
 * ROYAL LUDO — LUXURY HANDCRAFTED WOODEN EDITION
 * Canonical 15x15 Indian & International Ludo Engine
 * Features:
 * - Persistent DOM Pawn Elements with Fluid CSS Trajectory
 * - Parabolic Hop Motion with Disney-grade Squash & Stretch
 * - Smooth Yard Deployment Arc (Rolling a 6)
 * - Knockout Spin & Swoosh Capture Animation
 * - Interactive Landing Target Ghost Preview & Hover Lift
 * - Dynamic 3D Tumbling Dice with Felt Tray Rumble
 * - Consecrated Safe Havens & Central Home Victory Pyramid
 * - Procedural Web Audio with Randomized Footstep Resonance
 * - Confetti & Golden Sparkle Particle Celebrations
 */

(() => {
  'use strict';

  // --- Board Constants & Canonical 15x15 Track Definitions ---
  const COLORS = ['red', 'green', 'yellow', 'blue'];
  const COLOR_LABELS = {
    red: 'Ruby Red',
    green: 'Emerald Green',
    yellow: 'Amber Gold',
    blue: 'Sapphire Blue'
  };
  const COLOR_CRESTS = {
    red: '♔',
    green: '♕',
    yellow: '♗',
    blue: '♘'
  };

  // Starting indices on the 52-tile perimeter
  const START_TILES = {
    red: 0,
    green: 13,
    yellow: 26,
    blue: 39
  };

  // Safe squares on the 52-tile perimeter (Canonical 8 safe spots)
  const SAFE_TILES = new Set([0, 8, 13, 21, 26, 34, 39, 47]);

  // Compute canonical (row, col) from 0 to 14 for the 52 perimeter tiles
  function computePerimeterPath() {
    const path = [];
    // 1. Red arm going right: (6,1) to (6,5)
    for (let c = 1; c <= 5; c++) path.push({ r: 6, c });
    // 2. Top arm going up: (5,6) to (0,6)
    for (let r = 5; r >= 0; r--) path.push({ r, c: 6 });
    // 3. Top arm top edge: (0,7)
    path.push({ r: 0, c: 7 });
    // 4. Top arm going down: (0,8) to (5,8)
    for (let r = 0; r <= 5; r++) path.push({ r, c: 8 });
    // 5. Right arm going right: (6,9) to (6,14)
    for (let c = 9; c <= 14; c++) path.push({ r: 6, c });
    // 6. Right arm right edge: (7,14)
    path.push({ r: 7, c: 14 });
    // 7. Right arm going left: (8,14) to (8,9)
    for (let c = 14; c >= 9; c--) path.push({ r: 8, c });
    // 8. Bottom arm going down: (9,8) to (14,8)
    for (let r = 9; r <= 14; r++) path.push({ r, c: 8 });
    // 9. Bottom arm bottom edge: (14,7)
    path.push({ r: 14, c: 7 });
    // 10. Bottom arm going up: (14,6) to (9,6)
    for (let r = 14; r >= 9; r--) path.push({ r, c: 6 });
    // 11. Left arm going left: (8,5) to (8,0)
    for (let c = 5; c >= 0; c--) path.push({ r: 8, c });
    // 12. Left arm left edge: (7,0)
    path.push({ r: 7, c: 0 });
    // 13. Red entry edge: (6,0)
    path.push({ r: 6, c: 0 });
    return path;
  }

  const PERIMETER_PATH = computePerimeterPath();

  // 5 Home Run tiles leading into center for each color (row, col)
  const HOME_LANES = {
    red: [
      { r: 7, c: 1 }, { r: 7, c: 2 }, { r: 7, c: 3 }, { r: 7, c: 4 }, { r: 7, c: 5 }
    ],
    green: [
      { r: 1, c: 7 }, { r: 2, c: 7 }, { r: 3, c: 7 }, { r: 4, c: 7 }, { r: 5, c: 7 }
    ],
    yellow: [
      { r: 7, c: 13 }, { r: 7, c: 12 }, { r: 7, c: 11 }, { r: 7, c: 10 }, { r: 7, c: 9 }
    ],
    blue: [
      { r: 13, c: 7 }, { r: 12, c: 7 }, { r: 11, c: 7 }, { r: 10, c: 7 }, { r: 9, c: 7 }
    ]
  };

  // Convert (row, col) to percentage coordinates (0..100%)
  function cellToPercent(r, c) {
    const cellSize = 100 / 15; // 6.666667%
    return {
      x: (c + 0.5) * cellSize,
      y: (r + 0.5) * cellSize
    };
  }

  // Pre-calculated percentage paths
  const PATH_PERCENT = PERIMETER_PATH.map(p => cellToPercent(p.r, p.c));
  const LANES_PERCENT = {
    red: HOME_LANES.red.map(p => cellToPercent(p.r, p.c)),
    green: HOME_LANES.green.map(p => cellToPercent(p.r, p.c)),
    yellow: HOME_LANES.yellow.map(p => cellToPercent(p.r, p.c)),
    blue: HOME_LANES.blue.map(p => cellToPercent(p.r, p.c))
  };

  // Home Base Yard Token Slot percentage coordinates
  const YARD_COORDS = {
    red: [
      { x: 15.3, y: 15.3 }, { x: 24.7, y: 15.3 },
      { x: 15.3, y: 24.7 }, { x: 24.7, y: 24.7 }
    ],
    green: [
      { x: 75.3, y: 15.3 }, { x: 84.7, y: 15.3 },
      { x: 75.3, y: 24.7 }, { x: 84.7, y: 24.7 }
    ],
    yellow: [
      { x: 75.3, y: 75.3 }, { x: 84.7, y: 75.3 },
      { x: 75.3, y: 84.7 }, { x: 84.7, y: 84.7 }
    ],
    blue: [
      { x: 15.3, y: 75.3 }, { x: 24.7, y: 75.3 },
      { x: 15.3, y: 84.7 }, { x: 84.7, y: 84.7 }
    ]
  };

  // Finished Home Center percentage coordinates
  const FINISHED_COORDS = {
    red: [
      { x: 45.0, y: 48.0 }, { x: 45.0, y: 52.0 },
      { x: 42.5, y: 46.0 }, { x: 42.5, y: 54.0 }
    ],
    green: [
      { x: 48.0, y: 45.0 }, { x: 52.0, y: 45.0 },
      { x: 46.0, y: 42.5 }, { x: 54.0, y: 42.5 }
    ],
    yellow: [
      { x: 55.0, y: 48.0 }, { x: 55.0, y: 52.0 },
      { x: 57.5, y: 46.0 }, { x: 57.5, y: 54.0 }
    ],
    blue: [
      { x: 48.0, y: 55.0 }, { x: 52.0, y: 55.0 },
      { x: 46.0, y: 57.5 }, { x: 54.0, y: 57.5 }
    ]
  };

  // --- Procedural Web Audio Synthesizer ---
  class SoundManager {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }

    playDiceRoll() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      for (let i = 0; i < 6; i++) {
        const delay = i * 0.07 + Math.random() * 0.02;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(160 + Math.random() * 80, now + delay);
        osc.frequency.exponentialRampToValueAtTime(45, now + delay + 0.055);

        gain.gain.setValueAtTime(0.24 - i * 0.035, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.055);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.06);
      }
    }

    playPawnStep() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      // Organic pitch randomization for authentic wood footsteps
      const baseFreq = 410 + (Math.random() - 0.5) * 60;
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.075);

      gain.gain.setValueAtTime(0.26, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    }

    playDeploy() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.22);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.34);
    }

    playHover() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(540, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }

    playCapture() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(70, now + 0.22);

      gain.gain.setValueAtTime(0.36, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.26);
    }

    playSafe() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [880, 1320].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0.18, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.38);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.4);
      });
    }

    playSix() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.2, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.32);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.35);
      });
    }

    playFanfare() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [261.63, 329.63, 392.00, 523.25, 392.00, 523.25];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        const start = now + idx * 0.14;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.3, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.4);
      });
    }
  }

  // --- Confetti Engine ---
  class ConfettiEngine {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
      this.particles = [];
      this.active = false;
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    burst(x = window.innerWidth / 2, y = window.innerHeight / 2, count = 70) {
      if (!this.ctx) return;
      const colors = ['#dfb256', '#f6e6cb', '#e53935', '#2e7d32', '#f59e0b', '#1976d2', '#ffffff'];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 4 + Math.random() * 9;
        this.particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          w: 8 + Math.random() * 8,
          h: 4 + Math.random() * 6,
          rot: Math.random() * 360,
          vrot: (Math.random() - 0.5) * 12,
          life: 1.0,
          decay: 0.012 + Math.random() * 0.015
        });
      }
      if (!this.active) {
        this.active = true;
        this.loop();
      }
    }

    loop() {
      if (!this.active || !this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22; // Gravity
        p.vx *= 0.98;
        p.rot += p.vrot;
        p.life -= p.decay;

        if (p.life <= 0) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rot * Math.PI) / 180);
        this.ctx.globalAlpha = p.life;
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        this.ctx.restore();
      }

      if (this.particles.length > 0) {
        requestAnimationFrame(() => this.loop());
      } else {
        this.active = false;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  // --- Game State & UI Controller ---
  const sound = new SoundManager();
  const confetti = new ConfettiEngine('confettiCanvas');

  let state = null;
  let selectedCount = 4;
  let isAnimating = false;
  let isFastSpeed = false;
  let toastTimer = null;
  let aiTimeoutId = null;

  // Persistent Pawn DOM Elements Map: `${player.color}-${tokenIndex}` -> HTMLButtonElement
  const pawnElements = {};

  // DOM Elements cache
  const $ = id => document.getElementById(id);
  const setupScreen = $('setup');
  const gameScreen = $('game');
  const diceCube = $('diceCube');
  const diceCubeContainer = $('diceCubeContainer');
  const perspectiveWrap = $('perspectiveWrap');

  // --- Floating Event Badges & Shockwaves ---
  function spawnFloatingEventBadge(text, xPercent, yPercent) {
    const surface = $('boardSurface');
    if (!surface) return;
    const badge = document.createElement('div');
    badge.className = 'floating-event-badge';
    badge.textContent = text;
    badge.style.left = `${xPercent}%`;
    badge.style.top = `${yPercent}%`;
    surface.appendChild(badge);
    setTimeout(() => badge.remove(), 1400);
  }

  function spawnShockwave(xPercent, yPercent) {
    const surface = $('boardSurface');
    if (!surface) return;
    const wave = document.createElement('div');
    wave.className = 'tile-shockwave';
    wave.style.left = `${xPercent}%`;
    wave.style.top = `${yPercent}%`;
    wave.innerHTML = '<div class="shockwave-circle"></div>';
    surface.appendChild(wave);
    setTimeout(() => wave.remove(), 550);
  }

  // --- Landing Target Destination Preview ---
  function showLandingPreview(player, tokenIdx) {
    clearLandingPreview();
    if (!state || state.phase !== 'move' || isAnimating) return;
    const roll = state.roll;
    if (!roll) return;
    const pos = player.tokens[tokenIdx];
    const targetPos = pos === -1 ? 0 : pos + roll;
    if (targetPos > 57) return;

    const targetCoords = getTokenCoords(player, targetPos, tokenIdx);
    const surface = $('boardSurface');
    if (!surface) return;

    const marker = document.createElement('div');
    marker.id = 'landingPreviewMarker';
    marker.className = 'landing-preview-marker';
    marker.style.left = `${targetCoords.x}%`;
    marker.style.top = `${targetCoords.y}%`;

    let badgeText = `+${roll} STEPS`;
    if (pos === -1) {
      badgeText = '✦ DEPLOY TO START';
    } else if (targetPos === 57) {
      badgeText = '🏆 REACH HOME!';
    } else if (targetPos <= 50) {
      const gPos = getGlobalPos(player, targetPos);
      if (!SAFE_TILES.has(gPos)) {
        let isEnemy = false;
        state.players.forEach(op => {
          if (op === player) return;
          op.tokens.forEach(opos => {
            if (opos >= 0 && opos <= 50 && getGlobalPos(op, opos) === gPos) {
              isEnemy = true;
            }
          });
        });
        if (isEnemy) badgeText = '⚔ CAPTURE OPPONENT!';
      } else {
        badgeText = '★ SAFE HAVEN';
      }
    }

    marker.innerHTML = `
      <div class="preview-ring"></div>
      <div class="preview-badge">${badgeText}</div>
    `;
    surface.appendChild(marker);
  }

  function clearLandingPreview() {
    const existing = $('landingPreviewMarker');
    if (existing) existing.remove();
  }

  // --- Initialization ---
  function init() {
    initSetupUI();
    initGlobalControls();
    buildBoardTrackLayer();
    renderSetupPlayers();
  }

  // Setup UI Listeners
  function initSetupUI() {
    document.querySelectorAll('.count-card').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedCount = Number(btn.dataset.count);
        document.querySelectorAll('.count-card').forEach(b => b.classList.toggle('selected', b === btn));
        renderSetupPlayers();
      });
    });

    $('startGameBtn').addEventListener('click', startMatch);
  }

  // Global Controls Listeners
  function initGlobalControls() {
    // 3D Perspective Toggle
    const viewBtn = $('viewToggleBtn');
    let is3d = true;
    viewBtn.addEventListener('click', () => {
      is3d = !is3d;
      perspectiveWrap.classList.toggle('view-3d', is3d);
      perspectiveWrap.classList.toggle('view-flat', !is3d);
      viewBtn.querySelector('.btn-label').textContent = is3d ? '3D Table' : 'Flat View';
    });

    // Sound Toggle
    const soundBtn = $('soundToggleBtn');
    soundBtn.addEventListener('click', () => {
      const active = sound.toggle();
      $('soundIcon').textContent = active ? '🔊' : '🔇';
      soundBtn.querySelector('.btn-label').textContent = active ? 'Audio On' : 'Muted';
    });

    // Speed Toggle
    const speedBtn = $('speedToggleBtn');
    speedBtn.addEventListener('click', () => {
      isFastSpeed = !isFastSpeed;
      speedBtn.querySelector('.btn-label').textContent = isFastSpeed ? 'Fast ⚡' : 'Normal';
      const arena = $('boardArena');
      if (arena) arena.classList.toggle('fast-speed', isFastSpeed);
    });

    // Rules Modal
    $('rulesBtn').addEventListener('click', () => $('rulesModal').classList.remove('hidden'));
    $('closeRulesBtn').addEventListener('click', () => $('rulesModal').classList.add('hidden'));
    $('rulesGotItBtn').addEventListener('click', () => $('rulesModal').classList.add('hidden'));

    // Top Navigation & Action Buttons
    $('newGameTop').addEventListener('click', () => {
      if (state && !confirm('Start a new match? Current table progress will be lost.')) return;
      returnToLobby();
    });
    $('restartBtn').addEventListener('click', () => {
      if (confirm('Restart this match from the beginning with the same seated players?')) startMatch();
    });
    $('lobbyBtn').addEventListener('click', () => {
      if (confirm('Leave this table and return to the Parlor lobby?')) returnToLobby();
    });
    $('playAgainBtn').addEventListener('click', () => {
      $('winModal').classList.add('hidden');
      startMatch();
    });
    $('winLobbyBtn').addEventListener('click', () => {
      $('winModal').classList.add('hidden');
      returnToLobby();
    });

    // 3D Dice Container Click & Spacebar listener
    diceCubeContainer.addEventListener('click', handleDiceClick);
    window.addEventListener('keydown', e => {
      if (e.code === 'Space' && state && !state.winner && state.phase === 'roll' && !isAnimating) {
        const curr = state.players[state.turn];
        if (!curr.isBot) {
          e.preventDefault();
          rollDice();
        }
      }
    });
  }

  // Determine active colors based on count
  function getActiveColors(count) {
    if (count === 2) return ['red', 'yellow']; // Classic opposite corner duel
    if (count === 3) return ['red', 'green', 'yellow'];
    return ['red', 'green', 'yellow', 'blue'];
  }

  // Render Setup Player rows
  function renderSetupPlayers() {
    const list = $('playerSetupList');
    list.innerHTML = '';
    const active = getActiveColors(selectedCount);

    active.forEach((color, idx) => {
      const row = document.createElement('div');
      row.className = 'player-config-row';
      const isDefaultBot = idx > 0; // Player 1 is Human, others default to Bot for easy solo play!
      row.innerHTML = `
        <div class="color-bullet ${color}"></div>
        <input type="text" class="player-name-input" id="name-${color}" maxlength="15" value="${COLOR_LABELS[color]}" placeholder="Enter name…">
        <button type="button" class="ai-toggle-btn ${isDefaultBot ? 'is-bot' : ''}" id="botToggle-${color}" data-color="${color}">
          <span>${isDefaultBot ? '🤖 Bot' : '👤 Human'}</span>
        </button>
      `;
      list.appendChild(row);

      const botBtn = row.querySelector('.ai-toggle-btn');
      botBtn.addEventListener('click', () => {
        const isBot = botBtn.classList.toggle('is-bot');
        botBtn.innerHTML = `<span>${isBot ? '🤖 Bot' : '👤 Human'}</span>`;
      });
    });
  }

  // Build the 15x15 Track Tiles Layer into the Board
  function buildBoardTrackLayer() {
    const container = $('boardTilesLayer');
    container.innerHTML = '';

    // 1. Build 52 Perimeter Tiles
    PERIMETER_PATH.forEach((p, idx) => {
      const tile = document.createElement('div');
      tile.className = 'track-tile';
      tile.style.left = `${(p.c / 15) * 100}%`;
      tile.style.top = `${(p.r / 15) * 100}%`;
      tile.dataset.tileIndex = idx;

      // Safe spot or starting tile styling
      if (idx === 0) tile.classList.add('start-red', 'safe-spot');
      else if (idx === 13) tile.classList.add('start-green', 'safe-spot');
      else if (idx === 26) tile.classList.add('start-yellow', 'safe-spot');
      else if (idx === 39) tile.classList.add('start-blue', 'safe-spot');
      else if (SAFE_TILES.has(idx)) tile.classList.add('safe-spot');

      container.appendChild(tile);
    });

    // 2. Build 4 Colored Home Run Lanes (5 tiles each)
    Object.entries(HOME_LANES).forEach(([color, coords]) => {
      coords.forEach((p, laneIdx) => {
        const tile = document.createElement('div');
        tile.className = `track-tile lane-${color}`;
        tile.style.left = `${(p.c / 15) * 100}%`;
        tile.style.top = `${(p.r / 15) * 100}%`;
        tile.dataset.lane = `${color}-${laneIdx}`;
        container.appendChild(tile);
      });
    });
  }

  // --- Instantiate Persistent Pawn DOM Elements ---
  function initPawnElements() {
    const container = $('pawnsLayer');
    container.innerHTML = '';
    for (const k in pawnElements) delete pawnElements[k];

    state.players.forEach(p => {
      for (let i = 0; i < 4; i++) {
        const key = `${p.color}-${i}`;
        const btn = document.createElement('button');
        btn.id = `pawn-${key}`;
        btn.className = `royal-pawn ${p.color}`;
        btn.setAttribute('aria-label', `${p.name} Token ${i + 1}`);

        const initialCoords = YARD_COORDS[p.color][i];
        btn.style.left = `${initialCoords.x}%`;
        btn.style.top = `${initialCoords.y}%`;

        btn.innerHTML = `
          <div class="pawn-visual">
            <span class="pawn-crown">${i + 1}</span>
          </div>
          <div class="pawn-shadow"></div>
        `;

        // Hover destination preview
        btn.addEventListener('mouseenter', () => {
          if (btn.classList.contains('eligible') && !isAnimating) {
            sound.playHover();
            showLandingPreview(p, i);
          }
        });
        btn.addEventListener('mouseleave', () => {
          clearLandingPreview();
        });

        // Click to execute move
        btn.addEventListener('click', () => {
          if (btn.classList.contains('eligible') && !isAnimating) {
            clearLandingPreview();
            executePawnMove(i);
          }
        });

        container.appendChild(btn);
        pawnElements[key] = btn;
      }
    });
  }

  // --- Start Match ---
  function startMatch() {
    clearTimeout(aiTimeoutId);
    clearLandingPreview();
    const activeColors = getActiveColors(selectedCount);

    state = {
      players: activeColors.map(c => {
        const nameInput = $(`name-${c}`);
        const botBtn = $(`botToggle-${c}`);
        const name = (nameInput?.value || COLOR_LABELS[c]).trim() || COLOR_LABELS[c];
        const isBot = botBtn ? botBtn.classList.contains('is-bot') : false;
        return {
          color: c,
          name,
          isBot,
          tokens: [-1, -1, -1, -1], // -1: in yard; 0..51: on track; 52..56: home lane; 57: finished home
          finished: 0,
          captures: 0
        };
      }),
      turn: 0,
      roll: null,
      sixesCount: 0,
      phase: 'roll', // 'roll' | 'move' | 'animating' | 'pass'
      winner: null,
      log: [],
      turnCount: 0
    };

    setupScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    initPawnElements();
    renderTurnTracker();
    renderPlayerCards();
    renderBoardTokens();
    updateTurnDisplay();

    addLog(`Match started with ${state.players.length} seated players. May fortune favor the bold.`);
    checkAndTriggerAI();
  }

  function returnToLobby() {
    clearTimeout(aiTimeoutId);
    clearLandingPreview();
    state = null;
    gameScreen.classList.add('hidden');
    setupScreen.classList.remove('hidden');
    $('winModal').classList.add('hidden');
  }

  // --- Core Game Logic ---
  function current() {
    return state.players[state.turn];
  }

  // Calculate global perimeter index from player's relative track position (0..51)
  function getGlobalPos(player, relativePos) {
    return (START_TILES[player.color] + relativePos) % 52;
  }

  // Get coordinates for a token at a given relative position (-1 to 57)
  function getTokenCoords(player, pos, tokenIndex) {
    // 1. In Yard
    if (pos === -1) {
      return YARD_COORDS[player.color][tokenIndex];
    }
    // 2. On Perimeter Track (0 to 51)
    if (pos <= 51) {
      const gPos = getGlobalPos(player, pos);
      return PATH_PERCENT[gPos];
    }
    // 3. In Colored Home Lane (52 to 56)
    if (pos <= 56) {
      const laneIdx = pos - 52;
      return LANES_PERCENT[player.color][laneIdx];
    }
    // 4. In Victory Home (57)
    return FINISHED_COORDS[player.color][tokenIndex];
  }

  // Find all legal move token indices for a player given a roll
  function getLegalMoves(player, roll) {
    const legal = [];
    player.tokens.forEach((pos, tokenIdx) => {
      // Already in Home Center
      if (pos === 57) return;

      // In yard: only a 6 can release it
      if (pos === -1) {
        if (roll === 6) legal.push(tokenIdx);
        return;
      }

      // On track or home lane: cannot overshoot 57 (exact roll required)
      if (pos + roll <= 57) {
        legal.push(tokenIdx);
      }
    });
    return legal;
  }

  // Handle Dice Roll
  function handleDiceClick() {
    if (!state || state.winner || state.phase !== 'roll' || isAnimating) return;
    const p = current();
    if (p.isBot) return; // Prevent human clicking during bot's turn
    rollDice();
  }

  function rollDice() {
    if (!state || state.winner || state.phase !== 'roll' || isAnimating) return;
    isAnimating = true;

    sound.playDiceRoll();

    // Shake Felt Tray on Roll
    const tray = document.querySelector('.dice-cup-tray');
    if (tray) {
      tray.classList.remove('shake');
      void tray.offsetWidth;
      tray.classList.add('shake');
    }

    // Trigger 3D Tumbling Animation
    diceCube.classList.remove('rolling', 'show-1', 'show-2', 'show-3', 'show-4', 'show-5', 'show-6');
    void diceCube.offsetWidth;
    diceCube.classList.add('rolling');

    const rollValue = Math.floor(Math.random() * 6) + 1;
    state.roll = rollValue;

    const animDuration = isFastSpeed ? 400 : 700;

    setTimeout(() => {
      diceCube.classList.remove('rolling');
      diceCube.classList.add(`show-${rollValue}`);
      isAnimating = false;

      // Floating roll badge over dice tray
      const diceTray = document.querySelector('.dice-cup-tray');
      if (diceTray) {
        const floatTxt = document.createElement('div');
        floatTxt.className = 'floating-event-badge';
        floatTxt.style.position = 'absolute';
        floatTxt.style.left = '50%';
        floatTxt.style.top = '10%';
        floatTxt.textContent = rollValue === 6 ? '⚅ SIX! +1 TURN' : `ROLLED ${rollValue}`;
        diceTray.appendChild(floatTxt);
        setTimeout(() => floatTxt.remove(), 1200);
      }

      handleRollOutcome(rollValue);
    }, animDuration);
  }

  function handleRollOutcome(roll) {
    const p = current();

    if (roll === 6) {
      state.sixesCount++;
      sound.playSix();
    } else {
      state.sixesCount = 0;
    }

    addLog(`${p.name} rolled a <b>${roll}</b>.`);

    // Check for 3 consecutive sixes rule
    if (state.sixesCount === 3) {
      showToast('Three consecutive 6s! Roll voided.');
      spawnFloatingEventBadge('⛔ 3 SIXES VOIDED', 50, 50);
      addLog(`Three consecutive sixes rolled by ${p.name}! Third roll is cancelled.`);
      state.roll = null;
      state.sixesCount = 0;
      advanceTurn();
      return;
    }

    const legal = getLegalMoves(p, roll);

    if (legal.length === 0) {
      showToast('No valid moves — passing turn…');
      state.phase = 'pass';
      updateTurnDisplay();
      setTimeout(() => {
        if (!state || state.winner) return;
        state.roll = null;
        if (roll === 6) {
          state.phase = 'roll';
          updateTurnDisplay();
          checkAndTriggerAI();
        } else {
          advanceTurn();
        }
      }, isFastSpeed ? 700 : 1200);
      return;
    }

    state.phase = 'move';
    updateTurnDisplay();
    renderBoardTokens();

    if (p.isBot) {
      const bestMove = chooseBestAIMove(p, roll, legal);
      aiTimeoutId = setTimeout(() => {
        executePawnMove(bestMove);
      }, isFastSpeed ? 350 : 600);
    }
  }

  // --- Step-by-Step Natural Parabolic Pawn Hopping ---
  async function executePawnMove(tokenIndex) {
    if (!state || state.phase !== 'move' || isAnimating) return;
    clearLandingPreview();
    isAnimating = true;
    state.phase = 'animating';

    const p = current();
    const roll = state.roll;
    const startPos = p.tokens[tokenIndex];
    const key = `${p.color}-${tokenIndex}`;
    const btn = pawnElements[key];

    // Remove eligible glow during motion
    document.querySelectorAll('.royal-pawn.eligible').forEach(el => el.classList.remove('eligible'));

    // Case 1: Deploying out of Yard to Track Start (Rolling a 6)
    if (startPos === -1) {
      p.tokens[tokenIndex] = 0;
      sound.playDeploy();
      btn.classList.add('deploying-yard');

      const startCoords = getTokenCoords(p, 0, tokenIndex);
      btn.style.left = `${startCoords.x}%`;
      btn.style.top = `${startCoords.y}%`;

      spawnShockwave(startCoords.x, startCoords.y);
      spawnFloatingEventBadge('✦ DEPLOYED! ✦', startCoords.x, startCoords.y);
      addLog(`✦ <b>${p.name}</b> deployed token ${tokenIndex + 1} onto start square!`);

      await sleep(isFastSpeed ? 260 : 450);
      btn.classList.remove('deploying-yard');
      renderBoardTokens();
      finishMove(tokenIndex, roll, false);
      return;
    }

    // Case 2: Smooth Natural Parabolic Hopping Step-by-Step
    const endPos = startPos + roll;
    const stepDuration = isFastSpeed ? 100 : 170;

    for (let currentStep = startPos + 1; currentStep <= endPos; currentStep++) {
      p.tokens[tokenIndex] = currentStep;
      const stepCoords = getTokenCoords(p, currentStep, tokenIndex);

      btn.classList.remove('is-hopping');
      void btn.offsetWidth; // Force reflow to re-trigger hop keyframe!
      btn.classList.add('is-hopping');

      sound.playPawnStep();

      btn.style.left = `${stepCoords.x}%`;
      btn.style.top = `${stepCoords.y}%`;

      await sleep(stepDuration);
    }

    btn.classList.remove('is-hopping');
    renderBoardTokens(); // Settle any stacking offsets
    finishMove(tokenIndex, roll, true);
  }

  // Finalize move: handle captures, home reach, extra turns, and win detection
  async function finishMove(tokenIndex, roll, wasMoveOnBoard) {
    const p = current();
    const finalPos = p.tokens[tokenIndex];
    const finalCoords = getTokenCoords(p, finalPos, tokenIndex);
    let captured = false;

    // Check Capture on common perimeter track (finalPos <= 50)
    if (finalPos <= 50) {
      const gPos = getGlobalPos(p, finalPos);
      if (!SAFE_TILES.has(gPos)) {
        for (const op of state.players) {
          if (op === p) continue;
          for (let oidx = 0; oidx < 4; oidx++) {
            const opos = op.tokens[oidx];
            if (opos >= 0 && opos <= 50 && getGlobalPos(op, opos) === gPos) {
              // Capture! Send back to yard with knockout animation
              captured = true;
              op.tokens[oidx] = -1;
              p.captures++;
              sound.playCapture();

              const enemyKey = `${op.color}-${oidx}`;
              const enemyBtn = pawnElements[enemyKey];
              if (enemyBtn) {
                enemyBtn.classList.add('captured-knockout');
                const yardPos = YARD_COORDS[op.color][oidx];
                enemyBtn.style.left = `${yardPos.x}%`;
                enemyBtn.style.top = `${yardPos.y}%`;
                setTimeout(() => enemyBtn && enemyBtn.classList.remove('captured-knockout'), 560);
              }

              spawnShockwave(finalCoords.x, finalCoords.y);
              spawnFloatingEventBadge('⚔ CAPTURED! +1 TURN ⚔', finalCoords.x, finalCoords.y);
              confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 45);
              showToast(`⚔ Capture! ${p.name} eliminated ${op.name}'s token!`);
              addLog(`⚔ <b>${p.name}</b> captured <b>${op.name}</b>'s token ${oidx + 1}!`);
            }
          }
        }
      } else {
        sound.playSafe();
        spawnFloatingEventBadge('★ SAFE HAVEN ★', finalCoords.x, finalCoords.y);
      }
    }

    // Check Token Reached Home Pyramid (57)
    if (finalPos === 57) {
      p.finished++;
      sound.playSafe();
      spawnShockwave(finalCoords.x, finalCoords.y);
      spawnFloatingEventBadge('🏆 HOME PYRAMID! 🏆', finalCoords.x, finalCoords.y);
      confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 60);
      showToast(`🏆 Token ${tokenIndex + 1} reached Home!`);
      addLog(`🏆 <b>${p.name}</b>'s token reached the Imperial Home Pyramid!`);
    }

    // Check Victory Condition (All 4 tokens home)
    if (p.finished === 4) {
      handleMatchVictory(p);
      return;
    }

    if (captured) {
      await sleep(isFastSpeed ? 280 : 500);
    }

    state.roll = null;
    isAnimating = false;

    // Extra Turn Check: Six rolled OR Token Captured!
    if (roll === 6 || captured) {
      state.phase = 'roll';
      const reason = roll === 6 && captured ? 'Six and a Capture! Extra roll granted.' :
        captured ? 'Capture bonus! Roll again.' : 'Rolled a 6! Extra roll granted.';
      if (roll === 6 && !captured) {
        spawnFloatingEventBadge('★ SIX! ROLL AGAIN! ★', 50, 50);
      }
      showToast(reason);
      addLog(`✦ ${reason}`);
      renderPlayerCards();
      updateTurnDisplay();
      renderBoardTokens();
      checkAndTriggerAI();
    } else {
      advanceTurn();
    }
  }

  function advanceTurn() {
    state.roll = null;
    state.phase = 'roll';
    state.sixesCount = 0;
    state.turnCount++;

    let next = state.turn;
    do {
      next = (next + 1) % state.players.length;
    } while (state.players[next].finished === 4);

    state.turn = next;
    isAnimating = false;

    renderTurnTracker();
    renderPlayerCards();
    updateTurnDisplay();
    renderBoardTokens();
    checkAndTriggerAI();
  }

  // --- Smart AI Decision Engine ---
  function chooseBestAIMove(player, roll, legalMoves) {
    let bestScore = -9999;
    let chosen = legalMoves[0];

    legalMoves.forEach(idx => {
      const pos = player.tokens[idx];
      let score = 0;

      // Unlocking from yard
      if (pos === -1) {
        score += 240; // High incentive to bring pawns into play
      } else {
        const nextPos = pos + roll;

        // 1. Can reach Home? (Huge reward)
        if (nextPos === 57) {
          score += 600;
        }

        // 2. Can capture an enemy token? (High reward)
        if (nextPos <= 50) {
          const gPos = getGlobalPos(player, nextPos);
          if (!SAFE_TILES.has(gPos)) {
            let canCapture = false;
            state.players.forEach(op => {
              if (op === player) return;
              op.tokens.forEach(opos => {
                if (opos >= 0 && opos <= 50 && getGlobalPos(op, opos) === gPos) {
                  canCapture = true;
                }
              });
            });
            if (canCapture) score += 420;
          }
        }

        // 3. Can reach a safe spot?
        if (nextPos <= 50 && SAFE_TILES.has(getGlobalPos(player, nextPos))) {
          score += 180;
        }

        // 4. Entering safe home lane
        if (nextPos >= 52) {
          score += 190;
        }

        // 5. General advancement bonus (push furthest or bring forward trailing)
        score += nextPos * 2;
      }

      if (score > bestScore) {
        bestScore = score;
        chosen = idx;
      }
    });

    return chosen;
  }

  function checkAndTriggerAI() {
    if (!state || state.winner || state.phase !== 'roll') return;
    const p = current();
    if (p.isBot) {
      aiTimeoutId = setTimeout(() => {
        if (state && !state.winner && state.phase === 'roll') {
          rollDice();
        }
      }, isFastSpeed ? 400 : 750);
    }
  }

  // --- Match Victory Celebration ---
  function handleMatchVictory(winner) {
    state.winner = winner;
    state.phase = 'finished';
    isAnimating = false;

    sound.playFanfare();
    confetti.burst(window.innerWidth / 2, window.innerHeight * 0.4, 120);

    // Continuous celebration bursts
    setTimeout(() => confetti.burst(window.innerWidth * 0.3, window.innerHeight * 0.5, 70), 500);
    setTimeout(() => confetti.burst(window.innerWidth * 0.7, window.innerHeight * 0.5, 70), 1000);

    $('winPlayerName').textContent = `${winner.name} Triumphs!`;
    $('winPlayerDesc').textContent = `All four ${COLOR_LABELS[winner.color]} tokens have attained the Imperial Home Pyramid in glorious triumph!`;

    $('winStatsGrid').innerHTML = `
      <div class="feat-box"><b>Turns Taken</b><small>${state.turnCount}</small></div>
      <div class="feat-box"><b>Captures Made</b><small>${winner.captures}</small></div>
      <div class="feat-box"><b>Champion Crown</b><small>${COLOR_CRESTS[winner.color]}</small></div>
    `;

    $('winModal').classList.remove('hidden');
    addLog(`👑 <b>${winner.name}</b> has claimed ultimate victory! Match concluded.`);
  }

  // --- Rendering UI Updates ---
  function updateTurnDisplay() {
    const p = current();
    const isBot = p.isBot;

    // Header Color Pill
    const pill = $('turnColorPill');
    pill.className = `color-badge ${p.color}`;
    pill.textContent = `${COLOR_LABELS[p.color].toUpperCase()}'S TURN`;

    // Turn Avatar & Details
    const avatar = $('turnAvatar');
    avatar.className = `turn-avatar ${p.color}-avatar`;
    avatar.textContent = COLOR_CRESTS[p.color];

    $('turnOwnerName').textContent = p.name + (isBot ? ' (Bot)' : '');

    // Status Text
    const status = $('turnStatusText');
    const prompt = $('dicePrompt');

    if (state.phase === 'roll') {
      status.textContent = isBot ? 'Bot is contemplating roll…' : 'Awaiting dice roll…';
      prompt.innerHTML = isBot ? 'Rolling dice…' : '<span class="kbd-badge">SPACE</span> or <span class="click-badge">CLICK DICE</span> to Roll';
    } else if (state.phase === 'move') {
      status.textContent = `Rolled a ${state.roll}. Select a highlighted pawn.`;
      prompt.innerHTML = isBot ? 'Bot is moving pawn…' : 'Tap an eligible pawn on the board';
    } else if (state.phase === 'pass') {
      status.textContent = 'No moves possible. Passing turn…';
      prompt.innerHTML = 'Passing turn…';
    }

    // Move Choices Buttons in HUD
    const moveSection = $('moveButtonsList');
    moveSection.innerHTML = '';

    if (state.phase === 'move' && !isBot) {
      const legal = getLegalMoves(p, state.roll);
      legal.forEach(tokenIdx => {
        const btn = document.createElement('button');
        btn.className = 'move-btn';
        const pos = p.tokens[tokenIdx];
        const label = pos === -1 ? `Release Pawn ${tokenIdx + 1} from Yard` :
          pos + state.roll === 57 ? `Move Pawn ${tokenIdx + 1} into HOME! 🏆` :
            `Move Pawn ${tokenIdx + 1} by ${state.roll} steps`;
        btn.innerHTML = `<span>${label}</span> ➔`;
        btn.addEventListener('mouseenter', () => showLandingPreview(p, tokenIdx));
        btn.addEventListener('mouseleave', () => clearLandingPreview());
        btn.addEventListener('click', () => {
          clearLandingPreview();
          executePawnMove(tokenIdx);
        });
        moveSection.appendChild(btn);
      });
    }
  }

  function renderTurnTracker() {
    const tracker = $('turnTracker');
    tracker.innerHTML = '';

    state.players.forEach((p, idx) => {
      const node = document.createElement('div');
      node.className = `tracker-node ${idx === state.turn ? 'active' : ''}`;
      node.innerHTML = `
        <span class="node-dot" style="background:${p.color === 'yellow' ? '#f59e0b' : p.color};"></span>
        <span>${p.name}</span>
      `;
      tracker.appendChild(node);

      if (idx < state.players.length - 1) {
        const arrow = document.createElement('span');
        arrow.className = 'tracker-arrow';
        arrow.textContent = '➔';
        tracker.appendChild(arrow);
      }
    });
  }

  function renderPlayerCards() {
    const container = $('playerList');
    container.innerHTML = '';

    state.players.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = `player-card ${idx === state.turn ? 'active' : ''}`;
      card.innerHTML = `
        <div class="player-card-head">
          <div class="player-avatar-orb ${p.color}" style="background: radial-gradient(circle at 35% 35%, var(--${p.color === 'yellow' ? 'amber' : p.color === 'green' ? 'emerald' : p.color === 'blue' ? 'sapphire' : 'ruby'}-light), var(--${p.color === 'yellow' ? 'amber' : p.color === 'green' ? 'emerald' : p.color === 'blue' ? 'sapphire' : 'ruby'}-core));">
            ${COLOR_CRESTS[p.color]}
          </div>
          <div class="player-info">
            <div class="player-name-row">
              <span class="player-display-name">${escapeHTML(p.name)}</span>
              ${p.isBot ? '<span class="bot-tag">BOT</span>' : ''}
            </div>
            <div class="player-sub-meta">
              <span>${p.finished}/4 Safe Home</span>
              <span>${p.captures} Captures</span>
            </div>
          </div>
        </div>
        <div class="player-token-pills">
          ${p.tokens.map((pos, i) => {
            const status = pos === -1 ? 'in-yard' : pos === 57 ? 'finished' : 'in-play';
            const label = pos === -1 ? 'Yard' : pos === 57 ? '★ Home' : `${pos}/57`;
            return `<div class="token-pill ${status}">P${i + 1}: ${label}</div>`;
          }).join('')}
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Multi-token overlap offset computation
  function computeTokenOffsets(tokensAtSamePosition) {
    const count = tokensAtSamePosition.length;
    if (count <= 1) return [{ dx: 0, dy: 0, scale: 1 }];
    if (count === 2) {
      return [
        { dx: -7, dy: -4, scale: 0.9 },
        { dx: 7, dy: 4, scale: 0.9 }
      ];
    }
    if (count === 3) {
      return [
        { dx: -7, dy: -6, scale: 0.8 },
        { dx: 7, dy: -6, scale: 0.8 },
        { dx: 0, dy: 7, scale: 0.8 }
      ];
    }
    return [
      { dx: -7, dy: -7, scale: 0.72 },
      { dx: 7, dy: -7, scale: 0.72 },
      { dx: -7, dy: 7, scale: 0.72 },
      { dx: 7, dy: 7, scale: 0.72 }
    ];
  }

  function renderBoardTokens() {
    if (!state) return;
    const pCurrent = current();
    const legalMoves = (!isAnimating && !pCurrent.isBot && state.phase === 'move')
      ? getLegalMoves(pCurrent, state.roll)
      : [];

    // Group active tokens on perimeter track squares to offset overlaps
    const trackOccupancy = {};
    state.players.forEach(p => {
      p.tokens.forEach((pos, tokenIdx) => {
        if (pos >= 0 && pos <= 51) {
          const gPos = getGlobalPos(p, pos);
          if (!trackOccupancy[gPos]) trackOccupancy[gPos] = [];
          trackOccupancy[gPos].push({ player: p, tokenIdx, pos });
        }
      });
    });

    state.players.forEach(p => {
      p.tokens.forEach((pos, tokenIdx) => {
        const key = `${p.color}-${tokenIdx}`;
        const btn = pawnElements[key];
        if (!btn) return;

        const coords = getTokenCoords(p, pos, tokenIdx);

        // Offset for multiple tokens on same square
        let offsetX = 0;
        let offsetY = 0;
        let scale = 1;

        if (pos >= 0 && pos <= 51) {
          const gPos = getGlobalPos(p, pos);
          const occupants = trackOccupancy[gPos] || [];
          if (occupants.length > 1) {
            const myIndex = occupants.findIndex(o => o.player === p && o.tokenIdx === tokenIdx);
            const offsets = computeTokenOffsets(occupants);
            if (offsets[myIndex]) {
              offsetX = offsets[myIndex].dx;
              offsetY = offsets[myIndex].dy;
              scale = offsets[myIndex].scale;
            }
          }
        }

        // Apply smooth coordinates & stacking transforms
        btn.style.left = `${coords.x}%`;
        btn.style.top = `${coords.y}%`;
        btn.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) scale(${scale})`;

        // Eligibility states
        const isEligible = !isAnimating && !pCurrent.isBot && state.phase === 'move' && p === pCurrent && legalMoves.includes(tokenIdx);
        btn.classList.toggle('eligible', isEligible);
        btn.classList.toggle('finished-token', pos === 57);
      });
    });

    // Highlight active player yard with ambient candlelight glow
    COLORS.forEach(c => {
      const yardEl = document.querySelector(`.yard-${c}`);
      if (yardEl) {
        yardEl.classList.toggle('yard-active', c === pCurrent.color);
      }
    });
  }

  // --- Activity Log & Notifications ---
  function addLog(text) {
    if (!state) return;
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    state.log.unshift({ time: timeStr, text });
    if (state.log.length > 20) state.log.pop();

    const logBox = $('activityLog');
    logBox.innerHTML = state.log.map(item => `
      <div class="log-entry">
        <span class="log-time">${item.time}</span>
        <span class="log-text">${item.text}</span>
      </div>
    `).join('');

    $('logCount').textContent = `${state.log.length} events`;
  }

  function showToast(message) {
    const toast = $('toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, match => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[match]));
  }

  // Start app on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
