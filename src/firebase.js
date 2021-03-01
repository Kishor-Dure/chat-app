import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwgjjmJMlF6lHmrulQDROx44FF_Et8NU8",
    authDomain: "chat-app-e7e56.firebaseapp.com",
    projectId: "chat-app-e7e56",
    storageBucket: "chat-app-e7e56.appspot.com",
    messagingSenderId: "43300525892",
    appId: "1:43300525892:web:6da2bb8102e6ec66e3a911",
    measurementId: "G-1H59FLHSQ6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db}; 