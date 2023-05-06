// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbSdJhYfNM2mHARlRnXhzVQo3a3ZRZqyo",
    authDomain: "ex10-b29b5.firebaseapp.com",
    projectId: "ex10-b29b5",
    storageBucket: "ex10-b29b5.appspot.com",
    messagingSenderId: "313755560440",
    appId: "1:313755560440:web:dda64e4895b94e812fce0d",
    measurementId: "G-L7SM1CQFPC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);