
import React from 'react';
import { PlutoProfile } from '../types';

export const PlutoCard: React.FC<{ profile: PlutoProfile }> = ({ profile }) => {
  return (
    <div className="glass p-6 rounded-3xl border-l-4 border-slate-900 bg-gradient-to-br from-slate-900/40 to-transparent relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <span className="text-8xl">♇</span>
      </div>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xl shadow-lg border border-white/5">
          ♇
        </div>
        <div>
          <h3 className="font-bold text-slate-200 uppercase tracking-widest text-xs">Transpersonal Ruler</h3>
          <p className="text-lg font-bold text-slate-100 italic">Pluto in {profile.sign}</p>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        <p className="text-sm leading-relaxed opacity-80">
          {profile.interpretation}
        </p>
        <div className="pt-3 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Galactic Resonance</p>
          <p className="text-sm font-medium text-slate-300">
            {profile.starseedResonance}
          </p>
        </div>
      </div>
    </div>
  );
};
