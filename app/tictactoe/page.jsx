"use client";
import React, { useState, useEffect } from "react";

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winningLine, setWinningLine] = useState([]);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (currentBoard) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return { player: currentBoard[a], line: [a, b, c] };
      }
    }
    return null;
  };

  useEffect(() => {
    const result = calculateWinner(board);
    if (result) {
      setWinner(result.player);
      setWinningLine(result.line);
    }
  }, [board]);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const restartGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setWinningLine([]);
    setWinner(null);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-sans px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-transparent bg-clip-text">
        Tic Tac Toe
      </h1>

      <p className="mb-4 text-gray-400 text-lg">
        {winner ? `🎉 Winner: ${winner}` : `Turn: ${isXNext ? "X" : "O"}`}
      </p>

      <div className="grid grid-cols-3 gap-3">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`w-24 h-24 sm:w-28 sm:h-28 bg-neutral-900 border border-neutral-700 rounded-lg text-3xl sm:text-4xl font-bold flex items-center justify-center transition-transform duration-200 ease-out
              ${
                winningLine.includes(index)
                  ? "bg-green-600 text-white animate-pulse"
                  : ""
              }
              ${!cell ? "hover:scale-105" : ""}
            `}
          >
            {cell}
          </button>
        ))}
      </div>

      <button
        onClick={restartGame}
        className="mt-6 bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-xl transition duration-300"
      >
        Restart
      </button>

      <footer className="mt-8 text-sm text-gray-500">
        made with 💗 and 💻 by hemendran
      </footer>
    </div>
  );
};

export default TicTacToe;
