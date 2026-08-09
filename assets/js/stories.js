/* ============================================================
   stories.js — la bibliothèque d'histoires
   ------------------------------------------------------------
   Pour ajouter une histoire : copiez un objet { id, title, ... }
   dans le tableau "stories" de l'univers voulu.
   Chaque page = { scene: <décor + personnages>, text: "..." }
   Les briques disponibles (décors, personnages, objets) sont
   listées dans le README.
   ============================================================ */

/* L'illustration de la une. Comme dans un magazine, elle rassemble les
   personnages de tous les univers du numéro. */
var COUVERTURE = {
  bg: 'beach',
  items: [
    { t: 'parasol', x: 150, y: 486, s: .95 },
    { t: 'sandcastle', x: 680, y: 540, s: .82 },
    { t: 'peppa', x: 268, y: 528, s: 1.3, pose: 'wave' },
    { t: 'livia', x: 410, y: 538, s: 1.55, pose: 'armsup' },
    { t: 'elsa', x: 556, y: 524, s: 1.18, pose: 'magic' },
    { t: 'olaf', x: 662, y: 536, s: .8 },
    { t: 'starfish', x: 330, y: 552, s: .9 },
    { t: 'crab', x: 214, y: 548, s: .95 },
    { t: 'snowflake', x: 604, y: 150, r: 22 },
    { t: 'sparkle', x: 226, y: 206, r: 16 }
  ]
};

var UNIVERSES = [

  /* ==========================================================
     UNIVERS 1 — PEPPA PIG
     ========================================================== */
  {
    id: 'peppa',
    name: 'Peppa Pig',
    tagline: 'Livia, Peppa et toute la famille Pig',
    emoji: '🐷',
    c1: '#ff6fa5',
    c2: '#ffd166',
    cover: {
      bg: 'beach',
      items: [
        { t: 'parasol', x: 120, y: 470, s: .9 },
        { t: 'peppa', x: 330, y: 480, s: 1, pose: 'wave' },
        { t: 'livia', x: 470, y: 480, s: 1, pose: 'armsup' },
        { t: 'sandcastle', x: 660, y: 500, s: .9 },
        { t: 'starfish', x: 210, y: 520 }
      ]
    },
    stories: [

      /* ---------- Histoire 1 ---------- */
      {
        id: 'plage',
        title: 'Livia et Peppa à la plage',
        subtitle: 'Le premier jour des vacances',
        tag: 'Été',
        minutes: 5,
        cover: {
          bg: 'beach',
          items: [
            { t: 'parasol', x: 130, y: 480, s: .95 },
            { t: 'peppa', x: 340, y: 490, s: 1.05, pose: 'wave' },
            { t: 'livia', x: 480, y: 490, s: 1.05, pose: 'armsup' },
            { t: 'sandcastle', x: 680, y: 510, s: .95 },
            { t: 'crab', x: 200, y: 530 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden', time: 'morning',
              back: [{ t: 'house', x: 170, y: 400, s: .95 }],
              items: [
                { t: 'peppa', x: 430, y: 480, s: 1, pose: 'wave' },
                { t: 'livia', x: 580, y: 480, s: 1, pose: 'hold', hat: '#8ed67a' },
                { t: 'suitcase', x: 660, y: 500, s: .8 },
                { t: 'flower', x: 90, y: 520 }, { t: 'flower', x: 760, y: 510, color: '#ffd93d' }
              ],
              bubbles: [{ x: 330, y: 40, w: 300, t: 'Livia ! Aujourd\'hui on va à la plage !', tx: 430, ty: 218 }]
            },
            text: "Le soleil se lève sur la maison de Peppa. C'est le tout premier jour des grandes vacances ! Livia sonne à la porte avec son sac de plage et son plus beau chapeau."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'house', x: 780, y: 396, s: .6 }],
              items: [
                { t: 'car', x: 430, y: 490, s: 1.3 },
                { t: 'daddy', x: 120, y: 505, s: 1.15, pose: 'hold' },
                { t: 'george', x: 700, y: 505, s: .8, pose: 'hold' },
                { t: 'dino', x: 740, y: 505, s: .75 }
              ],
              bubbles: [{ x: 40, y: 30, w: 280, t: 'Tout le monde à bord !', tx: 120, ty: 220 }]
            },
            text: "Papa Pig charge la voiture rouge : le parasol, les serviettes, la glacière et un ballon énorme. George, lui, serre très fort son dinosaure. Il ne part jamais sans lui."
          },
          {
            scene: {
              bg: 'road',
              items: [{ t: 'car', x: 400, y: 500, s: 1.15 }],
              sfx: [{ t: 'VROUM !', x: 150, y: 380, fs: 52, rot: -10 }],
              bubbles: [{ x: 430, y: 50, w: 300, t: 'La mer ! Je vois la mer !', tx: 420, ty: 400 }]
            },
            text: "En route ! Pendant tout le trajet, Livia et Peppa chantent à tue-tête. Et puis, tout en haut de la colline, la mer apparaît : toute bleue, toute brillante."
          },
          {
            scene: {
              bg: 'beach',
              back: [{ t: 'parasol', x: 130, y: 470, s: 1 }, { t: 'towel', x: 250, y: 505 }],
              items: [
                { t: 'peppa', x: 420, y: 500, s: 1.05, pose: 'jump' },
                { t: 'livia', x: 590, y: 500, s: 1.05, pose: 'jump' },
                { t: 'bucket', x: 700, y: 520, s: .8 }
              ],
              sfx: [{ t: 'YOUPI !', x: 500, y: 190, fs: 46, rot: -6, color: '#fff' }]
            },
            text: "Le sable est tout chaud sous les pieds. Peppa plante le parasol, Livia étale les serviettes, et toutes les deux se mettent à sauter partout. Les vacances, ça commence fort !"
          },
          {
            scene: {
              bg: 'beach',
              items: [
                { t: 'bucket', x: 200, y: 520, s: .9 },
                { t: 'peppa', x: 330, y: 505, s: 1, pose: 'hold' },
                { t: 'livia', x: 460, y: 505, s: 1, pose: 'point' },
                { t: 'sandcastle', x: 660, y: 510, s: 1 }
              ],
              bubbles: [{ x: 300, y: 34, w: 290, t: 'Et là, il faut un pont-levis !', tx: 470, ty: 240 }]
            },
            text: "Ensemble, elles construisent un immense château de sable : cinq tours, un drapeau tout en haut, un fossé et même un pont-levis. C'est le plus beau château de toute la plage."
          },
          {
            scene: {
              bg: 'beach',
              back: [{ t: 'sandcastle', x: 660, y: 512, s: 1 }],
              items: [
                { t: 'peppa', x: 300, y: 505, s: 1, pose: 'armsup', mood: 'wow' },
                { t: 'livia', x: 440, y: 505, s: 1, pose: 'armsup', mood: 'wow' }
              ],
              front: [{ t: 'splash', x: 596, y: 512, s: 1 }],
              sfx: [{ t: 'SPLOUCH !', x: 645, y: 288, fs: 44, rot: -12, color: '#bfe8f7' }],
              bubbles: [{ x: 210, y: 34, w: 280, t: 'Oh non ! Ma tour !', tx: 320, ty: 250 }]
            },
            text: "Mais une petite vague coquine arrive sur la pointe des pieds… et emporte une tour ! Peppa ouvre grand la bouche. Puis Livia éclate de rire, et tout le monde rigole avec elle."
          },
          {
            scene: {
              bg: 'sea',
              items: [
                { t: 'peppa', x: 230, y: 450, s: 1, pose: 'swim' },
                { t: 'livia', x: 400, y: 455, s: 1, pose: 'swim' },
                { t: 'daddy', x: 620, y: 480, s: 1.2, pose: 'armsup' },
                { t: 'float', x: 740, y: 480, s: .9 }
              ],
              front: [
                { t: 'wave', x: 230, y: 400, s: 1.2 }, { t: 'wave', x: 420, y: 408, s: 1.2 },
                { t: 'splash', x: 620, y: 452, s: 1.25 }, { t: 'wave', x: 660, y: 420, s: 1.4 }
              ],
              sfx: [{ t: 'PLOUF !', x: 620, y: 240, fs: 50, rot: -8 }]
            },
            text: "Dans l'eau, Papa Pig fait un plongeon spectaculaire. PLOUF ! Une vague géante arrose absolument tout le monde. « C'est moi le champion ! » dit Papa Pig, très fier de lui."
          },
          {
            scene: {
              bg: 'beach',
              back: [{ t: 'parasol', x: 640, y: 480, s: 1 }, { t: 'towel', x: 380, y: 520, s: 1.1 }],
              items: [
                { t: 'livia', x: 250, y: 500, s: 1, pose: 'hold', mood: 'wow' },
                { t: 'icecream', x: 320, y: 470, s: 1.1 },
                { t: 'peppa', x: 480, y: 505, s: 1, pose: 'hold' },
                { t: 'watermelon', x: 620, y: 530, s: .8 }
              ],
              bubbles: [{ x: 420, y: 34, w: 300, t: 'Trois boules, s\'il te plaît !', tx: 300, ty: 250 }]
            },
            text: "Après la baignade, c'est l'heure du goûter : des tranches de pastèque bien fraîches et une glace à trois boules. Livia choisit fraise, vanille et myrtille. Peppa prend la même chose."
          },
          {
            scene: {
              bg: 'beach', time: 'sunset',
              items: [
                { t: 'peppa', x: 320, y: 500, s: 1, pose: 'stand' },
                { t: 'livia', x: 450, y: 500, s: 1, pose: 'hold' },
                { t: 'shell', x: 620, y: 520, s: 1.3 }
              ],
              bubbles: [{ x: 380, y: 40, w: 300, t: 'Vivement demain, Livia !', tx: 340, ty: 250 }]
            },
            text: "Le soleil descend tout doucement dans la mer. Livia a trouvé un coquillage rose : elle le gardera pour toujours. « Vivement demain », chuchote Peppa. Et voilà, l'été ne fait que commencer."
          }
        ]
      },

      /* ---------- Histoire 2 ---------- */
      {
        id: 'camping',
        title: 'Le camping sous les étoiles',
        subtitle: 'Une nuit dans la forêt',
        tag: 'Été',
        minutes: 6,
        cover: {
          bg: 'camp', time: 'night',
          items: [
            { t: 'tent', x: 180, y: 480, s: .95 },
            { t: 'campfire', x: 470, y: 480, s: 1.1 },
            { t: 'log', x: 640, y: 462 },
            { t: 'peppa', x: 630, y: 452, s: .95, pose: 'sit' },
            { t: 'livia', x: 330, y: 490, s: .95, pose: 'wave' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'camp',
              items: [
                { t: 'car', x: 180, y: 470, s: .85 },
                { t: 'daddy', x: 430, y: 500, s: 1.25, pose: 'hold' },
                { t: 'peppa', x: 590, y: 500, s: 1, pose: 'jump' },
                { t: 'livia', x: 710, y: 500, s: 1, pose: 'jump' },
                { t: 'suitcase', x: 300, y: 505, s: .8 }
              ],
              bubbles: [{ x: 330, y: 34, w: 300, t: 'Ce soir, on dort dans la tente !', tx: 430, ty: 210 }]
            },
            text: "La voiture s'arrête au bord de la forêt. Ce soir, personne ne dort dans un lit : tout le monde dort sous la tente ! Peppa et Livia sautent de joie dans l'herbe."
          },
          {
            scene: {
              bg: 'camp',
              items: [
                { t: 'tent', x: 420, y: 500, s: .95, rot: 22 },
                { t: 'peppa', x: 690, y: 505, s: 1, pose: 'shrug', mood: 'wow' },
                { t: 'livia', x: 150, y: 505, s: 1, pose: 'shrug', mood: 'wow' }
              ],
              sfx: [{ t: 'BADABOUM !', x: 400, y: 210, fs: 46, rot: -8 }],
              bubbles: [{ x: 500, y: 40, w: 260, t: 'Papa ? Ça va ?', tx: 660, ty: 250 }]
            },
            text: "Papa Pig veut monter la tente tout seul. Il tire une ficelle, il pousse un piquet… et BADABOUM ! La tente s'écroule sur lui. On ne voit plus qu'un gros tas orange qui bouge."
          },
          {
            scene: {
              bg: 'camp',
              back: [{ t: 'tent', x: 200, y: 500, s: 1 }],
              items: [
                { t: 'mummy', x: 420, y: 505, s: 1.2, pose: 'point' },
                { t: 'suzy', x: 580, y: 505, s: 1, pose: 'wave' },
                { t: 'livia', x: 740, y: 505, s: 1, pose: 'wave' }
              ],
              bubbles: [{ x: 470, y: 34, w: 300, t: 'Coucou ! Je campe à côté !', tx: 590, ty: 250 }]
            },
            text: "Heureusement, Maman Pig sait monter les tentes en trois minutes. Et devinez qui campe juste à côté ? Suzy Mouton ! La bande est au complet."
          },
          {
            scene: {
              bg: 'forest',
              items: [
                { t: 'livia', x: 300, y: 510, s: 1, pose: 'hold' },
                { t: 'peppa', x: 450, y: 510, s: 1, pose: 'hold' },
                { t: 'log', x: 600, y: 520, s: .8 },
                { t: 'butterfly', x: 660, y: 260, s: 1.2 }
              ],
              bubbles: [{ x: 380, y: 34, w: 300, t: 'On cherche du bois pour le feu !', tx: 320, ty: 250 }]
            },
            text: "Il faut du bois pour le feu de camp. Dans la forêt, Livia ramasse les plus grosses branches et Peppa les plus petites. Un papillon orange les accompagne tout le long du chemin."
          },
          {
            scene: {
              bg: 'camp', time: 'night',
              back: [{ t: 'tent', x: 130, y: 490, s: .9 }],
              items: [
                { t: 'log', x: 300, y: 500 },
                { t: 'livia', x: 290, y: 490, s: .95, pose: 'hold' },
                { t: 'campfire', x: 470, y: 505, s: 1.1 },
                { t: 'log', x: 650, y: 500 },
                { t: 'peppa', x: 640, y: 490, s: .95, pose: 'hold' },
                { t: 'marshmallow', x: 350, y: 450, s: .9 }
              ],
              bubbles: [{ x: 380, y: 30, w: 300, t: 'Le mien est tout doré !', tx: 320, ty: 250, fill: '#fff6ec' }]
            },
            text: "La nuit tombe et le feu de camp crépite. Chacun fait griller un chamallow au bout d'un bâton. Celui de Livia est doré à point. Celui de Papa Pig est… tout noir."
          },
          {
            scene: {
              bg: 'camp', time: 'night',
              back: [{ t: 'bush', x: 700, y: 500, s: 1.1, color: '#25543f' }],
              items: [
                { t: 'campfire', x: 200, y: 505, s: .9 },
                { t: 'peppa', x: 380, y: 500, s: 1, pose: 'shrug', mood: 'wow' },
                { t: 'livia', x: 520, y: 500, s: 1, pose: 'point', mood: 'wow' }
              ],
              sfx: [{ t: 'CRAC…', x: 660, y: 372, fs: 38, rot: 6, color: '#ffd93d' }],
              bubbles: [{ x: 300, y: 30, w: 300, t: 'Il y a quelque chose là-bas…', tx: 520, ty: 250, fill: '#fff' }]
            },
            text: "Soudain, CRAC ! Un bruit dans les buissons. Peppa se cache derrière Livia. Livia se cache derrière Peppa. Personne n'ose plus bouger un seul cil."
          },
          {
            scene: {
              bg: 'camp', time: 'night',
              items: [
                { t: 'hedgehog', x: 620, y: 522, s: 1.5 },
                { t: 'livia', x: 300, y: 505, s: 1, pose: 'point' },
                { t: 'peppa', x: 440, y: 505, s: 1, pose: 'wave' }
              ],
              bubbles: [{ x: 120, y: 30, w: 300, t: 'C\'est un tout petit hérisson !', tx: 300, ty: 250 }]
            },
            text: "Les buissons s'écartent… et un tout petit hérisson sort son museau. Il vient juste renifler les chamallows. Livia lui dit bonsoir tout doucement, et il repart en trottinant."
          },
          {
            scene: {
              bg: 'camp', time: 'night',
              back: [{ t: 'tent', x: 660, y: 500, s: .9 }],
              items: [
                { t: 'livia', x: 300, y: 500, s: 1, pose: 'armsup' },
                { t: 'peppa', x: 440, y: 500, s: 1, pose: 'armsup' }
              ],
              front: [
                { t: 'star', x: 150, y: 120, r: 16 }, { t: 'star', x: 250, y: 90, r: 12 },
                { t: 'sparkle', x: 520, y: 130, r: 22 }
              ],
              sfx: [{ t: 'Une étoile filante !', x: 400, y: 158, fs: 34, rot: -5, color: '#fff7d6' }],
              bubbles: [{ x: 460, y: 30, w: 280, t: 'Vite, fais un vœu !', tx: 460, ty: 240 }]
            },
            text: "Puis tout le monde s'allonge dans l'herbe pour regarder le ciel. Il y a des milliers d'étoiles. Une étoile file très vite au-dessus des arbres. « Vite, fais un vœu ! » dit Peppa."
          },
          {
            scene: {
              bg: 'camp', time: 'night',
              items: [
                { t: 'tent', x: 380, y: 500, s: 1.25 },
                { t: 'campfire', x: 660, y: 505, s: .7 },
                { t: 'log', x: 660, y: 508, s: .7 }
              ],
              bubbles: [{ x: 90, y: 60, w: 300, t: 'Bonne nuit Livia… Bonne nuit Peppa…', tx: 300, ty: 400, fill: '#fff6ec' }]
            },
            text: "Dans la tente, les deux amies se glissent dans leurs sacs de couchage. Dehors, on entend juste les grillons. « Bonne nuit Livia. » « Bonne nuit Peppa. » Et tout le monde s'endort en souriant."
          }
        ]
      },

      /* ---------- Histoire 3 ---------- */
      {
        id: 'piscine',
        title: 'La grande journée à la piscine',
        subtitle: 'Le toboggan géant',
        tag: 'Été',
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'slide', x: 250, y: 470, s: .9 },
            { t: 'pool', x: 470, y: 500, s: .95 },
            { t: 'peppa', x: 620, y: 470, s: 1, pose: 'jump' },
            { t: 'livia', x: 380, y: 470, s: 1, pose: 'armsup' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'pool', x: 420, y: 500, s: 1.25 }],
              items: [
                { t: 'peppa', x: 250, y: 520, s: 1, pose: 'swim' },
                { t: 'livia', x: 470, y: 524, s: 1, pose: 'swim' },
                { t: 'float', x: 660, y: 520, s: .85 }
              ],
              front: [
                { t: 'wave', x: 250, y: 468, s: 1.1 }, { t: 'wave', x: 470, y: 472, s: 1.1 },
                { t: 'wave', x: 640, y: 500, s: 1 }
              ],
              sfx: [{ t: 'IL FAIT SI CHAUD !', x: 400, y: 130, fs: 34, rot: -4, color: '#ffd93d' }]
            },
            text: "Aujourd'hui, il fait vraiment très très chaud. Même les papillons cherchent de l'ombre. Alors Maman Pig a une idée formidable : direction la piscine !"
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'pool', x: 380, y: 512, s: 1 }],
              items: [
                { t: 'slide', x: 180, y: 505, s: 1 },
                { t: 'peppa', x: 620, y: 512, s: 1, pose: 'point', mood: 'wow' },
                { t: 'livia', x: 740, y: 512, s: 1, pose: 'stand' }
              ],
              bubbles: [{ x: 400, y: 24, w: 300, t: 'Regarde comme il est haut !', tx: 610, ty: 226 }]
            },
            text: "Au milieu du parc, il y a un toboggan orange. Un ÉNORME toboggan. Il monte si haut qu'on dirait qu'il touche les nuages."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'slide', x: 240, y: 500, s: 1 }],
              items: [
                { t: 'peppa', x: 480, y: 500, s: 1, pose: 'shrug', mood: 'sad' },
                { t: 'livia', x: 640, y: 500, s: 1, pose: 'hold' }
              ],
              bubbles: [{ x: 300, y: 34, w: 290, t: 'Je crois que… je préfère regarder.', tx: 470, ty: 250 }]
            },
            text: "Peppa s'approche des marches. Puis elle regarde tout en haut. Puis elle regarde ses pieds. « Je crois que je préfère regarder », dit-elle tout doucement."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'slide', x: 220, y: 500, s: 1 }],
              items: [
                { t: 'livia', x: 470, y: 500, s: 1, pose: 'hold' },
                { t: 'peppa', x: 600, y: 500, s: 1, pose: 'hold' }
              ],
              bubbles: [{ x: 330, y: 30, w: 320, t: 'On descend ensemble, je te tiens la main !', tx: 470, ty: 250 }]
            },
            text: "Alors Livia vient tout près et lui prend la main. « On y va ensemble », dit-elle. « Toi devant, moi derrière. Et si tu as peur, tu fermes les yeux. »"
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'pool', x: 540, y: 516, s: 1.15 }],
              items: [
                { t: 'slide', x: 170, y: 505, s: 1.05 },
                { t: 'livia', x: 350, y: 372, s: .9, pose: 'jump', mood: 'wow' },
                { t: 'peppa', x: 470, y: 430, s: .95, pose: 'jump', mood: 'wow' }
              ],
              front: [{ t: 'splash', x: 600, y: 508, s: 1.1 }],
              sfx: [{ t: 'SPLAAASH !', x: 610, y: 296, fs: 46, rot: -10, color: '#bfe8f7' }]
            },
            text: "Une, deux, trois… c'est parti ! Le toboggan tourne à gauche, tourne à droite, et SPLAAASH ! Les deux amies atterrissent dans l'eau au milieu d'une gerbe d'éclaboussures."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'pool', x: 400, y: 505, s: 1.3 }],
              items: [
                { t: 'peppa', x: 260, y: 524, s: 1, pose: 'armsup', mood: 'wow' },
                { t: 'livia', x: 540, y: 524, s: 1, pose: 'armsup', mood: 'wow' }
              ],
              front: [
                { t: 'splash', x: 400, y: 500, s: .85 },
                { t: 'wave', x: 260, y: 474, s: 1.1 }, { t: 'wave', x: 540, y: 474, s: 1.1 }
              ],
              bubbles: [{ x: 470, y: 30, w: 300, t: 'Encore ! Encore ! Encore !', tx: 520, ty: 230 }]
            },
            text: "Peppa remonte à la surface, les oreilles pleines d'eau, et elle crie : « ENCORE ! » Elles refont le toboggan onze fois. Onze !"
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'pool', x: 420, y: 508, s: 1.3 }],
              items: [
                { t: 'george', x: 280, y: 512, s: .85, pose: 'swim', mood: 'wow' },
                { t: 'float', x: 280, y: 552, s: 1.1 },
                { t: 'dino', x: 340, y: 528, s: .7 },
                { t: 'daddy', x: 610, y: 526, s: 1.15, pose: 'swim' }
              ],
              front: [{ t: 'wave', x: 610, y: 470, s: 1.3 }],
              bubbles: [{ x: 70, y: 30, w: 260, t: 'Dine-saure !', tx: 270, ty: 250 }]
            },
            text: "George, lui, ne quitte pas sa bouée. Il a mis son dinosaure dedans, bien assis au milieu. « Dine-saure ! » dit George. Papa Pig fait la planche et ronfle un peu."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'mudpuddle', x: 420, y: 520, s: 1.1 },
                { t: 'peppa', x: 380, y: 500, s: 1, pose: 'jump' },
                { t: 'livia', x: 560, y: 505, s: 1, pose: 'wave' }
              ],
              sfx: [{ t: 'SPLATCH !', x: 300, y: 300, fs: 42, rot: -8, color: '#c99a5f' }],
              bubbles: [{ x: 130, y: 34, w: 300, t: 'La meilleure flaque de l\'été !', tx: 370, ty: 250 }]
            },
            text: "Sur le chemin du retour, il y a une magnifique flaque de boue. Peppa saute dedans à pieds joints, évidemment. Livia saute aussi. Et Maman Pig soupire… en riant."
          }
        ]
      },

      /* ---------- Histoire 4 ---------- */
      {
        id: 'cerf-volant',
        title: 'Le cerf-volant de l\'été',
        subtitle: 'Un après-midi sur la colline',
        tag: 'Été',
        minutes: 5,
        cover: {
          bg: 'hill',
          items: [
            { t: 'kite', x: 620, y: 150, s: 1.1 },
            { t: 'livia', x: 300, y: 500, s: 1.05, pose: 'point' },
            { t: 'peppa', x: 440, y: 505, s: 1.05, pose: 'armsup' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'peppa', x: 300, y: 500, s: 1, pose: 'stand' },
                { t: 'livia', x: 440, y: 500, s: 1, pose: 'point' },
                { t: 'flower', x: 700, y: 500, color: '#ffd93d' },
                { t: 'flower', x: 130, y: 520 }
              ],
              sfx: [{ t: 'FFFOU…', x: 640, y: 200, fs: 36, rot: -6, color: '#fff' }]
            },
            text: "Ce matin, le vent souffle sur la colline. Il fait danser l'herbe et décoiffe tout le monde. « Un vent pareil », dit Livia, « c'est un vent à cerf-volant ! »"
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 500, s: 1, pose: 'hold' },
                { t: 'kite', x: 420, y: 400, s: .9 },
                { t: 'peppa', x: 560, y: 500, s: 1, pose: 'hold' }
              ],
              bubbles: [{ x: 380, y: 30, w: 300, t: 'Deux bâtons, du papier, une ficelle !', tx: 300, ty: 250 }]
            },
            text: "Alors elles en fabriquent un : deux bâtons en croix, du papier rouge, une longue ficelle et une queue en rubans. Papa Pig aide un peu. Enfin… il essaie."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'peppa', x: 400, y: 505, s: 1, pose: 'point', mood: 'sad' },
                { t: 'tether', x: 508, y: 353, dx: 96, dy: 122, qx: 70, qy: 90, w: 3 },
                { t: 'kite', x: 620, y: 500, s: .9, rot: 40 }
              ],
              sfx: [{ t: 'PLOUF… par terre.', x: 570, y: 372, fs: 27, rot: -4, color: '#fff' }]
            },
            text: "Premier essai : le cerf-volant monte de trois centimètres… et retombe dans l'herbe. Deuxième essai : pareil. Troisième essai : encore pareil."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'livia', x: 260, y: 505, s: 1.05, pose: 'run' },
                { t: 'tether', x: 365, y: 350, dx: 213, dy: -84, qx: 150, qy: 30 },
                { t: 'kite', x: 600, y: 220, s: 1 }
              ],
              sfx: [{ t: 'ÇA MONTE !', x: 420, y: 150, fs: 42, rot: -8 }],
              bubbles: [{ x: 60, y: 34, w: 280, t: 'Cours, Livia, cours !', tx: 260, ty: 250 }]
            },
            text: "Alors Livia se met à courir. Elle court, elle court, la ficelle se tend… et d'un coup, le cerf-volant s'envole ! Il monte, il monte, plus haut que les arbres."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'kite', x: 560, y: 130, s: 1.2 },
                { t: 'livia', x: 430, y: 505, s: 1, pose: 'hold' },
                { t: 'tether', x: 490, y: 409, dx: 70, dy: -224, qx: 90, qy: -90 },
                { t: 'peppa', x: 300, y: 505, s: 1, pose: 'armsup', mood: 'wow' },
                { t: 'seagull', x: 180, y: 160, s: 1.6 }
              ]
            },
            text: "Le cerf-volant rouge danse dans le ciel bleu. Il tourne, il plonge, il remonte. Les oiseaux viennent voir de plus près qui est ce drôle de nouvel ami."
          },
          {
            scene: {
              bg: 'hill',
              back: [{ t: 'tree', x: 620, y: 480, s: 1.15 }],
              items: [
                { t: 'kite', x: 640, y: 320, s: .9, rot: 25 },
                { t: 'peppa', x: 280, y: 505, s: 1, pose: 'shrug', mood: 'sad' },
                { t: 'livia', x: 410, y: 505, s: 1, pose: 'point', mood: 'wow' },
                { t: 'tether', x: 510, y: 357, dx: 130, dy: -10, qx: 80, qy: 60 }
              ],
              sfx: [{ t: 'OH NON !', x: 400, y: 180, fs: 42, rot: -8, color: '#ff8a5c' }]
            },
            text: "Et puis, une grosse rafale ! Le cerf-volant part de travers et se coince tout en haut du grand arbre. Impossible de l'attraper, même sur la pointe des pieds."
          },
          {
            scene: {
              bg: 'hill',
              back: [{ t: 'tree', x: 500, y: 490, s: 1.3 }],
              items: [
                { t: 'daddy', x: 500, y: 420, s: 1.15, pose: 'armsup' },
                { t: 'kite', x: 560, y: 300, s: .8 },
                { t: 'livia', x: 250, y: 505, s: 1, pose: 'armsup' },
                { t: 'peppa', x: 730, y: 505, s: 1, pose: 'armsup' }
              ],
              bubbles: [{ x: 120, y: 30, w: 300, t: 'Papa Pig au secours !', tx: 250, ty: 240 }]
            },
            text: "Mais Papa Pig connaît un secret : il sait grimper aux arbres. Il monte branche après branche, tend le bras… et hop ! Le cerf-volant est sauvé. Tout le monde applaudit."
          },
          {
            scene: {
              bg: 'hill', time: 'sunset',
              items: [
                { t: 'towel', x: 400, y: 510, s: 1.2 },
                { t: 'livia', x: 300, y: 495, s: .95, pose: 'sit' },
                { t: 'peppa', x: 520, y: 495, s: .95, pose: 'sit', flip: true },
                { t: 'watermelon', x: 420, y: 520, s: .7 },
                { t: 'kite', x: 700, y: 420, s: .7, rot: 15 }
              ]
            },
            text: "Pour finir, tout le monde s'installe sur la couverture, en haut de la colline. Pastèque pour tout le monde. Le ciel devient orange, et le cerf-volant se repose à côté d'elles."
          }
        ]
      }
    ]
  },

  /* ==========================================================
     UNIVERS 2 — LA REINE DES NEIGES
     ========================================================== */
  {
    id: 'frozen',
    name: 'La Reine des Neiges',
    tagline: 'Livia, Elsa, Anna et Olaf',
    emoji: '❄️',
    c1: '#5fb8f0',
    c2: '#b39ff5',
    cover: {
      bg: 'snow',
      items: [
        { t: 'castleIce', x: 660, y: 440, s: .6 },
        { t: 'elsa', x: 280, y: 480, s: 1.05, pose: 'magic' },
        { t: 'liviaPrincess', x: 430, y: 480, s: 1, pose: 'wave' },
        { t: 'olaf', x: 540, y: 490, s: .85 },
        { t: 'snowflake', x: 120, y: 140, r: 26 }
      ]
    },
    stories: [
      {
        id: 'ete-arendelle',
        title: 'Un été à Arendelle',
        subtitle: 'De la neige au mois de juillet',
        tag: 'Été',
        minutes: 6,
        cover: {
          bg: 'snow',
          items: [
            { t: 'castleIce', x: 650, y: 450, s: .62 },
            { t: 'elsa', x: 260, y: 490, s: 1.1, pose: 'magic' },
            { t: 'liviaPrincess', x: 420, y: 490, s: 1.05, pose: 'armsup' },
            { t: 'olaf', x: 540, y: 495, s: .9 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'anna', x: 320, y: 500, s: 1.05, pose: 'shrug' },
                { t: 'liviaPrincess', x: 480, y: 500, s: 1, pose: 'hold' },
                { t: 'flower', x: 120, y: 520, color: '#ff7ab8' }
              ],
              sfx: [{ t: 'OUF, QUELLE CHALEUR !', x: 210, y: 424, fs: 26, rot: -4, color: '#ffd93d' }],
              bubbles: [{ x: 480, y: 34, w: 290, t: 'Je fonds ! Je fonds vraiment !', tx: 340, ty: 250 }]
            },
            text: "À Arendelle, c'est le plein été. Il fait si chaud que la glace des glaciers fond en gouttes. Anna s'évente avec son chapeau : « Je crois que je fonds », dit-elle."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'liviaPrincess', x: 300, y: 500, s: 1.05, pose: 'wave' },
                { t: 'elsa', x: 470, y: 500, s: 1.1, pose: 'wave' },
                { t: 'anna', x: 620, y: 500, s: 1.05, pose: 'armsup' }
              ],
              bubbles: [{ x: 60, y: 34, w: 300, t: 'Bonjour Elsa ! Bonjour Anna !', tx: 300, ty: 250 }]
            },
            text: "C'est ce moment-là que choisit Livia pour arriver au château, avec sa couronne toute neuve. Elsa et Anna courent l'accueillir. « Tu tombes très bien », sourit Elsa."
          },
          {
            scene: {
              bg: 'snow',
              items: [
                { t: 'elsa', x: 260, y: 500, s: 1.15, pose: 'magic' },
                { t: 'liviaPrincess', x: 500, y: 500, s: 1.05, pose: 'shrug', mood: 'wow' },
                { t: 'snowflake', x: 400, y: 180, r: 30 },
                { t: 'snowflake', x: 620, y: 250, r: 20 },
                { t: 'sparkle', x: 340, y: 300, r: 26 }
              ],
              sfx: [{ t: 'FRIIIISSS !', x: 620, y: 400, fs: 40, rot: -8, color: '#bfe8f7' }],
              bubbles: [{ x: 120, y: 30, w: 300, t: 'Un petit hiver, juste pour nous !', tx: 260, ty: 250 }]
            },
            text: "Elsa lève les mains, et FRIIIISS ! Des flocons se mettent à tomber sur la cour du château. Un tout petit hiver, rien que pour elles. Livia n'en revient pas."
          },
          {
            scene: {
              bg: 'snow',
              items: [
                { t: 'olaf', x: 300, y: 500, s: 1.1 },
                { t: 'liviaPrincess', x: 500, y: 500, s: 1.05, pose: 'point' },
                { t: 'snowflake', x: 680, y: 200, r: 22 }
              ],
              bubbles: [{ x: 60, y: 34, w: 300, t: 'J\'adore les étés enneigés !', tx: 300, ty: 250 }]
            },
            text: "Olaf arrive en courant, les bras grands ouverts. « De la neige en été ! » dit-il. « C'est exactement ce que je préfère au monde ! » Et il fait trois tours sur lui-même."
          },
          {
            scene: {
              bg: 'snow',
              items: [
                { t: 'anna', x: 250, y: 500, s: 1.05, pose: 'jump' },
                { t: 'liviaPrincess', x: 470, y: 500, s: 1.05, pose: 'armsup', mood: 'wow' },
                { t: 'elsa', x: 660, y: 500, s: 1.1, pose: 'jump' },
                { t: 'snowball', x: 380, y: 300, r: 16 },
                { t: 'snowball', x: 560, y: 250, r: 12 },
                { t: 'snowball', x: 150, y: 340, r: 13 }
              ],
              sfx: [{ t: 'PAF !', x: 330, y: 200, fs: 44, rot: -10, color: '#fff' }]
            },
            text: "Alors commence la plus grande bataille de boules de neige de l'histoire d'Arendelle. Anna vise Elsa. Elsa vise Livia. Livia vise… tout le monde à la fois !"
          },
          {
            scene: {
              bg: 'snow',
              back: [{ t: 'castleIce', x: 640, y: 440, s: .6 }],
              items: [
                { t: 'slide', x: 240, y: 500, s: 1, color: '#bfe8f7' },
                { t: 'liviaPrincess', x: 460, y: 440, s: .95, pose: 'jump', mood: 'wow' },
                { t: 'olaf', x: 620, y: 500, s: .8 }
              ],
              sfx: [{ t: 'WHIIII !', x: 600, y: 232, fs: 38, rot: -8, color: '#7fd8f0' }]
            },
            text: "Ensuite, Elsa dessine dans l'air un immense toboggan de glace qui descend jusqu'à la cour. Livia se lance la première. Olaf compte les tours : dix-sept !"
          },
          {
            scene: {
              bg: 'snow',
              items: [
                { t: 'elsa', x: 280, y: 500, s: 1.1, pose: 'hold' },
                { t: 'liviaPrincess', x: 430, y: 500, s: 1.05, pose: 'hold' },
                { t: 'anna', x: 580, y: 500, s: 1.05, pose: 'hold' },
                { t: 'sparkle', x: 150, y: 200, r: 20 },
                { t: 'sparkle', x: 700, y: 260, r: 16 },
                { t: 'snowflake', x: 620, y: 160, r: 22 }
              ]
            },
            text: "Puis Elsa gèle la fontaine du château : ça fait une patinoire ronde et brillante. Elles patinent en se tenant la main, toutes les trois, en tournant de plus en plus vite."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'liviaPrincess', x: 300, y: 500, s: 1.05, pose: 'hold', mood: 'wow' },
                { t: 'icecream', x: 370, y: 470, s: 1.1 },
                { t: 'anna', x: 540, y: 500, s: 1.05, pose: 'hold' },
                { t: 'olaf', x: 680, y: 505, s: .8 }
              ],
              bubbles: [{ x: 400, y: 30, w: 300, t: 'Une glace… dans la neige !', tx: 320, ty: 250 }]
            },
            text: "Pour le goûter, tout le monde mange une glace. Une glace, dans la neige, en plein été : c'est très bizarre et c'est très délicieux. Olaf en prend deux, pour être sûr."
          },
          {
            scene: {
              bg: 'snow', time: 'night', aurora: true,
              back: [{ t: 'castleIce', x: 620, y: 450, s: .55 }],
              items: [
                { t: 'elsa', x: 250, y: 500, s: 1.05, pose: 'stand' },
                { t: 'liviaPrincess', x: 380, y: 500, s: 1, pose: 'stand' },
                { t: 'anna', x: 500, y: 500, s: 1, pose: 'stand' },
                { t: 'olaf', x: 600, y: 505, s: .75 }
              ],
              front: [{ t: 'sparkle', x: 200, y: 160, r: 20 }, { t: 'sparkle', x: 500, y: 120, r: 16 }],
              bubbles: [{ x: 420, y: 40, w: 300, t: 'Reviens l\'été prochain, Livia !', tx: 300, ty: 250 }]
            },
            text: "Le soir, la neige d'Elsa fond doucement et l'été revient. Toutes les quatre regardent le ciel s'allumer. « Reviens l'été prochain », dit Elsa. Livia promet, la main sur le cœur."
          }
        ]
      },

      {
        id: 'nuit-etoiles-glacees',
        title: 'La nuit des étoiles glacées',
        subtitle: 'Une aurore pour Livia',
        tag: 'Nuit',
        minutes: 5,
        cover: {
          bg: 'snow', time: 'night',
          items: [
            { t: 'liviaPrincess', x: 300, y: 490, s: 1.05, pose: 'armsup' },
            { t: 'elsa', x: 460, y: 490, s: 1.1, pose: 'magic' },
            { t: 'olaf', x: 610, y: 495, s: .85 },
            { t: 'sparkle', x: 160, y: 170, r: 24 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'snow', time: 'night',
              back: [{ t: 'castleIce', x: 660, y: 450, s: .58 }],
              items: [
                { t: 'liviaPrincess', x: 320, y: 500, s: 1.05, pose: 'stand', mood: 'wow' },
                { t: 'elsa', x: 480, y: 500, s: 1.1, pose: 'point' }
              ],
              bubbles: [{ x: 380, y: 34, w: 300, t: 'Cette nuit, le ciel va danser.', tx: 480, ty: 250 }]
            },
            text: "Ce soir-là, Elsa réveille Livia tout doucement. « Habille-toi bien chaud », murmure-t-elle. « Cette nuit, le ciel va danser. » Livia enfile son manteau en trois secondes."
          },
          {
            scene: {
              bg: 'forest', time: 'night',
              items: [
                { t: 'elsa', x: 300, y: 510, s: 1.1, pose: 'hold' },
                { t: 'liviaPrincess', x: 450, y: 510, s: 1.05, pose: 'hold' },
                { t: 'olaf', x: 600, y: 515, s: .8 },
                { t: 'lantern', x: 715, y: 384, s: 1.3 }
              ]
            },
            text: "Elles traversent la forêt endormie avec une petite lanterne. La neige fait crunch-crunch sous les bottes. Olaf marche devant : il dit qu'il connaît le chemin par cœur."
          },
          {
            scene: {
              bg: 'snow', time: 'night',
              items: [
                { t: 'anna', x: 280, y: 505, s: 1.05, pose: 'wave' },
                { t: 'sled', x: 500, y: 520, s: 1.1 },
                { t: 'liviaPrincess', x: 620, y: 505, s: 1.05, pose: 'wave' }
              ],
              bubbles: [{ x: 60, y: 34, w: 300, t: 'Vous partiez sans moi ?!', tx: 280, ty: 250 }]
            },
            text: "Au bout du sentier, une voix crie : « Vous partiez sans moi ?! » C'est Anna, avec sa luge et deux couvertures. Bien sûr qu'elle vient aussi."
          },
          {
            scene: {
              bg: 'snow', time: 'night',
              items: [
                { t: 'sled', x: 400, y: 508, s: 1.7 },
                { t: 'liviaPrincess', x: 330, y: 478, s: .95, pose: 'armsup', mood: 'wow' },
                { t: 'anna', x: 480, y: 478, s: .95, pose: 'armsup', mood: 'wow' }
              ],
              sfx: [{ t: 'WHOUUUU !', x: 640, y: 250, fs: 40, rot: -10, color: '#bfe8f7' }]
            },
            text: "Pour monter en haut de la montagne, il faut d'abord descendre une pente. Alors elles descendent en luge, très vite, en riant si fort que la neige tombe des sapins."
          },
          {
            scene: {
              bg: 'snow', time: 'night',
              items: [
                { t: 'snowpine', x: 140, y: 500, s: .9 },
                { t: 'olaf', x: 400, y: 505, s: 1.1, mood: 'wow' },
                { t: 'liviaPrincess', x: 580, y: 505, s: 1.05, pose: 'point' }
              ],
              bubbles: [{ x: 200, y: 30, w: 300, t: 'Mes pieds sont perdus ! Encore !', tx: 400, ty: 250 }]
            },
            text: "En chemin, Olaf perd ses pieds dans une congère. Livia les retrouve tout de suite : ils étaient juste derrière lui. « Merci ! » dit Olaf. « Ça m'arrive tout le temps. »"
          },
          {
            scene: {
              bg: 'snow', time: 'night', aurora: true,
              items: [
                { t: 'elsa', x: 300, y: 500, s: 1.15, pose: 'magic' },
                { t: 'liviaPrincess', x: 540, y: 500, s: 1.05, pose: 'armsup', mood: 'wow' }
              ],
              front: [
                { t: 'sparkle', x: 200, y: 200, r: 24 }, { t: 'sparkle', x: 640, y: 160, r: 20 },
                { t: 'snowflake', x: 440, y: 130, r: 26 }
              ],
              sfx: [{ t: 'Regarde…', x: 420, y: 186, fs: 34, rot: -4, color: '#fff' }]
            },
            text: "Enfin, elles arrivent au sommet. Elsa souffle sur ses mains et lance mille flocons vers le ciel. Les flocons montent, montent… et se transforment en lumières vertes et violettes."
          },
          {
            scene: {
              bg: 'snow', time: 'night', aurora: true,
              items: [
                { t: 'elsa', x: 260, y: 505, s: 1.05, pose: 'stand' },
                { t: 'liviaPrincess', x: 390, y: 505, s: 1, pose: 'stand' },
                { t: 'anna', x: 510, y: 505, s: 1, pose: 'stand' },
                { t: 'olaf', x: 620, y: 510, s: .8 }
              ],
              bubbles: [{ x: 400, y: 34, w: 300, t: 'C\'est le plus beau ciel du monde.', tx: 390, ty: 250 }]
            },
            text: "L'aurore boréale danse au-dessus de la montagne, comme un immense rideau de lumière. Toutes les quatre se serrent l'une contre l'autre et ne disent plus rien du tout."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'liviaPrincess', x: 300, y: 500, s: 1.05, pose: 'stand', mood: 'sleep' },
                { t: 'elsa', x: 480, y: 500, s: 1.1, pose: 'hold' },
                { t: 'sparkle', x: 660, y: 320, r: 18 }
              ],
              bubbles: [{ x: 90, y: 40, w: 300, t: 'Bonne nuit, petite princesse.', tx: 460, ty: 250, fill: '#fff6ec' }]
            },
            text: "Au retour, Livia a les yeux qui se ferment tout seuls. Elsa la borde et pose un flocon de glace sur sa table de nuit : un flocon qui ne fond jamais. « Bonne nuit, petite princesse. »"
          }
        ]
      }
    ]
  }
];
