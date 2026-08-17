/* ============================================================
   app.js — navigation, Cover Flow infini et lecteur de BD
   ============================================================ */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var STORE = 'livia.v1.';

  /* ---------------- petites aides ---------------- */
  function store(k, v) {
    try {
      if (v === undefined) return localStorage.getItem(STORE + k);
      localStorage.setItem(STORE + k, v);
    } catch (e) { /* mode privé : on ignore */ }
    return null;
  }
  function findUniverse(id) {
    for (var i = 0; i < UNIVERSES.length; i++) if (UNIVERSES[i].id === id) return UNIVERSES[i];
    return null;
  }
  function findStory(u, id) {
    for (var i = 0; i < u.stories.length; i++) if (u.stories[i].id === id) return u.stories[i];
    return null;
  }
  function isRead(u, s) { return store('read.' + u.id + '.' + s.id) === '1'; }

  /* ---------------- la langue ----------------
     L'espagnol se met en place histoire par histoire : une histoire n'est
     proposée dans une langue que si elle y est entièrement traduite. Mieux
     vaut quatre histoires vraiment en espagnol qu'un mélange des deux. */
  var LANGUES = [
    { id: 'fr', nom: 'Français', drapeau: '🇫🇷', voix: 'fr' },
    { id: 'es', nom: 'Español', drapeau: '🇪🇸', voix: 'es' },
    { id: 'en', nom: 'English', drapeau: '🇬🇧', voix: 'en' }
  ];
  var LANGUE = /^(es|en)$/.test(store('langue') || '') ? store('langue') : 'fr';

  var MOTS = {
    fr: {
      choisis: 'Choisis un univers.', filtrer: 'Filtrer par thème',
      lire: "Lire l'histoire", soir: 'Ce soir, on lit…', hasard: 'Une histoire au hasard',
      fin: 'Fin !', derniere: "C'était la dernière", eteint: 'On éteint. Bonne nuit, Livia.',
      bonneNuit: 'Bonne nuit… et à demain pour une nouvelle histoire.',
      autre: 'Une autre', relire: 'Relire', sommaire: 'Le sommaire',
      encore: function (n) { return 'Encore <b>' + n + '</b> histoire' + (n > 1 ? 's' : '') + ' ce soir.'; },
      planches: 'planches', histoires: 'histoires', tous: 'Tous', langue: 'Langue',
      rejouer: 'Autres choix', jouerSeul: 'Pour jouer tout seul, dès 3 ans',
      navHist: 'Histoires', navJeux: 'Jeux', titreJeux: 'Les jeux de Livia',
      titreUne: 'Les histoires de <b>Livia</b>', signature: "Créé à la maison, pour l'heure du coucher",
      voixTitre: 'Voix de lecture'
    },
    es: {
      choisis: 'Elige un mundo.', filtrer: 'Filtrar por tema',
      lire: 'Leer el cuento', soir: 'Esta noche leemos…', hasard: 'Un cuento al azar',
      fin: '¡Fin!', derniere: 'Era el último', eteint: 'Apagamos. Buenas noches, Livia.',
      bonneNuit: 'Buenas noches… y hasta mañana para otro cuento.',
      autre: 'Otro', relire: 'Releer', sommaire: 'El índice',
      encore: function (n) { return 'Todavía <b>' + n + '</b> cuento' + (n > 1 ? 's' : '') + ' esta noche.'; },
      planches: 'láminas', histoires: 'cuentos', tous: 'Todos', langue: 'Idioma',
      rejouer: 'Otras opciones', jouerSeul: 'Para jugar solita, desde los 3 años',
      navHist: 'Cuentos', navJeux: 'Juegos', titreJeux: 'Los juegos de Livia',
      titreUne: 'Los cuentos de <b>Livia</b>', signature: 'Hecho en casa, para la hora de dormir',
      voixTitre: 'Voz de lectura'
    },
    en: {
      choisis: 'Pick a world.', filtrer: 'Filter by theme',
      lire: 'Read the story', soir: 'Tonight we read…', hasard: 'A story at random',
      fin: 'The end!', derniere: 'That was the last one', eteint: 'Lights out. Good night, Livia.',
      bonneNuit: 'Good night… and see you tomorrow for another story.',
      autre: 'Another', relire: 'Read again', sommaire: 'Contents',
      encore: function (n) { return '<b>' + n + '</b> more story' + (n > 1 ? 'ies' : '') + ' tonight.'; },
      planches: 'panels', histoires: 'stories', tous: 'All', langue: 'Language',
      rejouer: 'Other choices', jouerSeul: 'To play on your own, from age 3',
      navHist: 'Stories', navJeux: 'Games', titreJeux: "Livia's games",
      titreUne: "<b>Livia's</b> bedtime stories", signature: 'Made at home, for bedtime',
      voixTitre: 'Reading voice'
    }
  };
  function mot(k) { return (MOTS[LANGUE] && MOTS[LANGUE][k]) || MOTS.fr[k]; }

  /* ---------------- les histoires à choix ----------------
     Une histoire ordinaire est une suite de pages. Une histoire à choix est
     un petit réseau de blocs : la dernière page d'un bloc propose deux
     boutons, chacun menant à un autre bloc. Tous les chemins ont la même
     longueur — c'est ce qui permet de garder les points de progression et le
     numéro de page. L'outil de contrôle le vérifie. */
  function branchu(st) { return !!st.blocs; }

  /* toutes les pages écrites, tous chemins confondus : pour compter et pour
     savoir si la traduction est complète */
  function toutesLesPages(st) {
    if (!branchu(st)) return st.pages;
    var out = [], k;
    for (k in st.blocs) if (st.blocs.hasOwnProperty(k)) out = out.concat(st.blocs[k].pages);
    return out;
  }

  /* le nombre de planches d'un chemin : on en suit un, ils font tous la même
     longueur */
  function nbPages(st) {
    if (!branchu(st)) return st.pages.length;
    var n = 0, bloc = st.blocs[st.debut], garde = 0;
    while (bloc && garde++ < 40) {
      n += bloc.pages.length;
      var fin = bloc.pages[bloc.pages.length - 1];
      bloc = fin && fin.choix ? st.blocs[fin.choix.options[0].vers] : null;
    }
    return n;
  }

  /* une histoire n'existe dans une langue que si tout y est traduit */
  function dispo(st) {
    if (LANGUE === 'fr') return true;
    if (!st['title_' + LANGUE]) return false;
    return toutesLesPages(st).every(function (p) { return !!p[LANGUE]; });
  }
  function histoiresDe(u) { return u.stories.filter(dispo); }
  function titre(st) { return st['title_' + LANGUE] || st.title; }
  function soustitre(st) { return st['subtitle_' + LANGUE] || st.subtitle; }
  function texte(p) { return p[LANGUE] || p.text; }
  /* étiquettes, thèmes et noms d'univers passent par le lexique ; ce qui n'y
     est pas ressort tel quel — un nom propre se traduit rarement */
  function tr(x) {
    var L = (typeof LEXIQUE !== 'undefined') && LEXIQUE[LANGUE];
    return (L && L[x]) || x;
  }

  /* ---------------- le compte du soir ----------------
     Un parent décide combien d'histoires on lit ce soir ; le compte
     s'efface tout seul le lendemain. On décompte les histoires TERMINÉES,
     pas les ouvertures : rouvrir la même n'en consomme pas une deuxième.
     La journée démarre à 4 h du matin, pour qu'une histoire finie à
     minuit dix appartienne encore à la soirée de la veille. */
  var Soir = (function () {
    function jour() {
      var d = new Date(Date.now() - 4 * 3600 * 1000);
      return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    }
    function lire() {
      try {
        var o = JSON.parse(store('soiree') || 'null');
        return (o && o.jour === jour()) ? o : null;
      } catch (e) { return null; }
    }
    function ecrire(o) { store('soiree', JSON.stringify(o)); }
    function reste(o) { return o ? Math.max(0, o.total - o.faites.length) : null; }
    return {
      etat: lire,
      reste: function () { return reste(lire()); },
      definir: function (n) {
        if (!n) { store('soiree', ''); return null; }
        var o = { jour: jour(), total: n, faites: [] };
        ecrire(o);
        return o;
      },
      compter: function (u, s) {
        var o = lire();
        if (!o) return null;
        var cle = u.id + '/' + s.id;
        if (o.faites.indexOf(cle) < 0) { o.faites.push(cle); ecrire(o); }
        return reste(o);
      },
      /* « allez, encore une » : on ajuste le total en cours de soirée sans
         perdre ce qui a déjà été lu */
      ajuster: function (d) {
        var o = lire();
        if (!o) return null;
        o.total = Math.max(o.faites.length, Math.min(9, o.total + d));
        ecrire(o);
        return reste(o);
      }
    };
  })();

  /* chaque histoire porte un numéro, comme les numéros d'un magazine */
  var NUMERO = {};
  (function () {
    var n = 0;
    UNIVERSES.forEach(function (u) {
      u.stories.forEach(function (s) { NUMERO[u.id + '/' + s.id] = ++n; });
    });
  })();
  function numero(u, s) { return 'N° ' + NUMERO[u.id + '/' + s.id]; }
  function plageNumeros(u) {
    var ns = u.stories.map(function (s) { return NUMERO[u.id + '/' + s.id]; });
    return ns.length > 1 ? 'N° ' + Math.min.apply(null, ns) + ' à ' + Math.max.apply(null, ns)
      : 'N° ' + ns[0];
  }

  function setTheme(u) {
    var r = document.documentElement.style;
    r.setProperty('--tc1', u ? u.c1 : '#ff6fa5');
    r.setProperty('--tc2', u ? u.c2 : '#ffd166');
    var m = document.querySelector('meta[name=theme-color]');
    if (m) m.setAttribute('content', '#d8342b');
  }

  /* ============================================================
     COVER FLOW — défilement 3D infini, style iPod
     ============================================================ */
  function CoverFlow(el, opts) {
    this.el = el;
    this.onChange = opts.onChange || function () { };
    this.onOpen = opts.onOpen || function () { };
    this.items = [];
    this.nodes = [];
    this.pos = 0;
    this.dragging = false;
    this.bind();
  }

  CoverFlow.prototype.setItems = function (items, start) {
    var self = this;
    this.items = items;
    this.el.innerHTML = '';
    this.nodes = items.map(function (it, i) {
      var n = document.createElement('div');
      n.className = 'cf-item';
      n.setAttribute('role', 'option');
      n.setAttribute('aria-label', it.label);
      var svg = Art.scene(it.scene, { slice: true, noBubbles: true });
      n.innerHTML =
        '<div class="cf-art">' +
        '<div class="cf-band"><span>' + it.num + '</span><span>' + it.tag + '</span></div>' +
        svg +
        '<div class="cf-name">' + it.label + '</div>' +
        '<div class="cf-shade"></div></div>' +
        (it.badge ? '<div class="cf-badge">' + it.badge + '</div>' : '') +
        '<div class="cf-reflect">' + svg + '</div>';
      n.addEventListener('click', function () {
        if (self.moved) return;
        var d = self.delta(i);
        if (Math.abs(d) < .5) self.onOpen(i); else self.go(self.pos + d);
      });
      self.el.appendChild(n);
      return n;
    });
    this.pos = start || 0;
    this.layout();
    this.onChange(this.current());
  };

  CoverFlow.prototype.n = function () { return this.items.length; };

  /* écart circulaire le plus court entre l'item i et la position courante */
  CoverFlow.prototype.delta = function (i) {
    var n = this.n();
    if (!n) return 0;
    var d = (i - this.pos) % n;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  CoverFlow.prototype.current = function () {
    var n = this.n();
    if (!n) return -1;
    return ((Math.round(this.pos) % n) + n) % n;
  };

  CoverFlow.prototype.layout = function () {
    var iw = this.nodes.length ? this.nodes[0].offsetWidth : 200;
    if (!iw) iw = 200;
    for (var i = 0; i < this.nodes.length; i++) {
      var d = this.delta(i);
      var a = Math.abs(d);
      var node = this.nodes[i];
      if (a > 3.4) { node.style.visibility = 'hidden'; continue; }
      node.style.visibility = 'visible';
      var sg = d < 0 ? -1 : 1;
      var k = Math.min(a, 1);
      var x = sg * (k * iw * 0.58 + Math.max(0, a - 1) * iw * 0.30);
      var z = 40 - a * 95;
      var ry = -sg * 60 * k;
      var sc = 1.06 - 0.15 * k;
      node.style.transform = 'translate3d(' + x.toFixed(1) + 'px,0,' + z.toFixed(1) + 'px) ' +
        'rotateY(' + ry.toFixed(1) + 'deg) scale(' + sc.toFixed(3) + ')';
      node.style.zIndex = String(1000 - Math.round(a * 100));
      node.style.opacity = a > 2.6 ? String(Math.max(0, (3.4 - a) / .8)) : '1';
      var sh = node.querySelector('.cf-shade');
      if (sh) sh.style.opacity = String(Math.min(.55, k * .42));
      node.classList.toggle('is-current', a < .5);
    }
  };

  CoverFlow.prototype.go = function (p, silent) {
    var n = this.n();
    if (!n) return;
    this.pos = p;
    this.layout();
    var self = this;
    // on renormalise : les écarts sont circulaires, l'affichage ne bouge pas
    setTimeout(function () { self.pos = ((self.pos % n) + n) % n; }, 450);
    if (!silent) this.onChange(this.current());
  };

  CoverFlow.prototype.step = function (dir) { this.go(Math.round(this.pos) + dir); };

  CoverFlow.prototype.setBadge = function (i, txt) {
    var b = this.nodes[i] && this.nodes[i].querySelector('.cf-badge');
    if (b) b.textContent = txt;
  };

  CoverFlow.prototype.bind = function () {
    var self = this, startX = 0, startPos = 0, lastX = 0, lastT = 0, vel = 0, id = null;

    function down(e) {
      if (!self.n()) return;
      id = e.pointerId;
      self.dragging = true; self.moved = false;
      startX = lastX = e.clientX; startPos = self.pos; vel = 0; lastT = e.timeStamp;
      self.el.classList.add('is-dragging');
      try { self.el.setPointerCapture(id); } catch (err) { }
    }
    function move(e) {
      if (!self.dragging || e.pointerId !== id) return;
      var iw = self.nodes[0] ? self.nodes[0].offsetWidth : 200;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 6) self.moved = true;
      var dt = Math.max(1, e.timeStamp - lastT);
      vel = (e.clientX - lastX) / dt;
      lastX = e.clientX; lastT = e.timeStamp;
      self.pos = startPos - dx / (iw * 0.62);
      self.layout();
    }
    function up(e) {
      if (!self.dragging) return;
      self.dragging = false;
      self.el.classList.remove('is-dragging');
      try { self.el.releasePointerCapture(id); } catch (err) { }
      var fling = Math.max(-2, Math.min(2, Math.round(-vel * 2.4)));
      self.go(Math.round(self.pos + fling));
      setTimeout(function () { self.moved = false; }, 40);
    }

    this.el.addEventListener('pointerdown', down);
    this.el.addEventListener('pointermove', move);
    this.el.addEventListener('pointerup', up);
    this.el.addEventListener('pointercancel', up);

    var wheelLock = 0;
    this.el.addEventListener('wheel', function (e) {
      var d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(d) < 4) return;
      e.preventDefault();
      var now = Date.now();
      if (now - wheelLock < 220) return;
      wheelLock = now;
      self.step(d > 0 ? 1 : -1);
    }, { passive: false });

    this.el.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); self.step(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); self.step(-1); }
      else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); self.onOpen(self.current()); }
    });

    window.addEventListener('resize', function () { self.layout(); });
  };

  /* ============================================================
     VUES
     ============================================================ */
  var els = {
    tabs: $('#tabs'), home: $('#viewHome'), uni: $('#viewUniverse'),
    logo: $('#btnLogo'),
    mainnav: $('#mainnav'),
    cover: $('#viewCover'), coverArt: $('#coverArt'), coverMeta: $('#coverMeta'),
    coverNav: $('#coverNav'), coverSticker: $('#coverSticker'),
    topbar: document.querySelector('.topbar'),
    coverRandom: $('#btnCoverRandom'),
    games: $('#viewGames'), gamesGrid: $('#gamesGrid'), gameStage: $('#gameStage'),
    gamesSub: $('#gamesSub'), jeuxNav: $('#jeuxNav'),
    grid: $('#uniGrid'), random: $('#btnRandom'),
    soirBadge: $('#soirBadge'), soirCover: $('#soirCover'),
    hello: $('#homeHello'), themeChips: $('#themeChips'),
    filtres: $('#filtres'), btnFiltres: $('#btnFiltres'),
    reglages: $('#reglages'), btnReglages: $('#btnReglages'),
    langues: $('#langues'), voix: $('#voix'),
    rglLangue: $('#rglLangue'), rglVoix: $('#rglVoix'),
    uniTitle: $('#uniTitle'), uniTagline: $('#uniTagline'),
    cf: $('#cf'), cfTitle: $('#cfTitle'), cfSub: $('#cfSubtitle'),
    cfTags: $('#cfTags'), cfDots: $('#cfDots'), read: $('#btnRead'),
    reader: $('#reader'), pages: $('#pages'), rTitle: $('#rTitle'),
    rDots: $('#rDots'), rPrev: $('#rPrev'), rNext: $('#rNext'),
    rClose: $('#rClose'), rSpeak: $('#rSpeak')
  };

  var flow = new CoverFlow(els.cf, {
    onChange: function (i) { renderMeta(i); },
    onOpen: function (i) {
      var s = state.universe.stories[i];
      location.hash = '#/u/' + state.universe.id + '/' + s.id;
    }
  });

  var state = { universe: null, story: null, page: 0, speak: false,
    chemin: [], total: 0, end: null, obs: null };

  /* ---------------- la marque ---------------- */
  els.logo.onclick = function () { location.hash = '#/'; };

  /* ---------------- l'affichage du compte du soir ---------------- */
  var CHOIX_SOIR = [1, 2, 3, 4, 5, 6];

  function majSoir() {
    var r = Soir.reste();
    els.soirBadge.hidden = (r === null);
    if (r !== null) {
      els.soirBadge.innerHTML = '🌙 <b>' + r + '</b>';
      els.soirBadge.setAttribute('aria-label',
        r > 0 ? (r + ' histoire' + (r > 1 ? 's' : '') + ' restante' + (r > 1 ? 's' : '') + ' ce soir')
          : 'plus d\'histoire ce soir');
      els.soirBadge.classList.toggle('fini', r === 0);
    }
    renderSoirCover();
  }

  function renderSoirCover() {
    if (!els.soirCover) return;
    var o = Soir.etat();
    if (!o) {
      els.soirCover.innerHTML = '<span class="soir-titre">' + mot('soir') + '</span>' +
        '<span class="soir-choix">' + CHOIX_SOIR.map(function (n) {
          return '<button data-soir="' + n + '">' + n + '</button>';
        }).join('') + '</span>';
    } else {
      var r = Math.max(0, o.total - o.faites.length);
      els.soirCover.innerHTML =
        '<span class="soir-regle">' +
        '<button class="soir-pm" data-ajuste="-1" aria-label="une histoire de moins"' +
        (o.total <= o.faites.length ? ' disabled' : '') + '>−</button>' +
        '<span class="soir-titre">' +
        (r > 0
          ? mot('encore')(r).replace(/[.]$/, '')
          : '<b>Terminé</b> pour ce soir') +
        '</span>' +
        '<button class="soir-pm" data-ajuste="1" aria-label="une histoire de plus">+</button>' +
        '</span><button class="soir-changer" data-soir="0">remettre à zéro</button>';
    }
    els.soirCover.onclick = function (e) {
      var b = e.target;
      if (!b.getAttribute) return;
      var d = b.getAttribute('data-ajuste');
      if (d !== null) { Soir.ajuster(parseInt(d, 10)); majSoir(); return; }
      var n = b.getAttribute('data-soir');
      if (n === null) return;
      Soir.definir(parseInt(n, 10));
      majSoir();
    };
  }

  els.soirBadge.onclick = function () { location.hash = '#/'; };

  /* Les thèmes servent à l'adulte qui cherche « une histoire sur le partage ».
     Repliés par défaut : l'enfant voit une page nette, sans texte à déchiffrer. */
  function ouvrirFiltres(ouvert) {
    els.filtres.classList.toggle('ouvert', ouvert);
    els.btnFiltres.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
  }
  els.btnFiltres.onclick = function () {
    ouvrirFiltres(!els.filtres.classList.contains('ouvert'));
  };

  /* Le choix de la langue est rangé avec les filtres : c'est un réglage de
     parent, pas un bouton que l'enfant doit rencontrer. */
  /* les quelques mots figés dans la page suivent eux aussi la langue */
  function majMots() {
    var m = els.read.querySelector('.cta-mot');
    if (m) m.textContent = mot('lire');
    var f = els.btnFiltres.querySelector('span');
    if (f) f.textContent = mot('filtrer');
    if (els.coverRandom) els.coverRandom.textContent = '🎲 ' + mot('hasard');
    /* les libellés écrits dans la page : les deux rubriques, les deux titres
       et la signature du bas */
    [].forEach.call(document.querySelectorAll('[data-nav="histoires"]'), function (b) {
      b.textContent = '📖 ' + mot('navHist');
    });
    [].forEach.call(document.querySelectorAll('[data-nav="jeux"]'), function (b) {
      b.textContent = '🎮 ' + mot('navJeux');
    });
    var t = $('#viewGames h2');
    if (t) t.textContent = '🎮 ' + mot('titreJeux');
    var u = $('.cover-head h1');
    if (u) u.innerHTML = mot('titreUne');
    var n = $('.foot-note');
    if (n) n.textContent = mot('signature');
    if (els.rglLangue) els.rglLangue.textContent = mot('langue');
    if (els.rglVoix) els.rglVoix.textContent = mot('voixTitre');
    majDrapeau();
  }

  /* Le panneau des réglages : la langue et la voix. C'est un réglage d'adulte,
     donc il vit derrière un petit drapeau dans le bandeau — visible de partout,
     mais pas sur le chemin de l'enfant. */
  function ouvrirReglages(ouvert) {
    if (!els.reglages) return;
    if (ouvert === undefined) ouvert = els.reglages.hidden;
    els.reglages.hidden = !ouvert;
    els.btnReglages.classList.toggle('is-active', ouvert);
    if (ouvert) { renderLangues(); renderVoix(); }
  }

  function majDrapeau() {
    if (!els.btnReglages) return;
    for (var i = 0; i < LANGUES.length; i++) {
      if (LANGUES[i].id === LANGUE) els.btnReglages.textContent = LANGUES[i].drapeau;
    }
  }

  /* la liste des voix que l'appareil propose dans la langue choisie */
  function renderVoix() {
    var z = els.voix;
    if (!z) return;
    z.innerHTML = '';
    var libres = voixDisponibles();
    if (!libres.length) {
      z.innerHTML = '<span class="voix-vide">—</span>';
      return;
    }
    var choisie = laVoix && laVoix.name;
    libres.slice(0, 8).forEach(function (v, i) {
      var b = document.createElement('button');
      b.className = 'chip' + (v.name === choisie ? ' is-active' : '');
      /* le nom brut est parfois interminable : on garde le début */
      b.textContent = (i === 0 ? '★ ' : '') + (v.localService ? '' : '☁ ') +
        v.name.replace(/\s*\(.*\)$/, '').slice(0, 20);
      b.title = v.name + ' — ' + v.lang +
        (v.localService ? '' : ' — voix distante : elle a besoin du réseau');
      b.onclick = function () {
        store('voix.' + LANGUE, v.name);
        poserVoix();
        renderVoix();
        stopSpeak();
        speak(mot('lire'));
      };
      z.appendChild(b);
    });
  }

  function renderLangues() {
    var z = els.langues;
    if (!z) return;
    z.innerHTML = '';
    LANGUES.forEach(function (l) {
      var n = 0;
      UNIVERSES.forEach(function (u) {
        u.stories.forEach(function (st) {
          if (l.id === 'fr' || (st['title_' + l.id] &&
            toutesLesPages(st).every(function (p) { return !!p[l.id]; }))) n++;
        });
      });
      var b = document.createElement('button');
      b.className = 'chip' + (LANGUE === l.id ? ' is-active' : '');
      b.innerHTML = l.drapeau + ' ' + l.nom + ' <i>' + n + '</i>';
      b.disabled = !n;
      b.onclick = function () {
        if (LANGUE === l.id) return;
        LANGUE = l.id;
        store('langue', l.id);
        laVoix = null; voixCherchee = false;
        document.documentElement.lang = l.id;
        Jeux.langue(l.id);
        poserVoix();
        majMots();
        majDrapeau();
        renderTabs(null);
        renderHome();
        renderLangues();
        renderVoix();
      };
      z.appendChild(b);
    });
  }
  document.documentElement.lang = LANGUE;
  Jeux.langue(LANGUE);
  poserVoix();
  majMots();

  /* ---------------- le menu principal ---------------- */
  function cablerNav(zone, actif) {
    var b = zone.children;
    for (var i = 0; i < b.length; i++) {
      var nav = b[i].getAttribute('data-nav');
      b[i].className = nav === actif ? 'is-active' : '';
      b[i].onclick = (function (n) {
        return function () { location.hash = n === 'jeux' ? '#/jeux' : '#/histoires'; };
      })(nav);
    }
  }
  function renderNav(actif) { cablerNav(els.mainnav, actif); }
  cablerNav(els.coverNav, null);

  /* ---------------- onglets ----------------
     Hors d'un thème, ils ouvrent l'univers. Dans un thème, ils le filtrent :
     c'est le même rang de boutons qui sert aux deux axes. */
  function renderTabs(activeId, theme, dispo) {
    els.tabs.innerHTML = '';
    var lien = function (uid) {
      if (!theme) return uid ? '#/u/' + uid : '#/histoires';
      return '#/theme/' + theme.id + (uid ? '/' + uid : '');
    };
    /* On choisit un univers en reconnaissant un visage, pas en lisant son
       nom : à quatre ans, c'est la seule navigation qui marche. */
    var all = document.createElement('button');
    all.className = 'tab tab-img' + (activeId ? '' : ' is-active');
    all.innerHTML = '<span class="tab-rond tab-tous">★</span><span class="tab-mot">' + mot('tous') + '</span>';
    all.setAttribute('aria-label', 'Tous les univers');
    all.onclick = function () { location.hash = lien(null); };
    els.tabs.appendChild(all);

    UNIVERSES.forEach(function (u) {
      if (dispo && dispo.indexOf(u.id) < 0) return;
      if (!histoiresDe(u).length) return;
      var b = document.createElement('button');
      b.className = 'tab tab-img' + (activeId === u.id ? ' is-active' : '');
      b.innerHTML = '<span class="tab-rond">' + Art.sticker(u.vignette) + '</span>' +
        '<span class="tab-mot">' + tr(u.name) + '</span>';
      b.setAttribute('aria-label', tr(u.name));
      b.style.setProperty('--tab-c', u.c1);
      b.onclick = function () { location.hash = lien(u.id); };
      els.tabs.appendChild(b);
    });
  }

  /* ---------------- les thèmes ---------------- */
  function themeParId(id) {
    for (var i = 0; i < THEMES.length; i++) if (THEMES[i].id === id) return THEMES[i];
    return null;
  }
  function histoiresDuTheme(theme, uid) {
    var out = [];
    UNIVERSES.forEach(function (u) {
      if (uid && u.id !== uid) return;
      histoiresDe(u).forEach(function (s) {
        if (s.themes && s.themes.indexOf(theme.nom) >= 0) out.push({ u: u, s: s });
      });
    });
    return out;
  }
  function renderChips(actif) {
    els.themeChips.innerHTML = '';
    THEMES.forEach(function (t) {
      var n = histoiresDuTheme(t).length;
      if (!n) return;
      var b = document.createElement('button');
      b.className = 'chip' + (actif === t.id ? ' is-active' : '');
      b.innerHTML = t.emoji + ' ' + t.nom + ' <i>' + n + '</i>';
      b.onclick = function () {
        location.hash = actif === t.id ? '#/histoires' : '#/theme/' + t.id;
      };
      els.themeChips.appendChild(b);
    });
  }

  function carteHistoire(u, s) {
    var card = document.createElement('button');
    card.className = 'uni-card';
    card.innerHTML =
      '<div class="band"><h3>' + u.emoji + ' ' + titre(s) + '</h3>' +
      '<span class="num">' + numero(u, s) + '</span></div>' +
      '<div class="thumb">' + Art.scene(s.cover, { slice: true, noBubbles: true }) + '</div>' +
      '<div class="cap"><p>' + soustitre(s) + '</p>' +
      '<span class="pill">' + nbPages(s) + ' ' + mot('planches') + '</span></div>';
    card.onclick = function () { location.hash = '#/u/' + u.id + '/' + s.id; };
    return card;
  }

  function renderTheme(theme, uid) {
    var tout = histoiresDuTheme(theme);
    var dispo = [];
    tout.forEach(function (h) { if (dispo.indexOf(h.u.id) < 0) dispo.push(h.u.id); });
    renderTabs(uid, theme, dispo);
    renderChips(theme.id);
    ouvrirFiltres(true);
    var liste = uid ? tout.filter(function (h) { return h.u.id === uid; }) : tout;
    els.hello.innerHTML = theme.emoji + ' <b>' + theme.nom + '</b> — ' + liste.length +
      ' histoire' + (liste.length > 1 ? 's' : '') +
      ' <button class="lien-effacer" id="btnEffacer">tout afficher</button>';
    els.grid.innerHTML = '';
    liste.forEach(function (h) { els.grid.appendChild(carteHistoire(h.u, h.s)); });
    var e = $('#btnEffacer');
    if (e) e.onclick = function () { location.hash = '#/histoires'; };
  }

  /* ---------------- les jeux ---------------- */
  /* le rang de jeux : on passe de l'un à l'autre sans revenir en arrière */
  function renderJeuxNav(actif) {
    els.jeuxNav.hidden = !actif;
    if (!actif) return;
    els.jeuxNav.innerHTML = '';
    var tous = document.createElement('button');
    tous.className = 'chip';
    tous.textContent = '↩ ' + Jeux.mot('lesJeux');
    tous.onclick = function () { location.hash = '#/jeux'; };
    els.jeuxNav.appendChild(tous);
    Jeux.liste.forEach(function (j) {
      var b = document.createElement('button');
      b.className = 'chip' + (j.id === actif ? ' is-active' : '');
      b.textContent = j.emoji + ' ' + Jeux.mot(j.nom);
      b.onclick = function () { location.hash = '#/jeux/' + j.id; };
      els.jeuxNav.appendChild(b);
    });
  }

  function renderGames() {
    els.gamesGrid.innerHTML = '';
    els.gamesGrid.hidden = false;
    els.gameStage.hidden = true;
    els.gameStage.innerHTML = '';
    els.gamesSub.textContent = mot('jouerSeul');
    renderJeuxNav(null);

    /* rangés par famille : une enfant trouve plus vite « les lettres » qu'un
       jeu précis dans une liste de huit */
    Jeux.categories.forEach(function (cat) {
      var jeux = Jeux.liste.filter(function (j) { return j.cat === cat.id; });
      if (!jeux.length) return;
      var titre = document.createElement('h3');
      titre.className = 'jeu-famille';
      titre.innerHTML = '<span>' + cat.emoji + '</span> ' + Jeux.mot(cat.nom);
      els.gamesGrid.appendChild(titre);
      jeux.forEach(function (jeu) { els.gamesGrid.appendChild(carteJeu(jeu)); });
    });
  }

  function carteJeu(jeu) {
    var c = document.createElement('button');
    c.className = 'jeu-carte';
    c.innerHTML =
      '<div class="jeu-vignette">' + Art.sticker(jeu.vignette) + '</div>' +
      '<div class="jeu-texte"><h3>' + jeu.emoji + ' ' + Jeux.mot(jeu.nom) + '</h3>' +
      '<p>' + Jeux.mot(jeu.sous) + '</p></div>';
    c.onclick = function () { location.hash = '#/jeux/' + jeu.id; };
    return c;
  }

  function openGame(jeu) {
    els.gamesGrid.hidden = true;
    els.gameStage.hidden = false;
    els.gamesSub.textContent = Jeux.mot(jeu.sous);
    renderJeuxNav(jeu.id);
    Jeux.lancer(els.gameStage, jeu, function () { location.hash = '#/jeux'; });
  }

  /* ---------------- la une ---------------- */
  var MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

  var coverForme = null;

  /* l'illustration est recomposée si la forme de l'écran change */
  function dessinerUne() {
    var r = els.coverArt.getBoundingClientRect();
    var forme = (r.width / Math.max(1, r.height)) < 1.15 ? 'haut' : 'large';
    if (forme === coverForme) return;
    coverForme = forme;
    var pastille = els.coverSticker;
    els.coverArt.innerHTML = Art.scene(COUVERTURE[forme], { slice: true, noBubbles: true });
    els.coverArt.appendChild(pastille);        // la pastille reste par-dessus
  }

  function renderCover() {
    dessinerUne();
    renderSoirCover();
    if (els.coverMeta.textContent) return;        // le reste ne change jamais

    var d = new Date();
    els.coverMeta.textContent = MOIS[d.getMonth()] + ' ' + d.getFullYear();

    var total = 0;
    UNIVERSES.forEach(function (u) { total += histoiresDe(u).length; });
    els.coverSticker.innerHTML = '<b>' + total + '</b><span>histoires<br>du soir</span>';
  }

  /* ---------------- sommaire ---------------- */
  function renderHome() {
    renderChips(null);
    renderLangues();
    ouvrirFiltres(false);
    els.hello.textContent = mot('choisis');
    els.grid.innerHTML = '';
    UNIVERSES.forEach(function (u) {
      var n = histoiresDe(u).length;
      if (!n) return;
      var card = document.createElement('button');
      card.className = 'uni-card';
      card.innerHTML =
        '<div class="band"><h3>' + u.emoji + ' ' + tr(u.name) + '</h3>' +
        '<span class="num">' + plageNumeros(u) + '</span></div>' +
        '<div class="thumb">' + Art.scene(u.cover, { slice: true, noBubbles: true }) + '</div>' +
        '<div class="cap"><p>' + tr(u.tagline) + '</p>' +
        '<span class="pill">' + n + ' histoire' + (n > 1 ? 's' : '') + '</span></div>';
      card.onclick = function () { location.hash = '#/u/' + u.id; };
      els.grid.appendChild(card);
    });
  }

  /* ---------------- univers ---------------- */
  function renderUniverse(u, startId) {
    state.universe = u;
    setTheme(u);
    els.uniTitle.textContent = u.emoji + ' ' + tr(u.name);
    els.uniTagline.textContent = tr(u.tagline);

    var start = 0;
    var items = histoiresDe(u).map(function (s, i) {
      if (startId && s.id === startId) start = i;
      return {
        scene: s.cover, label: titre(s), num: numero(u, s), tag: tr(s.tag),
        badge: isRead(u, s) ? '✓' : String(nbPages(s)) + ' p.'
      };
    });

    els.cfDots.innerHTML = '';
    items.forEach(function () { els.cfDots.appendChild(document.createElement('i')); });

    flow.setItems(items, start);
    requestAnimationFrame(function () { flow.layout(); });
  }

  function renderMeta(i) {
    var u = state.universe;
    if (!u || i < 0) return;
    var s = histoiresDe(u)[i];
    els.cfTitle.textContent = titre(s);
    els.cfSub.textContent = soustitre(s);
    els.cfTags.innerHTML =
      '<span>' + numero(u, s) + '</span><span>' + nbPages(s) + ' pages</span>' +
      '<span>≈ ' + s.minutes + ' min</span>' + (isRead(u, s) ? '<span>✓ déjà lue</span>' : '');
    var dots = els.cfDots.children;
    for (var k = 0; k < dots.length; k++) dots[k].className = k === i ? 'on' : '';
    els.read.onclick = function () { location.hash = '#/u/' + u.id + '/' + s.id; };
  }

  /* ============================================================
     LECTEUR DE BD
     ============================================================ */
  /* Une planche, à la place qu'elle occupe sur le chemin suivi. Dans une
     histoire à choix, ce chemin s'allonge au fur et à mesure des décisions ;
     le total, lui, est connu d'avance puisque tous les chemins font la même
     longueur. */
  function ajouterPage(p, i, total) {
    var a = document.createElement('article');
    a.className = 'page' + (p.choix ? ' page-choix' : '');
    a.innerHTML =
      '<div class="panel">' + Art.scene(p.scene) + '</div>' +
      '<p class="ptext">' + texte(p) + '</p>' +
      (p.choix ? boutonsChoix(p.choix) : '') +
      '<div class="pnum">' + (i + 1) + ' / ' + total + '</div>';
    els.pages.appendChild(a);
    state.chemin.push(p);
    return a;
  }

  /* Deux grands boutons dessinés. L'enfant ne lit pas : ce qu'elle reconnaît,
     c'est l'image — la cabane, la rivière, la lampe. Le mot reste dessous. */
  function boutonsChoix(c) {
    return '<div class="choix">' + c.options.map(function (o, k) {
      /* l'option ne nomme que l'élément : c'est le moteur qui sait le cadrer.
         « fond » sert aux dessins pâles — une lune crème sur du papier crème
         ne se voit pas, sur un rond de nuit elle éclaire. */
      var m = o['mot_' + LANGUE] || o.mot;
      return '<button class="choix-b" data-choix="' + k + '" aria-label="' + m + '">' +
        '<span class="choix-img' + (o.fond ? ' ' + o.fond : '') + '">' +
        Art.sticker(Art.vignette(o.v, o.pose && { pose: o.pose })) +
        '</span><span class="choix-mot">' + m + '</span></button>';
    }).join('') + '</div>';
  }

  /* Ajouter un bloc entier, puis la suite : soit un autre choix attend à la
     dernière page, soit c'est la fin de l'histoire. */
  function ajouterBloc(s, nom) {
    var bloc = s.blocs[nom], total = state.total;
    bloc.pages.forEach(function (p) { ajouterPage(p, state.chemin.length, total); });
    var derniere = bloc.pages[bloc.pages.length - 1];
    if (!derniere.choix) ajouterFin(s);
  }

  /* On change d'avis : tout ce qui suivait le choix est effacé et le chemin
     se réécrit. C'est la moitié du plaisir — « et si on avait pris l'autre ? » */
  function choisir(s, page, k) {
    var i = state.chemin.indexOf(page);
    if (i < 0) return;
    while (els.pages.children.length > i + 1) {
      els.pages.removeChild(els.pages.lastChild);
    }
    state.chemin.length = i + 1;
    state.end = null;
    var art = els.pages.children[i];
    var bs = art.querySelectorAll('.choix-b');
    for (var b = 0; b < bs.length; b++) bs[b].classList.toggle('pris', b === k);
    ajouterBloc(s, page.choix.options[k].vers);
    requestAnimationFrame(function () { goPage(i + 1); });
  }

  function ajouterFin(s) {
    var u = state.universe;
    var end = document.createElement('article');
    end.className = 'page page-end';
    end.innerHTML = '<div class="end-badge">🌟</div><div class="end-corps"></div>';
    els.pages.appendChild(end);
    state.end = end;
    majFin(null);

    /* Le décompte du soir se déclenche quand la page « Fin ! » est vraiment à
       l'écran. On l'observe plutôt que d'écouter le défilement : un doigt
       rapide peut sauter une page, un observateur, non. Compter deux fois la
       même histoire est sans effet (voir Soir.compter). */
    if (state.obs) { state.obs.disconnect(); state.obs = null; }
    if (window.IntersectionObserver) {
      state.obs = new IntersectionObserver(function (vues) {
        for (var v = 0; v < vues.length; v++) {
          if (vues[v].isIntersecting) { majFin(Soir.compter(u, s)); majSoir(); }
        }
      }, { root: els.pages, threshold: 0.6 });
      state.obs.observe(end);
    }

    end.addEventListener('click', function (e) {
      /* le clic tombe sur l'image ou le mot : on remonte jusqu'au bouton */
      var cible = e.target.closest && e.target.closest('[data-act]');
      var act = cible && cible.getAttribute('data-act');
      if (act === 'again') { if (branchu(s)) openReader(u, s); else goPage(0); }
      else if (act === 'close') location.hash = '#/u/' + u.id;
      else if (act === 'next') {
        var liste = histoiresDe(u);
        var i = liste.indexOf(s);
        var nx = liste[(i + 1) % liste.length];
        location.hash = '#/u/' + u.id + '/' + nx.id;
      }
    });
  }

  function openReader(u, s) {
    state.universe = u; state.story = s;
    setTheme(u);
    els.rTitle.textContent = titre(s);
    els.pages.innerHTML = '';
    /* on repart du début : sans cette remise à zéro, ouvrir une histoire
       depuis la fin de la précédente la montre déjà terminée */
    els.pages.scrollLeft = 0;
    state.chemin = [];
    state.total = nbPages(s);
    state.page = -1;
    state.end = null;

    if (branchu(s)) ajouterBloc(s, s.debut);
    else {
      s.pages.forEach(function (p, i) { ajouterPage(p, i, state.total); });
      ajouterFin(s);
    }

    els.rDots.innerHTML = '';
    for (var k = 0; k <= state.total; k++) els.rDots.appendChild(document.createElement('i'));

    els.reader.hidden = false;
    document.body.style.overflow = 'hidden';

    /* Une histoire à choix repart toujours du début : reprendre au milieu
       d'un chemin qu'on ne connaît plus n'aurait pas de sens. */
    var saved = branchu(s) ? 0 : parseInt(store('page.' + u.id + '.' + s.id) || '0', 10);
    if (!(saved > 0 && saved < state.total)) saved = 0;
    requestAnimationFrame(function () { goPage(saved, true); syncPage(); });
  }

  /* le clic sur un bouton de choix, écouté une seule fois pour tout le lecteur */
  function clicChoix(e) {
    var b = e.target.closest && e.target.closest('.choix-b');
    if (!b || !state.story || !branchu(state.story)) return;
    var art = b.closest('.page');
    var i = [].indexOf.call(els.pages.children, art);
    if (i < 0) return;
    choisir(state.story, state.chemin[i], +b.getAttribute('data-choix'));
  }

  /* Les boutons que l'enfant utilise sont d'abord des images : à quatre ans
     on ne lit pas encore, mais on reconnaît une flèche et une maison. Le mot
     reste dessous, en petit, pour l'adulte. */
  function bouton(act, image, mot, fort) {
    return '<button class="bi' + (fort ? ' primary' : '') + '" data-act="' + act +
      '" aria-label="' + mot + '"><span class="bi-img">' + image +
      '</span><span class="bi-mot">' + mot + '</span></button>';
  }

  /* la page finale : elle change de discours selon ce qu'il reste à lire */
  function majFin(reste) {
    if (!state.end) return;
    var corps = state.end.querySelector('.end-corps');
    if (!corps) return;
    if (reste === null || reste === undefined) reste = Soir.reste();
    var titre, phrase, suite = true;
    if (reste === null) {
      titre = mot('fin');
      phrase = mot('bonneNuit');
    } else if (reste > 0) {
      titre = mot('fin');
      phrase = mot('encore')(reste);
    } else {
      titre = mot('derniere');
      phrase = mot('eteint');
      suite = false;
    }
    corps.innerHTML = '<h4>' + titre + '</h4><p>' + phrase + '</p>' +
      '<div class="end-actions">' +
      (suite ? bouton('next', '▶', mot('autre'), true) : '') +
      /* dans une histoire à choix, « relire » veut dire « reprendre les
         chemins qu'on n'a pas pris » — c'est la moitié du plaisir */
      (branchu(state.story)
        ? bouton('again', '🔀', mot('rejouer'), !suite)
        : bouton('again', '↻', mot('relire'), !suite)) +
      bouton('close', '⌂', mot('sommaire'), false) + '</div>';
  }

  function closeReader() {
    if (els.reader.hidden) return;
    els.reader.hidden = true;
    els.pages.innerHTML = '';
    state.story = null; state.end = null; state.chemin = [];
    if (state.obs) { state.obs.disconnect(); state.obs = null; }
    document.body.style.overflow = '';
    stopSpeak();
  }

  function goPage(i, instant) {
    var w = els.pages.clientWidth;
    els.pages.scrollTo({ left: i * w, behavior: instant ? 'auto' : 'smooth' });
  }

  function syncPage() {
    var s = state.story;
    if (!s) return;
    var w = els.pages.clientWidth || 1;
    var i = Math.round(els.pages.scrollLeft / w);
    var total = state.total;
    /* le chemin déjà déroulé : dans une histoire à choix, il s'arrête au
       prochain choix tant qu'il n'est pas fait */
    var pose = state.chemin.length;
    if (i === state.page) return;
    state.page = i;

    var dots = els.rDots.children;
    for (var k = 0; k < dots.length; k++) dots[k].className = k === i ? 'on' : '';
    els.rPrev.disabled = i <= 0;
    /* on ne passe pas un choix sans l'avoir fait : le bouton « suivant » est
       éteint tant que le chemin ne va pas plus loin */
    els.rNext.disabled = i >= (state.end ? total : pose - 1);

    if (i < total && !branchu(s)) store('page.' + state.universe.id + '.' + s.id, String(i));
    if (i >= total - 1) store('read.' + state.universe.id + '.' + s.id, '1');
    /* l'histoire est finie quand la dernière page — celle du « Fin ! » — s'affiche */
    if (i >= total) { majFin(Soir.compter(state.universe, s)); majSoir(); }

    stopSpeak();
    if (state.speak && i < pose) speak(texte(state.chemin[i]));
  }

  els.pages.addEventListener('scroll', function () {
    clearTimeout(els.pages._t);
    els.pages._t = setTimeout(syncPage, 90);
  });
  els.pages.addEventListener('click', clicChoix);
  els.rPrev.onclick = function () { goPage(Math.max(0, state.page - 1)); };
  els.rNext.onclick = function () { goPage(state.page + 1); };
  els.rClose.onclick = function () { location.hash = '#/u/' + state.universe.id; };

  /* ---------------- lecture à voix haute ---------------- */
  /* ---------------- la voix ----------------
     La qualité vient d'abord du choix de la voix : les téléphones embarquent
     souvent plusieurs voix françaises, dont une nettement meilleure que celle
     par défaut. On la cherche une fois, on la garde.

     Le reste est une affaire de rythme : on découpe le texte en phrases et on
     les fait lire l'une après l'autre, avec une petite respiration entre les
     deux. Une seule longue chaîne est lue d'un trait, sans ponctuation
     audible — c'est ce qui donne l'impression de robot. */
  var laVoix = null, voixCherchee = false;

  /* La langue lue, et son pays. « fr » tout court ne suffit pas : sur beaucoup
     de téléphones la première voix française venue est canadienne, et l'accent
     surprend une enfant qui entend du français de France toute la journée. */
  var PARLE = { fr: 'fr-FR', es: 'es-ES', en: 'en-GB' };
  var LOCALE = { fr: 'fr-fr', es: 'es-es', en: 'en-gb' };

  /* On ne peut pas demander le genre d'une voix : l'API ne le donne pas. On le
     déduit du nom, qui est stable d'un système à l'autre — Apple, Google et
     Microsoft nomment leurs voix, et ces noms sont connus.

     La comparaison se fait mot à mot, jamais par morceau de mot : « Paulina »
     contient « Paul », « Daniela » contient « Daniel », et un simple test de
     sous-chaîne rangerait ces deux voix féminines du mauvais côté. */
  function motsDuNom(nom) {
    return String(nom).toLowerCase().split(/[^a-zà-öø-ÿ]+/).filter(Boolean);
  }
  var FEMININ = ('female femenina féminine ' +
    'amélie amelie audrey aurélie aurelie marie julie chantal céline celine ' +
    'hortense denise léa lea charlotte virginie manon flore ' +
    'mónica monica marisol paulina laura helena elvira sabina lucía lucia ' +
    'daniela carmen esperanza salomé salome ' +
    'serena kate stephanie martha hazel susan sonia libby samantha karen ' +
    'moira tessa fiona amelia emma olivia ava allison joanna alexandra').split(' ');
  var MASCULIN = ('male masculina masculine ' +
    'thomas nicolas paul henri daniel rémi remi mathieu antoine ' +
    'jorge diego juan pablo raúl raul álvaro alvaro carlos enrique ' +
    'oliver arthur ryan george alex fred aaron reed james william guy brian').split(' ');
  /* les voix « améliorées » ou installées sur l'appareil sonnent mieux */
  var SOIGNEE = /(enhanced|premium|améliorée|amelioree|mejorada|siri|natural|neural|google)/i;

  function contient(liste, mots) {
    for (var i = 0; i < mots.length; i++) if (liste.indexOf(mots[i]) >= 0) return true;
    return false;
  }

  function noterVoix(v) {
    var lang = (v.lang || '').toLowerCase().replace('_', '-');
    var vise = LOCALE[LANGUE];
    var n = 0;
    if (lang === vise) n += 100;                       /* le bon pays d'abord */
    else if (lang.indexOf(vise.slice(0, 2)) === 0) n += 30;   /* la bonne langue, un autre pays */
    else return -1;                                    /* pas la bonne langue du tout */
    var mots = motsDuNom(v.name);
    if (contient(FEMININ, mots)) n += 50;
    if (contient(MASCULIN, mots)) n -= 80;
    if (SOIGNEE.test(v.name)) n += 15;
    /* Décisif, et pas seulement pour le confort : une voix « distante » est
       fabriquée par un serveur. Elle met une seconde ou deux à démarrer, elle
       se coupe quand le réseau hésite, et elle ne dit rien du tout en avion.
       Une application qui fonctionne hors connexion ne peut pas en dépendre. */
    if (v.localService) n += 45;
    return n;
  }

  function voixDisponibles() {
    if (!('speechSynthesis' in window)) return [];
    return (window.speechSynthesis.getVoices() || [])
      .filter(function (v) { return noterVoix(v) >= 0; })
      .sort(function (a, b) { return noterVoix(b) - noterVoix(a); });
  }

  function choisirVoix() {
    var libres = voixDisponibles();
    if (!libres.length) return null;
    voixCherchee = true;
    /* un choix fait à la main l'emporte sur le classement */
    var voulue = store('voix.' + LANGUE);
    if (voulue) {
      for (var i = 0; i < libres.length; i++) if (libres[i].name === voulue) return libres[i];
    }
    return libres[0];
  }

  /* la même voix sert aux jeux */
  function poserVoix() {
    laVoix = choisirVoix();
    if (window.Jeux && Jeux.timbre) Jeux.timbre(laVoix);
    return laVoix;
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function () { poserVoix(); renderVoix(); };
  }

  function phrases(texte) {
    return texte
      .replace(/…/g, '...')
      .replace(/[«»]/g, ' ')
      .replace(/\s+/g, ' ')
      .split(/(?<=[.!?])\s+/)
      .map(function (p) { return p.trim(); })
      .filter(Boolean);
  }

  /* Chaque lecture porte un jeton. Une nouvelle lecture — ou un arrêt — change
     le jeton, et la chaîne en cours s'interrompt d'elle-même au lieu de
     continuer à parler par-dessus la suivante. */
  var lecture = 0;

  function speak(texte) {
    if (!('speechSynthesis' in window)) return;
    if (!laVoix) poserVoix();
    var lot = phrases(texte);
    if (!lot.length) return;
    var mien = ++lecture, i = 0;

    /* Une phrase à la fois, la suivante enchaînée sur la fin de la précédente.
       Empiler tout le paragraphe d'un coup marche sur un ordinateur et casse
       sur un téléphone : selon les moteurs, seule la première phrase sort, ou
       la file se bloque et repart une demi-minute plus tard. */
    function suivante() {
      if (mien !== lecture || i >= lot.length) return;
      var derniere = (i === lot.length - 1);
      var u = new SpeechSynthesisUtterance(lot[i]);
      i++;
      /* Un objet voix peut se périmer — la liste est reconstruite quand le
         téléphone change de moteur ou revient d'une mise en veille. Sans ce
         garde-fou, l'affectation lève une exception et la lecture meurt en
         silence ; la langue seule suffit à retomber sur ses pieds. */
      try { if (laVoix) u.voice = laVoix; } catch (e) { laVoix = null; }
      u.lang = (laVoix && laVoix.lang) || PARLE[LANGUE] || 'fr-FR';
      u.rate = 0.9;
      /* la dernière phrase d'un paragraphe se pose un peu plus bas */
      u.pitch = derniere ? 0.97 : 1.0;
      var enchaine = function () {
        if (mien === lecture) setTimeout(suivante, 130);
      };
      u.onend = enchaine;
      /* une voix distante échoue parfois : on passe à la phrase suivante
         plutôt que de laisser la lecture morte */
      u.onerror = enchaine;
      window.speechSynthesis.speak(u);
    }

    /* cancel() est asynchrone. Parler dans la foulée fait avaler le début de
       la phrase, parfois la phrase entière : on laisse passer un tour. */
    window.speechSynthesis.cancel();
    setTimeout(suivante, 90);
  }

  function stopSpeak() {
    lecture++;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }
  els.rSpeak.onclick = function () {
    if (!('speechSynthesis' in window)) { els.rSpeak.disabled = true; return; }
    state.speak = !state.speak;
    els.rSpeak.classList.toggle('on', state.speak);
    stopSpeak();
    if (state.speak && state.page < state.chemin.length) {
      speak(texte(state.chemin[state.page]));
    }
  };

  document.addEventListener('keydown', function (e) {
    if (els.reader.hidden) return;
    if (e.key === 'ArrowRight') els.rNext.click();
    else if (e.key === 'ArrowLeft') els.rPrev.click();
    else if (e.key === 'Escape') els.rClose.click();
  });

  /* ============================================================
     ROUTEUR
     ============================================================ */
  function route() {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('/').filter(Boolean);

    if (!parts.length) {                       // la une
      closeReader();
      setTheme(null);
      els.cover.hidden = false; els.home.hidden = true; els.uni.hidden = true;
      els.games.hidden = true; Jeux.taire();
      els.topbar.hidden = true; els.tabs.hidden = true; els.mainnav.hidden = true;
      renderCover();
      window.scrollTo(0, 0);
      return;
    }

    els.cover.hidden = true;
    els.topbar.hidden = false; els.mainnav.hidden = false;

    if (parts[0] === 'jeux') {                   // les jeux
      closeReader();
      Jeux.taire();
      renderNav('jeux');
      setTheme(null);
      els.tabs.hidden = true;
      els.home.hidden = true; els.uni.hidden = true; els.games.hidden = false;
      var jeu = parts[1] && Jeux.trouver(parts[1]);
      if (jeu) { renderGames(); openGame(jeu); }
      else renderGames();
      window.scrollTo(0, 0);
      return;
    }
    els.games.hidden = true;
    Jeux.taire();
    renderNav('histoires');
    els.tabs.hidden = false;

    if (parts[0] === 'theme') {                  // les histoires d'un thème
      var th = themeParId(parts[1]);
      if (!th) { location.hash = '#/histoires'; return; }
      closeReader();
      setTheme(null);
      els.home.hidden = false; els.uni.hidden = true;
      renderTheme(th, parts[2]);
      window.scrollTo(0, 0);
      return;
    }

    if (parts[0] !== 'u') {                      // la liste des univers
      closeReader();
      renderTabs(null);
      setTheme(null);
      els.home.hidden = false; els.uni.hidden = true;
      renderHome();
      window.scrollTo(0, 0);
      return;
    }

    var u = findUniverse(parts[1]);
    if (!u) { location.hash = '#/histoires'; return; }

    renderTabs(u.id);
    els.home.hidden = true; els.uni.hidden = false;

    var storyId = parts[2];
    if (state.universe !== u) renderUniverse(u, storyId);
    else if (storyId) {
      var idx = histoiresDe(u).indexOf(findStory(u, storyId));
      if (idx >= 0 && flow.current() !== idx) flow.go(idx);
    } else {
      // retour depuis le lecteur : on rafraîchit les pastilles « déjà lue »
      histoiresDe(u).forEach(function (s, i) {
        flow.setBadge(i, isRead(u, s) ? '✓' : nbPages(s) + ' p.');
      });
      renderMeta(flow.current());
    }

    if (storyId) {
      var s = findStory(u, storyId);
      if (!s) { location.hash = '#/u/' + u.id; return; }
      state.page = -1;
      openReader(u, s);
    } else {
      closeReader();
      window.scrollTo(0, 0);
    }
  }

  els.coverRandom.onclick = function () { els.random.onclick(); };

  els.random.onclick = function () {
    var pool = [];
    UNIVERSES.forEach(function (u) {
      histoiresDe(u).forEach(function (s) { pool.push([u.id, s.id]); });
    });
    var p = pool[Math.floor(Math.random() * pool.length)];
    location.hash = '#/u/' + p[0] + '/' + p[1];
  };

  var minuteurUne;
  window.addEventListener('resize', function () {
    if (els.cover.hidden) { coverForme = null; return; }
    clearTimeout(minuteurUne);
    minuteurUne = setTimeout(dessinerUne, 150);
  });

  els.btnReglages.onclick = function (e) { e.stopPropagation(); ouvrirReglages(); };
  document.addEventListener('click', function (e) {
    if (els.reglages.hidden) return;
    if (!els.reglages.contains(e.target) && e.target !== els.btnReglages) ouvrirReglages(false);
  });

  window.addEventListener('hashchange', route);
  majSoir();
  route();
})();
