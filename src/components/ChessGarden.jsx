import { Chess } from "chess.js";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, RotateCcw, Lock, Check, X } from "lucide-react";

/* =========================================================
   CHESS PUZZLE
   MATE IN 3

   FEN:
   r5rk/5p1p/5R2/4B3/8/8/7P/7K w - - 0 1

   Solution:
   1. Ra6
      ... f6
   2. Bxf6
      ... Rg7
   3. Rxa8#

   ========================================================= */

const PUZZLE = {
  fen: "r5rk/5p1p/5R2/4B3/8/8/7P/7K w - - 0 1",

  solution: [
    {
      player: "f6",
      opponent: "f7",
    },
  ],
};

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

  /* =======================================================
     RESET
  ======================================================= */

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

  /* =======================================================
     CLEAR SELECTION
  ======================================================= */

  const clearSelection = () => {
    setSelected(null);
    setLegalMoves([]);
  };

  /* =======================================================
     SELECT PIECE
  ======================================================= */

  const selectPiece = (square) => {
    const piece = game.get(square);

    if (!piece) {
      return;
    }

    // Puzzle dimainkan oleh putih
    if (piece.color !== "w") {
      return;
    }

    if (game.turn() !== "w") {
      return;
    }

    const moves = game.moves({
      square,
      verbose: true,
    });

    if (moves.length === 0) {
      return;
    }

    setSelected(square);
    setLegalMoves(moves);
    setWrong(false);
  };

  /* =======================================================
     CHECK PLAYER MOVE
  ======================================================= */

  const handleMove = (sourceSquare, targetSquare) => {
    if (solved) {
      return;
    }

    if (game.turn() !== "w") {
      return;
    }

    /*
      Puzzle solution:

      1. Rf6-a6
      2. Be5xf6
      3. Ra6xa8#
    */

    const solutionMoves = [
      {
        from: "f6",
        to: "a6",
      },
      {
        from: "e5",
        to: "f6",
      },
      {
        from: "a6",
        to: "a8",
      },
    ];

    const expected = solutionMoves[moveNumber - 1];

    console.log("PLAYER MOVE:", sourceSquare, "->", targetSquare);

    console.log("EXPECTED:", expected);

    // =========================================
    // WRONG MOVE
    // =========================================

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

    // =========================================
    // VALIDATE WITH CHESS.JS
    // =========================================

    const newGame = new Chess(game.fen());

    try {
      const move = newGame.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });

      if (!move) {
        return;
      }

      // =======================================
      // THIRD MOVE = CHECKMATE
      // =======================================

      if (moveNumber === 3) {
        if (newGame.isCheckmate()) {
          setGame(newGame);
          setSolved(true);
          setStatus("CHECKMATE // SOLVED");

          clearSelection();

          return;
        }
      }

      // =======================================
      // UPDATE PLAYER POSITION
      // =======================================

      setGame(newGame);
      clearSelection();

      // =======================================
      // OPPONENT RESPONSE
      // =======================================

      setStatus("OPPONENT MOVING...");

      setTimeout(() => {
        makeOpponentMove(newGame, moveNumber);
      }, 450);
    } catch (error) {
      console.error("Chess error:", error);
    }
  };

  /* =======================================================
     OPPONENT MOVE
  ======================================================= */

  const makeOpponentMove = (currentGame, currentMove) => {
    const aiGame = new Chess(currentGame.fen());

    /*
      Setelah:

      1. Ra6

      Black:
      ...f6
    */

    let opponentMove;

    if (currentMove === 1) {
      opponentMove = {
        from: "f7",
        to: "f6",
      };
    }

    /*
      Setelah:

      2. Bxf6

      Black:
      ...Rg7
    */

    if (currentMove === 2) {
      opponentMove = {
        from: "g8",
        to: "g7",
      };
    }

    if (!opponentMove) {
      return;
    }

    try {
      const move = aiGame.move(opponentMove);

      if (!move) {
        console.error("Opponent move invalid");

        return;
      }

      setGame(aiGame);

      setMoveNumber(currentMove + 1);

      setStatus(`FIND MOVE ${currentMove + 1}`);
    } catch (error) {
      console.error("Opponent error:", error);
    }
  };

  /* =======================================================
     CLICK SQUARE
  ======================================================= */

  const handleSquare = (row, col) => {
    if (solved) {
      return;
    }

    const square = squareName(row, col);

    console.log("SQUARE CLICK:", square);

    // =========================================
    // BELUM MEMILIH BIDAK
    // =========================================

    if (!selected) {
      selectPiece(square);
      return;
    }

    // =========================================
    // KLIK BIDAK PUTIH LAIN
    // =========================================

    const clickedPiece = game.get(square);

    if (clickedPiece && clickedPiece.color === "w") {
      selectPiece(square);
      return;
    }

    // =========================================
    // CEK LEGAL MOVE
    // =========================================

    const legal = legalMoves.some((move) => move.to === square);

    if (!legal) {
      clearSelection();
      return;
    }

    // =========================================
    // EXECUTE PUZZLE MOVE
    // =========================================

    const sourceSquare = selected;

    handleMove(sourceSquare, square);
  };

  /* =======================================================
     DRAG & DROP
  ======================================================= */

  const handleDragMove = (sourceSquare, targetSquare) => {
    if (solved) {
      return false;
    }

    const legal = legalMoves.some((move) => move.to === targetSquare);

    /*
      Kalau belum memilih bidak melalui click,
      kita tetap izinkan drag.
    */

    handleMove(sourceSquare, targetSquare);

    clearSelection();

    return legal;
  };

  /* =======================================================
     SQUARE STYLES
  ======================================================= */

  const squareStyles = {};

  // Selected square
  if (selected) {
    squareStyles[selected] = {
      backgroundColor: "rgba(196,181,253,0.45)",

      boxShadow: "inset 0 0 0 3px #c4b5fd",
    };
  }

  // Legal moves
  legalMoves.forEach((move) => {
    const targetPiece = game.get(move.to);

    // Normal move
    if (!targetPiece) {
      squareStyles[move.to] = {
        background:
          "radial-gradient(circle, rgba(196,181,253,0.75) 0%, rgba(196,181,253,0.75) 16%, transparent 18%)",
      };
    }

    // Capture
    else {
      squareStyles[move.to] = {
        boxShadow: "inset 0 0 0 4px rgba(196,181,253,0.8)",
      };
    }
  });

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      id="chess"
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 text-white overflow-hidden flex items-center justify-center py-20"
      style={{
        background:
          "linear-gradient(180deg, #12100e 0%, #1a1512 25%, #26221e 50%, #1a1512 75%, #0d0b09 100%)",
      }}
    >
      <div className="relative mx-auto w-full max-w-[430px]">
        {/* Glow */}

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa]/10 blur-[70px]"
          animate={{
            opacity: solved ? [0.3, 0.9, 0.3] : [0.25, 0.45, 0.25],

            scale: solved ? [1, 1.12, 1] : [1, 1.04, 1],
          }}
          transition={{
            duration: solved ? 1.3 : 4,
            repeat: Infinity,
          }}
        />

        {/* Board frame */}

        <div className="relative border-[4px] border-[#786b59] bg-[#100e0c] p-3 shadow-[7px_7px_0_#080706]">
          {/* Header */}

          <div className="mb-3 flex items-center justify-between border-b-2 border-[#302b25] pb-2">
            <div className="flex items-center gap-2">
              <Crown size={15} className="text-[#c4b5fd]" />

              <span className="font-pixel text-[8px] text-[#c4b5fd]">
                PUZZLE 01 // MATE IN 3
              </span>
            </div>

            <button
              onClick={reset}
              className="flex items-center gap-1 font-mono text-[8px] text-[#71695e] transition-colors hover:text-[#c4b5fd]"
            >
              <RotateCcw size={11} />
              RESET
            </button>
          </div>

          {/* Board */}

          <div className="grid grid-cols-8 border-2 border-[#4d453b]">
            {Array.from({
              length: 8,
            }).map((_, rowIndex) =>
              Array.from({
                length: 8,
              }).map((_, colIndex) => {
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
                      border-0
                      text-xl
                      transition-all
                      sm:text-2xl
                      ${isDark ? "bg-[#30283b]" : "bg-[#554964]"}
                    `}
                    style={{
                      ...style,

                      boxShadow: isSelected
                        ? "inset 0 0 0 3px #c4b5fd"
                        : style?.boxShadow,
                    }}
                  >
                    {/* Coordinates */}

                    {colIndex === 0 && (
                      <span className="absolute left-1 top-0.5 font-mono text-[6px] text-[#a69aa9]">
                        {8 - rowIndex}
                      </span>
                    )}

                    {rowIndex === 7 && (
                      <span className="absolute bottom-0.5 right-1 font-mono text-[6px] text-[#a69aa9]">
                        {String.fromCharCode(97 + colIndex)}
                      </span>
                    )}

                    {/* Piece */}

                    {piece && (
                      <motion.span
                        animate={{
                          y: [0, -1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={
                          piece.color === "w"
                            ? "text-[#f4e9d2] drop-shadow-[2px_2px_0_#16121a]"
                            : "text-[#c4b5fd] drop-shadow-[2px_2px_0_#16121a]"
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

          <div className="mt-3 flex items-center justify-between border-t-2 border-[#302b25] pt-3">
            <div className="flex items-center gap-2">
              {solved ? (
                <>
                  <Check size={13} className="text-[#7dd3a8]" />

                  <span className="font-mono text-[8px] text-[#7dd3a8]">
                    CHECKMATE // SOLVED
                  </span>
                </>
              ) : wrong ? (
                <>
                  <X size={13} className="text-red-400" />

                  <span className="font-mono text-[8px] text-red-400">
                    WRONG MOVE
                  </span>
                </>
              ) : (
                <>
                  <Lock size={12} className="text-[#776e63]" />

                  <span className="font-mono text-[8px] text-[#776e63]">
                    {status}
                  </span>
                </>
              )}
            </div>

            <span className="font-mono text-[7px] text-[#5e574e]">
              {selected || "--"}
            </span>
          </div>
        </div>

        {/* Solved */}

        <AnimatePresence>
          {solved && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              className="absolute -bottom-14 left-1/2 -translate-x-1/2 border-2 border-[#7dd3a8] bg-[#101713] px-4 py-2 shadow-[4px_4px_0_#070908]"
            >
              <p className="whitespace-nowrap font-pixel text-[8px] text-[#7dd3a8]">
                PATH UNLOCKED
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
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
   DEFAULT EXPORT
========================================================= */

export default ChessBoard;
