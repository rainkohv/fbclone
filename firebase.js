import * as firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYvDSR2rmP3GplJtrds_DCm_K82wJzJKg",
  authDomain: "fb-clone-79a70.firebaseapp.com",
  projectId: "fb-clone-79a70",
  storageBucket: "fb-clone-79a70.appspot.com",
  messagingSenderId: "1074612931684",
  appId: "1:1074612931684:web:839ec6bce41c8b9e0de371",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
