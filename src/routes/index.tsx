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
        path=":userName"
        element={<UserDetailsRoot />}
        loader={checkTokenLoader}
      >
        <Route index element={<UserProfilePage />} />
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
   * User details page.
   */
  userDetails: '/:user',
} as const;
