import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked or audio failed:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Target file audio di folder public/audio/bg-music.mp3 */}
      <audio ref={audioRef} src="/audio/bg-music.mp3" loop />

      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute BGM" : "Play BGM"}
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-md border shadow-lg cursor-pointer ${
          isPlaying
            ? "bg-amber-400 text-emerald-950 border-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.5)] scale-105"
            : "bg-emerald-950/80 text-amber-300/70 border-white/10 hover:border-amber-400/50 hover:text-amber-300"
        }`}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
