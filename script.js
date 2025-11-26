let menu = document.querySelector("#menu")
let nav = document.querySelector(".links")

menu.onclick = () => {
    menu.classList.toggle('bi-x');
    nav.classList.toggle('active');
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! I will reply soon 🚀');
    this.submit();
});
