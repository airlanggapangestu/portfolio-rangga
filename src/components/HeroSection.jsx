import React from "react";
import { motion } from "framer-motion";
import { Code2, Terminal, ArrowDown, Home, Trees } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-28 pb-16 px-6 bg-gradient-to-b from-sky-500 via-emerald-600 to-emerald-800 relative overflow-hidden flex flex-col items-center justify-between"
    >
      {/* Background Graphic Floating Shapes */}
      <div className="absolute top-12 left-10 text-sky-200/40 animate-float">
        <div className="w-16 h-8 bg-white/30 rounded-full blur-[1px]"></div>
      </div>
      <div
        className="absolute top-20 right-16 text-sky-200/40 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="w-24 h-10 bg-white/30 rounded-full blur-[1px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-emerald-950/90 border-4 border-emerald-800 rounded-xl p-6 md:p-8 shadow-2xl z-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Custom Avatar Container */}
          <div className="w-36 h-36 bg-emerald-900 border-4 border-amber-400 rounded-lg flex items-center justify-center text-amber-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
            <Terminal className="w-16 h-16" />
          </div>

          <div className="space-y-3 text-center md:text-left">
            <span className="bg-amber-400 text-amber-950 font-pixel text-[10px] md:text-xs px-3 py-1 rounded border-2 border-amber-800 shadow-sm inline-block">
              LEVEL 1: THE ROOTS
            </span>
            <h1 className="text-2xl md:text-4xl font-pixel text-amber-300 leading-relaxed">
              WELCOME, I'M RANGGA!
            </h1>
            <p className="text-emerald-100 text-xs md:text-sm font-sans leading-relaxed">
              Selamat datang di pertanian kode saya. Jelajahi perjalanan,
              mini-game, dan karya teknologi yang saya tumbuhkan!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Visual House & Tree Vector Illustrative Banner */}
      <div className="w-full max-w-4xl mt-8 bg-emerald-900/80 border-4 border-emerald-950 rounded-lg p-8 relative flex justify-around items-end shadow-2xl">
        <Trees className="w-16 h-16 md:w-24 md:h-24 text-emerald-400" />
        <div className="relative flex flex-col items-center">
          <span className="mb-2 text-[10px] font-pixel bg-amber-300 text-amber-950 px-2 py-0.5 rounded border border-amber-800">
            BARN HQ
          </span>
          <Home className="w-20 h-20 md:w-28 md:h-28 text-amber-500" />
        </div>
        <Trees className="w-16 h-16 md:w-24 md:h-24 text-emerald-400" />
      </div>

      <div className="mt-6 font-pixel text-[10px] md:text-xs text-emerald-100 animate-bounce z-10 bg-emerald-950 px-4 py-2 rounded-full border border-emerald-700 flex items-center gap-2">
        <ArrowDown className="w-4 h-4 text-amber-400" /> SCROLL DOWN TO EXPLORE
      </div>
    </section>
  );
}
