import React from 'react';
import { Prize } from '../types';

interface PrizeCardProps {
  prize: Prize;
  isActive?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const rarityColors = {
  N: 'from-gray-400 to-gray-600',
  R: 'from-blue-400 to-blue-600',
  SR: 'from-purple-400 to-purple-600',
  SSR: 'from-yellow-400 to-orange-500'
};

const rarityGlow = {
  N: 'shadow-gray-500/20',
  R: 'shadow-blue-500/30',
  SR: 'shadow-purple-500/40',
  SSR: 'shadow-yellow-500/50'
};

export const PrizeCard: React.FC<PrizeCardProps> = ({ 
  prize, 
  isActive = false, 
  size = 'medium' 
}) => {
  const sizeClasses = {
    small: 'w-16 h-20',
    medium: 'w-20 h-24',
    large: 'w-32 h-40'
  };

  const imageSizes = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-20 h-20'
  };

  const textSizes = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base'
  };

  return (
    <div
      className={`
        ${sizeClasses[size]} 
        bg-gradient-to-br ${rarityColors[prize.rarity]}
        rounded-lg border-2 border-white/20 
        flex flex-col items-center justify-center p-2
        transition-all duration-300 transform
        ${isActive ? `scale-110 ${rarityGlow[prize.rarity]} shadow-xl` : 'shadow-md'}
        ${size === 'large' ? 'p-4' : ''}
      `}
    >
      {/* Prize image */}
      <div className="mb-1">
        <img 
          src={prize.image} // Static image path from props
          alt={prize.name}
          className={`${imageSizes[size]} object-contain rounded`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // Fallback image in case the prize image is not available
            target.src = 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=64&h=64&fit=crop';
          }}
        />
      </div>

      {/* Prize name */}
      <div className={`text-white font-semibold text-center ${textSizes[size]} leading-tight`}>
        {/* Display the prize name, truncate it if too long */}
        {prize.name.length > 15 ? `${prize.name.substring(0, 15)}...` : prize.name}
      </div>
    </div>
  );
};
