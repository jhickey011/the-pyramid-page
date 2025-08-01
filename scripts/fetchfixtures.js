const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.footballwebpages.co.uk/womens-national-league-north/fixtures-results';

async function fetchFixtures() {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const fixtures = [];

    $('table.fixtureTable tbody tr').each((_, row) => {
      const cols = $(row).find('td');
      const date = $(cols[0]).text().trim();
      const home = $(cols[1]).text().trim();
      const status = $(cols[2]).text().trim();
      const away = $(cols[3]).text().trim();

      fixtures.push({ date, home, away, status });
    });

    console.log(fixtures);
  } catch (err) {
    console.error('Error fetching fixtures:', err.message);
  }
}

fetchFixtures();
