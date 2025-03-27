document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
  
    // Get input values and trim whitespace
    const email = document.getElementById("Email").value.trim();
    const password = document.getElementById("Password").value.trim();
  
    // Get error message elements
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
  
    // Reset error messages
    emailError.classList.add("hidden");
    passwordError.classList.add("hidden");
  
    // Validation flags
    let isValid = true;
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.classList.remove("hidden");
      isValid = false;
    }
  
    // Password validation
    if (password.length < 6) {
      passwordError.classList.remove("hidden");
      isValid = false;
    }
  
    // Check credentials if validation passes
    if (isValid) {
      if (email === "user@example.com" && password === "password123") {
        // Success alert with redirect
        Swal.fire({
          icon: "success",
          title: "Welcome Back!",
          text: "Login successful!",
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false,
          willClose: () => {
            window.location.href = "Dash.html";
          }
        });
      } else {
        // Error alert
        Swal.fire({
          title: "Error",
          text: "Invalid email or password",
          icon: "error",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#d33",
        });
      }
    }
  });
