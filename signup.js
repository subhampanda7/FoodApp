let users = JSON.parse(localStorage.getItem("details")) || [];

class User {
  constructor() {
    this.owner = "priyanka";
  }

  validateUsername(username) {
    let value = username.includes("@") ? false : true;
    return value;
  }

  validatePassword(password) {
    let value = password.includes(12) ? false : true;
    return value;
  }

  signUp(username, password) {
    let isValidated = false;

    isValidated =
      this.validateUsername(username) && this.validatePassword(password);

    if (isValidated) {
      this.username = username;
      this.password = password;
      alert(" Sign Up Success Go For Log In");
      users.push(this);
      window.location.href = "./login.html";
      localStorage.setItem("details", JSON.stringify(users));
    } else {
      alert("Failed Try Again");
    }
  }
}

function signup() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let x = new User();
  x.signUp(username, password);
  console.log(users);
}
