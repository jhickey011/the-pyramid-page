export default function WestMidlandsPremierPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">West Midlands Regional Premier Division</h1>
        <p className="text-sm text-gray-600 mt-2">Tier 5 – Northern Regional League in the Women’s Football Pyramid</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Fixtures</h2>
        <ul className="space-y-2">
          <li>Kidderminster Harriers vs Lye Town – Apr 28, 2025</li>
          <li>Coventry Sphinx vs Worcester City – Apr 29, 2025</li>
          <li>Solihull Sporting vs Redditch United – Apr 30, 2025</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
        <ul className="space-y-2">
          <li>Lye Town 1-2 Coventry Sphinx</li>
          <li>Worcester City 3-3 Solihull Sporting</li>
          <li>Redditch United 0-1 Kidderminster Harriers</li>
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
            <tr><td className="p-2">1</td><td className="p-2">Coventry Sphinx</td><td className="p-2">18</td><td className="p-2">14</td><td className="p-2">2</td><td className="p-2">2</td><td className="p-2">44</td></tr>
            <tr><td className="p-2">2</td><td className="p-2">Kidderminster Harriers</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">42</td></tr>
            <tr><td className="p-2">3</td><td className="p-2">Worcester City</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">3</td><td className="p-2">3</td><td className="p-2">39</td></tr>
            <tr><td className="p-2">4</td><td className="p-2">Lye Town</td><td className="p-2">18</td><td className="p-2">10</td><td className="p-2">5</td><td className="p-2">3</td><td className="p-2">35</td></tr>
            <tr><td className="p-2">5</td><td className="p-2">Solihull Sporting</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">4</td><td className="p-2">5</td><td className="p-2">31</td></tr>
            <tr><td className="p-2">6</td><td className="p-2">Redditch United</td><td className="p-2">18</td><td className="p-2">7</td><td className="p-2">4</td><td className="p-2">7</td><td className="p-2">25</td></tr>
            <tr><td className="p-2">7</td><td className="p-2">Shrewsbury Town</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">3</td><td className="p-2">9</td><td className="p-2">21</td></tr>
            <tr><td className="p-2">8</td><td className="p-2">Hereford Pegasus</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">3</td><td className="p-2">11</td><td className="p-2">15</td></tr>
            <tr><td className="p-2">9</td><td className="p-2">Sedgley & Gornal</td><td className="p-2">18</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">13</td><td className="p-2">11</td></tr>
            <tr><td className="p-2">10</td><td className="p-2">Coventry City Dev</td><td className="p-2">18</td><td className="p-2">2</td><td className="p-2">1</td><td className="p-2">15</td><td className="p-2">7</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
