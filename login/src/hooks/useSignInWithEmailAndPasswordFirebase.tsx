import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import debounce from 'lodash/debounce';
import { handleFirebaseError } from '../utils/errorUtils';

const useSignInWithEmailAndPasswordFirebase = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');

  const debouncedHandleSubmit = useRef(
    debounce(async (email: string, password: string) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/dashboard');
      } catch (err) {
        setErrMsg(handleFirebaseError(err))
      }
    }, 500)
  ).current;

  const handleSubmit = (email: string, password: string) => {
    if (!password || !email) return;
    debouncedHandleSubmit(email, password);
  };

  return { handleSubmit, errMsg };
};

export default useSignInWithEmailAndPasswordFirebase;