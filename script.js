document.addEventListener("DOMContentLoaded", function() {
    const navHeight = document.querySelector('.nav-ct').offsetHeight;
    const offset = 15; 
  
    const links = document.querySelectorAll('.nav-menu a');
  
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.offsetTop - navHeight - offset;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  });

ScrollReveal().reveal('.header-main');
ScrollReveal().reveal('.cursos', {delay:200, easing: 'ease-in-out', reset: true});
ScrollReveal().reveal('.autores', {delay:100, easing: 'ease-in-out', reset: true});
ScrollReveal().reveal('.footer-end', {delay:100, easing: 'ease-in-out', reset: true});