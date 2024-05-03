import { TopListItem } from '../components/shared/TopListItem';
import { Card } from '../components/ui/card';
import { LoadingSkeleton } from '../components/ui/loading-skeleton';
import { useRecentlyPlayed } from '../hooks/useRecentlyPlayed';

function RecentPage() {
  const recentlyPlayedData = useRecentlyPlayed();

  return (
    <Card className="w-full space-y-10" maxHeightScreen>
      <header>
        <h1 className="text-xl font-bold">Recently Played</h1>
      </header>
      {!recentlyPlayedData && <LoadingSkeleton />}
      <ul className="space-y-5 ">
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
    </Card>
  );
}

export default RecentPage;
