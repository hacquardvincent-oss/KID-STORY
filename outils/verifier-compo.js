#!/usr/bin/env node
/* ============================================================
   verifier-compo.js — le contrôle de composition des planches

   Une planche fait 800 × 560. Un personnage est dessiné les pieds
   sur son point d'ancrage, et sa boîte réelle a été relevée une fois
   dans le navigateur (boites.json) : assise, Livia descend de
   quarante-cinq unités SOUS ses pieds, et c'est ainsi qu'on se
   retrouve avec un menton hors cadre sans l'avoir vu.

   Ce script relit toute la bibliothèque et signale :
     — un dessin qui n'existe pas (il ne se dessine simplement pas) ;
     — un décor inconnu ;
     — un personnage qui dépasse du cadre ;
     — deux personnages qui se chevauchent ;
     — une bulle ou un bruitage hors cadre.
   ============================================================ */
var fs = require('fs');
var chemin = require('path');

/* le dépôt est le dossier parent de outils/ */
var RACINE = chemin.dirname(chemin.dirname(chemin.resolve(process.argv[1])));

global.window = global;
new Function(fs.readFileSync(RACINE + '/assets/js/art.js', 'utf8'))();
eval(fs.readFileSync(RACINE + '/assets/js/stories.js', 'utf8'));

var BOITES = JSON.parse(fs.readFileSync(RACINE + '/outils/boites.json', 'utf8'));
var ITEMS = Art.items();
var W = 800, H = 560;

var DECORS = ['beach', 'sea', 'garden', 'hill', 'camp', 'forest', 'creek',
  'snow', 'village', 'road', 'bedroom', 'plain'];

/* Les personnages : eux doivent tenir entièrement dans le cadre. Un
   parasol ou un soleil, non — on les coupe volontiers au bord. */
var GENS = ('peppa george mummy daddy suzy livia liviaPrincess elsa anna olaf ' +
  'roxane juliette isadora papa maman mamie pablo grognon chipie etourdi timide ' +
  'rapide lent rangetout costaud bonheur curieux bluey bingo bandit chilli ' +
  'muffin coco').split(' ');

function boite(it) {
  var cle = it.pose ? it.t + ':' + it.pose : it.t;
  var b = BOITES[cle] || BOITES[it.t];
  if (!b) return null;
  var s = it.s === undefined ? 1 : it.s;
  var x = it.x || 0, y = it.y || 0;
  var g = x + (it.flip ? -(b[0] + b[2]) : b[0]) * s;
  return { g: g, d: g + b[2] * s, h: y + b[1] * s, b: y + (b[1] + b[3]) * s };
}

var soucis = [];
function note(ou, quoi) { soucis.push(ou + ' : ' + quoi); }

function verifierScene(sc, ou) {
  if (DECORS.indexOf(sc.bg) < 0) note(ou, 'décor inconnu « ' + sc.bg + ' »');
  /* « morning » et la pose « stand » sont des reliquats : art.js les ignore
     et dessine le réglage par défaut, ce qui est bien ce que l'auteur voulait */
  if (sc.time && ['day', 'sunset', 'night', 'gris', 'morning'].indexOf(sc.time) < 0) {
    note(ou, 'heure inconnue « ' + sc.time + ' »');
  }
  var gens = [];
  ['back', 'items', 'front'].forEach(function (couche) {
    (sc[couche] || []).forEach(function (it) {
      if (!ITEMS[it.t]) { note(ou, 'dessin inconnu « ' + it.t + ' » (rien ne sera dessiné)'); return; }
      if (it.pose && it.pose !== 'stand' && !BOITES[it.t + ':' + it.pose]) {
        note(ou, '« ' + it.t + ' » n\'a pas la pose ' + it.pose);
      }
      var b = boite(it);
      if (!b) return;
      if (GENS.indexOf(it.t) < 0) return;
      gens.push({ t: it.t, b: b });
      var dehors = [];
      if (b.g < -2) dehors.push('à gauche de ' + Math.round(-b.g));
      if (b.d > W + 2) dehors.push('à droite de ' + Math.round(b.d - W));
      if (b.h < -2) dehors.push('en haut de ' + Math.round(-b.h));
      /* en bas, l'ombre portée dépasse les pieds de quelques unités : elle
         est posée sur le sol, au ras du bord, et personne ne la voit */
      if (b.b > H + 14) dehors.push('en bas de ' + Math.round(b.b - H));
      if (dehors.length) note(ou, it.t + ' sort du cadre ' + dehors.join(', '));
    });
  });
  /* deux personnages côte à côte ne doivent pas se marcher dessus */
  for (var i = 0; i < gens.length; i++) {
    for (var j = i + 1; j < gens.length; j++) {
      var a = gens[i].b, c = gens[j].b;
      var chev = Math.min(a.d, c.d) - Math.max(a.g, c.g);
      if (chev <= 0) continue;
      var etroit = Math.min(a.d - a.g, c.d - c.g);
      if (chev / etroit > 0.58) {
        note(ou, gens[i].t + ' et ' + gens[j].t + ' se chevauchent de ' +
          Math.round(chev / etroit * 100) + '%');
      }
    }
  }
  (sc.bubbles || []).forEach(function (bu) {
    if (bu.x < 0 || bu.x + bu.w > W) note(ou, 'bulle hors cadre (x=' + bu.x + ' w=' + bu.w + ')');
    if (bu.y < 0) note(ou, 'bulle trop haute');
  });
  (sc.sfx || []).forEach(function (f) {
    if (f.x < 30 || f.x > W - 30) note(ou, 'bruitage trop au bord (x=' + f.x + ')');
    if (f.y < 40 || f.y > H - 60) note(ou, 'bruitage mal placé (y=' + f.y + ')');
  });
}

var nbPages = 0, nbHistoires = 0;
UNIVERSES.forEach(function (u) {
  u.stories.forEach(function (s) {
    nbHistoires++;
    if (s.cover) verifierScene(s.cover, u.id + '/' + s.id + '/une');
    var lots = [];
    if (s.pages) lots.push(['', s.pages]);
    if (s.blocs) Object.keys(s.blocs).forEach(function (k) { lots.push([k + '/', s.blocs[k].pages]); });
    lots.forEach(function (lot) {
      lot[1].forEach(function (p, i) {
        nbPages++;
        verifierScene(p.scene, u.id + '/' + s.id + '/' + lot[0] + 'p' + (i + 1));
        ['text', 'es', 'en'].forEach(function (cle) {
          if (!p[cle] || !p[cle].trim()) {
            note(u.id + '/' + s.id + '/' + lot[0] + 'p' + (i + 1), 'texte ' + cle + ' manquant');
          }
        });
      });
    });
  });
});

console.log(nbHistoires + ' histoires, ' + nbPages + ' pages');
if (!soucis.length) { console.log('composition : rien à signaler'); process.exit(0); }
console.log(soucis.length + ' souci(s) :');
soucis.forEach(function (s) { console.log('  ✗ ' + s); });
process.exit(1);
