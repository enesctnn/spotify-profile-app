# Spotify Profile App

This project is a Spotify profile app built with React and Vite. It allows users to authenticate with their Spotify account and view their profile information, including their top tracks and artists.

## App in Action:

![spotify](/assets/spotify.gif)

## Features

- User authentication with Spotify.
- Display user's profile information.
- View user's top tracks and artists.
- View detailed track or playlist analysis with bar graphs and radar graphs.
- Get recommendations by playlist tracks. 
- Create new playlist from recommended tracks.
- Responsive design for various screen sizes.


## Technologies Used

- React: JavaScript library for building user interfaces.
- Vite: Next generation frontend tooling.
- Spotify Web API: API for accessing Spotify music data.
- React Router DOM: Declarative routing for React applications.
- Tanstack Query: Powerful data fetching and caching library for React.
- Tailwind CSS: Utility-first CSS framework for rapidly building custom designs.
- Axios: Promise-based HTTP client for making requests to the Spotify Web API.
- Recharts: Composable charting library built on React components, utilized for visually representing single track or album analysis.

## Dependencies

- **[@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)** [![npm](https://img.shields.io/npm/v/@tanstack/react-query)](https://www.npmjs.com/package/@tanstack/react-query)

- **[axios](https://www.npmjs.com/package/axios)** [![npm](https://img.shields.io/npm/v/axios)](https://www.npmjs.com/package/axios)

- **[clsx](https://www.npmjs.com/package/clsx)** [![npm](https://img.shields.io/npm/v/clsx)](https://www.npmjs.com/package/clsx)

- **[react](https://www.npmjs.com/package/react)** [![npm](https://img.shields.io/npm/v/react)](https://www.npmjs.com/package/react)

- **[react-dom](https://www.npmjs.com/package/react-dom)** [![npm](https://img.shields.io/npm/v/react-dom)](https://www.npmjs.com/package/react-dom)

- **[react-icons](https://www.npmjs.com/package/react-icons)** [![npm](https://img.shields.io/npm/v/react-icons)](https://www.npmjs.com/package/react-icons)

- **[react-router-dom](https://www.npmjs.com/package/react-router-dom)** [![npm](https://img.shields.io/npm/v/react-router-dom)](https://www.npmjs.com/package/react-router-dom)

- **[recharts](https://www.npmjs.com/package/recharts)** [![npm](https://img.shields.io/npm/v/recharts)](https://www.npmjs.com/package/recharts)

- **[tailwind-merge](https://www.npmjs.com/package/tailwind-merge)** [![npm](https://img.shields.io/npm/v/tailwind-merge)](https://www.npmjs.com/package/tailwind-merge)

## DevDependencies

- **[@tanstack/eslint-plugin-query](https://www.npmjs.com/package/@tanstack/eslint-plugin-query)** [![npm](https://img.shields.io/npm/v/@tanstack/eslint-plugin-query)](https://www.npmjs.com/package/@tanstack/eslint-plugin-query)

- **[@types/react](https://www.npmjs.com/package/@types/react)** [![npm](https://img.shields.io/npm/v/@types/react)](https://www.npmjs.com/package/@types/react)

- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)** [![npm](https://img.shields.io/npm/v/@types/react-dom)](https://www.npmjs.com/package/@types/react-dom)

- **[@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)** [![npm](https://img.shields.io/npm/v/@typescript-eslint/eslint-plugin)](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

- **[@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)** [![npm](https://img.shields.io/npm/v/@typescript-eslint/parser)](https://www.npmjs.com/package/@typescript-eslint/parser)

- **[@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)** [![npm](https://img.shields.io/npm/v/@vitejs/plugin-react)](https://www.npmjs.com/package/@vitejs/plugin-react)

- **[autoprefixer](https://www.npmjs.com/package/autoprefixer)** [![npm](https://img.shields.io/npm/v/autoprefixer)](https://www.npmjs.com/package/autoprefixer)

- **[eslint](https://www.npmjs.com/package/eslint)** [![npm](https://img.shields.io/npm/v/eslint)](https://www.npmjs.com/package/eslint)

- **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)** [![npm](https://img.shields.io/npm/v/eslint-plugin-react-hooks)](https://www.npmjs.com/package/eslint-plugin-react-hooks)

- **[eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)** [![npm](https://img.shields.io/npm/v/eslint-plugin-react-refresh)](https://www.npmjs.com/package/eslint-plugin-react-refresh)

- **[gh-pages](https://www.npmjs.com/package/gh-pages)** [![npm](https://img.shields.io/npm/v/gh-pages)](https://www.npmjs.com/package/gh-pages)

- **[postcss](https://www.npmjs.com/package/postcss)** [![npm](https://img.shields.io/npm/v/postcss)](https://www.npmjs.com/package/postcss)

- **[prettier](https://www.npmjs.com/package/prettier)** [![npm](https://img.shields.io/npm/v/prettier)](https://www.npmjs.com/package/prettier)

- **[prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss)** [![npm](https://img.shields.io/npm/v/prettier-plugin-tailwindcss)](https://www.npmjs.com/package/prettier-plugin-tailwindcss)

- **[tailwindcss](https://www.npmjs.com/package/tailwindcss)** [![npm](https://img.shields.io/npm/v/tailwindcss)](https://www.npmjs.com/package/tailwindcss)

- **[typescript](https://www.npmjs.com/package/typescript)** [![npm](https://img.shields.io/npm/v/typescript)](https://www.npmjs.com/package/typescript)

- **[vite](https://www.npmjs.com/package/vite)** [![npm](https://img.shields.io/npm/v/vite)](https://www.npmjs.com/package/vite)

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

## Live Demo

You can try out the live demo of the app [here](https://enesctnn.github.io/spotify-profile-app/) (test mode).

If you'd like to join the testing phase, please email your Spotify information to enespcetin@gmail.com:

- **Spotify Name:** [Name]
- **Spotify Email:** [Email]

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
