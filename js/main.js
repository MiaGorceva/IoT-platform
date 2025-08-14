/* MITE — main.js (clean, reusable) */
window.addEventListener('DOMContentLoaded', () => {
  // icons
  if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();

  // active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav .nav-menu li a[href^="#"]');
  function onScroll() {
    const y = window.scrollY + 80;
    sections.forEach((s) => {
      if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
        navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${s.id}`));
      }
    });
  }
  if (sections.length && navLinks.length) { window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); }

  // burger menu (no HTML changes needed)
  (function injectBurger() {
    const header = document.querySelector('.site-header .header-inner');
    const menu = document.querySelector('.nav-menu');
    if (!header || !menu) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle menu');
    btn.className = 'nav-burger';
    btn.textContent = 'Menu';
    btn.style.cssText = 'background:#111;border:1px solid rgba(255,255,255,.15);color:#fff;border-radius:10px;padding:.5rem .7rem;display:none';
    header.appendChild(btn);
    const mq = window.matchMedia('(max-width: 768px)');
    const sync = () => { btn.style.display = mq.matches ? 'inline-block' : 'none'; if (!mq.matches) menu.classList.remove('open'); };
    if (mq.addEventListener) mq.addEventListener('change', sync); else if (mq.addListener) mq.addListener(sync);
    sync();
    btn.addEventListener('click', () => menu.classList.toggle('open'));
  })();

  // cookie banner
  const banner = document.getElementById('cookie-banner');
  const accept = document.getElementById('cookie-accept');
  if (banner && accept) {
    const urlParams = new URLSearchParams(location.search);
    const force = urlParams.get('debug-cookies') === '1';
    const accepted = localStorage.getItem('cookiesAccepted') === '1';
    if (force || !accepted) setTimeout(() => banner.classList.add('show'), 600);
    accept.addEventListener('click', () => { localStorage.setItem('cookiesAccepted', '1'); banner.classList.remove('show'); });
  }

  // fade-in on view
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.2 });
  document.querySelectorAll('.fade-in, .step-item').forEach((el) => io.observe(el));

  // phone mask
  document.querySelectorAll('input[type="tel"]').forEach((phone) => {
    phone.addEventListener('input', function () {
      this.value = this.value.replace(/[^\d+]/g, '').replace(/(\+\d{3})(\d{3})(\d{3})(\d{3})?/, '$1 $2 $3 $4').substring(0, 17);
    });
  });

  // forms
  document.querySelectorAll('form.miteForm').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const error = form.querySelector('#form-error') || document.getElementById('form-error');
      const success = form.querySelector('#form-success') || document.getElementById('form-success');
      const name = form.querySelector('input[name="name"]')?.value.trim();
      const email = form.querySelector('input[name="email"]')?.value.trim();
      const phone = form.querySelector('input[name="phone"]')?.value.trim();
      const privacy = form.querySelector('input[name="privacy"]')?.checked;
      const gotcha = form.querySelector('input[name="_gotcha"], input[name="_honey"]')?.value.trim();
      if (gotcha) return;
      if (!name || !email || !phone || !privacy) {
        if (error) { error.textContent = "Please fill in all fields and agree to the Privacy Policy."; error.style.display = "block"; }
        if (success) { success.style.display = "none"; }
        return;
      }
      if (error) error.style.display = "none";
      try {
        const res = await fetch("https://formspree.io/f/mjkranro", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, phone }) });
        if (res.ok) { form.reset(); if (success) success.style.display = "block"; }
        else if (error) { error.textContent = "Something went wrong. Please try again later."; error.style.display = "block"; }
      } catch (err) {
        if (error) { error.textContent = "Connection error. Please try again."; error.style.display = "block"; }
      }
    });
  });

  // Swiper init (if included)
  if (window.Swiper) {
    new Swiper('.case-carousel', { loop:true, spaceBetween:24, slidesPerView:'auto', centeredSlides:false,
      pagination:{ el:'.case-pagination', clickable:true }, navigation:{ nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev' } });
  }

  // language dropdown (если есть)
  const globeWrap = document.querySelector('.globe-wrap');
  const langOptions = document.querySelector('.lang-options');
  if (globeWrap && langOptions) {
    globeWrap.addEventListener('click', () => langOptions.classList.toggle('hidden'));
    document.addEventListener('click', (e) => { if (!globeWrap.contains(e.target) && !langOptions.contains(e.target)) langOptions.classList.add('hidden'); });
  }
});
