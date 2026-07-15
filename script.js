"use strict";

const emailButton = document.getElementById("emailButton");
const copyStatus = document.getElementById("copyStatus");

if (emailButton && copyStatus) {
  const emailAddress = emailButton.dataset.email;

  emailButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);

      copyStatus.textContent = "Email address copied.";

      window.setTimeout(() => {
        copyStatus.textContent = "";
      }, 2500);
    } catch (error) {
      window.location.href = `mailto:${emailAddress}`;
    }
  });
}
