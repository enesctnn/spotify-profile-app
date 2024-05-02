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
        <Route path="top-artists" />
        <Route path="top-tracks" />
        <Route path="recent" />
        <Route path="playlists" />
      </Route>
      <Route path="logout" action={logoutAction} />
      <Route path="*" loader={wrongNavigationLoader} />
    </Route>
  )
);

export default router;

export const routes = {
  /**
   * Login route.
   */
  login: baseUrl,
  /**
   * User detail routes.
   */
  profile: baseUrl + 'profile',
  'top-artists': baseUrl + 'top-artists',
  'top-tracks': baseUrl + 'top-tracks',
  recent: baseUrl + 'recent',
  playlists: baseUrl + 'playlists',
} as const;
