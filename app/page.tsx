export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="p-6 shadow-md bg-blue-800 text-white text-center">
        <h1 className="text-3xl font-bold">The Pyramid Page</h1>
        <p className="text-sm mt-1">Exploring the full structure of Women's Football in England</p>
      </header>

      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">Women's Football League Pyramid</h2>

        {/* Row 1: WSL */}
        <div className="grid grid-cols-1 place-items-center mb-6">
          <a href="/leagues/wsl" className="bg-blue-100 hover:bg-blue-200 transition rounded-xl shadow p-4 w-64 text-center">
            <h3 className="text-xl font-medium text-blue-900">WSL</h3>
            <p>Women's Super League</p>
          </a>
        </div>

        {/* Row 2: Championship */}
        <div className="grid grid-cols-1 place-items-center mb-6">
          <a href="/leagues/championship" className="bg-blue-100 hover:bg-blue-200 transition rounded-xl shadow p-4 w-64 text-center">
            <h3 className="text-xl font-medium text-blue-900">Championship</h3>
            <p>Women's Championship</p>
          </a>
        </div>

        {/* Row 3: National North & South */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
          <a href="/leagues/national-north" className="bg-blue-100 hover:bg-blue-200 transition rounded-xl shadow p-4 w-full text-center">
            <h3 className="text-xl font-medium text-blue-900">National League North</h3>
            <p>Northern Premier Division</p>
          </a>
          <a href="/leagues/national-south" className="bg-blue-100 hover:bg-blue-200 transition rounded-xl shadow p-4 w-full text-center">
            <h3 className="text-xl font-medium text-blue-900">National League South</h3>
            <p>Southern Premier Division</p>
          </a>
        </div>
      </section>
    </main>
  );
}
