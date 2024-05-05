import { Link } from 'react-router-dom';
import { baseUrl } from '../../config/baseUrl';

export const PathLink = ({
  path,
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  path: 'tracks' | 'artists' | 'playlists'|'recommendations';
  id?: string;
  className?: string;
}) => (
  <Link className={className} to={baseUrl + path + (id ? `/${id}` : '')}>
    {children}
  </Link>
);
