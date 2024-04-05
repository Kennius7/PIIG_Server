const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");



// Your web app's Firebase configuration
const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "shosan-online-class.firebaseapp.com",
  projectId: "shosan-online-class",
  storageBucket: "shosan-online-class.appspot.com",
  // eslint-disable-next-line no-undef
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // eslint-disable-next-line no-undef
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports.db = getFirestore(app);

