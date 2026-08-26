import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Gamepad2,
  Trophy,
  Users,
  Award,
  Laugh,
  Maximize2,
  X,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Cpu,
  Calendar,
  Flag,
  Leaf,
} from "lucide-react";

/* ================= DECORATIVE PIXEL NATURE PIECES ================= */

/* ---- Pixel Tree (larger, more detailed) ---- */
const TREE_GRID_LARGE = [
  ".....HHHHH.....",
  "....HHHHHHH....",
  "...HHHHHHHHH...",
  "..HHHHHHHHHHH..",
  ".HHHHHHHHHHHHH.",
  "HHHHHHHHHHHHHHH",
  ".HHHHHHHHHHHHH.",
  "..HHHHHHHHHHH..",
  "...HHHHHHHHH...",
  "....HHHHHHH....",
  ".....HHHHH.....",
  "......TTT......",
  "......TTT......",
  "......TTT......",
  ".....TTTTT.....",
  "....TTTTTTT....",
  "...TTTTTTTTT...",
];

function buildTreeShadow(foliage, trunk, size) {
  const shadows = [];
  TREE_GRID_LARGE.forEach((row, y) => {
    row.split("").forEach((ch, x) => {
      if (ch === ".") return;
      shadows.push(
        `${x * size}px ${y * size}px 0 ${ch === "H" ? foliage : trunk}`,
      );
    });
  });
  return shadows.join(", ");
}

function PixelTree({
  size = 5,
  foliage = "#166534",
  trunk = "#3f2a14",
  className = "",
  sway = true,
}) {
  const shadow = useMemo(
    () => buildTreeShadow(foliage, trunk, size),
    [foliage, trunk, size],
  );
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ transformOrigin: "bottom center" }}
      animate={sway ? { rotate: [-2, 2, -2] } : {}}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div style={{ width: size, height: size, boxShadow: shadow }} />
    </motion.div>
  );
}

/* ---- Small Pixel Bush ---- */
function PixelBush({ size = 5, className = "" }) {
  const bushShadow = useMemo(() => {
    const grid = ["..HH..", ".HHHH.", "HHHHHH", ".HHHH."];
    const shadows = [];
    grid.forEach((row, y) => {
      row.split("").forEach((ch, x) => {
        if (ch === "H") {
          shadows.push(`${x * size}px ${y * size}px 0 #15803d`);
        }
      });
    });
    return shadows.join(", ");
  }, [size]);

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <div style={{ width: size, height: size, boxShadow: bushShadow }} />
    </div>
  );
}

/* ---- Pixel Rocks (larger, more visible) ---- */
function RockCluster({ className = "" }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {/* Bottom layer - darker rocks */}
      <div className="relative">
        <div
          className="absolute"
          style={{
            width: "24px",
            height: "18px",
            background: "#1a1a1a",
            left: "8px",
            top: "12px",
            boxShadow: "0 2px 0 #0a0a0a",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "32px",
            height: "20px",
            background: "#2a2a2a",
            left: "18px",
            top: "8px",
            boxShadow: "0 2px 0 #1a1a1a",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "20px",
            height: "14px",
            background: "#1f1f1f",
            left: "40px",
            top: "14px",
            boxShadow: "0 2px 0 #0f0f0f",
          }}
        />
        {/* Highlight pixels on rocks */}
        <div
          className="absolute"
          style={{
            width: "5px",
            height: "5px",
            background: "#4a4a4a",
            left: "24px",
            top: "10px",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "5px",
            height: "5px",
            background: "#3a3a3a",
            left: "30px",
            top: "12px",
          }}
        />
      </div>
    </div>
  );
}

/* ---- Pixel Flowers ---- */
function PixelFlowers({ className = "" }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {/* Flower 1 - Red */}
      <div className="absolute left-0 top-0">
        <div
          style={{
            width: "5px",
            height: "5px",
            background: "#ef4444",
            boxShadow:
              "0 -5px 0 #ef4444, 5px 0 0 #ef4444, -5px 0 0 #ef4444, 0 5px 0 #ef4444",
          }}
        />
        <div
          style={{
            width: "5px",
            height: "5px",
            background: "#fbbf24",
            marginTop: "5px",
            marginLeft: "5px",
          }}
        />
      </div>
      {/* Flower 2 - Yellow */}
      <div className="absolute left-10 top-2">
        <div
          style={{
            width: "5px",
            height: "5px",
            background: "#fbbf24",
            boxShadow:
              "0 -5px 0 #fbbf24, 5px 0 0 #fbbf24, -5px 0 0 #fbbf24, 0 5px 0 #fbbf24",
          }}
        />
        <div
          style={{
            width: "5px",
            height: "5px",
            background: "#f59e0b",
            marginTop: "5px",
            marginLeft: "5px",
          }}
        />
      </div>
      {/* Flower 3 - Purple */}
      <div className="absolute left-20 top-1">
        <div
          style={{
            width: "5px",
            height: "5px",
            background: "#8b5cf6",
            boxShadow:
              "0 -5px 0 #8b5cf6, 5px 0 0 #8b5cf6, -5px 0 0 #8b5cf6, 0 5px 0 #8b5cf6",
          }}
        />
        <div
          style={{
            width: "5px",
            height: "5px",
            background: "#fbbf24",
            marginTop: "5px",
            marginLeft: "5px",
          }}
        />
      </div>
    </div>
  );
}

/* ---- Pixel Mushrooms ---- */
function PixelMushrooms({ className = "" }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {/* Mushroom 1 */}
      <div className="absolute left-0 top-0">
        <div
          style={{
            width: "15px",
            height: "5px",
            background: "#ef4444",
            boxShadow: "0 -5px 0 #ef4444",
          }}
        />
        <div
          style={{
            width: "10px",
            height: "5px",
            background: "#ef4444",
            marginLeft: "2.5px",
            marginTop: "-5px",
          }}
        />
        <div
          style={{
            width: "5px",
            height: "15px",
            background: "#d4a574",
            marginLeft: "5px",
            marginTop: "5px",
          }}
        />
        {/* White dots */}
        <div
          style={{
            width: "3px",
            height: "3px",
            background: "#fff",
            marginLeft: "3px",
            marginTop: "-20px",
          }}
        />
        <div
          style={{
            width: "3px",
            height: "3px",
            background: "#fff",
            marginLeft: "9px",
            marginTop: "-5px",
          }}
        />
      </div>
      {/* Mushroom 2 - Smaller */}
      <div className="absolute left-20 top-5">
        <div
          style={{
            width: "10px",
            height: "5px",
            background: "#f59e0b",
            boxShadow: "0 -3px 0 #f59e0b",
          }}
        />
        <div
          style={{
            width: "5px",
            height: "3px",
            background: "#f59e0b",
            marginLeft: "2.5px",
            marginTop: "-3px",
          }}
        />
        <div
          style={{
            width: "4px",
            height: "10px",
            background: "#d4a574",
            marginLeft: "3px",
            marginTop: "5px",
          }}
        />
      </div>
    </div>
  );
}

/* ---- Pixel Bird (larger, more detailed) ---- */
function PixelBird({ top, duration, delay, scale = 1, color = "#FDE68A" }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top: `${top}%` }}
      initial={{ x: "-8%", opacity: 0 }}
      animate={{
        x: ["-8%", "115%"],
        y: [0, -20, 6, -14, 0],
        opacity: [0, 1, 1, 1, 0],
      }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <div
        className="relative"
        style={{ width: 24 * scale, height: 18 * scale }}
      >
        {/* Body */}
        <div
          className="absolute"
          style={{
            width: 10 * scale,
            height: 7 * scale,
            left: 7 * scale,
            top: 5 * scale,
            background: color,
            borderRadius: "50%",
          }}
        />
        {/* Left wing */}
        <motion.div
          className="absolute"
          style={{
            width: 10 * scale,
            height: 5 * scale,
            left: 1 * scale,
            top: 4 * scale,
            background: color,
            clipPath: "polygon(100% 50%, 0 0, 0 100%)",
            transformOrigin: "right center",
          }}
          animate={{ rotate: [0, -40, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
        {/* Right wing */}
        <motion.div
          className="absolute"
          style={{
            width: 10 * scale,
            height: 5 * scale,
            right: 0,
            top: 4 * scale,
            background: color,
            clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
            transformOrigin: "left center",
          }}
          animate={{ rotate: [0, 40, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
        {/* Tail */}
        <div
          className="absolute"
          style={{
            width: 4 * scale,
            height: 4 * scale,
            right: 2 * scale,
            top: 7 * scale,
            background: color,
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}

/* ---- Pixel Clouds ---- */
function PixelCloud({ className = "", top = "10%", left = "10%", scale = 1 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ top, left }}
      animate={{ x: [0, 20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div style={{ transform: `scale(${scale})` }}>
        <div
          style={{
            width: "40px",
            height: "10px",
            background: "rgba(255,255,255,0.3)",
            boxShadow:
              "5px -5px 0 rgba(255,255,255,0.3), 15px -8px 0 rgba(255,255,255,0.3), 25px -5px 0 rgba(255,255,255,0.3), 35px -2px 0 rgba(255,255,255,0.3)",
            borderRadius: "5px",
          }}
        />
      </div>
    </motion.div>
  );
}

/* ---- Pixel Waterfall ---- */
function PixelWaterfall({ className = "" }) {
  return (
    <div className={`absolute pointer-events-none select-none ${className}`}>
      {/* Rock edge at top */}
      <div
        className="w-20 h-6 bg-emerald-950"
        style={{
          clipPath:
            "polygon(0 100%, 10% 40%, 30% 70%, 50% 30%, 70% 60%, 90% 40%, 100% 100%)",
        }}
      />
      {/* Falling water */}
      <motion.div
        className="w-16 mx-auto overflow-hidden"
        style={{
          height: "200px",
          background:
            "repeating-linear-gradient(180deg, rgba(147,197,253,0.9) 0px, rgba(59,130,246,0.6) 8px, rgba(147,197,253,0.9) 16px)",
          backgroundSize: "100% 24px",
          imageRendering: "pixelated",
        }}
        animate={{ backgroundPositionY: [0, 24] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
      />
      {/* Splash at bottom */}
      <motion.div
        className="w-24 h-6 mx-auto bg-blue-200/50 rounded-full blur-[2px] -mt-1"
        animate={{ opacity: [0.3, 0.7, 0.3], scaleX: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ---- Pixel River ---- */
function PixelRiver({ className = "" }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="80" height="800" viewBox="0 0 80 800" fill="none">
        {/* River bed */}
        <path
          d="M40 0 C25 80 55 160 35 240 C15 320 50 400 30 480 C10 560 48 640 28 720 C12 780 38 800 25 800"
          stroke="#0c4a6e"
          strokeWidth="22"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Flowing water */}
        <motion.path
          d="M40 0 C25 80 55 160 35 240 C15 320 50 400 30 480 C10 560 48 640 28 720 C12 780 38 800 25 800"
          stroke="#7dd3fc"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="8 12"
          opacity="0.85"
          animate={{ strokeDashoffset: [0, -40] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        {/* Rocks in river */}
        <circle cx="25" cy="120" r="6" fill="#1a1a1a" />
        <circle cx="52" cy="280" r="5" fill="#2a2a2a" />
        <circle cx="18" cy="450" r="7" fill="#1f1f1f" />
        <circle cx="45" cy="600" r="5" fill="#2a2a2a" />
        <circle cx="22" cy="750" r="6" fill="#1a1a1a" />
      </svg>
    </div>
  );
}

/* ---- Grass Strip (pixel-style) ---- */
function GrassStrip() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-8 pointer-events-none">
      {/* Main grass */}
      <div
        className="absolute inset-x-0 bottom-0 h-6 bg-emerald-800"
        style={{
          clipPath:
            "polygon(0% 100%,0% 30%,2% 0%,4% 30%,6% 0%,8% 30%,10% 0%,12% 30%,14% 0%,16% 30%,18% 0%,20% 30%,22% 0%,24% 30%,26% 0%,28% 30%,30% 0%,32% 30%,34% 0%,36% 30%,38% 0%,40% 30%,42% 0%,44% 30%,46% 0%,48% 30%,50% 0%,52% 30%,54% 0%,56% 30%,58% 0%,60% 30%,62% 0%,64% 30%,66% 0%,68% 30%,70% 0%,72% 30%,74% 0%,76% 30%,78% 0%,80% 30%,82% 0%,84% 30%,86% 0%,88% 30%,90% 0%,92% 30%,94% 0%,96% 30%,98% 0%,100% 30%,100% 100%)",
        }}
      />
      {/* Darker grass layer */}
      <div
        className="absolute inset-x-0 bottom-0 h-4 bg-emerald-900/50"
        style={{
          clipPath:
            "polygon(0% 100%,0% 50%,3% 20%,6% 50%,9% 20%,12% 50%,15% 20%,18% 50%,21% 20%,24% 50%,27% 20%,30% 50%,33% 20%,36% 50%,39% 20%,42% 50%,45% 20%,48% 50%,51% 20%,54% 50%,57% 20%,60% 50%,63% 20%,66% 50%,69% 20%,72% 50%,75% 20%,78% 50%,81% 20%,84% 50%,87% 20%,90% 50%,93% 20%,96% 50%,99% 20%,100% 50%,100% 100%)",
        }}
      />
    </div>
  );
}

/* ---- Pixel Butterflies ---- */
function PixelButterfly({ top, left, duration, delay }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top: `${top}%`, left: `${left}%` }}
      animate={{
        y: [0, -30, 10, -20, 0],
        x: [0, 20, -15, 25, 0],
        rotate: [0, 15, -15, 10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {/* Left wing */}
      <motion.div
        style={{
          width: "8px",
          height: "8px",
          background: "#fbbf24",
          position: "absolute",
          left: "-4px",
          top: "0",
          clipPath: "polygon(100% 50%, 0 0, 0 100%)",
        }}
        animate={{ rotate: [0, -30, 0] }}
        transition={{ duration: 0.4, repeat: Infinity }}
      />
      {/* Right wing */}
      <motion.div
        style={{
          width: "8px",
          height: "8px",
          background: "#f59e0b",
          position: "absolute",
          right: "-4px",
          top: "0",
          clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
        }}
        animate={{ rotate: [0, 30, 0] }}
        transition={{ duration: 0.4, repeat: Infinity }}
      />
      {/* Body */}
      <div
        style={{
          width: "3px",
          height: "8px",
          background: "#78350f",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </motion.div>
  );
}

export default function LifeStory() {
  const [activeCert, setActiveCert] = useState(null);

  const itCertificates = [
    {
      id: "educourse-starter",
      title: "Coding for Teens (Starter)",
      issuer: "Educourse.id x SMK Medikacom RPL",
      date: "05 Desember 2024",
      badge: "STARTER LEVEL",
      image: "/certs/educourse-starter.jpeg",
    },
    {
      id: "educourse-beginner",
      title: "Coding for Teens (Beginner)",
      issuer: "Educourse.id x SMK Medikacom RPL",
      date: "05 Juni 2025",
      badge: "BEGINNER LEVEL",
      image: "/certs/educourse-beginner.jpeg",
    },
    {
      id: "educourse-advance",
      title: "Coding for Teens Level Advance",
      issuer: "Educourse.id x SMK Medikacom RPL",
      date: "16 Desember 2025",
      badge: "ADVANCE LEVEL 🚀",
      image: "/certs/educourse-advance.jpeg",
    },
  ];

  const nonItAchievements = [
    {
      id: "comedy",
      title: "JUARA 1 STAND UP COMEDY",
      level: "Tingkat Sekolah",
      badge: "CHAMPION 🏆",
      icon: Laugh,
      hex: "#FBBF24",
      certImage:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
      schoolNewsUrl:
        "https://medikacom.sch.id/kegiatan-lomba-literasi-smk-medikacom-bandung/",
    },
    {
      id: "chess",
      title: "JUARA 3 LOMBA CATUR",
      level: "Tingkat Sekolah",
      badge: "3RD PLACE 🥉",
      icon: Award,
      hex: "#F59E0B",
      certImage:
        "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
      schoolNewsUrl: "https://sekolah.sch.id/berita/lomba-catur-smk",
    },
  ];

  const leaves = useMemo(
    () =>
      Array.from({ length: 8 }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 9 + Math.random() * 6,
        size: 12 + Math.random() * 8,
        rotate: Math.random() > 0.5 ? 360 : -360,
      })),
    [],
  );

  return (
    <section
      id="story"
      className="py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #064e3b 0%, #065f46 30%, #064e3b 60%, #022c22 100%)",
      }}
    >
      {/* top accent line */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

      {/* ===== RICH PIXEL NATURE SCENE (behind content) ===== */}
      <div className="absolute inset-0 z-0">
        {/* Sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 via-transparent to-transparent" />

        {/* Pixel Clouds */}
        <PixelCloud top="5%" left="10%" scale={1.2} />
        <PixelCloud top="8%" left="60%" scale={0.9} />
        <PixelCloud top="3%" left="80%" scale={1.1} />

        {/* Forest Left Side - Multiple Trees */}
        <PixelTree
          size={6}
          foliage="#15803d"
          trunk="#4A2E17"
          className="left-8 top-20"
          sway={true}
        />
        <PixelTree
          size={5}
          foliage="#166534"
          trunk="#3f2a14"
          className="left-20 top-28"
          sway={true}
        />
        <PixelTree
          size={4}
          foliage="#14532d"
          trunk="#4A2E17"
          className="left-4 top-40"
          sway={true}
        />

        {/* Bushes Left Side */}
        <PixelBush size={5} className="left-12 top-72" />
        <PixelBush size={4} className="left-28 top-80" />

        {/* Forest Right Side */}
        <PixelTree
          size={5}
          foliage="#15803d"
          trunk="#3f2a14"
          className="right-12 bottom-20"
          sway={true}
        />
        <PixelTree
          size={4}
          foliage="#166534"
          trunk="#4A2E17"
          className="right-24 bottom-16"
          sway={true}
        />

        {/* Rock Clusters */}
        <RockCluster className="left-16 top-80" />
        <RockCluster className="right-16 top-96" />
        <RockCluster className="left-40 bottom-24" />

        {/* Flowers & Mushrooms */}
        <PixelFlowers className="left-20 top-96" />
        <PixelFlowers className="right-24 bottom-28" />
        <PixelMushrooms className="left-10 bottom-20" />
        <PixelMushrooms className="right-10 top-72" />

        {/* Waterfall & River System */}

        {/* Birds */}
        <PixelBird top={12} duration={18} delay={0} scale={1.2} />
        <PixelBird top={18} duration={22} delay={5} scale={1} color="#fef3c7" />
        <PixelBird
          top={8}
          duration={20}
          delay={10}
          scale={0.9}
          color="#fde68a"
        />

        {/* Butterflies */}
        <PixelButterfly top={25} left={20} duration={8} delay={2} />
        <PixelButterfly top={30} left={75} duration={10} delay={6} />
        <PixelButterfly top={20} left={45} duration={9} delay={4} />

        <GrassStrip />
      </div>

      {/* Ambient falling leaves */}
      {leaves.map((l, i) => (
        <motion.div
          key={i}
          className="absolute top-0 pointer-events-none z-0"
          style={{ left: `${l.left}%` }}
          initial={{ y: -40, opacity: 0, rotate: 0 }}
          animate={{
            y: ["-40px", "110vh"],
            opacity: [0, 0.8, 0.8, 0],
            rotate: [0, l.rotate],
            x: [0, 20, -15, 10, 0],
          }}
          transition={{
            duration: l.duration,
            repeat: Infinity,
            delay: l.delay,
            ease: "linear",
          }}
        >
          <Leaf
            className="text-emerald-500/60"
            style={{ width: l.size, height: l.size }}
          />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-amber-400 text-emerald-950 font-pixel text-[10px] px-4 py-1.5 rounded-full shadow-[0_4px_16px_-4px_rgba(251,191,36,0.6)]"
          >
            <Cpu className="w-3.5 h-3.5" /> EXPERIENCE & JOURNEY BOARD
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-pixel text-amber-300 tracking-wide"
          >
            ACHIEVEMENTS & COMMITTEES
          </motion.h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-emerald-500 to-amber-400 mx-auto rounded-full" />
        </div>

        {/* MAIN IT & GAME DEV QUESTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative bg-emerald-950/70 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] space-y-8 text-emerald-100"
        >
          <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-400 opacity-80" />

          <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-5 gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-amber-400/15">
                <Code2 className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <span className="font-pixel text-[9px] text-amber-300/80">
                  PRIMARY QUESTS
                </span>
                <h3 className="font-pixel text-base sm:text-lg text-amber-300 mt-0.5">
                  SOFTWARE & GAME DEVELOPMENT JOURNEY
                </h3>
              </div>
            </div>
            <span className="font-pixel text-[9px] bg-emerald-900/70 text-amber-300 px-3 py-1.5 rounded-full">
              EXP +1500 PT
            </span>
          </div>

          <div className="space-y-4">
            <h4 className="font-pixel text-xs text-emerald-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" /> CERTIFIED CODING
              TRACK (EDUCOURSE.ID)
            </h4>

            <div className="grid md:grid-cols-3 gap-4">
              {itCertificates.map((cert) => (
                <div
                  key={cert.id}
                  className="group bg-emerald-900/40 border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:border-amber-300/50 hover:shadow-[0_10px_30px_-14px_rgba(251,191,36,0.5)] transition-all duration-300 space-y-3"
                >
                  <div className="space-y-2">
                    <span className="font-pixel text-[8px] text-amber-300 bg-amber-400/15 px-2 py-0.5 rounded-full inline-block">
                      {cert.badge}
                    </span>
                    <h5 className="font-pixel text-xs text-amber-100">
                      {cert.title}
                    </h5>
                    <p className="text-[11px] text-emerald-200/60">
                      {cert.issuer}
                    </p>
                    <p className="text-[10px] text-emerald-300/50 font-mono">
                      🗓 {cert.date}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setActiveCert({
                        title: cert.title,
                        badge: cert.badge,
                        image: cert.image,
                      })
                    }
                    className="w-full font-pixel text-[9px] bg-amber-400 text-emerald-950 py-2 rounded-lg hover:bg-amber-300 transition-all flex items-center justify-center gap-1.5 font-bold group-hover:-translate-y-0.5 duration-300"
                  >
                    <Maximize2 className="w-3 h-3" /> LIHAT SERTIFIKAT
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-2 border-t border-white/10">
            <h4 className="font-pixel text-xs text-emerald-300 flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-amber-300" /> COMPETITION
              PARTICIPATIONS
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-emerald-900/30 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:border-emerald-400/40 transition-colors duration-300">
                <div className="p-2 rounded-lg bg-emerald-400/10 shrink-0">
                  <Code2 className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <h5 className="font-pixel text-xs text-amber-200">
                    KIDS HACKATHON
                  </h5>
                  <p className="text-xs text-emerald-200/70 mt-1 leading-relaxed">
                    Berpartisipasi dalam kompetisi hackathon pengembangan solusi
                    perangkat lunak kreatif.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-900/30 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:border-emerald-400/40 transition-colors duration-300">
                <div className="p-2 rounded-lg bg-emerald-400/10 shrink-0">
                  <Gamepad2 className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <h5 className="font-pixel text-xs text-amber-200">
                    IGW VOCATIONAL GAME
                  </h5>
                  <p className="text-xs text-emerald-200/70 mt-1 leading-relaxed">
                    Berpartisipasi dalam lomba pembuatan gim vokal, bertanggung
                    jawab penuh di divisi{" "}
                    <span className="text-amber-300 font-semibold">
                      Game Asset Design & Visuals
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM: ORG & NON-IT */}
        <div className="grid lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 relative bg-emerald-950/70 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] space-y-6"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-emerald-400/80" />

            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2.5 rounded-xl bg-emerald-400/10">
                <Users className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <h3 className="font-pixel text-sm text-emerald-200">
                  ORGANIZATION & COMMITTEES
                </h3>
                <p className="text-[11px] text-emerald-300/50 font-medium">
                  Kepemimpinan & Operasional
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-900/30 border border-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <h4 className="font-pixel text-[10px] text-emerald-200">
                    EVENT SEKOLAH (SMK)
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-xs text-emerald-100">
                        Ketua Acara — PORSENI
                      </span>
                      <p className="text-[11px] text-emerald-300/60">
                        Mengatur konsep, rundown, dan eksekusi acara.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-xs text-emerald-100">
                        Wakil Ketua Acara — Event 17 Agustus
                      </span>
                      <p className="text-[11px] text-emerald-300/60">
                        Koordinasi teknis antardivisi perlombaan.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-xs text-emerald-100">
                        Seksi Logistik — PORAK
                      </span>
                      <p className="text-[11px] text-emerald-300/60">
                        Pengadaan alat perlombaan & setup tempat.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-900/30 border border-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2.5">
                  <Flag className="w-3.5 h-3.5 text-amber-300" />
                  <h4 className="font-pixel text-[10px] text-emerald-200">
                    KARANG TARUNA (KARTA)
                  </h4>
                </div>
                <div className="grid sm:grid-cols-3 gap-2">
                  {["Wakil Bendahara", "Logistik", "PDD"].map((role) => (
                    <div
                      key={role}
                      className="bg-emerald-900/50 border border-white/5 py-2 rounded-lg text-center"
                    >
                      <span className="font-semibold text-xs text-emerald-100">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative bg-emerald-950/70 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] space-y-6"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-amber-400/80" />

            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2.5 rounded-xl bg-amber-400/15">
                <Trophy className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h3 className="font-pixel text-sm text-amber-200">
                  NON-IT TROPHIES
                </h3>
                <p className="text-[11px] text-emerald-300/50 font-medium">
                  Prestasi Bakat & Seni
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {nonItAchievements.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    style={{ "--accent": item.hex }}
                    className="bg-emerald-900/30 border border-white/5 rounded-xl p-3.5 space-y-2.5 hover:border-[color:var(--accent)]/50 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <IconComponent
                          className="w-4 h-4"
                          style={{ color: item.hex }}
                        />
                        <h4 className="font-pixel text-[10px] text-emerald-100">
                          {item.title}
                        </h4>
                      </div>
                      <span
                        className="font-pixel text-[8px] px-2 py-0.5 rounded-full font-bold"
                        style={{ background: `${item.hex}22`, color: item.hex }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1.5 border-t border-white/5">
                      <button
                        onClick={() =>
                          setActiveCert({
                            title: item.title,
                            badge: item.badge,
                            image: item.certImage,
                          })
                        }
                        className="font-pixel text-[9px] text-amber-300 font-bold hover:underline"
                      >
                        [ VIEW ]
                      </button>

                      <a
                        href={item.schoolNewsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-pixel text-[8px] text-emerald-300/70 hover:text-amber-300 flex items-center gap-1 transition-colors"
                      >
                        WEB SEKOLAH <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* MODAL PREVIEW */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-emerald-950/95 backdrop-blur-md border border-white/10 rounded-2xl max-w-2xl w-full p-4 sm:p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] relative space-y-4"
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-3 right-3 bg-emerald-900/80 text-emerald-200 p-1.5 rounded-lg hover:bg-emerald-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-8">
                <span className="font-pixel text-[9px] bg-amber-400 text-emerald-950 px-2 py-0.5 rounded-full font-bold">
                  {activeCert.badge}
                </span>
                <h3 className="font-pixel text-sm sm:text-base text-amber-200 mt-1.5">
                  {activeCert.title}
                </h3>
              </div>

              <div className="relative aspect-[4/3] bg-white/5 rounded-xl overflow-hidden border border-white/10">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="w-full h-full object-contain bg-white"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
