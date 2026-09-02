import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Swords,
  Crown,
  CheckCircle2,
  RotateCcw,
  Lightbulb,
  Heart,
  HeartCrack,
  X,
  Sparkles,
  Moon,
  Star,
} from "lucide-react";

/* =========================================================
   BOARD CONSTANTS
========================================================= */

const FILES = ["a", "b", "c", "d"];
const RANKS = [4, 3, 2, 1];
const MAX_ATTEMPTS = 2;

/* =========================================================
   PUZZLE DATA
========================================================= */

const PUZZLE = {
  title: "The Royal Trap",
  difficulty: "MATE IN 2",
  description:
    "Putih jalan. Kamu bebas bergerak — hasil baru dinilai setelah 2 langkah Putih selesai.",
  pieces: {
    a1: { type: "king", color: "white" },
    b1: { type: "pawn", color: "black" },
    c1: { type: "rook", color: "white" },
    b4: { type: "king", color: "black" },
  },
};

/* =========================================================
   PIECE GLYPHS
========================================================= */

const PIECES = {
  white: { king: "♔", rook: "♖", pawn: "♙" },
  black: { king: "♚", rook: "♜", pawn: "♟" },
};

/* =========================================================
   COORDINATE HELPERS
========================================================= */

function getCoordinate(square) {
  return { x: FILES.indexOf(square[0]), y: Number(square[1]) - 1 };
}

function getSquare(x, y) {
  if (x < 0 || x > 3 || y < 0 || y > 3) return null;
  return `${FILES[x]}${y + 1}`;
}

function clonePieces(pieces) {
  return { ...pieces };
}

function opponentOf(color) {
  return color === "white" ? "black" : "white";
}

/* =========================================================
   FIND KING
========================================================= */

function findKing(pieces, color) {
  for (const square of Object.keys(pieces)) {
    const piece = pieces[square];
    if (piece && piece.type === "king" && piece.color === color) return square;
  }
  return null;
}

/* =========================================================
   ATTACK RULES
========================================================= */

function rookAttacks(from, target, pieces) {
  const start = getCoordinate(from);
  const end = getCoordinate(target);
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  if (dx !== 0 && dy !== 0) return false;

  const stepX = dx === 0 ? 0 : dx > 0 ? 1 : -1;
  const stepY = dy === 0 ? 0 : dy > 0 ? 1 : -1;

  let x = start.x + stepX;
  let y = start.y + stepY;

  while (x !== end.x || y !== end.y) {
    const square = getSquare(x, y);
    if (pieces[square]) return false;
    x += stepX;
    y += stepY;
  }
  return true;
}

function pawnAttacks(from, target, color) {
  const start = getCoordinate(from);
  const end = getCoordinate(target);
  const direction = color === "white" ? 1 : -1;
  return end.y - start.y === direction && Math.abs(end.x - start.x) === 1;
}

function kingAttacks(from, target) {
  const start = getCoordinate(from);
  const end = getCoordinate(target);
  return (
    Math.abs(end.x - start.x) <= 1 &&
    Math.abs(end.y - start.y) <= 1 &&
    !(end.x === start.x && end.y === start.y)
  );
}

function isSquareAttacked(square, byColor, pieces) {
  for (const from of Object.keys(pieces)) {
    const piece = pieces[from];
    if (!piece || piece.color !== byColor) continue;

    if (piece.type === "rook" && rookAttacks(from, square, pieces)) return true;
    if (piece.type === "pawn" && pawnAttacks(from, square, piece.color))
      return true;
    if (piece.type === "king" && kingAttacks(from, square)) return true;
  }
  return false;
}

function isInCheck(pieces, color) {
  const kingSquare = findKing(pieces, color);
  if (!kingSquare) return true;
  return isSquareAttacked(kingSquare, opponentOf(color), pieces);
}

/* =========================================================
   LEGAL DESTINATIONS PER PIECE
========================================================= */

function getRookMoves(square, pieces, color) {
  const result = [];
  const { x, y } = getCoordinate(square);
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (const [dx, dy] of directions) {
    let nx = x + dx;
    let ny = y + dy;

    while (true) {
      const target = getSquare(nx, ny);
      if (!target) break;

      const targetPiece = pieces[target];
      if (!targetPiece) {
        result.push(target);
      } else {
        if (targetPiece.color !== color && targetPiece.type !== "king") {
          result.push(target);
        }
        break;
      }
      nx += dx;
      ny += dy;
    }
  }
  return result;
}

function getKingMoves(square, pieces, color) {
  const result = [];
  const { x, y } = getCoordinate(square);

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;

      const target = getSquare(x + dx, y + dy);
      if (!target) continue;

      const targetPiece = pieces[target];
      if (targetPiece && targetPiece.type === "king") continue;
      if (targetPiece && targetPiece.color === color) continue;

      const simulated = clonePieces(pieces);
      delete simulated[square];
      simulated[target] = { type: "king", color };

      if (!isInCheck(simulated, color)) result.push(target);
    }
  }
  return result;
}

function getPawnMoves(square, pieces, color) {
  const result = [];
  const { x, y } = getCoordinate(square);
  const direction = color === "white" ? 1 : -1;

  const forward = getSquare(x, y + direction);
  if (forward && !pieces[forward]) result.push(forward);

  for (const dx of [-1, 1]) {
    const target = getSquare(x + dx, y + direction);
    if (!target) continue;
    const targetPiece = pieces[target];
    if (
      targetPiece &&
      targetPiece.color !== color &&
      targetPiece.type !== "king"
    ) {
      result.push(target);
    }
  }
  return result;
}

function getPseudoLegalMoves(square, pieces) {
  const piece = pieces[square];
  if (!piece) return [];
  if (piece.type === "rook") return getRookMoves(square, pieces, piece.color);
  if (piece.type === "king") return getKingMoves(square, pieces, piece.color);
  if (piece.type === "pawn") return getPawnMoves(square, pieces, piece.color);
  return [];
}

function applyMove(pieces, from, to) {
  const next = clonePieces(pieces);
  const movingPiece = next[from];
  delete next[from];
  delete next[to];
  next[to] = movingPiece;
  return next;
}

function isLegalMove(pieces, from, to, color) {
  const piece = pieces[from];
  if (!piece || piece.color !== color) return false;

  const destinations = getPseudoLegalMoves(from, pieces);
  if (!destinations.includes(to)) return false;

  const next = applyMove(pieces, from, to);
  if (isInCheck(next, color)) return false;

  return true;
}

function getAllLegalMoves(pieces, color) {
  const result = [];
  for (const from of Object.keys(pieces)) {
    const piece = pieces[from];
    if (!piece || piece.color !== color) continue;

    for (const to of getPseudoLegalMoves(from, pieces)) {
      if (isLegalMove(pieces, from, to, color)) result.push({ from, to });
    }
  }
  return result;
}

function isCheckmate(pieces, color) {
  return (
    isInCheck(pieces, color) && getAllLegalMoves(pieces, color).length === 0
  );
}

function isStalemate(pieces, color) {
  return (
    !isInCheck(pieces, color) && getAllLegalMoves(pieces, color).length === 0
  );
}

function findMatingMove(pieces, color) {
  for (const move of getAllLegalMoves(pieces, color)) {
    const next = applyMove(pieces, move.from, move.to);
    if (isCheckmate(next, opponentOf(color))) return move;
  }
  return null;
}

function chooseBlackReply(pieces) {
  const replies = getAllLegalMoves(pieces, "black");
  if (replies.length === 0) return null;

  const saferReply = replies.find((reply) => {
    const after = applyMove(pieces, reply.from, reply.to);
    return !findMatingMove(after, "white");
  });

  return saferReply || replies[0];
}

/* =========================================================
   BOARD LAYOUT
========================================================= */

function createBoard(pieces) {
  const board = [];
  for (const rank of RANKS) {
    for (const file of FILES) {
      const square = `${file}${rank}`;
      board.push({ square, piece: pieces[square] || null });
    }
  }
  return board;
}

/* =========================================================
   DEKORASI PIXEL FANTASY
========================================================= */

function FloatingStars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 12 }, () => ({
        top: Math.random() * 80,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        size: 3 + Math.random() * 5,
      })),
    [],
  );

  return (
    <>
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            background: "#fbbf24",
            boxShadow: "0 0 8px 2px rgba(251,191,36,0.4)",
            zIndex: 1,
          }}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 2 + i, repeat: Infinity, delay: s.delay }}
        />
      ))}
    </>
  );
}

function PixelSparkles({ top, left, delay = 0 }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-0"
      style={{ top, left }}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
      transition={{ duration: 3, repeat: Infinity, delay }}
    >
      <Sparkles className="w-5 h-5 text-purple-300/40" />
    </motion.div>
  );
}

export default function ChessGarden() {
  const [pieces, setPieces] = useState(() => clonePieces(PUZZLE.pieces));
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);
  const [turn, setTurn] = useState("white");
  const [moveNumber, setMoveNumber] = useState(1);
  const [thinking, setThinking] = useState(false);
  const [solved, setSolved] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [message, setMessage] = useState(
    "Giliran Putih — pilih bidak untuk digerakkan",
  );
  const [lastMove, setLastMove] = useState(null);
  const [popup, setPopup] = useState(null);

  const board = useMemo(() => createBoard(pieces), [pieces]);
  const attemptsLeft = MAX_ATTEMPTS - failedAttempts;

  const blackInCheck = isInCheck(pieces, "black");
  const whiteInCheck = isInCheck(pieces, "white");

  /* ============ RESET HELPERS ============ */

  const resetBoard = () => {
    setPieces(clonePieces(PUZZLE.pieces));
    setSelectedSquare(null);
    setLegalMoves([]);
    setTurn("white");
    setMoveNumber(1);
    setThinking(false);
    setLastMove(null);
  };

  const resetPuzzleCompletely = () => {
    resetBoard();
    setSolved(false);
    setFailedAttempts(0);
    setShowHint(false);
    setPopup(null);
    setMessage("Giliran Putih — pilih bidak untuk digerakkan");
  };

  const failAttempt = (reason) => {
    const next = failedAttempts + 1;

    if (next >= MAX_ATTEMPTS) {
      setPopup({
        type: "fail",
        text: `${reason} Sudah ${MAX_ATTEMPTS}x percobaan — puzzle diulang total.`,
      });
      setTimeout(() => resetPuzzleCompletely(), 2000);
      return;
    }

    setFailedAttempts(next);
    resetBoard();
    setPopup({
      type: "fail",
      text: `${reason} Papan direset, sisa ${MAX_ATTEMPTS - next} percobaan.`,
    });
    setTimeout(() => setPopup(null), 2000);
  };

  /* ============ BLACK AUTO-REPLY ============ */

  const playBlackReply = (afterFirstMove) => {
    setThinking(true);
    setTurn("black");
    setMessage("Hitam sedang berpikir...");

    setTimeout(() => {
      const reply = chooseBlackReply(afterFirstMove);

      if (!reply) {
        setThinking(false);
        failAttempt("🤝 Stalemate — bukan checkmate.");
        return;
      }

      const afterReply = applyMove(afterFirstMove, reply.from, reply.to);
      setPieces(afterReply);
      setLastMove(reply);
      setThinking(false);

      if (isCheckmate(afterReply, "white")) {
        failAttempt("😵 Raja Putih malah terjebak.");
        return;
      }

      setMoveNumber(2);
      setTurn("white");
      setMessage("Giliran kamu — langkah ke-2. Buat checkmate!");
    }, 650);
  };

  /* ============ SQUARE CLICK ============ */

  const handleSquareClick = (square) => {
    if (solved || thinking || turn !== "white") return;

    const clickedPiece = pieces[square];

    if (!selectedSquare) {
      if (!clickedPiece || clickedPiece.color !== "white") return;

      const destinations = getAllLegalMoves(pieces, "white")
        .filter((move) => move.from === square)
        .map((move) => move.to);

      setSelectedSquare(square);
      setLegalMoves(destinations);
      setMessage(
        destinations.length
          ? "Pilih kotak tujuan yang ditandai"
          : "Bidak ini tidak punya langkah legal.",
      );
      return;
    }

    if (clickedPiece && clickedPiece.color === "white") {
      const destinations = getAllLegalMoves(pieces, "white")
        .filter((move) => move.from === square)
        .map((move) => move.to);

      setSelectedSquare(square);
      setLegalMoves(destinations);
      return;
    }

    if (!legalMoves.includes(square)) {
      setMessage("❌ Langkah itu tidak legal untuk bidak ini.");
      return;
    }

    const from = selectedSquare;
    const to = square;
    const nextPosition = applyMove(pieces, from, to);

    setPieces(nextPosition);
    setSelectedSquare(null);
    setLegalMoves([]);
    setLastMove({ from, to });

    if (moveNumber === 1) {
      if (isCheckmate(nextPosition, "black")) {
        setSolved(true);
        setPopup({
          type: "win",
          text: "CHECKMATE! Puzzle solved dalam 1 langkah!",
        });
        return;
      }

      if (isStalemate(nextPosition, "black")) {
        failAttempt("🤝 Stalemate — bukan checkmate.");
        return;
      }

      playBlackReply(nextPosition);
      return;
    }

    if (isCheckmate(nextPosition, "black")) {
      setSolved(true);
      setPopup({ type: "win", text: "CHECKMATE! Puzzle solved!" });
    } else {
      failAttempt("⏱️ Dua langkah selesai, belum checkmate.");
    }
  };

  /* ============ RENDER ============ */

  return (
    <section
      id="chess"
      className="relative py-14 sm:py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0f0a1e 0%, #1a0f2e 25%, #1e1b3a 50%, #1a0f2e 75%, #0f0a1e 100%)",
      }}
    >
      {/* ===== DEKORASI FANTASY ===== */}
      <div className="absolute inset-0 z-0">
        {/* Pattern pixel */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#8b5cf6 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Moon */}
        <Moon className="absolute top-6 right-8 w-6 h-6 text-purple-300/40" />

        {/* Sparkles */}
        <PixelSparkles top="15%" left="10%" />
        <PixelSparkles top="30%" left="80%" delay={1} />
        <PixelSparkles top="50%" left="15%" delay={2} />
        <PixelSparkles top="65%" left="85%" delay={0.5} />

        {/* Stars */}
        <FloatingStars />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="text-base sm:text-lg font-pixel text-purple-300 inline-flex items-center gap-2 bg-purple-950/60 border border-purple-700/60 rounded-lg px-4 py-2.5">
            <Swords className="w-4 h-4 text-amber-300" />
            CHESS GARDEN
          </h2>
        </motion.div>

        {/* INFO BAR */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="font-pixel text-[8px] text-amber-300 bg-purple-950/60 border border-purple-700/60 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
            <Crown className="w-3 h-3 text-amber-300" />
            {PUZZLE.difficulty}
          </span>
          <span className="flex items-center gap-1 bg-purple-950/60 border border-purple-700/60 rounded-lg px-3 py-1.5">
            {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => (
              <span key={i}>
                {i < attemptsLeft ? (
                  <Heart className="w-3 h-3 text-pink-400 fill-pink-400/70" />
                ) : (
                  <HeartCrack className="w-3 h-3 text-red-500/70" />
                )}
              </span>
            ))}
          </span>
        </div>

        {/* PAPAN CATUR */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-[360px]">
            {/* Meja fantasy */}
            <div className="bg-purple-950 border-4 border-purple-800 rounded-xl p-2.5 shadow-[0_0_40px_-5px_rgba(139,92,246,0.3)]">
              <div className="grid grid-cols-4 grid-rows-4 w-full aspect-square overflow-hidden rounded-md border-2 border-purple-800 relative">
                {board.map(({ square, piece }, index) => {
                  const row = Math.floor(index / 4);
                  const col = index % 4;
                  const isDark = (row + col) % 2 === 1;
                  const isSelected = selectedSquare === square;
                  const isLegal = legalMoves.includes(square);
                  const isKingInCheck =
                    piece?.type === "king" &&
                    (piece.color === "black" ? blackInCheck : whiteInCheck);
                  const isLastMoveSquare =
                    lastMove &&
                    (lastMove.from === square || lastMove.to === square);

                  return (
                    <button
                      key={square}
                      type="button"
                      onClick={() => handleSquareClick(square)}
                      className={`
                        relative w-full h-full flex items-center justify-center
                        select-none transition-colors duration-150
                        ${isDark ? "bg-purple-800" : "bg-purple-200"}
                        ${isSelected ? "ring-4 ring-inset ring-amber-400" : ""}
                        hover:brightness-110
                      `}
                    >
                      {isLastMoveSquare && !isSelected && (
                        <span className="absolute inset-0 bg-amber-300/20" />
                      )}

                      {isKingInCheck && (
                        <span className="absolute inset-0 bg-red-500/40 animate-pulse" />
                      )}

                      {isLegal && !piece && (
                        <span className="absolute w-2.5 h-2.5 rounded-full bg-purple-950/60 z-20" />
                      )}

                      {isLegal && piece && (
                        <span className="absolute inset-1 rounded-full border-4 border-amber-500/70 z-20 pointer-events-none" />
                      )}

                      {piece && <ChessPiece piece={piece} />}
                    </button>
                  );
                })}

                {/* POPUP OVERLAY */}
                <AnimatePresence>
                  {popup && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    >
                      <motion.div
                        initial={{ y: 10 }}
                        animate={{ y: 0 }}
                        className={`mx-3 p-4 rounded-xl border-2 text-center ${
                          popup.type === "win"
                            ? "bg-purple-950/95 border-amber-400"
                            : "bg-red-950/95 border-red-400"
                        }`}
                      >
                        {popup.type === "win" ? (
                          <>
                            <CheckCircle2 className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                            <p className="font-pixel text-[10px] text-amber-300">
                              CHECKMATE!
                            </p>
                            <p className="text-[9px] text-purple-200/70 mt-1">
                              Puzzle berhasil diselesaikan!
                            </p>
                          </>
                        ) : (
                          <>
                            <X className="w-8 h-8 text-red-400 mx-auto mb-2" />
                            <p className="font-pixel text-[10px] text-red-300">
                              GAGAL!
                            </p>
                            <p className="text-[9px] text-red-200/70 mt-1">
                              {popup.text}
                            </p>
                          </>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* STATUS TEXT */}
          <p className="text-[9px] sm:text-[10px] text-purple-300/70 font-mono mt-3 text-center">
            {message}
          </p>

          {/* TOMBOL AKSI */}
          <div className="flex items-center gap-2 mt-3">
            <button
              type="button"
              onClick={() => setShowHint((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-purple-700 bg-purple-950/60 text-purple-300 font-pixel text-[8px] hover:text-amber-300 transition"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              HINT
            </button>
            <button
              type="button"
              onClick={() => resetPuzzleCompletely()}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border-2 border-amber-500 bg-purple-950/60 text-amber-300 font-pixel text-[8px] hover:bg-purple-900 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {solved ? "MAIN LAGI" : "RESET"}
            </button>
          </div>

          {/* HINT TEXT */}
          <AnimatePresence>
            {showHint && !solved && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="text-[9px] text-purple-200/70 mt-2 text-center max-w-sm"
              >
                Pikirkan bagaimana Raja Putih bisa membuka jalur untuk Benteng,
                sambil membatasi ke mana Raja Hitam bisa lari.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CHESS PIECE — fantasy styled glyph
========================================================= */

function ChessPiece({ piece }) {
  const isWhite = piece.color === "white";

  return (
    <span className="relative z-10 flex items-center justify-center w-[78%] h-[78%]">
      <span
        className={`absolute inset-0 rounded-full ${
          isWhite
            ? "bg-gradient-to-b from-white to-gray-300"
            : "bg-gradient-to-b from-purple-900 to-black"
        }`}
        style={{
          boxShadow: isWhite
            ? "inset 0 -3px 5px rgba(0,0,0,0.3), inset 0 2px 3px rgba(255,255,255,0.9), 0 3px 4px rgba(0,0,0,0.35)"
            : "inset 0 -3px 5px rgba(0,0,0,0.7), inset 0 2px 3px rgba(255,255,255,0.15), 0 3px 4px rgba(0,0,0,0.55)",
        }}
      />
      <span
        className={`relative leading-none select-none text-[clamp(28px,7vw,48px)] ${
          isWhite ? "text-white" : "text-purple-950"
        }`}
        style={{
          WebkitTextStroke: isWhite ? "1.5px #6b7280" : "1.5px #a78bfa",
          filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.45))",
        }}
      >
        {PIECES[piece.color][piece.type]}
      </span>
    </span>
  );
}
