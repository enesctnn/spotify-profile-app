import { Link } from 'react-router-dom';

import { useUserDetails } from '../../hooks/useUserDetails';
import { useUserPlaylists } from '../../hooks/useUserPlaylists';

import { ProfileDetailItems } from './ProfileDetailItems';
import { ProfileHeader } from './ProfileHeader';
import { baseUrl } from '../../config/baseUrl';

function ProfileArticle() {
  const userData = useUserDetails();
  const playlistsData = useUserPlaylists();

  return (
    userData && (
      <article
        className="w-full select-none space-y-2 rounded-md bg-spotify-gray py-6 text-xs font-semibold"
        title="Public Playlists"
      >
        {userData && (
          <ProfileHeader
            spotify_url={userData.spotify_url}
            img={userData.img}
            user_name={userData.user_name}
          />
        )}
        <div className="flex items-center justify-center gap-3">
          <ProfileDetailItems title="Followers" count={userData.followers} />
          {playlistsData && (
            <Link
              to={`${baseUrl}/playlists`}
              className="transition-transform hover:scale-110"
            >
              <ProfileDetailItems
                title="Playlists"
                count={playlistsData.playlist_count}
              />
            </Link>
          )}
        </div>
      </article>
    )
  );
}

export default ProfileArticle;
