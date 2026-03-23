import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Circle,
  Play,
  Utensils,
  Activity,
  ShieldAlert,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Timer as TimerIcon,
  RotateCcw,
  X,
  ChevronDown,
  Target,
  Info,
  ExternalLink,
  ChevronUp,
  LogOut,
  User as UserIcon,
  Loader2
} from 'lucide-react'; // Asegúrate que Login no se importe aquí
import { PROGRAM_DATA } from './data'; // Asumiendo que este es el archivo correcto
import { useAuth } from './Auth'; // Importamos nuestro nuevo hook

const NUTRITION_PLAN = {
  FUERZA: { carb: 'ALTO', meals: { breakfast: 'Huevos con palta. Carga de energía.', lunch: 'Pollo con arroz/papa + Brócoli.', dinner: 'Carne con pasta/papa. Recuperación.' } },
  HIIT: { carb: 'BAJO', meals: { breakfast: 'Huevos revueltos. Grasas saludables.', lunch: 'Pescado + Vegetales ligeros.', dinner: 'Proteína magra + Ensalada verde.' } },
  MIXTO: { carb: 'MEDIO', meals: { breakfast: 'Huevos + Almendras.', lunch: 'Carne + Vegetales mixtos + Dosis pequeña carbo.', dinner: 'Pescado graso + Vegetales verdes.' } }
};

const BONUS_TIPS = [
  "BPA y Plásticos: Evita botellas de plástico, son xenoestrógenos.",
  "Soja y Linaza: En exceso pueden alterar tu balance de testosterona.",
  "Alcohol: La cerveza favorece la aromatización (estrogenización)."
];

function Timer() {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) interval = setInterval(() => setSeconds(s => s - 1), 1000);
    else if (seconds === 0) { setIsActive(false); clearInterval(interval); }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
  return (
    <div className="flex items-center gap-4 bg-tactical-grey-light p-3 rounded border border-tactical-gold/20">
      <TimerIcon className={isActive ? "text-neon-green" : "text-tactical-gold"} size={20} />
      <span className="text-2xl font-mono font-bold w-16 text-center">{formatTime(seconds)}</span>
      <div className="flex gap-2 shrink-0">
        <button onClick={() => setIsActive(!isActive)} className="bg-military-olive text-white px-4 py-1.5 text-[10px] font-black uppercase rounded shadow-lg active:scale-95 transition-all">
          {isActive ? 'PAUSA' : 'INICIAR'}
        </button>
        <button onClick={() => { setSeconds(60); setIsActive(false); }} className="p-2 text-text-dim hover:white transition-colors">
          <RotateCcw size={16} />
        </button>
      </div>
    </div>
  );
}

function ExerciseCard({ ex, idx }) {
  const [isOpen, setIsOpen] = useState(false);
  const cleanName = (name) => name.replace(/^\d+\s*-\s*/, '');

  return (
    <div className={`glass-card p-0 transition-all duration-300 overflow-hidden border-l-4 ${isOpen ? 'border-l-neon-green bg-white/[0.04]' : 'border-l-military-olive bg-white/[0.02]'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-3 px-4 flex items-center justify-between text-left group">
        <div className="flex flex-col gap-0.5 max-w-[70%]">
          <h4 className="font-black text-sm uppercase tracking-tight group-hover:text-neon-green transition-colors flex items-baseline gap-2">
            <span className="text-neon-green/40 font-mono text-[10px]">{idx + 1}.</span>
            <span>{cleanName(ex.name)}</span>
          </h4>
          <p className="text-[9px] font-black text-tactical-gold uppercase tracking-widest opacity-80">{ex.sets}</p>
        </div>
        <div className="flex items-center gap-3">
          {ex.video && (
            <button onClick={(e) => { e.stopPropagation(); window.open(ex.video, '_blank'); }}
              className="w-8 h-8 rounded bg-neon-green/10 text-neon-green flex items-center justify-center active:scale-90 transition-all hover:bg-neon-green hover:text-black shadow-lg">
              <Play size={16} fill="currentColor" />
            </button>
          )}
          <div className="text-text-dim/30">
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/5">
            <div className="p-4 space-y-3 bg-black/40">
              <div className="flex items-center gap-2 mb-1">
                <Info size={12} className="text-tactical-gold" />
                <span className="text-[9px] font-black text-tactical-gold uppercase tracking-widest">Procedimiento Técnico</span>
              </div>
              <p className="text-xs font-medium leading-relaxed text-text-dim/90 whitespace-pre-wrap">{ex.procedure}</p>

              {ex.video && (
                <button onClick={() => window.open(ex.video, '_blank')} className="w-full py-3 mt-2 bg-military-olive/20 text-white font-black uppercase text-[10px] tracking-widest rounded flex items-center justify-center gap-2 border border-white/5">
                  REPRODUCIR VIDEO <ExternalLink size={12} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  const { user, signOut } = useAuth(); // Obtenemos el usuario y la función signOut del contexto
  const [currentDayNum, setCurrentDayNum] = useState(1);
  const [isWorkoutDone, setIsWorkoutDone] = useState(false);
  const [showBriefing, setShowBriefing] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [showDaySelector, setShowDaySelector] = useState(false);

  // La lógica de "si no hay usuario, muestra Login" se moverá a main.jsx

  const handleLogout = async () => {
    await signOut();
  };

  const dayData = PROGRAM_DATA.find(d => d.dayNum === currentDayNum) || PROGRAM_DATA[0];
  const currentNutrition = NUTRITION_PLAN[dayData.type] || NUTRITION_PLAN['MIXTO'];
  const totalProgress = ((currentDayNum - 1 + (isWorkoutDone ? 1 : 0)) / 21) * 100;

  const nextDay = () => { if (currentDayNum < 21) { setCurrentDayNum(v => v + 1); setIsWorkoutDone(false); window.scrollTo(0, 0); } };
  const prevDay = () => { if (currentDayNum > 1) { setCurrentDayNum(v => v - 1); setIsWorkoutDone(false); window.scrollTo(0, 0); } };

  return (
    <div className="min-h-screen pb-24 bg-tactical-black text-white font-['Inter'] selection:bg-military-olive/30 overflow-x-hidden">
      {/* Header */}
      <header className="p-4 border-b border-tactical-gold/10 sticky top-0 bg-tactical-black/95 backdrop-blur-xl z-[60] safe-area-top">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-3">
            <button onClick={prevDay} disabled={currentDayNum === 1} className={`p-2 rounded bg-white/5 ${currentDayNum === 1 ? 'opacity-20' : 'active:bg-tactical-gold/20'}`}>
              <ChevronLeft size={20} className="text-tactical-gold" />
            </button>
            <button onClick={() => setShowDaySelector(!showDaySelector)} className="flex flex-col text-left group">
              <span className="text-[10px] text-tactical-gold font-black uppercase tracking-[0.2em] flex items-center gap-1">Protocolo <ChevronDown size={10} /></span>
              <h1 className="text-xl impact-text leading-tight uppercase tracking-tighter">DÍA {currentDayNum} / 21</h1>
            </button>
            <button onClick={nextDay} disabled={currentDayNum === 21} className={`p-2 rounded bg-white/5 ${currentDayNum === 21 ? 'opacity-20' : 'active:bg-tactical-gold/20'}`}>
              <ChevronRight size={20} className="text-tactical-gold" />
            </button>
          </div>
          <div className="flex gap-4">
            <div className="text-right flex flex-col justify-center">
              <span className="text-[10px] text-text-dim block font-black mb-1 leading-none">PROGRESO</span>
              <div className="bg-white/5 px-2 py-0.5 rounded inline-flex items-center gap-1 border border-white/5">
                <span className="text-lg font-black text-neon-green">{totalProgress.toFixed(0)}</span>
                <span className="text-[10px] text-text-dim font-black">%</span>
              </div>
            </div>
            <button onClick={handleLogout} className="p-2.5 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all self-center border border-red-500/20 active:scale-90">
              <LogOut size={18} />
            </button>
          </div>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-2">
          <motion.div className="h-full bg-gradient-to-r from-military-olive to-neon-green" animate={{ width: `${totalProgress}%` }} />
        </div>
      </header>

      {/* Day Selector */}
      <AnimatePresence>
        {showDaySelector && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 top-[88px] z-[70] bg-tactical-black p-4 grid grid-cols-4 gap-2 overflow-y-auto pb-32">
            {PROGRAM_DATA.map(d => (
              <button key={d.dayNum} onClick={() => { setCurrentDayNum(d.dayNum); setShowDaySelector(false); setIsWorkoutDone(false); window.scrollTo(0, 0); }}
                className={`aspect-square flex items-center justify-center rounded font-black text-sm border transition-all ${d.dayNum === currentDayNum ? 'bg-tactical-gold text-black border-tactical-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]' : d.dayNum < currentDayNum ? 'border-neon-green/30 text-neon-green/50' : 'border-white/10 text-white/20'}`}>
                {d.dayNum}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Briefing Card */}
        <section className={`glass-card p-4 transition-all duration-300 ${showBriefing ? 'bg-white/[0.05]' : ''}`}>
          <div className="flex justify-between items-center mb-2">
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-neon-green uppercase tracking-[0.3em]">Briefing de Misión</span>
              <h2 className="text-xl impact-text uppercase italic">{dayData.title}</h2>
            </div>
            <button onClick={() => setShowBriefing(!showBriefing)} className={`p-2 rounded-full transition-transform ${showBriefing ? 'rotate-180 bg-military-olive text-white' : 'bg-white/5 text-text-dim'}`}>
              <ChevronDown size={18} />
            </button>
          </div>

          <AnimatePresence>
            {showBriefing && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="pt-4 border-t border-white/5 space-y-4">
                  <p className="text-xs font-medium leading-relaxed italic text-text-dim/90">"{dayData.description || 'Maximiza la intensidad en cada repetición.'}"</p>

                  <div className="flex items-center gap-3 p-3 bg-military-olive/5 rounded-lg border border-military-olive/10">
                    <TimerIcon size={14} className="text-tactical-gold" />
                    <div>
                      <span className="text-[10px] font-black text-tactical-gold uppercase tracking-widest">Crono de Recuperación</span>
                      {showTimer ? <Timer /> : <button onClick={() => setShowTimer(true)} className="text-[9px] font-black text-white/40 uppercase underline block">Activar Reloj</button>}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Workout List */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <Target size={14} className="text-neon-green" />
            <span className="text-[10px] font-black text-text-dim uppercase tracking-[0.2em]">Objetivos de Campo</span>
          </div>
          <div className="space-y-2">
            {dayData.exercises.map((ex, idx) => (
              <ExerciseCard key={ex.id} ex={ex} idx={idx} />
            ))}
          </div>
        </section>

        {/* Status Confirmation */}
        <section className={`glass-card transition-all duration-500 ${isWorkoutDone ? 'border-neon-green bg-neon-green/[0.05]' : 'border-dashed border-white/10'}`}>
          <button onClick={() => setIsWorkoutDone(!isWorkoutDone)} className="w-full flex items-center justify-between p-3">
            <div className="text-left flex items-center gap-4">
              <div className={`w-10 h-10 rounded flex items-center justify-center transition-colors ${isWorkoutDone ? 'bg-neon-green text-black' : 'bg-white/5 text-white/20'}`}>
                <CheckCircle2 size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest">{isWorkoutDone ? 'MISION CUMPLIDA' : 'MARCAR FINALIZADO'}</span>
                <p className="text-[8px] font-bold text-text-dim uppercase">OPERACIÓN DÍA {currentDayNum}</p>
              </div>
            </div>
          </button>

          {isWorkoutDone && currentDayNum < 21 && (
            <motion.button initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} onClick={nextDay}
              className="w-full py-4 mt-2 bg-neon-green/80 text-black font-black uppercase text-xs tracking-[0.2em] rounded-b-lg flex items-center justify-center gap-2 hover:bg-neon-green transition-all">
              SIGUIENTE MISIÓN <ChevronRight size={16} />
            </motion.button>
          )}
        </section>

        {/* Resources Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-12">
          {/* Nutrition */}
          <section className="glass-card bg-tactical-grey-light/30">
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
              <Utensils size={14} className="text-tactical-gold" />
              <h3 className="text-[10px] font-black uppercase tracking-widest text-text-dim">Mantenimiento: {dayData.type}</h3>
            </div>
            <div className="space-y-3">
              {['breakfast', 'lunch', 'dinner'].map(m => (
                <div key={m} className="flex gap-4">
                  <p className="text-[11px] font-medium leading-relaxed"><span className="text-[9px] font-black text-tactical-gold uppercase opacity-60 mr-2">{m}:</span> {currentNutrition.meals[m]}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Tip */}
          <section className="glass-card flex flex-col justify-center border-dashed border-tactical-gold/20 bg-tactical-gold/[0.02]">
            <span className="text-[9px] font-black text-tactical-gold uppercase tracking-widest mb-2 opacity-60">Protocolo Elite</span>
            <p className="text-[11px] leading-relaxed italic text-text-dim font-medium uppercase tracking-tight">"{BONUS_TIPS[(currentDayNum - 1) % BONUS_TIPS.length]}"</p>
          </section>
        </div>
      </main>

      {/* Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-tactical-black/98 border-t border-white/5 px-6 py-4 flex justify-around items-center z-[80] backdrop-blur-3xl safe-area-bottom">
        <button onClick={() => { window.scrollTo(0, 0); setShowDaySelector(false); }} className="flex flex-col items-center gap-1 group">
          <Activity size={24} className={!showDaySelector ? 'text-neon-green' : 'text-text-dim opacity-30'} />
          <span className={`text-[8px] font-black uppercase tracking-widest ${!showDaySelector ? 'text-neon-green' : 'text-text-dim opacity-30 group-hover:opacity-100 transition-opacity'}`}>Misión</span>
        </button>
        <button onClick={() => setShowDaySelector(!showDaySelector)} className="flex flex-col items-center gap-1 group">
          <Calendar size={24} className={showDaySelector ? 'text-neon-green' : 'text-text-dim opacity-30'} />
          <span className={`text-[8px] font-black uppercase tracking-widest ${showDaySelector ? 'text-neon-green' : 'text-text-dim opacity-30 group-hover:opacity-100 transition-opacity'}`}>Archivo</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
