import React, { useState, useEffect, useRef } from "react";
import { Prize } from "../types";
import { PrizeCard } from "./PrizeCard";

interface ReelSlotProps {
  sequence: Prize[];
  isSpinning: boolean;
  onSpinComplete: () => void;
  duration: number;
}

export const ReelSlot: React.FC<ReelSlotProps> = ({
  sequence,
  isSpinning,
  onSpinComplete,
  duration,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
  if (!isSpinning || sequence.length === 0) return;

  console.log('[SPINNING] Starting spin!');

  setIsAnimating(true);
  setCurrentIndex(0);

  const slowdownStart = duration * 0.7;
  let elapsed = 0;
  let currentIdx = 0;

  const spin = (currentSpeed: number) => {
    intervalRef.current = setTimeout(() => {
      currentIdx = (currentIdx + 1) % sequence.length;
      setCurrentIndex(currentIdx);
      elapsed += currentSpeed;

      let nextSpeed = currentSpeed;
      if (elapsed > slowdownStart) {
        const progress = (elapsed - slowdownStart) / (duration - slowdownStart);
        nextSpeed = 50 + (300 * progress);
      }

      if (elapsed < duration) {
        spin(nextSpeed);
      } else {
        setCurrentIndex(sequence.length - 1);
        setIsAnimating(false);
        timeoutRef.current = setTimeout(() => {
          onSpinComplete();
        }, 500);
      }
    }, currentSpeed);
  };

  spin(50);

  return () => {
    if (intervalRef.current) clearTimeout(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };
}, [isSpinning, sequence, duration, onSpinComplete]);


  // Don't render if sequence is empty
  if (sequence.length === 0) {
    return (
      <div className="relative h-32 w-full overflow-hidden bg-black/30 rounded-lg border-2 border-white/20 flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  const visiblePrizes = [];
  for (let i = -2; i <= 2; i++) {
    const index = (currentIndex + i + sequence.length) % sequence.length;
    visiblePrizes.push({
      prize: sequence[index],
      offset: i,
      isCenter: i === 0,
    });
  }

  return (
    <div className="relative h-32 w-full overflow-hidden bg-black/30 rounded-lg border-2 border-white/20">
      {/* Center highlight */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-24 h-28 border-4 border-yellow-400 rounded-lg shadow-lg shadow-yellow-400/50 bg-yellow-400/10"></div>
      </div>

      {/* Reel items */}
      <div className="flex items-center justify-center h-full relative">
        {visiblePrizes.map((item, index) => (
          <div
            key={`${currentIndex}-${index}`}
            className={`
              absolute transition-transform duration-100 ease-out
              ${item.isCenter ? 'z-20 scale-110' : 'z-10 scale-90 opacity-60'}
            `}
            style={{
              transform: `translateX(${item.offset * 80}px) ${
                item.isCenter ? "scale(1.1)" : "scale(0.9)"
              }`,
              filter: item.isCenter ? "brightness(1.2)" : "brightness(0.8)",
            }}
          >
            <PrizeCard
              prize={item.prize}
              isActive={item.isCenter && isAnimating}
              size="medium"
            />
          </div>
        ))}
      </div>

      {/* Spinning overlay effect */}
      {isAnimating && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse pointer-events-none"></div>
      )}
    </div>
  );
};
