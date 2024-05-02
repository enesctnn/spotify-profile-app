import { UserPlaylists } from '../components/playlists/UserPlaylists';
import { Card } from '../components/ui/card';

const PlaylistsPage = () => (
  <Card className="space-y-10" maxHeightScreen role="article">
    <header>
      <h1 className="text-xl font-bold">Your Playlists</h1>
    </header>
    <UserPlaylists />
  </Card>
);

export default PlaylistsPage;
