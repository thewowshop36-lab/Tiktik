import React, { useState } from 'react';
import type { Video } from '../data/videos';
import { X, Heart, Laugh, Share2, Send, ThumbsUp, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface VideoModalProps {
  video: Video | null;
  onClose: () => void;
  isHindi: boolean;
  onLikeVideo: (id: string) => void;
  onLaughVideo: (id: string) => void;
  onAddComment: (videoId: string, commentText: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  video,
  onClose,
  isHindi,
  onLikeVideo,
  onLaughVideo,
  onAddComment,
}) => {
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');

  if (!video) return null;

  const handleLaugh = () => {
    onLaughVideo(video.id);
    confetti({
      particleCount: 40,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  const handleLike = () => {
    onLikeVideo(video.id);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const author = userName.trim() || (isHindi ? 'मजेदार दोस्त' : 'Happy Viewer');
    onAddComment(video.id, `${author}: ${newComment}`);
    setNewComment('');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: video.hindiTitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(isHindi ? 'वीडियो लिंक कॉपी हो गया!' : 'Link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <video
            src={video.videoUrl}
            controls
            autoPlay
            className="w-full h-full object-contain"
            poster={video.thumbnailUrl}
          />
        </div>

        {/* Details & Comments Section */}
        <div className="p-6 max-h-[50vh] overflow-y-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-300 text-xs font-bold">
                  {video.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">{video.uploadedAgo}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100">
                {isHindi ? video.hindiTitle : video.title}
              </h2>
            </div>

            {/* Reactions Bar */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleLaugh}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-pink-500 text-white font-black text-sm shadow-md hover:bg-pink-600 active:scale-95 transition"
              >
                <Laugh className="w-5 h-5 fill-white" />
                <span>{video.laughsCount.toLocaleString()}</span>
              </button>

              <button
                onClick={handleLike}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-rose-500 text-white font-black text-sm shadow-md hover:bg-rose-600 active:scale-95 transition"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>{video.likes.toLocaleString()}</span>
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold transition"
                title="Share"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 font-medium">
            {video.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {video.tags.map((tag) => (
              <span key={tag} className="text-xs font-bold text-pink-500 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/50 px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Comments Section */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-pink-500" />
              {isHindi ? 'कमेंट्स एवं प्रतिक्रियाएं' : 'Comments & Reactions'} ({video.comments.length})
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-6 space-y-3">
              <input
                type="text"
                placeholder={isHindi ? 'आपका नाम (Optional)...' : 'Your name (Optional)...'}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-pink-500 border border-slate-200 dark:border-slate-700"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={isHindi ? 'अपनी प्रतिक्रिया लिखें...' : 'Write a funny comment...'}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 border border-slate-200 dark:border-slate-700"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-sm rounded-xl hover:opacity-95 transition flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isHindi ? 'भेजें' : 'Post'}
                </button>
              </div>
            </form>

            {/* Comment List */}
            <div className="space-y-3">
              {video.comments.map((comment) => (
                <div key={comment.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                  <span className="text-2xl">{comment.avatar || '👶'}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{comment.user}</span>
                      <span className="text-[10px] text-slate-400">{comment.timeAgo}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">{comment.text}</p>
                  </div>
                  <button className="text-xs text-slate-400 hover:text-pink-500 flex items-center gap-1 font-semibold">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    {comment.likes}
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
