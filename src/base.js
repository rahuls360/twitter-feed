import firebase from "firebase";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: "twitter-feed-48501",
  storageBucket: "twitter-feed-48501.appspot.com",
  messagingSenderId: "645310389452"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
