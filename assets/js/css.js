function toggleForm() {
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");
    var toggleButton = document.querySelector(".toggle-button");
  
    if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
      toggleButton.textContent = "Switch to Signup";
    } else {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
      toggleButton.textContent = "Switch to Login";
    }
  }
  