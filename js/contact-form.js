/* ==========================================================================
   K Steve Barbers — contact-form.js
   Feature 3: Contact form validation
   ========================================================================== */

(function () {
  const form = document.getElementById("contactForm");
  if (!form) return; // only runs on contact.html

  const nameInput = document.getElementById("nameInput");
  const phoneInput = document.getElementById("phoneInput");
  const emailInput = document.getElementById("emailInput");
  const reasonSelect = document.getElementById("reasonSelect");
  const messageInput = document.getElementById("messageInput");
  const formSuccess = document.getElementById("formSuccess");
  const charCounter = document.getElementById("charCounter");

  // Accepts Kenyan numbers like 0712345678, 0112345678, or +254712345678
  const phonePattern = /^(?:\+254|0)(7|1)\d{8}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(input, errorEl, message) {
    input.classList.add("is-invalid");
    errorEl.textContent = message;
    errorEl.classList.add("show");
  }

  function clearError(input, errorEl) {
    input.classList.remove("is-invalid");
    errorEl.classList.remove("show");
  }

  function validateName() {
    const errorEl = document.getElementById("nameError");
    if (nameInput.value.trim().length < 2) {
      setError(nameInput, errorEl, "Please enter your name.");
      return false;
    }
    clearError(nameInput, errorEl);
    return true;
  }

  function validatePhone() {
    const errorEl = document.getElementById("phoneError");
    const value = phoneInput.value.trim();
    if (!phonePattern.test(value)) {
      setError(phoneInput, errorEl, "Please enter a valid Kenyan phone number (e.g. 0712345678).");
      return false;
    }
    clearError(phoneInput, errorEl);
    return true;
  }

  function validateEmail() {
    const errorEl = document.getElementById("emailError");
    const value = emailInput.value.trim();
    // email is optional, only validate format if something was typed
    if (value.length > 0 && !emailPattern.test(value)) {
      setError(emailInput, errorEl, "Please enter a valid email address.");
      return false;
    }
    clearError(emailInput, errorEl);
    return true;
  }

  function validateReason() {
    const errorEl = document.getElementById("reasonError");
    if (reasonSelect.value === "") {
      setError(reasonSelect, errorEl, "Please select a reason for contacting us.");
      return false;
    }
    clearError(reasonSelect, errorEl);
    return true;
  }

  function validateMessage() {
    const errorEl = document.getElementById("messageError");
    if (messageInput.value.trim().length < 10) {
      setError(messageInput, errorEl, "Please enter a message (at least 10 characters).");
      return false;
    }
    clearError(messageInput, errorEl);
    return true;
  }

  // validate as the user leaves each field, not just on submit
  nameInput.addEventListener("blur", validateName);
  phoneInput.addEventListener("blur", validatePhone);
  emailInput.addEventListener("blur", validateEmail);
  reasonSelect.addEventListener("change", validateReason);
  messageInput.addEventListener("blur", validateMessage);
  messageInput.addEventListener("input", function () {
  charCounter.textContent = `${messageInput.value.length} characters`;
});

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const checks = [
      validateName(),
      validatePhone(),
      validateEmail(),
      validateReason(),
      validateMessage()
    ];

    const allValid = checks.every(Boolean);

    if (allValid) {
      formSuccess.classList.add("show");
      form.reset();
      formSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      formSuccess.classList.remove("show");
    }
  });
})();
