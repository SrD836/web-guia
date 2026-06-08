# Cómo desplegar esta guía

Esta guía es un sitio estático puro: HTML + CSS + JavaScript. No hay pasos de compilación, no hay servidor de aplicaciones. Cualquier servidor web que sirva archivos estáticos funciona.

---

## Estado actual — v4 publicada (8 jun 2026)

**Sitio en producción:** https://srd836.github.io/web-guia/

| Aspecto | Estado |
|---|---|
| Páginas publicadas | ✅ 9 páginas (ver lista abajo) |
| Rutas internas | ✅ Todas relativas |
| Dependencias externas | ✅ Tailwind CDN + Google Fonts |
| Repositorio git | ✅ https://github.com/SrD836/web-guia |
| Rama de despliegue | ✅ `main` → `/ (root)` |
| `.nojekyll` | ✅ En raíz del proyecto |
| GitHub Pages | ✅ Activo — se redespliega en cada push a `main` |

### Páginas incluidas en v4

1. `index.html` — Inicio / portada
2. `concepto.html` — ¿Qué es un agente IA?
3. `agentes-cli.html` — Catálogo de agentes CLI
4. `orquestadores.html` — Catálogo de orquestadores
5. `comparativa.html` — Tabla comparativa de herramientas
6. `ruta-aprendizaje.html` — Ruta de aprendizaje guiada
7. `casos-uso.html` — Casos de uso prácticos
8. `glosario-faq.html` — Glosario + preguntas frecuentes
9. `acerca.html` — Acerca de esta guía

---

## Probar en local

### Opción 1 — `npx serve` (recomendada)

Ejecuta en la raíz del proyecto:

```bash
npx serve .
```

Abre `http://localhost:3000` en el navegador. Requiere Node.js instalado.

### Opción 2 — Python

```bash
python -m http.server 8080
```

Abre `http://localhost:8080` en el navegador.

### Opción 3 — Abrir directamente con el navegador

Haz doble clic en `index.html`. El protocolo `file://` funciona para la mayoría de las páginas, aunque algunos navegadores bloquean ciertas APIs de JavaScript cuando el origen es local.

---

## Publicar actualizaciones (v4, v5, …)

El sitio ya está configurado. Para publicar cualquier cambio, ejecuta desde la raíz del proyecto:

```bash
git add .
git commit -m "web-guia vX — descripción de cambios"
git push
```

GitHub Pages detecta el nuevo commit en `main` y redespliega el sitio en menos de dos minutos. No hay ningún otro paso.

---

## Configuración de GitHub Pages (referencia)

El sitio se desplegó con estos parámetros, ya configurados en el repositorio:

- **Repositorio:** https://github.com/SrD836/web-guia
- **Rama:** `main`
- **Carpeta:** `/ (root)`
- **URL pública:** https://srd836.github.io/web-guia/

Si necesitas reconfigurar Pages desde cero (por ejemplo, al migrar a otro repositorio), ve a **Settings → Pages** en GitHub y selecciona rama `main`, carpeta `/ (root)`.

---

## Por qué funciona sin configuración adicional

Todas las rutas del proyecto son relativas (`href="agentes-cli.html"`, `src="assets/app.js"`). No hay rutas absolutas ni dependencias de servidor. El archivo `.nojekyll` en la raíz desactiva el procesamiento de Jekyll y garantiza que GitHub sirva los archivos tal cual.

---

## Nota sobre Tailwind CSS

Esta versión usa el CDN de Tailwind (`<script src="https://cdn.tailwindcss.com">`). El navegador mostrará un aviso en consola indicando que el CDN no es recomendado para producción — esto es **esperado y no es un error**. El sitio funciona correctamente.

**Opcional — compilar Tailwind para producción (futuro):**

```bash
npm install -D tailwindcss
npx tailwindcss -i ./assets/styles.css -o ./assets/styles-compiled.css --minify
```

Luego reemplaza el CDN en cada HTML por:

```html
<link rel="stylesheet" href="assets/styles-compiled.css">
```

Esto reduce el CSS de ~4 MB a unos pocos kilobytes. No es necesario para la versión actual.
