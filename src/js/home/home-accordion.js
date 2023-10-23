

var webflow = webflow || [];
Webflow.push(function() {

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

      
});