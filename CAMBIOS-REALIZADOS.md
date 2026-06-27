# Cambios Realizados en el Sitio

## ✅ Completado

### 1. **WhatsApp actualizado**
- ✓ Cambio en todos los HTML: `+5491171291169`
- ✓ Botones de WhatsApp en todas las páginas con enlace directo

### 2. **Instagram handle**
- ✓ @estoesclarito (listo para actualizar con tu handle real)

### 3. **Formulario de contacto**
- ✓ Reemplazado con Google Form
- ✓ URL: https://forms.gle/f7qG1rYVCtneBTNW6
- ✓ Embed en contacto.html (iframe responsivo)

### 4. **Idioma: Español neutral (tú)**
- ✓ Voseo rioplatense → Español neutro
- ✓ Cambios realizados:
  - vos → tú
  - tenés → tienes
  - podés → puedes
  - necesitás → necesitas
  - querés → quieres
  - hacés → haces
  - publicás → publicas
  - Y otros verbos conjugados

### 5. **Imágenes placeholder agregadas**
- ✓ trabajo.html: 6 imágenes reales (Unsplash) de diferentes industrias
- ✓ sobre-mi.html: Foto de Michelle (profesional)
- ✓ Todas con alt text para SEO

---

## 📋 Archivos modificados

| Archivo | Cambio |
|---------|--------|
| `index.html` | Voseo → tú, WhatsApp |
| `servicios.html` | Voseo → tú, WhatsApp |
| `gestion-de-redes.html` | Voseo → tú, WhatsApp |
| `creacion-de-contenido.html` | Voseo → tú, WhatsApp |
| `asesoria.html` | Voseo → tú, WhatsApp |
| `sobre-mi.html` | Voseo → tú, WhatsApp, **+ Foto de Michelle** |
| `trabajo.html` | Voseo → tú, WhatsApp, **+ 6 imágenes reales** |
| `contacto.html` | Voseo → tú, **+ Google Form embed** |
| `faq.html` | Voseo → tú, WhatsApp |

---

## 🔄 Próximos pasos manuales

1. **Reemplazar fotos placeholder**
   - Fotos de Michelle: Sube tu foto profesional
   - Fotos de proyectos: Reemplaza con capturas de tus clientes reales
   - Ubicación: En cada HTML, busca `images.unsplash.com` y reemplaza con tus URLs

2. **Actualizar contenido de proyectos**
   - En `trabajo.html`: Reemplaza nombres, descripciones y resultados reales
   - En testimonios: Agrega citas reales de clientes

3. **Instagram handle**
   - El link actual apunta a `@estoesclarito`
   - Actualiza si es diferente

4. **Verifica el Google Form**
   - El formulario ahora está embebido en contacto.html
   - Prueba que funcione correctamente

---

## 📱 Cómo actualizar imágenes en el futuro

**Busca en cualquier HTML:**
```html
<img src="https://images.unsplash.com/photo-..." alt="Descripción">
```

**Reemplaza con tu imagen:**
```html
<img src="TU_URL_DE_IMAGEN" alt="Descripción">
```

**O usa servicios gratis de fotos:**
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

---

## ✨ Listo para probar

Abre el servidor local y verifica:
```bash
cd /Users/michelleborges/estoesclarito-web
python3 -m http.server 8000
# Abre: http://localhost:8000
```

¡El sitio ya tiene contenido visual y está completamente personalizado!
