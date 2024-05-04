import { useRecentlyPlayed } from '../../hooks/useRecentlyPlayed';
import { TopListItem } from '../shared/TopListItem';
import { LoadingSkeleton } from '../ui/loading-skeleton';

export function RecentsList() {
  const recentlyPlayedData = useRecentlyPlayed();

  return (
    <>
      {!recentlyPlayedData && <LoadingSkeleton />}
      <ul className="space-y-2">
        {recentlyPlayedData &&
          recentlyPlayedData.map(
            ({
              id,
              artists,
              album_name,
              duration,
              img,
              track_name,
              played_at,
            }) => (
              <TopListItem
                key={id + played_at}
                id={id}
                img={img}
                item_type="tracks"
                album_name={album_name}
                track_name={track_name}
                artists={artists}
                duration={duration}
              />
            )
          )}
      </ul>
    </>
  );
}
