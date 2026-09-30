import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Layout,
  ExternalLink,
  Store,
  Sparkles,
  CircleDot,
  Star,
  Crown,
  FolderGit2,
  Cpu,
  X,
  Maximize2,
  GraduationCap,
  Layers,
  Tag,
} from "lucide-react";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiPostman,
  SiSupabase,
  SiBlender,
  SiUnity,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

/* =========================================================
   DATA
========================================================= */

const projects = [
  {
    id: "v3q7cn",
    title: "APLIKASI KOPERASI DESA",
    tech: "React • Tailwind • Supabase",
    desc: "Sistem informasi untuk mengelola anggota dan transaksi koperasi",
    longDesc:
      "Aplikasi web untuk digitalisasi koperasi desa — mencakup manajemen anggota, pencatatan transaksi simpan pinjam, dan laporan keuangan otomatis. Dibuat untuk mempermudah operasional harian pengurus koperasi.",
    Icon: Store,
    hex: "#34D399",
    tags: ["FRONTEND", "PEMERINTAH"],
    image: "/view/view-kopdes.png",
    githubUrl: "https://github.com/airlanggapangestu/kopdes",
    demoUrl: "https://kopdes-pi.vercel.app/",
  },
  {
    id: "tugasku",
    title: "APLIKASI TO-DO LIST",
    tech: "React • Tailwind • PHP • MySQL",
    desc: "Aplikasi untuk mencatat, mengatur, dan memantau berbagai tugas.",
    longDesc:
      "Aplikasi produktivitas untuk mencatat, mengorganisir, dan memantau progress tugas harian. Dilengkapi sistem kategori, deadline, dan status penyelesaian dengan backend PHP & MySQL.",
    Icon: Layout,
    hex: "#FBBF24",
    tags: ["Full Stack", "Productivity"],
    image: "/view/view-tugasku.png",
    githubUrl: "https://github.com/airlanggapangestu/TugasKu",
    demoUrl: "#",
  },
  {
    id: "chess",
    title: "APLIKASI CATUR",
    tech: "React • Tailwind • Stockfish",
    desc: "Aplikasi catur modern dengan engine analysis, tactical puzzle, dan local multiplayer.",
    longDesc:
      "Aplikasi catur berbasis web dengan engine Stockfish untuk analisa langkah, mode puzzle taktis, dan multiplayer lokal. Menggunakan React + Tailwind untuk UI responsif.",
    Icon: Crown,
    hex: "#A78BFA",
    tags: ["Full Stack", "Game"],
    image: "/view/view-catur.png",
    githubUrl: "https://github.com/airlanggapangestu/Chess-Mate",
    demoUrl: "https://chess-mate-taupe.vercel.app/",
  },
];

const itCertificates = [
  {
    id: "educourse-starter",
    title: "Coding for Teens (Starter)",
    image: "/certs/educourse-starter.jpeg",
    hex: "#8ACB91",
  },
  {
    id: "educourse-beginner",
    title: "Coding for Teens (Beginner)",
    image: "/certs/educourse-beginner.jpeg",
    hex: "#8ACB91",
  },
  {
    id: "educourse-advance",
    title: "Coding for Teens Level Advance",
    image: "/certs/educourse-advance.jpeg",
    hex: "#8ACB91",
  },
  {
    id: "ai-ready-asean",
    title: "AI Ready ASEAN",
    image: "/certs/ai-ready-asean.jpeg",
    hex: "#79C4D2",
  },
  // {
  //   id: "dicoding-elevaite",
  //   title: "Data Science dengan Microsoft Fabric",
  //   image: "/certs/sertifikat_dicoding_datascience.png",
  //   hex: "#79C4D2",
  // },
];

/* Tech Stack dengan icon masing-masing */
const techStack = [
  {
    category: "FRONTEND",
    hex: "#34D399",
    items: [
      { name: "React", Icon: FaReact, color: "#61DAFB" },
      // { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", Icon: FaBootstrap, color: "#7952B3" },
      { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
    ],
  },
  {
    category: "BACKEND",
    hex: "#FBBF24",
    items: [
      { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
      { name: "Express", Icon: SiExpress, color: "#000000" },
      { name: "PHP", Icon: FaPhp, color: "#777BB4" },
      { name: "Laravel", Icon: FaLaravel, color: "#FF2D20" },
      // { name: "Python", Icon: FaPython, color: "#3776AB" },
      // { name: "C#", Icon: TbBrandCSharp, color: "#239120" },
    ],
  },
  {
    category: "DATABASE",
    hex: "#38BDF8",
    items: [
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      // { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
    ],
  },
  {
    category: "TOOLS",
    hex: "#A78BFA",
    items: [
      { name: "Git", Icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", Icon: FaGithub, color: "#181717" },
      // { name: "Vite", Icon: SiVite, color: "#646CFF" },
      { name: "Figma", Icon: FaFigma, color: "#F24E1E" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Blender", Icon: SiBlender, color: "#E87D0D" },
      { name: "Unity", Icon: SiUnity, color: "#000000" },
    ],
  },
];

/* =========================================================
   TREE CONTINUATION
========================================================= */

function TreeContinuation() {
  return (
    <>
      {/* LEFT TREE */}
      <div
        className="
          absolute left-[-85px] top-0 h-full w-[330px]
          pointer-events-none
          sm:left-[-35px] sm:w-[390px]
          lg:left-[0%] lg:w-[430px]
        "
      >
        <div className="absolute left-[137px] top-0 h-full w-[62px] bg-[#573621]" />
        <div className="absolute left-[151px] top-0 h-full w-[19px] bg-[#70482b]" />
        <div className="absolute left-[185px] top-0 h-full w-[9px] bg-[#432b1c]" />

        <div className="absolute left-[139px] top-[12%] h-7 w-4 bg-[#70482b]" />
        <div className="absolute left-[176px] top-[22%] h-8 w-4 bg-[#3e291c]" />
        <div className="absolute left-[150px] top-[31%] h-5 w-3 bg-[#815433]" />
        <div className="absolute left-[186px] top-[42%] h-10 w-3 bg-[#382419]" />
        <div className="absolute left-[139px] top-[57%] h-6 w-3 bg-[#70482b]" />
        <div className="absolute left-[179px] top-[70%] h-9 w-3 bg-[#3e291c]" />
        <div className="absolute left-[148px] top-[82%] h-5 w-4 bg-[#70482b]" />

        <motion.div
          className="absolute left-[184px] top-[17%] h-[9px] w-[78px] origin-left bg-[#573621]"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* RIGHT TREE */}
      <div
        className="
          absolute right-[-90px] top-0 h-full w-[350px]
          pointer-events-none
          sm:right-[-45px] sm:w-[410px]
          lg:right-[0%] lg:w-[450px]
        "
      >
        <div className="absolute right-[135px] top-0 h-full w-[64px] bg-[#573621]" />
        <div className="absolute right-[157px] top-0 h-full w-[19px] bg-[#70482b]" />
        <div className="absolute right-[134px] top-0 h-full w-[9px] bg-[#432b1c]" />

        <div className="absolute right-[180px] top-[12%] h-7 w-4 bg-[#70482b]" />
        <div className="absolute right-[142px] top-[22%] h-8 w-4 bg-[#3e291c]" />
        <div className="absolute right-[170px] top-[32%] h-5 w-3 bg-[#815433]" />
        <div className="absolute right-[136px] top-[43%] h-10 w-3 bg-[#382419]" />
        <div className="absolute right-[178px] top-[58%] h-6 w-3 bg-[#70482b]" />
        <div className="absolute right-[142px] top-[71%] h-9 w-3 bg-[#3e291c]" />
        <div className="absolute right-[169px] top-[84%] h-5 w-4 bg-[#70482b]" />

        <motion.div
          className="absolute right-[184px] top-[19%] h-[9px] w-[78px] origin-right bg-[#573621]"
          animate={{ rotate: [2, -2, 2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </>
  );
}

/* =========================================================
   FIRE FLIES
========================================================= */

function Fireflies() {
  const fireflies = [
    [14, 30],
    [26, 22],
    [36, 73],
    [48, 18],
    [63, 74],
    [74, 42],
    [86, 23],
    [92, 70],
    [56, 52],
    [20, 82],
    [78, 83],
  ];

  return (
    <>
      {fireflies.map(([left, top], index) => (
        <motion.div
          key={index}
          className="absolute z-[2] pointer-events-none"
          style={{ left: `${left}%`, top: `${top}%` }}
          animate={{
            opacity: [0.15, 1, 0.2],
            scale: [0.7, 1.2, 0.7],
            x: [0, 4, -3, 0],
            y: [0, -5, 4, 0],
          }}
          transition={{
            duration: 2.5 + (index % 3),
            delay: index * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-[5px] w-[5px] bg-[#d8f58a] shadow-[0_0_8px_2px_rgba(216,245,138,0.45)]" />
        </motion.div>
      ))}
    </>
  );
}

/* =========================================================
   HANGING VINES
========================================================= */

function HangingVines() {
  return (
    <>
      <motion.div
        className="absolute left-[11%] top-0 z-[2] h-[110px] w-[3px] origin-top bg-[#376f3e] pointer-events-none"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -bottom-2 -left-[5px] h-3 w-3 bg-[#4f994f]" />
      </motion.div>

      <motion.div
        className="absolute right-[13%] top-0 z-[2] h-[135px] w-[3px] origin-top bg-[#376f3e] pointer-events-none"
        animate={{ rotate: [3, -3, 3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -bottom-2 -left-[5px] h-3 w-3 bg-[#4f994f]" />
      </motion.div>

      <motion.div
        className="absolute left-[29%] top-0 z-[2] h-[75px] w-[2px] origin-top bg-[#315f38] pointer-events-none"
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

/* =========================================================
   TAB NAVIGATION
========================================================= */

const TABS = [
  { id: "projects", label: "PROYEK", icon: FolderGit2 },
  { id: "certificates", label: "SERTIFIKAT", icon: GraduationCap },
  { id: "techstack", label: "TECH STACK", icon: Cpu },
];

function TabNavigation({ activeTab, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const active = activeTab === tab.id;

        return (
          <motion.button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className={`
              group relative flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3
              border-2 transition-all duration-300
              ${
                active
                  ? "border-[#e4a34b] bg-[#e4a34b]/20 text-[#e4ebc8]"
                  : "border-[#5d8147]/50 bg-[#173520]/60 text-[#a8bba0] hover:border-[#8fbd6b]/70 hover:text-[#e4ebc8]"
              }
            `}
            style={{
              clipPath:
                "polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))",
            }}
          >
            <Icon
              size={13}
              className={active ? "text-[#e4a34b]" : "text-[#8fbd6b]"}
            />

            <span className="font-pixel text-[8px] sm:text-[9px] tracking-wider">
              {tab.label}
            </span>

            {active && (
              <motion.span
                layoutId="tab-indicator"
                className="absolute -bottom-[2px] left-1/2 h-[3px] w-8 -translate-x-1/2 bg-[#e4a34b]"
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index, onDetail }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="
        group relative flex flex-col overflow-hidden
        border-[3px] border-[#2a241b] bg-[#e9e0c5]
        shadow-[7px_7px_0_#1d1913]
      "
    >
      <div
        className="absolute left-0 top-0 z-10 h-[5px] w-full"
        style={{ backgroundColor: project.hex }}
      />

      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden border-b-[3px] border-[#2a241b] bg-[#18291c]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover pixelated transition-transform duration-500"
          whileHover={{ scale: 1.06 }}
        />

        <div className="absolute inset-0 bg-[#102016]/10 transition-all duration-300 group-hover:bg-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-3 font-pixel text-[13px] leading-relaxed text-[#252018] sm:text-[14px]">
          {project.title}
        </h3>

        <p className="mb-5 flex-1 font-sans text-[12px] leading-5 text-[#5b5548]">
          {project.desc}
        </p>

        <button
          onClick={() => onDetail(project)}
          className="
            flex items-center justify-center gap-2
            border-2 border-[#272219] bg-[#29251e]
            px-4 py-3 font-pixel text-[10px] text-[#f0e7cb]
            shadow-[3px_3px_0_#14110d]
            transition-all hover:-translate-y-[2px]
            hover:bg-[#3a342a]
            hover:shadow-[4px_5px_0_#14110d]
            active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
          "
        >
          <Maximize2 size={14} strokeWidth={2.8} />
          LIHAT DETAIL
        </button>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PROJECT DETAIL MODAL
========================================================= */

function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

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
          className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden border-4 border-[#183c29] bg-[#d5f0e1] shadow-[10px_10px_0_#081d13]"
          initial={{ scale: 0.85, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.85, y: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b-4 border-[#183c29] bg-[#214d35] px-4 py-3">
            <div className="min-w-0">
              <p className="font-mono text-[9px] tracking-[0.25em] text-[#a9d8bd]">
                PROJECT_DETAIL
              </p>
              <h3 className="truncate font-pixel text-sm text-white sm:text-base">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center border-2 border-[#0e2a1b] bg-[#e3b34c] text-[#142719] shadow-[3px_3px_0_#0e2a1b] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-auto bg-[#b8dcca] p-4 sm:p-6">
            <div className="mb-5 overflow-hidden border-4 border-[#183c29] bg-white shadow-[6px_6px_0_rgba(16,45,29,.3)]">
              <img
                src={project.image}
                alt={project.title}
                className="block aspect-[16/9] w-full object-cover"
              />
            </div>

            <div className="mb-5">
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#507161]">
                Deskripsi
              </p>
              <p className="mt-2 font-sans text-xs leading-5 text-[#183c29] sm:text-sm sm:leading-6">
                {project.longDesc}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="border-2 border-[#356149] bg-[#eef8f2] p-3">
                <div className="mb-2 flex items-center gap-1.5">
                  <Layers size={12} className="text-[#356149]" />
                  <p className="font-mono text-[8px] uppercase tracking-widest text-[#507161]">
                    Tech Stack
                  </p>
                </div>
                <p className="font-pixel text-[9px] text-[#183c29]">
                  {project.tech}
                </p>
              </div>

              <div className="border-2 border-[#356149] bg-[#eef8f2] p-3">
                <div className="mb-2 flex items-center gap-1.5">
                  <Tag size={12} className="text-[#356149]" />
                  <p className="font-mono text-[8px] uppercase tracking-widest text-[#507161]">
                    Kategori
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#47725a] bg-[#cde7d6] px-1.5 py-0.5 font-mono text-[7px] tracking-wider text-[#285139]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-2 border-t-4 border-[#183c29] bg-[#d5f0e1] p-4 sm:grid-cols-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center justify-center gap-2
                border-2 border-[#183c29] bg-[#214d35]
                px-4 py-2.5 font-pixel text-[9px] text-[#d5f0e1]
                shadow-[3px_3px_0_#0e2a1b]
                transition-all hover:bg-[#183c29]
                active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
              "
            >
              <FaGithub size={14} />
              GITHUB REPO
            </a>

            {project.demoUrl !== "#" ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center justify-center gap-2
                  border-2 border-[#183c29] bg-[#65a873]
                  px-4 py-2.5 font-pixel text-[9px] text-[#0e2a1b]
                  shadow-[3px_3px_0_#0e2a1b]
                  transition-all hover:bg-[#7abf88]
                  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                "
              >
                <ExternalLink size={13} strokeWidth={3} />
                LIVE DEMO
              </a>
            ) : (
              <div
                className="
                  flex cursor-not-allowed items-center justify-center gap-2
                  border-2 border-[#507161]/40 bg-[#b8dcca]
                  px-4 py-2.5 font-pixel text-[9px] text-[#507161]/60
                "
              >
                <ExternalLink size={13} strokeWidth={3} />
                DEMO BELUM TERSEDIA
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================================================
   CERTIFICATE CARD — HANYA IMAGE
========================================================= */

function CertificateCard({ cert, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="
        group relative overflow-hidden
        border-[3px] border-[#2a241b] bg-[#18291c]
        shadow-[7px_7px_0_#1d1913]
      "
    >
      <div
        className="absolute left-0 top-0 z-10 h-[5px] w-full"
        style={{ backgroundColor: cert.hex }}
      />

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          className="h-full w-full object-cover pixelated transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-[#102016]/20 transition-all duration-300 group-hover:bg-transparent" />

        {/* Hover indicator */}
        <div
          className="
            absolute right-3 top-3 border-2 border-[#241e16] bg-[#efe6c9] p-1.5
            text-[#241e16] shadow-[3px_3px_0_#241e16]
            transition-transform duration-300 group-hover:scale-110
          "
        >
          <Maximize2 size={12} />
        </div>
      </div>
    </motion.button>
  );
}

/* =========================================================
   TECH STACK CARD — tanpa icon di header
========================================================= */

function TechStackCard({ stack, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="
        relative overflow-hidden
        border-[3px] border-[#2a241b] bg-[#e9e0c5]
        shadow-[7px_7px_0_#1d1913]
      "
    >
      <div
        className="absolute left-0 top-0 h-[5px] w-full"
        style={{ backgroundColor: stack.hex }}
      />

      <div className="border-b-2 border-[#2a241b]/30 p-4">
        <h3 className="font-pixel text-[13px]" style={{ color: "#252018" }}>
          {stack.category}
        </h3>
        <p className="mt-1 font-mono text-[8px] text-[#6b6251]">
          {stack.items.length} SKILLS
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 p-4 sm:grid-cols-4">
        {stack.items.map((item) => {
          const ItemIcon = item.Icon;
          return (
            <motion.div
              key={item.name}
              whileHover={{ y: -3, scale: 1.05 }}
              className="
                flex flex-col items-center justify-center gap-1.5
                border-2 border-[#746b5a] bg-[#d8ceb0]
                px-2 py-2.5 transition-all hover:bg-[#e4ddc5]
              "
            >
              <ItemIcon size={20} style={{ color: item.color }} />
              <span className="font-mono text-[7px] font-bold uppercase text-[#514a3e] text-center leading-tight">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* =========================================================
   CERTIFICATE MODAL
========================================================= */

function CertificateModal({ cert, onClose }) {
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

          <div className="flex-1 overflow-auto bg-[#b8dcca] p-4 sm:p-6">
            <div className="mx-auto flex max-w-2xl items-center justify-center overflow-hidden border-4 border-[#183c29] bg-white shadow-[6px_6px_0_rgba(16,45,29,.3)]">
              <img
                src={cert.image}
                alt={cert.title}
                className="block h-auto max-h-[70vh] w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TechHarvest() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("projects");
  const [activeCert, setActiveCert] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [35, -20]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 1],
    [0, 1, 1, 0.75],
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-[85vh] w-full overflow-hidden border-none"
      style={{
        background: `
          linear-gradient(
            180deg,
            #0f2a1a 0%,
            #102e1c 25%,
            #12351f 50%,
            #133a22 75%,
            #102d1d 100%
          )
        `,
      }}
    >
      <TreeContinuation />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[420px] w-[650px] -translate-x-1/2 -translate-y-1/2 bg-[#3f7950]/10 blur-[80px]" />

      <motion.div
        className="absolute left-[22%] top-[9%] z-[1] h-[7px] w-[75px] bg-[#6d9b78]/10 pointer-events-none"
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[27%] top-[17%] z-[1] h-[5px] w-[52px] bg-[#6d9b78]/10 pointer-events-none"
        animate={{ x: [10, -10, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Fireflies />
      <HangingVines />

      <motion.div
        className="absolute left-[15%] top-[44%] z-[3] pointer-events-none"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.3, 1, 0.4, 1, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={15} className="text-[#a4c778]" strokeWidth={2} />
      </motion.div>

      <motion.div
        className="absolute right-[17%] top-[51%] z-[3] pointer-events-none"
        animate={{ rotate: [360, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <Star size={14} className="text-[#9bbb70]" fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute left-[36%] top-[14%] z-[3] pointer-events-none"
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.25, 1, 0.25] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <CircleDot size={9} className="text-[#87ad69]" fill="currentColor" />
      </motion.div>

      {/* MAIN CONTENT */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="
          relative z-[10] mx-auto flex min-h-[85vh] w-full max-w-7xl
          flex-col justify-center px-5 py-14 sm:px-8 lg:px-12
        "
      >
        {/* Header */}
        <div className="mx-auto mb-7 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mx-auto mb-4 inline-flex items-center gap-2
              border-2 border-[#7ca76b] bg-[#173520]
              px-3 py-2 font-mono text-[9px] font-bold
              tracking-[0.18em] text-[#a6c58b]
              shadow-[3px_3px_0_#0b1c11]
            "
          >
            <span className="h-2 w-2 animate-pulse bg-[#8fbe6d]" />
            PORTFOLIO ZONA
          </motion.div>

          <h2
            className="
              font-pixel text-2xl leading-relaxed text-[#e4ebc8]
              drop-shadow-[4px_4px_0_#09160d] sm:text-3xl lg:text-4xl
            "
          >
            PORTFOLIO
            <span className="text-[#8fbd6b]"> SAYA</span>
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-xl font-sans text-xs leading-5
              text-[#a8bba0] sm:text-sm
            "
          >
            Kumpulan proyek, sertifikat, dan tech stack yang saya kembangkan
            selama perjalanan belajar.
          </p>
        </div>

        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} onChange={setActiveTab} />

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mx-auto w-full"
          >
            {/* TAB 1: PROYEK */}
            {activeTab === "projects" && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onDetail={setActiveProject}
                  />
                ))}
              </div>
            )}

            {/* TAB 2: SERTIFIKAT — hanya image */}
            {activeTab === "certificates" && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {itCertificates.map((cert) => (
                  <CertificateCard
                    key={cert.id}
                    cert={cert}
                    onClick={() => setActiveCert(cert)}
                  />
                ))}
              </div>
            )}

            {/* TAB 4: TECH STACK */}
            {activeTab === "techstack" && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {techStack.map((stack, index) => (
                  <TechStackCard
                    key={stack.category}
                    stack={stack}
                    index={index}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Modals */}
      {activeCert && (
        <CertificateModal
          cert={activeCert}
          onClose={() => setActiveCert(null)}
        />
      )}

      {activeProject && (
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
