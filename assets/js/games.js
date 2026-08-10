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
      a: { t: 'daddy', ds: .66, dy: 184 }, b: { t: 'car', ds: .68, dy: 122 } },
    { nom: 'Bluey', objet: 'le ballon',
      a: { t: 'bluey', ds: .62, dy: 184 }, b: { t: 'ball', ds: 1.1, dy: 122 } },
    { nom: 'Madame Bonheur', objet: 'la fleur',
      a: { t: 'bonheur', ds: .62, dy: 180 }, b: { t: 'flower', ds: 2.2, dy: 120 } },
    { nom: 'Monsieur Grognon', objet: 'le caillou',
      a: { t: 'grognon', ds: .62, dy: 180 }, b: { t: 'rock', ds: 1.5, dy: 130 } },
    { nom: 'Madame Range-Tout', objet: 'le cube',
      a: { t: 'rangetout', ds: .62, dy: 180 }, b: { t: 'cube', ds: 1.5, dy: 136 } }
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
    { t: 'snowball', pluriel: 'boules de neige', bg: 'snow', s: 1.6, y: 500, r: 26 },
    { t: 'cube', pluriel: 'cubes', bg: 'bedroom', s: 1.3, y: 520 }
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
     JEU 3 — ÉCRIRE : tracer les lettres d'un prénom
     Chaque lettre est une suite de tracés SVG. On laisse le navigateur
     échantillonner le chemin : les courbes sont de vraies courbes, et un
     enfant qui apprend le O n'apprend pas un polygone.
     ============================================================ */
  var LETTRES = {
    A: ['M 22,86 L 50,14', 'M 50,14 L 78,86', 'M 32,60 L 68,60'],
    B: ['M 30,14 L 30,86', 'M 30,14 L 54,14 C 74,14 74,48 54,48 L 30,48',
      'M 30,48 L 58,48 C 80,48 80,86 58,86 L 30,86'],
    C: ['M 74,28 C 64,16 48,12 38,20 C 24,30 20,40 20,50 C 20,60 24,70 38,80 C 48,88 64,84 74,72'],
    D: ['M 30,14 L 30,86', 'M 30,14 L 48,14 C 78,14 78,86 48,86 L 30,86'],
    E: ['M 72,14 L 30,14', 'M 30,14 L 30,86', 'M 30,50 L 64,50', 'M 30,86 L 72,86'],
    'É': ['M 72,26 L 32,26', 'M 32,26 L 32,86', 'M 32,56 L 64,56', 'M 32,86 L 72,86', 'M 40,16 L 62,4'],
    'È': ['M 72,26 L 32,26', 'M 32,26 L 32,86', 'M 32,56 L 64,56', 'M 32,86 L 72,86', 'M 62,16 L 40,4'],
    F: ['M 72,14 L 30,14', 'M 30,14 L 30,86', 'M 30,50 L 62,50'],
    G: ['M 74,28 C 64,16 48,12 38,20 C 24,30 20,40 20,50 C 20,60 24,70 38,80 C 54,90 74,82 74,64',
      'M 74,64 L 54,64'],
    H: ['M 28,14 L 28,86', 'M 72,14 L 72,86', 'M 28,50 L 72,50'],
    I: ['M 50,14 L 50,86'],
    J: ['M 64,14 L 64,66 C 64,84 40,90 30,76'],
    K: ['M 30,14 L 30,86', 'M 72,14 L 34,52', 'M 42,44 L 74,86'],
    L: ['M 32,14 L 32,86', 'M 32,86 L 70,86'],
    M: ['M 24,86 L 24,14', 'M 24,14 L 50,58', 'M 50,58 L 76,14', 'M 76,14 L 76,86'],
    N: ['M 28,86 L 28,14', 'M 28,14 L 72,86', 'M 72,86 L 72,14'],
    O: ['M 50,14 C 30,14 20,32 20,50 C 20,68 30,86 50,86 C 70,86 80,68 80,50 C 80,32 70,14 50,14'],
    P: ['M 30,86 L 30,14', 'M 30,14 L 56,14 C 78,14 78,52 56,52 L 30,52'],
    Q: ['M 50,14 C 30,14 20,32 20,50 C 20,68 30,86 50,86 C 70,86 80,68 80,50 C 80,32 70,14 50,14',
      'M 58,66 L 80,90'],
    R: ['M 30,86 L 30,14', 'M 30,14 L 56,14 C 76,14 76,50 56,50 L 30,50', 'M 46,50 L 74,86'],
    S: ['M 74,26 C 66,14 40,10 32,24 C 25,37 40,46 52,50 C 66,55 80,62 74,76 C 66,91 34,88 26,74'],
    T: ['M 22,14 L 78,14', 'M 50,14 L 50,86'],
    U: ['M 26,14 L 26,62 C 26,82 74,82 74,62 L 74,14'],
    V: ['M 24,14 L 50,86', 'M 50,86 L 76,14'],
    W: ['M 18,14 L 32,86', 'M 32,86 L 50,38', 'M 50,38 L 68,86', 'M 68,86 L 82,14'],
    X: ['M 26,14 L 74,86', 'M 74,14 L 26,86'],
    Y: ['M 26,14 L 50,50', 'M 74,14 L 50,50', 'M 50,50 L 50,86'],
    Z: ['M 26,14 L 74,14', 'M 74,14 L 26,86', 'M 26,86 L 74,86']
  };

  /* les prénoms de la maison : Livia d'abord, puis la famille et les copains */
  var PRENOMS = ['LIVIA', 'PABLO', 'MAMAN', 'PAPA', 'MILA', 'ANTOINE', 'MARTINE',
    'ERIC', 'CÉCILE', 'ENZO', 'LAURENT', 'BARBARA', 'SAMANTHA', 'MAXIME', 'LAETITIA'];

  var NS = 'http://www.w3.org/2000/svg';
  var lotPrenoms = null;

  function jeuEcrire(zone, n, api) {
    if (n === 0 || !lotPrenoms) {
      lotPrenoms = ['LIVIA'].concat(piocher(PRENOMS.slice(1), PRENOMS.length - 1));
    }
    var nom = lotPrenoms[n % lotPrenoms.length];
    var lettres = nom.split('').filter(function (c) { return LETTRES[c]; });
    api.consigne('Écris ' + nom + '.');

    /* le prénom en toutes lettres, pour savoir où on en est */
    var bandeau = el('div', 'prenom');
    lettres.forEach(function (c) { bandeau.appendChild(el('span', null, c)); });
    zone.appendChild(bandeau);

    var cadre = el('div', 'trace');
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    cadre.appendChild(svg);
    zone.appendChild(cadre);

    var iLettre = 0, iTrace = 0, jalons = [], trace = [];
    var chemins = [], depart, encre;

    function chemin(d, cls, w) {
      var p = document.createElementNS(NS, 'path');
      p.setAttribute('d', d); p.setAttribute('class', cls);
      p.setAttribute('stroke-width', w); p.setAttribute('fill', 'none');
      svg.appendChild(p);
      return p;
    }

    /* les points de passage : c'est le navigateur qui mesure la courbe */
    function jalonsDe(p) {
      var L = p.getTotalLength(), res = [], pas = 6;
      var n2 = Math.max(2, Math.round(L / pas));
      for (var i = 0; i <= n2; i++) {
        var pt = p.getPointAtLength(L * i / n2);
        res.push({ x: pt.x, y: pt.y, vu: false });
      }
      return res;
    }

    function dessinerLettre() {
      svg.innerHTML = '';
      chemins = LETTRES[lettres[iLettre]].map(function (d) {
        return { d: d, guide: chemin(d, 'guide', 13) };
      });
      chemins.forEach(function (c) { chemin(c.d, 'pointille', 1.6); });
      depart = document.createElementNS(NS, 'circle');
      depart.setAttribute('class', 'depart'); depart.setAttribute('r', 5);
      svg.appendChild(depart);
      encre = document.createElementNS(NS, 'polyline');
      encre.setAttribute('class', 'encre');
      svg.appendChild(encre);
      iTrace = 0;
      majTrace();
      var sp = bandeau.children;
      for (var i = 0; i < sp.length; i++) {
        sp[i].className = i < iLettre ? 'fait' : (i === iLettre ? 'ici' : '');
      }
    }

    function majTrace() {
      if (iTrace >= chemins.length) { depart.style.display = 'none'; return; }
      jalons = jalonsDe(chemins[iTrace].guide);
      depart.style.display = '';
      depart.setAttribute('cx', jalons[0].x);
      depart.setAttribute('cy', jalons[0].y);
    }

    function coord(e) {
      var r = svg.getBoundingClientRect();
      return { x: (e.clientX - r.left) / r.width * 100, y: (e.clientY - r.top) / r.height * 100 };
    }

    var dessine = false;
    function debut(e) {
      if (iTrace >= chemins.length) return;
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
          if (dx * dx + dy * dy < 121) j.vu = true;   // rayon 11
        }
        if (j.vu) vus++;
      });
      if (vus / jalons.length >= .8) traceFini();
    }
    function fin() { dessine = false; }

    function traceFini() {
      dessine = false;
      chemins[iTrace].guide.classList.add('fait');
      chemin(chemins[iTrace].d, 'ecrit', 11);
      svg.appendChild(depart); svg.appendChild(encre);
      encre.setAttribute('points', '');
      iTrace++;
      if (iTrace < chemins.length) { majTrace(); dire('Encore un trait !'); return; }
      majTrace();
      iLettre++;
      if (iLettre >= lettres.length) { setTimeout(function () { api.reussi(); }, 450); return; }
      var sp = bandeau.children;
      sp[iLettre - 1].className = 'fait';
      setTimeout(function () {
        dessinerLettre();
        dire('Maintenant le ' + lettres[iLettre] + '.');
      }, 500);
    }

    svg.addEventListener('pointerdown', debut);
    svg.addEventListener('pointermove', bouge);
    svg.addEventListener('pointerup', fin);
    svg.addEventListener('pointercancel', fin);

    dessinerLettre();
  }

  /* ============================================================
     LE CATALOGUE
     ============================================================ */
  /* ============================================================
     JEU 4 — LES 6 DIFFÉRENCES
     On repart des planches déjà dessinées : à gauche la case d'origine,
     à droite la même case retouchée en six endroits. Les retouches sont
     fabriquées à partir de la scène elle-même — rien n'est dessiné à la
     main, et une nouvelle histoire donne aussitôt une nouvelle planche.
     ============================================================ */
  var A_TROUVER = 6;

  var PERSOS = ('peppa george mummy daddy suzy livia liviaPrincess elsa anna olaf ' +
    'grognon chipie etourdi timide rapide lent rangetout costaud bonheur curieux ' +
    'bluey bingo bandit chilli muffin coco dino roxane juliette isadora pablo').split(' ');

  var PLANCHES = [
    { u: 'peppa', s: 'plage', p: 6 },
    { u: 'peppa', s: 'camping', p: 4 },
    { u: 'peppa', s: 'piscine', p: 0 },
    { u: 'peppa', s: 'petit-frere', p: 5 },
    { u: 'frozen', s: 'ete-arendelle', p: 8 },
    { u: 'bluey', s: 'lucioles', p: 3 },
    { u: 'bluey', s: 'crabes', p: 6 },
    { u: 'monsieurmadame', s: 'rangetout', p: 2 },
    { u: 'melange', s: 'trois-amies', p: 6 },
    { u: 'copines', s: 'cabane-copines', p: 4 }
  ];

  /* de quoi ajouter un élément qui n'a rien à faire là, selon le décor */
  var AJOUTS = {
    beach: ['shell', 'starfish', 'crab'], sea: ['shell', 'starfish'],
    garden: ['flower', 'ball', 'bush'], hill: ['flower', 'bush', 'rock'],
    creek: ['flower', 'rock', 'bush'], camp: ['flower', 'log', 'bush'],
    forest: ['flower', 'bush', 'rock'], snow: ['snowball', 'pine', 'snowball'],
    village: ['flower', 'bush', 'ball'], road: ['flower', 'bush', 'rock'],
    bedroom: ['cube', 'ball', 'suitcase'], plain: ['flower', 'ball', 'bush']
  };
  /* deux rangs : au premier plan, et un peu en retrait dans le décor */
  var PLACES = [[70, 550], [190, 548], [320, 552], [470, 550], [610, 548], [730, 546],
    [110, 468], [250, 464], [400, 460], [550, 464], [690, 466]];

  /* un tirage reproductible : une planche donnée pose toujours la même énigme */
  function graineur(g) {
    return function () { g = (g * 1103515245 + 12345) % 2147483648; return g / 2147483648; };
  }
  function melangeAvec(a, r) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function trouverScene(uid, sid, p) {
    for (var i = 0; i < UNIVERSES.length; i++) {
      if (UNIVERSES[i].id !== uid) continue;
      var st = UNIVERSES[i].stories;
      for (var j = 0; j < st.length; j++) {
        if (st[j].id === sid) return { u: UNIVERSES[i], s: st[j], scene: st[j].pages[p].scene };
      }
    }
    return null;
  }

  var HUMEURS = ['happy', 'wow', 'sad'];

  function fabriquerDifferences(scene, graine) {
    var r = graineur(graine);
    var copie = JSON.parse(JSON.stringify(scene));
    delete copie.bubbles;
    var zones = [];

    var persos = [], objets = [];
    ['back', 'items', 'front'].forEach(function (c) {
      (copie[c] || []).forEach(function (it) {
        (PERSOS.indexOf(it.t) >= 0 ? persos : objets).push(it);
      });
    });

    /* une seule retouche par élément : deux changements au même endroit,
       ça ne se voit plus, ça s'annule */
    var efface = 0;
    var candidats = melangeAvec(objets, r).map(function (it, k) {
      /* on n'efface qu'un objet sur trois : une case vidée n'est plus la même case */
      var quoi = (k % 3 === 0 && efface < 2) ? 'retirer' : 'taille';
      if (quoi === 'retirer') efface++;
      return { it: it, quoi: quoi, perso: false };
    }).concat(melangeAvec(persos, r).map(function (it, k) {
      return { it: it, quoi: ['pose', 'flip', 'humeur'][k % 3], perso: true };
    }));
    /* deux différences côte à côte n'en font qu'une : on les espace */
    function loin(x, y, d) {
      return zones.every(function (z) {
        return (z.x - x) * (z.x - x) + (z.y - y) * (z.y - y) > d * d;
      });
    }
    function centre(c) {
      return [c.it.x, c.it.y - (c.perso ? 110 * (c.it.s || 1) : 22)];
    }
    var melanges = melangeAvec(candidats, r), retenus = [];
    [130, 90, 55].forEach(function (ecart) {
      melanges.forEach(function (c) {
        if (retenus.length >= A_TROUVER || c.pris) return;
        var p = centre(c);
        if (!loin(p[0], p[1], ecart)) return;
        c.pris = true; retenus.push(c); zones.push({ x: p[0], y: p[1] });
      });
    });
    zones.length = 0;
    candidats = retenus;

    candidats.forEach(function (c) {
      var it = c.it;
      var cx = it.x, cy = it.y - (c.perso ? 110 * (it.s || 1) : 22);
      if (c.quoi === 'retirer') it.t = 'rien';
      else if (c.quoi === 'taille') it.s = (it.s === undefined ? 1 : it.s) * (r() < .5 ? .55 : 1.5);
      else if (c.quoi === 'flip') it.flip = !it.flip;
      else if (c.quoi === 'humeur') {
        var h = HUMEURS.filter(function (m) { return m !== (it.mood || 'happy'); });
        it.mood = h[Math.floor(r() * h.length)];
      } else if (c.quoi === 'pose') {
        if (it.x > 110 && it.x < 690 && it.pose !== 'sit') it.pose = it.pose === 'armsup' ? 'point' : 'armsup';
        else { it.flip = !it.flip; }
      }
      zones.push({ x: cx, y: cy });
    });

    /* s'il manque des différences, on ajoute ce qui n'était pas là */
    var pool = AJOUTS[scene.bg] || AJOUTS.plain;
    /* on ne pose rien juste devant un visage, le reste peut se chevaucher.
       Copie des emplacements : les marquer sur PLACES les userait d'une
       planche à l'autre. */
    var places = melangeAvec(PLACES, r)
      .map(function (pl) { return { x: pl[0], y: pl[1], pris: false }; })
      .filter(function (pl) {
        return (scene.items || []).every(function (it) { return Math.abs(it.x - pl.x) > 55; });
      });
    /* le dernier passage n'impose plus d'écart : mieux vaut six différences
       serrées que cinq bien réparties */
    [110, 70, 45, 0].forEach(function (ecart) {
      places.forEach(function (pl) {
        if (zones.length >= A_TROUVER || pl.pris) return;
        if (ecart && !loin(pl.x, pl.y - 24, ecart)) return;
        pl.pris = true;
        var t = pool[Math.floor(r() * pool.length)];
        (copie.front = copie.front || []).push({ t: t, x: pl.x, y: pl.y, s: 1.5 });
        zones.push({ x: pl.x, y: pl.y - 24 });
      });
    });
    return { scene: copie, zones: zones };
  }

  var lotPlanches = null;

  function jeuDifferences(zone, n, api) {
    if (n === 0 || !lotPlanches) lotPlanches = melange(PLANCHES.map(function (p, i) {
      return { p: p, i: i };
    }));
    var choix = lotPlanches[n % lotPlanches.length];
    var trouve = trouverScene(choix.p.u, choix.p.s, choix.p.p);
    var fab = fabriquerDifferences(trouve.scene, 1000 + choix.i * 7919);
    api.consigne('Trouve les 6 différences.');

    var plateau = el('div', 'diff');
    var vues = [];
    [trouve.scene, fab.scene].forEach(function (sc) {
      var v = el('div', 'diff-vue');
      v.innerHTML = Art.scene(sc, { noBubbles: true });
      plateau.appendChild(v);
      vues.push(v);
    });
    zone.appendChild(plateau);

    var score = el('p', 'diff-score');
    zone.appendChild(score);

    var vus = fab.zones.map(function () { return false; });
    function majScore() {
      score.innerHTML = '<b>' + vus.filter(Boolean).length + '</b> / ' + A_TROUVER;
    }
    majScore();

    function marquer(z) {
      vues.forEach(function (v) {
        var sv = v.querySelector('svg');
        var c = document.createElementNS(NS, 'circle');
        c.setAttribute('cx', z.x); c.setAttribute('cy', z.y); c.setAttribute('r', 62);
        c.setAttribute('class', 'diff-marque');
        sv.appendChild(c);
      });
    }

    function toucher(e) {
      var v = e.currentTarget, r = v.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width * 800;
      var y = (e.clientY - r.top) / r.height * 560;
      var best = -1, bd = 1e9;
      fab.zones.forEach(function (z, i) {
        if (vus[i]) return;
        var d = (z.x - x) * (z.x - x) + (z.y - y) * (z.y - y);
        if (d < bd) { bd = d; best = i; }
      });
      if (best < 0 || bd > 105 * 105) {
        v.classList.add('rate');
        setTimeout(function () { v.classList.remove('rate'); }, 260);
        return;
      }
      vus[best] = true;
      marquer(fab.zones[best]);
      majScore();
      if (vus.every(Boolean)) setTimeout(function () { api.reussi(); }, 500);
      else dire(['Oui !', 'Bien vu !', 'Encore une !'][Math.floor(Math.random() * 3)]);
    }
    vues.forEach(function (v) { v.addEventListener('click', toucher); });
  }

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
      id: 'ecrire', nom: 'Écris les prénoms', emoji: '✏️',
      sous: 'Livia, Pablo, Maman, Papa…',
      vignette: { t: 'elsa', ds: .66, dy: 184 },
      def: { manches: 5, manche: jeuEcrire, felicitation: 'Tu as écrit cinq prénoms en entier !' }
    },
    {
      id: 'differences', nom: 'Les 6 différences', emoji: '🔍',
      sous: 'Deux cases presque pareilles',
      vignette: { t: 'bluey', ds: .62, dy: 184 },
      def: { manches: 6, manche: jeuDifferences, felicitation: 'Tu as l\'œil ! Six planches, six fois six différences.' }
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
