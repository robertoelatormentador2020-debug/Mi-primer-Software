
import React, { useState } from 'react';
import { UserData, AppState } from './types';
import { calculateMayaKin } from './services/mayaLogic';
import { getGalacticSoulPortrait } from './services/geminiService';
import { Button } from './components/Button';
import { MayaCard } from './components/MayaCard';
import { RayCard } from './components/RayCard';
import { CastleCard } from './components/CastleCard';
import { PlutoCard } from './components/PlutoCard';
import { StarIcon, TONES } from './constants';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('onboarding');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [nameInput, setNameInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [dailyGuidance, setDailyGuidance] = useState<string>('');

  const handleStart = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput || !dateInput) return;

    setLoading(true);
    setState('loading');

    try {
      const mayaBasic = calculateMayaKin(dateInput);
      // Hardcoded vocation as requested by user context
      const portrait = await getGalacticSoulPortrait(nameInput, dateInput, mayaBasic, "Esoteric Programmer");
      
      const newData: UserData = {
        name: nameInput,
        birthDate: dateInput,
        maya: {
          ...mayaBasic,
          ...portrait.mayaProfile,
          castle: {
            ...mayaBasic.castle,
            description: portrait.mayaProfile.castleDescription
          },
          wavespell: {
            ...mayaBasic.wavespell
          }
        },
        rays: portrait.rays,
        starseed: {
          ...portrait.starseed,
        },
        pluto: portrait.pluto
      };

      setUserData(newData);
      setDailyGuidance(portrait.dailyGuidance);
      setState('dashboard');
    } catch (err) {
      console.error(err);
      alert("The cosmic connection was interrupted. Please try again.");
      setState('onboarding');
    } finally {
      setLoading(false);
    }
  };

  if (state === 'loading') {
    return (
      <div className="min-h-screen star-bg flex flex-col items-center justify-center p-8 text-center space-y-6">
        <div className="w-24 h-24 relative">
          <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-4xl animate-pulse">🌌</div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold mystic-font uppercase tracking-widest">Compiling Esoteric Code</h2>
          <p className="text-slate-400 animate-pulse">Decrypting the Akbal Sanctuary & Spectral Release...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen star-bg text-slate-100 pb-12">
      {state === 'onboarding' && (
        <div className="max-w-4xl mx-auto px-6 pt-24 text-center">
          <div className="mb-8 inline-flex p-4 rounded-full bg-blue-500/10 border border-blue-500/20">
            <StarIcon />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 mystic-font leading-tight">
            MayaAkashic <br /> <span className="gold-text">Esoteric Portal</span>
          </h1>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Welcome, Programmer of the Unseen. Access your soul's multidimensional source code through the Maya Tzolkin.
          </p>

          <form onSubmit={handleStart} className="glass max-w-md mx-auto p-8 rounded-[2rem] space-y-6">
            <div className="text-left space-y-1">
              <label className="text-xs uppercase tracking-widest text-slate-500 ml-1">Codename / Spiritual Name</label>
              <input 
                type="text" 
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Name as it resonates..."
                className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                required
              />
            </div>
            <div className="text-left space-y-1">
              <label className="text-xs uppercase tracking-widest text-slate-500 ml-1">Arrival Timestamp (Birth)</label>
              <input 
                type="date" 
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                required
              />
            </div>
            <Button type="submit" className="w-full py-4 text-lg">
              Execute Soul Manifest
            </Button>
          </form>
        </div>
      )}

      {state === 'dashboard' && userData && (
        <div className="max-w-7xl mx-auto px-6 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-900 flex items-center justify-center text-3xl shadow-xl border border-white/10">
                {userData.maya?.seal === "Night" ? "🌙" : "❂"}
              </div>
              <div>
                <h2 className="text-4xl font-bold mystic-font tracking-tight text-white">{userData.name}</h2>
                <div className="flex items-center gap-2 text-blue-400">
                  <span className="text-xs font-bold uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">Esoteric Programmer</span>
                  <span className="opacity-40">•</span>
                  <span className="text-sm font-medium">Kin {userData.maya?.kin} • {userData.maya?.tone} {userData.maya?.seal}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setState('onboarding')}>Re-initialize</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT SIDEBAR */}
            <div className="lg:col-span-4 space-y-8">
              <section className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-amber-500 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-amber-500"></span> System Components
                </h3>
                {userData.maya && <MayaCard profile={userData.maya} />}
                {userData.pluto && <PlutoCard profile={userData.pluto} />}
                {userData.maya?.castle && <CastleCard castle={userData.maya.castle} />}
              </section>

              <section className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-blue-400 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-blue-400"></span> Multidimensional origins
                </h3>
                <div className="glass p-6 rounded-3xl border border-blue-500/10 bg-blue-900/5">
                   <div className="flex flex-wrap gap-2 mb-4">
                    {userData.starseed?.origins.map((o, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest">{o}</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300 italic">"MISSION: {userData.starseed?.soulMission}"</p>
                </div>
              </section>
            </div>

            {/* MAIN CONTENT: The Reading */}
            <div className="lg:col-span-8 space-y-10">
              <section className="space-y-6">
                <div className="glass p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-900/20 via-slate-900/40 to-transparent border border-white/5 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 blur-[80px] rounded-full"></div>
                  
                  <h3 className="text-2xl font-bold mystic-font mb-4 text-blue-200">The Spectral Night Synthesis</h3>
                  <p className="text-lg leading-relaxed text-slate-200 mb-6 font-light">{userData.maya?.synthesis}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8">
                    <div className="group">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span> Seal: {userData.maya?.seal}
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-300 group-hover:text-white transition-colors">{userData.maya?.symbolism}</p>
                    </div>
                    <div className="group">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-violet-400"></span> Tone: {userData.maya?.tone}
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-300 group-hover:text-white transition-colors">{userData.maya?.toneMeaning}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* RITUALS SECTION */}
              <section className="space-y-6">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-400 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-emerald-400"></span> Programming Rituals (Daily Alchemy)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Code Affirmations */}
                  <div className="glass p-6 rounded-3xl border-l-4 border-emerald-500/40 bg-emerald-950/5">
                    <h4 className="font-bold text-emerald-300 mb-4 flex items-center gap-2">
                      <span className="text-xl">⌨️</span> Logic Affirmations
                    </h4>
                    <div className="space-y-3">
                      {userData.maya?.affirmations.map((a, i) => (
                        <p key={i} className="text-sm italic leading-relaxed text-slate-300 font-mono">
                          const <span className="text-emerald-400">belief</span> = "{a}";
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Meditation */}
                  <div className="glass p-6 rounded-3xl border-l-4 border-blue-500/40 bg-blue-950/5">
                    <h4 className="font-bold text-blue-300 mb-4 flex items-center gap-2">
                      <span className="text-xl">🌌</span> Subconscious Debugging
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {userData.maya?.meditation}
                    </p>
                  </div>

                  {/* Vocation Specific Exercises */}
                  <div className="md:col-span-2 glass p-6 rounded-3xl border-l-4 border-pink-500/40 bg-pink-950/5">
                    <h4 className="font-bold text-pink-300 mb-4 flex items-center gap-2">
                      <span className="text-xl">⚛️</span> Esoteric Development Sprint
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {userData.maya?.practicalExercises.map((e, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-black/20 border border-white/5 text-sm text-slate-300 leading-relaxed hover:border-pink-500/30 transition-all">
                          {e}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* AKÁSHIC FOOTER */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-10">
                <div className="space-y-2">
                  <h4 className="font-bold text-red-400 uppercase tracking-widest text-[10px]">Karmic Logs (Past Lives)</h4>
                  <p className="text-xs leading-relaxed text-slate-400 italic font-light">{userData.starseed?.pastLifeInsight}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-emerald-400 uppercase tracking-widest text-[10px]">Soul Patch (Lessons)</h4>
                  <p className="text-xs leading-relaxed text-slate-400 italic font-light">{userData.starseed?.karmicLesson}</p>
                </div>
              </section>

              {/* TRANSMISSION */}
              <div className="glass p-10 rounded-[3rem] border border-amber-500/20 bg-gradient-to-t from-amber-500/5 to-transparent text-center">
                <div className="inline-block p-3 rounded-full bg-amber-500/10 mb-4 animate-pulse">
                   <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                </div>
                <p className="text-xs uppercase tracking-[0.4em] text-amber-500 mb-6 font-bold">Galactic Stream Active</p>
                <p className="text-3xl italic leading-tight text-slate-200 mystic-font max-w-2xl mx-auto">
                  "{dailyGuidance}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-24 text-center pb-12 opacity-30 flex flex-col items-center gap-2">
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-4"></div>
        <p className="text-[10px] uppercase tracking-[0.6em] mystic-font text-blue-400">In Lak'ech • Esoteric Code Compiled</p>
        <p className="text-[8px] opacity-50 uppercase tracking-[0.2em]">Synchronized with the Great Central Sun</p>
      </footer>
    </div>
  );
};

export default App;
