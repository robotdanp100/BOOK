import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBImaBrt6oomQou14_7t8fy_XLENSsFuB0",
  authDomain: "booksanta-cc089.firebaseapp.com",
  projectId: "booksanta-cc089",
  storageBucket: "booksanta-cc089.appspot.com",
  messagingSenderId: "486915077580",
  appId: "1:486915077580:web:63a4c419c3668e9799d969"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
