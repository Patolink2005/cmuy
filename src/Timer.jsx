import React, { useState, useEffect } from 'react';
import { Timer as TimerIcon, RotateCcw } from 'lucide-react';

export function Timer() {
    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => setSeconds(s => s - 1), 1000);
        } else if (seconds === 0) {
            setIsActive(false);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const reset = () => { setSeconds(60); setIsActive(false); };
    const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

    return (
        <div className="flex items-center gap-4 bg-tactical-grey-light p-3 rounded border border-tactical-gold/20">
            <TimerIcon className={isActive ? "text-neon-green animate-pulse" : "text-tactical-gold"} size={20} />
            <span className="text-2xl font-mono font-bold w-16">{formatTime(seconds)}</span>
            <button onClick={() => setIsActive(!isActive)} className="bg-military-olive text-white px-4 py-1 text-[10px] font-black uppercase rounded shadow-lg active:scale-95">
                {isActive ? 'PAUSA' : 'INICIAR'}
            </button>
            <button onClick={reset} className="p-2 text-text-dim hover:text-white transition-colors">
                <RotateCcw size={16} />
            </button>
        </div>
    );
}