import type { FirebaseApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  validatePassword,
  GoogleAuthProvider,
  type Auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
} from "firebase/auth";

export const useFirebaseAuth = () => {
  const { $firebase } = useNuxtApp();
  const authStore = useAuthStore();

  const firebase = $firebase as {
    app: FirebaseApp;
    auth: Auth;
  };

  const loginUserWithEmail = async (email: string, password: string) => {
    try {
      if (email.length > 0 && password.length > 0) {
        const userCredentials = await signInWithEmailAndPassword(
          firebase.auth,
          email,
          password
        );

        return userCredentials;
      } else throw new Error("Email or Password field invalid.");
    } catch (err: any) {
      console.log(err.code);
      if (err.code) {
        switch (err.code) {
          case "auth/invalid-email":
            authStore.error = "Please enter a valid email address.";
            break;
          case "auth/invalid-credential":
            authStore.error = "Email or Password field invalid.";
            break;
          default:
            authStore.error = err.message;
        }
      } else if (err instanceof Error) authStore.error = err.message;
    }
  };

  const loginUserWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(firebase.auth, provider);

      return result.user;
    } catch (err) {
      if (err instanceof Error) authStore.error = err.message;
    }
  };

  const resolvedAuth = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (authStore.authResolved) {
        return resolve(true);
      }

      const stop = watch(
        () => authStore.authResolved,
        (resolved) => {
          if (resolved) {
            stop();
            resolve(true);
          }
        },
        { immediate: true }
      );
    });
  };

  const reauthenticateUser = () => {};

  const logoutUser = async () => {
    try {
      await signOut(firebase.auth);
    } catch (err: unknown) {

      if(err instanceof Error)
      authStore.error = err.message;
    }
  };

  const registerUser = async (email: string, password: string) => {
    try {
      if (!(email.length > 0) || !(password.length > 0))
        throw new Error("Email or Password field missing.");

      const status = await validatePassword(firebase.auth, password);
      if (!status.isValid) {
      // Determine the specific reason for failure
      if (!status.meetsMinPasswordLength) {
        throw new Error("Password must be at least 8 characters long.");
      }
      if (!status.containsLowercaseLetter) {
        throw new Error("Password must contain at least one lowercase letter.");
      }
      if (!status.containsUppercaseLetter) {
        throw new Error("Password must contain at least one uppercase letter.");
      }
      if (!status.containsNumericCharacter) {
        throw new Error("Password must contain at least one number.");
      }
      if (!status.containsNonAlphanumericCharacter) {
        throw new Error("Password must contain at least one special character.");
      }

      throw new Error("Password does not meet the required criteria.");
    }

      const userCredentials = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );

      return userCredentials;
    } catch (err: any) {
      console.log(err.code)

      switch (err.code) {
        case "auth/email-already-in-use":
          authStore.error = "Email is already in use.";
          break;
        default:
          authStore.error = err.message;
      }
    
    }
  };

  const currentUser = computed(() => {
    return firebase.auth.currentUser;
  });

  const sendVerification= () => {
    if(firebase.auth.currentUser !== null)
      sendEmailVerification(firebase.auth.currentUser);
  };

  const sendPasswordResetEmail = () => {};

  const deleteUser = () => {};

  return {
    loginUserWithEmail,
    loginUserWithGoogle,
    resolvedAuth,
    registerUser,
    logoutUser,
    sendEmailVerification
  };
};
