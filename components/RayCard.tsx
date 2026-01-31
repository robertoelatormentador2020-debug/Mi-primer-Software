
import React from 'react';
import { RayProfile } from '../types';

export const RayCard: React.FC<{ ray: RayProfile }> = ({ ray }) => {
  const colorMap: Record<string, string> = {
    blue: 'border-blue-500 shadow-blue-500/10',
    yellow: 'border-yellow-500 shadow-yellow-500/10',
    pink: 'border-pink-500 shadow-pink-500/10',
    white: 'border-white shadow-white/10',
    green: 'border-green-500 shadow-green-500/10',
    ruby: 'border-red-800 shadow-red-800/10',
    violet: 'border-violet-500 shadow-violet-500/10',
  };

  const safeColor = (ray.color || 'blue').toLowerCase();

  return (
    <div className={`glass p-6 rounded-3xl border-l-4 ${colorMap[safeColor] || 'border-blue-500'} transition-transform hover:scale-[1.02]`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold mystic-font">{ray.name}</h3>
          <p className="text-sm opacity-60">{ray.quality}</p>
        </div>
        <div className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">
          Archangel {ray.archangel}
        </div>
      </div>
      <p className="text-sm leading-relaxed opacity-80">{ray.description}</p>
    </div>
  );
};
