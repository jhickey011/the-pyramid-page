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

        {/* Row 5: Tier 5 Regional Leagues - Left: North/Midlands | Right: South */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
          {/* Left column (Northern/Midlands - Blue) */}
          <div className="space-y-4">
            <a href="/leagues/east-midlands-premier" className="bg-blue-100 hover:bg-blue-200 transition rounded-xl shadow p-4 text-center">
              <h3 className="text-md font-medium text-blue-900">East Midlands Premier</h3>
              <p>Tier 5</p>
            </a>
            <a href="/leagues/north-east-premier" className="bg-blue-100 hover:bg-blue-200 transition rounded-xl shadow p-4 text-center">
              <h3 className="text-md font-medium text-blue-900">North East Premier</h3>
              <p>Tier 5</p>
            </a>
            <a href="/leagues/north-west-premier" className="bg-blue-100 hover:bg-blue-200 transition rounded-xl shadow p-4 text-center">
              <h3 className="text-md font-medium text-blue-900">North West Premier</h3>
              <p>Tier 5</p>
            </a>
            <a href="/leagues/west-midlands-premier" className="bg-blue-100 hover:bg-blue-200 transition rounded-xl shadow p-4 text-center">
              <h3 className="text-md font-medium text-blue-900">West Midlands Premier</h3>
              <p>Tier 5</p>
            </a>
          </div>

          {/* Right column (Southern - Green) */}
          <div className="space-y-4">
            <a href="/leagues/eastern-premier" className="bg-green-100 hover:bg-green-200 transition rounded-xl shadow p-4 text-center">
              <h3 className="text-md font-medium text-green-900">Eastern Premier</h3>
              <p>Tier 5</p>
            </a>
            <a href="/leagues/london-se-premier" className="bg-green-100 hover:bg-green-200 transition rounded-xl shadow p-4 text-center">
              <h3 className="text-md font-medium text-green-900">London & SE Premier</h3>
              <p>Tier 5</p>
            </a>
            <a href="/leagues/south-west-premier" className="bg-green-100 hover:bg-green-200 transition rounded-xl shadow p-4 text-center">
              <h3 className="text-md font-medium text-green-900">South West Premier</h3>
              <p>Tier 5</p>
            </a>
            <a href="/leagues/southern-premier" className="bg-green-100 hover:bg-green-200 transition rounded-xl shadow p-4 text-center">
              <h3 className="text-md font-medium text-green-900">Southern Premier</h3>
              <p>Tier 5</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
