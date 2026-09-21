import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Layout,
  ExternalLink,
  Store,
  Sparkles,
  CircleDot,
  Leaf,
  Sprout,
  Gem,
  Star,
  ChessKnight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "v3q7cn",
    title: "APLIKASI KOPERASI DESA",
    tech: "React • Tailwind",
    desc: "Sistem informasi untuk mengelola anggota dan transaksi koperasi",
    Icon: Store,
    hex: "#34D399",
    tags: ["FRONTEND", "UI/UX"],
    image: "/view/view-kopdes.png",
    githubUrl: "https://github.com/airlanggapangestu/kopdes",
    demoUrl: "https://kopdes-pi.vercel.app/",
  },
  {
    id: "tugasku",
    title: "APLIKASI TO-DO LIST",
    tech: "React • Tailwind • PHP • MySQL",
    desc: "Aplikasi untuk mencatat, mengatur, dan memantau berbagai tugas.",
    Icon: Layout,
    hex: "#FBBF24",
    tags: ["Full Stack", "UI/UX"],
    image: "/view/view-tugasku.png",
    githubUrl: "https://github.com/airlanggapangestu/TugasKu",
    demoUrl: "#",
  },
  {
    id: "chess",
    title: "APLIKASI CATUR",
    tech: "React • Tailwind • Stockfish",
    desc: "Aplikasi catur modern dengan engine analysis, tactical puzzle, dan local multiplayer.",
    Icon: ChessKnight,
    hex: "#A78BFA",
    tags: ["Full Stack", "UI/UX"],
    image: "/view/view-catur.png",
    githubUrl: "https://github.com/airlanggapangestu/Chess-Mate",
    demoUrl: "https://chess-mate-taupe.vercel.app/",
  },
];

/* =========================================================
   TREE CONTINUATION
   Posisi dibuat mengikuti LifeStory.
   Batang dimulai dari TOP section dan memanjang sampai BOTTOM.
========================================================= */

function TreeContinuation() {
  return (
    <>
      {/* ================= LEFT TREE ================= */}
      <div
        className="
          absolute
          left-[-85px]
          top-0
          h-full
          w-[330px]
          pointer-events-none
          sm:left-[-35px]
          sm:w-[390px]
          lg:left-[0%]
          lg:w-[430px]
        "
      >
        {/* Main trunk */}
        <div
          className="
            absolute
            left-[137px]
            top-0
            h-full
            w-[62px]
            bg-[#573621]
          "
        />

        {/* Light side */}
        <div
          className="
            absolute
            left-[151px]
            top-0
            h-full
            w-[19px]
            bg-[#70482b]
          "
        />

        {/* Dark side */}
        <div
          className="
            absolute
            left-[185px]
            top-0
            h-full
            w-[9px]
            bg-[#432b1c]
          "
        />

        {/* Bark texture */}
        <div className="absolute left-[139px] top-[12%] h-7 w-4 bg-[#70482b]" />
        <div className="absolute left-[176px] top-[22%] h-8 w-4 bg-[#3e291c]" />
        <div className="absolute left-[150px] top-[31%] h-5 w-3 bg-[#815433]" />
        <div className="absolute left-[186px] top-[42%] h-10 w-3 bg-[#382419]" />
        <div className="absolute left-[139px] top-[57%] h-6 w-3 bg-[#70482b]" />
        <div className="absolute left-[179px] top-[70%] h-9 w-3 bg-[#3e291c]" />
        <div className="absolute left-[148px] top-[82%] h-5 w-4 bg-[#70482b]" />

        {/* Little branch sticking inward */}
        <motion.div
          className="
            absolute
            left-[184px]
            top-[17%]
            h-[9px]
            w-[78px]
            origin-left
            bg-[#573621]
          "
          animate={{
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Leaves on branch */}
        <motion.div
          className="absolute left-[250px] top-[14%]"
          animate={{
            rotate: [-5, 5, -5],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Leaf size={25} strokeWidth={3} className="text-[#3f8f4e]" />
        </motion.div>
      </div>

      {/* ================= RIGHT TREE ================= */}
      <div
        className="
          absolute
          right-[-90px]
          top-0
          h-full
          w-[350px]
          pointer-events-none
          sm:right-[-45px]
          sm:w-[410px]
          lg:right-[0%]
          lg:w-[450px]
        "
      >
        {/* Main trunk */}
        <div
          className="
            absolute
            right-[135px]
            top-0
            h-full
            w-[64px]
            bg-[#573621]
          "
        />

        {/* Light side */}
        <div
          className="
            absolute
            right-[157px]
            top-0
            h-full
            w-[19px]
            bg-[#70482b]
          "
        />

        {/* Dark side */}
        <div
          className="
            absolute
            right-[134px]
            top-0
            h-full
            w-[9px]
            bg-[#432b1c]
          "
        />

        {/* Bark texture */}
        <div className="absolute right-[180px] top-[12%] h-7 w-4 bg-[#70482b]" />
        <div className="absolute right-[142px] top-[22%] h-8 w-4 bg-[#3e291c]" />
        <div className="absolute right-[170px] top-[32%] h-5 w-3 bg-[#815433]" />
        <div className="absolute right-[136px] top-[43%] h-10 w-3 bg-[#382419]" />
        <div className="absolute right-[178px] top-[58%] h-6 w-3 bg-[#70482b]" />
        <div className="absolute right-[142px] top-[71%] h-9 w-3 bg-[#3e291c]" />
        <div className="absolute right-[169px] top-[84%] h-5 w-4 bg-[#70482b]" />

        {/* Little branch */}
        <motion.div
          className="
            absolute
            right-[184px]
            top-[19%]
            h-[9px]
            w-[78px]
            origin-right
            bg-[#573621]
          "
          animate={{
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[250px] top-[16%]"
          animate={{
            rotate: [5, -5, 5],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Leaf size={25} strokeWidth={3} className="text-[#4a9b57]" />
        </motion.div>
      </div>
    </>
  );
}

/* =========================================================
   FLOATING LEAVES
========================================================= */

function FloatingLeaves() {
  const leaves = [
    {
      left: "8%",
      top: "18%",
      rotate: -25,
      duration: 5,
      delay: 0,
      size: 17,
    },
    {
      left: "18%",
      top: "62%",
      rotate: 35,
      duration: 6,
      delay: 1,
      size: 13,
    },
    {
      left: "72%",
      top: "26%",
      rotate: 20,
      duration: 5.5,
      delay: 0.8,
      size: 15,
    },
    {
      left: "83%",
      top: "68%",
      rotate: -35,
      duration: 6.5,
      delay: 1.4,
      size: 18,
    },
    {
      left: "58%",
      top: "80%",
      rotate: 15,
      duration: 5,
      delay: 0.5,
      size: 12,
    },
  ];

  return (
    <>
      {leaves.map((leaf, index) => (
        <motion.div
          key={index}
          className="absolute z-[3] pointer-events-none"
          style={{
            left: leaf.left,
            top: leaf.top,
          }}
          animate={{
            x: [0, 12, -7, 0],
            y: [0, -8, 7, 0],
            rotate: [
              leaf.rotate,
              leaf.rotate + 15,
              leaf.rotate - 10,
              leaf.rotate,
            ],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Leaf size={leaf.size} strokeWidth={2.5} className="text-[#6eae5a]" />
        </motion.div>
      ))}
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
          style={{
            left: `${left}%`,
            top: `${top}%`,
          }}
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
        className="
          absolute
          left-[11%]
          top-0
          z-[2]
          h-[110px]
          w-[3px]
          bg-[#376f3e]
          origin-top
          pointer-events-none
        "
        animate={{
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute -bottom-2 -left-[5px] h-3 w-3 bg-[#4f994f]" />
      </motion.div>

      <motion.div
        className="
          absolute
          right-[13%]
          top-0
          z-[2]
          h-[135px]
          w-[3px]
          bg-[#376f3e]
          origin-top
          pointer-events-none
        "
        animate={{
          rotate: [3, -3, 3],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute -bottom-2 -left-[5px] h-3 w-3 bg-[#4f994f]" />
      </motion.div>

      <motion.div
        className="
          absolute
          left-[29%]
          top-0
          z-[2]
          h-[75px]
          w-[2px]
          bg-[#315f38]
          origin-top
          pointer-events-none
        "
        animate={{
          rotate: [-4, 4, -4],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

/* =========================================================
   DECORATION PIXEL
========================================================= */

function PixelDecorations() {
  return (
    <>
      {/* Left crystal */}
      <motion.div
        className="absolute left-[25%] bottom-[8%] z-[3] pointer-events-none"
        animate={{
          y: [0, -4, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Gem size={22} className="text-[#5c9c70]" strokeWidth={2.5} />
      </motion.div>

      {/* Right crystal */}
      <motion.div
        className="absolute right-[25%] bottom-[13%] z-[3] pointer-events-none"
        animate={{
          y: [0, -5, 0],
          rotate: [2, -2, 2],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Gem size={18} className="text-[#73a66d]" strokeWidth={2.5} />
      </motion.div>

      {/* Small sprouts */}
      <motion.div
        className="absolute left-[7%] bottom-[7%] z-[3] pointer-events-none"
        animate={{
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sprout size={24} className="text-[#4d914f]" />
      </motion.div>

      <motion.div
        className="absolute right-[7%] bottom-[6%] z-[3] pointer-events-none"
        animate={{
          rotate: [3, -3, 3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sprout size={24} className="text-[#4d914f]" />
      </motion.div>

      {/* Pixel grass decoration */}
      <div className="absolute left-[32%] bottom-[4%] z-[2] pointer-events-none">
        <div className="flex items-end gap-[3px]">
          <div className="h-3 w-[3px] bg-[#4f8549]" />
          <div className="h-5 w-[3px] bg-[#5c984f]" />
          <div className="h-2 w-[3px] bg-[#477a43]" />
          <div className="h-4 w-[3px] bg-[#5c984f]" />
        </div>
      </div>

      <div className="absolute right-[32%] bottom-[5%] z-[2] pointer-events-none">
        <div className="flex items-end gap-[3px]">
          <div className="h-4 w-[3px] bg-[#5c984f]" />
          <div className="h-2 w-[3px] bg-[#477a43]" />
          <div className="h-5 w-[3px] bg-[#5c984f]" />
        </div>
      </div>
    </>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  const { Icon } = project;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        border-[3px]
        border-[#2a241b]
        bg-[#e9e0c5]
        shadow-[7px_7px_0_#1d1913]
      "
    >
      {/* Pixel top decoration */}
      <div
        className="absolute left-0 top-0 z-10 h-[5px] w-full"
        style={{
          backgroundColor: project.hex,
        }}
      />

      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden border-b-[3px] border-[#2a241b] bg-[#18291c]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            pixelated
            transition-transform
            duration-500
          "
          whileHover={{
            scale: 1.06,
          }}
        />

        {/* Dark overlay */}
        <div
          className="
            absolute
            inset-0
            bg-[#102016]/10
            transition-all
            duration-300
            group-hover:bg-transparent
          "
        />

        {/* Project number */}
        <div
          className="
            absolute
            left-3
            top-3
            border-2
            border-[#241e16]
            bg-[#efe6c9]
            px-2
            py-1
            font-pixel
            text-[9px]
            text-[#241e16]
            shadow-[3px_3px_0_#241e16]
          "
        >
          PROYEK_{String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <div
                className="border-2 border-[#2a241b] p-1"
                style={{
                  backgroundColor: project.hex,
                }}
              >
                <Icon size={15} strokeWidth={3} className="text-[#172018]" />
              </div>

              <span className="font-mono text-[10px] font-bold uppercase text-[#6b6251]">
                {project.tech}
              </span>
            </div>

            <h3 className="font-pixel text-[13px] leading-relaxed text-[#252018] sm:text-[15px]">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="mb-4 font-sans text-xs leading-5 text-[#5b5548]">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                border-2
                border-[#746b5a]
                bg-[#d8ceb0]
                px-2
                py-1
                font-mono
                text-[9px]
                font-bold
                uppercase
                text-[#514a3e]
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              border-2
              border-[#272219]
              bg-[#29251e]
              px-3
              py-2
              font-pixel
              text-[9px]
              text-[#f0e7cb]
              shadow-[3px_3px_0_#14110d]
              transition-all
              hover:-translate-y-[2px]
              hover:shadow-[4px_5px_0_#14110d]
              active:translate-x-[2px]
              active:translate-y-[2px]
              active:shadow-none
            "
          >
            <FaGithub size={14} />
            GITHUB
          </a>

          {project.demoUrl !== "#" && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                border-2
                border-[#272219]
                bg-[#6a9d58]
                px-3
                py-2
                font-pixel
                text-[9px]
                text-[#172018]
                shadow-[3px_3px_0_#263d24]
                transition-all
                hover:-translate-y-[2px]
                hover:bg-[#7cad68]
                active:translate-x-[2px]
                active:translate-y-[2px]
                active:shadow-none
              "
            >
              <ExternalLink size={13} strokeWidth={3} />
              LIVE
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TechHarvest() {
  const sectionRef = useRef(null);

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
      className="
        relative
        min-h-[85vh]
        w-full
        overflow-hidden
        border-none
      "
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
      {/* =====================================================
          TREE CONTINUATION
      ====================================================== */}
      <TreeContinuation />

      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      {/* Dark forest glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-[1]
          h-[420px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          bg-[#3f7950]/10
          blur-[80px]
        "
      />

      {/* Pixel clouds / fog */}
      <motion.div
        className="
          absolute
          left-[22%]
          top-[9%]
          z-[1]
          h-[7px]
          w-[75px]
          bg-[#6d9b78]/10
          pointer-events-none
        "
        animate={{
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          right-[27%]
          top-[17%]
          z-[1]
          h-[5px]
          w-[52px]
          bg-[#6d9b78]/10
          pointer-events-none
        "
        animate={{
          x: [10, -10, 10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <FloatingLeaves />
      <Fireflies />
      <HangingVines />
      <PixelDecorations />

      {/* =====================================================
          DECORATIVE STARS / SPARKLES
      ====================================================== */}

      <motion.div
        className="absolute left-[15%] top-[44%] z-[3] pointer-events-none"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.3, 1, 0.4, 1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Sparkles size={15} className="text-[#a4c778]" strokeWidth={2} />
      </motion.div>

      <motion.div
        className="absolute right-[17%] top-[51%] z-[3] pointer-events-none"
        animate={{
          rotate: [360, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Star size={14} className="text-[#9bbb70]" fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute left-[36%] top-[14%] z-[3] pointer-events-none"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.25, 1, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <CircleDot size={9} className="text-[#87ad69]" fill="currentColor" />
      </motion.div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="
          relative
          z-[10]
          mx-auto
          flex
          min-h-[85vh]
          w-full
          max-w-6xl
          flex-col
          justify-center
          px-5
          py-10
          sm:px-8
          lg:px-12
        "
      >
        {/* Header */}
        <div className="mx-auto mb-7 max-w-3xl text-center">
          {/* HUD label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mx-auto
              mb-4
              inline-flex
              items-center
              gap-2
              border-2
              border-[#7ca76b]
              bg-[#173520]
              px-3
              py-2
              font-mono
              text-[9px]
              font-bold
              tracking-[0.18em]
              text-[#a6c58b]
              shadow-[3px_3px_0_#0b1c11]
            "
          >
            <span className="h-2 w-2 animate-pulse bg-[#8fbe6d]" />
            ZONA PROYEK
          </motion.div>

          <h2
            className="
              font-pixel
              text-2xl
              leading-relaxed
              text-[#e4ebc8]
              drop-shadow-[4px_4px_0_#09160d]
              sm:text-3xl
              lg:text-4xl
            "
          >
            HASIL PROYEK
            <span className="text-[#8fbd6b]"> SAYA</span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              font-sans
              text-xs
              leading-5
              text-[#a8bba0]
              sm:text-sm
            "
          >
            Kumpulan proyek yang saya kembangkan untuk menerapkan kemampuan
            dalam pengembangan web, desain, dan pemecahan masalah.
          </p>
        </div>

        {/* Project Grid */}
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-5xl
            grid-cols-1
            gap-6
            md:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom HUD */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="
            mx-auto
            mt-7
            flex
            items-center
            justify-center
            gap-3
            font-mono
            text-[8px]
            uppercase
            tracking-[0.18em]
            
          "
        >
          <span className="h-[2px] w-8 bg-[#3c6240]" />

          <span className="flex items-center gap-2">
            <CircleDot size={8} />
            PROYEK LAINNYA
          </span>

          <span className="h-[2px] w-8 bg-[#3c6240]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
