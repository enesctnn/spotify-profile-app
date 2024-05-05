import { useParams } from 'react-router-dom';
import { useTrackRecommendations } from '../hooks/useTrackRecommendations';
import { Card } from '../components/ui/card';
import { TopListItem } from '../components/shared/TopListItem';
import { LoadingSkeleton } from '../components/ui/loading-skeleton';

function TrackRecommendationsPage() {
  const { id } = useParams();
  if (!id) throw new Error('Missing id!');
  const recommendationsData = useTrackRecommendations(id);

  return (
    <Card>
      {!recommendationsData && <LoadingSkeleton />}
      <header>
        <h1 className="text-xl font-bold">Recommendations</h1>
      </header>
      <ul className="">
        {recommendationsData &&
          recommendationsData.map(item => (
            <TopListItem key={item.id} {...item} item_type={'tracks'} />
          ))}
      </ul>
    </Card>
  );
}

export default TrackRecommendationsPage;
