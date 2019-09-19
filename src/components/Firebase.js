import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyC2dlvi3KAsN9tj88G0EvIxHWSn-AnEQvM",
    authDomain: "schedule-17b2e.firebaseapp.com",
    databaseURL: "https://schedule-17b2e.firebaseio.com",
    projectId: "schedule-17b2e",
    storageBucket: "",
    messagingSenderId: "770227791030",
    appId: "1:770227791030:web:b23035e32f0cac11e5b217"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;