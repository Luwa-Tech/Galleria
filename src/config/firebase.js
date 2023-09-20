import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDhMWLF6s-8RuVWEQDp84gD7Og1bQlol34",
  authDomain: "galleria-4713c.firebaseapp.com",
  projectId: "galleria-4713c",
  storageBucket: "galleria-4713c.appspot.com",
  messagingSenderId: "822627805391",
  appId: "1:822627805391:web:66de5a5f3956a5c07aafba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app