import React, { useState, useEffect } from 'react';
import type { Video } from '../data/videos';
import { Gamepad2, Trophy, RefreshCw, Flame, Frown, Smile } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LaughChallengeProps {
  videos: Video[];
  isHindi: boolean;
}

export const LaughChallenge: React.FC<LaughChallengeProps> = ({ videos, isHindi }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [timer, setTimer] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const currentVideo = videos[currentIndex % videos.length];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && isPlaying) {
      handleNoLaugh();
    }
    return () => clearInterval(interval);
  }, [isPlaying, timer]);

  const startGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setTimer(30);
  };

  const handleLaughed = () => {
    setAttempts((prev) => prev + 1);
    setIsPlaying(false);
    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.6 },
    });
  };

  const handleNoLaugh = () => {
    setScore((prev) => prev + 1);
    setAttempts((prev) => prev + 1);
    setIsPlaying(false);
  };

  const nextClip = () => {
    if (currentIndex + 1 >= videos.length) {
      setGameOver(true);
      setIsPlaying(false);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setTimer(30);
      setIsPlaying(true);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setAttempts(0);
    setTimer(30);
    setIsPlaying(false);
    setGameOver(false);
  };

  return (
    <div className="bg-gradient-to-br from-amber-500 via-rose-500 to-pink-600 rounded-3xl p-6 sm:p-8 text-white shadow-2xl mb-10 border border-white/20">
      
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
            <Gamepad2 className="w-7 h-7 text-amber-200" />
          </div>
          <div>
            <h2 className="text-2xl font-black flex items-center gap-2">
              {isHindi ? 'हंसी रोक के दिखाओ गेम 🎭' : 'Try Not To Laugh Challenge 🎭'}
            </h2>
            <p className="text-xs text-amber-100 font-medium">
              {isHindi ? 'वीडियो देखें और गंभीर रहें! क्या आप बिना हंसे 30 सेकंड टिक सकते हैं?' : 'Watch funny clips without giggling! Can you hold your laugh for 30 seconds?'}
            </p>
          </div>
        </div>

        {/* Scoreboard */}
        <div className="flex items-center gap-3">
          <div className="bg-black/30 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-300" />
            <div className="text-xs">
              <div className="text-amber-200 font-bold">{isHindi ? 'स्कोर' : 'Score'}</div>
              <div className="text-lg font-black">{score} / {attempts}</div>
            </div>
          </div>

          <button
            onClick={resetGame}
            className="p-2.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold transition"
            title="Reset Game"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Game Screen */}
      {gameOver ? (
        <div className="bg-slate-900/90 rounded-2xl p-8 text-center space-y-4 my-4 border border-white/10">
          <span className="text-5xl">🏆</span>
          <h3 className="text-2xl font-black text-amber-300">
            {isHindi ? 'गेम ओवर! आपका शानदार प्रदर्शन!' : 'Challenge Complete!'}
          </h3>
          <p className="text-sm text-slate-300">
            {isHindi ? `आपने ${attempts} में से ${score} क्लिप्स बिना हंसे पास कर लीं!` : `You successfully resisted giggling in ${score} out of ${attempts} video clips!`}
          </p>
          <button
            onClick={resetGame}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-black text-sm shadow-xl hover:scale-105 transition"
          >
            {isHindi ? 'दोबारा खेलें' : 'Play Again'}
          </button>
        </div>
      ) : !isPlaying ? (
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 text-center space-y-4 my-4 border border-white/10">
          <div className="w-16 h-16 rounded-full bg-amber-400 text-slate-900 font-black text-2xl flex items-center justify-center mx-auto shadow-xl animate-bounce">
            ⚡
          </div>
          <h3 className="text-xl sm:text-2xl font-black">
            {isHindi ? `क्लिप #${currentIndex + 1}: ${currentVideo.hindiTitle}` : `Clip #${currentIndex + 1}: ${currentVideo.title}`}
          </h3>
          <p className="text-xs sm:text-sm text-amber-100 max-w-lg mx-auto font-medium">
            {isHindi ? 'स्टार्ट बटन दबाएं, वीडियो प्ले होगा और 30 सेकंड की उल्टी गिनती शुरू होगी!' : 'Hit Start Challenge to begin countdown. Be strong and stay serious!'}
          </p>
          <button
            onClick={startGame}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 font-black text-base shadow-xl hover:scale-105 active:scale-95 transition flex items-center justify-center gap-2 mx-auto"
          >
            <Flame className="w-5 h-5 fill-slate-900" />
            {isHindi ? 'चेतावनी: स्टार्ट करें!' : 'Start Challenge!'}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl">
            <video
              src={currentVideo.videoUrl}
              autoPlay
              controls={false}
              className="w-full h-full object-contain"
            />

            {/* Timer Overlay */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-2xl border border-amber-400/40 text-amber-300 font-black text-xl flex items-center gap-2 shadow-lg">
              ⏳ {timer}s
            </div>
          </div>

          {/* User Decision Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              onClick={handleLaughed}
              className="py-3.5 px-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm sm:text-base shadow-lg transition flex items-center justify-center gap-2"
            >
              <Smile className="w-5 h-5" />
              {isHindi ? 'हाहा! मैं हंस पड़ा 😂' : 'I Laughed! 😂'}
            </button>

            <button
              onClick={() => {
                handleNoLaugh();
                nextClip();
              }}
              className="py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-lg transition flex items-center justify-center gap-2"
            >
              <Frown className="w-5 h-5" />
              {isHindi ? 'मैं नहीं हंसा 😎' : 'Did Not Laugh 😎'}
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
