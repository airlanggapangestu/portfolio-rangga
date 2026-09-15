import { Chess } from "chess.js";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  RotateCcw,
  Lock,
  Check,
  X,
  Gem,
  Pickaxe,
  ArrowDown,
} from "lucide-react";

/* =========================================================
   CHESS PUZZLE
========================================================= */

const PUZZLE = {
  fen: "r5rk/5p1p/5R2/4B3/8/8/7P/7K w - - 0 1",
  solution: [{ player: "f6", opponent: "f7" }],
};

/* =========================================================
   UNDERGROUND ROCK CEILING
========================================================= */

function CaveCeiling() {
  return (
    <div className="absolute inset-x-0 top-0 z-[5] h-[120px] pointer-events-none overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[80px]"
        style={{
          background:
            "linear-gradient(180deg, #0b0908 0%, #100e0c 48%, #171310 100%)",
        }}
      />

      <div className="absolute left-0 top-[68px] h-[42px] w-[14%] bg-[#24201c]" />
      <div className="absolute left-[11%] top-[76px] h-[30px] w-[12%] bg-[#2d2823]" />
      <div className="absolute left-[23%] top-[70px] h-[38px] w-[9%] bg-[#211d19]" />

      <div className="absolute right-0 top-[64px] h-[46px] w-[15%] bg-[#24201c]" />
      <div className="absolute right-[12%] top-[72px] h-[35px] w-[11%] bg-[#2d2823]" />
      <div className="absolute right-[23%] top-[68px] h-[40px] w-[9%] bg-[#211d19]" />

      <div className="absolute left-[7%] top-[52px] h-[9px] w-[28px] bg-[#302b26]" />
      <div className="absolute left-[31%] top-[60px] h-[7px] w-[18px] bg-[#35302a]" />
      <div className="absolute right-[7%] top-[50px] h-[10px] w-[30px] bg-[#302b26]" />
      <div className="absolute right-[30%] top-[58px] h-[8px] w-[20px] bg-[#35302a]" />
    </div>
  );
}

/* =========================================================
   DEEP CAVE WALLS
========================================================= */

function CaveWalls() {
  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      {/* LEFT */}
      <div className="absolute left-0 top-[80px] bottom-0 w-[11%] min-w-[50px]">
        <div className="absolute inset-0 bg-[#211d19]" />
        <div className="absolute left-0 top-0 h-[35px] w-[30px] bg-[#2d2823]" />
        <div className="absolute left-[30px] top-[15px] h-[28px] w-[24px] bg-[#181512]" />
        <div className="absolute left-0 top-[45px] h-[45px] w-[24px] bg-[#302b26]" />
        <div className="absolute left-[24px] top-[55px] h-[34px] w-[30px] bg-[#1a1714]" />
        <div className="absolute left-0 top-[100px] h-[36px] w-[36px] bg-[#2b2621]" />
        <div className="absolute left-[36px] top-[92px] h-[50px] w-[18px] bg-[#181512]" />
        <div className="absolute left-0 top-[152px] h-[48px] w-[26px] bg-[#302b26]" />
        <div className="absolute left-[26px] top-[165px] h-[38px] w-[28px] bg-[#1a1714]" />
        <div className="absolute left-0 top-[212px] h-[52px] w-[38px] bg-[#25211d]" />
        <div className="absolute right-0 inset-y-0 w-[4px] bg-[#090807]" />
      </div>

      {/* RIGHT */}
      <div className="absolute right-0 top-[80px] bottom-0 w-[11%] min-w-[50px]">
        <div className="absolute inset-0 bg-[#211d19]" />
        <div className="absolute right-0 top-0 h-[35px] w-[30px] bg-[#302b26]" />
        <div className="absolute right-[30px] top-[15px] h-[28px] w-[24px] bg-[#181512]" />
        <div className="absolute right-0 top-[45px] h-[45px] w-[24px] bg-[#2b2621]" />
        <div className="absolute right-[24px] top-[55px] h-[34px] w-[30px] bg-[#1a1714]" />
        <div className="absolute right-0 top-[100px] h-[36px] w-[36px] bg-[#302b26]" />
        <div className="absolute right-[36px] top-[92px] h-[50px] w-[18px] bg-[#181512]" />
        <div className="absolute right-0 top-[152px] h-[48px] w-[26px] bg-[#2b2621]" />
        <div className="absolute right-[26px] top-[165px] h-[38px] w-[28px] bg-[#1a1714]" />
        <div className="absolute right-0 top-[212px] h-[52px] w-[38px] bg-[#25211d]" />
        <div className="absolute left-0 inset-y-0 w-[4px] bg-[#090807]" />
      </div>
    </div>
  );
}

/* =========================================================
   HANGING ROCKS
========================================================= */

function Stalactites() {
  const rocks = [
    { left: "15%", width: 20, height: 42 },
    { left: "29%", width: 14, height: 26 },
    { left: "45%", width: 22, height: 50 },
    { left: "61%", width: 16, height: 30 },
    { left: "77%", width: 22, height: 45 },
  ];

  return (
    <div className="absolute inset-x-0 top-[70px] z-[7] pointer-events-none">
      {rocks.map((rock, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: rock.left,
            width: rock.width,
            height: rock.height,
          }}
          animate={{ y: [0, 2, 0] }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="h-full w-full"
            style={{
              background: index % 2 === 0 ? "#29241f" : "#35302a",
              clipPath:
                "polygon(10% 0,90% 0,100% 18%,78% 42%,65% 58%,50% 100%,35% 58%,18% 43%,0 18%)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================================
   ROOTS
========================================================= */

function DeepRoots() {
  return (
    <div className="absolute inset-0 z-[9] pointer-events-none overflow-hidden">
      <motion.div
        className="absolute left-[13%] top-[30px] h-[220px] w-[13px] bg-[#49301f]"
        style={{
          clipPath:
            "polygon(10% 0,100% 0,82% 20%,100% 38%,62% 52%,80% 68%,42% 100%,25% 78%,40% 57%,8% 43%,25% 23%)",
        }}
        animate={{ x: [0, 2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[14%] top-[30px] h-[190px] w-[12px] bg-[#573621]"
        style={{
          clipPath:
            "polygon(12% 0,100% 0,82% 22%,100% 42%,60% 56%,76% 72%,38% 100%,20% 77%,38% 57%,5% 42%,22% 23%)",
        }}
        animate={{ x: [0, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute left-[13%] top-[105px] h-[7px] w-[65px] rotate-[17deg] bg-[#49301f]" />
      <div className="absolute right-[14%] top-[120px] h-[7px] w-[60px] -rotate-[18deg] bg-[#573621]" />
    </div>
  );
}

/* =========================================================
   CRYSTAL GARDEN
========================================================= */

function CrystalGarden() {
  const crystals = [
    { left: "8%", bottom: "20%", size: 1, color: "#7dd3a8" },
    { left: "17%", bottom: "28%", size: 0.65, color: "#a78bfa" },
    { left: "81%", bottom: "27%", size: 0.8, color: "#a78bfa" },
    { left: "91%", bottom: "19%", size: 0.9, color: "#7dd3a8" },
    { left: "25%", bottom: "13%", size: 0.55, color: "#c4b5fd" },
    { left: "73%", bottom: "12%", size: 0.6, color: "#c4b5fd" },
  ];

  return (
    <div className="absolute inset-0 z-[8] pointer-events-none">
      {crystals.map((crystal, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: crystal.left,
            bottom: crystal.bottom,
            transform: `scale(${crystal.size})`,
            transformOrigin: "bottom center",
          }}
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{
            duration: 2.5 + index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="absolute -inset-10 rounded-full blur-2xl"
            style={{ background: crystal.color, opacity: 0.12 }}
          />

          <div className="relative flex items-end gap-[3px]">
            <div
              className="h-[30px] w-[9px]"
              style={{
                background: crystal.color,
                clipPath: "polygon(50% 0,100% 28%,75% 100%,20% 100%,0 32%)",
              }}
            />
            <div
              className="h-[52px] w-[14px]"
              style={{
                background: crystal.color,
                clipPath: "polygon(50% 0,100% 30%,78% 100%,20% 100%,0 34%)",
              }}
            />
            <div
              className="h-[23px] w-[8px]"
              style={{
                background: crystal.color,
                clipPath: "polygon(50% 0,100% 35%,75% 100%,20% 100%,0 35%)",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================================
   STALAGMITES
========================================================= */

function Stalagmites() {
  const rocks = [
    { left: "6%", width: 26, height: 36 },
    { left: "15%", width: 16, height: 22 },
    { left: "27%", width: 20, height: 28 },
    { left: "70%", width: 18, height: 25 },
    { left: "82%", width: 27, height: 40 },
    { left: "92%", width: 16, height: 23 },
  ];

  return (
    <div className="absolute inset-x-0 bottom-0 z-[7] pointer-events-none">
      {rocks.map((rock, index) => (
        <div
          key={index}
          className="absolute bottom-0"
          style={{
            left: rock.left,
            width: rock.width,
            height: rock.height,
          }}
        >
          <div
            className="h-full w-full"
            style={{
              background: index % 2 === 0 ? "#25211d" : "#302b26",
              clipPath:
                "polygon(0 100%,18% 44%,34% 51%,50% 0,66% 52%,83% 37%,100% 100%)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   FLOATING DUST
========================================================= */

function CaveParticles() {
  const particles = Array.from({ length: 18 }, () => ({
    left: Math.random() * 100,
    top: 20 + Math.random() * 72,
    size: 2 + Math.floor(Math.random() * 3),
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 z-[6] pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute bg-[#b7a889]/30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.05, 0.45, 0.05] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   CRYSTAL LIGHT
========================================================= */

function CrystalLight() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[45%] z-[1] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.12) 0%, rgba(125,211,168,0.04) 42%, transparent 72%)",
        }}
        animate={{ opacity: [0.45, 0.8, 0.45], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[52%] z-[1] h-[180px] w-[280px] -translate-x-1/2 rounded-full bg-[#a78bfa]/5 blur-[80px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </>
  );
}

/* =========================================================
   TORCH
========================================================= */

function Torch({ side = "left" }) {
  return (
    <motion.div
      className="absolute z-[11] pointer-events-none"
      style={{
        [side]: "14%",
        top: "42%",
      }}
      animate={{ opacity: [0.75, 1, 0.8] }}
      transition={{ duration: 1.2, repeat: Infinity }}
    >
      <motion.div
        className="absolute -inset-12 rounded-full bg-[#fbbf24]/10 blur-2xl"
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      <div className="relative h-[34px] w-[7px] bg-[#4a3218]">
        <motion.div
          className="absolute -top-[12px] left-[-3px] h-[14px] w-[13px] bg-[#f97316]"
          animate={{ scaleY: [1, 1.2, 0.9, 1], x: [0, 1, -1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{
            clipPath: "polygon(50% 0,100% 45%,78% 100%,22% 100%,0 45%)",
          }}
        />
        <div className="absolute -top-[7px] left-0 h-[7px] w-[7px] bg-[#fbbf24]" />
      </div>
    </motion.div>
  );
}

/* =========================================================
   CHESS BOARD
========================================================= */

function ChessBoard() {
  const [game, setGame] = useState(() => new Chess(PUZZLE.fen));
  const [selected, setSelected] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);
  const [solved, setSolved] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [status, setStatus] = useState("FIND THE MOVE");
  const [moveNumber, setMoveNumber] = useState(1);

  const squareName = (row, col) => `${String.fromCharCode(97 + col)}${8 - row}`;

  const reset = () => {
    const newGame = new Chess(PUZZLE.fen);
    setGame(newGame);
    setSelected(null);
    setLegalMoves([]);
    setSolved(false);
    setWrong(false);
    setStatus("FIND THE MOVE");
    setMoveNumber(1);
  };

  const clearSelection = () => {
    setSelected(null);
    setLegalMoves([]);
  };

  const selectPiece = (square) => {
    const piece = game.get(square);
    if (!piece) return;
    if (piece.color !== "w") return;
    if (game.turn() !== "w") return;

    const moves = game.moves({ square, verbose: true });
    if (moves.length === 0) return;

    setSelected(square);
    setLegalMoves(moves);
    setWrong(false);
  };

  const handleMove = (sourceSquare, targetSquare) => {
    if (solved) return;
    if (game.turn() !== "w") return;

    const solutionMoves = [
      { from: "f6", to: "a6" },
      { from: "e5", to: "f6" },
      { from: "a6", to: "a8" },
    ];

    const expected = solutionMoves[moveNumber - 1];

    if (
      !expected ||
      sourceSquare !== expected.from ||
      targetSquare !== expected.to
    ) {
      setWrong(true);
      setStatus("WRONG MOVE");

      setTimeout(() => {
        setWrong(false);
        setStatus(`FIND MOVE ${moveNumber}`);
      }, 1000);

      return;
    }

    const newGame = new Chess(game.fen());

    try {
      const move = newGame.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });

      if (!move) return;

      if (moveNumber === 3) {
        if (newGame.isCheckmate()) {
          setGame(newGame);
          setSolved(true);
          setStatus("CHECKMATE // SOLVED");
          clearSelection();
          return;
        }
      }

      setGame(newGame);
      clearSelection();
      setStatus("OPPONENT MOVING...");

      setTimeout(() => {
        makeOpponentMove(newGame, moveNumber);
      }, 450);
    } catch (error) {
      console.error("Chess error:", error);
    }
  };

  const makeOpponentMove = (currentGame, currentMove) => {
    const aiGame = new Chess(currentGame.fen());
    let opponentMove;

    if (currentMove === 1) opponentMove = { from: "f7", to: "f6" };
    if (currentMove === 2) opponentMove = { from: "g8", to: "g7" };

    if (!opponentMove) return;

    try {
      const move = aiGame.move(opponentMove);
      if (!move) return;

      setGame(aiGame);
      setMoveNumber(currentMove + 1);
      setStatus(`FIND MOVE ${currentMove + 1}`);
    } catch (error) {
      console.error("Opponent error:", error);
    }
  };

  const handleSquare = (row, col) => {
    if (solved) return;

    const square = squareName(row, col);

    if (!selected) {
      selectPiece(square);
      return;
    }

    const clickedPiece = game.get(square);

    if (clickedPiece && clickedPiece.color === "w") {
      selectPiece(square);
      return;
    }

    const legal = legalMoves.some((move) => move.to === square);

    if (!legal) {
      clearSelection();
      return;
    }

    handleMove(selected, square);
  };

  const squareStyles = {};

  if (selected) {
    squareStyles[selected] = {
      backgroundColor: "rgba(196,181,253,0.45)",
      boxShadow: "inset 0 0 0 3px #c4b5fd",
    };
  }

  legalMoves.forEach((move) => {
    const targetPiece = game.get(move.to);

    if (!targetPiece) {
      squareStyles[move.to] = {
        background:
          "radial-gradient(circle, rgba(196,181,253,0.75) 0%, rgba(196,181,253,0.75) 16%, transparent 18%)",
      };
    } else {
      squareStyles[move.to] = {
        boxShadow: "inset 0 0 0 4px rgba(196,181,253,0.8)",
      };
    }
  });

  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* Board aura */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa]/10 blur-[60px]"
        animate={{
          opacity: solved ? [0.3, 0.9, 0.3] : [0.2, 0.45, 0.2],
          scale: solved ? [1, 1.12, 1] : [1, 1.04, 1],
        }}
        transition={{ duration: solved ? 1.3 : 4, repeat: Infinity }}
      />

      {/* Board frame */}
      <div className="relative border-[3px] border-[#71657a] bg-[#0d0b0f] p-2 shadow-[6px_6px_0_#050405]">
        {/* Corner accents */}
        <div className="absolute left-[-3px] top-[-3px] h-[6px] w-[30px] bg-[#a78bfa]" />
        <div className="absolute right-[-3px] top-[-3px] h-[6px] w-[30px] bg-[#a78bfa]" />
        <div className="absolute bottom-[-3px] left-[-3px] h-[6px] w-[30px] bg-[#7dd3a8]" />
        <div className="absolute bottom-[-3px] right-[-3px] h-[6px] w-[30px] bg-[#7dd3a8]" />

        {/* Header */}
        <div className="mb-2 flex items-center justify-between border-b-2 border-[#29232f] pb-1.5">
          <div className="flex items-center gap-1.5">
            <Crown size={12} className="text-[#c4b5fd]" />
            <span className="font-pixel text-[7px] text-[#c4b5fd]">
              PUZZLE 01 // MATE IN 3
            </span>
          </div>

          <button
            onClick={reset}
            className="flex items-center gap-1 font-mono text-[7px] text-[#716979] transition-colors hover:text-[#c4b5fd]"
          >
            <RotateCcw size={10} />
            RESET
          </button>
        </div>

        {/* Board */}
        <div className="grid grid-cols-8 border-2 border-[#4d4355]">
          {Array.from({ length: 8 }).map((_, rowIndex) =>
            Array.from({ length: 8 }).map((_, colIndex) => {
              const square = squareName(rowIndex, colIndex);
              const piece = game.get(square);
              const isDark = (rowIndex + colIndex) % 2 === 1;
              const isSelected = selected === square;
              const style = squareStyles[square];

              return (
                <button
                  key={square}
                  onClick={() => handleSquare(rowIndex, colIndex)}
                  className={`
                    relative aspect-square
                    flex items-center justify-center
                    border-0 text-base sm:text-lg
                    transition-all
                    ${isDark ? "bg-[#30283b]" : "bg-[#554964]"}
                  `}
                  style={{
                    ...style,
                    boxShadow: isSelected
                      ? "inset 0 0 0 3px #c4b5fd"
                      : style?.boxShadow,
                  }}
                >
                  {colIndex === 0 && (
                    <span className="absolute left-0.5 top-0.5 font-mono text-[5px] text-[#a69aa9]">
                      {8 - rowIndex}
                    </span>
                  )}

                  {rowIndex === 7 && (
                    <span className="absolute bottom-0.5 right-0.5 font-mono text-[5px] text-[#a69aa9]">
                      {String.fromCharCode(97 + colIndex)}
                    </span>
                  )}

                  {piece && (
                    <motion.span
                      animate={{ y: [0, -1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={
                        piece.color === "w"
                          ? "text-[#f4e9d2] drop-shadow-[1.5px_1.5px_0_#16121a]"
                          : "text-[#c4b5fd] drop-shadow-[1.5px_1.5px_0_#16121a]"
                      }
                    >
                      {getPieceSymbol(piece)}
                    </motion.span>
                  )}
                </button>
              );
            }),
          )}
        </div>

        {/* Status */}
        <div className="mt-2 flex items-center justify-between border-t-2 border-[#29232f] pt-2">
          <div className="flex items-center gap-1.5">
            {solved ? (
              <>
                <Check size={11} className="text-[#7dd3a8]" />
                <span className="font-mono text-[7px] text-[#7dd3a8]">
                  CHECKMATE // SOLVED
                </span>
              </>
            ) : wrong ? (
              <>
                <X size={11} className="text-red-400" />
                <span className="font-mono text-[7px] text-red-400">
                  WRONG MOVE
                </span>
              </>
            ) : (
              <>
                <Lock size={10} className="text-[#776e63]" />
                <span className="font-mono text-[7px] text-[#776e63]">
                  {status}
                </span>
              </>
            )}
          </div>

          <span className="font-mono text-[6px] text-[#5e574e]">
            {selected || "--"}
          </span>
        </div>
      </div>

      {/* Solved badge */}
      <AnimatePresence>
        {solved && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 border-2 border-[#7dd3a8] bg-[#101713] px-3 py-1.5 shadow-[4px_4px_0_#070908]"
          >
            <p className="whitespace-nowrap font-pixel text-[7px] text-[#7dd3a8]">
              PATH UNLOCKED
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   PIECE SYMBOL
========================================================= */

function getPieceSymbol(piece) {
  const pieces = {
    wk: "♔",
    wq: "♕",
    wr: "♖",
    wb: "♗",
    wn: "♘",
    wp: "♙",
    bk: "♚",
    bq: "♛",
    br: "♜",
    bb: "♝",
    bn: "♞",
    bp: "♟",
  };

  return pieces[`${piece.color}${piece.type}`] || "";
}

/* =========================================================
   MAIN
========================================================= */

export default function ChessBoardPage() {
  return (
    <section
      id="chess"
      className="relative min-h-screen overflow-hidden px-4 py-16 text-white sm:px-6 lg:px-8"
      style={{
        background: `
          radial-gradient(
            ellipse at 50% 42%,
            #27212f 0%,
            #211c27 20%,
            #18151a 42%,
            #100e0c 68%,
            #090807 100%
          )
        `,
      }}
    >
      <CaveCeiling />
      <CaveWalls />
      <DeepRoots />
      <Stalactites />
      <Stalagmites />
      <CrystalGarden />
      <CaveParticles />
      <CrystalLight />
      <Torch side="left" />
      <Torch side="right" />

      {/* Content */}
      <div className="relative z-[20] mx-auto flex min-h-screen w-full max-w-[420px] flex-col items-center justify-center py-8">
        {/* HUD */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center gap-2 border-2 border-[#554b60] bg-[#100d12]/90 px-3 py-1.5 shadow-[3px_3px_0_#070607]"
        >
          <motion.span
            className="h-2 w-2 bg-[#a78bfa]"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-mono text-[7px] tracking-[0.18em] text-[#aaa1b2]">
            UNDERGROUND // LEVEL 02
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 text-center"
        >
          <div className="mb-2 flex items-center justify-center gap-2">
            <div className="h-[2px] w-6 bg-[#453d4d]" />
            <Gem size={14} className="text-[#a78bfa]" />
            <div className="h-[2px] w-6 bg-[#453d4d]" />
          </div>

          <h2 className="font-pixel text-lg leading-relaxed text-[#eee7d4] drop-shadow-[3px_3px_0_#080706] sm:text-xl md:text-2xl">
            CHESS
            <span className="text-[#a78bfa]"> GARDEN</span>
          </h2>

          <p className="mx-auto mt-2 max-w-sm text-[10px] leading-4 text-[#99919d] sm:text-[11px]">
            Arena catur tersembunyi di dalam gua. Pecahkan tiga langkah untuk
            membuka jalan.
          </p>
        </motion.div>

        {/* Chess Board */}
        <ChessBoard />

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-14 flex flex-col items-center gap-1.5"
        >
          <div className="flex items-center gap-2 font-mono text-[6px] tracking-[0.2em] text-[#514b54]">
            <Pickaxe size={10} />
            <span>CONTINUE DEEPER</span>
          </div>

          <motion.div
            animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={12} className="text-[#6e6671]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom transition */}
      <div className="absolute inset-x-0 bottom-0 z-[30] h-[100px] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(9,8,7,0.5) 35%, #080706 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 h-[40px] w-full bg-[#0b0908]" />
        <div className="absolute bottom-[34px] left-[5%] h-[14px] w-[80px] bg-[#1f1b18]" />
        <div className="absolute bottom-[40px] right-[6%] h-[15px] w-[90px] bg-[#1f1b18]" />
        <div className="absolute bottom-0 left-1/2 h-[55px] w-[200px] -translate-x-1/2 bg-[#040303]" />
        <div className="absolute bottom-[50px] left-1/2 h-[4px] w-[150px] -translate-x-1/2 bg-[#15110f]" />

        <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 font-mono text-[6px] tracking-[0.25em] text-[#37322d]">
          DESCEND // LEVEL 03
        </div>
      </div>
    </section>
  );
}
