window.addEventListener('DOMContentLoaded', () => {
  // 1) Lucide icons
  if (window.lucide?.createIcons) {
    lucide.createIcons();
  }

  // 2) Active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav .nav-menu li a[href^="#"]');
  function onScroll() {
    const y = window.scrollY + 80;
    sections.forEach(s => {
      if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
        navLinks.forEach(a =>
          a.classList.toggle('active', a.getAttribute('href') === `#${s.id}`)
        );
      }
    });
  }
  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 3) Cookie banner
  const banner = document.getElementById('cookie-banner');
  const accept = document.getElementById('cookie-accept');
  if (banner && accept) {
    if (!localStorage.getItem('cookiesAccepted')) {
      banner.classList.add('show');
    }
    accept.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', '1');
      banner.classList.remove('show');
    });
  }

  // 4) Fade-in
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'));
  }, { threshold: 0.2 });
  document.querySelectorAll('.fade-in, .step-item').forEach(el => io.observe(el));

  // 5) Phone mask
  const phone = document.getElementById('phone');
  if (phone) {
    phone.addEventListener('input', function () {
      this.value = this.value
        .replace(/[^\d+]/g, '')
        .replace(/(\+\d{3})(\d{3})(\d{3})(\d{3})?/, '$1 $2 $3 $4')
        .substring(0, 17);
    });
  }

  // 6) Form submit
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

  // 7) Swiper
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

  // 8) Language dropdown
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
});
