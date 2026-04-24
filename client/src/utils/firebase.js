
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-cd438.firebaseapp.com",
  projectId: "interviewiq-cd438",
  storageBucket: "interviewiq-cd438.firebasestorage.app",
  messagingSenderId: "166009245417",
  appId: "1:166009245417:web:1ebb6b2a8390abcd7eea78"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider =  new GoogleAuthProvider()
export{auth,provider}