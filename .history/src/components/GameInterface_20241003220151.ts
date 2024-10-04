// GameInterface.ts
export interface Game {
    id: number;  // Unique identifier for each game
    name: string;
    description: string;
    gameType: string;
    createdAt: Date;
  }
  