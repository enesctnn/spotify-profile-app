import { useTopArtists } from '../../../hooks/useTopArtists';
import { ListItem } from './ListItem';
import { TopItemsList } from './TopItemsList';

export function TopArtists() {
  const data = useTopArtists('long_term', 10);

  return (
    <TopItemsList path="top-artists" title="Artists">
      {data &&
        data.map(item => (
          <ListItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.band_name}
            item_type="artists"
          />
        ))}
    </TopItemsList>
  );
}
