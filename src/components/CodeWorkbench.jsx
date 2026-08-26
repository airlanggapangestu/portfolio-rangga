import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bug,
  Check,
  Sprout,
  X,
  Droplets,
  Sun,
  Skull,
  Terminal,
  RotateCcw,
  Leaf,
  Flower2,
  Cloud,
} from "lucide-react";

/* =========================================================
   BLOK KODE (PILIHAN)
========================================================= */

const CODE_BLOCKS = [
  {
    id: "water",
    label: "water()",
    desc: "Siram tanaman",
    color: "bg-sky-500 border-sky-600 hover:bg-sky-400",
    icon: Droplets,
    correct: true,
  },
  {
    id: "sun",
    label: "sun()",
    desc: "Beri cahaya",
    color: "bg-amber-500 border-amber-600 hover:bg-amber-400",
    icon: Sun,
    correct: true,
  },
  {
    id: "fire",
    label: "fire()",
    desc: "Bakar tanaman",
    color: "bg-red-500 border-red-600 hover:bg-red-400",
    icon: Skull,
    correct: false,
  },
];

/* =========================================================
   DEKORASI BACKGROUND - PIXEL LEAVES & VINES
========================================================= */

function FloatingLeaves() {
  const leaves = useMemo(
    () =>
      Array.from({ length: 6 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 5,
        size: 12 + Math.random() * 8,
      })),
    [],
  );

  return (
    <>
      {leaves.map((l, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ top: `${l.top}%`, left: `${l.left}%`, zIndex: 1 }}
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          animate={{
            y: ["-20px", "110%"],
            opacity: [0, 0.4, 0.4, 0],
            rotate: [0, 360],
            x: [0, 15, -10, 8, 0],
          }}
          transition={{
            duration: l.duration,
            repeat: Infinity,
            delay: l.delay,
            ease: "linear",
          }}
        >
          <Leaf
            className="text-emerald-500/30"
            style={{ width: l.size, height: l.size }}
          />
        </motion.div>
      ))}
    </>
  );
}

function CornerVines() {
  return (
    <>
      {/* Vine kiri atas */}
      <div className="absolute top-0 left-0 pointer-events-none z-0 opacity-40">
        <div className="flex flex-col">
          <div className="flex items-end">
            <div className="w-6 h-6 bg-green-700 rounded-tl-lg" />
            <div className="w-6 h-6 bg-green-600" />
          </div>
          <div className="flex">
            <div className="w-6 h-6 bg-green-700" />
            <div className="w-6 h-8 bg-green-600 rounded-br-lg" />
          </div>
          <div className="w-6 h-6 bg-green-800" />
        </div>
      </div>

      {/* Vine kanan bawah */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-0 opacity-40">
        <div className="flex flex-col items-end">
          <div className="w-6 h-6 bg-green-800" />
          <div className="flex">
            <div className="w-6 h-8 bg-green-600 rounded-bl-lg" />
            <div className="w-6 h-6 bg-green-700" />
          </div>
          <div className="flex items-start">
            <div className="w-6 h-6 bg-green-600" />
            <div className="w-6 h-6 bg-green-700 rounded-br-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

function PixelClouds({ top, left, delay = 0 }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-0 opacity-20"
      style={{ top, left }}
      animate={{ x: [0, 15, 0] }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <Cloud className="w-10 h-8 sm:w-14 sm:h-10 text-emerald-200" />
    </motion.div>
  );
}

function PixelFlowers({ bottom, left, delay = 0 }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-0 opacity-30"
      style={{ bottom, left }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <Flower2 className="w-5 h-5 sm:w-6 sm:h-6 text-pink-300" />
    </motion.div>
  );
}

export default function CodeWorkbench() {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [treeState, setTreeState] = useState("idle");
  const [showResult, setShowResult] = useState(false);

  const handleBlockClick = (block) => {
    setSelectedBlock(block);
    setShowResult(true);
    setTreeState(block.correct ? "growing" : "dead");
  };

  const resetPuzzle = () => {
    setSelectedBlock(null);
    setTreeState("idle");
    setShowResult(false);
  };

  return (
    <section
      id="workbench"
      className="relative py-14 sm:py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a2e1f 0%, #0d3525 25%, #0b2d1e 50%, #082618 80%, #061f13 100%)",
      }}
    >
      {/* ===== DEKORASI BACKGROUND ===== */}
      <div className="absolute inset-0 z-0">
        {/* Pattern pixel halus */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#34d399 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Grid lines halus */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #34d399 1px, transparent 1px), linear-gradient(to bottom, #34d399 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Clouds */}
        <PixelClouds top="8%" left="5%" />
        <PixelClouds top="15%" left="75%" delay={2} />
        <PixelClouds top="5%" left="45%" delay={4} />

        {/* Flowers di bawah */}
        <PixelFlowers bottom="8%" left="8%" />
        <PixelFlowers bottom="12%" left="85%" delay={1} />
        <PixelFlowers bottom="6%" left="50%" delay={2} />

        {/* Vines di pojok */}
        <CornerVines />

        {/* Floating leaves */}
        <FloatingLeaves />
      </div>

      {/* ===== KONTEN ===== */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-base sm:text-lg md:text-xl font-pixel text-amber-300 inline-flex items-center gap-2 sm:gap-3 bg-emerald-900/60 border border-emerald-700 rounded-lg px-4 sm:px-6 py-2.5 sm:py-3">
            <Bug className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            CHAPTER 5: CODE WORKBENCH
          </h2>
        </motion.div>

        {/* CARA MAIN - DI ATAS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-emerald-900/50 border border-emerald-700/60 rounded-xl px-4 sm:px-5 py-3 mb-5 sm:mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 backdrop-blur-sm"
        >
          <span className="font-pixel text-[7px] sm:text-[8px] text-amber-300">
            CARA MAIN:
          </span>
          <span className="text-[9px] sm:text-[10px] text-emerald-200/70 flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-[8px] font-bold">
              1
            </span>
            Lihat pohon
          </span>
          <span className="text-[9px] sm:text-[10px] text-emerald-200/70 flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-[8px] font-bold">
              2
            </span>
            Pilih blok kode
          </span>
          <span className="text-[9px] sm:text-[10px] text-emerald-200/70 flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-[8px] font-bold">
              3
            </span>
            Lihat hasilnya
          </span>
        </motion.div>

        {/* MAIN GRID - 2 KOLOM */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {/* ============ KIRI: TAMPILAN POHON ============ */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-emerald-950/50 border-2 border-emerald-700/60 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center overflow-hidden backdrop-blur-sm"
            style={{ minHeight: "220px" }}
          >
            {/* Label area */}
            <div className="absolute top-3 left-3 z-10">
              <span className="font-pixel text-[7px] sm:text-[8px] text-emerald-400/70">
                [ VISUAL OUTPUT ]
              </span>
            </div>

            {/* Tree Display */}
            <div className="relative z-10 flex flex-col items-center justify-center py-4">
              <AnimatePresence mode="wait">
                {treeState === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-green-600 rounded-t-full" />
                      <div className="w-2.5 h-10 bg-amber-800" />
                      <div className="w-6 h-2 bg-amber-900 rounded-b" />
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-amber-200/70 font-mono">
                      Pohon layu...
                    </p>
                  </motion.div>
                )}

                {treeState === "growing" && (
                  <motion.div
                    key="growing"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <motion.div
                      initial={{ scale: 0.3 }}
                      animate={{ scale: [0.3, 1.15, 1] }}
                      transition={{ duration: 1, times: [0, 0.6, 1] }}
                      className="flex flex-col items-center relative"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-3"
                      >
                        <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                        <div className="w-2.5 h-2.5 bg-orange-400 rounded-full" />
                      </motion.div>

                      <div className="w-16 h-12 bg-green-500 rounded-t-full relative">
                        <div className="absolute -left-3 top-2 w-5 h-5 bg-green-400 rounded-full" />
                        <div className="absolute -right-3 top-2 w-5 h-5 bg-green-400 rounded-full" />
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full" />
                      </div>
                      <div className="w-4 h-12 bg-amber-800" />
                      <div className="w-7 h-2.5 bg-amber-900 rounded-b" />
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="font-pixel text-[8px] sm:text-[9px] text-emerald-400 flex items-center gap-1"
                    >
                      <Check className="w-3 h-3" /> SUBUR!
                    </motion.p>
                  </motion.div>
                )}

                {treeState === "dead" && (
                  <motion.div
                    key="dead"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <motion.div
                      animate={{ rotate: [0, -4, 4, -4, 0] }}
                      transition={{ duration: 0.5, repeat: 1 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-10 h-8 bg-amber-950 rounded-t-lg relative">
                        <div className="absolute -left-2 top-1 w-4 h-4 bg-amber-900 rounded-full" />
                        <div className="absolute -right-2 top-1 w-4 h-4 bg-amber-900 rounded-full" />
                      </div>
                      <div className="w-3 h-12 bg-gray-700" />
                      <div className="w-6 h-2 bg-gray-800 rounded-b" />
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="font-pixel text-[8px] sm:text-[9px] text-red-400 flex items-center gap-1"
                    >
                      <X className="w-3 h-3" /> MATI!
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Reset button */}
            {showResult && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={resetPuzzle}
                className="absolute bottom-3 right-3 z-20 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg p-1.5 sm:p-2 border border-amber-600 transition-all"
                aria-label="Reset"
              >
                <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.button>
            )}
          </motion.div>

          {/* ============ KANAN: KODE & BLOK ============ */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Kode Editor */}
            <div className="bg-slate-950 border-2 border-emerald-600/70 rounded-xl p-3 sm:p-4 font-mono text-[9px] sm:text-[10px] space-y-2">
              <div className="flex justify-between items-center text-slate-500 border-b border-slate-800 pb-2">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3 h-3" /> debugger.js
                </span>
                <span
                  className={
                    treeState === "growing"
                      ? "text-emerald-400"
                      : treeState === "dead"
                        ? "text-red-400"
                        : "text-amber-400"
                  }
                >
                  {treeState === "growing"
                    ? "✓ SUCCESS"
                    : treeState === "dead"
                      ? "✗ ERROR"
                      : "● BUGGED"}
                </span>
              </div>

              <div className="space-y-1 bg-slate-900 rounded p-2.5 sm:p-3">
                <p className="text-purple-400">
                  <span className="text-blue-400">function</span> growTree(){" "}
                  {"{"}
                </p>
                <p className="pl-3 flex items-center gap-1.5">
                  <span className="text-slate-500">let action =</span>
                  {selectedBlock ? (
                    <span
                      className={`px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold ${selectedBlock.color} text-white inline-flex items-center gap-1`}
                    >
                      <selectedBlock.icon className="w-2.5 h-2.5" />
                      {selectedBlock.label}
                    </span>
                  ) : (
                    <span className="text-slate-600 italic">
                      [ pilih blok ]
                    </span>
                  )}
                </p>
                <p className="text-slate-600">// pilih blok untuk eksekusi</p>
                <p className="text-purple-400">{"}"}</p>
                <p className="pl-3 text-blue-400">growTree();</p>
              </div>
            </div>

            {/* Blok Pilihan */}
            <div className="space-y-2">
              <p className="font-pixel text-[7px] sm:text-[8px] text-emerald-300/60 text-center">
                PILIH BLOK:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {CODE_BLOCKS.map((block) => (
                  <motion.button
                    key={block.id}
                    onClick={() => handleBlockClick(block)}
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-2 py-2.5 sm:py-3 rounded-lg border-2 ${block.color} text-white font-bold text-[8px] sm:text-[9px] shadow-md transition-all flex flex-col items-center gap-1`}
                  >
                    <block.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{block.label}</span>
                    <span className="text-[6px] sm:text-[7px] font-normal opacity-80">
                      {block.desc}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* HASIL / OUTPUT */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className={`mt-4 sm:mt-5 rounded-xl border-2 px-4 sm:px-5 py-3 sm:py-4 text-center ${
                treeState === "growing"
                  ? "bg-emerald-900/50 border-emerald-500"
                  : "bg-red-900/50 border-red-500"
              }`}
            >
              <p
                className={`font-mono text-[9px] sm:text-[10px] ${
                  treeState === "growing" ? "text-emerald-300" : "text-red-300"
                }`}
              >
                {treeState === "growing"
                  ? 'Output: "Pohon tumbuh subur dan berbuah! 🌱🍎"'
                  : 'Error: "Tanaman terbakar dan kering! 💀"'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
