'use client';
import Link from 'next/link';

// Sample icons (swap these with real ones as needed)
const leagues = [
  {
    name: 'WSL',
    href: '/leagues/wsl',
    tier: 'Tier 1',
    icon: '/images/wsl.png', // Use empty string '' if no icon
  },
  {
    name: 'Championship',
    href: '/leagues/championship',
    tier: 'Tier 2',
    icon: '/images/championship.png',
  },
  {
    name: 'National League North',
    href: '/leagues/national-north',
    tier: 'Tier 3',
    icon: '',
  },
  {
    name: 'National League South',
    href: '/leagues/national-south',
    tier: 'Tier 3',
    icon: '',
  },
];

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
      <main className="min-h-screen bg-gray-900 text-pink-400 px-6 py-10 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8">Select a League</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
          {leagues.map((league) => (
            <Link
              key={league.href}
              href={league.href}
              className="bg-gray-800 hover:bg-gray-700 p-6 rounded-2xl shadow-md transition flex flex-col items-center text-center"
            >
              {league.icon && (
                <img
                  src={league.icon}
                  alt={`${league.name} logo`}
                  className="h-16 mb-4"
                />
              )}
              <h3 className="text-xl font-semibold">{league.name}</h3>
              <p className="text-sm text-pink-300 mt-1">{league.tier}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
