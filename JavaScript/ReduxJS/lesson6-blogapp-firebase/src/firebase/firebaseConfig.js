import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyD0zrbL9yKQNoz1fGW9J6yNdv7AKNFtlvQ",
    authDomain: "codex-group-f670d.firebaseapp.com",
    databaseURL: "https://codex-group-f670d-default-rtdb.firebaseio.com",
    projectId: "codex-group-f670d",
    storageBucket: "codex-group-f670d.appspot.com",
    messagingSenderId: "1005701591255",
    appId: "1:1005701591255:web:eaf331a6d8cb608fa38092"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}