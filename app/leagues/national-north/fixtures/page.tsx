'use client'

import { useEffect, useState } from 'react'

type Fixture = {
  date: string
  home: string
  away: string
  venue: string
}

export default function FixturesPage() {
  const [fixtures, setFixtures] = useState<Fixture[]>([])

  useEffect(() => {
    fetch('/leagues/national-north/fixtures.json')
      .then(res => res.json())
      .then(setFixtures)
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fixtures & Results</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Home</th>
              <th className="p-2 border">Away</th>
              <th className="p-2 border">Venue</th>
              <th className="p-2 border">Tickets</th>
            </tr>
          </thead>
          <tbody>
            {fixtures.map((f, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-2 border">{new Date(f.date).toLocaleDateString()}</td>
                <td className="p-2 border">{f.home}</td>
                <td className="p-2 border">{f.away}</td>
                <td className="p-2 border">{f.venue}</td>
                <td className="p-2 border text-blue-600 underline cursor-not-allowed">Coming Soon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
