import { LoginButton } from '../components/login/LoginButton';

function LoginPage() {
  return (
    <div className="bg-ellipse absolute inset-0 from-spotify-gray-300 to-spotify-gray to-35%">
      <div className="-mt-5 flex h-full w-full flex-col items-center justify-center gap-8">
        <header>
          <h1 className="bg-ellipse whitespace-nowrap from-white from-10% to-spotify-green to-50% bg-clip-text text-3xl font-bold text-transparent">
            SPOTIFY PROFILE
          </h1>
        </header>
        <LoginButton />
      </div>
    </div>
  );
}

export default LoginPage;
