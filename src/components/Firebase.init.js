
import { getApp, initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDwN83jVRoLbW7QVSrr1ut0vg7K08qh7bA",
    authDomain: "todo-94ed5.firebaseapp.com",
    projectId: "todo-94ed5",
    storageBucket: "todo-94ed5.appspot.com",
    messagingSenderId: "412362795263",
    appId: "1:412362795263:web:a0fc760b855504b8b244ca"
};

const app = initializeApp(firebaseConfig);

const auth = getApp(app)

export default auth