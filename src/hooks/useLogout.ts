import { useSubmit } from 'react-router-dom';

export function useLogout() {
  const submit = useSubmit();

  const logout = () => {
    submit(null, { action: '/logout', method: 'post' });
  };

  return logout;
}
