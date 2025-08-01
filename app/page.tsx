'use client';
import Link from 'next/link';

// Optional NavBar
const NavBar = () => (
  <nav className="w-full bg-gray-950 text-pink-300 p-4 shadow-md">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">League Portal</h1>
      <div className="space-x-4 text-sm sm:text-base">
        <Link href="/" className="hover:text-pink-400 transition">Home</Link>
        <Link href="/leagues/wsl" className="hover:text-pink-400 transition">WSL</Link>
        <Link href="/leagues/championship" className="hover:text-pink-400 transition">Championship</Link>
      </div>
    </div>
  </nav>
);

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-900 text-pink-400 flex items-center justify-center p-4">
        <div className="relative w-full max-w-[600px] h-[600px] sm:h-[650px] md:h-[700px]">
          {/* Background Triangle */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full text-pink-500 opacity-10"
          >
            <polygon points="50,0 100,100 0,100" fill="currentColor" />
          </svg>

          {/* Main Layout: Tiers + League Links */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            {/* Tiers (left side) */}
            <div className="flex flex-col justify-between h-full py-12 pr-4 text-right text-sm sm:text-base text-pink-300 font-medium">
              <div className="h-1/3 flex items-start justify-end">
                <span>Tier 1</span>
              </div>
              <div className="h-1/3 flex items-center justify-end">
                <span>Tier 2</span>
              </div>
              <div className="h-1/3 flex items-end justify-end">
                <span>Tier 3</span>
              </div>
            </div>

            {/* League Links (right side) */}
            <div className="flex flex-col justify-between h-full py-12 gap-4 text-center text-lg sm:text-xl font-bold">
              <div>
                <Link href="/leagues/wsl" className="hover:text-pink-300 transition font-semibold">
                  WSL
                </Link>
              </div>
              <div>
                <Link href="/leagues/championship" className="hover:text-pink-300 transition font-semibold">
                  Championship
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 max-w-xs text-center">
                <Link
                  href="/leagues/national-north"
                  className="break-words hover:text-pink-300 transition font-semibold"
                >
                  National League<br />North
                </Link>
                <Link
                  href="/leagues/national-south"
                  className="break-words hover:text-pink-300 transition font-semibold"
                >
                  National League<br />South
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
