import { useTopArtists } from '../../../../hooks/useTopArtists';
import { TopListItem } from '../../../shared/TopListItem';
import { LoadingSkeleton } from '../../../ui/loading-skeleton';
import { TopItemsList } from '../TopItemsList';

export function TopArtists() {
  const topArtists = useTopArtists('long_term', 10);

  return (<>
      {!topArtists && <LoadingSkeleton />}
    <TopItemsList path="top-artists" title="Artists">
      {topArtists &&
        topArtists.map(({ id, band_name, img }) => (
          <TopListItem
            key={id}
            id={id}
            img={img}
            title={band_name}
            item_type="artists"
          />
        ))}
    </TopItemsList>
    </>
  );
}
