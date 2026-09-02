import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bug,
  Check,
  X,
  Droplets,
  Sun,
  Skull,
  Terminal,
  RotateCcw,
  Sparkles,
  PartyPopper,
} from "lucide-react";

/* =========================================================
   BLOK KODE (PILIHAN)
========================================================= */

const CODE_BLOCKS = [
  {
    id: "water",
    label: "water()",
    desc: "Siram tanaman",
    color: "bg-sky-500 border-sky-400 hover:bg-sky-400",
    icon: Droplets,
    correct: true,
  },
  {
    id: "sun",
    label: "sun()",
    desc: "Beri cahaya",
    color: "bg-amber-500 border-amber-400 hover:bg-amber-400",
    icon: Sun,
    correct: true,
  },
  {
    id: "fire",
    label: "fire()",
    desc: "Bakar tanaman",
    color: "bg-red-500 border-red-400 hover:bg-red-400",
    icon: Skull,
    correct: false,
  },
];

/* =========================================================
   DEKORASI CARNIVAL NIGHT
========================================================= */

function NeonLights() {
  const lights = useMemo(
    () =>
      Array.from({ length: 16 }, () => ({
        top: Math.random() * 90,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        color: ["#f472b6", "#38bdf8", "#fbbf24", "#a78bfa", "#34d399"][
          Math.floor(Math.random() * 5)
        ],
      })),
    [],
  );

  return (
    <>
      {lights.map((l, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            top: `${l.top}%`,
            left: `${l.left}%`,
            background: l.color,
            boxShadow: `0 0 10px 3px ${l.color}60`,
            zIndex: 1,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1.5 + (i % 3),
            repeat: Infinity,
            delay: l.delay,
          }}
        />
      ))}
    </>
  );
}

function CarnivalSparkles({ top, left, delay = 0 }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-0"
      style={{ top, left }}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5], rotate: [0, 90] }}
      transition={{ duration: 3, repeat: Infinity, delay }}
    >
      <Sparkles className="w-5 h-5 text-pink-300/50" />
    </motion.div>
  );
}

function StripedCanopy() {
  return (
    <div className="absolute top-0 inset-x-0 h-4 pointer-events-none z-0 opacity-20">
      <div
        className="w-full h-full"
        style={{
          background:
            "repeating-linear-gradient(90deg, #f472b6 0px, #f472b6 20px, #ffffff 20px, #ffffff 40px, #38bdf8 40px, #38bdf8 60px, #ffffff 60px, #ffffff 80px)",
        }}
      />
    </div>
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
          "linear-gradient(180deg, #1a0a20 0%, #2d0f35 25%, #1e0b2e 50%, #2d0f35 75%, #1a0a20 100%)",
      }}
    >
      {/* ===== DEKORASI CARNIVAL ===== */}
      <div className="absolute inset-0 z-0">
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#f472b6 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Canopy stripe */}
        <StripedCanopy />

        {/* Neon lights */}
        <NeonLights />

        {/* Sparkles */}
        <CarnivalSparkles top="15%" left="10%" />
        <CarnivalSparkles top="30%" left="80%" delay={1} />
        <CarnivalSparkles top="55%" left="12%" delay={2} />
        <CarnivalSparkles top="70%" left="85%" delay={0.5} />
      </div>

      {/* ===== KONTEN ===== */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5 sm:mb-6"
        >
          <h2 className="text-base sm:text-lg font-pixel text-pink-300 inline-flex items-center gap-2 bg-purple-950/70 border border-pink-500/50 rounded-lg px-4 py-2.5">
            <Bug className="w-4 h-4 text-pink-400" />
            CODE WORKBENCH
          </h2>
        </motion.div>

        {/* CARA MAIN */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-purple-950/60 border border-pink-500/40 rounded-xl px-4 py-2.5 mb-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5"
        >
          <span className="font-pixel text-[7px] text-pink-300">
            CARA MAIN:
          </span>
          <span className="text-[9px] text-purple-200/70">1. Lihat pohon</span>
          <span className="text-[9px] text-purple-200/70">2. Pilih blok</span>
          <span className="text-[9px] text-purple-200/70">3. Lihat hasil</span>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* POHON */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-purple-950/60 border-2 border-pink-500/40 rounded-xl p-4 flex flex-col items-center justify-center overflow-hidden"
            style={{ minHeight: "200px" }}
          >
            <span className="font-pixel text-[7px] text-pink-300/60 mb-2">
              [ VISUAL OUTPUT ]
            </span>

            <AnimatePresence mode="wait">
              {treeState === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className="w-7 h-7 bg-purple-700 rounded-t-full" />
                  <div className="w-2 h-9 bg-purple-900" />
                  <p className="text-[9px] text-purple-200/50 font-mono">
                    Pohon layu...
                  </p>
                </motion.div>
              )}

              {treeState === "growing" && (
                <motion.div
                  key="growing"
                  initial={{ scale: 0.3 }}
                  animate={{ scale: [0.3, 1.1, 1] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-2"
                  >
                    <div className="w-2 h-2 bg-pink-400 rounded-full" />
                    <div className="w-2 h-2 bg-sky-400 rounded-full" />
                  </motion.div>
                  <div className="w-14 h-10 bg-pink-500 rounded-t-full relative">
                    <div className="absolute -left-2 top-1 w-4 h-4 bg-pink-400 rounded-full" />
                    <div className="absolute -right-2 top-1 w-4 h-4 bg-pink-400 rounded-full" />
                  </div>
                  <div className="w-3 h-11 bg-purple-800" />
                  <p className="font-pixel text-[8px] text-pink-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> SUBUR!
                  </p>
                </motion.div>
              )}

              {treeState === "dead" && (
                <motion.div
                  key="dead"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, rotate: [0, -4, 4, 0] }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className="w-9 h-7 bg-purple-900 rounded-t-lg" />
                  <div className="w-2.5 h-10 bg-purple-950" />
                  <p className="font-pixel text-[8px] text-red-400 flex items-center gap-1">
                    <X className="w-3 h-3" /> MATI!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {showResult && (
              <button
                onClick={resetPuzzle}
                className="mt-2 bg-pink-400 hover:bg-pink-300 text-purple-950 rounded-lg p-1.5 transition-all"
                aria-label="Reset"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </motion.div>

          {/* KODE & BLOK */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3"
          >
            <div className="bg-purple-950/80 border border-pink-500/40 rounded-xl p-3 font-mono text-[9px] space-y-1.5">
              <div className="flex justify-between text-purple-300/50 border-b border-purple-800 pb-1.5">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3 h-3" /> debugger.js
                </span>
                <span
                  className={
                    treeState === "growing"
                      ? "text-pink-300"
                      : treeState === "dead"
                        ? "text-red-400"
                        : "text-amber-300"
                  }
                >
                  {treeState === "growing"
                    ? "✓ SUCCESS"
                    : treeState === "dead"
                      ? "✗ ERROR"
                      : "● BUGGED"}
                </span>
              </div>
              <p className="text-pink-400">
                <span className="text-sky-400">function</span> growTree() {"{"}
              </p>
              <p className="pl-3 flex items-center gap-1">
                <span className="text-purple-300/50">let action =</span>
                {selectedBlock ? (
                  <span
                    className={`px-2 py-0.5 rounded text-[8px] font-bold ${selectedBlock.color} text-white inline-flex items-center gap-1`}
                  >
                    <selectedBlock.icon className="w-2.5 h-2.5" />
                    {selectedBlock.label}
                  </span>
                ) : (
                  <span className="text-purple-400/50 italic">
                    [ pilih blok ]
                  </span>
                )}
              </p>
              <p className="text-purple-400/40">// pilih blok untuk eksekusi</p>
              <p className="text-pink-400">{"}"}</p>
              <p className="pl-3 text-sky-400">growTree();</p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {CODE_BLOCKS.map((block) => (
                <motion.button
                  key={block.id}
                  onClick={() => handleBlockClick(block)}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-2 py-2.5 rounded-lg border-2 ${block.color} text-white font-bold text-[8px] shadow-md transition-all flex flex-col items-center gap-1`}
                >
                  <block.icon className="w-4 h-4" />
                  <span>{block.label}</span>
                  <span className="text-[6px] font-normal opacity-80">
                    {block.desc}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* OUTPUT */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`mt-4 rounded-xl border-2 px-4 py-3 text-center ${
                treeState === "growing"
                  ? "bg-pink-950/60 border-pink-400"
                  : "bg-red-950/60 border-red-400"
              }`}
            >
              <p
                className={`font-mono text-[9px] ${treeState === "growing" ? "text-pink-300" : "text-red-300"}`}
              >
                {treeState === "growing"
                  ? 'Output: "Pohon tumbuh subur dan berbuah! 🌱✨"'
                  : 'Error: "Tanaman terbakar dan kering! 💀"'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
