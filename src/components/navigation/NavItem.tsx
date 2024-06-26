import { IconType } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';

export function NavItem({
  path,
  title,
  icon: Icon,
}: {
  path: string;
  title: string;
  icon: IconType;
}) {
  const location = useLocation();
  const isActive = path === location.pathname;

  return (
    <li
      aria-label={`User's ${title}`}
      className={cn(
        'group relative flex w-full flex-col items-center justify-center transition-all duration-300 hover:bg-black hover:shadow-sm',
        isActive && 'bg-black/60'
      )}
    >
      <span
        className={cn(
          'pointer-events-none absolute bg-spotify-green opacity-0 shadow shadow-black transition-all group-hover:opacity-100 max-md:bottom-0 max-md:h-1 max-md:w-full md:left-0 md:h-full md:w-1',
          isActive && 'opacity-100'
        )}
      />
      <Link
        to={path}
        className="h-full w-full flex-col justify-evenly p-2 text-center text-xs font-semibold max-md:flex lg:leading-loose"
      >
        <Icon className="w-full text-2xl lg:text-3xl" />
        {title}
      </Link>
    </li>
  );
}
