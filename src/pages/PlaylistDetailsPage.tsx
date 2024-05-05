import { useParams } from 'react-router-dom';
import { PlaylistHeader } from '../components/playlist-details/PlaylistHeader';
import { PlaylistTracks } from '../components/playlist-details/PlaylistTracks';
import { Card } from '../components/ui/card';
import { LoadingSkeleton } from '../components/ui/loading-skeleton';
import { usePlaylistById } from '../hooks/usePlaylistById';

function PlaylistDetailsPage() {
  const { id } = useParams();
  if (!id) throw new Error('Missing id!');

  const playlistData = usePlaylistById(id);

  return (
    <Card
      maxHeightScreen
      className="gap-4 max-md:flex-col max-md:space-y-10 md:flex"
    >
      {!playlistData && <LoadingSkeleton />}
      {playlistData && (
        <>
          <PlaylistHeader {...playlistData.playListFeatures} />
          <PlaylistTracks playlistTracks={playlistData.playlistTracks} />
        </>
      )}
    </Card>
  );
}

export default PlaylistDetailsPage;
