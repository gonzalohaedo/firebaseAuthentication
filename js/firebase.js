//ARCHIVO PRINCIPAL PARA LA IMPORTACIÓN DE LOS SERVICIOS DE FIREBASE.

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM3bv8WKo3-rohtJxU8LgQ-7oKTMGqICc",
  authDomain: "aplicacion-6e7ed.firebaseapp.com",
  projectId: "aplicacion-6e7ed",
  storageBucket: "aplicacion-6e7ed.appspot.com",
  messagingSenderId: "1051361140616",
  appId: "1:1051361140616:web:cf02fec2794b5a9187a43d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//--------------------------------------------------------------------------------
