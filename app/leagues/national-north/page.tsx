'use client';
import Link from 'next/link';

const leagueTable = [
  { pos: 1, team: 'Burnley Ladies', pts: 0 },
  { pos: 2, team: 'Derby County Ladies', pts: 0 },
  { pos: 3, team: 'Halifax FC Women', pts: 0 },
  { pos: 4, team: 'Hull City Ladies', pts: 0 },
  { pos: 5, team: 'Liverpool Feds WFC', pts: 0 },
  { pos: 6, team: 'Loughborough Lightning Women', pts: 0 },
  { pos: 7, team: 'Middlesbrough Ladies', pts: 0 },
  { pos: 8, team: 'Rugby Borough Women', pts: 0 },
  { pos: 9, team: 'Sporting Khalsa Women', pts: 0 },
  { pos: 10, team: 'Stoke City Ladies', pts: 0 },
  { pos: 11, team: 'West Bromwich Albion WFC', pts: 0 },
  { pos: 12, team: 'Wolverhampton Wanderers Women', pts: 0 },
];

export default function NationalNorthPage() {
  return (
    <main className="bg-gray-900 text-pink-400 min-h-screen p-6 max-w-4xl mx-auto">
      {/* Nav Bar */}
      <nav className="bg-gray-950 text-pink-300 p-4 rounded-lg mb-8 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-pink-400 transition">
          ← Home
        </Link>
        <h1 className="text-lg sm:text-xl font-semibold">
          Northern Premier Division
        </h1>
        <button
          className="bg-pink-500 hover:bg-pink-400 text-gray-900 px-4 py-2 rounded-lg font-semibold transition"
        >
          Fixtures & Results
        </button>
      </nav>

      {/* League Table */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-pink-300">League Table</h2>
        <div className="overflow-x-auto bg-gray-800 rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-2 py-1 text-left">POS</th>
                <th className="px-2 py-1 text-left">TEAM</th>
                <th className="px-2 py-1 text-left">PTS</th>
              </tr>
            </thead>
            <tbody>
              {leagueTable.map((row) => (
                <tr key={row.pos} className="hover:bg-gray-700">
                  <td className="px-2 py-1">{row.pos}</td>
                  <td className="px-2 py-1 text-left">
                    <Link
                      href={`/leagues/national-north/teams/${encodeURIComponent(
                        row.team
                          .toLowerCase()
                          .replace(/\s+/g, '-')
                          .replace(/[^a-z0-9\-]/g, '')
                      )}`}
                      className="text-pink-200 hover:underline transition"
                    >
                      {row.team}
                    </Link>
                  </td>
                  <td className="px-2 py-1 font-semibold">{row.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Results & Fixtures Placeholders */}
      <section className="space-y-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-pink-300 mb-2">Most Recent Results</h3>
          <p className="text-gray-400">No results available yet.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-pink-300 mb-2">Next Fixtures</h3>
          <p className="text-gray-400">No upcoming fixtures yet.</p>
        </div>
      </section>
    </main>
  );
}
