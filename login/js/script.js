const regexEmail = document.getElementById("email");
const regexPassword = document.getElementById("password");
const validationSignIn = document.getElementById("signIn");
let localUserStorage = [];
localUserStorage = JSON.parse(localStorage.getItem("registeredUsers"));
function validationEmail() {
  let userEmail = regexEmail.value;
  let storageEmail = localUserStorage[0].email;
  if (userEmail == storageEmail) {
    regexEmail.classList.add("is-valid");
    regexEmail.classList.remove("is-invalid");
    console.log("true");
    return true;
  } else {
    regexEmail.classList.add("is-invalid");
    regexEmail.classList.remove("is-valid");
    return false;
  }
}
regexEmail.addEventListener("input", function () {
  validationEmail();
});

function validationPassword() {
  let userPassword = regexPassword.value;
  let storagePassword = localUserStorage[0].password;
  if (userPassword == storagePassword) {
    regexPassword.classList.add("is-valid");
    regexPassword.classList.remove("is-invalid");
    console.log("true");
    return true;
  } else {
    regexPassword.classList.add("is-invalid");
    regexPassword.classList.remove("is-valid");
    return false;
  }
}
regexPassword.addEventListener("input", function () {
  validationPassword();
});

function redexSignIn() {
  if (validationEmail() && validationPassword()) {
    validationSignIn.href = "../home/index.html";
  }
}

validationSignIn.addEventListener("click", function () {
  redexSignIn();
});
