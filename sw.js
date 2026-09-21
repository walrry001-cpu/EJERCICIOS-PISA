// Service worker del cuadernillo "Simulacro PISA - Áreas de terrenos de Cajamarca"
// Autor del contenido: Prof. Walter Rodrigo Arribasplata Chavarry
// Este service worker solo cachea los archivos propios del sitio (todo local,
// no se envía ni se lee ningún dato del usuario) para permitir la instalación
// como app y el uso sin conexión una vez visitado.

const CACHE_NAME = 'pisa-cajamarca-v1';
const ARCHIVOS_BASE = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico',
  './favicon-16.png',
  './favicon-32.png',
  './favicon-48.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-192-maskable.png',
  './icon-512-maskable.png'
];

self.addEventListener('install', function(event){
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(ARCHIVOS_BASE).catch(function(){
        // Si algún archivo no existe en este despliegue, no bloquear la instalación.
        return Promise.resolve();
      });
    })
  );
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(nombres){
      return Promise.all(
        nombres.filter(function(nombre){ return nombre !== CACHE_NAME; })
               .map(function(nombre){ return caches.delete(nombre); })
      );
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(event){
  if(event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(function(cacheado){
      if(cacheado) return cacheado;
      return fetch(event.request).then(function(respuesta){
        // Cachear en segundo plano solo respuestas válidas del mismo origen.
        if(respuesta && respuesta.status === 200 && event.request.url.startsWith(self.location.origin)){
          var copia = respuesta.clone();
          caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copia); });
        }
        return respuesta;
      }).catch(function(){
        // Sin red y sin caché: si pedían la página principal, devolver el index cacheado.
        if(event.request.mode === 'navigate'){
          return caches.match('./index.html');
        }
      });
    })
  );
});
