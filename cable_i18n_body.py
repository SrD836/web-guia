#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Pass 2 i18n cabling — body content for all 9 HTML pages."""
import os

BASE = r'C:\Users\david\md\web-guia'

def patch(html, pairs, fname):
    misses = []
    for old, new in pairs:
        if old in html:
            html = html.replace(old, new, 1)
        else:
            misses.append(old[:70])
    return html, misses

# ─── MODAL_COMMON (5 modal pages) ────────────────────────────────────────────
MC = [
    ('aria-label="Cerrar" class="shrink-0 p-2',
     'aria-label="Cerrar" data-i18n-attr="aria-label:common.cerrar" class="shrink-0 p-2'),
    ('tracking-wide mb-3">Ventajas</h3>',
     'tracking-wide mb-3" data-i18n="ui.modal.ventajas">Ventajas</h3>'),
    ('tracking-wide mb-3">Limitaciones</h3>',
     'tracking-wide mb-3" data-i18n="ui.modal.limitaciones">Limitaciones</h3>'),
    ('tracking-wide mb-2">Cómo empezar</h3>',
     'tracking-wide mb-2" data-i18n="ui.modal.comoEmpezar">Cómo empezar</h3>'),
    ('tracking-wide mb-1">Precio</div>',
     'tracking-wide mb-1" data-i18n="ui.modal.precio">Precio</div>'),
    ('tracking-wide mb-1">Lenguaje / Licencia</div>',
     'tracking-wide mb-1" data-i18n="ui.modal.lenguajeLicencia">Lenguaje / Licencia</div>'),
    ('style="border-color:var(--cat,#F97316);color:var(--cat,#F97316)">Ver en GitHub ↗</a>',
     'style="border-color:var(--cat,#F97316);color:var(--cat,#F97316)" data-i18n="ui.modal.verGithub">Ver en GitHub ↗</a>'),
]

# ─── comparativa.html ─────────────────────────────────────────────────────────
COMP = MC + [
    # hero
    ('<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-4 leading-tight">Comparativa <span class="text-gradient">completa</span></h1>',
     '<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-4 leading-tight" data-i18n-html="comparativa.hero.h1">Comparativa <span class="text-gradient">completa</span></h1>'),
    ('<p class="text-lg text-muted leading-relaxed">\n        En esta página encontrarás',
     '<p class="text-lg text-muted leading-relaxed" data-i18n="comparativa.hero.desc">\n        En esta página encontrarás'),
    # ejes section
    ('<h2 class="font-display text-2xl font-bold text-ink mb-6 reveal-target">Ejes de evaluación</h2>',
     '<h2 class="font-display text-2xl font-bold text-ink mb-6 reveal-target" data-i18n="comparativa.ejes.heading">Ejes de evaluación</h2>'),
    ('<table class="w-full text-sm" aria-label="Comparativa por ejes">',
     '<table class="w-full text-sm" aria-label="Comparativa por ejes" data-i18n-attr="aria-label:comparativa.ejes.ariaLabel">'),
    ('<th class="text-left px-4 py-3 font-semibold text-muted w-40">Eje</th>',
     '<th class="text-left px-4 py-3 font-semibold text-muted w-40" data-i18n="comparativa.ejes.col.eje">Eje</th>'),
    ('<th class="text-left px-4 py-3 font-semibold" style="color:#F97316">Agente CLI</th>',
     '<th class="text-left px-4 py-3 font-semibold" style="color:#F97316" data-i18n="comparativa.ejes.col.agenteCli">Agente CLI</th>'),
    ('<th class="text-left px-4 py-3 font-semibold" style="color:#2563EB">Orquestador</th>',
     '<th class="text-left px-4 py-3 font-semibold" style="color:#2563EB" data-i18n="comparativa.ejes.col.orquestador">Orquestador</th>'),
    # tools table
    ('<h2 class="font-display text-2xl font-bold text-ink mb-6 reveal-target">Todas las herramientas</h2>',
     '<h2 class="font-display text-2xl font-bold text-ink mb-6 reveal-target" data-i18n="comparativa.tools.heading">Todas las herramientas</h2>'),
    ('aria-label="Todas las herramientas ordenadas por popularidad">',
     'aria-label="Todas las herramientas ordenadas por popularidad" data-i18n-attr="aria-label:comparativa.tools.ariaLabel">'),
    ('<th class="text-left px-4 py-3 font-semibold text-muted">Herramienta</th>',
     '<th class="text-left px-4 py-3 font-semibold text-muted" data-i18n="comparativa.tools.col.herramienta">Herramienta</th>'),
    ('<th class="text-left px-4 py-3 font-semibold text-muted hidden md:table-cell">Tipo</th>',
     '<th class="text-left px-4 py-3 font-semibold text-muted hidden md:table-cell" data-i18n="comparativa.tools.col.tipo">Tipo</th>'),
    ('<th class="text-left px-4 py-3 font-semibold text-muted">⭐ Estrellas</th>',
     '<th class="text-left px-4 py-3 font-semibold text-muted" data-i18n="comparativa.tools.col.estrellas">⭐ Estrellas</th>'),
    ('<th class="text-left px-4 py-3 font-semibold text-muted hidden md:table-cell">Precio</th>',
     '<th class="text-left px-4 py-3 font-semibold text-muted hidden md:table-cell" data-i18n="comparativa.tools.col.precio">Precio</th>'),
    ('<th class="text-left px-4 py-3 font-semibold text-muted hidden md:table-cell">Lenguaje</th>',
     '<th class="text-left px-4 py-3 font-semibold text-muted hidden md:table-cell" data-i18n="comparativa.tools.col.lenguaje">Lenguaje</th>'),
    ('<th class="px-4 py-3 font-semibold text-muted text-center">Detalle</th>',
     '<th class="px-4 py-3 font-semibold text-muted text-center" data-i18n="comparativa.tools.col.detalle">Detalle</th>'),
    # footnote
    ('<p class="text-xs text-muted mt-4">* Estrellas de GitHub a fecha de junio de 2026.',
     '<p class="text-xs text-muted mt-4" data-i18n="comparativa.footnote">* Estrellas de GitHub a fecha de junio de 2026.'),
]

# ─── casos-uso.html ───────────────────────────────────────────────────────────
OLD_SCRIPT = '''<script>
document.addEventListener('DOMContentLoaded', function() {
  if (!window.GUIA_V3 || !GUIA_V3.casos_uso) return;
  var container = document.getElementById('casosGrid');
  var palettes = [
    {bg:'#431407',accent:'#F97316'},{bg:'#052014',accent:'#10B981'},
    {bg:'#0A1628',accent:'#60A5FA'},{bg:'#0A1A3A',accent:'#3B82F6'},
    {bg:'#200C0C',accent:'#F87171'},{bg:'#051C2A',accent:'#38BDF8'},
    {bg:'#1C1400',accent:'#FBBF24'},{bg:'#431407',accent:'#F97316'},
    {bg:'#052014',accent:'#10B981'},{bg:'#0A1628',accent:'#60A5FA'}
  ];
  GUIA_V3.casos_uso.forEach(function(caso, i) {
    var pal = palettes[i % palettes.length];
    var card = document.createElement('div');
    card.className = 'bg-surface rounded-2xl border border-line shadow-elev-1 overflow-hidden reveal-target';
    var toolsHtml = '<div id="caso-tools-' + i + '" class="flex flex-wrap gap-2 mt-4"></div>';
    card.innerHTML =
      '<div class="p-6 md:p-8">' +
        '<div class="flex items-start gap-4 mb-4">' +
          '<div class="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-base" style="background:' + pal.bg + ';color:' + pal.accent + '">' + (i+1) + '</div>' +
          '<div class="flex-1">' +
            '<h2 class="font-display text-xl font-bold text-ink mb-1">' + escapeHtml(caso.necesidad) + '</h2>' +
            '<p class="text-sm text-muted leading-relaxed">' + escapeHtml(caso.descripcion) + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="bg-paper rounded-xl p-4 mt-4">' +
          '<div class="text-xs font-semibold uppercase tracking-wide mb-3" style="color:' + pal.accent + '">' + (window.I18N ? I18N.t('casosUso.labelRazon') : 'Por qué esta combinación') + '</div>' +
          '<p class="text-sm text-muted leading-relaxed">' + escapeHtml(caso.razon) + '</p>' +
        '</div>' +
        '<div>' +
          '<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2 mt-4">' + (window.I18N ? I18N.t('casosUso.labelHerramientas') : 'Herramientas recomendadas') + '</div>' +
          toolsHtml +
        '</div>' +
      '</div>';
    container.appendChild(card);
    renderMiniCards(caso.herramientas, 'caso-tools-' + i);
  });
  observeNewRevealTargets();
  function escapeHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
});
</script>'''

NEW_SCRIPT = '''<script>
document.addEventListener('DOMContentLoaded', function() {
  function escapeHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  var palettes = [
    {bg:'#431407',accent:'#F97316'},{bg:'#052014',accent:'#10B981'},
    {bg:'#0A1628',accent:'#60A5FA'},{bg:'#0A1A3A',accent:'#3B82F6'},
    {bg:'#200C0C',accent:'#F87171'},{bg:'#051C2A',accent:'#38BDF8'},
    {bg:'#1C1400',accent:'#FBBF24'},{bg:'#431407',accent:'#F97316'},
    {bg:'#052014',accent:'#10B981'},{bg:'#0A1628',accent:'#60A5FA'}
  ];
  function renderCasos() {
    if (!window.GUIA_V3 || !GUIA_V3.casos_uso) return;
    var container = document.getElementById('casosGrid');
    container.innerHTML = '';
    GUIA_V3.casos_uso.forEach(function(caso, i) {
      var pal = palettes[i % palettes.length];
      var card = document.createElement('div');
      card.className = 'bg-surface rounded-2xl border border-line shadow-elev-1 overflow-hidden reveal-target';
      var toolsHtml = '<div id="caso-tools-' + i + '" class="flex flex-wrap gap-2 mt-4"></div>';
      card.innerHTML =
        '<div class="p-6 md:p-8">' +
          '<div class="flex items-start gap-4 mb-4">' +
            '<div class="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-base" style="background:' + pal.bg + ';color:' + pal.accent + '">' + (i+1) + '</div>' +
            '<div class="flex-1">' +
              '<h2 class="font-display text-xl font-bold text-ink mb-1">' + escapeHtml(caso.necesidad) + '</h2>' +
              '<p class="text-sm text-muted leading-relaxed">' + escapeHtml(caso.descripcion) + '</p>' +
            '</div>' +
          '</div>' +
          '<div class="bg-paper rounded-xl p-4 mt-4">' +
            '<div class="text-xs font-semibold uppercase tracking-wide mb-3" style="color:' + pal.accent + '">' + (window.I18N ? I18N.t('casosUso.labelRazon') : 'Por qué esta combinación') + '</div>' +
            '<p class="text-sm text-muted leading-relaxed">' + escapeHtml(caso.razon) + '</p>' +
          '</div>' +
          '<div>' +
            '<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2 mt-4">' + (window.I18N ? I18N.t('casosUso.labelHerramientas') : 'Herramientas recomendadas') + '</div>' +
            toolsHtml +
          '</div>' +
        '</div>';
      container.appendChild(card);
      renderMiniCards(caso.herramientas, 'caso-tools-' + i);
    });
    observeNewRevealTargets();
  }
  window.rerenderDynamic = renderCasos;
  renderCasos();
});
</script>'''

CASOS = MC + [
    ('<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-4 leading-tight">Casos de <span class="text-gradient">uso reales</span></h1>',
     '<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-4 leading-tight" data-i18n-html="casosUso.hero.h1">Casos de <span class="text-gradient">uso reales</span></h1>'),
    ('<p class="text-lg text-muted leading-relaxed">\n        Cada escenario describe',
     '<p class="text-lg text-muted leading-relaxed" data-i18n="casosUso.hero.desc">\n        Cada escenario describe'),
    (OLD_SCRIPT, NEW_SCRIPT),
]

# ─── agentes-cli.html ─────────────────────────────────────────────────────────
AGENTES = MC + [
    ('<p>Un agente CLI lee tu proyecto, interpreta errores, propone cambios concretos y,',
     '<p data-i18n-html="agentes-cli.explainer.body">Un agente CLI lee tu proyecto, interpreta errores, propone cambios concretos y,'),
    ('data-filter="todos" class="px-4 py-1.5 rounded-full border text-sm font-medium cursor-pointer transition-all duration-150 bg-brand text-white border-brand shadow-sm">Todos</button>',
     'data-filter="todos" class="px-4 py-1.5 rounded-full border text-sm font-medium cursor-pointer transition-all duration-150 bg-brand text-white border-brand shadow-sm" data-i18n="ui.filter.todos">Todos</button>'),
    ('<p id="cliEmpty" class="hidden text-center text-muted py-16">No hay herramientas en esta categoría.</p>',
     '<p id="cliEmpty" class="hidden text-center text-muted py-16" data-i18n="ui.emptyState">No hay herramientas en esta categoría.</p>'),
]

# ─── ruta-aprendizaje.html ───────────────────────────────────────────────────
RUTA = MC + [
    # hero
    ('<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-4 leading-tight">Ruta de <span class="text-gradient">aprendizaje</span></h1>',
     '<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-4 leading-tight" data-i18n-html="rutaAprendizaje.hero.h1">Ruta de <span class="text-gradient">aprendizaje</span></h1>'),
    ('<p class="text-lg text-muted leading-relaxed">\n        ¿Por dónde empiezo?',
     '<p class="text-lg text-muted leading-relaxed" data-i18n="rutaAprendizaje.hero.desc">\n        ¿Por dónde empiezo?'),
    # step 1
    ('<h2 class="font-display text-xl font-bold text-ink">Entiende qué es un agente IA</h2>',
     '<h2 class="font-display text-xl font-bold text-ink" data-i18n="rutaAprendizaje.s1.heading">Entiende qué es un agente IA</h2>'),
    ('<p class="text-sm text-muted leading-relaxed mb-4">Un agente IA es software que percibe',
     '<p class="text-sm text-muted leading-relaxed mb-4" data-i18n="rutaAprendizaje.s1.desc">Un agente IA es software que percibe'),
    ('<div class="rounded-xl p-4 mb-4" style="background:#431407">\n              <div class="text-xs font-semibold uppercase tracking-wide mb-1" style="color:#F97316">Objetivo</div>',
     '<div class="rounded-xl p-4 mb-4" style="background:#431407">\n              <div class="text-xs font-semibold uppercase tracking-wide mb-1" style="color:#F97316" data-i18n="rutaAprendizaje.objLabel">Objetivo</div>'),
    ('<p class="text-sm text-ink/80">Entender la idea fundamental',
     '<p class="text-sm text-ink/80" data-i18n="rutaAprendizaje.s1.obj">Entender la idea fundamental'),
    ('<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Herramientas para empezar</div>\n            <div id="rutaTools0"',
     '<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2" data-i18n="rutaAprendizaje.toolsLabelEmpezar">Herramientas para empezar</div>\n            <div id="rutaTools0"'),
    # step 2
    ('<h2 class="font-display text-xl font-bold text-ink">Prueba un agente CLI en tu primer proyecto</h2>',
     '<h2 class="font-display text-xl font-bold text-ink" data-i18n="rutaAprendizaje.s2.heading">Prueba un agente CLI en tu primer proyecto</h2>'),
    ('<p class="text-sm text-muted leading-relaxed mb-4">Los agentes CLI viven en tu terminal.',
     '<p class="text-sm text-muted leading-relaxed mb-4" data-i18n="rutaAprendizaje.s2.desc">Los agentes CLI viven en tu terminal.'),
    ('<div class="rounded-xl p-4 mb-4" style="background:#052014">\n              <div class="text-xs font-semibold uppercase tracking-wide mb-1" style="color:#10B981">Objetivo</div>',
     '<div class="rounded-xl p-4 mb-4" style="background:#052014">\n              <div class="text-xs font-semibold uppercase tracking-wide mb-1" style="color:#10B981" data-i18n="rutaAprendizaje.objLabel">Objetivo</div>'),
    ('<p class="text-sm text-ink/80">Cómo instalar, configurar y usar',
     '<p class="text-sm text-ink/80" data-i18n="rutaAprendizaje.s2.obj">Cómo instalar, configurar y usar'),
    ('<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Herramientas para empezar</div>\n            <div id="rutaTools1"',
     '<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2" data-i18n="rutaAprendizaje.toolsLabelEmpezar">Herramientas para empezar</div>\n            <div id="rutaTools1"'),
    # step 3 (combined Objetivo+p for uniqueness vs step 4)
    ('<h2 class="font-display text-xl font-bold text-ink">Automatiza tareas específicas de desarrollo</h2>',
     '<h2 class="font-display text-xl font-bold text-ink" data-i18n="rutaAprendizaje.s3.heading">Automatiza tareas específicas de desarrollo</h2>'),
    ('<p class="text-sm text-muted leading-relaxed mb-4">Ya tienes un agente funcionando',
     '<p class="text-sm text-muted leading-relaxed mb-4" data-i18n="rutaAprendizaje.s3.desc">Ya tienes un agente funcionando'),
    # step 3 obj (unique: Usar agentes para tareas concretas)
    ('<div class="text-xs font-semibold uppercase tracking-wide mb-1" style="color:#60A5FA">Objetivo</div>\n              <p class="text-sm text-ink/80">Usar agentes para tareas',
     '<div class="text-xs font-semibold uppercase tracking-wide mb-1" style="color:#60A5FA" data-i18n="rutaAprendizaje.objLabel">Objetivo</div>\n              <p class="text-sm text-ink/80" data-i18n="rutaAprendizaje.s3.obj">Usar agentes para tareas'),
    ('<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Herramientas para practicar</div>\n            <div id="rutaTools2"',
     '<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2" data-i18n="rutaAprendizaje.toolsLabelPracticar">Herramientas para practicar</div>\n            <div id="rutaTools2"'),
    # step 4
    ('<h2 class="font-display text-xl font-bold text-ink">Coordina múltiples agentes en paralelo</h2>',
     '<h2 class="font-display text-xl font-bold text-ink" data-i18n="rutaAprendizaje.s4.heading">Coordina múltiples agentes en paralelo</h2>'),
    ('<p class="text-sm text-muted leading-relaxed mb-4">Un agente es potente.',
     '<p class="text-sm text-muted leading-relaxed mb-4" data-i18n="rutaAprendizaje.s4.desc">Un agente es potente.'),
    # step 4 obj (unique: Ejecutar varios agentes)
    ('<div class="text-xs font-semibold uppercase tracking-wide mb-1" style="color:#60A5FA">Objetivo</div>\n              <p class="text-sm text-ink/80">Ejecutar varios agentes',
     '<div class="text-xs font-semibold uppercase tracking-wide mb-1" style="color:#60A5FA" data-i18n="rutaAprendizaje.objLabel">Objetivo</div>\n              <p class="text-sm text-ink/80" data-i18n="rutaAprendizaje.s4.obj">Ejecutar varios agentes'),
    ('<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Herramientas para practicar</div>\n            <div id="rutaTools3"',
     '<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2" data-i18n="rutaAprendizaje.toolsLabelPracticar">Herramientas para practicar</div>\n            <div id="rutaTools3"'),
    # step 5
    ('<h2 class="font-display text-xl font-bold text-ink">Automatiza el backlog completo sin supervisión</h2>',
     '<h2 class="font-display text-xl font-bold text-ink" data-i18n="rutaAprendizaje.s5.heading">Automatiza el backlog completo sin supervisión</h2>'),
    ('<p class="text-sm text-muted leading-relaxed mb-4">El siguiente nivel: no supervisas',
     '<p class="text-sm text-muted leading-relaxed mb-4" data-i18n="rutaAprendizaje.s5.desc">El siguiente nivel: no supervisas'),
    ('<div class="rounded-xl p-4 mb-4" style="background:#200C0C">\n              <div class="text-xs font-semibold uppercase tracking-wide mb-1" style="color:#F87171">Objetivo</div>',
     '<div class="rounded-xl p-4 mb-4" style="background:#200C0C">\n              <div class="text-xs font-semibold uppercase tracking-wide mb-1" style="color:#F87171" data-i18n="rutaAprendizaje.objLabel">Objetivo</div>'),
    ('<p class="text-sm text-ink/80">Dejar agentes trabajando de forma completamente',
     '<p class="text-sm text-ink/80" data-i18n="rutaAprendizaje.s5.obj">Dejar agentes trabajando de forma completamente'),
    ('<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Herramientas para practicar</div>\n            <div id="rutaTools4"',
     '<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2" data-i18n="rutaAprendizaje.toolsLabelPracticar">Herramientas para practicar</div>\n            <div id="rutaTools4"'),
    # step 6
    ('<h2 class="font-display text-xl font-bold text-ink">Orquesta enjambres de agentes especializados</h2>',
     '<h2 class="font-display text-xl font-bold text-ink" data-i18n="rutaAprendizaje.s6.heading">Orquesta enjambres de agentes especializados</h2>'),
    ('<p class="text-sm text-muted leading-relaxed mb-4">En lugar de agentes genéricos que lo hacen todo,',
     '<p class="text-sm text-muted leading-relaxed mb-4" data-i18n="rutaAprendizaje.s6.desc">En lugar de agentes genéricos que lo hacen todo,'),
    ('<div class="rounded-xl p-4 mb-4" style="background:#051C1A">\n              <div class="text-xs font-semibold uppercase tracking-wide mb-1" style="color:#2DD4BF">Objetivo</div>',
     '<div class="rounded-xl p-4 mb-4" style="background:#051C1A">\n              <div class="text-xs font-semibold uppercase tracking-wide mb-1" style="color:#2DD4BF" data-i18n="rutaAprendizaje.objLabel">Objetivo</div>'),
    ('<p class="text-sm text-ink/80">La arquitectura avanzada: múltiples agentes especializados',
     '<p class="text-sm text-ink/80" data-i18n="rutaAprendizaje.s6.obj">La arquitectura avanzada: múltiples agentes especializados'),
    ('<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Herramientas para practicar</div>\n            <div id="rutaTools5"',
     '<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-2" data-i18n="rutaAprendizaje.toolsLabelPracticar">Herramientas para practicar</div>\n            <div id="rutaTools5"'),
    # CTA
    ('<h2 class="font-display text-2xl font-bold text-ink mb-3">¿Listo para el siguiente nivel?</h2>',
     '<h2 class="font-display text-2xl font-bold text-ink mb-3" data-i18n="rutaAprendizaje.cta.heading">¿Listo para el siguiente nivel?</h2>'),
    ('<p class="text-muted mb-6">Consulta los casos de uso reales',
     '<p class="text-muted mb-6" data-i18n="rutaAprendizaje.cta.body">Consulta los casos de uso reales'),
    ('<a href="casos-uso.html" class="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-xl text-sm font-semibold hover:bg-brand/90 transition-colors shadow-elev-2">Ver casos de uso →</a>',
     '<a href="casos-uso.html" class="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-xl text-sm font-semibold hover:bg-brand/90 transition-colors shadow-elev-2" data-i18n="rutaAprendizaje.cta.button">Ver casos de uso →</a>'),
]

# ─── orquestadores.html (modal only — already well-cabled) ────────────────────
ORQS = MC + [
    ('<p id="orcEmpty" class="hidden text-center text-muted py-16">No hay herramientas en esta categoría.</p>',
     '<p id="orcEmpty" class="hidden text-center text-muted py-16" data-i18n="ui.emptyState">No hay herramientas en esta categoría.</p>'),
]

# ─── concepto.html ────────────────────────────────────────────────────────────
CONC = [
    # hero badge
    ('        Artículo conceptual\n      </div>',
     '        <span data-i18n="concepto.hero.badge">Artículo conceptual</span>\n      </div>'),
    # h1 multiline (add attr on opening tag)
    ('<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-5 leading-tight">\n        ¿Qué es un agente',
     '<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-5 leading-tight" data-i18n-html="concepto.hero.h1">\n        ¿Qué es un agente'),
    # subtitle
    ('<p class="text-lg text-muted leading-relaxed">\n        De Stack Overflow',
     '<p class="text-lg text-muted leading-relaxed" data-i18n="concepto.hero.subtitle">\n        De Stack Overflow'),
    # meta spans — wrap text after SVG
    ('</svg>8 min lectura</span>',
     '</svg><span data-i18n="concepto.hero.readTime">8 min lectura</span></span>'),
    ('</svg>7 secciones</span>',
     '</svg><span data-i18n="concepto.hero.sections">7 secciones</span></span>'),
    ('</svg>Junio 2026</span>',
     '</svg><span data-i18n="concepto.hero.date">Junio 2026</span></span>'),
    # mobile TOC label
    ('<span>Tabla de contenidos</span>',
     '<span data-i18n="concepto.toc.label">Tabla de contenidos</span>'),
    # mobile TOC links
    ('"block py-1.5 text-sm text-muted hover:text-brand transition-colors">1. La frustración de explicar código</a>',
     '"block py-1.5 text-sm text-muted hover:text-brand transition-colors" data-i18n="concepto.toc.s1">1. La frustración de explicar código</a>'),
    ('"block py-1.5 text-sm text-muted hover:text-brand transition-colors">2. Entrada de los agentes CLI</a>',
     '"block py-1.5 text-sm text-muted hover:text-brand transition-colors" data-i18n="concepto.toc.s2">2. Entrada de los agentes CLI</a>'),
    ('"block py-1.5 text-sm text-muted hover:text-brand transition-colors">3. Cómo funciona bajo el capó</a>',
     '"block py-1.5 text-sm text-muted hover:text-brand transition-colors" data-i18n="concepto.toc.s3">3. Cómo funciona bajo el capó</a>'),
    ('"block py-1.5 text-sm text-muted hover:text-brand transition-colors">4. Diferencia con chatbot</a>',
     '"block py-1.5 text-sm text-muted hover:text-brand transition-colors" data-i18n="concepto.toc.s4">4. Diferencia con chatbot</a>'),
    ('"block py-1.5 text-sm text-muted hover:text-brand transition-colors">5. Casos de uso reales</a>',
     '"block py-1.5 text-sm text-muted hover:text-brand transition-colors" data-i18n="concepto.toc.s5">5. Casos de uso reales</a>'),
    ('"block py-1.5 text-sm text-muted hover:text-brand transition-colors">6. Limitaciones reales</a>',
     '"block py-1.5 text-sm text-muted hover:text-brand transition-colors" data-i18n="concepto.toc.s6">6. Limitaciones reales</a>'),
    ('"block py-1.5 text-sm text-muted hover:text-brand transition-colors">7. Cómo elegir</a>',
     '"block py-1.5 text-sm text-muted hover:text-brand transition-colors" data-i18n="concepto.toc.s7">7. Cómo elegir</a>'),
    # desktop sidebar heading
    ('<h2 class="text-[11px] font-semibold text-muted uppercase tracking-wider mb-4 px-3">Contenido</h2>',
     '<h2 class="text-[11px] font-semibold text-muted uppercase tracking-wider mb-4 px-3" data-i18n="concepto.sidebar.heading">Contenido</h2>'),
    # desktop TOC links (class="toc-link")
    ('"toc-link">1. La frustración de explicar código</a>',
     '"toc-link" data-i18n="concepto.toc.s1">1. La frustración de explicar código</a>'),
    ('"toc-link">2. Entrada de los agentes CLI</a>',
     '"toc-link" data-i18n="concepto.toc.s2">2. Entrada de los agentes CLI</a>'),
    ('"toc-link">3. Cómo funciona bajo el capó</a>',
     '"toc-link" data-i18n="concepto.toc.s3">3. Cómo funciona bajo el capó</a>'),
    ('"toc-link">4. Diferencia con chatbot</a>',
     '"toc-link" data-i18n="concepto.toc.s4">4. Diferencia con chatbot</a>'),
    ('"toc-link">5. Casos de uso reales</a>',
     '"toc-link" data-i18n="concepto.toc.s5">5. Casos de uso reales</a>'),
    ('"toc-link">6. Limitaciones reales</a>',
     '"toc-link" data-i18n="concepto.toc.s6">6. Limitaciones reales</a>'),
    ('"toc-link">7. Cómo elegir</a>',
     '"toc-link" data-i18n="concepto.toc.s7">7. Cómo elegir</a>'),
    # sidebar CTA
    ('<p class="text-xs text-brand font-medium leading-relaxed mb-3">¿Listo para ver las herramientas?</p>',
     '<p class="text-xs text-brand font-medium leading-relaxed mb-3" data-i18n="concepto.sidebar.cta.heading">¿Listo para ver las herramientas?</p>'),
    ('<a href="agentes-cli.html" class="block text-center text-xs font-semibold text-brand bg-brand/10 hover:bg-brand/20 rounded-lg px-3 py-2 transition-colors">Ver catálogo →</a>',
     '<a href="agentes-cli.html" class="block text-center text-xs font-semibold text-brand bg-brand/10 hover:bg-brand/20 rounded-lg px-3 py-2 transition-colors" data-i18n="concepto.sidebar.cta.button">Ver catálogo →</a>'),
    # section headings (article-h2)
    ('<h2 class="article-h2 !mt-0 !mb-0">La frustración de explicar código a una máquina</h2>',
     '<h2 class="article-h2 !mt-0 !mb-0" data-i18n="concepto.s1.heading">La frustración de explicar código a una máquina</h2>'),
    ('<h2 class="article-h2 !mt-0 !mb-0">Entrada de los agentes CLI</h2>',
     '<h2 class="article-h2 !mt-0 !mb-0" data-i18n="concepto.s2.heading">Entrada de los agentes CLI</h2>'),
    ('<h2 class="article-h2 !mt-0 !mb-0">Cómo funciona bajo el capó</h2>',
     '<h2 class="article-h2 !mt-0 !mb-0" data-i18n="concepto.s3.heading">Cómo funciona bajo el capó</h2>'),
    ('<h2 class="article-h2 !mt-0 !mb-0">Diferencia con los chatbots tradicionales</h2>',
     '<h2 class="article-h2 !mt-0 !mb-0" data-i18n="concepto.s4.heading">Diferencia con los chatbots tradicionales</h2>'),
    ('<h2 class="article-h2 !mt-0 !mb-0">Casos de uso reales</h2>',
     '<h2 class="article-h2 !mt-0 !mb-0" data-i18n="concepto.s5.heading">Casos de uso reales</h2>'),
    ('<h2 class="article-h2 !mt-0 !mb-0">Limitaciones reales que no deberías ignorar</h2>',
     '<h2 class="article-h2 !mt-0 !mb-0" data-i18n="concepto.s6.heading">Limitaciones reales que no deberías ignorar</h2>'),
    ('<h2 class="article-h2 !mt-0 !mb-0">Cómo elegir tu primer agente</h2>',
     '<h2 class="article-h2 !mt-0 !mb-0" data-i18n="concepto.s7.heading">Cómo elegir tu primer agente</h2>'),
    # s1 paragraphs
    ('<p class="article-p">\n            Todos hemos pasado por esto',
     '<p class="article-p" data-i18n="concepto.s1.p1">\n            Todos hemos pasado por esto'),
    ('<p class="article-p">\n            Un buscador no entiende tu contexto.',
     '<p class="article-p" data-i18n-html="concepto.s1.p2">\n            Un buscador no entiende tu contexto.'),
    ('<p class="text-sm text-amber-800 leading-relaxed">\n              El problema de la programación',
     '<p class="text-sm text-amber-800 leading-relaxed" data-i18n="concepto.s1.callout">\n              El problema de la programación'),
    # s2 intro
    ('<p class="article-p">\n            Un agente de código CLI es un programa',
     '<p class="article-p" data-i18n="concepto.s2.p1">\n            Un agente de código CLI es un programa'),
    ('<p class="article-p">Escribes un comando como:</p>',
     '<p class="article-p" data-i18n="concepto.s2.p2">Escribes un comando como:</p>'),
    ('<p class="article-p">Y el agente:</p>',
     '<p class="article-p" data-i18n="concepto.s2.p3">Y el agente:</p>'),
    # s2 list items (data-i18n-html where code tag present)
    ('<li class="article-li">Navega tu repositorio completo</li>',
     '<li class="article-li" data-i18n="concepto.s2.li1">Navega tu repositorio completo</li>'),
    ('<li class="article-li">Encuentra el módulo <code',
     '<li class="article-li" data-i18n-html="concepto.s2.li2">Encuentra el módulo <code'),
    ('<li class="article-li">Lee su código actual y sus dependencias</li>',
     '<li class="article-li" data-i18n="concepto.s2.li3">Lee su código actual y sus dependencias</li>'),
    ('<li class="article-li">Entiende la estructura y el estilo del proyecto</li>',
     '<li class="article-li" data-i18n="concepto.s2.li4">Entiende la estructura y el estilo del proyecto</li>'),
    ('<li class="article-li">Propone dónde y cómo añadir validación</li>',
     '<li class="article-li" data-i18n="concepto.s2.li5">Propone dónde y cómo añadir validación</li>'),
    ('<li class="article-li">Te muestra el diff antes de aplicar</li>',
     '<li class="article-li" data-i18n="concepto.s2.li6">Te muestra el diff antes de aplicar</li>'),
    ('<li class="article-li">Aplica el cambio (opcionalmente) con tu aprobación</li>',
     '<li class="article-li" data-i18n="concepto.s2.li7">Aplica el cambio (opcionalmente) con tu aprobación</li>'),
    # s2 closing
    ('<p class="article-p">\n            La diferencia fundamental: el agente',
     '<p class="article-p" data-i18n-html="concepto.s2.closing">\n            La diferencia fundamental: el agente'),
]

# ─── glosario-faq.html ───────────────────────────────────────────────────────
GLOS = [
    # hero badge
    ('        Referencia rápida\n      </div>',
     '        <span data-i18n="glosarioFaq.hero.badge">Referencia rápida</span>\n      </div>'),
    # h1
    ('<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-4 leading-tight">Glosario y <span class="text-gradient">preguntas frecuentes</span></h1>',
     '<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-4 leading-tight" data-i18n-html="glosarioFaq.hero.h1">Glosario y <span class="text-gradient">preguntas frecuentes</span></h1>'),
    # desc
    ('<p class="text-lg text-muted leading-relaxed mb-7">\n        Todos los términos del ecosistema',
     '<p class="text-lg text-muted leading-relaxed mb-7" data-i18n="glosarioFaq.hero.desc">\n        Todos los términos del ecosistema'),
    # CTA buttons (SVG+text — wrap text in span)
    ('          Ver glosario\n        </a>',
     '          <span data-i18n="glosarioFaq.hero.ctaGlosario">Ver glosario</span>\n        </a>'),
    ('          Preguntas frecuentes\n        </a>',
     '          <span data-i18n="glosarioFaq.hero.ctaFaq">Preguntas frecuentes</span>\n        </a>'),
    # stats
    ('<div class="text-xs text-muted mt-0.5">términos definidos</div>',
     '<div class="text-xs text-muted mt-0.5" data-i18n="glosarioFaq.stats.terminos">términos definidos</div>'),
    ('<div class="text-xs text-muted mt-0.5">preguntas respondidas</div>',
     '<div class="text-xs text-muted mt-0.5" data-i18n="glosarioFaq.stats.preguntas">preguntas respondidas</div>'),
    ('<div class="text-xs text-muted mt-0.5">para leer todo</div>',
     '<div class="text-xs text-muted mt-0.5" data-i18n="glosarioFaq.stats.tiempo">para leer todo</div>'),
    # glosario section heading
    ('<h2 class="font-display text-2xl md:text-3xl font-bold text-ink">Glosario</h2>',
     '<h2 class="font-display text-2xl md:text-3xl font-bold text-ink" data-i18n="glosarioFaq.glosario.heading">Glosario</h2>'),
    ('<p class="text-sm text-muted mt-0.5">Los 20 términos esenciales del ecosistema de agentes IA</p>',
     '<p class="text-sm text-muted mt-0.5" data-i18n="glosarioFaq.glosario.subtitle">Los 20 términos esenciales del ecosistema de agentes IA</p>'),
    # sidebar
    ('<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-3">Índice del glosario</div>',
     '<div class="text-xs font-semibold text-muted uppercase tracking-wide mb-3" data-i18n="glosarioFaq.glosario.sidebar.index">Índice del glosario</div>'),
    ('<div class="text-xs font-semibold text-brand uppercase tracking-wide mb-2">¿Quieres más detalle?</div>',
     '<div class="text-xs font-semibold text-brand uppercase tracking-wide mb-2" data-i18n="glosarioFaq.glosario.sidebar.ctaHeading">¿Quieres más detalle?</div>'),
    ('<p class="text-xs text-ink/70 leading-relaxed mb-3">Lee el artículo completo sobre cómo funcionan',
     '<p class="text-xs text-ink/70 leading-relaxed mb-3" data-i18n="glosarioFaq.glosario.sidebar.ctaBody">Lee el artículo completo sobre cómo funcionan'),
    ('<a href="concepto.html" class="block text-center px-4 py-2 bg-brand text-white rounded-xl text-xs font-semibold hover:bg-brand/90 transition-colors">Leer artículo →</a>',
     '<a href="concepto.html" class="block text-center px-4 py-2 bg-brand text-white rounded-xl text-xs font-semibold hover:bg-brand/90 transition-colors" data-i18n="glosarioFaq.glosario.sidebar.ctaButton">Leer artículo →</a>'),
    # header count/updated
    ('<span class="text-sm font-semibold text-ink">20 términos</span>',
     '<span class="text-sm font-semibold text-ink" data-i18n="glosarioFaq.glosario.header.count">20 términos</span>'),
    ('<span class="text-xs text-muted">Actualizado junio 2026</span>',
     '<span class="text-xs text-muted" data-i18n="glosarioFaq.glosario.header.updated">Actualizado junio 2026</span>'),
    # FAQ section
    ('<h2 class="font-display text-2xl md:text-3xl font-bold text-ink">Preguntas frecuentes</h2>',
     '<h2 class="font-display text-2xl md:text-3xl font-bold text-ink" data-i18n="glosarioFaq.faq.heading">Preguntas frecuentes</h2>'),
    ('<p class="text-sm text-muted mt-0.5">Las 14 dudas más comunes al empezar con agentes IA</p>',
     '<p class="text-sm text-muted mt-0.5" data-i18n="glosarioFaq.faq.subtitle">Las 14 dudas más comunes al empezar con agentes IA</p>'),
    # FAQ questions (span inside button)
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Qué diferencia hay entre un CLI agent y un orquestador?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q1">¿Qué diferencia hay entre un CLI agent y un orquestador?</span>'),
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Cuál es la herramienta más barata para empezar?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q2">¿Cuál es la herramienta más barata para empezar?</span>'),
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Necesito suscripción a Claude para usar Claude Code?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q3">¿Necesito suscripción a Claude para usar Claude Code?</span>'),
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Cuál es el agente más poderoso en 2026?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q4">¿Cuál es el agente más poderoso en 2026?</span>'),
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Puedo usar estos agentes sin suscripción?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q5">¿Puedo usar estos agentes sin suscripción?</span>'),
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Qué es el «Ralph Wiggum Loop» que veo mencionado?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q6">¿Qué es el «Ralph Wiggum Loop» que veo mencionado?</span>'),
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Cómo elijo entre múltiples agentes si tengo pocas peticiones gratis?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q7">¿Cómo elijo entre múltiples agentes si tengo pocas peticiones gratis?</span>'),
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Es seguro dejar agentes trabajando de forma autónoma por la noche?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q8">¿Es seguro dejar agentes trabajando de forma autónoma por la noche?</span>'),
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Puedo usar varios agentes a la vez en el mismo proyecto?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q9">¿Puedo usar varios agentes a la vez en el mismo proyecto?</span>'),
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Cuál es el benchmark más fiable para comparar agentes?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q10">¿Cuál es el benchmark más fiable para comparar agentes?</span>'),
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Necesito saber programar para usar agentes IA?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q11">¿Necesito saber programar para usar agentes IA?</span>'),
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Puedo usar agentes IA para tareas que no sean programación?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q12">¿Puedo usar agentes IA para tareas que no sean programación?</span>'),
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Cómo gestiono el coste si dejo agentes trabajando autónomamente?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q13">¿Cómo gestiono el coste si dejo agentes trabajando autónomamente?</span>'),
    ('<span class="font-semibold text-ink text-sm leading-snug">¿Qué herramienta me recomiendan para mi primer proyecto con agentes?</span>',
     '<span class="font-semibold text-ink text-sm leading-snug" data-i18n="glosarioFaq.faq.q14">¿Qué herramienta me recomiendan para mi primer proyecto con agentes?</span>'),
    # FAQ answers (p inside faq-answer)
    ('<p class="text-sm text-muted leading-relaxed">Un agente CLI ejecuta una tarea de principio',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a1">Un agente CLI ejecuta una tarea de principio'),
    ('<p class="text-sm text-muted leading-relaxed">Gemini CLI es la más accesible',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a2">Gemini CLI es la más accesible'),
    ('<p class="text-sm text-muted leading-relaxed">Claude Code tiene un plan Free',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a3">Claude Code tiene un plan Free'),
    ('<p class="text-sm text-muted leading-relaxed">Claude Code (basado en Claude 3.7 Opus)',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a4">Claude Code (basado en Claude 3.7 Opus)'),
    ('<p class="text-sm text-muted leading-relaxed">Sí. Opciones completamente gratuitas',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a5">Sí. Opciones completamente gratuitas'),
    ('<p class="text-sm text-muted leading-relaxed">Es un patrón de bucle autónomo',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a6">Es un patrón de bucle autónomo'),
    ('<p class="text-sm text-muted leading-relaxed">Empieza con Gemini CLI (1.000 diarias)',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a7">Empieza con Gemini CLI (1.000 diarias)'),
    ('<p class="text-sm text-muted leading-relaxed">Es seguro si defines bien tus tareas',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a8">Es seguro si defines bien tus tareas'),
    ('<p class="text-sm text-muted leading-relaxed">Sí, así funciona la orquestación.',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a9">Sí, así funciona la orquestación.'),
    ('<p class="text-sm text-muted leading-relaxed">SWE-bench es el estándar',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a10">SWE-bench es el estándar'),
    ('<p class="text-sm text-muted leading-relaxed">No es obligatorio, pero ayuda.',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a11">No es obligatorio, pero ayuda.'),
    ('<p class="text-sm text-muted leading-relaxed">La mayoría están diseñadas para ingeniería',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a12">La mayoría están diseñadas para ingeniería'),
    ('<p class="text-sm text-muted leading-relaxed">Establece límites de presupuesto',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a13">Establece límites de presupuesto'),
    ('<p class="text-sm text-muted leading-relaxed">Empieza con Claude Code o Cline',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.faq.a14">Empieza con Claude Code o Cline'),
    # tip box
    ('<h3 class="font-display font-bold text-ink mb-1">¿Tienes una pregunta que no está aquí?</h3>',
     '<h3 class="font-display font-bold text-ink mb-1" data-i18n="glosarioFaq.tip.heading">¿Tienes una pregunta que no está aquí?</h3>'),
    ('<p class="text-sm text-muted leading-relaxed">Lee el artículo conceptual completo',
     '<p class="text-sm text-muted leading-relaxed" data-i18n="glosarioFaq.tip.body">Lee el artículo conceptual completo'),
    ('<a href="concepto.html" class="inline-flex items-center gap-1.5 px-4 py-2 bg-brand text-white rounded-xl text-xs font-semibold hover:bg-brand/90 transition-colors">Artículo conceptual →</a>',
     '<a href="concepto.html" class="inline-flex items-center gap-1.5 px-4 py-2 bg-brand text-white rounded-xl text-xs font-semibold hover:bg-brand/90 transition-colors" data-i18n="glosarioFaq.tip.btnConcepto">Artículo conceptual →</a>'),
    ('<a href="acerca.html" class="inline-flex items-center gap-1.5 px-4 py-2 bg-surface text-brand rounded-xl text-xs font-semibold border border-brand/20 hover:bg-brand-soft transition-colors">Fuentes y créditos →</a>',
     '<a href="acerca.html" class="inline-flex items-center gap-1.5 px-4 py-2 bg-surface text-brand rounded-xl text-xs font-semibold border border-brand/20 hover:bg-brand-soft transition-colors" data-i18n="glosarioFaq.tip.btnFuentes">Fuentes y créditos →</a>'),
    # CTA section
    ('<h2 class="font-display text-2xl font-bold text-ink mb-3">¿Listo para empezar?</h2>',
     '<h2 class="font-display text-2xl font-bold text-ink mb-3" data-i18n="glosarioFaq.cta.heading">¿Listo para empezar?</h2>'),
    ('<p class="text-muted mb-6 max-w-md mx-auto">Consulta el catálogo de herramientas disponibles',
     '<p class="text-muted mb-6 max-w-md mx-auto" data-i18n="glosarioFaq.cta.body">Consulta el catálogo de herramientas disponibles'),
    ('<a href="agentes-cli.html" class="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-xl text-sm font-semibold hover:bg-brand/90 transition-colors shadow-elev-2">Ver agentes CLI →</a>',
     '<a href="agentes-cli.html" class="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-xl text-sm font-semibold hover:bg-brand/90 transition-colors shadow-elev-2" data-i18n="glosarioFaq.cta.btnCli">Ver agentes CLI →</a>'),
]

# ─── acerca.html ──────────────────────────────────────────────────────────────
ACER = [
    # hero h1 (multiline, mb-5)
    ('<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-5 leading-tight">\n        Acerca de <span class="text-gradient">esta guía</span>',
     '<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-5 leading-tight" data-i18n-html="acerca.hero.h1">\n        Acerca de <span class="text-gradient">esta guía</span>'),
    # hero desc
    ('<p class="text-lg text-muted leading-relaxed">\n        Una guía abierta para desarrolladores que quieren entender',
     '<p class="text-lg text-muted leading-relaxed" data-i18n="acerca.hero.desc">\n        Una guía abierta para desarrolladores que quieren entender'),
    # s1
    ('<h2 class="font-display text-2xl font-bold text-ink">Qué es esto</h2>',
     '<h2 class="font-display text-2xl font-bold text-ink" data-i18n="acerca.s1.heading">Qué es esto</h2>'),
    ('<p class="text-ink leading-relaxed text-base">\n          Una guía abierta para desarrolladores',
     '<p class="text-ink leading-relaxed text-base" data-i18n="acerca.s1.p1">\n          Una guía abierta para desarrolladores'),
    ('<p class="text-muted leading-relaxed text-sm mt-3">\n          Las herramientas que cubre esta guía',
     '<p class="text-muted leading-relaxed text-sm mt-3" data-i18n="acerca.s1.p2">\n          Las herramientas que cubre esta guía'),
    # s2
    ('<h2 class="font-display text-2xl font-bold text-ink">A quién va dirigida</h2>',
     '<h2 class="font-display text-2xl font-bold text-ink" data-i18n="acerca.s2.heading">A quién va dirigida</h2>'),
    ('<p class="text-ink leading-relaxed text-base mb-5">Desarrolladores que:</p>',
     '<p class="text-ink leading-relaxed text-base mb-5" data-i18n="acerca.s2.intro">Desarrolladores que:</p>'),
    ('<span class="text-sm text-ink leading-relaxed">Ya saben programar',
     '<span class="text-sm text-ink leading-relaxed" data-i18n="acerca.s2.li1">Ya saben programar'),
    ('<span class="text-sm text-ink leading-relaxed">Están curiosos sobre IA',
     '<span class="text-sm text-ink leading-relaxed" data-i18n="acerca.s2.li2">Están curiosos sobre IA'),
    ('<span class="text-sm text-ink leading-relaxed">Quieren entender la diferencia entre un chatbot',
     '<span class="text-sm text-ink leading-relaxed" data-i18n="acerca.s2.li3">Quieren entender la diferencia entre un chatbot'),
    ('<span class="text-sm text-ink leading-relaxed">Necesitan decidir si adoptar',
     '<span class="text-sm text-ink leading-relaxed" data-i18n="acerca.s2.li4">Necesitan decidir si adoptar'),
    ('<p class="text-muted leading-relaxed text-sm mt-5">\n          No necesitas saber cómo entrenar',
     '<p class="text-muted leading-relaxed text-sm mt-5" data-i18n="acerca.s2.closing">\n          No necesitas saber cómo entrenar'),
    # s3
    ('<h2 class="font-display text-2xl font-bold text-ink">Créditos y fuentes</h2>',
     '<h2 class="font-display text-2xl font-bold text-ink" data-i18n="acerca.s3.heading">Créditos y fuentes</h2>'),
    ('<p class="text-ink leading-relaxed text-base mb-6">\n          Esta guía se inspira',
     '<p class="text-ink leading-relaxed text-base mb-6" data-i18n="acerca.s3.intro">\n          Esta guía se inspira'),
    ('<p class="text-xs text-muted leading-relaxed">Catálogo comunitario de herramientas para orquestar',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="acerca.s3.repo1.desc">Catálogo comunitario de herramientas para orquestar'),
    ('<p class="text-xs text-muted leading-relaxed">Lista comunitaria de agentes de código CLI',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="acerca.s3.repo2.desc">Lista comunitaria de agentes de código CLI'),
    ('<p class="text-muted text-xs leading-relaxed mt-4">\n          Ambos son proyectos comunitarios',
     '<p class="text-muted text-xs leading-relaxed mt-4" data-i18n="acerca.s3.closing">\n          Ambos son proyectos comunitarios'),
    # s4
    ('<h2 class="font-display text-2xl font-bold text-ink">¿Cómo contribuir?</h2>',
     '<h2 class="font-display text-2xl font-bold text-ink" data-i18n="acerca.s4.heading">¿Cómo contribuir?</h2>'),
    ('<p class="text-ink leading-relaxed text-base mb-6">\n          Si encuentras un error, quieres añadir',
     '<p class="text-ink leading-relaxed text-base mb-6" data-i18n="acerca.s4.intro">\n          Si encuentras un error, quieres añadir'),
    ('<h3 class="font-semibold text-ink text-sm mb-1">Abre un issue en el repositorio</h3>',
     '<h3 class="font-semibold text-ink text-sm mb-1" data-i18n="acerca.s4.step1.heading">Abre un issue en el repositorio</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">Describe el error, la sección faltante',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="acerca.s4.step1.desc">Describe el error, la sección faltante'),
    ('<h3 class="font-semibold text-ink text-sm mb-1">Contribuye con un pull request</h3>',
     '<h3 class="font-semibold text-ink text-sm mb-1" data-i18n="acerca.s4.step2.heading">Contribuye con un pull request</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">Si tienes la corrección o el contenido nuevo',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="acerca.s4.step2.desc">Si tienes la corrección o el contenido nuevo'),
    ('<h3 class="font-semibold text-ink text-sm mb-1">Sugiere mejoras a través de una discusión</h3>',
     '<h3 class="font-semibold text-ink text-sm mb-1" data-i18n="acerca.s4.step3.heading">Sugiere mejoras a través de una discusión</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">Para cambios grandes o ideas de dirección',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="acerca.s4.step3.desc">Para cambios grandes o ideas de dirección'),
    # community box
    ('<p class="text-sm text-ink font-medium mb-1">Esta guía es comunidad.</p>',
     '<p class="text-sm text-ink font-medium mb-1" data-i18n="acerca.community.heading">Esta guía es comunidad.</p>'),
    ('<p class="text-xs text-muted">Esperamos tus aportaciones.</p>',
     '<p class="text-xs text-muted" data-i18n="acerca.community.body">Esperamos tus aportaciones.</p>'),
]

# ─── Run ──────────────────────────────────────────────────────────────────────
PAGES = {
    'comparativa.html':     COMP,
    'casos-uso.html':       CASOS,
    'agentes-cli.html':     AGENTES,
    'ruta-aprendizaje.html': RUTA,
    'orquestadores.html':   ORQS,
    'concepto.html':        CONC,
    'glosario-faq.html':    GLOS,
    'acerca.html':          ACER,
}

total_attrs = 0
total_misses = 0
for fname, pairs in PAGES.items():
    fpath = os.path.join(BASE, fname)
    with open(fpath, encoding='utf-8') as f:
        html = f.read()
    html, misses = patch(html, pairs, fname)
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(html)
    count = html.count('data-i18n')
    total_attrs += count
    total_misses += len(misses)
    status = 'OK' if not misses else f'{len(misses)} MISS'
    print(f'{fname:30s}  {count:4d} data-i18n  [{status}]')
    for m in misses:
        print(f'  MISS: {m!r}')

print(f'\nTotal across all pages: {total_attrs} data-i18n attrs, {total_misses} misses')
