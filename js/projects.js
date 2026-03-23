/* ─────────────────────────────────────────
   PROJECTS.JS
   – Lightbox modal with project detail view
   – Keyboard navigation (Escape to close)
   – URL hash routing (#project-1 etc.)
   ───────────────────────────────────────── */

(function () {
  'use strict';

  /* Project data — update this array to add / edit projects.
     Images should be placed in assets/images/projects/
     and named project-01.jpg, project-02.jpg, etc.         */
  var projects = [
    {
      id: 'villa-seravezza',
      title: 'Villa Seravezza',
      category: 'Residential',
      meta: 'Tuscany, Italy · 2023',
      image: './assets/images/projects/project-01.jpg',
      imageAlt: 'Villa Seravezza — hillside residence in Tuscany',
      description: 'A hillside villa integrating local travertine with precise concrete volumes, opening the living sequence toward the Apuan Alps. The building is organized around two interlocking bars that frame a central outdoor terrace — the threshold between the inhabited interior and the cultivated landscape beyond. Materials were sourced entirely within a 40km radius of the site.'
    },
    {
      id: 'linden-house',
      title: 'The Linden House',
      category: 'Residential',
      meta: 'Tel Aviv, Israel · 2022',
      image: './assets/images/projects/project-02.jpg',
      imageAlt: 'The Linden House — urban residence in Tel Aviv',
      description: 'An urban family residence in the heart of Tel Aviv, structured around a central courtyard that draws light deep into the plan. The courtyard functions as both a thermal regulator and a social heart — the rooms of the house face inward rather than toward the street, creating a quiet domestic world within a dense urban fabric.'
    },
    {
      id: 'keren-cultural-center',
      title: 'Keren Cultural Center',
      category: 'Cultural',
      meta: 'Jerusalem, Israel · 2021',
      image: './assets/images/projects/project-03.jpg',
      imageAlt: 'Keren Cultural Center — Jerusalem',
      description: 'A community arts hub carved into a hillside site, its exposed concrete shell contrasting with the ancient stone of the surrounding neighborhood. The program — exhibition galleries, workshop studios, and a 120-seat auditorium — is distributed across three terraced levels, each opening to a different view of the city.'
    },
    {
      id: 'studio-mast',
      title: 'Studio Mast',
      category: 'Commercial',
      meta: 'Berlin, Germany · 2021',
      image: './assets/images/projects/project-04.jpg',
      imageAlt: 'Studio Mast — commercial workspace in Berlin',
      description: 'A creative studio conversion in Prenzlauer Berg — raw industrial structure preserved and amplified, new interventions in steel and glass marking a clear dialogue between old and new. The original concrete frame was left exposed throughout, while a new mezzanine level of lightweight steel and glass was inserted to double the usable floor area.'
    },
    {
      id: 'apartment-14b',
      title: 'Apartment 14B',
      category: 'Interior',
      meta: 'New York, USA · 2020',
      image: './assets/images/projects/project-05.jpg',
      imageAlt: 'Apartment 14B — interior renovation in New York',
      description: 'A Manhattan apartment stripped to its bones — a minimal intervention that restores dignity to a pre-war plan through material restraint. Original oak floors were restored, structural columns celebrated rather than hidden, and a new kitchen in pale concrete and blackened steel anchors the open living plan.'
    },
    {
      id: 'garden-pavilion',
      title: 'The Garden Pavilion',
      category: 'Landscape',
      meta: 'Copenhagen, Denmark · 2019',
      image: './assets/images/projects/project-06.jpg',
      imageAlt: 'The Garden Pavilion — landscape structure in Copenhagen',
      description: 'A contemplative garden structure in concrete and weathered Corten steel, designed to disappear into the landscape through the seasons. The pavilion shelters a single room open on three sides — a place for reading, thought, and observation of the changing light. The concrete base, cast in situ, will moss over time.'
    }
  ];

  var lightbox      = document.getElementById('lightbox');
  var lightboxClose = document.getElementById('lightbox-close');
  var lbCategory    = document.getElementById('lightbox-category');
  var lbTitle       = document.getElementById('lightbox-title');
  var lbMeta        = document.getElementById('lightbox-meta');
  var lbDesc        = document.getElementById('lightbox-desc');
  var lbImg         = document.getElementById('lightbox-img');
  var cards         = document.querySelectorAll('.project-card');

  if (!lightbox || cards.length === 0) return;

  var lastFocused = null;

  /* ── Open lightbox ───────────────────── */
  function openLightbox(index) {
    var p = projects[index];
    if (!p) return;

    lbCategory.textContent = p.category;
    lbTitle.textContent    = p.title;
    lbMeta.textContent     = p.meta;
    lbDesc.textContent     = p.description;
    lbImg.src              = p.image;
    lbImg.alt              = p.imageAlt;

    lastFocused = document.activeElement;
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    // Update URL hash
    history.pushState(null, '', '#project-' + (index + 1));

    // Focus close button for keyboard users
    setTimeout(function () { lightboxClose.focus(); }, 50);
  }

  /* ── Close lightbox ──────────────────── */
  function closeLightbox() {
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';

    // Restore hash
    history.pushState(null, '', window.location.pathname + window.location.search);

    // Return focus
    if (lastFocused) lastFocused.focus();
  }

  /* ── Card click/keyboard events ──────── */
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      var index = parseInt(card.getAttribute('data-index'), 10);
      openLightbox(index);
    });

    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var index = parseInt(card.getAttribute('data-index'), 10);
        openLightbox(index);
      }
    });
  });

  /* ── Close button ────────────────────── */
  lightboxClose.addEventListener('click', closeLightbox);

  /* ── Backdrop click to close ─────────── */
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  /* ── Keyboard: Escape to close ────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hasAttribute('hidden')) {
      closeLightbox();
    }
  });

  /* ── Hash routing on load ────────────── */
  var hash = window.location.hash;
  if (hash && hash.startsWith('#project-')) {
    var idx = parseInt(hash.replace('#project-', ''), 10) - 1;
    if (!isNaN(idx) && idx >= 0 && idx < projects.length) {
      // Small delay to let the page render first
      setTimeout(function () { openLightbox(idx); }, 200);
    }
  }

}());
