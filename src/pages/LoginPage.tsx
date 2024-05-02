import { LoginButton } from '../components/login/LoginButton';

const LoginPage = () => (
  <div className="absolute inset-0 bg-ellipse from-spotify-gray-300 to-spotify-gray to-35%">
    <div className="-mt-5 flex h-full w-full flex-col items-center justify-center gap-8">
      <header>
        <h1 className="whitespace-nowrap bg-ellipse from-white from-10% to-spotify-green to-50% bg-clip-text text-3xl font-bold text-transparent">
          SPOTIFY PROFILE
        </h1>
      </header>
      <LoginButton />
    </div>
  </div>
);

export default LoginPage;
