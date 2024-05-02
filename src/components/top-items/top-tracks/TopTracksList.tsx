import { useTopTracks } from '../../../hooks/useTopTracks';
import { TrackListItem } from '../../shared/TrackListItem';

export function TopTracksList({
  timeRange,
}: {
  timeRange: 'short_term' | 'medium_term' | 'long_term';
}) {
  const topTracks = useTopTracks(timeRange);

  return (
    <ul className="grid place-content-center items-center md:grid-cols-2 xl:grid-cols-3">
      {topTracks &&
        topTracks.map(
          ({ id, img, track_name, album_name, artists, duration }) => (
            <TrackListItem
              key={id}
              id={id}
              img={img}
              item_type="tracks"
              track_name={track_name}
              album_name={album_name}
              artists={artists}
              duration={duration}
              className="max-w-[400px]"
            />
          )
        )}
    </ul>
  );
}
