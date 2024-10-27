import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxPbi2Jzy4D-ldJVs_QPR_iFglJ65vEYo",
  authDomain: "hw341-baed1.firebaseapp.com",
  projectId: "hw341-baed1",
  storageBucket: "hw341-baed1.appspot.com",
  messagingSenderId: "1053324039760",
  appId: "1:1053324039760:web:9f01e2550d14fa27d5a355"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;