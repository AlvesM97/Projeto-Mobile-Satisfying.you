import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLUqnhe7bkEfePUkaun1uFFR7ME5qqWIo",
  authDomain: "projeto-mobile-2e230.firebaseapp.com",
  projectId: "projeto-mobile-2e230",
  storageBucket: "projeto-mobile-2e230.appspot.com",
  messagingSenderId: "942320818646",
  appId: "1:942320818646:web:cc0bcc2d69eb21833c2c77"
};


const app = initializeApp(firebaseConfig);
const auth_mod = getAuth(app);
const storage = getStorage(app)

export {auth_mod, app, storage}