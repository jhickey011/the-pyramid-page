export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="p-6 shadow-md bg-blue-800 text-white">
        <h1 className="text-3xl font-bold">The Pyramid Page</h1>
        <p className="text-sm mt-1">Exploring the full structure of Women's Football in England</p>
      </header>

      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Leagues</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <li className="bg-blue-100 p-4 rounded-xl shadow">
            <a href="/leagues/wsl" className="text-xl font-medium text-blue-900">WSL</a>
            <p>Women's Super League</p>
          </li>
          <li className="bg-blue-100 p-4 rounded-xl shadow">
            <a href="/leagues/championship" className="text-xl font-medium text-blue-900">Championship</a>
            <p>Women's Championship</p>
          </li>
          <li className="bg-blue-100 p-4 rounded-xl shadow">
            <a href="/leagues/national-north" className="text-xl font-medium text-blue-900">National League North</a>
            <p>Northern Premier Division</p>
          </li>
          <li className="bg-blue-100 p-4 rounded-xl shadow">
            <a href="/leagues/national-south" className="text-xl font-medium text-blue-900">National League South</a>
            <p>Southern Premier Division</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
