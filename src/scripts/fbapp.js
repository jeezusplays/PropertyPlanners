import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC4nJSyqPu0ZKggErnBSHkV4EpZ_VDTlIM",
    authDomain: "propertyplanners-93ebc.firebaseapp.com",
    projectId: "propertyplanners-93ebc",
    storageBucket: "propertyplanners-93ebc.appspot.com",
    messagingSenderId: "237227354592",
    appId: "1:237227354592:web:595502638d0fa13df6e385",
    measurementId: "G-LXFZL31XJW"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fsdb = getFirestore(app);
const rtdb = getDatabase(app);

export {app,fsdb,rtdb}
