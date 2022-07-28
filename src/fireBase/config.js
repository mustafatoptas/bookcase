import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABnGPNkxCNW4CrlQgKiyIqujR37xFcz7Y",
  authDomain: "modern-react-app-5f1c8.firebaseapp.com",
  projectId: "modern-react-app-5f1c8",
  storageBucket: "modern-react-app-5f1c8.appspot.com",
  messagingSenderId: "385467195319",
  appId: "1:385467195319:web:a8a9603224e00e5f3e9232"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db =getFirestore();

const auth =getAuth();
export {db,auth};