import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { action as logoutAction } from '../actions/Logout';
import ErrorPage from '../pages/ErrorPage';

import { loader as wrongNavigationLoader } from '../actions/WrongNavigation';
import { baseUrl } from '../config/baseUrl';
import MaxHeightItemsLayout from '../layouts/MaxHeightItemsLayout';
import UserDetailsLayout from '../layouts/UserDetailsLayout';
import ArtistPage from '../pages/ArtistPage';
import LoginPage from '../pages/LoginPage';
import PlaylistDetailsPage from '../pages/PlaylistDetailsPage';
import PlaylistsPage from '../pages/PlaylistsPage';
import RecentPage from '../pages/RecentPage';
import TopArtistsPage from '../pages/TopArtistsPage';
import TopTracksPage from '../pages/TopTracksPage';
import TrackPage from '../pages/TrackPage';
import UserProfilePage from '../pages/UserProfilePage';
import { checkTokenLoader, tokenLoader } from '../ui/auth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />} path={baseUrl}>
      <Route index element={<LoginPage />} loader={tokenLoader} />
      <Route
        element={<UserDetailsLayout />}
        loader={checkTokenLoader}
        id="user-details-root"
      >
        <Route index path="profile" element={<UserProfilePage />} />
        <Route element={<MaxHeightItemsLayout />}>
          <Route path="top-artists" element={<TopArtistsPage />} />
          <Route path="top-tracks" element={<TopTracksPage />} />
          <Route path="recent" element={<RecentPage />} />
          <Route path="playlists" element={<PlaylistsPage />} />
          <Route path="playlists/:id" element={<PlaylistDetailsPage />} />
          <Route path="artists/:id" element={<ArtistPage />} />
          <Route path="tracks/:id" element={<TrackPage />} />
        </Route>
      </Route>
      <Route path="logout" action={logoutAction} />
      <Route path="*" loader={wrongNavigationLoader} />
    </Route>
  )
);

export default router;
