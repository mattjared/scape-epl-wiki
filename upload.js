const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

// Ensure the URL is in the correct format
if (!supabaseUrl.startsWith('https://')) {
  console.error('Error: Supabase URL should start with https://');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Read the JSON file
const jsonData = fs.readFileSync('football_clubs.json', 'utf8');
const teams = JSON.parse(jsonData);

// Insert data into Supabase
async function insertData() {
  console.log('Inserting data into Supabase...');
  console.log(teams);
  console.log(supabase);
  try {
    const { data, error } = await supabase
      .from('football_clubs')
      .insert(teams);

    if (error) {
      console.error('Supabase error:', error);
      return;
    }

    if (data) {
      console.log(`Successfully inserted ${data.length} records.`);
    } else {
      console.log('Operation completed, but no data returned.');
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

insertData().catch(error => {
  console.error('Unhandled promise rejection:', error);
});