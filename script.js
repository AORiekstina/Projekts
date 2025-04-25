function login(){
  var username = document.getElementById("user").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "password") {
    alert("Login successful!");
  } else {
    alert("invalid username or password");
  }
}

const parMumsLink = document.getElementById("parMumsLink");
const sadarbibaListItem = document.querySelector('nav ul li.dropdown .dropdown-content a[href="sadarbiba.html"]').closest('li');

if (sadarbibaListItem) {
  sadarbibaListItem.style.display = 'none';
}

if (parMumsLink) {
  parMumsLink.addEventListener('click', function(event) {
    event.preventDefault();
    if (sadarbibaListItem) {
      sadarbibaListItem.style.display = 'block';
    }
  });
  }
}