import React, { useState, useRef } from "react";

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
  Calendar,
  Box,
  GraduationCap,
  ChevronRight,
  Globe,
  ChessKnight,
  Bot,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const itCertificates = [
  {
    id: "educourse-starter",
    title: "Coding for Teens (Starter)",
    issuer: "Educourse.id",
    date: "05 Desember 2024",
    badge: "STARTER LEVEL",
    image: "/certs/educourse-starter.jpeg",
  },
  {
    id: "educourse-beginner",
    title: "Coding for Teens (Beginner)",
    issuer: "Educourse.id",
    date: "05 Juni 2025",
    badge: "BEGINNER LEVEL",
    image: "/certs/educourse-beginner.jpeg",
  },
  {
    id: "educourse-advance",
    title: "Coding for Teens Level Advance",
    issuer: "Educourse.id",
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
  date: "12 August 2026",
  badge: "AI READY",
  image: "/certs/ai-ready-asean.jpeg",
  description:
    "Menyelesaikan seluruh bab modul pembelajaran AI berdurasi 12 jam di AIClassASEAN.org",
};

const nonItAchievements = [
  {
    id: "comedy",
    title: "Lomba Stand Up Comedy",
    level: "Pencapaian Tingkat Sekolah",
    icon: Laugh,
    hex: "#FBBF24",
    certImage: "/certs/comedy.jpeg",
    badge: "Sekolah",
    issuer: "SMK Medikacom Bandung",
    date: "28 Oktober 2024",
    schoolNewsUrl:
      "https://medikacom.sch.id/kegiatan-lomba-literasi-smk-medikacom-bandung/",
  },
  {
    id: "chess",
    title: "Lomba Catur",
    level: "Pencapaian Tingkat Sekolah",
    icon: ChessKnight,
    hex: "#F59E0B",
    certImage: "/certs/catur.jpeg",
    badge: "Sekolah",
    issuer: "SMK Medikacom Bandung",
    date: "18 Juni 2026",
    schoolNewsUrl: null,
  },
  {
    id: "angklung",
    title: "Partisipasi Kegiatan Angklung",
    level: "Provinsi / Umum",
    icon: Award,
    hex: "#F59E0B",
    certImage: "/certs/angklung.jpeg",
    badge: "Provinsi",
    issuer: "Dinas Pariwisata dan Kebudayaan Provinsi Jawa Barat",
    date: "18 November 2018",
    schoolNewsUrl: null,
  },
];

const committees = [
  {
    title: "Devisi Acara — Pekan Olahraga dan Seni",
    desc: "Mengatur konsep, rangkaian acara, dan koordinasi tim.",
    icon: Users,
    hex: "#34D399",
  },
  {
    title: "Devisi Acara — Perayaan 17 Agustus",
    desc: "Mengoordinasikan kegiatan dan komunikasi antarbagian.",
    icon: Calendar,
    hex: "#FBBF24",
  },
  {
    title: "Devisi Logistik — Pekan Olahraga Antar Kelas",
    desc: "Mengelola perlengkapan dan kebutuhan teknis acara.",
    icon: Box,
    hex: "#38BDF8",
  },
];

/* =========================================================
   PIXEL CLOUDS
========================================================= */

const PixelCloud = ({ className = "", scale = 1 }) => {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ scale }}
      animate={{
        x: [0, 12, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative h-10 w-28 opacity-45">
        <div className="absolute bottom-0 left-0 h-4 w-24 bg-white/60" />
        <div className="absolute bottom-3 left-5 h-6 w-9 bg-white/60" />
        <div className="absolute bottom-4 left-12 h-7 w-8 bg-white/60" />
        <div className="absolute bottom-1 right-0 h-3 w-8 bg-white/60" />
      </div>
    </motion.div>
  );
};

/* =========================================================
   SKY
========================================================= */

const PixelSky = () => {
  return (
    <div className="absolute inset-x-0 top-0 h-[60%] overflow-hidden pointer-events-none">
      <PixelCloud className="left-[5%] top-[17%]" scale={0.9} />
      <PixelCloud className="left-[42%] top-[31%]" scale={0.65} />
      <PixelCloud className="right-[9%] top-[22%]" scale={0.8} />

      <motion.div
        className="absolute left-[73%] top-[43%] opacity-25"
        animate={{ x: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-end gap-1">
          <div className="h-2 w-8 bg-white/60" />
          <div className="h-4 w-5 bg-white/60" />
          <div className="h-3 w-7 bg-white/60" />
        </div>
      </motion.div>

      <motion.div
        className="absolute left-[18%] top-[35%] h-1 w-1 bg-white/45"
        animate={{ y: [0, -12, 0], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute left-[58%] top-[19%] h-1.5 w-1.5 bg-white/35"
        animate={{ y: [0, 15, 0], opacity: [0.15, 0.5, 0.15] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        className="absolute right-[22%] top-[40%] h-1 w-1 bg-white/40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
      />
    </div>
  );
};

/* =========================================================
   FLYING BIRDS
========================================================= */

const PixelBird = ({ top, left, scale = 1, duration = 18, delay = 0 }) => {
  return (
    <motion.div
      className="absolute pointer-events-none z-[4]"
      style={{ top, left, scale }}
      animate={{ x: ["0vw", "95vw"], y: [0, -15, 5, -10, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    >
      <div className="relative h-6 w-12">
        <motion.div
          className="absolute left-0 top-2 h-[3px] w-5 bg-[#365d50]"
          animate={{ rotate: [20, -12, 20] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-2 h-[3px] w-5 bg-[#365d50]"
          animate={{ rotate: [-20, 12, -20] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

const FlyingBirds = () => {
  return (
    <>
      <PixelBird top="17%" left="-10%" scale={0.65} duration={24} />
      <PixelBird top="27%" left="-20%" scale={0.45} duration={30} delay={6} />
      <PixelBird top="40%" left="-15%" scale={0.8} duration={27} delay={11} />
      <PixelBird top="48%" left="-20%" scale={0.35} duration={32} delay={15} />
    </>
  );
};

/* =========================================================
   LEAF CLUSTER
========================================================= */

const PixelLeafCluster = ({ className = "", scale = 1 }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ scale, transformOrigin: "bottom center" }}
      animate={{ rotate: [-1.2, 1.2, -1.2] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative h-28 w-36">
        <div className="absolute left-4 top-9 h-12 w-16 bg-[#164d31]" />
        <div className="absolute left-16 top-3 h-16 w-16 bg-[#1d5a35]" />
        <div className="absolute left-1 top-17 h-10 w-28 bg-[#205f39]" />
        <div className="absolute left-28 top-13 h-11 w-9 bg-[#174a2e]" />

        <div className="absolute left-10 top-2 h-10 w-11 bg-[#2d7843]" />
        <div className="absolute left-25 top-7 h-10 w-12 bg-[#367f48]" />
        <div className="absolute left-5 top-12 h-11 w-12 bg-[#2f7742]" />
        <div className="absolute left-19 top-20 h-10 w-14 bg-[#286d3d]" />

        <div className="absolute left-12 top-6 h-3 w-5 bg-[#55a653]" />
        <div className="absolute left-27 top-11 h-3 w-6 bg-[#62ad58]" />
        <div className="absolute left-7 top-19 h-3 w-5 bg-[#4b994e]" />

        <div className="absolute left-1 top-9 h-3 w-3 bg-[#a8d4c8]" />
        <div className="absolute left-20 top-1 h-3 w-3 bg-[#d5f0e1]" />
        <div className="absolute left-34 top-21 h-3 w-3 bg-[#7ab8d5]" />
      </div>
    </motion.div>
  );
};

/* =========================================================
   FRUIT
========================================================= */

const PixelFruit = ({ className = "", type = "red" }) => {
  const color =
    type === "yellow" ? "#f6c84a" : type === "orange" ? "#ee8d36" : "#d94b42";

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, 3, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="h-3 w-3" style={{ backgroundColor: color }} />
      <div className="absolute -top-2 left-1 h-2 w-1 bg-[#275b35]" />
    </motion.div>
  );
};

/* =========================================================
   LEFT TREE
========================================================= */

const LeftTree = () => {
  return (
    <div className="absolute left-[-85px] top-[45%] h-[90%] w-[330px] sm:left-[-35px] sm:w-[390px] lg:left-[0%] lg:w-[430px] pointer-events-none">
      <PixelLeafCluster className="left-[0px] top-[-25px]" scale={1.05} />
      <PixelLeafCluster className="left-[105px] top-[-10px]" scale={0.88} />
      <PixelLeafCluster className="left-[180px] top-[25px]" scale={0.7} />

      <motion.div
        className="absolute left-[130px] top-[92px] h-[17px] w-[190px] origin-left bg-[#593821]"
        animate={{ rotate: [-17, -15, -17] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[110px] top-[105px] h-[12px] w-[125px] origin-right bg-[#68432a]"
        animate={{ rotate: [18, 20, 18] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute left-[175px] top-[67px] h-[10px] w-[90px] rotate-[-38deg] bg-[#654027]" />
      <div className="absolute left-[182px] top-[78px] h-[9px] w-[75px] rotate-[35deg] bg-[#70472b]" />

      <div className="absolute left-[137px] top-[90px] h-[650px] w-[62px] bg-[#573621]" />
      <div className="absolute left-[151px] top-[90px] h-[650px] w-[19px] bg-[#70482b]" />
      <div className="absolute left-[185px] top-[110px] h-[650px] w-[9px] bg-[#432b1c]" />

      <div className="absolute left-[138px] top-[160px] h-7 w-4 bg-[#70482b]" />
      <div className="absolute left-[177px] top-[215px] h-8 w-4 bg-[#3e291c]" />
      <div className="absolute left-[151px] top-[270px] h-5 w-3 bg-[#815433]" />
      <div className="absolute left-[187px] top-[340px] h-10 w-3 bg-[#382419]" />

      <PixelFruit className="left-[45px] top-[60px]" type="red" />
      <PixelFruit className="left-[245px] top-[42px]" type="yellow" />
      <PixelFruit className="left-[84px] top-[112px]" type="orange" />
    </div>
  );
};

/* =========================================================
   RIGHT TREE
========================================================= */

const RightTree = () => {
  return (
    <div className="absolute right-[-90px] top-[43%] h-[92%] w-[350px] sm:right-[-45px] sm:w-[410px] lg:right-[0%] lg:w-[450px] pointer-events-none">
      <PixelLeafCluster className="right-[0px] top-[-30px]" scale={1.08} />
      <PixelLeafCluster className="right-[105px] top-[-5px]" scale={0.85} />
      <PixelLeafCluster className="right-[185px] top-[20px]" scale={0.68} />

      <motion.div
        className="absolute right-[125px] top-[90px] h-[17px] w-[205px] origin-right bg-[#593821]"
        animate={{ rotate: [17, 15, 17] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[115px] top-[107px] h-[12px] w-[125px] origin-left bg-[#68432a]"
        animate={{ rotate: [-20, -18, -20] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute right-[175px] top-[66px] h-[10px] w-[90px] rotate-[39deg] bg-[#654027]" />
      <div className="absolute right-[182px] top-[80px] h-[9px] w-[75px] rotate-[-35deg] bg-[#70472b]" />

      <div className="absolute right-[135px] top-[88px] h-[660px] w-[64px] bg-[#573621]" />
      <div className="absolute right-[157px] top-[88px] h-[660px] w-[19px] bg-[#70482b]" />
      <div className="absolute right-[134px] top-[110px] h-[660px] w-[9px] bg-[#432b1c]" />

      <div className="absolute right-[180px] top-[160px] h-7 w-4 bg-[#70482b]" />
      <div className="absolute right-[142px] top-[215px] h-8 w-4 bg-[#3e291c]" />
      <div className="absolute right-[170px] top-[275px] h-5 w-3 bg-[#815433]" />
      <div className="absolute right-[136px] top-[350px] h-10 w-3 bg-[#382419]" />

      <PixelFruit className="right-[48px] top-[55px]" type="red" />
      <PixelFruit className="right-[245px] top-[40px]" type="yellow" />
      <PixelFruit className="right-[82px] top-[112px]" type="orange" />
    </div>
  );
};

/* =========================================================
   HANGING VINES
========================================================= */

const HangingVines = () => {
  const vines = [
    { left: "8%", height: "135px", delay: 0 },
    { left: "18%", height: "95px", delay: 0.7 },
    { left: "29%", height: "160px", delay: 1.2 },
    { left: "72%", height: "140px", delay: 0.5 },
    { left: "83%", height: "100px", delay: 1.4 },
    { left: "91%", height: "150px", delay: 2 },
  ];

  return (
    <>
      {vines.map((vine, index) => (
        <motion.div
          key={index}
          className="absolute top-[48%] z-[3] origin-top pointer-events-none"
          style={{ left: vine.left, height: vine.height }}
          animate={{ rotate: [-2, 3, -2] }}
          transition={{
            duration: 5 + index * 0.4,
            repeat: Infinity,
            delay: vine.delay,
            ease: "easeInOut",
          }}
        >
          <div className="h-full w-[3px] bg-[#28623a]" />

          <motion.div
            className="absolute -left-2 top-[22%] h-3 w-5 bg-[#3f8d4a]"
            animate={{ rotate: [-10, 8, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute left-1 top-[48%] h-3 w-5 bg-[#347b41]"
            animate={{ rotate: [8, -10, 8] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute -left-2 top-[72%] h-3 w-5 bg-[#4a9850]"
            animate={{ rotate: [-8, 10, -8] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      ))}
    </>
  );
};

/* =========================================================
   FLOATING LEAVES
========================================================= */

const FloatingLeaves = () => {
  const leaves = [
    { left: "12%", top: "53%", rotate: 15, delay: 0 },
    { left: "25%", top: "62%", rotate: -25, delay: 1.2 },
    { left: "69%", top: "57%", rotate: 20, delay: 2 },
    { left: "80%", top: "68%", rotate: -15, delay: 0.8 },
  ];

  return (
    <>
      {leaves.map((leaf, index) => (
        <motion.div
          key={index}
          className="absolute z-[5] pointer-events-none"
          style={{ left: leaf.left, top: leaf.top }}
          animate={{
            y: [0, 16, 34],
            x: [0, 12, -5],
            rotate: [leaf.rotate, leaf.rotate + 35, leaf.rotate + 70],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: leaf.delay,
            ease: "easeInOut",
          }}
        >
          <div className="relative h-3 w-5">
            <div className="absolute left-0 top-1 h-2 w-5 bg-[#4c9651]" />
            <div className="absolute left-2 top-0 h-3 w-1 bg-[#285e38]" />
          </div>
        </motion.div>
      ))}
    </>
  );
};

/* =========================================================
   AMBIENT PIXEL PARTICLES
========================================================= */

const AmbientPixels = () => {
  const particles = [
    ["12%", "48%", 3],
    ["22%", "55%", 4],
    ["34%", "44%", 2],
    ["46%", "51%", 3],
    ["58%", "46%", 2],
    ["67%", "53%", 3],
    ["78%", "47%", 4],
    ["88%", "56%", 2],
  ];

  return (
    <>
      {particles.map(([left, top, size], index) => (
        <motion.div
          key={index}
          className="absolute z-[2] pointer-events-none bg-[#d8f1df]/35"
          style={{ left, top, width: size, height: size }}
          animate={{ y: [0, -12, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

/* =========================================================
   CERTIFICATE MODAL
========================================================= */

const CertificateModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#081d13]/80 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden border-4 border-[#183c29] bg-[#d5f0e1] shadow-[10px_10px_0_#081d13]"
          initial={{ scale: 0.85, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.85, y: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b-4 border-[#183c29] bg-[#214d35] px-4 py-3">
            <div className="min-w-0">
              <p className="font-mono text-[10px] tracking-[0.25em] text-[#a9d8bd]">
                CERTIFICATE_VIEWER
              </p>
              <h3 className="truncate font-pixel text-sm text-white sm:text-base">
                {cert.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center border-2 border-[#0e2a1b] bg-[#e3b34c] text-[#142719] shadow-[3px_3px_0_#0e2a1b] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              <X size={18} />
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 overflow-auto bg-[#b8dcca] p-4 sm:p-6">
            <div className="mx-auto flex max-w-2xl items-center justify-center overflow-hidden border-4 border-[#183c29] bg-white shadow-[6px_6px_0_rgba(16,45,29,.3)]">
              <img
                src={cert.image}
                alt={cert.title}
                className="block h-auto max-h-[55vh] w-full object-contain"
              />
            </div>
          </div>

          {/* Info */}
          <div className="grid gap-3 border-t-4 border-[#183c29] bg-[#d5f0e1] p-4 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#507161]">
                Issuer
              </p>
              <p className="mt-1 text-xs font-semibold text-[#183c29] sm:text-sm">
                {cert.issuer}
              </p>
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#507161]">
                Date
              </p>
              <p className="mt-1 text-xs font-semibold text-[#183c29] sm:text-sm">
                {cert.date}
              </p>
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#507161]">
                Level
              </p>
              <p className="mt-1 text-xs font-semibold text-[#183c29] sm:text-sm">
                {cert.badge}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* =========================================================
   EDUCOURSE MODAL
========================================================= */

const EduCourseModal = ({ certificates, onClose, onOpen }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[90] flex items-center justify-center bg-[#081d13]/80 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="w-full max-w-2xl border-4 border-[#183c29] bg-[#d5f0e1] shadow-[10px_10px_0_#081d13]"
          initial={{ scale: 0.9, y: 25 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b-4 border-[#183c29] bg-[#214d35] px-4 py-3">
            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] text-[#a9d8bd]">
                CERTIFICATE_SERIES
              </p>
              <h3 className="font-pixel text-sm text-white">
                Coding for Teens
              </h3>
            </div>

            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center border-2 border-[#102a1c] bg-[#e3b34c] shadow-[2px_2px_0_#102a1c]"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-2 p-4">
            {certificates.map((cert, index) => (
              <button
                key={cert.id}
                onClick={() => onOpen(cert)}
                className="group flex w-full items-center gap-3 border-2 border-[#356149] bg-[#eef8f2] p-3 text-left shadow-[3px_3px_0_#356149] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-[#183c29] bg-[#65a873] font-pixel text-xs text-white">
                  0{index + 1}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-pixel text-[10px] text-[#183c29] sm:text-xs">
                    {cert.title}
                  </p>
                  <p className="mt-1 font-mono text-[9px] text-[#557265]">
                    {cert.date}
                  </p>
                </div>

                <ChevronRight
                  size={18}
                  className="text-[#356149] transition-transform group-hover:translate-x-1"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* =========================================================
   COMPACT CERTIFICATE CARD
========================================================= */

const CertificateCard = ({
  number,
  icon: Icon,
  title,
  subtitle,
  badge,
  date,
  onClick,
  accent,
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ x: 2, y: 2 }}
      className="group relative w-full border-2 border-[#173b29] bg-[#e7f5ec] p-3 text-left shadow-[5px_5px_0_#173b29]"
    >
      <div className="flex items-center gap-3">
        <div
          className="relative flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#173b29]"
          style={{ backgroundColor: accent }}
        >
          <Icon size={21} className="text-[#143020]" />
          <span className="absolute -right-1 -top-1 bg-[#173b29] px-1 font-mono text-[7px] text-white">
            {number}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className="border border-[#47725a] bg-[#cde7d6] px-1.5 py-0.5 font-mono text-[7px] tracking-wider text-[#285139]">
              {badge}
            </span>

            <Maximize2
              size={13}
              className="shrink-0 text-[#527260] transition-transform group-hover:scale-110"
            />
          </div>

          <h4 className="font-pixel text-[10px] leading-relaxed text-[#173b29] sm:text-xs">
            {title}
          </h4>

          <p className="mt-1 truncate text-[9px] text-[#557265]">{subtitle}</p>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-[#b5d4c0] pt-2">
        <span className="font-mono text-[8px] text-[#587566]">{date}</span>
        <span className="font-mono text-[8px] text-[#376249]">
          LIHAT SERTIFIKAT →
        </span>
      </div>
    </motion.button>
  );
};

/* =========================================================
   MAIN LIFE STORY
========================================================= */

export default function LifeStory() {
  const [activeCert, setActiveCert] = useState(null);
  const [showEduCourse, setShowEduCourse] = useState(false);

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [35, 0, -20]);

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.82, 1],
    [0, 1, 1, 0.35],
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `
          linear-gradient(
            180deg,
            #d5f0e1 0%,
            #d5f0e1 8%,
            #c5e8d5 18%,
            #a8d4c8 30%,
            #7ab8d5 43%,
            #5da05f 58%,
            #2d6b3f 76%,
            #1a4028 90%,
            #0f2a1a 100%
          )
        `,
      }}
    >
      {/* 60% SKY */}
      <PixelSky />
      <FlyingBirds />

      {/* TREE WORLD */}
      <div className="absolute inset-x-0 top-[39%] h-[100%]">
        <LeftTree />
        <RightTree />
        <HangingVines />
        <FloatingLeaves />
        <AmbientPixels />
      </div>

      {/* SOFT ATMOSPHERE */}
      <motion.div
        className="absolute left-[48%] top-[51%] z-[2] h-2 w-2 bg-[#e4f5dc]/30 pointer-events-none"
        animate={{ y: [0, -18, 0], opacity: [0.1, 0.7, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[42%] top-[64%] z-[2] h-1 w-1 bg-[#e4f5dc]/40 pointer-events-none"
        animate={{
          x: [0, 10, -4, 0],
          y: [0, -20, -35, 0],
          opacity: [0, 0.7, 0.2, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CENTER CONTENT */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-5xl">
          {/* HEADER */}
          <div className="mx-auto mb-5 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 border-2 border-[#173b29] bg-[#e4f4ea]/90 px-3 py-1.5 shadow-[3px_3px_0_#173b29] backdrop-blur-sm">
              <motion.div
                className="h-2 w-2 bg-[#e3b34c]"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="font-mono text-[8px] font-bold tracking-[0.2em] text-[#244c35] sm:text-[9px]">
                PENGALAMAN & PERJALANAN
              </span>
            </div>

            <h2 className="font-pixel text-xl leading-relaxed text-[#173b29] drop-shadow-[2px_2px_0_rgba(255,255,255,.4)] sm:text-2xl md:text-3xl">
              PENCAPAIAN
              <span className="mx-2 text-[#356f45]">&</span>
              ORGANISASI
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-[10px] leading-relaxed text-[#355a48] sm:text-xs">
              Kumpulan pengalaman, pencapaian, dan kegiatan yang menjadi bagian
              dari proses saya dalam berkembang, belajar, bekerja sama, serta
              mengambil tanggung jawab.
            </p>
          </div>

          {/* CERTIFICATES */}
          <div className="space-y-4">
            <div className="border-2 border-[#173b29] bg-[#cfe7d7]/90 p-3 shadow-[6px_6px_0_rgba(15,42,26,.35)] backdrop-blur-[2px]">
              <div className="mb-3 flex items-center justify-between gap-3 border-b-2 border-[#6e9d7e] pb-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center border-2 border-[#173b29] bg-[#65a873]">
                    <Code2 size={15} className="text-[#143020]" />
                  </div>
                  <div>
                    <p className="font-pixel text-[10px] text-[#173b29] sm:text-xs">
                      SERTIFIKASI TEKNOLOGI
                    </p>
                    <p className="font-mono text-[7px] text-[#567564]">
                      DEVELOPMENT
                    </p>
                  </div>
                </div>
                <GraduationCap size={18} className="text-[#39694b]" />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <CertificateCard
                  number="A1"
                  icon={Code2}
                  title="Coding for Teens"
                  subtitle="Educourse.id"
                  badge="3 CERTIFICATES"
                  date="2024 — 2025"
                  accent="#8acb91"
                  onClick={() => setShowEduCourse(true)}
                />

                <CertificateCard
                  number="A2"
                  icon={Bot}
                  title={aiCertificate.title}
                  subtitle={aiCertificate.issuer}
                  badge={aiCertificate.badge}
                  date={aiCertificate.date}
                  accent="#79c4d2"
                  onClick={() => setActiveCert(aiCertificate)}
                />
              </div>
            </div>

            {/* LOWER CONTENT */}
            <div className="grid gap-4 lg:grid-cols-2">
              {/* ACHIEVEMENTS */}
              <div className="border-2 border-[#173b29] bg-[#d5e9da]/90 p-3 shadow-[5px_5px_0_rgba(15,42,26,.3)] backdrop-blur-[2px]">
                <div className="mb-3 flex items-center gap-2 border-b-2 border-[#87a992] pb-2">
                  <div className="flex h-7 w-7 items-center justify-center border-2 border-[#173b29] bg-[#f3c758]">
                    <Trophy size={14} className="text-[#4a3510]" />
                  </div>
                  <div>
                    <p className="font-pixel text-[10px] text-[#173b29] sm:text-xs">
                      PENCAPAIAN LAINNYA
                    </p>
                    <p className="font-mono text-[7px] text-[#587566]">
                      SELAIN TEKNOLOGI
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {nonItAchievements.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.id}
                        className="border-2 border-[#527460] bg-[#eef8f1] p-2.5"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-[#173b29]"
                            style={{ backgroundColor: item.hex }}
                          >
                            <Icon size={17} className="text-[#3c3217]" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="font-pixel text-[9px] text-[#173b29] sm:text-[10px]">
                              {item.title}
                            </p>
                            <p className="mt-0.5 font-mono text-[8px] text-[#597365]">
                              {item.level}
                            </p>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-2 flex items-center justify-between border-t border-[#b5d4c0] pt-2">
                          {item.certImage ? (
                            <button
                              onClick={() =>
                                setActiveCert({
                                  title: item.title,
                                  issuer: item.issuer,
                                  date: item.date,
                                  badge: item.badge,
                                  image: item.certImage,
                                })
                              }
                              className="font-mono text-[8px] text-[#376249] transition-colors hover:text-[#173b29]"
                            >
                              LIHAT SERTIFIKAT →
                            </button>
                          ) : (
                            <span className="font-mono text-[8px] text-[#597365]/50">
                              SERTIFIKAT: -
                            </span>
                          )}

                          {item.schoolNewsUrl && (
                            <a
                              href={item.schoolNewsUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 font-mono text-[8px] text-[#527460] transition-colors hover:text-[#173b29]"
                              aria-label={`Open ${item.title}`}
                            >
                              DOKUMENTASI
                              <ExternalLink size={10} />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* COMMITTEES */}
              <div className="border-2 border-[#173b29] bg-[#d5e9da]/90 p-3 shadow-[5px_5px_0_rgba(15,42,26,.3)] backdrop-blur-[2px]">
                <div className="mb-3 flex items-center gap-2 border-b-2 border-[#87a992] pb-2">
                  <div className="flex h-7 w-7 items-center justify-center border-2 border-[#173b29] bg-[#77c9a0]">
                    <Users size={14} className="text-[#173b29]" />
                  </div>
                  <div>
                    <p className="font-pixel text-[10px] text-[#173b29] sm:text-xs">
                      PENGALAMAN ORGANISASI
                    </p>
                    <p className="font-mono text-[7px] text-[#587566]">
                      KEPEMIMPINAN & KERJA SAMA TIM
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {committees.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex gap-3 border-2 border-[#527460] bg-[#eef8f1] p-2.5"
                      >
                        <div
                          className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-[#173b29]"
                          style={{ backgroundColor: item.hex }}
                        >
                          <Icon size={16} className="text-[#173b29]" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start gap-2">
                            <span className="font-mono text-[7px] text-[#779083]">
                              0{index + 1}
                            </span>
                            <p className="font-pixel text-[9px] leading-relaxed text-[#173b29] sm:text-[10px]">
                              {item.title}
                            </p>
                          </div>

                          <p className="mt-1 pl-4 text-[8px] leading-relaxed text-[#5a7365]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* HUD */}
            {/* <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-mono text-[7px] tracking-wider text-[#385b48] sm:text-[8px]">
              <span>WORLD_STATE: CONTINUOUS</span>
              <span>•</span>
              <span>TREE_SYSTEM: CONNECTED</span>
              <span>•</span>
              <span>NEXT_ZONE: LOADING...</span>
            </div> */}
          </div>
        </div>
      </motion.div>

      {/* MODALS */}
      {showEduCourse && (
        <EduCourseModal
          certificates={itCertificates}
          onClose={() => setShowEduCourse(false)}
          onOpen={(cert) => {
            setShowEduCourse(false);
            setActiveCert(cert);
          }}
        />
      )}

      {activeCert && (
        <CertificateModal
          cert={activeCert}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}
