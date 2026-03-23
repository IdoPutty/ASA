/* ─────────────────────────────────────────
   NAV.JS
   – Scroll-based header state (transparent / solid)
   – Mobile menu toggle
   – Smooth close on anchor link click
   ───────────────────────────────────────── */

(function () {
  'use strict';

  const header     = document.getElementById('site-header');
  const toggle     = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const hero       = document.getElementById('hero');

  if (!header || !toggle || !mobileMenu) return;

  /* ── Scroll state ────────────────────── */
  function updateHeader() {
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    const scrolled   = window.scrollY > 60;

    header.classList.toggle('scrolled', scrolled);
    // Keep white text while over the hero image
    header.classList.toggle('hero-zone', heroBottom > 0);
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader(); // Run once on load

  /* ── Mobile menu ─────────────────────── */
  function openMenu() {
    mobileMenu.classList.add('is-open');
    mobileMenu.removeAttribute('aria-hidden');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close on mobile link click
  mobileMenu.querySelectorAll('.mobile-menu-link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  /* ── Scroll reveal ───────────────────── */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length > 0) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ── Add reveal classes to sections ─── */
  // About content
  var aboutCols = document.querySelectorAll('.about-image-col, .about-content-col');
  aboutCols.forEach(function (el) { el.classList.add('reveal'); });

  // Projects cards with stagger
  var projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.classList.add('reveal-stagger');
    projectsGrid.querySelectorAll('.project-card').forEach(function (card) {
      card.classList.add('reveal');
    });
  }

  // Contact elements
  var contactHeading = document.querySelector('.contact-heading');
  var contactGrid    = document.querySelector('.contact-grid');
  if (contactHeading) contactHeading.classList.add('reveal');
  if (contactGrid)    contactGrid.classList.add('reveal');

}());
