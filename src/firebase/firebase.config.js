// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvVxmUixLG8g3QhCQYrzgMS3J-svtuVZk",
  authDomain: "open-news-portal.firebaseapp.com",
  projectId: "open-news-portal",
  storageBucket: "open-news-portal.appspot.com",
  messagingSenderId: "443212299795",
  appId: "1:443212299795:web:4c5434afd58c75a08689e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;