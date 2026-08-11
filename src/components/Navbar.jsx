import React from "react";
import { Sprout } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-emerald-950/90 backdrop-blur-md border-b-4 border-emerald-900 z-50 px-6 py-3 flex justify-between items-center text-xs font-pixel">
      <div className="text-amber-300 flex items-center gap-2">
        <Sprout className="w-4 h-4 text-emerald-400" />
        <span>[RANGGA'S CODE FARM]</span>
      </div>
      <div className="hidden md:flex gap-6 text-emerald-100">
        <a href="#hero" className="hover:text-amber-300 transition-colors">
          MY ROOTS
        </a>
        <a href="#story" className="hover:text-amber-300 transition-colors">
          STORY
        </a>
        <a href="#chess" className="hover:text-amber-300 transition-colors">
          CHESS
        </a>
        <a href="#tech" className="hover:text-amber-300 transition-colors">
          TECH HARVEST
        </a>
        <a href="#workbench" className="hover:text-amber-300 transition-colors">
          WORKBENCH
        </a>
        <a href="#campfire" className="hover:text-amber-300 transition-colors">
          CAMPFIRE
        </a>
      </div>
    </nav>
  );
}
