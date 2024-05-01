import { IconType } from 'react-icons';

export function NavItem({
  title,
  icon: Icon,
}: {
  title: string;
  icon: IconType;
}) {
  return (
    <li
      aria-label={`User's ${title}`}
      className="group relative flex w-full flex-col items-center justify-center whitespace-nowrap transition-all hover:bg-spotify-gray-300 hover:shadow-sm"
    >
      <span className="pointer-events-none absolute bg-spotify-green opacity-0 transition-all group-hover:opacity-100 max-md:bottom-0 max-md:h-1 max-md:w-full md:left-0 md:h-full md:w-1" />
      <button className="p-2 text-xl font-semibold leading-loose md:text-xs">
        <Icon className="w-full max-md:text-4xl md:text-2xl" />
        {title}
      </button>
    </li>
  );
}
