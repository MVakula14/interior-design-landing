document.addEventListener('DOMContentLoaded', () => {

  // ===================== MENU =====================
  const burger = document.querySelector('.icon-menu');
  const menuBody = document.querySelector('.menu__body');
  const overlay = document.querySelector('.menu__overlay');

  const openMenu = () => {
    burger.classList.add('active');
    menuBody.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('lock');
  };

  const closeMenu = () => {
    burger.classList.remove('active');
    menuBody.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('lock');
  };

  burger.addEventListener('click', () => {
    if (menuBody.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ===================== HEADER SCROLL =====================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  });

  // ===================== PHONE INPUT =====================
  const phoneInput = document.querySelector("#phone");
  if (phoneInput) {
    const iti = window.intlTelInput(phoneInput, {
      initialCountry: "ua",
      preferredCountries: ["ua", "us", "pl"],
      separateDialCode: true,
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18/build/js/utils.js"
    });
  }

  // ===================== REVEAL ON SCROLL =====================
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target); // відключаємо після появи
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

});