window.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Fade-in sections on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.section-content').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });

  // Form field focus visual effect
  document.querySelectorAll('.mini-demo-form input').forEach(input => {
    input.addEventListener('focus', () => input.classList.add('focused'));
    input.addEventListener('blur', () => input.classList.remove('focused'));
  });
});
