export default function WSLPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Women's Super League (WSL)</h1>
        <p className="text-sm text-gray-600 mt-2">The top tier of women's football in England</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Fixtures</h2>
        <ul className="space-y-2">
          <li>Arsenal vs Chelsea – Apr 21, 2025</li>
          <li>Man United vs Man City – Apr 22, 2025</li>
          <li>Aston Villa vs Spurs – Apr 23, 2025</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
        <ul className="space-y-2">
          <li>Chelsea 2-1 Man United</li>
          <li>Arsenal 3-0 Spurs</li>
          <li>Man City 2-2 Aston Villa</li>
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
            <tr><td className="p-2">1</td><td className="p-2">Chelsea</td><td className="p-2">18</td><td className="p-2">14</td><td className="p-2">2</td><td className="p-2">2</td><td className="p-2">44</td></tr>
            <tr><td className="p-2">2</td><td className="p-2">Arsenal</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">42</td></tr>
            <tr><td className="p-2">3</td><td className="p-2">Man City</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">40</td></tr>
            <tr><td className="p-2">4</td><td className="p-2">Man United</td><td className="p-2">18</td><td className="p-2">10</td><td className="p-2">5</td><td className="p-2">3</td><td className="p-2">35</td></tr>
            <tr><td className="p-2">5</td><td className="p-2">Aston Villa</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">4</td><td className="p-2">5</td><td className="p-2">31</td></tr>
            <tr><td className="p-2">6</td><td className="p-2">Tottenham</td><td className="p-2">18</td><td className="p-2">7</td><td className="p-2">3</td><td className="p-2">8</td><td className="p-2">24</td></tr>
            <tr><td className="p-2">7</td><td className="p-2">Everton</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">4</td><td className="p-2">8</td><td className="p-2">22</td></tr>
            <tr><td className="p-2">8</td><td className="p-2">Brighton</td><td className="p-2">18</td><td className="p-2">5</td><td className="p-2">4</td><td className="p-2">9</td><td className="p-2">19</td></tr>
            <tr><td className="p-2">9</td><td className="p-2">Leicester City</td><td className="p-2">18</td><td className="p-2">5</td><td className="p-2">2</td><td className="p-2">11</td><td className="p-2">17</td></tr>
            <tr><td className="p-2">10</td><td className="p-2">Bristol City</td><td className="p-2">18</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">13</td><td className="p-2">11</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
