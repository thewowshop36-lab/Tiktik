import React, { useState } from 'react';
import type { Video } from '../data/videos';
import { Play, Heart, Laugh, Share2, Eye, MessageCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface VideoCardProps {
  video: Video;
  onSelectVideo: (video: Video) => void;
  isHindi: boolean;
  onLikeVideo: (id: string) => void;
  onLaughVideo: (id: string) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  video,
  onSelectVideo,
  isHindi,
  onLikeVideo,
  onLaughVideo,
}) => {
  const [floatingEmojis, setFloatingEmojis] = useState<{ id: number; emoji: string }[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const triggerLaughReaction = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLaughVideo(video.id);

    // Trigger canvas confetti laugh effect
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#f43f5e', '#ec4899', '#f59e0b', '#10b981'],
    });

    // Add floating emoji
    const newEmoji = { id: Date.now(), emoji: '🤣' };
    setFloatingEmojis((prev) => [...prev, newEmoji]);
    setTimeout(() => {
      setFloatingEmojis((prev) => prev.filter((item) => item.id !== newEmoji.id));
    }, 1000);
  };

  const triggerLikeReaction = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLikeVideo(video.id);

    const newEmoji = { id: Date.now(), emoji: '❤️' };
    setFloatingEmojis((prev) => [...prev, newEmoji]);
    setTimeout(() => {
      setFloatingEmojis((prev) => prev.filter((item) => item.id !== newEmoji.id));
    }, 1000);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: video.hindiTitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(isHindi ? 'लिंक कॉपी हो गया!' : 'Video link copied to clipboard!');
    }
  };

  return (
    <div
      onClick={() => onSelectVideo(video)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
    >
      {/* Floating Emojis Animation */}
      {floatingEmojis.map((item) => (
        <span
          key={item.id}
          className="absolute right-6 bottom-16 text-3xl z-30 pointer-events-none animate-bounce"
          style={{ animationDuration: '0.8s' }}
        >
          {item.emoji}
        </span>
      ))}

      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105 opacity-90' : 'scale-100'
          }`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

        {/* Featured Tag */}
        {video.isFeatured && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white text-[11px] font-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
            <Sparkles className="w-3 h-3 fill-amber-200 text-amber-200" />
            {isHindi ? 'सुपर हिट' : 'Super Hit'}
          </span>
        )}

        {/* Category Pill */}
        <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
          {video.category}
        </span>

        {/* Play Icon Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-pink-500/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-pink-600 transition duration-300">
            <Play className="w-6 h-6 fill-white ml-0.5" />
          </div>
        </div>

        {/* Duration badge */}
        <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-semibold px-2 py-0.5 rounded-lg">
          {video.duration}
        </span>
      </div>

      {/* Content Info */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-base line-clamp-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition mb-1">
            {isHindi ? video.hindiTitle : video.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 font-medium mb-3">
            {video.description}
          </p>
        </div>

        <div>
          {/* Stats bar */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3 pt-2 border-t border-slate-100 dark:border-slate-700/60 font-semibold">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-slate-400" />
                {video.views.toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
                {video.comments.length}
              </span>
            </div>
            <span>{video.uploadedAgo}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={triggerLaughReaction}
              className="flex-1 py-1.5 px-2 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-900/60 text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95"
            >
              <Laugh className="w-4 h-4 fill-pink-400 text-pink-500" />
              <span>{video.laughsCount.toLocaleString()}</span>
            </button>

            <button
              onClick={triggerLikeReaction}
              className="flex-1 py-1.5 px-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95"
            >
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>{video.likes.toLocaleString()}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition active:scale-95"
              title="Share Video"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
