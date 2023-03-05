import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from "./firebase.js";

const signInForm = document.querySelector("#signInForm");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signInForm["signInEmail"].value;
  const password = signInForm["signInPassword"].value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);

    alert("Bienvenide nuevamente");
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      alert("Contraseña incorrecta.");
    } else if (error.code === "auth/user-not-found") {
      alert("Usuario no encontrado.");
    } else {
      alert(error.message, "none");
    }
  }
});
