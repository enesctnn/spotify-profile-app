import { useEffect } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';
import { useLogout } from '../hooks/useLogout';

function UserDetailsRoot() {
  const token = useLoaderData();
  const logout = useLogout();

  useEffect(() => {
    if (!token) return;
    if (token === 'EXPIRED') logout();
  }, [token, logout]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default UserDetailsRoot;
