export async function getWSLFixtures() {
  const res = await fetch(
    "https://v3.football.api-sports.io/fixtures?league=44&season=2025",
    {
      headers: {
        "x-apisports-key": process.env.API_FOOTBALL_KEY,
      },
      next: { revalidate: 3600 }, // cache for 1 hour
    }
  );

  const data = await res.json();
  return data.response;
}
