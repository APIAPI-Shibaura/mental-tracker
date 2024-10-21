import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRJ_u-RO53woneWIUN-h0XMbfjwfFopPM",
  authDomain: "mental-tracker-2c58f.firebaseapp.com",
  projectId: "mental-tracker-2c58f",
  storageBucket: "mental-tracker-2c58f.appspot.com",
  messagingSenderId: "1053585740764",
  appId: "1:1053585740764:web:69364ac72a0315dff57519",
  measurementId: "G-G69XNQWHXF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider };
