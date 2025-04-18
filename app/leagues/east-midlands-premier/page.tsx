export default function EastMidlandsPremierPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">East Midlands Regional Premier Division</h1>
        <p className="text-sm text-gray-600 mt-2">Tier 5 – Northern Regional League in the Women’s Football Pyramid</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Fixtures</h2>
        <ul className="space-y-2">
          <li>Nottingham Forest Dev vs Mansfield Town – Apr 27, 2025</li>
          <li>Lincoln United vs Chesterfield – Apr 28, 2025</li>
          <li>Loughborough Students vs Arnold Eagles – Apr 29, 2025</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
        <ul className="space-y-2">
          <li>Mansfield Town 2-2 Lincoln United</li>
          <li>Chesterfield 1-3 Nottingham Forest Dev</li>
          <li>Arnold Eagles 0-1 Loughborough Students</li>
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
            <tr><td className="p-2">1</td><td className="p-2">Nottingham Forest Dev</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">42</td></tr>
            <tr><td className="p-2">2</td><td className="p-2">Lincoln United</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">40</td></tr>
            <tr><td className="p-2">3</td><td className="p-2">Loughborough Students</td><td className="p-2">18</td><td className="p-2">11</td><td className="p-2">4</td><td className="p-2">3</td><td className="p-2">37</td></tr>
            <tr><td className="p-2">4</td><td className="p-2">Chesterfield</td><td className="p-2">18</td><td className="p-2">10</td><td className="p-2">3</td><td className="p-2">5</td><td className="p-2">33</td></tr>
            <tr><td className="p-2">5</td><td className="p-2">Arnold Eagles</td><td className="p-2">18</td><td className="p-2">8</td><td className="p-2">5</td><td className="p-2">5</td><td className="p-2">29</td></tr>
            <tr><td className="p-2">6</td><td className="p-2">Mansfield Town</td><td className="p-2">18</td><td className="p-2">7</td><td className="p-2">4</td><td className="p-2">7</td><td className="p-2">25</td></tr>
            <tr><td className="p-2">7</td><td className="p-2">Grantham Town</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">3</td><td className="p-2">9</td><td className="p-2">21</td></tr>
            <tr><td className="p-2">8</td><td className="p-2">Sleaford Ladies</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">12</td><td className="p-2">14</td></tr>
            <tr><td className="p-2">9</td><td className="p-2">Notts County Dev</td><td className="p-2">18</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">13</td><td className="p-2">11</td></tr>
            <tr><td className="p-2">10</td><td className="p-2">Nettleham</td><td className="p-2">18</td><td className="p-2">2</td><td className="p-2">2</td><td className="p-2">14</td><td className="p-2">8</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
