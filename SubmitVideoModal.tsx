import React, { useState } from 'react';
import { X, Upload, Video as VideoIcon, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SubmitVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  isHindi: boolean;
  onSubmit: (videoData: { title: string; category: string; videoUrl: string; description: string }) => void;
}

export const SubmitVideoModal: React.FC<SubmitVideoModalProps> = ({
  isOpen,
  onClose,
  isHindi,
  onSubmit,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Cute Laughs');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !videoUrl.trim()) return;

    onSubmit({
      title,
      category,
      videoUrl,
      description: description || 'User submitted cute baby video!',
    });

    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setSubmitted(false);
      setTitle('');
      setVideoUrl('');
      setDescription('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 flex items-center justify-center transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-500 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100">
              {isHindi ? 'वीडियो सबमिट हो गया! 🎉' : 'Video Submitted Successfully! 🎉'}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
              {isHindi ? 'आपकी वीडियो तुरंत गैलरी में जोड़ दी गई है।' : 'Your video has been added to our giggles collection.'}
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-500 text-white flex items-center justify-center shadow-lg">
                <Upload className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-800 dark:text-slate-100">
                  {isHindi ? 'अपने बच्चे का मजेदार वीडियो शेयर करें' : 'Submit Cute Baby Video'}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isHindi ? 'हंसी बाटें और लाखों लोगों के चेहरे पर मुस्कान लाएं' : 'Share the happiness with millions of viewers worldwide'}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">
                  {isHindi ? 'वीडियो Title / शीर्षक *' : 'Video Title *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isHindi ? 'उदा: जब बच्चे ने पहली बार नींबू चखा 🍋' : 'e.g. Baby laughs at fluffy dog 🐶'}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">
                  {isHindi ? 'कैटेगरी (Category)' : 'Category'}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="Cute Laughs">Cute Laughs 🤣</option>
                  <option value="Clumsy Steps">Clumsy Steps 👣</option>
                  <option value="Baby vs Pets">Baby vs Pets 🐶</option>
                  <option value="Dancing Babies">Dancing Babies 💃</option>
                  <option value="Funny Expressions">Funny Expressions 😜</option>
                  <option value="Food Fail">Food Fail 🍋</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">
                  {isHindi ? 'वीडियो URL (MP4 / Direct Link) *' : 'Video URL (MP4 direct link) *'}
                </label>
                <div className="relative">
                  <input
                    type="url"
                    required
                    placeholder="https://example.com/baby-video.mp4"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <VideoIcon className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">
                  {isHindi ? 'विवरण (Description)' : 'Description'}
                </label>
                <textarea
                  rows={3}
                  placeholder={isHindi ? 'वीडियो के बारे में थोड़ी मजेदार बात लिखें...' : 'Write a short funny description...'}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-amber-200" />
                  {isHindi ? 'वीडियो अपलोड करें' : 'Publish Baby Clip'}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
