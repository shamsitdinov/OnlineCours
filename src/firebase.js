import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCrHk-lhodwwCTA23tQc4qPO2Zwp-61XIU",
    authDomain: "reduxstart-d9163.firebaseapp.com",
    projectId: "reduxstart-d9163",
    storageBucket: "reduxstart-d9163.appspot.com",
    messagingSenderId: "623942152901",
    appId: "1:623942152901:web:a6661638469ebb8883b6ac",
    measurementId: "G-PLYYVPELR1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

