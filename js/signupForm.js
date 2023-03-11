//ESTE ARCHIVO HACE FUNCIONAR EL REGISTRO DE USUARIOS. IMPORTA createUserWithEmailAndPassword + auth DESDE FIREBASE Y SE COMBINA CON UNA FUNCION QUE TOMA LOS DATOS DESDE EL HTML A TRAVES DE UN FORMULARIO.

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from "./firebase.js";

const signupForm = document.querySelector("#signupForm");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signupForm["signupEmail"].value;
  const password = signupForm["signupPassword"].value;

  console.log(email, password);

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);

    alert("Usuario registrado.");

    window.location.href = "states.html";
  } catch (error) {
    //console.log(error.message);
    //console.log(error.code);

    if (error.code === "auth/invalid-email") {
      //alert("Correo electrónico invalido.");
      alert("Correo electrónico invalido");
    }

    if (error.code === "auth/weak-password") {
      //alert("La contraseña debe contener 6 caracteres.");
      alert("La contraseña debe contener 6 caracteres.", "none");
    }

    if (error.code === "auth/email-already-in-use") {
      //alert("Usuario ya registrado.");
      alert("Usuario ya registrado.", "none");
    }

    /*
    if (error.code) {
      alert("Algo salio mal.");
    }
    */
  }
});
