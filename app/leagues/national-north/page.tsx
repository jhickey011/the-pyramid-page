export default function NationalNorthPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">FA Women's National League - Northern Premier Division</h1>
        <p className="text-sm text-gray-600 mt-2">Tier 3 – Northern regional league of the women’s football pyramid</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Fixtures</h2>
        <ul className="space-y-2">
          <li>Newcastle United vs Burnley – Apr 21, 2025</li>
          <li>Derby County vs Nottingham Forest – Apr 22, 2025</li>
          <li>Huddersfield vs Stoke City – Apr 23, 2025</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
        <ul className="space-y-2">
          <li>Burnley 1-1 Newcastle United</li>
          <li>Derby County 3-2 Huddersfield</li>
          <li>Nottingham Forest 2-0 Stoke City</li>
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
            <tr><td className="p-2">1</td><td className="p-2">Newcastle United</td><td className="p-2">18</td><td className="p-2">14</td><td className="p-2">2</td><td className="p-2">2</td><td className="p-2">44</td></tr>
            <tr><td className="p-2">2</td><td className="p-2">Burnley</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">42</td></tr>
            <tr><td className="p-2">3</td><td className="p-2">Derby County</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">40</td></tr>
            <tr><td className="p-2">4</td><td className="p-2">Nottingham Forest</td><td className="p-2">18</td><td className="p-2">11</td><td className="p-2">5</td><td className="p-2">2</td><td className="p-2">38</td></tr>
            <tr><td className="p-2">5</td><td className="p-2">Huddersfield</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">3</td><td className="p-2">6</td><td className="p-2">30</td></tr>
            <tr><td className="p-2">6</td><td className="p-2">Stoke City</td><td className="p-2">18</td><td className="p-2">8</td><td className="p-2">4</td><td className="p-2">6</td><td className="p-2">28</td></tr>
            <tr><td className="p-2">7</td><td className="p-2">Liverpool Feds</td><td className="p-2">18</td><td className="p-2">7</td><td className="p-2">3</td><td className="p-2">8</td><td className="p-2">24</td></tr>
            <tr><td className="p-2">8</td><td className="p-2">West Brom</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">2</td><td className="p-2">10</td><td className="p-2">20</td></tr>
            <tr><td className="p-2">9</td><td className="p-2">Huddersfield Town</td><td className="p-2">18</td><td className="p-2">5</td><td className="p-2">2</td><td className="p-2">11</td><td className="p-2">17</td></tr>
            <tr><td className="p-2">10</td><td className="p-2">Bradford City</td><td className="p-2">18</td><td className="p-2">2</td><td className="p-2">3</td><td className="p-2">13</td><td className="p-2">9</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
