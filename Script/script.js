/*Current year Copyright */
var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;


window.onload = function() {
    var title = document.getElementById("pageTitle");
    var img = document.createElement("img");
    img.src = "./imgs/logos/exodia-cyan.png";
    img.alt = "Logo";
    img.style.marginLeft = "5px"; // Adjust margin as needed
    title.appendChild(img);
};


/*header LOOP for words*/
var typed = new Typed('.auto-type', {
    strings: [
        '<span style="color:#7B64FC;">DevOps Engineer </span>',
        '<span style="color:#7B64FC;"> MLOps Engineer </span>',
        '<span style="color:#7B64FC;">Linux Geek</span>',
        '<span style="color:#7B64FC;">CyberSecurity Geek</span>',
        '<span style="color:#7B64FC;">Hardware Geek</span>'],
    typeSpeed: 120,
    backSpeed :120,
    loop : true
});

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

/* Buttons */

/* Header -downlaod*/
document.querySelector(".head-fbtn").addEventListener("click", function() {
    window.location.href = "Projects.html";
});

/* Header-wiki*/
document.querySelector(".head-sbtn").addEventListener("click", function() {
    window.open("https://exodia-os.github.io/wiki", "_blank");

});
