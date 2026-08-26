import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  FlameKindling,
  FileText,
  Mail,
  Moon,
  TreePine,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/* =========================================================
   SIMPLE PIXEL TREE (blocky div, pasti terlihat)
========================================================= */

function PixelTree({ className = "", flip = false, scale = 1 }) {
  return (
    <div
      className={`absolute bottom-0 pointer-events-none ${className}`}
      style={{
        transform: `${flip ? "scaleX(-1)" : ""} scale(${scale})`,
        transformOrigin: "bottom center",
        zIndex: 1,
      }}
    >
      {/* Canopy layers */}
      <div className="flex flex-col items-center">
        {/* Top */}
        <div className="w-12 h-6 bg-green-400" />
        <div className="w-20 h-6 bg-green-500" />
        <div className="w-28 h-6 bg-green-500" />
        <div className="w-32 h-6 bg-green-600" />
        <div className="w-28 h-6 bg-green-600" />
        <div className="w-20 h-6 bg-green-700" />
        {/* Trunk */}
        <div className="w-8 h-16 bg-amber-900" />
        <div className="w-12 h-6 bg-amber-950" />
      </div>
    </div>
  );
}

/* =========================================================
   SIMPLE PIXEL BUSH
========================================================= */

function PixelBush({ className = "", scale = 1 }) {
  return (
    <div
      className={`absolute bottom-0 pointer-events-none ${className}`}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "bottom center",
        zIndex: 1,
      }}
    >
      <div className="flex flex-col items-center">
        <div className="w-10 h-4 bg-green-400" />
        <div className="w-16 h-4 bg-green-500" />
        <div className="w-20 h-4 bg-green-600" />
      </div>
    </div>
  );
}

/* =========================================================
   SIMPLE PIXEL FLOWER
========================================================= */

function PixelFlower({ className = "", color = "#ef4444" }) {
  return (
    <div
      className={`absolute bottom-0 pointer-events-none ${className}`}
      style={{ zIndex: 2 }}
    >
      <div className="flex flex-col items-center">
        <div className="w-3 h-3" style={{ background: color }} />
        <div className="flex">
          <div className="w-3 h-3" style={{ background: color }} />
          <div className="w-3 h-3 bg-yellow-400" />
          <div className="w-3 h-3" style={{ background: color }} />
        </div>
        <div className="w-3 h-3" style={{ background: color }} />
        <div className="w-1 h-6 bg-green-600" />
      </div>
    </div>
  );
}

/* =========================================================
   SIMPLE PIXEL MUSHROOM
========================================================= */

function PixelMushroom({ className = "", scale = 1 }) {
  return (
    <div
      className={`absolute bottom-0 pointer-events-none ${className}`}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "bottom center",
        zIndex: 2,
      }}
    >
      <div className="flex flex-col items-center">
        <div className="w-8 h-3 bg-red-500" />
        <div className="w-10 h-3 bg-red-500 relative">
          <div className="absolute left-1 top-0 w-1.5 h-1.5 bg-white" />
          <div className="absolute right-1 top-0 w-1.5 h-1.5 bg-white" />
        </div>
        <div className="w-3 h-5 bg-amber-200" />
        <div className="w-5 h-2 bg-amber-200" />
      </div>
    </div>
  );
}

/* =========================================================
   SIMPLE PIXEL ROCK
========================================================= */

function PixelRock({ className = "", scale = 1 }) {
  return (
    <div
      className={`absolute bottom-0 pointer-events-none ${className}`}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "bottom center",
        zIndex: 1,
      }}
    >
      <div className="flex flex-col items-center">
        <div className="w-8 h-3 bg-gray-500" />
        <div className="w-12 h-3 bg-gray-600" />
        <div className="w-10 h-2 bg-gray-700" />
      </div>
    </div>
  );
}

/* =========================================================
   GRASS STRIP
========================================================= */

function GrassStrip() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 pointer-events-none"
      style={{ zIndex: 3 }}
    >
      <div className="w-full h-6 bg-green-800" />
    </div>
  );
}

/* =========================================================
   FIREFLIES
========================================================= */

function Fireflies() {
  const flies = useMemo(
    () =>
      Array.from({ length: 14 }, () => ({
        top: 20 + Math.random() * 55,
        left: Math.random() * 90,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 5,
        size: 5 + Math.random() * 5,
      })),
    [],
  );

  return (
    <>
      {flies.map((f, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: `${f.top}%`,
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            background: "#fbbf24",
            boxShadow: "0 0 10px 4px rgba(251,191,36,0.6)",
            zIndex: 4,
          }}
          animate={{
            opacity: [0, 1, 0.3, 1, 0],
            x: [0, 20, -15, 15, 0],
            y: [0, -15, 10, -8, 0],
          }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            delay: f.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CampfireConnect() {
  return (
    <section
      id="campfire"
      className="relative py-14 sm:py-16 px-4 sm:px-6 text-white text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a1f1a 0%, #0d3325 25%, #0f3d2a 50%, #0c3522 75%, #082a18 100%)",
      }}
    >
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      {/* ===== BACKGROUND LAYER ===== */}
      <div className="absolute inset-0 z-0">
        {/* Night sky */}
        <div className="absolute inset-x-0 top-0 h-32 sm:h-40 bg-gradient-to-b from-[#0B1230]/70 to-transparent" />

        {/* Stars - visible on all screens */}
        <div className="absolute top-4 left-[10%] w-1 h-1 bg-amber-100/70 rounded-full animate-pulse" />
        <div
          className="absolute top-8 left-[25%] w-1 h-1 bg-amber-100/70 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-3 left-[45%] w-1 h-1 bg-amber-100/70 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-6 left-[65%] w-1 h-1 bg-amber-100/70 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-4 left-[82%] w-1 h-1 bg-amber-100/70 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-9 left-[93%] w-1 h-1 bg-amber-100/70 rounded-full animate-pulse"
          style={{ animationDelay: "0.8s" }}
        />

        {/* Moon */}
        <Moon className="absolute top-5 right-8 sm:right-12 w-6 h-6 sm:w-7 sm:h-7 text-amber-100/50" />

        {/* === DECORATIONS (visible, simple, responsive) === */}

        {/* Left side */}
        <div className="hidden sm:block">
          <PixelTree className="left-0" scale={1} />
          <PixelTree className="left-16" flip scale={0.8} />
          <PixelTree className="left-32" scale={0.6} />
        </div>

        {/* Right side */}
        <div className="hidden sm:block">
          <PixelTree className="right-0" flip scale={1} />
          <PixelTree className="right-16" scale={0.8} />
          <PixelTree className="right-32" flip scale={0.6} />
        </div>

        {/* Mobile trees (fewer, smaller) */}
        <div className="sm:hidden">
          <PixelTree className="left-0" scale={0.6} />
          <PixelTree className="right-0" flip scale={0.6} />
        </div>

        {/* Bushes */}
        <PixelBush className="left-[8%] sm:left-[12%]" scale={0.8} />
        <PixelBush className="right-[8%] sm:right-[12%]" scale={0.8} />
        <div className="hidden sm:block">
          <PixelBush className="left-[22%]" scale={0.6} />
          <PixelBush className="right-[22%]" scale={0.6} />
        </div>

        {/* Flowers */}
        <PixelFlower className="left-[15%] sm:left-[18%]" color="#ef4444" />
        <PixelFlower className="right-[15%] sm:right-[18%]" color="#fbbf24" />
        <div className="hidden sm:block">
          <PixelFlower className="left-[28%]" color="#8b5cf6" />
          <PixelFlower className="right-[28%]" color="#ef4444" />
        </div>

        {/* Mushrooms */}
        <PixelMushroom className="left-[20%] sm:left-[25%]" scale={0.8} />
        <PixelMushroom className="right-[20%] sm:right-[25%]" scale={0.8} />
        <div className="hidden sm:block">
          <PixelMushroom className="left-[35%]" scale={0.6} />
        </div>

        {/* Rocks */}
        <PixelRock className="left-[5%] sm:left-[8%]" scale={0.8} />
        <PixelRock className="right-[5%] sm:right-[8%]" scale={0.8} />
        <div className="hidden sm:block">
          <PixelRock className="left-[40%]" scale={0.6} />
        </div>

        {/* Grass */}
        <GrassStrip />

        {/* Fireflies */}
        <Fireflies />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-2xl mx-auto space-y-7 sm:space-y-8">
        {/* Campfire Area */}
        <div className="relative flex flex-col items-center pt-2">
          <div className="relative flex items-end justify-center gap-4 sm:gap-6">
            {/* Left wood */}
            <motion.div
              initial={{ rotate: -30, opacity: 0 }}
              whileInView={{ rotate: -18, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-2"
            >
              <FlameKindling className="w-10 h-10 sm:w-14 sm:h-14 text-amber-800" />
            </motion.div>

            {/* Main fire */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-5 sm:-inset-6 bg-amber-500/20 rounded-full blur-2xl animate-pulse" />
              <div
                className="absolute -inset-1 sm:-inset-2 bg-orange-400/25 rounded-full blur-lg animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
              <Flame className="w-18 h-18 sm:w-24 sm:h-24 text-amber-400 fill-amber-500 animate-bounce relative z-10" />
            </motion.div>

            {/* Right wood */}
            <motion.div
              initial={{ rotate: 30, opacity: 0 }}
              whileInView={{ rotate: 18, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-2"
            >
              <FlameKindling className="w-10 h-10 sm:w-14 sm:h-14 text-amber-800" />
            </motion.div>
          </div>
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-3 sm:space-y-4"
        >
          <h2 className="text-base sm:text-xl md:text-2xl font-pixel text-amber-400 leading-relaxed">
            CAMPFIRE & CONNECT
          </h2>
          <p className="text-emerald-100/80 text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-md mx-auto px-2">
            Kamu sudah menjelajah seluruh kebun. Sekarang saatnya istirahat di
            sekitar api unggun. Silakan pilih jalur untuk terhubung — saya
            selalu terbuka untuk diskusi proyek, kolaborasi, atau peluang
            magang!
          </p>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2 font-pixel text-[8px] sm:text-[10px] md:text-xs"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-700 hover:bg-emerald-600 px-3 sm:px-5 py-2.5 sm:py-3 rounded border-2 border-emerald-400 shadow-[0_3px_0_0_#064e3b] sm:shadow-[0_4px_0_0_#064e3b] flex items-center gap-1.5 sm:gap-2 transition-all"
          >
            <FaGithub className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-200" />{" "}
            GITHUB
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-700 hover:bg-blue-600 px-3 sm:px-5 py-2.5 sm:py-3 rounded border-2 border-blue-400 shadow-[0_3px_0_0_#1e3a8a] sm:shadow-[0_4px_0_0_#1e3a8a] flex items-center gap-1.5 sm:gap-2 transition-all"
          >
            <FaLinkedin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-200" />{" "}
            LINKEDIN
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:email@contoh.com"
            className="bg-purple-700 hover:bg-purple-600 px-3 sm:px-5 py-2.5 sm:py-3 rounded border-2 border-purple-400 shadow-[0_3px_0_0_#581c87] sm:shadow-[0_4px_0_0_#581c87] flex items-center gap-1.5 sm:gap-2 transition-all"
          >
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-purple-200" /> EMAIL
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="/cv.pdf"
            download
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 sm:px-5 py-2.5 sm:py-3 rounded border-2 border-amber-600 shadow-[0_3px_0_0_#78350f] sm:shadow-[0_4px_0_0_#78350f] flex items-center gap-1.5 sm:gap-2 transition-all"
          >
            <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-amber-950" /> CV PDF
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="pt-3 sm:pt-4 text-[8px] sm:text-[10px] font-pixel text-emerald-300/40 space-y-1.5 sm:space-y-2"
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <TreePine className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span>TERIMA KASIH SUDAH MAMPIR</span>
            <TreePine className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          </div>
          <p className="text-[7px] sm:text-[10px]">
            © {new Date().getFullYear()} RANGGA. BUILT WITH REACT & TAILWIND.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
