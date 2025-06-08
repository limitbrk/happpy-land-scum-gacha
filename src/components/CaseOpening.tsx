import React, { useState, useEffect } from 'react';
import { Box, Play, RotateCcw, Trophy, Volume2, VolumeX } from 'lucide-react';
import { Prize, OpeningResult } from '../types';
import { gameConfig } from '../data/gameConfig';
import { PrizeSelector } from '../utils/prizeSelector';
import { soundManager } from '../utils/soundManager';
import { ReelSlot } from './ReelSlot';
import { PrizeCard } from './PrizeCard';
import { Modal } from './Modal';

const prizeSelector = new PrizeSelector(gameConfig.prizes, gameConfig.rarity_weights);

// Helper function to generate default reel sequence with all prizes
const getDefaultReelSequence = (): Prize[] => {
  const allPrizes = prizeSelector.getAllPrizes();
  const sequence: Prize[] = [];
  
  // Create a sequence that includes all prizes multiple times for better caching
  for (let i = 0; i < 60; i++) {
    sequence.push(allPrizes[i % allPrizes.length]);
  }
  
  return sequence;
};

export const CaseOpening: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentSequence, setCurrentSequence] = useState<Prize[]>(getDefaultReelSequence());
  const [lastResult, setLastResult] = useState<OpeningResult | null>(null);
  const [history, setHistory] = useState<OpeningResult[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Initialize sound manager
  useEffect(() => {
    soundManager.preloadSound('opening', gameConfig.sounds.opening);
    soundManager.preloadSound('win', gameConfig.sounds.win);
    soundManager.setEnabled(soundEnabled);
  }, [soundEnabled]);

  const handleOpenCase = () => {
    if (isSpinning) return;

    setShowResult(false);
    setIsSpinning(true);
    
    // Play opening sound
    if (soundEnabled) {
      soundManager.playSound('opening', 0.3);
    }
    
    // Select the winning prize
    const winningPrize = prizeSelector.selectRandomPrize();
    
    // Generate the reel sequence with the winning prize at the end
    const sequence = prizeSelector.generateReelSequence(winningPrize, 50);
    setCurrentSequence(sequence);
  };

  const handleSpinComplete = () => {
    console.log("[DEBUG] Spin finished"); 
    setIsSpinning(false);
    
    if (currentSequence.length > 0) {
      const winningPrize = currentSequence[currentSequence.length - 1];
      const result: OpeningResult = {
        prize: winningPrize,
        timestamp: Date.now()
      };
      
      setLastResult(result);
      setHistory(prev => [result, ...prev.slice(0, 9)]); // Keep last 10 results
      
      // Play win sound after a short delay
      setTimeout(() => {
        if (soundEnabled) {
          soundManager.playSound('win', 0.4);
        }
        setShowResult(true);
      }, 500);
    }
  };

  const resetGame = () => {
    setIsSpinning(false);
    setShowResult(false);
    setLastResult(null);
    setCurrentSequence(getDefaultReelSequence());
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    soundManager.setEnabled(!soundEnabled);
  };

  const getRarityStats = () => {
    const stats = { N: 0, R: 0, SR: 0, SSR: 0 };
    history.forEach(result => {
      stats[result.prize.rarity]++;
    });
    return stats;
  };

  const stats = getRarityStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Box className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl font-bold text-white">Mystery Case Opening</h1>
            <Box className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-gray-300 text-lg">Spin the reel and discover amazing prizes!</p>
          
          {/* Sound Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={toggleSound}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              {soundEnabled ? 'Sound On' : 'Sound Off'}
            </button>
          </div>
        </div>

        {/* Main Game Area */}
        <div className="bg-black/40 rounded-2xl p-6 mb-6 backdrop-blur-sm border border-white/10">
          {/* Reel Slot */}
          <div className="mb-6">
            <ReelSlot
              sequence={currentSequence}
              isSpinning={isSpinning}
              onSpinComplete={handleSpinComplete}
              duration={3000}
            />
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={handleOpenCase}
              disabled={isSpinning}
              className={`
                flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-lg
                transition-all duration-300 transform hover:scale-105
                ${isSpinning 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-green-500/25'
                }
                text-white
              `}
            >
              {isSpinning ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Opening...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  Open Case
                </>
              )}
            </button>

            <button
              onClick={resetGame}
              hidden={isSpinning}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white transition-all duration-300 transform hover:scale-105"
            >
              <RotateCcw className="w-5 h-5" />
              Reset
            </button>
          </div>
        </div>

        {/* Statistics */}
        {history.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rarity Statistics */}
            <div className="bg-black/40 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Rarity Statistics</h3>
              <div className="space-y-3">
                {Object.entries(stats).map(([rarity, count]) => (
                  <div key={rarity} className="flex justify-between items-center">
                    <span className={`font-semibold ${
                      rarity === 'SSR' ? 'text-yellow-400' :
                      rarity === 'SR' ? 'text-purple-400' :
                      rarity === 'R' ? 'text-blue-400' : 'text-gray-400'
                    }`}>
                      {rarity}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            rarity === 'SSR' ? 'bg-yellow-400' :
                            rarity === 'SR' ? 'bg-purple-400' :
                            rarity === 'R' ? 'bg-blue-400' : 'bg-gray-400'
                          }`}
                          style={{ width: `${history.length > 0 ? (count / history.length) * 100 : 0}%` }}
                        />
                      </div>
                      <span className="text-white text-sm w-8">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent History */}
            <div className="bg-black/40 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Recent Wins</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {history.slice(0, 5).map((result) => (
                  <div key={result.timestamp} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                    <img 
                      src={result.prize.image} 
                      alt={result.prize.name}
                      className="w-8 h-8 object-contain rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm truncate">{result.prize.name}</p>
                      <p className={`text-xs ${
                        result.prize.rarity === 'SSR' ? 'text-yellow-400' :
                        result.prize.rarity === 'SR' ? 'text-purple-400' :
                        result.prize.rarity === 'R' ? 'text-blue-400' : 'text-gray-400'
                      }`}>
                        {result.prize.rarity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Modal isOpen={showResult} onClose={() => setShowResult(false)}>
        {lastResult && (
          <div className="text-center animate-fadeIn">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">You Won!</h2>
              <Trophy className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="flex justify-center mb-4">
              <PrizeCard prize={lastResult.prize} size="large" isActive={true} />
            </div>
            <p className="text-xl text-white font-semibold">{lastResult.prize.name}</p>
            <p className="text-lg text-gray-300">Rarity: {lastResult.prize.rarity}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};