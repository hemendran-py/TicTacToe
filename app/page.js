'use client';
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-6Xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-transparent bg-clip-text">
          WELCOME TO TIC TAC TOE
        </h1>

        <Link href="/tictactoe">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
            Play New Game
          </button>

        </Link>
      </div>
    </div>
  );
}
