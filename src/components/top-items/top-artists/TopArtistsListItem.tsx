import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../../config/baseUrl';

export const TopArtistsListItem = ({
  img,
  id,
  title,
}: {
  img: string;
  id: string;
  title: string;
}) => (
  <Link
    className="mx-auto w-40 space-y-4"
    to={baseUrl + 'artists/' + id}
    title={title}
  >
    <div className="relative h-40 w-full animate-bump overflow-hidden rounded-full">
      <span className="absolute inset-0 flex items-center justify-center bg-spotify-gray/65 opacity-0 transition-opacity hover:opacity-100">
        <FaInfoCircle size={30} />
      </span>
      <img
        src={img}
        alt={title + ' named music band picture'}
        className="object-cover object-center"
      />
    </div>
    <p className="truncate text-center text-lg font-semibold hover:underline">
      {title}
    </p>
  </Link>
);
