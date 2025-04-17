export default function NorthWestPremierPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">North West Regional Premier Division</h1>
        <p className="text-sm text-gray-600 mt-2">Tier 5 – Northern Regional League in the Women’s Football Pyramid</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Fixtures</h2>
        <ul className="space-y-2">
          <li>Tranmere Rovers vs Cheadle Town Stingers – Apr 28, 2025</li>
          <li>Blackburn CSC vs Fleetwood Town Wrens – Apr 29, 2025</li>
          <li>FC United of Manchester vs Mossley Hill – Apr 30, 2025</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
        <ul className="space-y-2">
          <li>Cheadle Town Stingers 1-3 FC United of Manchester</li>
          <li>Mossley Hill 2-2 Blackburn CSC</li>
          <li>Fleetwood Town Wrens 0-2 Tranmere Rovers</li>
        </ul>
      </section>

      <section>
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
            <tr><td className="p-2">1</td><td className="p-2">FC United of Manchester</td><td className="p-2">18</td><td className="p-2">14</td><td className="p-2">2</td><td className="p-2">2</td><td className="p-2">44</td></tr>
            <tr><td className="p-2">2</td><td className="p-2">Tranmere Rovers</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">42</td></tr>
            <tr><td className="p-2">3</td><td className="p-2">Cheadle Town Stingers</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">40</td></tr>
            <tr><td className="p-2">4</td><td className="p-2">Mossley Hill</td><td className="p-2">18</td><td className="p-2">10</td><td className="p-2">5</td><td className="p-2">3</td><td className="p-2">35</td></tr>
            <tr><td className="p-2">5</td><td className="p-2">Blackburn CSC</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">4</td><td className="p-2">5</td><td className="p-2">31</td></tr>
            <tr><td className="p-2">6</td><td className="p-2">Fleetwood Town Wrens</td><td className="p-2">18</td><td className="p-2">7</td><td className="p-2">4</td><td className="p-2">7</td><td className="p-2">25</td></tr>
            <tr><td className="p-2">7</td><td className="p-2">Wythenshawe</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">3</td><td className="p-2">9</td><td className="p-2">21</td></tr>
            <tr><td className="p-2">8</td><td className="p-2">Curzon Ashton</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">3</td><td className="p-2">11</td><td className="p-2">15</td></tr>
            <tr><td className="p-2">9</td><td className="p-2">West Didsbury & Chorlton</td><td className="p-2">18</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">13</td><td className="p-2">11</td></tr>
            <tr><td className="p-2">10</td><td className="p-2">Altrincham</td><td className="p-2">18</td><td className="p-2">2</td><td className="p-2">1</td><td className="p-2">15</td><td className="p-2">7</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
