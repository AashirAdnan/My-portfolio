let menu = document.querySelector("#menu");
let nav = document.querySelector(".links");

menu.onclick = () => {
  menu.classList.toggle("bi-x");
  nav.classList.toggle("active");
};


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

// Netlify form handler (the magic part)
const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted!"); // Debug line — check console

  const textarea = document.getElementById("message-textarea");
  const message = textarea.value.trim();
  if (!message) {
    statusDiv.innerHTML =
      "<p style='color:#ff6b6b;'>Please enter a message.</p>";
    return;
  }

  const formData = new FormData(form);
  formData.set("message", message);

  statusDiv.innerHTML = "<p style='color:#4ade80;'>Sending...</p>";

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then((response) => {
      if (response.ok) {
        statusDiv.innerHTML =
          "<p style='color:#4ade80; font-weight:600;'>Message sent! I'll reply soon.</p>";
        form.reset();
        document.querySelector(".message-box").classList.remove("active");
      } else {
        throw new Error("Failed");
      }
    })
    .catch((error) => {
      console.error("Error:", error); // Debug line
      statusDiv.innerHTML =
        "<p style='color:#ff6b6b;'>Error! Try emailing me directly.</p>";
    });
});
