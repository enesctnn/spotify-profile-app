import { useTopArtists } from '../../../hooks/useTopArtists';
import { LoadingSkeleton } from '../../ui/loading-skeleton';
import { TopArtistsListItem } from './TopArtistsListItem';

export const TopArtistsList = ({
  timeRange,
}: {
  timeRange: 'short_term' | 'medium_term' | 'long_term';
}) => {
  const topArtists = useTopArtists(timeRange);
  return (
    <ul className="relative flex flex-wrap gap-x-20 gap-y-12">
      {!topArtists && <LoadingSkeleton />}
      {topArtists &&
        topArtists.map(({ band_name, id, img }) => (
          <TopArtistsListItem key={id} id={id} img={img} title={band_name} />
        ))}
    </ul>
  );
};
