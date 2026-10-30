(function () {
  "use strict";

  const header = document.querySelector("#header");
  const toggle = document.querySelector(".header-toggle");

  function toggleMenu() {
    if (!header || !toggle) return;
    header.classList.toggle("header-show");
    toggle.classList.toggle("bi-list");
    toggle.classList.toggle("bi-x");
  }

  if (toggle) toggle.addEventListener("click", toggleMenu);

  document.querySelectorAll("#navmenu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (header && header.classList.contains("header-show")) toggleMenu();
    });
  });

  if (window.AOS) {
    window.AOS.init({ duration: 650, easing: "ease-in-out", once: true, offset: 60 });
  }

  if (window.GLightbox) {
    window.GLightbox({ selector: ".glightbox" });
  }

  const scrollTop = document.querySelector(".scroll-top");
  function updateScrollTop() {
    if (scrollTop) scrollTop.classList.toggle("active", window.scrollY > 260);
  }
  if (scrollTop) {
    scrollTop.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", updateScrollTop, { passive: true });
    updateScrollTop();
  }

  const navLinks = Array.from(document.querySelectorAll("#navmenu a[href^='#']"));
  function updateActiveNav() {
    const marker = window.scrollY + 190;
    navLinks.forEach((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      const active = marker >= target.offsetTop && marker < target.offsetTop + target.offsetHeight;
      link.classList.toggle("active", active);
    });
  }
  window.addEventListener("scroll", updateActiveNav, { passive: true });
  window.addEventListener("load", updateActiveNav);
})();
