import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcNuapFjl_BHoAgo6p0f3eB6NZJE-4KBM",
  authDomain: "disney-plus-clone-9856e.firebaseapp.com",
  projectId: "disney-plus-clone-9856e",
  storageBucket: "disney-plus-clone-9856e.appspot.com",
  messagingSenderId: "138480316166",
  appId: "1:138480316166:web:4373e9b6dc8eb08c9c7887",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
