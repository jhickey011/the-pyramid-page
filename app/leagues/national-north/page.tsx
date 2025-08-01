'use client';
import Link from 'next/link';
import { useState } from 'react';

const teams = [
  'Team A',
  'Team B',
  'Team C',
  'Team D',
  // Add real team names here later
];

export default function NationalNorthPage() {
  const [showFixtures, setShowFixtures] = useState(true);

  return (
    <>
      {/* NavBar */}
      <nav className="w-full bg-gray-950 text-pink-300 p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:text-pink-400 transition">
            ← Back to Home
          </Link>
          <h1 className="text-lg sm:text-xl font-semibold">National League North</h1>
        </div>
      </nav>

      <main className="bg-gray-900 text-pink-300 min-h-screen p-6 max-w-5xl mx-auto">
        {/* Fixtures toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowFixtures(!showFixtures)}
            className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            {showFixtures ? 'Hide Fixtures' : 'Show Fixtures'}
          </button>
        </div>

        {/* Recent Results */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Most Recent Results</h2>
          <div className="bg-gray-800 p-4 rounded-lg text-sm">
            <p>Loading recent results...</p>
          </div>
        </section>

        {/* Upcoming Fixtures */}
        {showFixtures && (
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2">Next Round of Fixtures</h2>
            <div className="bg-gray-800 p-4 rounded-lg text-sm">
              <p>Loading upcoming fixtures...</p>
            </div>
          </section>
        )}

        {/* Team List */}
        <section>
          <h2 className="text-xl font-bold mb-4">Teams</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {teams.map((team) => (
              <Link
                key={team}
                href={`/leagues/national-north/teams/${encodeURIComponent(team.toLowerCase().replace(/\s+/g, '-'))}`}
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition text-sm font-medium"
              >
                {team}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
