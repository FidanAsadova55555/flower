import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDe9_3v6BJZgCdaLsKiNa6CYIWVv85FPGc",
  authDomain: "flower-42412.firebaseapp.com",
  projectId: "flower-42412",
  storageBucket: "flower-42412.appspot.com", 
  messagingSenderId: "695759336663",
  appId: "1:695759336663:web:24e5f3f5e454f727cd6c92",
  measurementId: "G-FYVWFC9Q8T"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);  
export const analytics = getAnalytics(app);
