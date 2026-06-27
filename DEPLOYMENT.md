# Guía de Despliegue — Estoesclarito

Este archivo contiene instrucciones paso a paso para desplegar el sitio en GitHub Pages.

## Opción 1: Desplegar en GitHub Pages (Recomendado)

### Paso 1: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `estoesclarito-web`
3. Descripción: "Sitio web de Estoesclarito — social media manager"
4. Selecciona "Public" (para que GitHub Pages funcione)
5. Crea el repositorio

### Paso 2: Subir los archivos

**Opción A: Desde la línea de comandos (recomendado)**

```bash
cd /Users/michelleborges/estoesclarito-web

# Inicializar git
git init
git add .
git commit -m "Initial commit: Estoesclarito website"

# Conectar con GitHub (reemplaza USERNAME y TOKEN/SSH key según tu setup)
git remote add origin https://github.com/TU_USUARIO/estoesclarito-web.git
git branch -M main
git push -u origin main
```

**Opción B: Desde la interfaz web de GitHub**

1. Abre https://github.com/TU_USUARIO/estoesclarito-web
2. Haz clic en "Add file" → "Upload files"
3. Arrastra todos los archivos de la carpeta `estoesclarito-web/`
4. Commit los cambios

### Paso 3: Activar GitHub Pages

1. Ve a tu repositorio: https://github.com/TU_USUARIO/estoesclarito-web
2. Abre Settings → Pages (en la barra lateral izquierda)
3. En "Source", selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
4. Haz clic en "Save"

### Paso 4: Tu sitio está en vivo

En 1-2 minutos, tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/estoesclarito-web/
```

GitHub enviará un email confirmando la publicación. ✅

---

## Opción 2: Dominio personalizado

Si compraste un dominio (ej: estoesclarito.com):

### Paso 1: Configura los DNS

En tu proveedor de dominios, crea dos registros A:

```
Tipo: A
Nombre: @
Valor: 185.199.108.153

Tipo: A
Nombre: @
Valor: 185.199.109.153

Tipo: A
Nombre: @
Valor: 185.199.110.153

Tipo: A
Nombre: @
Valor: 185.199.111.153
```

(O `CNAME` si tu proveedor lo recomienda)

### Paso 2: Configura en GitHub

1. Settings → Pages → Custom domain
2. Ingresa tu dominio: `estoesclarito.com`
3. GitHub automáticamente:
   - Creará un certificado SSL gratuito
   - Redirigirá `www.estoesclarito.com` a tu dominio raíz
   - Forzará HTTPS

---

## Opción 3: User Site (sin ruta adicional)

Si quieres que el sitio esté en `https://TU_USUARIO.github.io/` sin `/estoesclarito-web/`:

1. Crea un repositorio llamado exactamente: `TU_USUARIO.github.io`
2. Sube los archivos a la rama `main`
3. GitHub Pages lo desplegará automáticamente en tu URL raíz

**Ventaja:** URL más corta y profesional.
**Desventaja:** Solo puedes tener un user site por usuario de GitHub.

---

## Testing local (antes de desplegar)

Antes de subir a GitHub, puedes probar el sitio localmente.

### Opción A: Python

```bash
cd /Users/michelleborges/estoesclarito-web

# Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

### Opción B: Node.js (si tienes Node instalado)

```bash
# Instala http-server globalmente (una sola vez)
npm install -g http-server

# En la carpeta del proyecto
cd /Users/michelleborges/estoesclarito-web
http-server

# Abre: http://localhost:8080
```

### Opción C: Live Server en VS Code

1. Instala la extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"
3. Se abre automáticamente en el navegador

---

## Verificación post-despliegue

Después de que GitHub Pages publique tu sitio:

### Checklist técnico

- [ ] Sitio accesible en la URL pública
- [ ] Todos los links internos funcionan (navegación)
- [ ] CSS está aplicado correctamente (colores, espaciado)
- [ ] Animaciones funcionan (fade-in, scroll)
- [ ] Responsive en mobile (prueba en tu teléfono)
- [ ] WhatsApp links funcionan (abre chat)
- [ ] Formulario de contacto envía (o muestra instrucción de setup)

### Checklist SEO

- [ ] Título y descripción en el navegador (pestaña del browser)
- [ ] Meta description visible en búsqueda de Google
- [ ] URLs semánticas (`/servicios.html`, `/sobre-mi.html`)
- [ ] Imágenes con alt text (si las hay)

### Checklist de contenido

- [ ] Todos los textos están correctos
- [ ] No hay placeholders ("TU_USUARIO", "TODO", etc.)
- [ ] Links a redes sociales apuntan al Instagram correcto
- [ ] Emails en contacto son válidos

---

## Actualizar el sitio después

Cada vez que hagas cambios:

```bash
# Desde la carpeta del proyecto
git add .
git commit -m "Update: descripción del cambio"
git push origin main
```

El sitio se actualizará automáticamente en 1-2 minutos.

---

## Troubleshooting

### El sitio no se ve igual que localmente

**Problema:** Rutas incorrectas en GitHub Pages
**Solución:** 
- Los links deben ser relativos: `/index.html`, `/servicios.html`
- NO usar rutas absolutas: `file:///Users/...`
- Verifica que no haya diferencia entre mayúsculas/minúsculas en filenames

### CSS no se carga

**Problema:** Ruta del CSS es incorrecta
**Solución:** Asegúrate de que en HTML esté: `<link rel="stylesheet" href="css/style.css">`
- Los paths son **case-sensitive** en GitHub Pages

### Formulario no funciona

**Problema:** El formulario tiene `action="https://formspree.io/f/YOUR_FORM_ID"` (placeholder)
**Solución:**
1. Ve a https://formspree.io
2. Crea una cuenta y un proyecto nuevo
3. Copia tu Form ID
4. Reemplaza `YOUR_FORM_ID` en `contacto.html`

---

## Próximos pasos (Opcional)

### 1. Agregar Analytics

Copia este código en el `<head>` de cada HTML (antes del `</head>`):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Reemplaza `GA_MEASUREMENT_ID` con tu ID de Google Analytics.

### 2. Agregar Open Graph (para compartir en redes)

En el `<head>` de cada página:

```html
<meta property="og:title" content="Estoesclarito — Social Media Manager">
<meta property="og:description" content="Gestión de redes, contenido y asesoría sin promesas vacías.">
<meta property="og:image" content="https://tudominio.com/og-image.jpg">
<meta property="og:url" content="https://tudominio.com/">
```

### 3. Mejorar el formulario de contacto

Actualmente el formulario está preparado para Formspree. Alternativas:
- **Netlify Forms** — Si despliegas en Netlify en lugar de GitHub Pages
- **EmailJS** — Envía emails directamente desde JavaScript
- **Basin** — Similar a Formspree, muy simple

### 4. Agregar más landing pages

Ya tienes los servicios individuales. Puedes crear:
- `/para-restaurantes.html` — Landing para restaurantes
- `/para-medicos.html` — Landing para médicos
- `/para-emprendedores.html` — Landing para emprendedores

---

## Support & Updates

- **Documentación oficial GitHub Pages:** https://docs.github.com/en/pages
- **Verifica tu sitio:** https://pagespeed.web.dev/
- **Valida HTML:** https://validator.w3.org/

---

¡Tu sitio está listo para publicar! 🚀
