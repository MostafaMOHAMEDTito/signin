let userName = [];
userName = JSON.parse(localStorage.getItem("registeredUsers"));
let userWelcome = userName[0].name;
document.getElementById("userLogIn").innerHTML = `Welcome ${userWelcome}`;
