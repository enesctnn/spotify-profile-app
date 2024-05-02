import { Card } from '../../ui/card';
import { TopArtists } from './artists/TopArtists';
import { TopTracks } from './tracks/TopTracks';

export function TopItems() {
  return (
    <Card className="gap-4 sm:grid sm:grid-cols-2 ">
      <TopArtists />
      <TopTracks />
    </Card>
  );
}
