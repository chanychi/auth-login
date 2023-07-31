import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const useSignOut = () => {
  const [isSigningOut, setSigningOut] = useState(false);

  const handleSignOut = () => {
    setSigningOut(true);
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful');
      })
      .catch((error) => {
        console.error('Error occurred during sign-out:', error);
      })
      .finally(() => {
        setSigningOut(false);
      });
  };

  return { handleSignOut, isSigningOut };
};

export default useSignOut;
