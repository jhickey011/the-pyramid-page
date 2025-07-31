import { getWSLFixtures } from "../../../../lib/getWSLFixtures";
import NavBar from "../../../components/NavBar";

function formatDateHeader(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-UK", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(dateString: string) {
  return new Date(dateString).toLocaleTimeString("en-UK", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function WSLFixturesPage() {
  const fixtures = await getWSLFixtures();
  const now = new Date();

  // Separate into results and upcoming
  const results = fixtures.filter(
    (f: any) => new Date(f.fixture.date) < now && f.fixture.status.short === "FT"
  );
  const upcoming = fixtures.filter(
    (f: any) => new Date(f.fixture.date) >= now || f.fixture.status.short !== "FT"
  );

  // Group by date helper
  function groupByDate(data: any[]) {
    const grouped: Record<string, any[]> = {};
    data.forEach((fixture: any) => {
      const dateKey = new Date(fixture.fixture.date).toDateString();
      if (!grouped[dateKey]) grouped[dateKey] = [];
      grouped[dateKey].push(fixture);
    });
    return grouped;
  }

  const groupedResults = groupByDate(results);
  const groupedUpcoming = groupByDate(upcoming);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6 text-red-800">WSL Fixtures & Results</h1>

        {/* Upcoming Fixtures */}
        <h2 className="text-xl font-bold mt-10 mb-4 text-gray-800">📅 Upcoming Fixtures</h2>
        {Object.keys(groupedUpcoming).length === 0 ? (
          <p>No upcoming fixtures.</p>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedUpcoming).map(([date, fixtures]) => (
              <div key={date}>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  {formatDateHeader(date)}
                </h3>
                <div className="space-y-2">
                  {fixtures.map((fixture: any) => (
                    <div
                      key={fixture.fixture.id}
                      className="grid grid-cols-6 gap-4 items-center py-2 border-b text-sm"
                    >
                      <div className="text-gray-500">{formatTime(fixture.fixture.date)}</div>
                      <div className="text-right">{fixture.teams.home.name}</div>
                      <div className="text-center font-semibold">vs</div>
                      <div className="text-left">{fixture.teams.away.name}</div>
                      <div className="text-gray-400 italic">
                        <a href={`/venues/${fixture.fixture.venue.id}`} className="underline">
                          {fixture.fixture.venue.name || "Venue TBC"}
                        </a>
                      </div>
                      <div className="text-center">
                        <a
                          href={`#`} // Placeholder for tickets
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          Tickets
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results */}
        <h2 className="text-xl font-bold mt-14 mb-4 text-gray-800">🔙 Recent Results</h2>
        {Object.keys(groupedResults).length === 0 ? (
          <p>No recent results.</p>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedResults).map(([date, fixtures]) => (
              <div key={date}>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  {formatDateHeader(date)}
                </h3>
                <div className="space-y-2">
                  {fixtures.map((fixture: any) => (
                    <div
                      key={fixture.fixture.id}
                      className="grid grid-cols-6 gap-4 items-center py-2 border-b text-sm"
                    >
                      <div className="text-gray-500">{formatTime(fixture.fixture.date)}</div>
                      <div className="text-right">{fixture.teams.home.name}</div>
                      <div className="text-center font-semibold">
                        {fixture.goals.home} - {fixture.goals.away}
                      </div>
                      <div className="text-left">{fixture.teams.away.name}</div>
                      <div className="text-gray-400 italic">
                        <a href={`/venues/${fixture.fixture.venue.id}`} className="underline">
                          {fixture.fixture.venue.name || "Venue TBC"}
                        </a>
                      </div>
                      <div className="text-center text-gray-500 italic">FT</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
