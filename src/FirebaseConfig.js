import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyDMcvgqHccq3GPCkP2Z0LSqh-D0sMsnBw0",
  authDomain: "aarwebsite-bc657.firebaseapp.com",
  projectId: "aarwebsite-bc657",
  storageBucket: "aarwebsite-bc657.appspot.com",
  messagingSenderId: "671222456376",
  appId: "1:671222456376:web:c09b639e5438a5c9e286cd",
  measurementId: "G-CGJH5T2NHM",
};
//Version 8
//const classicFirebaseApp = firebase.initializeApp(config);
//const auth = classicFirebaseApp.auth();
//const firestore = classicFirebaseApp.firestore();
//const storage = classicFirebaseApp.storage();

//version 9
const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const analytics = getAnalytics(firebaseApp);
const firebaseConfig = {
  auth,
  firestore,
  storage,
  analytics,
};

export default firebaseConfig;
