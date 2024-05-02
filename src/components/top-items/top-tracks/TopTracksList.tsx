import { useTopTracks } from '../../../hooks/useTopTracks';
import { ListItem } from '../../profile/top-items/ListItem';

export function TopTracksList({
  timeRange,
}: {
  timeRange: 'short_term' | 'medium_term' | 'long_term';
}) {
  const topTracks = useTopTracks(timeRange);

  return (
    <ul className="grid place-content-center items-center md:grid-cols-2 xl:grid-cols-3">
      {topTracks &&
        topTracks.map(item => (
          <ListItem
            key={item.id}
            id={item.id}
            img={item.img}
            item_type="tracks"
            track_name={item.track_name}
            album_name={item.album_name}
            artists={item.artists}
            duration={item.duration}
            className="max-w-[400px]"
          />
        ))}
    </ul>
  );
}
