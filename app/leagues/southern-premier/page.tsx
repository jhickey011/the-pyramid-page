export default function SouthernPremierPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-gray-100 p-4 shadow-md">
        <nav className="flex space-x-4 justify-center text-sm font-medium text-blue-800">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/leagues/wsl" className="hover:underline">WSL</Link>
          <Link href="/leagues/championship" className="hover:underline">Championship</Link>
          <Link href="/leagues/national-north" className="hover:underline">National North</Link>
          <Link href="/leagues/national-south" className="hover:underline">National South</Link>
        </nav>
      </header>

      <div className="p-8">
        <h1 className="text-3xl font-bold text-green-800">Southern Regional Premier Division</h1>
        <p className="text-sm text-gray-600 mt-2">Tier 5 – Southern Regional League in the Women’s Football Pyramid</p>

        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Fixtures</h2>
          <ul className="space-y-2">
            <li>Oxford City vs Abingdon United – Apr 28, 2025</li>
            <li>Ascot United vs Bournemouth Sports – Apr 29, 2025</li>
            <li>Eversley & California vs Wycombe Wanderers – Apr 30, 2025</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
          <ul className="space-y-2">
            <li>Abingdon United 1-1 Eversley & California</li>
            <li>Bournemouth Sports 0-2 Oxford City</li>
            <li>Wycombe Wanderers 2-3 Ascot United</li>
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
              <tr><td className="p-2">1</td><td className="p-2">Oxford City</td><td className="p-2">18</td><td className="p-2">14</td><td className="p-2">2</td><td className="p-2">2</td><td className="p-2">44</td></tr>
              <tr><td className="p-2">2</td><td className="p-2">Ascot United</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">42</td></tr>
              <tr><td className="p-2">3</td><td className="p-2">Abingdon United</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">40</td></tr>
              <tr><td className="p-2">4</td><td className="p-2">Bournemouth Sports</td><td className="p-2">18</td><td className="p-2">11</td><td className="p-2">5</td><td className="p-2">2</td><td className="p-2">38</td></tr>
              <tr><td className="p-2">5</td><td className="p-2">Eversley & California</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">3</td><td className="p-2">6</td><td className="p-2">30</td></tr>
              <tr><td className="p-2">6</td><td className="p-2">Wycombe Wanderers</td><td className="p-2">18</td><td className="p-2">8</td><td className="p-2">4</td><td className="p-2">6</td><td className="p-2">28</td></tr>
              <tr><td className="p-2">7</td><td className="p-2">Woodley United</td><td className="p-2">18</td><td className="p-2">6</td><td className="p-2">3</td><td className="p-2">9</td><td className="p-2">21</td></tr>
              <tr><td className="p-2">8</td><td className="p-2">Milton United</td><td className="p-2">18</td><td className="p-2">4</td><td className="p-2">3</td><td className="p-2">11</td><td className="p-2">15</td></tr>
              <tr><td className="p-2">9</td><td className="p-2">Tilehurst Panthers</td><td className="p-2">18</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">13</td><td className="p-2">11</td></tr>
              <tr><td className="p-2">10</td><td className="p-2">Wargrave</td><td className="p-2">18</td><td className="p-2">2</td><td className="p-2">1</td><td className="p-2">15</td><td className="p-2">7</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
