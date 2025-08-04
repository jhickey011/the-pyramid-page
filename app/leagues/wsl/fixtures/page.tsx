'use client';
import { getWSLFixtures } from "@/lib/getWSLFixtures";
import Link from 'next/link';

function formatDateHeader(dateString) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(dateString) {
  return new Date(dateString).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function WSLFixturesPage() {
  const fixtures = await getWSLFixtures();
  const now = new Date();

  const results = fixtures.filter(
    (f) => new Date(f.fixture.date) < now && f.fixture.status.short === "FT"
  );
  const upcoming = fixtures.filter(
    (f) => new Date(f.fixture.date) >= now || f.fixture.status.short !== "FT"
  );

  function groupByDate(data) {
    const grouped = {};
    data.forEach((fixture) => {
      const dateKey = new Date(fixture.fixture.date).toDateString();
      if (!grouped[dateKey]) grouped[dateKey] = [];
      grouped[dateKey].push(fixture);
    });
    return grouped;
  }

  const groupedResults = groupByDate(results);
  const groupedUpcoming = groupByDate(upcoming);

  return (
    <main className="bg-gray-900 text-pink-400 min-h-screen p-6 max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        <Link
          href="/"
          className="bg-pink-500 hover:bg-pink-400 text-gray-900 px-4 py-2 rounded-lg font-semibold transition"
        >
          ← Home
        </Link>
        <h1 className="text-lg sm:text-xl font-semibold m-auto">WSL Fixtures & Results</h1>
        <Link
          href="/leagues/wsl"
          className="bg-pink-500 hover:bg-pink-400 text-gray-900 px-4 py-2 rounded-lg font-semibold transition"
        >
          Back to WSL
        </Link>
      </div>

      {/* Upcoming Fixtures */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-pink-300">📅 Upcoming Fixtures</h2>
        {Object.keys(groupedUpcoming).length === 0 ? (
          <p className="text-gray-400">No upcoming fixtures.</p>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedUpcoming).map(([date, fixtures]) => (
              <div key={date}>
                <h3 className="text-lg font-semibold text-pink-200 mb-2">
                  {formatDateHeader(date)}
                </h3>
                <ul className="space-y-2">
                  {fixtures.map((f) => (
                    <li
                      key={f.fixture.id}
                      className="grid grid-cols-6 gap-2 items-center text-sm bg-gray-800 p-2 rounded-lg"
                    >
                      <div>{formatTime(f.fixture.date)}</div>
                      <div className="text-right">{f.teams.home.name}</div>
                      <div className="text-center font-semibold">vs</div>
                      <div className="text-left">{f.teams.away.name}</div>
                      <div className="text-gray-400 italic">
                        <Link href={`/venues/${f.fixture.venue.id}`} className="underline">
                          {f.fixture.venue.name || "Venue TBC"}
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link
                          href="#"
                          className="text-pink-300 underline hover:text-pink-100"
                        >
                          Tickets
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Recent Results */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-pink-300">🔙 Recent Results</h2>
        {Object.keys(groupedResults).length === 0 ? (
          <p className="text-gray-400">No recent results.</p>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedResults).map(([date, fixtures]) => (
              <div key={date}>
                <h3 className="text-lg font-semibold text-pink-200 mb-2">
                  {formatDateHeader(date)}
                </h3>
                <ul className="space-y-2">
                  {fixtures.map((f) => (
                    <li
                      key={f.fixture.id}
                      className="grid grid-cols-6 gap-2 items-center text-sm bg-gray-800 p-2 rounded-lg"
                    >
                      <div>{formatTime(f.fixture.date)}</div>
                      <div className="text-right">{f.teams.home.name}</div>
                      <div className="text-center font-semibold">
                        {f.goals.home} - {f.goals.away}
                      </div>
                      <div className="text-left">{f.teams.away.name}</div>
                      <div className="text-gray-400 italic">
                        <Link href={`/venues/${f.fixture.venue.id}`} className="underline">
                          {f.fixture.venue.name || "Venue TBC"}
                        </Link>
                      </div>
                      <div className="text-center text-gray-500 italic">FT</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
