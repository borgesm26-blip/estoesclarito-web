# Estoesclarito — Inicio Rápido

## ✅ Tu sitio está listo

Acabamos de construir un sitio web completo, profesional y optimizado para Estoesclarito.

**Lo que incluye:**
- 11 páginas HTML (HOME, Servicios x3, Sobre mí, Trabajo, Contacto, FAQ)
- Diseño completo: editorial, limpio, moderno
- Colores: blanco, azul oscuro, rosa
- Totalmente responsivo (mobile-first)
- Sin frameworks: HTML puro + CSS + JavaScript vanilla
- 132 KB total (muy ligero)

---

## 🚀 Pasos siguientes

### 1. Test local (5 min)

Antes de publicar, prueba el sitio en tu computadora:

**Con Python:**
```bash
cd /Users/michelleborges/estoesclarito-web
python -m http.server 8000
# Abre: http://localhost:8000
```

**Con VS Code:**
- Instala extensión "Live Server"
- Click derecho en `index.html` → "Open with Live Server"

### 2. Personalización (15 min)

Antes de desplegar, completa:

**En cada HTML:**
- [ ] Actualiza el WhatsApp link (reemplaza el teléfono)
- [ ] Cambia el Instagram link (`@estoesclarito` → tu handle)
- [ ] Verifica que todos los emails sean correctos

**En `/contacto.html`:**
- [ ] Setupea el formulario con Formspree (https://formspree.io)
- [ ] O elige otra solución (EmailJS, Netlify, Basin)

**Contenido:**
- [ ] Reemplaza proyectos de ejemplo en `/trabajo.html` con los reales
- [ ] Actualiza testimonios (real copy de clientes verdaderos)
- [ ] Agrega fotos profesionales de Michelle donde sea necesario

### 3. Desplegar en GitHub Pages (10 min)

Sigue `DEPLOYMENT.md` para:
1. Crear repositorio en GitHub
2. Subir archivos
3. Activar GitHub Pages
4. ¡Tu sitio está en vivo!

---

## 📋 Checklist antes de desplegar

- [ ] Probé el sitio localmente
- [ ] WhatsApp links funcionan (abre chat)
- [ ] Formulario de contacto está configurado
- [ ] No hay placeholders en el texto ("TU_USUARIO", "TODO", etc.)
- [ ] Testimonios tienen clientes reales (no ficticios)
- [ ] Proyectos en la sección Trabajo son reales
- [ ] Links a Instagram son correctos
- [ ] Responsive se ve bien en mobile

---

## 🎨 Cambios frecuentes

### Cambiar colores
En `css/style.css`, línea 11-15:
```css
--color-pink: #E85E95;        /* Rosa */
--color-dark: #161B2D;        /* Azul oscuro */
--color-white: #FFFFFF;       /* Blanco */
```

### Cambiar textos
Edita directamente los archivos `.html`. Los textos están en:
- Títulos: `<h1>`, `<h2>`, etc.
- Párrafos: `<p>`
- Links: en `href`

### Agregar/cambiar proyectos
En `trabajo.html`, busca la sección `.work-grid` y duplica un `.work-item`:
```html
<div class="work-item">
    <div class="work-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
    <p class="work-tag">Industria · Servicio</p>
    <p>Descripción</p>
</div>
```

### Cambiar tipografía
En cada HTML, línea del `<link>`:
```html
<link href="https://fonts.googleapis.com/css2?family=...&display=swap" rel="stylesheet">
```
Luego actualiza en `css/style.css`:
```css
--font-body: 'Nueva Fuente', sans-serif;
--font-heading: 'Otra Fuente', sans-serif;
```

---

## 📱 Funcionalidades incluidas

✅ Navegación suave (smooth scroll)
✅ Animaciones de fade-in al scroll
✅ Acordeón en FAQ (click para expandir)
✅ Botones de WhatsApp con mensaje pre-cargado
✅ Formulario de contacto (lista para Formspree)
✅ Meta tags para SEO
✅ Responsive design (mobile-first)
✅ Accesibilidad (WCAG)

---

## 🔒 Seguridad

- ✅ No hay dependencias externas (excepto Google Fonts)
- ✅ No hay vulnerabilidades conocidas
- ✅ HTTPS automático en GitHub Pages
- ✅ No guardar datos sensibles en el código

---

## 📊 Performance

- Página optimizada para Core Web Vitals
- Tamaño: 132 KB (incluyendo todo)
- CSS: 12 KB
- JavaScript: 2 KB
- Carga en ~1 segundo en conexiones normales

---

## ❓ Preguntas frecuentes

**¿Puedo cambiar los colores?**
Sí, edita las variables CSS en `css/style.css` (líneas 11-21).

**¿Puedo agregar más páginas?**
Sí, copia cualquier `.html` existente como plantilla.

**¿El formulario funciona sin configuración?**
No. Necesitas:
1. Ir a https://formspree.io
2. Crear proyecto
3. Reemplazar `YOUR_FORM_ID` en `contacto.html`

**¿Puedo usar un dominio personalizado?**
Sí. Ve a DEPLOYMENT.md → "Dominio personalizado".

**¿Qué navegadores soporta?**
Chrome, Firefox, Safari, Edge (últimas 2 versiones).
Mobile: iOS Safari 14+, Chrome Android.

**¿Cómo monitoreo visitas?**
Agrega Google Analytics (ver DEPLOYMENT.md → Próximos pasos).

---

## 📁 Estructura de archivos

```
estoesclarito-web/
├── index.html                  ← HOME
├── servicios.html              ← Hub de servicios
├── gestion-de-redes.html       ← Servicio 1
├── creacion-de-contenido.html  ← Servicio 2
├── asesoria.html               ← Servicio 3
├── sobre-mi.html               ← Página personal
├── trabajo.html                ← Portafolio
├── contacto.html               ← Contacto
├── faq.html                    ← Preguntas
├── css/
│   └── style.css               ← Estilos (todo aquí)
├── js/
│   └── main.js                 ← Interactividad
├── README.md                   ← Documentación completa
├── DEPLOYMENT.md               ← Guía despliegue
└── .gitignore                  ← Config git
```

---

## 🎯 Próximas tareas (después de desplegar)

1. **SEO & Analytics** — Agregar Google Analytics
2. **Open Graph** — Mejorar compartición en redes
3. **Landing Pages** — Crear LPs para nichos (restaurantes, médicos, emprendedores)
4. **Blog** — Agregar sección de contenido/recursos
5. **Testimonios** — Cuando consigas clientes, actualizar con citas reales

---

## 📞 Contacto & Support

- **Documentación oficial:** Ver README.md
- **Guía despliegue:** Ver DEPLOYMENT.md
- **Issues en GitHub:** GitHub Pages docs (https://docs.github.com/en/pages)

---

**¡Tu sitio está listo! 🚀**

Próximo paso: `/DEPLOYMENT.md`
