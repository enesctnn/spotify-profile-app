import { FaInfoCircle } from 'react-icons/fa';
import { PathLink } from './PathLink';

export const TopListItem = ({
  id,
  img,
  item_type,
  title,
  artists,
  album_name,
  track_name,
  duration,
  className,
}: {
  id: string;
  img: string;
  item_type: 'artists' | 'tracks';
  title?: string;
  artists?: { [key: string]: string };
  album_name?: string;
  track_name?: string;
  duration?: string;
  className?: string;
}) => (
  <li
    className={
      `group h-max w-full rounded-md ${item_type === 'artists' ? ' transition-colors duration-300 hover:bg-white ' : ''}` +
      className
    }
  >
    <div className="flex items-center gap-5 overflow-hidden px-5 py-3">
      <PathLink
        path={item_type}
        id={id}
        className={`relative h-16 w-16 max-w-full shrink-0 overflow-hidden
            ${item_type === 'artists' ? ' rounded-full' : ''}`}
      >
        <span className="absolute inset-0 flex items-center justify-center bg-spotify-gray/65 opacity-0 transition-opacity group-hover:opacity-100">
          <FaInfoCircle size={24} />
        </span>
        <img
          src={img}
          alt={title + ' named music band picture'}
          className="object-cover object-center"
          loading="lazy"
        />
      </PathLink>
      {title && (
        <PathLink path={item_type} id={id}>
          <p className="text-sm font-semibold transition-colors hover:underline group-hover:text-black">
            {title}
          </p>
        </PathLink>
      )}
      {artists && track_name && album_name && (
        <article className="min-w-24 font-semibold">
          <PathLink path={item_type} id={id} className="hover:underline">
            <h2 className="w-full text-sm">{track_name}</h2>
          </PathLink>
          <p className="z-10 w-full text-xs text-spotify-gray-100">
            {Object.keys(artists)
              .join(' - ,')
              .split(',')
              .map(name => (
                <PathLink
                  key={name}
                  path="artists"
                  id={artists[name]}
                  className="hover:underline"
                >
                  {name}
                </PathLink>
              ))}{' '}
            · {album_name}
          </p>
        </article>
      )}
      {duration && (
        <div
          className="ml-auto text-sm font-semibold text-spotify-gray-100"
          aria-label="track_duration minute"
        >
          {duration}
        </div>
      )}
    </div>
  </li>
);
