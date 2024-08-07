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

// JavaScript to scroll to section
document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('.go-commun');
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetSections = document.querySelectorAll(".icon-cy");

            targetSections.forEach(targetSection => {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                targetSection.classList.add('flashing');

                setTimeout(() => {
                    targetSection.classList.remove('flashing');
                }, 10000);
            });
        });
    });
});
