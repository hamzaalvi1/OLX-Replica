import  * as firebase from "firebase/app"
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCzSxGChGoNIjutogKqS0uduPn2QOn5fFY",
    authDomain: "olx-replica-07.firebaseapp.com",
    databaseURL: "https://olx-replica-07.firebaseio.com",
    projectId: "olx-replica-07",
    storageBucket: "olx-replica-07.appspot.com",
    messagingSenderId: "288352974986",
    appId: "1:288352974986:web:7a0beb66e572696fe25573"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const FireStore  = firebase.firestore()