import { useTopTracks } from '../../../../hooks/useTopTracks';
import { TrackListItem } from '../../../shared/TrackListItem';
import { TopItemsList } from '../TopItemsList';

export function TopTracks() {
  const topTracks = useTopTracks('long_term', 10);

  return (
    <TopItemsList path="top-tracks" title="Tracks">
      {topTracks &&
        topTracks.map(track => (
          <TrackListItem
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
