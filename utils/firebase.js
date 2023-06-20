// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app'
import * as auth from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXTFIREBASEAPIKEY,
  authDomain: process.env.NEXTFIREBASEAUTHDOMAIN,
  projectId: process.env.NEXTPROJECTID,
  storageBucket: process.env.NEXTSTORAGEBUGET,
  messagingSenderId: process.env.NEXTMESSAGINGSENDERID,
  appId: process.env.NEXTAPPID,
  measurementId: process.env.NEXTMESUREMENTID,
};

// Initialize Firebase
export const initializeFirebase = () => {
 
    let app;

if (firebase.getApp.length === 0) {
  app = firebase.initializeApp(firebaseConfig);

  console.log("Connted Sucessully")
} else {
  app = firebase.initializeApp(firebaseConfig);
  console.log(app);
  console.log("already Connected to firebase");
}

};
