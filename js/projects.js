/* ─────────────────────────────────────────
   PROJECTS.JS  —  Project modal popup
   ───────────────────────────────────────── */
(function () {
  'use strict';

  /* ══════════════════════════════════════════
     PROJECT DATA
     Add / edit projects here.
  ══════════════════════════════════════════ */
  var PROJECTS = [
    {
      title:       'Villa Seravezza',
      category:    'Residential',
      location:    'Tuscany, Italy',
      year:        '2023',
      area:        '340 m²',
      client:      'Private',
      status:      'Completed',
      materials:   'Travertine, board-formed concrete, oak',
      image:       'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      description: 'A hillside villa integrating locally quarried Apuan travertine with precise board-formed concrete volumes, orienting every primary space toward the mountain panorama. The building is organised around two interlocking bars — a horizontal sleeping wing and a vertical living tower — that frame a covered outdoor terrace open to the valley. Structural materials were sourced within a 40 km radius of the site. The garden, designed in collaboration with a local landscape practice, uses native Mediterranean planting that requires no irrigation after the first season.'
    },
    {
      title:       'The Linden House',
      category:    'Residential',
      location:    'Tel Aviv, Israel',
      year:        '2022',
      area:        '280 m²',
      client:      'Private',
      status:      'Completed',
      materials:   'White concrete, glass, limewash plaster',
      image:       'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      description: 'An urban family residence in the heart of Tel Aviv structured around a central courtyard that draws daylight deep into the plan and moderates the Mediterranean climate through cross-ventilation. The rooms face inward toward the courtyard rather than outward toward the street, creating a quiet domestic world within a dense urban fabric. The courtyard is planted with a single linden tree from which the house takes its name — a tree known for its longevity and the quality of shade it casts in the afternoon.'
    },
    {
      title:       'Keren Cultural Center',
      category:    'Cultural',
      location:    'Jerusalem, Israel',
      year:        '2021',
      area:        '1,200 m²',
      client:      'Keren Foundation',
      status:      'Completed',
      materials:   'Exposed concrete, Jerusalem stone, steel',
      image:       'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=85',
      description: 'A community arts hub carved into a hillside site on the boundary between the Jewish Quarter and the Armenian Quarter of Jerusalem\'s Old City. The program — two exhibition galleries, four workshop studios, a café, and a 120-seat auditorium — is distributed across three terraced levels, each opening onto a different view of the city below. Exposed concrete throughout is deliberately rough, echoing the geological character of the limestone bedrock beneath the site. The building received the Israeli Architecture Prize in 2022.'
    },
    {
      title:       'Studio Mast',
      category:    'Commercial',
      location:    'Berlin, Germany',
      year:        '2021',
      area:        '620 m²',
      client:      'Mast Properties GmbH',
      status:      'Completed',
      materials:   'Blackened steel, structural glass, existing brick',
      image:       'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
      description: 'A former print workshop in Prenzlauer Berg converted into a multi-tenant creative studio building. The original cast-iron frame and brick envelope were preserved and celebrated throughout — stripped of later interventions and left deliberately raw. A new mezzanine level of lightweight blackened steel and structural glass was inserted within the double-height main hall, doubling usable floor area without touching the existing fabric. The building now houses eight independent design studios and a shared material library.'
    },
    {
      title:       'Apartment 14B',
      category:    'Interior',
      location:    'New York, USA',
      year:        '2020',
      area:        '115 m²',
      client:      'Private',
      status:      'Completed',
      materials:   'Concrete, blackened steel, restored oak parquet',
      image:       'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
      description: 'A pre-war apartment on the Upper West Side, stripped back to its original structure and reinvented with a commitment to material restraint. The original oak parquet floors were restored and extended throughout; structural columns were exposed and left unpainted; a new kitchen in pale concrete and blackened steel anchors the open living plan. The project was carried out entirely without structural demolition — working with the existing spatial logic rather than against it. Every window reveals a different sky.'
    },
    {
      title:       'The Garden Pavilion',
      category:    'Landscape',
      location:    'Copenhagen, Denmark',
      year:        '2019',
      area:        '48 m²',
      client:      'Private',
      status:      'Completed',
      materials:   'Cast concrete, Corten steel, oak deck',
      image:       'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85',
      description: 'A contemplative garden structure on a private estate north of Copenhagen. The pavilion — in cast-in-situ concrete and weathering Corten steel — is designed to change in appearance over time: the concrete base will accumulate moss and lichen; the steel will deepen from orange to a dark, earthy brown. The single interior room is open on three sides, framing views of the garden as a series of living paintings across the seasons. A long water trough runs along the south wall, its surface catching the low Danish light.'
    },
    {
      title:       'HaTachana Gallery Wing',
      category:    'Cultural / Adaptive Reuse',
      location:    'Tel Aviv, Israel',
      year:        '2023',
      area:        '480 m²',
      client:      'HaTachana Foundation',
      status:      'Completed',
      materials:   'Board-formed concrete, plate steel, glass',
      image:       'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
      description: 'A new gallery wing inserted into the HaTachana complex — Tel Aviv\'s restored 19th-century Ottoman railway terminus. The intervention reads as a deliberate contrast: a raw concrete box nested among the original red-stone train sheds, connected by a glazed passageway that preserves views of the original masonry. Two exhibition halls and a public bookshop occupy the new volume. The existing station fabric is untouched apart from careful conservation work carried out in collaboration with Israel\'s Antiquities Authority.'
    },
    {
      title:       'House on Carmel Ridge',
      category:    'Residential',
      location:    'Haifa, Israel',
      year:        '2022',
      area:        '310 m²',
      client:      'Private',
      status:      'Completed',
      materials:   'Cast concrete, Corten steel screens, local stone',
      image:       'https://images.unsplash.com/photo-1600607687939-ba03584f21ae?auto=format&fit=crop&w=1600&q=85',
      description: 'A private residence on the lower slopes of Mount Carmel, where the building\'s plan follows the natural contour of the hill rather than cutting into it. Three concrete platforms step down the slope: the upper holds sleeping spaces and a library; the middle is the principal living level; the lower extends into a cantilevered terrace that appears to float above the garden. All three levels converge on a double-height stairwell open to the sky through a narrow north-facing clerestory. Corten steel screens shade the west-facing terraces and will rust to a deep reddish-brown over time.'
    },
    {
      title:       'The Nomad Spa',
      category:    'Hospitality / Interior',
      location:    'Jaffa, Israel',
      year:        '2020',
      area:        '850 m²',
      client:      'Nomad Hospitality Group',
      status:      'Completed',
      materials:   'Ottoman sandstone (existing), poured concrete, limestone',
      image:       'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85',
      description: 'A spa and wellness retreat occupying the ground floor and vaulted cellar of a repurposed Ottoman building in Old Jaffa. The program — thermal baths, treatment rooms, a meditation hall, a restaurant, and a rooftop terrace — is distributed across six sandstone vaults of varying scale. New concrete elements are introduced sparingly: a reception desk, partitions between wet and dry zones, and a 12-metre lap pool that follows the axis of the oldest vault. The material palette is deliberately reduced to stone, water, and light. The project won the 2021 Wallpaper* Design Award for Best Spa.'
    }
  ];

  /* ══════════════════════════════════════════
     BUILD MODAL IN JS
     Avoids any HTML sync issues.
  ══════════════════════════════════════════ */
  var modal = document.getElementById('project-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'project-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Project detail');
    modal.style.cssText = [
      'display:none',
      'position:fixed',
      'inset:0',
      'z-index:9000',
      'background:rgba(14,13,12,0.96)',
      'overflow-y:auto',
      '-webkit-overflow-scrolling:touch'
    ].join(';');
    document.body.appendChild(modal);
  }

  /* ══════════════════════════════════════════
     OPEN / CLOSE HELPERS
  ══════════════════════════════════════════ */
  var lastFocused = null;

  function openModal(index) {
    var p = PROJECTS[index];
    if (!p) return;

    modal.innerHTML =
      '<div style="' +
        'max-width:1100px;' +
        'margin:0 auto;' +
        'min-height:100vh;' +
        'display:grid;' +
        'grid-template-columns:1fr 1fr;' +
        'align-items:stretch;' +
      '">' +

      /* ── Image column ── */
      '<div style="position:relative;background:#1e1d1b;min-height:60vh;">' +
        '<img src="' + p.image + '" alt="' + p.title + '" ' +
          'style="width:100%;height:100%;object-fit:cover;display:block;opacity:0.9;" ' +
          'loading="eager">' +
      '</div>' +

      /* ── Details column ── */
      '<div style="' +
        'padding:3rem 2.5rem;' +
        'display:flex;' +
        'flex-direction:column;' +
        'justify-content:center;' +
        'background:#0e0d0c;' +
        'color:#e0dfdb;' +
      '">' +
        '<p style="' +
          'font-family:Jost,system-ui,sans-serif;' +
          'font-weight:200;' +
          'font-size:0.65rem;' +
          'letter-spacing:0.22em;' +
          'text-transform:uppercase;' +
          'color:#706e68;' +
          'margin-bottom:0.75rem;' +
        '">' + p.category + '</p>' +

        '<h2 style="' +
          'font-family:Cormorant,Georgia,serif;' +
          'font-weight:300;' +
          'font-size:clamp(1.8rem,3vw,2.8rem);' +
          'line-height:1.1;' +
          'letter-spacing:-0.01em;' +
          'color:#f8f8f7;' +
          'margin-bottom:0.5rem;' +
        '">' + p.title + '</h2>' +

        '<p style="' +
          'font-family:Jost,system-ui,sans-serif;' +
          'font-size:0.8rem;' +
          'letter-spacing:0.06em;' +
          'color:#929088;' +
          'margin-bottom:1.5rem;' +
        '">' + p.location + ' &nbsp;·&nbsp; ' + p.year + '</p>' +

        '<hr style="border:none;border-top:1px solid rgba(204,202,197,0.12);margin-bottom:1.5rem;">' +

        '<p style="' +
          'font-family:Jost,system-ui,sans-serif;' +
          'font-weight:300;' +
          'font-size:0.9rem;' +
          'line-height:1.8;' +
          'color:#cccac5;' +
          'margin-bottom:2rem;' +
        '">' + p.description + '</p>' +

        '<dl style="' +
          'display:grid;' +
          'grid-template-columns:auto 1fr;' +
          'gap:0.6rem 1.5rem;' +
          'border-top:1px solid rgba(204,202,197,0.1);' +
          'padding-top:1.5rem;' +
          'font-family:Jost,system-ui,sans-serif;' +
        '">' +
          spec('Area',      p.area) +
          spec('Client',    p.client) +
          spec('Status',    p.status) +
          spec('Materials', p.materials) +
        '</dl>' +
      '</div>' +
      '</div>' +

      /* ── Close button ── */
      '<button id="modal-close-btn" aria-label="Close" style="' +
        'position:fixed;' +
        'top:1.5rem;' +
        'right:1.5rem;' +
        'width:44px;' +
        'height:44px;' +
        'display:flex;' +
        'align-items:center;' +
        'justify-content:center;' +
        'background:rgba(255,255,255,0.08);' +
        'border:1px solid rgba(255,255,255,0.15);' +
        'border-radius:2px;' +
        'cursor:pointer;' +
        'color:#b1afa9;' +
        'z-index:10;' +
        'transition:background 0.2s;' +
      '">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
          '<line x1="18" y1="6" x2="6" y2="18"/>' +
          '<line x1="6" y1="6" x2="18" y2="18"/>' +
        '</svg>' +
      '</button>';

    /* Add responsive styles for mobile */
    var style = document.getElementById('modal-responsive-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'modal-responsive-style';
      style.textContent =
        '@media(max-width:700px){' +
          '#project-modal>div{grid-template-columns:1fr!important;min-height:auto!important;}' +
          '#project-modal>div>div:first-child{min-height:50vw!important;}' +
          '#project-modal>div>div:last-child{padding:2rem 1.25rem!important;}' +
        '}';
      document.head.appendChild(style);
    }

    lastFocused = document.activeElement;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    history.replaceState(null, '', '#' + p.title.toLowerCase().replace(/\s+/g, '-'));

    /* Bind close */
    var closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
      closeBtn.focus();
    }
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }

  function spec(label, value) {
    return '<dt style="font-weight:200;font-size:0.6rem;letter-spacing:0.18em;text-transform:uppercase;color:#706e68;padding-block:0.2rem;">' + label + '</dt>' +
           '<dd style="font-weight:300;font-size:0.82rem;color:#929088;padding-block:0.2rem;">' + value + '</dd>';
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    history.replaceState(null, '', window.location.pathname);
    if (lastFocused) lastFocused.focus();
  }

  /* ══════════════════════════════════════════
     WIRE UP PROJECT CARDS
  ══════════════════════════════════════════ */
  var cards = document.querySelectorAll('.project-card');
  cards.forEach(function (card, i) {
    /* Make sure cursor shows it's clickable */
    card.style.cursor = 'pointer';

    card.addEventListener('click', function () { openModal(i); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(i); }
    });
  });

  /* Escape key always closes */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display !== 'none') closeModal();
  });

  /* ── Fade images in when loaded ─────── */
  document.querySelectorAll('img').forEach(function (img) {
    if (img.complete) { img.style.opacity = '1'; }
    else { img.style.opacity = '0'; img.style.transition = 'opacity 0.4s'; img.addEventListener('load', function () { img.style.opacity = '1'; }); }
  });

}());
