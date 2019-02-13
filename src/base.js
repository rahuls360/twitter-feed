import firebase from "firebase";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCmcD2j1FbQsq9TgoH20TFD6CFmU7BQLOk",
  authDomain: "twitter-feed-48501.firebaseapp.com",
  databaseURL: "https://twitter-feed-48501.firebaseio.com",
  projectId: "twitter-feed-48501",
  storageBucket: "twitter-feed-48501.appspot.com",
  messagingSenderId: "645310389452"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
