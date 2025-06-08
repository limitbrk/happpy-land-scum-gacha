import { Prize, RarityWeights } from '../types';

export class PrizeSelector {
  private prizes: Prize[];
  private weights: RarityWeights;
  private totalWeight: number;

  constructor(prizes: Prize[], weights: RarityWeights) {
    this.prizes = prizes;
    this.weights = weights;
    this.totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
  }

  selectRandomPrize(): Prize {
    const random = Math.random() * this.totalWeight;
    let currentWeight = 0;
    
    // Determine rarity first
    let selectedRarity: keyof RarityWeights = 'N';
    for (const [rarity, weight] of Object.entries(this.weights)) {
      currentWeight += weight;
      if (random <= currentWeight) {
        selectedRarity = rarity as keyof RarityWeights;
        break;
      }
    }
    
    // Get all prizes of selected rarity
    const prizesOfRarity = this.prizes.filter(prize => prize.rarity === selectedRarity);
    
    // Select random prize from that rarity
    if (prizesOfRarity.length === 0) {
      // Fallback to any prize if none found
      return this.prizes[Math.floor(Math.random() * this.prizes.length)];
    }
    
    return prizesOfRarity[Math.floor(Math.random() * prizesOfRarity.length)];
  }

  generateReelSequence(finalPrize: Prize, sequenceLength: number = 50): Prize[] {
    const sequence: Prize[] = [];
    
    // Create a pool that includes all prizes multiple times for better variety
    const prizePool: Prize[] = [];
    this.prizes.forEach(prize => {
      // Add each prize multiple times based on rarity (more common = more appearances)
      const appearances = prize.rarity === 'N' ? 4 : prize.rarity === 'R' ? 3 : prize.rarity === 'SR' ? 2 : 1;
      for (let i = 0; i < appearances; i++) {
        prizePool.push(prize);
      }
    });
    
    // Fill most of the sequence with random prizes from the pool
    for (let i = 0; i < sequenceLength - 1; i++) {
      const randomPrize = prizePool[Math.floor(Math.random() * prizePool.length)];
      sequence.push(randomPrize);
    }
    
    // Add the final winning prize at the end
    sequence.push(finalPrize);
    
    return sequence;
  }

  getAllPrizes(): Prize[] {
    return [...this.prizes];
  }
}