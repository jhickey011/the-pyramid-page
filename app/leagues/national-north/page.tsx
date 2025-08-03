'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

type Fixture = {
  date: string;
  home: string;
  away: string;
  venue: string;
};

export default function NationalNorthPage() {
  const [nextFixtures, setNextFixtures] = useState<Fixture[]>([]);
  const [recentResults, setRecentResults] = useState<Fixture[]>([]);
  const [nextDate, setNextDate] = useState<string | null>(null);
  const [lastDate, setLastDate] = useState<string | null>(null);

  useEffect(() => {
    fetch('/leagues/national-north/fixtures.json')
      .then(res => res.json())
      .then((data: Fixture[]) => {
        const today = new Date();
        const upcoming: Record<string, Fixture[]> = {};
        const recent: Record<string, Fixture[]> = {};

        data.forEach(fixture => {
          const date = new Date(fixture.date);
          const dateKey = date.toISOString().split('T')[0];

          if (date >= today) {
            if (!upcoming[dateKey]) upcoming[dateKey] = [];
            upcoming[dateKey].push(fixture);
          } else {
            if (!recent[dateKey]) recent[dateKey] = [];
            recent[dateKey].push(fixture);
          }
        });

        const next = Object.keys(upcoming).sort()[0];
        const last = Object.keys(recent).sort().pop();

        setNextDate(next || null);
        setLastDate(last || null);
        setNextFixtures(next ? upcoming[next] : []);
        setRecentResults(last ? recent[last] : []);
      });
  }, []);

  const formatDate = (isoDate: string) => {
    const dateObj = new Date(isoDate);
    return dateObj.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

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
        <Link
          href="/leagues/national-north/fixtures"
          className="bg-pink-500 hover:bg-pink-400 text-gray-900 px-4 py-2 rounded-lg font-semibold transition"
        >
          Fixtures & Results
        </Link>
      </nav>

      {/* League Table */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-pink-300">League Table</h2>
        <p className="text-sm text-pink-400 mb-2 italic">Top team will be <strong>promoted</strong>. Bottom two teams will be <strong>relegated</strong>.</p>
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
                <tr
                  key={row.pos}
                  className={`hover:bg-gray-700 ${row.pos === 1 ? 'bg-green-900' : row.pos >= 11 ? 'bg-red-900' : ''}`}
                >
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

      {/* Results & Fixtures */}
      <section className="space-y-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-pink-300 mb-2">Most Recent Results</h3>
          {recentResults.length > 0 ? (
            <>
              <p className="text-sm text-pink-400 mb-2">{formatDate(lastDate!)}</p>
              <ul className="space-y-1">
                {recentResults.map((f, i) => (
                  <li key={i}>
                    {f.home} vs {f.away}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-gray-400">No results available yet.</p>
          )}
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-pink-300 mb-2">Next Fixtures</h3>
          {nextFixtures.length > 0 ? (
            <>
              <p className="text-sm text-pink-400 mb-2">{formatDate(nextDate!)}</p>
              <ul className="space-y-1">
                {nextFixtures.map((f, i) => (
                  <li key={i}>
                    {f.home} vs {f.away}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-gray-400">No upcoming fixtures yet.</p>
          )}
        </div>
      </section>

      {/* Latest Highlights */}
      <section className="mt-10 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-pink-300 mb-2">Latest Highlights</h3>
        <p className="text-gray-400">Video highlights and goals will appear here soon.</p>
      </section>
    </main>
  );
}
