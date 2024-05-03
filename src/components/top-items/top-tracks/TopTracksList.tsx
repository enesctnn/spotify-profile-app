import { useTopTracks } from '../../../hooks/useTopTracks';
import { TopListItem } from '../../shared/TopListItem';
import { LoadingSkeleton } from '../../ui/loading-skeleton';

export function TopTracksList({
  timeRange,
}: {
  timeRange: 'short_term' | 'medium_term' | 'long_term';
}) {
  const topTracks = useTopTracks(timeRange);

  return (
    <>
      {!topTracks && <LoadingSkeleton />}
      <ul className="relative grid place-content-center items-center md:grid-cols-2 xl:grid-cols-3">
        {topTracks &&
          topTracks.map(
            ({ id, img, track_name, album_name, artists, duration }) => (
              <TopListItem
                key={id}
                id={id}
                img={img}
                item_type="tracks"
                track_name={track_name}
                album_name={album_name}
                artists={artists}
                duration={duration}
              />
            )
          )}
      </ul>
    </>
  );
}
