export default function LondonSEPremierPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-green-800">London & South East Regional Premier Division</h1>
        <p className="text-sm text-gray-600 mt-2">Tier 5 – Southern Regional League in the Women’s Football Pyramid</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Fixtures</h2>
        <ul className="space-y-2">
          <li>Fulham vs Dulwich Hamlet – Apr 28, 2025</li>
          <li>AFC Acorns vs Millwall Lionesses – Apr 29, 2025</li>
          <li>New London Lionesses vs Dartford – Apr 30, 2025</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
        <ul className="space-y-2">
          <li>Dulwich Hamlet 2-2 New London Lionesses</li>
          <li>Millwall Lionesses 3-1 Fulham</li>
          <li>Dartford 0-2 AFC Acorns</li>
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
            <tr><td className="p-2">1</td><td className="p-2">AFC Acorns</td><td className="p-2">18</td><td className="p-2">14</td><td className="p-2">2</td><td className="p-2">2</td><td className="p-2">44</td></tr>
            <tr><td className="p-2">2</td><td className="p-2">Millwall Lionesses</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">42</td></tr>
            <tr><td className="p-2">3</td><td className="p-2">Dulwich Hamlet</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">40</td></tr>
            <tr><td className="p-2">4</td><td className="p-2">New London Lionesses</td><td className="p-2">18</td><td className="p-2">11</td><td className="p-2">5</td><td className="p-2">2</td><td className="p-2">38</td></tr>
            <tr><td className="p-2">5</td><td className="p-2">Dartford</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">3</td><td className="p-2">6</td><td className="p-2">30</td></tr>
            <tr><td className="p-2">6</td><td className="p-2">Fulham</td><td className="p-2">18</td><td className="p-2">8</td><td className="p-2">4</td><td className="p-2">6</td><td className="p-2">28</td></tr>
            <tr><td className="p-2">7</td><td className="p-2">Ashford United</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">3</td><td className="p-2">9</td><td className="p-2">21</td></tr>
            <tr><td className="p-2">8</td><td className="p-2">Denham United</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">3</td><td className="p-2">11</td><td className="p-2">15</td></tr>
            <tr><td className="p-2">9</td><td className="p-2">Hackney</td><td className="p-2">18</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">13</td><td className="p-2">11</td></tr>
            <tr><td className="p-2">10</td><td className="p-2">Sporting Club Thamesmead</td><td className="p-2">18</td><td className="p-2">2</td><td className="p-2">1</td><td className="p-2">15</td><td className="p-2">7</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
