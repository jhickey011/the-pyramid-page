export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="p-6 shadow-md bg-blue-800 text-white text-center">
        <h1 className="text-3xl font-bold">The Pyramid Page</h1>
        <p className="text-sm mt-1">Exploring the full structure of Women's Football in England</p>
      </header>

      <section className="p-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">Women's Football League Pyramid</h2>

        {/* Row 1: WSL */}
        <div className="grid grid-cols-1 place-items-center mb-6">
          <a href="/leagues/wsl" className="bg-blue-100 hover:bg-blue-200 transition rounded-xl shadow p-4 w-64 text-center">
            <img src="/logos/wsl.png" alt="WSL Logo" className="mx-auto mb-2 h-10" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mb-6">
          <a href="/leagues/national-north" className="bg-blue-200 hover:bg-blue-300 transition rounded-xl shadow p-4 w-full text-center">
            <h3 className="text-xl font-medium text-blue-900">National League North</h3>
            <p>Northern Premier Division</p>
          </a>
          <a href="/leagues/national-south" className="bg-green-200 hover:bg-green-300 transition rounded-xl shadow p-4 w-full text-center">
            <h3 className="text-xl font-medium text-green-900">National League South</h3>
            <p>Southern Premier Division</p>
          </a>
        </div>

        {/* Row 4: Division One (North, Midlands, SE, SW) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center mb-6">
          <a href="/leagues/division-one-north" className="bg-blue-50 hover:bg-blue-100 transition rounded-xl shadow p-4 text-center">
            <h3 className="text-lg font-medium text-blue-800">Division One North</h3>
            <p>Tier 4</p>
          </a>
          <a href="/leagues/division-one-midlands" className="bg-blue-50 hover:bg-blue-100 transition rounded-xl shadow p-4 text-center">
            <h3 className="text-lg font-medium text-blue-800">Division One Midlands</h3>
            <p>Tier 4</p>
          </a>
          <a href="/leagues/division-one-south-east" className="bg-green-50 hover:bg-green-100 transition rounded-xl shadow p-4 text-center">
            <h3 className="text-lg font-medium text-green-800">Division One South East</h3>
            <p>Tier 4</p>
          </a>
          <a href="/leagues/division-one-south-west" className="bg-green-50 hover:bg-green-100 transition rounded-xl shadow p-4 text-center">
            <h3 className="text-lg font-medium text-green-800">Division One South West</h3>
            <p>Tier 4</p>
          </a>
        </div>

        {/* Row 5: Tier 5 Regional Leagues Grouped */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Northern Tier 5 */}
          <div className="bg-blue-50 rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">Tier 5 – Northern Region</h3>
            <div className="grid grid-cols-1 gap-4">
              <a href="/leagues/east-midlands-premier" className="hover:underline text-blue-800 text-center">East Midlands Premier</a>
              <a href="/leagues/north-east-premier" className="hover:underline text-blue-800 text-center">North East Premier</a>
              <a href="/leagues/north-west-premier" className="hover:underline text-blue-800 text-center">North West Premier</a>
              <a href="/leagues/west-midlands-premier" className="hover:underline text-blue-800 text-center">West Midlands Premier</a>
            </div>
          </div>

          {/* Southern Tier 5 */}
          <div className="bg-green-50 rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-4 text-center">Tier 5 – Southern Region</h3>
            <div className="grid grid-cols-1 gap-4">
              <a href="/leagues/eastern-premier" className="hover:underline text-green-800 text-center">Eastern Premier</a>
              <a href="/leagues/london-se-premier" className="hover:underline text-green-800 text-center">London & SE Premier</a>
              <a href="/leagues/south-west-premier" className="hover:underline text-green-800 text-center">South West Premier</a>
              <a href="/leagues/southern-premier" className="hover:underline text-green-800 text-center">Southern Premier</a>
            </div>
          </div>
        </div>

        {/* Row 6: Tier 6 Placeholder */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Tier 6 – County & Sub-Regional Leagues</h3>
          <p className="text-sm text-gray-600">Coming soon: local leagues feeding into Tier 5, by region</p>
        </div>
      </section>
    </main>
  );
}
