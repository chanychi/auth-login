import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthState from './useAuthState';

const useRedirectIfAuth = () => {
  const { isLogged } = useAuthState();
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLogged === null) return;

    setLoading(false);
    if (isLogged) {
      nav('/dashboard');
    } else {
      nav('/signin');
    }
  }, [isLogged, nav]);

  return loading;
};

export default useRedirectIfAuth;
