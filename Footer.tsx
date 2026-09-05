import React from 'react';
import { Heart, Laugh, ShieldCheck, Mail, Sparkles } from 'lucide-react';

interface FooterProps {
  isHindi: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isHindi }) => {
  return (
    <footer className="mt-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">👶</span>
              <span className="text-2xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                {isHindi ? 'बच्चो की मस्ती' : 'Baby Giggles'}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
              {isHindi
                ? 'यह वेबसाइट बनाई गई है आपके चेहरे पर मुस्कान लाने के लिए! बच्चों की सबसे मासूम, क्यूट और हंसाने वाली वीडियोस का खजाना।'
                : 'Spreading endless joy and laughs with curated, heartwarming, and hilarious baby videos from around the globe.'}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1.5 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4" />
              {isHindi ? '100% फैमिली फ्रेंडली कंटेंट' : '100% Safe & Family Friendly Content'}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider">
              {isHindi ? 'विशेष फीचर्स' : 'Features'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              <li className="flex items-center gap-2 hover:text-pink-500 cursor-pointer">
                <Laugh className="w-4 h-4 text-pink-500" />
                {isHindi ? 'मजेदार वीडियो संग्रह' : 'Funny Video Hub'}
              </li>
              <li className="flex items-center gap-2 hover:text-amber-500 cursor-pointer">
                <Sparkles className="w-4 h-4 text-amber-500" />
                {isHindi ? 'ट्राय नॉट टू लाफ गेम' : 'Try Not To Laugh'}
              </li>
              <li className="flex items-center gap-2 hover:text-purple-500 cursor-pointer">
                <Heart className="w-4 h-4 text-purple-500" />
                {isHindi ? 'बेबी साउंड बोर्ड' : 'Baby Soundboard'}
              </li>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider">
              {isHindi ? 'सब्सक्राइब करें' : 'Stay Smiling'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isHindi ? 'रोजाना नई हंसाने वाली वीडियोस अपने इनबॉक्स में पाएं!' : 'Get a daily boost of baby giggles in your email inbox!'}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={isHindi ? 'ईमेल आईडी लिखें...' : 'Enter your email...'}
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="px-3 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Baby Giggles (बच्चो की मस्ती). Made with ❤️ for happy moments.</p>
          <div className="flex items-center gap-4 font-medium">
            <a href="#" className="hover:text-pink-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-pink-500 transition">Terms of Use</a>
            <a href="#" className="hover:text-pink-500 transition">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
