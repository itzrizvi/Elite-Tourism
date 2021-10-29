import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthApp = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthApp;