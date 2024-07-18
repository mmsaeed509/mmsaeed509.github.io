document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Resume page loaded');
    // Your JavaScript code here
});

window.onload = function() {
    var title = document.getElementById("pageTitle");
    var img = document.createElement("img");
    img.src = "./Images/00xWolf-circle.png";
    img.className = "page-icon";
    title.insertBefore(img, title.firstChild);

    // Initialize Typed.js for the auto-type effect
    var options = {
        strings: ["Resume"], // Add your desired texts here
        typeSpeed: 120,
        backSpeed: 120,
        loop: true
    };

    var typed = new Typed(".auto-type-resume", options);
};

