
import '../main.scss'

window.Webflow ||= [];
window.Webflow.push(() =>{
      
  // Adding titles to images
  $(document).ready(function(){
      $('img').each(function(){
        // take alt text of each image
          let imageAltText = $(this).attr('alt');
        // add as title to each image
          $(this).attr('title', imageAltText);
      });
  });

    
  // hide default weglot language swither
  setTimeout(function(){ document.querySelector('.weglot-container').style.display = 'none'; }, 1000);

    
  // here we are watching for style changes on the mobile menu w-nav-overlay-0
  // we also added a settimeout to check for this element every 500ms
  // because he is not loaded on the page instantly
  // when the display property is none we disable page scroll and set
  // hamburger menu icon checkbox to true
  // when the display property is not false we enable page skroll
  // and set the hamburger checkbox to false
  // this was implemented because the hamburger animation triger
  // menu can close on every link click, language change and we want to monitor that
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if(mutation.attributeName === 'style'){
        var targetNode = document.getElementById('w-nav-overlay-0');
        if (targetNode) {
          // Check if the 'display' style property has been changed
          var currentDisplayStyle = targetNode.style.display;
          var previousDisplayStyle = mutation.oldValue ? mutation.oldValue : '';
          
          if (currentDisplayStyle === 'none') {
              let hamburgerButton = $('#main-menu-hamburger')
              hamburgerButton.prop('checked', false);
              document.body.style.overflow = 'auto';
          } else {
              let hamburgerButton2 = $('#main-menu-hamburger')
              hamburgerButton2.prop('checked', true);
              document.body.style.overflow = 'hidden';
          }
        }
      }
    });    
  });
    
  // Notify me of style changes
  var observerConfig = {
    attributes: true, 
    attributeFilter: ["style"]
  };
  
  function addObserverIfDesiredNodeAvailable() {
    var targetNode = document.getElementById('w-nav-overlay-0');
    if(!targetNode) {
        //The node we need does not exist yet.
        //Wait 500ms and try again
        window.setTimeout(addObserverIfDesiredNodeAvailable,500);
        return;
    }
    observer.observe(targetNode, observerConfig);
  }
  addObserverIfDesiredNodeAvailable();
      


  // when a page has scrolled more than 100px from the top
  // we add a is-scrolled class to the main menu
  // and we remove this class when the page has scrolled back to the top
  // we added a css shadow to this class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.navbar').addClass('is-scrolled');
    } else {
      $('.navbar').removeClass('is-scrolled');
    }
  });

});




  // get height and multiply by 1% to get a vh value
  let vh = window.innerHeight * 0.01;
  // set the value to custom property --vh
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  // Listen for window resize event
  window.addEventListener('resize', () => {
    // Repeat above
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });