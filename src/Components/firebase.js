// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIBFG84FgHKSRA0R6qhA-yQMSDC0kH60Y",
  authDomain: "slack-clone2-d8374.firebaseapp.com",
  databaseURL:
    "https://slack-clone2-d8374-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "slack-clone2-d8374",
  storageBucket: "slack-clone2-d8374.appspot.com",
  messagingSenderId: "1014816747540",
  appId: "1:1014816747540:web:0a9b7436f6f2f1f590f701",
  measurementId: "G-9W427ZH04S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
