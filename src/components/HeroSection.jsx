import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Server, Palette } from "lucide-react";

/* ---------- TALL PIXEL CHARACTER GRID (16x24 Portrait Developer/Wizard) ---------- */
const FARMER_GRID = [
  ".....HHHHHH.....",
  "....HHHHHHHH....",
  "....HHHHHHHH....",
  "....CCCCCCCC....",
  "....SSSSSSSS....",
  "....SEESSEES....",
  "....SSSSSSSS....",
  "....SSSMSSSS....",
  "...JJJJJJJJJJ...",
  "..JJJJTTTTJJJJ..",
  "..JJJJTTTTJJJJ..",
  "..JJJJTTTTJJJJ..",
  "..JJJJAAAAJJJJ..",
  "..JJJJTTTTJJJJ..",
  "..JJJJTTTTJJJJ..",
  "...PPPPPPPPPP...",
  "...PPPPPPPPPP...",
  "...PPPPPPPPPP...",
  "...PPPPPPPPPP...",
  "...LL......LL...",
  "...LL......LL...",
  "..LLLL....LLLL..",
  "..LLLL....LLLL..",
  ".LLLLLL..LLLLLL.",
];

const PIXEL_COLORS = {
  H: "#312E81", // Hair / Hood
  C: "#F59E0B", // Headband / Headphones
  S: "#FDE047", // Skin tone
  E: "#0F172A", // Eyes
  M: "#EF4444", // Mouth
  J: "#0284C7", // Jacket
  T: "#10B981", // Inner Shirt
  A: "#F59E0B", // Emblem
  P: "#1E293B", // Cargo Pants
  L: "#475569", // Boots
};

function buildPixelShadow(grid, colors, size) {
  const shadows = [];
  grid.forEach((row, y) => {
    row.split("").forEach((ch, x) => {
      if (ch === "." || !colors[ch]) return;
      shadows.push(`${x * size}px ${y * size}px 0 ${colors[ch]}`);
    });
  });
  return shadows.join(", ");
}

/* ---------- Distant pixel mountains ---------- */
function Mountains({ offset, tone }) {
  return (
    <svg
      viewBox="0 0 400 80"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full h-20 sm:h-24 md:h-32 pointer-events-none"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      <polygon
        points="0,80 0,45 40,15 80,50 120,25 160,55 200,10 240,48 280,20 320,52 360,30 400,60 400,80"
        fill={tone}
        shapeRendering="crispEdges"
      />
    </svg>
  );
}

/* Data Core Expertise */
const EXPERTISE = [
  {
    id: "frontend",
    title: "FRONTEND DEV",
    subtitle: "Web UI & Interactive",
    description:
      "Membangun antarmuka web yang cepat, responsif, dan kaya animasi interaktif.",
    icon: Code2,
    hex: "#34D399",
    tag: "React / Vite / Tailwind",
  },
  {
    id: "backend",
    title: "BACKEND DEV",
    subtitle: "Logic & API Architecture",
    description:
      "Mengembangkan arsitektur server, REST API, dan manajemen database yang andal.",
    icon: Server,
    hex: "#FBBF24",
    tag: "Node.js / Express / DB",
  },
  {
    id: "design",
    title: "UI/UX & PIXEL ART",
    subtitle: "Visual & Asset Creation",
    description:
      "Merancang tata letak UI, ikon pixel art, serta pengalaman pengguna yang estetis.",
    icon: Palette,
    hex: "#38BDF8",
    tag: "Figma / Pixel Assets",
  },
];

export default function HeroSection() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mqMotion.matches);
    const listenerMotion = (e) => setReduceMotion(e.matches);
    mqMotion.addEventListener("change", listenerMotion);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      mqMotion.removeEventListener("change", listenerMotion);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const pixelSize = isMobile ? 6 : 9;
  const farmerShadow = useMemo(
    () => buildPixelShadow(FARMER_GRID, PIXEL_COLORS, pixelSize),
    [pixelSize],
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 24 }, () => ({
        top: Math.random() * 55,
        left: Math.random() * 100,
        delay: Math.random() * 3,
      })),
    [],
  );

  const fireflies = useMemo(
    () =>
      Array.from({ length: 6 }, () => ({
        top: 55 + Math.random() * 30,
        left: Math.random() * 100,
        delay: Math.random() * 2,
      })),
    [],
  );

  function handleMouseMove(e) {
    if (reduceMotion || isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 24;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setOffset({ x, y });
  }

  const skyGradient =
    "linear-gradient(to bottom, #0B1230 0%, #142B4A 40%, #14532D 100%)";

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="min-h-screen pt-16 sm:pt-20 pb-10 px-4 sm:px-6 md:px-8 relative overflow-hidden flex flex-col items-center justify-between"
      style={{ background: skyGradient }}
    >
      {/* Stars (night) */}
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] bg-sky-100 rounded-full pointer-events-none"
          style={{ top: `${s.top}%`, left: `${s.left}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 2 + s.delay,
            repeat: reduceMotion ? 0 : Infinity,
            delay: s.delay,
          }}
        />
      ))}

      {/* Distant mountains */}
      <Mountains
        offset={{ x: offset.x * 0.4, y: offset.y * 0.3 }}
        tone="#0F2E1E"
      />
      <Mountains
        offset={{ x: offset.x * 0.8, y: offset.y * 0.6 }}
        tone="#153826"
      />

      {/* Dialogue Main Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-emerald-950/5 rounded-xl p-5 sm:p-6 md:p-8 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] z-20 mt-4 backdrop-blur-sm"
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-5 sm:gap-6 md:gap-10">
          {/* Responsive Avatar Container */}
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[96px] h-[144px] md:w-[144px] md:h-[216px] flex items-center justify-center flex-shrink-0 relative pointer-events-none mt-2 md:mt-0"
          >
            <div
              style={{
                width: pixelSize,
                height: pixelSize,
                boxShadow: farmerShadow,
                transform: isMobile
                  ? "translate(-45px, -69px)"
                  : "translate(-68px, -103px)",
              }}
            />
          </motion.div>

          {/* Dialogue Text Content */}
          <div className="space-y-2.5 sm:space-y-3 text-center md:text-left w-full">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-900 border border-emerald-700 px-2.5 py-1 rounded text-amber-300 font-pixel text-[8px] sm:text-[9px] md:text-[10px]">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
              FULL STACK DEVELOPER
            </div>

            <h1 className="text-lg sm:text-2xl md:text-3xl font-pixel text-amber-300 leading-snug md:leading-relaxed">
              &gt; WELCOME, <br /> I'M RANGGA
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="inline-block ml-1"
              >
                _
              </motion.span>
            </h1>

            <p className="text-emerald-100 text-xs sm:text-xs md:text-sm font-sans leading-relaxed max-w-2xl">
              Halo! Saya adalah pengembang perangkat lunak yang berfokus pada
              pembangunan solusi web dari ujung ke ujung — mulai dari arsitektur
              backend, antarmuka web interaktif, hingga visual pixel art.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Expertise Dashboard Boxes */}
      <div className="w-full max-w-4xl mt-4 sm:mt-6 z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {EXPERTISE.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                style={{ "--accent": item.hex }}
                className="group relative bg-emerald-950/60 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-[color:var(--accent)]/50 hover:shadow-[0_10px_40px_-14px_var(--accent)]"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px] opacity-80"
                  style={{ background: item.hex }}
                />

                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${item.hex}1A` }}
                  >
                    <Icon
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: item.hex }}
                    />
                  </div>
                  <span className="flex items-center gap-1.5 text-[8px] sm:text-[9px] font-mono text-emerald-300/70 tracking-wide">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: item.hex }}
                    />
                    READY
                  </span>
                </div>

                <h3
                  className="font-pixel text-[10px] sm:text-[11px] md:text-xs mb-1 tracking-wide"
                  style={{ color: item.hex }}
                >
                  {item.title}
                </h3>

                <p className="font-mono text-[9px] sm:text-[10px] text-amber-100/60 mb-2">
                  {item.subtitle}
                </p>

                <p className="font-sans text-[11px] sm:text-xs text-emerald-100/75 leading-relaxed mb-3 sm:mb-4">
                  {item.description}
                </p>

                <div className="pt-2.5 sm:pt-3 border-t border-white/5">
                  <span className="font-mono text-[8px] sm:text-[9px] text-emerald-200/60">
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fireflies */}
        {fireflies.map((f, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-amber-300 pointer-events-none"
            style={{
              top: `${f.top}%`,
              left: `${f.left}%`,
              boxShadow: "0 0 6px 2px rgba(251,191,36,0.7)",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.4, 1, 0],
              x: [0, 10, -6, 8, 0],
              y: [0, -8, 6, -4, 0],
            }}
            transition={{
              duration: 5 + f.delay,
              repeat: reduceMotion ? 0 : Infinity,
              delay: f.delay,
            }}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-6 sm:mt-8 font-pixel text-[8px] sm:text-[9px] md:text-[10px] text-emerald-100 animate-bounce z-20 bg-emerald-950/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-emerald-700 flex items-center gap-1.5 sm:gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
        <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />{" "}
        SCROLL DOWN TO EXPLORE
      </div>
    </section>
  );
}
