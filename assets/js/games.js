/* ============================================================
   games.js — les jeux de Livia (3 à 5 ans)

   Trois règles ont guidé ces jeux :
   on ne perd jamais, on ne lit jamais rien (tout est dit à voix
   haute et montré en image), et une manche tient en un seul geste.
   ============================================================ */
(function (global) {
  'use strict';

  /* ---------------- petites aides ---------------- */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function melange(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function piocher(a, n) { return melange(a).slice(0, n); }
  function entier(min, max) { return min + Math.floor(Math.random() * (max - min + 1)); }

  /* ---------------- la voix ---------------- */
  var voixActive = true;
  function dire(texte) {
    if (!voixActive || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(texte);
    u.lang = 'fr-FR'; u.rate = .9; u.pitch = 1.1;
    window.speechSynthesis.speak(u);
  }
  function taire() { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); }

  /* ============================================================
     LE CADRE : manches, étoiles, félicitations
     ============================================================ */
  function jouer(stage, def, onQuit) {
    var gagnees = 0;
    stage.innerHTML = '';

    var barre = el('div', 'jeu-etoiles');
    var consigne = el('p', 'jeu-consigne');
    var zone = el('div', 'jeu-zone');
    stage.appendChild(barre);
    stage.appendChild(consigne);
    stage.appendChild(zone);

    function majEtoiles() {
      barre.innerHTML = '';
      for (var i = 0; i < def.manches; i++) {
        barre.appendChild(el('i', 'etoile' + (i < gagnees ? ' on' : '')));
      }
    }

    function feter(suite) {
      var mots = ['Bravo !', 'Super !', 'Bien joué !', 'Youpi !', 'Parfait !'];
      var m = mots[entier(0, mots.length - 1)];
      var f = el('div', 'jeu-bravo', '<div class="bravo-etoile">⭐</div><b>' + m + '</b>');
      zone.appendChild(f);
      dire(m);
      setTimeout(function () { if (f.parentNode) f.parentNode.removeChild(f); suite(); }, 1100);
    }

    function manche() {
      if (gagnees >= def.manches) return fin();
      majEtoiles();
      zone.innerHTML = '';
      def.manche(zone, gagnees, {
        consigne: function (texte) { consigne.textContent = texte; dire(texte); },
        reussi: function () { gagnees++; majEtoiles(); feter(manche); }
      });
    }

    function fin() {
      majEtoiles();
      consigne.textContent = '';
      zone.innerHTML = '';
      var f = el('div', 'jeu-fin',
        '<div class="fin-etoiles">⭐⭐⭐</div>' +
        '<h3>Bravo Livia !</h3>' +
        '<p>' + def.felicitation + '</p>' +
        '<div class="jeu-actions">' +
        '<button class="primary" data-act="rejouer">Rejouer</button>' +
        '<button data-act="autres">Les autres jeux</button></div>');
      zone.appendChild(f);
      dire('Bravo Livia ! Tu as gagné toutes les étoiles.');
      f.addEventListener('click', function (e) {
        var a = e.target.getAttribute && e.target.getAttribute('data-act');
        if (a === 'rejouer') { gagnees = 0; manche(); }
        else if (a === 'autres') onQuit();
      });
    }

    manche();
  }

  /* ============================================================
     JEU 1 — RELIER : chaque héros retrouve son objet
     ============================================================ */
  var PAIRES = [
    { nom: 'Peppa', objet: 'la flaque de boue',
      a: { t: 'peppa', ds: .66, dy: 184 }, b: { t: 'mudpuddle', ds: .95, dy: 110 } },
    { nom: 'George', objet: 'le dinosaure',
      a: { t: 'george', ds: .66, dy: 184 }, b: { t: 'dino', ds: 2, dy: 150 } },
    { nom: 'Livia', objet: 'le cerf-volant',
      a: { t: 'livia', ds: .66, dy: 184 }, b: { t: 'kite', ds: 1.15, dy: 70 } },
    { nom: 'Elsa', objet: 'le flocon',
      a: { t: 'elsa', ds: .66, dy: 184 }, b: { t: 'snowflake', ds: 1, dy: 100, r: 62, color: '#5aa9d0' } },
    { nom: 'Olaf', objet: 'la boule de neige',
      a: { t: 'olaf', ds: .95, dy: 182 }, b: { t: 'snowball', ds: 1, dy: 100, r: 52 } },
    { nom: 'Papa Pig', objet: 'la voiture',
      a: { t: 'daddy', ds: .66, dy: 184 }, b: { t: 'car', ds: .68, dy: 122 } }
  ];

  function jeuRelier(zone, n, api) {
    var lot = piocher(PAIRES, 3);
    api.consigne('Touche un personnage, puis son objet.');

    var plateau = el('div', 'relier');
    var colA = el('div', 'relier-col');
    var colB = el('div', 'relier-col');
    var traits = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    traits.setAttribute('class', 'relier-traits');
    plateau.appendChild(traits);
    plateau.appendChild(colA);
    plateau.appendChild(colB);
    zone.appendChild(plateau);

    function carte(item, cle, col) {
      var c = el('button', 'carte');
      c.innerHTML = Art.sticker(item);
      c.dataset.cle = cle;
      col.appendChild(c);
      return c;
    }

    melange(lot).forEach(function (p) { carte(p.a, p.nom, colA); });
    melange(lot).forEach(function (p) { carte(p.b, p.nom, colB); });

    var choisie = null, trouvees = 0;

    function relier(c1, c2) {
      var r0 = plateau.getBoundingClientRect();
      var r1 = c1.getBoundingClientRect(), r2 = c2.getBoundingClientRect();
      var l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      l.setAttribute('x1', r1.right - r0.left - 6);
      l.setAttribute('y1', r1.top + r1.height / 2 - r0.top);
      l.setAttribute('x2', r2.left - r0.left + 6);
      l.setAttribute('y2', r2.top + r2.height / 2 - r0.top);
      traits.appendChild(l);
    }

    plateau.addEventListener('click', function (e) {
      var c = e.target.closest ? e.target.closest('.carte') : null;
      if (!c || c.classList.contains('ok')) return;
      var estGauche = c.parentNode === colA;

      if (estGauche) {
        if (choisie) choisie.classList.remove('choisie');
        choisie = c; c.classList.add('choisie');
        return;
      }
      if (!choisie) { c.classList.add('secoue'); setTimeout(function () { c.classList.remove('secoue'); }, 400); return; }

      if (choisie.dataset.cle === c.dataset.cle) {
        relier(choisie, c);
        choisie.classList.add('ok'); c.classList.add('ok');
        choisie.classList.remove('choisie');
        choisie = null;
        trouvees++;
        if (trouvees === lot.length) setTimeout(function () { api.reussi(); }, 450);
      } else {
        c.classList.add('secoue');
        var g = choisie;
        setTimeout(function () {
          c.classList.remove('secoue');
          g.classList.remove('choisie');
        }, 420);
        choisie = null;
      }
    });
  }

  /* ============================================================
     JEU 2 — COMPTER : combien y en a-t-il ?
     ============================================================ */
  var A_COMPTER = [
    { t: 'shell', pluriel: 'coquillages', bg: 'beach', s: 2.2, y: 500 },
    { t: 'starfish', pluriel: 'étoiles de mer', bg: 'beach', s: 1.9, y: 505 },
    { t: 'crab', pluriel: 'crabes', bg: 'beach', s: 1.7, y: 515 },
    { t: 'flower', pluriel: 'fleurs', bg: 'garden', s: 2.4, y: 525 },
    { t: 'ball', pluriel: 'ballons', bg: 'garden', s: 1.2, y: 505 },
    { t: 'butterfly', pluriel: 'papillons', bg: 'garden', s: 2.2, y: 330 },
    { t: 'snowball', pluriel: 'boules de neige', bg: 'snow', s: 1.6, y: 500, r: 26 }
  ];

  function jeuCompter(zone, n, api) {
    var o = piocher(A_COMPTER, 1)[0];
    var combien = Math.min(6, 2 + n);          // on monte doucement : 2, 3, 4, 5, 6
    api.consigne('Combien y a-t-il de ' + o.pluriel + ' ?');

    /* Livia montre du doigt, les objets s'étalent bien à plat pour être comptés */
    var items = [{ t: 'livia', x: 90, y: 522, s: .9, pose: 'point' }];
    var gauche = 250, largeur = 480;
    for (var i = 0; i < combien; i++) {
      items.push({
        t: o.t,
        x: combien === 1 ? gauche + largeur / 2 : gauche + largeur * i / (combien - 1),
        y: o.y + (i % 2 ? 28 : 0),
        s: o.s, r: o.r
      });
    }

    var tableau = el('div', 'jeu-tableau');
    tableau.innerHTML = Art.scene({ bg: o.bg, items: items }, {});
    zone.appendChild(tableau);

    var choix = melange([combien, Math.max(1, combien - 1), combien + 1]);
    var rangee = el('div', 'chiffres');
    choix.forEach(function (c) {
      var b = el('button', 'chiffre', String(c));
      b.onclick = function () {
        if (c === combien) {
          b.classList.add('ok');
          setTimeout(function () { api.reussi(); }, 350);
        } else {
          b.classList.add('secoue');
          setTimeout(function () { b.classList.remove('secoue'); }, 420);
          dire('Essaie encore. Compte avec ton doigt !');
        }
      };
      rangee.appendChild(b);
    });
    zone.appendChild(rangee);
  }

  /* ============================================================
     JEU 3 — ÉCRIRE : tracer les lettres de son prénom
     ============================================================ */
  var LETTRES = {
    L: [[[32, 16], [32, 82]], [[32, 82], [72, 82]]],
    I: [[[50, 16], [50, 82]]],
    V: [[[28, 16], [50, 82]], [[50, 82], [72, 16]]],
    A: [[[30, 82], [50, 16]], [[50, 16], [70, 82]], [[38, 58], [62, 58]]]
  };
  var PRENOM = ['L', 'I', 'V', 'I', 'A'];

  function points(seg, pas) {
    var res = [], dx = seg[1][0] - seg[0][0], dy = seg[1][1] - seg[0][1];
    var d = Math.sqrt(dx * dx + dy * dy), n = Math.max(2, Math.round(d / pas));
    for (var i = 0; i <= n; i++) {
      res.push({ x: seg[0][0] + dx * i / n, y: seg[0][1] + dy * i / n, vu: false });
    }
    return res;
  }

  function jeuEcrire(zone, n, api) {
    var lettre = PRENOM[n % PRENOM.length];
    var segments = LETTRES[lettre];
    api.consigne('Trace la lettre ' + lettre + ' avec ton doigt.');

    var cadre = el('div', 'trace');
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    cadre.appendChild(svg);
    zone.appendChild(cadre);

    var NS = 'http://www.w3.org/2000/svg';
    function ligne(seg, cls, w) {
      var l = document.createElementNS(NS, 'line');
      l.setAttribute('x1', seg[0][0]); l.setAttribute('y1', seg[0][1]);
      l.setAttribute('x2', seg[1][0]); l.setAttribute('y2', seg[1][1]);
      l.setAttribute('class', cls); l.setAttribute('stroke-width', w);
      svg.appendChild(l);
      return l;
    }

    var guides = segments.map(function (s) { return ligne(s, 'guide', 13); });
    segments.forEach(function (s) { ligne(s, 'pointille', 1.6); });

    var depart = document.createElementNS(NS, 'circle');
    depart.setAttribute('class', 'depart'); depart.setAttribute('r', 5);
    svg.appendChild(depart);

    var encre = document.createElementNS(NS, 'polyline');
    encre.setAttribute('class', 'encre');
    svg.appendChild(encre);

    var seg = 0;
    var jalons = points(segments[0], 7);
    var trace = [];

    function majDepart() {
      if (seg >= segments.length) { depart.style.display = 'none'; return; }
      depart.setAttribute('cx', segments[seg][0][0]);
      depart.setAttribute('cy', segments[seg][0][1]);
    }
    majDepart();

    function coord(e) {
      var r = svg.getBoundingClientRect();
      return { x: (e.clientX - r.left) / r.width * 100, y: (e.clientY - r.top) / r.height * 100 };
    }

    var dessine = false;
    function debut(e) {
      if (seg >= segments.length) return;
      dessine = true; trace = []; encre.setAttribute('points', '');
      svg.setPointerCapture && svg.setPointerCapture(e.pointerId);
      bouge(e);
    }
    function bouge(e) {
      if (!dessine) return;
      e.preventDefault();
      var p = coord(e);
      trace.push(p.x.toFixed(1) + ',' + p.y.toFixed(1));
      encre.setAttribute('points', trace.join(' '));
      var vus = 0;
      jalons.forEach(function (j) {
        if (!j.vu) {
          var dx = j.x - p.x, dy = j.y - p.y;
          if (dx * dx + dy * dy < 100) j.vu = true;   // rayon 10
        }
        if (j.vu) vus++;
      });
      if (vus / jalons.length >= .8) fini();
    }
    function fin(e) { dessine = false; }

    function fini() {
      dessine = false;
      guides[seg].classList.add('fait');
      var g = document.createElementNS(NS, 'line');
      g.setAttribute('x1', segments[seg][0][0]); g.setAttribute('y1', segments[seg][0][1]);
      g.setAttribute('x2', segments[seg][1][0]); g.setAttribute('y2', segments[seg][1][1]);
      g.setAttribute('class', 'ecrit'); g.setAttribute('stroke-width', 11);
      svg.appendChild(g);
      encre.setAttribute('points', '');
      seg++;
      if (seg >= segments.length) {
        majDepart();
        setTimeout(function () { api.reussi(); }, 400);
      } else {
        jalons = points(segments[seg], 7);
        majDepart();
        dire('Encore un trait !');
      }
    }

    svg.addEventListener('pointerdown', debut);
    svg.addEventListener('pointermove', bouge);
    svg.addEventListener('pointerup', fin);
    svg.addEventListener('pointercancel', fin);
  }

  /* ============================================================
     LE CATALOGUE
     ============================================================ */
  var JEUX = [
    {
      id: 'relier', nom: 'Relie les amis', emoji: '🔗',
      sous: 'Chaque héros retrouve son objet',
      vignette: { t: 'peppa', ds: .66, dy: 184 },
      def: { manches: 4, manche: jeuRelier, felicitation: 'Tu as relié tous les amis !' }
    },
    {
      id: 'compter', nom: 'Compte avec Livia', emoji: '🔢',
      sous: 'Combien y en a-t-il ?',
      vignette: { t: 'livia', ds: .66, dy: 184 },
      def: { manches: 5, manche: jeuCompter, felicitation: 'Tu sais compter jusqu\'à 6 !' }
    },
    {
      id: 'ecrire', nom: 'Écris ton prénom', emoji: '✏️',
      sous: 'Trace les lettres de L I V I A',
      vignette: { t: 'elsa', ds: .66, dy: 184 },
      def: { manches: 5, manche: jeuEcrire, felicitation: 'Tu as écrit ton prénom en entier !' }
    }
  ];

  global.Jeux = {
    liste: JEUX,
    trouver: function (id) {
      for (var i = 0; i < JEUX.length; i++) if (JEUX[i].id === id) return JEUX[i];
      return null;
    },
    lancer: function (stage, jeu, onQuit) { jouer(stage, jeu.def, onQuit); },
    voix: function (v) { if (v !== undefined) { voixActive = v; if (!v) taire(); } return voixActive; },
    taire: taire
  };
})(window);
