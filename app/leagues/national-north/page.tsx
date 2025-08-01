'use client';
import Link from 'next/link';

export default function NationalNorthPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-pink-400 p-6 max-w-5xl mx-auto">
      {/* NavBar */}
      <nav className="w-full bg-gray-950 text-pink-300 p-4 shadow-md mb-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:text-pink-400 transition">
            ← Back to Home
          </Link>
          <h1 className="text-lg sm:text-xl font-semibold">
            Women’s National League North
          </h1>
        </div>
      </nav>

      {/* Fixtures & Results Section */}
      <section className="bg-gray-800 p-6 rounded-lg mb-8 w-full">
        <h2 className="text-xl font-bold mb-4 text-pink-300">
          Fixtures & Results
        </h2>

        {/* Embed Container */}
        <div
          className="fwp-embed"
          data-url="womens-national-league-north/fixtures-results="
        ></div>
      </section>

      {/* Insert this script once per page */}
      <script src="https://www.footballwebpages.co.uk/embed.js" defer></script>
    </main>
  );
}
