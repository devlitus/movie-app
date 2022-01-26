import { loginGoogle, loginWithEmailAndPassword } from "./services/login.js";

const btn = document.getElementById("btn");
const btnGoogle = document.getElementById("btn-google");

const submitLoginWithEmailAndPassword = async () => {
  try {
    const emailInput = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    const user = await loginWithEmailAndPassword(emailInput, password);
    const { email } = user.user;
    return Swal.fire({
      title: `Welcome, ${email}`,
      icon: "success",
    }).then(() => {
      localStorage.setItem("user", email);
      window.location.href = "./movie";
    });
  } catch (error) {
    Swal.fire({
      title: "Error ",
      text: "email or password incorrect",
      icon: "error",
    });
    console.log(error);
  }
};
const submitLoginGoogle = async () => {
  try {
    loginGoogle().then((user) => {
      const { displayName } = user;
      user &&
        Swal.fire({
          title: `Welcome ${displayName}`,
          icon: "success",
        }).then(() => {
          localStorage.setItem("user", displayName);
          window.location.href = "/movie";
        });
    });
  } catch (error) {
    Swal.fire({
      title: "Error en el login",
      text: "Google provider fails",
      icon: "error",
    });
    console.log(error);
  }
};

btn.addEventListener("click", submitLoginWithEmailAndPassword, false);
btnGoogle.addEventListener("click", submitLoginGoogle, false);
