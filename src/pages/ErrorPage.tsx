import { AxiosError } from 'axios';
import { useRouteError } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { HomeButton } from '../components/error/HomeButton';

function ErrorPage() {
  const error = useRouteError();
  let message = 'An error occured!\nSpotify Profile App crashed!';

  if (error instanceof Error || error instanceof AxiosError)
    message = error.message;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-ellipse from-spotify-gray-300 to-spotify-gray to-35%">
      <Card className="flex h-max w-max flex-col items-center gap-10 bg-ellipse from-red-600 to-red-800 p-5">
        <header>
          <h1 className="text-4xl font-bold capitalize">
            Something went wrong!
          </h1>
        </header>
        <p className="whitespace-pre-line text-center text-lg font-semibold">
          {message}
        </p>
        <HomeButton />
      </Card>
    </div>
  );
}

export default ErrorPage;
