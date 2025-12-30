const ADMIN_PASSWORD = "SWAADMINHAw.II"; 

function login(e) {
  e.preventDefault();
  const pass = document.getElementById("password").value;

  if (pass === ADMIN_PASSWORD) {
    localStorage.setItem("admin", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid password";
  }
}

function checkAdmin() {
  if (localStorage.getItem("admin") !== "true") {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("admin");
  window.location.href = "login.html";
}
