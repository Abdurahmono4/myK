import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDT5tQcCyAqyllRfgTAAk-HrH75GU6kY1o",
  authDomain: "mykitchen-6098c.firebaseapp.com",
  projectId: "mykitchen-6098c",
  storageBucket: "mykitchen-6098c.appspot.com",
  messagingSenderId: "894970247468",
  appId: "1:894970247468:web:a99b7a3185e030051b1489",
  measurementId: "G-BBW57R3NE1",
};

const app = initializeApp(firebaseConfig);

//Auth
const auth = getAuth(app);

export { auth };
