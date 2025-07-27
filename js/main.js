// 🔹 JS Cleaned: Removed dynamic language switching logic

//window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
  // 🔹 1. Lucide icons init
  if (window.lucide) {
    lucide.createIcons();
  }

  // 🔹 2. Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 🔹 3. Fade-in effect on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in, .step-item').forEach(el => observer.observe(el));

  // 🔹 4. Input focus effect for demo form
  document.querySelectorAll('.mini-demo-form input').forEach(input => {
    input.addEventListener('focus', () => input.classList.add('focused'));
    input.addEventListener('blur', () => input.classList.remove('focused'));
  });

  // 🔹 5. Icon hover sound (optional)
  const sound = document.getElementById('hover-sound');
  document.querySelectorAll('.mite-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      if (sound) {
        sound.currentTime = 0;
        sound.play();
      }
    });
  });

  // 🔹 6. Phone input mask
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      this.value = this.value
        .replace(/[^\d+]/g, '')
        .replace(/(\+\d{3})(\d{3})(\d{3})(\d{3})?/, '$1 $2 $3 $4')
        .substring(0, 17);
    });
  }

  // 🔹 7. FormSubmit AJAX logic with honeypot
  const formEl = document.getElementById('miteForm');
  if (formEl) {
    formEl.addEventListener('submit', function(e) {
      e.preventDefault();

      const form = this;
      const error = document.getElementById('form-error');
      const success = document.getElementById('form-success');

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const privacy = form.privacy.checked;
      const gotcha = form._gotcha.value.trim();

      if (gotcha !== "") return;
      if (!name || !email || !phone || !privacy) {
        error.textContent = "Please fill in all fields and agree to the Privacy Policy.";
        error.style.display = "block";
        success.style.display = "none";
        return;
      }

      error.style.display = "none";

      const formData = { name, email, phone };

      fetch("https://formspree.io/f/mjkranro", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(res => {
        if (res.ok) {
          form.reset();
          success.style.display = "block";
        } else {
          error.textContent = "Something went wrong. Please try again later.";
          error.style.display = "block";
        }
      })
      .catch(() => {
        error.textContent = "Connection error. Please try again.";
        error.style.display = "block";
      });
    });
  }

  // 🔹 8. Swiper init (basic and case-carousel)

  const caseSwiper = new Swiper('.case-carousel', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: false,
    pagination: {
      el: '.case-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      }
    }
  });


  // 🔹 9. Highlight active nav link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav .nav-menu li a[href^='#']");

  function onScroll() {
    let scrollPos = window.scrollY + 80;
    sections.forEach(section => {
      const id = section.getAttribute("id");
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});
// 🔹 10. Toggle language options
const globeWrap = document.querySelector('.globe-wrap');
const langOptions = document.querySelector('.lang-options');

if (globeWrap && langOptions) {
  globeWrap.addEventListener('click', () => {
    langOptions.classList.toggle('hidden');
  });
  document.addEventListener('click', (e) => {
    if (!globeWrap.contains(e.target) && !langOptions.contains(e.target)) {
      langOptions.classList.add('hidden');
    }
  });
}