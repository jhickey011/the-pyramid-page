export default function DivisionOneSouthWestPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-green-800">FA Women's National League - Division One South West</h1>
        <p className="text-sm text-gray-600 mt-2">Tier 4 – South West regional league in the women's football pyramid</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Fixtures</h2>
        <ul className="space-y-2">
          <li>Exeter City vs Keynsham Town – Apr 25, 2025</li>
          <li>Southampton Women vs Bournemouth – Apr 26, 2025</li>
          <li>Swindon Town vs Cardiff City – Apr 27, 2025</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
        <ul className="space-y-2">
          <li>Bournemouth 2-1 Exeter City</li>
          <li>Keynsham Town 0-0 Swindon Town</li>
          <li>Cardiff City 1-3 Southampton Women</li>
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
            <tr><td className="p-2">1</td><td className="p-2">Southampton Women</td><td className="p-2">18</td><td className="p-2">14</td><td className="p-2">2</td><td className="p-2">2</td><td className="p-2">44</td></tr>
            <tr><td className="p-2">2</td><td className="p-2">Exeter City</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">42</td></tr>
            <tr><td className="p-2">3</td><td className="p-2">Cardiff City</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">40</td></tr>
            <tr><td className="p-2">4</td><td className="p-2">Keynsham Town</td><td className="p-2">18</td><td className="p-2">11</td><td className="p-2">5</td><td className="p-2">2</td><td className="p-2">38</td></tr>
            <tr><td className="p-2">5</td><td className="p-2">Bournemouth</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">3</td><td className="p-2">6</td><td className="p-2">30</td></tr>
            <tr><td className="p-2">6</td><td className="p-2">Swindon Town</td><td className="p-2">18</td><td className="p-2">8</td><td className="p-2">4</td><td className="p-2">6</td><td className="p-2">28</td></tr>
            <tr><td className="p-2">7</td><td className="p-2">Bristol Rovers</td><td className="p-2">18</td><td className="p-2">7</td><td className="p-2">3</td><td className="p-2">8</td><td className="p-2">24</td></tr>
            <tr><td className="p-2">8</td><td className="p-2">Torquay United</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">2</td><td className="p-2">10</td><td className="p-2">20</td></tr>
            <tr><td className="p-2">9</td><td className="p-2">Poole Town</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">12</td><td className="p-2">14</td></tr>
            <tr><td className="p-2">10</td><td className="p-2">Portishead Town</td><td className="p-2">18</td><td className="p-2">2</td><td className="p-2">1</td><td className="p-2">15</td><td className="p-2">7</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
