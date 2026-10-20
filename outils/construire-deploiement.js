#!/usr/bin/env node
/* ============================================================
   construire-deploiement.js

   Rassemble dans public/ les seuls fichiers que l'app a besoin de
   servir. Le dépôt contient aussi les outils d'écriture, la version
   en un seul fichier et le README : rien de tout ça n'a à se trouver
   sur un hébergeur, même protégé.

   C'est la commande de construction de Cloudflare Pages. Le site
   lui-même n'a toujours pas de build : on ouvre index.html et ça
   marche. Ce script ne fait que choisir et copier.

   Usage :  node outils/construire-deploiement.js
   Sortie :  public/   (et public/_headers)
   ============================================================ */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SORTIE = path.join(ROOT, 'public');

/* Ce qui part en ligne. Tout le reste est délibérément laissé derrière. */
const À_COPIER = [
  'index.html',
  'manifest.webmanifest',
  'sw.js',
  'assets/css',
  'assets/js',
  'assets/fonts',
  'assets/img',
  'assets/icons',
  'assets/icon.svg'
];

/* ------------------------------------------------------------
   Les en-têtes HTTP.

   Cache-Control: no-cache partout, et ce n'est pas une négligence.
   Les fichiers de l'app portent des noms fixes (stories.js, et non
   stories.a1b2c3.js) : un cache long les figerait pour un an, et une
   nouvelle VERSION du service worker réinstallerait les anciens
   fichiers depuis le cache du navigateur sans jamais voir la mise à
   jour. « no-cache » veut dire « revalide avant de servir », pas
   « ne garde rien » : le navigateur renvoie un If-None-Match et
   reçoit un 304 vide. Et de toute façon, entre deux mises à jour,
   c'est le service worker qui sert tout depuis Cache Storage : ces
   en-têtes ne concernent que la première visite et les mises à jour.

   La politique de sécurité est serrée parce que l'app ne charge
   rien de l'extérieur — ni police, ni script, ni image. 'unsafe-inline'
   reste nécessaire deux fois : le <script> qui enregistre le service
   worker dans index.html, et le style="mix-blend-mode:multiply" du
   grain de papier que le moteur de dessin écrit dans ses SVG.
   ------------------------------------------------------------ */
const EN_TÊTES = `/*
  Cache-Control: no-cache
  X-Content-Type-Options: nosniff
  Referrer-Policy: no-referrer
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'
`;

/* --- copie récursive, sans dépendance --- */
function copier(de, vers) {
  const st = fs.statSync(de);
  if (st.isDirectory()) {
    fs.mkdirSync(vers, { recursive: true });
    for (const nom of fs.readdirSync(de)) copier(path.join(de, nom), path.join(vers, nom));
    return 0;
  }
  fs.mkdirSync(path.dirname(vers), { recursive: true });
  fs.copyFileSync(de, vers);
  return st.size;
}

fs.rmSync(SORTIE, { recursive: true, force: true });
fs.mkdirSync(SORTIE, { recursive: true });

let octets = 0, fichiers = 0;
for (const rel of À_COPIER) {
  const de = path.join(ROOT, rel);
  if (!fs.existsSync(de)) {
    console.error('manque : ' + rel);
    process.exit(1);
  }
  copier(de, path.join(SORTIE, rel));
}

/* on recompte sur le résultat, c'est lui qui sera servi */
(function compter(d) {
  for (const nom of fs.readdirSync(d)) {
    const p = path.join(d, nom), st = fs.statSync(p);
    if (st.isDirectory()) compter(p); else { fichiers++; octets += st.size; }
  }
})(SORTIE);

fs.writeFileSync(path.join(SORTIE, '_headers'), EN_TÊTES);

/* Un garde-fou : le service worker énumère les fichiers qu'il met en
   cache à l'installation. S'il en réclame un qui n'a pas été copié,
   l'installation échoue en silence chez l'enfant et l'app ne
   fonctionne plus hors connexion. Autant le voir ici. */
const sw = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
const liste = sw.slice(sw.indexOf('var FICHIERS'), sw.indexOf('];', sw.indexOf('var FICHIERS')));
const manquants = (liste.match(/'\.\/[^']*'/g) || [])
  .map((s) => s.slice(3, -1))
  .filter((f) => f && !fs.existsSync(path.join(SORTIE, f)));

if (manquants.length) {
  console.error('\nLe service worker met en cache des fichiers absents de public/ :');
  manquants.forEach((f) => console.error('  ' + f));
  process.exit(1);
}

console.log('public/ : ' + fichiers + ' fichiers, ' + Math.round(octets / 1024) + ' Ko');
console.log('les ' + ((liste.match(/'\.\//g) || []).length) + ' fichiers du service worker sont tous là');
