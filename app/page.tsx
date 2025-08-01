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
        <div className="relative w-full max-w-[800px] h-[700px] sm:h-[750px] md:h-[800px]">
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
            <div className="flex flex-wrap justify-center gap-4 text-center max-w-xs sm:max-w-sm">
  <Link href="/leagues/national-northern-premier" className="break-words hover:text-pink-400 transition font-semibold">
    National League<br />North
  </Link>
  <Link href="/leagues/national-southern-premier" className="break-words hover:text-pink-400 transition font-semibold">
    National League<br />South
  </Link>
</div>
          </div>
        </div>
      </div>
    </>
  );
}
