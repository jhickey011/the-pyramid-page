'use client';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-gray-100 p-4 shadow-md">
  <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-blue-800">
    <Link href="/" className="px-4 py-2 rounded-full hover:bg-blue-100 transition">Home</Link>
    <Link href="/wsl" className="px-4 py-2 rounded-full hover:bg-blue-100 transition">WSL</Link>
    <Link href="/championship" className="px-4 py-2 rounded-full hover:bg-blue-100 transition">Championship</Link>
    <Link href="/national-league" className="px-4 py-2 rounded-full hover:bg-blue-100 transition">National League</Link>
  </div>
</nav>
