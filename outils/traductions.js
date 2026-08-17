/* ============================================================
   traductions.js — où en sont l'espagnol et l'anglais

   Une histoire n'apparaît dans une langue que si elle y est traduite
   entièrement : titre, sous-titre, et le texte de CHAQUE planche. Une
   traduction à moitié faite reste donc invisible, ce qui est le bon
   comportement mais rend le retard difficile à voir. Cet outil le montre.

       node outils/traductions.js
       node outils/traductions.js es      (ne liste que ce qui manque en es)

   ============================================================ */
var fs = require('fs');
global.window = {};
eval(fs.readFileSync(__dirname + '/../assets/js/art.js', 'utf8'));
eval(fs.readFileSync(__dirname + '/../assets/js/stories.js', 'utf8'));
eval(fs.readFileSync(__dirname + '/../assets/js/games.js', 'utf8'));
var Jeux = global.window.Jeux;

var LANGUES = ['es', 'en'];
var seule = process.argv[2];
var souci = 0;

function planches(st) {
  if (!st.blocs) return st.pages;
  return Object.keys(st.blocs).reduce(function (a, k) {
    return a.concat(st.blocs[k].pages);
  }, []);
}

/* ---------- 1. les histoires ---------- */
console.log('\nLES HISTOIRES\n');
LANGUES.forEach(function (l) {
  if (seule && seule !== l) return;
  var total = 0, faites = 0, partielles = [];
  UNIVERSES.forEach(function (u) {
    var n = 0;
    u.stories.forEach(function (st) {
      total++;
      var pg = planches(st);
      var traduites = pg.filter(function (p) { return !!p[l]; }).length;
      var titre = !!st['title_' + l];
      if (titre && traduites === pg.length) { faites++; n++; }
      else if (titre || traduites) {
        partielles.push('    ' + u.id + '/' + st.id + ' : ' + traduites + '/' + pg.length +
          ' planches' + (titre ? '' : ', titre manquant'));
      }
    });
    console.log('  ' + l + '  ' + u.id.padEnd(16) + String(n).padStart(2) + ' / ' +
      String(u.stories.length).padEnd(3) + barre(n, u.stories.length));
  });
  console.log('  ' + l + '  ' + 'TOTAL'.padEnd(16) + String(faites).padStart(2) + ' / ' +
    String(total).padEnd(3) + barre(faites, total) + '\n');
  if (partielles.length) {
    console.log('    commencées mais pas finies — donc invisibles :');
    partielles.forEach(function (x) { console.log(x); });
    console.log('');
  }
});

function barre(n, t) {
  var large = 24, plein = t ? Math.round(n / t * large) : 0;
  return '  ' + Array(plein + 1).join('█') + Array(large - plein + 1).join('·') +
    '  ' + (t ? Math.round(n / t * 100) : 0) + '%';
}

/* ---------- 2. les jeux ---------- */
console.log('LES JEUX\n');
var ref = Object.keys(Jeux.dictionnaire().fr);
LANGUES.forEach(function (l) {
  if (seule && seule !== l) return;
  var d = Jeux.dictionnaire()[l] || {};
  var absentes = ref.filter(function (k) { return d[k] === undefined; });
  /* les sous-tables (objets, formes…) se contrôlent clé par clé */
  var creuses = [];
  ref.forEach(function (k) {
    if (typeof Jeux.dictionnaire().fr[k] === 'object' && !Array.isArray(Jeux.dictionnaire().fr[k])) {
      Object.keys(Jeux.dictionnaire().fr[k]).forEach(function (sk) {
        if (!d[k] || d[k][sk] === undefined) creuses.push(k + '.' + sk);
      });
    }
  });
  var manque = absentes.concat(creuses);
  console.log('  ' + l + '  ' + (ref.length - absentes.length) + ' / ' + ref.length +
    ' entrées' + barre(ref.length - absentes.length, ref.length));
  if (manque.length) {
    souci += manque.length;
    console.log('    manquantes : ' + manque.join(', '));
  }
});

/* ---------- 3. le lexique (étiquettes, thèmes, univers) ---------- */
console.log('\nLE LEXIQUE\n');
var attendu = {};
UNIVERSES.forEach(function (u) {
  attendu[u.name] = 1; attendu[u.tagline] = 1;
  u.stories.forEach(function (st) { attendu[st.tag] = 1; });
});
THEMES.forEach(function (t) { attendu[t.nom] = 1; });
/* les noms propres se passent de traduction */
var propres = ['Peppa Pig', 'Bluey'];
var aTraduire = Object.keys(attendu).filter(function (x) { return propres.indexOf(x) < 0; });
LANGUES.forEach(function (l) {
  if (seule && seule !== l) return;
  var manque = aTraduire.filter(function (x) { return !LEXIQUE[l] || !LEXIQUE[l][x]; });
  console.log('  ' + l + '  ' + (aTraduire.length - manque.length) + ' / ' + aTraduire.length +
    barre(aTraduire.length - manque.length, aTraduire.length));
  if (manque.length) {
    souci += manque.length;
    console.log('    manquants : ' + manque.map(function (x) { return '« ' + x + ' »'; }).join(', '));
  }
});

console.log(souci ? '\n❌ ' + souci + ' entrée(s) d\'interface à traduire\n'
  : '\n✅ interface et jeux traduits de bout en bout\n');
