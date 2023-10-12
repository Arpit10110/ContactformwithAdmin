import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDBg-JvUECPzIB8lOrKJSJEyQNoTjrkxYo",
  authDomain: "contactformadmin.firebaseapp.com",
  projectId: "contactformadmin",
  storageBucket: "contactformadmin.appspot.com",
  messagingSenderId: "79801276424",
  appId: "1:79801276424:web:b721a2336e094bfb2959bd"
};
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
