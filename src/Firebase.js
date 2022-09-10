import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

//get this firebaseConfig from project settings from firebase
const firebaseConfig = {
  apiKey: "AIzaSyAFUb3EMxnT8Zb6OYKsvJayK3wAh0mGQ5M",
  authDomain: "twitter-clone-mk01.firebaseapp.com",
  projectId: "twitter-clone-mk01",
  storageBucket: "twitter-clone-mk01.appspot.com",
  messagingSenderId: "1002859855623",
  appId: "1:1002859855623:web:555e6fbcb120d41b5dcfa2",
  measurementId: "G-VSXHBKCZC9"
};

//this sets up the portable firebase database and we can use db to store data from our app to firebase
const firebaseApp=firebase.initializeApp(firebaseConfig)

const db=firebaseApp.firestore()

export default db