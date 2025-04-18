import NavBar from "../../components/NavBar";
import Link from "next/link";

export default function ChampionshipPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-blue-800">Barclays Women's Championship</h1>
            <p className="text-sm text-gray-600 mt-2">Tier 2 – Second level of the Women's Football Pyramid</p>
          </div>
          <Link href="/leagues/championship/fixtures" className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700">View Full Fixtures & Results</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold mb-4">League Table</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2">#</th>
                  <th className="border-b p-2">Team</th>
                  <th className="border-b p-2">P</th>
                  <th className="border-b p-2">W</th>
                  <th className="border-b p-2">D</th>
                  <th className="border-b p-2">L</th>
                  <th className="border-b p-2">Pts</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-100">
                  <td className="p-2">1</td><td className="p-2">Sunderland</td><td className="p-2">20</td><td className="p-2">15</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">48</td>
                </tr>
                <tr><td className="p-2">2</td><td className="p-2">Charlton Athletic</td><td className="p-2">20</td><td className="p-2">14</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">46</td></tr>
                <tr><td className="p-2">3</td><td className="p-2">Crystal Palace</td><td className="p-2">20</td><td className="p-2">13</td><td className="p-2">5</td><td className="p-2">2</td><td className="p-2">44</td></tr>
                <tr><td className="p-2">4</td><td className="p-2">Blackburn Rovers</td><td className="p-2">20</td><td className="p-2">11</td><td className="p-2">6</td><td className="p-2">3</td><td className="p-2">39</td></tr>
                <tr className="border-t-4 border-red-500">
                  <td className="p-2">12</td><td className="p-2">Watford</td><td className="p-2">20</td><td className="p-2">2</td><td className="p-2">4</td><td className="p-2">14</td><td className="p-2">10</td>
                </tr>
              </tbody>
            </table>
          </div>

          <aside className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Promotion & Relegation</h3>
            <p className="text-sm text-gray-700 mb-2">
              The team finishing <strong>1st</strong> is <span className="text-green-700 font-semibold">promoted</span> to the <Link href="/leagues/wsl" className="underline text-blue-700">WSL</Link>.
            </p>
            <p className="text-sm text-gray-700">
              The <strong>bottom team</strong> is <span className="text-red-600 font-semibold">relegated</span> to the <Link href="/leagues/national-north" className="underline text-blue-700">National League</Link> based on geography.
            </p>
          </aside>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Top Scorers</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Player</th>
                <th className="border-b p-2">Club</th>
                <th className="border-b p-2">Goals</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2">Emily Scarr</td><td className="p-2">Sunderland</td><td className="p-2">14</td></tr>
              <tr><td className="p-2">Coral-Jade Haines</td><td className="p-2">Crystal Palace</td><td className="p-2">12</td></tr>
              <tr><td className="p-2">Molly Sharpe</td><td className="p-2">Blackburn Rovers</td><td className="p-2">11</td></tr>
              <tr><td className="p-2">Emma Harries</td><td className="p-2">Charlton Athletic</td><td className="p-2">10</td></tr>
              <tr><td className="p-2">Leigh Nicol</td><td className="p-2">Crystal Palace</td><td className="p-2">9</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
