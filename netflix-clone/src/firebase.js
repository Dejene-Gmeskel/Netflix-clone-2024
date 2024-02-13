// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKW_RewOn42cXziM7YHx4NNElWb3rxpw8",
  authDomain: "netflix-clone-with-react-2c0b3.firebaseapp.com",
  projectId: "netflix-clone-with-react-2c0b3",
  storageBucket: "netflix-clone-with-react-2c0b3.appspot.com",
  messagingSenderId: "977865752842",
  appId: "1:977865752842:web:b4d30a9c35026bbadcbaf3",
  measurementId: "G-SHLD923CRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);