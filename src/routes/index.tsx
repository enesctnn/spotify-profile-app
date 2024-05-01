import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { action as logoutAction } from '../actions/Logout';
import ErrorPage from '../pages/ErrorPage';

import UserDetailsRoot from '../layouts/UserDetailsRoot';
import LoginPage from '../pages/LoginPage';
import UserProfilePage from '../pages/UserProfilePage';
import { checkTokenLoader, tokenLoader } from '../ui/auth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />} path="/">
      <Route index element={<LoginPage />} loader={tokenLoader} />
      <Route
        element={<UserDetailsRoot />}
        loader={checkTokenLoader}
        id="user-details-root"
      >
        <Route index path="profile" element={<UserProfilePage />} />
        <Route path="top-artists" />
        <Route path="top-tracks" />
        <Route path="recent" />
        <Route path="playlists" />
      </Route>
      <Route path="logout" action={logoutAction} />
    </Route>
  )
);

export default router;

export const routes = {
  /**
   * Login route.
   */
  login: '/',
  /**
   * User details.
   */
  profile: '/profile',
  'top-artists': '/top-artists',
  'top-tracks': '/top-tracks',
  recent: '/recent',
  playlists: '/playlists',
} as const;
