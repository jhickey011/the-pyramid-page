export async function getWSLFixtures() {
  const res = await fetch(
    "https://v3.football.api-sports.io/fixtures?league=98&season=2025",
    {
      headers: {
        "x-apisports-key": process.env.NEXT_PUBLIC_FOOTBALL_API!,
      },
      next: { revalidate: 3600 }, // cache for 1 hour
    }
  );

  const data = await res.json();
  return data.response;
}
