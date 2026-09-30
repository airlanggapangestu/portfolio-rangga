import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/* =========================================================
   PIXEL BIRD
========================================================= */

function PixelBird({ className = "" }) {
  return (
    <motion.div
      className={`absolute z-[7] pointer-events-none ${className}`}
      animate={{
        y: [0, -1, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative h-[32px] w-[46px] scale-[0.7] sm:scale-90 md:scale-100">
        {/* Tail */}
        <div className="absolute left-0 top-[15px] h-[6px] w-[12px] bg-[#42583e]" />
        <div className="absolute left-[1px] top-[20px] h-[4px] w-[7px] bg-[#30412f]" />

        {/* Body */}
        <div className="absolute left-[8px] top-[9px] h-[15px] w-[23px] bg-[#52694a]" />

        {/* Belly */}
        <div className="absolute left-[13px] top-[14px] h-[7px] w-[12px] bg-[#71845d]" />

        {/* Head */}
        <div className="absolute left-[26px] top-[3px] h-[16px] w-[16px] bg-[#52694a]" />

        {/* Head highlight */}
        <div className="absolute left-[27px] top-[3px] h-[5px] w-[10px] bg-[#6d8158]" />

        {/* Eye */}
        <div className="absolute left-[37px] top-[8px] h-[3px] w-[3px] bg-[#172019]" />

        {/* Beak */}
        <div className="absolute left-[40px] top-[11px] h-[4px] w-[7px] bg-[#d29a45]" />

        {/* Wing */}
        <div className="absolute left-[10px] top-[9px] h-[10px] w-[14px] bg-[#354936]" />
        <div className="absolute left-[13px] top-[12px] h-[5px] w-[8px] bg-[#455b40]" />

        {/* Feet */}
        <div className="absolute left-[14px] top-[23px] h-[6px] w-[2px] bg-[#a06f39]" />
        <div className="absolute left-[26px] top-[23px] h-[6px] w-[2px] bg-[#a06f39]" />

        {/* Toes */}
        <div className="absolute left-[11px] top-[27px] h-[2px] w-[8px] bg-[#a06f39]" />
        <div className="absolute left-[23px] top-[27px] h-[2px] w-[8px] bg-[#a06f39]" />
      </div>
    </motion.div>
  );
}

/* =========================================================
   PIXEL NEST
========================================================= */

function PixelNest({ className = "" }) {
  return (
    <motion.div
      className={`absolute z-[7] pointer-events-none ${className}`}
      animate={{
        y: [0, -1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative h-[25px] w-[40px] scale-[0.7] sm:scale-90 md:scale-100">
        {/* Outer nest */}
        <div className="absolute bottom-0 left-[2px] h-[7px] w-[36px] bg-[#43291a]" />
        <div className="absolute bottom-[6px] left-0 h-[6px] w-[40px] bg-[#6e4528]" />
        <div className="absolute bottom-[11px] left-[4px] h-[5px] w-[32px] bg-[#815331]" />

        {/* Inner hole */}
        <div className="absolute bottom-[12px] left-[8px] h-[5px] w-[24px] bg-[#362318]" />

        {/* Eggs */}
        <div className="absolute bottom-[11px] left-[11px] h-[7px] w-[6px] bg-[#e5d9af]" />
        <div className="absolute bottom-[11px] left-[20px] h-[7px] w-[6px] bg-[#d9cea4]" />

        {/* Egg highlights */}
        <div className="absolute bottom-[16px] left-[12px] h-[2px] w-[2px] bg-[#f6edcf]" />
        <div className="absolute bottom-[16px] left-[21px] h-[2px] w-[2px] bg-[#f6edcf]" />

        {/* Small twig */}
        <div className="absolute bottom-[3px] left-[-5px] h-[3px] w-[12px] rotate-[18deg] bg-[#54351f]" />
        <div className="absolute bottom-[3px] right-[-5px] h-[3px] w-[12px] rotate-[-18deg] bg-[#54351f]" />
      </div>
    </motion.div>
  );
}

/* =========================================================
   PIXEL BUTTERFLY
========================================================= */

function PixelButterfly({ className = "", petal = "#b997d3" }) {
  return (
    <motion.div
      className={`absolute z-[17] pointer-events-none ${className}`}
      animate={{
        x: [0, 10, -7, 5, 0],
        y: [0, -8, 3, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="relative h-[30px] w-[36px] scale-[0.65] sm:scale-90 md:scale-100"
        animate={{
          scaleX: [1, 0.72, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* LEFT WING */}
        <div
          className="absolute left-0 top-[3px] h-[10px] w-[11px]"
          style={{ background: petal }}
        />
        <div
          className="absolute left-[3px] top-0 h-[8px] w-[7px]"
          style={{ background: "#d2b5e2" }}
        />
        <div
          className="absolute left-[2px] top-[13px] h-[9px] w-[10px]"
          style={{ background: "#9574b4" }}
        />
        <div
          className="absolute left-[5px] top-[20px] h-[5px] w-[6px]"
          style={{ background: "#80609f" }}
        />

        {/* RIGHT WING */}
        <div
          className="absolute right-0 top-[3px] h-[10px] w-[11px]"
          style={{ background: petal }}
        />
        <div
          className="absolute right-[3px] top-0 h-[8px] w-[7px]"
          style={{ background: "#d2b5e2" }}
        />
        <div
          className="absolute right-[2px] top-[13px] h-[9px] w-[10px]"
          style={{ background: "#9574b4" }}
        />
        <div
          className="absolute right-[5px] top-[20px] h-[5px] w-[6px]"
          style={{ background: "#80609f" }}
        />

        {/* BODY */}
        <div className="absolute left-[15px] top-[6px] h-[16px] w-[6px] bg-[#413448]" />
        <div className="absolute left-[15px] top-[2px] h-[5px] w-[6px] bg-[#55425b]" />
        <div className="absolute left-[17px] top-[8px] h-[7px] w-[2px] bg-[#71566f]" />

        {/* ANTENNA */}
        <div className="absolute left-[13px] top-[1px] h-[6px] w-[1px] rotate-[-28deg] bg-[#55425b]" />
        <div className="absolute left-[21px] top-[1px] h-[6px] w-[1px] rotate-[28deg] bg-[#55425b]" />

        <div className="absolute left-[11px] top-0 h-[2px] w-[2px] bg-[#8b6e88]" />
        <div className="absolute left-[22px] top-0 h-[2px] w-[2px] bg-[#8b6e88]" />
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   CONNECTED TREES
   Container & breakpoint SAMA PERSIS dengan TechHarvest
   supaya batang pohon menyatu seamless dari atas ke bawah
   dan burung + sarang terlihat di semua ukuran layar.
========================================================= */

function ConnectedTrees() {
  return (
    <>
      {/* =====================================================
          LEFT TREE — identik dengan TechHarvest
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
        <div className="absolute left-[137px] top-0 h-full w-[62px] bg-[#573621]" />
        <div className="absolute left-[151px] top-0 h-full w-[19px] bg-[#70482b]" />
        <div className="absolute left-[185px] top-0 h-full w-[9px] bg-[#432b1c]" />

        <div className="absolute left-[139px] top-[12%] h-7 w-4 bg-[#70482b]" />
        <div className="absolute left-[176px] top-[24%] h-8 w-4 bg-[#3e291c]" />
        <div className="absolute left-[150px] top-[37%] h-5 w-3 bg-[#815433]" />
        <div className="absolute left-[186px] top-[49%] h-10 w-3 bg-[#382419]" />
        <div className="absolute left-[139px] top-[64%] h-6 w-3 bg-[#70482b]" />
        <div className="absolute left-[179px] top-[78%] h-9 w-3 bg-[#3e291c]" />

        <div className="absolute left-[119px] bottom-[-8px] h-[14px] w-[82px] bg-[#573621]" />
        <div className="absolute left-[102px] bottom-[-2px] h-[8px] w-[46px] bg-[#432b1c]" />

        <motion.div
          className="absolute left-[184px] top-[22%] h-[42px] w-[105px] origin-left"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute left-0 top-[17px] h-[8px] w-[75px] bg-[#573621]" />

          <div
            className="
              absolute
              left-[42px]
              top-[1px]
              h-[24px]
              w-[7px]
              rotate-[27deg]
              origin-bottom
              bg-[#573621]
            "
          />

          <div
            className="
              absolute
              left-[60px]
              top-0
              h-[5px]
              w-[25px]
              rotate-[-18deg]
              bg-[#573621]
            "
          />

          <PixelBird className="left-[42px] top-[-10px]" />
        </motion.div>
      </div>

      {/* =====================================================
          RIGHT TREE — identik dengan TechHarvest
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
        <div className="absolute right-[135px] top-0 h-full w-[64px] bg-[#573621]" />
        <div className="absolute right-[157px] top-0 h-full w-[19px] bg-[#70482b]" />
        <div className="absolute right-[134px] top-0 h-full w-[9px] bg-[#432b1c]" />

        <div className="absolute right-[180px] top-[12%] h-7 w-4 bg-[#70482b]" />
        <div className="absolute right-[142px] top-[24%] h-8 w-4 bg-[#3e291c]" />
        <div className="absolute right-[170px] top-[37%] h-5 w-3 bg-[#815433]" />
        <div className="absolute right-[136px] top-[50%] h-10 w-3 bg-[#382419]" />
        <div className="absolute right-[178px] top-[65%] h-6 w-3 bg-[#70482b]" />
        <div className="absolute right-[142px] top-[79%] h-9 w-3 bg-[#3e291c]" />

        <div className="absolute right-[117px] bottom-[-8px] h-[14px] w-[82px] bg-[#573621]" />
        <div className="absolute right-[100px] bottom-[-2px] h-[8px] w-[46px] bg-[#432b1c]" />

        <motion.div
          className="absolute right-[184px] top-[23%] h-[48px] w-[110px] origin-right"
          animate={{ rotate: [2, -2, 2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute right-0 top-[20px] h-[8px] w-[75px] bg-[#573621]" />

          <div
            className="
              absolute
              right-[42px]
              top-[2px]
              h-[26px]
              w-[7px]
              rotate-[-27deg]
              origin-bottom
              bg-[#573621]
            "
          />

          <div
            className="
              absolute
              right-[60px]
              top-0
              h-[5px]
              w-[25px]
              rotate-[18deg]
              bg-[#573621]
            "
          />

          <PixelNest className="right-[35px] top-[2px]" />
        </motion.div>
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
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
   FIREFLIES
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
   PIXEL FLOWER
========================================================= */

function PixelFlower({ className = "", petal = "#d97878" }) {
  return (
    <motion.div
      className={`absolute bottom-[24%] z-[9] pointer-events-none ${className}`}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative scale-[0.7] sm:scale-90 md:scale-100">
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
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
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
      animate={{ y: [0, -1, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
      animate={{ rotate: [-4, 4, -4] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-end gap-[3px] scale-[0.75] sm:scale-90 md:scale-100">
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
    <div className="relative flex scale-[0.8] flex-col items-center sm:scale-90 md:scale-100">
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
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
      >
        <div className="h-7 w-7 bg-[#718176]/30" />
        <div className="mx-auto h-5 w-5 bg-[#718176]/20" />
      </motion.div>

      {/* Fire glow */}
      <motion.div
        className="absolute -inset-10 bg-[#e68b35]/10 blur-2xl pointer-events-none"
        animate={{
          opacity: [0.4, 0.8, 0.45],
          scale: [0.9, 1.08, 0.95],
        }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Flame */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        animate={{
          scaleY: [1, 1.08, 0.94, 1.05, 1],
          scaleX: [1, 0.94, 1.06, 0.98, 1],
        }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative h-[74px] w-[56px]">
          <div className="absolute left-[18px] top-0 h-6 w-5 bg-[#e5a43b]" />
          <div className="absolute left-[9px] top-5 h-8 w-10 bg-[#e98232]" />
          <div className="absolute left-0 top-10 h-7 w-[56px] bg-[#e98232]" />
          <div className="absolute left-[17px] top-8 h-7 w-6 bg-[#ffd76a]" />
          <div className="absolute left-[11px] top-[52px] h-5 w-[34px] bg-[#ffd76a]" />
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
      <div className="absolute bottom-[15%] left-0 z-[12] h-[13%] w-full bg-[#315d37]" />
      <div className="absolute bottom-[26%] left-0 z-[13] h-[8px] w-full bg-[#4d8046]" />
      <div className="absolute bottom-[25.2%] left-0 z-[14] h-[9px] w-full bg-[#6b9853]" />
      <div className="absolute bottom-0 left-0 z-[11] h-[26%] w-full bg-[#493522]" />
      <div className="absolute bottom-[24%] left-0 z-[12] h-[10px] w-full bg-[#62452b]" />

      {/* Soil pixel texture */}
      <div className="absolute bottom-[13%] left-[7%] z-[13] h-3 w-8 bg-[#3a2a1d]" />
      <div className="absolute bottom-[8%] left-[19%] z-[13] h-2 w-5 bg-[#5c4127]" />
      <div className="absolute bottom-[17%] left-[34%] z-[13] h-3 w-5 bg-[#38281c]" />
      <div className="absolute bottom-[7%] left-[48%] z-[13] h-2 w-9 bg-[#60452c]" />
      <div className="absolute bottom-[15%] right-[30%] z-[13] h-3 w-7 bg-[#38281c]" />
      <div className="absolute bottom-[9%] right-[12%] z-[13] h-2 w-6 bg-[#60452c]" />
      <div className="absolute bottom-[19%] right-[5%] z-[13] h-3 w-4 bg-[#39291d]" />

      {/* Small stones */}
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
      {/* Atmosphere */}
      <div
        className="
          absolute
          left-1/2
          top-[35%]
          z-[1]
          h-[450px]
          w-[90%]
          max-w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          bg-[#80a95e]/10
          blur-[100px]
          pointer-events-none
        "
      />

      {/* Background trees */}
      <BackgroundTree className="left-[1%] sm:left-[5%]" scale={0.45} />
      <BackgroundTree className="left-[22%] sm:left-[18%]" scale={0.32} flip />
      <BackgroundTree className="right-[1%] sm:right-[5%]" scale={0.45} flip />
      <BackgroundTree className="right-[22%] sm:right-[18%]" scale={0.32} />

      {/* Connected Trees */}
      <ConnectedTrees />

      {/* Fireflies */}
      <Fireflies />

      {/* Flowers */}
      <PixelFlower className="left-[3%] sm:left-[8%]" petal="#d46c72" />
      <PixelFlower className="left-[16%] sm:left-[27%]" petal="#c89b4a" />
      <PixelFlower className="right-[3%] sm:right-[8%]" petal="#d47891" />
      <PixelFlower className="right-[16%] sm:right-[27%]" petal="#9c8bd1" />

      {/* Mushrooms */}
      <PixelMushroom className="left-[9%] sm:left-[15%]" scale={0.6} />
      <PixelMushroom className="right-[9%] sm:right-[15%]" scale={0.6} />

      {/* Rocks */}
      <PixelRock className="left-[14%] sm:left-[21%]" scale={0.55} />
      <PixelRock className="right-[14%] sm:right-[21%]" scale={0.55} />

      {/* Grass */}
      <GrassTuft className="left-[7%] sm:left-[14%]" />
      <GrassTuft className="left-[20%] sm:left-[31%]" />
      <GrassTuft className="right-[7%] sm:right-[14%]" />
      <GrassTuft className="right-[20%] sm:right-[31%]" />

      {/* Butterflies */}
      <PixelButterfly
        className="left-[8%] top-[26%] sm:left-[20%] md:left-[28%]"
        petal="#b997d3"
      />
      <PixelButterfly
        className="right-[8%] top-[31%] sm:right-[20%] md:right-[28%]"
        petal="#d49a72"
      />

      {/* Ground */}
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
    justify-start          {/* ← CHANGED: dari justify-center */}
    px-4
    pb-[22vh]
    pt-5                   {/* ← CHANGED: dari pt-16 */}
    text-center
    sm:justify-center       {/* ← ADDED: center lagi di tablet+ */}
    sm:px-6
    sm:pb-[24vh]
    sm:pt-20
    lg:px-8
    lg:pb-[25vh]
  "
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mb-5
            flex
            flex-wrap
            items-center
            justify-center
            gap-1.5
            border-2
            border-[#71945b]
            bg-[#173520]/90
            px-3
            py-1.5
            font-mono
            text-[7px]
            font-bold
            tracking-[0.14em]
            text-[#a7c788]
            shadow-[4px_4px_0_#0b1a10]
            backdrop-blur-sm
            sm:mb-6
            sm:gap-2
            sm:px-4
            sm:py-2
            sm:text-[8px]
            sm:tracking-[0.18em]
            md:text-[9px]
          "
        >
          <span className="h-1.5 w-1.5 animate-pulse bg-[#a5ca6d] sm:h-2 sm:w-2" />
          PERJALANAN SELESAI
          <span className="text-[#526e4b]">•</span>
          TEMPAT BERISTIRAHAT
        </motion.div>

        {/* Campfire */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-5 sm:mb-6 md:mb-7"
        >
          <PixelCampfire />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl px-2"
        >
          <div
            className="
              mb-2
              font-mono
              text-[7px]
              font-bold
              tracking-[0.2em]
              text-[#9bb77c]
              sm:mb-3
              sm:text-[8px]
              sm:tracking-[0.22em]
              md:text-[10px]
            "
          >
            API UNGGUN
          </div>

          <h2
            className="
              font-pixel
              text-xl
              leading-relaxed
              text-[#f1e8c8]
              drop-shadow-[3px_3px_0_#17251a]
              sm:text-2xl
              sm:drop-shadow-[4px_4px_0_#17251a]
              md:text-3xl
              lg:text-4xl
            "
          >
            KONTAK
            <span className="text-[#e4a34b]"> SAYA</span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              px-3
              font-sans
              text-[10px]
              leading-[1.6]
              text-[#b5c4aa]
              sm:mt-4
              sm:text-[11px]
              sm:leading-5
              md:text-xs
              md:leading-6
              lg:text-sm
            "
          >
            Terima kasih telah sampai di akhir perjalanan. Jika kamu ingin
            berdiskusi tentang proyek, berkolaborasi, berbagi ide, atau sekadar
            menyapa, silakan temukan saya melalui beberapa kanal di bawah.
          </p>
        </motion.div>

        {/* Contact buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="
            mt-5
            flex
            w-full
            max-w-md
            flex-wrap
            justify-center
            gap-2
            px-2
            sm:mt-6
            sm:max-w-2xl
            sm:gap-3
            md:mt-7
          "
        >
          {/* GitHub */}
          <motion.a
            href="https://github.com/airlanggapangestu"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5, scale: 1.04 }}
            whileTap={{ y: 2, scale: 0.98 }}
            className="
              group
              flex
              flex-1
              min-w-[130px]
              items-center
              justify-center
              gap-2
              border-[3px]
              border-[#1e281f]
              bg-[#d9dec8]
              px-3
              py-2.5
              font-pixel
              text-[8px]
              text-[#20271f]
              shadow-[4px_4px_0_#0e160f]
              transition-colors
              hover:bg-[#edf0dd]
              sm:flex-none
              sm:px-4
              sm:py-3
              sm:text-[9px]
            "
          >
            <FaGithub
              size={14}
              className="transition-transform group-hover:rotate-12 sm:hidden"
            />
            <FaGithub
              size={16}
              className="hidden transition-transform group-hover:rotate-12 sm:block"
            />
            GITHUB
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/airlangga-pangestu"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5, scale: 1.04 }}
            whileTap={{ y: 2, scale: 0.98 }}
            className="
              group
              flex
              flex-1
              min-w-[130px]
              items-center
              justify-center
              gap-2
              border-[3px]
              border-[#17251e]
              bg-[#719b72]
              px-3
              py-2.5
              font-pixel
              text-[8px]
              text-[#102016]
              shadow-[4px_4px_0_#0e160f]
              transition-colors
              hover:bg-[#83ad82]
              sm:flex-none
              sm:px-4
              sm:py-3
              sm:text-[9px]
            "
          >
            <FaLinkedin
              size={14}
              className="transition-transform group-hover:scale-110 sm:hidden"
            />
            <FaLinkedin
              size={16}
              className="hidden transition-transform group-hover:scale-110 sm:block"
            />
            LINKEDIN
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:airlanggapangestuu@gmail.com"
            whileHover={{ y: -5, scale: 1.04 }}
            whileTap={{ y: 2, scale: 0.98 }}
            className="
              group
              flex
              flex-1
              min-w-[130px]
              items-center
              justify-center
              gap-2
              border-[3px]
              border-[#17251e]
              bg-[#b89b72]
              px-3
              py-2.5
              font-pixel
              text-[8px]
              text-[#211b15]
              shadow-[4px_4px_0_#0e160f]
              transition-colors
              hover:bg-[#c8ac82]
              sm:flex-none
              sm:px-4
              sm:py-3
              sm:text-[9px]
            "
          >
            <Mail
              size={14}
              strokeWidth={3}
              className="transition-transform group-hover:-rotate-12 sm:hidden"
            />
            <Mail
              size={16}
              strokeWidth={3}
              className="hidden transition-transform group-hover:-rotate-12 sm:block"
            />
            EMAIL
          </motion.a>

          {/* CV */}
          <motion.a
            href="/CV_Airlangga_1.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5, scale: 1.04 }}
            whileTap={{ y: 2, scale: 0.98 }}
            className="
              group
              flex
              flex-1
              min-w-[130px]
              items-center
              justify-center
              gap-2
              border-[3px]
              border-[#17251e]
              bg-[#e0ad55]
              px-3
              py-2.5
              font-pixel
              text-[8px]
              text-[#251b10]
              shadow-[4px_4px_0_#0e160f]
              transition-colors
              hover:bg-[#efc06b]
              sm:flex-none
              sm:px-4
              sm:py-3
              sm:text-[9px]
            "
          >
            <FileText
              size={14}
              strokeWidth={3}
              className="transition-transform group-hover:translate-y-[-2px] sm:hidden"
            />
            <FileText
              size={16}
              strokeWidth={3}
              className="hidden transition-transform group-hover:translate-y-[-2px] sm:block"
            />
            CV PDF
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom pixel details */}
      <div className="absolute bottom-[7%] left-[37%] z-[18] hidden sm:block">
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex gap-2"
        >
          <div className="h-3 w-3 bg-[#4d5b4b]" />
          <div className="h-5 w-5 bg-[#5e675b]" />
          <div className="h-3 w-3 bg-[#3e483d]" />
        </motion.div>
      </div>

      <div className="absolute bottom-[9%] right-[37%] z-[18] hidden sm:block">
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="flex gap-2"
        >
          <div className="h-3 w-3 bg-[#4d5b4b]" />
          <div className="h-5 w-5 bg-[#5e675b]" />
          <div className="h-3 w-3 bg-[#3e483d]" />
        </motion.div>
      </div>
    </section>
  );
}
