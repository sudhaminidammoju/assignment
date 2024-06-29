// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfIhnwulb2UbutGQixwy69Z1wgYrEJWoA",
  authDomain: "brewery-review-app-a3598.firebaseapp.com",
  projectId: "brewery-review-app-a3598",
  storageBucket: "brewery-review-app-a3598.appspot.com",
  messagingSenderId: "389143073622",
  appId: "1:389143073622:web:711843ad621d637f7e7cf7"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app);

export { auth, firestore,};
