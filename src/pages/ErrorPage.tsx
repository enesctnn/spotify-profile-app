import { AxiosError } from 'axios';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  let message = 'Something went wrong!';

  if (error instanceof Error || error instanceof AxiosError)
    message = error.message;

  return (
    <div className="flex justify-center text-red-600">
      <div className="shadow-spotify-gray-300 mt-40 rounded-sm bg-red-400 p-10 shadow-md">
        <header>
          <h1 className="text-4xl font-bold capitalize">
            Something went wrong!
          </h1>
        </header>
        <p> {message}</p>
      </div>
    </div>
  );
}

export default ErrorPage;
