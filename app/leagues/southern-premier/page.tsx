import NavBar from "../../components/NavBar";
import Link from "next/link";

export default function SouthernPremierPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-green-800">Southern Premier Division</h1>
            <p className="text-sm text-gray-600 mt-2">Tier 3 – Feeds into the Women's Championship</p>
          </div>
          <Link href="/leagues/southern-premier/fixtures" className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-700">
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
                <tr className="bg-green-100 font-medium"><td className="p-2">1</td><td className="p-2">Ipswich Town</td><td className="p-2">21</td><td className="p-2">16</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">81</td><td className="p-2">10</td><td className="p-2">+71</td><td className="p-2">51</td></tr>
                <tr className="bg-green-100 font-medium"><td className="p-2">2</td><td className="p-2">Hashtag United</td><td className="p-2">21</td><td className="p-2">15</td><td className="p-2">3</td><td className="p-2">3</td><td className="p-2">49</td><td className="p-2">14</td><td className="p-2">+35</td><td className="p-2">48</td></tr>
                <tr><td className="p-2">3</td><td className="p-2">Watford</td><td className="p-2">21</td><td className="p-2">13</td><td className="p-2">4</td><td className="p-2">4</td><td className="p-2">55</td><td className="p-2">15</td><td className="p-2">+40</td><td className="p-2">43</td></tr>
                <tr><td className="p-2">4</td><td className="p-2">Exeter City</td><td className="p-2">21</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">5</td><td className="p-2">48</td><td className="p-2">27</td><td className="p-2">+21</td><td className="p-2">42</td></tr>
                <tr><td className="p-2">5</td><td className="p-2">Oxford United</td><td className="p-2">21</td><td className="p-2">12</td><td className="p-2">3</td><td className="p-2">6</td><td className="p-2">36</td><td className="p-2">18</td><td className="p-2">+18</td><td className="p-2">39</td></tr>
                <tr><td className="p-2">6</td><td className="p-2">Lewes</td><td className="p-2">21</td><td className="p-2">7</td><td className="p-2">7</td><td className="p-2">7</td><td className="p-2">30</td><td className="p-2">28</td><td className="p-2">+2</td><td className="p-2">28</td></tr>
                <tr><td className="p-2">7</td><td className="p-2">AFC Wimbledon</td><td className="p-2">21</td><td className="p-2">8</td><td className="p-2">4</td><td className="p-2">9</td><td className="p-2">28</td><td className="p-2">28</td><td className="p-2">0</td><td className="p-2">28</td></tr>
                <tr><td className="p-2">8</td><td className="p-2">Cheltenham Town</td><td className="p-2">21</td><td className="p-2">7</td><td className="p-2">2</td><td className="p-2">12</td><td className="p-2">32</td><td className="p-2">39</td><td className="p-2">-7</td><td className="p-2">23</td></tr>
                <tr><td className="p-2">9</td><td className="p-2">Gwalia United</td><td className="p-2">21</td><td className="p-2">6</td><td className="p-2">4</td><td className="p-2">11</td><td className="p-2">20</td><td className="p-2">36</td><td className="p-2">-16</td><td className="p-2">22</td></tr>
                <tr><td className="p-2">10</td><td className="p-2">Billericay Town</td><td className="p-2">21</td><td className="p-2">5</td><td className="p-2">2</td><td className="p-2">14</td><td className="p-2">25</td><td className="p-2">52</td><td className="p-2">-27</td><td className="p-2">17</td></tr>
                <tr><td className="p-2">11</td><td className="p-2">Plymouth Argyle</td><td className="p-2">21</td><td className="p-2">5</td><td className="p-2">2</td><td className="p-2">14</td><td className="p-2">23</td><td className="p-2">53</td><td className="p-2">-30</td><td className="p-2">17</td></tr>
                <tr className="border-t-4 border-red-500 font-medium"><td className="p-2">12</td><td className="p-2">Milton Keynes Dons</td><td className="p-2">21</td><td className="p-2">0</td><td className="p-2">1</td><td className="p-2">20</td><td className="p-2">10</td><td className="p-2">117</td><td className="p-2">-107</td><td className="p-2">1</td></tr>
              </tbody>
            </table>
          </div>

          <aside className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Promotion & Relegation</h3>
            <p className="text-sm text-gray-700 mb-2">
              The top team may be eligible for <span className="text-green-700 font-semibold">promotion</span> to the <Link href="/leagues/championship" className="underline text-blue-700">Championship</Link>.
            </p>
            <p className="text-sm text-gray-700">
              Bottom teams are <span className="text-red-600 font-semibold">relegated</span> to Tier 4 regional leagues.
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
              <tr><td className="p-2">Sophie Peskett</td><td className="p-2">Ipswich Town</td><td className="p-2">22</td></tr>
              <tr><td className="p-2">Sophie Gillies</td><td className="p-2">Exeter City</td><td className="p-2">17</td></tr>
              <tr><td className="p-2">Phoebie Poole</td><td className="p-2">Oxford United</td><td className="p-2">13</td></tr>
              <tr><td className="p-2">Natasha Thomas</td><td className="p-2">Ipswich Town</td><td className="p-2">12</td></tr>
              <tr><td className="p-2">Una Lue</td><td className="p-2">Cheltenham Town</td><td className="p-2">11</td></tr>
              <tr><td className="p-2">Lucy O'Brien</td><td className="p-2">Ipswich Town</td><td className="p-2">11</td></tr>
              <tr><td className="p-2">Sarah Stacey</td><td className="p-2">Exeter City</td><td className="p-2">11</td></tr>
              <tr><td className="p-2">Ashlee Hincks</td><td className="p-2">AFC Wimbledon</td><td className="p-2">10</td></tr>
              <tr><td className="p-2">Madison Perry</td><td className="p-2">Watford</td><td className="p-2">10</td></tr>
              <tr><td className="p-2">Charlotte Whitmore</td><td className="p-2">Plymouth Argyle</td><td className="p-2">9</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
