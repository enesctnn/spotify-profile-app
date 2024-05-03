import { useTopTracks } from '../../../../hooks/useTopTracks';
import { TopListItem } from '../../../shared/TopListItem';
import { LoadingSkeleton } from '../../../ui/loading-skeleton';
import { TopItemsList } from '../TopItemsList';

export function TopTracks() {
  const topTracks = useTopTracks('long_term', 10);

  return (
    <TopItemsList path="top-tracks" title="Tracks">
      {!topTracks && <LoadingSkeleton />}
      {topTracks &&
        topTracks.map(track => (
          <TopListItem
            key={track.id}
            id={track.id}
            img={track.img}
            item_type="tracks"
            album_name={track.album_name}
            artists={track.artists}
            track_name={track.track_name}
            duration={track.duration}
          />
        ))}
    </TopItemsList>
  );
}
