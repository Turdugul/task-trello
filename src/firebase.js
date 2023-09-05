import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 
    apiKey: "AIzaSyDfmKC-evvkZTu0PIXn0Sz3UmDuPjGAMZA",
    authDomain: "todo-trello-app1.firebaseapp.com",
    projectId: "todo-trello-app1",
    storageBucket: "todo-trello-app1.appspot.com",
    messagingSenderId: "489713931518",
    appId: "1:489713931518:web:28bac12da11b1ff12fc1af"
  
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
