document.querySelector(".nav-btn").addEventListener("click", function() {
    window.open("download.html", "_blank");
     
});

/*header LOOP for words*/
var typed = new Typed('.whoami', {
    strings: ['<span style="color:#7B64FC;"> whoami</span>'],
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