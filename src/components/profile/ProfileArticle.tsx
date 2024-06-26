import { useUserDetails } from '../../hooks/useUserDetails';
import { useUserPlaylists } from '../../hooks/useUserPlaylists';

import { PathLink } from '../shared/PathLink';
import { Card } from '../ui/card';
import { LoadingSkeleton } from '../ui/loading-skeleton';
import { ProfileDetailItems } from './ProfileDetailItems';
import { ProfileHeader } from './ProfileHeader';

export function ProfileArticle() {
  const userData = useUserDetails();
  const playlistsData = useUserPlaylists();

  return (
    <Card className="space-y-4 !py-14 text-xs font-semibold">
      {!userData && !playlistsData && <LoadingSkeleton />}
      {userData && playlistsData && (
        <>
          <ProfileHeader
            spotify_url={userData.spotify_url}
            img={userData.img}
            user_name={userData.user_name}
          />
          <div className="flex items-center justify-center gap-5">
            <ProfileDetailItems title="Followers" count={userData.followers} />
            <PathLink
              path="playlists"
              className="transition-transform hover:scale-110"
            >
              <ProfileDetailItems
                title="Playlists"
                count={playlistsData.playlist_count}
              />
            </PathLink>
          </div>
        </>
      )}
    </Card>
  );
}
