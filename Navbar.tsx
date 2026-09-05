import React from 'react';
import { Search, Laugh, Moon, Sun, Upload, Volume2, Gamepad2, Image as ImageIcon, Flame } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  activeTab: 'videos' | 'challenge' | 'memes' | 'soundboard';
  setActiveTab: (tab: 'videos' | 'challenge' | 'memes' | 'soundboard') => void;
  onOpenSubmitModal: () => void;
  isHindi: boolean;
  setIsHindi: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  darkMode,
  setDarkMode,
  activeTab,
  setActiveTab,
  onOpenSubmitModal,
  isHindi,
  setIsHindi,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-pink-100 dark:border-slate-800 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('videos')}>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-400 to-amber-400 p-0.5 shadow-lg shadow-pink-500/20 animate-bounce-slow flex items-center justify-center">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
                <span className="text-2xl md:text-3xl">👶</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                  {isHindi ? 'बच्चो की मस्ती' : 'Baby Giggles'}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-300 font-extrabold flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-pink-500 text-pink-500" />
                  FUN
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                {isHindi ? 'मजेदार बेबी वीडियोस और हंसी की दुनिया' : 'Unlimited Funny Baby Videos & Giggles'}
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isHindi ? 'मजेदार वीडियो खोजें (उदा: हंसते हुए बच्चे, डांस, कुत्ता...)' : 'Search funny clips (e.g., laugh, dance, pets...)'}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/50 border border-slate-200 dark:border-slate-700 transition"
              />
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-200 dark:bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setIsHindi((prev) => !prev)}
              className="px-2.5 py-1.5 rounded-xl border border-pink-200 dark:border-slate-700 bg-pink-50 dark:bg-slate-800 text-pink-700 dark:text-pink-300 font-bold text-xs hover:bg-pink-100 dark:hover:bg-slate-700 transition"
              title="Toggle Language / भाषा बदलें"
            >
              {isHindi ? 'English 🌐' : 'हिंदी 🇮🇳'}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            {/* Upload Button */}
            <button
              onClick={onOpenSubmitModal}
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:opacity-95 transition transform active:scale-95"
            >
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">{isHindi ? 'वीडियो डालें' : 'Upload Clip'}</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto py-2 border-t border-slate-100 dark:border-slate-800/80 scrollbar-none">
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition ${
              activeTab === 'videos'
                ? 'bg-pink-500 text-white shadow-md shadow-pink-500/25'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Laugh className="w-4 h-4" />
            {isHindi ? 'वीडियोस (Videos)' : 'Videos Hub'}
          </button>

          <button
            onClick={() => setActiveTab('challenge')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition ${
              activeTab === 'challenge'
                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            {isHindi ? 'हंसी रोक के दिखाओ (Laugh Game)' : 'Try Not To Laugh'}
          </button>

          <button
            onClick={() => setActiveTab('soundboard')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition ${
              activeTab === 'soundboard'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            {isHindi ? 'साउंड बोर्ड (Funny Sounds)' : 'Baby Soundboard'}
          </button>

          <button
            onClick={() => setActiveTab('memes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition ${
              activeTab === 'memes'
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            {isHindi ? 'मीम क्रिएटर (Meme Maker)' : 'Meme Generator'}
          </button>
        </div>

        {/* Mobile Search input */}
        <div className="md:hidden py-2 border-t border-slate-100 dark:border-slate-800">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isHindi ? 'मजेदार वीडियो खोजें...' : 'Search funny clips...'}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/50 border border-slate-200 dark:border-slate-700"
            />
            <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400" />
          </div>
        </div>

      </div>
    </header>
  );
};
