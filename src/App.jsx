import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LifeStory from "./components/LifeStory";
import TechHarvest from "./components/TechHarvest";
import PlaySection from "./components/PlaySection";
import ChessGarden from "./components/ChessGarden";
import CodeWorkbench from "./components/CodeWorkbench";
import CampfireConnect from "./components/CampfireConnect";
import MusicPlayer from "./components/MusicPlayer";
import GiantTree from "./components/GiantTree";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white cursor-crosshair selection:bg-amber-400 selection:text-slate-950 font-sans relative">
      {/* ===== GIANT TREE LAYER (fixed, global, menyambung) ===== */}

      <Navbar />
      <HeroSection />
      <LifeStory />
      <TechHarvest />
      <CampfireConnect />
      {/* <PlaySection />
      <ChessGarden />
      <CodeWorkbench /> */}
      <MusicPlayer />
    </div>
  );
}
