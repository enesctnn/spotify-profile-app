import { Card } from '../../ui/card';
import { TopArtistsAllTime } from './artists/TopArtistsAllTime';
import { TopTracksAllTime } from './tracks/TopTracksAllTime';

export const TopItemsAllTime = () => (
  <Card className="gap-4 sm:grid sm:grid-cols-2" role="article">
    <TopArtistsAllTime />
    <TopTracksAllTime />
  </Card>
);
