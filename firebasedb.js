import firebase from 'firebase';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD90FRvHqy2wy8wBC2JZ2Dph4Aj6jjJtbs",
  authDomain: "boards-9e5c3.firebaseapp.com",
  databaseURL: "https://boards-9e5c3.firebaseio.com",
  projectId: "boards-9e5c3",
  storageBucket: "boards-9e5c3.appspot.com",
  messagingSenderId: "1043483284373",
  appId: "1:1043483284373:web:23a3f13b9c76315bdf5c9c",
  measurementId: "G-B7ZGT09JN1"
};
firebase.initializeApp(firebaseConfig);

export default firebase;