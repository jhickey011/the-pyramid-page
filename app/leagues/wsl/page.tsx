import NavBar from "../../components/NavBar";
import Link from "next/link";

export default function WSLPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-blue-800">Barclays Women's Super League (WSL)</h1>
            <p className="text-sm text-gray-600 mt-2">Tier 1 – Top flight of the Women's Football Pyramid</p>
          </div>
          <Link href="/leagues/wsl/fixtures" className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700">View Full Fixtures & Results</Link>
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
                  <td className="p-2">1</td><td className="p-2">Manchester City</td><td className="p-2">18</td><td className="p-2">15</td><td className="p-2">1</td><td className="p-2">2</td><td className="p-2">46</td>
                </tr>
                <tr className="bg-green-100">
                  <td className="p-2">2</td><td className="p-2">Chelsea</td><td className="p-2">17</td><td className="p-2">14</td><td className="p-2">1</td><td className="p-2">2</td><td className="p-2">43</td>
                </tr>
                <tr className="bg-green-100">
                  <td className="p-2">3</td><td className="p-2">Arsenal</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">1</td><td className="p-2">4</td><td className="p-2">40</td>
                </tr>
                <tr><td className="p-2">4</td><td className="p-2">Liverpool</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">4</td><td className="p-2">5</td><td className="p-2">31</td></tr>
                <tr><td className="p-2">5</td><td className="p-2">Manchester United</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">3</td><td className="p-2">6</td><td className="p-2">30</td></tr>
                <tr><td className="p-2">6</td><td className="p-2">Tottenham Hotspur</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">5</td><td className="p-2">7</td><td className="p-2">23</td></tr>
                <tr><td className="p-2">7</td><td className="p-2">Everton</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">5</td><td className="p-2">9</td><td className="p-2">17</td></tr>
                <tr><td className="p-2">8</td><td className="p-2">Leicester City</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">5</td><td className="p-2">9</td><td className="p-2">17</td></tr>
                <tr><td className="p-2">9</td><td className="p-2">Brighton & Hove Albion</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">4</td><td className="p-2">10</td><td className="p-2">16</td></tr>
                <tr><td className="p-2">10</td><td className="p-2">West Ham United</td><td className="p-2">18</td><td className="p-2">3</td><td className="p-2">4</td><td className="p-2">11</td><td className="p-2">13</td></tr>
                <tr><td className="p-2">11</td><td className="p-2">Aston Villa</td><td className="p-2">18</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">13</td><td className="p-2">11</td></tr>
                <tr className="border-t-4 border-red-500">
                  <td className="p-2">12</td><td className="p-2">Bristol City</td><td className="p-2">18</td><td className="p-2">2</td><td className="p-2">2</td><td className="p-2">14</td><td className="p-2">8</td>
                </tr>
              </tbody>
            </table>
          </div>

          <aside className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Promotion & Relegation</h3>
            <p className="text-sm text-gray-700 mb-2">
              The team finishing <strong>bottom</strong> is <span className="text-red-600 font-semibold">relegated</span> to the <Link href="/leagues/championship" className="underline text-blue-700">Championship</Link>.
            </p>
            <p className="text-sm text-gray-700">
              The <strong>top 3 teams</strong> qualify for the UEFA Women's Champions League.
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
              <tr><td className="p-2">Bunny Shaw</td><td className="p-2">Manchester City</td><td className="p-2">21</td></tr>
              <tr><td className="p-2">Alessia Russo</td><td className="p-2">Arsenal</td><td className="p-2">14</td></tr>
              <tr><td className="p-2">Lauren James</td><td className="p-2">Chelsea</td><td className="p-2">13</td></tr>
              <tr><td className="p-2">Rachel Daly</td><td className="p-2">Aston Villa</td><td className="p-2">12</td></tr>
              <tr><td className="p-2">Frida Maanum</td><td className="p-2">Arsenal</td><td className="p-2">11</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
