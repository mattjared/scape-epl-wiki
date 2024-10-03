// 1. write a scraper that will scrape the data from the website and store it in a file
// 2. the page is this https://en.wikipedia.org/wiki/List_of_football_clubs_in_England
// 3. the data to scrape is the team name, team nickname, and the team's website
// 4. the data should be stored in a file called "football_clubs.json"

const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');

axios.get('https://en.wikipedia.org/wiki/List_of_football_clubs_in_England')
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const teams = [];

        // Select all tables with class 'wikitable'
        $('table.wikitable').each((_, table) => {
            // For each table, select all rows except the header row
            $(table).find('tr:not(:first-child)').each((_, row) => {
                const team = {
                    name: $(row).find('td:nth-child(1)').text().trim(),
                    league: $(row).find('td:nth-child(2)').text().trim(),
                    level: $(row).find('td:nth-child(3)').text().trim(),
                    nickname: $(row).find('td:nth-child(4)').text().trim(),
                };
                teams.push(team);
            });
        });

        fs.writeFileSync('football_clubs.json', JSON.stringify(teams, null, 2));
    })    
    .catch(console.error);
