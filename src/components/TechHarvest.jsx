import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, Layout, Layers } from "lucide-react";

const projects = [
  {
    title: "COZY FARM GAME",
    tech: "React • PixiJS • Tailwind",
    desc: "Simulasi pertanian pixel art dengan manajemen state yang kompleks.",
    Icon: Gamepad2,
  },
  {
    title: "RESTAURANT WEB APP",
    tech: "Next.js • Express • MongoDB",
    desc: "Aplikasi e-commerce kuliner lengkap dengan fitur transaksi.",
    Icon: Layout,
  },
];

export default function TechHarvest() {
  return (
    <section
      id="tech"
      className="py-20 px-6 bg-pixel-farm border-t-8 border-emerald-950"
    >
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h2 className="text-xl md:text-2xl font-pixel text-emerald-950 bg-amber-300 py-3 px-6 rounded-lg border-4 border-amber-900 shadow-lg inline-block">
          CHAPTER 4: TECH HARVEST
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-emerald-950 border-4 border-amber-400 p-6 rounded-xl shadow-2xl text-white space-y-4"
            >
              <div className="flex justify-between items-center border-b border-emerald-800 pb-3">
                <p.Icon className="w-8 h-8 text-amber-400" />
                <span className="text-[10px] font-pixel text-amber-300 bg-emerald-900 px-2 py-1 rounded border border-emerald-700 flex items-center gap-1">
                  <Layers className="w-3 h-3" /> {p.tech}
                </span>
              </div>
              <h3 className="font-pixel text-sm md:text-base text-amber-300">
                {p.title}
              </h3>
              <p className="text-xs text-emerald-200 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
