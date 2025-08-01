'use client';
import Link from 'next/link';
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-neon flex items-center justify-center p-4">
      <div className="relative w-[300px] h-[260px] sm:w-[400px] sm:h-[340px] md:w-[500px] md:h-[420px]">
        {/* SVG Triangle */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 w-full h-full text-green-500 opacity-10"
        >
          <polygon points="50,0 100,100 0,100" fill="currentColor" />
        </svg>

        {/* League Links */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 text-lg sm:text-xl font-bold z-10">
          <Link href="/wsl" className="neon-glow hover:text-green-400 transition">WSL</Link>
          <Link href="/championship" className="neon-glow hover:text-green-400 transition">Championship</Link>
          <Link href="/national-league/north" className="neon-glow hover:text-green-400 transition">National League North</Link>
          <Link href="/national-league/south" className="neon-glow hover:text-green-400 transition">National League South</Link>
        </div>
      </div>
    </div>
  );
}
