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
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      imageAlt: 'Villa Seravezza — modern hillside villa, Tuscany',
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
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      imageAlt: 'The Linden House — courtyard residence, Tel Aviv',
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
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=85',
      imageAlt: 'Keren Cultural Center — civic building exterior, Jerusalem',
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
      imageAlt: 'Studio Mast — industrial studio interior, Berlin',
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
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
      imageAlt: 'Apartment 14B — minimal contemporary interior, New York',
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
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85',
      imageAlt: 'The Garden Pavilion — garden structure, Copenhagen',
      description: 'A contemplative garden structure on a private estate north of Copenhagen. The pavilion — in cast-in-situ concrete and weathering Corten steel — is designed to change in appearance over time: the concrete base will accumulate moss and lichen; the steel will deepen from orange to a dark, earthy brown. The single interior room is open on three sides, framing views of the garden as a series of living paintings across the seasons.',
      specs: {
        'Area':      '48 m²',
        'Client':    'Private',
        'Status':    'Completed 2019',
        'Materials': 'Cast concrete, Corten steel, oak deck'
      }
    },
    {
      id: 'hatachana-gallery-wing',
      title: 'HaTachana Gallery Wing',
      category: 'Cultural / Adaptive Reuse',
      meta: 'Tel Aviv, Israel · 2023',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
      imageAlt: 'HaTachana Gallery Wing — adaptive reuse, Tel Aviv',
      description: 'A new gallery wing inserted into the HaTachana complex — Tel Aviv\'s restored 19th-century Ottoman railway terminus. The intervention reads as a deliberate contrast: a raw concrete box nested among the original red-stone train sheds, connected by a glass passageway that preserves views of the original masonry. Two exhibition halls and a bookshop occupy the new volume; the existing station fabric is untouched apart from careful conservation work.',
      specs: {
        'Area':       '480 m²',
        'Client':     'HaTachana Foundation',
        'Status':     'Completed 2023',
        'Materials':  'Board-formed concrete, plate steel, glass'
      }
    },
    {
      id: 'house-on-carmel-ridge',
      title: 'House on Carmel Ridge',
      category: 'Residential',
      meta: 'Haifa, Israel · 2022',
      image: 'https://images.unsplash.com/photo-1600607687939-ba03584f21ae?auto=format&fit=crop&w=1600&q=85',
      imageAlt: 'House on Carmel Ridge — hillside residence, Haifa',
      description: 'A private residence on the lower slopes of Mount Carmel, where the building\'s plan follows the natural contour of the hill rather than cutting into it. Three concrete platforms step down the slope: the upper holds sleeping spaces and a study; the middle is the principal living level; the lower extends into a cantilevered terrace that appears to float over the garden below. All three levels converge on a double-height stairwell open to the sky through a narrow north-facing clerestory.',
      specs: {
        'Area':      '310 m²',
        'Client':    'Private',
        'Status':    'Completed 2022',
        'Materials': 'Cast concrete, Cor-Ten steel screens, stone cladding'
      }
    },
    {
      id: 'nomad-spa',
      title: 'The Nomad Spa',
      category: 'Hospitality / Interior',
      meta: 'Jaffa, Israel · 2020',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85',
      imageAlt: 'The Nomad Spa — wellness retreat interior, Jaffa',
      description: 'A spa and wellness retreat occupying the ground floor and vaulted cellar of a repurposed Ottoman building in Old Jaffa. The program — thermal baths, treatment rooms, a meditation hall, and a rooftop terrace — is distributed across six sandstone vaults of varying scale. New concrete elements are introduced sparingly: a reception desk, partitions between wet and dry zones, and a long lap pool that follows the axis of the oldest vault. The material palette is stone, water, and light.',
      specs: {
        'Area':       '850 m²',
        'Client':     'Nomad Hospitality Group',
        'Status':     'Completed 2020',
        'Materials':  'Ottoman sandstone (existing), concrete, limestone'
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

  /* ── Fade-in CDN images once loaded ────── */
  document.querySelectorAll('img[src*="unsplash"]').forEach(function (img) {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function () { img.classList.add('loaded'); });
    }
  });

}());
