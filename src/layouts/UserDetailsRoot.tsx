import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';

function UserDetailsRoot() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) return;
    if (token === 'EXPIRED')
      submit(null, { action: '/logout', method: 'post' });
  }, [token, submit]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default UserDetailsRoot;
