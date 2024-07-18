var ID = 1;
/* Scrool down and flashing For community  */ 

document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('.go-commun');
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            
            const targetSections = document.querySelectorAll(".icon-cy");
        
            targetSections.forEach(targetSection => {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                switch (ID) {
                    case 1:
                        targetSection.classList.add('flashing');       
                        setTimeout(() => {
                            targetSection.classList.remove('flashing');
                        }, 10000); 
                        break;
                    case 2:
                        targetSection.classList.add('flashing-Acer');
                        setTimeout(() => {
                            targetSection.classList.remove('flashing-Acer');
                        }, 10000);        
                        break;

                    case 3 : 
                        targetSection.classList.add('flashing-Wireless');
                        setTimeout(() => {
                        targetSection.classList.remove('flashing-Wireless');
                        }, 10000);        
                        break;

                    case 4 : 
                        targetSection.classList.add('flashing-Dark');
                        setTimeout(() => {
                        targetSection.classList.remove('flashing-Dark');
                        }, 10000);   
                        break;
                       
                    case 5 : 
                        targetSection.classList.add('flashing-ARM');
                        setTimeout(() => {
                        targetSection.classList.remove('flashing-ARM');
                        }, 10000);   
                        break;

                    default:
                        targetSection.classList.add('flashing');       
                        setTimeout(() => {
                            targetSection.classList.remove('flashing');
                        }, 10000); 
                        break;
                }
            
            }); 
        });
    });
});





/* Home-edtion*/
$("#Home-ed").click(function (){
    if (ID == 1) {
    } else {
        $(".active").fadeOut(1000, function() {
            $(this).removeClass("active");
            $("#Home-ed-cont").fadeIn(1000);
            $("#Home-ed-cont").addClass("active");


         /* Home Theme edition*/
        $(".nav-list").css("border-color","#038c96");
        $(".nav .nav-btn").css("background-image","linear-gradient(to left, rgb(11, 206, 206), #0571c3)");
        $(".logo-back img").attr("src","./Images/Logos/exodia-cyan.png");
        
        $(".logo-back img").hover(function(){
            $(this).css("box-shadow","1px 1px 5px 1px #05eeffe3");
            }, function(){
                $(this).css("box-shadow","");
            });

            $(".nav-list li a , footer li a").hover(function(){
                $(this).css("color","#05eeffe3");
            }, function(){
                 $(this).css("color","#fff");
            });   

          $('footer h4 , footer code').css({ 
            'background-image' : 'linear-gradient(to left,rgb(11, 206, 206) , #0571c3)', 
            '-webkit-background-clip': 'text', 
            '-webkit-text-fill-color': 'transparent' 
        }); 
        
        $("footer").css("border-color","#01a8b4");
            ID = 1;
        });
    }
});



/* Home Download Links */ 

document.querySelector("#visit").addEventListener("click", function() {
    window.open("https://exodia-os.github.io", "_blank");

});

/* Header -downlaod*/ 
document.querySelector("#src-code").addEventListener("click", function() {
window.open("https://github.com/Exodia-OS", "_blank");

});

/* Header-wiki*/ 
document.querySelector("#torrent-home").addEventListener("click", function() {
window.open("https://fosstorrents.com/distributions/exodia-os/", "_blank");
 
});

/* Home-archive */ 
document.querySelector("#Archive").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/archive/","_blank");
});




/* Acer-predator Download Links */ 

document.querySelector("#onedrive-Predator").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/latest/predator/", "_blank");

});

/* Acer-predator-downlaod*/ 
document.querySelector("#google-drive-Predator").addEventListener("click", function() {
window.open("https://drive.google.com/drive/folders/1RHyGWLOTf4mtoVpHpGzNOJRZ8UnZI2PR?usp=sharing", "_blank");

});

/* Acer-predator*/ 
document.querySelector("#torrent-Predator").addEventListener("click", function() {
window.open("https://fosstorrents.com/distributions/exodia-os/", "_blank");
 
});


/* Acer-archive */ 
document.querySelector("#Archive-Acer").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/archive/","_blank");
});







/* wireless Download Links */ 

document.querySelector("#onedrive-Wireless").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/latest/wireless/", "_blank");

});

/* Wireless-downlaod*/ 
document.querySelector("#google-drive-Wireless").addEventListener("click", function() {
window.open("https://drive.google.com/drive/folders/1zPh229ZV360hwpbQTSQU9UXfQKYI0-90?usp=sharing", "_blank");

});

/* Wireless-predator*/ 
document.querySelector("#torrent-Wireless").addEventListener("click", function() {
window.open("https://fosstorrents.com/distributions/exodia-os/", "_blank");
 
});

/* Wireless-archive */ 
document.querySelector("#Archive-Wireless").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/archive/","_blank");
});

window.onload = function() {
    var title = document.getElementById("pageTitle");
    var img = document.createElement("img");
    img.src = "./Images/00xWolf-circle.png";
    img.className = "page-icon";
    title.insertBefore(img, title.firstChild);

    // Initialize Typed.js for the auto-type effect
    var options = {
        strings: ["Projects"], // Add your desired texts here
        typeSpeed: 120,
        backSpeed: 120,
        loop: true
    };

    var typed = new Typed(".auto-type-projects", options);
};

