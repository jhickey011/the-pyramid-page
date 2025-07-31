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

  // Group fixtures by date
  const grouped: Record<string, any[]> = {};
  fixtures.forEach((fixture: any) => {
    const dateKey = new Date(fixture.fixture.date).toDateString();
    if (!grouped[dateKey]) grouped[dateKey] = [];
    grouped[dateKey].push(fixture);
  });

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6 text-red-800">Upcoming Fixtures – WSL</h1>

        {Object.keys(grouped).length === 0 ? (
          <p>No fixtures available.</p>
        ) : (
          <div className="space-y-8">
            {Object.entries(grouped).map(([date, fixtures]) => (
              <div key={date}>
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                  {formatDateHeader(date)}
                </h2>
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
                          href={`#`} // Replace with actual ticket URL if available
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
      </div>
    </main>
  );
}
