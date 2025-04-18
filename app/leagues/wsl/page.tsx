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
          <Link href="/leagues/wsl/fixtures" className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700">
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
                <tr className="bg-green-100 font-medium"><td className="p-2">1</td><td className="p-2">Chelsea</td><td className="p-2">18</td><td className="p-2">15</td><td className="p-2">3</td><td className="p-2">0</td><td className="p-2">49</td><td className="p-2">13</td><td className="p-2">36</td><td className="p-2">48</td></tr>
                <tr className="bg-green-100 font-medium"><td className="p-2">2</td><td className="p-2">Arsenal</td><td className="p-2">19</td><td className="p-2">14</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">54</td><td className="p-2">14</td><td className="p-2">40</td><td className="p-2">45</td></tr>
                <tr className="bg-green-100 font-medium"><td className="p-2">3</td><td className="p-2">Manchester United</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">36</td><td className="p-2">9</td><td className="p-2">27</td><td className="p-2">42</td></tr>
                <tr><td className="p-2">4</td><td className="p-2">Manchester City</td><td className="p-2">18</td><td className="p-2">11</td><td className="p-2">2</td><td className="p-2">5</td><td className="p-2">40</td><td className="p-2">23</td><td className="p-2">17</td><td className="p-2">35</td></tr>
                <tr><td className="p-2">5</td><td className="p-2">Brighton & Hove Albion</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">4</td><td className="p-2">8</td><td className="p-2">26</td><td className="p-2">32</td><td className="p-2">-6</td><td className="p-2">22</td></tr>
                <tr><td className="p-2">6</td><td className="p-2">Liverpool</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">3</td><td className="p-2">9</td><td className="p-2">18</td><td className="p-2">31</td><td className="p-2">-13</td><td className="p-2">21</td></tr>
                <tr><td className="p-2">7</td><td className="p-2">West Ham United</td><td className="p-2">18</td><td className="p-2">5</td><td className="p-2">4</td><td className="p-2">9</td><td className="p-2">25</td><td className="p-2">33</td><td className="p-2">-8</td><td className="p-2">19</td></tr>
                <tr><td className="p-2">8</td><td className="p-2">Everton</td><td className="p-2">18</td><td className="p-2">5</td><td className="p-2">4</td><td className="p-2">9</td><td className="p-2">18</td><td className="p-2">27</td><td className="p-2">-9</td><td className="p-2">19</td></tr>
                <tr><td className="p-2">9</td><td className="p-2">Tottenham Hotspur</td><td className="p-2">18</td><td className="p-2">5</td><td className="p-2">3</td><td className="p-2">10</td><td className="p-2">21</td><td className="p-2">37</td><td className="p-2">-16</td><td className="p-2">18</td></tr>
                <tr><td className="p-2">10</td><td className="p-2">Leicester City</td><td className="p-2">19</td><td className="p-2">4</td><td className="p-2">4</td><td className="p-2">11</td><td className="p-2">15</td><td className="p-2">32</td><td className="p-2">-17</td><td className="p-2">16</td></tr>
                <tr><td className="p-2">11</td><td className="p-2">Aston Villa</td><td className="p-2">18</td><td className="p-2">3</td><td className="p-2">4</td><td className="p-2">11</td><td className="p-2">18</td><td className="p-2">37</td><td className="p-2">-19</td><td className="p-2">13</td></tr>
                <tr className="border-t-4 border-red-500 font-medium"><td className="p-2">12</td><td className="p-2">Crystal Palace</td><td className="p-2">18</td><td className="p-2">2</td><td className="p-2">3</td><td className="p-2">13</td><td className="p-2">15</td><td className="p-2">47</td><td className="p-2">-32</td><td className="p-2">9</td></tr>
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
              <tr><td className="p-2">K. Shaw</td><td className="p-2">Man City</td><td className="p-2">12</td></tr>
              <tr><td className="p-2">A. Russo</td><td className="p-2">Arsenal</td><td className="p-2">11</td></tr>
              <tr><td className="p-2">E. Terland</td><td className="p-2">Man Utd</td><td className="p-2">9</td></tr>
              <tr><td className="p-2">B. England</td><td className="p-2">Spurs</td><td className="p-2">8</td></tr>
              <tr><td className="p-2">A. Beever-Jones</td><td className="p-2">Chelsea</td><td className="p-2">8</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
