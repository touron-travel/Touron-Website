import React from "react";
import Routes from "./Routes";
import ReactDOM from "react-dom";
import "./index.css";
import Admin from "./Admin components/Admin";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCZ2bo_iPbtvarsADQe84qX2s9cWPMq3U",
  authDomain: "touronapp-248e4.firebaseapp.com",
  databaseURL: "https://touronapp-248e4.firebaseio.com",
  projectId: "touronapp-248e4",
  storageBucket: "touronapp-248e4.appspot.com",
  messagingSenderId: "813320271971",
  appId: "1:813320271971:web:5a10483e3c11bc953aa056",
  measurementId: "G-KCPSW6WFC9",
};

// if (!firebase.apps.length) {

firebase.initializeApp(firebaseConfig);

// }

ReactDOM.render(<Routes />, document.getElementById("root"));
