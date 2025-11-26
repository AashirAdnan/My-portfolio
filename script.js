let menu = document.querySelector("#menu");
let nav = document.querySelector(".links");

menu.onclick = () => {
  menu.classList.toggle("bi-x");
  nav.classList.toggle("active");
};

// Expanding message field (unchanged)
document.getElementById("message-input").addEventListener("focus", function () {
  document.querySelector(".message-box").classList.add("active");
  setTimeout(() => document.getElementById("message-textarea").focus(), 350);
});

document
  .getElementById("message-textarea")
  .addEventListener("blur", function () {
    if (this.value.trim() === "") {
      document.querySelector(".message-box").classList.remove("active");
    }
  });

// ========= NETLIFY FORM HANDLING (AJAX) =========
const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Copy message from textarea to hidden input for Netlify
  const messageTextarea = document.getElementById("message-textarea");
  const hiddenMessage = document.createElement("input");
  hiddenMessage.type = "hidden";
  hiddenMessage.name = "message";
  hiddenMessage.value = messageTextarea.value;
  form.appendChild(hiddenMessage);

  const formData = new FormData(form);

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      statusDiv.innerHTML =
        "<p style='color:#4ade80; font-weight:600;'>Message sent successfully! I'll reply soon.</p>";
      form.reset();
      document.querySelector(".message-box").classList.remove("active");
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    statusDiv.innerHTML =
      "<p style='color:#ff6b6b;'>Oops! Something went wrong. Try again.</p>";
  }

  // Remove the temporary hidden input
  form.removeChild(hiddenMessage);
});
