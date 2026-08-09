/* ============================================================
   art.js — petit moteur de dessin SVG
   Tout est dessiné à la main en SVG : décors, personnages,
   accessoires et bulles de BD. Aucune image externe.
   ============================================================ */
(function (global) {
  'use strict';

  var INK = '#3d2b33';
  var VW = 800, VH = 560;
  var uid = 0;

  /* ---------- utilitaires couleur ---------- */
  function shade(hex, amt) {
    var n = parseInt(hex.slice(1), 16);
    var r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    function f(v) {
      var x = amt < 0 ? v * (1 + amt) : v + (255 - v) * amt;
      return Math.max(0, Math.min(255, Math.round(x)));
    }
    return '#' + ((1 << 24) + (f(r) << 16) + (f(g) << 8) + f(b)).toString(16).slice(1);
  }

  /* ---------- silhouette unifiée ----------
     On dessine deux fois les mêmes formes : d'abord épaissies
     en couleur d'encre (le contour), puis remplies par-dessus.
     Résultat : un contour unique autour de l'union des formes. */
  function U(parts, fill, w) {
    w = w || 9;
    var under = '', over = '', i;
    for (i = 0; i < parts.length; i++) {
      under += parts[i].replace(/%F%/g, INK).replace(/%S%/g,
        'stroke="' + INK + '" stroke-width="' + w + '" stroke-linejoin="round"');
      over += parts[i].replace(/%F%/g, fill).replace(/%S%/g, '');
    }
    return under + over;
  }

  /* ---------- membre (bras / jambe) ---------- */
  function limb(d, color, w) {
    return '<path d="' + d + '" fill="none" stroke="' + INK + '" stroke-width="' + (w + 7) +
      '" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="' + w +
      '" stroke-linecap="round" stroke-linejoin="round"/>';
  }

  function line(d, color, w, extra) {
    return '<path d="' + d + '" fill="none" stroke="' + (color || INK) + '" stroke-width="' + (w || 4) +
      '" stroke-linecap="round" stroke-linejoin="round" ' + (extra || '') + '/>';
  }

  function g(tf, inner) { return '<g transform="' + tf + '">' + inner + '</g>'; }

  /* ============================================================
     PERSONNAGES
     Repère local : les pieds sont en (0,0), le personnage
     se dessine vers le haut (y négatif). Hauteur ≈ 230.
     ============================================================ */

  var SHOE = '#3b2f3a';

  function pigLegs(pose, skin) {
    if (pose === 'jump') {
      return limb('M -14,-64 C -26,-44 -40,-34 -50,-30', skin, 15) +
        limb('M 14,-64 C 26,-44 40,-36 50,-32', skin, 15) +
        '<ellipse cx="-54" cy="-28" rx="15" ry="10" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4" transform="rotate(-25 -54 -28)"/>' +
        '<ellipse cx="54" cy="-30" rx="15" ry="10" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4" transform="rotate(25 54 -30)"/>';
    }
    if (pose === 'run') {
      return limb('M -12,-62 C -24,-46 -34,-26 -36,-12', skin, 15) +
        limb('M 12,-62 C 22,-48 26,-30 24,-12', skin, 15) +
        '<ellipse cx="-40" cy="-9" rx="16" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4"/>' +
        '<ellipse cx="28" cy="-9" rx="16" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4"/>';
    }
    if (pose === 'sit') {
      return limb('M -6,-24 C 22,-24 42,-22 48,-6 C 51,4 52,16 52,26', skin, 15) +
        limb('M 6,-16 C 34,-16 56,-14 62,2 C 65,12 66,22 66,32', skin, 15) +
        '<ellipse cx="56" cy="30" rx="15" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4"/>' +
        '<ellipse cx="70" cy="36" rx="15" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4"/>';
    }
    if (pose === 'swim') return '';
    return limb('M -15,-62 L -15,-16', skin, 15) + limb('M 15,-62 L 15,-16', skin, 15) +
      '<ellipse cx="-17" cy="-11" rx="16" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4"/>' +
      '<ellipse cx="17" cy="-11" rx="16" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4"/>';
  }

  function hand(x, y, skin, r) {
    return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 11) + '" fill="' + skin +
      '" stroke="' + INK + '" stroke-width="4"/>';
  }

  function pigArms(pose, skin) {
    if (pose === 'wave') {
      return limb('M -28,-126 C -52,-118 -64,-106 -66,-92', skin, 13) +
        limb('M 28,-128 C 62,-140 90,-160 96,-186', skin, 13) +
        hand(-68, -88, skin) + hand(100, -192, skin, 12);
    }
    if (pose === 'armsup' || pose === 'jump') {
      return limb('M -28,-126 C -60,-140 -86,-162 -92,-186', skin, 13) +
        limb('M 28,-126 C 60,-140 86,-162 92,-186', skin, 13) +
        hand(-96, -192, skin) + hand(96, -192, skin);
    }
    if (pose === 'point') {
      return limb('M -28,-126 C -52,-116 -64,-102 -66,-90', skin, 13) +
        limb('M 28,-128 C 58,-134 84,-142 104,-150', skin, 13) +
        hand(-68, -86, skin) + hand(108, -152, skin);
    }
    if (pose === 'hold') {
      return limb('M -28,-126 C -50,-122 -62,-114 -62,-102', skin, 13) +
        limb('M 28,-126 C 50,-122 62,-114 62,-102', skin, 13) +
        hand(-64, -98, skin) + hand(64, -98, skin);
    }
    if (pose === 'swim') {
      return limb('M -28,-126 C -52,-136 -68,-134 -80,-128', skin, 13) +
        limb('M 28,-126 C 52,-136 68,-134 80,-128', skin, 13) +
        hand(-84, -126, skin) + hand(84, -126, skin);
    }
    if (pose === 'shrug') {
      return limb('M -28,-128 C -54,-134 -70,-128 -76,-118', skin, 13) +
        limb('M 28,-128 C 54,-134 70,-128 76,-118', skin, 13) +
        hand(-80, -116, skin) + hand(80, -116, skin);
    }
    return limb('M -28,-126 C -52,-118 -64,-106 -66,-92', skin, 13) +
      limb('M 28,-126 C 52,-118 64,-106 66,-92', skin, 13) +
      hand(-68, -88, skin) + hand(68, -88, skin);
  }

  function pigHead(o) {
    var skin = o.skin, mood = o.mood || 'happy';
    var parts = [
      '<path d="M -22,-76 C -36,-96 -24,-118 -6,-110 C -2,-100 -8,-86 -6,-76 Z" fill="%F%" %S%/>',
      '<path d="M 10,-80 C 4,-104 22,-118 32,-104 C 30,-94 20,-88 18,-78 Z" fill="%F%" %S%/>',
      '<ellipse cx="0" cy="-46" rx="45" ry="43" fill="%F%" %S%/>',
      '<ellipse cx="57" cy="-66" rx="23" ry="14" transform="rotate(-14 57 -66)" fill="%F%" %S%/>'
    ];
    var s = U(parts, skin, 9);
    // nez
    s += '<ellipse cx="66" cy="-72" rx="4.4" ry="5.6" fill="' + shade(skin, -0.42) + '"/>' +
      '<ellipse cx="72" cy="-63" rx="4.4" ry="5.6" fill="' + shade(skin, -0.42) + '"/>';
    // yeux
    var ey = -52;
    s += '<circle cx="14" cy="' + ey + '" r="12.5" fill="#fff" stroke="' + INK + '" stroke-width="3.5"/>' +
      '<circle cx="39" cy="' + (ey + 3) + '" r="12.5" fill="#fff" stroke="' + INK + '" stroke-width="3.5"/>';
    if (mood === 'sleep') {
      s += line('M 6,-52 q 8,7 16,0', INK, 4) + line('M 31,-49 q 8,7 16,0', INK, 4);
    } else if (mood === 'wow') {
      s += '<circle cx="16" cy="' + ey + '" r="6" fill="' + INK + '"/><circle cx="41" cy="' + (ey + 3) + '" r="6" fill="' + INK + '"/>';
    } else {
      s += '<circle cx="18" cy="' + (ey + 1) + '" r="5.4" fill="' + INK + '"/><circle cx="43" cy="' + (ey + 4) + '" r="5.4" fill="' + INK + '"/>';
    }
    // joues
    s += '<circle cx="-2" cy="-26" r="10" fill="' + shade(skin, -0.16) + '" opacity=".85"/>';
    // bouche
    if (mood === 'wow') s += '<ellipse cx="34" cy="-24" rx="9" ry="11" fill="#b8355c" stroke="' + INK + '" stroke-width="3.5"/>';
    else if (mood === 'sad') s += line('M 22,-20 q 14,-12 28,-2', INK, 4.5);
    else s += line('M 18,-28 q 16,18 32,0', INK, 4.5);
    return s;
  }

  function pig(o) {
    o = o || {};
    var skin = o.skin || '#f7a8c4';
    var cloth = o.cloth || '#e8436e';
    var pose = o.pose || 'stand';
    var sit = pose === 'sit';
    var s = '';
    if (pose !== 'swim') s += pigLegs(pose, skin);
    // queue en tire-bouchon
    var t = line('M -44,-96 c -16,-4 -20,10 -8,12 c 12,2 12,-14 -4,-14', shade(skin, -0.25), 5);
    t += pigArms(pose, skin);
    // corps
    if (o.top) {
      t += U(['<path d="M -30,-142 C -36,-120 -40,-96 -42,-76 L 42,-76 C 40,-96 36,-120 30,-142 Z" fill="%F%" %S%/>'], cloth, 9);
      t += U(['<path d="M -42,-78 L 42,-78 L 40,-56 L -40,-56 Z" fill="%F%" %S%/>'], shade(cloth, -0.28), 9);
    } else {
      t += U(['<path d="M -30,-142 C -38,-116 -50,-82 -54,-58 L 54,-58 C 50,-82 38,-116 30,-142 Z" fill="%F%" %S%/>'], cloth, 9);
      t += line('M -50,-70 L 50,-70', shade(cloth, -0.25), 4);
    }
    t += g('translate(0,-134)', pigHead({ skin: skin, mood: o.mood }));
    if (o.glasses) {
      t += g('translate(0,-134)', '<circle cx="14" cy="-52" r="16" fill="none" stroke="' + INK + '" stroke-width="3.5"/>' +
        '<circle cx="39" cy="-49" r="16" fill="none" stroke="' + INK + '" stroke-width="3.5"/>' +
        line('M 29,-52 l 9,1', INK, 3.5));
    }
    if (o.hat) t += g('translate(0,-134)', hatCap(o.hat));
    return s + (sit ? g('translate(-6,44)', t) : t);
  }

  function hatCap(color) {
    return U([
      '<path d="M -46,-84 C -46,-116 -20,-130 4,-126 C 28,-122 44,-106 44,-84 Z" fill="%F%" %S%/>',
      '<path d="M -54,-82 L 62,-82 L 62,-74 L -54,-74 Z" fill="%F%" %S%/>'
    ], color, 8);
  }

  /* ---------- petite fille / princesse ---------- */
  function girlHair(style, hair) {
    var d = shade(hair, -0.2);
    var cap = '<path d="M -46,-44 C -48,-88 -26,-104 0,-104 C 26,-104 48,-88 46,-44 C 40,-62 26,-72 8,-74 C -10,-84 -32,-72 -40,-52 Z" fill="%F%" %S%/>';
    if (style === 'braid') {
      return {
        back: U([cap,
          '<path d="M 38,-64 C 62,-56 66,-20 56,10 C 50,26 36,26 32,10 C 24,-18 24,-52 38,-64 Z" fill="%F%" %S%/>'], hair, 8),
        front: line('M 40,-40 q 12,10 6,22 M 42,-14 q 12,10 6,22', d, 3.5)
      };
    }
    if (style === 'twobraids') {
      return {
        back: U([cap,
          '<path d="M -42,-58 C -66,-46 -68,-6 -58,16 C -52,28 -40,26 -38,12 C -32,-16 -32,-48 -42,-58 Z" fill="%F%" %S%/>',
          '<path d="M 42,-58 C 66,-46 68,-6 58,16 C 52,28 40,26 38,12 C 32,-16 32,-48 42,-58 Z" fill="%F%" %S%/>'], hair, 8),
        front: ''
      };
    }
    if (style === 'long') {
      return {
        back: U([cap,
          '<path d="M -46,-56 C -62,-20 -60,16 -52,34 L 52,34 C 60,16 62,-20 46,-56 Z" fill="%F%" %S%/>'], hair, 8),
        front: ''
      };
    }
    // couettes (pigtails)
    return {
      back: U([cap,
        '<circle cx="-54" cy="-42" r="19" fill="%F%" %S%/>',
        '<circle cx="54" cy="-42" r="19" fill="%F%" %S%/>'], hair, 8),
      front: ''
    };
  }

  function girlHead(o) {
    var skin = o.skin, hair = o.hair, mood = o.mood || 'happy';
    var H = girlHair(o.hairstyle || 'pigtails', hair);
    var s = H.back;
    s += U(['<ellipse cx="0" cy="-46" rx="42" ry="44" fill="%F%" %S%/>'], skin, 9);
    // frange
    s += U(['<path d="M -42,-52 C -44,-88 -24,-100 0,-100 C 24,-100 44,-88 42,-52 C 34,-70 20,-78 4,-76 C -14,-84 -34,-72 -42,-52 Z" fill="%F%" %S%/>'], hair, 8);
    s += H.front;
    if (mood === 'sleep') {
      s += line('M -24,-46 q 9,8 18,0', INK, 4) + line('M 6,-46 q 9,8 18,0', INK, 4);
    } else {
      var r = mood === 'wow' ? 8 : 6.5;
      s += '<circle cx="-15" cy="-48" r="' + r + '" fill="' + INK + '"/><circle cx="15" cy="-48" r="' + r + '" fill="' + INK + '"/>' +
        '<circle cx="-12.5" cy="-51" r="2.4" fill="#fff"/><circle cx="17.5" cy="-51" r="2.4" fill="#fff"/>';
    }
    s += '<circle cx="-28" cy="-30" r="8.5" fill="#f79cb0" opacity=".75"/><circle cx="28" cy="-30" r="8.5" fill="#f79cb0" opacity=".75"/>';
    if (mood === 'wow') s += '<ellipse cx="0" cy="-22" rx="8" ry="10" fill="#b8355c" stroke="' + INK + '" stroke-width="3.5"/>';
    else if (mood === 'sad') s += line('M -12,-18 q 12,-10 24,0', INK, 4);
    else s += line('M -14,-26 q 14,16 28,0', INK, 4.5);
    if (o.crown) {
      s += U(['<path d="M -26,-92 L -30,-118 L -12,-104 L 0,-124 L 12,-104 L 30,-118 L 26,-92 Z" fill="%F%" %S%/>'], o.crown, 7);
    }
    if (o.bows) {
      s += '<circle cx="-54" cy="-64" r="9" fill="' + o.bows + '" stroke="' + INK + '" stroke-width="3.5"/>' +
        '<circle cx="54" cy="-64" r="9" fill="' + o.bows + '" stroke="' + INK + '" stroke-width="3.5"/>';
    }
    return s;
  }

  function girlArms(pose, skin) {
    if (pose === 'wave') {
      return limb('M -26,-124 C -48,-116 -60,-104 -62,-90', skin, 12) +
        limb('M 26,-126 C 56,-136 80,-158 86,-182', skin, 12) +
        hand(-64, -86, skin, 10) + hand(90, -188, skin, 11);
    }
    if (pose === 'armsup' || pose === 'jump') {
      return limb('M -26,-124 C -56,-136 -80,-158 -86,-182', skin, 12) +
        limb('M 26,-124 C 56,-136 80,-158 86,-182', skin, 12) +
        hand(-90, -188, skin, 10) + hand(90, -188, skin, 10);
    }
    if (pose === 'point') {
      return limb('M -26,-124 C -48,-114 -58,-100 -60,-88', skin, 12) +
        limb('M 26,-126 C 54,-130 76,-138 96,-146', skin, 12) +
        hand(-62, -84, skin, 10) + hand(100, -148, skin, 10);
    }
    if (pose === 'hold') {
      return limb('M -26,-124 C -46,-120 -58,-112 -58,-100', skin, 12) +
        limb('M 26,-124 C 46,-120 58,-112 58,-100', skin, 12) +
        hand(-60, -96, skin, 10) + hand(60, -96, skin, 10);
    }
    if (pose === 'magic') {
      return limb('M -26,-124 C -52,-132 -72,-146 -80,-164', skin, 12) +
        limb('M 26,-126 C 52,-134 74,-150 82,-168', skin, 12) +
        hand(-84, -170, skin, 10) + hand(86, -174, skin, 10);
    }
    if (pose === 'swim') {
      return limb('M -26,-124 C -50,-134 -66,-132 -78,-126', skin, 12) +
        limb('M 26,-124 C 50,-134 66,-132 78,-126', skin, 12) +
        hand(-82, -124, skin, 10) + hand(82, -124, skin, 10);
    }
    if (pose === 'shrug') {
      return limb('M -26,-126 C -50,-132 -66,-126 -72,-116', skin, 12) +
        limb('M 26,-126 C 50,-132 66,-126 72,-116', skin, 12) +
        hand(-76, -114, skin, 10) + hand(76, -114, skin, 10);
    }
    return limb('M -26,-124 C -48,-116 -60,-104 -62,-90', skin, 12) +
      limb('M 26,-124 C 48,-116 60,-104 62,-90', skin, 12) +
      hand(-64, -86, skin, 10) + hand(64, -86, skin, 10);
  }

  function girlLegs(pose, skin) {
    if (pose === 'jump') {
      return limb('M -12,-58 C -24,-40 -38,-32 -48,-28', skin, 14) +
        limb('M 12,-58 C 24,-40 38,-34 48,-30', skin, 14) +
        '<ellipse cx="-52" cy="-26" rx="14" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4" transform="rotate(-25 -52 -26)"/>' +
        '<ellipse cx="52" cy="-28" rx="14" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4" transform="rotate(25 52 -28)"/>';
    }
    if (pose === 'run') {
      return limb('M -10,-58 C -22,-42 -32,-24 -34,-12', skin, 14) +
        limb('M 10,-58 C 20,-44 24,-28 22,-12', skin, 14) +
        '<ellipse cx="-38" cy="-9" rx="15" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4"/>' +
        '<ellipse cx="26" cy="-9" rx="15" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4"/>';
    }
    if (pose === 'sit') {
      return limb('M -6,-24 C 20,-24 40,-22 46,-6 C 49,4 50,16 50,26', skin, 14) +
        limb('M 6,-16 C 32,-16 54,-14 60,2 C 63,12 64,22 64,32', skin, 14) +
        '<ellipse cx="54" cy="30" rx="14" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4"/>' +
        '<ellipse cx="68" cy="36" rx="14" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4"/>';
    }
    if (pose === 'swim') return '';
    return limb('M -13,-58 L -13,-16', skin, 14) + limb('M 13,-58 L 13,-16', skin, 14) +
      '<ellipse cx="-15" cy="-11" rx="15" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4"/>' +
      '<ellipse cx="15" cy="-11" rx="15" ry="9" fill="' + SHOE + '" stroke="' + INK + '" stroke-width="4"/>';
  }

  function girl(o) {
    o = o || {};
    var skin = o.skin || '#f6cba6';
    var hair = o.hair || '#7b4a2d';
    var dress = o.dress || '#3ec9c9';
    var pose = o.pose || 'stand';
    var sit = pose === 'sit';
    var s = '';
    if (pose !== 'swim') s += girlLegs(pose, skin);
    var t = girlArms(pose, skin);
    t += U(['<path d="M -28,-138 C -34,-112 -46,-80 -50,-56 L 50,-56 C 46,-80 34,-112 28,-138 Z" fill="%F%" %S%/>'], dress, 9);
    if (o.trim) t += line('M -47,-68 L 47,-68', o.trim, 5);
    t += line('M -20,-136 q 20,16 40,0', shade(dress, -0.25), 4);
    t += g('translate(0,-130)', girlHead({
      skin: skin, hair: hair, hairstyle: o.hairstyle, mood: o.mood, crown: o.crown, bows: o.bows
    }));
    if (o.hat) t += g('translate(0,-130)', sunHat(o.hat));
    return s + (sit ? g('translate(-6,42)', t) : t);
  }

  function sunHat(color) {
    return U([
      '<ellipse cx="0" cy="-84" rx="66" ry="14" fill="%F%" %S%/>',
      '<path d="M -34,-84 C -34,-116 -18,-126 0,-126 C 18,-126 34,-116 34,-84 Z" fill="%F%" %S%/>'
    ], color, 8) + line('M -32,-92 q 32,10 64,0', shade(color, -0.3), 5);
  }

  /* ---------- mouton (Suzy) ---------- */
  function sheep(o) {
    o = o || {};
    var wool = '#fdfbf7', skin = '#efe6ea', dress = o.cloth || '#8ec9f0';
    var pose = o.pose || 'stand';
    var s = '';
    s += girlLegs(pose, skin);
    var t = girlArms(pose, skin);
    t += U(['<path d="M -28,-138 C -34,-112 -46,-80 -50,-56 L 50,-56 C 46,-80 34,-112 28,-138 Z" fill="%F%" %S%/>'], dress, 9);
    t += g('translate(0,-132)',
      U(['<ellipse cx="-16" cy="-56" rx="30" ry="28" fill="%F%" %S%/>',
        '<ellipse cx="16" cy="-64" rx="24" ry="22" fill="%F%" %S%/>',
        '<ellipse cx="-34" cy="-34" rx="22" ry="20" fill="%F%" %S%/>',
        '<ellipse cx="12" cy="-30" rx="26" ry="24" fill="%F%" %S%/>'], wool, 9) +
      U(['<ellipse cx="34" cy="-44" rx="26" ry="24" fill="%F%" %S%/>',
        '<ellipse cx="58" cy="-40" rx="14" ry="11" fill="%F%" %S%/>'], skin, 9) +
      '<ellipse cx="62" cy="-44" rx="3.5" ry="4.5" fill="' + INK + '"/><ellipse cx="66" cy="-37" rx="3.5" ry="4.5" fill="' + INK + '"/>' +
      '<circle cx="28" cy="-50" r="10" fill="#fff" stroke="' + INK + '" stroke-width="3"/>' +
      '<circle cx="46" cy="-52" r="10" fill="#fff" stroke="' + INK + '" stroke-width="3"/>' +
      '<circle cx="30" cy="-50" r="4.5" fill="' + INK + '"/><circle cx="48" cy="-52" r="4.5" fill="' + INK + '"/>' +
      line('M 30,-26 q 12,12 22,0', INK, 4));
    return s + (pose === 'sit' ? g('translate(-6,42)', t) : t);
  }

  /* ---------- bonhomme de neige ---------- */
  function snowman(o) {
    o = o || {};
    var s = U([
      '<ellipse cx="0" cy="-30" rx="34" ry="30" fill="%F%" %S%/>',
      '<ellipse cx="0" cy="-78" rx="26" ry="24" fill="%F%" %S%/>',
      '<ellipse cx="0" cy="-118" rx="24" ry="22" fill="%F%" %S%/>',
      '<ellipse cx="-3" cy="-138" rx="10" ry="8" fill="%F%" %S%/>'
    ], '#fdfcff', 9);
    s += '<circle cx="-9" cy="-122" r="6" fill="' + INK + '"/><circle cx="9" cy="-122" r="6" fill="' + INK + '"/>' +
      '<circle cx="-7" cy="-124" r="2" fill="#fff"/><circle cx="11" cy="-124" r="2" fill="#fff"/>';
    s += U(['<path d="M 0,-114 L 34,-108 L 0,-102 Z" fill="%F%" %S%/>'], '#ff8a3d', 6);
    s += line('M -12,-100 q 12,10 24,0', INK, 4);
    s += '<circle cx="0" cy="-84" r="4.5" fill="' + INK + '"/><circle cx="0" cy="-72" r="4.5" fill="' + INK + '"/>';
    s += line('M -25,-84 C -44,-90 -52,-102 -54,-112', '#8a5a3b', 6) + line('M -50,-104 l -12,-4 M -50,-104 l -6,-12', '#8a5a3b', 5);
    s += line('M 25,-84 C 44,-90 52,-102 54,-112', '#8a5a3b', 6) + line('M 50,-104 l 12,-4 M 50,-104 l 6,-12', '#8a5a3b', 5);
    s += '<path d="M -14,-142 q 6,-16 16,-8" fill="none" stroke="#4a7a3a" stroke-width="5" stroke-linecap="round"/>';
    return s;
  }

  /* ---------- dinosaure en peluche ---------- */
  function dino(o) {
    o = o || {};
    var c = o.color || '#6fc46f';
    var s = U([
      '<ellipse cx="0" cy="-26" rx="28" ry="22" fill="%F%" %S%/>',
      '<ellipse cx="24" cy="-52" rx="18" ry="15" fill="%F%" %S%/>',
      '<path d="M -26,-24 C -50,-20 -56,-4 -44,2 C -40,-8 -32,-12 -22,-14 Z" fill="%F%" %S%/>'
    ], c, 8);
    s += '<circle cx="28" cy="-56" r="4.5" fill="' + INK + '"/>';
    s += line('M -8,-46 l 6,-10 l 6,10 M 4,-50 l 6,-10 l 6,10', shade(c, -0.3), 5);
    s += line('M -12,-6 l 0,10 M 12,-6 l 0,10', c, 8);
    return s;
  }

  /* ============================================================
     ACCESSOIRES & DÉCORS
     ============================================================ */

  var P = {};

  P.sun = function (o) {
    var c = o.color || '#ffd93d', r = 46;
    var rays = '', i;
    for (i = 0; i < 12; i++) {
      var a = i * Math.PI / 6;
      rays += line('M ' + (Math.cos(a) * (r + 12)).toFixed(1) + ',' + (Math.sin(a) * (r + 12)).toFixed(1) +
        ' L ' + (Math.cos(a) * (r + 26)).toFixed(1) + ',' + (Math.sin(a) * (r + 26)).toFixed(1), c, 7);
    }
    return rays + '<circle cx="0" cy="0" r="' + r + '" fill="' + c + '"/>';
  };

  P.moon = function () {
    return '<path d="M 18,-34 A 38,38 0 1 0 18,34 A 30,30 0 1 1 18,-34 Z" fill="#fff7d6"/>';
  };

  P.cloud = function (o) {
    return U(['<ellipse cx="-34" cy="4" rx="34" ry="24" fill="%F%" %S%/>',
      '<ellipse cx="4" cy="-10" rx="40" ry="30" fill="%F%" %S%/>',
      '<ellipse cx="42" cy="6" rx="30" ry="22" fill="%F%" %S%/>'], o.color || '#ffffff', 0);
  };

  P.palm = function () {
    var s = line('M 0,0 C -8,-50 -6,-90 -14,-134', '#a9773f', 14);
    var leaves = [[-1, -8], [1, -8], [-1, 12], [1, 12], [-1, 32], [1, 32]];
    var out = '';
    for (var i = 0; i < leaves.length; i++) {
      var f = leaves[i][0], rot = leaves[i][1];
      out += g('translate(-14,-134) scale(' + f + ',1) rotate(' + rot + ')',
        U(['<path d="M 0,0 C 30,-22 66,-20 84,-2 C 62,-6 34,4 0,10 Z" fill="%F%" %S%/>'], '#4faa5a', 7));
    }
    return s + out + U(['<circle cx="-14" cy="-128" r="9" fill="%F%" %S%/>',
      '<circle cx="-2" cy="-124" r="9" fill="%F%" %S%/>'], '#c98a3f', 5);
  };

  P.parasol = function (o) {
    var c1 = o.color || '#ff5c8a', c2 = '#fffdf5';
    var s = line('M 0,0 L 6,-120', '#c9a26b', 8);
    var arcs = '';
    for (var i = -3; i <= 2; i++) {
      var x0 = i * 30, x1 = (i + 1) * 30;
      arcs += '<path d="M ' + x0 + ',-118 Q ' + ((x0 + x1) / 2) + ',-150 ' + x1 + ',-118 L ' + x1 + ',-118 Z" fill="none"/>';
    }
    s += U(['<path d="M -96,-116 C -96,-176 96,-176 96,-116 Z" fill="%F%" %S%/>'], c1, 8);
    s += '<path d="M -60,-146 C -46,-172 -14,-176 -2,-172 L -2,-118 L -46,-118 Z" fill="' + c2 + '"/>' +
      '<path d="M 30,-160 C 48,-152 62,-138 66,-118 L 30,-118 Z" fill="' + c2 + '"/>' +
      '<path d="M -96,-116 C -96,-176 96,-176 96,-116" fill="none" stroke="' + INK + '" stroke-width="5"/>' +
      line('M -96,-116 L 96,-116', INK, 5);
    return s;
  };

  P.ball = function (o) {
    var c = o.color || '#ff5c5c', r = o.r || 30;
    return '<circle cx="0" cy="' + (-r) + '" r="' + r + '" fill="#fffdf5" stroke="' + INK + '" stroke-width="5"/>' +
      '<path d="M 0,' + (-2 * r) + ' C ' + (r * 0.7) + ',' + (-r * 1.4) + ' ' + (r * 0.7) + ',' + (-r * 0.6) + ' 0,0" fill="' + c + '" opacity=".95"/>' +
      '<path d="M 0,' + (-2 * r) + ' C ' + (-r * 0.7) + ',' + (-r * 1.4) + ' ' + (-r * 0.7) + ',' + (-r * 0.6) + ' 0,0" fill="#ffd93d" opacity=".95"/>' +
      '<circle cx="0" cy="' + (-r) + '" r="' + r + '" fill="none" stroke="' + INK + '" stroke-width="5"/>';
  };

  P.sandcastle = function (o) {
    var c = o.color || '#f0cf94', d = shade(c, -0.18);
    var s = U([
      '<path d="M -90,0 L -90,-54 L -54,-54 L -54,0 Z" fill="%F%" %S%/>',
      '<path d="M -58,0 L -58,-40 L 58,-40 L 58,0 Z" fill="%F%" %S%/>',
      '<path d="M 54,0 L 54,-54 L 90,-54 L 90,0 Z" fill="%F%" %S%/>',
      '<path d="M -26,0 L -26,-84 L 26,-84 L 26,0 Z" fill="%F%" %S%/>',
      '<path d="M -90,-54 l 0,-12 l 12,0 l 0,12 M -66,-54 l 0,-12 l 12,0 l 0,12" fill="%F%" %S%/>',
      '<path d="M 54,-54 l 0,-12 l 12,0 l 0,12 M 78,-54 l 0,-12 l 12,0 l 0,12" fill="%F%" %S%/>',
      '<path d="M -26,-84 l 0,-12 l 12,0 l 0,12 M -2,-84 l 0,-12 l 12,0 l 0,12" fill="%F%" %S%/>'
    ], c, 8);
    s += '<path d="M -14,0 L -14,-26 A 14,14 0 0 1 14,-26 L 14,0 Z" fill="' + d + '" stroke="' + INK + '" stroke-width="5"/>';
    s += line('M 0,-96 L 0,-124', '#8a6a4a', 4) + '<path d="M 0,-124 L 40,-114 L 0,-104 Z" fill="#ff5c8a" stroke="' + INK + '" stroke-width="4"/>';
    return s;
  };

  P.bucket = function (o) {
    var c = o.color || '#ff5c8a';
    return U(['<path d="M -24,-44 L 24,-44 L 18,0 L -18,0 Z" fill="%F%" %S%/>'], c, 8) +
      line('M -24,-44 C -12,-70 12,-70 24,-44', shade(c, -0.3), 5) +
      P.spade({ color: '#ffd93d', x: 0 });
  };

  P.spade = function (o) {
    var c = o.color || '#ffd93d';
    return g('translate(26,-10) rotate(18)', line('M 0,0 L 0,-56', c, 7) +
      U(['<path d="M -14,0 L 14,0 L 10,26 L -10,26 Z" fill="%F%" %S%/>'], c, 7));
  };

  P.starfish = function (o) {
    var c = o.color || '#ff9f5c', pts = '', i;
    for (i = 0; i < 10; i++) {
      var a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 9 : 24;
      pts += (Math.cos(a) * r).toFixed(1) + ',' + (Math.sin(a) * r).toFixed(1) + ' ';
    }
    return '<polygon points="' + pts + '" fill="' + c + '" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/>';
  };

  P.shell = function (o) {
    var c = o.color || '#ffd9e2';
    return U(['<path d="M 0,0 C -26,0 -30,-26 0,-34 C 30,-26 26,0 0,0 Z" fill="%F%" %S%/>'], c, 6) +
      line('M 0,-2 L 0,-32 M -10,-4 L -5,-30 M 10,-4 L 5,-30', shade(c, -0.28), 3);
  };

  P.seagull = function () {
    return line('M -22,0 q 11,-14 22,0 q 11,-14 22,0', INK, 4);
  };

  P.crab = function (o) {
    var c = o.color || '#ff6b5c';
    return U(['<ellipse cx="0" cy="-14" rx="26" ry="18" fill="%F%" %S%/>',
      '<path d="M -32,-24 C -46,-34 -44,-48 -32,-46 C -22,-44 -22,-32 -26,-26 Z" fill="%F%" %S%/>',
      '<path d="M 32,-24 C 46,-34 44,-48 32,-46 C 22,-44 22,-32 26,-26 Z" fill="%F%" %S%/>'], c, 7) +
      '<circle cx="-9" cy="-22" r="5" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/>' +
      '<circle cx="9" cy="-22" r="5" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/>' +
      '<circle cx="-9" cy="-22" r="2.2" fill="' + INK + '"/><circle cx="9" cy="-22" r="2.2" fill="' + INK + '"/>' +
      line('M -18,-2 l -8,8 M 0,-2 l 0,10 M 18,-2 l 8,8', c, 5);
  };

  P.towel = function (o) {
    var c = o.color || '#61c9e8';
    return U(['<path d="M -80,0 L -74,-26 L 74,-26 L 80,0 Z" fill="%F%" %S%/>'], c, 7) +
      line('M -60,-24 L -56,-2 M -20,-24 L -18,-2 M 20,-24 L 20,-2 M 58,-24 L 60,-2', shade(c, -0.25), 6);
  };

  P.icecream = function (o) {
    var c = o.color || '#ff9ec4', c2 = o.color2 || '#fff1a8';
    return U(['<path d="M -18,-30 L 18,-30 L 0,16 Z" fill="%F%" %S%/>'], '#e0a860', 6) +
      U(['<circle cx="-10" cy="-42" r="17" fill="%F%" %S%/>'], c, 6) +
      U(['<circle cx="11" cy="-46" r="16" fill="%F%" %S%/>'], c2, 6) +
      U(['<circle cx="0" cy="-66" r="15" fill="%F%" %S%/>'], '#a97ce0', 6) +
      '<circle cx="-3" cy="-80" r="5" fill="#ff5c5c" stroke="' + INK + '" stroke-width="3"/>';
  };

  P.watermelon = function () {
    return U(['<path d="M -46,0 A 46,46 0 0 1 46,0 Z" fill="%F%" %S%/>'], '#ff6b7d', 7) +
      '<path d="M -46,0 A 46,46 0 0 0 46,0 Z" fill="none"/>' +
      line('M -46,0 L 46,0', '#8fd45c', 9) +
      '<circle cx="-20" cy="-16" r="3.5" fill="' + INK + '"/><circle cx="4" cy="-24" r="3.5" fill="' + INK + '"/>' +
      '<circle cx="24" cy="-14" r="3.5" fill="' + INK + '"/>';
  };

  P.float = function (o) {
    var c = o.color || '#ff8a5c';
    return '<circle cx="0" cy="-34" r="34" fill="' + c + '" stroke="' + INK + '" stroke-width="6"/>' +
      '<path d="M -34,-34 a 34,34 0 0 1 34,-34 l 0,0 a 34,34 0 0 1 0,0 Z" fill="#fffdf5"/>' +
      '<path d="M 0,-68 A 34,34 0 0 1 34,-34 L 0,-34 Z" fill="#fffdf5"/>' +
      '<path d="M -34,-34 A 34,34 0 0 1 0,-68 L 0,-34 Z" fill="#fffdf5"/>' +
      '<circle cx="0" cy="-34" r="34" fill="none" stroke="' + INK + '" stroke-width="6"/>' +
      '<circle cx="0" cy="-34" r="13" fill="#bfe8f7" stroke="' + INK + '" stroke-width="5"/>';
  };

  P.tent = function (o) {
    var c = o.color || '#f2a03d';
    var s = U(['<path d="M 0,-130 L 96,0 L -96,0 Z" fill="%F%" %S%/>'], c, 9);
    s += '<path d="M 0,-124 L 40,0 L -40,0 Z" fill="' + shade(c, -0.35) + '" stroke="' + INK + '" stroke-width="5"/>';
    s += line('M 0,-124 L 0,0', INK, 4);
    s += line('M -96,0 L -118,-16 M 96,0 L 118,-16', INK, 4);
    return s;
  };

  P.campfire = function () {
    var s = line('M -44,-6 L 44,-18 M -44,-18 L 44,-6', '#8a5a3b', 11);
    s += U(['<path d="M 0,-96 C 26,-70 30,-46 20,-28 C 14,-16 -14,-16 -20,-28 C -30,-46 -26,-70 0,-96 Z" fill="%F%" %S%/>'], '#ff8a1f', 7);
    s += '<path d="M 0,-66 C 12,-50 14,-38 8,-30 C 4,-24 -4,-24 -8,-30 C -14,-38 -12,-50 0,-66 Z" fill="#ffd93d"/>';
    return s;
  };

  P.log = function () {
    return U(['<rect x="-56" y="-24" width="112" height="24" rx="12" fill="%F%" %S%/>'], '#a9773f', 7) +
      '<ellipse cx="56" cy="-12" rx="9" ry="12" fill="#c99a5f" stroke="' + INK + '" stroke-width="4"/>';
  };

  P.tree = function (o) {
    var c = o.color || '#4faa5a';
    return line('M 0,0 L 0,-70', '#8a5a3b', 16) +
      U(['<circle cx="-34" cy="-96" r="38" fill="%F%" %S%/>',
        '<circle cx="24" cy="-108" r="42" fill="%F%" %S%/>',
        '<circle cx="0" cy="-72" r="36" fill="%F%" %S%/>',
        '<circle cx="44" cy="-72" r="30" fill="%F%" %S%/>'], c, 9);
  };

  P.pine = function (o) {
    var c = o.color || '#2f6b52';
    return line('M 0,0 L 0,-30', '#6b4a33', 12) +
      U(['<path d="M 0,-140 L 34,-86 L -34,-86 Z" fill="%F%" %S%/>',
        '<path d="M 0,-112 L 44,-52 L -44,-52 Z" fill="%F%" %S%/>',
        '<path d="M 0,-80 L 54,-22 L -54,-22 Z" fill="%F%" %S%/>'], c, 8);
  };

  P.snowpine = function () {
    return P.pine({ color: '#2f6b52' }) +
      '<path d="M 0,-140 L 22,-105 L -22,-105 Z" fill="#fdfcff"/>' +
      '<path d="M 0,-112 L 28,-74 L -28,-74 Z" fill="#fdfcff" opacity=".9"/>';
  };

  P.bush = function (o) {
    return U(['<ellipse cx="-24" cy="-14" rx="28" ry="22" fill="%F%" %S%/>',
      '<ellipse cx="12" cy="-24" rx="32" ry="26" fill="%F%" %S%/>',
      '<ellipse cx="40" cy="-12" rx="24" ry="20" fill="%F%" %S%/>'], o.color || '#5cb86a', 8);
  };

  P.flower = function (o) {
    var c = o.color || '#ff7ab8', s = line('M 0,0 L 0,-26', '#4faa5a', 4), i;
    for (i = 0; i < 5; i++) {
      var an = i * 72 * Math.PI / 180;
      s += '<circle cx="' + (Math.cos(an) * 10).toFixed(1) + '" cy="' + (-26 + Math.sin(an) * 10).toFixed(1) + '" r="9" fill="' + c + '" stroke="' + INK + '" stroke-width="3"/>';
    }
    s += '<circle cx="0" cy="-26" r="6" fill="#ffd93d" stroke="' + INK + '" stroke-width="3"/>';
    return s;
  };

  P.butterfly = function (o) {
    var c = o.color || '#ffb85c';
    return U(['<ellipse cx="-14" cy="-8" rx="14" ry="11" fill="%F%" %S%/>',
      '<ellipse cx="14" cy="-8" rx="14" ry="11" fill="%F%" %S%/>',
      '<ellipse cx="-11" cy="6" rx="10" ry="8" fill="%F%" %S%/>',
      '<ellipse cx="11" cy="6" rx="10" ry="8" fill="%F%" %S%/>'], c, 6) +
      '<ellipse cx="0" cy="-1" rx="4" ry="14" fill="' + INK + '"/>' +
      line('M -2,-14 l -8,-10 M 2,-14 l 8,-10', INK, 3);
  };

  /* ficelle : relie un point à un autre (cerf-volant, ballon…) */
  P.tether = function (o) {
    var dx = o.dx || 0, dy = o.dy || 0;
    var qx = o.qx !== undefined ? o.qx : dx * 0.35;
    var qy = o.qy !== undefined ? o.qy : dy * 0.15;
    return line('M 0,0 Q ' + qx + ',' + qy + ' ' + dx + ',' + dy, o.color || INK, o.w || 3);
  };

  P.kite = function (o) {
    var c = o.color || '#e8436e';
    return U(['<path d="M 0,-46 L 32,0 L 0,46 L -32,0 Z" fill="%F%" %S%/>'], c, 7) +
      '<path d="M 0,-46 L 32,0 L 0,0 Z" fill="' + shade(c, 0.35) + '"/>' +
      '<path d="M 0,46 L -32,0 L 0,0 Z" fill="' + shade(c, 0.35) + '"/>' +
      line('M 0,-46 L 0,46 M -32,0 L 32,0', INK, 3.5) +
      line('M 0,46 c -14,14 14,26 0,40 c -14,14 14,26 0,40', INK, 3.5);
  };

  P.boat = function (o) {
    var c = o.color || '#e8436e';
    return U(['<path d="M -70,-20 L 70,-20 L 50,16 L -50,16 Z" fill="%F%" %S%/>'], c, 8) +
      line('M 0,-20 L 0,-116', '#a9773f', 7) +
      U(['<path d="M 6,-112 L 62,-30 L 6,-30 Z" fill="%F%" %S%/>'], '#fffdf5', 7) +
      U(['<path d="M -6,-104 L -50,-32 L -6,-32 Z" fill="%F%" %S%/>'], '#ffd93d', 7);
  };

  P.car = function (o) {
    var c = o.color || '#e8436e';
    var s = U(['<path d="M -110,-40 L -78,-88 L 66,-88 L 100,-40 Z" fill="%F%" %S%/>',
      '<rect x="-120" y="-46" width="230" height="46" rx="20" fill="%F%" %S%/>'], c, 9);
    s += '<path d="M -72,-80 L -8,-80 L -8,-48 L -92,-48 Z" fill="#bfe8f7" stroke="' + INK + '" stroke-width="5"/>' +
      '<path d="M 4,-80 L 60,-80 L 88,-48 L 4,-48 Z" fill="#bfe8f7" stroke="' + INK + '" stroke-width="5"/>';
    s += '<circle cx="-64" cy="2" r="26" fill="#4a3b42" stroke="' + INK + '" stroke-width="5"/>' +
      '<circle cx="56" cy="2" r="26" fill="#4a3b42" stroke="' + INK + '" stroke-width="5"/>' +
      '<circle cx="-64" cy="2" r="10" fill="#cfd6da"/><circle cx="56" cy="2" r="10" fill="#cfd6da"/>';
    return s;
  };

  P.suitcase = function (o) {
    var c = o.color || '#c96b3d';
    return U(['<rect x="-40" y="-52" width="80" height="52" rx="8" fill="%F%" %S%/>'], c, 7) +
      line('M -14,-52 q 14,-18 28,0', INK, 5) + line('M -40,-30 L 40,-30', shade(c, -0.3), 5);
  };

  P.marshmallow = function () {
    return line('M 0,0 L 70,-40', '#a9773f', 5) +
      '<rect x="64" y="-56" width="18" height="18" rx="5" fill="#fff6ec" stroke="' + INK + '" stroke-width="3.5"/>' +
      '<rect x="76" y="-64" width="18" height="18" rx="5" fill="#ffe8d0" stroke="' + INK + '" stroke-width="3.5"/>';
  };

  P.hedgehog = function (o) {
    var c = o.color || '#8a6a4a';
    var spikes = '<path d="M -44,-2 L -38,-30 L -31,-15 L -25,-38 L -18,-21 L -10,-46 L -3,-29 L 4,-50 ' +
      'L 12,-31 L 19,-45 L 26,-29 L 33,-39 L 38,-19 L 42,-25 L 42,-2 Z" fill="%F%" %S%/>';
    var body = '<path d="M -42,-2 C -44,-24 -20,-36 4,-34 C 28,-32 42,-18 42,-2 Z" fill="%F%" %S%/>';
    var s = U([spikes, body], c, 7);
    s += U(['<path d="M 30,-2 C 30,-22 44,-30 58,-26 C 70,-22 74,-12 72,-2 Z" fill="%F%" %S%/>'], '#f2ddc2', 7);
    s += '<circle cx="52" cy="-18" r="4.2" fill="' + INK + '"/>' +
      '<ellipse cx="70" cy="-12" rx="5.5" ry="4.5" fill="' + INK + '"/>' +
      line('M 56,-6 q 8,5 14,0', INK, 3);
    s += '<ellipse cx="-16" cy="0" rx="9" ry="5" fill="' + shade(c, -0.3) + '"/>' +
      '<ellipse cx="26" cy="0" rx="9" ry="5" fill="' + shade(c, -0.3) + '"/>';
    return s;
  };

  P.snowball = function (o) {
    var r = o.r || 14;
    return '<circle cx="0" cy="0" r="' + r + '" fill="#fdfcff" stroke="' + INK + '" stroke-width="4"/>' +
      '<circle cx="' + (-r * .3) + '" cy="' + (-r * .3) + '" r="' + (r * .3) + '" fill="#e8f4fb"/>';
  };

  P.star = function (o) {
    var r = o.r || 9, c = o.color || '#fff7d6', pts = '', i;
    for (i = 0; i < 10; i++) {
      var a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r;
      pts += (Math.cos(a) * rr).toFixed(1) + ',' + (Math.sin(a) * rr).toFixed(1) + ' ';
    }
    return '<polygon points="' + pts + '" fill="' + c + '"/>';
  };

  P.snowflake = function (o) {
    var r = o.r || 14, c = o.color || '#eaf6ff', s = '', i;
    for (i = 0; i < 6; i++) {
      s += g('rotate(' + (i * 60) + ')', line('M 0,0 L 0,' + (-r) + ' M 0,' + (-r * 0.6) + ' l -5,-5 M 0,' + (-r * 0.6) + ' l 5,-5', c, 3));
    }
    return s;
  };

  P.rock = function (o) {
    return U(['<path d="M -34,0 C -40,-22 -20,-38 0,-36 C 22,-34 36,-20 32,0 Z" fill="%F%" %S%/>'], o.color || '#b9b3ae', 7);
  };

  P.fish = function (o) {
    var c = o.color || '#ffb85c';
    return U(['<ellipse cx="0" cy="0" rx="26" ry="16" fill="%F%" %S%/>',
      '<path d="M 22,0 L 44,-16 L 44,16 Z" fill="%F%" %S%/>'], c, 6) +
      '<circle cx="-12" cy="-4" r="3.5" fill="' + INK + '"/>';
  };

  P.slide = function (o) {
    var c = o.color || '#f2803d';
    var s = line('M -78,0 L -78,-190 M -30,0 L -30,-190', '#8a97a8', 11);
    s += line('M -78,-40 L -30,-40 M -78,-78 L -30,-78 M -78,-116 L -30,-116 M -78,-154 L -30,-154', '#8a97a8', 8);
    s += U(['<path d="M -92,-196 C -30,-186 10,-120 92,-42 L 150,-16 L 150,18 L 74,-8 C -12,-92 -60,-154 -104,-166 Z" fill="%F%" %S%/>'], c, 9);
    s += line('M -86,-186 C -26,-172 16,-108 96,-30', shade(c, -0.3), 5);
    s += line('M -100,-196 L -100,-160 M -22,-196 L -22,-176', '#8a97a8', 9);
    return s;
  };

  P.pool = function (o) {
    var c = o.color || '#5cc8e8';
    return U(['<ellipse cx="0" cy="0" rx="240" ry="66" fill="%F%" %S%/>'], '#f2e2c4', 9) +
      '<ellipse cx="0" cy="4" rx="208" ry="52" fill="' + c + '" stroke="' + INK + '" stroke-width="6"/>' +
      line('M -140,-10 q 20,-10 40,0 q 20,10 40,0', '#ffffff', 4, 'opacity=".65"') +
      line('M 30,20 q 20,-10 40,0 q 20,10 40,0', '#ffffff', 4, 'opacity=".65"') +
      line('M -60,34 q 20,-10 40,0 q 20,10 40,0', '#ffffff', 4, 'opacity=".55"');
  };

  P.sled = function (o) {
    var c = o.color || '#c9502f';
    return U(['<rect x="-56" y="-26" width="112" height="18" rx="8" fill="%F%" %S%/>'], c, 7) +
      line('M -50,-6 L 50,-6 M -50,-6 c -12,0 -14,-10 -6,-14 M 50,-6 c 12,0 14,-10 6,-14', '#8a97a8', 6);
  };

  P.castleIce = function () {
    var c = '#cfeeff', d = '#8fd4ee';
    var s = U([
      '<path d="M -130,0 L -130,-130 L -78,-130 L -78,0 Z" fill="%F%" %S%/>',
      '<path d="M 78,0 L 78,-130 L 130,-130 L 130,0 Z" fill="%F%" %S%/>',
      '<path d="M -84,0 L -84,-170 L 84,-170 L 84,0 Z" fill="%F%" %S%/>',
      '<path d="M -46,-170 L -46,-232 L 46,-232 L 46,-170 Z" fill="%F%" %S%/>',
      '<path d="M -104,-130 L -104,-190 L -52,-130 Z" fill="%F%" %S%/>',
      '<path d="M 104,-130 L 104,-190 L 52,-130 Z" fill="%F%" %S%/>',
      '<path d="M -60,-232 L 0,-330 L 60,-232 Z" fill="%F%" %S%/>',
      '<path d="M -100,-170 L -84,-214 L -68,-170 Z" fill="%F%" %S%/>',
      '<path d="M 100,-170 L 84,-214 L 68,-170 Z" fill="%F%" %S%/>'
    ], c, 9);
    s += line('M -46,-232 L -46,-170 M 46,-232 L 46,-170 M -84,-170 L -84,0 M 84,-170 L 84,0', d, 4);
    s += '<path d="M -22,0 L -22,-64 A 22,22 0 0 1 22,-64 L 22,0 Z" fill="' + d + '" stroke="' + INK + '" stroke-width="5"/>';
    s += '<rect x="-70" y="-142" width="26" height="40" rx="13" fill="' + d + '" stroke="' + INK + '" stroke-width="4"/>' +
      '<rect x="44" y="-142" width="26" height="40" rx="13" fill="' + d + '" stroke="' + INK + '" stroke-width="4"/>' +
      '<rect x="-13" y="-216" width="26" height="40" rx="13" fill="' + d + '" stroke="' + INK + '" stroke-width="4"/>';
    s += line('M 0,-330 L 0,-352', INK, 4) + '<path d="M 0,-352 L 34,-343 L 0,-334 Z" fill="#7fd8f0" stroke="' + INK + '" stroke-width="4"/>';
    return s;
  };

  P.house = function (o) {
    var c = o.color || '#fff1d6', roof = o.roof || '#e8746b';
    return U(['<rect x="-90" y="-120" width="180" height="120" fill="%F%" %S%/>'], c, 9) +
      U(['<path d="M -106,-118 L 0,-190 L 106,-118 Z" fill="%F%" %S%/>'], roof, 9) +
      '<path d="M -22,0 L -22,-62 A 22,22 0 0 1 22,-62 L 22,0 Z" fill="#c98a3f" stroke="' + INK + '" stroke-width="5"/>' +
      '<rect x="-74" y="-96" width="40" height="38" rx="6" fill="#bfe8f7" stroke="' + INK + '" stroke-width="5"/>' +
      '<rect x="36" y="-96" width="40" height="38" rx="6" fill="#bfe8f7" stroke="' + INK + '" stroke-width="5"/>';
  };

  P.aurora = function () {
    var id = 'au' + (++uid);
    return '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#7ef2c8" stop-opacity=".0"/>' +
      '<stop offset="45%" stop-color="#7ef2c8" stop-opacity=".55"/>' +
      '<stop offset="100%" stop-color="#a98cf0" stop-opacity=".0"/></linearGradient></defs>' +
      '<path d="M -400,-40 C -260,-150 -120,20 40,-110 C 180,-220 300,-30 420,-120 L 420,120 L -400,120 Z" fill="url(#' + id + ')"/>';
  };

  P.sparkle = function (o) {
    var c = o.color || '#eaf6ff', r = o.r || 16;
    return '<path d="M 0,' + (-r) + ' Q 3,-3 ' + r + ',0 Q 3,3 0,' + r + ' Q -3,3 ' + (-r) + ',0 Q -3,-3 0,' + (-r) + ' Z" fill="' + c + '"/>';
  };

  P.splash = function (o) {
    var c = o.color || '#cfeeff';
    var s = U(['<path d="M -64,8 C -58,-10 -44,-20 -38,-46 C -30,-20 -20,-16 -14,-42 ' +
      'C -6,-14 4,-14 10,-48 C 18,-16 30,-18 36,-44 C 44,-18 56,-10 64,8 Z" fill="%F%" %S%/>'], c, 6);
    s += '<circle cx="-56" cy="-58" r="7" fill="' + c + '" stroke="' + INK + '" stroke-width="3"/>' +
      '<circle cx="-6" cy="-66" r="6" fill="' + c + '" stroke="' + INK + '" stroke-width="3"/>' +
      '<circle cx="44" cy="-62" r="8" fill="' + c + '" stroke="' + INK + '" stroke-width="3"/>' +
      '<circle cx="22" cy="-84" r="5" fill="' + c + '" stroke="' + INK + '" stroke-width="3"/>';
    return s;
  };

  P.lantern = function (o) {
    var c = o.color || '#ffd07a';
    return '<circle cx="0" cy="0" r="20" fill="' + c + '" stroke="' + INK + '" stroke-width="4"/>' +
      '<circle cx="0" cy="0" r="20" fill="none" stroke="' + shade(c, -0.3) + '" stroke-width="2"/>' +
      line('M 0,-20 L 0,-34', INK, 3);
  };

  P.balloon = function (o) {
    var c = o.color || '#ff5c8a';
    return U(['<ellipse cx="0" cy="-30" rx="24" ry="30" fill="%F%" %S%/>'], c, 6) +
      line('M 0,0 c 8,14 -8,22 0,36', INK, 3);
  };

  P.mudpuddle = function () {
    return U(['<ellipse cx="0" cy="0" rx="90" ry="26" fill="%F%" %S%/>'], '#8a6a4a', 8) +
      '<ellipse cx="-24" cy="-4" rx="26" ry="7" fill="#a9805c" opacity=".7"/>';
  };

  P.wave = function (o) {
    var c = o.color || '#ffffff';
    return line('M -80,0 q 20,-16 40,0 q 20,16 40,0 q 20,-16 40,0', c, 5, 'opacity=".8"');
  };

  /* ============================================================
     DÉCORS
     ============================================================ */

  var SKY = {
    day: ['#7fd4ff', '#d9f4ff'],
    morning: ['#9fd8ff', '#ffe9c9'],
    sunset: ['#ff8a5c', '#ffd9a0'],
    night: ['#101f45', '#31477b'],
    snow: ['#a8d8f0', '#e6f6ff'],
    snownight: ['#101f45', '#2b4a86']
  };

  function skyRect(time) {
    var c = SKY[time] || SKY.day, id = 'sky' + (++uid);
    return '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="' + c[0] + '"/><stop offset="100%" stop-color="' + c[1] + '"/>' +
      '</linearGradient></defs><rect x="0" y="0" width="' + VW + '" height="' + VH + '" fill="url(#' + id + ')"/>';
  }

  function stars(n, maxY) {
    var s = '', i;
    for (i = 0; i < n; i++) {
      var x = ((i * 137) % 780) + 10;
      var y = ((i * 73) % (maxY || 260)) + 14;
      var r = (i % 3) ? 6 : 10;
      s += g('translate(' + x + ',' + y + ')', P.star({ r: r }));
    }
    return s;
  }

  var BG = {};

  BG.beach = function (s) {
    var time = s.time || 'day';
    var sand = time === 'sunset' ? '#f0c98f' : '#f7dfae';
    var sea = time === 'sunset' ? '#e8825c' : '#3fb0d8';
    var out = skyRect(time);
    if (time === 'night') out += stars(22, 220);
    if (time === 'sunset') out += g('translate(640,190)', P.sun({ color: '#ffdf6b' }));
    else if (time !== 'night') out += g('translate(690,96)', P.sun({}));
    else out += g('translate(690,96)', P.moon({}));
    if (time !== 'night') {
      out += g('translate(150,110) scale(1.1)', P.cloud({})) + g('translate(430,70) scale(.8)', P.cloud({}));
    }
    out += g('translate(160,150) scale(1.2)', P.seagull({})) + g('translate(300,110)', P.seagull({}));
    // mer
    out += '<rect x="0" y="250" width="' + VW + '" height="120" fill="' + sea + '"/>';
    out += g('translate(120,286)', P.wave({})) + g('translate(420,306)', P.wave({})) + g('translate(690,282)', P.wave({}));
    // sable
    out += '<path d="M 0,352 C 180,336 300,372 460,356 C 600,342 700,368 800,352 L 800,560 L 0,560 Z" fill="' + sand + '"/>';
    out += line('M 0,352 C 180,336 300,372 460,356 C 600,342 700,368 800,352', shade(sand, -0.16), 5);
    return out;
  };

  BG.sea = function (s) {
    var time = s.time || 'day';
    var out = skyRect(time);
    if (time !== 'night') out += g('translate(700,90)', P.sun({})) + g('translate(190,110) scale(.9)', P.cloud({}));
    out += '<rect x="0" y="300" width="' + VW + '" height="260" fill="#3fb0d8"/>';
    out += '<path d="M 0,300 q 40,-18 80,0 q 40,18 80,0 q 40,-18 80,0 q 40,18 80,0 q 40,-18 80,0 q 40,18 80,0 q 40,-18 80,0 q 40,18 80,0 q 40,-18 80,0 q 40,18 80,0 L 800,340 L 0,340 Z" fill="#5ec6e8"/>';
    out += g('translate(200,400)', P.wave({})) + g('translate(560,460)', P.wave({})) + g('translate(360,520)', P.wave({}));
    return out;
  };

  BG.garden = function (s) {
    var time = s.time || 'day';
    var out = skyRect(time);
    if (time === 'night') out += stars(20, 200) + g('translate(690,96)', P.moon({}));
    else out += g('translate(700,90)', P.sun({})) + g('translate(180,110) scale(1)', P.cloud({})) + g('translate(470,74) scale(.7)', P.cloud({}));
    out += '<path d="M 0,330 C 160,306 320,344 470,326 C 620,308 720,336 800,322 L 800,560 L 0,560 Z" fill="#7ecb6a"/>';
    out += line('M 0,330 C 160,306 320,344 470,326 C 620,308 720,336 800,322', '#5aa94f', 5);
    out += '<rect x="0" y="392" width="800" height="168" fill="#8ed67a"/>';
    return out;
  };

  BG.hill = function (s) {
    var time = s.time || 'day';
    var out = skyRect(time);
    if (time !== 'night') out += g('translate(120,90)', P.sun({})) + g('translate(560,110) scale(1)', P.cloud({})) + g('translate(340,64) scale(.7)', P.cloud({}));
    out += '<path d="M -20,420 C 120,300 320,300 440,368 C 560,436 700,404 820,352 L 820,560 L -20,560 Z" fill="#8ed67a"/>';
    out += '<path d="M -20,470 C 160,400 340,470 520,436 C 660,410 740,440 820,420 L 820,560 L -20,560 Z" fill="#6fbf5c"/>';
    return out;
  };

  BG.camp = function (s) {
    var time = s.time || 'day';
    var out = skyRect(time);
    if (time === 'night') {
      out += stars(26, 250) + g('translate(120,96)', P.moon({}));
    } else {
      out += g('translate(690,96)', P.sun({})) + g('translate(200,110)', P.cloud({})) + g('translate(500,72) scale(.7)', P.cloud({}));
    }
    var far = time === 'night' ? '#1f3f5c' : '#8fc6a0';
    out += '<path d="M 0,330 L 120,230 L 220,330 L 340,240 L 460,330 L 600,236 L 740,330 L 800,300 L 800,400 L 0,400 Z" fill="' + far + '"/>';
    var grass = time === 'night' ? '#25543f' : '#7ecb6a';
    out += '<path d="M 0,352 C 200,336 400,372 600,352 C 700,342 760,360 800,352 L 800,560 L 0,560 Z" fill="' + grass + '"/>';
    return out;
  };

  BG.forest = function (s) {
    var time = s.time || 'day';
    var out = skyRect(time);
    if (time === 'night') out += stars(20, 220);
    var t = time === 'night' ? '#1f4a38' : '#3f8a5c';
    out += g('translate(80,380) scale(1.3)', P.pine({ color: t })) + g('translate(240,368) scale(1.05)', P.pine({ color: t })) +
      g('translate(620,384) scale(1.25)', P.pine({ color: t })) + g('translate(760,366)', P.pine({ color: t }));
    out += '<path d="M 0,372 C 200,356 400,392 600,372 C 700,362 760,380 800,372 L 800,560 L 0,560 Z" fill="' + (time === 'night' ? '#25543f' : '#7ecb6a') + '"/>';
    return out;
  };

  BG.snow = function (s) {
    var time = s.time === 'night' ? 'snownight' : 'snow';
    var out = skyRect(time);
    if (s.time === 'night') {
      out += stars(28, 260);
      if (s.aurora) out += g('translate(400,150)', P.aurora({}));
      out += g('translate(120,90)', P.moon({}));
    }
    else out += g('translate(690,90)', P.sun({ color: '#fff0a8' })) + g('translate(180,110) scale(.9)', P.cloud({ color: '#ffffff' }));
    out += '<path d="M 0,340 L 130,190 L 250,340 Z" fill="#7ba6c9"/><path d="M 130,190 L 178,250 L 96,250 Z" fill="#fdfcff"/>';
    out += '<path d="M 240,350 L 420,150 L 600,350 Z" fill="#8fb8d8"/><path d="M 420,150 L 484,232 L 356,232 Z" fill="#fdfcff"/>';
    out += '<path d="M 560,346 L 690,200 L 810,346 Z" fill="#7ba6c9"/><path d="M 690,200 L 736,258 L 646,258 Z" fill="#fdfcff"/>';
    out += '<path d="M 0,346 C 200,326 380,366 560,346 C 680,332 740,356 800,344 L 800,560 L 0,560 Z" fill="#f2fbff"/>';
    out += line('M 0,346 C 200,326 380,366 560,346 C 680,332 740,356 800,344', '#cfe6f2', 5);
    out += '<path d="M 0,430 C 180,410 340,446 520,428 C 660,414 740,436 800,424 L 800,560 L 0,560 Z" fill="#ffffff"/>';
    return out;
  };

  BG.village = function (s) {
    var time = s.time || 'day';
    var out = skyRect(time);
    if (time === 'night') out += stars(18, 200) + g('translate(680,90)', P.moon({}));
    else out += g('translate(700,86)', P.sun({})) + g('translate(220,104)', P.cloud({}));
    out += g('translate(140,340) scale(.62)', P.house({ roof: '#e8746b' })) +
      g('translate(660,342) scale(.58)', P.house({ roof: '#7aa9e8', color: '#fdf3e2' }));
    out += g('translate(400,340) scale(.72)', P.tree({}));
    out += '<path d="M 0,340 L 800,340 L 800,560 L 0,560 Z" fill="#8ed67a"/>';
    out += '<path d="M 0,430 C 200,410 600,470 800,440 L 800,560 L 0,560 Z" fill="#d9cdbd"/>';
    return out;
  };

  BG.road = function (s) {
    var time = s.time || 'day';
    var out = skyRect(time);
    if (time !== 'night') out += g('translate(700,86)', P.sun({})) + g('translate(180,100)', P.cloud({})) + g('translate(450,66) scale(.7)', P.cloud({}));
    out += '<path d="M 0,320 C 140,250 300,270 420,320 C 540,368 680,300 800,318 L 800,420 L 0,420 Z" fill="#8fc6a0"/>';
    out += '<rect x="0" y="380" width="800" height="180" fill="#6fbf5c"/>';
    out += '<path d="M -40,560 L 260,392 L 560,392 L 860,560 Z" fill="#6b6470"/>';
    out += line('M 400,400 L 400,430 M 400,460 L 400,500 M 400,530 L 400,570', '#fff6d6', 8);
    return out;
  };

  BG.bedroom = function (s) {
    var out = '<rect x="0" y="0" width="800" height="560" fill="#f7d8e6"/>';
    out += '<rect x="0" y="400" width="800" height="160" fill="#c98a5f"/>';
    out += line('M 0,400 L 800,400', INK, 5);
    out += '<rect x="520" y="120" width="200" height="150" rx="12" fill="#152a52" stroke="' + INK + '" stroke-width="7"/>';
    out += g('translate(620,196)', stars(0) + P.star({ r: 12 }) + g('translate(-50,-30)', P.star({ r: 8 })) + g('translate(46,26)', P.star({ r: 7 })) + g('translate(30,-40)', P.moon({})));
    return out;
  };

  BG.plain = function (s) {
    return skyRect(s.time || 'day') + '<rect x="0" y="400" width="800" height="160" fill="#8ed67a"/>';
  };

  /* ============================================================
     BULLES DE BD
     ============================================================ */

  function wrapText(t, max) {
    var words = t.split(' '), lines = [], cur = '', i;
    for (i = 0; i < words.length; i++) {
      var cand = cur ? cur + ' ' + words[i] : words[i];
      if (cand.length > max && cur) { lines.push(cur); cur = words[i]; }
      else cur = cand;
    }
    if (cur) lines.push(cur);
    return lines;
  }

  function bubble(b) {
    var fs = b.fs || 25;
    var w = b.w || 250;
    var max = Math.max(6, Math.floor((w - 34) / (fs * 0.52)));
    var lines = wrapText(b.t, max);
    var lh = fs + 7;
    var h = lines.length * lh + 26;
    var x = b.x, y = b.y;
    var cx = x + w / 2;
    var tail;
    var tx = (b.tx !== undefined) ? b.tx : cx;
    var ty = (b.ty !== undefined) ? b.ty : y + h + 54;
    var think = b.think;
    var parts = ['<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (think ? 26 : 20) + '" fill="%F%" %S%/>'];
    if (!think) {
      var bx = Math.max(x + 20, Math.min(x + w - 46, tx - 14));
      parts.push('<path d="M ' + bx + ',' + (y + h - 10) + ' L ' + (bx + 32) + ',' + (y + h - 10) + ' L ' + tx + ',' + ty + ' Z" fill="%F%" %S%/>');
    } else {
      parts.push('<circle cx="' + (cx - 10) + '" cy="' + (y + h + 16) + '" r="12" fill="%F%" %S%/>');
      parts.push('<circle cx="' + (cx - 22) + '" cy="' + (y + h + 40) + '" r="7" fill="%F%" %S%/>');
    }
    var s = U(parts, b.fill || '#ffffff', 9);
    var ty0 = y + 18 + fs * 0.82;
    s += '<text x="' + cx + '" y="' + ty0 + '" text-anchor="middle" font-family="' + FONT + '" font-size="' + fs +
      '" font-weight="700" fill="' + INK + '">';
    for (var i = 0; i < lines.length; i++) {
      s += '<tspan x="' + cx + '" dy="' + (i === 0 ? 0 : lh) + '">' + esc(lines[i]) + '</tspan>';
    }
    s += '</text>';
    return s;
  }

  var FONT = "'Fredoka','Baloo 2','Comic Sans MS','Trebuchet MS',sans-serif";

  function esc(t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function sfx(o) {
    var fs = o.fs || 54, c = o.color || '#ffd93d';
    return '<text x="0" y="0" text-anchor="middle" font-family="' + FONT + '" font-size="' + fs +
      '" font-weight="800" fill="' + c + '" stroke="' + INK + '" stroke-width="7" stroke-linejoin="round" paint-order="stroke" transform="rotate(' + (o.rot || -8) + ')">' +
      esc(o.t) + '</text>';
  }

  /* ============================================================
     REGISTRE DES ÉLÉMENTS
     ============================================================ */

  var CHARS = {
    peppa: function (o) { return pig({ skin: '#f7a8c4', cloth: '#e8436e', pose: o.pose, mood: o.mood, hat: o.hat }); },
    george: function (o) { return pig({ skin: '#f7a8c4', cloth: '#5aa9e8', top: true, pose: o.pose, mood: o.mood, hat: o.hat }); },
    mummy: function (o) { return pig({ skin: '#f7a8c4', cloth: '#f2803d', pose: o.pose, mood: o.mood, hat: o.hat }); },
    daddy: function (o) { return pig({ skin: '#f7a8c4', cloth: '#6fbf5c', top: true, glasses: true, pose: o.pose, mood: o.mood, hat: o.hat }); },
    suzy: function (o) { return sheep({ pose: o.pose, mood: o.mood, cloth: '#8ec9f0' }); },
    livia: function (o) {
      return girl({
        skin: '#f6cba6', hair: '#6f4327', dress: o.dress || '#3ec9c9', hairstyle: o.hairstyle || 'pigtails',
        bows: '#ff5c8a', pose: o.pose, mood: o.mood, hat: o.hat, trim: '#fff1a8'
      });
    },
    liviaPrincess: function (o) {
      return girl({
        skin: '#f6cba6', hair: '#6f4327', dress: o.dress || '#a98cf0', hairstyle: o.hairstyle || 'twobraids',
        bows: '#ffd93d', pose: o.pose, mood: o.mood, crown: '#ffd93d', trim: '#ffe9c9'
      });
    },
    elsa: function (o) {
      return girl({
        skin: '#f7dcc4', hair: '#f2e7c9', dress: o.dress || '#7fd8f0', hairstyle: 'braid',
        pose: o.pose, mood: o.mood, trim: '#e6f6ff', crown: o.crown
      });
    },
    anna: function (o) {
      return girl({
        skin: '#f7d3b0', hair: '#c9622f', dress: o.dress || '#3f7f6b', hairstyle: 'twobraids',
        pose: o.pose, mood: o.mood, trim: '#a98cf0'
      });
    },
    olaf: function (o) { return snowman(o); },
    dino: function (o) { return dino(o); }
  };

  var ITEMS = {};
  (function () {
    var k;
    for (k in P) if (P.hasOwnProperty(k)) ITEMS[k] = P[k];
    for (k in CHARS) if (CHARS.hasOwnProperty(k)) ITEMS[k] = CHARS[k];
  })();

  /* ============================================================
     RENDU DE SCÈNE
     ============================================================ */

  function renderItems(list) {
    var out = '', i;
    if (!list) return '';
    for (i = 0; i < list.length; i++) {
      var it = list[i];
      var fn = ITEMS[it.t];
      if (!fn) continue;
      var sc = it.s === undefined ? 1 : it.s;
      var sx = it.flip ? -sc : sc;
      var rot = it.rot ? ' rotate(' + it.rot + ')' : '';
      var op = it.op !== undefined ? ' opacity="' + it.op + '"' : '';
      out += '<g transform="translate(' + (it.x || 0) + ',' + (it.y || 0) + ') scale(' + sx + ',' + sc + ')' + rot + '"' + op + '>' +
        fn(it) + '</g>';
    }
    return out;
  }

  function sceneSVG(s, opts) {
    opts = opts || {};
    var bgFn = BG[s.bg] || BG.plain;
    var out = bgFn(s);
    out += renderItems(s.back);
    out += renderItems(s.items);
    out += renderItems(s.front);
    if (s.sfx) {
      for (var i = 0; i < s.sfx.length; i++) {
        var f = s.sfx[i];
        out += g('translate(' + f.x + ',' + f.y + ')', sfx(f));
      }
    }
    if (s.bubbles && !opts.noBubbles) {
      for (var j = 0; j < s.bubbles.length; j++) out += bubble(s.bubbles[j]);
    }
    var par = opts.slice ? 'xMidYMid slice' : 'xMidYMid meet';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + VW + ' ' + VH + '" preserveAspectRatio="' + par + '" role="img">' +
      out + '</svg>';
  }

  global.Art = {
    scene: sceneSVG,
    INK: INK,
    W: VW,
    H: VH,
    shade: shade
  };
})(window);
