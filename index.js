const emailInput = document.getElementById("newsletter-form-email-input");
const submitInput = document.getElementById("newsletter-form-submit-input");
const emailLabel = document.getElementById("newsletter-form-email-label");
const newsletterForm = document.querySelector(".newsletter-form-signup");
const successMessage = document.querySelector(".success-message-box");
const successMessageDescription = document.getElementById(
  "success-message-description"
);
let errorState = false;

submitInput.addEventListener("click", (e) => {
  e.preventDefault();

  if (!emailInput.value.includes("@") && !errorState) {
    emailLabel.innerHTML += `<span class="email-error">Valid email required</span>`;
    emailInput.classList.add("email-error-input");
    errorState = true;
    return;
  }

  // TODO: SUCCESS MESSAGE
  newsletterForm.classList.add("inactive-left");
  successMessage.classList.remove("inactive-right");
  successMessageDescription.innerHTML =
    successMessageDescription.innerHTML.replace("%email%", emailInput.value);
});
