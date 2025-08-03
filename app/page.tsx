'use client';
import Link from 'next/link';

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

const LeagueCard = ({ name, href, icon, tier }: { name: string; href: string; icon?: string; tier?: string }) => (
  <Link
    href={href}
    className="bg-gray-800 hover:bg-gray-700 p-6 rounded-2xl shadow-md transition flex flex-col items-center text-center w-full"
  >
    {icon && (
      <img src={icon} alt={`${name} logo`} className="h-16 mb-4" />
    )}
    <h3 className="text-xl font-semibold">{name}</h3>
    {tier && <p className="text-sm text-pink-300 mt-1">{tier}</p>}
  </Link>
);

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-gray-900 text-pink-400 px-6 py-10 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8">Select a League</h2>

        {/* Tier 1: WSL */}
        <div className="w-full max-w-3xl mb-6">
          <LeagueCard
            name="WSL"
            href="/leagues/wsl"
            icon="/logos/wsl.png"
            tier="Tier 1"
          />
        </div>

        {/* Tier 2: Championship */}
        <div className="w-full max-w-3xl mb-6">
          <LeagueCard
            name="Championship"
            href="/leagues/championship"
            icon="/logos/championship.png"
            tier="Tier 2"
          />
        </div>

        {/* Tier 3: National League North & South */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
          <LeagueCard
            name="Northern Premier"
            href="/leagues/national-north"
            tier="Tier 3"
          />
          <LeagueCard
            name="Southern Premier"
            href="/leagues/southern-premier"
            tier="Tier 3"
          />
        </div>
      </main>
    </>
  );
}
