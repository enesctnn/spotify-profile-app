import { FaInfoCircle } from 'react-icons/fa';
import { PathLink } from '../../shared/PathLink';

export const TopArtistsListItem = ({
  img,
  id,
  title,
}: {
  img: string;
  id: string;
  title: string;
}) => (
  <PathLink className="mx-auto w-28 space-y-4 sm:w-40" path="artists" id={id}>
    <div className="relative h-28 w-full animate-bump overflow-hidden rounded-full sm:h-40">
      <span className="absolute inset-0 flex items-center justify-center bg-spotify-gray/65 opacity-0 transition-opacity hover:opacity-100">
        <FaInfoCircle size={30} />
      </span>
      <img
        src={img}
        alt={title + ' named music band picture'}
        className="object-cover object-center"
        loading="lazy"
      />
    </div>
    <p className="truncate text-center text-lg font-semibold hover:underline">
      {title}
    </p>
  </PathLink>
);
