import { useSubmit } from 'react-router-dom';
import { baseUrl } from '../config/baseUrl';

export function useLogout() {
  const submit = useSubmit();

  const logout = () => {
    submit(null, { action: `${baseUrl}logout`, method: 'post' });
  };

  return logout;
}
