
import React from 'react';
import { MayaProfile } from '../types';

export const MayaCard: React.FC<{ profile: MayaProfile }> = ({ profile }) => {
  return (
    <div className="glass p-6 rounded-3xl border border-white/5 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <div className="text-8xl mystic-font">{profile.tone}</div>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center border border-amber-500/30">
          <span className="text-2xl gold-text">❂</span>
        </div>
        <div>
          <h3 className="text-xl font-bold gold-text">Maya Kin {profile.kin}</h3>
          <p className="text-sm opacity-60">{profile.tone} {profile.seal}</p>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        <div>
          <span className="text-xs uppercase tracking-widest opacity-40">Nahual</span>
          <p className="text-lg font-medium">{profile.nahual}</p>
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest opacity-40">Tonal</span>
          <p className="text-lg font-medium">{profile.tonal}</p>
        </div>
        <p className="text-sm leading-relaxed opacity-80 italic">
          "{profile.description}"
        </p>
      </div>
    </div>
  );
};
