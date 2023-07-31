import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const useAuthState = () => {
  const [isLogged, setLogged] = useState<boolean | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isDisplayNameLoaded, setDisplayNameLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName } = user;
        setLogged(true);
        setUserEmail(email);
        if (displayName !== null) {
          setUserName(displayName);
          setDisplayNameLoaded(true);
        } else {
          //temporary bug fix - race condition where user display name is returning null from firebase
          const interval = setInterval(() => {
            if (user.displayName !== null) {
              setUserName(user.displayName);
              setDisplayNameLoaded(true);
              clearInterval(interval);
            }
          }, 1000);
        }
      } else {
        console.log('User is not signed in');
        setLogged(false);
        setError(null);
      }
    }, (error) => {
      console.error('Error occurred during authentication:', error);
      setError('An error occurred during authentication.');
    });

    return () => {
      unsub();
    };
  }, []);

  return { isLogged, userName, userEmail, isDisplayNameLoaded, error };
};

export default useAuthState;
