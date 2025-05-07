window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    const contactSection = document.querySelector('#page4');
    const rect = contactSection.getBoundingClientRect();
  
    if (rect.top <= 100 && rect.bottom >= 100) {
      nav.classList.add('white-nav');
    } else {
      nav.classList.remove('white-nav');
    }
  });
  