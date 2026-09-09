import React, { useEffect, useMemo, useRef, useState } from "react";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

/* =========================================================
   PIXEL SKY PORTFOLIO — RESPONSIVE HERO
   ========================================================= */

/* =========================================================
   PIXEL CLOUD
   ========================================================= */

function PixelCloud({
  className = "",
  scale = 1,
  opacity = 0.8,
  duration = 12,
  delay = 0,
}) {
  const cloudGrid = [
    "......WW......",
    "...WWWWWW.....",
    "..WWWWWWWW....",
    ".WWWWWWWWWW...",
    "WWWWWWWWWWWW..",
    "WWWWWWWWWWWW..",
    ".WWWWWWWWWW...",
  ];

  const shadow = useMemo(() => {
    const size = 5 * scale;

    return cloudGrid
      .flatMap((row, y) =>
        row.split("").flatMap((cell, x) => {
          if (cell !== "W") return [];

          return [`${x * size}px ${y * size}px 0 rgba(255,255,255,${opacity})`];
        }),
      )
      .join(",");
  }, [scale, opacity]);

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        x: [0, 20, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        style={{
          width: 5 * scale,
          height: 5 * scale,
          boxShadow: shadow,
        }}
      />
    </motion.div>
  );
}

/* =========================================================
   PIXEL SUN
   ========================================================= */

function PixelSun() {
  return (
    <motion.div
      className="
        absolute
        top-[7%]
        right-[6%]
        sm:top-[8%]
        sm:right-[9%]
        lg:right-[13%]
        pointer-events-none
        z-[1]
      "
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="
          relative
          w-14
          h-14
          sm:w-20
          sm:h-20
          md:w-24
          md:h-24
          lg:w-28
          lg:h-28
        "
      >
        {/* Rays */}

        <span
          className="
            absolute
            -top-3
            left-1/2
            -translate-x-1/2
            w-1.5
            h-4
            sm:w-2
            sm:h-5
            bg-yellow-200/70
          "
        />

        <span
          className="
            absolute
            -bottom-3
            left-1/2
            -translate-x-1/2
            w-1.5
            h-4
            sm:w-2
            sm:h-5
            bg-yellow-200/70
          "
        />

        <span
          className="
            absolute
            -left-3
            top-1/2
            -translate-y-1/2
            w-4
            h-1.5
            sm:w-5
            sm:h-2
            bg-yellow-200/70
          "
        />

        <span
          className="
            absolute
            -right-3
            top-1/2
            -translate-y-1/2
            w-4
            h-1.5
            sm:w-5
            sm:h-2
            bg-yellow-200/70
          "
        />

        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            bg-yellow-300/90
            shadow-[0_0_35px_rgba(253,224,71,0.5)]
            sm:shadow-[0_0_45px_rgba(253,224,71,0.5)]
          "
        />

        {/* Main */}

        <div
          className="
            absolute
            inset-2
            sm:inset-3
            bg-yellow-200
          "
        />

        {/* Pixel details */}

        <div
          className="
            absolute
            top-4
            left-4
            sm:top-5
            sm:left-5
            w-1.5
            h-1.5
            sm:w-2
            sm:h-2
            bg-yellow-500/30
          "
        />

        <div
          className="
            absolute
            bottom-4
            right-4
            sm:bottom-5
            sm:right-6
            w-2
            h-1.5
            sm:w-3
            sm:h-2
            bg-yellow-500/20
          "
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   PIXEL BIRD
   ========================================================= */

function PixelBird({ top, delay = 0, scale = 1, duration = 22 }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-[4]"
      style={{
        top: `${top}%`,
      }}
      initial={{
        x: "-10vw",
      }}
      animate={{
        x: "110vw",
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div
        className="relative"
        style={{
          width: `${20 * scale}px`,
          height: `${10 * scale}px`,
        }}
      >
        {/* Left Wing */}

        <motion.div
          className="absolute left-0 top-1"
          animate={{
            rotate: [0, -25, 0],
          }}
          transition={{
            duration: 0.45,
            repeat: Infinity,
          }}
          style={{
            width: 10 * scale,
            height: 4 * scale,
            background: "#334155",
            clipPath: "polygon(100% 50%, 0 0, 0 100%)",
          }}
        />

        {/* Right Wing */}

        <motion.div
          className="absolute right-0 top-1"
          animate={{
            rotate: [0, 25, 0],
          }}
          transition={{
            duration: 0.45,
            repeat: Infinity,
          }}
          style={{
            width: 10 * scale,
            height: 4 * scale,
            background: "#334155",
            clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   PIXEL PLANE
   ========================================================= */

function PixelPlane() {
  return (
    <motion.div
      className="
        absolute
        top-[30%]
        left-[-120px]
        pointer-events-none
        z-[4]
        hidden
        sm:block
      "
      animate={{
        x: ["0vw", "125vw"],
        y: [0, -10, 0, 8, 0],
      }}
      transition={{
        duration: 38,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="relative scale-75 md:scale-100">
        {/* Body */}

        <div className="w-16 h-2 bg-slate-700/50" />

        {/* Wing */}

        <div
          className="
            absolute
            left-5
            -top-3
            w-7
            h-4
            bg-slate-700/50
          "
          style={{
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
        />

        {/* Tail */}

        <div
          className="
            absolute
            right-0
            -top-2
            w-4
            h-3
            bg-slate-700/50
          "
          style={{
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
        />

        {/* Contrail */}

        <div
          className="
            absolute
            -bottom-3
            left-2
            w-24
            h-1
            bg-white/20
            blur-sm
          "
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   PIXEL KITE
   ========================================================= */

function PixelKite() {
  return (
    <motion.div
      className="
        absolute
        top-[18%]
        left-[5%]
        sm:left-[9%]
        pointer-events-none
        z-[3]
        hidden
        md:block
      "
      animate={{
        y: [0, -14, 0],
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative">
        {/* Kite */}

        <div
          className="
            w-8
            h-8
            lg:w-10
            lg:h-10
            bg-rose-400
            rotate-45
            border-4
            border-rose-200
          "
        />

        {/* String */}

        <div
          className="
            absolute
            left-1/2
            top-7
            lg:top-8
            w-px
            h-24
            lg:h-28
            bg-slate-500/35
          "
        />

        {/* Tail */}

        <div
          className="
            absolute
            left-[2px]
            top-[37px]
            lg:top-[43px]
            flex
            flex-col
            gap-2
          "
        >
          <span className="w-2 h-2 bg-yellow-300" />
          <span className="w-2 h-2 bg-sky-300 ml-3" />
          <span className="w-2 h-2 bg-pink-300 ml-1" />
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   SMALL CLOUD
   ========================================================= */

function SmallCloud({ className = "", delay = 0 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        x: [0, 12, 0],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative scale-75 sm:scale-100">
        <div
          className="
            absolute
            left-4
            top-2
            w-16
            h-5
            bg-white/35
          "
        />

        <div
          className="
            absolute
            left-0
            top-4
            w-24
            h-5
            bg-white/35
          "
        />

        <div
          className="
            absolute
            left-8
            top-0
            w-9
            h-7
            bg-white/35
          "
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   SKY PARTICLES
   ========================================================= */

function SkyParticles({ count = 20 }) {
  const particles = useMemo(
    () =>
      Array.from({
        length: count,
      }).map((_, index) => ({
        id: index,
        top: Math.random() * 70,
        left: Math.random() * 100,
        size: Math.random() > 0.8 ? 3 : 2,
        delay: Math.random() * 3,
      })),
    [count],
  );

  return (
    <>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="
            absolute
            bg-white/40
            pointer-events-none
          "
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.1, 0.65, 0.1],
          }}
          transition={{
            duration: 3,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

/* =========================================================
   PIXEL TERMINAL
   ========================================================= */

function PixelTerminal({ reduceMotion }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 25,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.4,
      }}
      className="
        relative
        w-[220px]
        h-[220px]
        sm:w-[240px]
        sm:h-[240px]
        lg:w-[280px]
        lg:h-[280px]
        shrink-0
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-8
          rounded-full
          bg-white/20
          blur-3xl
        "
      />

      {/* Pixel frame */}

      <div
        className="
          absolute
          inset-7
          sm:inset-8
          border-2
          border-white/20
        "
      />

      {/* Terminal */}

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                y: [0, -8, 0],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[155px]
          h-[110px]
          sm:w-[175px]
          sm:h-[120px]
          lg:w-[190px]
          lg:h-[130px]
          bg-slate-900/85
          border-4
          border-slate-700
          shadow-[7px_7px_0_rgba(15,23,42,0.2)]
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            gap-1.5
            px-3
            py-2
            border-b
            border-white/10
          "
        >
          <span className="w-2 h-2 bg-red-400" />

          <span className="w-2 h-2 bg-yellow-400" />

          <span className="w-2 h-2 bg-green-400" />
        </div>

        {/* Terminal text */}

        <div
          className="
            px-3
            sm:px-4
            py-2
            sm:py-3
            font-mono
            text-[7px]
            sm:text-[8px]
            leading-5
            text-emerald-300
          "
        >
          <div>&gt; hello_world()</div>

          <div className="text-sky-300">building...</div>

          <div className="text-yellow-300">✓ ready_</div>
        </div>
      </motion.div>

      {/* Floating pixels */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          top-2
          right-5
          sm:top-4
          sm:right-7
          w-3
          h-3
          sm:w-4
          sm:h-4
          bg-yellow-300
        "
      />

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-7
          left-5
          sm:bottom-9
          sm:left-8
          w-2.5
          h-2.5
          sm:w-3
          sm:h-3
          bg-pink-300
        "
      />

      <motion.div
        animate={{
          x: [0, 8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          top-16
          left-0
          sm:top-20
          w-2
          h-2
          bg-white
        "
      />
    </motion.div>
  );
}

/* =========================================================
   MAIN HERO
   ========================================================= */

export default function HeroSection() {
  const sectionRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const [isTablet, setIsTablet] = useState(false);

  const [reduceMotion, setReduceMotion] = useState(false);

  /* =======================================================
     SCROLL
     ======================================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const skyY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const cloudY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const smoothContentY = useSpring(contentY, {
    stiffness: 80,
    damping: 20,
  });

  /* =======================================================
     RESPONSIVE
     ======================================================= */

  useEffect(() => {
    const updateScreen = () => {
      setIsMobile(window.innerWidth < 640);

      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotion = () => {
      setReduceMotion(motionQuery.matches);
    };

    updateScreen();
    updateMotion();

    window.addEventListener("resize", updateScreen);

    motionQuery.addEventListener("change", updateMotion);

    return () => {
      window.removeEventListener("resize", updateScreen);

      motionQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        flex
        items-center
        justify-center
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            #3b82c4 0%,
            #60a5dc 25%,
            #8bc7e8 50%,
            #b8dced 72%,
            #d7eadf 100%
          )
        `,
      }}
    >
      {/* ===================================================
          ATMOSPHERE
          =================================================== */}

      <motion.div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          y: skyY,
        }}
      >
        {/* Soft sky glow */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.18),transparent_38%)]
          "
        />

        {/* Particles */}

        {!isMobile && !reduceMotion && <SkyParticles count={28} />}
      </motion.div>

      {/* ===================================================
          SUN
          =================================================== */}

      <PixelSun />

      {/* ===================================================
          FAR CLOUDS
          =================================================== */}

      <motion.div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          y: cloudY,
        }}
      >
        <PixelCloud
          className="
            top-[9%]
            left-[-5%]
            sm:left-[2%]
          "
          scale={isMobile ? 0.8 : 1.3}
          opacity={0.28}
          duration={18}
        />

        <PixelCloud
          className="
            top-[14%]
            left-[42%]
          "
          scale={isMobile ? 0.7 : 1}
          opacity={0.25}
          duration={20}
          delay={2}
        />

        <PixelCloud
          className="
            top-[7%]
            right-[-5%]
            sm:right-[5%]
          "
          scale={isMobile ? 0.9 : 1.6}
          opacity={0.3}
          duration={22}
        />

        <PixelCloud
          className="
            top-[45%]
            left-[-8%]
          "
          scale={isMobile ? 1 : 1.8}
          opacity={0.3}
          duration={24}
        />

        <PixelCloud
          className="
            top-[48%]
            right-[-7%]
          "
          scale={isMobile ? 0.9 : 1.4}
          opacity={0.28}
          duration={19}
        />
      </motion.div>

      {/* ===================================================
          SMALL CLOUDS
          =================================================== */}

      <SmallCloud
        className="
          top-[28%]
          left-[12%]
          sm:left-[18%]
        "
        delay={1}
      />

      <SmallCloud
        className="
          top-[35%]
          right-[8%]
          sm:right-[15%]
        "
        delay={3}
      />

      {/* ===================================================
          BIRDS
          =================================================== */}

      {!reduceMotion && (
        <>
          <PixelBird top={12} scale={isMobile ? 0.8 : 1.2} duration={24} />

          <PixelBird
            top={20}
            scale={isMobile ? 0.65 : 0.8}
            duration={29}
            delay={8}
          />

          {!isMobile && (
            <PixelBird top={8} scale={0.7} duration={32} delay={15} />
          )}
        </>
      )}

      {/* ===================================================
          PLANE
          =================================================== */}

      {!reduceMotion && <PixelPlane />}

      {/* ===================================================
          KITE
          =================================================== */}

      {!reduceMotion && <PixelKite />}

      {/* ===================================================
          MAIN CONTENT
          =================================================== */}

      <motion.div
        className="
          relative
          z-20
          w-full
          min-h-[100svh]
          flex
          items-center
          justify-center
          px-4
          py-24
          sm:px-6
          sm:py-24
          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            w-full
            max-w-[1200px]
            mx-auto
          "
        >
          <div
            className="
              flex
              flex-col
              lg:grid
              lg:grid-cols-[minmax(0,1fr)_auto]
              items-center
              lg:items-center
              gap-8
              sm:gap-10
              lg:gap-16
              xl:gap-24
          "
          >
            {/* =================================================
                TEXT CONTENT
                ================================================= */}

            <div
              className="
                w-full
                min-w-0
                text-center
                lg:text-left
              "
            >
              {/* Status */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  mb-4
                  sm:mb-5
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span />

                  <span />
                </span>

                <span
                  className="
                    font-mono
                    text-[8px]
                    min-[375px]:text-[9px]
                    sm:text-[10px]
                    tracking-[0.15em]
                    sm:tracking-[0.2em]
                    text-white/80
                  "
                ></span>
              </motion.div>

              {/* Hello */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="
                  font-mono
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  text-sky-950/60
                  mb-1.5
                  sm:mb-2
                  tracking-[0.2em]
                "
              >
                HELLO, I'M
              </motion.p>

              {/* =================================================
                  NAME
                  ================================================= */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="
                  font-pixel
                  text-[clamp(2.5rem,14vw,4rem)]
                  min-[375px]:text-[clamp(2.8rem,14vw,4.5rem)]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  xl:text-9xl
                  tracking-wide
                  leading-none
                  text-white
                  drop-shadow-[0_5px_0_rgba(30,64,175,0.35)]
                  sm:drop-shadow-[0_7px_0_rgba(30,64,175,0.35)]
                  break-words
                "
              >
                RANGGA
                <motion.span
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          opacity: [1, 0, 1],
                        }
                  }
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="
                    text-yellow-300
                  "
                >
                  _
                </motion.span>
              </motion.h1>

              {/* =================================================
                  ROLE
                  ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="
                  mt-4
                  sm:mt-5
                  flex
                  flex-wrap
                  justify-center
                  lg:justify-start
                  items-center
                  gap-2
                  sm:gap-3
                "
              >
                <span
                  className="
                    font-pixel
                    text-[11px]
                    min-[375px]:text-xs
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                    text-sky-950
                  "
                >
                  FULL STACK DEVELOPER
                </span>

                <span
                  className="
                    hidden
                    sm:block
                    w-8
                    h-px
                    bg-sky-950/30
                  "
                />

                <span
                  className="
                    font-mono
                    text-[8px]
                    sm:text-[9px]
                    md:text-[10px]
                    text-sky-950/60
                  "
                >
                  BUILD • DEVELOP • DELIVER
                </span>
              </motion.div>

              {/* =================================================
                  DESCRIPTION
                  ================================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
                className="
                  mt-5
                  sm:mt-6
                  max-w-[600px]
                  mx-auto
                  lg:mx-0
                  text-[11px]
                  min-[375px]:text-xs
                  sm:text-sm
                  md:text-[15px]
                  leading-6
                  sm:leading-7
                  text-sky-950/65
                  font-sans
                "
              >
                Saya merancang dan membangun pengalaman digital full-stack
                dengan memadukan kode yang terstruktur, desain antarmuka yang
                intuitif, dan pendekatan problem solving yang efektif untuk
                menghasilkan solusi digital yang fungsional dan bermakna.
              </motion.p>

              {/* =================================================
                  CTA
                  ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
                className="
                  mt-6
                  sm:mt-8
                  flex
                  flex-wrap
                  justify-center
                  lg:justify-start
                  gap-2.5
                  sm:gap-3
                "
              >
                {/* View Work */}

                <a
                  href="#projects"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-sky-950
                    text-white
                    px-4
                    sm:px-5
                    py-2.5
                    sm:py-3
                    font-pixel
                    text-[8px]
                    sm:text-[9px]
                    md:text-[10px]
                    border-b-4
                    border-sky-950/40
                    hover:-translate-y-1
                    transition-all
                  "
                >
                  LIHAT PROYEK SAYA
                  <ArrowRight
                    className="
                      w-3
                      h-3
                      sm:w-3.5
                      sm:h-3.5
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </a>

                {/* About */}

                <a
                  href="#about"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-4
                    sm:px-5
                    py-2.5
                    sm:py-3
                    bg-white/30
                    backdrop-blur-sm
                    border
                    border-white/50
                    text-sky-950
                    font-pixel
                    text-[8px]
                    sm:text-[9px]
                    md:text-[10px]
                    hover:bg-white/50
                    transition-all
                  "
                >
                  TENTANG SAYA
                </a>
              </motion.div>

              {/* =================================================
                  TECH STACK
                  ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                }}
                className="
                  mt-6
                  sm:mt-8
                  flex
                  items-center
                  justify-center
                  lg:justify-start
                  gap-2.5
                  sm:gap-3
                "
              >
                <span
                  className="
                    font-mono
                    text-[7px]
                    min-[375px]:text-[8px]
                    sm:text-[9px]
                    text-sky-950/45
                    tracking-wide
                  "
                >
                  REACT • TAILWIND CSS
                </span>
              </motion.div>
            </div>

            {/* =================================================
                RIGHT VISUAL
                ================================================= */}

            <div
              className="
                hidden
                sm:flex
                lg:flex
                items-center
                justify-center
                shrink-0
                scale-90
                md:scale-100
                xl:scale-110
              "
            >
              <PixelTerminal reduceMotion={reduceMotion} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM ATMOSPHERE
          ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-20
          sm:h-24
          md:h-28
          lg:h-32
          pointer-events-none
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-emerald-100/35
            to-transparent
          "
        />

        {/* Pixel Horizon */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-4
            sm:h-5
          "
          style={{
            clipPath:
              "polygon(0 70%, 5% 50%, 10% 65%, 15% 40%, 20% 60%, 25% 45%, 30% 65%, 35% 50%, 40% 70%, 45% 45%, 50% 65%, 55% 40%, 60% 60%, 65% 45%, 70% 65%, 75% 50%, 80% 70%, 85% 45%, 90% 60%, 95% 40%, 100% 60%, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* =====================================================
          SCROLL INDICATOR
          ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className="
          absolute
          bottom-3
          sm:bottom-5
          md:bottom-6
          left-1/2
          -translate-x-1/2
          z-30
          flex
          flex-col
          items-center
          gap-1
          sm:gap-2
        "
      >
        <span
          className="
            font-pixel
            text-[6px]
            sm:text-[7px]
            md:text-[8px]
            text-sky-950/45
            tracking-wider
            whitespace-nowrap
          "
        >
          SCROLL UNTUK MENJELAJAH
        </span>

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, 4, 0],
                }
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown
            className="
              w-3
              h-3
              sm:w-4
              sm:h-4
              text-sky-950/45
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
