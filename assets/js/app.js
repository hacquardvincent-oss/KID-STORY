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
    grid: $('#uniGrid'), back: $('#btnBack'), random: $('#btnRandom'),
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

  /* ---------------- onglets ---------------- */
  function renderTabs(activeId) {
    els.tabs.innerHTML = '';
    var all = document.createElement('button');
    all.className = 'tab' + (activeId ? '' : ' is-active');
    all.textContent = '★ Tout';
    all.onclick = function () { location.hash = '#/'; };
    els.tabs.appendChild(all);

    UNIVERSES.forEach(function (u) {
      var b = document.createElement('button');
      b.className = 'tab' + (activeId === u.id ? ' is-active' : '');
      b.textContent = u.emoji + ' ' + u.name;
      b.onclick = function () { location.hash = '#/u/' + u.id; };
      els.tabs.appendChild(b);
    });
  }

  /* ---------------- accueil ---------------- */
  function renderHome() {
    els.grid.innerHTML = '';
    UNIVERSES.forEach(function (u) {
      var card = document.createElement('button');
      card.className = 'uni-card';
      var n = u.stories.length;
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
    var items = u.stories.map(function (s, i) {
      if (startId && s.id === startId) start = i;
      return {
        scene: s.cover, label: s.title, num: numero(u, s), tag: s.tag,
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
    var s = u.stories[i];
    els.cfTitle.textContent = s.title;
    els.cfSub.textContent = s.subtitle;
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
    els.rTitle.textContent = s.title;
    els.pages.innerHTML = '';

    s.pages.forEach(function (p, i) {
      var a = document.createElement('article');
      a.className = 'page';
      a.innerHTML =
        '<div class="panel">' + Art.scene(p.scene) + '</div>' +
        '<p class="ptext">' + p.text + '</p>' +
        '<div class="pnum">' + (i + 1) + ' / ' + s.pages.length + '</div>';
      els.pages.appendChild(a);
    });

    // page finale
    var end = document.createElement('article');
    end.className = 'page page-end';
    end.innerHTML =
      '<div class="end-badge">🌟</div><h4>Fin !</h4>' +
      '<p>Bonne nuit… et à demain pour une nouvelle histoire.</p>' +
      '<div class="end-actions">' +
      '<button class="primary" data-act="again">Relire</button>' +
      '<button data-act="next">Histoire suivante</button>' +
      '<button data-act="close">Retour aux histoires</button></div>';
    els.pages.appendChild(end);

    end.addEventListener('click', function (e) {
      var act = e.target.getAttribute && e.target.getAttribute('data-act');
      if (act === 'again') goPage(0);
      else if (act === 'close') location.hash = '#/u/' + u.id;
      else if (act === 'next') {
        var i = u.stories.indexOf(s);
        var nx = u.stories[(i + 1) % u.stories.length];
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

  function closeReader() {
    if (els.reader.hidden) return;
    els.reader.hidden = true;
    els.pages.innerHTML = '';
    state.story = null;
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

    stopSpeak();
    if (state.speak && i < total) speak(s.pages[i].text);
  }

  els.pages.addEventListener('scroll', function () {
    clearTimeout(els.pages._t);
    els.pages._t = setTimeout(syncPage, 90);
  });
  els.rPrev.onclick = function () { goPage(Math.max(0, state.page - 1)); };
  els.rNext.onclick = function () { goPage(state.page + 1); };
  els.rClose.onclick = function () { location.hash = '#/u/' + state.universe.id; };

  /* ---------------- lecture à voix haute ---------------- */
  function speak(text) {
    if (!('speechSynthesis' in window)) return;
    var u = new SpeechSynthesisUtterance(text.replace(/…/g, '...'));
    u.lang = 'fr-FR'; u.rate = .92; u.pitch = 1.06;
    window.speechSynthesis.speak(u);
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

    if (parts[0] !== 'u') {
      closeReader();
      renderTabs(null);
      setTheme(null);
      els.home.hidden = false; els.uni.hidden = true; els.back.hidden = true;
      renderHome();
      window.scrollTo(0, 0);
      return;
    }

    var u = findUniverse(parts[1]);
    if (!u) { location.hash = '#/'; return; }

    renderTabs(u.id);
    els.home.hidden = true; els.uni.hidden = false; els.back.hidden = false;

    var storyId = parts[2];
    if (state.universe !== u) renderUniverse(u, storyId);
    else if (storyId) {
      var idx = u.stories.indexOf(findStory(u, storyId));
      if (idx >= 0 && flow.current() !== idx) flow.go(idx);
    } else {
      // retour depuis le lecteur : on rafraîchit les pastilles « déjà lue »
      u.stories.forEach(function (s, i) {
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

  els.back.onclick = function () {
    if (!els.reader.hidden) location.hash = '#/u/' + state.universe.id;
    else location.hash = '#/';
  };

  els.random.onclick = function () {
    var pool = [];
    UNIVERSES.forEach(function (u) {
      u.stories.forEach(function (s) { pool.push([u.id, s.id]); });
    });
    var p = pool[Math.floor(Math.random() * pool.length)];
    location.hash = '#/u/' + p[0] + '/' + p[1];
  };

  window.addEventListener('hashchange', route);
  route();
})();
