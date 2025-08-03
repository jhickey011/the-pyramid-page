'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type Fixture = {
  date: string
  home: string
  away: string
  venue: string
}

export default function FixturesPage() {
  const [groupedFixtures, setGroupedFixtures] = useState<Record<string, Fixture[]>>({})

  useEffect(() => {
    fetch('/leagues/national-north/fixtures.json')
      .then(res => res.json())
      .then((data: Fixture[]) => {
        const seen = new Set()
        const deduped = data.filter(f => {
          const key = [f.date, f.home, f.away].sort().join('|')
          if (seen.has(key)) return false
          seen.add(key)
          return true
        })

        // Sort fixtures by date ascending
        deduped.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

        const grouped: Record<string, Fixture[]> = {}
        deduped.forEach(f => {
          const dateKey = new Date(f.date).toLocaleDateString()
          if (!grouped[dateKey]) grouped[dateKey] = []
          grouped[dateKey].push(f)
        })

        setGroupedFixtures(grouped)
      })
  }, [])

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-pink-300">Fixtures & Results</h1>
      <div className="space-y-8">
        {Object.entries(groupedFixtures).sort().map(([date, matches]) => (
          <div key={date}>
            <h2 className="text-lg font-bold text-pink-400 mb-2">{date}</h2>
            <table className="w-full text-sm border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Home</th>
                  <th className="p-2 border">Away</th>
                  <th className="p-2 border">Venue</th>
                  <th className="p-2 border">Tickets</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((f, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="p-2 border">
                      <Link
                        href={`/leagues/national-north/teams/${encodeURIComponent(
                          f.home.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')
                        )}`}
                        className="text-pink-500 hover:underline"
                      >
                        {f.home}
                      </Link>
                    </td>
                    <td className="p-2 border">
                      <Link
                        href={`/leagues/national-north/teams/${encodeURIComponent(
                          f.away.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')
                        )}`}
                        className="text-pink-500 hover:underline"
                      >
                        {f.away}
                      </Link>
                    </td>
                    <td className="p-2 border">{f.venue}</td>
                    <td className="p-2 border">
                      <a href="#" className="text-blue-500 underline">Tickets</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </main>
  )
}
