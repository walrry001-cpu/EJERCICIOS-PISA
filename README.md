# Simulacro PISA · Áreas de terrenos de Cajamarca (instalable como app)

Cuadernillo interactivo con 20 problemas de área contextualizados en Cajamarca,
al estilo de las pruebas PISA, presentados uno a la vez (navegación
Anterior/Siguiente, puntos de progreso, cronómetro configurable por
ejercicio, portada ilustrada incrustada y generación de PDF de resultados al
finalizar).

Esta versión además es una **PWA (Progressive Web App)**: una vez publicada
en un dominio con HTTPS (por ejemplo GitHub Pages), el navegador ofrecerá el
botón real **"Instalar"**, y el cuadernillo podrá abrirse como una app
independiente (sin la barra de Chrome) y usarse sin conexión tras la primera
visita.

**Autor:** Prof. Walter Rodrigo Arribasplata Chavarry

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página completa (portada incrustada en base64, no depende de archivos externos de imagen). |
| `manifest.json` | Le dice al navegador el nombre, íconos y modo de la app para que se pueda instalar. |
| `sw.js` | Service worker: permite la instalación y el uso sin conexión (cachea los archivos propios del sitio; no envía ni recibe datos del usuario). |
| `favicon.ico`, `favicon-16/32/48.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Íconos estándar. |
| `icon-192-maskable.png`, `icon-512-maskable.png` | Íconos "maskable" (con margen de seguridad) para que Android no recorte el logo al instalar. |

## Publicarlo en GitHub Pages (para que se pueda instalar de verdad)

1. Crea un repositorio nuevo en GitHub (por ejemplo `cuadernillo-pisa-cajamarca`).
2. Sube **todos** los archivos de esta carpeta a la raíz del repositorio
   (`index.html`, `manifest.json`, `sw.js` y todos los íconos deben quedar
   juntos, en la misma carpeta).
3. Entra a **Settings → Pages** del repositorio.
4. En "Source" selecciona la rama `main` y la carpeta `/ (root)`, luego guarda.
5. GitHub te entregará un enlace público, algo como:
   `https://TU-USUARIO.github.io/cuadernillo-pisa-cajamarca/`
6. Abre ese enlace desde el celular de un estudiante con Chrome: ahora sí
   debería aparecer la opción **"Instalar app"**.

### Por qué antes decía "No se puede instalar esta app"

Chrome solo permite instalar un sitio como app cuando cumple tres requisitos:
un `manifest.json` válido con íconos de 192 px y 512 px, un *service worker*
registrado, y que el sitio se sirva por HTTPS. La versión anterior no tenía
`manifest.json` ni `sw.js`, así que solo ofrecía crear un acceso directo (que
abre una pestaña de Chrome normal), no una instalación real. Esta versión ya
incluye ambos archivos.

## Notas técnicas

- Usa jsPDF (cargado desde `cdnjs.cloudflare.com`) solo para generar el PDF
  de resultados; no se envía ningún dato a servidores externos.
- El service worker solo cachea los archivos propios del sitio para que
  funcione sin conexión; no rastrea ni recopila información del estudiante.
- Sitio 100% estático, compatible con GitHub Pages, Netlify, Vercel o
  cualquier hosting de archivos estáticos con HTTPS.
