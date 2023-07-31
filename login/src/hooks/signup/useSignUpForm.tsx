import { useRef } from 'react';
import useSignUpWithFirebase from './useSignUpWithFirebase';

const useSignUpForm = () => {
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null);
  const { signUpWithFirebase, passwordError, setPasswordError, errMsg } = useSignUpWithFirebase();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const firstName = firstNameRef.current?.value ?? '';
    const lastName = lastNameRef.current?.value ?? '';
    const email = emailRef.current?.value ?? '';
    const password = passwordRef.current?.value ?? '';
    const passwordConfirm = passwordConfirmRef.current?.value ?? '';

    if (password !== passwordConfirm) {
      setPasswordError(true);
      return;
    }

    signUpWithFirebase(email, password, firstName, lastName);
  };

  return {
    firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef,
    passwordConfirmRef,
    passwordError,
    handleSubmit,
    errMsg,
  };
};

export default useSignUpForm;
