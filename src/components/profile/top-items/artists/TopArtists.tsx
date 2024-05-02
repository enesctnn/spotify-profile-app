import { useTopArtists } from '../../../../hooks/useTopArtists';
import { TrackListItem } from '../../../shared/TrackListItem';
import { LoadingSkeleton } from '../../../ui/loading-skeleton';
import { TopItemsList } from '../TopItemsList';

export function TopArtists() {
  const topArtists = useTopArtists('long_term', 10);

  return (
    <TopItemsList path="top-artists" title="Artists">
      {!topArtists && <LoadingSkeleton />}
      {topArtists &&
        topArtists.map(({ id, band_name, img }) => (
          <TrackListItem
            key={id}
            id={id}
            img={img}
            title={band_name}
            item_type="artists"
          />
        ))}
    </TopItemsList>
  );
}
