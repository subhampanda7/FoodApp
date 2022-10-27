let users = JSON.parse(localStorage.getItem("details")) || [];

let login_users = JSON.parse(localStorage.getItem("login_success")) || [];

console.log("users:", users);
function login() {
  let logObj = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  let falg = false;

  users.forEach((ele) => {
    if (ele.username == logObj.username && ele.password == logObj.password) {
      alert(" Sign In Success");

      falg = true;

      localStorage.setItem("login_success", JSON.stringify(logObj.username));
      window.location.href = "./index.html";
    }
  });

  if (falg == false) {
    alert("Wrong Credentials");
  }
}
