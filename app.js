// PASSWORD STRENGTH TESTER

// Get HTML elements to handle the password input and strength indicator
const passwordInput = document.getElementById("passwordInput"); // input for typing a password
const passwordStrength = document.getElementById("passwordStrength"); // element to display password strength

// Add an 'input' event listener to the password input field
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value; // get the current value of the password input
  let score = 0; // initialize score for password strength

  // Check different criteria and increase score accordingly
  if (value.length >= 8) score++; // length check, +1 point for 8 or more characters
  if (value.length >= 12) score += 2; // +2 points for 12 or more characters
  if (value.length >= 20) score += 3; // +3 points for 20 or more characters

  // Other criteria checks
  if (/[a-z]/.test(password)) score++; // contains lowercase letters
  if (/[A-Z]/.test(password)) score++; // contains uppercase letters
  if (/\d/.test(password)) score++; // contains digits
  if (/[^a-zA-Z0-9]/.test(password)) score++; // contains special characters

  // Map score to descriptive level
  // levels [0, 1, 2, 3, 4] correspond to ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"]
  const levels = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
  const colors = ["red", "orange", "yellow", "green", "blue"];

  // Clamp score to max index to avoid out of bounds
  const displayScore = Math.min(score, levels.length - 1);
});
