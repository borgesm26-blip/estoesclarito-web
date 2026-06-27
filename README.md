# Estoesclarito — Sitio Web

Sitio web completo en HTML/CSS/JS vanilla para Estoesclarito, social media manager para negocios reales.

## Características

- ✨ Diseño editorial limpio y moderno
- 📱 Completamente responsivo (mobile-first)
- ⚡ HTML semántico, sin frameworks pesados
- 🎨 Paleta de colores consistente: blanco, azul oscuro (#161B2D), rosa (#E85E95)
- ✏️ Tipografía grande y espaciosa (Inter + DM Sans de Google Fonts)
- 🎭 Animaciones suaves (fade-in, slide-in, transiciones)
- 🔍 Optimizado para SEO
- ♿ Accesible (WCAG compliance)

## Estructura del proyecto

```
estoesclarito-web/
├── index.html              # Página de inicio (HOME)
├── servicios.html          # Hub de servicios
├── sobre-mi.html           # Página "Sobre mí"
├── trabajo.html            # Portafolio / Casos de éxito
├── contacto.html           # Página de contacto
├── faq.html                # Preguntas frecuentes
├── css/
│   └── style.css           # Estilos principales (todo incluido)
├── js/
│   └── main.js             # JavaScript (animaciones, interactividad)
└── README.md               # Este archivo
```

## Páginas incluidas

- **Home** — Hero, servicios en resumen, diferenciador, testimonios, CTA
- **Servicios** — Hub con descripción de los 3 servicios
- **Sobre mí** — Presentación personal, filosofía de trabajo, testimonios
- **Trabajo** — Portafolio de 6+ proyectos
- **Contacto** — Formulario y opción de WhatsApp
- **FAQ** — Preguntas frecuentes con acordeón interactivo

## Desplegar en GitHub Pages

### Opción 1: Usar el repositorio existente

1. **Crea un repositorio en GitHub** (o usa uno existente)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Estoesclarito website"
   git remote add origin https://github.com/TU_USUARIO/estoesclarito-web.git
   git push -u origin main
   ```

2. **Activa GitHub Pages en el repositorio**
   - Ve a Settings → Pages
   - En "Source", selecciona "Deploy from a branch"
   - Selecciona la rama `main` y carpeta `/ (root)`
   - Guarda

3. **Tu sitio estará disponible en:**
   ```
   https://TU_USUARIO.github.io/estoesclarito-web/
   ```

### Opción 2: User site (sin ruta adicional)

Si quieres que el sitio esté en `https://TU_USUARIO.github.io/` sin una ruta adicional:

1. Crea un repositorio llamado exactamente `TU_USUARIO.github.io`
2. Sube los archivos del proyecto a la rama `main`
3. GitHub Pages lo desplegará automáticamente en la URL raíz

### Opción 3: Usar dominio personalizado

1. Compra un dominio (ej: estoesclarito.com)
2. En Settings → Pages → Custom domain, ingresa tu dominio
3. Configura los DNS records según las instrucciones de GitHub
4. GitHub Page generará automáticamente un certificado SSL

## Personalización

### Cambiar colores

Los colores están definidos como variables CSS en el `<root>` de `css/style.css`:

```css
--color-white: #FFFFFF;
--color-dark: #161B2D;
--color-pink: #E85E95;
--color-pink-hover: #D4447A;
```

### Cambiar tipografía

Las fuentes se importan de Google Fonts. Para cambiar:

1. Ve a `index.html` (y todas las páginas)
2. Modifica la URL de Google Fonts en el `<link>`
3. Actualiza las variables `--font-body` y `--font-heading` en `css/style.css`

### Cambiar contenido

Todos los textos están en HTML. Simplemente edita:
- Títulos (`<h1>`, `<h2>`, etc.)
- Párrafos (`<p>`)
- Links (href en `<a>`)

### Agregar más trabajos / proyectos

En `trabajo.html`, duplica un `.work-item` y actualiza:
- El color del gradient `style="background: linear-gradient(...)"`
- El tag (industria/servicio)
- La descripción
- El resultado

## Funcionalidades JavaScript

El `js/main.js` incluye:

- **Smooth scroll** — Animaciones suaves al hacer clic en enlaces internos
- **Scroll animations** — Fade-in automático de elementos al hacer scroll
- **Accordion en FAQ** — Click para expandir/contraer preguntas

Todos estos están debajo de 2KB minificados.

## Optimización SEO

- Meta tags en cada página (`description`, `og:title`, etc.)
- Estructura H1/H2/H3 correcta
- URLs semánticas (`/servicios.html`, `/sobre-mi.html`)
- Semantic HTML5 (`<header>`, `<main>`, `<footer>`, `<section>`, etc.)
- ALT text en imágenes (si las hay)

## Formulario de contacto

El formulario en `contacto.html` está preparado para:

1. **Formspree** (recomendado, gratuito)
   - Ve a https://formspree.io
   - Crea una cuenta y nuevo proyecto
   - Reemplaza `YOUR_FORM_ID` en el `action` del formulario

2. **Netlify Forms** (si decides hostear en Netlify)
   - Simplemente cambia el `action` a la URL de tu sitio en Netlify

3. **EmailJS** o similar (si prefieres JavaScript puro)
   - Reemplaza el `<form>` con un formulario personalizado

## Performance

- Página optimizada para Core Web Vitals
- CSS inline (no requiere múltiples requests)
- Animaciones GPU-aceleradas (transform, opacity)
- Responsive images (aspect-ratio en lugar de fixed height)
- Reducción de motion para usuarios que lo prefieren (`prefers-reduced-motion`)

## Navegadores soportados

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari 14+, Chrome Android)

## Licencia

Este proyecto es propiedad de Estoesclarito. Todos los derechos reservados.

## Contacto

Para cambios o soporte: [contacto.html](contacto.html)

---

Sitio creado con ❤️ usando HTML, CSS y JavaScript vanilla.
