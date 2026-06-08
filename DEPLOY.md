# Cómo desplegar esta guía

Esta guía es un sitio estático puro: HTML + CSS + JavaScript. No hay pasos de compilación, no hay servidor de aplicaciones. Cualquier servidor web que sirva archivos estáticos funciona.

---

## Estado verificado (7 jun 2026 — base v2)

| Aspecto | Estado |
|---|---|
| Rutas internas | ✅ Todas relativas (`assets/styles.css`, `assets/app.js`, `assets/data.js`, `*.html`) |
| Dependencias externas | ✅ Tailwind CDN + Google Fonts — no requieren configuración de servidor |
| Node.js en el sistema | ✅ v24.15.0 — `npx serve` funciona |
| Python en el sistema | ✅ 3.11.15 — `python -m http.server` funciona |
| Repositorio git | ❌ No inicializado — hay que ejecutar `git init` antes de publicar en Pages |
| `.nojekyll` | ❌ Pendiente de crear — obligatorio antes de publicar en Pages (ver más abajo) |

Este estado corresponde al build v2 actual (5 páginas). Cuando esté listo el build v3 (9 páginas), los pasos de publicación son exactamente los mismos — solo cambia el contenido.

---

## Probar en local

### Opción 1 — `npx serve` (recomendada)

Requiere Node.js instalado. Ejecuta en la raíz del proyecto:

```bash
npx serve .
```

Abre `http://localhost:3000` en el navegador. El servidor recarga automáticamente si cambias archivos.

### Opción 2 — Python

```bash
# Python 3
python -m http.server 8080
```

Abre `http://localhost:8080` en el navegador.

### Opción 3 — Abrir directamente con el navegador

Haz doble clic en `index.html` (o abre el archivo con el navegador). El protocolo `file://` funciona para la mayoría de las páginas, aunque algunos navegadores bloquean ciertas APIs de JavaScript cuando el origen es local.

---

## Precondiciones para publicar en GitHub Pages

Antes de ejecutar los pasos de publicación, asegúrate de que se cumplen estas condiciones. Si alguna falta, el sitio no se verá correctamente.

### 1. Archivo `.nojekyll` en la raíz

GitHub Pages ejecuta Jekyll por defecto, lo que puede interferir con archivos y carpetas que empiecen por `_` (como `_data` o `_assets`). Aunque este proyecto no usa esas convenciones, crear el archivo `.nojekyll` deshabilita Jekyll por completo y garantiza que GitHub sirva los archivos tal cual, sin ningún procesamiento adicional.

Crea el archivo con un solo comando:

```bash
# PowerShell
New-Item -ItemType File .nojekyll

# Bash / Terminal
touch .nojekyll
```

El archivo debe estar vacío y ubicado en la raíz del proyecto (al mismo nivel que `index.html`).

### 2. Repositorio git inicializado

El directorio `web-guia` aún no tiene repositorio git. Hay que inicializarlo una vez antes de publicar:

```bash
git init
git add .
git commit -m "Primer commit — web-guia v3"
```

### 3. Rutas relativas en todos los archivos HTML

✅ Ya verificado. Todos los `href` y `src` del proyecto apuntan a rutas relativas (`assets/app.js`, `index.html`, etc.). No hay rutas absolutas que rompan en el subdominio de Pages.

### 4. `index.html` en la raíz

✅ Ya verificado. GitHub Pages usa `index.html` como página de entrada por defecto.

---

## Publicar en GitHub Pages (gratis)

GitHub Pages sirve sitios estáticos directamente desde un repositorio. No necesitas configurar ningún servidor.

### Pasos completos (una sola vez)

**Paso 1 — Crea el repositorio en GitHub**

Ve a [github.com/new](https://github.com/new) y crea un repositorio nuevo. Puede ser público o privado (GitHub Pages funciona en ambos). Anota el nombre que le das — lo necesitarás en el paso 3.

**Paso 2 — Prepara el proyecto localmente**

Desde la raíz del proyecto (`web-guia/`), ejecuta estos comandos en orden:

```bash
# Crear .nojekyll (si no existe todavía)
touch .nojekyll        # en Bash/Terminal
# o en PowerShell:
New-Item -ItemType File .nojekyll

# Inicializar git y hacer el primer commit
git init
git add .
git commit -m "web-guia v3 — publicación inicial"
```

**Paso 3 — Conecta con GitHub y sube el código**

Sustituye `tu-usuario` y `tu-repositorio` con tus datos reales:

```bash
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git branch -M main
git push -u origin main
```

**Paso 4 — Activa GitHub Pages**

1. En tu repositorio de GitHub, abre **Settings** → **Pages** (barra lateral izquierda).
2. En **Source**, selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)`.
4. Haz clic en **Save**.

**Paso 5 — Accede al sitio publicado**

Espera entre 30 segundos y 2 minutos. GitHub construye y publica automáticamente. La URL pública sigue este patrón:

```
https://tu-usuario.github.io/tu-repositorio/
```

GitHub te la muestra en la misma página de Settings → Pages en cuanto el despliegue termina.

### Para publicar actualizaciones (v3, v4, …)

Una vez configurado el repositorio, publicar una nueva versión es un único comando desde la raíz del proyecto:

```bash
git add .
git commit -m "web-guia v3 — descripción de cambios"
git push
```

GitHub Pages detecta el nuevo commit en `main` y redespliega el sitio en menos de dos minutos. No hay ningún otro paso.

### Por qué funciona sin configuración adicional

Todas las rutas del proyecto son relativas (`href="agentes-cli.html"`, `src="assets/app.js"`). No hay rutas absolutas ni dependencias de servidor. GitHub Pages sirve los archivos tal cual están en el repositorio — es exactamente lo que necesita este proyecto.

---

## Nota sobre Tailwind CSS

Esta versión usa el CDN de Tailwind (`<script src="https://cdn.tailwindcss.com">`), que genera los estilos al vuelo en el navegador. Es perfecto para prototipos, pero no recomendado para producción por razones de rendimiento.

**Opcional — compilar Tailwind para producción:**

Si en el futuro quieres optimizar el sitio, puedes compilar solo las clases que realmente se usan:

```bash
npm install -D tailwindcss
npx tailwindcss -i ./assets/styles.css -o ./assets/styles-compiled.css --minify
```

Luego reemplaza el CDN en cada HTML por:

```html
<link rel="stylesheet" href="assets/styles-compiled.css">
```

Esto reduce el CSS de ~4 MB (CDN completo) a unos pocos kilobytes. No es necesario para el prototipo actual.
