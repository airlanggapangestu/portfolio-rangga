import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  FileText,
  TreePine,
  Sparkles,
  Leaf,
  ArrowDown,
  Heart,
  Star,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/* =========================================================
   PIXEL TREE BACKGROUND
   Batang ini sengaja mengikuti posisi TreeContinuation
   dari page LifeStory -> TechHarvest -> CampfireConnect.
========================================================= */

function ConnectedTrees() {
  return (
    <>
      {/* =====================================================
          LEFT TREE
      ====================================================== */}

      <div
        className="
          absolute
          left-[-85px]
          top-0
          h-[74%]
          w-[330px]
          pointer-events-none
          sm:left-[-35px]
          sm:w-[390px]
          lg:left-[0%]
          lg:w-[430px]
          z-[3]
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

        {/* Light bark */}
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

        {/* Dark bark */}
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

        {/* Bark pixels */}
        <div className="absolute left-[139px] top-[12%] h-7 w-4 bg-[#70482b]" />
        <div className="absolute left-[176px] top-[24%] h-8 w-4 bg-[#3e291c]" />
        <div className="absolute left-[150px] top-[37%] h-5 w-3 bg-[#815433]" />
        <div className="absolute left-[186px] top-[49%] h-10 w-3 bg-[#382419]" />
        <div className="absolute left-[139px] top-[64%] h-6 w-3 bg-[#70482b]" />
        <div className="absolute left-[179px] top-[78%] h-9 w-3 bg-[#3e291c]" />

        {/* Root extension */}
        <div
          className="
            absolute
            left-[119px]
            bottom-[-8px]
            h-[14px]
            w-[82px]
            bg-[#573621]
          "
        />

        <div
          className="
            absolute
            left-[102px]
            bottom-[-2px]
            h-[8px]
            w-[46px]
            bg-[#432b1c]
          "
        />

        {/* Small side branch */}
        <motion.div
          className="
            absolute
            left-[184px]
            top-[22%]
            h-[8px]
            w-[75px]
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
      </div>

      {/* =====================================================
          RIGHT TREE
      ====================================================== */}

      <div
        className="
          absolute
          right-[-90px]
          top-0
          h-[74%]
          w-[350px]
          pointer-events-none
          sm:right-[-45px]
          sm:w-[410px]
          lg:right-[0%]
          lg:w-[450px]
          z-[3]
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

        {/* Light bark */}
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

        {/* Dark bark */}
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

        {/* Bark pixels */}
        <div className="absolute right-[180px] top-[12%] h-7 w-4 bg-[#70482b]" />
        <div className="absolute right-[142px] top-[24%] h-8 w-4 bg-[#3e291c]" />
        <div className="absolute right-[170px] top-[37%] h-5 w-3 bg-[#815433]" />
        <div className="absolute right-[136px] top-[50%] h-10 w-3 bg-[#382419]" />
        <div className="absolute right-[178px] top-[65%] h-6 w-3 bg-[#70482b]" />
        <div className="absolute right-[142px] top-[79%] h-9 w-3 bg-[#3e291c]" />

        {/* Root extension */}
        <div
          className="
            absolute
            right-[117px]
            bottom-[-8px]
            h-[14px]
            w-[82px]
            bg-[#573621]
          "
        />

        <div
          className="
            absolute
            right-[100px]
            bottom-[-2px]
            h-[8px]
            w-[46px]
            bg-[#432b1c]
          "
        />

        {/* Small branch */}
        <motion.div
          className="
            absolute
            right-[184px]
            top-[23%]
            h-[8px]
            w-[75px]
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
      </div>
    </>
  );
}

/* =========================================================
   BACKGROUND TREES
========================================================= */

function BackgroundTree({ className = "", scale = 1, flip = false }) {
  return (
    <motion.div
      className={`absolute bottom-[25%] pointer-events-none ${className}`}
      style={{
        transform: `${flip ? "scaleX(-1)" : ""} scale(${scale})`,
        transformOrigin: "bottom center",
      }}
      animate={{
        y: [0, -2, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="h-5 w-10 bg-[#244d2d]" />
        <div className="h-6 w-16 bg-[#285b33]" />
        <div className="h-7 w-24 bg-[#2c6538]" />
        <div className="h-6 w-28 bg-[#2b6035]" />
        <div className="h-6 w-20 bg-[#24532e]" />
        <div className="h-14 w-7 bg-[#49301f]" />
      </div>
    </motion.div>
  );
}

/* =========================================================
   FIRE PARTICLES
========================================================= */

function Fireflies() {
  const flies = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        left: 5 + Math.random() * 90,
        top: 15 + Math.random() * 58,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 3 + Math.random() * 4,
        index,
      })),
    [],
  );

  return (
    <>
      {flies.map((fly) => (
        <motion.div
          key={fly.index}
          className="absolute z-[8] pointer-events-none"
          style={{
            left: `${fly.left}%`,
            top: `${fly.top}%`,
            width: fly.size,
            height: fly.size,
          }}
          animate={{
            opacity: [0, 1, 0.25, 1, 0],
            x: [0, 18, -12, 10, 0],
            y: [0, -12, 8, -5, 0],
            scale: [0.7, 1.2, 0.8, 1.15, 0.7],
          }}
          transition={{
            duration: fly.duration,
            delay: fly.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-full w-full bg-[#d8ef88] shadow-[0_0_10px_3px_rgba(216,239,136,0.4)]" />
        </motion.div>
      ))}
    </>
  );
}

/* =========================================================
   FLOATING LEAVES
========================================================= */

function FloatingLeaves() {
  const leaves = [
    ["10%", "25%", -20, 5],
    ["18%", "52%", 35, 6],
    ["78%", "20%", 20, 5.5],
    ["88%", "46%", -35, 6.5],
    ["65%", "66%", 15, 5],
    ["32%", "18%", -10, 6],
  ];

  return (
    <>
      {leaves.map(([left, top, rotation, duration], index) => (
        <motion.div
          key={index}
          className="absolute z-[7] pointer-events-none"
          style={{
            left,
            top,
          }}
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -10, 8, 0],
            rotate: [rotation, rotation + 18, rotation - 12, rotation],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut",
          }}
        >
          <Leaf
            size={14 + (index % 2) * 4}
            strokeWidth={2.5}
            className="text-[#6e9d55]"
          />
        </motion.div>
      ))}
    </>
  );
}

/* =========================================================
   PIXEL FLOWER
========================================================= */

function PixelFlower({ className = "", petal = "#d97878" }) {
  return (
    <motion.div
      className={`absolute bottom-[24%] z-[9] pointer-events-none ${className}`}
      animate={{
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative">
        <div
          className="absolute left-[4px] top-0 h-3 w-3"
          style={{ background: petal }}
        />
        <div
          className="absolute left-0 top-[4px] h-3 w-3"
          style={{ background: petal }}
        />
        <div
          className="absolute left-[8px] top-[4px] h-3 w-3"
          style={{ background: petal }}
        />
        <div
          className="absolute left-[4px] top-[8px] h-3 w-3"
          style={{ background: petal }}
        />
        <div className="absolute left-[4px] top-[4px] h-3 w-3 bg-[#f5c94a]" />
        <div className="ml-[6px] mt-[15px] h-8 w-1 bg-[#397044]" />
      </div>
    </motion.div>
  );
}

/* =========================================================
   PIXEL MUSHROOM
========================================================= */

function PixelMushroom({ className = "", scale = 1 }) {
  return (
    <motion.div
      className={`absolute bottom-[23%] z-[8] pointer-events-none ${className}`}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "bottom center",
      }}
      animate={{
        y: [0, -2, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative">
        <div className="h-3 w-8 bg-[#a94b49]" />
        <div className="relative h-4 w-12 bg-[#bc5550]">
          <div className="absolute left-2 top-1 h-2 w-2 bg-[#e7dcb8]" />
          <div className="absolute right-2 top-1 h-2 w-2 bg-[#e7dcb8]" />
        </div>

        <div className="mx-auto h-6 w-4 bg-[#d9c99b]" />
        <div className="mx-auto h-2 w-7 bg-[#d9c99b]" />
      </div>
    </motion.div>
  );
}

/* =========================================================
   PIXEL ROCK
========================================================= */

function PixelRock({ className = "", scale = 1 }) {
  return (
    <motion.div
      className={`absolute bottom-[18%] z-[8] pointer-events-none ${className}`}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "bottom center",
      }}
      animate={{
        y: [0, -1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="h-3 w-10 bg-[#51594f]" />
      <div className="h-4 w-14 bg-[#626a5e]" />
      <div className="h-2 w-10 bg-[#3d453c]" />
    </motion.div>
  );
}

/* =========================================================
   GRASS TUFT
========================================================= */

function GrassTuft({ className = "" }) {
  return (
    <motion.div
      className={`absolute bottom-[20%] z-[9] pointer-events-none ${className}`}
      animate={{
        rotate: [-4, 4, -4],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-end gap-[3px]">
        <div className="h-4 w-[3px] bg-[#467846]" />
        <div className="h-7 w-[3px] bg-[#558c4c]" />
        <div className="h-5 w-[3px] bg-[#3d6e40]" />
        <div className="h-8 w-[3px] bg-[#5d964f]" />
        <div className="h-4 w-[3px] bg-[#467846]" />
      </div>
    </motion.div>
  );
}

/* =========================================================
   PIXEL CAMPFIRE
========================================================= */

function PixelCampfire() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Smoke */}
      <motion.div
        className="
          absolute
          -top-[92px]
          left-1/2
          -translate-x-1/2
          pointer-events-none
        "
        animate={{
          y: [0, -12, -24],
          x: [0, 7, -5],
          opacity: [0.15, 0.08, 0],
          scale: [0.8, 1, 1.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
        }}
      >
        <div className="h-7 w-7 bg-[#718176]/30" />
        <div className="mx-auto h-5 w-5 bg-[#718176]/20" />
      </motion.div>

      {/* Fire glow */}
      <motion.div
        className="
          absolute
          -inset-10
          bg-[#e68b35]/10
          blur-2xl
          pointer-events-none
        "
        animate={{
          opacity: [0.4, 0.8, 0.45],
          scale: [0.9, 1.08, 0.95],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Flame */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        animate={{
          scaleY: [1, 1.08, 0.94, 1.05, 1],
          scaleX: [1, 0.94, 1.06, 0.98, 1],
        }}
        transition={{
          duration: 1.1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Outer flame */}
        <div className="relative h-[74px] w-[56px]">
          <div className="absolute left-[18px] top-0 h-6 w-5 bg-[#e5a43b]" />

          <div className="absolute left-[9px] top-5 h-8 w-10 bg-[#e98232]" />

          <div className="absolute left-0 top-10 h-7 w-[56px] bg-[#e98232]" />

          {/* Inner flame */}
          <div className="absolute left-[17px] top-8 h-7 w-6 bg-[#ffd76a]" />

          <div className="absolute left-[11px] top-13 h-5 w-[34px] bg-[#ffd76a]" />
        </div>
      </motion.div>

      {/* Logs */}
      <div className="relative -mt-1 flex h-8 w-[92px] items-center justify-center">
        <div
          className="
            absolute
            h-[13px]
            w-[72px]
            rotate-[15deg]
            bg-[#633a22]
            border-y-[3px]
            border-[#432718]
          "
        />

        <div
          className="
            absolute
            h-[13px]
            w-[72px]
            rotate-[-15deg]
            bg-[#754426]
            border-y-[3px]
            border-[#432718]
          "
        />

        <div className="absolute left-[13px] h-3 w-3 bg-[#a86232]" />
        <div className="absolute right-[13px] h-3 w-3 bg-[#a86232]" />
      </div>

      {/* Stones */}
      <div className="mt-1 flex gap-2">
        <div className="h-4 w-7 bg-[#4f574d]" />
        <div className="h-5 w-8 bg-[#626a5c]" />
        <div className="h-4 w-7 bg-[#4f574d]" />
        <div className="h-5 w-8 bg-[#626a5c]" />
        <div className="h-4 w-7 bg-[#4f574d]" />
      </div>
    </div>
  );
}

/* =========================================================
   GROUND
========================================================= */

function FinalGround() {
  return (
    <>
      {/* Grass top */}
      <div
        className="
          absolute
          bottom-[15%]
          left-0
          z-[12]
          h-[13%]
          w-full
          bg-[#315d37]
        "
      />

      {/* Grass highlight */}
      <div
        className="
          absolute
          bottom-[26%]
          left-0
          z-[13]
          h-[8px]
          w-full
          bg-[#4d8046]
        "
      />

      {/* Pixel grass edge */}
      <div
        className="
          absolute
          bottom-[25.2%]
          left-0
          z-[14]
          h-[9px]
          w-full
          bg-[#6b9853]
        "
      />

      {/* Soil */}
      <div
        className="
          absolute
          bottom-0
          left-0
          z-[11]
          h-[26%]
          w-full
          bg-[#493522]
        "
      />

      {/* Soil upper layer */}
      <div
        className="
          absolute
          bottom-[24%]
          left-0
          z-[12]
          h-[10px]
          w-full
          bg-[#62452b]
        "
      />

      {/* Soil pixel texture */}
      <div className="absolute bottom-[13%] left-[7%] z-[13] h-3 w-8 bg-[#3a2a1d]" />
      <div className="absolute bottom-[8%] left-[19%] z-[13] h-2 w-5 bg-[#5c4127]" />
      <div className="absolute bottom-[17%] left-[34%] z-[13] h-3 w-5 bg-[#38281c]" />
      <div className="absolute bottom-[7%] left-[48%] z-[13] h-2 w-9 bg-[#60452c]" />
      <div className="absolute bottom-[15%] right-[30%] z-[13] h-3 w-7 bg-[#38281c]" />
      <div className="absolute bottom-[9%] right-[12%] z-[13] h-2 w-6 bg-[#60452c]" />
      <div className="absolute bottom-[19%] right-[5%] z-[13] h-3 w-4 bg-[#39291d]" />

      {/* Small stones on ground */}
      <div className="absolute bottom-[18%] left-[11%] z-[15] h-4 w-8 bg-[#62695c]" />
      <div className="absolute bottom-[13%] left-[12%] z-[15] h-2 w-5 bg-[#454c44]" />

      <div className="absolute bottom-[20%] right-[11%] z-[15] h-5 w-10 bg-[#596158]" />
      <div className="absolute bottom-[15%] right-[12%] z-[15] h-2 w-6 bg-[#414840]" />

      {/* Soil grass pixels */}
      <div className="absolute bottom-[22%] left-[4%] z-[15] h-4 w-[3px] bg-[#4c7e43]" />
      <div className="absolute bottom-[23%] left-[5%] z-[15] h-6 w-[3px] bg-[#5c914d]" />

      <div className="absolute bottom-[22%] right-[4%] z-[15] h-5 w-[3px] bg-[#4c7e43]" />
      <div className="absolute bottom-[22%] right-[5%] z-[15] h-7 w-[3px] bg-[#5c914d]" />
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
      className="
        relative
        min-h-[100vh]
        w-full
        overflow-hidden
        text-white
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            #102d1d 0%,
            #12351f 22%,
            #153c23 45%,
            #183f25 65%,
            #315d37 100%
          )
        `,
      }}
    >
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-[35%]
          z-[1]
          h-[450px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          bg-[#80a95e]/10
          blur-[100px]
          pointer-events-none
        "
      />

      {/* Background trees */}
      <BackgroundTree className="left-[5%]" scale={0.65} />

      <BackgroundTree className="left-[18%]" scale={0.45} flip />

      <BackgroundTree className="right-[5%]" scale={0.65} flip />

      <BackgroundTree className="right-[18%]" scale={0.45} />

      {/* =====================================================
          CONNECTED TREES
      ====================================================== */}

      <ConnectedTrees />

      {/* =====================================================
          AMBIENT PARTICLES
      ====================================================== */}

      <Fireflies />
      <FloatingLeaves />

      {/* Sparkles */}
      <motion.div
        className="absolute left-[21%] top-[25%] z-[7] pointer-events-none"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.2, 1, 0.3, 1, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Sparkles size={17} className="text-[#9fc36c]" />
      </motion.div>

      <motion.div
        className="absolute right-[21%] top-[34%] z-[7] pointer-events-none"
        animate={{
          scale: [0.8, 1.25, 0.8],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star size={13} fill="currentColor" className="text-[#b1c96f]" />
      </motion.div>

      {/* =====================================================
          SMALL ENVIRONMENT DECORATIONS
      ====================================================== */}

      <PixelFlower className="left-[8%]" petal="#d46c72" />

      <PixelFlower className="left-[27%]" petal="#c89b4a" />

      <PixelFlower className="right-[8%]" petal="#d47891" />

      <PixelFlower className="right-[27%]" petal="#9c8bd1" />

      <PixelMushroom className="left-[15%]" scale={0.75} />

      <PixelMushroom className="right-[15%]" scale={0.8} />

      <PixelRock className="left-[21%]" scale={0.7} />

      <PixelRock className="right-[21%]" scale={0.7} />

      <GrassTuft className="left-[14%]" />
      <GrassTuft className="left-[31%]" />
      <GrassTuft className="right-[14%]" />
      <GrassTuft className="right-[31%]" />

      {/* =====================================================
          FINAL GROUND
      ====================================================== */}

      <FinalGround />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-[30]
          mx-auto
          flex
          min-h-[100vh]
          max-w-5xl
          flex-col
          items-center
          justify-center
          px-5
          pb-[25vh]
          pt-20
          text-center
          sm:px-8
        "
      >
        {/* Journey complete badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-6
            flex
            items-center
            gap-2
            border-2
            border-[#71945b]
            bg-[#173520]/90
            px-4
            py-2
            font-mono
            text-[8px]
            font-bold
            tracking-[0.18em]
            text-[#a7c788]
            shadow-[4px_4px_0_#0b1a10]
            backdrop-blur-sm
            sm:text-[9px]
          "
        >
          <span className="h-2 w-2 animate-pulse bg-[#a5ca6d]" />
          JOURNEY_COMPLETE
          <span className="text-[#526e4b]">•</span>
          AREA_05
        </motion.div>

        {/* Campfire */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-7"
        >
          <PixelCampfire />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="max-w-2xl"
        >
          <div
            className="
              mb-3
              font-mono
              text-[8px]
              font-bold
              tracking-[0.22em]
              text-[#9bb77c]
              sm:text-[10px]
            "
          >
            THE FINAL CAMPFIRE
          </div>

          <h2
            className="
              font-pixel
              text-2xl
              leading-relaxed
              text-[#f1e8c8]
              drop-shadow-[4px_4px_0_#17251a]
              sm:text-3xl
              md:text-4xl
            "
          >
            CAMPFIRE
            <span className="text-[#e4a34b]"> & CONNECT</span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              px-3
              font-sans
              text-[11px]
              leading-5
              text-[#b5c4aa]
              sm:text-xs
              md:text-sm
              md:leading-6
            "
          >
            Terima kasih sudah sampai di akhir perjalanan. Jika kamu tertarik
            untuk berdiskusi tentang project, kolaborasi, teknologi, atau
            sekadar ingin menyapa, kamu bisa menemukan saya melalui beberapa
            jalur di bawah.
          </p>
        </motion.div>

        {/* =====================================================
            CONTACT BUTTONS
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="
            mt-7
            flex
            max-w-2xl
            flex-wrap
            justify-center
            gap-3
          "
        >
          {/* GitHub */}
          <motion.a
            href="https://github.com/airlanggapangestu"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -5,
              scale: 1.04,
            }}
            whileTap={{
              y: 2,
              scale: 0.98,
            }}
            className="
              group
              flex
              items-center
              gap-2
              border-[3px]
              border-[#1e281f]
              bg-[#d9dec8]
              px-4
              py-3
              font-pixel
              text-[9px]
              text-[#20271f]
              shadow-[5px_5px_0_#0e160f]
              transition-colors
              hover:bg-[#edf0dd]
            "
          >
            <FaGithub
              size={16}
              className="transition-transform group-hover:rotate-12"
            />
            GITHUB
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -5,
              scale: 1.04,
            }}
            whileTap={{
              y: 2,
              scale: 0.98,
            }}
            className="
              group
              flex
              items-center
              gap-2
              border-[3px]
              border-[#17251e]
              bg-[#719b72]
              px-4
              py-3
              font-pixel
              text-[9px]
              text-[#102016]
              shadow-[5px_5px_0_#0e160f]
              transition-colors
              hover:bg-[#83ad82]
            "
          >
            <FaLinkedin
              size={16}
              className="transition-transform group-hover:scale-110"
            />
            LINKEDIN
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:email@contoh.com"
            whileHover={{
              y: -5,
              scale: 1.04,
            }}
            whileTap={{
              y: 2,
              scale: 0.98,
            }}
            className="
              group
              flex
              items-center
              gap-2
              border-[3px]
              border-[#17251e]
              bg-[#b89b72]
              px-4
              py-3
              font-pixel
              text-[9px]
              text-[#211b15]
              shadow-[5px_5px_0_#0e160f]
              transition-colors
              hover:bg-[#c8ac82]
            "
          >
            <Mail
              size={16}
              strokeWidth={3}
              className="transition-transform group-hover:-rotate-12"
            />
            EMAIL
          </motion.a>

          {/* CV */}
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{
              y: -5,
              scale: 1.04,
            }}
            whileTap={{
              y: 2,
              scale: 0.98,
            }}
            className="
              group
              flex
              items-center
              gap-2
              border-[3px]
              border-[#17251e]
              bg-[#e0ad55]
              px-4
              py-3
              font-pixel
              text-[9px]
              text-[#251b10]
              shadow-[5px_5px_0_#0e160f]
              transition-colors
              hover:bg-[#efc06b]
            "
          >
            <FileText
              size={16}
              strokeWidth={3}
              className="transition-transform group-hover:translate-y-[-2px]"
            />
            CV PDF
          </motion.a>
        </motion.div>

        {/* =====================================================
            FINAL MESSAGE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.55,
          }}
          className="
            mt-8
            flex
            flex-col
            items-center
            gap-3
            font-mono
            text-[8px]
            uppercase
            tracking-[0.16em]
            text-[#71856d]
          "
        >
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#456247]" />

            <div className="flex items-center gap-2">
              <TreePine size={11} />
              <span>THANKS FOR VISITING</span>
              <Heart size={10} fill="currentColor" className="text-[#a87575]" />
            </div>

            <div className="h-[2px] w-8 bg-[#456247]" />
          </div>

          <p className="text-[7px] text-[#647762] sm:text-[8px]">
            © {new Date().getFullYear()} RANGGA • BUILT WITH REACT & TAILWIND
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM PIXEL DETAILS
      ====================================================== */}

      <div className="absolute bottom-[7%] left-[37%] z-[18] hidden sm:block">
        <motion.div
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex gap-2"
        >
          <div className="h-3 w-3 bg-[#4d5b4b]" />
          <div className="h-5 w-5 bg-[#5e675b]" />
          <div className="h-3 w-3 bg-[#3e483d]" />
        </motion.div>
      </div>

      <div className="absolute bottom-[9%] right-[37%] z-[18] hidden sm:block">
        <motion.div
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
          }}
          className="flex gap-2"
        >
          <div className="h-3 w-3 bg-[#4d5b4b]" />
          <div className="h-5 w-5 bg-[#5e675b]" />
          <div className="h-3 w-3 bg-[#3e483d]" />
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        className="
          absolute
          bottom-[28%]
          left-1/2
          z-[40]
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          font-mono
          text-[7px]
          tracking-[0.2em]
          text-[#71866e]
          sm:flex
        "
        animate={{
          y: [0, 5, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>REST AREA</span>
        <ArrowDown size={12} />
      </motion.div>
    </section>
  );
}
