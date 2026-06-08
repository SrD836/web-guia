#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
i18n-3 data-i18n cabling: shared nav/footer + meta + hero sections across all 9 pages.
"""
import os

BASE = r'C:\Users\david\md\web-guia'
PAGES = [
    'index.html', 'agentes-cli.html', 'orquestadores.html', 'comparativa.html',
    'casos-uso.html', 'concepto.html', 'ruta-aprendizaje.html', 'glosario-faq.html', 'acerca.html'
]

def apply(content, pairs):
    n = 0
    for old, new in pairs:
        if old in content:
            content = content.replace(old, new)
            n += 1
    return content, n

SHARED = [
    # ARIA LABELS
    ('aria-label="Navegación principal">',
     'aria-label="Navegación principal" data-i18n-attr="aria-label:nav.principalLabel">'),
    ('aria-label="Menú de navegación"',
     'aria-label="Menú de navegación" data-i18n-attr="aria-label:nav.drawerLabel"'),
    ('aria-label="Abrir menú" aria-expanded="false">',
     'aria-label="Abrir menú" data-i18n-attr="aria-label:nav.openMenu" aria-expanded="false">'),
    ('aria-label="Cerrar menú"',
     'aria-label="Cerrar menú" data-i18n-attr="aria-label:nav.closeMenu"'),
    ('aria-label="Mapa del sitio">',
     'aria-label="Mapa del sitio" data-i18n-attr="aria-label:footer.sitemapLabel">'),

    # BRAND TEXT
    ('></svg>\n        Guía de Agentes\n      </a>',
     '></svg>\n        <span data-i18n="nav.brand">Guía de Agentes</span>\n      </a>'),

    # TABLET MENU BUTTON
    ('            Menú <svg xmlns=',
     '            <span data-i18n="nav.menu">Menú</span> <svg xmlns='),

    # MOBILE DRAWER header
    ('<span class="font-display text-lg font-bold text-ink">Navegación</span>',
     '<span class="font-display text-lg font-bold text-ink" data-i18n="nav.navegacion">Navegación</span>'),

    # DESKTOP Aprender button - variant 1 (same line as SVG)
    ('          Aprender <svg id="desktopAprenderChevron"',
     '          <span data-i18n="nav.aprender">Aprender</span> <svg id="desktopAprenderChevron"'),
    # DESKTOP Aprender button - variant 2 (index.html: text on own line)
    ('            Aprender\n            <svg id="desktopAprenderChevron"',
     '            <span data-i18n="nav.aprender">Aprender</span>\n            <svg id="desktopAprenderChevron"'),

    # DESKTOP NAV LINKS (data-page + px-3)
    ('data-page="index.html" class="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Inicio</a>',
     'data-page="index.html" class="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.inicio">Inicio</a>'),
    ('data-page="agentes-cli.html" class="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Agentes CLI</a>',
     'data-page="agentes-cli.html" class="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.agentesCli">Agentes CLI</a>'),
    ('data-page="orquestadores.html" class="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Orquestadores</a>',
     'data-page="orquestadores.html" class="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.orquestadores">Orquestadores</a>'),
    ('data-page="comparativa.html" class="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Comparativa</a>',
     'data-page="comparativa.html" class="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.comparativa">Comparativa</a>'),
    ('data-page="acerca.html" class="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Acerca</a>',
     'data-page="acerca.html" class="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.acerca">Acerca</a>'),

    # DESKTOP DROPDOWN links (data-page + block px-4 NO rounded-lg)
    ('data-page="casos-uso.html" class="block px-4 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors">Casos de uso</a>',
     'data-page="casos-uso.html" class="block px-4 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.casosUso">Casos de uso</a>'),
    ('data-page="ruta-aprendizaje.html" class="block px-4 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors">Ruta de aprendizaje</a>',
     'data-page="ruta-aprendizaje.html" class="block px-4 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.ruta">Ruta de aprendizaje</a>'),
    ('data-page="concepto.html" class="block px-4 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors">Conceptos</a>',
     'data-page="concepto.html" class="block px-4 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.conceptos">Conceptos</a>'),
    ('data-page="glosario-faq.html" class="block px-4 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors">Glosario y FAQ</a>',
     'data-page="glosario-faq.html" class="block px-4 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.glosarioFaq">Glosario y FAQ</a>'),

    # TABLET MENU section labels
    ('class="px-4 pt-3 pb-1 text-[10px] font-semibold text-muted uppercase tracking-wider">Catálogo</div>',
     'class="px-4 pt-3 pb-1 text-[10px] font-semibold text-muted uppercase tracking-wider" data-i18n="nav.catalogo">Catálogo</div>'),
    ('class="px-4 pt-3 pb-1 text-[10px] font-semibold text-muted uppercase tracking-wider">Aprender</div>',
     'class="px-4 pt-3 pb-1 text-[10px] font-semibold text-muted uppercase tracking-wider" data-i18n="nav.aprender">Aprender</div>'),

    # TABLET links (px-4, no data-page — Inicio + Acerca only)
    ('class="block px-4 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors">Inicio</a>',
     'class="block px-4 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.inicio">Inicio</a>'),
    ('class="block px-4 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors">Acerca</a>',
     'class="block px-4 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.acerca">Acerca</a>'),

    # TABLET INDENTED links (px-6, no data-page)
    ('class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors">Agentes CLI</a>',
     'class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.agentesCli">Agentes CLI</a>'),
    ('class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors">Orquestadores</a>',
     'class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.orquestadores">Orquestadores</a>'),
    ('class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors">Comparativa</a>',
     'class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.comparativa">Comparativa</a>'),
    ('class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors">Casos de uso</a>',
     'class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.casosUso">Casos de uso</a>'),
    ('class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors">Ruta de aprendizaje</a>',
     'class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.ruta">Ruta de aprendizaje</a>'),
    ('class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors">Conceptos</a>',
     'class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.conceptos">Conceptos</a>'),
    ('class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors">Glosario y FAQ</a>',
     'class="block px-6 py-2.5 text-sm text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.glosarioFaq">Glosario y FAQ</a>'),

    # MOBILE DRAWER links (block px-4 rounded-lg font-medium + data-page)
    ('data-page="index.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Inicio</a>',
     'data-page="index.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.inicio">Inicio</a>'),
    ('data-page="agentes-cli.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Agentes CLI</a>',
     'data-page="agentes-cli.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.agentesCli">Agentes CLI</a>'),
    ('data-page="orquestadores.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Orquestadores</a>',
     'data-page="orquestadores.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.orquestadores">Orquestadores</a>'),
    ('data-page="comparativa.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Comparativa</a>',
     'data-page="comparativa.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.comparativa">Comparativa</a>'),
    ('data-page="casos-uso.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Casos de uso</a>',
     'data-page="casos-uso.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.casosUso">Casos de uso</a>'),
    ('data-page="ruta-aprendizaje.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Ruta de aprendizaje</a>',
     'data-page="ruta-aprendizaje.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.ruta">Ruta de aprendizaje</a>'),
    ('data-page="concepto.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Conceptos</a>',
     'data-page="concepto.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.conceptos">Conceptos</a>'),
    ('data-page="glosario-faq.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Glosario y FAQ</a>',
     'data-page="glosario-faq.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.glosarioFaq">Glosario y FAQ</a>'),
    ('data-page="acerca.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors">Acerca</a>',
     'data-page="acerca.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-ink hover:bg-line transition-colors" data-i18n="nav.acerca">Acerca</a>'),

    # FOOTER TEXT
    ('<div class="font-display text-xl font-bold text-brand mb-2">Guía de Agentes IA</div>',
     '<div class="font-display text-xl font-bold text-brand mb-2" data-i18n="footer.title">Guía de Agentes IA</div>'),
    ('<p class="text-sm text-muted max-w-xs leading-relaxed">Una guía abierta para desarrolladores que quieren entender los agentes de código CLI y orquestadores.</p>',
     '<p class="text-sm text-muted max-w-xs leading-relaxed" data-i18n="footer.tagline">Una guía abierta para desarrolladores que quieren entender los agentes de código CLI y orquestadores.</p>'),
    ('<p class="text-xs text-muted mt-4">Datos a fecha de junio de 2026</p>',
     '<p class="text-xs text-muted mt-4" data-i18n="footer.fecha">Datos a fecha de junio de 2026</p>'),

    # FOOTER NAV links (class="text-muted hover:text-ink transition-colors" is unique to footer)
    ('class="text-muted hover:text-ink transition-colors">Inicio</a>',
     'class="text-muted hover:text-ink transition-colors" data-i18n="nav.inicio">Inicio</a>'),
    ('class="text-muted hover:text-ink transition-colors">Agentes CLI</a>',
     'class="text-muted hover:text-ink transition-colors" data-i18n="nav.agentesCli">Agentes CLI</a>'),
    ('class="text-muted hover:text-ink transition-colors">Orquestadores</a>',
     'class="text-muted hover:text-ink transition-colors" data-i18n="nav.orquestadores">Orquestadores</a>'),
    ('class="text-muted hover:text-ink transition-colors">Comparativa</a>',
     'class="text-muted hover:text-ink transition-colors" data-i18n="nav.comparativa">Comparativa</a>'),
    ('class="text-muted hover:text-ink transition-colors">Casos de uso</a>',
     'class="text-muted hover:text-ink transition-colors" data-i18n="nav.casosUso">Casos de uso</a>'),
    ('class="text-muted hover:text-ink transition-colors">Ruta de aprendizaje</a>',
     'class="text-muted hover:text-ink transition-colors" data-i18n="nav.ruta">Ruta de aprendizaje</a>'),
    ('class="text-muted hover:text-ink transition-colors">Conceptos</a>',
     'class="text-muted hover:text-ink transition-colors" data-i18n="nav.conceptos">Conceptos</a>'),
    ('class="text-muted hover:text-ink transition-colors">Glosario y FAQ</a>',
     'class="text-muted hover:text-ink transition-colors" data-i18n="nav.glosarioFaq">Glosario y FAQ</a>'),
    ('class="text-muted hover:text-ink transition-colors">Acerca</a>',
     'class="text-muted hover:text-ink transition-colors" data-i18n="nav.acerca">Acerca</a>'),
]

PAGE_SPECIFIC = {
    'index.html': [
        # META
        ('<title>Guía de Agentes IA — CLI y Orquestadores</title>',
         '<title data-i18n="index.meta.title">Guía de Agentes IA — CLI y Orquestadores</title>'),
        ('content="Guía completa de agentes de código CLI y orquestadores IA.',
         'data-i18n-attr="content:index.meta.desc" content="Guía completa de agentes de código CLI y orquestadores IA.'),
        # HERO badge — text after pulse span
        ('          30 herramientas · actualizado junio 2026\n        </div>',
         '          <span data-i18n="index.hero.badge">30 herramientas · actualizado junio 2026</span>\n        </div>'),
        # HERO h1 (has text-gradient span inside — use data-i18n-html)
        ('class="font-display text-5xl md:text-6xl lg:text-7xl font-black text-ink mb-6 leading-[1.05] reveal-target">',
         'class="font-display text-5xl md:text-6xl lg:text-7xl font-black text-ink mb-6 leading-[1.05] reveal-target" data-i18n-html="index.hero.title">'),
        # HERO subtitle
        ('<p class="text-xl text-muted leading-relaxed mb-10 max-w-2xl reveal-target">',
         '<p class="text-xl text-muted leading-relaxed mb-10 max-w-2xl reveal-target" data-i18n="index.hero.subtitle">'),
        # HERO CTA primary (has SVG — wrap text)
        ('            Explorar Agentes CLI\n            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"',
         '            <span data-i18n="index.hero.ctaPrimary">Explorar Agentes CLI</span>\n            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"'),
        # HERO CTA secondary (pure text in <a>)
        ('            Ruta de aprendizaje\n          </a>',
         '            <span data-i18n="index.hero.ctaSecondary">Ruta de aprendizaje</span>\n          </a>'),
        # INTRO
        ('<p class="text-lg text-muted leading-relaxed">\n        Los agentes de código son herramientas',
         '<p class="text-lg text-muted leading-relaxed" data-i18n="index.intro.body">\n        Los agentes de código son herramientas'),
        # ROUTES
        ('<h2 class="font-display text-3xl font-bold text-ink text-center mb-12 reveal-target">Dos caminos, una meta</h2>',
         '<h2 class="font-display text-3xl font-bold text-ink text-center mb-12 reveal-target" data-i18n="index.routes.heading">Dos caminos, una meta</h2>'),
        ('<h3 class="font-display text-2xl font-bold text-ink mb-3 group-hover:text-[#10B981] transition-colors">Agentes de Código CLI</h3>',
         '<h3 class="font-display text-2xl font-bold text-ink mb-3 group-hover:text-[#10B981] transition-colors" data-i18n="index.routes.card1.heading">Agentes de Código CLI</h3>'),
        ('<p class="text-muted leading-relaxed mb-5">Herramientas autónomas que corren en tu terminal',
         '<p class="text-muted leading-relaxed mb-5" data-i18n="index.routes.card1.desc">Herramientas autónomas que corren en tu terminal'),
        ('<span class="inline-flex items-center gap-1.5 text-sm font-semibold text-[#10B981]">Ver catálogo <svg',
         '<span class="inline-flex items-center gap-1.5 text-sm font-semibold text-[#10B981]"><span data-i18n="index.routes.cta">Ver catálogo</span> <svg'),
        ('<h3 class="font-display text-2xl font-bold text-ink mb-3 group-hover:text-[#F97316] transition-colors">Orquestadores</h3>',
         '<h3 class="font-display text-2xl font-bold text-ink mb-3 group-hover:text-[#F97316] transition-colors" data-i18n="index.routes.card2.heading">Orquestadores</h3>'),
        ('<p class="text-muted leading-relaxed mb-5">Plataformas que coordinan múltiples agentes en paralelo',
         '<p class="text-muted leading-relaxed mb-5" data-i18n="index.routes.card2.desc">Plataformas que coordinan múltiples agentes en paralelo'),
        # STEPS
        ('<h2 class="font-display text-3xl font-bold text-ink mb-3">Ruta de aprendizaje en 3 pasos</h2>',
         '<h2 class="font-display text-3xl font-bold text-ink mb-3" data-i18n="index.steps.heading">Ruta de aprendizaje en 3 pasos</h2>'),
        ('<p class="text-muted max-w-xl mx-auto">Sin rodeos: de cero a orquestar agentes de forma autónoma.</p>',
         '<p class="text-muted max-w-xl mx-auto" data-i18n="index.steps.subtitle">Sin rodeos: de cero a orquestar agentes de forma autónoma.</p>'),
        ('<h3 class="font-display text-lg font-bold text-ink mb-2">Entender los conceptos</h3>',
         '<h3 class="font-display text-lg font-bold text-ink mb-2" data-i18n="index.steps.step1.heading">Entender los conceptos</h3>'),
        ('<p class="text-sm text-muted leading-relaxed">Aprende qué es un agente de código CLI, por qué es diferente',
         '<p class="text-sm text-muted leading-relaxed" data-i18n="index.steps.step1.desc">Aprende qué es un agente de código CLI, por qué es diferente'),
        ('<a href="concepto.html" class="inline-block mt-4 text-sm font-semibold text-brand hover:underline">Leer el artículo →</a>',
         '<a href="concepto.html" class="inline-block mt-4 text-sm font-semibold text-brand hover:underline" data-i18n="index.steps.step1.cta">Leer el artículo →</a>'),
        ('<h3 class="font-display text-lg font-bold text-ink mb-2">Explorar categorías</h3>',
         '<h3 class="font-display text-lg font-bold text-ink mb-2" data-i18n="index.steps.step2.heading">Explorar categorías</h3>'),
        ('<p class="text-sm text-muted leading-relaxed">Descubre cuatro tipos de orquestadores: runners paralelos',
         '<p class="text-sm text-muted leading-relaxed" data-i18n="index.steps.step2.desc">Descubre cuatro tipos de orquestadores: runners paralelos'),
        ('<a href="orquestadores.html" class="inline-block mt-4 text-sm font-semibold text-[#F97316] hover:underline">Explorar →</a>',
         '<a href="orquestadores.html" class="inline-block mt-4 text-sm font-semibold text-[#F97316] hover:underline" data-i18n="index.steps.step2.cta">Explorar →</a>'),
        ('<h3 class="font-display text-lg font-bold text-ink mb-2">Elegir tu herramienta</h3>',
         '<h3 class="font-display text-lg font-bold text-ink mb-2" data-i18n="index.steps.step3.heading">Elegir tu herramienta</h3>'),
        ('<p class="text-sm text-muted leading-relaxed">Con los conceptos claros, decides cuál utilizar según tu caso de uso',
         '<p class="text-sm text-muted leading-relaxed" data-i18n="index.steps.step3.desc">Con los conceptos claros, decides cuál utilizar según tu caso de uso'),
        ('<a href="casos-uso.html" class="inline-block mt-4 text-sm font-semibold text-[#10B981] hover:underline">Ver casos de uso →</a>',
         '<a href="casos-uso.html" class="inline-block mt-4 text-sm font-semibold text-[#10B981] hover:underline" data-i18n="index.steps.step3.cta">Ver casos de uso →</a>'),
        # FEATURED
        ('<h2 class="font-display text-3xl font-bold text-ink mb-2">Herramientas destacadas</h2>',
         '<h2 class="font-display text-3xl font-bold text-ink mb-2" data-i18n="index.featured.heading">Herramientas destacadas</h2>'),
        ('<p class="text-muted">Las más populares de cada categoría.</p>',
         '<p class="text-muted" data-i18n="index.featured.subtitle">Las más populares de cada categoría.</p>'),
        ('class="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">Ver comparativa completa →</a>',
         'class="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline" data-i18n="index.featured.cta">Ver comparativa completa →</a>'),
        # CTA SECTION
        ('<h2 class="font-display text-3xl md:text-4xl font-black text-white mb-4">¿Por dónde empiezo?</h2>',
         '<h2 class="font-display text-3xl md:text-4xl font-black text-white mb-4" data-i18n="index.cta.heading">¿Por dónde empiezo?</h2>'),
        ('<p class="text-white/80 text-lg mb-8 max-w-lg mx-auto">Sigue la ruta de aprendizaje en 6 pasos.',
         '<p class="text-white/80 text-lg mb-8 max-w-lg mx-auto" data-i18n="index.cta.body">Sigue la ruta de aprendizaje en 6 pasos.'),
        ('      Empezar la ruta de aprendizaje\n      <svg',
         '      <span data-i18n="index.cta.button">Empezar la ruta de aprendizaje</span>\n      <svg'),
    ],

    'agentes-cli.html': [
        ('<title>Agentes de Código CLI — Guía de Agentes IA</title>',
         '<title data-i18n="agentes-cli.meta.title">Agentes de Código CLI — Guía de Agentes IA</title>'),
        ('content="Catálogo de 16 agentes de código CLI:',
         'data-i18n-attr="content:agentes-cli.meta.desc" content="Catálogo de 16 agentes de código CLI:'),
        # HERO badge
        ('>16 herramientas</div>',
         ' data-i18n="agentes-cli.hero.badge">16 herramientas</div>'),
        # HERO h1
        ('<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-4 leading-tight">\n          Agentes de código <span class="text-gradient">CLI</span>\n        </h1>',
         '<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-4 leading-tight" data-i18n-html="agentes-cli.hero.h1">\n          Agentes de código <span class="text-gradient">CLI</span>\n        </h1>'),
        # HERO desc
        ('<p class="text-lg text-muted leading-relaxed">\n          Un agente de código CLI es un programa',
         '<p class="text-lg text-muted leading-relaxed" data-i18n="agentes-cli.hero.desc">\n          Un agente de código CLI es un programa'),
        # FILTER
        ('aria-label="Filtrar por categoría">\n      <button data-filter="todos"',
         'aria-label="Filtrar por categoría" data-i18n-attr="aria-label:agentes-cli.filter.ariaLabel">\n      <button data-filter="todos"'),
    ],

    'orquestadores.html': [
        ('<title>Orquestadores — Guía de Agentes IA</title>',
         '<title data-i18n="orquestadores.meta.title">Orquestadores — Guía de Agentes IA</title>'),
        ('content="Catálogo de 14 orquestadores de agentes IA:',
         'data-i18n-attr="content:orquestadores.meta.desc" content="Catálogo de 14 orquestadores de agentes IA:'),
        # HERO badge
        ('>14 herramientas</div>',
         ' data-i18n="orquestadores.hero.badge">14 herramientas</div>'),
        # HERO h1
        ('<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-4 leading-tight">\n        Orquestadores: <span class="text-gradient">4 patrones</span>\n      </h1>',
         '<h1 class="font-display text-4xl md:text-5xl font-black text-ink mb-4 leading-tight" data-i18n-html="orquestadores.hero.h1">\n        Orquestadores: <span class="text-gradient">4 patrones</span>\n      </h1>'),
        # HERO desc
        ('<p class="text-lg text-muted leading-relaxed">\n        Cuando un solo agente no es suficiente',
         '<p class="text-lg text-muted leading-relaxed" data-i18n="orquestadores.hero.desc">\n        Cuando un solo agente no es suficiente'),
        # PATTERN cards
        ('>Ejecutores en paralelo</div>',
         ' data-i18n="orquestadores.pat1.heading">Ejecutores en paralelo</div>'),
        ('<p class="text-xs text-muted leading-relaxed">Lanza N agentes al mismo tiempo',
         '<p class="text-xs text-muted leading-relaxed" data-i18n="orquestadores.pat1.desc">Lanza N agentes al mismo tiempo'),
        ('>Enjambres</div>',
         ' data-i18n="orquestadores.pat2.heading">Enjambres</div>'),
        ('<p class="text-xs text-muted leading-relaxed">Varios agentes especializados trabajan en coordinación',
         '<p class="text-xs text-muted leading-relaxed" data-i18n="orquestadores.pat2.desc">Varios agentes especializados trabajan en coordinación'),
        ('>Bucles autónomos</div>',
         ' data-i18n="orquestadores.pat3.heading">Bucles autónomos</div>'),
        ('<p class="text-xs text-muted leading-relaxed">El agente ejecuta un ciclo: identifica',
         '<p class="text-xs text-muted leading-relaxed" data-i18n="orquestadores.pat3.desc">El agente ejecuta un ciclo: identifica'),
        ('>Asistentes</div>',
         ' data-i18n="orquestadores.pat4.heading">Asistentes</div>'),
        ('<p class="text-xs text-muted leading-relaxed">Un agente que aprende tu código, tu estilo',
         '<p class="text-xs text-muted leading-relaxed" data-i18n="orquestadores.pat4.desc">Un agente que aprende tu código, tu estilo'),
        # FILTER
        ('aria-label="Filtrar por categoría">\n      <button data-filter="todos"',
         'aria-label="Filtrar por categoría" data-i18n-attr="aria-label:orquestadores.filter.ariaLabel">\n      <button data-filter="todos"'),
        # EMPTY STATE
        ('<p id="orchEmpty" class="hidden text-center text-muted py-16">No hay herramientas en esta categoría.</p>',
         '<p id="orchEmpty" class="hidden text-center text-muted py-16" data-i18n="ui.emptyState">No hay herramientas en esta categoría.</p>'),
    ],

    'comparativa.html': [
        ('<title>Comparativa — Guía de Agentes IA</title>',
         '<title data-i18n="comparativa.meta.title">Comparativa — Guía de Agentes IA</title>'),
        ('content="Comparativa de las 30 herramientas de agentes IA',
         'data-i18n-attr="content:comparativa.meta.desc" content="Comparativa de las 30 herramientas de agentes IA'),
    ],

    'casos-uso.html': [
        ('<title>Casos de uso — Guía de Agentes IA</title>',
         '<title data-i18n="casosUso.meta.title">Casos de uso — Guía de Agentes IA</title>'),
        ('content="10 casos de uso reales de agentes IA',
         'data-i18n-attr="content:casosUso.meta.desc" content="10 casos de uso reales de agentes IA'),
    ],

    'concepto.html': [
        ('<title>Conceptos — Guía de Agentes IA</title>',
         '<title data-i18n="concepto.meta.title">Conceptos — Guía de Agentes IA</title>'),
        ('content="¿Qué es un agente de código CLI',
         'data-i18n-attr="content:concepto.meta.desc" content="¿Qué es un agente de código CLI'),
    ],

    'ruta-aprendizaje.html': [
        ('<title>Ruta de Aprendizaje — Guía de Agentes IA</title>',
         '<title data-i18n="rutaAprendizaje.meta.title">Ruta de Aprendizaje — Guía de Agentes IA</title>'),
        ('content="Ruta de aprendizaje de 6 pasos',
         'data-i18n-attr="content:rutaAprendizaje.meta.desc" content="Ruta de aprendizaje de 6 pasos'),
    ],

    'glosario-faq.html': [
        ('<title>Glosario y FAQ — Guía de Agentes IA</title>',
         '<title data-i18n="glosarioFaq.meta.title">Glosario y FAQ — Guía de Agentes IA</title>'),
        ('content="Diccionario de términos y preguntas frecuentes',
         'data-i18n-attr="content:glosarioFaq.meta.desc" content="Diccionario de términos y preguntas frecuentes'),
    ],

    'acerca.html': [
        ('<title>Acerca — Guía de Agentes IA</title>',
         '<title data-i18n="acerca.meta.title">Acerca — Guía de Agentes IA</title>'),
        ('content="Qué es la Guía de Agentes IA',
         'data-i18n-attr="content:acerca.meta.desc" content="Qué es la Guía de Agentes IA'),
    ],
}


def fix_i18n_js():
    path = os.path.join(BASE, 'assets', 'i18n.js')
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    n = 0
    # Fix ES key to include span HTML
    old1 = "'index.hero.title': 'Automatiza tu flujo de código con agentes de IA',"
    new1 = "'index.hero.title': 'Automatiza tu flujo de código con <span class=\"text-gradient\">agentes de IA</span>',"
    if old1 in c:
        c = c.replace(old1, new1); n += 1
    # Fix EN stub key too
    old2 = "'index.hero.title': 'Automate your coding workflow with AI agents'"
    new2 = "'index.hero.title': 'Automate your coding workflow with <span class=\"text-gradient\">AI agents</span>'"
    if old2 in c:
        c = c.replace(old2, new2); n += 1
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f'i18n.js: {n} key fixes')


fix_i18n_js()

total = 0
for page in PAGES:
    path = os.path.join(BASE, page)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    content, n1 = apply(content, SHARED)
    content, n2 = apply(content, PAGE_SPECIFIC.get(page, []))

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'{page}: shared={n1}, page={n2}, sum={n1+n2}')
    total += n1 + n2

print(f'\nGRAND TOTAL replacements: {total}')
