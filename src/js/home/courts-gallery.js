var webflow = webflow || [];
Webflow.push(function() {

  var galleryThumbs1 = new Swiper('.gallery-thumbs1', {
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
  var galleryTop1 = new Swiper('.gallery-top1', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs
    }
  });
  
  var galleryThumbs2 = new Swiper('.gallery-thumbs2', {
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
  var galleryTop2 = new Swiper('.gallery-top2', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs
    }
  });

  let gallery3 = document.querySelector('.gallery-thumbs3');
  let galleryswiper3 = document.querySelector('.gallery-top3');

  if(gallery3 && galleryswiper3){
    var galleryThumbs3 = new Swiper('.gallery-thumbs3', {
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
    var galleryTop3 = new Swiper('.gallery-top3', {
      spaceBetween: 10,
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }


    
});
