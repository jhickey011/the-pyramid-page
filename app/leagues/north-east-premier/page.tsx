export default function NorthEastPremierPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">North East Regional Premier Division</h1>
        <p className="text-sm text-gray-600 mt-2">Tier 5 – Northern Regional League in the Women’s Football Pyramid</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Fixtures</h2>
        <ul className="space-y-2">
          <li>Sunderland West End vs Hartlepool United – Apr 28, 2025</li>
          <li>Bishop Auckland vs Alnwick Town – Apr 29, 2025</li>
          <li>South Shields vs Redcar Town – Apr 30, 2025</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
        <ul className="space-y-2">
          <li>Hartlepool United 2-3 Bishop Auckland</li>
          <li>Redcar Town 1-1 Sunderland West End</li>
          <li>Alnwick Town 0-2 South Shields</li>
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
            <tr><td className="p-2">1</td><td className="p-2">South Shields</td><td className="p-2">18</td><td className="p-2">14</td><td className="p-2">2</td><td className="p-2">2</td><td className="p-2">44</td></tr>
            <tr><td className="p-2">2</td><td className="p-2">Bishop Auckland</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">42</td></tr>
            <tr><td className="p-2">3</td><td className="p-2">Sunderland West End</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">3</td><td className="p-2">3</td><td className="p-2">39</td></tr>
            <tr><td className="p-2">4</td><td className="p-2">Redcar Town</td><td className="p-2">18</td><td className="p-2">10</td><td className="p-2">4</td><td className="p-2">4</td><td className="p-2">34</td></tr>
            <tr><td className="p-2">5</td><td className="p-2">Hartlepool United</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">3</td><td className="p-2">6</td><td className="p-2">30</td></tr>
            <tr><td className="p-2">6</td><td className="p-2">Alnwick Town</td><td className="p-2">18</td><td className="p-2">7</td><td className="p-2">3</td><td className="p-2">8</td><td className="p-2">24</td></tr>
            <tr><td className="p-2">7</td><td className="p-2">Wallsend BC</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">2</td><td className="p-2">10</td><td className="p-2">20</td></tr>
            <tr><td className="p-2">8</td><td className="p-2">Norton & Stockton Ancients Dev</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">12</td><td className="p-2">14</td></tr>
            <tr><td className="p-2">9</td><td className="p-2">Durham United</td><td className="p-2">18</td><td className="p-2">3</td><td className="p-2">1</td><td className="p-2">14</td><td className="p-2">10</td></tr>
            <tr><td className="p-2">10</td><td className="p-2">Prudhoe Town</td><td className="p-2">18</td><td className="p-2">2</td><td className="p-2">1</td><td className="p-2">15</td><td className="p-2">7</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
