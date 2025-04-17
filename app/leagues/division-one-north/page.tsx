export default function DivisionOneNorthPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">FA Women's National League - Division One North</h1>
        <p className="text-sm text-gray-600 mt-2">Tier 4 – Northern regional league in the women's football pyramid</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Fixtures</h2>
        <ul className="space-y-2">
          <li>Leeds United vs Middlesbrough – Apr 25, 2025</li>
          <li>Barnsley vs Hull City – Apr 26, 2025</li>
          <li>Newcastle United Dev vs Durham Cestria – Apr 27, 2025</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
        <ul className="space-y-2">
          <li>Middlesbrough 1-2 Barnsley</li>
          <li>Durham Cestria 3-3 Leeds United</li>
          <li>Hull City 0-1 Newcastle United Dev</li>
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
            <tr><td className="p-2">1</td><td className="p-2">Leeds United</td><td className="p-2">18</td><td className="p-2">14</td><td className="p-2">2</td><td className="p-2">2</td><td className="p-2">44</td></tr>
            <tr><td className="p-2">2</td><td className="p-2">Barnsley</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">42</td></tr>
            <tr><td className="p-2">3</td><td className="p-2">Middlesbrough</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">40</td></tr>
            <tr><td className="p-2">4</td><td className="p-2">Durham Cestria</td><td className="p-2">18</td><td className="p-2">11</td><td className="p-2">5</td><td className="p-2">2</td><td className="p-2">38</td></tr>
            <tr><td className="p-2">5</td><td className="p-2">Hull City</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">3</td><td className="p-2">6</td><td className="p-2">30</td></tr>
            <tr><td className="p-2">6</td><td className="p-2">Newcastle United Dev</td><td className="p-2">18</td><td className="p-2">8</td><td className="p-2">4</td><td className="p-2">6</td><td className="p-2">28</td></tr>
            <tr><td className="p-2">7</td><td className="p-2">FC United of Manchester</td><td className="p-2">18</td><td className="p-2">7</td><td className="p-2">3</td><td className="p-2">8</td><td className="p-2">24</td></tr>
            <tr><td className="p-2">8</td><td className="p-2">York City</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">2</td><td className="p-2">10</td><td className="p-2">20</td></tr>
            <tr><td className="p-2">9</td><td className="p-2">Bradford City</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">12</td><td className="p-2">14</td></tr>
            <tr><td className="p-2">10</td><td className="p-2">Chester-le-Street Town</td><td className="p-2">18</td><td className="p-2">2</td><td className="p-2">1</td><td className="p-2">15</td><td className="p-2">7</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
