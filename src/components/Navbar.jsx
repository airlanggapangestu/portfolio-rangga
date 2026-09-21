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
    name: "BERANDA",
    href: "#hero",
    code: "01",
    icon: TreePine,
  },
  {
    name: "PENGALAMAN",
    href: "#experience",
    code: "02",
    icon: Layers3,
  },
  {
    name: "PROYEK",
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
            overflow-hidden
            border
            ${
              scrolled
                ? `
                  border-[#6f604d]/35
                  bg-[#f4ecd9]/88
                  shadow-[0_8px_25px_rgba(58,45,29,0.18)]
                `
                : `
                  border-[#7c6b55]/30
                  bg-[#f8f1df]/72
                  shadow-[0_6px_20px_rgba(58,45,29,0.12)]
                `
            }
            backdrop-blur-md
            transition-all
            duration-500
          `}
          style={{
            clipPath:
              "polygon(0 5px, 5px 5px, 5px 0, calc(100% - 5px) 0, calc(100% - 5px) 5px, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 5px calc(100% - 5px), 0 calc(100% - 5px))",
          }}
        >
          {/* =================================================
              PIXEL CORNERS
          ================================================== */}

          <span className="absolute left-0 top-0 h-2 w-2 bg-[#806f56]" />
          <span className="absolute right-0 top-0 h-2 w-2 bg-[#806f56]" />

          <span className="absolute bottom-0 left-0 h-2 w-2 bg-[#9c896d]/60" />
          <span className="absolute bottom-0 right-0 h-2 w-2 bg-[#9c896d]/60" />

          {/* Top highlight */}
          <div className="absolute inset-x-2 top-0 h-px bg-white/80" />

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="flex h-[58px] items-center justify-between px-3 sm:h-[62px] sm:px-5 lg:px-6">
            {/* =================================================
                LOGO
            ================================================== */}

            <a
              href="#hero"
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >
              {/* Pixel Logo */}
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
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-[#806f56]/50
                  bg-[#e3d3b6]
                  text-[#344b37]
                  shadow-[3px_3px_0_#8a765b]
                  sm:h-10
                  sm:w-10
                "
                style={{
                  clipPath:
                    "polygon(0 3px, 3px 3px, 3px 0, calc(100% - 3px) 0, calc(100% - 3px) 3px, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 3px calc(100% - 3px), 0 calc(100% - 3px))",
                }}
              >
                <Terminal size={17} strokeWidth={2.2} />

                {/* Status pixel */}
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
                    border-[#f5eddb]
                    bg-[#79a95b]
                    shadow-[0_0_5px_rgba(121,169,91,0.5)]
                  "
                />
              </motion.div>

              {/* Brand */}
              <div className="hidden sm:block">
                <div className="font-pixel text-[10px] tracking-[0.16em] text-[#314735]">
                  RANGGA
                  <span className="text-[#668f4f]">.DEV</span>
                </div>

                <div className="mt-1 font-mono text-[6px] tracking-[0.18em] text-[#6d6658]">
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
                      {/* Active background */}
                      <motion.span
                        initial={false}
                        animate={{
                          opacity: active ? 1 : 0,
                        }}
                        className="
                          absolute
                          inset-0
                          border
                          border-[#7b9365]/35
                          bg-[#91b875]/16
                        "
                        style={{
                          clipPath:
                            "polygon(0 3px, 3px 3px, 3px 0, calc(100% - 3px) 0, calc(100% - 3px) 3px, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 3px calc(100% - 3px), 0 calc(100% - 3px))",
                        }}
                      />

                      {/* Active pixel */}
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
                          w-[3px]
                          -translate-y-1/2
                          bg-[#719b55]
                        "
                      />

                      <Icon
                        size={12}
                        className={`
                          relative z-10
                          transition-all duration-300
                          ${
                            active
                              ? "text-[#4d733e]"
                              : "text-[#817968] group-hover:text-[#4d733e]"
                          }
                        `}
                      />

                      <span
                        className={`
                          relative z-10
                          font-pixel
                          text-[8px]
                          tracking-wider
                          transition-colors
                          ${
                            active
                              ? "text-[#314735]"
                              : "text-[#655f54] group-hover:text-[#314735]"
                          }
                        `}
                      >
                        {link.name}
                      </span>

                      <span
                        className={`
                          relative z-10
                          font-mono
                          text-[6px]
                          ${active ? "text-[#709653]" : "text-[#a09888]"}
                        `}
                      >
                        {link.code}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* =================================================
                  CAMPFIRE / CONTACT
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
                  border-[#9b7650]/40
                  bg-[#d8c09b]/35
                  px-3
                  py-2
                  shadow-[3px_3px_0_rgba(92,70,45,0.18)]
                  transition-all
                  duration-200
                  hover:-translate-y-[1px]
                  hover:border-[#c18a4d]/65
                  hover:bg-[#e0bd82]/45
                  active:translate-y-[2px]
                  active:shadow-none
                "
                style={{
                  clipPath:
                    "polygon(0 3px, 3px 3px, 3px 0, calc(100% - 3px) 0, calc(100% - 3px) 3px, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 3px calc(100% - 3px), 0 calc(100% - 3px))",
                }}
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
                  <Flame size={13} className="text-[#c87832]" />
                </motion.span>

                <span className="font-pixel text-[8px] text-[#5b4835]">
                  HUBUNGI SAYA
                </span>

                <ChevronRight
                  size={10}
                  className="
                    text-[#8c765c]
                    transition-transform
                    group-hover:translate-x-1
                  "
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
                flex
                h-9
                w-9
                items-center
                justify-center
                border
                border-[#806f56]/40
                bg-[#e4d6bd]/70
                text-[#40563f]
                shadow-[3px_3px_0_rgba(91,70,46,0.18)]
                transition-all
                hover:bg-[#d8c9ad]
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
                className="
                  overflow-hidden
                  border-t
                  border-[#806f56]/25
                  md:hidden
                "
              >
                <div className="bg-[#eee3cc]/95 p-3 backdrop-blur-xl">
                  {/* Menu Header */}
                  <div className="mb-3 flex items-center justify-between border-b border-[#806f56]/20 px-2 pb-3">
                    <div className="flex items-center gap-2">
                      <motion.span
                        animate={{
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                        }}
                        className="
                          h-1.5
                          w-1.5
                          bg-[#719b55]
                        "
                      />

                      <span className="font-mono text-[7px] tracking-[0.18em] text-[#746c5d]">
                        EXPLORER MENU
                      </span>
                    </div>

                    <span className="font-mono text-[6px] text-[#9a9180]">
                      RANGGA.DEV
                    </span>
                  </div>

                  {/* Links */}
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
                                ? `
                                  border-[#78925f]/40
                                  bg-[#91b875]/15
                                `
                                : `
                                  border-[#806f56]/20
                                  bg-[#fffaf0]/35
                                  hover:bg-[#dce8d0]/40
                                `
                            }
                          `}
                          style={{
                            clipPath:
                              "polygon(0 3px, 3px 3px, 3px 0, calc(100% - 3px) 0, calc(100% - 3px) 3px, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 3px calc(100% - 3px), 0 calc(100% - 3px))",
                          }}
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
                                    ? "border-[#78925f]/40 bg-[#91b875]/20"
                                    : "border-[#806f56]/20 bg-[#d8ccb5]/30"
                                }
                              `}
                            >
                              <Icon
                                size={13}
                                className={
                                  active ? "text-[#4f773e]" : "text-[#817766]"
                                }
                              />
                            </div>

                            <div>
                              <div
                                className={`
                                  font-pixel
                                  text-[9px]
                                  ${
                                    active ? "text-[#314735]" : "text-[#665f53]"
                                  }
                                `}
                              >
                                {link.name}
                              </div>

                              <div className="mt-1 font-mono text-[6px] tracking-wider text-[#9a9180]">
                                AREA_{link.code}
                              </div>
                            </div>
                          </div>

                          <ChevronRight
                            size={13}
                            className={`
                              transition-all
                              group-hover:translate-x-1
                              ${active ? "text-[#63894e]" : "text-[#a39a88]"}
                            `}
                          />
                        </motion.a>
                      );
                    })}

                    {/* =================================================
                        CAMPFIRE
                    ================================================== */}

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
                        border-[#c28b4f]/40
                        bg-[#e4c48e]/35
                        px-4
                        py-3
                        shadow-[3px_3px_0_rgba(92,70,45,0.16)]
                        transition-all
                        hover:bg-[#e6c58e]/50
                        active:translate-y-[2px]
                        active:shadow-none
                      "
                      style={{
                        clipPath:
                          "polygon(0 3px, 3px 3px, 3px 0, calc(100% - 3px) 0, calc(100% - 3px) 3px, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 3px calc(100% - 3px), 0 calc(100% - 3px))",
                      }}
                    >
                      <Flame size={14} className="text-[#c66e2c]" />

                      <span className="font-pixel text-[9px] text-[#664c34]">
                        CAMPFIRE
                      </span>
                    </motion.a>
                  </div>

                  {/* Footer */}
                  <div className="mt-3 flex items-center justify-between border-t border-[#806f56]/20 pt-3">
                    <span className="font-mono text-[6px] tracking-wider text-[#9a9180]">
                      WORLD_NAVIGATION
                    </span>

                    <span className="flex items-center gap-1 font-mono text-[6px] text-[#709653]">
                      <span className="h-1.5 w-1.5 bg-[#709653]" />
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
            className="
              fixed
              inset-0
              z-[90]
              bg-[#3f493b]/15
              backdrop-blur-[2px]
              md:hidden
            "
          />
        )}
      </AnimatePresence>
    </>
  );
}
