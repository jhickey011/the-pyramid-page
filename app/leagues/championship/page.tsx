import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function ChampionshipPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <div className="p-8">
        <h1 className="text-3xl font-bold text-blue-800">Women's Championship</h1>
        <p className="text-sm text-gray-600 mt-2">Tier 2 – Professional League in the Women’s Football Pyramid</p>

        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Fixtures</h2>
          <ul className="space-y-2">
            <li>Sunderland vs Crystal Palace – Apr 27, 2025</li>
            <li>Blackburn Rovers vs Durham – Apr 28, 2025</li>
            <li>Birmingham City vs Reading – Apr 29, 2025</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
          <ul className="space-y-2">
            <li>Crystal Palace 2-1 Birmingham City</li>
            <li>Durham 0-0 Sunderland</li>
            <li>Reading 1-2 Blackburn Rovers</li>
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
              <tr><td className="p-2">1</td><td className="p-2">Sunderland</td><td className="p-2">18</td><td className="p-2">13</td><td className="p-2">4</td><td className="p-2">1</td><td className="p-2">43</td></tr>
              <tr><td className="p-2">2</td><td className="p-2">Blackburn Rovers</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">5</td><td className="p-2">1</td><td className="p-2">41</td></tr>
              <tr><td className="p-2">3</td><td className="p-2">Crystal Palace</td><td className="p-2">18</td><td className="p-2">12</td><td className="p-2">3</td><td className="p-2">3</td><td className="p-2">39</td></tr>
              <tr><td className="p-2">4</td><td className="p-2">Durham</td><td className="p-2">18</td><td className="p-2">11</td><td className="p-2">3</td><td className="p-2">4</td><td className="p-2">36</td></tr>
              <tr><td className="p-2">5</td><td className="p-2">Reading</td><td className="p-2">18</td><td className="p-2">9</td><td className="p-2">5</td><td className="p-2">4</td><td className="p-2">32</td></tr>
              <tr><td className="p-2">6</td><td className="p-2">Birmingham City</td><td className="p-2">18</td><td className="p-2">8</td><td className="p-2">5</td><td className="p-2">5</td><td className="p-2">29</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
