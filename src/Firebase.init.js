
import {  initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDwN83jVRoLbW7QVSrr1ut0vg7K08qh7bA",
    authDomain: "todo-94ed5.firebaseapp.com",
    projectId: "todo-94ed5",
    storageBucket: "todo-94ed5.appspot.com",
    messagingSenderId: "412362795263",
    appId: "1:412362795263:web:a0fc760b855504b8b244ca"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth