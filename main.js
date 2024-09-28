// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAgw0pHhqSpbxqAjl0B48igf2arJFB_Z0",
  authDomain: "login-65500.firebaseapp.com",
  projectId: "login-65500",
  storageBucket: "login-65500.appspot.com",
  messagingSenderId: "59571530182",
  appId: "1:59571530182:web:27aed652683a4d1745aac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google provider
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Google Sign-In function
function googleLogin() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log('User info:', user);
      alert(`Welcome ${user.displayName}!`);

      // Redirect to GitHub profile
      window.location.href = "https://jjezreel15.github.io/personal-website/";
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error during sign in:', errorCode, errorMessage);
      alert(`Login failed: ${errorMessage}`);
    });
}

// Add event listener to login button
window.onload = () => {
  document.getElementById('googleLoginBtn').addEventListener('click', googleLogin);
};

