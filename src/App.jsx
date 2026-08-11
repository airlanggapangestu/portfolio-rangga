import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LifeStory from "./components/LifeStory";
import ChessGarden from "./components/ChessGarden";
import TechHarvest from "./components/TechHarvest";
import CodeWorkbench from "./components/CodeWorkbench";
import CampfireConnect from "./components/CampfireConnect";

export default function App() {
  return (
    /* Menggunakan cursor-crosshair agar seluruh website bergaya retro/game */
    <div className="min-h-screen bg-slate-900 text-white cursor-crosshair selection:bg-amber-400 selection:text-slate-950 font-sans">
      <Navbar />
      <HeroSection />
      <LifeStory />
      <ChessGarden />
      <TechHarvest />
      <CodeWorkbench />
      <CampfireConnect />
    </div>
  );
}
