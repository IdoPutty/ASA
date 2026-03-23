/* ─────────────────────────────────────────
   PROJECTS.JS
   – Lightbox modal with project detail view
   – Keyboard navigation (Escape to close)
   – URL hash routing (#project-1 … #project-6)

   TO ADD / EDIT A PROJECT:
   Update the `projects` array below.
   Image files go in assets/images/projects/
   ───────────────────────────────────────── */

(function () {
  'use strict';

  var projects = [
    {
      id: 'villa-seravezza',
      title: 'Villa Seravezza',
      category: 'Residential',
      meta: 'Tuscany, Italy · 2023',
      image: './assets/images/projects/project-01.svg',
      imageAlt: 'Villa Seravezza — south elevation drawing',
      description: 'A hillside villa integrating locally quarried Apuan travertine with precise board-formed concrete volumes, orienting every primary space toward the mountain panorama. The building is organised around two interlocking bars — a horizontal sleeping wing and a vertical living tower — that frame a covered outdoor terrace open to the valley. All structural materials were sourced within a 40 km radius of the site.',
      specs: {
        'Area':      '340 m²',
        'Client':    'Private',
        'Status':    'Completed 2023',
        'Materials': 'Travertine, board-formed concrete, oak'
      }
    },
    {
      id: 'linden-house',
      title: 'The Linden House',
      category: 'Residential',
      meta: 'Tel Aviv, Israel · 2022',
      image: './assets/images/projects/project-02.svg',
      imageAlt: 'The Linden House — ground floor courtyard plan',
      description: 'An urban family residence in the heart of Tel Aviv structured around a central courtyard that draws daylight deep into the plan and moderates the Mediterranean climate through cross-ventilation. The rooms face inward rather than toward the street, creating a quiet domestic world within a dense urban fabric. The courtyard is planted with a single linden tree, which gives the house its name.',
      specs: {
        'Area':      '280 m²',
        'Client':    'Private',
        'Status':    'Completed 2022',
        'Materials': 'White concrete, glass, limewash plaster'
      }
    },
    {
      id: 'keren-cultural-center',
      title: 'Keren Cultural Center',
      category: 'Cultural',
      meta: 'Jerusalem, Israel · 2021',
      image: './assets/images/projects/project-03.svg',
      imageAlt: 'Keren Cultural Center — longitudinal section',
      description: 'A community arts hub carved into a hillside site on the boundary between the Jewish Quarter and the Armenian Quarter of Jerusalem\'s Old City. The program — two exhibition galleries, four workshop studios, and a 120-seat auditorium — is distributed across three terraced levels, each opening onto a different view of the city below. Exposed concrete throughout is deliberately rough, echoing the geological character of the limestone bedrock.',
      specs: {
        'Area':         '1,200 m²',
        'Client':       'Keren Foundation',
        'Status':       'Completed 2021',
        'Materials':    'Exposed concrete, Jerusalem stone, steel'
      }
    },
    {
      id: 'studio-mast',
      title: 'Studio Mast',
      category: 'Commercial',
      meta: 'Berlin, Germany · 2021',
      image: './assets/images/projects/project-04.svg',
      imageAlt: 'Studio Mast — structural frame diagram',
      description: 'A former print workshop in Prenzlauer Berg converted into a multi-tenant creative studio building. The original cast-iron frame and brick envelope were preserved and celebrated throughout — stripped of later interventions and left deliberately raw. A new mezzanine level of lightweight blackened steel and structural glass was inserted within the double-height main hall, doubling usable floor area without touching the existing fabric.',
      specs: {
        'Area':      '620 m²',
        'Client':    'Mast Properties GmbH',
        'Status':    'Completed 2021',
        'Materials': 'Blackened steel, structural glass, existing brick'
      }
    },
    {
      id: 'apartment-14b',
      title: 'Apartment 14B',
      category: 'Interior',
      meta: 'New York, USA · 2020',
      image: './assets/images/projects/project-05.svg',
      imageAlt: 'Apartment 14B — floor plan at 1:100',
      description: 'A pre-war apartment on the Upper West Side, stripped back to its original structure and reinvented with a commitment to material restraint. The original oak parquet floors were restored and extended throughout; structural columns were exposed and left unpainted; a new kitchen in pale concrete and blackened steel anchors the open living plan. The project was carried out entirely without demolition — working with the existing spatial logic rather than against it.',
      specs: {
        'Area':      '115 m²',
        'Client':    'Private',
        'Status':    'Completed 2020',
        'Materials': 'Concrete, blackened steel, restored oak'
      }
    },
    {
      id: 'garden-pavilion',
      title: 'The Garden Pavilion',
      category: 'Landscape',
      meta: 'Copenhagen, Denmark · 2019',
      image: './assets/images/projects/project-06.svg',
      imageAlt: 'The Garden Pavilion — east elevation with landscape',
      description: 'A contemplative garden structure on a private estate north of Copenhagen. The pavilion — in cast-in-situ concrete and weathering Corten steel — is designed to change in appearance over time: the concrete base will accumulate moss and lichen; the steel will deepen from orange to a dark, earthy brown. The single interior room is open on three sides, framing views of the garden as a series of living paintings across the seasons.',
      specs: {
        'Area':      '48 m²',
        'Client':    'Private',
        'Status':    'Completed 2019',
        'Materials': 'Cast concrete, Corten steel, oak deck'
      }
    }
  ];

  var lightbox      = document.getElementById('lightbox');
  var lightboxClose = document.getElementById('lightbox-close');
  var lbCategory    = document.getElementById('lightbox-category');
  var lbTitle       = document.getElementById('lightbox-title');
  var lbMeta        = document.getElementById('lightbox-meta');
  var lbDesc        = document.getElementById('lightbox-desc');
  var lbSpecs       = document.getElementById('lightbox-specs');
  var lbImg         = document.getElementById('lightbox-img');
  var cards         = document.querySelectorAll('.project-card');

  if (!lightbox || cards.length === 0) return;

  var lastFocused = null;

  /* ── Build specs list ────────────────── */
  function buildSpecs(specs) {
    if (!lbSpecs || !specs) return;
    lbSpecs.innerHTML = '';
    Object.keys(specs).forEach(function (key) {
      var dt = document.createElement('dt');
      var dd = document.createElement('dd');
      dt.textContent = key;
      dd.textContent = specs[key];
      lbSpecs.appendChild(dt);
      lbSpecs.appendChild(dd);
    });
  }

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
    buildSpecs(p.specs);

    lastFocused = document.activeElement;
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    history.pushState(null, '', '#project-' + (index + 1));

    setTimeout(function () { lightboxClose.focus(); }, 50);
  }

  /* ── Close lightbox ──────────────────── */
  function closeLightbox() {
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
    history.pushState(null, '', window.location.pathname + window.location.search);
    if (lastFocused) lastFocused.focus();
  }

  /* ── Card events ─────────────────────── */
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      openLightbox(parseInt(card.getAttribute('data-index'), 10));
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(parseInt(card.getAttribute('data-index'), 10));
      }
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

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
      setTimeout(function () { openLightbox(idx); }, 200);
    }
  }

}());
