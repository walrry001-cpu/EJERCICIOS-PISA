# Simulacro PISA · Áreas de terrenos de Cajamarca (20 ejercicios, con portada)

Cuadernillo interactivo con 20 problemas de área contextualizados en Cajamarca,
redactados al estilo de las pruebas PISA, presentados uno a la vez (con
navegación Anterior/Siguiente y puntos de progreso). Incluye una portada
ilustrada de Cajamarca incrustada en el propio archivo. Cada ejercicio tiene
un cronómetro configurable por el estudiante, una pregunta de estrategia y
una de cálculo. Al terminar los 20 ejercicios, se puede generar un PDF con la
hoja de resultados.

**Autor:** Prof. Walter Rodrigo Arribasplata Chavarry

## Archivos

- `index.html` — página completa y autocontenida (la portada va incrustada
  en base64 dentro del propio HTML, no depende de ningún archivo externo).
- `favicon.ico`, `favicon-16.png`, `favicon-32.png`, `favicon-48.png`,
  `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` — íconos generados
  a partir del logotipo WRACh.

## Publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `cuadernillo-pisa-cajamarca`).
2. Sube todos los archivos de esta carpeta a la raíz del repositorio.
3. Entra a **Settings → Pages** del repositorio.
4. En "Source" selecciona la rama `main` y la carpeta `/ (root)`, luego guarda.
5. GitHub te entregará un enlace público, algo como:
   `https://TU-USUARIO.github.io/cuadernillo-pisa-cajamarca/`

## Notas técnicas

- Usa jsPDF (cargado desde `cdnjs.cloudflare.com`) solo para generar el PDF
  de resultados; no se envía ningún dato a servidores externos.
- Sitio 100% estático, compatible con GitHub Pages, Netlify, Vercel o
  cualquier hosting de archivos estáticos.
