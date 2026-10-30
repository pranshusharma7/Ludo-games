# 🎲 Royal Ludo — Netlify-Ready Multiplayer Game

A production-grade, real-time multiplayer Ludo web application with **Netlify Functions**, **Netlify Blobs** (strong consistency and conditional writes), **Three.js WebGL 3D dice physics**, **turned-wood 3D pawns**, and luxury walnut boardroom styling.

Ready for zero-config **drag-and-drop publishing** to [Netlify Drop](https://app.netlify.com/drop).

---

## ⚡ Architecture & Netlify Setup

- **Zero Always-On Servers**: Continuous background servers have been replaced with a high-performance, stateless Netlify Function at `netlify/functions/game.ts`.
- **Netlify Blobs (Strong Consistency)**: State persistence uses Netlify Blobs with `{ consistency: 'strong' }` and optimistic concurrency conditional writes (`onlyIfNew: true` and `onlyIfMatch: etag`).
- **Direct Netlify Endpoint**: The frontend calls `/.netlify/functions/game` directly without path rewrites or `/api/game` redirects.
- **Helper Separation**: Helper files (`helpers/blobsStorage.ts`, `helpers/gameService.ts`) are maintained strictly outside `netlify/functions`.
- **Zero-Config Deployment**: No GitHub repositories, terminal commands, environment variables, API keys, or manual database provisioning required.

---

## 📁 Package Structure for Netlify (`netlify-ready-game.zip`)

```text
netlify-ready-game.zip
├── netlify.toml              # Build command, publish dir ("dist"), functions bundler
├── package.json              # Root workspace manifest with dependencies
├── package-lock.json         # Pinned dependency lockfile
├── netlify/
│   └── functions/
│       └── game.ts           # Standard Netlify Function endpoint
├── helpers/
│   ├── blobsStorage.ts       # Strong consistency Blobs client with memory fallback
│   └── gameService.ts        # Authoritative game logic, 3-round scoring, rematches
├── shared/                   # Shared canonical 15x15 Ludo pure engine & types
├── client/                   # React 18 + Vite + Three.js + Tailwind source
├── tests/                    # 3-round championship & function test suites
└── dist/                     # Pre-built production web bundle ready for instant drop
    ├── index.html
    └── assets/
```

---

## 🏆 Three-Round Match & Scoring Rules

1. **2 to 4 Players**: Supports 2-player duels (Red vs Yellow) or 4-player melees.
2. **Three-Round Championship**: Matches track rounds (1 of 3, 2 of 3, 3 of 3).
3. **Scoring Breakdown**:
   - Round Winner: +100 bonus points
   - Finished Tokens: +25 points per token in Home
   - Enemy Captures: +15 points per capture
4. **Final Series Winner**: After Round 3 completes, cumulative points across all 3 rounds are tallied and the final Series Champion is crowned.

---

## 🚀 How to Publish to Netlify (Drag-and-Drop)

1. Open [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop `netlify-ready-game.zip` (or unzip and drop the folder).
3. Netlify will immediately publish the game with live URL, pre-built static assets, and active `/.netlify/functions/game` endpoint!

---

## 🧪 Local Testing & Verification

Run all test suites (including unit tests, endpoint verification, and full 3-round championship):
```bash
npm test
```

Run production build:
```bash
npm run build
```

Run local development server:
```bash
npm run dev
# Open http://localhost:5173
```
