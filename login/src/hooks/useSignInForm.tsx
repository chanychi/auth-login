import { useRef, useState, useEffect } from 'react'
import useSignInWithEmailAndPasswordFirebase from '../hooks/useSignInWithEmailAndPasswordFirebase';

const useSignInForm = () => {
  const { handleSubmit, errMsg } = useSignInWithEmailAndPasswordFirebase();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [notFilled, setFilled] = useState(true);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value ?? '';
    const password = passwordRef.current?.value ?? '';
    handleSubmit(email, password);
  };

  useEffect(() => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (password && email) setFilled(false);
  }, [emailRef.current?.value, passwordRef.current?.value]);

  return { emailRef, passwordRef, handleFormSubmit, notFilled, errMsg };
};

export default useSignInForm