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

  // Маска телефона (упрощённая, адаптированная под +351 формат)
  document.getElementById('phone').addEventListener('input', function (e) {
    this.value = this.value
      .replace(/[^\d+]/g, '')                // Удаляем лишние символы
      .replace(/(\+\d{3})(\d{3})(\d{3})(\d{3})?/, '$1 $2 $3 $4') // Пример: +351 961 234 567
      .substring(0, 17);
  });

  // Проверка чекбокса
  function validateForm() {
    const checkbox = document.getElementById('privacy');
    if (!checkbox.checked) {
      alert('Please agree to the Privacy Policy before submitting.');
      return false;
    }
    return true;
  }

  document.getElementById('miteForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value
    };

    fetch("https://formsubmit.co/ajax/d156fdd8e48a38c564ead43ca8e0caf4b", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        document.getElementById('form-success').style.display = 'block';
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      console.error("Form submission error:", error);
      alert("An error occurred. Please check your connection.");
    });
  });




