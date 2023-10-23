var webflow = webflow || [];
Webflow.push(function() {
    
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