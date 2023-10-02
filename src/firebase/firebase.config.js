// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS88buF6w_EnxBavOT5ZtaP1gzSjxQ0uY",
  authDomain: "the-international-insight.firebaseapp.com",
  projectId: "the-international-insight",
  storageBucket: "the-international-insight.appspot.com",
  messagingSenderId: "1053250685702",
  appId: "1:1053250685702:web:63a3e846660d7241936c87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;