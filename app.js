// PASSWORD STRENGTH TESTER

// Get HTML elements
const passwordInput = document.getElementById("passwordInput");
const passwordStrength = document.getElementById("passwordStrength");

// Add event listener to check password strength on input
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let score = 0;

  // Length scoring
  if (password.length >= 8) score++;
  if (password.length >= 12) score += 2; // +2 points for 12+ chars
  if (password.length >= 20) score += 3; // +3 points for 20+ chars

  // Character variety scoring
  if (/[a-z]/.test(password)) score++; // lowercase
  if (/[A-Z]/.test(password)) score++; // uppercase
  if (/\d/.test(password)) score++; // digits
  if (/[^a-zA-Z0-9]/.test(password)) score++; // special characters

  // Map score to descriptive level
  const levels = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
  const colors = ["red", "orange", "yellow", "green", "blue"];

  const displayScore = Math.min(score, levels.length - 1);

  // Update HTML
  passwordStrength.textContent = levels[displayScore];
  passwordStrength.style.color = colors[displayScore];
});
