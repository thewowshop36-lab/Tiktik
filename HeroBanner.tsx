import React from 'react';
import { Sparkles, Gamepad2, Volume2, Image as ImageIcon, Heart } from 'lucide-react';

interface HeroBannerProps {
  isHindi: boolean;
  onExploreClick: () => void;
  onPlayGameClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  isHindi,
  onExploreClick,
  onPlayGameClick,
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white p-6 sm:p-10 shadow-2xl mb-8">
      {/* Background playful circles */}
      <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute left-10 -bottom-10 w-48 h-48 rounded-full bg-amber-400/20 blur-xl pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-200 text-xs sm:text-sm font-black mb-4 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
          {isHindi ? '100% हंसी गारंटी के साथ' : 'Guaranteed 100% Giggles & Smiles'}
        </div>

        <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight mb-4 drop-shadow-md">
          {isHindi ? (
            <>
              छोटे बच्चों की सबसे <span className="text-amber-300 underline decoration-wavy decoration-amber-300/60">मजेदार वीडियोस</span> और क्यूट हरकतें! 🎉
            </>
          ) : (
            <>
              World’s Cutest & <span className="text-amber-300 underline decoration-wavy decoration-amber-300/60">Funniest Baby</span> Moments! 🎉
            </>
          )}
        </h1>

        <p className="text-pink-100 text-base sm:text-lg mb-6 leading-relaxed max-w-2xl">
          {isHindi
            ? 'यहां देखिए बच्चे की मासूम हंसी, अनोखे डांस मूव्ज, और क्यूट शरारतें! तनाव दूर भगाएं और अपने पूरे परिवार के साथ हंसें।'
            : 'Explore pure joy! From uncontrollable baby giggles, clumsy first steps to adorable pet bonding and funny dance moves.'}
        </p>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <button
            onClick={onExploreClick}
            className="px-6 py-3 rounded-2xl bg-white text-pink-600 font-extrabold text-sm sm:text-base shadow-lg hover:bg-pink-50 hover:scale-105 active:scale-95 transition flex items-center gap-2"
          >
            <Heart className="w-5 h-5 fill-pink-500 text-pink-500" />
            {isHindi ? 'वीडियोस देखें' : 'Watch Videos'}
          </button>

          <button
            onClick={onPlayGameClick}
            className="px-6 py-3 rounded-2xl bg-amber-400 text-slate-900 font-extrabold text-sm sm:text-base shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition flex items-center gap-2"
          >
            <Gamepad2 className="w-5 h-5" />
            {isHindi ? 'हंसी रोक के दिखाओ गेम' : 'Try Not To Laugh Game'}
          </button>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8 pt-6 border-t border-white/20">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-pink-100">
            <div className="p-2 bg-white/20 rounded-xl">
              <Volume2 className="w-4 h-4 text-amber-300" />
            </div>
            <span>{isHindi ? 'साउंड बोर्ड' : 'Baby Soundboard'}</span>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-pink-100">
            <div className="p-2 bg-white/20 rounded-xl">
              <ImageIcon className="w-4 h-4 text-emerald-300" />
            </div>
            <span>{isHindi ? 'मीम जनरेटर' : 'Meme Maker'}</span>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-pink-100">
            <div className="p-2 bg-white/20 rounded-xl">
              <Sparkles className="w-4 h-4 text-purple-300" />
            </div>
            <span>{isHindi ? 'डेली न्यू वीडियोस' : 'Daily Fresh Clips'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
