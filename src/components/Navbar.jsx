import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Terminal,
  TreePine,
  Layers3,
  FolderGit2,
  Flame,
  ChevronRight,
} from "lucide-react";

const NAV_LINKS = [
  {
    name: "HOME",
    href: "#hero",
    code: "01",
    icon: TreePine,
  },
  {
    name: "EXPERIENCE",
    href: "#experience",
    code: "02",
    icon: Layers3,
  },
  {
    name: "PROJECTS",
    href: "#projects",
    code: "03",
    icon: FolderGit2,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);

      const sections = NAV_LINKS.map((link) => {
        const section = document.querySelector(link.href);

        if (!section) return null;

        const rect = section.getBoundingClientRect();

        return {
          name: link.name,
          distance: Math.abs(rect.top - 100),
        };
      }).filter(Boolean);

      if (sections.length) {
        const closest = sections.sort((a, b) => a.distance - b.distance)[0];

        setActiveSection(closest.name);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav className="fixed left-1/2 top-3 z-[100] w-[calc(100%-20px)] -translate-x-1/2 sm:top-4 sm:w-[calc(100%-32px)] lg:w-[calc(100%-64px)] lg:max-w-7xl">
        <motion.div
          animate={{
            y: scrolled ? -1 : 0,
          }}
          className={`
            relative
            border
            ${
              scrolled
                ? "border-white/20 bg-[#10191a]/75 shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
                : "border-white/25 bg-[#172426]/45 shadow-[0_6px_25px_rgba(0,0,0,0.12)]"
            }
            backdrop-blur-md
            transition-all duration-500
          `}
        >
          {/* =================================================
              PIXEL CORNERS
          ================================================== */}

          <span className="absolute -left-px -top-px h-2 w-2 bg-white/60" />
          <span className="absolute -right-px -top-px h-2 w-2 bg-white/60" />
          <span className="absolute -bottom-px -left-px h-2 w-2 bg-white/30" />
          <span className="absolute -bottom-px -right-px h-2 w-2 bg-white/30" />

          {/* subtle top light */}
          <div className="absolute inset-x-0 top-0 h-px bg-white/25" />

          <div className="flex h-[58px] items-center justify-between px-3 sm:h-[62px] sm:px-5 lg:px-6">
            {/* =================================================
                LOGO
            ================================================== */}

            <a
              href="#hero"
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >
              {/* Logo box */}
              <motion.div
                whileHover={{
                  y: -2,
                  rotate: -2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="
                  relative
                  flex h-9 w-9
                  items-center justify-center
                  border
                  border-white/25
                  bg-black/25
                  text-white
                  shadow-[3px_3px_0_rgba(0,0,0,0.25)]
                  sm:h-10 sm:w-10
                "
              >
                <Terminal size={17} strokeWidth={2} />

                {/* status pixel */}
                <motion.span
                  animate={{
                    opacity: [0.35, 1, 0.35],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    -right-1
                    -top-1
                    h-2.5
                    w-2.5
                    border
                    border-white/30
                    bg-[#8bcf70]
                  "
                />
              </motion.div>

              {/* Name */}
              <div className="hidden sm:block">
                <div className="font-pixel text-[10px] tracking-[0.16em] text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.35)]">
                  RANGGA
                  <span className="text-[#9bd47e]">.DEV</span>
                </div>

                <div className="mt-1 font-mono text-[6px] tracking-[0.18em] text-white/50">
                  DIGITAL JOURNEY
                </div>
              </div>
            </a>

            {/* =================================================
                DESKTOP NAV
            ================================================== */}

            <div className="hidden items-center md:flex">
              <div className="flex items-center gap-1">
                {NAV_LINKS.map((link) => {
                  const Icon = link.icon;
                  const active = activeSection === link.name;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="group relative flex items-center gap-2 px-3 py-2.5"
                    >
                      {/* active block */}
                      <motion.span
                        initial={false}
                        animate={{
                          opacity: active ? 1 : 0,
                        }}
                        className="
                          absolute
                          inset-0
                          border
                          border-white/15
                          bg-white/10
                        "
                      />

                      {/* active pixel */}
                      <motion.span
                        initial={false}
                        animate={{
                          height: active ? 18 : 0,
                          opacity: active ? 1 : 0,
                        }}
                        className="
                          absolute
                          left-0
                          top-1/2
                          w-[2px]
                          -translate-y-1/2
                          bg-[#a5d987]
                        "
                      />

                      <Icon
                        size={12}
                        className={`
                          relative z-10
                          transition-all duration-300
                          ${
                            active
                              ? "text-[#b8df96]"
                              : "text-white/50 group-hover:text-white/85"
                          }
                        `}
                      />

                      <span
                        className={`
                          relative z-10
                          font-pixel text-[8px]
                          tracking-wider
                          transition-colors
                          ${
                            active
                              ? "text-white"
                              : "text-white/60 group-hover:text-white"
                          }
                        `}
                      >
                        {link.name}
                      </span>

                      <span
                        className={`
                          relative z-10
                          font-mono text-[6px]
                          ${active ? "text-[#9bd47e]" : "text-white/30"}
                        `}
                      >
                        {link.code}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* =================================================
                  CAMPFIRE BUTTON
              ================================================== */}

              <a
                href="#campfire"
                className="
                  group
                  ml-3
                  flex
                  items-center
                  gap-2
                  border
                  border-white/20
                  bg-white/10
                  px-3
                  py-2
                  shadow-[3px_3px_0_rgba(0,0,0,0.25)]
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:-translate-y-[1px]
                  hover:border-[#f4b35d]/50
                  hover:bg-[#f4b35d]/15
                  active:translate-y-[2px]
                  active:shadow-none
                "
              >
                <motion.span
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.65, 1, 0.65],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <Flame size={13} className="text-[#ffc36b]" />
                </motion.span>

                <span className="font-pixel text-[8px] text-white/80">
                  CAMPFIRE
                </span>

                <ChevronRight
                  size={10}
                  className="text-white/40 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* =================================================
                MOBILE BUTTON
            ================================================== */}

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              className="
                flex h-9 w-9
                items-center justify-center
                border border-white/25
                bg-black/20
                text-white
                shadow-[3px_3px_0_rgba(0,0,0,0.25)]
                transition-all
                hover:bg-white/10
                active:translate-y-[2px]
                active:shadow-none
                md:hidden
              "
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                  >
                    <X size={17} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.7,
                    }}
                  >
                    <Menu size={17} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================== */}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="overflow-hidden border-t border-white/15 md:hidden"
              >
                <div className="bg-[#101719]/90 p-3 backdrop-blur-xl">
                  {/* menu header */}
                  <div className="mb-3 flex items-center justify-between border-b border-white/10 px-2 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-[#9bd47e]" />

                      <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
                        EXPLORER MENU
                      </span>
                    </div>

                    <span className="font-mono text-[6px] text-white/30">
                      RANGGA.DEV
                    </span>
                  </div>

                  {/* links */}
                  <div className="space-y-2">
                    {NAV_LINKS.map((link, index) => {
                      const Icon = link.icon;
                      const active = activeSection === link.name;

                      return (
                        <motion.a
                          key={link.name}
                          href={link.href}
                          onClick={closeMenu}
                          initial={{
                            opacity: 0,
                            x: -12,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.05,
                          }}
                          className={`
                            group
                            relative
                            flex
                            items-center
                            justify-between
                            border
                            px-3
                            py-3
                            transition-all
                            ${
                              active
                                ? "border-white/20 bg-white/10"
                                : "border-white/10 bg-black/15 hover:bg-white/5"
                            }
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`
                                flex
                                h-7
                                w-7
                                items-center
                                justify-center
                                border
                                ${
                                  active
                                    ? "border-[#a5d987]/40 bg-[#9bd47e]/10"
                                    : "border-white/10 bg-black/15"
                                }
                              `}
                            >
                              <Icon
                                size={13}
                                className={
                                  active ? "text-[#a5d987]" : "text-white/45"
                                }
                              />
                            </div>

                            <div>
                              <div
                                className={`
                                  font-pixel text-[9px]
                                  ${active ? "text-white" : "text-white/60"}
                                `}
                              >
                                {link.name}
                              </div>

                              <div className="mt-1 font-mono text-[6px] tracking-wider text-white/25">
                                AREA_{link.code}
                              </div>
                            </div>
                          </div>

                          <ChevronRight
                            size={13}
                            className={`
                              transition-all
                              group-hover:translate-x-1
                              ${active ? "text-[#a5d987]" : "text-white/25"}
                            `}
                          />
                        </motion.a>
                      );
                    })}

                    {/* campfire */}
                    <motion.a
                      href="#campfire"
                      onClick={closeMenu}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.2,
                      }}
                      className="
                        mt-3
                        flex
                        items-center
                        justify-center
                        gap-2
                        border
                        border-[#f4b35d]/30
                        bg-[#f4b35d]/10
                        px-4
                        py-3
                        shadow-[3px_3px_0_rgba(0,0,0,0.25)]
                        transition-all
                        hover:bg-[#f4b35d]/15
                        active:translate-y-[2px]
                        active:shadow-none
                      "
                    >
                      <Flame size={14} className="text-[#ffc36b]" />

                      <span className="font-pixel text-[9px] text-[#ffd28d]">
                        CAMPFIRE
                      </span>
                    </motion.a>
                  </div>

                  {/* footer */}
                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="font-mono text-[6px] tracking-wider text-white/25">
                      WORLD_NAVIGATION
                    </span>

                    <span className="flex items-center gap-1 font-mono text-[6px] text-[#8fbd73]/60">
                      <span className="h-1.5 w-1.5 bg-[#8fbd73]" />
                      ONLINE
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>

      {/* =====================================================
          MOBILE BACKDROP
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeMenu}
            className="fixed inset-0 z-[90] bg-black/35 backdrop-blur-[2px] md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
