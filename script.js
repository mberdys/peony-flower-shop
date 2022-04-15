//przewijanie strony
$(document).ready(function() {
    $('a[href*="#"]').click(function(e) {
        var url = $(this).attr('href');
        var hash = url.substring(url.indexOf('#'));
        $('html, body').animate({
            scrollTop: ($(hash).offset().top - 50)
        }, 1000);
    });
});


//top drawer
$(document).ready(function() {
  $('.drawer').drawer();
});

$('.drawer').drawer({
    class: {
      nav: 'drawer-nav',
      toggle: 'drawer-toggle',
      overlay: 'drawer-overlay',
      open: 'drawer-open',
      close: 'drawer-close',
      dropdown: 'drawer-dropdown'
    },
    iscroll: {
      mouseWheel: true,
      preventDefault: false
    },
    showOverlay: true
});

$(document).ready(function() {
    $('a[href*="#"]').click(function(e) {
        $('.drawer').drawer('close');
    });
});


//przesuwanie/wysuwanie elementów
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const upperSliders = document.querySelectorAll(".slide-up");
const headerButtons = document.querySelectorAll(".header-btn"); 

const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -150px 0px'
};

const appearOnScroll = new IntersectionObserver (function(
    entries, appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

upperSliders.forEach(upperSlider => {
    appearOnScroll.observe(upperSlider);
});

headerButtons.forEach(headerButton => {
    appearOnScroll.observe(headerButton);
});
 

//swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.2,
    spaceBetween: 150,
    slidesPerGroup: 1, 
    speed: 1000,
    loop: true,
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev"
    },
    centeredSlides: true,
    breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 50
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 100
        }
    },
});

swiper.on('activeIndexChange', function () {
    const downSliders = document.querySelectorAll(".slide-down");
    //const activeSlide = document.querySelector('.swiper-slide-active');

    downSliders.forEach(function (downSlider) {
        //if (activeSlide) {
            downSlider.classList.add('appear');
        //} else {
            //downSlider.classList.remove('appear');
        //};        
    });
    console.log('index');
});


//Click prevent default action
$("a").click(function(event){
    event.preventDefault();
});