

var webflow = webflow || [];
Webflow.push(function() {

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
    
});



