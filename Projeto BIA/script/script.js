$(document).ready(function(){
    //carrossel 
    $('.owl-carousel').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 0,
        nav: true,
        navSpeed: 1000,
        navText: ['<img src="imagens/left-chevron.svg">','<img src="imagens/right-chevron.svg">'],
        dots: true,
        dotsSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10
    });
});