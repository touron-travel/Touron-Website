import firebase from "firebase";


// const firebaseConfig = {
//   apiKey: "AIzaSyCCZ2bo_iPbtvarsADQe84qX2s9cWPMq3U",
//   authDomain: "touronapp-248e4.firebaseapp.com",
//   databaseURL: "https://touronapp-248e4.firebaseio.com",
//   projectId: "touronapp-248e4",
//   storageBucket: "touronapp-248e4.appspot.com",
//   messagingSenderId: "813320271971",
//   appId: "1:813320271971:web:5a10483e3c11bc953aa056",
//   measurementId: "G-KCPSW6WFC9",
// };
var firebaseConfig = {
  apiKey: "AIzaSyBw6zKmzlCTb3_IsSgf8SwrKhcfajFcQas",
  authDomain: "touron-mobileapp.firebaseapp.com",
  databaseURL: "https://touron-mobileapp.firebaseio.com",
  projectId: "touron-mobileapp",
  storageBucket: "touron-mobileapp.appspot.com",
  messagingSenderId: "1009345966954",
  appId: "1:1009345966954:web:bcabf8d980187f03e1eb13",
  measurementId: "G-8J2032B9M6",
};

let fire;

if (!firebase.apps.length) {
  fire = firebase.initializeApp(firebaseConfig, "touron-webapp");
} else {
  fire = firebase.app(); 
}

export let firedb = fire.database();
export let fireStorage = fire.storage();
export let auth = fire.auth();
