// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWQMsavGFfTbxluNcKGS6RV9KTiYvYWmg",
    authDomain: "finance-manager-instance.firebaseapp.com",
    projectId: "finance-manager-instance",
    storageBucket: "finance-manager-instance.appspot.com",
    messagingSenderId: "256196564462",
    appId: "1:256196564462:web:75d3123f4c899d515daaff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
