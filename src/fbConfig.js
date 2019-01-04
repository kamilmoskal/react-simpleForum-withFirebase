 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDR0yKOSTWhzOM_Y_p83p9IidxCbxDaHno",
  authDomain: "forum-98544.firebaseapp.com",
  databaseURL: "https://forum-98544.firebaseio.com",
  projectId: "forum-98544",
  storageBucket: "forum-98544.appspot.com",
  messagingSenderId: "152163714241"
};
firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase
