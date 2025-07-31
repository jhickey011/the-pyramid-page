import NavBar from "../../components/NavBar";
import Link from "next/link";
import { getWSLStandings } from "@/lib/getWSLStandings";

export default async function WSLPage() {
  const standings = await getWSLStandings();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-red-800">Barclays Women's Super League (2025–26)</h1>
            <p className="text-sm text-gray-600 mt-2">Live Standings</p>
          </div>
          <Link href="/leagues/wsl/fixtures" className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-700">
            View Full Fixtures & Results
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold mb-4">League Table</h2>
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-b p-2">#</th>
                  <th className="border-b p-2">Team</th>
                  <th className="border-b p-2">P</th>
                  <th className="border-b p-2">W</th>
                  <th className="border-b p-2">D</th>
                  <th className="border-b p-2">L</th>
                  <th className="border-b p-2">F</th>
                  <th className="border-b p-2">A</th>
                  <th className="border-b p-2">GD</th>
                  <th className="border-b p-2">Pts</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team: any) => (
                  <tr key={team.team.id}>
                    <td className="p-2">{team.rank}</td>
                    <td className="p-2">
                      <Link href={`/teams/${team.team.name.toLowerCase().replace(/ /g, "-")}`} className="underline text-blue-800">
                        {team.team.name}
                      </Link>
                    </td>
                    <td className="p-2">{team.all.played}</td>
                    <td className="p-2">{team.all.win}</td>
                    <td className="p-2">{team.all.draw}</td>
                    <td className="p-2">{team.all.lose}</td>
                    <td className="p-2">{team.all.goals.for}</td>
                    <td className="p-2">{team.all.goals.against}</td>
                    <td className="p-2">{team.goalsDiff}</td>
                    <td className="p-2">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Champions League & Relegation</h3>
            <p className="text-sm text-gray-700">
              Top 3 teams qualify for the UEFA Women's Champions League. The bottom team is relegated to the{" "}
              <Link href="/leagues/championship" className="underline text-blue-700">Championship</Link>.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
