import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAtsD6LhNV2fzWHjMpNs3nKjJHbYGjS7eg",
  authDomain: "ksps-7df22.firebaseapp.com",
  databaseURL: "https://ksps-7df22.firebaseio.com",
  projectId: "ksps-7df22",
  storageBucket: "ksps-7df22.appspot.com",
  messagingSenderId: "345011344891",
  appId: "1:345011344891:web:285a50f4d7ca264274275e",
  measurementId: "G-7ZD8XZ9EYR"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const firestore = firebase.firestore()

export { auth, firestore }
