import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Swords,
  Bug,
  MousePointerClick,
  ChevronDown,
  Pickaxe,
  Gem,
  ArrowDown,
} from "lucide-react";

/* =========================================================
   PLAY SECTION
   UNDERGROUND CAVE // GROWTOPIA / MINECRAFT PIXEL STYLE

   Flow:
   CAMPFIRE
      ↓
   SOIL
      ↓
   CAVE ENTRANCE
      ↓
   UNDERGROUND LEVEL 01
      ↓
   DEEP CAVE → CHESS GARDEN
========================================================= */

/* =========================================================
   TOP SOIL
   Menyambung langsung dengan tanah dari Campfire
========================================================= */

function TopSoil() {
  return (
    <div className="absolute inset-x-0 top-0 z-[30] h-[72px] pointer-events-none">
      {/* top soil */}
      <div className="absolute inset-x-0 top-0 h-[58px] bg-[#4a443d]" />

      {/* darker bottom soil */}
      <div className="absolute inset-x-0 top-[58px] h-[14px] bg-[#302a25]" />

      {/* pixel texture */}
      <div className="absolute left-[4%] top-[8px] h-[10px] w-[24px] bg-[#5a5148]" />
      <div className="absolute left-[13%] top-[8px] h-[10px] w-[15px] bg-[#3d3832]" />
      <div className="absolute left-[25%] top-[8px] h-[10px] w-[28px] bg-[#5a5148]" />
      <div className="absolute left-[42%] top-[8px] h-[10px] w-[18px] bg-[#3d3832]" />
      <div className="absolute left-[58%] top-[8px] h-[10px] w-[25px] bg-[#5a5148]" />
      <div className="absolute left-[74%] top-[8px] h-[10px] w-[18px] bg-[#3d3832]" />
      <div className="absolute right-[5%] top-[8px] h-[10px] w-[25px] bg-[#5a5148]" />

      <div className="absolute left-[8%] top-[27px] h-[9px] w-[18px] bg-[#38332d]" />
      <div className="absolute left-[21%] top-[27px] h-[9px] w-[25px] bg-[#514a42]" />
      <div className="absolute left-[37%] top-[27px] h-[9px] w-[15px] bg-[#38332d]" />
      <div className="absolute left-[53%] top-[27px] h-[9px] w-[27px] bg-[#514a42]" />
      <div className="absolute left-[71%] top-[27px] h-[9px] w-[16px] bg-[#38332d]" />
      <div className="absolute left-[84%] top-[27px] h-[9px] w-[24px] bg-[#514a42]" />

      <div className="absolute left-[6%] top-[44px] h-[8px] w-[14px] bg-[#2d2823]" />
      <div className="absolute left-[18%] top-[44px] h-[8px] w-[20px] bg-[#35302a]" />
      <div className="absolute left-[34%] top-[44px] h-[8px] w-[13px] bg-[#2d2823]" />
      <div className="absolute left-[49%] top-[44px] h-[8px] w-[22px] bg-[#35302a]" />
      <div className="absolute left-[67%] top-[44px] h-[8px] w-[15px] bg-[#2d2823]" />
      <div className="absolute left-[82%] top-[44px] h-[8px] w-[21px] bg-[#35302a]" />

      {/* soil cracks */}
      <div className="absolute left-[16%] top-[56px] h-[8px] w-[3px] bg-[#211d19]" />
      <div className="absolute left-[16%] top-[62px] h-[3px] w-[10px] bg-[#211d19]" />

      <div className="absolute right-[23%] top-[56px] h-[8px] w-[3px] bg-[#211d19]" />
      <div className="absolute right-[23%] top-[62px] h-[3px] w-[12px] bg-[#211d19]" />
    </div>
  );
}

/* =========================================================
   CAVE CEILING
   Rongga gua mulai terbuka setelah soil
========================================================= */

function CaveCeiling() {
  return (
    <div className="absolute inset-x-0 top-[70px] z-[4] h-[170px] pointer-events-none">
      {/* ceiling mass */}
      <div
        className="absolute inset-x-0 top-0 h-[115px]"
        style={{
          background:
            "linear-gradient(180deg, #302a25 0%, #25211d 55%, #1c1916 100%)",
        }}
      />

      {/* irregular cave opening */}
      <div className="absolute left-[8%] top-[78px] h-[60px] w-[84%] bg-[#171412]" />

      {/* hanging ceiling chunks */}
      <div className="absolute left-[4%] top-[60px] h-[45px] w-[70px] bg-[#35302a]" />
      <div className="absolute left-[16%] top-[70px] h-[65px] w-[55px] bg-[#2d2823]" />
      <div className="absolute left-[29%] top-[76px] h-[42px] w-[70px] bg-[#35302a]" />

      <div className="absolute right-[5%] top-[58px] h-[48px] w-[75px] bg-[#35302a]" />
      <div className="absolute right-[18%] top-[68px] h-[60px] w-[52px] bg-[#2d2823]" />
      <div className="absolute right-[30%] top-[76px] h-[42px] w-[68px] bg-[#35302a]" />

      {/* tiny stone pixels */}
      <div className="absolute left-[10%] top-[120px] h-[12px] w-[20px] bg-[#454038]" />
      <div className="absolute left-[22%] top-[132px] h-[10px] w-[14px] bg-[#3d3832]" />
      <div className="absolute right-[11%] top-[116px] h-[12px] w-[20px] bg-[#454038]" />
      <div className="absolute right-[23%] top-[130px] h-[10px] w-[14px] bg-[#3d3832]" />
    </div>
  );
}

/* =========================================================
   SIDE CAVE WALLS
========================================================= */

function CaveWalls() {
  return (
    <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
      {/* LEFT */}
      <div className="absolute left-0 top-[70px] bottom-0 w-[13%] min-w-[65px]">
        <div className="absolute inset-0 bg-[#302b26]" />

        {/* block pattern */}
        <div className="absolute left-0 top-0 h-[38px] w-[35px] bg-[#39332d]" />
        <div className="absolute left-[35px] top-[18px] h-[48px] w-[28px] bg-[#27231f]" />

        <div className="absolute left-0 top-[66px] h-[54px] w-[30px] bg-[#3b352f]" />
        <div className="absolute left-[30px] top-[82px] h-[38px] w-[34px] bg-[#28231f]" />

        <div className="absolute left-0 top-[120px] h-[42px] w-[42px] bg-[#25211d]" />
        <div className="absolute left-[42px] top-[130px] h-[60px] w-[22px] bg-[#3b352f]" />

        <div className="absolute left-0 top-[190px] h-[65px] w-[28px] bg-[#3d3832]" />
        <div className="absolute left-[28px] top-[205px] h-[42px] w-[36px] bg-[#27231f]" />

        <div className="absolute left-0 top-[270px] h-[55px] w-[45px] bg-[#29241f]" />
        <div className="absolute left-[45px] top-[290px] h-[35px] w-[20px] bg-[#3b352f]" />

        <div className="absolute right-0 inset-y-0 w-[5px] bg-[#171310]" />
      </div>

      {/* RIGHT */}
      <div className="absolute right-0 top-[70px] bottom-0 w-[13%] min-w-[65px]">
        <div className="absolute inset-0 bg-[#302b26]" />

        <div className="absolute right-0 top-0 h-[42px] w-[36px] bg-[#3b352f]" />
        <div className="absolute right-[36px] top-[18px] h-[48px] w-[28px] bg-[#27231f]" />

        <div className="absolute right-0 top-[66px] h-[52px] w-[30px] bg-[#3d3832]" />
        <div className="absolute right-[30px] top-[82px] h-[38px] w-[34px] bg-[#28231f]" />

        <div className="absolute right-0 top-[120px] h-[45px] w-[42px] bg-[#25211d]" />
        <div className="absolute right-[42px] top-[135px] h-[55px] w-[22px] bg-[#3b352f]" />

        <div className="absolute right-0 top-[190px] h-[62px] w-[30px] bg-[#3d3832]" />
        <div className="absolute right-[30px] top-[208px] h-[40px] w-[35px] bg-[#27231f]" />

        <div className="absolute right-0 top-[270px] h-[55px] w-[45px] bg-[#29241f]" />
        <div className="absolute right-[45px] top-[290px] h-[35px] w-[20px] bg-[#3b352f]" />

        <div className="absolute left-0 inset-y-0 w-[5px] bg-[#171310]" />
      </div>
    </div>
  );
}

/* =========================================================
   HANGING ROCKS
========================================================= */

function HangingRocks() {
  const rocks = [
    { left: "18%", width: 24, height: 42, delay: 0 },
    { left: "32%", width: 18, height: 28, delay: 0.5 },
    { left: "47%", width: 30, height: 52, delay: 1 },
    { left: "63%", width: 20, height: 34, delay: 0.3 },
    { left: "78%", width: 28, height: 45, delay: 0.8 },
  ];

  return (
    <div className="absolute inset-x-0 top-[105px] z-[8] pointer-events-none">
      {rocks.map((rock, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: rock.left,
            width: rock.width,
            height: rock.height,
          }}
          animate={{ y: [0, 2, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: rock.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className="mx-auto h-full"
            style={{
              width: rock.width,
              background: "linear-gradient(90deg, #26211d, #3d3832)",
              clipPath:
                "polygon(15% 0, 85% 0, 100% 18%, 76% 55%, 58% 100%, 38% 68%, 20% 52%, 0 18%)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================================
   STALAGMITES
========================================================= */

function Stalagmites() {
  const stones = [
    { left: "9%", height: 42, width: 25 },
    { left: "16%", height: 25, width: 18 },
    { left: "29%", height: 32, width: 20 },
    { left: "72%", height: 30, width: 20 },
    { left: "84%", height: 48, width: 28 },
    { left: "91%", height: 25, width: 17 },
  ];

  return (
    <div className="absolute inset-x-0 bottom-[70px] z-[7] pointer-events-none">
      {stones.map((stone, i) => (
        <div
          key={i}
          className="absolute bottom-0"
          style={{
            left: stone.left,
            width: stone.width,
            height: stone.height,
          }}
        >
          <div
            className="h-full w-full"
            style={{
              background: i % 2 ? "#38332d" : "#2b2722",
              clipPath:
                "polygon(0 100%, 18% 42%, 35% 48%, 50% 0, 65% 50%, 84% 35%, 100% 100%)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   ROOTS
   Akar dari atas menyambung Campfire
========================================================= */

function UndergroundRoots() {
  return (
    <div className="absolute inset-0 z-[9] pointer-events-none overflow-hidden">
      <motion.div
        className="absolute left-[12%] top-[62px] h-[290px] w-[18px] bg-[#573621]"
        style={{
          clipPath:
            "polygon(0 0,100% 0,85% 28%,100% 45%,65% 58%,78% 76%,42% 100%,30% 82%,42% 61%,20% 48%,34% 30%)",
        }}
        animate={{ x: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute right-[15%] top-[62px] h-[250px] w-[15px] bg-[#49301f]"
        style={{
          clipPath:
            "polygon(10% 0,100% 0,82% 25%,100% 44%,58% 55%,72% 72%,35% 100%,20% 78%,35% 56%,5% 43%,22% 25%)",
        }}
        animate={{ x: [0, -2, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* small branches */}
      <div className="absolute left-[13%] top-[160px] h-[12px] w-[100px] rotate-[18deg] bg-[#573621]" />
      <div className="absolute right-[14%] top-[195px] h-[10px] w-[85px] -rotate-[20deg] bg-[#49301f]" />
    </div>
  );
}

/* =========================================================
   CRYSTAL CLUSTERS
========================================================= */

function CrystalCluster({ left, bottom, color = "#7dd3a8", scale = 1 }) {
  return (
    <motion.div
      className="absolute"
      style={{
        left,
        bottom,
        transform: `scale(${scale})`,
        transformOrigin: "bottom center",
      }}
      animate={{
        opacity: [0.55, 1, 0.55],
      }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* glow */}
      <div
        className="absolute -inset-8 blur-xl"
        style={{
          background: color,
          opacity: 0.12,
        }}
      />

      {/* crystals */}
      <div className="relative flex items-end gap-[3px]">
        <div
          className="h-[26px] w-[9px]"
          style={{
            background: color,
            clipPath: "polygon(50% 0,100% 30%,75% 100%,20% 100%,0 35%)",
          }}
        />

        <div
          className="h-[42px] w-[13px]"
          style={{
            background: color,
            clipPath: "polygon(50% 0,100% 30%,78% 100%,20% 100%,0 35%)",
          }}
        />

        <div
          className="h-[20px] w-[8px]"
          style={{
            background: color,
            clipPath: "polygon(50% 0,100% 35%,75% 100%,20% 100%,0 35%)",
          }}
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   FLOATING DUST
========================================================= */

function FloatingDust() {
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        left: Math.random() * 100,
        top: 18 + Math.random() * 75,
        size: 2 + Math.floor(Math.random() * 3),
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 5,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 z-[6] pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-[#b7a889]/40"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.05, 0.5, 0.05],
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

/* =========================================================
   TORCH
========================================================= */

function Torch({ left, top }) {
  return (
    <motion.div
      className="absolute z-[12] pointer-events-none"
      style={{ left, top }}
      animate={{
        opacity: [0.75, 1, 0.8],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* light */}
      <motion.div
        className="absolute -inset-12 rounded-full blur-2xl"
        style={{
          background: "#fbbf24",
          opacity: 0.08,
        }}
        animate={{
          scale: [0.9, 1.08, 0.9],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />

      {/* wooden handle */}
      <div className="relative h-[38px] w-[8px] bg-[#4a3218]">
        {/* flame */}
        <motion.div
          className="absolute -top-[13px] left-[-3px] h-[15px] w-[14px] bg-[#f97316]"
          animate={{
            scaleY: [1, 1.2, 0.9, 1],
            x: [0, 1, -1, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
          }}
          style={{
            clipPath: "polygon(50% 0, 100% 45%, 78% 100%, 22% 100%, 0 45%)",
          }}
        />

        <div className="absolute -top-[8px] left-[0px] h-[8px] w-[8px] bg-[#fbbf24]" />
      </div>
    </motion.div>
  );
}

/* =========================================================
   UNDERGROUND PLATFORM
   Card berdiri di atas platform batu
========================================================= */

function StonePlatform() {
  return (
    <div className="absolute left-1/2 top-[58%] z-[14] w-[88%] -translate-x-1/2 pointer-events-none">
      <div className="relative h-[28px] w-full bg-[#3b352f]">
        <div className="absolute inset-x-0 top-0 h-[7px] bg-[#514a42]" />

        <div className="absolute left-[4%] top-[10px] h-[7px] w-[10%] bg-[#302b26]" />
        <div className="absolute left-[22%] top-[10px] h-[7px] w-[7%] bg-[#2b2722]" />
        <div className="absolute left-[40%] top-[10px] h-[7px] w-[12%] bg-[#302b26]" />
        <div className="absolute left-[63%] top-[10px] h-[7px] w-[8%] bg-[#2b2722]" />
        <div className="absolute left-[81%] top-[10px] h-[7px] w-[11%] bg-[#302b26]" />

        <div className="absolute bottom-0 left-[7%] h-[5px] w-[15%] bg-[#24201c]" />
        <div className="absolute bottom-0 left-[36%] h-[5px] w-[10%] bg-[#24201c]" />
        <div className="absolute bottom-0 right-[8%] h-[5px] w-[14%] bg-[#24201c]" />
      </div>

      {/* shadow under platform */}
      <div className="absolute top-[28px] left-[3%] h-[20px] w-[94%] bg-[#090807]/70 blur-sm" />
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -7,
      }}
      className="group relative block"
    >
      {/* pixel shadow */}
      <div className="absolute inset-0 translate-x-[7px] translate-y-[7px] bg-[#080706]" />

      {/* card */}
      <div
        className="relative border-[3px] bg-[#12100d]/95 p-5"
        style={{
          borderColor: accent,
          boxShadow: `0 0 0 1px #080706`,
        }}
      >
        {/* corner pixels */}
        <div
          className="absolute left-[-3px] top-[-3px] h-[8px] w-[8px]"
          style={{ background: accent }}
        />
        <div
          className="absolute right-[-3px] top-[-3px] h-[8px] w-[8px]"
          style={{ background: accent }}
        />
        <div
          className="absolute bottom-[-3px] left-[-3px] h-[8px] w-[8px]"
          style={{ background: accent }}
        />
        <div
          className="absolute bottom-[-3px] right-[-3px] h-[8px] w-[8px]"
          style={{ background: accent }}
        />

        {/* header */}
        <div className="flex items-center gap-3">
          <motion.div
            className="flex h-11 w-11 shrink-0 items-center justify-center border-2 bg-[#090807]"
            style={{
              borderColor: accent,
              color: accent,
            }}
            whileHover={{
              scale: 1.08,
              rotate: [0, -8, 8, 0],
            }}
          >
            {icon}
          </motion.div>

          <div className="text-left">
            <h3 className="font-pixel text-[10px] text-[#e7dfc5] sm:text-[11px]">
              {title}
            </h3>

            <p
              className="mt-1 font-mono text-[7px] tracking-[0.16em]"
              style={{ color: accent }}
            >
              {code}
            </p>
          </div>
        </div>

        {/* divider */}
        <div className="my-4 flex items-center gap-1">
          <div className="h-[3px] w-8" style={{ background: accent }} />
          <div className="h-[3px] w-3" style={{ background: accent }} />
          <div className="h-[1px] flex-1 bg-[#302b26]" />
        </div>

        <p className="text-left text-[10px] leading-relaxed text-[#9d968b] sm:text-[11px]">
          {description}
        </p>

        {/* footer */}
        <div className="mt-4 flex items-center justify-between border-t border-[#2d2924] pt-3">
          <span
            className="flex items-center gap-1.5 font-pixel text-[7px]"
            style={{ color: accent }}
          >
            <MousePointerClick size={11} />
            MASUK
          </span>

          <motion.span
            className="font-mono text-[11px] text-[#6b645a]"
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function PlaySection() {
  return (
    <section
      id="play"
      className="relative min-h-screen w-full overflow-hidden text-white"
      style={{
        background: `
          radial-gradient(
            circle at 50% 35%,
            #2b2926 0%,
            #211f1c 25%,
            #171513 48%,
            #100e0c 72%,
            #090807 100%
          )
        `,
      }}
    >
      {/* =====================================================
          ENVIRONMENT
      ===================================================== */}

      <TopSoil />
      <CaveCeiling />
      <CaveWalls />
      <HangingRocks />
      <UndergroundRoots />
      <FloatingDust />

      <Stalagmites />

      <CrystalCluster left="7%" bottom="17%" color="#7dd3a8" scale={0.9} />

      <CrystalCluster left="18%" bottom="26%" color="#a78bfa" scale={0.7} />

      <CrystalCluster left="78%" bottom="22%" color="#a78bfa" scale={0.8} />

      <CrystalCluster left="89%" bottom="18%" color="#7dd3a8" scale={0.9} />

      <Torch left="15%" top="39%" />
      <Torch left="83%" top="42%" />

      <StonePlatform />

      {/* =====================================================
          CENTER LIGHT
      ===================================================== */}

      <motion.div
        className="absolute left-1/2 top-[35%] z-[1] h-[360px] w-[600px] -translate-x-1/2 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(125,211,168,0.08) 0%, rgba(167,139,250,0.04) 35%, transparent 70%)",
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-[20] mx-auto flex min-h-screen max-w-5xl flex-col items-center px-5 pb-32 pt-[150px] text-center sm:px-8">
        {/* HUD */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 border-2 border-[#514a42] bg-[#11100d]/90 px-3 py-1.5 shadow-[3px_3px_0_#070605]"
        >
          <motion.span
            className="h-2 w-2 bg-[#7dd3a8]"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <span className="font-mono text-[8px] tracking-[0.18em] text-[#aaa297]">
            UNDERGROUND // LEVEL 01
          </span>
        </motion.div>

        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-[2px] w-10 bg-[#403a34]" />

            <motion.div
              animate={{
                rotate: [0, -8, 8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Pickaxe size={16} className="text-[#a78bfa]" />
            </motion.div>

            <div className="h-[2px] w-10 bg-[#403a34]" />
          </div>

          <h2 className="font-pixel text-xl leading-relaxed text-[#e7dfc5] drop-shadow-[3px_3px_0_#080706] sm:text-2xl md:text-3xl">
            AYO
            <span className="text-[#7dd3a8]"> BERMAIN</span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-[10px] leading-5 text-[#9d968b] sm:text-[11px]">
            Jauh di bawah permukaan, ada dua area tersembunyi.
            <br className="hidden sm:block" />
            Pilih tantanganmu dan lanjutkan perjalanan lebih dalam.
          </p>
        </motion.div>

        {/* cards */}
        <div className="relative mt-9 grid w-full max-w-2xl gap-6 sm:grid-cols-2">
          <GameCard
            href="#chess"
            delay={0.2}
            accent="#a78bfa"
            icon={<Swords size={18} />}
            title="CHESS GARDEN"
            code="PUZZLE_ZONE // 01"
            description="Masuki taman catur bawah tanah dan pecahkan puzzle untuk membuka jalur berikutnya."
          />

          <GameCard
            href="#workbench"
            delay={0.3}
            accent="#7dd3a8"
            icon={<Bug size={18} />}
            title="CODE WORKBENCH"
            code="DEBUG_ZONE // 02"
            description="Temukan bug, susun kembali kode, dan hidupkan kembali workshop developer."
          />
        </div>

        {/* exploration indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
          }}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2 font-mono text-[7px] tracking-[0.2em] text-[#625b51]">
            <Gem size={11} />
            <span>EXPLORE DEEPER</span>
          </div>

          <motion.div
            animate={{
              y: [0, 5, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown size={14} className="text-[#7d756a]" />
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          DEEP CAVE TRANSITION
          menuju CHESS GARDEN
      ===================================================== */}

      <div className="absolute inset-x-0 bottom-0 z-[25] h-[150px] pointer-events-none">
        {/* cave darkness */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(9,8,7,0.45) 35%, #090807 100%)",
          }}
        />

        {/* floor stones */}
        <div className="absolute bottom-0 left-0 h-[55px] w-full bg-[#0c0a09]" />

        <div className="absolute bottom-[45px] left-[5%] h-[16px] w-[90px] bg-[#211d19]" />
        <div className="absolute bottom-[52px] left-[19%] h-[12px] w-[65px] bg-[#29241f]" />

        <div className="absolute bottom-[46px] right-[7%] h-[18px] w-[100px] bg-[#211d19]" />
        <div className="absolute bottom-[53px] right-[25%] h-[11px] w-[58px] bg-[#29241f]" />

        {/* center descending opening */}
        <div className="absolute bottom-0 left-1/2 h-[80px] w-[230px] -translate-x-1/2 bg-[#050404]" />

        <div className="absolute bottom-[72px] left-1/2 h-[5px] w-[180px] -translate-x-1/2 bg-[#171310]" />

        {/* transition label */}
        <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 font-mono text-[6px] tracking-[0.25em] text-[#413c35]">
          DESCEND // LEVEL 02
        </div>
      </div>
    </section>
  );
}
