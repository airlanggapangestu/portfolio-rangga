import React from "react";
import { motion } from "framer-motion";
import { Flame, FlameKindling, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function CampfireConnect() {
  return (
    <section
      id="campfire"
      className="py-24 px-6 bg-pixel-night border-t-8 border-amber-900 text-white text-center space-y-8 relative overflow-hidden"
    >
      {/* Background Starlight Detail */}
      <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-75" />
      <div className="absolute top-20 right-1/3 w-1.5 h-1.5 bg-amber-200 rounded-full animate-pulse" />
      <div className="absolute top-12 right-10 w-1 h-1 bg-sky-200 rounded-full animate-ping opacity-50" />

      {/* Visual Campfire Illustration Container */}
      <div className="max-w-xl mx-auto space-y-6 z-10 relative">
        <div className="flex justify-center items-center gap-4 relative py-4">
          {/* Kayu Bakar Kiri */}
          <FlameKindling className="w-10 h-10 text-amber-800 -rotate-12" />

          {/* Api Unggun Utama dengan Animasi Glowing */}
          <div className="relative">
            <div className="absolute -inset-2 bg-amber-500/30 rounded-full blur-xl animate-pulse" />
            <Flame className="w-16 h-16 text-amber-400 fill-amber-500 animate-bounce relative z-10" />
          </div>

          {/* Kayu Bakar Kanan */}
          <FlameKindling className="w-10 h-10 text-amber-800 rotate-12" />
        </div>

        <h2 className="text-xl md:text-2xl font-pixel text-amber-400">
          CHAPTER 6: CAMPFIRE & CONNECT
        </h2>
        <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-md mx-auto">
          Mari singgah sejenak di sekitar api unggun. Saya selalu terbuka untuk
          diskusi proyek, kolaborasi, atau peluang magang!
        </p>

        {/* Tombol Tautan / Kontak dengan Brand Icons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4 font-pixel text-xs">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-700 hover:bg-emerald-600 px-5 py-3 rounded border-2 border-emerald-400 shadow-[0_4px_0_0_#064e3b] flex items-center gap-2 transition-all"
          >
            <FaGithub className="w-4 h-4 text-emerald-200" /> GITHUB
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-700 hover:bg-blue-600 px-5 py-3 rounded border-2 border-blue-400 shadow-[0_4px_0_0_#1e3a8a] flex items-center gap-2 transition-all"
          >
            <FaLinkedin className="w-4 h-4 text-blue-200" /> LINKEDIN
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:email@contoh.com"
            className="bg-purple-700 hover:bg-purple-600 px-5 py-3 rounded border-2 border-purple-400 shadow-[0_4px_0_0_#581c87] flex items-center gap-2 transition-all"
          >
            <Mail className="w-4 h-4 text-purple-200" /> EMAIL
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="/cv.pdf"
            download
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-5 py-3 rounded border-2 border-amber-600 shadow-[0_4px_0_0_#78350f] flex items-center gap-2 transition-all"
          >
            <FileText className="w-4 h-4 text-amber-950" /> DOWNLOAD CV PDF
          </motion.a>
        </div>

        {/* Footer Text */}
        <div className="pt-12 text-[10px] font-pixel text-slate-500">
          © {new Date().getFullYear()} RANGGA. BUILT WITH REACT & TAILWIND.
        </div>
      </div>
    </section>
  );
}
