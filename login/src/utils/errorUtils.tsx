import { FirebaseError } from 'firebase/app';
import { AuthErrorCodes } from 'firebase/auth';

export const handleFirebaseError = (err: unknown): string => {
  if (!(err instanceof FirebaseError)) return 'An unknown error has occurred';

  switch (err.code) {
    case AuthErrorCodes.USER_DELETED:
    case AuthErrorCodes.INVALID_PASSWORD:
      return 'Incorrect Login';
    case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
      return 'Too many login attempts. Please try again later.';
    case AuthErrorCodes.WEAK_PASSWORD:
      return 'Password must be at least 6 characters.';
    default:
      return 'An unknown error has occurred';
  }
};