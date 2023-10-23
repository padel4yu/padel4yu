var webflow = webflow || [];
Webflow.push(function() {

  var Swipes = new Swiper('.home-slider-projects', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
      // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
    
});
