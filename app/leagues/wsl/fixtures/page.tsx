import { getWSLFixtures } from "../../../../lib/getWSLFixtures";

export default async function WSLFixturesPage() {
  const fixtures = await getWSLFixtures();

  return (
    <main className="p-8 text-gray-900">
      <h1 className="text-2xl font-bold mb-4">WSL Fixtures – 2025/26</h1>
      <ul className="space-y-2">
        {fixtures.map((fixture: any) => (
          <li key={fixture.fixture.id} className="border p-4 rounded">
            <div>
              <strong>{fixture.teams.home.name}</strong> vs{" "}
              <strong>{fixture.teams.away.name}</strong>
            </div>
            <div className="text-sm text-gray-600">
              {new Date(fixture.fixture.date).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
