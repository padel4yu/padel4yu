
import '../home.scss'


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

  var Swipes = new Swiper('.home-slider-projects', {
    direction: 'horizontal',
    loop: false,
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

  // this function will check if the cookie "popup" exist
  // and if it does not it will show the popup form
  // when the form is submited we set the popup coockie
  // with the expiration date of 24h
  // Function to check if the user has scrolled 30% down the page
  function handleScroll() {
    // Calculate the scroll percentage
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    // Check if the scroll percentage is greater than or equal to 30
    if (scrollPercentage >= 30) {
      // Trigger your function here
      showPopupModal();
      
      // Remove the scroll event listener to prevent further triggers (optional)
      window.removeEventListener('scroll', handleScroll);
    }
  }

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Your function to execute when the user has scrolled 30% down the page
  function showPopupModal() {
    // Function to check if the "popup" cookie exists
    function checkPopupCookie() {
      const cookies = document.cookie.split('; ');
      for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === "popup") {
          return true;
        }
      }
      return false;
    }
  
    // Show the "popup" form if the "popup" cookie does not exist
    if (!checkPopupCookie()) {
      document.querySelector('.section_popup').style.display = 'flex';
    }
  
    // Submit form handler
    $("#wf-form-Popup-form").on("submit", function(e) {
      // Set the "popup" cookie with a 24-hour expiration
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000); // 24 hours
      document.cookie = "popup=some_value; expires=" + expirationDate.toUTCString() + "; path=/";
    });
  }

  // faq accordion
  let faqAccordion = document.querySelector('[data-accordion="faq-accordion"]');
  let faqItems = faqAccordion.querySelectorAll('.home-faq-accordion-box');

  faqItems.forEach(item => {
    let content = item.querySelector('.home-faq-accordion-answer');


    item.addEventListener('click', e => {
      if (e.currentTarget.classList.contains('open')) {
        e.currentTarget.classList.remove('open');
      } else {
        faqItems.forEach(el => {
          el.classList.remove('open');
        });
        e.currentTarget.classList.add('open');
      }
    });
  });
  
  //home process accordion
  
  let processAccordion = document.querySelector('[data-accordion="process-accordion"]');
  let processItems = processAccordion.querySelectorAll('.home-process-accordion-box');

  processItems.forEach(item => {
    let content = item.querySelector('.home-process-accordion-answer');


    item.addEventListener('click', e => {
      if (e.currentTarget.classList.contains('open')) {
          e.currentTarget.classList.remove('open');
      } else {
        processItems.forEach(el => {
          el.classList.remove('open');
        });
        e.currentTarget.classList.add('open');
      }
    });
  });
    
  // numbers increment function
  // the startCounting function takes an element ID as a parameter, checks if the element is visible on the screen using the isElementVisible function
  //The isElementVisible function checks if an element is in the viewport by comparing its position and dimensions with the window size
  // we added the scroll event listener to trigger the counting function when the user scrolls the page.
  //the data-visible attribute is used to track whether the element has been visible. The function will only execute if the element is visible and doesn't have the data-visible attribute set. It also increments the numbers by whole numbers (1 per iteration) and uses a 10-millisecond interval for a smoother animation.
  function startCounting(elementId) {
      var element = document.getElementById(elementId);
      if (isElementVisible(element) && !element.getAttribute('data-visible')) {
          element.setAttribute('data-visible', true);
          var targetNumber = parseInt(element.textContent);
          var currentTime = 0;
          var increment = 1; // Increment value by 1 (whole number) per iteration
          var interval = setInterval(function() {
              if (currentTime > targetNumber) {
                  clearInterval(interval);
              } else {
                  element.textContent = currentTime;
                  currentTime += increment;
              }
          }, 100); // Run the interval every 10 milliseconds for smoother animation
      }
  }

  function isElementVisible(element) {
      var rect = element.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      var windowWidth = window.innerWidth || document.documentElement.clientWidth;
      var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
      var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
      return vertInView && horInView;
  }

  // Example usage: Call startCounting function when an element with id "exampleElement" is first time visible on the screen
  window.addEventListener('scroll', function() {
      startCounting('home-projects-completed-numbers');
      startCounting('home-projects-opening-numbers');
  });


});
