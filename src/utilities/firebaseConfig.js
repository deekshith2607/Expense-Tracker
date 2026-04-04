import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider}  from "firebase/auth";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDLXrTC5mnGJR_Wy9HcU5ziulnLJLd9APc",
  authDomain: "expenses-tracker-app-7be29.firebaseapp.com",
  projectId: "expenses-tracker-app-7be29",
  storageBucket: "expenses-tracker-app-7be29.firebasestorage.app",
  messagingSenderId: "492701195295",
  appId: "1:492701195295:web:964c5ea898792a2f2d092a",
  measurementId: "G-XS971GNKWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);


