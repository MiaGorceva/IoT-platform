// === icons ===
function refreshIcons() {
  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}
document.addEventListener('DOMContentLoaded', refreshIcons);
window.addEventListener('load', refreshIcons);

// === smooth scroll ===
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // === fade-in ===
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'));
  }, { threshold: 0.2 });
  document.querySelectorAll('.fade-in, .step-item').forEach(el => io.observe(el));

  // === phone mask ===
  const phone = document.getElementById('phone');
  if (phone) {
    phone.addEventListener('input', function () {
      this.value = this.value
        .replace(/[^\d+]/g, '')
        .replace(/(\+\d{3})(\d{3})(\d{3})(\d{3})?/, '$1 $2 $3 $4')
        .substring(0, 17);
    });
  }

  // === form ===
  const form = document.getElementById('miteForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const error = document.getElementById('form-error');
      const success = document.getElementById('form-success');

      const name = form.name?.value.trim();
      const email = form.email?.value.trim();
      const phone = form.phone?.value.trim();
      const privacy = form.privacy?.checked;
      const gotcha = form._gotcha?.value.trim();

      if (gotcha) return;
      if (!name || !email || !phone || !privacy) {
        error.textContent = "Please fill in all fields and agree to the Privacy Policy.";
        error.style.display = "block";
        success.style.display = "none";
        return;
      }

      error.style.display = "none";

      try {
        const res = await fetch("https://formspree.io/f/mjkranro", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone })
        });
        if (res.ok) {
          form.reset();
          success.style.display = "block";
        } else {
          error.textContent = "Something went wrong. Please try again later.";
          error.style.display = "block";
        }
      } catch {
        error.textContent = "Connection error. Please try again.";
        error.style.display = "block";
      }
    });
  }

  // === Swiper ===
  if (window.Swiper) {
    new Swiper('.case-carousel', {
      loop: true,
      spaceBetween: 24,
      slidesPerView: 'auto',
      centeredSlides: false,
      pagination: { el: '.case-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });
  }

  // === Active nav on scroll ===
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav .nav-menu li a[href^="#"]');
  function onScroll() {
    const y = window.scrollY + 80;
    sections.forEach(s => {
      const id = s.id;
      if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }
  window.addEventListener('scroll', onScroll);

  // === Lang dropdown ===
  const globeWrap = document.querySelector('.globe-wrap');
  const langOptions = document.querySelector('.lang-options');
  if (globeWrap && langOptions) {
    globeWrap.addEventListener('click', () => langOptions.classList.toggle('hidden'));
    document.addEventListener('click', (e) => {
      if (!globeWrap.contains(e.target) && !langOptions.contains(e.target)) {
        langOptions.classList.add('hidden');
      }
    });
  }

  // === Cookie banner ===
  (function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    if (!banner || !acceptBtn) return;

    if (!localStorage.getItem('cookiesAccepted')) {
      banner.style.display = 'flex';
      refreshIcons(); // если в баннере есть иконки Lucide
    }

    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.style.display = 'none';
    });
  })();
});
window.addEventListener('scroll', onScroll, { passive: true });
