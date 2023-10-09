import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAU1wHUAANJ3QzUSq40KOutBtwKLP7pzf0",
    authDomain: "disney-7a649.firebaseapp.com",
    projectId: "disney-7a649",
    storageBucket: "disney-7a649.appspot.com",
    messagingSenderId: "966387926107",
    appId: "1:966387926107:web:9edc6e2d3934d35c53ab7e",
    measurementId: "G-DQ1N79MJ29"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
