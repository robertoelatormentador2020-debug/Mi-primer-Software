
import React from 'react';

export const CastleCard: React.FC<{ castle: any }> = ({ castle }) => {
  const colors: Record<string, string> = {
    red: "from-red-600/20 to-transparent border-red-500/30 text-red-400",
    white: "from-slate-100/10 to-transparent border-white/30 text-slate-100",
    blue: "from-blue-600/20 to-transparent border-blue-500/30 text-blue-400",
    yellow: "from-amber-400/20 to-transparent border-amber-400/30 text-amber-400",
    green: "from-emerald-600/20 to-transparent border-emerald-500/30 text-emerald-400"
  };

  return (
    <div className={`glass p-6 rounded-3xl border bg-gradient-to-br ${colors[castle.color] || colors.white}`}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold uppercase tracking-widest text-sm">{castle.name}</h4>
        <span className="px-2 py-1 rounded-full bg-black/30 text-[10px] font-bold uppercase">{castle.phase}</span>
      </div>
      <p className="text-sm leading-relaxed opacity-90">{castle.description}</p>
    </div>
  );
};
