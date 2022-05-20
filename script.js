$(document).ready(function() {





    var swiper = new Swiper(".review-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1300: {
                slidesPerView: 3,
            },
        },
    });

    window.sr = ScrollReveal();

    sr.reveal('.animate-left', {
        origin: 'left',
        duration: 1000,
        distance: '5rem',
        delay: 300
    });
    sr.reveal('.animate-right', {
        origin: 'right',
        duration: 1000,
        distance: '5rem',
        delay: 600
    });
    sr.reveal('.animate-top', {
        origin: 'top',
        duration: 1000,
        distance: '5rem',
        delay: 300
    });
    sr.reveal('.animate-bottom', {
        origin: 'bottom',
        duration: 1000,
        distance: '5rem',
        delay: 300
    });

    sr.reveal('.animate-top-icon', {
        origin: 'top',
        duration: 1000,
        distance: '2rem',
        delay: 900
    });
    sr.reveal('.animate-bottom-icon', {
        origin: 'bottom',
        duration: 1000,
        distance: '2rem',
        delay: 900
    });


    ScrollReveal().reveal('.delay1', { delay: 250 });
    ScrollReveal().reveal('.delay2', { delay: 500 });
    ScrollReveal().reveal('.delay3', { delay: 750 });
    ScrollReveal().reveal('.delay4', { delay: 1000 });
    ScrollReveal().reveal('.delay5', { delay: 1250 });
    ScrollReveal().reveal('.delay6', { delay: 1500 });



});