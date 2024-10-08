

---

# Dictionary App

A simple React-based dictionary app that allows users to search for word definitions using the [Dictionary by API Ninjas](https://api-ninjas.com/api/dictionary) API. The app is styled using Bootstrap for a responsive and user-friendly interface.

## Features

- **Word Search**: Users can input a word to get its definition using the Dictionary API.
- **Bootstrap Integration**: The app uses Bootstrap for modern and responsive styling.
- **Error Handling**: If a word definition is not found, the app displays an appropriate message.
- **API Integration**: The app fetches data from a third-party API using Axios.

## Tech Stack

- **React.js**: Frontend framework.
- **Bootstrap**: For responsive and clean UI styling.
- **Axios**: For making HTTP requests to the Dictionary API.
- **RapidAPI**: For API access to the Dictionary service.

## Project Structure

```bash
src
├── Components
│   ├── SearchBar.jsx        # Search bar component
│   ├── WordDefinition.jsx   # Displays word definition
├── Utils
│   └── fetchWordData.js     # Utility function for fetching word data from API
├── App.jsx                  # Main App component
├── index.jsx                # React entry point
├── assets                   # Static assets (if any)
├── .env                     # Environment variables (for API key)
└── App.css                  # Custom styles (if any)
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/dictionary-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd dictionary-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

4. **Set up your environment variables**:
   Create a `.env` file in the root directory and add your [RapidAPI](https://rapidapi.com/) key:

   ```bash
   VITE_RAPIDAPI_KEY=your-rapidapi-key-here
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. **Access the app**:
   Open your browser and go to `http://localhost:3000` (or the port shown in the terminal).

### Usage

1. **Enter a word** in the search bar and press the "Search" button.
2. The app will fetch the word definition from the API and display it below the search bar.
3. If no definition is found, an appropriate message will be displayed.

### Example

- Search for the word "dictionary" and get its definition as:
  ```
  Word: dictionary
  Definition: A reference book containing an alphabetical list of words, with information about their meanings, pronunciations, etc.
  ```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production.

## API Reference

This app uses the **Dictionary by API Ninjas** via [RapidAPI](https://rapidapi.com/api-ninjas/api/dictionary/). You can get your API key by signing up on RapidAPI and subscribing to the Dictionary API.

## Deployment

To deploy this app, follow these steps:

1. Build the app using:
   ```bash
   npm run build
   ```

2. Deploy the `build` directory to your preferred hosting service (e.g., Vercel, Netlify).

## License

This project is licensed under the MIT License.

## Acknowledgments

- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [API Ninjas - Dictionary API](https://api-ninjas.com/api/dictionary)

---

