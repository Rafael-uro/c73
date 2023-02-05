import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBEj57XnQ67x3VaX1azzngLaGBGba0uTTU",
  authDomain: "c72-2ad5d.firebaseapp.com",
  projectId: "c72-2ad5d",
  storageBucket: "c72-2ad5d.appspot.com",
  messagingSenderId: "959860871555",
  appId: "1:959860871555:web:77240eb1d9d9f2eb2126b6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
