import { useRef } from 'react'
import useSignInWithEmailAndPasswordFirebase from './useSignInWithEmailAndPasswordFirebase';

const useSignInForm = () => {
  const { signInWithFirebase, errMsg, setErrMsg } = useSignInWithEmailAndPasswordFirebase();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value ?? '';
    const password = passwordRef.current?.value ?? '';

    if(!email || !password) {
      setErrMsg('Missing field.');
      return
    }

    signInWithFirebase(email, password);
  };

  return { emailRef, passwordRef, handleFormSubmit, errMsg };
};

export default useSignInForm