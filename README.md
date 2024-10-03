# Football Clubs Data Uploader

This project is a simple Node.js script that reads football club data from a JSON file and uploads it to a Supabase database.
This was all made with Cursor AI and OpenAI and OMG this is so cool.

## Prerequisites

- Node.js installed on your machine
- A Supabase account and project set up
- A JSON file named `football_clubs.json` containing the football club data

## Setup

1. Clone this repository:

```bash
git clone https://github.com/your-username/football-clubs-uploader.git
cd football-clubs-uploader
npm install
```

2. Create a `.env` file in the root directory and add your Supabase credentials:

```bash
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_API_KEY=your_supabase_api_key
   ```

3. Ensure your `football_clubs.json` file is in the root directory of the project.

## Usage

Run the script using Node.js:

# How to use pload.js 

The script will read the data from `football_clubs.json` and insert it into your Supabase database table named `football_clubs`.

## File Structure

- `upload.js`: The main script that reads the JSON file and uploads data to Supabase.
- `football_clubs.json`: JSON file containing the football club data (not included in the repository).
- `.env`: Contains your Supabase credentials (not included in the repository).
- `.env.example`: An example of the required environment variables.
- `.gitignore`: Specifies which files should be ignored by Git.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
