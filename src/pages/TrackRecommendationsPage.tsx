import { useParams } from 'react-router-dom';
import { RecommendationsHeader } from '../components/recommendations/RecommendationsHeader';
import { RecommendedList } from '../components/recommendations/RecommendedList';
import { Card } from '../components/ui/card';
import { LoadingSkeleton } from '../components/ui/loading-skeleton';
import { useTrackRecommendations } from '../hooks/useTrackRecommendations';

function TrackRecommendationsPage() {
  const { id } = useParams();
  if (!id) throw new Error('Missing id!');

  const recommendationsData = useTrackRecommendations(id);

  return (
    <Card className="space-y-10">
      {!recommendationsData && <LoadingSkeleton />}
      {recommendationsData && (
        <>
          <RecommendationsHeader
            id={id}
            playlist_name={recommendationsData.playlist_name}
            uris={recommendationsData.uris}
          />
          <RecommendedList
            playlistTracks={recommendationsData.playlistTracks}
          />
        </>
      )}
    </Card>
  );
}

export default TrackRecommendationsPage;
