'use strict';

const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    effect: 'fade',
    loop: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
  
  });

  window.onload = function() {
    let header = document.getElementsByClassName('nav');
    let headerBottom = header[0].getBoundingClientRect().bottom;

    window.onscroll = e => {
        if(headerBottom < document.documentElement.scrollTop){
            header[0].style.position = 'fixed';
            header[0].style.top = 0;
        }else{
            header[0].style.position = 'static';
            header[0].style.top = 'auto';
        }  
    }
};