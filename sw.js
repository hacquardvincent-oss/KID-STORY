/* ============================================================
   sw.js — le service worker

   Il n'y a pas de serveur derrière ce site : tout tient dans une
   poignée de fichiers. On les met donc tous en cache à l'installation,
   et on sert désormais depuis le cache. Résultat : le site s'ouvre
   instantanément, et il fonctionne dans le train comme dans l'avion.

   Pour publier une mise à jour : changer VERSION. L'ancien cache est
   effacé, le nouveau se remplit, et la page se recharge d'elle-même.
   ============================================================ */
var VERSION = 'livia-2026-08-18j';

var FICHIERS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/css/style.css',
  './assets/js/art.js',
  './assets/js/stories.js',
  './assets/js/games.js',
  './assets/js/app.js',
  './assets/fonts/fredoka-latin.woff2',
  './assets/fonts/fredoka-latin-ext.woff2',
  './assets/fonts/literata-latin.woff2',
  './assets/img/grain.png',
  './assets/icons/icone-192.png',
  './assets/icons/icone-512.png',
  './assets/icons/icone-maskable-512.png',
  './assets/icons/apple-touch-icon.png'
];

/* addAll() est tout ou rien, et on y tient : si un seul fichier manquait,
   l'installation échoue, l'ancien cache n'est pas supprimé, et l'enfant garde
   la version précédente qui marche. Mettre en cache fichier par fichier
   donnerait une app à moitié installée, donc cassée hors connexion. */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSION)
      .then(function (c) { return c.addAll(FICHIERS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (noms) {
      return Promise.all(noms.map(function (n) {
        return n === VERSION ? null : caches.delete(n);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Si le site est servi derrière une porte d'authentification — c'est le cas
   sur Cloudflare Access —, une session expirée ne répond pas par une erreur :
   elle répond par la page de connexion, parfois avec un franc code 200. Mise
   en cache à la place de stories.js, cette page casserait l'app jusqu'au
   prochain changement de VERSION, hors connexion comprise. On ne garde donc
   qu'une réponse qui est bien ce qu'on avait demandé : un fichier same-origin
   n'a aucune raison de rediriger, et seule une navigation attend du HTML. */
function utilisable(requete, r) {
  if (!r || !r.ok || r.type === 'opaque' || r.redirected) return false;
  var navigation = requete.mode === 'navigate' || requete.destination === 'document';
  var type = (r.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
  return navigation || type !== 'text/html';
}

/* Cache d'abord : c'est un site figé entre deux mises à jour. On rafraîchit
   la copie en arrière-plan pour que la prochaine ouverture soit à jour. */
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (rep) {
      var reseau = fetch(e.request).then(function (r) {
        if (utilisable(e.request, r)) {
          var copie = r.clone();
          caches.open(VERSION).then(function (c) { c.put(e.request, copie); });
        }
        return r;
      }).catch(function () { return rep; });
      return rep || reseau;
    })
  );
});
