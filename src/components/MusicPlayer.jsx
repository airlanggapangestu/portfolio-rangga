import React, { useState, useRef } from "react";
import { Volume2, VolumeX, Music2 } from "lucide-react";

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
      {/* Background Music */}
      <audio ref={audioRef} src="/audio/bg-music.mp3" loop />

      <div className="relative">
        {/* Ambient glow ketika musik aktif */}
        {isPlaying && (
          <div className="absolute -inset-3 bg-emerald-400/10 blur-xl pointer-events-none" />
        )}

        {/* Main HUD */}
        <div
          className={`
            relative flex items-center gap-2
            border
            backdrop-blur-md
            shadow-[4px_4px_0_rgba(0,0,0,0.35)]
            transition-all duration-300
            ${
              isPlaying
                ? "bg-[#16251f]/90 border-emerald-400/60"
                : "bg-[#101817]/90 border-white/15 hover:border-white/30"
            }
          `}
          style={{
            clipPath:
              "polygon(0 5px, 5px 5px, 5px 0, calc(100% - 5px) 0, calc(100% - 5px) 5px, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 5px calc(100% - 5px), 0 calc(100% - 5px))",
          }}
        >
          {/* Music icon */}
          <div
            className={`
              flex items-center justify-center
              w-9 h-9
              transition-all duration-300
              ${isPlaying ? "text-emerald-300" : "text-white/50"}
            `}
          >
            <Music2
              className={`w-[17px] h-[17px] ${
                isPlaying ? "animate-pulse" : ""
              }`}
            />
          </div>

          {/* Status */}
          <div className="hidden sm:flex flex-col justify-center pr-1 min-w-[72px]">
            <span
              className={`
                text-[8px]
                font-mono
                tracking-[0.18em]
                leading-none
                ${isPlaying ? "text-emerald-300" : "text-white/40"}
              `}
            >
              {isPlaying ? "AUDIO ACTIVE" : "AUDIO OFF"}
            </span>

            <span className="mt-1 text-[7px] font-mono tracking-wider text-white/25">
              BGM // WORLD
            </span>
          </div>

          {/* Equalizer */}
          {isPlaying && (
            <div className="hidden sm:flex items-end gap-[2px] h-4 mr-1">
              <span className="w-[2px] bg-emerald-300/80 animate-[musicBar_0.8s_ease-in-out_infinite]" />
              <span className="w-[2px] bg-emerald-300/60 animate-[musicBar_0.6s_ease-in-out_infinite_0.15s]" />
              <span className="w-[2px] bg-emerald-300/80 animate-[musicBar_0.9s_ease-in-out_infinite_0.1s]" />
              <span className="w-[2px] bg-emerald-300/50 animate-[musicBar_0.7s_ease-in-out_infinite_0.25s]" />
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={toggleMusic}
            aria-label={isPlaying ? "Mute BGM" : "Play BGM"}
            className={`
              relative
              w-9 h-9
              flex items-center justify-center
              cursor-pointer
              transition-all duration-200
              border
              ${
                isPlaying
                  ? `
                    bg-emerald-400/15
                    text-emerald-300
                    border-emerald-400/40
                    hover:bg-emerald-400/25
                    hover:border-emerald-300/70
                  `
                  : `
                    bg-white/[0.03]
                    text-white/45
                    border-white/10
                    hover:text-emerald-300
                    hover:border-emerald-400/40
                    hover:bg-emerald-400/10
                  `
              }
            `}
            style={{
              clipPath:
                "polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))",
            }}
          >
            {isPlaying ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Pixel corner decorations */}
        <div
          className={`
            absolute -top-1 left-2
            w-2 h-[2px]
            ${isPlaying ? "bg-emerald-400/70" : "bg-white/20"}
          `}
        />

        <div
          className={`
            absolute -bottom-1 right-2
            w-2 h-[2px]
            ${isPlaying ? "bg-emerald-400/50" : "bg-white/15"}
          `}
        />
      </div>

      {/* Animation */}
      <style>{`
        @keyframes musicBar {
          0%, 100% {
            height: 4px;
          }
          50% {
            height: 15px;
          }
        }
      `}</style>
    </div>
  );
}
