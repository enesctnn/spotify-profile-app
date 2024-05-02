import { useState } from 'react';
import { TopArtistsListItem } from '../components/top-items/top-artists/TopArtistsListItem';
import { TopItemHeader } from '../components/top-items/TopItemHeader';
import { Card } from '../components/ui/card';
import { useTopArtists } from '../hooks/useTopArtists';

function TopArtistsPage() {
  const [timeRange, setTimeRange] = useState<
    'short_term' | 'medium_term' | 'long_term'
  >('long_term');
  const topArtists = useTopArtists(timeRange);

  return (
    <Card className="space-y-10">
      <TopItemHeader
        title="Top Artists"
        selectedRange={timeRange}
        onClick={setTimeRange}
      />
      <ul className="flex flex-wrap gap-x-20 gap-y-12">
        {topArtists &&
          topArtists.map(({ band_name, id, img }) => (
            <TopArtistsListItem key={id} id={id} img={img} title={band_name} />
          ))}
      </ul>
    </Card>
  );
}

export default TopArtistsPage;
