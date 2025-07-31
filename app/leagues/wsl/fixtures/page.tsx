import { getWSLFixtures } from "../../../../lib/getWSLFixtures";
import NavBar from "../../../components/NavBar";

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleString("en-UK", options);
}

export default async function WSLFixturesPage() {
  const fixtures = await getWSLFixtures();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6 text-red-800">Upcoming Fixtures – WSL</h1>

        {fixtures.length === 0 ? (
          <p>No fixtures available.</p>
        ) : (
          <div className="space-y-2">
            {fixtures.map((fixture: any) => (
              <div
                key={fixture.fixture.id}
                className="grid grid-cols-5 gap-4 items-center py-2 border-b text-sm"
              >
                <div className="text-gray-500">{formatDate(fixture.fixture.date)}</div>
                <div className="text-right">{fixture.teams.home.name}</div>
                <div className="text-center font-semibold">vs</div>
                <div className="text-left">{fixture.teams.away.name}</div>
                <div className="text-gray-400 italic">{fixture.fixture.venue.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

