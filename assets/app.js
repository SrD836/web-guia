/* ─── Category colors ──────────────────────────────────────────── */
var CAT_COLORS = {
  'open-source':       { strong: '#10B981', soft: '#052014' },
  'closed':            { strong: '#818CF8', soft: '#1A1840' },
  'openclaw-eco':      { strong: '#FBBF24', soft: '#1C1400' },
  'runners-paralelos': { strong: '#60A5FA', soft: '#08152A' },
  'swarms':            { strong: '#A78BFA', soft: '#1A1030' },
  'loops-autonomos':   { strong: '#F87171', soft: '#200C0C' },
  'asistentes':        { strong: '#34D399', soft: '#062518' }
};

/* ─── Helpers ──────────────────────────────────────────────────── */
function esc(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function fmtStars(n) {
  if (!n || n <= 0) return '';
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  return String(n);
}

function renderInline(s) {
  if (!s) return '';
  var escaped = esc(s);
  return escaped.replace(/`([^`]+)`/g,
    '<code class="bg-[#1C1C2E] text-ink px-1.5 py-0.5 rounded text-[0.85em] font-mono">$1</code>');
}

/* ─── Data merge (v2 + v3) ─────────────────────────────────────── */
function mergeV3Data() {
  if (!window.GUIA_DATA || !window.GUIA_V3) return;
  var v3Map = {};
  function indexV3(arr) {
    (arr || []).forEach(function(t) { v3Map[t.name] = t; });
  }
  indexV3(GUIA_V3.cli);
  indexV3(GUIA_V3.orquestadores);
  var allTools = (GUIA_DATA.cli || []).concat(GUIA_DATA.orquestadores || []);
  allTools.forEach(function(tool) {
    var v3 = v3Map[tool.name];
    if (!v3) return;
    tool.long_desc    = v3.long_desc;
    tool.pros         = v3.pros;
    tool.contras      = v3.contras;
    tool.como_empezar = v3.como_empezar;
    tool.precio       = v3.precio;
    tool.lenguaje     = v3.lenguaje;
  });
}

/* ─── Tool lookup ──────────────────────────────────────────────── */
function findTool(name) {
  if (!window.GUIA_DATA) return null;
  var all = (GUIA_DATA.cli || []).concat(GUIA_DATA.orquestadores || []);
  for (var i = 0; i < all.length; i++) {
    if (all[i].name === name) return all[i];
  }
  return null;
}

/* ─── Dialog engine (shared: modal + mobile drawer) ───────────── */
var _activeDialogPanel = null;
var _dialogTrigger = null;
var _focusableSelectors = 'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])';

function openDialog(panelEl, trigger) {
  if (_activeDialogPanel) closeDialog();
  _activeDialogPanel = panelEl;
  _dialogTrigger = trigger || null;
  panelEl.parentElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  var focusables = panelEl.querySelectorAll(_focusableSelectors);
  if (focusables.length) focusables[0].focus();
  panelEl.addEventListener('keydown', _trapFocus);
}

function closeDialog() {
  if (!_activeDialogPanel) return;
  var wrapper = _activeDialogPanel.parentElement;
  wrapper.classList.add('hidden');
  document.body.classList.remove('modal-open');
  _activeDialogPanel.removeEventListener('keydown', _trapFocus);
  if (_dialogTrigger) { try { _dialogTrigger.focus(); } catch(e){} }
  _activeDialogPanel = null;
  _dialogTrigger = null;
}

function _trapFocus(e) {
  if (e.key !== 'Tab') return;
  var focusables = Array.prototype.slice.call(
    _activeDialogPanel.querySelectorAll(_focusableSelectors)
  ).filter(function(el) { return !el.hasAttribute('disabled'); });
  if (!focusables.length) { e.preventDefault(); return; }
  var first = focusables[0], last = focusables[focusables.length - 1];
  if (e.shiftKey) {
    if (document.activeElement === first) { e.preventDefault(); last.focus(); }
  } else {
    if (document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
}

/* ─── Tool modal ───────────────────────────────────────────────── */
function fillModal(tool) {
  var cat = CAT_COLORS[tool.category] || { strong: '#818CF8', soft: '#1E1B4B' };
  var panel = document.getElementById('modalPanel');
  if (!panel) return;
  panel.style.setProperty('--cat', cat.strong);
  panel.style.setProperty('--cat-soft', cat.soft);

  document.getElementById('modalToolName').textContent = tool.name || '';
  var catChip = document.getElementById('modalCatChip');
  catChip.textContent = (window.GUIA_LABELS && GUIA_LABELS[tool.category]) || tool.category || '';
  catChip.style.backgroundColor = cat.soft;
  catChip.style.color = cat.strong;

  document.getElementById('modalLongDesc').textContent = tool.long_desc || tool.desc || '';

  var prosBlock = document.getElementById('modalProsBlock');
  var prosList  = document.getElementById('modalPros');
  if (tool.pros && tool.pros.length) {
    prosList.innerHTML = tool.pros.map(function(p) {
      return '<li class="flex gap-2 items-start"><span class="text-[#10B981] flex-shrink-0 mt-0.5">✓</span><span>' + esc(p) + '</span></li>';
    }).join('');
    prosBlock.style.display = '';
  } else { prosBlock.style.display = 'none'; }

  var contrasBlock = document.getElementById('modalContrasBlock');
  var contrasList  = document.getElementById('modalContras');
  if (tool.contras && tool.contras.length) {
    contrasList.innerHTML = tool.contras.map(function(c) {
      return '<li class="flex gap-2 items-start"><span class="text-[#F87171] flex-shrink-0 mt-0.5">✗</span><span>' + esc(c) + '</span></li>';
    }).join('');
    contrasBlock.style.display = '';
  } else { contrasBlock.style.display = 'none'; }

  var comoEl = document.getElementById('modalComoEmpezar');
  if (comoEl) comoEl.innerHTML = renderInline(tool.como_empezar || I18N.t('ui.comoEmpezarFallback'));

  var precioEl = document.getElementById('modalPrecio');
  if (precioEl) precioEl.textContent = tool.precio || I18N.t('ui.desconocido');
  var lenguajeEl = document.getElementById('modalLenguaje');
  if (lenguajeEl) lenguajeEl.textContent = tool.lenguaje || I18N.t('ui.desconocido');

  var repoLink = document.getElementById('modalRepoLink');
  if (repoLink) {
    repoLink.href = tool.url || '#';
    repoLink.style.display = tool.url ? '' : 'none';
  }
}

function openToolModal(toolName, trigger) {
  var tool = findTool(toolName);
  if (!tool) return;
  fillModal(tool);
  var panel = document.getElementById('modalPanel');
  if (panel) openDialog(panel, trigger || null);
}

function initToolModal() {
  var modal = document.getElementById('toolModal');
  if (!modal) return;

  var closeBtn = document.getElementById('modalClose');
  var overlay  = document.getElementById('modalOverlay');
  if (closeBtn) closeBtn.addEventListener('click', closeDialog);
  if (overlay)  overlay.addEventListener('click', closeDialog);
  modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target === overlay) closeDialog();
  });

  modal.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeDialog();
  });

  document.body.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-tool]');
    if (!btn) return;
    e.preventDefault();
    openToolModal(btn.dataset.tool, btn);
  });
}

/* ─── Nav: mobile drawer ───────────────────────────────────────── */
function initNavDrawer() {
  var openBtn  = document.getElementById('mobileMenuBtn');
  var drawer   = document.getElementById('mobileDrawer');
  var closeBtn = document.getElementById('mobileDrawerClose');
  var overlay  = document.getElementById('mobileDrawerOverlay');
  var panel    = document.getElementById('mobileDrawerPanel');
  if (!openBtn || !drawer || !panel) return;

  openBtn.addEventListener('click', function() {
    drawer.classList.remove('hidden');
    openBtn.setAttribute('aria-expanded', 'true');
    openDialog(panel, openBtn);
  });

  function closeDrawer() {
    closeDialog();
    drawer.classList.add('hidden');
    openBtn.setAttribute('aria-expanded', 'false');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay)  overlay.addEventListener('click', closeDrawer);
  drawer.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeDrawer(); });
}

/* ─── Nav: desktop Aprender dropdown ──────────────────────────── */
function initDesktopDropdown() {
  var btn   = document.getElementById('desktopAprenderBtn');
  var panel = document.getElementById('desktopAprenderPanel');
  var chev  = document.getElementById('desktopAprenderChevron');
  if (!btn || !panel) return;

  function openDrop() {
    panel.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
    if (chev) chev.style.transform = 'rotate(180deg)';
  }
  function closeDrop() {
    panel.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
    if (chev) chev.style.transform = '';
  }

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    panel.hasAttribute('hidden') ? openDrop() : closeDrop();
  });
  document.addEventListener('click', function(e) {
    if (!btn.contains(e.target) && !panel.contains(e.target)) closeDrop();
  });
  btn.addEventListener('keydown', function(e) { if (e.key === 'Escape') { closeDrop(); btn.focus(); } });
}

/* ─── Nav: tablet menu ─────────────────────────────────────────── */
function initTabletMenu() {
  var btn   = document.getElementById('tabletMenuBtn');
  var panel = document.getElementById('tabletMenuPanel');
  if (!btn || !panel) return;

  function openMenu() {
    panel.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    panel.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    panel.hasAttribute('hidden') ? openMenu() : closeMenu();
  });
  document.addEventListener('click', function(e) {
    if (!btn.contains(e.target) && !panel.contains(e.target)) closeMenu();
  });
}

/* ─── Nav: active link highlighting ────────────────────────────── */
function setActiveNavLinks() {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (!page) page = 'index.html';
  document.querySelectorAll('[data-page]').forEach(function(el) {
    if (el.dataset.page === page) {
      el.classList.add('nav-active');
    }
  });
}

/* ─── Scroll reveal ────────────────────────────────────────────── */
var _revealObserver = null;

function initScrollReveal() {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.reveal-target').forEach(function(el) { el.classList.add('revealed'); });
    return;
  }
  _revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        _revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  document.querySelectorAll('.reveal-target').forEach(function(el) { _revealObserver.observe(el); });
}

function observeNewRevealTargets() {
  if (!_revealObserver) return;
  document.querySelectorAll('.reveal-target:not(.revealed)').forEach(function(el) {
    _revealObserver.observe(el);
  });
}

/* ─── Cards (v3) ───────────────────────────────────────────────── */
function renderCards(items, containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var html = items.map(function(tool) {
    var cat = CAT_COLORS[tool.category] || { strong: '#818CF8', soft: '#1E1B4B' };
    var label = (window.GUIA_LABELS && GUIA_LABELS[tool.category]) || tool.category || '';
    var stars = tool.stars > 0
      ? '<span class="flex items-center gap-1 text-muted text-xs"><span class="text-amber-400">★</span>' + fmtStars(tool.stars) + '</span>'
      : '<span class="text-muted text-xs">—</span>';
    var badge = tool.badge
      ? '<span class="flex-shrink-0 px-2.5 py-0.5 rounded-full bg-brand-soft text-brand text-xs font-semibold">' + esc(tool.badge) + '</span>'
      : '';

    return '<article class="tool-card group relative bg-surface border border-line rounded-2xl p-6 flex flex-col gap-3' +
      ' transition-all duration-200 hover:-translate-y-0.5 shadow-elev-1' +
      ' reveal-target" data-category="' + esc(tool.category) + '"' +
      ' style="--cat:' + cat.strong + '; --cat-soft:' + cat.soft + '">' +
      '<div class="card-bar" aria-hidden="true"></div>' +
      '<div class="flex items-start justify-between gap-3">' +
        '<p class="font-display text-lg font-semibold text-ink leading-snug transition-colors min-w-0">' + esc(tool.name) + '</p>' +
        badge +
      '</div>' +
      '<span class="chip-cat inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold self-start">' + esc(label) + '</span>' +
      '<p class="text-muted text-sm leading-relaxed line-clamp-3 flex-1">' + esc(tool.desc) + '</p>' +
      '<div class="mt-auto pt-3 flex items-center justify-between border-t border-line">' +
        stars +
        '<div class="flex items-center gap-3">' +
          '<button class="text-sm font-semibold transition-colors" style="color:' + cat.strong + '"' +
            ' data-tool="' + esc(tool.name) + '">' + I18N.t('ui.verDetalle') + '</button>' +
          '<a href="' + esc(tool.url) + '" target="_blank" rel="noopener"' +
            ' class="text-sm text-muted hover:text-ink transition-colors">' + I18N.t('ui.repo') + '</a>' +
        '</div>' +
      '</div>' +
      '</article>';
  }).join('');

  container.innerHTML = html;
  observeNewRevealTargets();
}

/* ─── Mini cards (casos-uso / ruta-aprendizaje) ─────────────────── */
function renderMiniCards(names, containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var html = names.map(function(name) {
    var tool = findTool(name);
    if (!tool) return '';
    var cat = CAT_COLORS[tool.category] || { strong: '#818CF8', soft: '#1E1B4B' };
    var label = (window.GUIA_LABELS && GUIA_LABELS[tool.category]) || tool.category || '';
    return '<button class="mini-card" data-tool="' + esc(tool.name) + '"' +
      ' style="--cat:' + cat.strong + '; --cat-soft:' + cat.soft + '">' +
      '<p class="font-display text-base font-semibold text-ink mb-1">' + esc(tool.name) + '</p>' +
      '<p class="text-xs text-muted line-clamp-2">' + esc(tool.desc) + '</p>' +
      '<span class="chip-cat inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold mt-2">' + esc(label) + '</span>' +
      '</button>';
  }).join('');
  container.innerHTML = html;
}

/* ─── Filters ──────────────────────────────────────────────────── */
var PILL_BASE     = 'px-4 py-1.5 rounded-full border text-sm font-medium cursor-pointer transition-all duration-150';
var PILL_INACTIVE = 'bg-surface text-muted border-line hover:border-brand hover:text-ink';

function initFilters(pillsId, gridId, noResultsId) {
  var pillContainer = document.getElementById(pillsId);
  var grid          = document.getElementById(gridId);
  var noResults     = document.getElementById(noResultsId);
  if (!pillContainer || !grid) return;

  pillContainer.addEventListener('click', function(e) {
    var pill = e.target.closest('[data-filter]');
    if (!pill) return;
    var active = pill.dataset.filter;

    pillContainer.querySelectorAll('[data-filter]').forEach(function(p) {
      var cat = p.dataset.filter;
      if (cat === active) {
        if (cat === 'todos') {
          p.className = PILL_BASE + ' bg-brand text-white border-brand shadow-sm';
        } else {
          p.className = PILL_BASE + ' cat-pill-active';
        }
      } else {
        p.className = PILL_BASE + ' ' + PILL_INACTIVE;
      }
    });

    var cards   = grid.querySelectorAll('.tool-card');
    var visible = 0;
    cards.forEach(function(card) {
      var match = active === 'todos' || card.dataset.category === active;
      card.classList.toggle('hidden', !match);
      if (match) visible++;
    });
    if (noResults) noResults.classList.toggle('hidden', visible > 0);
  });
}

/* ─── Comparativa table ─────────────────────────────────────────── */
function renderComparativa(tableBodyId, axesId) {
  var tbody = document.getElementById(tableBodyId);
  if (tbody && window.GUIA_DATA) {
    var all = (GUIA_DATA.cli || []).concat(GUIA_DATA.orquestadores || [])
      .sort(function(a, b) { return (b.stars || 0) - (a.stars || 0); });
    tbody.innerHTML = all.map(function(t) {
      var cat = CAT_COLORS[t.category] || { strong: '#4338CA', soft: '#EEF0FF' };
      var label = (window.GUIA_LABELS && GUIA_LABELS[t.category]) || t.category || '';
      var starsStr = t.stars > 0 ? fmtStars(t.stars) : '—';
      var precio = t.precio ? t.precio.split(';')[0].trim() : I18N.t('ui.desconocido');
      if (precio.length > 30) precio = precio.slice(0, 28) + '…';
      var lenguaje = (t.lenguaje || I18N.t('ui.desconocido')).split('·')[0].trim();
      var comienzo = t.como_empezar ? t.como_empezar.replace(/`[^`]+`/g, function(m){ return m.slice(1,-1); }) : '—';
      if (comienzo.length > 60) comienzo = comienzo.slice(0, 58) + '…';

      return '<tr class="border-b border-line hover:bg-brand-soft/30 transition-colors">' +
        '<td class="py-3 px-4 font-medium text-ink" data-label="' + I18N.t('ui.col.herramienta') + '">' +
          '<button class="text-left font-semibold hover:underline" style="color:' + cat.strong + '" data-tool="' + esc(t.name) + '">' + esc(t.name) + '</button>' +
        '</td>' +
        '<td class="py-3 px-4" data-label="' + I18N.t('ui.col.categoria') + '">' +
          '<span class="chip-cat inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap"' +
            ' style="--cat:' + cat.strong + '; --cat-soft:' + cat.soft + '">' + esc(label) + '</span>' +
        '</td>' +
        '<td class="py-3 px-4 text-muted text-sm" data-label="' + I18N.t('ui.col.estrellas') + '">★ ' + starsStr + '</td>' +
        '<td class="py-3 px-4 text-muted text-sm" data-label="' + I18N.t('ui.col.precio') + '">' + esc(precio) + '</td>' +
        '<td class="py-3 px-4 text-muted text-sm" data-label="' + I18N.t('ui.col.lenguaje') + '">' + esc(lenguaje) + '</td>' +
        '<td class="py-3 px-4 text-muted text-xs max-w-[220px]" data-label="' + I18N.t('ui.col.primerPaso') + '"><code class="bg-line/60 px-1 py-0.5 rounded font-mono">' + esc(comienzo) + '</code></td>' +
        '</tr>';
    }).join('');
  }

  var axesEl = document.getElementById(axesId);
  if (axesEl && window.GUIA_V3 && GUIA_V3.comparativa && GUIA_V3.comparativa.ejes) {
    axesEl.innerHTML = GUIA_V3.comparativa.ejes.map(function(row) {
      return '<tr class="border-b border-line">' +
        '<td class="py-3 px-4 font-semibold text-ink text-sm align-top">' + esc(row.eje) + '</td>' +
        '<td class="py-3 px-4 text-sm text-muted align-top">' + esc(row.cli_agent) + '</td>' +
        '<td class="py-3 px-4 text-sm text-muted align-top">' + esc(row.orquestador) + '</td>' +
        '</tr>';
    }).join('');
  }
}

/* ─── FAQ accordion ─────────────────────────────────────────────── */
function initFaqAccordion() {
  document.querySelectorAll('.faq-item').forEach(function(item) {
    var trigger = item.querySelector('.faq-trigger');
    var answer  = item.querySelector('.faq-answer');
    var chevron = item.querySelector('.faq-chevron');
    if (!trigger || !answer) return;

    trigger.addEventListener('click', function() {
      var isOpen = answer.classList.contains('open');
      document.querySelectorAll('.faq-answer.open').forEach(function(a) {
        a.classList.remove('open');
        var ch = a.closest('.faq-item').querySelector('.faq-chevron');
        if (ch) ch.classList.remove('open');
        var tr = a.closest('.faq-item').querySelector('.faq-trigger');
        if (tr) tr.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        answer.classList.add('open');
        if (chevron) chevron.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ─── Glosario render ────────────────────────────────────────────── */
function renderGlosario(containerId) {
  var container = document.getElementById(containerId);
  if (!container || !window.GUIA_V3 || !GUIA_V3.glosario) return;
  container.innerHTML = GUIA_V3.glosario.map(function(entry) {
    return '<div class="py-4 border-b border-line last:border-0">' +
      '<dt class="font-display text-base font-semibold text-ink mb-1">' + esc(entry.termino) + '</dt>' +
      '<dd class="text-sm text-muted leading-relaxed">' + esc(entry.definicion) + '</dd>' +
      '</div>';
  }).join('');
}

/* ─── Dynamic rerender (called by I18N.set on lang swap) ─────────── */
window.rerenderDynamic = function() {
  if (window.GUIA_DATA) {
    if (document.getElementById('cliGrid'))
      renderCards(GUIA_DATA.cli || [], 'cliGrid');
    if (document.getElementById('orchGrid'))
      renderCards(GUIA_DATA.orquestadores || [], 'orchGrid');
    if (document.getElementById('compTableBody'))
      renderComparativa('compTableBody', 'compAxes');
    if (document.getElementById('featuredGrid')) {
      var featured = [].concat(
        (GUIA_DATA.cli || []).filter(function(t) {
          return ['Claude Code', 'Gemini CLI', 'Aider'].indexOf(t.name) > -1;
        }),
        (GUIA_DATA.orquestadores || []).filter(function(t) {
          return ['claude-flow', 'claude-squad', 'gastown'].indexOf(t.name) > -1;
        })
      );
      renderCards(featured, 'featuredGrid');
    }
  }
  if (document.getElementById('glosarioContainer'))
    renderGlosario('glosarioContainer');
};

/* ─── Boot ───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  mergeV3Data();
  initNavDrawer();
  initDesktopDropdown();
  initTabletMenu();
  setActiveNavLinks();
  initScrollReveal();
  initToolModal();
});
