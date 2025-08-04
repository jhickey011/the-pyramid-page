'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getWSLStandings } from '@/lib/getWSLStandings';

export default function WSLPage() {
  const [standings, setStandings] = useState([]);
  const [nextFixtures, setNextFixtures] = useState([]);
  const [recentResults, setRecentResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getWSLStandings();
      setStandings(data);
    }
    fetchData();

    fetch('/leagues/wsl/fixtures.json')
      .then(res => res.json())
      .then(data => {
        const today = new Date();
        const upcoming = {};
        const recent = {};
        const seen = new Set();

        const deduped = data.filter(f => {
          const key = [f.date, f.home, f.away].sort().join('|');
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });

        deduped.forEach(fixture => {
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

        setNextFixtures(next ? upcoming[next] : []);
        setRecentResults(last ? recent[last] : []);
      });
  }, []);

  const formatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    return dateObj.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <main className="bg-gray-900 text-pink-400 min-h-screen p-6 max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        <Link href="/" className="bg-pink-500 hover:bg-pink-400 text-gray-900 px-4 py-2 rounded-lg font-semibold transition">← Home</Link>
        <h1 className="text-lg sm:text-xl font-semibold m-auto">Barclays Women's Super League (2023–24)</h1>
        <Link href="/leagues/wsl/fixtures" className="bg-pink-500 hover:bg-pink-400 text-gray-900 px-4 py-2 rounded-lg font-semibold transition">Fixtures & Results</Link>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-pink-300">League Table</h2>
        <p className="text-sm text-pink-400 mb-2 italic">
          1st–2nd: Champions League group stage · 3rd: Champions League third round · Last: Relegation playoff vs 3rd in WSL 2
        </p>
        <div className="overflow-x-auto bg-gray-800 rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-2 py-1 text-left">#</th>
                <th className="px-2 py-1 text-left">Team</th>
                <th className="px-2 py-1">P</th>
                <th className="px-2 py-1">W</th>
                <th className="px-2 py-1">D</th>
                <th className="px-2 py-1">L</th>
                <th className="px-2 py-1">F</th>
                <th className="px-2 py-1">A</th>
                <th className="px-2 py-1">GD</th>
                <th className="px-2 py-1">Pts</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team, index) => {
                const rowClass = index < 2 ? 'bg-blue-900' : index === 2 ? 'bg-yellow-900' : index === standings.length - 1 ? 'bg-red-900' : '';
                return (
                  <tr key={team.team.id} className={`hover:bg-gray-700 ${rowClass}`}>
                    <td className="px-2 py-1">{index + 1}</td>
                    <td className="px-2 py-1">{team.team.name}</td>
                    <td className="px-2 py-1">{team.all.played}</td>
                    <td className="px-2 py-1">{team.all.win}</td>
                    <td className="px-2 py-1">{team.all.draw}</td>
                    <td className="px-2 py-1">{team.all.lose}</td>
                    <td className="px-2 py-1">{team.all.goals.for}</td>
                    <td className="px-2 py-1">{team.all.goals.against}</td>
                    <td className="px-2 py-1">{team.goalsDiff}</td>
                    <td className="px-2 py-1 font-semibold">{team.points}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-pink-300 mb-2">Most Recent Results</h3>
          {recentResults.length > 0 ? (
            <ul className="space-y-1">
              {recentResults.map((f, i) => (
                <li key={i}>{f.home} vs {f.away}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No results available yet.</p>
          )}
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-pink-300 mb-2">Next Fixtures</h3>
          {nextFixtures.length > 0 ? (
            <ul className="space-y-1">
              {nextFixtures.map((f, i) => (
                <li key={i}>{f.home} vs {f.away}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No upcoming fixtures yet.</p>
          )}
        </div>
      </section>

      <section className="mt-10 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-pink-300 mb-4">Latest Highlights</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-72 rounded-lg"
            src="https://www.youtube.com/embed/zmevUvvIpCM"
            title="Latest Highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}

