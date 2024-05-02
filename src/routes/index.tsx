import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { action as logoutAction } from '../actions/Logout';
import ErrorPage from '../pages/ErrorPage';

import { loader as wrongNavigationLoader } from '../actions/WrongNavigation';
import { baseUrl } from '../config/baseUrl';
import UserDetailsRoot from '../layouts/UserDetailsRoot';
import LoginPage from '../pages/LoginPage';
import PlaylistsPage from '../pages/PlaylistsPage';
import TopArtistsPage from '../pages/TopArtistsPage';
import TopTracksPage from '../pages/TopTracksPage';
import UserProfilePage from '../pages/UserProfilePage';
import { checkTokenLoader, tokenLoader } from '../ui/auth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />} path={baseUrl}>
      <Route index element={<LoginPage />} loader={tokenLoader} />
      <Route
        element={<UserDetailsRoot />}
        loader={checkTokenLoader}
        id="user-details-root"
      >
        <Route index path="profile" element={<UserProfilePage />} />
        <Route path="top-artists" element={<TopArtistsPage />} />
        <Route path="top-tracks" element={<TopTracksPage />} />
        <Route path="recent" />
        <Route path="playlists" element={<PlaylistsPage />}>
          <Route path=":id" />
        </Route>
        <Route path="tracks/:id" />
        <Route path="artists/:id" />
      </Route>
      <Route path="logout" action={logoutAction} />
      <Route path="*" loader={wrongNavigationLoader} />
    </Route>
  )
);

export default router;
