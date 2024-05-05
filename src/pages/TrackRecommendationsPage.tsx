import { useParams } from 'react-router-dom';
import { PathLink } from '../components/shared/PathLink';
import { TopListItem } from '../components/shared/TopListItem';
import { Card } from '../components/ui/card';
import { LoadingSkeleton } from '../components/ui/loading-skeleton';
import { useTrackRecommendations } from '../hooks/useTrackRecommendations';

function TrackRecommendationsPage() {
  const { id } = useParams();
  if (!id) throw new Error('Missing id!');
  const recommendationsData = useTrackRecommendations(id);

  return (
    <Card className="space-y-10">
      <header>
        <h1 className="text-xl font-bold">
          Recommended Tracks Based On “{' '}
          <PathLink
            path="playlists"
            id={id}
            className=" text-spotify-green hover:underline"
          >
            {recommendationsData?.playlist_name}
          </PathLink>{' '}
          ”
        </h1>
      </header>
      {!recommendationsData && <LoadingSkeleton />}
      <ul>
        {recommendationsData &&
          recommendationsData.playlistTracks.map(item => (
            <TopListItem key={item.id} {...item} item_type={'tracks'} />
          ))}
      </ul>
    </Card>
  );
}

export default TrackRecommendationsPage;
