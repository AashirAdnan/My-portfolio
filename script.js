let menu = document.querySelector("#menu")
let nav = document.querySelector(".links")

menu.onclick = () => {
    menu.classList.toggle('bi-x');
    nav.classList.toggle('active');
};

// Contact form code *NOT MINE


function sendMail(){
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("messsage").value,
    }

    emailjs.send("service_upi7qum", "template_bf1264h", parms).then(alert("Email Sent!"));
}
