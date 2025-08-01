'use client';
import Link from 'next/link';

// Simple NavBar component
const NavBar = () => (
  <nav className="w-full bg-gray-950 text-green-300 p-4 shadow-md">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">League Portal</h1>
      <div className="space-x-4 text-sm sm:text-base">
        <Link href="/" className="hover:text-green-400 transition">Home</Link>
        <Link href="/league/WSL" className="hover:text-green-400 transition">WSL</Link>
        <Link href="/league/Championship" className="hover:text-green-400 transition">Championship</Link>
      </div>
    </div>
  </nav>
);

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-900 text-green-300 flex items-center justify-center p-4">
        <div className="relative w-full max-w-[600px] h-[500px] sm:h-[550px] md:h-[600px]">
          {/* Background Triangle */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full text-pink-500 opacity-10"
          >
            <polygon points="50,0 100,100 0,100" fill="currentColor" />
          </svg>

          {/* League Links */}
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 text-lg sm:text-xl font-bold z-10">
            <Link href="/leagues/WSL" className="neon-glow hover:text-green-400 transition">WSL</Link>
            <Link href="/leagues/Championship" className="neon-glow hover:text-green-400 transition">Championship</Link>
            <div className="flex gap-6">
              <Link href="/leagues/national-league<br />Northern-Premier<" className="neon-glow hover:text-green-400 transition">
                National League North
              </Link>
              <Link href="/league/national-league<br />Southern-Premier<" className="neon-glow hover:text-green-400 transition">
                National League South
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
