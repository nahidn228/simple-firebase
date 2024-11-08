// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJYb5qf4ilHG-iq11pHu_Y_qkfbBEzkwY",
  authDomain: "simple-firebase-15e43.firebaseapp.com",
  projectId: "simple-firebase-15e43",
  storageBucket: "simple-firebase-15e43.firebasestorage.app",
  messagingSenderId: "845100710244",
  appId: "1:845100710244:web:ae2fbf7cedb3f7c54f6271",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// export default app;
export default auth;
