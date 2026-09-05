import React, { useState } from 'react';
import { MEME_TEMPLATES } from '../data/videos';
import type { MemeTemplate } from '../data/videos';
import { Image as ImageIcon, Download, Share2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MemeGeneratorProps {
  isHindi: boolean;
}

export const MemeGenerator: React.FC<MemeGeneratorProps> = ({ isHindi }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<MemeTemplate>(MEME_TEMPLATES[0]);
  const [topText, setTopText] = useState(MEME_TEMPLATES[0].defaultTopText);
  const [bottomText, setBottomText] = useState(MEME_TEMPLATES[0].defaultBottomText);

  const handleSelectTemplate = (template: MemeTemplate) => {
    setSelectedTemplate(template);
    setTopText(template.defaultTopText);
    setBottomText(template.defaultBottomText);
  };

  const handleDownload = () => {
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 },
    });
    alert(
      isHindi
        ? 'मीम तैयार है! डाउनलोड के लिए राइट-क्लिक करें या लॉन्ग-प्रेस करें।'
        : 'Meme ready! Right-click or long-press on meme image to save.'
    );
  };

  const handleShareMeme = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Funny Baby Meme',
        text: `${topText} - ${bottomText}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${topText} | ${bottomText}`);
      alert(isHindi ? 'मीम टेक्स्ट कॉपी हो गया!' : 'Meme text copied!');
    }
  };

  return (
    <div className="bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl mb-10 border border-emerald-500/20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <ImageIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-black flex items-center gap-2">
              {isHindi ? 'बेबी मीम जनरेटर 🖼️' : 'Funny Baby Meme Generator 🖼️'}
            </h2>
            <p className="text-xs text-emerald-200 font-medium">
              {isHindi ? 'मजेदार फोटो चुनें, टेक्स्ट लिखें और अपना वायरल मीम बनाएं!' : 'Pick a template, customize top/bottom captions & share instant giggles!'}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold w-fit">
          <Sparkles className="w-3.5 h-3.5" />
          {isHindi ? 'कस्टम मीम मेकर' : 'Instant Meme Creator'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Controls Column */}
        <div className="space-y-5">
          {/* Template Selector */}
          <div>
            <label className="block text-xs font-extrabold text-emerald-300 uppercase tracking-wider mb-2">
              1. {isHindi ? 'फोटो टेम्पलेट चुनें' : 'Choose Photo Template'}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {MEME_TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.id}
                  onClick={() => handleSelectTemplate(tmpl)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition ${
                    selectedTemplate.id === tmpl.id
                      ? 'border-emerald-400 scale-105 shadow-lg'
                      : 'border-slate-700 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={tmpl.imageUrl} alt={tmpl.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Top Text Input */}
          <div>
            <label className="block text-xs font-extrabold text-emerald-300 uppercase tracking-wider mb-1">
              2. {isHindi ? 'ऊपर का टेक्स्ट (Top Caption)' : 'Top Caption'}
            </label>
            <input
              type="text"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
              placeholder={isHindi ? 'ऊपर का मजेदार डायलॉग...' : 'Top text here...'}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Bottom Text Input */}
          <div>
            <label className="block text-xs font-extrabold text-emerald-300 uppercase tracking-wider mb-1">
              3. {isHindi ? 'नीचे का टेक्स्ट (Bottom Caption)' : 'Bottom Caption'}
            </label>
            <input
              type="text"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
              placeholder={isHindi ? 'नीचे का मजेदार पंचलाइन...' : 'Bottom text here...'}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleDownload}
              className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-95 text-white font-extrabold text-sm shadow-lg transition flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              {isHindi ? 'मीम सेव करें' : 'Save Meme'}
            </button>

            <button
              onClick={handleShareMeme}
              className="py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm border border-slate-700 transition flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              {isHindi ? 'शेयर' : 'Share'}
            </button>
          </div>
        </div>

        {/* Live Preview Column */}
        <div className="flex flex-col items-center">
          <label className="block text-xs font-extrabold text-emerald-300 uppercase tracking-wider mb-2 self-start">
            {isHindi ? 'लाइव मीम प्रिव्यू (Live Preview)' : 'Live Meme Preview'}
          </label>

          <div className="relative w-full aspect-square max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-black flex flex-col justify-between p-4 text-center select-none">
            <img
              src={selectedTemplate.imageUrl}
              alt="Meme template"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            {/* Top Meme Text */}
            <h2 className="relative z-10 text-white font-black text-xl sm:text-2xl uppercase tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] stroke-black leading-tight">
              {topText}
            </h2>

            {/* Bottom Meme Text */}
            <h2 className="relative z-10 text-white font-black text-xl sm:text-2xl uppercase tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] stroke-black leading-tight">
              {bottomText}
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
};
