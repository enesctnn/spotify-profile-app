import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../../config/baseUrl';

export const ListItem = ({
  id,
  img,
  item_type,
  title,
  artists,
  album_name,
  track_name,
}: {
  id: string;
  img: string;
  item_type: 'artists' | 'tracks';
  title?: string;
  artists?: string[];
  album_name?: string;
  track_name?: string;
}) => (
  <li
    className={`group h-max w-full rounded-md px-5 py-3 ${item_type === 'artists' ? ' transition-colors duration-300 hover:bg-white' : ''}`}
  >
    <Link
      to={baseUrl + item_type + '/' + id}
      className="flex items-center gap-5 "
    >
      <div
        className={`relative h-16 w-16 shrink-0 overflow-hidden
          ${item_type === 'artists' ? ' rounded-full' : ''}`}
      >
        <span className="absolute inset-0 flex items-center justify-center bg-spotify-gray/65 opacity-0 transition-opacity group-hover:opacity-100">
          <FaInfoCircle size={24} />
        </span>
        <img
          src={img}
          alt={title + ' named music band picture'}
          className="object-cover object-center"
        />
      </div>
      {title && (
        <p className="font-semibold transition-colors hover:underline group-hover:text-black">
          {title}
        </p>
      )}
      {artists && track_name && album_name && (
        <article className="flex-shrink overflow-hidden font-semibold">
          <h2 className="">{track_name}</h2>
          <p className="truncate text-xs text-spotify-gray-100">
            {artists.join('-')} · {album_name}
          </p>
        </article>
      )}
    </Link>
  </li>
);
