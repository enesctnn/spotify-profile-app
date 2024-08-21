import { useQuery } from '@tanstack/react-query';
import { fetchUserPlaylists } from '../util/http-spotify';

export function useUserPlaylists(limit?: number) {
  const { data } = useQuery({
    queryKey: ['user-playlists', limit],
    queryFn: ({ signal }) => fetchUserPlaylists(signal, limit),
  });

  const userPlaylistData: {
    id: string;
    img: string | null;
    playlist_name: string;
    owner: string;
    tracks_count: number;
  }[] = [];

  if (data) {
    data.items.forEach(item => {
      if (item.images && item.tracks)
        userPlaylistData.push({
          id: item.id,
          img: item.images[0].url,
          playlist_name: item.name,
          owner: item.owner.display_name,
          tracks_count: item.tracks?.total || 0,
        });
    });
    return { userPlaylistData, playlist_count: +data.total };
  }

  return null;
}
