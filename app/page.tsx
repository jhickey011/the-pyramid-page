import Link from "next/link";
import NavBar from "../../../components/NavBar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-red-800">The Pyramid Page</h1>

        {/* Tier 1: WSL */}
        <div className="flex justify-center mb-8">
          <Link href="/leagues/wsl">
            <div className="bg-red-100 border border-red-400 rounded-full px-6 py-4 text-center shadow hover:bg-red-200">
              <img src="/logos/wsl.png" alt="WSL logo" className="h-10 mx-auto mb-2" />
              <p className="text-red-800 font-semibold">Barclays WSL</p>
            </div>
          </Link>
        </div>

        {/* Tier 2: Championship */}
        <div className="flex justify-center mb-8">
          <Link href="/leagues/championship">
            <div className="bg-yellow-100 border border-yellow-400 rounded-lg px-6 py-4 text-center shadow hover:bg-yellow-200">
              <img src="/logos/championship.png" alt="Championship logo" className="h-10 mx-auto mb-2" />
              <p className="text-yellow-800 font-semibold">Women’s Championship</p>
            </div>
          </Link>
        </div>

        {/* Tier 3: National League North & South */}
        <div className="flex justify-center gap-12 mb-8">
          <Link href="/leagues/national-league-north">
            <div className="bg-blue-100 border border-blue-400 rounded-lg px-6 py-4 text-center shadow hover:bg-blue-200">
              <p className="text-blue-800 font-semibold">National League – North</p>
            </div>
          </Link>

          <Link href="/leagues/national-league-south">
            <div className="bg-green-100 border border-green-400 rounded-lg px-6 py-4 text-center shadow hover:bg-green-200">
              <p className="text-green-800 font-semibold">National League – South</p>
            </div>
          </Link>
        </div>

        {/* Future tiers can be added similarly below */}
      </div>
    </main>
  );
}

