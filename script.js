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

const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted!"); // ← you WILL see this now

  const message = document.getElementById("message-textarea").value.trim();
  if (!message) {
    statusDiv.innerHTML =
      "<p style='color:#ff6b6b;'>Please write a message 😅</p>";
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
    .then(() => {
      statusDiv.innerHTML =
        "<p style='color:#4ade80; font-weight:600;'>Message sent successfully! 🚀</p>";
      form.reset();
      document.querySelector(".message-box").classList.remove("active");
      setTimeout(() => {
        statusDiv.innerHTML = "";
      }, 3000);
    })
    .catch(() => {
      statusDiv.innerHTML =
        "<p style='color:#ff6b6b;'>Error — email me directly: m.aashiradnan@gmail.com</p>";
    });
});
