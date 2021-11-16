const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyBFTcj2jrU-pRl-BFCgppS8O9HfU3qiNh0",
    authDomain: "udgam-c8886.firebaseapp.com",
    projectId: "udgam-c8886",
    storageBucket: "udgam-c8886.appspot.com",
    messagingSenderId: "873196164231",
    appId: "1:873196164231:web:2c0cc00c79b5c3d8d19422",
    measurementId: "G-P612PVHMQT"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User_f = db.collection("Users");
module.exports = User_f;