#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

echo "🎲 Starting Royal Ludo Netlify-Ready Suite..."

# Start Vite client on port 5173 with direct Netlify Functions middleware
npm run dev
