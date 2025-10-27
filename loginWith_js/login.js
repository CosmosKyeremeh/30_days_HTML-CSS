// Get Started Page JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const strengthBar = document.querySelector(".strength-bar");
  const strengthText = document.querySelector(".strength-text");

  // Password strength indicator
  passwordInput.addEventListener("input", function () {
    const password = this.value;
    let strength = 0;
    let text = "Password strength";
    let color = "#4a5568";

    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;

    switch (strength) {
      case 1:
        text = "Weak";
        color = "#e53e3e";
        break;
      case 2:
        text = "Fair";
        color = "#ed8936";
        break;
      case 3:
        text = "Good";
        color = "#38a169";
        break;
      case 4:
        text = "Strong";
        color = "#68d391";
        break;
    }

    strengthBar.style.background = color;
    strengthBar.style.width = strength * 25 + "%";
    strengthText.textContent = text;
    strengthText.style.color = color;
  });

  // Form validation
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const termsChecked = document.getElementById("terms").checked;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      confirmPasswordInput.focus();
      return;
    }

    // Check if terms are accepted
    if (!termsChecked) {
      alert("Please accept the Terms of Service and Privacy Policy");
      return;
    }

    // Check password strength
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      passwordInput.focus();
      return;
    }

    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.textContent = "Creating Account...";
    submitButton.disabled = true;

    // Simulate API call
    setTimeout(() => {
      alert("Account created successfully! Welcome to MovieBox!");
      submitButton.textContent = originalText;
      submitButton.disabled = false;

      // Redirect to main page
      window.location.href = "main.html";
    }, 2000);
  });

  // Real-time password match indicator
  confirmPasswordInput.addEventListener("input", function () {
    if (this.value && passwordInput.value) {
      if (this.value === passwordInput.value) {
        this.style.borderColor = "#38a169";
      } else {
        this.style.borderColor = "#e53e3e";
      }
    } else {
      this.style.borderColor = "#4a5568";
    }
  });
});
