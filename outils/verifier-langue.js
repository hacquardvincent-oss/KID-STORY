#!/usr/bin/env node
/* ============================================================
   verifier-langue.js — le contrôle de la copie

   Mille sept cents pages écrites en trois langues, c'est trop pour
   une relecture à l'œil. Ce script cherche ce qui se cherche
   mécaniquement : une bulle qui ne se referme pas, un « ¿ » espagnol
   oublié, un mot doublé, une espace insécable manquante avant un
   point d'exclamation, un texte identique dans deux langues (donc
   pas traduit), une page beaucoup plus longue que les autres.

   Il ne juge pas le style. Il attrape les fautes qui se voient.
   ============================================================ */
var fs = require('fs');
var chemin = require('path');
/* le dépôt est le dossier parent de outils/ */
var RACINE = chemin.dirname(chemin.dirname(chemin.resolve(process.argv[1])));

global.window = global;
new Function(fs.readFileSync(RACINE + '/assets/js/art.js', 'utf8'))();
eval(fs.readFileSync(RACINE + '/assets/js/stories.js', 'utf8'));

var soucis = [];
function note(ou, quoi) { soucis.push(ou + ' : ' + quoi); }

/* Mots qu'on double par accident en écrivant vite.
   Attention : en JavaScript, \b ne connaît pas les lettres accentuées — « subía a »
   contient donc un faux « a a » si l'on s'y fie. On écrit donc les frontières à la
   main, avec un jeu de lettres qui inclut les accents. */
var LETTRE = '0-9A-Za-zÀ-ÖØ-öø-ÿ';
var MOTS_DOUBLES = new RegExp(
  '(^|[^' + LETTRE + '])' +
  '(le|la|les|de|du|des|un|une|et|à|que|qui|elle|il|on|ne|pas|son|sa|ses|dans|sur|pour' +
  '|the|of|to|and|in|is|it|she|he|el|los|las|una|se|en|su|no)' +
  '[ ]+\\2($|[^' + LETTRE + '])', 'i');

function verifierTexte(ou, langue, t) {
  if (!t || !t.trim()) { note(ou, 'texte ' + langue + ' vide'); return; }

  /* les guillemets de dialogue vont par paires */
  var ouvre = (t.match(/«/g) || []).length, ferme = (t.match(/»/g) || []).length;
  if (ouvre !== ferme) note(ou + '/' + langue, 'guillemets dépareillés (' + ouvre + ' « pour ' + ferme + ' »)');

  if (/ {2}/.test(t)) note(ou + '/' + langue, 'double espace');
  if (/\s$/.test(t) || /^\s/.test(t)) note(ou + '/' + langue, 'espace en début ou fin');

  var m = t.match(MOTS_DOUBLES);
  /* « el no no iba contre elle » : en espagnol, le premier « no » est un nom.
     C'est la seule répétition légitime rencontrée, et elle est voulue. */
  if (m && !/\bel no no\b/i.test(t)) note(ou + '/' + langue, 'mot doublé «' + m[0] + '»');

  if (langue === 'fr') {
    /* En français, une espace précède ! ? ; et :. Mais « ?! » est une seule
       ponctuation et non deux, et trois points n'en demandent aucune. */
    var propre = t.replace(/\.\.\./g, '').replace(/[!?]{2,}/g, '!');
    if (/[^\s\u00a0][!?;:](\s|$)/.test(propre)) {
      var f = propre.match(/\S[!?;:]/);
      note(ou + '/fr', 'espace manquante avant la ponctuation (« ' + (f ? f[0] : '') + ' »)');
    }
    if (/\bca\b/.test(t)) note(ou + '/fr', '« ca » sans cédille');
    if (/\bou\s+(est|sont|va)\b/.test(t)) note(ou + '/fr', '« ou » sans accent devant un verbe');
  }

  if (langue === 'es') {
    /* une interrogation espagnole s'ouvre et se ferme */
    var inter = (t.match(/\?/g) || []).length, interO = (t.match(/¿/g) || []).length;
    if (inter !== interO) note(ou + '/es', '¿ manquant (' + interO + ' pour ' + inter + ' ?)');
    var excl = (t.match(/!/g) || []).length, exclO = (t.match(/¡/g) || []).length;
    if (excl !== exclO) note(ou + '/es', '¡ manquant (' + exclO + ' pour ' + excl + ' !)');
    /* une espace avant la ponctuation est une faute en espagnol */
    if (/\s[!?,.;:]/.test(t)) note(ou + '/es', 'espace avant la ponctuation (usage français)');
  }

  if (langue === 'en') {
    if (/\s[!?,.;:]/.test(t)) note(ou + '/en', 'espace avant la ponctuation (usage français)');
  }
}

var nb = 0, longueurs = [];
UNIVERSES.forEach(function (u) {
  u.stories.forEach(function (s) {
    var base = u.id + '/' + s.id;
    ['title', 'title_en', 'title_es', 'subtitle', 'subtitle_en', 'subtitle_es'].forEach(function (c) {
      if (!s[c] || !String(s[c]).trim()) note(base, c + ' manquant');
    });
    if (s.title === s.title_en || s.title === s.title_es) note(base, 'titre identique dans deux langues');

    var lots = [];
    if (s.pages) lots.push(['', s.pages]);
    if (s.blocs) Object.keys(s.blocs).forEach(function (k) { lots.push([k + '/', s.blocs[k].pages]); });
    lots.forEach(function (lot) {
      lot[1].forEach(function (p, i) {
        nb++;
        var ou = base + '/' + lot[0] + 'p' + (i + 1);
        verifierTexte(ou, 'fr', p.text);
        verifierTexte(ou, 'es', p.es);
        verifierTexte(ou, 'en', p.en);
        if (p.text && p.es && p.text === p.es) note(ou, 'français et espagnol identiques');
        if (p.text && p.en && p.text === p.en) note(ou, 'français et anglais identiques');
        if (p.es && p.en && p.es === p.en) note(ou, 'espagnol et anglais identiques');
        if (p.text) longueurs.push([ou, p.text.length]);
        /* les bulles sont lues à voix haute : elles doivent rester courtes */
        (p.scene.bubbles || []).forEach(function (b) {
          /* une bulle est lue à voix haute et tient dans un cadre : au-delà de
             soixante signes, le texte sort du dessin */
          if (b.t.length > 62) note(ou, 'bulle trop longue (' + b.t.length + ' signes)');
        });
      });
    });
  });
});

/* une page très au-dessus de la moyenne déborde du cadre de lecture */
var moy = longueurs.reduce(function (a, b) { return a + b[1]; }, 0) / longueurs.length;
longueurs.forEach(function (l) {
  if (l[1] > moy * 1.6) note(l[0], 'texte très long (' + l[1] + ' signes, moyenne ' + Math.round(moy) + ')');
  if (l[1] < moy * 0.45) note(l[0], 'texte très court (' + l[1] + ' signes, moyenne ' + Math.round(moy) + ')');
});

console.log(nb + ' pages relues, longueur moyenne ' + Math.round(moy) + ' signes');
if (!soucis.length) { console.log('copie : rien à signaler'); process.exit(0); }
console.log(soucis.length + ' souci(s) :');
soucis.forEach(function (s) { console.log('  ✗ ' + s); });
process.exit(1);
