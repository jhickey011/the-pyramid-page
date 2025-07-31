export async function getWSLStandings() {
  console.log("API KEY CHECK:", process.env.NEXT_PUBLIC_FOOTBALL_API);
  
  const response = await fetch(
    "https://v3.football.api-sports.io/standings?league=98&season=2025",
    {
      headers: {
        "x-apisports-key": process.env.NEXT_PUBLIC_FOOTBALL_API!,
      },
      next: { revalidate: 3600 },
    }
  );

  const data = await response.json();
  return data.response[0]?.league?.standings[0] || [];
}
