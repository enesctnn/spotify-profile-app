import { useTopArtists } from '../../../../hooks/useTopArtists';
import { TrackListItem } from '../../../shared/TrackListItem';
import { TopItemsList } from '../TopItemsList';

export function TopArtists() {
  const data = useTopArtists('long_term', 10);

  return (
    <TopItemsList path="top-artists" title="Artists">
      {data &&
        data.map(({ id, band_name, img }) => (
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
