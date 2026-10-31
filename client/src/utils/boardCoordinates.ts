import { PlayerColor, START_TILES } from '@royal-ludo/shared';

export interface GridCoord {
  r: number;
  c: number;
}

// Generate the 52 perimeter track coordinates on 15x15 grid
export function getPerimeterPath(): GridCoord[] {
  const path: GridCoord[] = [];
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

export const PERIMETER_PATH = getPerimeterPath();

export const HOME_LANES: Record<PlayerColor, GridCoord[]> = {
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

// Percentage coordinates (0..100)
export function gridToPercent(r: number, c: number): { x: number; y: number } {
  return {
    x: ((c + 0.5) / 15) * 100,
    y: ((r + 0.5) / 15) * 100
  };
}

export const YARD_POSITIONS: Record<PlayerColor, Array<{ x: number; y: number }>> = {
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
    { x: 15.3, y: 84.7 }, { x: 24.7, y: 84.7 }
  ]
};

export const HOME_CENTER_POSITIONS: Record<PlayerColor, Array<{ x: number; y: number }>> = {
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

export function getTokenCoordinates(color: PlayerColor, pos: number, tokenIndex: number): { x: number; y: number } {
  // 1. In Yard (-1)
  if (pos === -1) {
    return YARD_POSITIONS[color][tokenIndex];
  }
  // 2. On Perimeter Track (0..50)
  if (pos <= 50) {
    const globalPos = (START_TILES[color] + pos) % 52;
    const grid = PERIMETER_PATH[globalPos];
    return gridToPercent(grid.r, grid.c);
  }
  // 3. In Colored Home Lane (51..55)
  if (pos <= 55) {
    const laneIdx = pos - 51;
    const grid = HOME_LANES[color][laneIdx];
    return gridToPercent(grid.r, grid.c);
  }
  // 4. Home Victory Triangle (56)
  return HOME_CENTER_POSITIONS[color][tokenIndex];
}

