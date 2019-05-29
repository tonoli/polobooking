import firebase from "firebaseConfig";

const loginState = firebase.auth.onAuthStateChanged(user => {
  console.log(user);
});