var webflow = webflow || [];
Webflow.push(function() {

  var galleryThumbs = new Swiper('.gallery-thumbs1', {
    spaceBetween: 20,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      767: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    }
  });
  var galleryTop = new Swiper('.gallery-top1', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs
    }
  });
  
  var galleryThumbs = new Swiper('.gallery-thumbs2', {
    spaceBetween: 20,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      767: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    }
  });
  var galleryTop = new Swiper('.gallery-top2', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs
    }
  });
    
});
