import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swords, Crown, CheckCircle2 } from "lucide-react";

export default function ChessGarden() {
  const [solved, setSolved] = useState(false);

  return (
    <section
      id="chess"
      className="py-20 px-6 bg-emerald-950 border-t-8 border-emerald-900 text-white relative"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-xl md:text-2xl font-pixel text-amber-300 flex items-center justify-center gap-3">
          <Swords className="w-7 h-7 text-amber-400" /> CHAPTER 3: CHESS GARDEN
        </h2>
        <p className="text-xs md:text-sm text-emerald-200">
          [ MINI-GAME ]: Klik Bidak Mahkota Ratu untuk melancarkan skakmat
          Mate-in-1!
        </p>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-emerald-900 p-6 rounded-xl border-4 border-amber-500 shadow-2xl inline-block"
        >
          {/* Board Papan Catur */}
          <div className="w-64 h-64 border-4 border-amber-900 grid grid-cols-4 grid-rows-4 gap-0 p-1 bg-amber-900 rounded">
            {Array.from({ length: 16 }).map((_, i) => {
              const isDark = (Math.floor(i / 4) + i) % 2 === 1;
              return (
                <div
                  key={i}
                  className={`flex items-center justify-center cursor-pointer transition-all ${
                    isDark ? "bg-amber-800" : "bg-amber-200 text-amber-950"
                  }`}
                  onClick={() => i === 10 && setSolved(true)}
                >
                  {/* Raja Hitam */}
                  {i === 2 && (
                    <Crown className="w-8 h-8 text-slate-900 fill-slate-900" />
                  )}
                  {/* Ratu Putih sebelum klik */}
                  {i === 10 && !solved && (
                    <Crown className="w-8 h-8 text-amber-400 fill-amber-300 animate-pulse" />
                  )}
                  {/* Ratu Putih setelah checkmate */}
                  {i === 6 && solved && (
                    <Crown className="w-8 h-8 text-amber-400 fill-amber-300" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 font-pixel text-xs">
            {solved ? (
              <span className="text-emerald-400 flex items-center justify-center gap-2 animate-pulse">
                <CheckCircle2 className="w-4 h-4" /> CHECKMATE! KAMU MENANG!
              </span>
            ) : (
              <span className="text-amber-400">[ PUZZLE: PUTIH JALAN ]</span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
