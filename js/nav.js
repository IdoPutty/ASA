/* ─────────────────────────────────────────
   NAV.JS
   – Scroll-based header state
   – Mobile menu toggle
   – Scroll reveal (safe: falls back to visible)
   ───────────────────────────────────────── */

(function () {
  'use strict';

  var header     = document.getElementById('site-header');
  var toggle     = document.getElementById('nav-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var hero       = document.getElementById('hero');

  if (!header || !toggle || !mobileMenu) return;

  /* ── Scroll state ─────────────────────── */
  function updateHeader() {
    var heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    header.classList.toggle('scrolled',   window.scrollY > 60);
    header.classList.toggle('hero-zone',  heroBottom > 0);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ── Mobile menu ──────────────────────── */
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
    mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll('.mobile-menu-link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) closeMenu();
  });

  /* ── Scroll reveal ────────────────────────────────────────────────────
     Safe pattern: elements start visible (no opacity:0 until observer
     confirms it can watch them), then the observer reveals them on scroll.
     Falls back instantly if IntersectionObserver isn't available.
  ─────────────────────────────────────────────────────────────────────── */
  var revealEls = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || revealEls.length === 0) {
    // Instant fallback — just show everything
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold:  0.05,                 /* trigger as soon as 5 % is visible */
    rootMargin: '0px 0px -40px 0px'  /* start slightly before element arrives */
  });

  revealEls.forEach(function (el) {
    // If already visible in viewport, reveal immediately
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible');
    } else {
      observer.observe(el);
    }
  });

  /* ── Attach reveal classes ────────────── */
  document.querySelectorAll('.about-image-col, .about-content-col').forEach(function (el) {
    el.classList.add('reveal');
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) { el.classList.add('is-visible'); }
    else { observer.observe(el); }
  });

  var grid = document.getElementById('projects-grid');
  if (grid) {
    grid.classList.add('reveal-stagger');
    grid.querySelectorAll('.project-card').forEach(function (card) {
      card.classList.add('reveal');
      var rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight) { card.classList.add('is-visible'); }
      else { observer.observe(card); }
    });
  }

  /* ── Contact: NO reveal — always visible ──
     These are critical sections; don't risk them staying hidden.
  ──────────────────────────────────────────── */

}());
