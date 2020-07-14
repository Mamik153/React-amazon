import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBmIdFfseD8jUBrzlGCFHBOHKQEmlrAVKU",
    authDomain: "react-clone-560eb.firebaseapp.com",
    databaseURL: "https://react-clone-560eb.firebaseio.com",
    projectId: "react-clone-560eb",
    storageBucket: "react-clone-560eb.appspot.com",
    messagingSenderId: "213363321207",
    appId: "1:213363321207:web:bfb44f28d9bbd5b0b79972",
    measurementId: "G-M9TET6PJQ4"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };