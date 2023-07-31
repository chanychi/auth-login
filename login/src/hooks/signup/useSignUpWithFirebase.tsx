import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { handleFirebaseError } from '../../utils/errorUtils';
import debounce from 'lodash/debounce';

const useSignUpWithFirebase = () => {
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const debouncedHandleSignUp = useRef(
    debounce(async (email: string, password: string, firstName: string, lastName: string) => {
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
        setPasswordError(false);
        navigate('/dashboard');
      } catch (error) {
        setErrMsg(handleFirebaseError(error))
      }
    }, 500)
  ).current;

  const signUpWithFirebase = (email:string, password:string, firstName:string, lastName:string) => {
    if(!email || !password || !firstName || !lastName) return;
    debouncedHandleSignUp(email, password, firstName, lastName)
  };

  return { signUpWithFirebase, passwordError, setPasswordError, errMsg };
};

export default useSignUpWithFirebase;
