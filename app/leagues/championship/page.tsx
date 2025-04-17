export default function ChampionshipPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Women's Championship</h1>
        <p className="text-sm text-gray-600 mt-2">The second tier of women's football in England</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Fixtures</h2>
        <ul className="space-y-2">
          <li>Crystal Palace vs Charlton – Apr 21, 2025</li>
          <li>Durham vs Birmingham City – Apr 22, 2025</li>
          <li>Blackburn vs Reading – Apr 23, 2025</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
        <ul className="space-y-2">
          <li>Charlton 1-1 Durham</li>
          <li>Crystal Palace 2-0 Blackburn</li>
          <li>Birmingham City 0-2 Reading</li>
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
            <tr><td className="p-2">1</td><td className="p-2">Crystal Palace</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">42</td></tr>
            <tr><td className="p-2">2</td><td className="p-2">Charlton</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">40</td></tr>
            <tr><td className="p-2">3</td><td className="p-2">Durham</td><td className="p-2">18</td><td className="p-2">11</td><td className="p-2">5</td><td className="p-2">2</td><td className="p-2">38</td></tr>
            <tr><td className="p-2">4</td><td className="p-2">Reading</td><td className="p-2">18</td><td className="p-2">10</td><td className="p-2">4</td><td className="p-2">4</td><td className="p-2">34</td></tr>
            <tr><td className="p-2">5</td><td className="p-2">Blackburn</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">3</td><td className="p-2">6</td><td className="p-2">30</td></tr>
            <tr><td className="p-2">6</td><td className="p-2">Birmingham City</td><td className="p-2">18</td><td className="p-2">8</td><td className="p-2">2</td><td className="p-2">8</td><td className="p-2">26</td></tr>
            <tr><td className="p-2">7</td><td className="p-2">Sheffield United</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">4</td><td className="p-2">8</td><td className="p-2">22</td></tr>
            <tr><td className="p-2">8</td><td className="p-2">Southampton</td><td className="p-2">18</td><td className="p-2">5</td><td className="p-2">5</td><td className="p-2">8</td><td className="p-2">20</td></tr>
            <tr><td className="p-2">9</td><td className="p-2">Sunderland</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">4</td><td className="p-2">10</td><td className="p-2">16</td></tr>
            <tr><td className="p-2">10</td><td className="p-2">Lewes</td><td className="p-2">18</td><td className="p-2">2</td><td className="p-2">3</td><td className="p-2">13</td><td className="p-2">9</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
