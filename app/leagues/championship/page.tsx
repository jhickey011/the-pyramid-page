import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function ChampionshipPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-blue-800">Women's Championship</h1>
            <p className="text-sm text-gray-600 mt-2">Tier 2 – Feeds into the Women's Super League</p>
          </div>
          <Link href="/leagues/championship/fixtures" className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700">
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
                  <th className="border-b p-2">L</th>
                  <th className="border-b p-2">D</th>
                  <th className="border-b p-2">GD</th>
                  <th className="border-b p-2">Pts</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-100 font-medium"><td className="p-2">1</td><td className="p-2">London City Lionesses</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">+21</td><td className="p-2">41</td></tr>
                <tr className="bg-green-100 font-medium"><td className="p-2">2</td><td className="p-2">Birmingham City</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">3</td><td className="p-2">3</td><td className="p-2">+19</td><td className="p-2">39</td></tr>
                <tr><td className="p-2">3</td><td className="p-2">Charlton Athletic</td><td className="p-2">19</td><td className="p-2">9</td><td className="p-2">7</td><td className="p-2">3</td><td className="p-2">+15</td><td className="p-2">34</td></tr>
                <tr><td className="p-2">4</td><td className="p-2">Durham</td><td className="p-2">18</td><td className="p-2">10</td><td className="p-2">2</td><td className="p-2">6</td><td className="p-2">+6</td><td className="p-2">32</td></tr>
                <tr><td className="p-2">5</td><td className="p-2">Bristol City</td><td className="p-2">18</td><td className="p-2">8</td><td className="p-2">6</td><td className="p-2">4</td><td className="p-2">+13</td><td className="p-2">30</td></tr>
                <tr><td className="p-2">6</td><td className="p-2">Newcastle United</td><td className="p-2">18</td><td className="p-2">8</td><td className="p-2">6</td><td className="p-2">4</td><td className="p-2">+10</td><td className="p-2">30</td></tr>
                <tr><td className="p-2">7</td><td className="p-2">Sunderland</td><td className="p-2">18</td><td className="p-2">7</td><td className="p-2">3</td><td className="p-2">8</td><td className="p-2">-6</td><td className="p-2">24</td></tr>
                <tr><td className="p-2">8</td><td className="p-2">Southampton</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">6</td><td className="p-2">8</td><td className="p-2">-2</td><td className="p-2">18</td></tr>
                <tr><td className="p-2">9</td><td className="p-2">Blackburn Rovers</td><td className="p-2">18</td><td className="p-2">3</td><td className="p-2">12</td><td className="p-2">3</td><td className="p-2">-17</td><td className="p-2">12</td></tr>
                <tr><td className="p-2">10</td><td className="p-2">Portsmouth</td><td className="p-2">19</td><td className="p-2">2</td><td className="p-2">13</td><td className="p-2">4</td><td className="p-2">-36</td><td className="p-2">10</td></tr>
                <tr className="border-t-4 border-red-500 font-medium"><td className="p-2">11</td><td className="p-2">Sheffield United</td><td className="p-2">18</td><td className="p-2">1</td><td className="p-2">13</td><td className="p-2">4</td><td className="p-2">-23</td><td className="p-2">7</td></tr>
              </tbody>
            </table>
          </div>

          <aside className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Promotion & Relegation</h3>
            <p className="text-sm text-gray-700 mb-2">
              The <strong>winner</strong> of this league is <span className="text-green-700 font-semibold">promoted</span> to the <Link href="/leagues/wsl" className="underline text-blue-700">WSL</Link>.
            </p>
            <p className="text-sm text-gray-700">
              The <strong>bottom team</strong> is <span className="text-red-600 font-semibold">relegated</span> to the National League Premier Division.
            </p>
          </aside>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Top Scorers</h2>
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b p-2">Player</th>
                <th className="border-b p-2">Club</th>
                <th className="border-b p-2">Goals</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2">I. Goodwin</td><td className="p-2">London City</td><td className="p-2">14</td></tr>
              <tr><td className="p-2">S. Hayles</td><td className="p-2">Newcastle</td><td className="p-2">12</td></tr>
              <tr><td className="p-2">L. Lloyd-Smith</td><td className="p-2">Bristol City</td><td className="p-2">8</td></tr>
              <tr><td className="p-2">E. Brazil</td><td className="p-2">Charlton</td><td className="p-2">8</td></tr>
              <tr><td className="p-2">J. Hutton</td><td className="p-2">Charlton</td><td className="p-2">7</td></tr>
              <tr><td className="p-2">B. Lumsden</td><td className="p-2">Newcastle</td><td className="p-2">7</td></tr>
              <tr><td className="p-2">E. Dale</td><td className="p-2">Sunderland</td><td className="p-2">7</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
