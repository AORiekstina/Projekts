function login(){
  var username = document.getElementById("user").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "password") {
    alert("Login successful!");
  } else {
    alert("invalid username or password");
  }
}


