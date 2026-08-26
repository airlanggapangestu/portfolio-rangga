import React from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Layout,
  Layers,
  Sprout,
  Leaf,
  Cloud,
  Flower2,
  ExternalLink,
  Code2,
} from "lucide-react";

/* =========================================================
   DATA PROJECTS
========================================================= */

const projects = [
  {
    title: "COZY FARM GAME",
    tech: "React • PixiJS • Tailwind",
    desc: "Simulasi pertanian pixel art dengan manajemen state yang kompleks.",
    Icon: Gamepad2,
    hex: "#34D399",
    status: "ONGOING",
    tags: ["Game Dev", "Pixel Art"],
  },
  {
    title: "RESTAURANT WEB APP",
    tech: "Next.js • Express • MongoDB",
    desc: "Aplikasi e-commerce kuliner lengkap dengan fitur transaksi.",
    Icon: Layout,
    hex: "#FBBF24",
    status: "COMPLETED",
    tags: ["Full Stack", "E-Commerce"],
  },
];

/* =========================================================
   DEKORASI BACKGROUND
========================================================= */

function FloatingLeaves() {
  const leaves = [
    { top: "10%", left: "5%", delay: 0, size: 14 },
    { top: "30%", left: "90%", delay: 2, size: 12 },
    { top: "60%", left: "8%", delay: 4, size: 16 },
    { top: "80%", left: "85%", delay: 1, size: 10 },
    { top: "15%", left: "50%", delay: 3, size: 12 },
  ];

  return (
    <>
      {leaves.map((l, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ top: l.top, left: l.left, zIndex: 1 }}
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          animate={{
            y: ["-20px", "110%"],
            opacity: [0, 0.3, 0.3, 0],
            rotate: [0, 360],
            x: [0, 15, -10, 8, 0],
          }}
          transition={{
            duration: 8 + i,
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

function PixelClouds({ top, left, delay = 0 }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-0 opacity-20"
      style={{ top, left }}
      animate={{ x: [0, 15, 0] }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <Cloud className="w-12 h-9 sm:w-16 sm:h-12 text-emerald-200" />
    </motion.div>
  );
}

function PixelFlowers({ bottom, left, delay = 0 }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-0 opacity-25"
      style={{ bottom, left }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <Flower2 className="w-5 h-5 sm:w-7 sm:h-7 text-pink-300" />
    </motion.div>
  );
}

function PixelSprout({ bottom, left, delay = 0 }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-0 opacity-25"
      style={{ bottom, left }}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <Sprout className="w-5 h-5 sm:w-7 sm:h-7 text-emerald-300" />
    </motion.div>
  );
}

export default function TechHarvest() {
  return (
    <section
      id="tech"
      className="relative py-14 sm:py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #064e3b 0%, #065f46 25%, #047857 50%, #065f46 75%, #064e3b 100%)",
      }}
    >
      {/* ===== DEKORASI BACKGROUND ===== */}
      <div className="absolute inset-0 z-0">
        {/* Pattern pixel halus */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#34d399 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Grid halus */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #34d399 1px, transparent 1px), linear-gradient(to bottom, #34d399 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Clouds */}
        <PixelClouds top="5%" left="5%" />
        <PixelClouds top="10%" left="70%" delay={2} />
        <PixelClouds top="3%" left="40%" delay={4} />

        {/* Flowers & Sprouts di bawah */}
        <PixelFlowers bottom="5%" left="6%" />
        <PixelFlowers bottom="8%" left="88%" delay={1} />
        <PixelSprout bottom="4%" left="45%" delay={2} />
        <PixelSprout bottom="7%" left="25%" delay={3} />
        <PixelSprout bottom="6%" left="65%" delay={1.5} />

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
            <Sprout className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            CHAPTER 4: TECH HARVEST
          </h2>
          <p className="text-emerald-200/60 text-[9px] sm:text-[10px] font-mono mt-2">
            [ HASIL PANEN PROYEK ]
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {projects.map((p, idx) => {
            const Icon = p.Icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                style={{ "--accent": p.hex }}
                className="group relative bg-emerald-950/60 backdrop-blur-sm border-2 border-emerald-700/60 rounded-xl p-4 sm:p-5 overflow-hidden transition-all duration-300 hover:border-[color:var(--accent)]/60 hover:shadow-[0_10px_35px_-12px_var(--accent)]"
              >
                {/* Garis aksen atas */}
                <div
                  className="absolute inset-x-0 top-0 h-[3px] opacity-80"
                  style={{ background: p.hex }}
                />

                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className="font-pixel text-[6px] sm:text-[7px] px-2 py-1 rounded-full border font-bold"
                    style={{
                      color: p.hex,
                      borderColor: `${p.hex}50`,
                      background: `${p.hex}15`,
                    }}
                  >
                    {p.status}
                  </span>
                </div>

                {/* Icon + Tech */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${p.hex}1A` }}
                  >
                    <Icon
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: p.hex }}
                    />
                  </div>
                  <span className="flex items-center gap-1 text-[7px] sm:text-[8px] font-mono text-emerald-300/60 bg-emerald-900/50 px-2 py-1 rounded border border-emerald-700/40">
                    <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {p.tech}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-pixel text-[10px] sm:text-[11px] mb-2"
                  style={{ color: p.hex }}
                >
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-[10px] sm:text-[11px] text-emerald-200/70 leading-relaxed mb-3 sm:mb-4">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2.5 sm:pt-3 border-t border-white/5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[7px] sm:text-[8px] font-mono text-emerald-300/50 bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* INFO TAMBAHAN */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 sm:mt-6 text-center"
        >
          <p className="text-emerald-200/50 text-[9px] sm:text-[10px] font-mono inline-flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5" />
            Lebih banyak proyek segera hadir...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
