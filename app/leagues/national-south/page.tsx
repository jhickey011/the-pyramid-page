import NavBar from "../../components/NavBar";

export default function NationalSouthPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">FA Women's National League - Southern Premier Division</h1>
        <p className="text-sm text-gray-600 mt-2">Tier 3 – Southern regional league of the women’s football pyramid</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Fixtures</h2>
        <ul className="space-y-2">
          <li>Oxford United vs Portsmouth – Apr 21, 2025</li>
          <li>Watford vs Ipswich Town – Apr 22, 2025</li>
          <li>MK Dons vs Plymouth Argyle – Apr 23, 2025</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
        <ul className="space-y-2">
          <li>Portsmouth 1-2 Watford</li>
          <li>Oxford United 3-1 MK Dons</li>
          <li>Plymouth Argyle 0-0 Ipswich Town</li>
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
            <tr><td className="p-2">1</td><td className="p-2">Oxford United</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">42</td></tr>
            <tr><td className="p-2">2</td><td className="p-2">Portsmouth</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">40</td></tr>
            <tr><td className="p-2">3</td><td className="p-2">Watford</td><td className="p-2">18</td><td className="p-2">11</td><td className="p-2">5</td><td className="p-2">2</td><td className="p-2">38</td></tr>
            <tr><td className="p-2">4</td><td className="p-2">Ipswich Town</td><td className="p-2">18</td><td className="p-2">10</td><td className="p-2">4</td><td className="p-2">4</td><td className="p-2">34</td></tr>
            <tr><td className="p-2">5</td><td className="p-2">MK Dons</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">3</td><td className="p-2">6</td><td className="p-2">30</td></tr>
            <tr><td className="p-2">6</td><td className="p-2">Plymouth Argyle</td><td className="p-2">18</td><td className="p-2">8</td><td className="p-2">2</td><td className="p-2">8</td><td className="p-2">26</td></tr>
            <tr><td className="p-2">7</td><td className="p-2">London Bees</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">4</td><td className="p-2">8</td><td className="p-2">22</td></tr>
            <tr><td className="p-2">8</td><td className="p-2">Hashtag United</td><td className="p-2">18</td><td className="p-2">5</td><td className="p-2">5</td><td className="p-2">8</td><td className="p-2">20</td></tr>
            <tr><td className="p-2">9</td><td className="p-2">Gillingham</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">4</td><td className="p-2">10</td><td className="p-2">16</td></tr>
            <tr><td className="p-2">10</td><td className="p-2">Chatham Town</td><td className="p-2">18</td><td className="p-2">2</td><td className="p-2">3</td><td className="p-2">13</td><td className="p-2">9</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
