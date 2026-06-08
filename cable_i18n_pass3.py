"""
Pass 3 — fix BAD refs + cable 82 missing concepto.* keys + 4 glosarioFaq fixes + 1 index fix
"""
import os
BASE = r'C:\Users\david\md\web-guia'

def patch(html, pairs, fname):
    misses = []
    for old, new in pairs:
        if old in html:
            html = html.replace(old, new)
        else:
            misses.append(repr(old[:80]))
    return html, misses

# ---------------------------------------------------------------------------
# index.html — fix BAD ref index.routes.cta → index.routes.card1.cta
# ---------------------------------------------------------------------------
INDEX = [
    ('data-i18n="index.routes.cta"', 'data-i18n="index.routes.card1.cta"'),
]

# ---------------------------------------------------------------------------
# glosario-faq.html — fix 3 BAD stat keys + add missing cta.btnRuta
# ---------------------------------------------------------------------------
GLOS = [
    ('data-i18n="glosarioFaq.stats.terminos"', 'data-i18n="glosarioFaq.stats.terminosLabel"'),
    ('data-i18n="glosarioFaq.stats.preguntas"', 'data-i18n="glosarioFaq.stats.preguntasLabel"'),
    ('data-i18n="glosarioFaq.stats.tiempo"',    'data-i18n="glosarioFaq.stats.tiempoLabel"'),
    # Add missing btnRuta (no data-i18n on this anchor)
    ('shadow-elev-1">Ruta de aprendizaje →</a>',
     'shadow-elev-1" data-i18n="glosarioFaq.cta.btnRuta">Ruta de aprendizaje →</a>'),
]

# ---------------------------------------------------------------------------
# concepto.html
# ---------------------------------------------------------------------------
CONCEPTO = [
    # ---- BAD ref fixes: toc.s* → toc.item* (each appears 2x) ----
    ('data-i18n="concepto.toc.s1"', 'data-i18n="concepto.toc.item1"'),
    ('data-i18n="concepto.toc.s2"', 'data-i18n="concepto.toc.item2"'),
    ('data-i18n="concepto.toc.s3"', 'data-i18n="concepto.toc.item3"'),
    ('data-i18n="concepto.toc.s4"', 'data-i18n="concepto.toc.item4"'),
    ('data-i18n="concepto.toc.s5"', 'data-i18n="concepto.toc.item5"'),
    ('data-i18n="concepto.toc.s6"', 'data-i18n="concepto.toc.item6"'),
    ('data-i18n="concepto.toc.s7"', 'data-i18n="concepto.toc.item7"'),

    # ---- BAD ref fixes: s2.li* → s2.list* ----
    ('data-i18n="concepto.s2.li1"',      'data-i18n="concepto.s2.list1"'),
    ('data-i18n-html="concepto.s2.li2"', 'data-i18n-html="concepto.s2.list2"'),
    ('data-i18n="concepto.s2.li3"',      'data-i18n="concepto.s2.list3"'),
    ('data-i18n="concepto.s2.li4"',      'data-i18n="concepto.s2.list4"'),
    ('data-i18n="concepto.s2.li5"',      'data-i18n="concepto.s2.list5"'),
    ('data-i18n="concepto.s2.li6"',      'data-i18n="concepto.s2.list6"'),
    ('data-i18n="concepto.s2.li7"',      'data-i18n="concepto.s2.list7"'),

    # ---- Remove non-existent p3 key ----
    (' data-i18n="concepto.s2.p3"', ''),

    # ---- s3: intro + 4 cards ----
    ('<p class="article-p">\n            Un agente CLI no es solo una API de chat',
     '<p class="article-p" data-i18n="concepto.s3.intro">\n            Un agente CLI no es solo una API de chat'),

    ('<h3 class="font-semibold text-ink text-sm mb-1.5">Lectura del repositorio</h3>',
     '<h3 class="font-semibold text-ink text-sm mb-1.5" data-i18n="concepto.s3.card1.heading">Lectura del repositorio</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">Lee archivos respetando <code class="article-code">.gitignore</code>',
     '<p class="text-xs text-muted leading-relaxed" data-i18n-html="concepto.s3.card1.desc">Lee archivos respetando <code class="article-code">.gitignore</code>'),

    ('<h3 class="font-semibold text-ink text-sm mb-1.5">Grafo de dependencias</h3>',
     '<h3 class="font-semibold text-ink text-sm mb-1.5" data-i18n="concepto.s3.card2.heading">Grafo de dependencias</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">Entiende cómo los módulos se importan',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s3.card2.desc">Entiende cómo los módulos se importan'),

    ('<h3 class="font-semibold text-ink text-sm mb-1.5">Lectura de errores</h3>',
     '<h3 class="font-semibold text-ink text-sm mb-1.5" data-i18n="concepto.s3.card3.heading">Lectura de errores</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">Lee mensajes del compilador',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s3.card3.desc">Lee mensajes del compilador'),

    ('<h3 class="font-semibold text-ink text-sm mb-1.5">Generación con tu estilo</h3>',
     '<h3 class="font-semibold text-ink text-sm mb-1.5" data-i18n="concepto.s3.card4.heading">Generación con tu estilo</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">Genera código que respeta tus convenciones',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s3.card4.desc">Genera código que respeta tus convenciones'),

    # ---- s4: intro + compare columns ----
    ('<p class="article-p">\n            La confusión más común',
     '<p class="article-p" data-i18n="concepto.s4.intro">\n            La confusión más común'),

    ('<h3 class="font-semibold text-ink text-sm">Chatbot tradicional</h3>',
     '<h3 class="font-semibold text-ink text-sm" data-i18n="concepto.s4.chatbot.heading">Chatbot tradicional</h3>'),
    ('<p class="text-xs text-muted">ej. ChatGPT sin plugins</p>',
     '<p class="text-xs text-muted" data-i18n="concepto.s4.chatbot.subtitle">ej. ChatGPT sin plugins</p>'),

    # chatbot li items — wrap text node in span
    ('<span class="text-red-400 shrink-0 mt-0.5 font-bold">✗</span>Contesta preguntas generales</li>',
     '<span class="text-red-400 shrink-0 mt-0.5 font-bold">✗</span><span data-i18n="concepto.s4.chatbot.li1">Contesta preguntas generales</span></li>'),
    ('<span class="text-red-400 shrink-0 mt-0.5 font-bold">✗</span>No tiene acceso a tu código fuente</li>',
     '<span class="text-red-400 shrink-0 mt-0.5 font-bold">✗</span><span data-i18n="concepto.s4.chatbot.li2">No tiene acceso a tu código fuente</span></li>'),
    ('<span class="text-red-400 shrink-0 mt-0.5 font-bold">✗</span>No sabe dónde colocar el código</li>',
     '<span class="text-red-400 shrink-0 mt-0.5 font-bold">✗</span><span data-i18n="concepto.s4.chatbot.li3">No sabe dónde colocar el código</span></li>'),
    ('<span class="text-red-400 shrink-0 mt-0.5 font-bold">✗</span>Escribe ejemplos genéricos: tú los integras</li>',
     '<span class="text-red-400 shrink-0 mt-0.5 font-bold">✗</span><span data-i18n="concepto.s4.chatbot.li4">Escribe ejemplos genéricos: tú los integras</span></li>'),
    ('<span class="text-red-400 shrink-0 mt-0.5 font-bold">✗</span>Cada pregunta empieza desde cero</li>',
     '<span class="text-red-400 shrink-0 mt-0.5 font-bold">✗</span><span data-i18n="concepto.s4.chatbot.li5">Cada pregunta empieza desde cero</span></li>'),

    ('<h3 class="font-semibold text-ink text-sm">Agente CLI</h3>',
     '<h3 class="font-semibold text-ink text-sm" data-i18n="concepto.s4.cli.heading">Agente CLI</h3>'),
    ('<p class="text-xs text-muted">ej. Claude Code, Aider</p>',
     '<p class="text-xs text-muted" data-i18n="concepto.s4.cli.subtitle">ej. Claude Code, Aider</p>'),

    # cli li items
    ('<span class="text-emerald-500 shrink-0 mt-0.5 font-bold">✓</span>Lee tu proyecto completo en tiempo real</li>',
     '<span class="text-emerald-500 shrink-0 mt-0.5 font-bold">✓</span><span data-i18n="concepto.s4.cli.li1">Lee tu proyecto completo en tiempo real</span></li>'),
    ('<span class="text-emerald-500 shrink-0 mt-0.5 font-bold">✓</span>Entiende tu arquitectura y convenciones</li>',
     '<span class="text-emerald-500 shrink-0 mt-0.5 font-bold">✓</span><span data-i18n="concepto.s4.cli.li2">Entiende tu arquitectura y convenciones</span></li>'),
    ('<span class="text-emerald-500 shrink-0 mt-0.5 font-bold">✓</span>Sabe exactamente dónde colocar el código</li>',
     '<span class="text-emerald-500 shrink-0 mt-0.5 font-bold">✓</span><span data-i18n="concepto.s4.cli.li3">Sabe exactamente dónde colocar el código</span></li>'),
    ('<span class="text-emerald-500 shrink-0 mt-0.5 font-bold">✓</span>Edita archivos directamente</li>',
     '<span class="text-emerald-500 shrink-0 mt-0.5 font-bold">✓</span><span data-i18n="concepto.s4.cli.li4">Edita archivos directamente</span></li>'),
    ('<span class="text-emerald-500 shrink-0 mt-0.5 font-bold">✓</span>Recuerda el contexto y prueba cambios</li>',
     '<span class="text-emerald-500 shrink-0 mt-0.5 font-bold">✓</span><span data-i18n="concepto.s4.cli.li5">Recuerda el contexto y prueba cambios</span></li>'),

    # s4 quote
    ('<p class="text-center text-muted text-sm italic">',
     '<p class="text-center text-muted text-sm italic" data-i18n-html="concepto.s4.quote">'),

    # ---- s5: intro + 7 cards ----
    ('<p class="article-p">\n            Estos patrones de uso están validados',
     '<p class="article-p" data-i18n="concepto.s5.intro">\n            Estos patrones de uso están validados'),

    ('<h3 class="font-semibold text-sm text-ink mb-1">Refactoring</h3>',
     '<h3 class="font-semibold text-sm text-ink mb-1" data-i18n="concepto.s5.card1.heading">Refactoring</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">«Migra este módulo',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s5.card1.desc">«Migra este módulo'),

    ('<h3 class="font-semibold text-sm text-ink mb-1">Bugfixes</h3>',
     '<h3 class="font-semibold text-sm text-ink mb-1" data-i18n="concepto.s5.card2.heading">Bugfixes</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">«El test <code class="article-code">auth.spec.ts</code>',
     '<p class="text-xs text-muted leading-relaxed" data-i18n-html="concepto.s5.card2.desc">«El test <code class="article-code">auth.spec.ts</code>'),

    ('<h3 class="font-semibold text-sm text-ink mb-1">Feature development</h3>',
     '<h3 class="font-semibold text-sm text-ink mb-1" data-i18n="concepto.s5.card3.heading">Feature development</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">«Añade un endpoint POST <code class="article-code">/api/users</code>',
     '<p class="text-xs text-muted leading-relaxed" data-i18n-html="concepto.s5.card3.desc">«Añade un endpoint POST <code class="article-code">/api/users</code>'),

    ('<h3 class="font-semibold text-sm text-ink mb-1">Testing</h3>',
     '<h3 class="font-semibold text-sm text-ink mb-1" data-i18n="concepto.s5.card4.heading">Testing</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">«Escribe tests unitarios',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s5.card4.desc">«Escribe tests unitarios'),

    ('<h3 class="font-semibold text-sm text-ink mb-1">Documentación</h3>',
     '<h3 class="font-semibold text-sm text-ink mb-1" data-i18n="concepto.s5.card5.heading">Documentación</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">«Regenera el README',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s5.card5.desc">«Regenera el README'),

    ('<h3 class="font-semibold text-sm text-ink mb-1">Migraciones</h3>',
     '<h3 class="font-semibold text-sm text-ink mb-1" data-i18n="concepto.s5.card6.heading">Migraciones</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">«Actualiza todas las importaciones de React',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s5.card6.desc">«Actualiza todas las importaciones de React'),

    ('<h3 class="font-semibold text-sm text-ink mb-1">Security scanning</h3>',
     '<h3 class="font-semibold text-sm text-ink mb-1" data-i18n="concepto.s5.card7.heading">Security scanning</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">«Busca hardcoded secrets',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s5.card7.desc">«Busca hardcoded secrets'),

    # ---- s6: intro + 5 lim items ----
    ('<p class="article-p">\n            No es magia.',
     '<p class="article-p" data-i18n="concepto.s6.intro">\n            No es magia.'),

    ('<h3 class="font-semibold text-sm text-ink mb-1">No inventa requisitos ambiguos</h3>',
     '<h3 class="font-semibold text-sm text-ink mb-1" data-i18n="concepto.s6.lim1.heading">No inventa requisitos ambiguos</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">Si le pides algo vago',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s6.lim1.desc">Si le pides algo vago'),

    ('<h3 class="font-semibold text-sm text-ink mb-1">No entiende hardware sin contexto explícito</h3>',
     '<h3 class="font-semibold text-sm text-ink mb-1" data-i18n="concepto.s6.lim2.heading">No entiende hardware sin contexto explícito</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">No puede optimizar para una arquitectura ARM',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s6.lim2.desc">No puede optimizar para una arquitectura ARM'),

    ('<h3 class="font-semibold text-sm text-ink mb-1">No reemplaza a un arquitecto sénior</h3>',
     '<h3 class="font-semibold text-sm text-ink mb-1" data-i18n="concepto.s6.lim3.heading">No reemplaza a un arquitecto sénior</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">Puede ayudarte a implementar una decisión',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s6.lim3.desc">Puede ayudarte a implementar una decisión'),

    ('<h3 class="font-semibold text-sm text-ink mb-1">Límite de ventana de contexto</h3>',
     '<h3 class="font-semibold text-sm text-ink mb-1" data-i18n="concepto.s6.lim4.heading">Límite de ventana de contexto</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">Hay un límite en cuánto código',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s6.lim4.desc">Hay un límite en cuánto código'),

    ('<h3 class="font-semibold text-sm text-ink mb-1">Los cambios necesitan revisión humana</h3>',
     '<h3 class="font-semibold text-sm text-ink mb-1" data-i18n="concepto.s6.lim5.heading">Los cambios necesitan revisión humana</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">Un agente propone; un humano aprueba',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s6.lim5.desc">Un agente propone; un humano aprueba'),

    # ---- s7: intro + 4 question cards ----
    ('<p class="article-p">\n            No existe una herramienta universal',
     '<p class="article-p" data-i18n="concepto.s7.intro">\n            No existe una herramienta universal'),

    ('<div class="text-xs font-bold text-brand uppercase tracking-wider mb-2">Pregunta 1</div>',
     '<div class="text-xs font-bold text-brand uppercase tracking-wider mb-2" data-i18n="concepto.s7.q1.label">Pregunta 1</div>'),
    ('<h3 class="font-semibold text-ink text-sm mb-2">¿Cuál es tu lenguaje primario?</h3>',
     '<h3 class="font-semibold text-ink text-sm mb-2" data-i18n="concepto.s7.q1.heading">¿Cuál es tu lenguaje primario?</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">Algunos agentes son mejores con Python',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s7.q1.desc">Algunos agentes son mejores con Python'),

    ('<div class="text-xs font-bold text-[#10B981] uppercase tracking-wider mb-2">Pregunta 2</div>',
     '<div class="text-xs font-bold text-[#10B981] uppercase tracking-wider mb-2" data-i18n="concepto.s7.q2.label">Pregunta 2</div>'),
    ('<h3 class="font-semibold text-ink text-sm mb-2">¿Privacidad o velocidad?</h3>',
     '<h3 class="font-semibold text-ink text-sm mb-2" data-i18n="concepto.s7.q2.heading">¿Privacidad o velocidad?</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">¿Necesitas que el código nunca salga',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s7.q2.desc">¿Necesitas que el código nunca salga'),

    ('<div class="text-xs font-bold text-[#60A5FA] uppercase tracking-wider mb-2">Pregunta 3</div>',
     '<div class="text-xs font-bold text-[#60A5FA] uppercase tracking-wider mb-2" data-i18n="concepto.s7.q3.label">Pregunta 3</div>'),
    ('<h3 class="font-semibold text-ink text-sm mb-2">¿Un agente solo o orquestación?</h3>',
     '<h3 class="font-semibold text-ink text-sm mb-2" data-i18n="concepto.s7.q3.heading">¿Un agente solo o orquestación?</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">¿Necesitas un agente para tareas simples',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s7.q3.desc">¿Necesitas un agente para tareas simples'),

    ('<div class="text-xs font-bold text-[#FBBF24] uppercase tracking-wider mb-2">Pregunta 4</div>',
     '<div class="text-xs font-bold text-[#FBBF24] uppercase tracking-wider mb-2" data-i18n="concepto.s7.q4.label">Pregunta 4</div>'),
    ('<h3 class="font-semibold text-ink text-sm mb-2">¿Presupuesto?</h3>',
     '<h3 class="font-semibold text-ink text-sm mb-2" data-i18n="concepto.s7.q4.heading">¿Presupuesto?</h3>'),
    ('<p class="text-xs text-muted leading-relaxed">Algunos son gratuitos (Gemini CLI',
     '<p class="text-xs text-muted leading-relaxed" data-i18n="concepto.s7.q4.desc">Algunos son gratuitos (Gemini CLI'),

    # ---- CTA section ----
    ('<h2 class="font-display text-2xl font-bold text-ink mb-3">¿Listo para explorar las herramientas?</h2>',
     '<h2 class="font-display text-2xl font-bold text-ink mb-3" data-i18n="concepto.cta.heading">¿Listo para explorar las herramientas?</h2>'),
    ('<p class="text-muted leading-relaxed mb-6 max-w-md mx-auto">Con los conceptos claros',
     '<p class="text-muted leading-relaxed mb-6 max-w-md mx-auto" data-i18n="concepto.cta.body">Con los conceptos claros'),
    # CLI button — has SVG child, wrap text in span
    ('">\n              Ver agentes CLI\n              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"',
     '">\n              <span data-i18n="concepto.cta.btnCli">Ver agentes CLI</span>\n              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"'),
    # Casos button — text only
    ('hover:bg-line transition-all">\n              Ver casos de uso\n            </a>',
     'hover:bg-line transition-all" data-i18n="concepto.cta.btnCasos">\n              Ver casos de uso\n            </a>'),
]

PAGES = {
    'index.html':      INDEX,
    'glosario-faq.html': GLOS,
    'concepto.html':   CONCEPTO,
}

for fname, pairs in PAGES.items():
    fpath = os.path.join(BASE, fname)
    with open(fpath, encoding='utf-8') as f:
        html = f.read()
    html, misses = patch(html, pairs, fname)
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(html)
    count = html.count('data-i18n')
    print(f'{fname}: {count} data-i18n attrs total')
    if misses:
        print(f'  MISSES ({len(misses)}):')
        for m in misses:
            print(f'    {m}')
    else:
        print(f'  0 misses')
