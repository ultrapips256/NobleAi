// Save new account
function signup(name, email, password) {
  localStorage.setItem("nobleaiUser", JSON.stringify({
    name,
    email,
    password
  }));
}

// Check login
function login(email, password) {
  const user = JSON.parse(localStorage.getItem("nobleaiUser"));

  if (!user) {
    alert("No account found. Please create an account first.");
    return false;
  }

  if (user.email === email && user.password === password) {
    window.location.href = "services.html";
  } else {
    alert("Wrong email or password.");
  }
}
