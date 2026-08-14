/* ============================================================
   verifier-choix.js — le contrôle des histoires à choix

   Une histoire à choix est un petit réseau de blocs, et un réseau se
   casse silencieusement : un « vers » mal orthographié, un chemin plus
   court que les autres, un bloc qu'on n'atteint plus après une réécriture.
   Rien de tout ça ne se voit à la lecture d'une seule branche.

       node outils/verifier-choix.js

   ============================================================ */
var fs = require('fs');
global.window = {};
eval(fs.readFileSync(__dirname + '/../assets/js/art.js', 'utf8'));
eval(fs.readFileSync(__dirname + '/../assets/js/stories.js', 'utf8'));
var Art = global.window.Art;

var soucis = 0;
function pb(m) { console.log('  ✗ ' + m); soucis++; }

UNIVERSES.forEach(function (u) {
  u.stories.forEach(function (st) {
    if (!st.blocs) return;
    console.log('\n' + u.id + '/' + st.id + ' — « ' + st.title + ' »');

    var vus = {}, longueurs = [], fins = [], planches = 0, k;
    for (k in st.blocs) planches += st.blocs[k].pages.length;

    (function marcher(nom, n, route) {
      if (!st.blocs[nom]) return pb('bloc inconnu : « ' + nom +' » (depuis ' + route + ')');
      if (route.split(' → ').indexOf(nom) >= 0) return pb('boucle : ' + route + ' → ' + nom);
      vus[nom] = true;
      var bloc = st.blocs[nom];
      n += bloc.pages.length;
      var derniere = bloc.pages[bloc.pages.length - 1];
      if (!derniere.choix) { longueurs.push(n); fins.push(route + ' → ' + nom); return; }
      if (derniere.choix.options.length !== 2) pb(nom + ' : ' + derniere.choix.options.length + ' options (2 attendues)');
      derniere.choix.options.forEach(function (o) {
        if (!o.mot) pb(nom + ' : une option sans mot');
        if (!o.v || !Art.sticker(Art.vignette(o.v))) pb(nom + ' : vignette impossible à dessiner (' + (o.v && o.v.t) + ')');
        marcher(o.vers, n, route + ' → ' + nom);
      });
      /* une planche qui propose un choix ne doit pas être la dernière d'un
         chemin : sinon on bloque l'enfant sur un bouton sans suite */
      bloc.pages.forEach(function (p, i) {
        if (p.choix && i !== bloc.pages.length - 1) pb(nom + ' : un choix au milieu du bloc');
      });
    })(st.debut, 0, 'début');

    var uniques = longueurs.filter(function (v, i, a) { return a.indexOf(v) === i; });
    if (uniques.length !== 1) pb('chemins de longueurs différentes : ' + longueurs.join(', '));

    for (k in st.blocs) if (!vus[k]) pb('bloc jamais atteint : « ' + k + ' »');

    console.log('  ' + Object.keys(st.blocs).length + ' blocs, ' + planches +
      ' planches écrites, ' + fins.length + ' fins, chemin de ' + uniques.join('/') + ' planches');
    fins.forEach(function (f) { console.log('    · ' + f.replace('début → ', '')); });
  });
});

/* les scènes se dessinent-elles toutes ? */
var planches = 0, vides = 0;
UNIVERSES.forEach(function (u) {
  u.stories.forEach(function (st) {
    var pages = st.blocs
      ? Object.keys(st.blocs).reduce(function (a, k) { return a.concat(st.blocs[k].pages); }, [])
      : st.pages;
    pages.forEach(function (p) {
      planches++;
      if (Art.scene(p.scene).length < 400) { vides++; pb(st.id + ' : planche vide'); }
      (p.scene.items || []).concat(p.scene.back || [], p.scene.front || []).forEach(function (it) {
        if (!Art.sticker({ t: it.t })) pb(st.id + ' : élément inconnu « ' + it.t + ' »');
      });
    });
  });
});

console.log('\n' + planches + ' planches dessinées, ' + vides + ' vides');
console.log(soucis ? '\n❌ ' + soucis + ' souci(s)' : '\n✅ tout est cohérent');
