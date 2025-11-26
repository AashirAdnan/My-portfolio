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

  const formData = new FormData(form);
  const encoded = new URLSearchParams(formData).toString();

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encoded,
  })
    .then(() => {
      statusDiv.innerHTML =
        "<p style='color:#4ade80; font-weight:600; text-align:center;'>Message sent successfully! I'll reply soon.</p>";
      form.reset();
      document.querySelector(".message-box").classList.remove("active");
    })
    .catch(() => {
      statusDiv.innerHTML =
        "<p style='color:#ff6b6b; text-align:center;'>Oops! Something went wrong. Try again.</p>";
    });
});
