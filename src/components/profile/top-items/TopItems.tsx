import { Card } from '../../ui/card';
import { TopArtists } from './TopArtists';
import { TopTracks } from './TopTracks';

export function TopItems() {
  return (
    <Card className="gap-4 sm:grid sm:grid-cols-2 ">
      <TopArtists />
      <TopTracks />
    </Card>
  );
}
