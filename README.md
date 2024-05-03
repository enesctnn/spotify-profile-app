# Spotify Profile App

This project is a Spotify profile app built with React and Vite. It allows users to authenticate with their Spotify account and view their profile information, including their top tracks and artists.

## Features

- User authentication with Spotify.
- Display user's profile information.
- View user's top tracks and artists.
- Responsive design for various screen sizes.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Vite: Next generation frontend tooling.
- Spotify Web API: API for accessing Spotify music data.
- React Router DOM: Declarative routing for React applications.
- Tanstack Query: Powerful data fetching and caching library for React.
- Tailwind CSS: Utility-first CSS framework for rapidly building custom designs.
- Axios: Promise-based HTTP client for making requests to the Spotify Web API.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Spotify Developer Account to create a Spotify app and obtain API keys.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/enespcetin/spotify-profile-app.git
```

2. Navigate to the project directory:

```bash
cd spotify-profile-app
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your Spotify API credentials:

```plaintext
VITE_CLIENT_ID=your_client_id
VITE_CLIENT_SECRET=your_client_secret
```

5. Start the development server:

```bash
npm run dev
```

1. Open your browser and visit `http://localhost:5173/` to view the app.

## Usage

1. Click on the "Login with Spotify" button to authenticate with your Spotify account.
2. After successful authentication, you'll be redirected back to the app.
3. Explore your profile information, top tracks, and top artists.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

