let menu = document.querySelector("#menu")
let nav = document.querySelector(".links")

menu.onclick = () => {
    menu.classList.toggle('bi-x');
    nav.classList.toggle('active');
};

// Contact form code *NOT MINE


(function () {
  emailjs.init("rUb4bUThmq2qGzaEG"); // ← Replace with your real Public Key
})();

window.onload = function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      this.querySelector(".contact-btn").textContent = "Sending...";

      emailjs
        .sendForm("service_upi7qum", "template_bf1264h", this)
        .then(() => {
          alert("Message sent! I'll reply soon");
          this.reset();
          this.querySelector(".contact-btn").textContent = "Submit";
        })
        .catch(() => {
          alert("Failed. Try again or email me directly");
          this.querySelector(".contact-btn").textContent = "Submit";
        });
    });
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
