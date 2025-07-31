export async function getWSLStandings() {
  const response = await fetch(
    "https://v3.football.api-sports.io/standings?league=2003&season=2025",
    {
      headers: {
        "x-apisports-key": process.env.NEXT_PUBLIC_FOOTBALL_API_KEY!,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );

  const data = await response.json();
  return data.response[0]?.league?.standings[0] || [];
}
