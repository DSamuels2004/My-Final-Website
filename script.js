/* Add shine effect to navbar links on hover */
document.addEventListener('DOMContentLoaded', function() {
  const navbarLinks = document.querySelectorAll('.navbar a');

  navbarLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.classList.add('shine');
    });

    link.addEventListener('animationend', function() {
      this.classList.remove('shine');
    });
  });
});