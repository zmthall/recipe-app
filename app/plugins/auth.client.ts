import { initializeApp } from "firebase/app";
import {
  browserSessionPersistence,
  getAuth,
  onAuthStateChanged,
  setPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useAuthStore } from '../stores/authStore';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();

  const firebaseConfig = {
    apiKey: config.public.apiKey,
    authDomain: config.public.authDomain,
    projectId: config.public.projectId,
    storageBucket: config.public.storageBucket,
    messagingSenderId: config.public.messagingSenderId,
    appId: config.public.appId,
    databaseURL: "https://learning-firebase-9dba3-default-rtdb.firebaseio.com/",
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    authStore.user = user ?? null;
    authStore.authResolved = true;
  });

  setPersistence(auth, browserSessionPersistence).catch((err) => {
    console.error("Failed to set auth persistence", err);
  });

  const db = getFirestore(app);

  return {
    provide: {
      firebase: {
        app,
        auth,
        db,
      },
    },
  };
});
