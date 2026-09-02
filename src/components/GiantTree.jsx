import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* =========================================================
   GIANT TREE — Hanya muncul setelah Home (mulai dari LifeStory)
========================================================= */

export default function GiantTree() {
  const [showTree, setShowTree] = useState(false);
  const { scrollYProgress } = useScroll();

  // Parallax
  const trunkY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const branchLeftY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const branchRightY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const vineY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const leafY = useTransform(scrollYProgress, [0, 1], [0, 130]);

  // Deteksi scroll untuk menampilkan pohon setelah Hero
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // 1 viewport = 1 section (100vh)
      setShowTree(window.scrollY > heroHeight * 0.5); // Muncul setelah setengah dari section kedua
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[5]"
      animate={{ opacity: showTree ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="trunkGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3d2412" />
            <stop offset="30%" stopColor="#5D3A1A" />
            <stop offset="60%" stopColor="#6B4423" />
            <stop offset="100%" stopColor="#3d2412" />
          </linearGradient>

          <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="40%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          <linearGradient id="leafGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
        </defs>

        {/* ============ BATANG UTAMA ============ */}
        <motion.g style={{ y: trunkY }}>
          <path
            d="M 370 -20 
               Q 380 200 375 300 
               Q 370 400 380 500 
               Q 390 550 385 620
               L 415 620
               Q 420 550 415 500
               Q 425 400 420 300
               Q 415 200 430 -20
               Z"
            fill="url(#trunkGrad)"
          />
          <path
            d="M 380 -20 Q 385 200 380 400 Q 378 500 385 620"
            stroke="#4A2E15"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 395 -20 Q 390 250 395 450 Q 398 550 392 620"
            stroke="#3d2412"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M 410 -20 Q 415 200 408 350 Q 405 450 412 620"
            stroke="#4A2E15"
            strokeWidth="4"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M 388 -20 Q 382 300 390 500 Q 395 580 388 620"
            stroke="#6B4423"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <ellipse
            cx="390"
            cy="250"
            rx="8"
            ry="12"
            fill="#3d2412"
            opacity="0.5"
          />
          <ellipse
            cx="410"
            cy="400"
            rx="7"
            ry="10"
            fill="#3d2412"
            opacity="0.4"
          />
        </motion.g>

        {/* ============ CABANG KIRI ============ */}
        <motion.g style={{ y: branchLeftY }}>
          <path
            d="M 372 80 Q 280 60 200 90 Q 150 100 120 130 Q 160 110 200 105 Q 280 85 372 110 Z"
            fill="url(#trunkGrad)"
          />
          <ellipse cx="120" cy="125" rx="35" ry="20" fill="url(#leafGrad)" />
          <ellipse cx="140" cy="110" rx="30" ry="18" fill="url(#leafGrad2)" />
          <ellipse cx="100" cy="110" rx="25" ry="15" fill="#22c55e" />
          <ellipse
            cx="160"
            cy="130"
            rx="20"
            ry="12"
            fill="#4ade80"
            opacity="0.7"
          />

          <path
            d="M 375 180 Q 250 160 170 200 Q 120 220 90 260 Q 130 230 170 215 Q 260 185 375 210 Z"
            fill="url(#trunkGrad)"
          />
          <ellipse cx="90" cy="255" rx="40" ry="22" fill="url(#leafGrad)" />
          <ellipse cx="110" cy="235" rx="35" ry="20" fill="url(#leafGrad2)" />
          <ellipse cx="70" cy="240" rx="28" ry="16" fill="#22c55e" />
          <ellipse
            cx="130"
            cy="260"
            rx="22"
            ry="13"
            fill="#4ade80"
            opacity="0.7"
          />

          <path
            d="M 372 320 Q 280 300 200 330 Q 150 350 120 380 Q 160 360 200 345 Q 290 325 372 350 Z"
            fill="url(#trunkGrad)"
          />
          <ellipse cx="120" cy="375" rx="35" ry="20" fill="url(#leafGrad)" />
          <ellipse cx="140" cy="355" rx="28" ry="16" fill="url(#leafGrad2)" />
          <ellipse cx="100" cy="358" rx="22" ry="13" fill="#22c55e" />

          <path
            d="M 378 450 Q 300 435 220 460 Q 170 475 140 505 Q 180 485 220 475 Q 310 455 378 480 Z"
            fill="url(#trunkGrad)"
          />
          <ellipse cx="140" cy="500" rx="30" ry="18" fill="url(#leafGrad)" />
          <ellipse cx="160" cy="485" rx="25" ry="14" fill="#22c55e" />
        </motion.g>

        {/* ============ CABANG KANAN ============ */}
        <motion.g style={{ y: branchRightY }}>
          <path
            d="M 428 100 Q 520 80 600 110 Q 650 125 680 155 Q 640 135 600 125 Q 520 105 428 130 Z"
            fill="url(#trunkGrad)"
          />
          <ellipse cx="680" cy="150" rx="35" ry="20" fill="url(#leafGrad)" />
          <ellipse cx="660" cy="135" rx="30" ry="18" fill="url(#leafGrad2)" />
          <ellipse cx="700" cy="135" rx="25" ry="15" fill="#22c55e" />
          <ellipse
            cx="640"
            cy="155"
            rx="20"
            ry="12"
            fill="#4ade80"
            opacity="0.7"
          />

          <path
            d="M 425 200 Q 550 180 630 220 Q 680 240 710 280 Q 670 250 630 235 Q 550 205 425 230 Z"
            fill="url(#trunkGrad)"
          />
          <ellipse cx="710" cy="275" rx="40" ry="22" fill="url(#leafGrad)" />
          <ellipse cx="690" cy="255" rx="35" ry="20" fill="url(#leafGrad2)" />
          <ellipse cx="730" cy="260" rx="28" ry="16" fill="#22c55e" />
          <ellipse
            cx="670"
            cy="280"
            rx="22"
            ry="13"
            fill="#4ade80"
            opacity="0.7"
          />

          <path
            d="M 428 340 Q 520 320 600 350 Q 650 370 680 400 Q 640 380 600 365 Q 520 345 428 370 Z"
            fill="url(#trunkGrad)"
          />
          <ellipse cx="680" cy="395" rx="35" ry="20" fill="url(#leafGrad)" />
          <ellipse cx="660" cy="375" rx="28" ry="16" fill="url(#leafGrad2)" />
          <ellipse cx="700" cy="378" rx="22" ry="13" fill="#22c55e" />

          <path
            d="M 422 470 Q 500 455 580 480 Q 630 495 660 525 Q 620 505 580 495 Q 500 475 422 500 Z"
            fill="url(#trunkGrad)"
          />
          <ellipse cx="660" cy="520" rx="30" ry="18" fill="url(#leafGrad)" />
          <ellipse cx="640" cy="505" rx="25" ry="14" fill="#22c55e" />
        </motion.g>

        {/* ============ VINES ============ */}
        <motion.g style={{ y: vineY }}>
          <path
            d="M 350 60 Q 340 120 345 180"
            stroke="#16a34a"
            strokeWidth="3"
            fill="none"
          />
          <ellipse cx="345" cy="185" rx="8" ry="6" fill="#22c55e" />
          <ellipse cx="342" cy="140" rx="7" ry="5" fill="#15803d" />

          <path
            d="M 330 150 Q 320 220 325 280"
            stroke="#15803d"
            strokeWidth="2.5"
            fill="none"
          />
          <ellipse cx="325" cy="285" rx="7" ry="5" fill="#22c55e" />

          <path
            d="M 355 250 Q 345 320 350 380"
            stroke="#16a34a"
            strokeWidth="3"
            fill="none"
          />
          <ellipse cx="350" cy="385" rx="8" ry="6" fill="#4ade80" />
          <ellipse cx="348" cy="330" rx="7" ry="5" fill="#15803d" />

          <path
            d="M 450 70 Q 460 130 455 190"
            stroke="#15803d"
            strokeWidth="3"
            fill="none"
          />
          <ellipse cx="455" cy="195" rx="8" ry="6" fill="#22c55e" />
          <ellipse cx="458" cy="150" rx="7" ry="5" fill="#16a34a" />

          <path
            d="M 470 160 Q 480 230 475 290"
            stroke="#16a34a"
            strokeWidth="2.5"
            fill="none"
          />
          <ellipse cx="475" cy="295" rx="7" ry="5" fill="#4ade80" />

          <path
            d="M 445 260 Q 455 330 450 390"
            stroke="#15803d"
            strokeWidth="3"
            fill="none"
          />
          <ellipse cx="450" cy="395" rx="8" ry="6" fill="#22c55e" />
          <ellipse cx="452" cy="340" rx="7" ry="5" fill="#15803d" />
        </motion.g>

        {/* ============ DAUN DI BATANG ============ */}
        <motion.g style={{ y: leafY }}>
          <ellipse
            cx="360"
            cy="150"
            rx="15"
            ry="9"
            fill="#22c55e"
            opacity="0.8"
          />
          <ellipse
            cx="440"
            cy="200"
            rx="16"
            ry="10"
            fill="#16a34a"
            opacity="0.7"
          />
          <ellipse
            cx="358"
            cy="280"
            rx="14"
            ry="8"
            fill="#4ade80"
            opacity="0.6"
          />
          <ellipse
            cx="442"
            cy="350"
            rx="15"
            ry="9"
            fill="#15803d"
            opacity="0.7"
          />
          <ellipse
            cx="360"
            cy="420"
            rx="13"
            ry="7"
            fill="#22c55e"
            opacity="0.6"
          />
          <ellipse
            cx="440"
            cy="480"
            rx="14"
            ry="8"
            fill="#16a34a"
            opacity="0.5"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
