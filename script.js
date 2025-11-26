let menu = document.querySelector("#menu")
let nav = document.querySelector(".links")

menu.onclick = () => {
    menu.classList.toggle('bi-x');
    nav.classList.toggle('active');
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
