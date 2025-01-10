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

window.onload = function() {
    var title = document.getElementById("pageTitle");
    var img = document.createElement("img");
    img.src = "./Images/00xWolf-circle.png";
    img.className = "page-icon";
    title.insertBefore(img, title.firstChild);

    // Initialize Typed.js for the auto-type effect
    var options = {
        strings: ["00xWolf --setup"], // Add your desired texts here
        typeSpeed: 120,
        backSpeed: 120,
        loop: true
    };

    var typed = new Typed(".setup", options);
};

document.addEventListener('DOMContentLoaded', () => {
    function createImageUpdater(imagesDir, images, imgElementId, interval) {
        const imgElement = document.getElementById(imgElementId);
        let currentIndex = 0;

        function updateImage() {
            imgElement.src = imagesDir + images[currentIndex];
            currentIndex = (currentIndex + 1) % images.length;
        }

        // Initial image update
        updateImage();

        // Update image every specified interval
        setInterval(updateImage, interval);
    }

    const oldSetupImages = ['1.png', '2.png', '3.png', '4.png', '5.png'];
    const newSetupImages = ['1.png', '2.png', '3.png', '4.png'];
    const PiImages = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'];
    const newSetupImagesNEWROOM = ['0.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'];
    const ALFAImages = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png'];

    createImageUpdater('./Images/MySetup/OldSetup/', oldSetupImages, 'setup-image-old', 3000);
    createImageUpdater('./Images/MySetup/NewSetup-Old-Room/', newSetupImages, 'setup-image-new', 3000);
    createImageUpdater('./Images/MySetup/NewSetup-New-Room/', newSetupImagesNEWROOM, 'setup-image-new-new-room', 3000);
    createImageUpdater('./Images/MySetup/Pi-4/', PiImages, 'Pi-4-image', 3000);
    createImageUpdater('./Images/MySetup/ALFA-Adapter/', ALFAImages, 'ALFA-image', 3000);
});

var ID = 1;

/* new-setup */
$("#new-setup").click(function (){
    if (ID == 1) {
    } else {
        $(".active").fadeOut(1000, function() {
            $(this).removeClass("active");
            $("#Home-ed-cont").fadeIn(1000);
            $("#Home-ed-cont").addClass("active");

            ID = 1;
        });
    }
});



/* old-setup */
$("#old-setup").click(function (){
    if (ID == 2) {
    } else {

        $(".active").fadeOut(1000, function() {
            $(this).removeClass("active");
            $("#predator-ed-cont").fadeIn(1000,)
            $('#predator-ed-cont').addClass("active");
            $('#predator-ed-cont').removeClass("disactive");

            ID = 2;
        });
    }
});

/* Wireless-ed */


$("#Wireless-ed").click(function (){
    if (ID == 3) {
    } else {
        $(".active").fadeOut(1000, function() {
            $(this).removeClass("active");
            $("#wireless-ed-cont").fadeIn(1000,)
            $('#wireless-ed-cont').addClass("active");
            $('#wireless-ed-cont').removeClass("disactive");

            /* Wireless Theme edition*/
            $(".nav-list").css("border-color","#a4133c");
            $(".nav .nav-btn").css("background-image","linear-gradient(to left,#590d22 , #a4133c)");
            $(".logo-back img").attr("src","./Images/Logos/exodia-red.png");

            $(".logo-back img").hover(function(){
                $(this).css("box-shadow","1px 1px 5px 1px #a4133c");
            }, function(){
                $(this).css("box-shadow","");
            });

            $(".nav-list li a , footer li a").hover(function(){
                $(this).css("color","#a4133c");
            }, function(){
                $(this).css("color","#fff");
            });

            $('footer h4 , footer code').css({
                'background-image' : 'linear-gradient(to left,#590d22 , #a4133c)',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent'
            });

            $("footer").css("border-color","#a4133c");
            ID = 3;
        });
    }
});


/* Dark-ed*/
$("#Dark-ed").click(function (){
    if (ID == 4) {
    } else {

        $(".active").fadeOut(1000, function() {
            $(this).removeClass("active");
            $("#Dark-ed-cont").fadeIn(1000,)
            $('#Dark-ed-cont').addClass("active");
            $('#Dark-ed-cont').removeClass("disactive");

            /* Wireless Theme edition*/
            $(".nav-list").css("border-color","#0466c8");
            $(".nav .nav-btn").css("background-image","linear-gradient(to left,#010139  , #0466c8)");
            $(".logo-back img").attr("src","./Images/Logos/exodia-blue.png");

            $(".logo-back img").hover(function(){
                $(this).css("box-shadow","1px 1px 5px 1px #0466c8");
            }, function(){
                $(this).css("box-shadow","");
            });

            $(".nav-list li a, footer li a").hover(function(){
                $(this).css("color","#0466c8");
            }, function(){
                $(this).css("color","#fff");
            });

            $('footer h4 , footer code').css({
                'background-image' : 'linear-gradient(to left,#010139 , #0466c8)',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent'
            });

            $("footer").css("border-color","#0466c8");

            ID = 4;
        });
    }
});



/* ARM-ed*/
$("#ARM-ed").click(function (){
    if (ID == 5) {
    } else {
        $(".active").fadeOut(1000, function() {
            $(this).removeClass("active");
            $("#ARM-ed-cont").fadeIn(1000,)
            $('#ARM-ed-cont').addClass("active");
            $('#ARM-ed-cont').removeClass("disactive");

            /* ARM Theme edition*/
            $(".nav-list").css("border-color","#4ad66d");
            $(".nav .nav-btn").css("background-image","linear-gradient(to left,#10451d , #4ad66d)");
            $(".logo-back img").attr("src","./Images/Logos/exodia-green.png");


            $(".logo-back img").hover(function(){
                $(this).css("box-shadow","1px 1px 5px 1px #4ad66d");
            }, function(){
                $(this).css("box-shadow","");
            });

            $(".nav-list li a, footer li a").hover(function(){
                $(this).css("color","#4ad66d");
            }, function(){
                $(this).css("color","#fff");
            });

            $('footer h4 , footer code').css({
                'background-image' : 'linear-gradient(to left,#10451d , #4ad66d)',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent'
            });

            $("footer").css("border-color","#4ad66d");
            ID = 5;
        });
    }
});