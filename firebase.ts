// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9sELYLJbEyl1Fz8luKrCsc3U0RFTakzs",
  authDomain: "netflix-ilw-561a4.firebaseapp.com",
  

  projectId: "netflix-ilw-561a4",
  storageBucket: "netflix-ilw-561a4.appspot.com",
  messagingSenderId: "1082514915095",
  appId: "1:1082514915095:web:39cf78666102cd0dd18152",
  measurementId: "G-X7CFQ4VPKN"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
