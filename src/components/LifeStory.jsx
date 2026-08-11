import React from "react";
import { motion } from "framer-motion";
import { Trophy, CircleDot, Award } from "lucide-react"; // 👈 Ganti Dribbble dengan CircleDot

export default function LifeStory() {
  return (
    <section
      id="story"
      className="py-20 px-6 bg-pixel-farm border-t-8 border-emerald-950"
    >
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl md:text-2xl font-pixel text-emerald-950 bg-amber-300 py-3 px-6 rounded-lg border-4 border-amber-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] inline-block"
        >
          CHAPTER 2: NON-IT JOURNEY
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 items-stretch text-left">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-amber-100 border-4 border-amber-900 p-6 rounded-lg shadow-xl space-y-4 text-slate-800"
          >
            <h3 className="font-pixel text-sm text-amber-950 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-600" /> TROPHY CABINET
            </h3>
            <p className="text-xs md:text-sm leading-relaxed">
              Pengalaman melatih logika melalui kompetisi catur dan menjaga
              kerja sama tim serta stamina lewat olahraga sepak bola.
            </p>
          </motion.div>

          <div className="bg-amber-200 border-4 border-amber-900 p-6 rounded-lg grid grid-cols-2 gap-4 text-center items-center">
            <div className="bg-amber-100 p-4 rounded border-2 border-amber-800 shadow-md flex flex-col items-center">
              <Award className="w-10 h-10 text-amber-600 mb-2 animate-bounce" />
              <span className="font-pixel text-[10px] text-amber-950 block">
                CHESS CERT.
              </span>
            </div>
            <div className="bg-amber-100 p-4 rounded border-2 border-amber-800 shadow-md flex flex-col items-center">
              <CircleDot className="w-10 h-10 text-emerald-700 mb-2" />{" "}
              {/* 👈 Menggunakan CircleDot */}
              <span className="font-pixel text-[10px] text-amber-950 block">
                FOOTBALL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
