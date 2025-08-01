"use client";
import React, { useState } from "react";

const calculateWinner = (board) => {
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
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

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
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="bg-gray-900"></div>

      <div className="z-10 text-center">
        <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-transparent bg-clip-text">
          TIC TAC TOE
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="w-24 h-24 bg-black/40 backdrop-blur-sm border-4 border-pink-900 text-white text-4xl font-bold rounded-xl shadow-lg hover:scale-105 hover:border-purple-800 transition-transform"
            >
              {cell}
            </button>
          ))}
        </div>

        <p className="mt-6 text-lg text-pink-300 font-medium">
          {winner ? `Winner: ${winner}` : "No winner yet"}
        </p>

        <button
          onClick={restartGame}
          className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-black font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
