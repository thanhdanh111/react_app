import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/storage";
firebase.initializeApp({
    apiKey: "AIzaSyAu0RD0WBTgQRoE69pQMZEVRh-hEJJasR8",
    authDomain: "smartreactchat2021.firebaseapp.com",
    databaseURL: "https://smartreactchat2021-default-rtdb.firebaseio.com",
    projectId: "smartreactchat2021",
    storageBucket: "smartreactchat2021.appspot.com",
    messagingSenderId: "137533221381",
    appId: "1:137533221381:web:58566a081a35002ecdca6c"
});
const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export {auth , db , storage }
export default firebase
