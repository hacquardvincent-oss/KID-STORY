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

  /* ============================================================
     LES TROIS LANGUES
     Tout ce qui se dit ou s'écrit dans un jeu passe par ici. Les consignes
     sont lues à voix haute : elles doivent tenir en une phrase courte, dans
     les trois langues, et rester compréhensibles sans l'écran.
     %s marque l'endroit où se glisse un mot (un prénom, un nombre, un objet).
     ============================================================ */
  var LANGUE = 'fr';
  var VOIX = { fr: 'fr-FR', es: 'es-ES', en: 'en-GB' };

  var T = {
    fr: {
      bravo: ['Bravo !', 'Super !', 'Bien joué !', 'Youpi !', 'Parfait !'],
      finVoix: 'Bravo Livia ! Tu as gagné toutes les étoiles.',
      finTitre: 'Bravo Livia !',
      rejouer: 'Rejouer', changer: 'Changer', lesJeux: 'Les jeux',
      cinqHasard: '🎲 Cinq au hasard', auHasard: '🎲 Au hasard',
      choixDessin: 'Choisis un dessin.', autreDessin: 'Un autre dessin',

      relierConsigne: 'Touche un personnage, puis son objet.',
      /* « de étoiles » ne se dit pas : l'élision voyage avec le mot */
      compterConsigne: 'Combien y a-t-il %s ?',
      compterRate: 'Essaie encore. Compte avec ton doigt !',
      ecrireConsigne: 'Écris %s.',
      ecrireTrait: 'Encore un trait !',
      ecrireLettre: 'Maintenant le %s.',
      choixPrenom: 'Choisis un prénom à écrire.',
      autrePrenom: 'Un autre prénom',
      choixLettre: 'Choisis une lettre.',
      autreLettre: 'Une autre lettre',
      lettreConsigne: 'Touche la lettre %s.',
      lettreRate: "Non, ça c'est le %s. Cherche le %s.",
      diffConsigne: 'Trouve les 6 différences.',
      coloConsigne: 'Colorie le dessin.',
      jaiFini: "J'ai fini", effacer: 'Effacer',
      puzConsigne: "Remets le dessin dans l'ordre.",
      labyConsigne: "Amène Livia jusqu'à l'étoile, sans traverser les murs.",
      ptsConsigne: "Relie les points, du 1 jusqu'au %s.",
      ptsTrouve: "Bravo ! C'est %s.",
      grilConsigne: 'Refais le même dessin sur la grille vide.',
      grilTrouve: "C'est %s !",
      symConsigne: "Fais le même dessin de l'autre côté du miroir.",
      symTrouve: 'Regarde, %s !',

      catObserver: 'Regarder', catLettres: 'Les lettres', catNombres: 'Les nombres',
      catCreer: 'Créer', catReflechir: 'Réfléchir',

      jRelier: 'Relie les amis', jRelierSous: 'Chaque héros retrouve son objet',
      jRelierBravo: 'Tu as relié tous les amis !',
      jCompter: 'Compte avec Livia', jCompterSous: 'Combien y en a-t-il ?',
      jCompterBravo: "Tu sais compter jusqu'à 6 !",
      jEcrire: 'Écris les prénoms', jEcrireSous: 'Livia, Pablo, Maman, Papa…',
      jEcrireBravo: 'Bien écrit !',
      jDiff: 'Les 6 différences', jDiffSous: 'Deux cases presque pareilles',
      jDiffBravo: "Tu as l'œil ! Six planches, six fois six différences.",
      jAlpha: "L'alphabet", jAlphaSous: 'Reconnaître puis tracer chaque lettre',
      jAlphaBravo: 'Tu connais tes lettres !',
      jColo: 'Le coloriage', jColoSous: 'Une planche à peindre au doigt',
      jColoBravo: 'Trois beaux dessins !',
      jPuz: 'Le puzzle', jPuzSous: "Remets le dessin dans l'ordre",
      jPuzBravo: "Quatre dessins remis d'aplomb !",
      jLaby: 'Le labyrinthe', jLabySous: "Trouve le chemin jusqu'à l'étoile",
      jLabyBravo: 'Tu retrouves toujours ton chemin !',
      jPts: 'Les points à relier', jPtsSous: 'Du 1 au 12, et le dessin apparaît',
      jPtsBravo: 'Tu comptes dans le bon ordre !',
      jGril: 'La grille de dessins', jGrilSous: 'Recopie le modèle, case par case',
      jGrilBravo: 'Quatre dessins recopiés sans une erreur !',
      jSym: 'La symétrie', jSymSous: "Termine le dessin de l'autre côté",
      jSymBravo: 'Tes deux moitiés sont parfaites !',

      /* les mots comptés à voix haute */
      nombres: ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six',
        'sept', 'huit', 'neuf', 'dix', 'onze', 'douze'],
      /* les objets qu'on compte, au pluriel */
      objets: {
        shell: 'de coquillages', starfish: "d'étoiles de mer", crab: 'de crabes',
        flower: 'de fleurs', ball: 'de ballons', butterfly: 'de papillons',
        snowball: 'de boules de neige', cube: 'de cubes'
      },
      /* ce que dessinent les points à relier, les grilles et les symétries */
      formes: {
        tente: 'une tente', maison: 'une maison', bateau: 'un bateau',
        chat: 'un chat', poisson: 'un poisson', etoile: 'une étoile',
        coeur: 'un cœur', lune: 'la lune', sapin: 'un sapin',
        fenetre: 'une fenêtre', escalier: 'un escalier',
        petitcoeur: 'un petit cœur', papillon: 'un papillon'
      }
    },

    es: {
      bravo: ['¡Bravo!', '¡Genial!', '¡Muy bien!', '¡Yupi!', '¡Perfecto!'],
      finVoix: '¡Bravo Livia! Has ganado todas las estrellas.',
      finTitre: '¡Bravo Livia!',
      rejouer: 'Otra vez', changer: 'Cambiar', lesJeux: 'Los juegos',
      cinqHasard: '🎲 Cinco al azar', auHasard: '🎲 Al azar',
      choixDessin: 'Elige un dibujo.', autreDessin: 'Otro dibujo',

      relierConsigne: 'Toca un personaje y luego su objeto.',
      /* en espagnol, « cuántos » s'accorde : le mot interrogatif voyage donc
         avec l'objet, dans la table ci-dessous, plutôt que dans la phrase */
      compterConsigne: '¿%s hay?',
      compterRate: 'Inténtalo otra vez. ¡Cuenta con el dedo!',
      ecrireConsigne: 'Escribe %s.',
      ecrireTrait: '¡Otro trazo!',
      ecrireLettre: 'Ahora la %s.',
      choixPrenom: 'Elige un nombre para escribir.',
      autrePrenom: 'Otro nombre',
      choixLettre: 'Elige una letra.',
      autreLettre: 'Otra letra',
      lettreConsigne: 'Toca la letra %s.',
      lettreRate: 'No, esa es la %s. Busca la %s.',
      diffConsigne: 'Encuentra las 6 diferencias.',
      coloConsigne: 'Colorea el dibujo.',
      jaiFini: 'He terminado', effacer: 'Borrar',
      puzConsigne: 'Ordena el dibujo.',
      labyConsigne: 'Lleva a Livia hasta la estrella, sin cruzar las paredes.',
      ptsConsigne: 'Une los puntos, del 1 hasta el %s.',
      ptsTrouve: '¡Bravo! Es %s.',
      grilConsigne: 'Copia el mismo dibujo en la cuadrícula vacía.',
      grilTrouve: '¡Es %s!',
      symConsigne: 'Haz el mismo dibujo al otro lado del espejo.',
      symTrouve: '¡Mira, %s!',

      catObserver: 'Mirar', catLettres: 'Las letras', catNombres: 'Los números',
      catCreer: 'Crear', catReflechir: 'Pensar',

      jRelier: 'Une a los amigos', jRelierSous: 'Cada héroe encuentra su objeto',
      jRelierBravo: '¡Has unido a todos los amigos!',
      jCompter: 'Cuenta con Livia', jCompterSous: '¿Cuántos hay?',
      jCompterBravo: '¡Ya sabes contar hasta 6!',
      jEcrire: 'Escribe los nombres', jEcrireSous: 'Livia, Pablo, Mamá, Papá…',
      jEcrireBravo: '¡Bien escrito!',
      jDiff: 'Las 6 diferencias', jDiffSous: 'Dos láminas casi iguales',
      jDiffBravo: '¡Qué ojo! Seis láminas, seis veces seis diferencias.',
      jAlpha: 'El abecedario', jAlphaSous: 'Reconocer y luego trazar cada letra',
      jAlphaBravo: '¡Te sabes las letras!',
      jColo: 'Para colorear', jColoSous: 'Una lámina para pintar con el dedo',
      jColoBravo: '¡Tres dibujos preciosos!',
      jPuz: 'El puzle', jPuzSous: 'Ordena el dibujo',
      jPuzBravo: '¡Cuatro dibujos bien puestos!',
      jLaby: 'El laberinto', jLabySous: 'Encuentra el camino hasta la estrella',
      jLabyBravo: '¡Siempre encuentras tu camino!',
      jPts: 'Unir los puntos', jPtsSous: 'Del 1 al 12, y aparece el dibujo',
      jPtsBravo: '¡Cuentas en el orden correcto!',
      jGril: 'La cuadrícula', jGrilSous: 'Copia el modelo, casilla a casilla',
      jGrilBravo: '¡Cuatro dibujos copiados sin un fallo!',
      jSym: 'La simetría', jSymSous: 'Termina el dibujo del otro lado',
      jSymBravo: '¡Tus dos mitades son perfectas!',

      nombres: ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis',
        'siete', 'ocho', 'nueve', 'diez', 'once', 'doce'],
      objets: {
        shell: 'Cuántas conchas', starfish: 'Cuántas estrellas de mar',
        crab: 'Cuántos cangrejos', flower: 'Cuántas flores',
        ball: 'Cuántas pelotas', butterfly: 'Cuántas mariposas',
        snowball: 'Cuántas bolas de nieve', cube: 'Cuántos cubos'
      },
      formes: {
        tente: 'una tienda de campaña', maison: 'una casa', bateau: 'un barco',
        chat: 'un gato', poisson: 'un pez', etoile: 'una estrella',
        coeur: 'un corazón', lune: 'la luna', sapin: 'un abeto',
        fenetre: 'una ventana', escalier: 'una escalera',
        petitcoeur: 'un corazoncito', papillon: 'una mariposa'
      }
    },

    en: {
      bravo: ['Well done!', 'Great!', 'Nice one!', 'Yay!', 'Perfect!'],
      finVoix: 'Well done Livia! You have won all the stars.',
      finTitre: 'Well done Livia!',
      rejouer: 'Play again', changer: 'Change', lesJeux: 'The games',
      cinqHasard: '🎲 Five at random', auHasard: '🎲 At random',
      choixDessin: 'Choose a picture.', autreDessin: 'Another picture',

      relierConsigne: 'Tap a character, then their thing.',
      compterConsigne: 'How many %s are there?',
      compterRate: 'Try again. Count with your finger!',
      ecrireConsigne: 'Write %s.',
      ecrireTrait: 'One more stroke!',
      ecrireLettre: 'Now the %s.',
      choixPrenom: 'Choose a name to write.',
      autrePrenom: 'Another name',
      choixLettre: 'Choose a letter.',
      autreLettre: 'Another letter',
      lettreConsigne: 'Tap the letter %s.',
      lettreRate: "No, that one is %s. Look for %s.",
      diffConsigne: 'Find the 6 differences.',
      coloConsigne: 'Colour the picture.',
      jaiFini: "I'm done", effacer: 'Erase',
      puzConsigne: 'Put the picture back in order.',
      labyConsigne: 'Take Livia to the star, without crossing the walls.',
      ptsConsigne: 'Join the dots, from 1 to %s.',
      ptsTrouve: "Well done! It's %s.",
      grilConsigne: 'Copy the same picture onto the empty grid.',
      grilTrouve: "It's %s!",
      symConsigne: 'Make the same picture on the other side of the mirror.',
      symTrouve: 'Look, %s!',

      catObserver: 'Looking', catLettres: 'Letters', catNombres: 'Numbers',
      catCreer: 'Making', catReflechir: 'Thinking',

      jRelier: 'Match the friends', jRelierSous: 'Each hero finds their thing',
      jRelierBravo: 'You matched every friend!',
      jCompter: 'Count with Livia', jCompterSous: 'How many are there?',
      jCompterBravo: 'You can count to 6!',
      jEcrire: 'Write the names', jEcrireSous: 'Livia, Pablo, Mummy, Daddy…',
      jEcrireBravo: 'Nicely written!',
      jDiff: 'The 6 differences', jDiffSous: 'Two almost identical panels',
      jDiffBravo: 'Sharp eyes! Six panels, six times six differences.',
      jAlpha: 'The alphabet', jAlphaSous: 'Spot each letter, then trace it',
      jAlphaBravo: 'You know your letters!',
      jColo: 'Colouring in', jColoSous: 'A panel to paint with your finger',
      jColoBravo: 'Three lovely pictures!',
      jPuz: 'The jigsaw', jPuzSous: 'Put the picture back in order',
      jPuzBravo: 'Four pictures put straight!',
      jLaby: 'The maze', jLabySous: 'Find the way to the star',
      jLabyBravo: 'You always find your way!',
      jPts: 'Join the dots', jPtsSous: 'From 1 to 12, and a picture appears',
      jPtsBravo: 'You count in the right order!',
      jGril: 'The drawing grid', jGrilSous: 'Copy the model, square by square',
      jGrilBravo: 'Four pictures copied without a single mistake!',
      jSym: 'Symmetry', jSymSous: 'Finish the picture on the other side',
      jSymBravo: 'Both your halves are perfect!',

      nombres: ['', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
      objets: {
        shell: 'shells', starfish: 'starfish', crab: 'crabs',
        flower: 'flowers', ball: 'balls', butterfly: 'butterflies',
        snowball: 'snowballs', cube: 'blocks'
      },
      formes: {
        tente: 'a tent', maison: 'a house', bateau: 'a boat',
        chat: 'a cat', poisson: 'a fish', etoile: 'a star',
        coeur: 'a heart', lune: 'the moon', sapin: 'a fir tree',
        fenetre: 'a window', escalier: 'a staircase',
        petitcoeur: 'a little heart', papillon: 'a butterfly'
      }
    }
  };

  /* le mot juste, avec ses trous remplis */
  function t(cle) {
    var v = (T[LANGUE] && T[LANGUE][cle]);
    if (v === undefined) v = T.fr[cle];
    if (typeof v !== 'string') return v;
    for (var i = 1; i < arguments.length; i++) v = v.replace('%s', arguments[i]);
    return v;
  }

  /* ---------------- la voix ---------------- */
  var voixActive = true;
  /* la voix choisie dans les réglages, posée par app.js : les jeux et les
     histoires doivent parler de la même bouche */
  var timbre = null;

  function dire(texte) {
    if (!voixActive || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    /* cancel() est asynchrone : parler dans la foulée fait avaler le début de
       la consigne, parfois la consigne entière. On laisse passer un tour. */
    setTimeout(function () {
      var u = new SpeechSynthesisUtterance(texte);
      u.lang = VOIX[LANGUE] || 'fr-FR';
      try {
        if (timbre && timbre.lang && timbre.lang.toLowerCase().indexOf(LANGUE) === 0) u.voice = timbre;
      } catch (e) { timbre = null; }   /* voix périmée : la langue suffit */
      u.rate = .9; u.pitch = 1.1;
      window.speechSynthesis.speak(u);
    }, 90);
  }
  function taire() { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); }

  /* Un bouton d'abord visuel : une grande image, le mot en petit dessous.
     À quatre ans on ne lit pas encore, mais on reconnaît une flèche. */
  function bi(act, image, mot, fort) {
    return '<button class="bi' + (fort ? ' primary' : '') + '" data-act="' + act +
      '" aria-label="' + mot + '"><span class="bi-img">' + image +
      '</span><span class="bi-mot">' + mot + '</span></button>';
  }

  /* ============================================================
     LE CADRE : manches, étoiles, félicitations
     ============================================================ */
  function jouer(stage, def, onQuit) {
    var gagnees = 0, total = 0, valeur = null;
    stage.innerHTML = '';

    /* certains jeux se jouent à l'écran entier : rien à faire défiler, tout
       est atteignable du pouce */
    stage.classList.toggle('jeu-plein', !!def.plein);
    if (def.plein) {
      var fermer = el('button', 'jeu-fermer', '✕');
      fermer.setAttribute('aria-label', 'Fermer le jeu');
      fermer.onclick = function () { onQuit(); };
      stage.appendChild(fermer);
    }

    var barre = el('div', 'jeu-etoiles');
    var consigne = el('p', 'jeu-consigne');
    var zone = el('div', 'jeu-zone');
    stage.appendChild(barre);
    stage.appendChild(consigne);
    stage.appendChild(zone);

    function majEtoiles() {
      barre.innerHTML = '';
      for (var i = 0; i < total; i++) {
        barre.appendChild(el('i', 'etoile' + (i < gagnees ? ' on' : '')));
      }
    }

    function feter(suite) {
      var mots = t('bravo');
      var m = mots[entier(0, mots.length - 1)];
      var f = el('div', 'jeu-bravo', '<div class="bravo-etoile">⭐</div><b>' + m + '</b>');
      zone.appendChild(f);
      dire(m);
      setTimeout(function () { if (f.parentNode) f.parentNode.removeChild(f); suite(); }, 1100);
    }

    function manche() {
      if (gagnees >= total) return fin();
      majEtoiles();
      zone.innerHTML = '';
      def.manche(zone, gagnees, {
        consigne: function (texte) { consigne.textContent = texte; dire(texte); },
        reussi: function () { gagnees++; majEtoiles(); feter(manche); }
      }, valeur);
    }

    /* certains jeux commencent par un choix : quel prénom, quelle lettre */
    function demarrer(v) {
      valeur = v;
      total = typeof def.manches === 'function' ? def.manches(v) : def.manches;
      gagnees = 0;
      manche();
    }
    function choisir() {
      barre.innerHTML = '';
      consigne.textContent = def.choixConsigne ? t(def.choixConsigne) : '';
      zone.innerHTML = '';
      def.choisir(zone, demarrer);
    }

    function fin() {
      majEtoiles();
      consigne.textContent = '';
      zone.innerHTML = '';
      var f = el('div', 'jeu-fin',
        '<div class="fin-etoiles">⭐⭐⭐</div>' +
        '<h3>' + t('finTitre') + '</h3>' +
        '<p>' + t(def.felicitation) + '</p>' +
        '<div class="jeu-actions">' +
        bi('rejouer', '↻', t('rejouer'), true) +
        (def.choisir ? bi('choisir', '✎', def.choixBouton ? t(def.choixBouton) : t('changer'), false) : '') +
        bi('autres', '⌂', t('lesJeux'), false) + '</div>');
      zone.appendChild(f);
      dire(t('finVoix'));
      f.addEventListener('click', function (e) {
        /* le clic tombe sur l'image ou le mot : on remonte jusqu'au bouton */
        var cible = e.target.closest && e.target.closest('[data-act]');
        var a = cible && cible.getAttribute('data-act');
        if (a === 'rejouer') demarrer(valeur);
        else if (a === 'choisir') choisir();
        else if (a === 'autres') onQuit();
      });
    }

    if (def.choisir) choisir(); else demarrer(null);
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
    api.consigne(t('relierConsigne'));

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
    { t: 'shell', bg: 'beach', s: 2.2, y: 500 },
    { t: 'starfish', bg: 'beach', s: 1.9, y: 505 },
    { t: 'crab', bg: 'beach', s: 1.7, y: 515 },
    { t: 'flower', bg: 'garden', s: 2.4, y: 525 },
    { t: 'ball', bg: 'garden', s: 1.2, y: 505 },
    { t: 'butterfly', bg: 'garden', s: 2.2, y: 330 },
    { t: 'snowball', bg: 'snow', s: 1.6, y: 500, r: 26 },
    { t: 'cube', bg: 'bedroom', s: 1.3, y: 520 }
  ];

  function jeuCompter(zone, n, api) {
    var o = piocher(A_COMPTER, 1)[0];
    var combien = Math.min(6, 2 + n);          // on monte doucement : 2, 3, 4, 5, 6
    api.consigne(t('compterConsigne', t('objets')[o.t] || o.t));

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
          dire(t('compterRate'));
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

  /* la grille de choix : un bouton par prénom, plus le tirage au sort */
  function grilleChoix(zone, items, pret, hasard) {
    var g = el('div', 'choix-grille');
    items.forEach(function (t) {
      var b = el('button', 'choix-b', t);
      b.onclick = function () { pret(t); };
      g.appendChild(b);
    });
    zone.appendChild(g);
    var h = el('button', 'choix-hasard', hasard || '🎲 Au hasard');
    h.onclick = function () { pret(null); };
    zone.appendChild(h);
  }
  function choixPrenom(zone, pret) { grilleChoix(zone, PRENOMS, pret, t('cinqHasard')); }

  function jeuEcrire(zone, n, api, choisi) {
    if (choisi) return ecrireMot(zone, choisi, api);
    if (n === 0 || !lotPrenoms) {
      lotPrenoms = ['LIVIA'].concat(piocher(PRENOMS.slice(1), PRENOMS.length - 1));
    }
    return ecrireMot(zone, lotPrenoms[n % lotPrenoms.length], api);
  }

  function ecrireMot(zone, nom, api, consigne) {
    var lettres = nom.split('').filter(function (c) { return LETTRES[c]; });
    api.consigne(consigne || t('ecrireConsigne', nom));

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
      if (iTrace < chemins.length) { majTrace(); dire(t('ecrireTrait')); return; }
      majTrace();
      iLettre++;
      if (iLettre >= lettres.length) { setTimeout(function () { api.reussi(); }, 450); return; }
      var sp = bandeau.children;
      sp[iLettre - 1].className = 'fait';
      setTimeout(function () {
        dessinerLettre();
        dire(t('ecrireLettre', lettres[iLettre]));
      }, 500);
    }

    svg.addEventListener('pointerdown', debut);
    svg.addEventListener('pointermove', bouge);
    svg.addEventListener('pointerup', fin);
    svg.addEventListener('pointercancel', fin);

    dessinerLettre();
  }

  /* ============================================================
     JEU 5 — L'ALPHABET
     Deux exercices en alternance : reconnaître la lettre parmi trois,
     puis la tracer. On apprend à la voir avant de savoir l'écrire.
     ============================================================ */
  var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var lotLettres = null;

  function choixLettre(zone, pret) {
    grilleChoix(zone, ALPHABET, pret, '🎲 Six au hasard');
  }

  function jeuAlphabet(zone, n, api, choisie) {
    var lettre;
    if (choisie) lettre = choisie;
    else {
      if (n === 0 || !lotLettres) lotLettres = piocher(ALPHABET, ALPHABET.length);
      lettre = lotLettres[Math.floor(n / 2) % lotLettres.length];
    }
    /* une fois sur deux on reconnaît, une fois sur deux on trace */
    if (n % 2 === 0) reconnaitreLettre(zone, lettre, api);
    else tracerLettre(zone, lettre, api);
  }

  function reconnaitreLettre(zone, lettre, api) {
    api.consigne(t('lettreConsigne', lettre));
    var autres = piocher(ALPHABET.filter(function (c) { return c !== lettre; }), 2);
    var lot = melange([lettre].concat(autres));
    var g = el('div', 'lettres-choix');
    lot.forEach(function (c) {
      var b = el('button', 'lettre-b');
      b.innerHTML = '<svg viewBox="0 0 100 100">' + LETTRES[c].map(function (d) {
        return '<path d="' + d + '" fill="none" stroke="currentColor" stroke-width="11" ' +
          'stroke-linecap="round" stroke-linejoin="round"/>';
      }).join('') + '</svg>';
      b.onclick = function () {
        if (c === lettre) { b.classList.add('juste'); setTimeout(function () { api.reussi(); }, 350); }
        else {
          b.classList.add('faux');
          setTimeout(function () { b.classList.remove('faux'); }, 400);
          dire(t('lettreRate', c, lettre));
        }
      };
      g.appendChild(b);
    });
    zone.appendChild(g);
  }

  function tracerLettre(zone, lettre, api) {
    ecrireMot(zone, lettre, api, 'Trace la lettre ' + lettre + '.');
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
        if (st[j].id === sid) {
          /* une histoire à choix n'a pas de « pages » : sa couverture suffit */
          var pg = st[j].pages && st[j].pages[p];
          return { u: UNIVERSES[i], s: st[j], scene: pg ? pg.scene : st[j].cover };
        }
      }
    }
    return null;
  }

  var HUMEURS = ['happy', 'wow', 'sad'];

  /* ------------------------------------------------------------
     Fabriquer les six différences.

     L'ordre compte : on choisit d'abord la FENÊTRE — la portion de case
     qu'on va montrer — puis on ne retouche que ce qui s'y trouve. C'est
     l'inverse de l'intuition, mais c'est ce qui garantit un dessin assez
     grand sur un téléphone : une fenêtre de 400 unités sur 800, c'est un
     dessin deux fois plus gros. Si on n'y trouve pas six différences, on
     élargit d'un cran.
     ------------------------------------------------------------ */
  function fabriquerDifferences(scene, graine, format) {
    var W = 800, H = 560;
    format = format || W / H;
    var r = graineur(graine);
    var copie = JSON.parse(JSON.stringify(scene));
    delete copie.bubbles;

    var elements = [];
    ['back', 'items', 'front'].forEach(function (c) {
      (copie[c] || []).forEach(function (it) {
        var perso = PERSOS.indexOf(it.t) >= 0;
        elements.push({
          it: it, perso: perso,
          x: it.x, y: it.y - (perso ? 110 * (it.s || 1) : 22)
        });
      });
    });

    var pivots = elements.filter(function (e) { return e.perso; });
    var pv = pivots.length ? pivots[Math.floor(r() * pivots.length)] : { x: W / 2, y: 380 };

    function fenetre(largeur) {
      /* la fenêtre prend le format de la case à l'écran : sur un téléphone
         en plein écran, elle est plus haute que large */
      var w = Math.min(largeur, W), h = w / format;
      if (h > H) { h = H; w = Math.min(W, h * format); }
      return {
        x: Math.min(Math.max(pv.x - w / 2, 0), W - w),
        y: Math.min(Math.max(pv.y - h * 0.42, 0), H - h),
        w: w, h: h
      };
    }
    function dedans(f, x, y, m) {
      m = m || 0;
      return x > f.x + m && x < f.x + f.w - m && y > f.y + m && y < f.y + f.h - m;
    }

    /* le plan : ce qu'on va changer, sans encore rien changer */
    function planifier(f) {
      var ecartMin = f.w * 0.16;
      var zones = [], plan = [];
      function loin(x, y, d) {
        return zones.every(function (z) {
          return (z.x - x) * (z.x - x) + (z.y - y) * (z.y - y) > d * d;
        });
      }

      var objets = [], persos = [];
      elements.forEach(function (e) {
        if (!dedans(f, e.x, e.y, 10)) return;
        (e.perso ? persos : objets).push(e);
      });

      var efface = 0;
      var candidats = melangeAvec(objets, r).map(function (e, k) {
        var quoi = (k % 3 === 0 && efface < 2) ? 'retirer' : 'taille';
        if (quoi === 'retirer') efface++;
        return { e: e, quoi: quoi };
      }).concat(melangeAvec(persos, r).map(function (e, k) {
        return { e: e, quoi: ['pose', 'flip', 'humeur'][k % 3] };
      }));
      candidats = melangeAvec(candidats, r);

      [ecartMin, ecartMin * 0.7, ecartMin * 0.45].forEach(function (d) {
        candidats.forEach(function (c) {
          if (plan.length >= A_TROUVER || c.pris) return;
          if (!loin(c.e.x, c.e.y, d)) return;
          c.pris = true; plan.push(c); zones.push({ x: c.e.x, y: c.e.y });
        });
      });

      /* on complète avec des objets qui n'étaient pas là, posés au sol
         dans la fenêtre */
      var pool = AJOUTS[scene.bg] || AJOUTS.plain;
      var solBas = Math.min(f.y + f.h - f.h * 0.06, 552);
      var places = [];
      [0.12, 0.34, 0.56, 0.78, 0.24, 0.68].forEach(function (t) {
        places.push({ x: Math.round(f.x + f.w * t), y: Math.round(solBas) });
        places.push({ x: Math.round(f.x + f.w * t), y: Math.round(solBas - f.h * 0.22) });
      });
      places = melangeAvec(places, r).filter(function (pl) {
        return (scene.items || []).every(function (it) {
          return Math.abs(it.x - pl.x) > f.w * 0.09;
        });
      });
      [ecartMin, ecartMin * 0.7, ecartMin * 0.45].forEach(function (d) {
        places.forEach(function (pl) {
          if (plan.length >= A_TROUVER || pl.pris) return;
          if (!loin(pl.x, pl.y - f.h * 0.05, d)) return;
          pl.pris = true;
          plan.push({ ajout: { t: pool[Math.floor(r() * pool.length)], x: pl.x, y: pl.y, s: f.w / 800 * 1.5 } });
          zones.push({ x: pl.x, y: pl.y - f.h * 0.05 });
        });
      });

      return { plan: plan, zones: zones };
    }

    /* on serre autant que possible, puis on desserre s'il le faut */
    var f, essai;
    var tailles = [520, 600, 690, 800];
    for (var i = 0; i < tailles.length; i++) {
      f = fenetre(tailles[i]);
      essai = planifier(f);
      if (essai.plan.length >= A_TROUVER) break;
    }

    essai.plan.forEach(function (c) {
      if (c.ajout) { (copie.front = copie.front || []).push(c.ajout); return; }
      var it = c.e.it;
      if (c.quoi === 'retirer') it.t = 'rien';
      else if (c.quoi === 'taille') it.s = (it.s === undefined ? 1 : it.s) * (r() < .5 ? .55 : 1.5);
      else if (c.quoi === 'flip') it.flip = !it.flip;
      else if (c.quoi === 'humeur') {
        var h = HUMEURS.filter(function (m) { return m !== (it.mood || 'happy'); });
        it.mood = h[Math.floor(r() * h.length)];
      } else if (c.quoi === 'pose') {
        if (it.x > 110 && it.x < 690 && it.pose !== 'sit') it.pose = it.pose === 'armsup' ? 'point' : 'armsup';
        else it.flip = !it.flip;
      }
    });

    return { scene: copie, zones: essai.zones, cadre: f };
  }

  var lotPlanches = null;

  function jeuDifferences(zone, n, api) {
    if (n === 0 || !lotPlanches) lotPlanches = melange(PLANCHES.map(function (p, i) {
      return { p: p, i: i };
    }));
    var choix = lotPlanches[n % lotPlanches.length];
    var trouve = trouverScene(choix.p.u, choix.p.s, choix.p.p);
    api.consigne(t('diffConsigne'));

    /* On pose d'abord les deux cases vides, on mesure la place réellement
       disponible, et seulement ensuite on choisit le cadrage : c'est ce qui
       permet de tout tenir à l'écran sans faire défiler la page. */
    var plateau = el('div', 'diff');
    var vues = [el('div', 'diff-vue'), el('div', 'diff-vue')];
    vues.forEach(function (v) { plateau.appendChild(v); });
    zone.appendChild(plateau);

    var score = el('p', 'diff-score');
    zone.appendChild(score);

    var boite = vues[0].getBoundingClientRect();
    var format = (boite.width > 20 && boite.height > 20) ? boite.width / boite.height : 800 / 560;
    var fab = fabriquerDifferences(trouve.scene, 1000 + choix.i * 7919, format);
    var cadre = fab.cadre;
    vues[0].innerHTML = Art.scene(trouve.scene, { noBubbles: true, cadre: cadre });
    vues[1].innerHTML = Art.scene(fab.scene, { noBubbles: true, cadre: cadre });

    var vus = fab.zones.map(function () { return false; });
    function majScore() {
      score.innerHTML = '<b>' + vus.filter(Boolean).length + '</b> / ' + A_TROUVER;
    }
    majScore();

    function marquer(z) {
      vues.forEach(function (v) {
        var sv = v.querySelector('svg');
        var c = document.createElementNS(NS, 'circle');
        c.setAttribute('cx', z.x); c.setAttribute('cy', z.y);
        c.setAttribute('r', Math.round(cadre.w / 800 * 62));
        c.setAttribute('stroke-width', Math.round(cadre.w / 800 * 9));
        c.setAttribute('class', 'diff-marque');
        sv.appendChild(c);
      });
    }

    function toucher(e) {
      var v = e.currentTarget, r = v.getBoundingClientRect();
      var x = cadre.x + (e.clientX - r.left) / r.width * cadre.w;
      var y = cadre.y + (e.clientY - r.top) / r.height * cadre.h;
      var best = -1, bd = 1e9;
      fab.zones.forEach(function (z, i) {
        if (vus[i]) return;
        var d = (z.x - x) * (z.x - x) + (z.y - y) * (z.y - y);
        if (d < bd) { bd = d; best = i; }
      });
      var portee = cadre.w / 800 * 118;      // on vise en pixels, pas en unités
      if (best < 0 || bd > portee * portee) {
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

  /* ============================================================
     JEU 6 — LE COLORIAGE
     On reprend une planche existante, vidée de ses couleurs : il ne reste
     que le trait. Chaque forme est une zone à remplir. Rien à réussir, rien
     à rater — on s'arrête quand on a fini.
     ============================================================ */
  var COULEURS = ['#e0453c', '#f0862c', '#f7c518', '#7ab648', '#3fb3b0',
    '#4a7fc1', '#a98cf0', '#f2a0c2', '#c9622f', '#8a5a3b', '#3a2a22', '#fffdf6'];

  /* Les dessins proposés au coloriage et au puzzle : un par univers au moins,
     choisis pour leur couverture — des personnages bien séparés, peu de décor,
     donc de grandes zones à peindre. */
  var A_COLORIER = [
    { u: 'copines', s: 'nouvelle' }, { u: 'peppa', s: 'petit-frere' },
    { u: 'bluey', s: 'balancoire' }, { u: 'monsieurmadame', s: 'bonheur' },
    { u: 'melange', s: 'trois-amies' }, { u: 'frozen', s: 'ete-arendelle' },
    { u: 'copines', s: 'cabane-copines' }, { u: 'peppa', s: 'dernier-gateau' },
    { u: 'frozen', s: 'olaf-a-trop-chaud' }, { u: 'bluey', s: 'crabes' },
    { u: 'monsieurmadame', s: 'rapide-lent' }, { u: 'peppa', s: 'plage' },
    { u: 'copines', s: 'le-tour-de-pablo' }, { u: 'melange', s: 'gouter-a-quatre' },
    { u: 'choix', s: 'cabane-ou-riviere' }, { u: 'bluey', s: 'lucioles' }
  ];
  var lotColoriage = null;

  /* Le choix du dessin : une grille de vignettes. L'enfant ne lit pas le titre,
     elle reconnaît l'image — c'est donc l'image qu'on lui montre, en grand. */
  function choixDessin(zone, pret) {
    var g = el('div', 'dessins-grille');
    A_COLORIER.forEach(function (choix) {
      var trouve = trouverScene(choix.u, choix.s, -1);
      if (!trouve) return;
      var b = el('button', 'dessin-b');
      b.innerHTML = Art.scene(trouve.s.cover, {
        /* 4/3 plutôt que carré : trois personnages côte à côte ne tiennent
           pas dans un carré sans se faire rogner les épaules */
        contour: true, noBubbles: true, cadre: cadreAutour(trouve.s.cover, 4 / 3, true)
      });
      b.setAttribute('aria-label', trouve.s.title);
      b.onclick = function () { pret(choix); };
      g.appendChild(b);
    });
    zone.appendChild(g);
    var h = el('button', 'choix-hasard', t('auHasard'));
    h.onclick = function () { pret(null); };
    zone.appendChild(h);
  }

  /* Cadrer une scène sur ses personnages, au format de la boîte à l'écran :
     un dessin à colorier doit remplir la feuille, pas flotter au milieu. */
  function cadreAutour(scene, format, serre) {
    var W = 800, H = 560;
    /* « serre » cadre au plus près des personnages : c'est ce qu'il faut pour
       une vignette de deux centimètres, pas pour une planche à colorier */
    /* la marge se compte depuis les pieds d'un personnage, pas depuis son bord :
       il faut au moins sa demi-largeur pour ne pas lui couper un bras */
    var m = serre ? 84 : 130;
    var xs = (scene.items || []).map(function (it) { return it.x; });
    if (!xs.length) return null;
    var x0 = Math.min.apply(null, xs) - m, x1 = Math.max.apply(null, xs) + m;
    var w = Math.max(x1 - x0, W * (serre ? 0.3 : 0.45)), h = w / format;
    /* un personnage debout monte à trois cents unités au-dessus du sol : sous
       cette hauteur, le cadre lui coupe la tête. On élargit alors plutôt que
       de rogner. */
    if (serre && h < 340) { h = 340; w = h * format; }
    if (h > H) { h = H; w = Math.min(W, h * format); }
    if (w > W) { w = W; h = w / format; }
    var cx = (x0 + x1) / 2;
    return {
      x: Math.min(Math.max(cx - w / 2, 0), W - w),
      y: Math.min(Math.max(H - h, 0), H - h),
      w: w, h: h
    };
  }

  function jeuColoriage(zone, n, api, choisi) {
    if (n === 0 || !lotColoriage) lotColoriage = melange(A_COLORIER);
    var choix = choisi || lotColoriage[n % lotColoriage.length];
    var trouve = trouverScene(choix.u, choix.s, -1);
    api.consigne(t('coloConsigne'));

    var feuille = el('div', 'colo-feuille');
    zone.appendChild(feuille);
    var b = feuille.getBoundingClientRect();
    var fmt = (b.width > 20 && b.height > 20) ? b.width / b.height : 800 / 560;
    feuille.innerHTML = Art.scene(trouve.s.cover, {
      contour: true, noBubbles: true, cadre: cadreAutour(trouve.s.cover, fmt)
    });

    var teinte = COULEURS[0];
    var palette = el('div', 'colo-palette');
    COULEURS.forEach(function (c, i) {
      var b = el('button', 'colo-pot' + (i === 0 ? ' choisi' : ''));
      b.style.background = c;
      b.setAttribute('aria-label', 'couleur');
      b.onclick = function () {
        teinte = c;
        [].forEach.call(palette.children, function (x) { x.classList.remove('choisi'); });
        b.classList.add('choisi');
      };
      palette.appendChild(b);
    });
    zone.appendChild(palette);

    /* on peint une forme d'un doigt : les aplats se remplissent, les membres
       — qui sont des traits épais — changent de trait */
    feuille.addEventListener('click', function (e) {
      var c = e.target;
      if (!c.classList) return;
      if (c.classList.contains('z')) c.setAttribute('fill', teinte);
      else if (c.classList.contains('zs')) c.setAttribute('stroke', teinte);
    });

    var actions = el('div', 'colo-actions');
    var fini = el('button', 'bi primary');
    fini.innerHTML = '<span class="bi-img">✓</span><span class="bi-mot">' + t('jaiFini') + '</span>';
    fini.onclick = function () { api.reussi(); };
    var vider = el('button', 'bi');
    vider.innerHTML = '<span class="bi-img">✻</span><span class="bi-mot">' + t('effacer') + '</span>';
    vider.onclick = function () {
      [].forEach.call(feuille.querySelectorAll('.z'), function (x) { x.setAttribute('fill', '#fffdf6'); });
      [].forEach.call(feuille.querySelectorAll('.zs'), function (x) { x.setAttribute('stroke', '#fffdf6'); });
    };
    actions.appendChild(vider); actions.appendChild(fini);
    zone.appendChild(actions);
  }

  /* ============================================================
     JEU 7 — LE PUZZLE
     Une planche découpée en morceaux. On touche deux morceaux pour les
     échanger : pas de glisser-déposer, qui rate une fois sur deux à quatre ans.
     ============================================================ */
  var lotPuzzle = null;

  function jeuPuzzle(zone, n, api, choisi) {
    if (n === 0 || !lotPuzzle) lotPuzzle = melange(A_COLORIER);
    var choix = choisi || lotPuzzle[n % lotPuzzle.length];
    var trouve = trouverScene(choix.u, choix.s, -1);
    var cols = n < 2 ? 2 : 3, rangs = n < 2 ? 2 : 2;   /* 4 morceaux, puis 6 */
    api.consigne(t('puzConsigne'));

    var n2 = cols * rangs;
    var pieces = [];
    for (var i = 0; i < n2; i++) {
      pieces.push(Art.scene(trouve.s.cover, {
        noBubbles: true,
        cadre: {
          x: (i % cols) * (800 / cols), y: Math.floor(i / cols) * (560 / rangs),
          w: 800 / cols, h: 560 / rangs
        }
      }));
    }

    /* un ordre mélangé, jamais déjà résolu */
    var ordre = melange(pieces.map(function (_, i) { return i; }));
    var range = function () { return ordre.every(function (v, i) { return v === i; }); };
    while (range()) ordre = melange(ordre);

    var plateau = el('div', 'puz');
    plateau.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
    zone.appendChild(plateau);

    var choisi = -1;
    function dessiner() {
      plateau.innerHTML = '';
      ordre.forEach(function (p, i) {
        var c = el('div', 'puz-piece' + (i === choisi ? ' choisi' : '') + (p === i ? ' bonne' : ''));
        c.innerHTML = pieces[p];
        c.onclick = function () {
          if (choisi < 0) { choisi = i; dessiner(); return; }
          if (choisi === i) { choisi = -1; dessiner(); return; }
          var t = ordre[choisi]; ordre[choisi] = ordre[i]; ordre[i] = t;
          choisi = -1;
          dessiner();
          if (range()) setTimeout(function () { api.reussi(); }, 450);
        };
        plateau.appendChild(c);
      });
    }
    dessiner();
  }

  /* ============================================================
     JEU 8 — LE LABYRINTHE
     Un labyrinthe fabriqué à chaque manche, parcouru du doigt. On ne peut
     pas traverser un mur : le trait s'arrête, il n'y a rien à perdre.
     ============================================================ */
  function fabriquerLabyrinthe(cols, rangs) {
    var cases = [], i;
    for (i = 0; i < cols * rangs; i++) cases.push({ n: true, e: true, s: true, o: true, vu: false });
    var pile = [0];
    cases[0].vu = true;
    while (pile.length) {
      var c = pile[pile.length - 1];
      var x = c % cols, y = Math.floor(c / cols);
      var voisins = [];
      if (y > 0 && !cases[c - cols].vu) voisins.push([c - cols, 'n', 's']);
      if (y < rangs - 1 && !cases[c + cols].vu) voisins.push([c + cols, 's', 'n']);
      if (x > 0 && !cases[c - 1].vu) voisins.push([c - 1, 'o', 'e']);
      if (x < cols - 1 && !cases[c + 1].vu) voisins.push([c + 1, 'e', 'o']);
      if (!voisins.length) { pile.pop(); continue; }
      var v = voisins[Math.floor(Math.random() * voisins.length)];
      cases[c][v[1]] = false;
      cases[v[0]][v[2]] = false;
      cases[v[0]].vu = true;
      pile.push(v[0]);
    }
    return cases;
  }

  function jeuLabyrinthe(zone, n, api) {
    var cols = 5 + Math.min(2, n), rangs = 7 + Math.min(2, n);
    var cases = fabriquerLabyrinthe(cols, rangs);
    var depart = 0, arrivee = cols * rangs - 1;
    api.consigne(t('labyConsigne'));

    var P = 100;                       /* côté d'une case, en unités de dessin */
    var W = cols * P, H = rangs * P;
    var mur = '';
    cases.forEach(function (c, i) {
      var x = (i % cols) * P, y = Math.floor(i / cols) * P;
      if (c.n) mur += 'M ' + x + ',' + y + ' L ' + (x + P) + ',' + y + ' ';
      if (c.o) mur += 'M ' + x + ',' + y + ' L ' + x + ',' + (y + P) + ' ';
      if (i % cols === cols - 1) mur += 'M ' + (x + P) + ',' + y + ' L ' + (x + P) + ',' + (y + P) + ' ';
      if (Math.floor(i / cols) === rangs - 1) mur += 'M ' + x + ',' + (y + P) + ' L ' + (x + P) + ',' + (y + P) + ' ';
    });

    var cadre = el('div', 'laby');
    cadre.innerHTML = '<svg viewBox="' + (-6) + ' ' + (-6) + ' ' + (W + 12) + ' ' + (H + 12) +
      '" preserveAspectRatio="xMidYMid meet">' +
      '<rect width="' + W + '" height="' + H + '" fill="#fffaf0"/>' +
      '<rect x="' + ((arrivee % cols) * P + 8) + '" y="' + (Math.floor(arrivee / cols) * P + 8) +
      '" width="' + (P - 16) + '" height="' + (P - 16) + '" rx="10" fill="#f7c518" opacity=".55"/>' +
      '<polyline class="laby-trait" points=""/>' +
      '<path d="' + mur + '" fill="none" stroke="#3a2a22" stroke-width="9" stroke-linecap="round"/>' +
      '<g class="laby-heros" transform="translate(0,0)">' +
      /* un dessin imbriqué dans un dessin : il lui faut sa taille, sinon il
         occupe toute la surface */
      Art.sticker({ t: 'livia', ds: .7, dy: 186 }).replace('<svg ',
        '<svg x="' + (P * 0.14) + '" y="' + (P * 0.1) + '" width="' + (P * 0.72) +
        '" height="' + (P * 0.72) + '" ') + '</g>' +
      '<text x="' + ((arrivee % cols) * P + P / 2) + '" y="' + (Math.floor(arrivee / cols) * P + P * 0.68) +
      '" text-anchor="middle" font-size="' + (P * 0.5) + '">⭐</text>' +
      '</svg>';
    zone.appendChild(cadre);

    var svg = cadre.querySelector('svg');
    var trait = cadre.querySelector('.laby-trait');
    var heros = cadre.querySelector('.laby-heros');
    var chemin = [depart];

    function majTrait() {
      trait.setAttribute('points', chemin.map(function (c) {
        return ((c % cols) * P + P / 2) + ',' + (Math.floor(c / cols) * P + P / 2);
      }).join(' '));
      var d = chemin[chemin.length - 1];
      heros.setAttribute('transform', 'translate(' + ((d % cols) * P) +
        ',' + (Math.floor(d / cols) * P) + ')');
    }
    majTrait();

    function caseSous(e) {
      var r = svg.getBoundingClientRect();
      var x = Math.floor((e.clientX - r.left) / r.width * cols);
      var y = Math.floor((e.clientY - r.top) / r.height * rangs);
      if (x < 0 || y < 0 || x >= cols || y >= rangs) return -1;
      return y * cols + x;
    }
    function ouvert(a, b) {
      var c = cases[a];
      if (b === a - cols) return !c.n;
      if (b === a + cols) return !c.s;
      if (b === a - 1) return !c.o;
      if (b === a + 1) return !c.e;
      return false;
    }
    function avancer(c) {
      if (c < 0) return;
      var d = chemin[chemin.length - 1];
      if (c === d) return;
      if (chemin.length > 1 && c === chemin[chemin.length - 2]) { chemin.pop(); majTrait(); return; }
      if (!ouvert(d, c)) return;
      chemin.push(c);
      majTrait();
      if (c === arrivee) { fini = true; setTimeout(function () { api.reussi(); }, 400); }
    }

    var trace = false, fini = false;
    svg.addEventListener('pointerdown', function (e) {
      if (fini) return;
      trace = true; svg.setPointerCapture && svg.setPointerCapture(e.pointerId);
      avancer(caseSous(e));
    });
    svg.addEventListener('pointermove', function (e) {
      if (!trace || fini) return;
      e.preventDefault();
      avancer(caseSous(e));
    });
    svg.addEventListener('pointerup', function () { trace = false; });
    svg.addEventListener('pointercancel', function () { trace = false; });
  }

  /* ============================================================
     JEU 9 — LES POINTS À RELIER
     Un dessin caché dans des points numérotés. On ne peut toucher que le
     point suivant : l'ordre des nombres est la règle du jeu, et se tromper
     ne coûte rien — il ne se passe simplement rien.
     ============================================================ */
  /* Deux points trop proches se touchent du même doigt : aucune arête ne
     descend sous une douzaine d'unités sur les cent que compte la feuille. */
  var FIGURES = [
    { nom: 'tente', c: '#4f8a3d',
      p: [[50, 14], [88, 86], [66, 86], [50, 50], [34, 86], [12, 86]] },
    { nom: 'maison', c: '#e0453c',
      p: [[22, 92], [22, 52], [50, 26], [62, 37], [62, 18], [74, 18], [78, 52], [78, 92]] },
    { nom: 'bateau', c: '#4a7fc1',
      p: [[8, 66], [44, 66], [50, 8], [84, 52], [56, 52], [56, 66], [92, 66], [76, 92], [24, 92]] },
    { nom: 'chat', c: '#f2803d',
      p: [[22, 20], [36, 40], [64, 40], [78, 20], [84, 52], [74, 76], [50, 88], [24, 76], [18, 52]] },
    { nom: 'poisson', c: '#3fa3c4',
      p: [[14, 52], [38, 30], [66, 32], [76, 44], [94, 26], [94, 74], [76, 58], [62, 72], [34, 70]] },
    { nom: 'etoile', c: '#f7c518',
      p: [[50, 8], [61, 37], [92, 38], [67, 58], [76, 88], [50, 70], [24, 88], [33, 58], [8, 38], [39, 37]] },
    { nom: 'coeur', c: '#e0453c',
      p: [[50, 90], [14, 54], [10, 38], [18, 24], [34, 22], [50, 34], [66, 22], [82, 24], [90, 38], [86, 54]] },
    { nom: 'lune', c: '#8a79c4',
      p: [[56, 8], [34, 14], [18, 32], [14, 54], [24, 76], [46, 90], [62, 88], [40, 72], [32, 50], [38, 26]] },
    { nom: 'sapin', c: '#4f8a3d',
      p: [[50, 10], [72, 50], [60, 50], [80, 84], [57, 84], [57, 96], [43, 96], [43, 84], [20, 84], [40, 50], [28, 50]] }
  ];
  var lotPoints = null;

  /* Ranger un lot du plus simple au plus long, puis n'en garder que quatre
     bien étalés : prendre les quatre premiers donnerait quatre manches de
     même difficulté, et la partie n'irait nulle part. */
  function etaler(lot, n, manches) {
    return lot[Math.round(n * (lot.length - 1) / Math.max(1, manches - 1)) % lot.length];
  }

  function jeuPoints(zone, n, api) {
    if (n === 0 || !lotPoints) {
      lotPoints = melange(FIGURES).sort(function (a, b) { return a.p.length - b.p.length; });
    }
    var f = etaler(lotPoints, n, 4);
    var pts = f.p, N = pts.length;
    api.consigne(t('ptsConsigne', N));

    var cx = 0, cy = 0;
    pts.forEach(function (p) { cx += p[0]; cy += p[1]; });
    cx /= N; cy /= N;

    var svgTxt = '<svg viewBox="-17 -17 134 134" preserveAspectRatio="xMidYMid meet">' +
      '<polygon class="pts-forme" points="' +
      pts.map(function (p) { return p[0] + ',' + p[1]; }).join(' ') + '" fill="' + f.c + '"/>' +
      '<polyline class="pts-trait" points="" stroke="' + f.c + '"/>';
    pts.forEach(function (p, i) {
      /* le numéro se pose du côté extérieur du dessin, jamais dessus */
      var dx = p[0] - cx, dy = p[1] - cy;
      var d = Math.sqrt(dx * dx + dy * dy) || 1;
      svgTxt += '<text class="pts-num" x="' + (p[0] + dx / d * 9.5).toFixed(1) +
        '" y="' + (p[1] + dy / d * 9.5 + 2.4).toFixed(1) + '" text-anchor="middle">' + (i + 1) + '</text>' +
        '<circle class="pts-point" data-i="' + i + '" cx="' + p[0] + '" cy="' + p[1] + '" r="3"/>' +
        '<circle class="pts-cible" data-i="' + i + '" cx="' + p[0] + '" cy="' + p[1] + '" r="9"/>';
    });
    svgTxt += '</svg>';

    var cadre = el('div', 'pts', svgTxt);
    zone.appendChild(cadre);

    var svg = cadre.querySelector('svg');
    var trait = cadre.querySelector('.pts-trait');
    var forme = cadre.querySelector('.pts-forme');
    var ronds = [].slice.call(cadre.querySelectorAll('.pts-point'));
    var etape = 0, fini = false;

    function maj() {
      trait.setAttribute('points', pts.slice(0, etape).map(function (p) {
        return p[0] + ',' + p[1];
      }).join(' '));
      ronds.forEach(function (r, i) {
        r.classList.toggle('fait', i < etape);
        r.classList.toggle('suivant', i === etape);
      });
    }
    maj();

    svg.addEventListener('click', function (e) {
      if (fini || !e.target.getAttribute) return;
      var i = e.target.getAttribute('data-i');
      if (i === null) return;
      if (+i !== etape) return;              /* on ne perd rien : il ne se passe rien */
      etape++;
      dire(t('nombres')[etape] || String(etape));
      maj();
      if (etape === N) {
        fini = true;
        trait.setAttribute('points', trait.getAttribute('points') + ' ' + pts[0][0] + ',' + pts[0][1]);
        cadre.classList.add('devoile');
        forme.classList.add('on');
        setTimeout(function () { dire(t('ptsTrouve', t('formes')[f.nom])); }, 420);
        setTimeout(function () { api.reussi(); }, 1700);
      }
    });
  }

  /* ============================================================
     LES GRILLES — un damier de cases à remplir
     Le même damier sert à copier un modèle et à finir une symétrie ;
     il est dessiné en SVG, comme le reste, pour tenir dans n'importe
     quelle place sans jamais se déformer.
     ============================================================ */
  function lireGrille(g) {
    var cols = g[0].length, rangs = g.length, t = [], x, y;
    for (y = 0; y < rangs; y++) for (x = 0; x < cols; x++) t.push(g[y][x] === '#');
    return { cols: cols, rangs: rangs, cases: t };
  }

  function grilleSVG(cols, rangs, cases, couleur, o) {
    o = o || {};
    var U = 10, s = '', i;
    for (i = 0; i < cols * rangs; i++) {
      /* o.libre dit quelles cases se touchent ; sans lui, la grille se
         regarde seulement — c'est le cas du modèle */
      s += '<rect class="gc' + (o.libre && o.libre(i) ? ' libre' : '') + '" data-i="' + i +
        '" x="' + ((i % cols) * U) + '" y="' + (Math.floor(i / cols) * U) +
        '" width="' + U + '" height="' + U + '" rx="1.4" fill="' +
        (cases[i] ? couleur : '#fffdf6') + '" stroke="#cdbfb0" stroke-width=".5"/>';
    }
    if (o.miroir) {
      s += '<line class="gril-axe" x1="' + (o.miroir * U) + '" y1="-2" x2="' +
        (o.miroir * U) + '" y2="' + (rangs * U + 2) + '"/>';
    }
    s += '<rect x="0" y="0" width="' + (cols * U) + '" height="' + (rangs * U) +
      '" fill="none" stroke="#3a2a22" stroke-width="1.5" rx="1.6"/>';
    return '<svg viewBox="-2 -2 ' + (cols * U + 4) + ' ' + (rangs * U + 4) +
      '" preserveAspectRatio="xMidYMid meet">' + s + '</svg>';
  }

  /* ============================================================
     JEU 10 — LA GRILLE DE DESSINS
     Un modèle en haut, une grille vide en dessous : on recopie case par
     case. Toucher une case la remplit, la retoucher l'efface.
     ============================================================ */
  var MODELES = [
    { nom: 'fenetre', c: '#4a7fc1', g: ['####', '#..#', '#..#', '####'] },
    { nom: 'escalier', c: '#f2803d', g: ['#...', '##..', '###.', '####'] },
    { nom: 'petitcoeur', c: '#e0453c', g: ['.#.#', '####', '.###', '..#.'] },
    { nom: 'sapin', c: '#4f8a3d', g: ['..#..', '.###.', '#####', '..#..', '..#..'] },
    { nom: 'maison', c: '#e0453c', g: ['..#..', '.###.', '#####', '#.#.#', '#.#.#'] },
    { nom: 'poisson', c: '#3fa3c4', g: ['.....', '.####', '#####', '.####', '.....'] },
    { nom: 'etoile', c: '#f7c518', g: ['..#..', '#####', '.###.', '.#.#.', '#...#'] },
    { nom: 'chat', c: '#8a5a3b', g: ['#....#', '######', '#.##.#', '######', '.####.', '..##..'] }
  ];
  var lotGrille = null;

  function jeuGrille(zone, n, api) {
    if (n === 0 || !lotGrille) {
      lotGrille = melange(MODELES).sort(function (a, b) { return a.g.length - b.g.length; });
    }
    var m = etaler(lotGrille, n, 4);
    var g = lireGrille(m.g);
    api.consigne(t('grilConsigne'));

    var mien = g.cases.map(function () { return false; });
    var plateau = el('div', 'gril');
    var haut = el('div', 'gril-vue', '<div class="gril-titre">👀</div>' +
      grilleSVG(g.cols, g.rangs, g.cases, m.c));
    var bas = el('div', 'gril-vue jouable', '<div class="gril-titre">✋</div>' +
      grilleSVG(g.cols, g.rangs, mien, m.c, { libre: function () { return true; } }));
    plateau.appendChild(haut);
    plateau.appendChild(bas);
    zone.appendChild(plateau);

    var svg = bas.querySelector('svg'), fini = false;
    svg.addEventListener('click', function (e) {
      if (fini || !e.target.getAttribute) return;
      var brut = e.target.getAttribute('data-i');
      if (brut === null) return;          /* le cadre et le miroir ne sont pas des cases */
      var i = +brut;
      mien[i] = !mien[i];
      e.target.setAttribute('fill', mien[i] ? m.c : '#fffdf6');
      if (mien.every(function (v, k) { return v === g.cases[k]; })) {
        fini = true;
        setTimeout(function () { dire(t('grilTrouve', t('formes')[m.nom])); }, 200);
        setTimeout(function () { api.reussi(); }, 900);
      }
    });
  }

  /* ============================================================
     JEU 11 — LA SYMÉTRIE
     Une moitié de dessin, un miroir au milieu, et l'autre moitié à
     inventer. La règle ne s'explique pas : on la voit apparaître.
     ============================================================ */
  var SYMETRIES = [
    { nom: 'papillon', c: '#f2803d', g: ['##..', '###.', '.###', '.###', '###.', '##..'] },
    { nom: 'coeur', c: '#e0453c', g: ['.##.', '####', '####', '.###', '..##', '...#'] },
    { nom: 'sapin', c: '#4f8a3d', g: ['...#', '..##', '.###', '####', '...#', '...#'] },
    { nom: 'maison', c: '#4a7fc1', g: ['...#', '..##', '.###', '####', '#.##', '#.#.'] }
  ];
  var lotSym = null;

  function jeuSymetrie(zone, n, api) {
    if (n === 0 || !lotSym) lotSym = melange(SYMETRIES);
    var m = lotSym[n % lotSym.length];
    var demi = lireGrille(m.g);
    var moitie = demi.cols, cols = moitie * 2, rangs = demi.rangs;

    var cible = [], x, y;
    for (y = 0; y < rangs; y++) {
      for (x = 0; x < cols; x++) {
        cible.push(demi.cases[y * moitie + (x < moitie ? x : cols - 1 - x)]);
      }
    }
    /* au départ, seule la moitié gauche est dessinée */
    var etat = cible.map(function (v, i) { return (i % cols) < moitie ? v : false; });
    api.consigne(t('symConsigne'));

    var plateau = el('div', 'sym', grilleSVG(cols, rangs, etat, m.c, {
      miroir: moitie,
      libre: function (i) { return (i % cols) >= moitie; }
    }));
    zone.appendChild(plateau);

    var svg = plateau.querySelector('svg'), fini = false;
    svg.addEventListener('click', function (e) {
      if (fini || !e.target.getAttribute) return;
      var brut = e.target.getAttribute('data-i');
      if (brut === null) return;
      var i = +brut;
      if ((i % cols) < moitie) return;          /* la moitié dessinée ne bouge pas */
      etat[i] = !etat[i];
      e.target.setAttribute('fill', etat[i] ? m.c : '#fffdf6');
      if (etat.every(function (v, k) { return v === cible[k]; })) {
        fini = true;
        plateau.classList.add('devoile');
        setTimeout(function () { dire(t('symTrouve', t('formes')[m.nom])); }, 200);
        setTimeout(function () { api.reussi(); }, 1100);
      }
    });
  }

  var CATEGORIES = [
    { id: 'observer', nom: 'catObserver', emoji: '🔍' },
    { id: 'lettres', nom: 'catLettres', emoji: '🔤' },
    { id: 'nombres', nom: 'catNombres', emoji: '🔢' },
    { id: 'creer', nom: 'catCreer', emoji: '🎨' },
    { id: 'reflechir', nom: 'catReflechir', emoji: '🧩' }
  ];

  var JEUX = [
    {
      id: 'relier', nom: 'jRelier', emoji: '🔗', cat: 'observer',
      sous: 'jRelierSous',
      vignette: { t: 'peppa', ds: .66, dy: 184 },
      def: { manches: 4, manche: jeuRelier, felicitation: 'jRelierBravo' }
    },
    {
      id: 'compter', nom: 'jCompter', emoji: '🔢', cat: 'nombres',
      sous: 'jCompterSous',
      vignette: { t: 'livia', ds: .66, dy: 184 },
      def: { manches: 5, manche: jeuCompter, felicitation: 'jCompterBravo' }
    },
    {
      id: 'ecrire', nom: 'jEcrire', emoji: '✏️', cat: 'lettres',
      sous: 'jEcrireSous',
      vignette: { t: 'elsa', ds: .66, dy: 184 },
      def: {
        manches: function (v) { return v ? 1 : 5; },
        manche: jeuEcrire,
        choisir: choixPrenom,
        choixConsigne: 'choixPrenom',
        choixBouton: 'autrePrenom',
        felicitation: 'jEcrireBravo'
      }
    },
    {
      id: 'differences', nom: 'jDiff', emoji: '🔍', cat: 'observer',
      sous: 'jDiffSous',
      vignette: { t: 'bluey', ds: .62, dy: 184 },
      def: {
        manches: 6, manche: jeuDifferences, plein: true,
        felicitation: 'jDiffBravo'
      }
    },
    {
      id: 'alphabet', nom: 'jAlpha', emoji: '🔤', cat: 'lettres',
      sous: 'jAlphaSous',
      vignette: { t: 'juliette', ds: .62, dy: 184 },
      def: {
        manches: function (v) { return v ? 2 : 6; },
        manche: jeuAlphabet,
        choisir: choixLettre,
        choixConsigne: 'choixLettre',
        choixBouton: 'autreLettre',
        felicitation: 'jAlphaBravo'
      }
    },
    {
      id: 'coloriage', nom: 'jColo', emoji: '🎨', cat: 'creer',
      sous: 'jColoSous',
      vignette: { t: 'maman', ds: .58, dy: 182 },
      def: {
        manches: function (v) { return v ? 1 : 3; },
        manche: jeuColoriage, plein: true,
        choisir: choixDessin,
        choixConsigne: 'choixDessin',
        choixBouton: 'autreDessin',
        felicitation: 'jColoBravo'
      }
    },
    {
      id: 'puzzle', nom: 'jPuz', emoji: '🧩', cat: 'reflechir',
      sous: 'jPuzSous',
      vignette: { t: 'pablo', ds: .62, dy: 186 },
      def: {
        manches: function (v) { return v ? 1 : 4; },
        manche: jeuPuzzle, plein: true,
        choisir: choixDessin,
        choixConsigne: 'choixDessin',
        choixBouton: 'autreDessin',
        felicitation: 'jPuzBravo'
      }
    },
    {
      id: 'labyrinthe', nom: 'jLaby', emoji: '🌀', cat: 'reflechir',
      sous: 'jLabySous',
      vignette: { t: 'papa', ds: .42, dy: 176 },
      def: { manches: 4, manche: jeuLabyrinthe, plein: true, felicitation: 'jLabyBravo' }
    },
    {
      id: 'points', nom: 'jPts', emoji: '🔟', cat: 'nombres',
      sous: 'jPtsSous',
      vignette: { t: 'anna', ds: .62, dy: 184 },
      def: { manches: 4, manche: jeuPoints, plein: true, felicitation: 'jPtsBravo' }
    },
    {
      id: 'grille', nom: 'jGril', emoji: '🧱', cat: 'creer',
      sous: 'jGrilSous',
      vignette: { t: 'roxane', ds: .62, dy: 184 },
      def: { manches: 4, manche: jeuGrille, plein: true, felicitation: 'jGrilBravo' }
    },
    {
      id: 'symetrie', nom: 'jSym', emoji: '🦋', cat: 'reflechir',
      sous: 'jSymSous',
      vignette: { t: 'isadora', ds: .62, dy: 184 },
      def: { manches: 4, manche: jeuSymetrie, plein: true, felicitation: 'jSymBravo' }
    }
  ];

  global.Jeux = {
    liste: JEUX,
    categories: CATEGORIES,
    /* le nom d'un jeu ou d'une famille est une clé : c'est ici qu'il devient
       un mot, dans la langue courante */
    mot: t,
    langue: function (l) { if (T[l]) LANGUE = l; return LANGUE; },
    dictionnaire: function () { return T; },
    timbre: function (v) { timbre = v || null; },
    trouver: function (id) {
      for (var i = 0; i < JEUX.length; i++) if (JEUX[i].id === id) return JEUX[i];
      return null;
    },
    lancer: function (stage, jeu, onQuit) { jouer(stage, jeu.def, onQuit); },
    voix: function (v) { if (v !== undefined) { voixActive = v; if (!v) taire(); } return voixActive; },
    taire: taire
  };
})(window);
