import React, { useState, useMemo, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Code2,
  Trophy,
  Users,
  Award,
  Laugh,
  Maximize2,
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Calendar,
  Flag,
  GraduationCap,
  ChevronRight,
  Globe,
} from "lucide-react";

/* =========================================================
   LIFE STORY — Pohon Beringin Pixel dari atas ke bawah
========================================================= */

/* ---------- POHON BERINGIN KIRI ---------- */
function BanyanTreeLeft() {
  const size = 6;

  const grid = [
    // Kanopi atas (full)
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    // Ranting mulai menyebar
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHH.HHHHHHHHHHHHHHHHH",
    "HHH..HHHHHHHHHHHHHHHHH",
    "HH....HHHHHHHHHHHHHHHH",
    "HH.....HHHHHHHHHHHHHHH",
    "HH......HHHHHHHHHHHHHH",
    "HH.......HHHHHHHHHHHHH",
    "HH........HHHHHHHHHHHH",
    // Batang & akar
    "TT........HHHHHHHHHHHH",
    "TT.........HHHHHHHHHHH",
    "TT..........HHHHHHHHHH",
    "TT...........HHHHHHHHH",
    "TT............HHHHHHHH",
    "TT.............HHHHHHH",
    "TT..............HHHHHH",
    "TT...............HHHHH",
    "TT................HHHH",
    "TT.................HHH",
    "TT..................HH",
    "TT...................H",
    // Akar bawah
    "TT....................",
    "TT....................",
    "TT....................",
    "TT....................",
    "TT....................",
    "TT....................",
    "TT....................",
    "TT....................",
  ];

  const width = 23 * size;
  const height = 35 * size;

  return (
    <div
      className="absolute left-0 top-0 h-full pointer-events-none"
      style={{ zIndex: 3, width: `${width}px` }}
    >
      <div className="relative w-full h-full">
        {grid.map((row, y) =>
          row.split("").map((ch, x) => {
            if (ch === ".") return null;
            let color;
            if (ch === "H") {
              if (y < 4) color = "#4ade80";
              else if (y < 10) color = "#22c55e";
              else color = "#16a34a";
            } else {
              color = y < 25 ? "#5D3A1A" : "#3d2412";
            }
            return (
              <div
                key={`${x}-${y}`}
                style={{
                  position: "absolute",
                  left: `${x * size}px`,
                  top: `${y * size}px`,
                  width: `${size}px`,
                  height: `${size}px`,
                  background: color,
                }}
              />
            );
          }),
        )}
      </div>
    </div>
  );
}

/* ---------- POHON BERINGIN KANAN ---------- */
function BanyanTreeRight() {
  const size = 6;

  const grid = [
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHH.HHHH",
    "HHHHHHHHHHHHHHHH..HHHH",
    "HHHHHHHHHHHHHHH...HHHH",
    "HHHHHHHHHHHHHH....HHHH",
    "HHHHHHHHHHHHH.....HHHH",
    "HHHHHHHHHHHH......HHHH",
    "HHHHHHHHHHH.......HHHH",
    "HHHHHHHHHH........TTTT",
    "HHHHHHHHH.........TTTT",
    "HHHHHHHH..........TTTT",
    "HHHHHHH...........TTTT",
    "HHHHHH............TTTT",
    "HHHHH.............TTTT",
    "HHHH..............TTTT",
    "HHH...............TTTT",
    "HH................TTTT",
    "H.................TTTT",
    "..................TTTT",
    "..................TTTT",
    "..................TTTT",
    "..................TTTT",
    "..................TTTT",
    "..................TTTT",
    "..................TTTT",
    "..................TTTT",
    "..................TTTT",
  ];

  const width = 23 * size;
  const height = 35 * size;

  return (
    <div
      className="absolute right-0 top-0 h-full pointer-events-none"
      style={{
        zIndex: 3,
        width: `${width}px`,
        transform: "scaleX(-1)",
      }}
    >
      <div className="relative w-full h-full">
        {grid.map((row, y) =>
          row.split("").map((ch, x) => {
            if (ch === ".") return null;
            let color;
            if (ch === "H") {
              if (y < 4) color = "#4ade80";
              else if (y < 10) color = "#22c55e";
              else color = "#16a34a";
            } else {
              color = y < 25 ? "#5D3A1A" : "#3d2412";
            }
            return (
              <div
                key={`${x}-${y}`}
                style={{
                  position: "absolute",
                  left: `${x * size}px`,
                  top: `${y * size}px`,
                  width: `${size}px`,
                  height: `${size}px`,
                  background: color,
                }}
              />
            );
          }),
        )}
      </div>
    </div>
  );
}

/* ---------- VINES ATAS (menjuntai dari atas) ---------- */
function HangingVines() {
  const vines = [
    { left: "25%", length: 180, color: "#16a34a", delay: 0 },
    { left: "40%", length: 120, color: "#15803d", delay: 1 },
    { left: "60%", length: 160, color: "#16a34a", delay: 2 },
    { left: "75%", length: 100, color: "#15803d", delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none">
      {vines.map((v, i) => (
        <motion.div
          key={i}
          className="absolute top-0"
          style={{ left: v.left }}
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 3 + v.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            style={{
              width: "3px",
              height: `${v.length}px`,
              background: v.color,
            }}
          />
          <div
            className="absolute top-[20%] -left-1"
            style={{ width: "7px", height: "4px", background: "#22c55e" }}
          />
          <div
            className="absolute top-[50%] left-1"
            style={{ width: "6px", height: "4px", background: "#4ade80" }}
          />
          <div
            className="absolute top-[75%] -left-1"
            style={{ width: "7px", height: "4px", background: "#16a34a" }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ---------- FALLING LEAVES ---------- */
function FallingLeaves() {
  const leaves = useMemo(
    () =>
      Array.from({ length: 8 }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 5,
        size: 7 + Math.random() * 8,
        color: ["#22c55e", "#16a34a", "#15803d", "#4ade80"][
          Math.floor(Math.random() * 4)
        ],
      })),
    [],
  );

  return (
    <div className="absolute inset-0 z-[2] pointer-events-none">
      {leaves.map((l, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${l.left}%` }}
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          animate={{
            y: ["-20px", "100vh"],
            opacity: [0, 0.5, 0.5, 0],
            rotate: [0, 360],
            x: [0, 20, -15, 10, 0],
          }}
          transition={{
            duration: l.duration,
            repeat: Infinity,
            delay: l.delay,
            ease: "linear",
          }}
        >
          <div
            style={{
              width: l.size,
              height: l.size * 0.7,
              background: l.color,
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function LifeStory() {
  const [activeCert, setActiveCert] = useState(null);
  const [showEduCourse, setShowEduCourse] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.3],
  );

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
      badge: "ADVANCE LEVEL",
      image: "/certs/educourse-advance.jpeg",
    },
  ];

  const aiCertificate = {
    id: "ai-ready-asean",
    title: "AI Ready ASEAN",
    fullTitle: "Certificate of Completion",
    issuer: "ASEAN Foundation x Google.org",
    date: "12 Agustus 2026",
    badge: "AI READY",
    image: "/certs/ai-ready-asean.jpeg",
    description:
      "Menyelesaikan seluruh bab modul pembelajaran AI berdurasi 12 jam di AIClassASEAN.org",
  };

  const nonItAchievements = [
    {
      id: "comedy",
      title: "Stand Up Comedy",
      level: "Tingkat Sekolah",
      icon: Laugh,
      hex: "#FBBF24",
      certImage:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
      schoolNewsUrl:
        "https://medikacom.sch.id/kegiatan-lomba-literasi-smk-medikacom-bandung/",
    },
    {
      id: "chess",
      title: "Lomba Catur",
      level: "Tingkat Sekolah",
      icon: Award,
      hex: "#F59E0B",
      certImage:
        "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
      schoolNewsUrl: null,
    },
  ];

  const committees = [
    {
      title: "Ketua Acara — PORSENI",
      desc: "Mengatur konsep, rundown, dan eksekusi acara.",
      icon: Users,
      hex: "#34D399",
    },
    {
      title: "Wakil Ketua Acara — Event 17 Agustus",
      desc: "Koordinasi teknis antardivisi perlombaan.",
      icon: Calendar,
      hex: "#FBBF24",
    },
    {
      title: "Seksi Logistik — PORAK",
      desc: "Pengadaan alat perlombaan & setup tempat.",
      icon: Flag,
      hex: "#38BDF8",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center"
      style={{
        background:
          "linear-gradient(180deg, #d7eadf 0%, #b8dced 10%, #8bc7e8 25%, #5da05f 45%, #2d6b3f 65%, #1a4028 85%, #0f2a1a 100%)",
      }}
    >
      {/* ===== LAYER 1: HANGING VINES ===== */}
      <HangingVines />

      {/* ===== LAYER 2: FALLING LEAVES ===== */}
      <FallingLeaves />

      {/* ===== LAYER 3: POHON BERINGIN KIRI & KANAN ===== */}
      <BanyanTreeLeft />
      <BanyanTreeRight />

      {/* ===== CONTENT ===== */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 max-w-4xl mx-auto w-full space-y-4 sm:space-y-5"
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 sm:mb-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-amber-400 text-emerald-950 font-pixel text-[9px] sm:text-[10px] px-4 py-1.5 rounded-full shadow-[0_4px_16px_-4px_rgba(251,191,36,0.6)]"
          >
            <Cpu className="w-3.5 h-3.5" /> EXPERIENCE & JOURNEY BOARD
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-xl md:text-2xl font-pixel text-amber-300 tracking-wide mt-3 drop-shadow-[0_3px_0_rgba(0,0,0,0.4)]"
          >
            ACHIEVEMENTS & COMMITTEES
          </motion.h2>
        </motion.div>

        {/* ===== CERTIFICATES ===== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative bg-emerald-950/80 backdrop-blur-sm border border-white/15 rounded-2xl p-4 sm:p-6 space-y-3 text-emerald-100"
        >
          <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-400 opacity-80" />

          <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
            <div className="p-2 rounded-lg bg-amber-400/15">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
            </div>
            <span className="font-pixel text-[9px] sm:text-[10px] text-amber-300">
              CERTIFICATES
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {/* Box Educourse */}
            <button
              onClick={() => setShowEduCourse(true)}
              className="group w-full bg-emerald-900/50 border border-white/10 rounded-xl p-3 sm:p-4 hover:border-amber-300/50 hover:shadow-[0_10px_30px_-14px_rgba(251,191,36,0.5)] transition-all duration-300 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-400/15">
                    <GraduationCap className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h5 className="font-pixel text-[9px] sm:text-[10px] text-amber-100">
                      EDUCOURSE.ID
                    </h5>
                    <p className="text-[9px] sm:text-[10px] text-emerald-200/60">
                      3 Sertifikat Coding for Teens
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Starter", "Beginner", "Advance"].map((tag) => (
                  <span
                    key={tag}
                    className="font-pixel text-[7px] sm:text-[8px] text-amber-300 bg-amber-400/15 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>

            {/* Box AI Ready ASEAN */}
            <button
              onClick={() =>
                setActiveCert({
                  title: aiCertificate.fullTitle,
                  badge: aiCertificate.badge,
                  image: aiCertificate.image,
                })
              }
              className="group w-full bg-emerald-900/50 border border-white/10 rounded-xl p-3 sm:p-4 hover:border-amber-300/50 hover:shadow-[0_10px_30px_-14px_rgba(251,191,36,0.5)] transition-all duration-300 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-400/15">
                    <Globe className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h5 className="font-pixel text-[9px] sm:text-[10px] text-amber-100">
                      AI READY ASEAN
                    </h5>
                    <p className="text-[9px] sm:text-[10px] text-emerald-200/60">
                      Certificate of Completion
                    </p>
                  </div>
                </div>
                <Maximize2 className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                <span className="font-pixel text-[7px] sm:text-[8px] text-amber-300 bg-amber-400/15 px-2 py-0.5 rounded-full">
                  Asean Foundation
                </span>
                <span className="font-pixel text-[7px] sm:text-[8px] text-amber-300 bg-amber-400/15 px-2 py-0.5 rounded-full">
                  Google.Org
                </span>
              </div>

              <p className="text-[8px] sm:text-[9px] text-emerald-300/50 font-mono mt-2">
                🗓 {aiCertificate.date}
              </p>
            </button>
          </div>
        </motion.div>

        {/* ===== TROPHIES & COMMITTEES ===== */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {/* TROPHIES */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-emerald-950/80 backdrop-blur-sm border border-white/15 rounded-2xl p-4 sm:p-5 space-y-3"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-amber-400/80" />

            <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
              <div className="p-2 rounded-lg bg-amber-400/15">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
              </div>
              <div>
                <h3 className="font-pixel text-[10px] sm:text-[11px] text-amber-200">
                  NON-IT
                </h3>
                <p className="text-[9px] sm:text-[10px] text-emerald-300/50">
                  Prestasi Bakat & Seni
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              {nonItAchievements.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    style={{ "--accent": item.hex }}
                    className="bg-emerald-900/40 border border-white/5 rounded-xl p-3 hover:border-[color:var(--accent)]/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="p-1.5 rounded-lg shrink-0"
                        style={{ background: `${item.hex}1A` }}
                      >
                        <IconComponent
                          className="w-4 h-4"
                          style={{ color: item.hex }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-pixel text-[8px] sm:text-[9px] text-emerald-100 truncate">
                          {item.title}
                        </h4>
                        <p className="text-[8px] sm:text-[9px] text-emerald-300/50">
                          {item.level}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2 mt-2 border-t border-white/5">
                      <button
                        onClick={() =>
                          setActiveCert({
                            title: item.title,
                            badge: item.level,
                            image: item.certImage,
                          })
                        }
                        className="font-pixel text-[8px] sm:text-[9px] text-amber-300 font-bold hover:underline transition-all"
                      >
                        [ CERTIFICATE ]
                      </button>

                      {item.schoolNewsUrl && (
                        <a
                          href={item.schoolNewsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-pixel text-[7px] sm:text-[8px] text-emerald-300/60 hover:text-amber-300 flex items-center gap-1 transition-colors"
                        >
                          DOKUMENTASI
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* COMMITTEES */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-emerald-950/80 backdrop-blur-sm border border-white/15 rounded-2xl p-4 sm:p-5 space-y-3"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-emerald-400/80" />

            <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
              <div className="p-2 rounded-lg bg-emerald-400/10">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300" />
              </div>
              <div>
                <h3 className="font-pixel text-[10px] sm:text-[11px] text-emerald-200">
                  ORGANIZATION & COMMITTEES
                </h3>
                <p className="text-[9px] sm:text-[10px] text-emerald-300/50">
                  Kepemimpinan & Operasional
                </p>
              </div>
            </div>

            {/* Event Sekolah */}
            <div className="bg-emerald-900/40 border border-white/5 rounded-xl p-3 space-y-2.5">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-emerald-400" />
                <h4 className="font-pixel text-[8px] sm:text-[9px] text-emerald-200">
                  EVENT SEKOLAH
                </h4>
              </div>

              <div className="space-y-2">
                {committees.map((c) => {
                  const IconComponent = c.icon;
                  return (
                    <div
                      key={c.title}
                      className="flex items-start gap-2.5 bg-emerald-900/50 border border-white/5 rounded-lg p-2.5"
                    >
                      <div
                        className="p-1.5 rounded-lg shrink-0"
                        style={{ background: `${c.hex}1A` }}
                      >
                        <IconComponent
                          className="w-3.5 h-3.5"
                          style={{ color: c.hex }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-semibold text-[10px] sm:text-[11px] text-emerald-100">
                          {c.title}
                        </span>
                        <p className="text-[9px] sm:text-[10px] text-emerald-300/60">
                          {c.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Karang Taruna */}
            <div className="bg-emerald-900/40 border border-white/5 rounded-xl p-3">
              <div className="flex items-center gap-1.5 mb-2.5">
                <Flag className="w-3 h-3 text-amber-300" />
                <h4 className="font-pixel text-[8px] sm:text-[9px] text-emerald-200">
                  KARANG TARUNA
                </h4>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { role: "Wakil Bendahara", icon: Users, hex: "#34D399" },
                  { role: "Logistik", icon: Flag, hex: "#FBBF24" },
                  {
                    role: "Publikasi Dokumentasi",
                    icon: Calendar,
                    hex: "#38BDF8",
                  },
                ].map((r) => {
                  const RoleIcon = r.icon;
                  return (
                    <div
                      key={r.role}
                      className="bg-emerald-900/60 border border-white/5 py-2 px-1.5 rounded-lg text-center space-y-1"
                    >
                      <RoleIcon
                        className="w-3.5 h-3.5 mx-auto"
                        style={{ color: r.hex }}
                      />
                      <span className="font-semibold text-[8px] sm:text-[9px] text-emerald-100 block leading-tight">
                        {r.role}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ===== MODAL EDUCOURSE ===== */}
      <AnimatePresence>
        {showEduCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEduCourse(false)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-emerald-950/90 backdrop-blur-md border border-white/15 rounded-2xl w-full max-w-2xl p-4 sm:p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] relative space-y-4"
            >
              <button
                onClick={() => setShowEduCourse(false)}
                className="absolute top-3 right-3 bg-emerald-900/80 text-emerald-200 p-1.5 rounded-lg hover:bg-emerald-800 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-8">
                <span className="font-pixel text-[9px] bg-amber-400 text-emerald-950 px-2 py-0.5 rounded-full font-bold">
                  EDUCOURSE.ID
                </span>
                <h3 className="font-pixel text-sm sm:text-base text-amber-200 mt-1.5">
                  CODING FOR TEENS TRACK
                </h3>
                <p className="text-[10px] sm:text-[11px] text-emerald-300/50 mt-1">
                  Pilih sertifikat untuk melihat:
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {itCertificates.map((cert) => (
                  <button
                    key={cert.id}
                    onClick={() =>
                      setActiveCert({
                        title: cert.title,
                        badge: cert.badge,
                        image: cert.image,
                      })
                    }
                    className="group bg-emerald-900/50 border border-white/10 rounded-xl p-3 flex flex-col items-center gap-2 hover:border-amber-300/50 hover:shadow-[0_10px_30px_-14px_rgba(251,191,36,0.5)] transition-all duration-300"
                  >
                    <span className="font-pixel text-[7px] sm:text-[8px] text-amber-300 bg-amber-400/15 px-2 py-0.5 rounded-full">
                      {cert.badge}
                    </span>
                    <span className="font-pixel text-[8px] sm:text-[9px] text-amber-100 text-center">
                      {cert.title}
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-emerald-300/50 font-mono">
                      {cert.date}
                    </span>
                    <span className="font-pixel text-[8px] sm:text-[9px] bg-amber-400 text-emerald-950 px-3 py-1.5 rounded-lg font-bold group-hover:bg-amber-300 transition-all">
                      LIHAT
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== MODAL SERTIFIKAT ===== */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-3 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-emerald-900/90 border border-white/20 rounded-2xl p-3 sm:p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative space-y-3 inline-block"
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-emerald-800/80 text-emerald-200 p-1.5 rounded-lg hover:bg-emerald-700 transition-colors z-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="pr-8">
                <span className="font-pixel text-[8px] sm:text-[9px] bg-amber-400 text-emerald-950 px-2 py-0.5 rounded-full font-bold inline-block">
                  {activeCert.badge}
                </span>
                <h3 className="font-pixel text-xs sm:text-sm text-amber-200 mt-1.5">
                  {activeCert.title}
                </h3>
              </div>

              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="rounded-lg border border-white/20 max-w-[90vw] sm:max-w-[600px] max-h-[65vh] sm:max-h-[70vh] w-auto h-auto object-contain"
                style={{ display: "block" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
