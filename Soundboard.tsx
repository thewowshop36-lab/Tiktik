import React, { useState } from 'react';
import { SOUND_EFFECTS } from '../data/videos';
import type { SoundEffect } from '../data/videos';
import { Volume2, Sparkles, Music } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SoundboardProps {
  isHindi: boolean;
}

export const Soundboard: React.FC<SoundboardProps> = ({ isHindi }) => {
  const [activeSoundId, setActiveSoundId] = useState<string | null>(null);

  const playSynthesizedSound = (sound: SoundEffect) => {
    setActiveSoundId(sound.id);

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (sound.type === 'giggle') {
        // Frequency modulation for giggle
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
        osc.frequency.exponentialRampToValueAtTime(500, now + 0.2);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.3);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (sound.type === 'sneeze') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.08);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.3);
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (sound.type === 'boing') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.25);
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (sound.type === 'aww') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.linearRampToValueAtTime(450, now + 0.4);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.2);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      }
    } catch {
      // AudioContext fallback
    }

    confetti({
      particleCount: 15,
      spread: 40,
      origin: { y: 0.7 },
    });

    setTimeout(() => {
      setActiveSoundId(null);
    }, 500);
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-500/20 mb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 animate-pulse">
            <Volume2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-black flex items-center gap-2">
              {isHindi ? 'बेबी साउंड बोर्ड 🔊' : 'Interactive Baby Soundboard 🔊'}
            </h2>
            <p className="text-xs text-purple-200 font-medium">
              {isHindi ? 'बटन दबाएं और छोटे बच्चों की मजेदार आवाजें सुनें!' : 'Tap buttons to trigger hilarious live baby audio effects!'}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-extrabold w-fit">
          <Sparkles className="w-3.5 h-3.5" />
          {isHindi ? 'लाइव ऑडियो इफेक्ट्स' : 'Live Synthesized Audio'}
        </span>
      </div>

      {/* Sound Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
        {SOUND_EFFECTS.map((sound) => {
          const isActive = activeSoundId === sound.id;

          return (
            <button
              key={sound.id}
              onClick={() => playSynthesizedSound(sound)}
              className={`relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br ${sound.color} text-white font-extrabold flex flex-col items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20 ${
                isActive ? 'ring-4 ring-white ring-offset-2 ring-offset-purple-950 scale-105' : ''
              }`}
            >
              <span className="text-3xl sm:text-4xl filter drop-shadow">{sound.emoji}</span>
              <span className="text-xs text-center line-clamp-1">
                {isHindi ? sound.hindiTitle : sound.title}
              </span>

              <div className="absolute top-2 right-2 text-[10px] bg-black/30 px-1.5 py-0.5 rounded-full font-mono flex items-center gap-0.5">
                <Music className="w-2.5 h-2.5" />
                PLAY
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
