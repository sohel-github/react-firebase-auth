// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    updateProfile
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
const googleAuthProvider = new GoogleAuthProvider()
const facebookAuthProvider = new FacebookAuthProvider()
const githubAuthProvider = new GithubAuthProvider()

const registerUser = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        throw(error);
    }
}

const loginUser = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const user = res.user
        return user
    } catch (error) {
        throw(error);
    }
}

const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        throw(error);
    }
}

const loginWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleAuthProvider)
        const user = res.user
        return user
    } catch (error) {
        throw(error)        
    }
}

const loginWithFacebook = async () => {
    try {
        const res = await signInWithPopup(auth, facebookAuthProvider)
        const user = res.user
        console.log(user)
        return user
    } catch (error) {
        throw(error)        
    }
}

const loginWithGithub = async () => {
    try {
        const res = await signInWithPopup(auth, githubAuthProvider)
        const user = res.user
        console.log(user)
        return user
    } catch (error) {
        throw(error)        
    }
}

const updateAuthProfile = async (displayName, photoURL) => {
    try {
        // const res = await updateProfile(auth.currentUser, githubAuthProvider)
        await updateProfile(auth.currentUser, {displayName,photoURL})
        // const user = res.user
        // console.log(user)
        // return user
        console.log("Profile updated!");
    } catch (error) {
        throw(error)        
    }
}

export { registerUser, loginUser, resetPassword, auth, loginWithGoogle, loginWithFacebook, loginWithGithub, updateAuthProfile }