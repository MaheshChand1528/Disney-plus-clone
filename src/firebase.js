import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAcNuapFjl_BHoAgo6p0f3eB6NZJE-4KBM",
  authDomain: "disney-plus-clone-9856e.firebaseapp.com",
  projectId: "disney-plus-clone-9856e",
  storageBucket: "disney-plus-clone-9856e.appspot.com",
  messagingSenderId: "138480316166",
  appId: "1:138480316166:web:4373e9b6dc8eb08c9c7887",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
