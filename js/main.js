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

document.getElementById('miteForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = this;
  const error = document.getElementById('form-error');
  const success = document.getElementById('form-success');

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const privacy = form.privacy.checked;
  const gotcha = form._gotcha.value.trim();

  if (gotcha !== "") return; // spam detected
  if (!name || !email || !phone || !privacy) {
    error.textContent = "Please fill in all fields and agree to the Privacy Policy.";
    error.style.display = "block";
    success.style.display = "none";
    return;
  }

  error.style.display = "none";

  const formData = {
    name,
    email,
    phone
  };

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

let mySwiper;

  window.addEventListener("load", function () {
    mySwiper = new Swiper('.case-carousel', {
      slidesPerView: 1.1,
      spaceBetween: 20,
      loop: false,
      centeredSlides: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });

    // Обновим Swiper после полной загрузки
    mySwiper.update();
  });

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
 // 🔹 Language switcher with memory
const langButtons = document.querySelectorAll('#langSwitcher button');
const htmlEl = document.documentElement;
const langSwitcher = document.getElementById('langSwitcher');

function setLang(lang) {
  // 1. Добавим нужный класс на блок
  if (langSwitcher) {
    langSwitcher.classList.remove('en', 'ru', 'uk');
    langSwitcher.classList.add(lang);
  }

  // 2. Обновим lang на <html>
  htmlEl.lang = lang;

  // 3. Сохраним в localStorage
  localStorage.setItem('preferredLang', lang);
}

// 4. Обработка клика по кнопкам
langButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedLang = button.getAttribute('data-lang');
    setLang(selectedLang);
  });
});

// 5. При загрузке применим сохранённый язык
const savedLang = localStorage.getItem('preferredLang');
if (savedLang) {
  setLang(savedLang);
}


    // Highlight active nav link on scroll
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
