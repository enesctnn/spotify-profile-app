import { useTopArtists } from '../../../hooks/useTopArtists';
import { TopArtistsListItem } from './TopArtistsListItem';

export const TopArtistsList = ({
  timeRange,
}: {
  timeRange: 'short_term' | 'medium_term' | 'long_term';
}) => {
  const topArtists = useTopArtists(timeRange);
  return (
    <ul className="flex flex-wrap gap-x-20 gap-y-12">
      {topArtists &&
        topArtists.map(({ band_name, id, img }) => (
          <TopArtistsListItem key={id} id={id} img={img} title={band_name} />
        ))}
    </ul>
  );
};
