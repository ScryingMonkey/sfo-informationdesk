import firebase, { firestore } from 'firebase';

// Initialize Firebase
let config = {
  apiKey: "AIzaSyBO-tzRNLMMvklG0UCdUNRTXxOsZ3b4DpM",
  authDomain: "sfo-informationdeskkiosk.firebaseapp.com",
  databaseURL: "https://sfo-informationdeskkiosk.firebaseio.com",
  projectId: "sfo-informationdeskkiosk",
  storageBucket: "sfo-informationdeskkiosk.appspot.com",
  messagingSenderId: "210425907394"
};
firebase.initializeApp(config);

export default firestore;

