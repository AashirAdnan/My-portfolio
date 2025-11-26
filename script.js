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
  const message = document.getElementById("message-textarea").value.trim();
  if (!message) {
    e.preventDefault();
    statusDiv.innerHTML =
      "<p style='color:#ff6b6b;'>Please write a message 😅</p>";
    return;
  }

  statusDiv.innerHTML = "<p style='color:#4ade80;'>Sending...</p>";
  document.querySelector(".message-box").classList.remove("active");
  setTimeout(() => {
    statusDiv.innerHTML =
      "<p style='color:#4ade80; font-weight:600;'>Message sent successfully! 🚀</p>";
    form.reset();
    setTimeout(() => {
      statusDiv.innerHTML = "";
    }, 3000);
  }, 1000);
});
