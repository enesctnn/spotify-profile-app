import { Link } from 'react-router-dom';
import { baseUrl } from '../../../config/baseUrl';
import { Button } from '../../ui/button';

export const TopItemsList = ({
  path,
  title,
  children,
}: {
  path: 'top-artists' | 'top-tracks';
  title: 'Artists' | 'Tracks';
  children: React.ReactNode;
}) => (
  <article className="min-h-96 space-y-8">
    <header className="flex items-center justify-between gap-1">
      <h1 className="text-xl font-bold">Top {title} of All Time</h1>
      <Link to={baseUrl + path}>
        <Button className="px-4 text-xs">See More</Button>
      </Link>
    </header>
    <ul className="relative space-y-1">{children}</ul>
  </article>
);
