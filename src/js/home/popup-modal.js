

// var webflow = webflow || [];
// Webflow.push(function() {

//   // this function will check if the cookie "popup" exist
//   // and if it does not, it will show the popup form
//   // when the form is submited we set the popup cookie
//   // with the expiration date of 24h
//   // Function to check if the user has scrolled 30% down the page
//   // so we cahn show the modal at that point
//   function handleScroll() {
//     // Calculate the scroll percentage
//     const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

//     // Check if the scroll percentage is greater than or equal to 30%
//     if (scrollPercentage >= 30) {
//       // Trigger your function here
//       showPopupModal();
      
//       // Remove the scroll event listener to prevent further triggers (optional)
//       window.removeEventListener('scroll', handleScroll);
//     }
//   }

//   // Attach the scroll event listener
//   window.addEventListener('scroll', handleScroll);

//   //execute function when the user has scrolled 30% down the page
//   function showPopupModal() {
//     console.log('popupShowed', popupShowed);
//     // Function to check if the "popup" cookie exists
//     function checkPopupCookie() {
//       const cookies = document.cookie.split('; ');
//       for (const cookie of cookies) {
//         const [name, value] = cookie.split('=');
//         if (name === "popup") {
//           return true;
//         }
//       }
//       return false;
//     }
  
//     // Show the "popup" form if the "popup" cookie does not exist
//     if (!checkPopupCookie()) {
//       document.querySelector('.section_popup').style.display = 'flex';
//     }
  
//     // Submit form handler
//     $("#wf-form-Popup-form").on("submit", function(e) {
//       // Set the "popup" cookie with a 24-hour expiration
//       const expirationDate = new Date();
//       expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000); // 24 hours
//       document.cookie = "popup=some_value; expires=" + expirationDate.toUTCString() + "; path=/";
//     });
//   }

//   let popupShowed = false;

//   $('#download-pdf-btn').on('click', function(e){
//     e.preventDefault();
//     popupShowed = true;
//     document.querySelector('.section_popup').style.display = 'flex';
//   });
    
// });


  