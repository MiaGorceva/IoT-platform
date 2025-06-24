  window.addEventListener('DOMContentLoaded', () => {
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

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

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
    const form = document.getElementById('miteForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const phone = this.phone.value.trim();
        const privacy = this.privacy.checked;
        const honey = this._honey.value.trim();

        if (honey !== "") return; // bot detected

        if (!name || !email || !phone || !privacy) {
          const errorBox = document.getElementById('form-error');
            errorBox.textContent = "Please fill in all required fields and agree to the Privacy Policy.";
            errorBox.style.display = "block";
          return;
        }

        const formData = { name, email, phone };
        errorBox.style.display = "none"; // Скрыть, если всё ок

        fetch("https://formsubmit.co/ajax/d156fdd8e48a38c564ead43ca8e0caf4", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        .then(res => {
          if (res.ok) {
            this.reset();
            document.getElementById("form-success").style.display = "block";
          } else {
            errorBox.textContent("Something went wrong. Please try again later.");
          }
        })
        .catch(() => {
          errorBox.textContent("Connection error. Please try again.");
        });
      });
    }

    // 🔹 8. Swiper init
    if (typeof Swiper !== 'undefined') {
      const swiper = new Swiper('.swiper', {
        loop: true,
        spaceBetween: 24,
        slidesPerView: 1.2,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.2 },
        }
      });
    }
  });

  // 🔹 9. Language switcher (global function)
  window.setLang = function (lang) {
    const el = document.querySelector('.lang-switch');
    if (el) {
      el.classList.remove('en', 'ru', 'uk');
      el.classList.add(lang);
    }
  };