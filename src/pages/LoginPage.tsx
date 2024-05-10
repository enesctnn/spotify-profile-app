import { LoginButton } from '../components/login/LoginButton';

const LoginPage = () => (
  <div className="absolute inset-0 z-50 bg-ellipse from-spotify-gray-300 to-spotify-gray to-35%">
    <div className="-mt-5 flex h-full w-full flex-col items-center justify-center gap-8">
      <header>
        <h1 className="whitespace-nowrap bg-ellipse from-white from-10% to-spotify-green to-50% bg-clip-text text-3xl font-bold text-transparent">
          SPOTIFY PROFILE
        </h1>
      </header>
      <LoginButton />
      <section className="w-full animate-pulse space-y-2 text-center hover:animate-none">
        <h2 className="text-xs font-bold text-spotify-gray-100">
          Spotify Profile App Is Currently On Testing Phase
        </h2>
        <p className="text-xs font-semibold text-spotify-gray-200">
          Click{' '}
          <a
            className="font-bold text-spotify-gray-100 hover:underline"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdDjpfYkEI44uVhnAfUL-0apVlieV131D2722bWp6GjPo_j4g/viewform?usp=sf_link"
          >
            Here
          </a>{' '}
          to submit your spotify information.
        </p>
      </section>
    </div>
  </div>
);

export default LoginPage;
