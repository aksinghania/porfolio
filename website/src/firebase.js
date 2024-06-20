// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCglZFka3U-S2SAt4Fle779fUGdRDBWHHw",
  authDomain: "akshatsinghaniaweb.firebaseapp.com",
  projectId: "akshatsinghaniaweb",
  storageBucket: "akshatsinghaniaweb.appspot.com",
  messagingSenderId: "901740227056",
  appId: "1:901740227056:web:d8419c3893a47beb749535",
  measurementId: "G-91N7Q21HPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { analytics };
