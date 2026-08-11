import React, { useState } from "react";
import { Bug, Check, Sprout } from "lucide-react"; // 👈 Ganti Plant dengan Sprout

export default function CodeWorkbench() {
  const [fixed, setFixed] = useState(false);

  return (
    <section
      id="workbench"
      className="py-20 px-6 bg-pixel-greenhouse border-t-8 border-emerald-950 text-white"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-xl md:text-2xl font-pixel text-amber-300 flex items-center justify-center gap-3">
          <Bug className="w-7 h-7 text-amber-400" /> CHAPTER 5: CODE WORKBENCH
        </h2>

        <div className="bg-slate-950 border-4 border-emerald-500 p-6 rounded-xl shadow-2xl text-left font-mono text-xs space-y-4">
          <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-2">
            <span>// GREENHOUSE_DEBUGGER.js</span>
            <span className={fixed ? "text-emerald-400" : "text-amber-400"}>
              STATUS: {fixed ? "ACTIVE" : "BUGGED"}
            </span>
          </div>

          <div className="space-y-2 bg-slate-900 p-4 rounded border border-slate-800">
            <p className="text-purple-400">
              function <span className="text-blue-400">growPlant</span>() &#123;
            </p>
            <p className="pl-4 text-emerald-300">
              let water ={" "}
              <span
                className={
                  fixed ? "text-amber-400 font-bold" : "text-red-400 font-bold"
                }
              >
                {fixed ? "true" : "false"}
              </span>
              ;
            </p>
            <p className="pl-4 text-slate-500">
              // Klik tombol di bawah untuk perbaiki bug!
            </p>
            <p className="text-purple-400">&#125;</p>
          </div>

          <button
            onClick={() => setFixed(!fixed)}
            className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-pixel text-xs rounded border-2 border-amber-600 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {fixed ? (
              <>
                {" "}
                <Check className="w-4 h-4 text-emerald-800" /> CODE FIXED!
                TANAMAN SUBUR{" "}
              </>
            ) : (
              <>
                {" "}
                <Bug className="w-4 h-4" /> FIX THE BUG{" "}
              </>
            )}
          </button>
        </div>

        {/* Visual Tanaman Menggunakan Icon Sprout */}
        <div className="flex justify-center transition-all duration-500">
          <div
            className={`p-4 rounded-full border-4 ${fixed ? "bg-emerald-800 border-emerald-400" : "bg-amber-950 border-amber-800"}`}
          >
            <Sprout
              className={`w-12 h-12 transition-all ${fixed ? "text-emerald-400 animate-pulse scale-110" : "text-amber-700"}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
