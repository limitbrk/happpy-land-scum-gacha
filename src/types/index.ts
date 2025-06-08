export interface Prize {
  name: string;
  rarity: 'N' | 'R' | 'SR' | 'SSR';
  image: string;
}

export interface RarityWeights {
  N: number;
  R: number;
  SR: number;
  SSR: number;
}

export interface SoundConfig {
  opening: string;
  win: string;
}

export interface GameConfig {
  rarity_weights: RarityWeights;
  sounds: SoundConfig;
  prizes: Prize[];
}

export interface OpeningResult {
  prize: Prize;
  timestamp: number;
}