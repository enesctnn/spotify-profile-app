import { Link } from 'react-router-dom';

import { useUserDetails } from '../../hooks/useUserDetails';
import { useUserPlaylists } from '../../hooks/useUserPlaylists';

import { baseUrl } from '../../config/baseUrl';
import { Card } from '../ui/card';
import { ProfileDetailItems } from './ProfileDetailItems';
import { ProfileHeader } from './ProfileHeader';

export function ProfileArticle() {
  const userData = useUserDetails();
  const playlistsData = useUserPlaylists();

  return (
    userData && (
      <Card className="space-y-4 text-xs font-semibold !py-14">
        {userData && (
          <ProfileHeader
            spotify_url={userData.spotify_url}
            img={userData.img}
            user_name={userData.user_name}
          />
        )}
        <div className="flex items-center justify-center gap-5">
          <ProfileDetailItems title="Followers" count={userData.followers} />
          {playlistsData && (
            <Link
              to={`${baseUrl}playlists`}
              className="transition-transform hover:scale-110"
            >
              <ProfileDetailItems
                title="Playlists"
                count={playlistsData.playlist_count}
              />
            </Link>
          )}
        </div>
      </Card>
    )
  );
}
