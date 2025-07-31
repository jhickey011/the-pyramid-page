import NavBar from "../../../components/NavBar";
import Link from "next/link";

export default function WSLPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-red-800">Barclays Women's Super League (2025–26)</h1>
            <p className="text-sm text-gray-600 mt-2">Tier 1 – Top division of English women's football</p>
          </div>
          <Link href="/leagues/wsl/fixtures" className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-700">
            View Full Fixtures & Results
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold mb-4">League Table</h2>
            <p className="text-gray-600 text-sm mb-4">League standings will be updated once the season begins.</p>
            {/* You can dynamically load table data here later */}
          </div>

          <aside className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Champions League & Relegation</h3>
            <p className="text-sm text-gray-700 mb-2">
              The top 3 teams qualify for the UEFA Women's Champions League. The bottom team is relegated to the <Link href="/leagues/championship" className="underline text-blue-700">Championship</Link>.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
