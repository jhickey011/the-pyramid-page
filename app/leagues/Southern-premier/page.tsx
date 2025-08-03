'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const leagueTable = [
  { pos: 1, team: 'AFC Bournemouth', pts: 0 },
  { pos: 2, team: 'AFC Wimbledon', pts: 0 },
  { pos: 3, team: 'Billericay Town', pts: 0 },
  { pos: 4, team: 'Gwala United', pts: 0 },
  { pos: 5, team: 'Cheltenham Town', pts: 0 },
  { pos: 6, team: 'Exeter City', pts: 0 },
  { pos: 7, team: 'Hashtag United', pts: 0 },
  { pos: 8, team: 'Lewes', pts: 0 },
  { pos: 9, team: 'Oxford United', pts: 0 },
  { pos: 10, team: 'Plymouth Argyle', pts: 0 },
  { pos: 11, team: 'Real Bedford', pts: 0 },
  { pos: 12, team: 'Watford', pts: 0 },
];

export default function SouthernPremierPage() {
  return (
    <main className="bg-gray-900 text-pink-400 min-h-screen p-6 max-w-4xl mx-auto">
      {/* Nav Buttons */}
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        <Link
          href="/"
          className="bg-pink-500 hover:bg-pink-400 text-gray-900 px-4 py-2 rounded-lg font-semibold transition"
        >
          ← Home
        </Link>
        <h1 className="text-lg sm:text-xl font-semibold m-auto">Southern Premier Division</h1>
        <Link
          href="/leagues/southern-premier/fixtures"
          className="bg-pink-500 hover:bg-pink-400 text-gray-900 px-4 py-2 rounded-lg font-semibold transition"
        >
          Fixtures & Results
        </Link>
      </div>

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
                      href={`/leagues/southern-premier/teams/${encodeURIComponent(
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

      {/* Latest Highlights */}
      <section className="mt-10 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-pink-300 mb-4">Latest Highlights</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-72 rounded-lg"
            src="https://www.youtube.com/embed/hnViEPaNUTk"
            title="Latest Highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
