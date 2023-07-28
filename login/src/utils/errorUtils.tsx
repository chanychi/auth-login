import { FirebaseError } from 'firebase/app';
import { AuthErrorCodes } from 'firebase/auth';

export const handleFirebaseError = (err: unknown): string => {
  const firebaseError = err as FirebaseError;
  if (firebaseError.code === AuthErrorCodes.USER_DELETED || firebaseError.code === AuthErrorCodes.INVALID_PASSWORD) {
    return 'Incorrect Login';
  } else if (firebaseError.code === AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER) {
    return 'Too many login attempts. Please try again later.';
  } else {
    return 'An unknown error has occurred';
  }
};