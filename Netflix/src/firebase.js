import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTYaOAuVEvMC2IeE3UTC5QStIK_y__iwU",
  authDomain: "uploadingimages-9c0e1.firebaseapp.com",
  projectId: "uploadingimages-9c0e1",
  storageBucket: "uploadingimages-9c0e1.appspot.com",
  messagingSenderId: "134639798708",
  appId: "1:134639798708:web:c458ef16b65c4a6aa78ae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};