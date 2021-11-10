import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBd0afRAqEnl11Vn3v_FNH6l1__AbXGLkI",
  authDomain: "ecommerce-20d4c.firebaseapp.com",
  projectId: "ecommerce-20d4c",
  storageBucket: "ecommerce-20d4c.appspot.com",
  messagingSenderId: "495452521200",
  appId: "1:495452521200:web:24f6d2908325ff6da2b835"
};

// Initialize Firebase Application
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}


export const auth = firebase.auth() 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()