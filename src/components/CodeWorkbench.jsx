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
  Gem,
  Pickaxe,
  GripVertical,
  Hand,
} from "lucide-react";

/* =========================================================
   BLOK KODE (DRAGGABLE / TAPPABLE)
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
   UNDERGROUND DECORATIONS
========================================================= */

function TopTransition() {
  return (
    <div className="absolute inset-x-0 top-0 h-[50px] z-[10] pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-[35px] bg-[#12100e]" />
      <div className="absolute top-[35px] left-0 w-full h-[15px] bg-gradient-to-b from-[#12100e] to-transparent" />
    </div>
  );
}

function Stalactites() {
  const stalactites = [
    { left: "6%", height: 60, delay: 0 },
    { left: "18%", height: 45, delay: 1 },
    { left: "38%", height: 70, delay: 2 },
    { left: "55%", height: 50, delay: 0.5 },
    { left: "70%", height: 65, delay: 1.5 },
    { left: "85%", height: 55, delay: 2.5 },
  ];

  return (
    <div className="absolute top-0 inset-x-0 z-[5] pointer-events-none">
      {stalactites.map((s, i) => (
        <motion.div
          key={i}
          className="absolute top-0"
          style={{ left: s.left }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
        >
          <div
            style={{
              width: "12px",
              height: `${s.height}px`,
              background: "#1a1512",
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
            }}
          />
          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: s.height + 6 }}
            animate={{ y: [0, 12, 24], opacity: [0.6, 0.3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: s.delay }}
          >
            <div className="w-[3px] h-[5px] bg-[#7dd3a8]/40 rounded-full" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function DeepStones() {
  const stones = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        left: Math.random() * 100,
        top: 20 + Math.random() * 75,
        width: 25 + Math.random() * 60,
        height: 12 + Math.random() * 30,
        color: ["#2d2823", "#35302a", "#26221e", "#3d3832", "#1f1b17"][
          Math.floor(Math.random() * 5)
        ],
        delay: Math.random() * 3,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none">
      {stones.map((stone, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${stone.left}%`,
            top: `${stone.top}%`,
            width: stone.width,
            height: stone.height,
            background: stone.color,
          }}
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: stone.delay }}
        />
      ))}
    </div>
  );
}

function DeepCrystals() {
  const crystals = [
    { left: "5%", top: "40%", size: 20, color: "#7dd3a8" },
    { left: "15%", top: "65%", size: 14, color: "#a78bfa" },
    { left: "78%", top: "35%", size: 24, color: "#7dd3a8" },
    { left: "88%", top: "60%", size: 13, color: "#fbbf24" },
    { left: "30%", top: "72%", size: 16, color: "#a78bfa" },
    { left: "62%", top: "55%", size: 18, color: "#7dd3a8" },
  ];

  return (
    <>
      {crystals.map((crystal, i) => (
        <motion.div
          key={i}
          className="absolute z-[3] pointer-events-none cursor-pointer"
          style={{ left: crystal.left, top: crystal.top }}
          whileHover={{ scale: 1.15 }}
          animate={{ opacity: [0.25, 0.7, 0.25], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 3.5 + i, repeat: Infinity, delay: i * 0.4 }}
        >
          <Gem
            size={crystal.size}
            className={crystal.color}
            fill={crystal.color}
            strokeWidth={1.5}
          />
        </motion.div>
      ))}
    </>
  );
}

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 4,
      })),
    [],
  );

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute z-[2] pointer-events-none bg-[#8b7d5e]/25"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, 22, 0], opacity: [0.08, 0.45, 0.08] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: p.delay }}
        />
      ))}
    </>
  );
}

function BottomEnd() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[60px] z-[10] pointer-events-none">
      <div className="absolute bottom-0 left-0 w-full h-[40px] bg-[#0d0b09]" />
      <div className="absolute bottom-[40px] left-0 w-full h-[20px] bg-gradient-to-t from-[#0d0b09] to-transparent" />
      <div className="absolute bottom-0 left-[15%] h-[8px] w-20 bg-[#1a1512]" />
      <div className="absolute bottom-0 left-[45%] h-[8px] w-24 bg-[#1a1512]" />
      <div className="absolute bottom-0 right-[15%] h-[8px] w-20 bg-[#1a1512]" />
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CodeWorkbench() {
  const [draggedBlock, setDraggedBlock] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null); // untuk tap-to-place mobile
  const [placedBlock, setPlacedBlock] = useState(null);
  const [treeState, setTreeState] = useState("idle");
  const [showResult, setShowResult] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  /* ============ DRAG & DROP (Desktop) ============ */

  const handleDragStart = (block) => {
    setDraggedBlock(block);
    setShowResult(false);
  };

  const handleDragEnd = () => {
    setDraggedBlock(null);
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const blockToPlace = draggedBlock || selectedBlock;
    if (!blockToPlace) return;

    setPlacedBlock(blockToPlace);
    setTreeState(blockToPlace.correct ? "growing" : "dead");
    setShowResult(true);
    setDraggedBlock(null);
    setSelectedBlock(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  /* ============ TAP TO PLACE (Mobile) ============ */

  const handleBlockTap = (block) => {
    // Kalau blok sudah dipilih, langsung place
    if (selectedBlock?.id === block.id) {
      setPlacedBlock(block);
      setTreeState(block.correct ? "growing" : "dead");
      setShowResult(true);
      setSelectedBlock(null);
      return;
    }

    // Pilih blok dulu
    setSelectedBlock(block);
    setShowResult(false);
  };

  const handleDropZoneTap = () => {
    if (selectedBlock) {
      setPlacedBlock(selectedBlock);
      setTreeState(selectedBlock.correct ? "growing" : "dead");
      setShowResult(true);
      setSelectedBlock(null);
    }
  };

  const resetPuzzle = () => {
    setPlacedBlock(null);
    setTreeState("idle");
    setShowResult(false);
    setDraggedBlock(null);
    setSelectedBlock(null);
    setIsDragOver(false);
  };

  return (
    <section
      id="workbench"
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 text-white overflow-hidden flex items-center justify-center py-20"
      style={{
        background:
          "linear-gradient(180deg, #12100e 0%, #1a1512 25%, #26221e 50%, #1a1512 75%, #0d0b09 100%)",
      }}
    >
      <TopTransition />
      <Stalactites />
      <DeepStones />
      <DeepCrystals />
      <FloatingParticles />
      <BottomEnd />

      {/* ===== KONTEN ===== */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5 sm:mb-6"
        >
          <h2 className="text-base sm:text-lg font-pixel text-[#e4ebc8] inline-flex items-center gap-2 bg-[#1a1512]/80 border-2 border-[#5d8147] rounded-lg px-4 py-2.5 shadow-[4px_4px_0_#0b1c11]">
            <Bug className="w-4 h-4 text-[#8fbd6b]" />
            CODE WORKBENCH
          </h2>
        </motion.div>

        {/* CARA MAIN */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#1a1512]/70 border border-[#5d8147] rounded-xl px-4 py-2.5 mb-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5"
        >
          <span className="font-pixel text-[7px] text-[#8fbd6b]">
            CARA MAIN:
          </span>
          <span className="text-[9px] text-[#a8bba0] hidden sm:inline">
            1. Drag blok ke slot
          </span>
          <span className="text-[9px] text-[#a8bba0] sm:hidden">
            1. Tap blok → tap slot
          </span>
          <span className="text-[9px] text-[#a8bba0]">2. Lihat hasil</span>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* POHON */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1a1512]/70 border-2 border-[#5d8147] rounded-xl p-4 flex flex-col items-center justify-center overflow-hidden"
            style={{ minHeight: "200px" }}
          >
            <span className="font-pixel text-[7px] text-[#8fbd6b]/60 mb-2">
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
                  <div className="w-7 h-7 bg-[#3d3832] rounded-t-full" />
                  <div className="w-2 h-9 bg-[#2d2823]" />
                  <p className="text-[9px] text-[#a8bba0]/50 font-mono">
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
                    <div className="w-2 h-2 bg-[#d97878] rounded-full" />
                    <div className="w-2 h-2 bg-[#7dd3a8] rounded-full" />
                  </motion.div>
                  <div className="w-14 h-10 bg-[#5d8147] rounded-t-full relative">
                    <div className="absolute -left-2 top-1 w-4 h-4 bg-[#6eae5a] rounded-full" />
                    <div className="absolute -right-2 top-1 w-4 h-4 bg-[#6eae5a] rounded-full" />
                  </div>
                  <div className="w-3 h-11 bg-[#3d3832]" />
                  <p className="font-pixel text-[8px] text-[#8fbd6b] flex items-center gap-1">
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
                  <div className="w-9 h-7 bg-[#2d2823] rounded-t-lg" />
                  <div className="w-2.5 h-10 bg-[#1a1512]" />
                  <p className="font-pixel text-[8px] text-red-400 flex items-center gap-1">
                    <X className="w-3 h-3" /> MATI!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {showResult && (
              <button
                onClick={resetPuzzle}
                className="mt-2 bg-[#e4a34b] hover:bg-[#f2d878] text-[#1a1512] rounded-lg p-1.5 transition-all"
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
            {/* KODE EDITOR */}
            <div className="bg-[#1a1512]/80 border border-[#5d8147] rounded-xl p-3 font-mono text-[9px] space-y-1.5">
              <div className="flex justify-between text-[#a8bba0]/50 border-b border-[#3d3832] pb-1.5">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3 h-3" /> debugger.js
                </span>
                <span
                  className={
                    treeState === "growing"
                      ? "text-[#8fbd6b]"
                      : treeState === "dead"
                        ? "text-red-400"
                        : "text-[#e4a34b]"
                  }
                >
                  {treeState === "growing"
                    ? "✓ SUCCESS"
                    : treeState === "dead"
                      ? "✗ ERROR"
                      : "● BUGGED"}
                </span>
              </div>

              <p className="text-[#f2d878]">
                <span className="text-[#7dd3a8]">function</span> growTree(){" "}
                {"{"}
              </p>

              {/* DROP ZONE — drag (desktop) + tap (mobile) */}
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={handleDropZoneTap}
                className={`pl-3 flex items-center gap-1.5 border-2 border-dashed rounded-lg p-2 transition-all duration-300 cursor-pointer ${
                  isDragOver || selectedBlock
                    ? "border-[#8fbd6b] bg-[#26221e]"
                    : placedBlock
                      ? "border-[#5d8147] bg-[#1a1512]"
                      : "border-[#3d3832] bg-[#1a1512]/50"
                }`}
              >
                <span className="text-[#a8bba0]/50">let action =</span>
                {placedBlock ? (
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`px-2 py-0.5 rounded text-[8px] font-bold ${placedBlock.color} text-white inline-flex items-center gap-1`}
                  >
                    <placedBlock.icon className="w-2.5 h-2.5" />
                    {placedBlock.label}
                  </motion.span>
                ) : selectedBlock ? (
                  <span className="text-[8px] text-[#8fbd6b] italic">
                    Tap untuk menaruh: {selectedBlock.label}
                  </span>
                ) : (
                  <span className="text-[#a8bba0]/40 italic text-[8px]">
                    [ DRAG / TAP BLOK KE SINI ]
                  </span>
                )}
                {placedBlock && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      resetPuzzle();
                    }}
                    className="ml-auto text-[#a8bba0]/50 hover:text-red-400 transition"
                    aria-label="Remove block"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              <p className="text-[#a8bba0]/40">
                // drag / tap blok untuk eksekusi
              </p>
              <p className="text-[#f2d878]">{"}"}</p>
              <p className="pl-3 text-[#7dd3a8]">growTree();</p>
            </div>

            {/* BLOK DRAGGABLE / TAPPABLE */}
            <div>
              <p className="font-pixel text-[7px] text-[#8fbd6b]/60 text-center mb-2">
                PILIH BLOK:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {CODE_BLOCKS.map((block) => (
                  <motion.div
                    key={block.id}
                    draggable
                    onDragStart={() => handleDragStart(block)}
                    onDragEnd={handleDragEnd}
                    onClick={() => handleBlockTap(block)}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-2 py-2.5 rounded-lg border-2 ${block.color} text-white font-bold text-[8px] shadow-md transition-all flex flex-col items-center gap-1 cursor-grab active:cursor-grabbing ${
                      selectedBlock?.id === block.id
                        ? "ring-4 ring-white/50"
                        : ""
                    }`}
                  >
                    <GripVertical className="w-3 h-3 opacity-50" />
                    <block.icon className="w-4 h-4" />
                    <span>{block.label}</span>
                    <span className="text-[6px] font-normal opacity-80">
                      {block.desc}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Hint mobile */}
              <p className="text-[7px] text-[#a8bba0]/40 text-center mt-2 sm:hidden">
                Tap blok → tap slot untuk menaruh
              </p>
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
                  ? "bg-[#1a1512]/70 border-[#8fbd6b]"
                  : "bg-red-950/60 border-red-400"
              }`}
            >
              <p
                className={`font-mono text-[9px] ${treeState === "growing" ? "text-[#8fbd6b]" : "text-red-300"}`}
              >
                {treeState === "growing"
                  ? 'Output: "Pohon tumbuh subur dan berbuah! 🌱"'
                  : 'Error: "Tanaman terbakar dan kering! 💀"'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* END INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2 font-mono text-[8px] tracking-[0.2em] text-[#a8bba0]/40">
            <Pickaxe size={12} />
            <span>END OF JOURNEY</span>
            <Pickaxe size={12} className="-scale-x-100" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
