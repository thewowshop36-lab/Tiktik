import React from 'react';
import { CATEGORIES } from '../data/videos';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  isHindi: boolean;
}

const CATEGORY_HINDI_MAP: Record<string, string> = {
  All: 'सभी (All)',
  'Cute Laughs': 'मासूम हंसी 🤣',
  'Clumsy Steps': 'पहले कदम 👣',
  'Baby vs Pets': 'बच्चे और पेट्स 🐶',
  'Dancing Babies': 'मजेदार डांस 💃',
  'Funny Expressions': 'अनोखी शक्लें 😜',
  'Food Fail': 'खाना और ड्रामा 🍋',
};

const CATEGORY_EMOJI_MAP: Record<string, string> = {
  All: '✨',
  'Cute Laughs': '😆',
  'Clumsy Steps': '👶',
  'Baby vs Pets': '🐾',
  'Dancing Babies': '🕺',
  'Funny Expressions': '🤪',
  'Food Fail': '🍓',
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  isHindi,
}) => {
  return (
    <div className="mb-6 overflow-x-auto pb-2 scrollbar-none">
      <div className="flex items-center gap-2.5">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          const label = isHindi ? CATEGORY_HINDI_MAP[cat] || cat : cat;
          const emoji = CATEGORY_EMOJI_MAP[cat] || '🎈';

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 transform active:scale-95 ${
                isSelected
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 hover:bg-pink-50 dark:hover:bg-slate-700'
              }`}
            >
              <span>{emoji}</span>
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
