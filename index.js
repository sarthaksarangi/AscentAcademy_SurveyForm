
function validateForm() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (email.length < 1 || email.length > 100) {
      document.getElementById("error-message").style.display = "block";
      emailInput.focus();
      return false;
    }
    //REgExp.test() checks if the email address has a valid format, i.e., if it has a non-empty username, a single @ symbol, a non-empty domain name, and a top-level domain (TLD) with at least one character
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return false;
      }

    return true;
  }
