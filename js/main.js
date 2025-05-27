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

  document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

  // Form field focus visual effect
  document.querySelectorAll('.mini-demo-form input').forEach(input => {
    input.addEventListener('focus', () => input.classList.add('focused'));
    input.addEventListener('blur', () => input.classList.remove('focused'));
  });
});

window.setLang = function(lang) {
  const el = document.querySelector('.lang-switch');
  if (el) {
    el.classList.remove('en', 'ru', 'uk');
    el.classList.add(lang);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const sound = document.getElementById('hover-sound');
  document.querySelectorAll('.mite-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      if (sound) {
        sound.currentTime = 0;
        sound.play();
      }
    });
  });
});



