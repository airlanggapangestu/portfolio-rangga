import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Leaf } from "lucide-react";

const NAV_LINKS = [
  { name: "HOME", href: "#hero" },
  { name: "ABOUT", href: "#hero" },
  { name: "PROJECTS", href: "#story" },
  { name: "SKILLS", href: "#tech" },
  { name: "CONTACT", href: "#campfire" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-8 pt-3 sm:pt-4">
      <div
        className={`max-w-4xl mx-auto rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between backdrop-blur-md border transition-all duration-300 ${
          scrolled
            ? "bg-emerald-950/85 border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.7)]"
            : "bg-emerald-950/50 border-white/5 shadow-none"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#CampfireConnect"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-900/80 flex items-center justify-center text-amber-300 transition-transform duration-300 group-hover:-translate-y-0.5">
            <Terminal className="w-4 h-4" />
            <Leaf
              className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 text-emerald-400 rotate-12 transition-transform duration-300 group-hover:rotate-[24deg] group-hover:scale-110"
              strokeWidth={2.5}
            />
          </div>
          <span className="font-pixel text-[11px] sm:text-xs text-amber-300 tracking-wider">
            RANGGA<span className="text-emerald-400">.DEV</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-pixel text-[9.5px] text-emerald-100/80 hover:text-amber-300 transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-emerald-400 to-amber-300 rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Action Button */}
          <a
            href="#contact"
            className="relative font-pixel text-[9px] text-emerald-950 bg-amber-400 px-4 py-2 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-[0_6px_20px_-6px_rgba(251,191,36,0.7)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-950 animate-pulse" />
            HIRE ME
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          className="md:hidden w-9 h-9 rounded-xl bg-emerald-900/70 flex items-center justify-center text-amber-300 hover:bg-emerald-900 active:scale-95 transition-all"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-4xl mx-auto mt-2 bg-emerald-950/95 border border-white/10 rounded-2xl p-3 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                  className="font-pixel text-[10.5px] text-emerald-100/85 hover:text-amber-300 hover:bg-white/5 px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-amber-400/50 text-[9px]">&gt;</span>
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-1.5 font-pixel text-[10px] text-center bg-amber-400 text-emerald-950 py-2.5 rounded-full font-bold hover:bg-amber-300 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-950 animate-pulse" />
                HIRE ME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
