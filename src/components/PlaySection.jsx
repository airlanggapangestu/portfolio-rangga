import React, { useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Swords,
  Bug,
  MousePointerClick,
  ChevronDown,
  Gem,
  Pickaxe,
  ArrowDown,
  Flame,
} from "lucide-react";

/* =========================================================
   PLAY SECTION — Underground World
   Nyambung dari soil Campfire (#493522)
   Tema: Cave/Underground yang immersive
========================================================= */

/* ---------- TOP SOIL (sambungan persis dari Campfire) ---------- */
function TopSoil() {
  return (
    <div className="absolute inset-x-0 top-0 h-[45px] z-[15] pointer-events-none">
      {/* Soil utama — sama dengan FinalGround Campfire */}
      <div className="absolute top-0 left-0 w-full h-[28px] bg-[#493522]" />

      {/* Soil texture — sama dengan Campfire */}
      <div className="absolute top-[5px] left-[7%] h-2 w-8 bg-[#3a2a1d]" />
      <div className="absolute top-[8px] left-[22%] h-2 w-5 bg-[#5c4127]" />
      <div className="absolute top-[4px] left-[48%] h-2 w-9 bg-[#38281c]" />
      <div className="absolute top-[7px] right-[30%] h-2 w-7 bg-[#60452c]" />
      <div className="absolute top-[5px] right-[12%] h-2 w-6 bg-[#38281c]" />
      <div className="absolute top-[10px] left-[35%] h-2 w-6 bg-[#5c4127]" />
      <div className="absolute top-[8px] right-[50%] h-2 w-5 bg-[#3a2a1d]" />

      {/* Rumput sisa dari Campfire */}
      <div className="absolute top-[24px] left-[12%] h-2 w-[3px] bg-[#4c7e43]" />
      <div className="absolute top-[22px] left-[13%] h-3 w-[3px] bg-[#5c914d]" />
      <div className="absolute top-[25px] right-[14%] h-2 w-[3px] bg-[#4c7e43]" />
      <div className="absolute top-[23px] right-[13%] h-3 w-[3px] bg-[#5c914d]" />

      {/* Transisi ke cave */}
      <div className="absolute bottom-0 left-0 w-full h-[17px] bg-gradient-to-b from-[#493522] to-transparent" />
    </div>
  );
}

/* ---------- CAVE WALLS (tebing kiri-kanan) ---------- */
function CaveWalls() {
  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      {/* Left wall */}
      <div className="absolute left-0 top-0 h-full w-[14%] min-w-[70px]">
        <div className="absolute inset-0 bg-[#2d2823]" />
        <div className="absolute inset-y-0 right-0 w-[4px] bg-[#1f1b17]" />
        {/* Wall texture */}
        <div className="absolute left-[20%] top-[15%] h-[60%] w-[8px] bg-[#35302a]" />
        <div className="absolute left-[40%] top-[35%] h-[50%] w-[6px] bg-[#26221e]" />
        <div className="absolute left-[15%] top-[60%] h-[30%] w-[10px] bg-[#3d3832]" />
      </div>

      {/* Right wall */}
      <div className="absolute right-0 top-0 h-full w-[14%] min-w-[70px]">
        <div className="absolute inset-0 bg-[#2d2823]" />
        <div className="absolute inset-y-0 left-0 w-[4px] bg-[#1f1b17]" />
        {/* Wall texture */}
        <div className="absolute right-[25%] top-[20%] h-[55%] w-[8px] bg-[#35302a]" />
        <div className="absolute right-[45%] top-[45%] h-[45%] w-[6px] bg-[#26221e]" />
        <div className="absolute right-[18%] top-[65%] h-[25%] w-[10px] bg-[#3d3832]" />
      </div>
    </div>
  );
}

/* ---------- STALACTITES (batu gantung) ---------- */
function Stalactites() {
  const rocks = [
    { left: "5%", width: 22, height: 70, delay: 0 },
    { left: "15%", width: 14, height: 45, delay: 0.8 },
    { left: "28%", width: 18, height: 60, delay: 1.5 },
    { left: "45%", width: 20, height: 80, delay: 0.4 },
    { left: "60%", width: 16, height: 50, delay: 2 },
    { left: "72%", width: 24, height: 75, delay: 1.2 },
    { left: "85%", width: 15, height: 48, delay: 0.6 },
    { left: "93%", width: 20, height: 65, delay: 1.8 },
  ];

  return (
    <div className="absolute top-[40px] inset-x-0 z-[6] pointer-events-none">
      {rocks.map((rock, i) => (
        <motion.div
          key={i}
          className="absolute top-0"
          style={{ left: rock.left }}
          animate={{ y: [0, 2, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: rock.delay,
          }}
        >
          <div
            style={{
              width: rock.width,
              height: rock.height,
              background: i % 2 === 0 ? "#3d3832" : "#35302a",
              clipPath: "polygon(0 0, 100% 0, 72% 100%, 28% 100%)",
            }}
          />
          {/* Highlight */}
          <div
            style={{
              width: rock.width * 0.25,
              height: rock.height * 0.5,
              background: "#4a443d",
              position: "absolute",
              left: rock.width * 0.2,
              top: "5%",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ---------- ROOTS (akar menembus dari soil) ---------- */
function CaveRoots() {
  const roots = [
    { left: "6%", height: 200, rotate: -15, width: 7, delay: 0 },
    { left: "16%", height: 140, rotate: 8, width: 5, delay: 1 },
    { left: "25%", height: 100, rotate: -5, width: 6, delay: 2 },
    { left: "75%", height: 110, rotate: 5, width: 6, delay: 0.5 },
    { left: "84%", height: 170, rotate: 15, width: 5, delay: 1.5 },
    { left: "92%", height: 220, rotate: -10, width: 7, delay: 2.5 },
  ];

  return (
    <div className="absolute inset-x-0 top-0 z-[8] h-[50%] pointer-events-none">
      {roots.map((root, i) => (
        <motion.div
          key={i}
          className="absolute top-0 origin-top"
          style={{ left: root.left }}
          animate={{
            rotate: [root.rotate - 1.5, root.rotate + 1.5, root.rotate - 1.5],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: root.delay,
          }}
        >
          <div
            style={{
              width: root.width,
              height: root.height,
              background: i % 2 === 0 ? "#573621" : "#432b1c",
              transform: `rotate(${root.rotate}deg)`,
              clipPath:
                "polygon(15% 0, 100% 0, 80% 70%, 100% 100%, 50% 85%, 0 100%, 20% 65%)",
            }}
          />
          {/* Cabang akar kecil */}
          <div
            className="absolute top-[35%] left-1"
            style={{
              width: 3,
              height: 45,
              background: i % 2 === 0 ? "#573621" : "#432b1c",
              transform: "rotate(20deg)",
            }}
          />
          <div
            className="absolute top-[55%] -left-1"
            style={{
              width: 2,
              height: 35,
              background: i % 2 === 0 ? "#432b1c" : "#573621",
              transform: "rotate(-15deg)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ---------- CRYSTALS (glowing) ---------- */
function Crystals() {
  const crystals = [
    { left: "8%", top: "48%", size: 22, color: "#7dd3a8", rotate: -10 },
    { left: "18%", top: "70%", size: 15, color: "#a78bfa", rotate: 8 },
    { left: "30%", top: "78%", size: 18, color: "#7dd3a8", rotate: -5 },
    { left: "68%", top: "65%", size: 16, color: "#a78bfa", rotate: 8 },
    { left: "80%", top: "42%", size: 24, color: "#7dd3a8", rotate: 10 },
    { left: "90%", top: "68%", size: 14, color: "#fbbf24", rotate: -8 },
  ];

  return (
    <div className="absolute inset-0 z-[5] pointer-events-none">
      {crystals.map((crystal, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: crystal.left,
            top: crystal.top,
            rotate: crystal.rotate,
          }}
          animate={{
            opacity: [0.25, 0.75, 0.3, 0.75, 0.25],
            scale: [0.88, 1.05, 0.88],
          }}
          transition={{ duration: 3.5 + i, repeat: Infinity, delay: i * 0.4 }}
        >
          {/* Glow */}
          <div
            className="absolute -inset-4 rounded-full blur-xl"
            style={{ background: crystal.color, opacity: 0.12 }}
          />
          <Gem
            size={crystal.size}
            className={crystal.color}
            fill={crystal.color}
            strokeWidth={1.5}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ---------- FLOATING PARTICLES ---------- */
function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        left: Math.random() * 100,
        top: 15 + Math.random() * 80,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 4,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 z-[4] pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-[#b7a889]/40 rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 8, -5, 0],
            opacity: [0.08, 0.5, 0.08],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ---------- MOUSE PARALLAX GLOW ---------- */
function CaveGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const x = useTransform(smoothX, [-400, 400], [-40, 40]);
  const y = useTransform(smoothY, [-300, 300], [-30, 30]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <div className="absolute inset-0 z-[1]" onMouseMove={handleMove}>
      <motion.div
        className="absolute left-1/2 top-[50%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7dd3a8]/5 blur-[80px] pointer-events-none"
        style={{ x, y }}
      />
    </div>
  );
}

/* ---------- BOTTOM TRANSITION ---------- */
function BottomTransition() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[55px] z-[10] pointer-events-none">
      <div className="absolute bottom-0 left-0 w-full h-[38px] bg-[#0b0908]" />
      <div className="absolute bottom-[38px] left-0 w-full h-[17px] bg-gradient-to-t from-[#0b0908] to-transparent" />

      {/* Batu kecil di bawah */}
      <div className="absolute bottom-0 left-[10%] h-8 w-14 bg-[#211d19] [clip-path:polygon(0_100%,20%_40%,40%_60%,60%_20%,80%_50%,100%_100%)]" />
      <div className="absolute bottom-0 right-[10%] h-9 w-16 bg-[#211d19] [clip-path:polygon(0_100%,15%_50%,35%_25%,55%_55%,75%_30%,100%_100%)]" />
    </div>
  );
}

/* =========================================================
   GAME CARD
========================================================= */

function GameCard({ href, icon, title, code, description, accent, delay }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group relative block"
    >
      {/* Shadow */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#080706]" />

      {/* Card */}
      <div
        className="relative border-2 bg-[#15130f]/95 p-5 transition-all duration-300"
        style={{ borderColor: `${accent}50` }}
      >
        {/* Top accent line */}
        <motion.div
          className="absolute left-0 top-0 h-[2px] w-full origin-left"
          style={{ background: accent }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        />

        {/* Header */}
        <div className="mb-4 flex items-center gap-3">
          <motion.div
            className="flex h-11 w-11 shrink-0 items-center justify-center border-2 bg-[#0b0a08]"
            style={{ borderColor: accent, color: accent }}
            whileHover={{ rotate: [0, -6, 6, 0], scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            {icon}
          </motion.div>
          <div>
            <h3 className="font-pixel text-[10px] text-[#e7dfc5] sm:text-[11px]">
              {title}
            </h3>
            <p
              className="mt-1 font-mono text-[7px] tracking-[0.15em]"
              style={{ color: accent }}
            >
              {code}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-3 flex items-center gap-2">
          <div className="h-[2px] w-6" style={{ background: accent }} />
          <div className="h-[1px] flex-1 bg-[#2d2924]" />
        </div>

        <p className="text-[10px] leading-relaxed text-[#9d968b] sm:text-[11px]">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-[#2d2924] pt-3">
          <span
            className="flex items-center gap-1.5 font-pixel text-[7px]"
            style={{ color: accent }}
          >
            <MousePointerClick size={11} />
            MASUK
          </span>
          <motion.span
            className="font-mono text-[10px] text-[#5f594f]"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PlaySection() {
  return (
    <section
      id="play"
      className="relative min-h-screen w-full overflow-hidden text-white"
      style={{
        background: `
          linear-gradient(
            180deg,
            #493522 0%,
            #493522 3%,
            #302a25 10%,
            #25211d 25%,
            #1c1916 45%,
            #100e0c 70%,
            #0b0908 100%
          )
        `,
      }}
    >
      {/* LAYERS */}
      <CaveGlow />
      <CaveWalls />
      <TopSoil />
      <Stalactites />
      <CaveRoots />
      <Crystals />
      <FloatingParticles />
      <BottomTransition />

      {/* CONTENT */}
      <div className="relative z-[20] mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-5 pb-24 pt-32 text-center sm:px-8 sm:pt-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 border border-[#5f594f] bg-[#15130f]/85 px-3 py-1.5"
        >
          <motion.span
            className="h-2 w-2 bg-[#7dd3a8]"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-mono text-[8px] tracking-[0.18em] text-[#9d968b]">
            BAWAH TANAH // AREA BERMAIN
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mb-2 flex items-center justify-center gap-3">
            <div className="h-[2px] w-8 bg-[#3d3832]" />
            <Pickaxe size={15} className="text-[#a78bfa]" />
            <div className="h-[2px] w-8 bg-[#3d3832]" />
          </div>

          <h2 className="font-pixel text-xl leading-relaxed text-[#e7dfc5] sm:text-2xl md:text-3xl">
            AYO
            <span className="text-[#7dd3a8]"> BERMAIN</span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-[11px] leading-5 text-[#9d968b] sm:text-xs">
            Dua tantangan tersembunyi di dalam gua — pecahkan puzzle catur dan
            perbaiki kode yang rusak.
          </p>
        </motion.div>

        {/* Game Cards */}
        <div className="mt-8 grid w-full max-w-2xl gap-5 sm:grid-cols-2">
          <GameCard
            href="#chess"
            delay={0.2}
            accent="#a78bfa"
            icon={<Swords size={18} />}
            title="CHESS GARDEN"
            code="PUZZLE_ZONE // 01"
            description="Pecahkan puzzle catur mini — dua langkah untuk checkmate."
          />

          <GameCard
            href="#workbench"
            delay={0.3}
            accent="#7dd3a8"
            icon={<Bug size={18} />}
            title="CODE WORKBENCH"
            code="DEBUG_ZONE // 02"
            description="Drag blok kode yang benar untuk menumbuhkan pohon."
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-9 flex flex-col items-center gap-1.5"
        >
          <div className="flex items-center gap-2 font-mono text-[7px] tracking-[0.2em] text-[#5f594f]">
            <Pickaxe size={11} />
            <span>PILIH SALAH SATU</span>
          </div>
          <motion.div
            animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={13} className="text-[#5f594f]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
