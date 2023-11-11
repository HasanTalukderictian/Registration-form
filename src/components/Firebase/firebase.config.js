// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkJfZ1mINFbgiQ-_80R1W846RzgOwArV0",
  authDomain: "registration-form-5cb68.firebaseapp.com",
  projectId: "registration-form-5cb68",
  storageBucket: "registration-form-5cb68.appspot.com",
  messagingSenderId: "955590912292",
  appId: "1:955590912292:web:700ccc07e1cbd3d6a62bb1",
  measurementId: "G-LTGCQLXYV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;