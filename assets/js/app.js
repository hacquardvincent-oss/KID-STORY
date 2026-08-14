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
    { id: 'es', nom: 'Español', drapeau: '🇪🇸', voix: 'es' }
  ];
  var LANGUE = store('langue') === 'es' ? 'es' : 'fr';

  var MOTS = {
    fr: {
      choisis: 'Choisis un univers.', filtrer: 'Filtrer par thème',
      lire: "Lire l'histoire", soir: 'Ce soir, on lit…', hasard: 'Une histoire au hasard',
      fin: 'Fin !', derniere: "C'était la dernière", eteint: 'On éteint. Bonne nuit, Livia.',
      bonneNuit: 'Bonne nuit… et à demain pour une nouvelle histoire.',
      autre: 'Une autre', relire: 'Relire', sommaire: 'Le sommaire',
      encore: function (n) { return 'Encore <b>' + n + '</b> histoire' + (n > 1 ? 's' : '') + ' ce soir.'; },
      planches: 'planches', histoires: 'histoires', tous: 'Tous', langue: 'Langue'
    },
    es: {
      choisis: 'Elige un mundo.', filtrer: 'Filtrar por tema',
      lire: 'Leer el cuento', soir: 'Esta noche leemos…', hasard: 'Un cuento al azar',
      fin: '¡Fin!', derniere: 'Era el último', eteint: 'Apagamos. Buenas noches, Livia.',
      bonneNuit: 'Buenas noches… y hasta mañana para otro cuento.',
      autre: 'Otro', relire: 'Releer', sommaire: 'El índice',
      encore: function (n) { return 'Todavía <b>' + n + '</b> cuento' + (n > 1 ? 's' : '') + ' esta noche.'; },
      planches: 'láminas', histoires: 'cuentos', tous: 'Todos', langue: 'Idioma'
    }
  };
  function mot(k) { return (MOTS[LANGUE] && MOTS[LANGUE][k]) || MOTS.fr[k]; }

  /* une histoire n'existe dans une langue que si tout y est traduit */
  function dispo(st) {
    if (LANGUE === 'fr') return true;
    if (!st['title_' + LANGUE]) return false;
    return st.pages.every(function (p) { return !!p[LANGUE]; });
  }
  function histoiresDe(u) { return u.stories.filter(dispo); }
  function titre(st) { return st['title_' + LANGUE] || st.title; }
  function soustitre(st) { return st['subtitle_' + LANGUE] || st.subtitle; }
  function texte(p) { return p[LANGUE] || p.text; }

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
    filtres: $('#filtres'), btnFiltres: $('#btnFiltres'), langues: $('#langues'),
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

  var state = { universe: null, story: null, page: 0, speak: false };

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
          ? 'Encore <b>' + r + '</b> histoire' + (r > 1 ? 's' : '') + ' ce soir'
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
  }

  function renderLangues() {
    var z = els.langues;
    if (!z) return;
    z.innerHTML = '<span class="langue-titre">' + mot('langue') + '</span>';
    LANGUES.forEach(function (l) {
      var n = 0;
      UNIVERSES.forEach(function (u) {
        u.stories.forEach(function (st) {
          if (l.id === 'fr' || (st['title_' + l.id] &&
            st.pages.every(function (p) { return !!p[l.id]; }))) n++;
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
        majMots();
        renderTabs(null);
        renderHome();
        ouvrirFiltres(true);
      };
      z.appendChild(b);
    });
  }
  document.documentElement.lang = LANGUE;
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
        '<span class="tab-mot">' + u.name + '</span>';
      b.setAttribute('aria-label', u.name);
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
      '<span class="pill">' + s.pages.length + ' ' + mot('planches') + '</span></div>';
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
    tous.textContent = '↩ Tous les jeux';
    tous.onclick = function () { location.hash = '#/jeux'; };
    els.jeuxNav.appendChild(tous);
    Jeux.liste.forEach(function (j) {
      var b = document.createElement('button');
      b.className = 'chip' + (j.id === actif ? ' is-active' : '');
      b.textContent = j.emoji + ' ' + j.nom;
      b.onclick = function () { location.hash = '#/jeux/' + j.id; };
      els.jeuxNav.appendChild(b);
    });
  }

  function renderGames() {
    els.gamesGrid.innerHTML = '';
    els.gamesGrid.hidden = false;
    els.gameStage.hidden = true;
    els.gameStage.innerHTML = '';
    els.gamesSub.textContent = 'Pour jouer tout seul, dès 3 ans';
    renderJeuxNav(null);

    /* rangés par famille : une enfant trouve plus vite « les lettres » qu'un
       jeu précis dans une liste de huit */
    Jeux.categories.forEach(function (cat) {
      var jeux = Jeux.liste.filter(function (j) { return j.cat === cat.id; });
      if (!jeux.length) return;
      var titre = document.createElement('h3');
      titre.className = 'jeu-famille';
      titre.innerHTML = '<span>' + cat.emoji + '</span> ' + cat.nom;
      els.gamesGrid.appendChild(titre);
      jeux.forEach(function (jeu) { els.gamesGrid.appendChild(carteJeu(jeu)); });
    });
  }

  function carteJeu(jeu) {
    var c = document.createElement('button');
    c.className = 'jeu-carte';
    c.innerHTML =
      '<div class="jeu-vignette">' + Art.sticker(jeu.vignette) + '</div>' +
      '<div class="jeu-texte"><h3>' + jeu.emoji + ' ' + jeu.nom + '</h3>' +
      '<p>' + jeu.sous + '</p></div>';
    c.onclick = function () { location.hash = '#/jeux/' + jeu.id; };
    return c;
  }

  function openGame(jeu) {
    els.gamesGrid.hidden = true;
    els.gameStage.hidden = false;
    els.gamesSub.textContent = jeu.sous;
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
        '<div class="band"><h3>' + u.emoji + ' ' + u.name + '</h3>' +
        '<span class="num">' + plageNumeros(u) + '</span></div>' +
        '<div class="thumb">' + Art.scene(u.cover, { slice: true, noBubbles: true }) + '</div>' +
        '<div class="cap"><p>' + u.tagline + '</p>' +
        '<span class="pill">' + n + ' histoire' + (n > 1 ? 's' : '') + '</span></div>';
      card.onclick = function () { location.hash = '#/u/' + u.id; };
      els.grid.appendChild(card);
    });
  }

  /* ---------------- univers ---------------- */
  function renderUniverse(u, startId) {
    state.universe = u;
    setTheme(u);
    els.uniTitle.textContent = u.emoji + ' ' + u.name;
    els.uniTagline.textContent = u.tagline;

    var start = 0;
    var items = histoiresDe(u).map(function (s, i) {
      if (startId && s.id === startId) start = i;
      return {
        scene: s.cover, label: titre(s), num: numero(u, s), tag: s.tag,
        badge: isRead(u, s) ? '✓' : String(s.pages.length) + ' p.'
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
      '<span>' + numero(u, s) + '</span><span>' + s.pages.length + ' pages</span>' +
      '<span>≈ ' + s.minutes + ' min</span>' + (isRead(u, s) ? '<span>✓ déjà lue</span>' : '');
    var dots = els.cfDots.children;
    for (var k = 0; k < dots.length; k++) dots[k].className = k === i ? 'on' : '';
    els.read.onclick = function () { location.hash = '#/u/' + u.id + '/' + s.id; };
  }

  /* ============================================================
     LECTEUR DE BD
     ============================================================ */
  function openReader(u, s) {
    state.universe = u; state.story = s;
    setTheme(u);
    els.rTitle.textContent = titre(s);
    els.pages.innerHTML = '';
    /* on repart du début : sans cette remise à zéro, ouvrir une histoire
       depuis la fin de la précédente la montre déjà terminée */
    els.pages.scrollLeft = 0;

    s.pages.forEach(function (p, i) {
      var a = document.createElement('article');
      a.className = 'page';
      a.innerHTML =
        '<div class="panel">' + Art.scene(p.scene) + '</div>' +
        '<p class="ptext">' + texte(p) + '</p>' +
        '<div class="pnum">' + (i + 1) + ' / ' + s.pages.length + '</div>';
      els.pages.appendChild(a);
    });

    // page finale
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
      if (act === 'again') goPage(0);
      else if (act === 'close') location.hash = '#/u/' + u.id;
      else if (act === 'next') {
        var liste = histoiresDe(u);
        var i = liste.indexOf(s);
        var nx = liste[(i + 1) % liste.length];
        location.hash = '#/u/' + u.id + '/' + nx.id;
      }
    });

    els.rDots.innerHTML = '';
    for (var k = 0; k <= s.pages.length; k++) els.rDots.appendChild(document.createElement('i'));

    els.reader.hidden = false;
    document.body.style.overflow = 'hidden';

    var saved = parseInt(store('page.' + u.id + '.' + s.id) || '0', 10);
    if (!(saved > 0 && saved < s.pages.length)) saved = 0;
    requestAnimationFrame(function () { goPage(saved, true); syncPage(); });
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
      bouton('again', '↻', mot('relire'), !suite) +
      bouton('close', '⌂', mot('sommaire'), false) + '</div>';
  }

  function closeReader() {
    if (els.reader.hidden) return;
    els.reader.hidden = true;
    els.pages.innerHTML = '';
    state.story = null; state.end = null;
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
    var total = s.pages.length;
    if (i === state.page) return;
    state.page = i;

    var dots = els.rDots.children;
    for (var k = 0; k < dots.length; k++) dots[k].className = k === i ? 'on' : '';
    els.rPrev.disabled = i <= 0;
    els.rNext.disabled = i >= total;

    if (i < total) store('page.' + state.universe.id + '.' + s.id, String(i));
    if (i >= total - 1) store('read.' + state.universe.id + '.' + s.id, '1');
    /* l'histoire est finie quand la dernière page — celle du « Fin ! » — s'affiche */
    if (i >= total) { majFin(Soir.compter(state.universe, s)); majSoir(); }

    stopSpeak();
    if (state.speak && i < total) speak(texte(s.pages[i]));
  }

  els.pages.addEventListener('scroll', function () {
    clearTimeout(els.pages._t);
    els.pages._t = setTimeout(syncPage, 90);
  });
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

  function choisirVoix() {
    if (!('speechSynthesis' in window)) return null;
    var toutes = window.speechSynthesis.getVoices() || [];
    if (!toutes.length) return null;
    voixCherchee = true;
    var prefixe = LANGUE === 'es' ? 'es' : 'fr';
    var fr = toutes.filter(function (v) { return v.lang.toLowerCase().indexOf(prefixe) === 0; });
    if (!fr.length) return null;
    /* les voix « améliorées » et les voix installées sur l'appareil sonnent
       mieux que les voix de secours ; les noms varient d'un système à l'autre */
    var bonnes = /(enhanced|premium|améliorée|amelioree|mejorada|siri|natural|neural|google|thomas|amélie|amelie|audrey|marie|monica|mónica|paulina|jorge)/i;
    fr.sort(function (a, b) {
      var na = (bonnes.test(a.name) ? 2 : 0) + (a.localService ? 1 : 0);
      var nb = (bonnes.test(b.name) ? 2 : 0) + (b.localService ? 1 : 0);
      return nb - na;
    });
    return fr[0];
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function () { laVoix = choisirVoix(); };
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

  function speak(texte) {
    if (!('speechSynthesis' in window)) return;
    if (!laVoix && !voixCherchee) laVoix = choisirVoix();
    var lot = phrases(texte);
    lot.forEach(function (p, i) {
      var u = new SpeechSynthesisUtterance(p);
      if (laVoix) u.voice = laVoix;
      u.lang = (laVoix && laVoix.lang) || (LANGUE === 'es' ? 'es-ES' : 'fr-FR');
      u.rate = 0.9;
      u.pitch = 1.0;
      /* la dernière phrase d'un paragraphe se pose un peu plus bas */
      if (i === lot.length - 1) u.pitch = 0.97;
      window.speechSynthesis.speak(u);
    });
  }
  function stopSpeak() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }
  els.rSpeak.onclick = function () {
    if (!('speechSynthesis' in window)) { els.rSpeak.disabled = true; return; }
    state.speak = !state.speak;
    els.rSpeak.classList.toggle('on', state.speak);
    stopSpeak();
    if (state.speak && state.story && state.page < state.story.pages.length) {
      speak(state.story.pages[state.page].text);
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
        flow.setBadge(i, isRead(u, s) ? '✓' : s.pages.length + ' p.');
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

  window.addEventListener('hashchange', route);
  majSoir();
  route();
})();
