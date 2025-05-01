// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile,
    updateEmail,
    updatePassword,
    deleteUser,
    reauthenticateWithCredential,
    getIdToken,
    getIdTokenResult
  } from "firebase/auth";
  

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAgRffqNE7XpEVEZaMIlcALC-R1uv8bbY",
  authDomain: "lws-firebase-auth-92db4.firebaseapp.com",
  projectId: "lws-firebase-auth-92db4",
  storageBucket: "lws-firebase-auth-92db4.firebasestorage.app",
  messagingSenderId: "674092559818",
  appId: "1:674092559818:web:c2cdeeebc87fb85462f333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerUser = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        return user;
    } catch (error) {
        throw error;
    }
}

export { registerUser }