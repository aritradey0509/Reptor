import React, { useState, useEffect } from 'react';
import { Timer, Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { Button } from './Button';

export const RestTimer: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState<number>(90);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isActive && secondsLeft > 0) {
      timer = setInterval(() => setSecondsLeft((prev) => prev - 1), 1000);
    } else if (secondsLeft === 0 && isActive) {
      setIsActive(false);
      if (soundEnabled) {
        // Audio alert simulation
        try {
          const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
          const osc = audioCtx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 note
          osc.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.5);
        } catch {
          // Silent fallback
        }
      }
    }
    return () => clearInterval(timer);
  }, [isActive, secondsLeft, soundEnabled]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  const presetTimer = (duration: number) => {
    setSecondsLeft(duration);
    setIsActive(true);
  };

  return (
    <div className="glass-card p-4 rounded-2xl border border-slate-700/60 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
          <Timer className={`w-4 h-4 ${isActive ? 'animate-spin' : ''}`} />
          <span>Rest Timer</span>
        </div>
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="text-slate-400 hover:text-white transition-colors"
          title={soundEnabled ? 'Mute Alert' : 'Enable Alert'}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
        </button>
      </div>

      <div className="text-center py-2">
        <span className={`text-4xl font-extrabold font-mono tracking-wider ${secondsLeft === 0 ? 'text-emerald-400 animate-pulse' : 'text-white'}`}>
          {formatTime(secondsLeft)}
        </span>
      </div>

      <div className="flex items-center justify-center gap-2">
        {[60, 90, 120, 180].map((preset) => (
          <button
            key={preset}
            onClick={() => presetTimer(preset)}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
          >
            {preset}s
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 pt-1">
        <Button
          variant={isActive ? 'secondary' : 'primary'}
          size="sm"
          onClick={() => setIsActive(!isActive)}
          icon={isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        >
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setIsActive(false);
            setSecondsLeft(90);
          }}
          icon={<RotateCcw className="w-3.5 h-3.5" />}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
