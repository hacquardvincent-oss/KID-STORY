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
/* L'illustration de la une, en deux versions : l'écran large montre toute la
   bande, l'écran de téléphone n'en montre que la moitié centrale. On compose
   donc deux fois, plutôt que de laisser le cadrage couper les personnages. */
var COUVERTURE = {

  /* écran large : les quatre héros bien alignés, personne ne se chevauche */
  large: {
    bg: 'beach', noSun: true,
    back: [
      { t: 'sun', x: 688, y: 292, s: .68 },
      { t: 'parasol', x: 62, y: 478, s: .66 },
      { t: 'sandcastle', x: 692, y: 476, s: .44 }
    ],
    items: [
      { t: 'peppa', x: 152, y: 528, s: .95 },
      { t: 'livia', x: 352, y: 534, s: 1 },
      { t: 'bluey', x: 548, y: 528, s: .95 },
      { t: 'elsa', x: 714, y: 520, s: .85 }
    ],
    front: [
      { t: 'crab', x: 252, y: 550, s: .7 },
      { t: 'starfish', x: 452, y: 554, s: .65 },
      { t: 'shell', x: 622, y: 548, s: .75 }
    ]
  },

  /* écran haut : trois héros seulement, serrés dans la bande visible */
  haut: {
    bg: 'beach', noSun: true,
    back: [
      { t: 'sun', x: 516, y: 190, s: .75 },
      { t: 'parasol', x: 118, y: 452, s: .7 },
      { t: 'sandcastle', x: 688, y: 470, s: .55 }
    ],
    items: [
      { t: 'peppa', x: 266, y: 482, s: .8 },
      { t: 'bluey', x: 536, y: 482, s: .8 },
      { t: 'livia', x: 400, y: 548, s: 1.02 }
    ],
    front: [
      { t: 'crab', x: 300, y: 556, s: .7 },
      { t: 'starfish', x: 500, y: 556, s: .65 }
    ]
  }
};

/* Les thèmes : ils traversent les univers, c'est tout leur intérêt.
   Chaque histoire en porte un ou deux dans son champ « themes ». */
var THEMES = [
  { id: 'ete', nom: 'Été', emoji: '☀️' },
  { id: 'amitie', nom: 'Amitié', emoji: '🤝' },
  { id: 'emotions', nom: 'Émotions', emoji: '💛' },
  { id: 'grandir', nom: 'Grandir', emoji: '🌱' },
  { id: 'partager', nom: 'Partager', emoji: '🤲' },
  { id: 'regles', nom: 'Règles', emoji: '📏' },
  { id: 'famille', nom: 'Famille', emoji: '🏡' },
  { id: 'dehors', nom: 'Dehors', emoji: '🌳' },
  { id: 'nuit', nom: 'Nuit', emoji: '🌙' },
  { id: 'betises', nom: 'Bêtises', emoji: '🙃' }
];

var UNIVERSES = [

  /* ==========================================================
     UNIVERS 1 — PEPPA PIG
     ========================================================== */
  {
    id: 'peppa',
    name: 'Peppa Pig',
    tagline: 'Livia, Peppa et toute la famille Pig',
    emoji: '🐷',
    vignette: { t: 'peppa', ds: .5, dy: 178 },
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
        themes: ['Été', 'Amitié'],
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
                { t: 'george', x: 664, y: 505, s: .8, pose: 'hold' },
                { t: 'dino', x: 746, y: 505, s: .75 }
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
              sfx: [{ t: 'PLOUF !', x: 700, y: 176, fs: 46, rot: -8 }]
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
        themes: ['Été', 'Nuit'],
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
                { t: 'livia', x: 700, y: 500, s: .96, pose: 'jump' },
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
                { t: 'suzy', x: 560, y: 505, s: 1, pose: 'wave' },
                { t: 'livia', x: 693, y: 505, s: 1, pose: 'wave' }
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
        themes: ['Été', 'Amitié'],
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
                { t: 'peppa', x: 596, y: 512, s: 1, pose: 'point', mood: 'wow' },
                { t: 'livia', x: 712, y: 512, s: 1, pose: 'stand' }
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
              sfx: [{ t: 'SPLAAASH !', x: 658, y: 248, fs: 44, rot: -10, color: '#bfe8f7' }]
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
              sfx: [{ t: 'SPLATCH !', x: 178, y: 236, fs: 40, rot: -8, color: '#c99a5f' }],
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
        themes: ['Été', 'Dehors'],
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
                { t: 'peppa', x: 687, y: 505, s: 1, pose: 'armsup' }
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
      },

      /* ---------- 5 — la jalousie ---------- */
      {
        id: 'cadeau-george',
        title: 'Le cadeau de George',
        subtitle: 'Quand on voudrait être le seul',
        tag: 'Grandir',
        themes: ['Émotions', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'peppa', x: 300, y: 500, s: 1.15, mood: 'sad' },
            { t: 'george', x: 480, y: 500, s: .95, pose: 'hold' },
            { t: 'dino', x: 560, y: 500, s: .9 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 240, y: 500, s: 1.3, pose: 'hold' },
                { t: 'george', x: 460, y: 500, s: .95, pose: 'armsup', mood: 'wow' },
                { t: 'dino', x: 560, y: 500, s: 1 },
                { t: 'peppa', x: 680, y: 500, s: 1.15 }
              ],
              bubbles: [{ x: 300, y: 26, w: 300, t: 'Dine-saure ! Merci Mamie !', tx: 470, ty: 236 }]
            },
            text: "Mamie Pig est venue voir George parce qu'il a été très malade toute la semaine. Elle lui a apporté un dinosaure tout neuf, vert, avec des piquants sur le dos."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 300, y: 500, s: 1.2, mood: 'sad' },
                { t: 'george', x: 560, y: 500, s: .95, pose: 'hold' },
                { t: 'dino', x: 640, y: 500, s: .9 }
              ],
              bubbles: [{ x: 90, y: 26, w: 310, t: 'Et moi alors ? Moi j\'ai rien du tout.', tx: 300, ty: 226 }]
            },
            text: "Peppa regarde le dinosaure. Puis elle regarde ses pattes vides. Quelque chose de chaud et de serré monte dans son ventre. « Et moi alors ? » dit-elle tout bas."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 320, y: 500, s: 1.2, pose: 'shrug', mood: 'sad' },
                { t: 'george', x: 580, y: 500, s: .95, mood: 'sad' }
              ],
              sfx: [{ t: 'IL EST MOCHE !', x: 392, y: 142, fs: 26, rot: -4, color: '#e2593c' }]
            },
            text: "Alors Peppa dit quelque chose de méchant : « Il est moche, ton dinosaure. » George baisse les oreilles. Et Peppa, aussitôt, se sent encore plus mal qu'avant."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 500, s: 1.3, pose: 'hold' },
                { t: 'peppa', x: 520, y: 500, s: 1.15, mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 26, w: 310, t: 'C\'est lourd, la jalousie. Ça serre le ventre.', tx: 310, ty: 216 }]
            },
            text: "Maman Pig s'assoit à côté d'elle. « Tu sais ce que tu as, là, dans le ventre ? Ça s'appelle la jalousie. C'est lourd à porter, et ça ne rend personne joyeux. »"
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 280, y: 500, s: 1.3, pose: 'point' },
                { t: 'peppa', x: 540, y: 500, s: 1.15 }
              ],
              bubbles: [{ x: 320, y: 26, w: 300, t: 'George a eu un cadeau. Toi, tu as la santé.', tx: 290, ty: 216 }]
            },
            text: "« George a eu un cadeau parce qu'il a été malade », explique Maman. « Toi, pendant ce temps-là, tu courais dans le jardin. Ça aussi, c'est un beau cadeau. »"
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 340, y: 500, s: 1.15, pose: 'hold' },
                { t: 'george', x: 540, y: 500, s: .95, pose: 'hold' },
                { t: 'dino', x: 640, y: 500, s: .9 }
              ],
              bubbles: [{ x: 100, y: 26, w: 300, t: 'Pardon George. Il est très beau.', tx: 340, ty: 226 }]
            },
            text: "Peppa va voir son petit frère. « Pardon George. Il est très beau, ton dinosaure. » George ne répond rien : il lui met simplement le dinosaure dans les pattes."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'peppa', x: 340, y: 514, s: 1.15, pose: 'run' },
                { t: 'george', x: 520, y: 514, s: .95, pose: 'run' },
                { t: 'dino', x: 640, y: 516, s: .9 }
              ],
              sfx: [{ t: 'GROOOAR !', x: 620, y: 200, fs: 38, rot: -8, color: '#6fbf5c' }]
            },
            text: "Il voulait juste jouer avec elle depuis le début. Tout l'après-midi, le dinosaure attaque le jardin en rugissant. Et Peppa, dans son ventre, ne sent plus rien de lourd du tout."
          }
        ]
      },

      /* ---------- 6 — le partage ---------- */
      {
        id: 'chacun-son-tour',
        title: 'Le vélo de Livia',
        subtitle: 'Ce qui est plus drôle à deux',
        tag: 'Grandir',
        themes: ['Émotions', 'Amitié', 'Partager'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'livia', x: 320, y: 514, s: 1.15, pose: 'hold' },
            { t: 'peppa', x: 500, y: 514, s: 1.15, pose: 'point' },
            { t: 'ball', x: 640, y: 512, s: .8 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 514, s: 1.15, pose: 'wave' },
                { t: 'peppa', x: 560, y: 514, s: 1.15, pose: 'armsup', mood: 'wow' },
                { t: 'ball', x: 700, y: 512, s: .85 }
              ],
              bubbles: [{ x: 60, y: 26, w: 300, t: 'Regarde mon ballon tout neuf !', tx: 300, ty: 226 }]
            },
            text: "Livia arrive dans le jardin avec un ballon tout neuf, bleu et jaune, qui rebondit très haut. Peppa n'a jamais vu un aussi beau ballon de toute sa vie."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'peppa', x: 340, y: 514, s: 1.2, pose: 'hold' },
                { t: 'ball', x: 420, y: 512, s: .85 },
                { t: 'livia', x: 600, y: 514, s: 1.1, pose: 'shrug', mood: 'sad' }
              ],
              bubbles: [{ x: 60, y: 26, w: 290, t: 'C\'est moi qui l\'ai ! C\'est moi !', tx: 340, ty: 226 }]
            },
            text: "Peppa attrape le ballon et le serre très fort contre elle. « C'est moi qui l'ai ! » Livia attend. Elle attend encore. Puis elle s'assoit dans l'herbe, toute seule."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'peppa', x: 400, y: 514, s: 1.2, pose: 'hold' },
                { t: 'ball', x: 480, y: 512, s: .85 }
              ],
              sfx: [{ t: 'POC… POC… POC…', x: 250, y: 250, fs: 30, rot: -4, color: '#fff' }]
            },
            text: "Peppa fait rebondir le ballon toute seule. Poc. Poc. Poc. C'est bizarre : le ballon est toujours aussi beau, mais ce n'est plus drôle du tout."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 516, s: 1.1, pose: 'sit', mood: 'sad' },
                { t: 'peppa', x: 560, y: 514, s: 1.15, pose: 'stand', mood: 'sad' }
              ],
              bubbles: [{ x: 340, y: 26, w: 300, t: 'Livia ne joue plus. Livia est triste.', tx: 320, ty: 260 }]
            },
            text: "Peppa regarde son amie assise dans l'herbe, le menton sur les genoux. Elle comprend quelque chose : le ballon est à Livia, et Livia ne joue même plus avec."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'peppa', x: 330, y: 514, s: 1.15, pose: 'hold' },
                { t: 'ball', x: 420, y: 512, s: .85 },
                { t: 'livia', x: 580, y: 516, s: 1.1, pose: 'hold' }
              ],
              bubbles: [{ x: 90, y: 26, w: 310, t: 'Tiens. Chacun son tour, d\'accord ?', tx: 330, ty: 226 }]
            },
            text: "Alors Peppa se lève et lui tend le ballon. « Chacun son tour, d'accord ? » Livia sourit tellement fort que ses joues deviennent toutes rondes."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'peppa', x: 280, y: 514, s: 1.15, pose: 'armsup' },
                { t: 'ball', x: 430, y: 400, s: .9 },
                { t: 'livia', x: 580, y: 516, s: 1.1, pose: 'armsup' }
              ],
              sfx: [{ t: 'À TOI ! À MOI !', x: 430, y: 190, fs: 34, rot: -6, color: '#f7c518' }]
            },
            text: "Le ballon vole de l'une à l'autre. « À toi ! » « À moi ! » Elles inventent des règles compliquées, puis elles les oublient, puis elles en inventent d'autres."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'peppa', x: 340, y: 508, s: 1.15, pose: 'sit' },
                { t: 'livia', x: 520, y: 510, s: 1.1, pose: 'sit' },
                { t: 'ball', x: 660, y: 516, s: .8 }
              ]
            },
            text: "Le soir, elles sont couchées dans l'herbe, essoufflées. « Le ballon était plus rigolo à deux », dit Peppa. « Beaucoup plus », répond Livia. Et le ballon, lui, se repose."
          }
        ]
      },

      /* ---------- 7 — la colère ---------- */
      {
        id: 'grosse-colere',
        title: 'La grosse colère de Peppa',
        subtitle: 'Souffler comme un dragon',
        tag: 'Grandir',
        themes: ['Émotions', 'Grandir'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'peppa', x: 340, y: 500, s: 1.25, pose: 'armsup', mood: 'wow' },
            { t: 'daddy', x: 570, y: 500, s: 1.3, pose: 'hold' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 380, y: 500, s: 1.2, pose: 'armsup' },
                { t: 'george', x: 600, y: 500, s: .95 }
              ],
              bubbles: [{ x: 120, y: 26, w: 310, t: 'C\'est la plus haute tour du monde !', tx: 380, ty: 206 }]
            },
            text: "Peppa a construit une tour de cubes immense. Elle a mis presque une heure. Elle est si haute qu'il faut monter sur le tabouret pour poser le dernier cube."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'george', x: 420, y: 500, s: .95, pose: 'shrug', mood: 'sad' },
                { t: 'peppa', x: 640, y: 500, s: 1.2, mood: 'wow' }
              ],
              sfx: [{ t: 'BADABOUM !', x: 300, y: 180, fs: 42, rot: -8, color: '#e2593c' }]
            },
            text: "George passe en courant. Sa queue accroche la tour. BADABOUM ! Les cubes roulent partout dans la chambre. George ne l'a pas fait exprès du tout."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 400, y: 500, s: 1.3, pose: 'armsup', mood: 'wow' },
                { t: 'george', x: 660, y: 500, s: .95, mood: 'sad' }
              ],
              sfx: [{ t: 'AAAAAH !', x: 240, y: 190, fs: 46, rot: -10, color: '#e2593c' }]
            },
            text: "Alors Peppa devient toute rouge. Elle crie très fort, elle tape du pied, elle jette un cube contre le mur. La colère est arrivée d'un seul coup, comme un orage."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'daddy', x: 320, y: 500, s: 1.3, pose: 'hold' },
                { t: 'peppa', x: 570, y: 500, s: 1.2, mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 26, w: 310, t: 'Ta colère a le droit d\'être là. Mais pas de faire mal.', tx: 330, ty: 216 }]
            },
            text: "Papa Pig entre et s'assoit par terre, sans crier. « Tu as le droit d'être en colère », dit-il. « Ça arrive à tout le monde. Mais la colère n'a pas le droit de faire mal. »"
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'daddy', x: 320, y: 500, s: 1.3, pose: 'shrug' },
                { t: 'peppa', x: 580, y: 500, s: 1.2, pose: 'shrug' }
              ],
              bubbles: [{ x: 300, y: 26, w: 300, t: 'On souffle comme un dragon. Trois fois.', tx: 330, ty: 216 }]
            },
            text: "« Regarde », dit Papa. « On respire par le nez, très fort, et on souffle par la bouche comme un dragon. Trois fois. » Ils soufflent tous les deux. Ça fait un bruit ridicule."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 380, y: 500, s: 1.2, pose: 'hold' },
                { t: 'george', x: 600, y: 500, s: .95, pose: 'hold' }
              ],
              bubbles: [{ x: 120, y: 26, w: 300, t: 'Pardon d\'avoir crié, George.', tx: 380, ty: 206 }]
            },
            text: "Au troisième souffle, l'orage est parti. Peppa va voir George. « Pardon d'avoir crié. » George hausse les épaules : il avait déjà tout oublié."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 360, y: 500, s: 1.15, pose: 'armsup' },
                { t: 'george', x: 580, y: 500, s: .95, pose: 'armsup' }
              ],
              sfx: [{ t: 'ENCORE PLUS HAUTE !', x: 420, y: 180, fs: 30, rot: -5, color: '#f7c518' }]
            },
            text: "Ils reconstruisent la tour ensemble. Cette fois, elle est encore plus haute. Et quand elle retombe, à la fin, ce sont eux deux qui la font tomber, exprès, en riant."
          }
        ]
      },

      /* ---------- 8 — écouter ses parents ---------- */
      {
        id: 'flaque-interdite',
        title: 'La flaque interdite',
        subtitle: 'Pourquoi Maman avait dit non',
        tag: 'Grandir',
        themes: ['Grandir', 'Bêtises', 'Règles'],
        minutes: 5,
        cover: {
          bg: 'village',
          items: [
            { t: 'mudpuddle', x: 420, y: 522, s: 1.1 },
            { t: 'peppa', x: 380, y: 500, s: 1.2, pose: 'jump' },
            { t: 'mummy', x: 630, y: 514, s: 1.3, pose: 'point' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 500, s: 1.3, pose: 'point' },
                { t: 'peppa', x: 560, y: 500, s: 1.2, pose: 'armsup' }
              ],
              bubbles: [{ x: 320, y: 26, w: 310, t: 'Ta belle robe, et pas de flaques : c\'est la fête !', tx: 310, ty: 216 }]
            },
            text: "Cet après-midi, c'est la fête de l'école. Maman a sorti la belle robe de Peppa, celle qu'elle ne met presque jamais. « Et pas de flaques aujourd'hui », dit Maman."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'peppa', x: 300, y: 514, s: 1.2, pose: 'stand' },
                { t: 'mudpuddle', x: 580, y: 524, s: 1.2 },
                { t: 'livia', x: 700, y: 516, s: 1.05, pose: 'stand' }
              ],
              sfx: [{ t: 'OH… UNE FLAQUE.', x: 300, y: 200, fs: 30, rot: -5, color: '#c99a5f' }]
            },
            text: "Sur le chemin, il y a une flaque. Pas une petite : une flaque magnifique, toute ronde, toute marron, qui attend là comme si elle avait été faite exprès pour elle."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'peppa', x: 380, y: 516, s: 1.2, pose: 'shrug' },
                { t: 'livia', x: 620, y: 516, s: 1.05, pose: 'point' }
              ],
              bubbles: [{ x: 340, y: 26, w: 300, t: 'Ta maman a dit non, Peppa…', tx: 620, ty: 236 }]
            },
            text: "« Ta maman a dit non », rappelle Livia. Peppa regarde la flaque. Puis sa robe. Puis la flaque encore. « Juste un tout petit saut », dit-elle. « Un minuscule. »"
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'mudpuddle', x: 420, y: 524, s: 1.3 },
                { t: 'peppa', x: 400, y: 490, s: 1.2, pose: 'jump', mood: 'wow' }
              ],
              sfx: [{ t: 'SPLATCH !', x: 620, y: 250, fs: 44, rot: -10, color: '#c99a5f' }]
            },
            text: "SPLATCH ! Le saut n'a rien de minuscule. La boue gicle jusqu'aux oreilles. Pendant une seconde, c'est le plus grand bonheur du monde entier."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'peppa', x: 360, y: 516, s: 1.2, pose: 'shrug', mood: 'sad' },
                { t: 'livia', x: 620, y: 516, s: 1.05, pose: 'stand', mood: 'sad' }
              ],
              sfx: [{ t: 'ET LA ROBE ?', x: 400, y: 190, fs: 32, rot: -5, color: '#e2593c' }]
            },
            text: "Puis Peppa baisse les yeux. La belle robe est marron du col jusqu'en bas. Le bonheur, lui, est parti aussi vite qu'il était venu."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 320, y: 500, s: 1.3, pose: 'hold' },
                { t: 'peppa', x: 570, y: 500, s: 1.2, mood: 'sad' }
              ],
              bubbles: [{ x: 320, y: 26, w: 310, t: 'Je ne t\'ai pas dit non pour t\'embêter.', tx: 330, ty: 216 }]
            },
            text: "À la maison, Maman ne crie pas. Elle dit juste : « Je ne t'avais pas dit non pour t'embêter. C'était pour que tu puisses aller à la fête. » Peppa a la gorge serrée."
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'peppa', x: 340, y: 516, s: 1.15, pose: 'hold' },
                { t: 'mummy', x: 560, y: 514, s: 1.3, pose: 'hold' },
                { t: 'mudpuddle', x: 700, y: 528, s: .9 }
              ],
              bubbles: [{ x: 60, y: 26, w: 300, t: 'La prochaine fois, j\'écoute.', tx: 340, ty: 226 }]
            },
            text: "Elles arrivent à la fête à la toute fin, en bottes et en habits de tous les jours. « La prochaine fois, j'écoute », dit Peppa. Maman lui prend la patte. « Je sais. »"
          }
        ]
      },

      /* ---------- 9 — dire la vérité ---------- */
      {
        id: 'verite',
        title: 'Le vase de Maman',
        subtitle: 'Le poids d\'un petit mensonge',
        tag: 'Grandir',
        themes: ['Grandir', 'Famille', 'Règles'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'peppa', x: 360, y: 500, s: 1.2, mood: 'sad' },
            { t: 'ball', x: 520, y: 498, s: .8 },
            { t: 'george', x: 640, y: 500, s: .95, mood: 'sad' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 320, y: 500, s: 1.2, pose: 'armsup' },
                { t: 'ball', x: 520, y: 420, s: .85 }
              ],
              bubbles: [{ x: 100, y: 26, w: 310, t: 'Un dernier tir et j\'arrête !', tx: 320, ty: 206 }]
            },
            text: "On ne joue pas au ballon dans le salon : c'est la règle. Mais Maman est dans le jardin, et Peppa fait juste un tout petit tir. Puis un deuxième. Puis un troisième."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 380, y: 500, s: 1.2, mood: 'wow' },
                { t: 'ball', x: 620, y: 498, s: .85 }
              ],
              sfx: [{ t: 'CRAAAC !', x: 620, y: 200, fs: 44, rot: -10, color: '#e2593c' }]
            },
            text: "CRAAAC ! Le vase bleu de Maman tombe de l'étagère et se casse en trois morceaux sur le tapis. Peppa reste immobile. Son cœur bat très, très vite."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 500, s: 1.3, pose: 'point' },
                { t: 'peppa', x: 540, y: 500, s: 1.2, mood: 'sad' },
                { t: 'george', x: 700, y: 500, s: .95 }
              ],
              bubbles: [{ x: 340, y: 26, w: 300, t: 'Qui a cassé le vase ?', tx: 310, ty: 216 }]
            },
            text: "Maman arrive en courant. « Qui a cassé le vase ? » Le salon devient très silencieux. Et Peppa entend sa propre voix dire : « C'est George. »"
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'george', x: 340, y: 500, s: .95, mood: 'sad' },
                { t: 'peppa', x: 600, y: 500, s: 1.2, mood: 'sad' }
              ],
              sfx: [{ t: 'MAIS… C\'EST PAS MOI…', x: 400, y: 180, fs: 26, rot: -4, color: '#e2593c' }]
            },
            text: "George ouvre grand les yeux. « C'est pas moi », dit-il tout doucement. Personne ne le croit. Il part dans sa chambre sans dinosaure, et sans jeu jusqu'au soir."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 420, y: 500, s: 1.25, pose: 'shrug', mood: 'sad' }
              ],
              sfx: [{ t: 'ÇA SERRE, DANS LE VENTRE…', x: 400, y: 170, fs: 26, rot: -4, color: '#c99a5f' }]
            },
            text: "Peppa va jouer dehors, mais rien ne marche. Le toboggan n'est pas drôle. Le goûter n'a pas de goût. Le mensonge est resté dans son ventre, et il pèse de plus en plus lourd."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 320, y: 500, s: 1.3, pose: 'hold' },
                { t: 'peppa', x: 570, y: 500, s: 1.2, mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 26, w: 300, t: 'Maman… c\'est moi qui l\'ai cassé.', tx: 570, ty: 216 }]
            },
            text: "Alors Peppa revient dans le salon. Sa voix tremble un peu. « Maman… c'est moi qui l'ai cassé. » Voilà. C'est dit. Et d'un coup, son ventre redevient léger."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 280, y: 500, s: 1.3, pose: 'hold' },
                { t: 'peppa', x: 500, y: 500, s: 1.15, pose: 'hold' },
                { t: 'george', x: 680, y: 500, s: .95, pose: 'hold' }
              ],
              bubbles: [{ x: 300, y: 26, w: 310, t: 'Merci de me l\'avoir dit. C\'était courageux.', tx: 290, ty: 216 }]
            },
            text: "Maman la serre dans ses bras. « Le vase, ce n'est qu'un vase. Dire la vérité quand c'est difficile, ça, c'est courageux. » Puis Peppa va présenter ses excuses à George."
          }
        ]
      },

      /* ---------- 10 — attendre son tour ---------- */
      {
        id: 'attendre-son-tour',
        title: 'La file du toboggan',
        subtitle: 'Attendre sans que ce soit long',
        tag: 'Grandir',
        themes: ['Grandir', 'Amitié', 'Règles'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'slide', x: 220, y: 516, s: 1 },
            { t: 'peppa', x: 540, y: 514, s: 1.15, pose: 'stand' },
            { t: 'suzy', x: 680, y: 514, s: 1.05, pose: 'stand' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'slide', x: 200, y: 518, s: 1.05 }],
              items: [
                { t: 'suzy', x: 466, y: 514, s: 1.05, pose: 'stand' },
                { t: 'peppa', x: 606, y: 514, s: 1.15, pose: 'stand' },
                { t: 'livia', x: 709, y: 516, s: 1.05, pose: 'stand' }
              ],
              sfx: [{ t: 'LE TOBOGGAN !', x: 400, y: 200, fs: 32, rot: -6, color: '#f7c518' }]
            },
            text: "Au parc, il n'y a qu'un seul toboggan, et il y a beaucoup de monde. Alors tout le monde fait la queue : Suzy devant, puis Peppa, puis Livia."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'slide', x: 200, y: 518, s: 1.05 }],
              items: [
                { t: 'peppa', x: 480, y: 514, s: 1.2, pose: 'shrug', mood: 'sad' },
                { t: 'livia', x: 680, y: 516, s: 1.05, pose: 'stand' }
              ],
              bubbles: [{ x: 300, y: 26, w: 300, t: 'C\'est trop long, j\'en peux plus !', tx: 480, ty: 226 }]
            },
            text: "La queue avance tout doucement. Peppa se balance d'une patte sur l'autre. « C'est trop long », soupire-t-elle. « Beaucoup trop long. »"
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'slide', x: 220, y: 518, s: 1.05 }],
              items: [
                { t: 'peppa', x: 420, y: 514, s: 1.2, pose: 'run' },
                { t: 'suzy', x: 640, y: 514, s: 1.05, pose: 'shrug', mood: 'sad' }
              ],
              sfx: [{ t: 'PEPPA A DOUBLÉ !', x: 460, y: 190, fs: 30, rot: -6, color: '#e2593c' }]
            },
            text: "Alors Peppa fait quelque chose de rapide : elle contourne tout le monde et grimpe l'échelle avant son tour. Derrière elle, les autres crient. Suzy croise les bras."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'slide', x: 220, y: 518, s: 1.05 }],
              items: [
                { t: 'peppa', x: 520, y: 514, s: 1.2, pose: 'stand', mood: 'sad' },
                { t: 'suzy', x: 700, y: 514, s: 1.05, pose: 'shrug', mood: 'sad' }
              ],
              bubbles: [{ x: 470, y: 26, w: 310, t: 'On ne joue plus avec toi si tu triches.', tx: 700, ty: 226 }]
            },
            text: "En bas du toboggan, plus personne ne lui parle. « On ne joue plus avec toi si tu triches », dit Suzy. C'est descendu très vite, et ce n'était même pas amusant."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'mummy', x: 320, y: 514, s: 1.3, pose: 'hold' },
                { t: 'peppa', x: 570, y: 514, s: 1.15, mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 26, w: 310, t: 'Attendre, ça se remplit. Ça ne se saute pas.', tx: 330, ty: 226 }]
            },
            text: "Maman lui explique un secret : quand on attend, on peut remplir l'attente. Compter les nuages. Chanter tout bas. Parler à celui qui est devant."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'slide', x: 200, y: 518, s: 1.05 }],
              items: [
                { t: 'suzy', x: 452, y: 514, s: 1.05, pose: 'hold' },
                { t: 'peppa', x: 596, y: 514, s: 1.15, pose: 'hold' },
                { t: 'livia', x: 709, y: 516, s: 1.05, pose: 'stand' }
              ],
              bubbles: [{ x: 260, y: 26, w: 310, t: 'Un nuage… deux nuages… trois nuages…', tx: 630, ty: 226 }]
            },
            text: "Peppa retourne se mettre à la fin de la file. Elle compte les nuages avec Livia. Un, deux, trois… et son tour arrive bien avant le septième."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'slide', x: 200, y: 518, s: 1.05 },
                { t: 'peppa', x: 520, y: 470, s: 1.15, pose: 'jump' },
                { t: 'suzy', x: 700, y: 514, s: 1.05, pose: 'armsup' }
              ],
              sfx: [{ t: 'WHIIII !', x: 400, y: 220, fs: 40, rot: -8, color: '#f7c518' }]
            },
            text: "Et là, ça y est : c'est son tour, pour de vrai. Elle descend en criant, et tout le monde crie avec elle. Attendu, c'était bien meilleur."
          }
        ]
      },

      /* ---------- 11 : le petit frère ---------- */
      {
        id: 'petit-frere',
        title: 'Pablo veut faire pareil',
        subtitle: 'Un petit frère qui copie tout',
        tag: 'Grandir',
        themes: ['Famille', 'Émotions'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'peppa', x: 230, y: 520, s: 1.15 },
            { t: 'livia', x: 440, y: 522, s: 1.1 },
            { t: 'pablo', x: 640, y: 526, s: 1.1, pose: 'wave' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 522, s: 1.15, pose: 'hold' },
                { t: 'peppa', x: 560, y: 520, s: 1.2, pose: 'hold' }
              ],
              sfx: [{ t: 'ENFIN TRANQUILLES !', x: 430, y: 168, fs: 26, rot: -4, color: '#e8436e' }]
            },
            text: "Peppa était venue jouer chez Livia. Elles avaient sorti les crayons, les cubes et le grand tapis. C'était un après-midi parfait, qui allait durer trois minutes."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 260, y: 522, s: 1.1 },
                { t: 'peppa', x: 480, y: 520, s: 1.15, mood: 'wow' },
                { t: 'pablo', x: 690, y: 526, s: 1.1, pose: 'quatrepattes' }
              ],
              sfx: [{ t: 'PA-BLO !', x: 400, y: 166, fs: 32, rot: -6, color: '#8ec9f0' }]
            },
            text: "Pablo arriva en trottinant, les bras en avant. Pablo est le petit frère de Livia. Il a un an et demi, il ne parle presque pas, et il veut exactement ce que sa grande sœur a dans les mains."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 522, s: 1.15, mood: 'sad' },
                { t: 'pablo', x: 560, y: 526, s: 1.1, pose: 'hold', mood: 'wow' }
              ],
              front: [
                { t: 'cube', x: 190, y: 546, s: .8, rot: -14, color: '#e0453c' },
                { t: 'cube', x: 700, y: 542, s: .8, rot: 20, color: '#4a7fc1' }
              ],
              sfx: [{ t: 'PATATRAS !', x: 420, y: 164, fs: 34, rot: -8, color: '#e0453c' }]
            },
            text: "Il prit le crayon rouge. Il renversa la tour de cubes. Il s'assit au milieu du dessin. À chaque fois, il riait, comme si c'était le jeu le plus drôle du monde."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 400, y: 522, s: 1.25, pose: 'armsup', mood: 'sad' }
              ],
              sfx: [{ t: 'IL FAIT TOUT COMME MOI !', x: 400, y: 164, fs: 24, rot: -4, color: '#e0453c' }]
            },
            text: "« Il fait tout comme moi ! » cria Livia. « Il ne sait rien faire tout seul ! » Elle avait la voix qui montait, et les joues qui chauffaient."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'peppa', x: 280, y: 520, s: 1.15, pose: 'point' },
                { t: 'livia', x: 540, y: 522, s: 1.1, mood: 'sad' }
              ],
              bubbles: [{ x: 60, y: 24, w: 330, t: 'George aussi. C\'est comme ça, les petits.', tx: 285, ty: 244 }]
            },
            text: "« George aussi faisait ça », dit Peppa. « Il copiait tout. Maintenant, il joue avec moi. » Livia n'avait jamais pensé qu'un petit frère, ça pouvait devenir quelqu'un avec qui jouer."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 280, y: 522, s: 1.1, pose: 'point' },
                { t: 'peppa', x: 480, y: 520, s: 1.1 },
                { t: 'pablo', x: 680, y: 526, s: 1.1, pose: 'hold' }
              ],
              front: [{ t: 'tourcubes', x: 590, y: 546, s: .7, n: 3 }],
              sfx: [{ t: 'À TOI, PABLO !', x: 380, y: 168, fs: 26, rot: -5, color: '#f7c518' }]
            },
            text: "Alors Livia essaya autre chose. Elle empila trois cubes et dit : « À toi, Pablo. » Pablo posa le quatrième, tout doucement, la langue sortie. La tour tint debout."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'peppa', x: 220, y: 508, s: 1.05, pose: 'sit' },
                { t: 'livia', x: 430, y: 508, s: 1.05, pose: 'sit' },
                { t: 'pablo', x: 640, y: 512, s: 1.05, pose: 'sit' }
              ],
              front: [{ t: 'cube', x: 730, y: 544, s: .75, rot: 10, color: '#f7c518' }]
            },
            text: "Le soir, la tour faisait onze cubes. Pablo en renversa dix. Livia respira un grand coup, et recommença. C'est aussi ça, être une grande sœur."
          }
        ]
      },

      /* ---------- 12 : partager quand ça coûte ---------- */
      {
        id: 'dernier-gateau',
        title: 'Le dernier gâteau',
        subtitle: 'Partager quand il n\'y en a qu\'un',
        tag: 'Grandir',
        themes: ['Partager', 'Amitié'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'peppa', x: 280, y: 520, s: 1.15, pose: 'hold' },
            { t: 'livia', x: 520, y: 522, s: 1.1, pose: 'hold' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 522, s: 1.15, pose: 'hold' },
                { t: 'peppa', x: 560, y: 520, s: 1.15, pose: 'hold' }
              ],
              sfx: [{ t: 'LE GOÛTER !', x: 430, y: 168, fs: 30, rot: -5, color: '#f2803d' }]
            },
            text: "Il y avait eu six gâteaux au chocolat. Livia en avait mangé deux. Peppa en avait mangé trois. Sur l'assiette, il en restait exactement un."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 280, y: 522, s: 1.15, mood: 'wow' },
                { t: 'peppa', x: 540, y: 520, s: 1.15, mood: 'wow' }
              ],
              sfx: [{ t: 'LE DERNIER…', x: 410, y: 166, fs: 30, rot: -4, color: '#6d5847' }]
            },
            text: "Elles le regardèrent toutes les deux en même temps. Le dernier gâteau. Il n'y avait plus rien à dire, et pourtant il y avait beaucoup de choses à décider."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 280, y: 522, s: 1.15, pose: 'point' },
                { t: 'peppa', x: 560, y: 520, s: 1.15, pose: 'point', mood: 'sad' }
              ],
              bubbles: [{ x: 60, y: 26, w: 300, t: 'C\'est moi qui l\'ai vu en premier !', tx: 285, ty: 244 }]
            },
            text: "« C'est moi qui l'ai vu en premier ! » dit Livia. « C'est moi qui ai apporté l'assiette ! » dit Peppa. Chacune avait une très bonne raison. C'est souvent comme ça, les très bonnes raisons."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'mummy', x: 300, y: 518, s: 1.35, pose: 'shrug' },
                { t: 'livia', x: 560, y: 522, s: 1.1, mood: 'sad' }
              ],
              bubbles: [{ x: 330, y: 24, w: 330, t: 'Je ne choisis pas. C\'est votre gâteau.', tx: 320, ty: 240 }]
            },
            text: "Maman Pig passa par là. « Je ne choisis pas », dit-elle. « C'est votre gâteau. » Puis elle posa un couteau sur la table, et elle repartit, l'air de rien."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 522, s: 1.15, pose: 'hold' },
                { t: 'peppa', x: 560, y: 520, s: 1.15, pose: 'hold' }
              ],
              sfx: [{ t: 'CLIC.', x: 430, y: 164, fs: 32, rot: -6, color: '#7ba450' }]
            },
            text: "Livia prit le couteau. Elle coupa le gâteau en deux, tout doucement, en visant bien le milieu. Une moitié n'est pas un gâteau entier. Une moitié, c'est quand même beaucoup mieux que rien du tout."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'peppa', x: 300, y: 520, s: 1.15, pose: 'point' },
                { t: 'livia', x: 560, y: 522, s: 1.15 }
              ],
              bubbles: [{ x: 330, y: 24, w: 320, t: 'Prends la plus grosse, tu as coupé.', tx: 320, ty: 240 }]
            },
            text: "« Prends la plus grosse », dit Peppa. « Toi tu as coupé, alors moi je choisis, et je choisis que tu prends la plus grosse. » Livia ne comprit pas très bien, mais ça lui plut beaucoup."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'peppa', x: 300, y: 508, s: 1.1, pose: 'sit' },
                { t: 'livia', x: 540, y: 506, s: 1.1, pose: 'sit' }
              ]
            },
            text: "Elles mangèrent leur moitié sur les marches, sans se presser. Livia trouva que ce demi-gâteau-là avait bien meilleur goût que les deux qu'elle avait mangés toute seule."
          }
        ]
      },

      /* ---------- 13 : la règle qui protège ---------- */
      {
        id: 'donner-la-main',
        title: 'On donne la main',
        subtitle: 'La règle qui ne se discute pas',
        tag: 'Grandir',
        themes: ['Règles', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'road',
          items: [
            { t: 'mummy', x: 300, y: 518, s: 1.35, pose: 'hold' },
            { t: 'livia', x: 540, y: 522, s: 1.1, pose: 'hold' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'road',
              items: [
                { t: 'mummy', x: 280, y: 518, s: 1.35, pose: 'hold' },
                { t: 'livia', x: 520, y: 522, s: 1.15, pose: 'hold' },
                { t: 'peppa', x: 700, y: 520, s: 1.1, pose: 'hold' }
              ],
              sfx: [{ t: 'ON Y VA !', x: 430, y: 160, fs: 30, rot: -5, color: '#3f6ea8' }]
            },
            text: "Pour aller à la boulangerie, il faut traverser la route. Avant de traverser, on donne la main. C'est comme ça depuis toujours, et personne n'a jamais demandé pourquoi."
          },
          {
            scene: {
              bg: 'road',
              items: [
                { t: 'mummy', x: 260, y: 518, s: 1.35 },
                { t: 'livia', x: 540, y: 522, s: 1.15, pose: 'shrug' }
              ],
              bubbles: [{ x: 320, y: 24, w: 330, t: 'Je suis grande. Je peux tout seule.', tx: 540, ty: 240 }]
            },
            text: "Ce jour-là, Livia retira sa main. « Je suis grande », dit-elle. « Je peux traverser toute seule. » Elle était très fière de sa phrase. Elle l'avait préparée dans sa tête."
          },
          {
            scene: {
              bg: 'road',
              items: [
                { t: 'livia', x: 400, y: 522, s: 1.25, pose: 'run' }
              ],
              front: [{ t: 'car', x: 610, y: 512, s: 1.15 }],
              sfx: [{ t: 'TUUUT !!', x: 600, y: 190, fs: 40, rot: -10, color: '#e0453c' }]
            },
            text: "Elle fit deux pas sur la route. Une voiture arriva. Elle klaxonna très fort et s'arrêta d'un coup. Il ne s'est rien passé. Mais il aurait pu se passer quelque chose."
          },
          {
            scene: {
              bg: 'road',
              items: [
                { t: 'mummy', x: 300, y: 518, s: 1.4, mood: 'wow' },
                { t: 'livia', x: 570, y: 522, s: 1.15, mood: 'sad' }
              ],
              sfx: [{ t: 'LIVIA !', x: 420, y: 164, fs: 36, rot: -7, color: '#e0453c' }]
            },
            text: "Maman Pig cria son prénom très fort. Puis elle la serra très fort. Sa voix tremblait un peu. Livia comprit que ce n'était pas de la colère : c'était de la peur."
          },
          {
            scene: {
              bg: 'road',
              items: [
                { t: 'mummy', x: 280, y: 496, s: 1.35, pose: 'sit' },
                { t: 'livia', x: 540, y: 502, s: 1.1, pose: 'sit', mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 24, w: 340, t: 'La règle, c\'est pour te ramener à la maison.', tx: 300, ty: 236 }]
            },
            text: "Elles s'assirent sur le trottoir. « Certaines règles se discutent », dit Maman Pig. « Celle-là, non. La route, c'est la règle qui te ramène à la maison. »"
          },
          {
            scene: {
              bg: 'road',
              items: [
                { t: 'mummy', x: 300, y: 518, s: 1.35, pose: 'hold' },
                { t: 'livia', x: 540, y: 522, s: 1.15, pose: 'hold' }
              ],
              sfx: [{ t: 'À GAUCHE, À DROITE…', x: 420, y: 158, fs: 26, rot: -4, color: '#3f6ea8' }]
            },
            text: "Alors Livia reprit la main. Elle regarda à gauche, puis à droite, puis encore à gauche, comme on lui avait appris. Et c'est elle qui dit : « On peut y aller. »"
          },
          {
            scene: {
              bg: 'road', time: 'sunset',
              items: [
                { t: 'mummy', x: 260, y: 518, s: 1.35, pose: 'hold' },
                { t: 'livia', x: 500, y: 522, s: 1.15, pose: 'hold' },
                { t: 'peppa', x: 690, y: 520, s: 1.1, pose: 'hold' }
              ]
            },
            text: "Au retour, Livia tendit la main la première, sans qu'on lui demande. Être grande, ce n'est pas faire tout seul. C'est savoir quand on a besoin de quelqu'un."
          }
        ]
      },

      /* ---------- 14 : le non des parents ---------- */
      {
        id: 'maman-dit-non',
        title: 'Quand Maman dit non',
        subtitle: 'Un non, et ce qui vient après',
        tag: 'Grandir',
        themes: ['Règles', 'Émotions'],
        minutes: 5,
        cover: {
          bg: 'village',
          items: [
            { t: 'mummy', x: 300, y: 516, s: 1.35 },
            { t: 'livia', x: 540, y: 520, s: 1.1, mood: 'sad' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'mummy', x: 280, y: 516, s: 1.35, pose: 'hold' },
                { t: 'livia', x: 540, y: 520, s: 1.15, pose: 'point' }
              ],
              sfx: [{ t: 'JE VEUX ÇA !', x: 430, y: 164, fs: 30, rot: -5, color: '#e8436e' }]
            },
            text: "Au magasin, il y avait un tout petit cheval en plastique. Livia le voulait. Elle le voulait tout de suite, elle le voulait beaucoup, et elle le dit très clairement."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'mummy', x: 300, y: 516, s: 1.4, pose: 'shrug' },
                { t: 'livia', x: 570, y: 520, s: 1.15, mood: 'sad' }
              ],
              bubbles: [{ x: 60, y: 24, w: 300, t: 'Non. Pas aujourd\'hui.', tx: 300, ty: 240 }]
            },
            text: "« Non », dit Maman. « Pas aujourd'hui. » Elle ne dit pas peut-être. Elle ne dit pas on verra. Elle dit non, une seule fois, calmement, ce qui est très énervant."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 400, y: 496, s: 1.25, pose: 'sit', mood: 'wow' }
              ],
              sfx: [{ t: 'AAAAAAH !', x: 400, y: 156, fs: 44, rot: -9, color: '#e0453c' }]
            },
            text: "Alors Livia se coucha par terre. Elle cria. Elle tapa des pieds. Tout le magasin la regarda. Elle sentait bien que c'était très fort, ce qui sortait d'elle."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'mummy', x: 320, y: 494, s: 1.4, pose: 'sit' },
                { t: 'livia', x: 580, y: 502, s: 1.15, pose: 'sit', mood: 'sad' }
              ],
              sfx: [{ t: '. . .', x: 450, y: 172, fs: 32, rot: 0, color: '#8a7768' }]
            },
            text: "Maman ne cria pas. Elle s'assit à côté, sans rien dire, et elle attendit. La colère est comme une grosse vague : si personne ne la nourrit, elle finit par redescendre."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'mummy', x: 300, y: 516, s: 1.35, pose: 'hold' },
                { t: 'livia', x: 560, y: 520, s: 1.15, mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 24, w: 340, t: 'Tu as le droit d\'être triste. Le non reste non.', tx: 300, ty: 240 }]
            },
            text: "Quand ce fut fini, Maman dit : « Tu as le droit d'être triste. Tu as le droit d'être en colère. Le non, lui, reste non. » Les deux choses tenaient ensemble, bizarrement."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'mummy', x: 280, y: 516, s: 1.35, pose: 'point' },
                { t: 'livia', x: 540, y: 520, s: 1.15 }
              ],
              bubbles: [{ x: 60, y: 24, w: 330, t: 'On le note sur la liste des envies.', tx: 285, ty: 240 }]
            },
            text: "« On le note sur la liste des envies », dit Maman. « Pour ton anniversaire, tu choisiras dedans. » Ce n'était pas tout de suite. Mais ce n'était plus jamais non plus."
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'mummy', x: 300, y: 516, s: 1.35, pose: 'hold' },
                { t: 'livia', x: 540, y: 520, s: 1.15, pose: 'hold' }
              ]
            },
            text: "En sortant, Livia tenait la liste dans sa poche. Le petit cheval était resté au magasin. Il n'avait pas bougé, et Livia savait maintenant où le retrouver."
          }
        ]
      },

      /* ---------- 15 : le tour de parole ---------- */
      {
        id: 'tour-de-parole',
        title: 'Chacun son tour de parler',
        subtitle: 'On ne coupe pas, même quand c\'est urgent',
        tag: 'Grandir',
        themes: ['Partager', 'Règles', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'mummy', x: 260, y: 506, s: 1.35, pose: 'hold' },
            { t: 'livia', x: 500, y: 510, s: 1.1, pose: 'point' },
            { t: 'george', x: 680, y: 512, s: .95 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 240, y: 506, s: 1.35 },
                { t: 'peppa', x: 470, y: 508, s: 1.15, pose: 'point' },
                { t: 'livia', x: 680, y: 510, s: 1.1, pose: 'point' }
              ],
              sfx: [{ t: 'ET MOI ! ET MOI !', x: 430, y: 148, fs: 28, rot: -5, color: '#e8436e' }]
            },
            text: "À table, tout le monde avait quelque chose de très important à raconter. Peppa parlait. Livia parlait par-dessus. Maman n'entendait ni l'une ni l'autre."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 300, y: 508, s: 1.15, mood: 'sad' },
                { t: 'livia', x: 560, y: 510, s: 1.15, pose: 'point' }
              ],
              bubbles: [{ x: 320, y: 22, w: 330, t: 'Tu me coupes tout le temps !', tx: 560, ty: 238 }]
            },
            text: "« Tu me coupes tout le temps ! » dit Peppa. Livia répondit qu'elle avait fini. Ce n'était pas vrai : Peppa n'avait dit que le début, et le début n'est pas la fin."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 506, s: 1.4, pose: 'hold' },
                { t: 'livia', x: 560, y: 510, s: 1.15, mood: 'wow' }
              ],
              sfx: [{ t: 'LA CUILLÈRE !', x: 430, y: 146, fs: 30, rot: -5, color: '#f2803d' }]
            },
            text: "Alors Maman posa une grande cuillère en bois au milieu de la table. « Celui qui a la cuillère parle », dit-elle. « Les autres écoutent. Puis on la passe. »"
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 280, y: 508, s: 1.2, pose: 'hold' },
                { t: 'livia', x: 560, y: 510, s: 1.15, mood: 'sad' }
              ],
              sfx: [{ t: 'MMMMH !', x: 430, y: 148, fs: 32, rot: -6, color: '#6d5847' }]
            },
            text: "Peppa prit la cuillère et raconta toute son histoire, du début à la fin. Livia serra les lèvres très fort. Attendre son tour de parler, c'est presque aussi dur qu'attendre son tour de toboggan."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 280, y: 508, s: 1.15 },
                { t: 'livia', x: 540, y: 510, s: 1.2, pose: 'hold' }
              ],
              bubbles: [{ x: 300, y: 22, w: 340, t: 'À moi ! Alors, dans le jardin, il y avait…', tx: 545, ty: 238 }]
            },
            text: "Puis ce fut son tour. Et là, quelque chose d'étonnant arriva : tout le monde se tut, et tout le monde l'écouta jusqu'au bout. Livia n'avait jamais été écoutée aussi longtemps."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 250, y: 506, s: 1.35, pose: 'hold' },
                { t: 'peppa', x: 470, y: 508, s: 1.1, pose: 'hold' },
                { t: 'livia', x: 680, y: 510, s: 1.05, pose: 'hold' }
              ]
            },
            text: "Depuis, la cuillère reste sur la table. On ne s'en sert presque plus. Il suffit de la regarder pour se rappeler qu'une histoire a un début, un milieu et une fin."
          }
        ]
      },

      /* ---------- 16 : partager sa maman ---------- */
      {
        id: 'maman-est-prise',
        title: 'Maman est prise',
        subtitle: 'Quand il faut attendre son tour de câlin',
        tag: 'Grandir',
        themes: ['Partager', 'Famille', 'Émotions'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'mummy', x: 280, y: 506, s: 1.35, pose: 'hold' },
            { t: 'pablo', x: 460, y: 512, s: 1.05, pose: 'hold' },
            { t: 'livia', x: 650, y: 510, s: 1.1, mood: 'sad' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 510, s: 1.25, pose: 'hold' }
              ],
              sfx: [{ t: 'REGARDE MON DESSIN !', x: 400, y: 146, fs: 26, rot: -4, color: '#3ec9c9' }]
            },
            text: "Livia avait fait un dessin. Un vrai, avec un soleil, un chien et une maison qui tenait debout. Elle courut le montrer à Maman tout de suite, parce que tout de suite c'est important."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 506, s: 1.4, pose: 'hold' },
                { t: 'pablo', x: 500, y: 512, s: 1.05, pose: 'hold', mood: 'sad' },
                { t: 'livia', x: 690, y: 510, s: 1.05, mood: 'sad' }
              ],
              sfx: [{ t: 'OUIN ! OUIN !', x: 400, y: 146, fs: 30, rot: -6, color: '#8ec9f0' }]
            },
            text: "Mais Maman avait Pablo dans les bras. Pablo pleurait. Pablo pleure souvent, et quand il pleure, il prend toute la place, tous les bras et toutes les oreilles."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 510, s: 1.25, mood: 'sad' }
              ],
              sfx: [{ t: 'DANS DEUX MINUTES…', x: 400, y: 148, fs: 26, rot: -4, color: '#6d5847' }]
            },
            text: "« Dans deux minutes, ma chérie. » Deux minutes, c'est très court quand on joue, et très long quand on attend. Livia s'assit par terre avec son dessin sur les genoux."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 494, s: 1.2, pose: 'sit' }
              ],
              front: [{ t: 'cube', x: 620, y: 540, s: .8, rot: 12, color: '#e0453c' }],
              sfx: [{ t: 'ET SI J\'AJOUTAIS…', x: 400, y: 146, fs: 26, rot: -4, color: '#f7c518' }]
            },
            text: "Alors, en attendant, elle ajouta un chat sur le toit. Puis un arbre. Puis un bonhomme avec un chapeau. Le dessin devint beaucoup plus beau qu'avant."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 494, s: 1.35, pose: 'sit' },
                { t: 'livia', x: 570, y: 494, s: 1.15, pose: 'sit' }
              ],
              bubbles: [{ x: 320, y: 22, w: 340, t: 'Voilà. Maintenant je suis toute à toi.', tx: 320, ty: 236 }]
            },
            text: "Pablo s'endormit. Maman s'assit à côté de Livia. « Voilà », dit-elle. « Maintenant je suis toute à toi. » Et elle regarda le dessin très longtemps, en montrant chaque chose du doigt."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 280, y: 506, s: 1.35, pose: 'hold' },
                { t: 'livia', x: 520, y: 510, s: 1.15, pose: 'hold' },
                { t: 'pablo', x: 700, y: 512, s: 1, mood: 'sleep' }
              ]
            },
            text: "« Tu as attendu », dit Maman. « C'est difficile, d'attendre. » Livia répondit que oui, mais que ça lui avait laissé le temps d'ajouter le chat. Les deux étaient vraies."
          }
        ]
      },

      /* ---------- 17 : réparer ---------- */
      {
        id: 'reparer',
        title: 'Ce qu\'on fait après',
        subtitle: 'Pardon, c\'est le début, pas la fin',
        tag: 'Grandir',
        themes: ['Règles', 'Grandir'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'livia', x: 300, y: 522, s: 1.15, mood: 'sad' },
            { t: 'daddy', x: 550, y: 518, s: 1.4 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 400, y: 522, s: 1.25, pose: 'point' }
              ],
              front: [{ t: 'flower', x: 640, y: 540, s: 2 }],
              sfx: [{ t: 'INTERDIT DE CUEILLIR', x: 400, y: 166, fs: 26, rot: -4, color: '#7ba450' }]
            },
            text: "Dans le jardin, il y avait une règle : on ne cueille pas les fleurs de Papa. Livia connaissait la règle. Elle la connaissait même très bien."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 400, y: 522, s: 1.25, pose: 'hold', mood: 'wow' }
              ],
              sfx: [{ t: 'CLAC !', x: 420, y: 164, fs: 34, rot: -7, color: '#e0453c' }]
            },
            text: "Elle en cueillit six. Six d'un coup. Elles étaient jaunes et elles sentaient bon, et sur le moment, ça valait vraiment le coup."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'daddy', x: 300, y: 518, s: 1.4, mood: 'sad' },
                { t: 'livia', x: 570, y: 522, s: 1.15, mood: 'sad' }
              ],
              bubbles: [{ x: 60, y: 24, w: 300, t: 'Pardon. Pardon, pardon !', tx: 570, ty: 240 }]
            },
            text: "Papa vit le trou dans le massif. Livia dit pardon tout de suite, très vite, plusieurs fois. Elle avait remarqué que pardon fait souvent s'arrêter les histoires."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'daddy', x: 300, y: 518, s: 1.4, pose: 'shrug' },
                { t: 'livia', x: 570, y: 522, s: 1.15, mood: 'wow' }
              ],
              bubbles: [{ x: 300, y: 22, w: 340, t: 'Pardon, c\'est le début. Après, on répare.', tx: 305, ty: 236 }]
            },
            text: "« Pardon, c'est le début », dit Papa. « Ce n'est pas la fin. Après pardon, il y a réparer. » Livia ne savait pas qu'il y avait quelque chose après pardon."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'daddy', x: 280, y: 518, s: 1.4, pose: 'hold' },
                { t: 'livia', x: 540, y: 522, s: 1.15, pose: 'hold' }
              ],
              front: [{ t: 'bucket', x: 690, y: 542, s: 1.1 }],
              sfx: [{ t: 'ON CREUSE !', x: 420, y: 164, fs: 28, rot: -5, color: '#7ba450' }]
            },
            text: "Ils allèrent chercher six graines. Livia creusa six trous, avec la petite pelle, à l'endroit exact des six fleurs. Ça prit tout l'après-midi, et c'était fatigant."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'daddy', x: 300, y: 518, s: 1.4 },
                { t: 'livia', x: 560, y: 522, s: 1.15, pose: 'point' }
              ],
              front: [{ t: 'flower', x: 700, y: 542, s: 1.4 }]
            },
            text: "Trois semaines plus tard, une première pousse sortit. Livia la surveilla tous les jours. Réparer, c'est plus long que dire pardon. C'est aussi ce dont on se souvient."
          }
        ]
      },

      /* ---------- 18 : quand un adulte se trompe ---------- */
      {
        id: 'papa-se-trompe',
        title: 'Le jour où Papa s\'est trompé',
        subtitle: 'Les grands aussi disent pardon',
        tag: 'Grandir',
        themes: ['Règles', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'daddy', x: 300, y: 504, s: 1.4, mood: 'sad' },
            { t: 'livia', x: 560, y: 510, s: 1.15, mood: 'sad' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'daddy', x: 300, y: 504, s: 1.45, mood: 'sad' },
                { t: 'livia', x: 570, y: 510, s: 1.15, mood: 'wow' }
              ],
              sfx: [{ t: 'QUI A FAIT ÇA ?', x: 430, y: 144, fs: 30, rot: -5, color: '#e0453c' }]
            },
            text: "Le mur du couloir avait un grand trait de feutre bleu. Papa n'était pas content du tout. « Qui a fait ça ? » demanda-t-il en regardant Livia."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 510, s: 1.25, pose: 'shrug', mood: 'sad' }
              ],
              bubbles: [{ x: 210, y: 22, w: 340, t: 'Ce n\'est pas moi. Je te promets.', tx: 400, ty: 236 }]
            },
            text: "« Ce n'est pas moi », dit Livia. « Je te promets. » Papa dit que ce n'était pas la peine de mentir. Livia sentit quelque chose de très injuste lui monter dans la gorge."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 494, s: 1.2, pose: 'sit', mood: 'sad' }
              ],
              sfx: [{ t: '. . .', x: 430, y: 152, fs: 32, rot: 0, color: '#8a7768' }]
            },
            text: "Elle alla dans sa chambre. Elle ne pleura même pas. C'est très particulier, d'être punie pour quelque chose qu'on n'a pas fait : ça ne ressemble à rien d'autre."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'daddy', x: 300, y: 504, s: 1.4, mood: 'wow' },
                { t: 'pablo', x: 560, y: 510, s: 1.05, pose: 'hold' }
              ],
              sfx: [{ t: 'OH…', x: 430, y: 146, fs: 34, rot: -6, color: '#8ec9f0' }]
            },
            text: "Un peu plus tard, Papa trouva Pablo dans le couloir, un feutre bleu dans la main, en train d'ajouter un deuxième trait juste à côté du premier."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'daddy', x: 300, y: 494, s: 1.4, pose: 'sit' },
                { t: 'livia', x: 570, y: 496, s: 1.15, pose: 'sit' }
              ],
              bubbles: [{ x: 300, y: 22, w: 340, t: 'Je me suis trompé. Pardon, Livia.', tx: 305, ty: 236 }]
            },
            text: "Papa vint s'asseoir sur le lit. « Je me suis trompé », dit-il. « Je ne t'ai pas crue, et j'aurais dû. Pardon, Livia. » Un papa qui dit pardon, ça fait un drôle d'effet."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'daddy', x: 280, y: 504, s: 1.4, pose: 'hold' },
                { t: 'livia', x: 520, y: 510, s: 1.15, pose: 'hold' },
                { t: 'pablo', x: 700, y: 512, s: 1 }
              ]
            },
            text: "Ils nettoyèrent le mur tous les deux. Livia comprit ce jour-là que les grands ne savent pas tout, et que ce n'est pas grave, tant qu'ils savent le dire."
          }
        ]
      },

      /* ---------- 19 : la honte ---------- */
      {
        id: 'la-honte',
        title: 'Devant tout le monde',
        subtitle: 'La honte, et comment elle s\'en va',
        tag: 'Grandir',
        themes: ['Émotions', 'Grandir'],
        minutes: 5,
        cover: {
          bg: 'village',
          items: [
            { t: 'livia', x: 380, y: 522, s: 1.2, mood: 'sad' },
            { t: 'peppa', x: 620, y: 520, s: 1.1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'peppa', x: 240, y: 520, s: 1.1 },
                { t: 'livia', x: 450, y: 522, s: 1.15, pose: 'armsup' },
                { t: 'suzy', x: 660, y: 520, s: 1.05 }
              ],
              sfx: [{ t: 'REGARDEZ-MOI !', x: 430, y: 166, fs: 28, rot: -5, color: '#3ec9c9' }]
            },
            text: "Livia avait appris à faire la roue. Enfin, presque. Devant toute la classe, elle annonça qu'elle allait la faire, et tout le monde s'arrêta pour regarder."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 400, y: 494, s: 1.25, pose: 'sit', mood: 'wow' }
              ],
              sfx: [{ t: 'BADABOUM !', x: 400, y: 164, fs: 36, rot: -8, color: '#e0453c' }]
            },
            text: "Elle prit son élan, leva les bras, et tomba sur les fesses. Tout le monde rit. Pas méchamment. Mais tout le monde rit, et elle entendit chaque rire séparément."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 400, y: 522, s: 1.3, mood: 'sad' }
              ],
              sfx: [{ t: 'TOUT ROUGE…', x: 400, y: 166, fs: 30, rot: -5, color: '#e0453c' }]
            },
            text: "Ses joues devinrent brûlantes. Elle voulut disparaître, devenir toute petite, ou partir vivre ailleurs. C'est ça, la honte : ça chauffe, et ça donne envie de s'en aller."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'peppa', x: 300, y: 500, s: 1.15, pose: 'sit' },
                { t: 'livia', x: 560, y: 494, s: 1.15, pose: 'sit', mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 22, w: 340, t: 'Moi je suis tombée à la piscine. Devant tout le monde.', tx: 305, ty: 236 }]
            },
            text: "Peppa vint s'asseoir à côté. « Moi je suis tombée à la piscine », dit-elle. « Devant tout le monde. Deux fois. » Livia releva la tête de deux centimètres."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'suzy', x: 260, y: 520, s: 1.05, pose: 'point' },
                { t: 'peppa', x: 460, y: 520, s: 1.1 },
                { t: 'livia', x: 660, y: 522, s: 1.1 }
              ],
              sfx: [{ t: 'MOI AUSSI !', x: 400, y: 166, fs: 28, rot: -5, color: '#f7c518' }]
            },
            text: "Alors Suzy raconta la fois du chapeau dans la soupe. Puis quelqu'un d'autre raconta autre chose. Il s'avéra que tout le monde était déjà tombé devant tout le monde."
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'peppa', x: 300, y: 520, s: 1.1 },
                { t: 'livia', x: 540, y: 522, s: 1.15, pose: 'armsup' }
              ],
              sfx: [{ t: 'ENCORE UNE FOIS !', x: 430, y: 164, fs: 26, rot: -5, color: '#f7c518' }]
            },
            text: "Livia réessaya la roue avant de rentrer. Elle retomba. Elle rit la première, cette fois, et c'était complètement différent. La honte n'aime pas beaucoup qu'on rie avec elle."
          }
        ]
      },

      /* ---------- 20 : devenir grande sœur ---------- */
      {
        id: 'grande-soeur',
        title: 'Le jour où Pablo est arrivé',
        subtitle: 'Devenir grande sœur, ça ne se décide pas',
        tag: 'Grandir',
        themes: ['Famille', 'Émotions'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'mummy', x: 300, y: 506, s: 1.35, pose: 'hold' },
            { t: 'pablo', x: 480, y: 512, s: 1, mood: 'sleep' },
            { t: 'livia', x: 660, y: 510, s: 1.1, mood: 'sad' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 506, s: 1.4, pose: 'hold' },
                { t: 'livia', x: 560, y: 510, s: 1.15 }
              ],
              sfx: [{ t: 'UN BÉBÉ !', x: 430, y: 146, fs: 32, rot: -5, color: '#f2a0c2' }]
            },
            text: "On avait prévenu Livia longtemps à l'avance : il allait y avoir un bébé. Elle avait dit oui, super, d'accord. Elle imaginait quelqu'un avec qui jouer tout de suite."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 320, y: 506, s: 1.4, pose: 'hold' },
                { t: 'pablo', x: 520, y: 512, s: 1, mood: 'sleep' },
                { t: 'livia', x: 700, y: 510, s: 1.05, mood: 'sad' }
              ],
              sfx: [{ t: 'IL DORT. ENCORE.', x: 400, y: 146, fs: 26, rot: -4, color: '#6d5847' }]
            },
            text: "Pablo arriva. Il ne jouait pas. Il ne parlait pas. Il dormait, il mangeait, il pleurait, et il prenait tous les bras de la maison. C'était très décevant."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 494, s: 1.25, pose: 'sit', mood: 'sad' }
              ],
              sfx: [{ t: 'ON PEUT LE RENDRE ?', x: 400, y: 148, fs: 26, rot: -4, color: '#8a7768' }]
            },
            text: "Un soir, Livia demanda si on pouvait le rendre. Personne ne se fâcha. Maman dit que non, et qu'on avait le droit de trouver ça difficile, les deux en même temps."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 320, y: 510, s: 1.15, mood: 'wow' },
                { t: 'pablo', x: 560, y: 512, s: 1.05, mood: 'wow' }
              ],
              sfx: [{ t: '…SOURIRE ?', x: 430, y: 146, fs: 28, rot: -5, color: '#f7c518' }]
            },
            text: "Et puis un matin, Livia se pencha au-dessus du berceau, comme d'habitude, sans y croire. Et Pablo la regarda dans les yeux. Et Pablo lui sourit."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 320, y: 510, s: 1.15, pose: 'hold' },
                { t: 'pablo', x: 560, y: 512, s: 1.05, pose: 'hold' }
              ],
              sfx: [{ t: 'À MOI !', x: 430, y: 146, fs: 30, rot: -6, color: '#3ec9c9' }]
            },
            text: "Pas à Maman. Pas à Papa. À elle. Livia resta là très longtemps, penchée, à refaire toutes les grimaces qu'elle connaissait, pour voir s'il recommençait."
          },
          {
            scene: {
              bg: 'bedroom', time: 'sunset',
              items: [
                { t: 'mummy', x: 280, y: 506, s: 1.35 },
                { t: 'livia', x: 500, y: 496, s: 1.15, pose: 'sit' },
                { t: 'pablo', x: 690, y: 500, s: 1, pose: 'sit', mood: 'sleep' }
              ]
            },
            text: "Devenir grande sœur, ça ne se décide pas le jour où le bébé arrive. Ça arrive plus tard, un matin, sans prévenir, quand quelqu'un vous sourit à vous."
          }
        ]
      },

      /* ---------- 21 : chez Mamie ---------- */
      {
        id: 'chez-mamie',
        title: 'Chez Mamie, ce n\'est pas pareil',
        subtitle: 'Deux maisons, deux règles',
        tag: 'Grandir',
        themes: ['Règles', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          back: [{ t: 'etagere', x: 660, y: 400, s: 1 }],
          items: [
            { t: 'mamie', x: 300, y: 508, s: 1.25 },
            { t: 'livia', x: 520, y: 510, s: 1.1, pose: 'wave' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              back: [{ t: 'etagere', x: 680, y: 396, s: 1 }],
              items: [
                { t: 'mamie', x: 300, y: 508, s: 1.3, pose: 'wave' },
                { t: 'livia', x: 560, y: 510, s: 1.15, pose: 'wave' }
              ],
              sfx: [{ t: 'BONJOUR MAMIE !', x: 430, y: 146, fs: 28, rot: -5, color: '#a98cf0' }]
            },
            text: "Chez Mamie, ça sent le gâteau et la lessive. Livia y va un dimanche sur deux. Et chez Mamie, les règles ne sont pas exactement les mêmes qu'à la maison."
          },
          {
            scene: {
              bg: 'bedroom',
              back: [{ t: 'etagere', x: 700, y: 396, s: .9 }],
              items: [
                { t: 'mamie', x: 300, y: 508, s: 1.3, pose: 'hold' },
                { t: 'livia', x: 560, y: 510, s: 1.15, mood: 'wow' }
              ],
              sfx: [{ t: 'DEUX GÂTEAUX ?!', x: 430, y: 146, fs: 30, rot: -6, color: '#f2803d' }]
            },
            text: "Chez Mamie, on a le droit à deux gâteaux. À la maison, c'est un. Livia vérifia trois fois, au cas où ce serait une erreur. Ce n'était pas une erreur."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 510, s: 1.25, pose: 'point' }
              ],
              bubbles: [{ x: 200, y: 22, w: 350, t: 'Alors chez Maman aussi, j\'ai le droit !', tx: 400, ty: 236 }]
            },
            text: "En rentrant, Livia annonça que désormais, ce serait deux gâteaux partout. Elle avait une preuve. Elle trouvait son raisonnement absolument imparable."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 506, s: 1.4, pose: 'shrug' },
                { t: 'livia', x: 570, y: 510, s: 1.15, mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 22, w: 340, t: 'Chez Mamie, c\'est la règle de Mamie.', tx: 305, ty: 236 }]
            },
            text: "« Chez Mamie, c'est la règle de Mamie », dit Maman. « Ici, c'est la mienne. Les deux maisons ont le droit. » Livia trouva ça très mal organisé."
          },
          {
            scene: {
              bg: 'bedroom',
              back: [{ t: 'etagere', x: 680, y: 396, s: .9 }],
              items: [
                { t: 'mamie', x: 300, y: 508, s: 1.3, pose: 'point' },
                { t: 'livia', x: 560, y: 510, s: 1.15 }
              ],
              bubbles: [{ x: 60, y: 22, w: 330, t: 'Chez ta maman, tu fais comme ta maman.', tx: 305, ty: 236 }]
            },
            text: "Le dimanche suivant, Livia posa la question à Mamie. Mamie rit très fort. « Chez ta maman, tu fais comme ta maman », dit-elle. « Et ici, tu fais comme moi. »"
          },
          {
            scene: {
              bg: 'bedroom', time: 'sunset',
              back: [{ t: 'etagere', x: 700, y: 396, s: .9 }],
              items: [
                { t: 'mamie', x: 300, y: 496, s: 1.25, pose: 'sit' },
                { t: 'livia', x: 560, y: 496, s: 1.15, pose: 'sit' }
              ]
            },
            text: "Alors Livia mangea son deuxième gâteau, chez Mamie, sans en parler à personne. Certaines règles changent de maison en maison. C'est ce qui rend les dimanches intéressants."
          }
        ]
      }
,

      /* ---------- 22 : la télé s'éteint ---------- */
      {
        id: 'la-tele-seteint',
        title: "La télé s'éteint",
        subtitle: "Un non qui ne se négocie pas",
        tag: 'Grandir',
        themes: ['Règles', 'Émotions'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'mummy', x: 300, y: 508, s: 1.1 },
            { t: 'livia', x: 540, y: 512, s: 1.1, mood: 'sad' },
            { t: 'peppa', x: 708, y: 508, s: 1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 496, s: 1.1, pose: 'sit' },
                { t: 'peppa', x: 560, y: 492, s: 1.05, pose: 'sit' }
              ],
              sfx: [{ t: 'ENCORE UN ÉPISODE ?', x: 430, y: 146, fs: 24, rot: -4, color: '#a98cf0' }]
            },
            text: "Livia et Peppa étaient assises très près de l'écran, la bouche un peu ouverte. L'épisode se terminait. Un autre commençait tout seul, sans rien demander à personne."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 508, s: 1.15, pose: 'point' },
                { t: 'livia', x: 570, y: 496, s: 1.1, pose: 'sit' }
              ],
              bubbles: [{ x: 40, y: 22, w: 300, t: 'Celui-là, et on éteint.', tx: 300, ty: 240 }]
            },
            text: "« Celui-là, et on éteint », dit Maman Pig depuis la cuisine. Livia dit oui sans écouter, comme on dit oui quand on regarde ailleurs, et elle oublia la phrase en trois secondes."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 508, s: 1.15 },
                { t: 'livia', x: 570, y: 512, s: 1.1, mood: 'fache' }
              ],
              sfx: [{ t: 'CLIC.', x: 430, y: 146, fs: 34, rot: -6, color: '#e0453c' }]
            },
            text: "Clic. L'écran devint noir et refléta deux petites filles très en colère. « Mais il était PAS FINI ! » cria Livia, avec la voix qu'elle n'a que dans ces moments-là."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [{ t: 'livia', x: 400, y: 512, s: 1.25, mood: 'fache' }],
              sfx: [{ t: 'C\'EST PAS JUSTE !', x: 400, y: 146, fs: 30, rot: -7, color: '#e0453c' }]
            },
            text: "Elle dit que ce n'était pas juste. Elle dit qu'elle n'avait rien demandé. Elle dit une chose méchante, aussi, qu'elle regretta avant même d'avoir fini de la dire."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 490, s: 1.1, pose: 'sit' },
                { t: 'livia', x: 570, y: 496, s: 1.15, pose: 'sit', mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 22, w: 350, t: 'Tu peux être fâchée. La télé reste éteinte.', tx: 305, ty: 236 }]
            },
            text: "Maman Pig s'assit à côté d'elle sans rien enlever et sans rien ajouter. « Tu peux être fâchée », dit-elle. « La télé reste éteinte. » Les deux phrases tenaient ensemble, curieusement."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'peppa', x: 300, y: 512, s: 1.05, pose: 'jump' },
                { t: 'livia', x: 560, y: 516, s: 1.1, pose: 'jump' }
              ],
              sfx: [{ t: 'SPLATCH !', x: 430, y: 146, fs: 32, rot: -7, color: '#8a5a3b' }]
            },
            text: "La colère mit onze minutes à partir. Ensuite, elles allèrent sauter dans les flaques. Livia n'a jamais su comment se terminait l'épisode, et ça ne lui a jamais manqué une seule fois."
          }
        ]
      },

      /* ---------- 23 : le bain de George ---------- */
      {
        id: 'le-bain-de-george',
        title: 'Le bain de George',
        subtitle: "Aider un petit, c'est un vrai travail",
        tag: 'Grandir',
        themes: ['Famille', 'Partager'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'livia', x: 320, y: 512, s: 1.15 },
            { t: 'george', x: 570, y: 514, s: .95 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 508, s: 1.1, pose: 'point' },
                { t: 'livia', x: 570, y: 512, s: 1.1 }
              ],
              bubbles: [{ x: 40, y: 22, w: 330, t: 'Tu peux surveiller George deux minutes ?', tx: 300, ty: 240 }]
            },
            text: "« Tu peux surveiller George deux minutes ? » demanda Maman Pig. Livia se redressa d'un coup. On ne lui avait encore jamais confié un enfant entier, même pour deux minutes."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 512, s: 1.1 },
                { t: 'george', x: 560, y: 514, s: 1, pose: 'armsup' }
              ],
              sfx: [{ t: 'DINO ! DINO !', x: 430, y: 146, fs: 30, rot: -5, color: '#7ab648' }]
            },
            text: "George voulait son dinosaure dans le bain. Le dinosaure était en bas, dans le panier, sous une pile de choses. George le voulait maintenant, et il le fit savoir avec beaucoup de conviction."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'george', x: 300, y: 514, s: 1, mood: 'fache' },
                { t: 'livia', x: 560, y: 512, s: 1.1, mood: 'sad' }
              ],
              sfx: [{ t: 'OUIIIIIN !', x: 430, y: 146, fs: 34, rot: -7, color: '#e0453c' }]
            },
            text: "Livia dit non, parce qu'il ne fallait pas quitter la pièce. George se mit à hurler. Deux minutes, découvrit-elle, ça peut être extrêmement long quand on est responsable de quelqu'un."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 512, s: 1.15, pose: 'point' },
                { t: 'george', x: 570, y: 514, s: 1, mood: 'wow' }
              ],
              sfx: [{ t: 'REGARDE LA MOUSSE !', x: 430, y: 146, fs: 24, rot: -4, color: '#7fd8f0' }]
            },
            text: "Alors elle prit une poignée de mousse et se fit une barbe blanche. George s'arrêta net, la bouche encore ouverte sur un cri qui ne sortit jamais. Puis il rit, et il voulut une barbe aussi."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 512, s: 1.1 },
                { t: 'george', x: 560, y: 514, s: 1, pose: 'armsup' }
              ],
              sfx: [{ t: 'HA HA HA !', x: 430, y: 146, fs: 32, rot: -6, color: '#f7c518' }]
            },
            text: "Ils firent une barbe, des sourcils, et un chapeau de mousse. Le dinosaure fut complètement oublié, ce qui est le plus grand exploit qu'on puisse accomplir avec George."
          },
          {
            scene: {
              bg: 'bedroom', time: 'sunset',
              items: [
                { t: 'mummy', x: 280, y: 508, s: 1.1 },
                { t: 'livia', x: 520, y: 512, s: 1.1 },
                { t: 'george', x: 720, y: 514, s: .95, pose: 'hold' }
              ],
              bubbles: [{ x: 300, y: 22, w: 300, t: 'Tu as fait ça toute seule ?', tx: 300, ty: 240 }]
            },
            text: "Maman Pig revint dans une salle de bain plus mouillée qu'elle ne l'avait laissée, et beaucoup plus calme. « Tu as fait ça toute seule ? » Livia dit oui, sans en rajouter. Elle n'en avait pas besoin."
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
    vignette: { t: 'elsa', ds: .5, dy: 178 },
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
        themes: ['Été', 'Amitié'],
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
        themes: ['Nuit', 'Amitié'],
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
      },

      /* ---------- 3 : Papa à Arendelle ---------- */
      {
        id: 'papa-na-pas-froid',
        title: 'Papa n\'a pas froid',
        title_es: 'Papá no tiene frío',
        subtitle: 'Dire qu\'on a froid, c\'est déjà se réchauffer',
        subtitle_es: 'Decir que tienes frío ya es empezar a calentarte',
        tag: 'Nuit',
        themes: ['Famille', 'Émotions'],
        minutes: 5,
        cover: {
          bg: 'snow',
          items: [
            { t: 'papa', x: 250, y: 520, s: 1 },
            { t: 'livia', x: 460, y: 522, s: 1.05 },
            { t: 'elsa', x: 640, y: 516, s: 1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'snow',
              items: [
                { t: 'papa', x: 300, y: 520, s: 1.05 },
                { t: 'livia', x: 560, y: 522, s: 1.1 }
              ],
              sfx: [{ t: 'MOI, JAMAIS FROID !', x: 430, y: 168, fs: 26, rot: -4, color: '#4a7fc1' }]
            },
            text: "Papa était venu à Arendelle en tee-shirt. « Moi, je n'ai jamais froid », dit-il en montrant ses bras. Livia regarda la neige, puis les bras de Papa, et ne dit rien.",
            es: "Papá había venido a Arendelle en camiseta. «Yo nunca tengo frío», dijo enseñando los brazos. Livia miró la nieve, luego los brazos de papá, y no dijo nada."
          },
          {
            scene: {
              bg: 'snow',
              items: [
                { t: 'elsa', x: 280, y: 516, s: 1.05, pose: 'magic' },
                { t: 'papa', x: 540, y: 520, s: 1.05, mood: 'wow' }
              ],
              neige: 26,
              sfx: [{ t: 'FRIIIISSS !', x: 420, y: 164, fs: 34, rot: -7, color: '#7fd8f0' }]
            },
            text: "Elsa leva une main pour dire bonjour. Il se mit à neiger un peu plus fort, comme ça, sans prévenir. Papa fit un sourire qui tremblait légèrement aux commissures.",
            es: "Elsa levantó una mano para saludar. Empezó a nevar un poco más fuerte, así, sin avisar. Papá sonrió con una sonrisa que temblaba un poquito en las esquinas."
          },
          {
            scene: {
              bg: 'snow', neige: 20,
              items: [
                { t: 'livia', x: 300, y: 522, s: 1.1, pose: 'point' },
                { t: 'papa', x: 560, y: 520, s: 1.05, mood: 'sad' }
              ],
              bubbles: [{ x: 60, y: 24, w: 320, t: 'Tu as les lèvres toutes bleues.', tx: 300, ty: 240 }]
            },
            text: "« Tu as les lèvres toutes bleues », dit Livia. Papa répondit que c'était la lumière. La lumière n'y était pour rien : il claquait des dents depuis une bonne minute.",
            es: "«Tienes los labios azules», dijo Livia. Papá contestó que era la luz. La luz no tenía nada que ver: le castañeteaban los dientes desde hacía un buen rato."
          },
          {
            scene: {
              bg: 'snow', neige: 18,
              items: [
                { t: 'anna', x: 260, y: 518, s: 1.05, pose: 'hold' },
                { t: 'papa', x: 520, y: 520, s: 1.05, mood: 'sad' },
                { t: 'livia', x: 700, y: 522, s: 1 }
              ],
              sfx: [{ t: 'BRRRRR…', x: 420, y: 164, fs: 32, rot: -6, color: '#bfe8f7' }]
            },
            text: "Anna arriva avec une grosse couverture. Elle ne dit pas « je te l'avais bien dit ». Elle la posa simplement sur les épaules de Papa, et attendit.",
            es: "Anna llegó con una manta muy gorda. No dijo «te lo dije». Simplemente se la puso sobre los hombros a papá, y esperó."
          },
          {
            scene: {
              bg: 'snow', neige: 14,
              items: [
                { t: 'papa', x: 300, y: 520, s: 1.05, pose: 'hold' },
                { t: 'livia', x: 560, y: 522, s: 1.1, pose: 'hold' }
              ],
              bubbles: [{ x: 300, y: 24, w: 340, t: 'Bon. J\'ai un peu froid.', tx: 305, ty: 240 }]
            },
            text: "« Bon », dit Papa. « J'ai un peu froid. » Ce n'était que quatre mots, et il fallut pourtant qu'il les prépare longtemps dans sa tête avant de les faire sortir.",
            es: "«Bueno», dijo papá. «Tengo un poco de frío.» Solo eran cinco palabras, y sin embargo tuvo que prepararlas mucho rato en la cabeza antes de dejarlas salir."
          },
          {
            scene: {
              bg: 'snow', time: 'sunset',
              items: [
                { t: 'elsa', x: 240, y: 516, s: 1 },
                { t: 'papa', x: 450, y: 520, s: 1.05, pose: 'hold' },
                { t: 'livia', x: 660, y: 522, s: 1.05, pose: 'hold' }
              ]
            },
            text: "Ils rentrèrent boire un chocolat tous ensemble. Livia remarqua que Papa, sous la couverture, avait retrouvé sa vraie couleur. Et qu'il souriait pour de bon, cette fois.",
            es: "Volvieron todos juntos a tomar un chocolate. Livia notó que papá, debajo de la manta, había recuperado su color de verdad. Y que sonreía en serio, esta vez."
          }
        ]
      },

      /* ---------- 4 : la règle du lac ---------- */
      {
        id: 'glace-qui-craque',
        title: 'La glace qui craque',
        title_es: 'El hielo que cruje',
        subtitle: 'Une règle qu\'on ne comprend qu\'après',
        subtitle_es: 'Una regla que solo se entiende después',
        tag: 'Nuit',
        themes: ['Règles', 'Grandir'],
        minutes: 5,
        cover: {
          bg: 'snow',
          items: [
            { t: 'elsa', x: 280, y: 516, s: 1.05, pose: 'point' },
            { t: 'livia', x: 520, y: 522, s: 1.05 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'snow',
              items: [
                { t: 'elsa', x: 280, y: 516, s: 1.1, pose: 'point' },
                { t: 'livia', x: 560, y: 522, s: 1.1 }
              ],
              bubbles: [{ x: 60, y: 24, w: 330, t: 'On ne marche jamais sur le lac.', tx: 290, ty: 240 }]
            },
            text: "« On ne marche jamais sur le lac », dit Elsa. Livia demanda pourquoi. Elsa répondit : « Parce que la glace ment. » Ce n'était pas une réponse très claire.",
            es: "«Nunca se camina sobre el lago», dijo Elsa. Livia preguntó por qué. Elsa contestó: «Porque el hielo miente.» No era una respuesta muy clara."
          },
          {
            scene: {
              bg: 'snow',
              items: [{ t: 'livia', x: 400, y: 522, s: 1.2 }],
              sfx: [{ t: 'ELLE A L\'AIR SOLIDE…', x: 400, y: 168, fs: 26, rot: -4, color: '#6d5847' }]
            },
            text: "Le lendemain, Livia retourna voir le lac toute seule. La glace était blanche, lisse et parfaitement immobile. Elle avait vraiment l'air solide. C'est bien ça, le problème.",
            es: "Al día siguiente, Livia volvió al lago sola. El hielo estaba blanco, liso y completamente quieto. Parecía de verdad muy sólido. Ese es justamente el problema."
          },
          {
            scene: {
              bg: 'snow',
              items: [{ t: 'livia', x: 400, y: 522, s: 1.2, mood: 'wow' }],
              sfx: [{ t: 'CRAAAC.', x: 400, y: 164, fs: 40, rot: -8, color: '#4a7fc1' }]
            },
            text: "Elle posa un pied. Puis deux. Au troisième pas, quelque chose craqua sous elle, un bruit sec et très net, qui n'avait rien d'un bruit de jeu.",
            es: "Puso un pie. Luego dos. Al tercer paso, algo crujió debajo de ella, un ruido seco y muy claro, que no tenía nada de ruido de juego."
          },
          {
            scene: {
              bg: 'snow',
              items: [
                { t: 'livia', x: 320, y: 522, s: 1.15, mood: 'sad' },
                { t: 'elsa', x: 580, y: 516, s: 1.1, pose: 'point' }
              ],
              sfx: [{ t: 'NE BOUGE PLUS !', x: 430, y: 164, fs: 30, rot: -6, color: '#e0453c' }]
            },
            text: "« Ne bouge plus ! » cria Elsa depuis la rive. Livia ne bougea plus du tout. Elsa tendit la main, doucement, et la glace se referma sous ses pieds comme on recoud un tissu.",
            es: "«¡No te muevas!», gritó Elsa desde la orilla. Livia no se movió nada. Elsa extendió la mano, despacito, y el hielo se cerró bajo sus pies como quien cose una tela."
          },
          {
            scene: {
              bg: 'snow',
              items: [
                { t: 'elsa', x: 300, y: 500, s: 1.05, pose: 'sit' },
                { t: 'livia', x: 560, y: 502, s: 1.1, pose: 'sit', mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 22, w: 350, t: 'La glace ment : elle est belle et elle est mince.', tx: 305, ty: 236 }]
            },
            text: "Elles s'assirent au bord. « La glace ment », répéta Elsa. « Elle est belle, elle est blanche, et par endroits elle est mince comme une feuille. » Cette fois, Livia comprit.",
            es: "Se sentaron en la orilla. «El hielo miente», repitió Elsa. «Es bonito, es blanco, y en algunos sitios es fino como una hoja.» Esta vez, Livia lo entendió."
          },
          {
            scene: {
              bg: 'snow', time: 'sunset',
              items: [
                { t: 'elsa', x: 280, y: 516, s: 1.05, pose: 'hold' },
                { t: 'livia', x: 500, y: 522, s: 1.05, pose: 'hold' },
                { t: 'olaf', x: 690, y: 520, s: 1 }
              ]
            },
            text: "Certaines règles s'expliquent, et on les comprend tout de suite. D'autres attendent qu'on ait entendu le craquement. Livia n'est jamais retournée sur le lac.",
            es: "Algunas reglas se explican y se entienden enseguida. Otras esperan a que hayas oído el crujido. Livia nunca volvió a pisar el lago."
          }
        ]
      },

      /* ---------- 5 : le secret d'Anna ---------- */
      {
        id: 'secret-danna',
        title: "Le secret d'Anna",
        subtitle: 'Tenir sa langue quand ça démange',
        tag: 'Amitié',
        themes: ['Amitié', 'Émotions'],
        minutes: 5,
        cover: {
          bg: 'village',
          items: [
            { t: 'anna', x: 320, y: 518, s: 1.15 },
            { t: 'liviaPrincess', x: 560, y: 522, s: 1.1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'anna', x: 300, y: 518, s: 1.15, pose: 'point' },
                { t: 'liviaPrincess', x: 560, y: 522, s: 1.1, mood: 'wow' }
              ],
              bubbles: [{ x: 40, y: 22, w: 350, t: "Je prépare une surprise pour Elsa. Tu ne dis rien ?", tx: 300, ty: 240 }]
            },
            text: "Anna prit Livia par le bras et l'emmena derrière la grande porte. « Je prépare une surprise pour Elsa », chuchota-t-elle. « Tu ne dis rien ? » Livia fit non de la tête, très fort."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'elsa', x: 320, y: 516, s: 1.15 },
                { t: 'liviaPrincess', x: 580, y: 522, s: 1.1, mood: 'wow' }
              ],
              sfx: [{ t: 'ÇA GRATTE DEDANS !', x: 450, y: 150, fs: 25, rot: -4, color: '#8a79c4' }]
            },
            text: "Deux minutes plus tard, Elsa arriva. Le secret se mit à gratter à l'intérieur de Livia, juste derrière les dents, comme une chose vivante qui veut sortir."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'elsa', x: 300, y: 516, s: 1.15, pose: 'point' },
                { t: 'liviaPrincess', x: 570, y: 522, s: 1.1, mood: 'sad' }
              ],
              bubbles: [{ x: 40, y: 22, w: 330, t: "Tu as l'air bizarre. Il se passe quelque chose ?", tx: 300, ty: 240 }]
            },
            text: "« Tu as l'air bizarre », dit Elsa. « Il se passe quelque chose ? » C'était la question la plus difficile de toute la journée, et Livia n'avait rien préparé du tout."
          },
          {
            scene: {
              bg: 'village',
              items: [{ t: 'liviaPrincess', x: 400, y: 522, s: 1.25 }],
              sfx: [{ t: 'OUI. MAIS JE NE PEUX PAS.', x: 400, y: 150, fs: 22, rot: -4, color: '#4a7fc1' }]
            },
            text: "Livia respira un grand coup. « Oui », dit-elle. « Mais je ne peux pas te le dire. » Ce n'était pas un mensonge, et ce n'était pas non plus le secret. C'était juste la vérité, en plus petit."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'elsa', x: 300, y: 516, s: 1.15 },
                { t: 'liviaPrincess', x: 570, y: 522, s: 1.1 }
              ],
              sfx: [{ t: 'ALORS J\'ATTENDRAI.', x: 440, y: 150, fs: 24, rot: -4, color: '#7fd8f0' }]
            },
            text: "Elsa la regarda un moment. Puis elle sourit. « Alors j'attendrai », dit-elle, et elle parla d'autre chose, ce qui est une façon très élégante de laisser quelqu'un tranquille."
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'anna', x: 260, y: 518, s: 1.1, pose: 'armsup' },
                { t: 'elsa', x: 480, y: 516, s: 1.1, mood: 'wow' },
                { t: 'liviaPrincess', x: 690, y: 522, s: 1.05, pose: 'armsup' }
              ],
              sfx: [{ t: 'SURPRISE !', x: 450, y: 150, fs: 32, rot: -6, color: '#f7c518' }]
            },
            text: "Le soir, la surprise sortit enfin de sa cachette. Elsa fit semblant de ne pas s'y attendre. Livia, elle, avait gardé quelque chose de lourd pendant tout un après-midi — et elle avait tenu."
          }
        ]
      },

      /* ---------- 6 : Olaf a trop chaud ---------- */
      {
        id: 'olaf-a-trop-chaud',
        title: 'Olaf a trop chaud',
        subtitle: "Aider, même quand ça ne nous arrange pas",
        tag: 'Été',
        themes: ['Amitié', 'Été'],
        minutes: 5,
        cover: {
          bg: 'snow',
          items: [
            { t: 'olaf', x: 320, y: 520, s: 1.2, mood: 'sad' },
            { t: 'liviaPrincess', x: 560, y: 522, s: 1.1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'snow',
              back: [{ t: 'slide', x: 620, y: 500, s: .9 }],
              items: [
                { t: 'liviaPrincess', x: 280, y: 522, s: 1.15, pose: 'jump' },
                { t: 'olaf', x: 470, y: 520, s: 1.05 }
              ],
              sfx: [{ t: 'LA GLISSADE !', x: 380, y: 150, fs: 28, rot: -5, color: '#7fd8f0' }]
            },
            text: "Elsa avait fabriqué une glissade de glace qui descendait jusqu'en bas de la colline. Livia s'apprêtait à la prendre pour la sixième fois quand elle entendit quelqu'un souffler."
          },
          {
            scene: {
              bg: 'snow',
              items: [{ t: 'olaf', x: 400, y: 520, s: 1.3, mood: 'sad' }],
              sfx: [{ t: 'PFOUUU…', x: 400, y: 148, fs: 32, rot: -5, color: '#f2803d' }]
            },
            text: "C'était Olaf. Il s'était assis au soleil, et il avait la tête un peu penchée, comme une bougie qu'on aurait laissée trop près du feu. « Ça va », dit-il, ce qui n'était pas vrai du tout."
          },
          {
            scene: {
              bg: 'snow',
              items: [
                { t: 'liviaPrincess', x: 300, y: 522, s: 1.15 },
                { t: 'olaf', x: 570, y: 520, s: 1.1, mood: 'sad' }
              ],
              sfx: [{ t: 'ENCORE UNE FOIS… OU PAS.', x: 440, y: 150, fs: 22, rot: -4, color: '#6d5847' }]
            },
            text: "Livia regarda la glissade. Puis Olaf. Puis la glissade. Personne ne lui demandait rien, et c'est bien ça qui était embêtant : elle aurait pu partir, et personne n'aurait rien su."
          },
          {
            scene: {
              bg: 'snow',
              items: [
                { t: 'liviaPrincess', x: 300, y: 522, s: 1.15, pose: 'hold' },
                { t: 'olaf', x: 560, y: 520, s: 1.1, pose: 'hold' }
              ],
              sfx: [{ t: 'ON VA À L\'OMBRE.', x: 430, y: 150, fs: 25, rot: -4, color: '#4a7fc1' }]
            },
            text: "Elle prit Olaf par le bâton qui lui sert de bras et l'emmena derrière le grand rocher, là où la neige reste dure toute la journée. Le trajet dura longtemps : Olaf ne va pas vite."
          },
          {
            scene: {
              bg: 'snow',
              back: [{ t: 'snowpine', x: 660, y: 500, s: 1 }],
              items: [
                { t: 'liviaPrincess', x: 300, y: 506, s: 1.1, pose: 'sit' },
                { t: 'olaf', x: 540, y: 520, s: 1.15 }
              ],
              sfx: [{ t: 'AAAH.', x: 420, y: 148, fs: 30, rot: -5, color: '#bfe8f7' }]
            },
            text: "À l'ombre, Olaf se redressa d'un coup, comme une plante qu'on arrose. « Aaah », dit-il. Ils restèrent là un moment, à ne rien faire, ce qui est parfois exactement ce qu'il faut faire."
          },
          {
            scene: {
              bg: 'snow', time: 'sunset',
              back: [{ t: 'slide', x: 660, y: 500, s: .85 }],
              items: [
                { t: 'olaf', x: 300, y: 520, s: 1.05 },
                { t: 'liviaPrincess', x: 540, y: 522, s: 1.15, pose: 'armsup' }
              ],
              sfx: [{ t: 'WHIIII !', x: 440, y: 150, fs: 30, rot: -6, color: '#f7c518' }]
            },
            text: "La glissade était toujours là après. Livia la prit trois fois, avec Olaf qui comptait en bas. Ce qu'elle avait laissé passer ne s'était pas perdu — ça l'attendait, tout simplement."
          }
        ]
      },

      /* ---------- 7 : la couronne cassée ---------- */
      {
        id: 'couronne-cassee',
        title: 'La couronne cassée',
        subtitle: "Le dire avant qu'on le découvre",
        tag: 'Nuit',
        themes: ['Règles', 'Grandir'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'liviaPrincess', x: 340, y: 510, s: 1.2, mood: 'sad' },
            { t: 'elsa', x: 580, y: 506, s: 1.1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              back: [{ t: 'etagere', x: 620, y: 400, s: .9 }],
              items: [{ t: 'liviaPrincess', x: 360, y: 512, s: 1.25, pose: 'point' }],
              sfx: [{ t: 'JUSTE UNE FOIS…', x: 400, y: 146, fs: 25, rot: -4, color: '#a98cf0' }]
            },
            text: "La couronne d'Elsa était posée sur l'étagère du haut. On n'y touche pas, c'était dit depuis longtemps. Livia n'y toucha pas non plus : elle monta seulement sur le tabouret pour mieux la voir."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [{ t: 'liviaPrincess', x: 400, y: 512, s: 1.25, mood: 'wow' }],
              sfx: [{ t: 'CLING !', x: 400, y: 146, fs: 40, rot: -8, color: '#e0453c' }]
            },
            text: "Le tabouret glissa. La couronne fit un bruit très court et très clair en touchant le sol, et une petite branche de glace se détacha net. La chambre devint extrêmement silencieuse."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [{ t: 'liviaPrincess', x: 400, y: 498, s: 1.2, pose: 'sit', mood: 'sad' }],
              sfx: [{ t: 'PERSONNE N\'A VU.', x: 400, y: 146, fs: 24, rot: -4, color: '#6d5847' }]
            },
            text: "Personne n'avait rien vu. Livia remit la couronne en place, le morceau caché derrière. On ne voyait rien, vraiment rien. Elle s'assit par terre et ce fut le plus long moment de sa vie."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'liviaPrincess', x: 300, y: 512, s: 1.15, mood: 'sad' },
                { t: 'elsa', x: 570, y: 506, s: 1.1 }
              ],
              bubbles: [{ x: 300, y: 22, w: 320, t: "J'ai cassé ta couronne.", tx: 300, ty: 240 }]
            },
            text: "Quand Elsa entra, Livia dit tout, très vite, avant que le courage ne reparte : « J'ai cassé ta couronne. » Elle avait préparé les larmes, et elles arrivèrent quand même."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'elsa', x: 300, y: 490, s: 1.1, pose: 'sit' },
                { t: 'liviaPrincess', x: 570, y: 496, s: 1.15, pose: 'sit', mood: 'sad' }
              ],
              bubbles: [{ x: 40, y: 22, w: 350, t: "Ça, je peux le réparer. L'autre chose, non.", tx: 300, ty: 236 }]
            },
            text: "Elsa s'assit à côté d'elle et regarda le morceau au creux de sa main. « Ça, je peux le réparer », dit-elle. « L'autre chose, non. Et l'autre chose, tu ne l'as pas faite. »"
          },
          {
            scene: {
              bg: 'bedroom', time: 'sunset',
              items: [
                { t: 'elsa', x: 300, y: 506, s: 1.1, pose: 'magic' },
                { t: 'liviaPrincess', x: 570, y: 512, s: 1.15, mood: 'wow' }
              ],
              sfx: [{ t: 'TSSING…', x: 440, y: 146, fs: 30, rot: -5, color: '#7fd8f0' }]
            },
            text: "La glace se recolla toute seule sous les doigts d'Elsa. On voit encore le trait, si on cherche bien. Livia le cherche à chaque fois, et à chaque fois elle est contente de le trouver."
          }
        ]
      }
    ]
  },

  /* ==========================================================
     UNIVERS 3 — BLUEY
     ========================================================== */
  {
    id: 'bluey',
    name: 'Bluey',
    tagline: 'Livia, Bluey, Bingo et toute la famille Heeler',
    emoji: '🐶',
    vignette: { t: 'bluey', ds: .48, dy: 176 },
    c1: '#5b9bd5',
    c2: '#f0a63c',
    cover: {
      bg: 'garden',
      items: [
        { t: 'sprinkler', x: 172, y: 512, s: 1.1 },
        { t: 'bluey', x: 320, y: 512, s: 1.25, pose: 'wave' },
        { t: 'livia', x: 460, y: 514, s: 1.1, pose: 'armsup' },
        { t: 'bingo', x: 596, y: 512, s: 1, pose: 'jump' },
        { t: 'ball', x: 700, y: 470, s: .8 }
      ]
    },
    stories: [

      /* ---------- 1 ---------- */
      {
        id: 'arroseur',
        title: 'La grande bataille d\'arroseur',
        subtitle: 'Le jour le plus chaud de l\'été',
        tag: 'Jardin',
        themes: ['Été', 'Dehors', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'sprinkler', x: 200, y: 516, s: 1.2 },
            { t: 'bluey', x: 400, y: 514, s: 1.25, pose: 'jump' },
            { t: 'livia', x: 560, y: 516, s: 1.15, pose: 'armsup' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 300, y: 514, s: 1.2, pose: 'point' },
                { t: 'livia', x: 450, y: 516, s: 1.1, pose: 'shrug' },
                { t: 'bingo', x: 580, y: 514, s: .95, pose: 'stand' },
                { t: 'flower', x: 110, y: 528 }
              ],
              sfx: [{ t: 'OUF, IL FAIT CHAUD !', x: 640, y: 400, fs: 28, rot: -4, color: '#f7c518' }],
              bubbles: [{ x: 90, y: 30, w: 300, t: 'J\'ai une idée ! Une idée mouillée !', tx: 300, ty: 226 }]
            },
            text: "Dans le jardin, l'herbe est chaude et l'air ne bouge pas. Bingo s'est couchée dans l'ombre. Bluey, elle, a le regard de quelqu'un qui a une idée. Une idée très mouillée."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bandit', x: 250, y: 516, s: 1.45, pose: 'hold' },
                { t: 'sprinkler', x: 480, y: 520, s: 1.1 },
                { t: 'bluey', x: 640, y: 514, s: 1.15, pose: 'point' }
              ],
              bubbles: [{ x: 380, y: 26, w: 300, t: 'Papa ! L\'arroseur, s\'il te plaît !', tx: 630, ty: 230 }]
            },
            text: "« Papa ! L'arroseur ! » Papa Heeler pose sa tasse en soupirant, mais il sourit déjà. Il visse le tuyau, tourne le robinet… et rien ne se passe. Pas une goutte."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bandit', x: 190, y: 516, s: 1.45, pose: 'shrug', mood: 'wow' },
                { t: 'sprinkler', x: 430, y: 520, s: 1.3 },
                { t: 'bluey', x: 556, y: 514, s: 1.15, pose: 'armsup', mood: 'wow' },
                { t: 'livia', x: 690, y: 516, s: 1.05, pose: 'armsup' }
              ],
              sfx: [{ t: 'TCHIIIII !', x: 430, y: 240, fs: 44, rot: -8, color: '#8fd0e8' }]
            },
            text: "Papa se penche tout près pour regarder dans le trou. C'est exactement à ce moment que l'arroseur se réveille. TCHIIIII ! Papa reçoit tout, en pleine figure."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'sprinkler', x: 180, y: 520, s: 1.1 },
                { t: 'bluey', x: 380, y: 514, s: 1.2, pose: 'jump' },
                { t: 'livia', x: 520, y: 516, s: 1.1, pose: 'jump' },
                { t: 'bingo', x: 660, y: 514, s: .95, pose: 'stand', mood: 'sad' }
              ],
              bubbles: [{ x: 430, y: 26, w: 300, t: 'Viens, Bingo ! C\'est tout doux !', tx: 520, ty: 240 }]
            },
            text: "Bluey et Livia sautent par-dessus le jet en criant. Bingo, elle, reste au bord. L'eau fait un bruit de pluie et elle n'est pas sûre du tout que ce soit une bonne idée."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'sprinkler', x: 200, y: 520, s: 1.1 },
                { t: 'livia', x: 430, y: 516, s: 1.1, pose: 'hold' },
                { t: 'bingo', x: 560, y: 514, s: .95, pose: 'hold' }
              ],
              bubbles: [{ x: 300, y: 26, w: 310, t: 'On y va ensemble ? Je te tiens la patte.', tx: 430, ty: 236 }]
            },
            text: "Alors Livia lui tend la main. « On y va ensemble ? » Bingo réfléchit très fort, puis attrape sa patte. Une, deux, trois…"
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'sprinkler', x: 400, y: 520, s: 1.4 },
                { t: 'bingo', x: 300, y: 500, s: 1, pose: 'jump', mood: 'wow' },
                { t: 'livia', x: 540, y: 500, s: 1.1, pose: 'jump', mood: 'wow' }
              ],
              front: [{ t: 'splash', x: 400, y: 520, s: .9 }],
              sfx: [{ t: 'YOUHOU !', x: 700, y: 158, fs: 36, rot: -8, color: '#fff' }]
            },
            text: "Elles traversent le jet en hurlant de rire. C'est froid ! C'est glacé ! C'est le meilleur froid du monde ! Bingo veut recommencer tout de suite, et encore, et encore."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'chilli', x: 220, y: 518, s: 1.35, pose: 'hold' },
                { t: 'icecream', x: 300, y: 486, s: 1.1 },
                { t: 'bluey', x: 450, y: 507, s: 1.15, pose: 'sit' },
                { t: 'bingo', x: 580, y: 516, s: .95, pose: 'sit' },
                { t: 'livia', x: 700, y: 518, s: 1.05, pose: 'sit' }
              ],
              bubbles: [{ x: 380, y: 26, w: 290, t: 'Glaces pour les mouillés !', tx: 230, ty: 236 }]
            },
            text: "Le soleil descend et tout le monde dégouline sur la terrasse. Maman arrive avec quatre glaces. « Glaces pour les mouillés ! » Papa, lui, essore encore ses oreilles."
          }
        ]
      },

      /* ---------- 2 ---------- */
      {
        id: 'ruisseau',
        title: 'Le ruisseau secret',
        subtitle: 'Des cailloux, des têtards et un barrage',
        tag: 'Été',
        themes: ['Été', 'Dehors'],
        minutes: 6,
        cover: {
          bg: 'creek',
          items: [
            { t: 'bluey', x: 260, y: 452, s: 1.2, pose: 'point' },
            { t: 'livia', x: 400, y: 454, s: 1.1, pose: 'stand' },
            { t: 'bingo', x: 530, y: 452, s: .95, pose: 'hold' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'creek',
              items: [
                { t: 'bandit', x: 200, y: 452, s: 1.4, pose: 'point' },
                { t: 'bluey', x: 380, y: 452, s: 1.15, pose: 'stand' },
                { t: 'livia', x: 500, y: 454, s: 1.05, pose: 'stand' },
                { t: 'bingo', x: 610, y: 452, s: .9, pose: 'stand' }
              ],
              bubbles: [{ x: 356, y: 24, w: 290, t: 'Voilà. Le ruisseau secret.', tx: 210, ty: 168 }]
            },
            text: "Au fond du jardin, il y a un chemin. Et au bout du chemin, il y a le ruisseau. Papa écarte les branches : « Voilà. Le ruisseau secret. » Personne ne dit rien pendant trois secondes."
          },
          {
            scene: {
              bg: 'creek',
              items: [
                { t: 'bluey', x: 300, y: 520, s: 1.1, pose: 'swim' },
                { t: 'livia', x: 450, y: 522, s: 1.05, pose: 'swim' }
              ],
              front: [{ t: 'wave', x: 300, y: 480, s: 1.1 }, { t: 'wave', x: 450, y: 484, s: 1.1 }],
              sfx: [{ t: 'BRRR ! ELLE EST FROIDE !', x: 420, y: 230, fs: 28, rot: -4, color: '#fff' }]
            },
            text: "L'eau arrive juste aux genoux, et elle est glacée. Les cailloux du fond sont tout lisses et tout glissants. Chaque pas fait « splitch », et chaque « splitch » fait rire."
          },
          {
            scene: {
              bg: 'creek',
              items: [
                { t: 'livia', x: 330, y: 452, s: 1.1, pose: 'point', mood: 'wow' },
                { t: 'fish', x: 520, y: 500, s: 1.2 },
                { t: 'bingo', x: 620, y: 452, s: .95, pose: 'stand', mood: 'wow' }
              ],
              bubbles: [{ x: 100, y: 26, w: 300, t: 'Regardez ! Un tout petit poisson !', tx: 330, ty: 180 }]
            },
            text: "Soudain, Livia s'arrête net et montre l'eau du doigt. Un tout petit poisson tourne entre deux cailloux. Tout le monde se penche, sans bouger, sans respirer."
          },
          {
            scene: {
              bg: 'creek',
              items: [
                { t: 'bingo', x: 300, y: 452, s: .95, pose: 'hold' },
                { t: 'rock', x: 430, y: 500, s: .8 },
                { t: 'rock', x: 500, y: 496, s: .7 },
                { t: 'bluey', x: 620, y: 452, s: 1.15, pose: 'hold' }
              ],
              bubbles: [{ x: 380, y: 26, w: 300, t: 'On construit un barrage !', tx: 610, ty: 180 }]
            },
            text: "Puis Bluey déclare qu'il faut un barrage. Alors tout le monde transporte des cailloux, un par un, en les posant bien droit. Bingo choisit les plus petits, mais elle en apporte le plus."
          },
          {
            scene: {
              bg: 'creek',
              items: [
                { t: 'bandit', x: 300, y: 520, s: 1.35, pose: 'shrug', mood: 'wow' },
                { t: 'rock', x: 480, y: 496, s: .8 }
              ],
              front: [{ t: 'splash', x: 460, y: 512, s: 1.2 }],
              sfx: [{ t: 'CRAAAC !', x: 560, y: 300, fs: 42, rot: -10, color: '#8fd0e8' }]
            },
            text: "Le barrage monte, l'eau s'accumule derrière… et puis CRAAAC ! Tout s'écroule d'un coup. La vague part droit sur Papa, qui s'était assis juste en dessous."
          },
          {
            scene: {
              bg: 'creek',
              items: [
                { t: 'bandit', x: 240, y: 452, s: 1.4, pose: 'shrug', mood: 'sad' },
                { t: 'bluey', x: 430, y: 452, s: 1.15, pose: 'armsup' },
                { t: 'livia', x: 560, y: 454, s: 1.05, pose: 'armsup' },
                { t: 'bingo', x: 680, y: 452, s: .9, pose: 'jump' }
              ],
              bubbles: [{ x: 400, y: 26, w: 300, t: 'On en refait un plus grand !', tx: 430, ty: 176 }]
            },
            text: "Papa reste immobile, trempé de la truffe à la queue. Les trois autres rient tellement qu'elles n'arrivent plus à se relever. « On en refait un plus grand ! » crie Bluey."
          },
          {
            scene: {
              bg: 'creek', time: 'sunset',
              items: [
                { t: 'bandit', x: 260, y: 452, s: 1.4, pose: 'hold' },
                { t: 'bluey', x: 420, y: 452, s: 1.15, pose: 'hold' },
                { t: 'bingo', x: 540, y: 452, s: .9, pose: 'hold' },
                { t: 'livia', x: 650, y: 454, s: 1.05, pose: 'hold' }
              ]
            },
            text: "Ils rentrent à la nuit tombante, les pieds mouillés et les poches pleines de cailloux plats. « On revient demain ? » demande Bingo. Papa dit oui avant même d'y avoir réfléchi."
          }
        ]
      },

      /* ---------- 3 ---------- */
      {
        id: 'ballon',
        title: 'Le ballon qui ne doit pas tomber',
        subtitle: 'Une seule règle, et elle est difficile',
        tag: 'Jardin',
        themes: ['Dehors', 'Famille', 'Règles'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'ball', x: 400, y: 300, s: 1.1 },
            { t: 'bluey', x: 280, y: 514, s: 1.2, pose: 'armsup' },
            { t: 'livia', x: 520, y: 516, s: 1.1, pose: 'armsup' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 320, y: 514, s: 1.2, pose: 'hold' },
                { t: 'ball', x: 400, y: 470, s: .85 },
                { t: 'livia', x: 540, y: 516, s: 1.1, pose: 'stand' },
                { t: 'bingo', x: 670, y: 514, s: .95, pose: 'stand' }
              ],
              bubbles: [{ x: 120, y: 26, w: 310, t: 'Une seule règle : il ne touche jamais le sol !', tx: 320, ty: 226 }]
            },
            text: "Bluey tient un ballon rouge au bout des pattes. « Une seule règle », annonce-t-elle très sérieusement. « Il ne doit jamais toucher le sol. Jamais. »"
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'ball', x: 420, y: 250, s: 1 },
                { t: 'bluey', x: 300, y: 514, s: 1.2, pose: 'armsup' },
                { t: 'bingo', x: 600, y: 514, s: .95, pose: 'armsup' }
              ],
              sfx: [{ t: 'POC !', x: 470, y: 330, fs: 40, rot: -8 }]
            },
            text: "POC ! Le ballon monte tout droit vers le ciel. Bingo le rattrape du bout de la truffe. POC ! Il repart de l'autre côté. Un, deux, trois… déjà onze coups."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'ball', x: 620, y: 210, s: 1 },
                { t: 'livia', x: 380, y: 516, s: 1.15, pose: 'run' },
                { t: 'bluey', x: 220, y: 514, s: 1.1, pose: 'point' }
              ],
              sfx: [{ t: 'VITE, LIVIA !', x: 400, y: 200, fs: 32, rot: -6, color: '#fff' }]
            },
            text: "Un coup de vent emporte le ballon vers le fond du jardin. Livia part en courant, les bras tendus, la langue sortie par l'effort. Elle l'attrape au tout dernier moment."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'bush', x: 640, y: 520, s: 1.4 }],
              items: [
                { t: 'ball', x: 640, y: 470, s: .9 },
                { t: 'bluey', x: 300, y: 514, s: 1.2, pose: 'shrug', mood: 'sad' },
                { t: 'bingo', x: 430, y: 514, s: .95, pose: 'shrug', mood: 'sad' }
              ],
              sfx: [{ t: 'OH NON…', x: 470, y: 160, fs: 38, rot: -6, color: '#e2593c' }]
            },
            text: "Mais au coup suivant, le ballon part de travers et atterrit en plein milieu du gros buisson piquant. Il est posé là, tout rouge au milieu des épines. Personne n'ose y aller."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'bush', x: 620, y: 522, s: 1.4 }],
              items: [
                { t: 'bandit', x: 400, y: 470, s: 1.45, pose: 'jump', mood: 'wow' },
                { t: 'ball', x: 620, y: 476, s: .85 }
              ],
              sfx: [{ t: 'PLONGEON !', x: 240, y: 240, fs: 40, rot: -10, color: '#f7c518' }],
              bubbles: [{ x: 400, y: 24, w: 280, t: 'J\'arriiiive !', tx: 420, ty: 200 }]
            },
            text: "C'est là que Papa surgit de la maison en criant « J'arriiiive ! ». Il plonge dans le buisson tête la première. On n'aperçoit plus que sa queue qui dépasse et qui remue."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bandit', x: 320, y: 516, s: 1.45, pose: 'hold' },
                { t: 'ball', x: 400, y: 476, s: .85 },
                { t: 'bluey', x: 560, y: 514, s: 1.15, pose: 'armsup' },
                { t: 'livia', x: 690, y: 516, s: 1.05, pose: 'armsup' }
              ],
              bubbles: [{ x: 380, y: 26, w: 300, t: 'Il n\'a pas touché le sol !', tx: 330, ty: 226 }]
            },
            text: "Papa ressort couvert de brindilles, une feuille sur l'oreille… et le ballon bien serré entre les pattes. « Il n'a pas touché le sol », dit-il, très digne. Tout le monde applaudit."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'ball', x: 420, y: 300, s: 1 },
                { t: 'bluey', x: 220, y: 516, s: 1.15, pose: 'armsup' },
                { t: 'bingo', x: 358, y: 516, s: .95, pose: 'armsup' },
                { t: 'livia', x: 498, y: 518, s: 1.05, pose: 'armsup' },
                { t: 'bandit', x: 646, y: 516, s: 1.4, pose: 'armsup' }
              ],
              sfx: [{ t: 'CENT !', x: 420, y: 190, fs: 46, rot: -6, color: '#f7c518' }]
            },
            text: "Ils continuent jusqu'à ce que le ciel devienne orange. Au centième coup, tout le monde crie « CENT ! » en même temps. Et le ballon, lui, n'a toujours pas touché le sol."
          }
        ]
      },

      /* ---------- 4 ---------- */
      {
        id: 'crabes',
        title: 'La plage aux mille crabes',
        subtitle: 'Un trou, un seau et beaucoup de pinces',
        tag: 'Plage',
        themes: ['Été', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'beach',
          items: [
            { t: 'bluey', x: 320, y: 512, s: 1.2, pose: 'point' },
            { t: 'livia', x: 460, y: 514, s: 1.1, pose: 'hold' },
            { t: 'crab', x: 620, y: 528, s: 1.3 },
            { t: 'bucket', x: 190, y: 522, s: .9 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'beach',
              back: [{ t: 'parasol', x: 130, y: 486, s: 1 }],
              items: [
                { t: 'bluey', x: 380, y: 512, s: 1.2, pose: 'jump' },
                { t: 'bingo', x: 520, y: 512, s: .95, pose: 'jump' },
                { t: 'livia', x: 660, y: 514, s: 1.1, pose: 'armsup' }
              ],
              sfx: [{ t: 'LA PLAGE !', x: 200, y: 190, fs: 40, rot: -6, color: '#fff' }]
            },
            text: "Le sable est si chaud qu'il faut courir sur la pointe des pattes. Bluey, Bingo et Livia foncent droit vers l'eau sans même poser les serviettes."
          },
          {
            scene: {
              bg: 'beach',
              items: [
                { t: 'bluey', x: 330, y: 514, s: 1.2, pose: 'point' },
                { t: 'bucket', x: 460, y: 524, s: 1 },
                { t: 'livia', x: 600, y: 516, s: 1.1, pose: 'hold' }
              ],
              bubbles: [{ x: 100, y: 26, w: 300, t: 'On creuse jusqu\'à l\'autre bout du monde !', tx: 330, ty: 226 }]
            },
            text: "Puis Bluey annonce le programme : creuser un trou. Pas un petit trou. Un trou immense, qui descendrait jusqu'à l'autre bout du monde."
          },
          {
            scene: {
              bg: 'beach',
              items: [
                { t: 'bandit', x: 300, y: 516, s: 1.45, pose: 'hold' },
                { t: 'bucket', x: 430, y: 526, s: 1 },
                { t: 'spade', x: 520, y: 524, s: 1.2 },
                { t: 'bingo', x: 650, y: 514, s: .95, pose: 'hold' }
              ]
            },
            text: "Papa creuse, parce que Papa creuse toujours. Le sable vole partout, le trou grandit, et bientôt on ne voit plus que ses oreilles qui dépassent."
          },
          {
            scene: {
              bg: 'beach',
              items: [
                { t: 'bingo', x: 320, y: 514, s: .95, pose: 'shrug', mood: 'wow' },
                { t: 'crab', x: 500, y: 526, s: 1.4 },
                { t: 'bluey', x: 640, y: 514, s: 1.15, pose: 'point', mood: 'wow' }
              ],
              sfx: [{ t: 'UN CRABE !', x: 430, y: 220, fs: 38, rot: -8, color: '#e2593c' }]
            },
            text: "Et là, au fond du trou, quelque chose bouge. Deux petites pinces, deux yeux sur des tiges. Un crabe ! Bingo fait trois pas en arrière, très vite."
          },
          {
            scene: {
              bg: 'beach',
              items: [
                { t: 'crab', x: 260, y: 526, s: 1.2 },
                { t: 'crab', x: 400, y: 532, s: 1 },
                { t: 'crab', x: 540, y: 524, s: 1.1 },
                { t: 'crab', x: 680, y: 530, s: .9 },
                { t: 'bandit', x: 163, y: 516, s: 1.45, pose: 'armsup', mood: 'wow' }
              ],
              sfx: [{ t: 'MILLE CRABES !', x: 470, y: 210, fs: 34, rot: -6, color: '#fff' }]
            },
            text: "Puis un deuxième crabe sort. Puis un troisième. Puis toute une famille de crabes qui trottinent de côté. Papa saute sur place en tenant sa queue bien haut."
          },
          {
            scene: {
              bg: 'beach',
              items: [
                { t: 'livia', x: 330, y: 516, s: 1.1, pose: 'point' },
                { t: 'crab', x: 470, y: 528, s: 1.2 },
                { t: 'bluey', x: 620, y: 514, s: 1.15, pose: 'stand' }
              ],
              bubbles: [{ x: 380, y: 26, w: 300, t: 'Ils rentrent chez eux, c\'est tout.', tx: 330, ty: 230 }]
            },
            text: "« Ils ne sont pas méchants », dit Livia doucement. « On a creusé dans leur maison, c'est tout. » Alors tout le monde s'écarte, et les crabes repartent tranquillement vers la mer."
          },
          {
            scene: {
              bg: 'beach', time: 'sunset',
              items: [
                { t: 'towel', x: 400, y: 528, s: 1.2 },
                { t: 'bluey', x: 300, y: 512, s: 1.1, pose: 'sit' },
                { t: 'bingo', x: 440, y: 512, s: .9, pose: 'sit' },
                { t: 'livia', x: 570, y: 514, s: 1, pose: 'sit' },
                { t: 'shell', x: 700, y: 528, s: 1.2 }
              ]
            },
            text: "Le soir, ils rebouchent le trou tous ensemble, pour que les crabes retrouvent leur chemin. Bingo garde un coquillage. « C'est pour leur dire pardon », explique-t-elle."
          }
        ]
      },

      /* ---------- 5 ---------- */
      {
        id: 'camping-jardin',
        title: 'Le camping dans le jardin',
        subtitle: 'Dormir dehors, à trois mètres de la maison',
        tag: 'Nuit',
        themes: ['Nuit', 'Dehors'],
        minutes: 6,
        cover: {
          bg: 'garden', time: 'night',
          items: [
            { t: 'tent', x: 250, y: 514, s: 1 },
            { t: 'bluey', x: 480, y: 514, s: 1.2, pose: 'armsup' },
            { t: 'livia', x: 620, y: 516, s: 1.1, pose: 'stand' },
            { t: 'lantern', x: 700, y: 400, s: 1.2 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bandit', x: 250, y: 516, s: 1.45, pose: 'hold' },
                { t: 'tent', x: 500, y: 518, s: 1, rot: 15 },
                { t: 'bluey', x: 656, y: 514, s: 1.15, pose: 'point' }
              ],
              bubbles: [{ x: 380, y: 26, w: 300, t: 'Elle penche un peu, Papa.', tx: 690, ty: 226 }]
            },
            text: "Ce soir, on dort dans le jardin. Papa monte la tente pendant une heure entière. Quand il a fini, elle penche tellement qu'on dirait qu'elle a sommeil."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'tent', x: 240, y: 518, s: 1 },
                { t: 'livia', x: 480, y: 516, s: 1.1, pose: 'hold' },
                { t: 'bingo', x: 610, y: 514, s: .95, pose: 'hold' },
                { t: 'esky', x: 720, y: 524, s: .9 }
              ]
            },
            text: "Livia arrive avec son sac de couchage sous le bras. Bingo, elle, a apporté onze peluches. « C'est le minimum », explique-t-elle très sérieusement."
          },
          {
            scene: {
              bg: 'garden', time: 'night',
              items: [
                { t: 'campfire', x: 420, y: 518, s: 1.1 },
                { t: 'log', x: 250, y: 514 },
                { t: 'bluey', x: 240, y: 504, s: 1.1, pose: 'hold' },
                { t: 'log', x: 620, y: 514 },
                { t: 'livia', x: 610, y: 504, s: 1.05, pose: 'hold' },
                { t: 'marshmallow', x: 300, y: 470, s: .9 }
              ],
              bubbles: [{ x: 300, y: 26, w: 300, t: 'Le mien est parfait !', tx: 250, ty: 250, fill: '#fff6ec' }]
            },
            text: "La nuit tombe et Papa allume un petit feu. Chacun fait griller un chamallow au bout d'un bâton. Celui de Bingo tombe dans les braises. Elle en reprend un autre, sans un mot."
          },
          {
            scene: {
              bg: 'garden', time: 'night',
              back: [{ t: 'bush', x: 700, y: 518, s: 1.2, color: '#2f4a3a' }],
              items: [
                { t: 'bluey', x: 340, y: 514, s: 1.15, pose: 'shrug', mood: 'wow' },
                { t: 'bingo', x: 470, y: 514, s: .95, pose: 'shrug', mood: 'wow' },
                { t: 'livia', x: 600, y: 516, s: 1.05, pose: 'point', mood: 'wow' }
              ],
              sfx: [{ t: 'FRRRT…', x: 700, y: 400, fs: 34, rot: 6, color: '#f7c518' }]
            },
            text: "Puis un bruit sort du buisson. FRRRT. Les trois se serrent l'une contre l'autre. « C'est peut-être un dragon », chuchote Bingo, qui n'y croit pas vraiment. Ou peut-être un peu."
          },
          {
            scene: {
              bg: 'garden', time: 'night',
              items: [
                { t: 'hedgehog', x: 600, y: 526, s: 1.5 },
                { t: 'bluey', x: 300, y: 514, s: 1.15, pose: 'point' },
                { t: 'livia', x: 430, y: 516, s: 1.05, pose: 'stand' }
              ],
              bubbles: [{ x: 90, y: 26, w: 300, t: 'C\'est un hérisson ! Il a faim.', tx: 300, ty: 226 }]
            },
            text: "Bluey approche la lanterne tout doucement. Ce n'est pas un dragon : c'est un hérisson, venu voir si les chamallows tombaient souvent. Livia lui laisse un morceau de pomme."
          },
          {
            scene: {
              bg: 'garden', time: 'night',
              items: [
                { t: 'bluey', x: 300, y: 514, s: 1.15, pose: 'armsup' },
                { t: 'livia', x: 440, y: 516, s: 1.05, pose: 'armsup' },
                { t: 'bingo', x: 570, y: 514, s: .9, pose: 'armsup' }
              ],
              front: [{ t: 'star', x: 200, y: 120, r: 16 }, { t: 'sparkle', x: 560, y: 140, r: 20 }],
              sfx: [{ t: 'Une étoile filante !', x: 420, y: 190, fs: 32, rot: -5, color: '#fff7d6' }]
            },
            text: "Ensuite, tout le monde s'allonge dans l'herbe. Le ciel est plein d'étoiles, bien plus que d'habitude. Une étoile file au-dessus du toit. Chacun fait un vœu, en silence."
          },
          {
            scene: {
              bg: 'garden', time: 'night',
              items: [
                { t: 'tent', x: 400, y: 518, s: 1.25 },
                { t: 'campfire', x: 660, y: 518, s: .7 }
              ],
              bubbles: [{ x: 100, y: 60, w: 300, t: 'Bonne nuit Bluey… Bonne nuit Livia…', tx: 320, ty: 420, fill: '#fff6ec' }]
            },
            text: "Dans la tente, les trois amies parlent encore un peu, de moins en moins fort. Dehors, on entend juste les grillons. Et à trois mètres de là, la maison veille sur elles."
          }
        ]
      },

      /* ---------- 6 ---------- */
      {
        id: 'glaces',
        title: 'La course des glaces fondues',
        subtitle: 'Manger vite, mais pas trop vite',
        tag: 'Été',
        themes: ['Été', 'Bêtises'],
        minutes: 5,
        cover: {
          bg: 'village',
          items: [
            { t: 'bluey', x: 320, y: 512, s: 1.2, pose: 'hold' },
            { t: 'icecream', x: 400, y: 482, s: 1.2 },
            { t: 'livia', x: 540, y: 514, s: 1.1, pose: 'hold' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'chilli', x: 260, y: 514, s: 1.4, pose: 'point' },
                { t: 'bluey', x: 440, y: 512, s: 1.2, pose: 'armsup' },
                { t: 'bingo', x: 570, y: 512, s: .95, pose: 'armsup' },
                { t: 'livia', x: 684, y: 514, s: 1.1, pose: 'armsup' }
              ],
              bubbles: [{ x: 320, y: 26, w: 300, t: 'Une glace chacun, ça vous dit ?', tx: 270, ty: 226 }]
            },
            text: "Il fait trente-quatre degrés. Maman s'arrête devant le marchand de glaces et propose une glace pour tout le monde. La réponse arrive avant la fin de sa phrase."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'bluey', x: 280, y: 514, s: 1.2, pose: 'hold' },
                { t: 'icecream', x: 350, y: 484, s: 1.1 },
                { t: 'bingo', x: 480, y: 514, s: .95, pose: 'hold' },
                { t: 'icecream', x: 540, y: 486, s: 1, color: '#a97ce0' },
                { t: 'livia', x: 660, y: 516, s: 1.1, pose: 'hold' }
              ],
              bubbles: [{ x: 100, y: 26, w: 290, t: 'Trois boules pour moi !', tx: 280, ty: 226 }]
            },
            text: "Bluey prend fraise-vanille-chocolat. Bingo prend trois fois la même parfum myrtille, pour être sûre. Livia hésite si longtemps que le marchand s'assoit."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'bluey', x: 320, y: 514, s: 1.2, pose: 'point', mood: 'wow' },
                { t: 'icecream', x: 480, y: 490, s: 1.2 },
                { t: 'livia', x: 620, y: 516, s: 1.1, pose: 'stand', mood: 'wow' }
              ],
              sfx: [{ t: 'ÇA COULE !', x: 598, y: 194, fs: 34, rot: -8, color: '#e2593c' }]
            },
            text: "Mais dehors, le soleil ne plaisante pas. Au bout de dix secondes, les glaces commencent à couler sur les pattes. « Course ! » crie Bluey. « Le dernier propre a perdu ! »"
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'bingo', x: 300, y: 514, s: .95, pose: 'shrug', mood: 'sad' },
                { t: 'icecream', x: 430, y: 520, s: 1.1 },
                { t: 'bluey', x: 600, y: 514, s: 1.15, pose: 'stand', mood: 'sad' }
              ],
              sfx: [{ t: 'PLOP.', x: 500, y: 300, fs: 40, rot: -6, color: '#fff' }]
            },
            text: "Et puis, PLOP. La boule du haut de Bingo tombe par terre. Tout devient très silencieux. Bingo regarde sa glace, puis le trottoir, puis sa glace encore."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 330, y: 516, s: 1.1, pose: 'hold' },
                { t: 'icecream', x: 420, y: 486, s: 1.2 },
                { t: 'bingo', x: 560, y: 514, s: .95, pose: 'stand' }
              ],
              bubbles: [{ x: 380, y: 26, w: 300, t: 'Tiens, on partage la mienne.', tx: 330, ty: 230 }]
            },
            text: "Alors Livia tend sa glace à Bingo. « On partage, elle est trop grande pour moi. » Bingo regarde Livia comme si elle venait d'inventer quelque chose de très important."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'bandit', x: 300, y: 514, s: 1.45, pose: 'shrug', mood: 'wow' },
                { t: 'icecream', x: 460, y: 522, s: 1.1 },
                { t: 'bluey', x: 620, y: 514, s: 1.15, pose: 'armsup' }
              ],
              sfx: [{ t: 'SPLOTCH !', x: 640, y: 182, fs: 38, rot: -10, color: '#f7c518' }]
            },
            text: "C'est le moment que choisit la glace de Papa pour tomber entièrement. Toutes les boules d'un coup, sur sa chaussure. Cette fois, c'est lui qui a l'air d'avoir quatre ans."
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'bluey', x: 280, y: 516, s: 1.15, pose: 'hold' },
                { t: 'bingo', x: 410, y: 516, s: .95, pose: 'hold' },
                { t: 'livia', x: 540, y: 518, s: 1.05, pose: 'hold' },
                { t: 'bandit', x: 690, y: 516, s: 1.4, pose: 'hold' }
              ],
              bubbles: [{ x: 400, y: 26, w: 300, t: 'On en reprend une, plus petite ?', tx: 690, ty: 230 }]
            },
            text: "Le marchand, qui avait tout vu, en offre une nouvelle à Papa. Une toute petite, avec une seule boule. « Comme ça elle tiendra », dit-il. Elle a tenu douze secondes."
          }
        ]
      },

      /* ---------- 7 ---------- */
      {
        id: 'toboggan-eau',
        title: 'Le toboggan d\'eau du jardin',
        subtitle: 'Une bâche, du savon, et beaucoup de courage',
        tag: 'Jardin',
        themes: ['Été', 'Bêtises'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'slide', x: 240, y: 516, s: 1, color: '#5b9bd5' },
            { t: 'bluey', x: 520, y: 470, s: 1.15, pose: 'jump', mood: 'wow' },
            { t: 'pool', x: 586, y: 508, s: .78 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bandit', x: 280, y: 516, s: 1.45, pose: 'hold' },
                { t: 'bluey', x: 470, y: 514, s: 1.2, pose: 'point' },
                { t: 'livia', x: 620, y: 516, s: 1.1, pose: 'stand' }
              ],
              bubbles: [{ x: 300, y: 26, w: 310, t: 'On étale la bâche sur la pente !', tx: 470, ty: 226 }]
            },
            text: "Papa a trouvé une grande bâche bleue dans le garage. Bluey, elle, a trouvé quoi en faire : l'étaler sur la pente du jardin et verser de l'eau dessus."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'pool', x: 640, y: 528, s: .9 }],
              items: [
                { t: 'slide', x: 220, y: 518, s: 1.05, color: '#5b9bd5' },
                { t: 'bingo', x: 560, y: 514, s: .95, pose: 'stand', mood: 'wow' }
              ],
              sfx: [{ t: 'ET DU SAVON !', x: 470, y: 210, fs: 32, rot: -6, color: '#8fd0e8' }]
            },
            text: "Puis Livia ajoute une idée : du savon. Beaucoup de savon. La bâche devient si glissante qu'on ne peut même plus marcher à côté sans partir en arrière."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'pool', x: 640, y: 528, s: .9 }],
              items: [
                { t: 'slide', x: 220, y: 518, s: 1.05, color: '#5b9bd5' },
                { t: 'bluey', x: 470, y: 440, s: 1.1, pose: 'jump', mood: 'wow' }
              ],
              front: [{ t: 'splash', x: 630, y: 520, s: 1 }],
              sfx: [{ t: 'WOUUUUH !', x: 250, y: 246, fs: 40, rot: -10, color: '#fff' }]
            },
            text: "Bluey passe la première. Elle prend de l'élan, saute sur la bâche et file comme une fusée jusque dans la pataugeoire du bas. WOUUUUH !"
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'slide', x: 220, y: 518, s: 1.05, color: '#5b9bd5' }],
              items: [
                { t: 'bingo', x: 500, y: 514, s: .95, pose: 'shrug', mood: 'sad' },
                { t: 'livia', x: 640, y: 516, s: 1.1, pose: 'hold' }
              ],
              bubbles: [{ x: 300, y: 26, w: 300, t: 'C\'est trop rapide pour moi…', tx: 500, ty: 236 }]
            },
            text: "Bingo monte en haut de la pente. Elle regarde en bas. Elle redescend. Elle remonte. « C'est trop rapide pour moi », dit-elle tout bas."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'slide', x: 220, y: 518, s: 1.05, color: '#5b9bd5' }],
              items: [
                { t: 'livia', x: 470, y: 442, s: 1.05, pose: 'jump' },
                { t: 'bingo', x: 590, y: 446, s: .9, pose: 'jump', mood: 'wow' }
              ],
              front: [{ t: 'splash', x: 680, y: 522, s: .9 }],
              bubbles: [{ x: 260, y: 24, w: 300, t: 'À deux, on va moins vite !', tx: 470, ty: 200 }]
            },
            text: "Alors Livia s'assoit derrière elle et l'entoure de ses bras. « À deux, on va moins vite », promet-elle. Ce n'est pas vrai du tout, mais ça marche quand même."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'slide', x: 200, y: 518, s: 1.05, color: '#5b9bd5' }],
              items: [
                { t: 'bandit', x: 480, y: 460, s: 1.5, pose: 'armsup', mood: 'wow' }
              ],
              front: [{ t: 'splash', x: 660, y: 522, s: 1.2 }],
              sfx: [{ t: 'ATTENTIOOON !', x: 214, y: 274, fs: 32, rot: -10, color: '#e2593c' }]
            },
            text: "Papa voulait juste ramasser une chaussette au bord de la bâche. Il ne l'a jamais ramassée. On l'a retrouvé assis dans la pataugeoire, l'air très surpris."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'towel', x: 400, y: 528, s: 1.2 },
                { t: 'bluey', x: 300, y: 512, s: 1.1, pose: 'sit' },
                { t: 'bingo', x: 440, y: 512, s: .9, pose: 'sit' },
                { t: 'livia', x: 570, y: 514, s: 1, pose: 'sit' },
                { t: 'mangue', x: 690, y: 524, s: 1.1 }
              ]
            },
            text: "Le soir, tout le monde s'enroule dans une serviette sur la terrasse, les cheveux qui sentent le savon. Maman coupe une mangue en morceaux. C'est la fin parfaite d'une journée trempée."
          }
        ]
      },

      /* ---------- 8 ---------- */
      {
        id: 'tresor',
        title: 'La chasse au trésor du jardin',
        subtitle: 'Une carte dessinée par Bingo',
        tag: 'Jardin',
        themes: ['Dehors', 'Amitié'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'bingo', x: 320, y: 514, s: 1.05, pose: 'point' },
            { t: 'livia', x: 470, y: 516, s: 1.1, pose: 'hold' },
            { t: 'bluey', x: 610, y: 514, s: 1.2, pose: 'stand' },
            { t: 'suitcase', x: 730, y: 526, s: .8 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bingo', x: 340, y: 514, s: 1, pose: 'hold' },
                { t: 'bluey', x: 490, y: 514, s: 1.2, pose: 'stand' },
                { t: 'livia', x: 630, y: 516, s: 1.1, pose: 'stand' }
              ],
              bubbles: [{ x: 100, y: 26, w: 310, t: 'J\'ai dessiné une carte au trésor !', tx: 340, ty: 230 }]
            },
            text: "Bingo a passé toute la matinée à dessiner une carte. Il y a un arbre, une croix, un serpent et quelque chose qui pourrait être un dragon. « C'est un caillou », précise-t-elle."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'tree', x: 620, y: 500, s: 1.2 }],
              items: [
                { t: 'bluey', x: 300, y: 514, s: 1.2, pose: 'point' },
                { t: 'bingo', x: 440, y: 514, s: 1, pose: 'stand' },
                { t: 'livia', x: 560, y: 516, s: 1.1, pose: 'stand' }
              ],
              bubbles: [{ x: 60, y: 26, w: 290, t: 'Sept pas vers le grand arbre !', tx: 300, ty: 226 }]
            },
            text: "Première étape : sept pas vers le grand arbre. Ils comptent tous ensemble, très fort. Bingo fait des pas minuscules, alors elle arrive bien après les autres."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bush', x: 250, y: 520, s: 1.3 },
                { t: 'livia', x: 460, y: 516, s: 1.1, pose: 'point' },
                { t: 'butterfly', x: 620, y: 320, s: 1.5 },
                { t: 'bingo', x: 640, y: 514, s: 1, pose: 'armsup' }
              ]
            },
            text: "Deuxième étape : suivre le papillon orange. Ce n'était pas écrit sur la carte, mais le papillon passait par là, alors ça devenait forcément une étape."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 320, y: 514, s: 1.2, pose: 'shrug', mood: 'sad' },
                { t: 'bingo', x: 470, y: 514, s: 1, pose: 'shrug', mood: 'sad' },
                { t: 'livia', x: 610, y: 516, s: 1.1, pose: 'shrug' }
              ],
              sfx: [{ t: 'ET MAINTENANT ?', x: 430, y: 158, fs: 30, rot: -5, color: '#f7c518' }]
            },
            text: "Troisième étape : la croix rouge. Sauf qu'au bon endroit, il n'y a rien du tout. Juste de l'herbe. Bingo retourne la carte dans tous les sens, l'air très ennuyé."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 360, y: 516, s: 1.1, pose: 'point', mood: 'wow' },
                { t: 'suitcase', x: 560, y: 526, s: 1 },
                { t: 'bluey', x: 680, y: 514, s: 1.15, pose: 'armsup', mood: 'wow' }
              ],
              bubbles: [{ x: 90, y: 26, w: 300, t: 'La carte était à l\'envers !', tx: 360, ty: 230 }]
            },
            text: "C'est Livia qui comprend : la carte était à l'envers. En la retournant, la croix tombe pile sur le vieux coffre en bois, près de la remise. Il est là depuis toujours."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'suitcase', x: 400, y: 524, s: 1.2 },
                { t: 'bluey', x: 260, y: 514, s: 1.15, pose: 'hold' },
                { t: 'bingo', x: 560, y: 514, s: 1, pose: 'hold', mood: 'wow' },
                { t: 'livia', x: 690, y: 516, s: 1.1, pose: 'stand', mood: 'wow' }
              ],
              sfx: [{ t: 'CRIIIC…', x: 400, y: 300, fs: 34, rot: -6, color: '#fff' }]
            },
            text: "Le couvercle grince en s'ouvrant. À l'intérieur : trois vieilles photos, une balle de tennis toute plate, et un dessin fait par Papa quand il avait leur âge."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'bandit', x: 280, y: 516, s: 1.45, pose: 'hold' },
                { t: 'bluey', x: 450, y: 507, s: 1.15, pose: 'sit' },
                { t: 'bingo', x: 580, y: 516, s: .95, pose: 'sit' },
                { t: 'livia', x: 700, y: 518, s: 1.05, pose: 'sit' }
              ],
              bubbles: [{ x: 340, y: 26, w: 300, t: 'C\'était mon trésor à moi.', tx: 290, ty: 230 }]
            },
            text: "Papa s'assoit dans l'herbe avec le dessin dans les pattes. « C'était mon trésor à moi », dit-il doucement. Bingo décide alors que la carte servira encore demain."
          }
        ]
      },

      /* ---------- 9 ---------- */
      {
        id: 'pique-nique',
        title: 'Le pique-nique tout en haut',
        subtitle: 'Une colline, un panier, et beaucoup de vent',
        tag: 'Été',
        themes: ['Dehors', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'hill',
          items: [
            { t: 'towel', x: 400, y: 522, s: 1.2 },
            { t: 'bluey', x: 300, y: 508, s: 1.15, pose: 'sit' },
            { t: 'livia', x: 480, y: 510, s: 1.05, pose: 'sit' },
            { t: 'kite', x: 640, y: 200, s: 1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'chilli', x: 240, y: 514, s: 1.4, pose: 'hold' },
                { t: 'esky', x: 340, y: 524, s: .9 },
                { t: 'bluey', x: 480, y: 512, s: 1.2, pose: 'run' },
                { t: 'bingo', x: 620, y: 512, s: .95, pose: 'run' }
              ],
              sfx: [{ t: 'LE PREMIER EN HAUT !', x: 470, y: 150, fs: 30, rot: -6, color: '#fff' }]
            },
            text: "La colline est haute et l'herbe sèche crisse sous les pattes. « Le premier en haut ! » crie Bluey. Maman monte tranquillement derrière, avec la glacière."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'bandit', x: 320, y: 514, s: 1.45, pose: 'shrug', mood: 'sad' },
                { t: 'esky', x: 470, y: 524, s: 1 },
                { t: 'livia', x: 620, y: 516, s: 1.1, pose: 'point' }
              ],
              bubbles: [{ x: 380, y: 26, w: 300, t: 'Papa, tu es tout rouge !', tx: 620, ty: 230 }]
            },
            text: "Papa arrive bon dernier, la glacière dans une patte et le parasol dans l'autre. Il s'assoit dans l'herbe sans un mot pendant un long moment."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'towel', x: 400, y: 522, s: 1.3 },
                { t: 'bluey', x: 290, y: 506, s: 1.1, pose: 'sit' },
                { t: 'bingo', x: 430, y: 506, s: .9, pose: 'sit' },
                { t: 'livia', x: 560, y: 508, s: 1.05, pose: 'sit' },
                { t: 'watermelon', x: 680, y: 522, s: .9 }
              ]
            },
            text: "La nappe est étalée, et le festin commence : sandwiches, pastèque, chips et jus de fruits. On voit toute la ville en bas, minuscule, avec les toits qui brillent."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'bingo', x: 300, y: 514, s: .95, pose: 'shrug', mood: 'wow' },
                { t: 'towel', x: 560, y: 524, s: 1.2, rot: 12 }
              ],
              sfx: [{ t: 'FFFOUUU !', x: 500, y: 220, fs: 38, rot: -8, color: '#fff' }]
            },
            text: "Et puis le vent se lève. D'un seul coup, la nappe décolle avec tout ce qu'il y avait dessus. Les serviettes partent vers le bas de la colline, en tourbillonnant."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'bandit', x: 300, y: 516, s: 1.45, pose: 'run' },
                { t: 'bluey', x: 470, y: 514, s: 1.15, pose: 'run' },
                { t: 'livia', x: 620, y: 516, s: 1.1, pose: 'run' }
              ],
              sfx: [{ t: 'ATTRAPEZ TOUT !', x: 566, y: 166, fs: 30, rot: -6, color: '#f7c518' }]
            },
            text: "Tout le monde part à la poursuite du pique-nique. Papa court après une serviette, Bluey après un sandwich, et Livia rattrape le sachet de chips en plein vol."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'kite', x: 560, y: 180, s: 1.1 },
                { t: 'livia', x: 300, y: 514, s: 1.1, pose: 'hold' },
                { t: 'tether', x: 360, y: 408, dx: 190, dy: -170, qx: 130, qy: -40 },
                { t: 'bingo', x: 440, y: 514, s: .95, pose: 'armsup' }
              ],
              bubbles: [{ x: 90, y: 26, w: 300, t: 'Un vent pareil, ça se mérite !', tx: 300, ty: 230 }]
            },
            text: "Mais un vent pareil, ça ne se gâche pas. Livia sort le cerf-volant du sac. Il monte du premier coup, si haut qu'il devient un petit point rouge dans le bleu."
          },
          {
            scene: {
              bg: 'hill', time: 'sunset',
              items: [
                { t: 'towel', x: 420, y: 524, s: 1.3 },
                { t: 'bandit', x: 280, y: 492, s: 1.35, pose: 'sit' },
                { t: 'bluey', x: 430, y: 508, s: 1.1, pose: 'sit' },
                { t: 'bingo', x: 550, y: 508, s: .9, pose: 'sit' },
                { t: 'livia', x: 670, y: 510, s: 1.05, pose: 'sit' }
              ]
            },
            text: "Ils restent tout en haut jusqu'à ce que le soleil touche les toits. Personne ne parle. En bas, les lumières de la ville s'allument une par une, comme des étoiles à l'envers."
          }
        ]
      },

      /* ---------- 10 ---------- */
      {
        id: 'lucioles',
        title: 'La nuit des lucioles',
        subtitle: 'Rester réveillé jusqu\'à la nuit noire',
        tag: 'Nuit',
        themes: ['Nuit', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'garden', time: 'night',
          items: [
            { t: 'bluey', x: 320, y: 514, s: 1.2, pose: 'point' },
            { t: 'livia', x: 470, y: 516, s: 1.1, pose: 'armsup' },
            { t: 'bingo', x: 600, y: 514, s: .95, pose: 'stand' },
            { t: 'lantern', x: 700, y: 380, s: 1.3 },
            { t: 'sparkle', x: 180, y: 200, r: 18 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'chilli', x: 280, y: 516, s: 1.4, pose: 'point' },
                { t: 'bluey', x: 460, y: 514, s: 1.2, pose: 'stand' },
                { t: 'bingo', x: 600, y: 514, s: .95, pose: 'stand' },
                { t: 'livia', x: 705, y: 516, s: 1.1, pose: 'stand' }
              ],
              bubbles: [{ x: 340, y: 26, w: 310, t: 'Ce soir, vous vous couchez plus tard.', tx: 290, ty: 226 }]
            },
            text: "Ce soir, Maman a dit une phrase incroyable : « Vous vous couchez plus tard. » Personne n'a osé demander pourquoi, de peur qu'elle change d'avis."
          },
          {
            scene: {
              bg: 'garden', time: 'night',
              items: [
                { t: 'bluey', x: 320, y: 514, s: 1.2, pose: 'shrug' },
                { t: 'bingo', x: 460, y: 514, s: .95, pose: 'shrug' },
                { t: 'livia', x: 590, y: 516, s: 1.1, pose: 'stand' }
              ],
              sfx: [{ t: 'IL N\'Y A RIEN…', x: 430, y: 156, fs: 30, rot: -5, color: '#fff' }]
            },
            text: "Ils attendent dans le jardin, assis en rond dans l'herbe. Il ne se passe rien. Rien du tout. Bingo commence à se demander si Maman s'est trompée."
          },
          {
            scene: {
              bg: 'garden', time: 'night',
              items: [
                { t: 'livia', x: 380, y: 516, s: 1.1, pose: 'point', mood: 'wow' },
                { t: 'lantern', x: 600, y: 400, s: 1.1 },
                { t: 'bluey', x: 640, y: 514, s: 1.15, pose: 'stand', mood: 'wow' }
              ],
              bubbles: [{ x: 60, y: 26, w: 290, t: 'Là ! Une petite lumière !', tx: 380, ty: 230 }]
            },
            text: "Et puis Livia voit la première : une minuscule lumière verte, qui s'allume et s'éteint au-dessus de l'herbe. Une luciole. Puis deux. Puis dix."
          },
          {
            scene: {
              bg: 'garden', time: 'night',
              items: [
                { t: 'bluey', x: 300, y: 514, s: 1.2, pose: 'armsup' },
                { t: 'bingo', x: 440, y: 514, s: .95, pose: 'jump' },
                { t: 'livia', x: 580, y: 516, s: 1.1, pose: 'armsup' }
              ],
              front: [
                { t: 'lantern', x: 200, y: 340, s: .7 }, { t: 'lantern', x: 520, y: 280, s: .6 },
                { t: 'lantern', x: 690, y: 380, s: .8 }, { t: 'sparkle', x: 380, y: 240, r: 14 }
              ]
            },
            text: "Le jardin entier se met à clignoter. Les trois amies tournent sur elles-mêmes, les bras en l'air, au milieu des petites lumières qui montent et qui descendent."
          },
          {
            scene: {
              bg: 'garden', time: 'night',
              items: [
                { t: 'bingo', x: 400, y: 514, s: 1, pose: 'hold' },
                { t: 'lantern', x: 400, y: 420, s: .8 },
                { t: 'livia', x: 580, y: 516, s: 1.1, pose: 'stand' }
              ],
              bubbles: [{ x: 100, y: 26, w: 300, t: 'Elle s\'est posée sur ma patte !', tx: 400, ty: 236 }]
            },
            text: "Une luciole se pose sur la patte de Bingo. Bingo ne bouge plus du tout, même pas les oreilles. La lumière s'allume, s'éteint, s'allume encore. Puis elle repart."
          },
          {
            scene: {
              bg: 'garden', time: 'night',
              items: [
                { t: 'bandit', x: 300, y: 516, s: 1.45, pose: 'point' },
                { t: 'bluey', x: 480, y: 514, s: 1.15, pose: 'stand' },
                { t: 'bingo', x: 610, y: 514, s: .95, pose: 'stand' },
                { t: 'livia', x: 720, y: 516, s: 1.05, pose: 'stand' }
              ],
              bubbles: [{ x: 340, y: 26, w: 310, t: 'Elles font ça deux semaines par an.', tx: 300, ty: 226 }]
            },
            text: "Papa explique tout bas que les lucioles ne brillent que quelques nuits dans l'année. « Alors c'est une nuit rare », dit Bluey. Papa hoche la tête : « Très rare. »"
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'bluey', x: 300, y: 500, s: 1.15, pose: 'stand', mood: 'sleep' },
                { t: 'bingo', x: 430, y: 500, s: .95, pose: 'stand', mood: 'sleep' },
                { t: 'livia', x: 560, y: 502, s: 1.05, pose: 'stand', mood: 'sleep' },
                { t: 'sparkle', x: 700, y: 330, r: 16 }
              ],
              bubbles: [{ x: 90, y: 40, w: 300, t: 'Bonne nuit les lucioles…', tx: 300, ty: 250, fill: '#fff6ec' }]
            },
            text: "Dans la chambre, les trois amies ont encore des petites lumières plein les yeux. « Bonne nuit les lucioles », murmure Bingo. Elles dorment avant la fin de la phrase."
          }
        ]
      },

      /* ---------- 11 : partager le temps ---------- */
      {
        id: 'balancoire',
        title: 'La balançoire pour deux',
        subtitle: 'Une seule balançoire, et vingt secondes chacun',
        tag: 'Jardin',
        themes: ['Partager', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'bluey', x: 280, y: 518, s: 1.15, pose: 'armsup' },
            { t: 'livia', x: 520, y: 522, s: 1.1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 300, y: 518, s: 1.2, pose: 'armsup' },
                { t: 'livia', x: 560, y: 522, s: 1.15, pose: 'armsup' }
              ],
              sfx: [{ t: 'UNE BALANÇOIRE !', x: 430, y: 164, fs: 28, rot: -5, color: '#6f9ed8' }]
            },
            text: "Papa avait accroché une balançoire à la branche du grand arbre. Une seule. Bluey et Livia la regardèrent, puis se regardèrent, et comprirent le problème en même temps."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 280, y: 518, s: 1.15, pose: 'point' },
                { t: 'livia', x: 560, y: 522, s: 1.15, pose: 'point' }
              ],
              sfx: [{ t: 'MOI D\'ABORD !', x: 430, y: 162, fs: 32, rot: -6, color: '#e0453c' }]
            },
            text: "« Moi d'abord ! » dirent-elles exactement en même temps, ce qui ne réglait rien du tout. Elles le redirent une deuxième fois, plus fort, ce qui ne régla rien non plus."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bandit', x: 260, y: 516, s: 1.4, pose: 'shrug' },
                { t: 'bluey', x: 500, y: 518, s: 1.1, mood: 'sad' },
                { t: 'livia', x: 690, y: 522, s: 1.05, mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 24, w: 340, t: 'Vingt. On compte jusqu\'à vingt, chacune son tour.', tx: 300, ty: 240 }]
            },
            text: "Papa arriva avec une idée à la place d'une punition. « Vingt », dit-il. « On compte jusqu'à vingt à voix haute, et on change. Celle qui pousse compte. »"
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 300, y: 518, s: 1.15, pose: 'armsup' },
                { t: 'livia', x: 560, y: 522, s: 1.15, pose: 'hold' }
              ],
              sfx: [{ t: 'UN… DEUX… TROIS…', x: 430, y: 160, fs: 26, rot: -4, color: '#3ec9c9' }]
            },
            text: "Livia poussa, et compta. Un, deux, trois. Au début elle compta très vite, en espérant que ça irait plus vite. Papa lui fit remarquer qu'après, ce serait pareil pour elle."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 522, s: 1.15, pose: 'armsup' },
                { t: 'bluey', x: 560, y: 518, s: 1.15, pose: 'hold' }
              ],
              sfx: [{ t: 'DIX-HUIT… DIX-NEUF…', x: 430, y: 160, fs: 26, rot: -4, color: '#6f9ed8' }]
            },
            text: "Alors Bluey compta lentement, très lentement, en traînant sur chaque nombre. Livia fut d'accord pour dire que c'était la meilleure façon de compter jusqu'à vingt."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 300, y: 518, s: 1.15, pose: 'armsup' },
                { t: 'livia', x: 560, y: 522, s: 1.15, pose: 'armsup' }
              ],
              sfx: [{ t: 'À TOI ! À MOI !', x: 430, y: 158, fs: 30, rot: -6, color: '#f7c518' }]
            },
            text: "Elles firent ça tout l'après-midi. Vingt pour l'une, vingt pour l'autre. Attendre son tour est beaucoup moins long quand on sait exactement combien de temps ça dure."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'bandit', x: 260, y: 516, s: 1.4 },
                { t: 'bluey', x: 480, y: 506, s: 1.1, pose: 'sit' },
                { t: 'livia', x: 690, y: 508, s: 1.05, pose: 'sit' }
              ]
            },
            text: "Le soir, Papa demanda qui avait gagné. Personne ne comprit la question. On ne gagne pas à la balançoire : on y va chacun son tour, et c'est déjà beaucoup."
          }
        ]
      },

      /* ---------- 12 : donner ce dont on ne se sert plus ---------- */
      {
        id: 'donner',
        title: 'Les jouets qu\'on donne',
        subtitle: 'Se séparer de ce dont on ne joue plus',
        tag: 'Jardin',
        themes: ['Partager', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'chilli', x: 280, y: 506, s: 1.4, pose: 'hold' },
            { t: 'bluey', x: 500, y: 508, s: 1.15, mood: 'sad' },
            { t: 'livia', x: 690, y: 510, s: 1.05 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'chilli', x: 280, y: 506, s: 1.4, pose: 'point' },
                { t: 'bluey', x: 520, y: 508, s: 1.15 },
                { t: 'livia', x: 700, y: 510, s: 1.05 }
              ],
              front: [{ t: 'tourcubes', x: 620, y: 542, s: .7, n: 3 }],
              sfx: [{ t: 'ON RANGE LE COFFRE !', x: 420, y: 146, fs: 26, rot: -4, color: '#d87c3a' }]
            },
            text: "Le coffre à jouets ne fermait plus. Maman proposa de trier : ce qu'on garde d'un côté, ce qu'on donne de l'autre. Bluey et Livia trouvèrent l'idée très raisonnable, en théorie."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'bluey', x: 320, y: 508, s: 1.2, pose: 'hold' },
                { t: 'livia', x: 580, y: 510, s: 1.15, pose: 'hold' }
              ],
              sfx: [{ t: 'ÇA, JE GARDE !', x: 430, y: 146, fs: 28, rot: -5, color: '#6f9ed8' }]
            },
            text: "En pratique, ce fut différent. Chaque jouet sorti du coffre redevenait immédiatement le jouet préféré du monde. Même celui à qui il manquait une roue depuis deux ans."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'chilli', x: 300, y: 506, s: 1.4, pose: 'shrug' },
                { t: 'livia', x: 570, y: 510, s: 1.15, mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 22, w: 340, t: 'Quand y as-tu joué la dernière fois ?', tx: 305, ty: 236 }]
            },
            text: "« Quand y as-tu joué la dernière fois ? » demanda Maman. Livia réfléchit très fort. Elle ne trouva pas. C'était une question désagréable et très efficace."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'bluey', x: 260, y: 520, s: 1.15, pose: 'hold' },
                { t: 'livia', x: 480, y: 522, s: 1.1, pose: 'hold' },
                { t: 'chilli', x: 690, y: 518, s: 1.3, pose: 'hold' }
              ],
              front: [{ t: 'suitcase', x: 380, y: 546, s: 1.1 }],
              sfx: [{ t: 'C\'EST LOURD !', x: 420, y: 166, fs: 28, rot: -5, color: '#e0954e' }]
            },
            text: "Elles remplirent quand même un carton. Puis elles le portèrent, toutes les trois, jusqu'à la salle du bas de la rue, où des gens donnent des jouets à des enfants qui n'en ont pas."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 300, y: 522, s: 1.15, mood: 'wow' },
                { t: 'bluey', x: 560, y: 520, s: 1.15, mood: 'wow' }
              ],
              sfx: [{ t: 'OH ! MERCI !', x: 430, y: 166, fs: 30, rot: -6, color: '#f7c518' }]
            },
            text: "Une petite fille prit le camion à trois roues dans ses bras comme si c'était un trésor. Livia eut envie de dire que c'était le sien. Elle ne le dit pas, et elle regarda."
          },
          {
            scene: {
              bg: 'bedroom', time: 'sunset',
              items: [
                { t: 'bluey', x: 300, y: 496, s: 1.15, pose: 'sit' },
                { t: 'livia', x: 560, y: 496, s: 1.1, pose: 'sit' }
              ]
            },
            text: "Le soir, le coffre fermait. Il y avait de la place pour jouer par terre. Livia pensa au camion, de temps en temps, et à chaque fois ça lui faisait quelque chose de doux."
          }
        ]
      },

      /* ---------- 13 : dedans, dehors ---------- */
      {
        id: 'dedans-dehors',
        title: 'Dedans on marche, dehors on court',
        subtitle: 'Les règles changent d\'endroit',
        tag: 'Jardin',
        themes: ['Règles', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'bandit', x: 300, y: 504, s: 1.45, pose: 'point' },
            { t: 'bluey', x: 540, y: 508, s: 1.2, pose: 'run' },
            { t: 'livia', x: 710, y: 510, s: 1.05, pose: 'run' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'bluey', x: 300, y: 508, s: 1.2, pose: 'run' },
                { t: 'livia', x: 560, y: 510, s: 1.15, pose: 'run' }
              ],
              sfx: [{ t: 'BOUM BOUM BOUM !', x: 430, y: 146, fs: 30, rot: -6, color: '#6f9ed8' }]
            },
            text: "Il pleuvait. Alors Bluey et Livia inventèrent la course du couloir : quinze pas, demi-tour, quinze pas. Le sol tremblait un peu, et c'était justement ce qui était bien."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'bandit', x: 300, y: 504, s: 1.45, mood: 'fache' },
                { t: 'bluey', x: 560, y: 508, s: 1.15, mood: 'sad' },
                { t: 'livia', x: 720, y: 510, s: 1, mood: 'sad' }
              ],
              sfx: [{ t: 'ON NE COURT PAS DEDANS !', x: 420, y: 144, fs: 24, rot: -4, color: '#e0453c' }]
            },
            text: "« On ne court pas dedans ! » dit Papa. Bluey répondit qu'hier, au parc, personne ne lui avait rien dit. Elle trouvait ça parfaitement contradictoire."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'bandit', x: 300, y: 494, s: 1.45, pose: 'sit' },
                { t: 'livia', x: 560, y: 496, s: 1.15, pose: 'sit' }
              ],
              bubbles: [{ x: 300, y: 22, w: 350, t: 'Dehors, il y a de la place. Dedans, il y a des coins.', tx: 305, ty: 236 }]
            },
            text: "« Dehors, il y a de la place », dit Papa. « Dedans, il y a des coins de table, des vases, et un bébé par terre. La règle ne change pas pour t'embêter : elle change parce que l'endroit change. »"
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'bluey', x: 320, y: 508, s: 1.2, mood: 'wow' },
                { t: 'livia', x: 580, y: 510, s: 1.15, pose: 'point' }
              ],
              sfx: [{ t: 'ET DANS L\'ESCALIER ?', x: 430, y: 146, fs: 26, rot: -4, color: '#f7c518' }]
            },
            text: "Alors elles firent la liste. Dans l'escalier ? On marche. Au supermarché ? On marche. À la bibliothèque ? On chuchote. Dans le jardin ? On fait ce qu'on veut, ou presque."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 280, y: 518, s: 1.2, pose: 'run' },
                { t: 'livia', x: 540, y: 522, s: 1.15, pose: 'run' }
              ],
              sfx: [{ t: 'LA PLUIE S\'ARRÊTE !', x: 430, y: 164, fs: 26, rot: -5, color: '#3ec9c9' }]
            },
            text: "La pluie s'arrêta en fin d'après-midi. Elles sortirent en courant. Personne ne dit rien, parce que dehors, courir est exactement ce qu'il faut faire."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'bandit', x: 280, y: 516, s: 1.45 },
                { t: 'bluey', x: 520, y: 518, s: 1.15, pose: 'armsup' },
                { t: 'livia', x: 700, y: 522, s: 1.05, pose: 'armsup' }
              ]
            },
            text: "Le soir, Bluey fit remarquer que la course du couloir aurait été bien meilleure dehors, avec de la place. Papa dit que oui. C'était toute la question depuis le début."
          }
        ]
      },

      /* ---------- 14 : l'ennui ---------- */
      {
        id: 'ennui',
        title: 'Je m\'ennuie',
        subtitle: 'Ce qu\'on trouve quand il n\'y a rien à faire',
        tag: 'Jardin',
        themes: ['Émotions', 'Dehors'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'bluey', x: 300, y: 518, s: 1.2, mood: 'sad' },
            { t: 'livia', x: 540, y: 522, s: 1.15, mood: 'sad' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 300, y: 506, s: 1.2, pose: 'sit', mood: 'sad' },
                { t: 'livia', x: 560, y: 508, s: 1.15, pose: 'sit', mood: 'sad' }
              ],
              sfx: [{ t: 'JE M\'ENNUIIIIE…', x: 430, y: 164, fs: 28, rot: -4, color: '#6d5847' }]
            },
            text: "C'était un mercredi sans rien. Pas d'école, pas de copains, pas de sortie. Bluey et Livia étaient assises dans l'herbe et n'avaient absolument rien à faire."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'chilli', x: 300, y: 516, s: 1.4, pose: 'shrug' },
                { t: 'livia', x: 570, y: 522, s: 1.15, mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 24, w: 330, t: 'Tant mieux. L\'ennui, c\'est là que ça commence.', tx: 305, ty: 240 }]
            },
            text: "Elles allèrent se plaindre à Maman. Maman ne proposa rien du tout. « Tant mieux », dit-elle. « L'ennui, c'est là que ça commence. » Puis elle repartit étendre le linge."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 300, y: 518, s: 1.2, mood: 'sad' },
                { t: 'livia', x: 560, y: 522, s: 1.15, mood: 'sad' }
              ],
              sfx: [{ t: '. . .', x: 430, y: 170, fs: 34, rot: 0, color: '#8a7768' }]
            },
            text: "Elles restèrent là un long moment, sans rien faire, ce qui est très inconfortable. Livia arracha trois brins d'herbe. Bluey regarda une fourmi traverser tout le jardin."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 300, y: 518, s: 1.2, pose: 'point', mood: 'wow' },
                { t: 'livia', x: 560, y: 522, s: 1.15, mood: 'wow' }
              ],
              sfx: [{ t: 'ET SI C\'ÉTAIT UNE ÎLE ?', x: 420, y: 164, fs: 26, rot: -5, color: '#f7c518' }]
            },
            text: "Et puis Bluey dit : « Et si l'herbe c'était la mer, et le banc une île ? » Livia répondit que dans ce cas la fourmi était un crocodile. Le mercredi venait de changer complètement."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'cabane', x: 640, y: 522, s: 1.1 }],
              items: [
                { t: 'bluey', x: 260, y: 518, s: 1.2, pose: 'armsup' },
                { t: 'livia', x: 480, y: 522, s: 1.15, pose: 'armsup' }
              ],
              sfx: [{ t: 'AU SECOURS, LE CROCODILE !', x: 400, y: 162, fs: 24, rot: -5, color: '#7ba450' }]
            },
            text: "Elles construisirent un radeau avec deux planches. Elles fuirent le crocodile. Elles fondèrent un pays sur l'île, avec des lois compliquées et un drapeau en torchon."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'chilli', x: 280, y: 516, s: 1.4 },
                { t: 'bluey', x: 520, y: 506, s: 1.15, pose: 'sit' },
                { t: 'livia', x: 700, y: 508, s: 1.05, pose: 'sit' }
              ]
            },
            text: "Le soir, Maman demanda si elles s'étaient ennuyées. Elles dirent que non, pas du tout, pas une seconde. Elles avaient oublié le début de la journée."
          }
        ]
      },

      /* ---------- 15 : le jeu qui s'arrête ---------- */
      {
        id: 'le-jeu-sarrete',
        title: "Le jeu qui s'arrête",
        subtitle: "Encore cinq minutes, et puis vraiment plus",
        tag: 'Bluey',
        themes: ['Règles', 'Émotions'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'bandit', x: 280, y: 512, s: 1.1 },
            { t: 'bluey', x: 500, y: 512, s: 1.05, mood: 'sad' },
            { t: 'livia', x: 690, y: 520, s: 1.05 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'trampoline', x: 640, y: 500, s: 1 }],
              items: [
                { t: 'bluey', x: 280, y: 512, s: 1.05, pose: 'jump' },
                { t: 'livia', x: 500, y: 520, s: 1.1, pose: 'jump' }
              ],
              sfx: [{ t: 'LE JEU DU CHÂTEAU !', x: 400, y: 146, fs: 25, rot: -5, color: '#4ea8f0' }]
            },
            text: "Le jeu du château durait depuis une heure. Il avait des rois, des dragons, un pont qui s'écroule, et surtout il n'était pas fini : personne ne savait encore comment il devait se terminer."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bandit', x: 300, y: 512, s: 1.15, pose: 'point' },
                { t: 'bluey', x: 570, y: 512, s: 1.05 },
                { t: 'livia', x: 712, y: 520, s: 1 }
              ],
              bubbles: [{ x: 40, y: 22, w: 320, t: 'Cinq minutes, et on rentre.', tx: 300, ty: 240 }]
            },
            text: "Papa apparut à la porte. « Cinq minutes », dit-il, « et on rentre. » Il ne cria pas, il ne discuta pas. Il dit cinq minutes, et il retourna à l'intérieur."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 300, y: 512, s: 1.1, pose: 'point' },
                { t: 'livia', x: 570, y: 520, s: 1.1 }
              ],
              sfx: [{ t: 'VITE ! LE DRAGON !', x: 430, y: 146, fs: 26, rot: -5, color: '#f2803d' }]
            },
            text: "Les cinq minutes devinrent les plus remplies de la journée. Le dragon fut vaincu, le pont réparé, la princesse changée en boulangère. On peut faire énormément de choses en cinq minutes."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bandit', x: 300, y: 512, s: 1.15 },
                { t: 'bluey', x: 570, y: 512, s: 1.05, mood: 'sad' }
              ],
              sfx: [{ t: 'C\'EST L\'HEURE.', x: 430, y: 146, fs: 28, rot: -4, color: '#6d5847' }]
            },
            text: "Puis Papa revint. « C'est l'heure. » Bluey sentit monter la chose chaude et injuste qui monte toujours à ce moment-là, et il ouvrit la bouche pour dire que ce n'était pas juste."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 520, s: 1.1, pose: 'point' },
                { t: 'bluey', x: 570, y: 512, s: 1.05 }
              ],
              bubbles: [{ x: 300, y: 22, w: 350, t: 'On le laisse là. Il nous attend, le château.', tx: 305, ty: 240 }]
            },
            text: "Livia le prit de vitesse. « On le laisse là », dit-elle. « Il nous attend, le château. » Elle posa la couronne en carton sur la marche, bien en évidence, comme un signet dans un livre."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'bandit', x: 300, y: 512, s: 1.15, pose: 'hold' },
                { t: 'bluey', x: 530, y: 512, s: 1.05, pose: 'hold' },
                { t: 'livia', x: 720, y: 520, s: 1.05 }
              ]
            },
            text: "Ils rentrèrent sans crier. Le lendemain, la couronne était toujours sur la marche, un peu humide de rosée. Le jeu reprit exactement où il s'était arrêté, ce qui n'arrive presque jamais."
          }
        ]
      },

      /* ---------- 16 : Bingo a peur du noir ---------- */
      {
        id: 'bingo-a-peur-du-noir',
        title: 'Bingo a peur du noir',
        subtitle: "Être la grande, pour une fois",
        tag: 'Nuit',
        themes: ['Nuit', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'bedroom', time: 'night',
          items: [
            { t: 'bingo', x: 320, y: 508, s: 1.1, mood: 'sad' },
            { t: 'livia', x: 570, y: 516, s: 1.1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom', time: 'night',
              items: [
                { t: 'bluey', x: 260, y: 496, s: 1, pose: 'sit' },
                { t: 'livia', x: 480, y: 502, s: 1.05, pose: 'sit' },
                { t: 'bingo', x: 700, y: 496, s: .95, pose: 'sit' }
              ],
              sfx: [{ t: 'BONNE NUIT !', x: 400, y: 146, fs: 27, rot: -5, color: '#a98cf0' }]
            },
            text: "Livia dormait chez Bluey. Trois matelas par terre, une lampe éteinte, et l'excitation terrible de dormir ailleurs que chez soi. Bonne nuit, dit Chilli en fermant la porte."
          },
          {
            scene: {
              bg: 'bedroom', time: 'night',
              items: [{ t: 'bingo', x: 400, y: 496, s: 1.2, pose: 'sit', mood: 'sad' }],
              sfx: [{ t: 'SNIF.', x: 400, y: 146, fs: 30, rot: -5, color: '#bfa8e0' }]
            },
            text: "Au bout d'un moment, il y eut un petit bruit dans le noir. Ce n'était pas un monstre : c'était Bingo, qui reniflait le plus discrètement possible, ce qui ne marche jamais très bien."
          },
          {
            scene: {
              bg: 'bedroom', time: 'night',
              items: [
                { t: 'livia', x: 300, y: 502, s: 1.1, pose: 'sit' },
                { t: 'bingo', x: 570, y: 496, s: 1.05, pose: 'sit', mood: 'sad' }
              ],
              sfx: [{ t: 'MOI AUSSI, DES FOIS.', x: 430, y: 146, fs: 23, rot: -4, color: '#7ac6a8' }]
            },
            text: "Livia s'assit. Elle allait dire « n'aie pas peur », et puis elle se souvint que ça n'aide personne. Alors elle dit : « moi aussi, des fois. » Le reniflement s'arrêta une seconde."
          },
          {
            scene: {
              bg: 'bedroom', time: 'night',
              back: [{ t: 'lantern', x: 660, y: 490, s: 1 }],
              items: [
                { t: 'livia', x: 300, y: 502, s: 1.1, pose: 'point' },
                { t: 'bingo', x: 570, y: 496, s: 1.05, pose: 'sit' }
              ],
              sfx: [{ t: 'ÇA, C\'EST LE MANTEAU.', x: 430, y: 146, fs: 23, rot: -4, color: '#f7c518' }]
            },
            text: "Elles allumèrent la petite lampe et firent le tour de la chambre en nommant tout : ça, c'est le manteau ; ça, c'est la chaise ; ça, c'est le poisson en peluche. Les choses nommées deviennent plus petites."
          },
          {
            scene: {
              bg: 'bedroom', time: 'night',
              items: [
                { t: 'bluey', x: 300, y: 496, s: 1, pose: 'sit' },
                { t: 'bingo', x: 540, y: 496, s: 1, pose: 'sit' },
                { t: 'livia', x: 710, y: 502, s: 1, pose: 'sit' }
              ],
              sfx: [{ t: 'JE DORMAIS PAS NON PLUS.', x: 400, y: 146, fs: 21, rot: -4, color: '#4ea8f0' }]
            },
            text: "« Je ne dormais pas non plus », dit une voix depuis le troisième matelas. Bluey était réveillé depuis le début, et il n'avait rien dit, pour laisser Livia s'en occuper."
          },
          {
            scene: {
              bg: 'bedroom', time: 'night',
              items: [
                { t: 'bluey', x: 300, y: 496, s: 1, pose: 'sit', mood: 'sleep' },
                { t: 'bingo', x: 540, y: 496, s: 1, pose: 'sit', mood: 'sleep' },
                { t: 'livia', x: 710, y: 502, s: 1, pose: 'sit', mood: 'sleep' }
              ]
            },
            text: "Ils laissèrent la lampe allumée, tout en bas. Livia s'endormit la dernière, et elle eut le temps de penser qu'être la grande, ce n'est pas ne pas avoir peur : c'est le dire en premier."
          }
        ]
      }
    ]
  },

  /* ==========================================================
     UNIVERS 4 — LES MONSIEUR MADAME
     ========================================================== */
  {
    id: 'monsieurmadame',
    name: 'Les Monsieur Madame',
    tagline: 'Livia et les petits bonshommes ronds',
    emoji: '🟡',
    vignette: { t: 'bonheur', ds: .46, dy: 176 },
    c1: '#f7c518',
    c2: '#5fb8d8',
    cover: {
      bg: 'garden',
      items: [
        { t: 'grognon', x: 130, y: 518, s: .9 },
        { t: 'bonheur', x: 330, y: 518, s: .9, pose: 'armsup' },
        { t: 'livia', x: 500, y: 520, s: 1.05 },
        { t: 'chipie', x: 660, y: 518, s: .9, pose: 'wave' }
      ]
    },
    stories: [

      /* ---------- 1 ---------- */
      {
        id: 'grognon',
        title: 'Monsieur Grognon et le sourire perdu',
        subtitle: 'On peut être grognon et se laisser attraper',
        tag: 'Humeurs',
        themes: ['Émotions', 'Amitié'],
        minutes: 4,
        cover: {
          bg: 'garden',
          items: [
            { t: 'grognon', x: 280, y: 520, s: 1 },
            { t: 'livia', x: 500, y: 522, s: 1.05, pose: 'point' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [{ t: 'grognon', x: 400, y: 522, s: 1.1 }],
              sfx: [{ t: 'GRRR.', x: 620, y: 250, fs: 42, rot: -6, color: '#4a7fc1' }]
            },
            text: "Monsieur Grognon était grognon. Le matin, il était grognon. Le soir, il était grognon. Même le jour de son anniversaire, il était grognon. C'était comme ça."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'grognon', x: 260, y: 520, s: 1 },
                { t: 'livia', x: 500, y: 522, s: 1.05, pose: 'wave' }
              ],
              bubbles: [{ x: 380, y: 26, w: 290, t: 'Bonjour Monsieur Grognon !', tx: 500, ty: 246 }]
            },
            text: "Ce matin-là, Livia le croisa sur le chemin. « Bonjour Monsieur Grognon ! » Monsieur Grognon répondit : « Mmpf. » Ce qui, dans sa langue, voulait dire bonjour."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 522, s: 1.05, pose: 'point' },
                { t: 'grognon', x: 560, y: 520, s: 1, pose: 'shrug' }
              ],
              bubbles: [{ x: 80, y: 26, w: 300, t: 'Tu as perdu ton sourire ?', tx: 300, ty: 246 }]
            },
            text: "« Tu as perdu ton sourire ? » demanda Livia. Monsieur Grognon réfléchit. Il ne se souvenait pas d'en avoir eu un. « On va le chercher », décida Livia."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'livia', x: 260, y: 516, s: 1.05, pose: 'run' },
                { t: 'grognon', x: 520, y: 514, s: 1, pose: 'shrug' },
                { t: 'butterfly', x: 660, y: 300, s: 1.5 }
              ],
              sfx: [{ t: 'ON CHERCHE !', x: 420, y: 180, fs: 32, rot: -5, color: '#f7c518' }]
            },
            text: "Ils cherchèrent sous une pierre. Rien. Ils cherchèrent dans un arbre. Rien. Ils cherchèrent dans la poche de Monsieur Grognon. Il n'y avait qu'un vieux bouton."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'livia', x: 300, y: 516, s: 1.05, pose: 'sit' },
                { t: 'grognon', x: 560, y: 514, s: 1, mood: 'wow' }
              ],
              sfx: [{ t: 'PATATRAS !', x: 400, y: 190, fs: 38, rot: -8, color: '#e0453c' }]
            },
            text: "Et puis Livia glissa sur l'herbe mouillée et tomba sur les fesses. Elle rit très fort. Alors il se passa quelque chose d'extraordinaire dans le visage de Monsieur Grognon."
          },
          {
            scene: {
              bg: 'hill', time: 'sunset',
              items: [
                { t: 'grognon', x: 320, y: 516, s: 1, mood: 'happy' },
                { t: 'livia', x: 560, y: 518, s: 1.05, pose: 'armsup' }
              ],
              bubbles: [{ x: 400, y: 26, w: 300, t: 'Il était là depuis le début !', tx: 560, ty: 246 }]
            },
            text: "Un coin de sa bouche monta. Puis l'autre. Monsieur Grognon souriait. « Il était là depuis le début », dit Livia. Le lendemain, il était de nouveau grognon. Mais un peu moins."
          }
        ]
      },

      /* ---------- 2 ---------- */
      {
        id: 'chipie',
        title: 'Madame Chipie fait une farce',
        subtitle: 'La blague qui va trop loin',
        tag: 'Humeurs',
        themes: ['Émotions', 'Bêtises'],
        minutes: 4,
        cover: {
          bg: 'village',
          items: [
            { t: 'chipie', x: 300, y: 520, s: 1, pose: 'point' },
            { t: 'livia', x: 520, y: 522, s: 1.05 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'village',
              items: [{ t: 'chipie', x: 400, y: 522, s: 1.1, pose: 'point' }],
              sfx: [{ t: 'HÉHÉHÉ…', x: 648, y: 196, fs: 34, rot: -6, color: '#e0453c' }]
            },
            text: "Madame Chipie adorait les farces. Elle nouait les lacets. Elle cachait les chapeaux. Elle mettait du sel dans le sucre. Et elle riait, riait, riait."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'chipie', x: 280, y: 522, s: 1, pose: 'hold' },
                { t: 'lent', x: 560, y: 520, s: 1, mood: 'wow', sansChapeau: true }
              ],
              sfx: [{ t: 'MON CHAPEAU !', x: 470, y: 190, fs: 30, rot: -5, color: '#9a7fc4' }]
            },
            text: "Ce jour-là, elle prit le chapeau de Monsieur Lent et le posa tout en haut d'un arbre. Monsieur Lent mit une heure à s'en apercevoir. Madame Chipie riait déjà depuis longtemps."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'chipie', x: 260, y: 522, s: 1, pose: 'point' },
                { t: 'livia', x: 520, y: 524, s: 1.05, mood: 'wow' }
              ],
              bubbles: [{ x: 60, y: 26, w: 300, t: 'À ton tour, Livia !', tx: 260, ty: 250 }]
            },
            text: "Puis elle décida de faire une farce à Livia. Elle attendit qu'elle ait le dos tourné, et cacha son doudou dans le grand buisson."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 340, y: 524, s: 1.05, mood: 'sad' },
                { t: 'chipie', x: 600, y: 522, s: 1, mood: 'wow' }
              ],
              sfx: [{ t: 'MON DOUDOU…', x: 400, y: 180, fs: 30, rot: -5, color: '#6d5847' }]
            },
            text: "Livia chercha partout. Elle ne riait pas du tout. Ses yeux devinrent brillants, et sa bouche fit une drôle de forme. Madame Chipie sentit son propre rire s'éteindre."
          },
          {
            scene: {
              bg: 'village',
              back: [{ t: 'bush', x: 660, y: 526, s: 1.2 }],
              items: [
                { t: 'chipie', x: 320, y: 522, s: 1, pose: 'hold', mood: 'sad' },
                { t: 'livia', x: 540, y: 524, s: 1.05, pose: 'hold' }
              ],
              bubbles: [{ x: 60, y: 26, w: 310, t: 'Pardon. Je ne savais pas que ça piquait.', tx: 320, ty: 250 }]
            },
            text: "Madame Chipie courut au buisson, rapporta le doudou et le rendit à Livia. « Pardon », dit-elle. « Je croyais que c'était drôle. Je ne savais pas que ça piquait. »"
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'chipie', x: 320, y: 522, s: 1, pose: 'wave' },
                { t: 'livia', x: 560, y: 524, s: 1.05, pose: 'wave' }
              ],
              bubbles: [{ x: 380, y: 26, w: 300, t: 'On rit à deux, ou on ne rit pas.', tx: 560, ty: 250 }]
            },
            text: "Depuis, Madame Chipie fait toujours des farces. Mais avant, elle se pose une question : est-ce qu'on va rire à deux ? Si la réponse est non, elle en cherche une autre."
          }
        ]
      },

      /* ---------- 3 ---------- */
      {
        id: 'etourdi',
        title: 'Monsieur Étourdi perd tout',
        subtitle: 'Une place pour chaque chose',
        tag: 'Humeurs',
        themes: ['Émotions', 'Grandir'],
        minutes: 4,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'etourdi', x: 320, y: 506, s: 1, pose: 'shrug' },
            { t: 'livia', x: 540, y: 508, s: 1.05, pose: 'point' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [{ t: 'etourdi', x: 400, y: 508, s: 1.1, pose: 'shrug' }],
              sfx: [{ t: 'OÙ EST MON CHAPEAU ?', x: 400, y: 150, fs: 26, rot: -4, color: '#7ab648' }]
            },
            text: "Monsieur Étourdi perdait tout. Ses clés. Ses chaussures. Une fois, il a perdu son chapeau alors qu'il l'avait sur la tête. Il a cherché toute la journée."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'etourdi', x: 280, y: 508, s: 1, mood: 'wow' },
                { t: 'livia', x: 540, y: 510, s: 1.05, pose: 'point' }
              ],
              bubbles: [{ x: 340, y: 26, w: 300, t: 'Il est sur ta tête !', tx: 540, ty: 236 }]
            },
            text: "Livia le trouva assis par terre, au milieu d'un grand désordre. « Il est sur ta tête », dit-elle. Monsieur Étourdi toucha sa tête. Le chapeau y était."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 510, s: 1.05, pose: 'hold' },
                { t: 'etourdi', x: 560, y: 508, s: 1, pose: 'hold' },
                { t: 'suitcase', x: 690, y: 518, s: .8 }
              ],
              bubbles: [{ x: 60, y: 26, w: 310, t: 'Une place pour chaque chose.', tx: 300, ty: 240 }]
            },
            text: "« J'ai un secret », dit Livia. « Une place pour chaque chose, et chaque chose à sa place. » Les clés sur le crochet. Les chaussures près de la porte. Le chapeau sur la tête."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'etourdi', x: 340, y: 508, s: 1, pose: 'point' },
                { t: 'livia', x: 580, y: 510, s: 1.05 }
              ],
              sfx: [{ t: 'ET HOP !', x: 620, y: 160, fs: 32, rot: -6, color: '#f7c518' }]
            },
            text: "Ils rangèrent tout l'après-midi. Chaque objet trouva son endroit. Monsieur Étourdi était très fier. Il avait même inventé une place pour son parapluie."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'etourdi', x: 360, y: 522, s: 1, pose: 'shrug', mood: 'wow', sansChapeau: true },
                { t: 'livia', x: 600, y: 524, s: 1.05 }
              ],
              sfx: [{ t: 'ENCORE LE CHAPEAU !', x: 380, y: 170, fs: 26, rot: -4, color: '#7ab648' }]
            },
            text: "Le lendemain matin, Monsieur Étourdi sortit de chez lui d'un pas décidé. Puis il s'arrêta. Il avait oublié son chapeau. Il était bien rangé, sur le crochet de l'entrée."
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'etourdi', x: 340, y: 522, s: 1, pose: 'wave', sansChapeau: true },
                { t: 'livia', x: 580, y: 524, s: 1.05, pose: 'wave' }
              ],
              bubbles: [{ x: 420, y: 26, w: 310, t: 'Au moins, tu sais où il est !', tx: 580, ty: 250 }]
            },
            text: "« Au moins, tu sais où il est ! » dit Livia. Monsieur Étourdi trouva que c'était un très bon point. Il retourna le chercher en chantant."
          }
        ]
      },

      /* ---------- 4 ---------- */
      {
        id: 'timide',
        title: 'Madame Timide dit bonjour',
        subtitle: 'Le mot le plus difficile du monde',
        tag: 'Humeurs',
        themes: ['Émotions', 'Amitié'],
        minutes: 4,
        cover: {
          bg: 'village',
          items: [
            { t: 'timide', x: 320, y: 522, s: 1, mood: 'sad' },
            { t: 'livia', x: 540, y: 524, s: 1.05, pose: 'wave' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'forest',
              items: [{ t: 'timide', x: 420, y: 518, s: 1.05, mood: 'sad' }],
              sfx: [{ t: 'CHUUUT…', x: 200, y: 240, fs: 34, rot: -5, color: '#f2a0c2' }]
            },
            text: "Madame Timide était timide. Très timide. Tellement timide qu'elle habitait au fond des bois, dans une maison que personne ne trouvait jamais."
          },
          {
            scene: {
              bg: 'forest',
              items: [
                { t: 'timide', x: 300, y: 518, s: 1, mood: 'wow' },
                { t: 'livia', x: 560, y: 520, s: 1.05, pose: 'wave' }
              ],
              bubbles: [{ x: 380, y: 26, w: 280, t: 'Bonjour ! Je suis Livia.', tx: 560, ty: 244 }]
            },
            text: "Un jour, quelqu'un frappa à sa porte. C'était Livia, qui s'était perdue en cherchant des châtaignes. Madame Timide devint toute rouge. Puis elle se cacha derrière la porte."
          },
          {
            scene: {
              bg: 'forest',
              items: [
                { t: 'livia', x: 320, y: 520, s: 1.05, pose: 'hold' },
                { t: 'timide', x: 580, y: 518, s: 1, pose: 'shrug', mood: 'sad' }
              ],
              bubbles: [{ x: 60, y: 26, w: 310, t: 'Tu peux juste faire coucou de la main.', tx: 320, ty: 244 }]
            },
            text: "« Ce n'est pas grave », dit Livia. « Tu peux juste faire coucou de la main. » Madame Timide y réfléchit très longtemps. Puis elle leva une toute petite main."
          },
          {
            scene: {
              bg: 'forest',
              items: [
                { t: 'timide', x: 340, y: 518, s: 1, pose: 'wave' },
                { t: 'livia', x: 580, y: 520, s: 1.05, pose: 'wave' }
              ],
              sfx: [{ t: 'COUCOU !', x: 420, y: 176, fs: 34, rot: -6, color: '#f7c518' }]
            },
            text: "Livia fit coucou aussi. Elles restèrent là, à se faire coucou, pendant un temps ridicule. Et Madame Timide s'aperçut que son cœur battait moins fort qu'avant."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'timide', x: 300, y: 522, s: 1, pose: 'shrug' },
                { t: 'bonheur', x: 520, y: 522, s: .95, pose: 'wave' },
                { t: 'livia', x: 700, y: 524, s: 1.05 }
              ],
              bubbles: [{ x: 340, y: 26, w: 290, t: 'B… bonjour.', tx: 300, ty: 248 }]
            },
            text: "Le lendemain, Livia l'emmena au village. Il y avait du monde partout. Madame Timide serra très fort la main de Livia. Puis elle dit, tout bas : « B… bonjour. »"
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'timide', x: 330, y: 522, s: 1 },
                { t: 'livia', x: 570, y: 524, s: 1.05, pose: 'hold' }
              ],
              bubbles: [{ x: 380, y: 26, w: 300, t: 'C\'était le plus dur. Le reste est facile.', tx: 330, ty: 248 }]
            },
            text: "Personne ne se moqua. Personne ne fit d'histoires. Quelqu'un répondit simplement : « Bonjour ! » « C'était le plus dur », dit Livia. « Maintenant, le reste est facile. »"
          }
        ]
      },

      /* ---------- 5 ---------- */
      {
        id: 'rapide-lent',
        title: 'Monsieur Rapide et Monsieur Lent',
        subtitle: 'Deux vitesses, une seule promenade',
        tag: 'Humeurs',
        themes: ['Émotions', 'Amitié'],
        minutes: 4,
        cover: {
          bg: 'road',
          items: [
            { t: 'rapide', x: 280, y: 522, s: 1, pose: 'run' },
            { t: 'lent', x: 540, y: 520, s: 1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'road',
              items: [
                { t: 'rapide', x: 250, y: 524, s: 1.05, pose: 'run' },
                { t: 'lent', x: 570, y: 522, s: 1.05 }
              ],
              sfx: [{ t: 'ZOUUUM !', x: 420, y: 190, fs: 36, rot: -8, color: '#f0862c' }]
            },
            text: "Monsieur Rapide faisait tout vite. Monsieur Lent faisait tout lentement. Monsieur Rapide avait déjà fini son petit-déjeuner que Monsieur Lent cherchait encore sa cuillère."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'livia', x: 250, y: 518, s: 1.05, pose: 'point' },
                { t: 'rapide', x: 470, y: 516, s: 1 },
                { t: 'lent', x: 684, y: 516, s: 1 }
              ],
              bubbles: [{ x: 60, y: 26, w: 300, t: 'On se promène tous les trois ?', tx: 260, ty: 244 }]
            },
            text: "Un matin, Livia leur proposa une promenade. Tous les trois. Monsieur Rapide dit oui avant la fin de la question. Monsieur Lent dit oui bien après."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'rapide', x: 640, y: 516, s: 1, pose: 'run' },
                { t: 'livia', x: 380, y: 518, s: 1.05 },
                { t: 'lent', x: 160, y: 516, s: 1 }
              ],
              sfx: [{ t: 'ATTENDEZ-MOI…', x: 300, y: 176, fs: 28, rot: -4, color: '#9a7fc4' }]
            },
            text: "Au bout de dix pas, Monsieur Rapide était déjà en haut de la colline. Au bout de dix pas, Monsieur Lent était encore en bas. Livia était au milieu, toute seule."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'rapide', x: 300, y: 518, s: 1, pose: 'shrug', mood: 'sad' },
                { t: 'lent', x: 560, y: 518, s: 1, mood: 'sad' }
              ],
              sfx: [{ t: 'CE N\'EST PAS DRÔLE.', x: 420, y: 176, fs: 26, rot: -4, color: '#6d5847' }]
            },
            text: "Monsieur Rapide arriva le premier. Il n'y avait personne pour regarder le paysage avec lui. Monsieur Lent arriva le dernier. Il n'y avait plus personne pour l'attendre."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'rapide', x: 260, y: 518, s: 1, pose: 'hold' },
                { t: 'livia', x: 460, y: 520, s: 1.05, pose: 'hold' },
                { t: 'lent', x: 660, y: 518, s: 1, pose: 'hold' }
              ],
              bubbles: [{ x: 250, y: 26, w: 310, t: 'On va à la vitesse du milieu !', tx: 460, ty: 246 }]
            },
            text: "Alors Livia eut une idée. « On va à la vitesse du milieu. » Monsieur Rapide ralentit un peu. Monsieur Lent accéléra un peu. Ce fut un peu difficile pour les deux."
          },
          {
            scene: {
              bg: 'hill', time: 'sunset',
              items: [
                { t: 'rapide', x: 290, y: 518, s: 1 },
                { t: 'livia', x: 480, y: 520, s: 1.05 },
                { t: 'lent', x: 670, y: 518, s: 1 }
              ]
            },
            text: "Ils marchèrent côte à côte jusqu'au sommet. Ils virent le même coucher de soleil, en même temps. Monsieur Rapide trouva que c'était très long. Et très bien."
          }
        ]
      },

      /* ---------- 6 ---------- */
      {
        id: 'rangetout',
        title: 'Madame Range-Tout et le grand désordre',
        subtitle: 'Quand tout est trop bien rangé',
        tag: 'Humeurs',
        themes: ['Émotions', 'Bêtises', 'Règles'],
        minutes: 4,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'rangetout', x: 320, y: 506, s: 1, pose: 'point' },
            { t: 'livia', x: 540, y: 508, s: 1.05 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [{ t: 'rangetout', x: 400, y: 508, s: 1.1, pose: 'point' }],
              sfx: [{ t: 'TOUT DROIT !', x: 400, y: 150, fs: 30, rot: -4, color: '#3fb3b0' }]
            },
            text: "Chez Madame Range-Tout, tout était rangé. Les livres par ordre de taille. Les crayons par ordre de couleur. Les petits pois par ordre de rondeur."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'rangetout', x: 290, y: 508, s: 1, mood: 'wow' },
                { t: 'livia', x: 550, y: 510, s: 1.05, pose: 'hold' },
                { t: 'tourcubes', x: 690, y: 508, s: .7, n: 3 },
                { t: 'ball', x: 640, y: 506, s: .7 }
              ],
              bubbles: [{ x: 380, y: 26, w: 290, t: 'On joue à quelque chose ?', tx: 560, ty: 236 }]
            },
            text: "Livia vint jouer chez elle. Elle apporta des cubes, des crayons et un ballon. Madame Range-Tout regarda tout cela avec un peu d'inquiétude."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 320, y: 510, s: 1.05, pose: 'armsup' },
                { t: 'rangetout', x: 580, y: 508, s: 1, mood: 'wow' }
              ],
              front: [
                { t: 'cube', x: 150, y: 522, s: .8, rot: -14, color: '#e0453c' },
                { t: 'cube', x: 440, y: 528, s: .8, rot: 18, color: '#4a7fc1' },
                { t: 'cube', x: 700, y: 524, s: .8, rot: -8, color: '#7ab648' },
                { t: 'cube', x: 250, y: 546, s: .7, rot: 26, color: '#f7c518' }
              ],
              sfx: [{ t: 'PATATRAS !', x: 420, y: 156, fs: 34, rot: -8, color: '#e0453c' }]
            },
            text: "Elles construisirent une tour. Puis un pont. Puis un château qui s'écroula sur le tapis. Il y avait des cubes partout. Madame Range-Tout ne respirait plus très bien."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'rangetout', x: 340, y: 508, s: 1, pose: 'shrug' },
                { t: 'livia', x: 580, y: 510, s: 1.05, pose: 'point' }
              ],
              bubbles: [{ x: 410, y: 26, w: 310, t: 'On range après. Pas pendant.', tx: 580, ty: 240 }]
            },
            text: "« On range après », dit Livia. « Pas pendant. Sinon on ne joue jamais. » Madame Range-Tout trouva cette phrase très dérangeante. Et un peu vraie."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'rangetout', x: 340, y: 508, s: 1, pose: 'jump' },
                { t: 'livia', x: 580, y: 510, s: 1.05, pose: 'jump' }
              ],
              front: [
                { t: 'cube', x: 120, y: 528, s: .8, rot: 12, color: '#4a7fc1' },
                { t: 'cube', x: 470, y: 534, s: .8, rot: -20, color: '#e0453c' },
                { t: 'cube', x: 720, y: 526, s: .8, rot: 8, color: '#f7c518' }
              ],
              sfx: [{ t: 'ENCORE !', x: 420, y: 150, fs: 34, rot: -6, color: '#f7c518' }]
            },
            text: "Alors elle essaya. Elle laissa un cube par terre. Puis deux. Puis elle renversa la tour elle-même, exprès, en riant très fort. C'était absolument délicieux."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'rangetout', x: 320, y: 508, s: 1, pose: 'hold' },
                { t: 'livia', x: 560, y: 510, s: 1.05, pose: 'hold' }
              ],
              front: [{ t: 'cube', x: 710, y: 530, s: .8, rot: -10, color: '#e0453c' }],
              bubbles: [{ x: 160, y: 26, w: 300, t: 'Et maintenant, on range !', tx: 320, ty: 240 }]
            },
            text: "Le soir, elles rangèrent tout, ensemble, en dix minutes. « Voilà », dit Madame Range-Tout. « Après. » Et elle laissa un seul cube dehors, juste pour voir."
          }
        ]
      },

      /* ---------- 7 ---------- */
      {
        id: 'costaud',
        title: 'Monsieur Costaud n\'y arrive pas',
        subtitle: 'Demander de l\'aide, c\'est permis',
        tag: 'Humeurs',
        themes: ['Émotions', 'Grandir'],
        minutes: 4,
        cover: {
          bg: 'garden',
          items: [
            { t: 'costaud', x: 320, y: 520, s: 1.05, pose: 'shrug' },
            { t: 'livia', x: 560, y: 522, s: 1.05, pose: 'point' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [{ t: 'costaud', x: 400, y: 522, s: 1.15, pose: 'armsup' }],
              sfx: [{ t: 'FASTOCHE !', x: 640, y: 200, fs: 34, rot: -6, color: '#c4453c' }]
            },
            text: "Monsieur Costaud était le plus fort de tous. Il soulevait les arbres. Il portait les maisons. Une fois, il a déplacé une colline parce qu'elle le gênait."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'costaud', x: 340, y: 522, s: 1.1, pose: 'hold' },
                { t: 'rock', x: 600, y: 528, s: 1.4 }
              ],
              sfx: [{ t: 'HHHHNNN…', x: 480, y: 200, fs: 32, rot: -6, color: '#c4453c' }]
            },
            text: "Ce jour-là, il trouva un rocher. Il tira. Le rocher ne bougea pas. Il tira encore. Le rocher ne bougea toujours pas. Monsieur Costaud devint tout rouge."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'costaud', x: 320, y: 522, s: 1.1, pose: 'shrug', mood: 'sad' },
                { t: 'livia', x: 600, y: 524, s: 1.05 }
              ],
              bubbles: [{ x: 340, y: 26, w: 300, t: 'Tu veux un coup de main ?', tx: 600, ty: 250 }]
            },
            text: "Livia passa par là. « Tu veux un coup de main ? » Monsieur Costaud répondit non. Il était Monsieur Costaud. Monsieur Costaud n'avait besoin de personne."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'costaud', x: 400, y: 522, s: 1.1, pose: 'hold', mood: 'fache' },
                { t: 'rock', x: 640, y: 528, s: 1.4 }
              ],
              sfx: [{ t: 'ENCORE !', x: 260, y: 210, fs: 34, rot: -8, color: '#c4453c' }]
            },
            text: "Il tira toute la matinée. Il tira tout l'après-midi. Le rocher resta exactement où il était. Le soir, Monsieur Costaud était encore devant lui, très fatigué et un peu triste."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'rock', x: 100, y: 530, s: 1.4 },
                { t: 'costaud', x: 280, y: 522, s: 1.05, pose: 'hold' },
                { t: 'livia', x: 470, y: 524, s: 1.05, pose: 'hold' },
                { t: 'grognon', x: 660, y: 522, s: .95, pose: 'hold' }
              ],
              sfx: [{ t: 'À TROIS !', x: 470, y: 180, fs: 32, rot: -6, color: '#f7c518' }]
            },
            text: "Alors il dit une phrase toute petite : « Tu peux m'aider ? » Livia appela Monsieur Grognon, qui grogna, mais qui vint. Ils poussèrent tous les trois. « Un, deux, trois ! »"
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'rock', x: 96, y: 468, s: 1.2, rot: 24 },
                { t: 'costaud', x: 320, y: 522, s: 1.05, pose: 'armsup' },
                { t: 'livia', x: 510, y: 524, s: 1.05, pose: 'armsup' },
                { t: 'grognon', x: 690, y: 522, s: .95 }
              ],
              sfx: [{ t: 'ÇA BOUGE !', x: 470, y: 170, fs: 34, rot: -6, color: '#f7c518' }]
            },
            text: "Le rocher bougea. Puis il roula. Puis il descendit la colline tout seul. « Je suis toujours le plus fort », dit Monsieur Costaud. « Mais à trois, c'est encore mieux. »"
          }
        ]
      },

      /* ---------- 8 ---------- */
      {
        id: 'bonheur',
        title: 'Madame Bonheur et le jour gris',
        subtitle: 'Ce qu\'on fait quand rien ne va',
        tag: 'Humeurs',
        themes: ['Émotions', 'Amitié'],
        minutes: 5,
        cover: {
          bg: 'village',
          items: [
            { t: 'bonheur', x: 320, y: 522, s: 1.05, pose: 'armsup' },
            { t: 'livia', x: 540, y: 524, s: 1.05, pose: 'wave' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'village',
              items: [{ t: 'bonheur', x: 400, y: 524, s: 1.15, pose: 'armsup' }],
              sfx: [{ t: 'QUELLE BELLE JOURNÉE !', x: 400, y: 176, fs: 26, rot: -4, color: '#f7c518' }]
            },
            text: "Madame Bonheur était heureuse. Tous les jours. Sans exception. Même sous la pluie, elle trouvait que les flaques faisaient de jolis miroirs."
          },
          {
            scene: {
              bg: 'village', time: 'gris',
              items: [
                { t: 'bonheur', x: 400, y: 524, s: 1.15, mood: 'sad' }
              ],
              sfx: [{ t: 'ET PUIS UN JOUR…', x: 400, y: 170, fs: 28, rot: -4, color: '#6d5847' }]
            },
            text: "Et puis un matin, elle se réveilla toute grise. Elle ne savait pas pourquoi. Rien de grave n'était arrivé. Simplement, le bonheur n'était pas venu."
          },
          {
            scene: {
              bg: 'village', time: 'gris',
              items: [
                { t: 'bonheur', x: 300, y: 524, s: 1.05, pose: 'shrug', mood: 'sad' },
                { t: 'livia', x: 560, y: 526, s: 1.05 }
              ],
              bubbles: [{ x: 340, y: 26, w: 300, t: 'Tu veux qu\'on reste là un peu ?', tx: 560, ty: 252 }]
            },
            text: "Livia la trouva devant sa porte, sans rien faire. Elle ne dit pas « souris ». Elle ne dit pas « ce n'est rien ». Elle demanda seulement : « Tu veux qu'on reste là un peu ? »"
          },
          {
            scene: {
              bg: 'village', time: 'gris',
              items: [
                { t: 'bonheur', x: 340, y: 524, s: 1.05, mood: 'sad' },
                { t: 'livia', x: 560, y: 526, s: 1.05 }
              ],
              sfx: [{ t: '. . .', x: 460, y: 186, fs: 34, rot: 0, color: '#8a7768' }]
            },
            text: "Elles restèrent là un long moment, sans rien dire. Le ciel était gris. Le vent était froid. Livia ne partit pas. C'était tout ce qu'il y avait à faire."
          },
          {
            scene: {
              bg: 'village', time: 'gris',
              items: [
                { t: 'grognon', x: 200, y: 524, s: .95 },
                { t: 'timide', x: 400, y: 524, s: .95, pose: 'wave' },
                { t: 'costaud', x: 600, y: 524, s: .95, pose: 'hold' },
                { t: 'flower', x: 730, y: 534, s: 1.4 }
              ],
              bubbles: [{ x: 220, y: 26, w: 300, t: 'On est venus, c\'est tout.', tx: 400, ty: 246 }]
            },
            text: "Puis les autres arrivèrent. Monsieur Grognon apporta un caillou, parce qu'il ne savait pas quoi apporter. Madame Timide dit bonjour. Monsieur Costaud apporta une fleur."
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'bonheur', x: 292, y: 524, s: 1.05, pose: 'hold' },
                { t: 'livia', x: 508, y: 526, s: 1.05, pose: 'hold' },
                { t: 'grognon', x: 688, y: 524, s: .95 }
              ],
              bubbles: [{ x: 60, y: 26, w: 310, t: 'Demain, ça ira peut-être mieux.', tx: 300, ty: 252 }]
            },
            text: "Le soir venu, Madame Bonheur n'était pas redevenue joyeuse. Mais elle n'était plus toute seule. « Demain, ça ira peut-être mieux », dit-elle. Et le lendemain, ça allait mieux."
          }
        ]
      },

      /* ---------- 9 : Madame Chipie dit pardon ---------- */
      {
        id: 'chipie-dit-pardon',
        title: 'Madame Chipie dit pardon',
        subtitle: "Le mot le plus court et le plus lourd",
        tag: 'Monsieur Madame',
        themes: ['Émotions', 'Grandir'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'chipie', x: 300, y: 508, s: 1.05, mood: 'sad' },
            { t: 'livia', x: 560, y: 516, s: 1.1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'tourcubes', x: 640, y: 496, s: 1.1 }],
              items: [
                { t: 'livia', x: 300, y: 516, s: 1.1, pose: 'armsup' },
                { t: 'timide', x: 540, y: 508, s: 1.05 }
              ],
              sfx: [{ t: 'DOUZE CUBES !', x: 400, y: 146, fs: 27, rot: -5, color: '#7ab648' }]
            },
            text: "Livia et Monsieur Timide avaient empilé douze cubes. C'était la plus haute tour de la matinée, et il avait fallu s'y mettre à deux, en retenant sa respiration sur les trois derniers."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'chipie', x: 340, y: 508, s: 1.1, pose: 'point' },
                { t: 'livia', x: 600, y: 516, s: 1.05, mood: 'wow' }
              ],
              sfx: [{ t: 'BADABOUM !', x: 430, y: 146, fs: 34, rot: -8, color: '#e0453c' }]
            },
            text: "Madame Chipie passa par là. Elle donna un tout petit coup de pied — vraiment tout petit — et les douze cubes se répandirent dans l'herbe avec un bruit magnifique."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'chipie', x: 400, y: 508, s: 1.2 }
              ],
              sfx: [{ t: 'HÉ HÉ !', x: 400, y: 146, fs: 32, rot: -6, color: '#f2803d' }]
            },
            text: "Elle rit très fort pendant deux secondes. Puis elle regarda autour d'elle. Personne d'autre ne riait. C'est un moment que Madame Chipie connaît bien, et qu'elle n'aime pas du tout."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'timide', x: 280, y: 508, s: 1.05, mood: 'sad' },
                { t: 'livia', x: 520, y: 516, s: 1.1, mood: 'sad' },
                { t: 'chipie', x: 678, y: 508, s: 1 }
              ],
              sfx: [{ t: '. . .', x: 400, y: 146, fs: 34, rot: 0, color: '#8a7768' }]
            },
            text: "Monsieur Timide ne dit rien, ce qui est sa spécialité. Livia non plus. Elles se mirent simplement à ramasser les cubes, l'une après l'autre, sans regarder Madame Chipie."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'chipie', x: 300, y: 490, s: 1.1, pose: 'sit' },
                { t: 'livia', x: 570, y: 498, s: 1.1, pose: 'sit' }
              ],
              bubbles: [{ x: 300, y: 22, w: 300, t: 'Pardon. Je peux aider ?', tx: 300, ty: 236 }]
            },
            text: "Madame Chipie s'accroupit à côté d'eux. Le mot mit longtemps à sortir, et il sortit tout petit : « pardon ». Puis, encore plus petit : « je peux aider ? »"
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              back: [{ t: 'tourcubes', x: 650, y: 496, s: 1.1 }],
              items: [
                { t: 'chipie', x: 280, y: 508, s: 1.05, pose: 'armsup' },
                { t: 'livia', x: 500, y: 516, s: 1.1, pose: 'armsup' },
                { t: 'timide', x: 678, y: 508, s: 1 }
              ],
              sfx: [{ t: 'QUATORZE !', x: 400, y: 146, fs: 30, rot: -5, color: '#f7c518' }]
            },
            text: "La deuxième tour monta jusqu'à quatorze cubes, parce qu'ils étaient trois. Madame Chipie tint le bas pendant que les autres posaient le haut. Elle ne donna aucun coup de pied."
          }
        ]
      },

      /* ---------- 10 : Monsieur Lent arrive quand même ---------- */
      {
        id: 'lent-arrive-quand-meme',
        title: 'Monsieur Lent arrive quand même',
        subtitle: "Aller à son rythme, jusqu'au bout",
        tag: 'Monsieur Madame',
        themes: ['Grandir', 'Amitié'],
        minutes: 5,
        cover: {
          bg: 'hill',
          items: [
            { t: 'rapide', x: 300, y: 512, s: 1.05, pose: 'run' },
            { t: 'lent', x: 560, y: 512, s: 1.05 },
            { t: 'livia', x: 710, y: 520, s: 1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'rapide', x: 260, y: 512, s: 1.05, pose: 'point' },
                { t: 'livia', x: 500, y: 520, s: 1.1 },
                { t: 'lent', x: 678, y: 512, s: 1 }
              ],
              sfx: [{ t: 'JUSQU\'AU GRAND ARBRE !', x: 400, y: 148, fs: 24, rot: -4, color: '#f2803d' }]
            },
            text: "« Course jusqu'au grand arbre ! » cria Monsieur Rapide, et il était déjà parti avant la fin de sa phrase. Livia partit deuxième. Monsieur Lent leva une jambe."
          },
          {
            scene: {
              bg: 'hill',
              back: [{ t: 'tree', x: 700, y: 486, s: 1.1 }],
              items: [
                { t: 'rapide', x: 300, y: 512, s: 1.05, pose: 'armsup' },
                { t: 'livia', x: 540, y: 520, s: 1.1 }
              ],
              sfx: [{ t: 'GAGNÉ !', x: 400, y: 148, fs: 32, rot: -6, color: '#f7c518' }]
            },
            text: "Monsieur Rapide toucha l'arbre, puis retourna au départ, puis revint à l'arbre, pour occuper le temps. Livia arriva deuxième, essoufflée et contente."
          },
          {
            scene: {
              bg: 'hill',
              items: [{ t: 'lent', x: 400, y: 512, s: 1.2 }],
              sfx: [{ t: 'UN PAS. PUIS UN PAS.', x: 400, y: 148, fs: 24, rot: -4, color: '#6d5847' }]
            },
            text: "Monsieur Lent, lui, en était au quatrième pas. Un pas. Puis un pas. Il ne regardait ni derrière ni devant : il regardait exactement là où il posait le pied."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'rapide', x: 300, y: 512, s: 1.05, pose: 'shrug' },
                { t: 'livia', x: 560, y: 520, s: 1.1, pose: 'point' }
              ],
              bubbles: [{ x: 300, y: 22, w: 330, t: 'On l\'attend ou on recommence sans lui ?', tx: 310, ty: 240 }]
            },
            text: "« On l'attend, ou on recommence sans lui ? » demanda Monsieur Rapide, qui n'était pas méchant, seulement pressé. Livia s'assit dans l'herbe et dit : « on attend. »"
          },
          {
            scene: {
              bg: 'hill',
              back: [{ t: 'tree', x: 700, y: 486, s: 1.1 }],
              items: [
                { t: 'livia', x: 280, y: 504, s: 1.1, pose: 'sit' },
                { t: 'rapide', x: 520, y: 496, s: 1.05, pose: 'sit' },
                { t: 'lent', x: 678, y: 512, s: 1 }
              ],
              sfx: [{ t: 'ENCORE UN PEU…', x: 400, y: 148, fs: 24, rot: -4, color: '#7ac6a8' }]
            },
            text: "Ils attendirent longtemps. Assis, ils remarquèrent trois choses qu'ils n'avaient jamais vues en courant : un nid, une pierre en forme de cœur, et une fourmi qui portait une miette énorme."
          },
          {
            scene: {
              bg: 'hill', time: 'sunset',
              back: [{ t: 'tree', x: 690, y: 486, s: 1.1 }],
              items: [
                { t: 'rapide', x: 280, y: 512, s: 1.05, pose: 'armsup' },
                { t: 'livia', x: 500, y: 520, s: 1.1, pose: 'armsup' },
                { t: 'lent', x: 678, y: 512, s: 1 }
              ],
              sfx: [{ t: 'BRAVOOO !', x: 400, y: 148, fs: 30, rot: -6, color: '#f7c518' }]
            },
            text: "Quand Monsieur Lent toucha enfin l'arbre, ils crièrent tous les deux comme s'il avait gagné. D'une certaine façon, il avait gagné : il était le seul à ne s'être arrêté à aucun moment."
          }
        ]
      }
    ]
  },

  /* ==========================================================
     UNIVERS 5 — LE GRAND MÉLANGE
     Les amis de Livia ne viennent pas du même dessin animé.
     Ici, ils se rencontrent quand même.
     ========================================================== */
  {
    id: 'melange',
    name: 'Le grand mélange',
    tagline: 'Quand tous les amis de Livia se retrouvent',
    emoji: '🌈',
    vignette: { t: 'olaf', ds: .62, dy: 180 },
    c1: '#7ac6a8',
    c2: '#f2a0c2',
    cover: {
      bg: 'garden',
      items: [
        { t: 'peppa', x: 130, y: 522, s: .95 },
        { t: 'livia', x: 330, y: 524, s: 1.05, pose: 'armsup' },
        { t: 'bluey', x: 520, y: 520, s: .95, pose: 'wave' },
        { t: 'elsa', x: 700, y: 514, s: .95 }
      ]
    },
    stories: [

      /* ---------- 1 ---------- */
      {
        id: 'trois-amies',
        title: 'Les trois amies de Livia',
        subtitle: 'Trois jeux différents, un seul après-midi',
        tag: 'Tous ensemble',
        themes: ['Amitié', 'Dehors'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'peppa', x: 180, y: 522, s: 1 },
            { t: 'livia', x: 400, y: 524, s: 1.05, pose: 'wave' },
            { t: 'bluey', x: 620, y: 520, s: 1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [{ t: 'livia', x: 400, y: 524, s: 1.15, pose: 'armsup' }],
              sfx: [{ t: 'TOUT LE MONDE VIENT !', x: 400, y: 170, fs: 26, rot: -4, color: '#3ec9c9' }]
            },
            text: "Ce mercredi-là, Livia avait invité ses amies. Toutes ses amies. Celles de la boue, celles du jardin, et celle de la neige. Elle attendait devant la maison, le cœur qui sautait."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'peppa', x: 220, y: 522, s: 1.1, pose: 'jump' },
                { t: 'livia', x: 480, y: 524, s: 1.1, pose: 'wave' }
              ],
              front: [{ t: 'mudpuddle', x: 700, y: 534, s: 1 }],
              sfx: [{ t: 'SPLATCH !', x: 300, y: 174, fs: 34, rot: -8, color: '#8a6a4a' }]
            },
            text: "Peppa arriva la première. Elle avait mis ses bottes. « J'ai vu une flaque en chemin », dit-elle. « Une très bonne flaque. » Peppa connaissait les bonnes flaques."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'peppa', x: 170, y: 522, s: 1 },
                { t: 'livia', x: 400, y: 524, s: 1.05 },
                { t: 'bluey', x: 640, y: 520, s: 1.05, pose: 'point' }
              ],
              bubbles: [{ x: 440, y: 26, w: 320, t: 'On invente un jeu ! Ça s\'appelle…', tx: 620, ty: 244 }]
            },
            text: "Bluey arriva ensuite, en courant. Bluey n'arrivait jamais autrement. « On invente un jeu ! » dit-elle. Elle avait déjà un nom pour le jeu. Elle n'avait pas encore de règles."
          },
          {
            scene: {
              bg: 'garden', neige: 16,
              items: [
                { t: 'peppa', x: 150, y: 522, s: .95 },
                { t: 'livia', x: 350, y: 524, s: 1 },
                { t: 'bluey', x: 540, y: 520, s: .95 },
                { t: 'elsa', x: 706, y: 514, s: .95, pose: 'magic' }
              ],
              sfx: [{ t: 'FRIIIISSS…', x: 400, y: 168, fs: 30, rot: -5, color: '#7fd8f0' }]
            },
            text: "Elsa arriva la dernière, sans bruit. Sur son passage, l'herbe fit de tout petits cristaux. Peppa la regarda. Bluey la regarda. Personne ne savait quoi dire."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'peppa', x: 150, y: 522, s: .95, mood: 'sad' },
                { t: 'bluey', x: 350, y: 520, s: .95, pose: 'shrug' },
                { t: 'elsa', x: 536, y: 514, s: .95, mood: 'sad' },
                { t: 'livia', x: 700, y: 524, s: .95, mood: 'sad' }
              ],
              bubbles: [{ x: 60, y: 26, w: 300, t: 'Moi je veux sauter dans la flaque.', tx: 160, ty: 250 }]
            },
            text: "Peppa voulait sauter dans la flaque. Bluey voulait inventer. Elsa voulait la neige. Chacune tirait de son côté, et l'après-midi commençait à se casser en trois morceaux."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 400, y: 524, s: 1.15, pose: 'point' }
              ],
              bubbles: [{ x: 230, y: 24, w: 340, t: 'Et si on faisait les trois à la fois ?', tx: 400, ty: 236 }]
            },
            text: "Alors Livia leva le doigt. « Et si on faisait les trois à la fois ? » Une flaque, inventée par Bluey, gelée par Elsa. Ça n'existait pas. C'est bien pour ça que c'était une bonne idée."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'peppa', x: 150, y: 522, s: .95, pose: 'jump' },
                { t: 'livia', x: 350, y: 524, s: 1, pose: 'jump' },
                { t: 'bluey', x: 540, y: 520, s: .95, pose: 'jump' },
                { t: 'elsa', x: 706, y: 514, s: .95, pose: 'armsup' }
              ],
              front: [{ t: 'mudpuddle', x: 440, y: 548, s: 1.1 }],
              sfx: [{ t: 'CRIC ! SPLATCH ! YOUPI !', x: 400, y: 164, fs: 28, rot: -6, color: '#f7c518' }]
            },
            text: "Elles glissèrent, tombèrent, recommencèrent. La flaque était gelée sur le dessus et boueuse en dessous : exactement ce qu'il fallait. Le soir, elles étaient sales, mouillées et amies."
          }
        ]
      },

      /* ---------- 2 ---------- */
      {
        id: 'neige-plage',
        title: 'De la neige sur la plage',
        subtitle: 'Un cadeau qui fond, et ce qu\'on en fait',
        tag: 'Tous ensemble',
        themes: ['Été', 'Amitié'],
        minutes: 5,
        cover: {
          bg: 'beach',
          items: [
            { t: 'livia', x: 250, y: 528, s: 1.05 },
            { t: 'elsa', x: 460, y: 520, s: .95, pose: 'magic' },
            { t: 'olaf', x: 660, y: 526, s: 1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'beach',
              back: [{ t: 'parasol', x: 90, y: 500, s: .8 }],
              items: [
                { t: 'livia', x: 300, y: 528, s: 1.1, mood: 'sad' },
                { t: 'peppa', x: 540, y: 526, s: 1.05, mood: 'sad' }
              ],
              sfx: [{ t: 'QU\'EST-CE QU\'IL FAIT CHAUD !', x: 400, y: 168, fs: 24, rot: -4, color: '#e0453c' }]
            },
            text: "C'était le jour le plus chaud de l'été. Le sable brûlait les pieds. Peppa s'éventait avec une feuille. Livia n'avait plus envie de rien, même pas d'une glace."
          },
          {
            scene: {
              bg: 'beach',
              items: [
                { t: 'peppa', x: 200, y: 526, s: 1 },
                { t: 'livia', x: 420, y: 528, s: 1.05, pose: 'point' },
                { t: 'elsa', x: 640, y: 520, s: .95, pose: 'wave' }
              ],
              bubbles: [{ x: 380, y: 26, w: 320, t: 'Elsa ! Tu peux faire quelque chose ?', tx: 430, ty: 248 }]
            },
            text: "Et puis Elsa arriva, avec sa robe qui ne se froissait jamais. « Elsa ! » cria Livia. « Tu peux faire quelque chose ? » Elsa regarda le ciel, puis le sable, et sourit."
          },
          {
            scene: {
              bg: 'beach', neige: 30,
              items: [
                { t: 'peppa', x: 200, y: 526, s: 1, mood: 'wow' },
                { t: 'livia', x: 420, y: 528, s: 1.05, mood: 'wow' },
                { t: 'elsa', x: 640, y: 520, s: .95, pose: 'magic' }
              ],
              sfx: [{ t: 'FROUUUCH !', x: 400, y: 160, fs: 38, rot: -8, color: '#bfe8f7' }]
            },
            text: "Elsa leva les deux mains. Il se mit à neiger. Sur la plage. En plein mois d'août. Les flocons tombaient sur le sable chaud comme des confettis très sérieux."
          },
          {
            scene: {
              bg: 'beach', neige: 24,
              items: [
                { t: 'peppa', x: 190, y: 526, s: 1, pose: 'armsup' },
                { t: 'livia', x: 400, y: 528, s: 1.05, pose: 'jump' },
                { t: 'olaf', x: 630, y: 526, s: 1.05, pose: 'wave' }
              ],
              sfx: [{ t: 'BONJOUR TOUT LE MONDE !', x: 420, y: 166, fs: 24, rot: -4, color: '#5fb8d8' }]
            },
            text: "Dans la neige, quelque chose bougea. Deux brindilles, un nez de carotte, et un très large sourire. « Bonjour tout le monde ! » dit Olaf. « J'adore l'été. C'est ma première fois. »"
          },
          {
            scene: {
              bg: 'beach', neige: 8,
              items: [
                { t: 'livia', x: 300, y: 528, s: 1.05, mood: 'sad' },
                { t: 'olaf', x: 560, y: 526, s: 1.05, mood: 'sad' }
              ],
              front: [{ t: 'splash', x: 620, y: 546, s: 1 }],
              sfx: [{ t: 'PLIC… PLOC…', x: 380, y: 174, fs: 30, rot: -6, color: '#4f9cb5' }]
            },
            text: "Mais la neige n'est pas faite pour le sable chaud. Elle devint de l'eau. Olaf devint plus petit. Livia sentit sa gorge se serrer. « Ne t'en va pas », dit-elle tout bas."
          },
          {
            scene: {
              bg: 'beach', neige: 20,
              items: [
                { t: 'elsa', x: 250, y: 520, s: 1, pose: 'magic' },
                { t: 'livia', x: 480, y: 528, s: 1.05 },
                { t: 'olaf', x: 690, y: 526, s: 1 }
              ],
              bubbles: [{ x: 60, y: 24, w: 320, t: 'Je peux le refaire. Autant de fois que tu veux.', tx: 250, ty: 244 }]
            },
            text: "Elsa posa une main sur l'épaule de Livia. « Je peux le refaire », dit-elle. « Autant de fois que tu veux. » Elle souffla, et Olaf redevint entier, avec un flocon au-dessus de la tête pour le garder au frais."
          },
          {
            scene: {
              bg: 'beach', time: 'sunset', neige: 14,
              items: [
                { t: 'peppa', x: 160, y: 510, s: .95, pose: 'sit' },
                { t: 'livia', x: 360, y: 508, s: 1, pose: 'sit' },
                { t: 'olaf', x: 560, y: 526, s: .95 },
                { t: 'elsa', x: 716, y: 502, s: .95, pose: 'sit' }
              ],
              front: [{ t: 'shell', x: 480, y: 548, s: .8 }]
            },
            text: "Ils restèrent jusqu'au coucher du soleil, à moitié dans le sable et à moitié dans la neige. « Le plus beau jour de ma vie », dit Olaf. C'était aussi le seul, mais personne ne le lui fit remarquer."
          }
        ]
      },

      /* ---------- 3 ---------- */
      {
        id: 'grande-cabane',
        title: 'La cabane de tous les amis',
        subtitle: 'Chacun apporte ce qu\'il sait faire',
        tag: 'Tous ensemble',
        themes: ['Amitié', 'Dehors', 'Règles'],
        minutes: 5,
        cover: {
          bg: 'garden',
          back: [{ t: 'cabane', x: 640, y: 522, s: .9, toit: '#bfe8f7' }],
          items: [
            { t: 'bluey', x: 200, y: 520, s: 1.05, pose: 'point' },
            { t: 'livia', x: 420, y: 524, s: 1.05 },
            { t: 'costaud', x: 640, y: 522, s: .95, pose: 'armsup' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 300, y: 520, s: 1.15, pose: 'point' },
                { t: 'livia', x: 560, y: 524, s: 1.1 }
              ],
              bubbles: [{ x: 60, y: 26, w: 320, t: 'On construit une cabane. Une immense.', tx: 300, ty: 244 }]
            },
            text: "« On construit une cabane », annonça Bluey. « Une immense. » Livia demanda comment. Bluey répondit qu'on verrait bien. C'est souvent comme ça que commencent les meilleures constructions."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 180, y: 520, s: 1, pose: 'hold' },
                { t: 'livia', x: 400, y: 524, s: 1.05, pose: 'hold' },
                { t: 'peppa', x: 620, y: 522, s: 1, pose: 'hold' }
              ],
              front: [{ t: 'cabane', x: 690, y: 550, s: .7, ecroulee: true }],
              sfx: [{ t: 'HHHNN… ÇA GLISSE !', x: 380, y: 170, fs: 26, rot: -5, color: '#7ba450' }]
            },
            text: "Elles portèrent des branches. Peppa en laissa tomber deux. Bluey en laissa tomber trois. Le tas ressemblait à un tas, pas encore à une cabane."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 260, y: 524, s: 1.05, pose: 'point' },
                { t: 'costaud', x: 560, y: 522, s: 1.05, pose: 'armsup' }
              ],
              front: [{ t: 'log', x: 740, y: 540, s: 1 }],
              sfx: [{ t: 'FASTOCHE !', x: 560, y: 168, fs: 32, rot: -6, color: '#c4453c' }]
            },
            text: "Alors Livia alla chercher Monsieur Costaud. Il souleva le tronc le plus gros comme si c'était une cuillère. « Fastoche », dit-il. Il aimait bien qu'on ait besoin de lui."
          },
          {
            scene: {
              bg: 'garden', neige: 14,
              back: [{ t: 'cabane', x: 420, y: 524, s: 1.8, toit: '#bfe8f7' }],
              items: [
                { t: 'peppa', x: 160, y: 522, s: .95, mood: 'wow' },
                { t: 'livia', x: 350, y: 524, s: 1, mood: 'wow' },
                { t: 'bluey', x: 540, y: 520, s: .95, mood: 'wow' },
                { t: 'elsa', x: 706, y: 514, s: .95, pose: 'magic' }
              ],
              sfx: [{ t: 'CRIIIC !', x: 420, y: 164, fs: 34, rot: -7, color: '#7fd8f0' }]
            },
            text: "Il manquait un toit. Elsa souffla doucement au-dessus des branches, et la glace se posa entre elles comme du ciment. Un toit transparent, où l'on voyait passer les nuages."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'bluey', x: 220, y: 520, s: 1, mood: 'sad' },
                { t: 'livia', x: 440, y: 524, s: 1.05, mood: 'sad' },
                { t: 'peppa', x: 660, y: 522, s: 1, mood: 'sad' }
              ],
              front: [{ t: 'cabane', x: 420, y: 552, s: 1, ecroulee: true }],
              sfx: [{ t: 'PATATRAS !', x: 400, y: 168, fs: 36, rot: -8, color: '#e0453c' }]
            },
            text: "Elles entrèrent toutes en même temps. La cabane fit un bruit, pencha, et s'écroula sur leurs têtes. Il y eut un grand silence, puis un très grand fou rire."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'cabane', x: 700, y: 524, s: .85 }],
              items: [
                { t: 'livia', x: 300, y: 524, s: 1.1, pose: 'point' },
                { t: 'bluey', x: 560, y: 520, s: 1.05 }
              ],
              bubbles: [{ x: 380, y: 24, w: 340, t: 'On recommence. Mais on entre un par un.', tx: 380, ty: 240 }]
            },
            text: "« On recommence », dit Livia. « Mais on entre un par un. » Bluey trouva que c'était une règle un peu ennuyeuse. Elle trouva aussi que c'était sûrement une bonne règle."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              back: [{ t: 'cabane', x: 380, y: 530, s: 1.9, toit: '#bfe8f7' }],
              items: [
                { t: 'peppa', x: 250, y: 508, s: .85, pose: 'sit' },
                { t: 'livia', x: 400, y: 506, s: .9, pose: 'sit' },
                { t: 'bluey', x: 545, y: 506, s: .85, pose: 'sit' },
                { t: 'costaud', x: 704, y: 522, s: .8 }
              ]
            },
            text: "La deuxième cabane tint jusqu'au soir. Elles s'assirent dedans, serrées, sous le toit de glace qui gouttait un peu. Monsieur Costaud resta dehors : il ne rentrait pas. « C'est la plus belle maison du monde », dit Peppa, et personne ne dit le contraire."
          }
        ]
      },

      /* ---------- 4 ---------- */
      {
        id: 'grande-course',
        title: 'La grande course des amis',
        subtitle: 'Gagner, ce n\'est pas toujours arriver devant',
        tag: 'Tous ensemble',
        themes: ['Amitié', 'Dehors'],
        minutes: 5,
        cover: {
          bg: 'hill',
          items: [
            { t: 'bluey', x: 200, y: 518, s: 1.05, pose: 'run' },
            { t: 'livia', x: 420, y: 522, s: 1.05, pose: 'run' },
            { t: 'rapide', x: 640, y: 518, s: .95, pose: 'run' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'bluey', x: 240, y: 518, s: 1.1, pose: 'point' },
                { t: 'livia', x: 500, y: 522, s: 1.1 }
              ],
              bubbles: [{ x: 60, y: 26, w: 300, t: 'Le premier en haut de la colline !', tx: 240, ty: 244 }]
            },
            text: "« Le premier en haut de la colline ! » cria Bluey. Livia trouva l'idée excellente. C'était une longue colline, et un très beau matin pour courir."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'peppa', x: 150, y: 520, s: .95 },
                { t: 'livia', x: 340, y: 522, s: 1 },
                { t: 'bluey', x: 530, y: 518, s: .95 },
                { t: 'rapide', x: 700, y: 518, s: .85, pose: 'run' }
              ],
              sfx: [{ t: 'À VOS MARQUES…', x: 400, y: 166, fs: 28, rot: -4, color: '#3f6ea8' }]
            },
            text: "Tout le monde vint. Peppa, Bluey, Livia, et même Monsieur Rapide, qui était déjà arrivé avant le départ. Il fallut lui demander de revenir se mettre sur la ligne."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'rapide', x: 620, y: 518, s: 1, pose: 'run' },
                { t: 'bluey', x: 380, y: 518, s: 1.05, pose: 'run' },
                { t: 'livia', x: 160, y: 522, s: 1, pose: 'run' }
              ],
              sfx: [{ t: 'ZOOOUM !', x: 420, y: 160, fs: 36, rot: -8, color: '#f0862c' }]
            },
            text: "Monsieur Rapide partit comme une flèche. Bluey partit comme un chien. Livia partit comme une fille de quatre ans, c'est-à-dire très vite, mais pas très longtemps."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'peppa', x: 300, y: 502, s: 1.1, mood: 'sad', pose: 'sit' },
                { t: 'livia', x: 560, y: 522, s: 1.05, pose: 'point' }
              ],
              sfx: [{ t: 'AÏE…', x: 300, y: 172, fs: 32, rot: -6, color: '#e8436e' }]
            },
            text: "Au milieu de la montée, Peppa s'assit dans l'herbe. Elle avait un caillou dans la botte et plus du tout envie. Livia s'arrêta net, alors qu'elle était deuxième."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'peppa', x: 300, y: 520, s: 1.05, pose: 'hold' },
                { t: 'livia', x: 540, y: 522, s: 1.05, pose: 'hold' }
              ],
              bubbles: [{ x: 380, y: 24, w: 320, t: 'On monte ensemble, doucement.', tx: 520, ty: 240 }]
            },
            text: "Livia enleva le caillou de la botte. Puis elle prit la main de Peppa. « On monte ensemble, doucement. » Elles montèrent doucement. Elles arrivèrent dernières."
          },
          {
            scene: {
              bg: 'hill',
              items: [
                { t: 'rapide', x: 180, y: 518, s: .95 },
                { t: 'bluey', x: 380, y: 518, s: 1, pose: 'armsup' },
                { t: 'peppa', x: 570, y: 520, s: .95 },
                { t: 'livia', x: 730, y: 522, s: .9 }
              ],
              sfx: [{ t: 'BRAVO !', x: 400, y: 164, fs: 34, rot: -6, color: '#f7c518' }]
            },
            text: "En haut, Bluey et Monsieur Rapide les attendaient. Ils ne s'étaient pas assis. Ils avaient regardé toute la montée, et ils applaudirent les dernières comme on applaudit les premières."
          },
          {
            scene: {
              bg: 'hill', time: 'sunset',
              items: [
                { t: 'peppa', x: 160, y: 510, s: .95, pose: 'sit' },
                { t: 'livia', x: 360, y: 508, s: 1, pose: 'sit' },
                { t: 'bluey', x: 550, y: 506, s: .95, pose: 'sit' },
                { t: 'rapide', x: 698, y: 518, s: .85 }
              ]
            },
            text: "Ils s'assirent tous en haut pour regarder le soleil descendre. « Qui a gagné ? » demanda Peppa. Personne ne s'en souvenait. Monsieur Rapide trouva ça très reposant."
          }
        ]
      },

      /* ---------- 5 ---------- */
      {
        id: 'nuit-etoiles',
        title: 'La nuit où tout le monde a dormi dehors',
        subtitle: 'Une tente, quatre amis, et le noir',
        tag: 'Tous ensemble',
        themes: ['Nuit', 'Amitié'],
        minutes: 5,
        cover: {
          bg: 'camp',
          back: [{ t: 'tent', x: 110, y: 496, s: .85 }],
          items: [
            { t: 'livia', x: 260, y: 524, s: 1.05 },
            { t: 'bluey', x: 470, y: 520, s: 1 },
            { t: 'peppa', x: 670, y: 522, s: 1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'camp',
              back: [{ t: 'tent', x: 700, y: 500, s: 1, rot: 4 }],
              items: [
                { t: 'livia', x: 300, y: 524, s: 1.1, pose: 'armsup' },
                { t: 'bluey', x: 560, y: 520, s: 1.05, pose: 'armsup' }
              ],
              sfx: [{ t: 'ON DORT DEHORS !', x: 420, y: 168, fs: 28, rot: -5, color: '#7ac6a8' }]
            },
            text: "La tente était montée au fond du jardin. Un peu de travers, mais montée. « On dort dehors ! » criaient Livia et Bluey, qui n'avaient encore jamais dormi dehors."
          },
          {
            scene: {
              bg: 'camp',
              back: [{ t: 'tent', x: 720, y: 498, s: .8 }],
              items: [
                { t: 'peppa', x: 170, y: 522, s: 1, pose: 'hold' },
                { t: 'campfire', x: 400, y: 528, s: 1 },
                { t: 'livia', x: 590, y: 524, s: 1.05, pose: 'hold' }
              ],
              front: [{ t: 'marshmallow', x: 250, y: 480, s: 1 }],
              sfx: [{ t: 'MIAM !', x: 460, y: 172, fs: 32, rot: -6, color: '#f2803d' }]
            },
            text: "Il y eut des chamallows au bout des bâtons. Peppa fit brûler le sien et dit que c'était exprès. Personne ne la crut, et tout le monde fit semblant."
          },
          {
            scene: {
              bg: 'camp', time: 'night',
              back: [{ t: 'tent', x: 720, y: 498, s: .8 }],
              items: [
                { t: 'peppa', x: 190, y: 522, s: 1, mood: 'sad' },
                { t: 'livia', x: 410, y: 524, s: 1.05, mood: 'sad' },
                { t: 'bluey', x: 630, y: 520, s: 1, mood: 'sad' }
              ],
              sfx: [{ t: 'CRAC…', x: 430, y: 156, fs: 30, rot: -6, color: '#bfe8f7' }]
            },
            text: "Puis la nuit tomba pour de bon. Le jardin qu'elles connaissaient par cœur devint un endroit inconnu. Il y eut un craquement. Trois amies se rapprochèrent en même temps."
          },
          {
            scene: {
              bg: 'camp', time: 'night', neige: 22,
              back: [{ t: 'tent', x: 720, y: 498, s: .8 }],
              items: [
                { t: 'livia', x: 300, y: 524, s: 1.05, mood: 'sad' },
                { t: 'elsa', x: 560, y: 516, s: 1, pose: 'magic' }
              ],
              sfx: [{ t: 'PSSSCHHH…', x: 420, y: 150, fs: 30, rot: -5, color: '#7fd8f0' }]
            },
            text: "Alors Elsa arriva. Elle ne dit pas qu'il ne fallait pas avoir peur. Elle leva la main, et de tout petits flocons se mirent à briller dans l'air, comme des lampes de poche minuscules."
          },
          {
            scene: {
              bg: 'camp', time: 'night', neige: 18,
              back: [{ t: 'tent', x: 90, y: 498, s: .8 }, { t: 'lantern', x: 752, y: 246, s: 1 }],
              items: [
                { t: 'peppa', x: 200, y: 522, s: 1 },
                { t: 'livia', x: 420, y: 524, s: 1.05, pose: 'point' },
                { t: 'bluey', x: 640, y: 520, s: 1 }
              ],
              bubbles: [{ x: 60, y: 22, w: 320, t: 'Le craquement, c\'était juste une branche.', tx: 420, ty: 238 }]
            },
            text: "À la lumière des flocons, elles allèrent voir le craquement de plus près. C'était une branche. Une simple branche, posée par le vent. Le jardin redevint le jardin."
          },
          {
            scene: {
              bg: 'camp', time: 'night',
              back: [{ t: 'tent', x: 80, y: 470, s: .7 }],
              items: [
                { t: 'peppa', x: 180, y: 510, s: .95, pose: 'sit' },
                { t: 'livia', x: 380, y: 508, s: 1, pose: 'sit' },
                { t: 'bluey', x: 570, y: 508, s: .95, pose: 'sit' },
                { t: 'elsa', x: 720, y: 502, s: .95, pose: 'sit' }
              ],
              sfx: [{ t: 'CHUUUT…', x: 420, y: 152, fs: 28, rot: -4, color: '#bfe8f7' }]
            },
            text: "Elles s'installèrent devant la tente pour compter les étoiles. Peppa s'arrêta à douze. Bluey s'arrêta à cinquante. Livia s'endormit à sept, la tête sur l'épaule d'Elsa."
          },
          {
            scene: {
              bg: 'camp', time: 'night',
              back: [{ t: 'tent', x: 700, y: 498, s: .85 }],
              items: [
                { t: 'livia', x: 300, y: 508, s: 1.05, mood: 'sleep', pose: 'sit' },
                { t: 'bluey', x: 560, y: 506, s: 1, mood: 'sleep', pose: 'sit' }
              ],
              sfx: [{ t: 'ZZZ…', x: 430, y: 180, fs: 32, rot: -6, color: '#bfe8f7' }]
            },
            text: "Au matin, il restait un peu de givre sur la tente et beaucoup de miettes de chamallow. « On recommence ce soir ? » demanda Bluey. Livia dormait encore. Elle dit oui quand même."
          }
        ]
      },

      /* ---------- 6 : le goûter à quatre ---------- */
      {
        id: 'gouter-a-quatre',
        title: 'Le goûter à quatre',
        subtitle: "Une part de plus qu'il n'y a de mains",
        tag: 'Mélange',
        themes: ['Partager', 'Amitié'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'peppa', x: 190, y: 512, s: .95 },
            { t: 'livia', x: 380, y: 516, s: 1.05 },
            { t: 'bluey', x: 570, y: 512, s: .95 },
            { t: 'elsa', x: 730, y: 508, s: .9 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'peppa', x: 200, y: 512, s: 1 },
                { t: 'livia', x: 400, y: 516, s: 1.05, pose: 'hold' },
                { t: 'bluey', x: 600, y: 512, s: 1 },
                { t: 'elsa', x: 724, y: 508, s: .9 }
              ],
              sfx: [{ t: 'CINQ GÂTEAUX !', x: 400, y: 148, fs: 27, rot: -5, color: '#f2803d' }]
            },
            text: "Il y avait cinq gâteaux sur l'assiette, et quatre invités autour. Peppa fit le calcul à voix haute, deux fois, pour être bien sûre du problème."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'peppa', x: 240, y: 512, s: 1.05, pose: 'point' },
                { t: 'bluey', x: 520, y: 512, s: 1.05, pose: 'point' }
              ],
              sfx: [{ t: 'MOI D\'ABORD ! NON, MOI !', x: 400, y: 148, fs: 24, rot: -4, color: '#e0453c' }]
            },
            text: "Peppa dit que le cinquième revenait à celle qui avait apporté l'assiette. Bluey dit qu'il revenait à celui qui avait mis la table. Les deux avaient raison, ce qui n'aidait absolument personne."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'elsa', x: 300, y: 508, s: 1.05, pose: 'point' },
                { t: 'livia', x: 570, y: 516, s: 1.1 }
              ],
              bubbles: [{ x: 300, y: 22, w: 340, t: 'On peut aussi le couper en quatre.', tx: 310, ty: 236 }]
            },
            text: "Elsa attendit que ça se calme. « On peut aussi le couper en quatre », dit-elle. Personne n'y avait pensé, parce que tout le monde était très occupé à avoir raison."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 400, y: 516, s: 1.2, pose: 'point' }
              ],
              sfx: [{ t: 'CROC. CROC. CROC. CROC.', x: 400, y: 148, fs: 23, rot: -4, color: '#8a5a3b' }]
            },
            text: "Livia coupa. Ce n'était pas très droit : un morceau était nettement plus gros que les autres, et tout le monde le vit en même temps, avec beaucoup d'attention."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'peppa', x: 220, y: 512, s: 1, pose: 'hold' },
                { t: 'livia', x: 400, y: 516, s: 1.05, pose: 'hold' },
                { t: 'bluey', x: 590, y: 512, s: 1, pose: 'hold' },
                { t: 'elsa', x: 724, y: 508, s: .9, pose: 'hold' }
              ],
              sfx: [{ t: 'À TOI.', x: 400, y: 148, fs: 28, rot: -5, color: '#7ac6a8' }]
            },
            text: "Peppa prit le plus gros. Puis elle le regarda, soupira, et le posa dans la main de Bluey. « À toi », dit-elle très vite, comme on arrache un pansement."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'peppa', x: 200, y: 512, s: 1 },
                { t: 'livia', x: 390, y: 516, s: 1.05 },
                { t: 'bluey', x: 580, y: 512, s: 1 },
                { t: 'elsa', x: 724, y: 508, s: .9 }
              ]
            },
            text: "Les quatre parts furent mangées en trois minutes. Personne ne se souvient de qui a eu la plus grosse. Tout le monde se souvient que Peppa l'a donnée, et c'est une chose qui reste."
          }
        ]
      },

      /* ---------- 7 : chacun ses règles ---------- */
      {
        id: 'chacun-ses-regles',
        title: 'Chacun ses règles',
        subtitle: "Chez toi ce n'est pas pareil que chez moi",
        tag: 'Mélange',
        themes: ['Règles', 'Amitié'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'livia', x: 260, y: 512, s: 1.1 },
            { t: 'bluey', x: 470, y: 508, s: 1 },
            { t: 'peppa', x: 660, y: 508, s: 1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              back: [{ t: 'tourcubes', x: 660, y: 500, s: 1 }],
              items: [
                { t: 'livia', x: 280, y: 512, s: 1.1, pose: 'armsup' },
                { t: 'bluey', x: 500, y: 508, s: 1.05, pose: 'jump' }
              ],
              sfx: [{ t: 'CHEZ LIVIA !', x: 400, y: 146, fs: 28, rot: -5, color: '#4ea8f0' }]
            },
            text: "Bluey et Peppa venaient jouer à la maison pour la première fois. Ils entrèrent en courant, et Bluey sauta sur le lit avant même d'avoir enlevé ses chaussures."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 512, s: 1.15, mood: 'wow', pose: 'point' },
                { t: 'bluey', x: 570, y: 508, s: 1.05 }
              ],
              sfx: [{ t: 'PAS SUR LE LIT !', x: 430, y: 146, fs: 28, rot: -5, color: '#e0453c' }]
            },
            text: "« Pas sur le lit ! » Le cri sortit tout seul de Livia, plus fort qu'elle ne voulait. Bluey descendit d'un bond, l'air surpris. Chez lui, on saute sur le lit. C'est même le jeu principal."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'bluey', x: 300, y: 508, s: 1.05, mood: 'sad' },
                { t: 'livia', x: 570, y: 512, s: 1.1, mood: 'sad' }
              ],
              sfx: [{ t: '. . .', x: 430, y: 146, fs: 34, rot: 0, color: '#8a7768' }]
            },
            text: "Il y eut un silence pas agréable du tout. Livia se sentit méchante, et Bluey se sentit bête, alors que ni l'un ni l'autre n'avait rien fait de mal."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 300, y: 508, s: 1.05, pose: 'shrug' },
                { t: 'livia', x: 570, y: 512, s: 1.1 }
              ],
              bubbles: [{ x: 300, y: 22, w: 340, t: 'Chez moi non plus on ne saute pas. Mais on crie.', tx: 310, ty: 236 }]
            },
            text: "Peppa haussa les épaules. « Chez moi non plus on ne saute pas », dit-elle. « Mais on a le droit de crier. » Il apparut que chaque maison avait ses règles, et qu'aucune n'était la bonne."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 280, y: 512, s: 1.1, pose: 'point' },
                { t: 'bluey', x: 500, y: 508, s: 1.05 },
                { t: 'peppa', x: 690, y: 508, s: 1 }
              ],
              sfx: [{ t: 'ICI : LE TAPIS.', x: 400, y: 146, fs: 26, rot: -4, color: '#7ab648' }]
            },
            text: "Livia montra le tapis. « Ici, on saute là », dit-elle. « C'est mou et Maman ne dit rien. » Bluey trouva que c'était une règle très acceptable, et il l'essaya immédiatement."
          },
          {
            scene: {
              bg: 'bedroom', time: 'sunset',
              items: [
                { t: 'bluey', x: 260, y: 508, s: 1.05, pose: 'jump' },
                { t: 'livia', x: 480, y: 512, s: 1.1, pose: 'jump' },
                { t: 'peppa', x: 690, y: 508, s: 1, pose: 'armsup' }
              ],
              sfx: [{ t: 'BOUM ! BOUM ! BOUM !', x: 420, y: 146, fs: 27, rot: -6, color: '#f7c518' }]
            },
            text: "Ils sautèrent sur le tapis jusqu'à ce qu'on leur demande d'arrêter. Depuis, quand Livia va chez quelqu'un, elle commence par demander : « chez toi, on fait comment ? »"
          }
        ]
      }
    ]
  },

  /* ==========================================================
     UNIVERS 6 — LES COPINES DE LIVIA
     Roxane, Juliette, Isadora. Et Pablo, qui n'a rien demandé.
     ========================================================== */
  {
    id: 'copines',
    name: 'Les copines de Livia',
    tagline: 'Roxane, Juliette, Isadora — et le petit frère',
    emoji: '💛',
    vignette: { t: 'roxane', ds: .5, dy: 178 },
    c1: '#f2a0c2',
    c2: '#7ac6a8',
    cover: {
      bg: 'garden',
      items: [
        { t: 'roxane', x: 150, y: 522, s: 1 },
        { t: 'livia', x: 330, y: 524, s: 1.05, pose: 'wave' },
        { t: 'juliette', x: 510, y: 522, s: 1 },
        { t: 'isadora', x: 680, y: 522, s: 1 }
      ]
    },
    stories: [

      /* ---------- 1 ---------- */
      {
        id: 'nouvelle',
        title: 'La nouvelle',
        subtitle: 'Quand on est déjà deux et qu\'une troisième arrive',
        tag: 'Copines',
        themes: ['Amitié', 'Émotions'],
        minutes: 5,
        cover: {
          bg: 'village',
          items: [
            { t: 'roxane', x: 220, y: 522, s: 1.05 },
            { t: 'livia', x: 420, y: 524, s: 1.05 },
            { t: 'isadora', x: 620, y: 522, s: 1.05 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 300, y: 524, s: 1.1, pose: 'hold' },
                { t: 'roxane', x: 540, y: 522, s: 1.1, pose: 'hold' }
              ],
              sfx: [{ t: 'LES DEUX INSÉPARABLES', x: 420, y: 168, fs: 24, rot: -4, color: '#e0453c' }]
            },
            text: "Livia et Roxane faisaient tout ensemble. Le toboggan ensemble, le goûter ensemble, les bêtises ensemble. On les appelait « les deux »."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'roxane', x: 200, y: 522, s: 1 },
                { t: 'livia', x: 400, y: 524, s: 1.05 },
                { t: 'isadora', x: 640, y: 522, s: 1, mood: 'sad' }
              ],
              bubbles: [{ x: 60, y: 26, w: 300, t: 'C\'est qui, celle-là ?', tx: 210, ty: 246 }]
            },
            text: "Un lundi, une fille nouvelle arriva. Elle s'appelait Isadora. Elle restait près du portail, avec son manteau encore boutonné. « C'est qui, celle-là ? » demanda Roxane."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 280, y: 524, s: 1.05, pose: 'point' },
                { t: 'roxane', x: 560, y: 522, s: 1.05, mood: 'sad' }
              ],
              bubbles: [{ x: 380, y: 24, w: 320, t: 'Si elle joue, moi je ne joue plus.', tx: 560, ty: 240 }]
            },
            text: "Livia voulait l'inviter. Roxane, non. « Si elle joue, moi je ne joue plus », dit Roxane. Livia se retrouva au milieu, avec deux envies qui tiraient dans deux directions."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'isadora', x: 300, y: 508, s: 1.05, pose: 'sit', mood: 'sad' },
                { t: 'livia', x: 560, y: 506, s: 1.05, pose: 'sit' }
              ],
              sfx: [{ t: '. . .', x: 430, y: 180, fs: 32, rot: 0, color: '#8a7768' }]
            },
            text: "À la récréation, Livia alla s'asseoir à côté d'Isadora. Elles ne dirent rien pendant longtemps. Puis Isadora sortit de sa poche trois billes, et en donna une."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'roxane', x: 250, y: 522, s: 1.05, mood: 'sad' },
                { t: 'livia', x: 460, y: 524, s: 1.05, pose: 'point' },
                { t: 'isadora', x: 660, y: 522, s: 1 }
              ],
              bubbles: [{ x: 300, y: 24, w: 330, t: 'À trois, on peut faire des équipes.', tx: 470, ty: 240 }]
            },
            text: "« À trois, on peut faire des équipes », dit Livia. « À deux, on ne peut pas. » Roxane réfléchit. C'était embêtant, parce que c'était vrai."
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'roxane', x: 220, y: 522, s: 1, pose: 'hold' },
                { t: 'livia', x: 420, y: 524, s: 1.05, pose: 'hold' },
                { t: 'isadora', x: 620, y: 522, s: 1, pose: 'hold' }
              ],
              sfx: [{ t: 'LES TROIS !', x: 420, y: 164, fs: 32, rot: -6, color: '#f7c518' }]
            },
            text: "Le soir, elles rentrèrent toutes les trois. Roxane marchait au milieu, ce qui l'arrangeait bien. On ne les appela plus jamais « les deux »."
          }
        ]
      },

      /* ---------- 2 ---------- */
      {
        id: 'toboggan',
        title: 'La dispute du toboggan',
        subtitle: 'Bouder, c\'est long',
        tag: 'Copines',
        themes: ['Amitié', 'Émotions', 'Partager'],
        minutes: 4,
        cover: {
          bg: 'garden',
          back: [{ t: 'slide', x: 620, y: 520, s: 1 }],
          items: [
            { t: 'livia', x: 250, y: 524, s: 1.05, mood: 'sad' },
            { t: 'roxane', x: 430, y: 522, s: 1.05, mood: 'sad' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'slide', x: 640, y: 522, s: 1.1 }],
              items: [
                { t: 'livia', x: 220, y: 524, s: 1.1, pose: 'armsup' },
                { t: 'roxane', x: 420, y: 522, s: 1.1, pose: 'armsup' }
              ],
              sfx: [{ t: 'WHIII !', x: 300, y: 168, fs: 34, rot: -8, color: '#3ec9c9' }]
            },
            text: "Le toboggan du parc était le meilleur du monde. Livia et Roxane y montaient depuis une heure. Tout allait très bien."
          },
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'slide', x: 660, y: 522, s: 1.1 }],
              items: [
                { t: 'livia', x: 240, y: 524, s: 1.1, mood: 'sad' },
                { t: 'roxane', x: 440, y: 522, s: 1.1, mood: 'sad' }
              ],
              bubbles: [{ x: 60, y: 26, w: 300, t: 'C\'était mon tour !', tx: 250, ty: 246 }]
            },
            text: "Et puis elles voulurent monter en même temps. « C'était mon tour ! » dit Livia. « Non, c'était le mien ! » dit Roxane. Les deux étaient sûres. Les deux avaient tort, un peu."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 170, y: 524, s: 1.05, mood: 'sad' },
                { t: 'roxane', x: 660, y: 522, s: 1.05, mood: 'sad', flip: true }
              ],
              sfx: [{ t: 'HMPF.', x: 420, y: 172, fs: 34, rot: -5, color: '#6d5847' }]
            },
            text: "Alors chacune partit de son côté. Livia s'assit tout à gauche du parc. Roxane s'assit tout à droite. Elles se tournèrent le dos, très fort, pour bien montrer."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 400, y: 500, s: 1.15, pose: 'sit', mood: 'sad' }
              ],
              sfx: [{ t: 'C\'EST LONG…', x: 400, y: 172, fs: 28, rot: -4, color: '#6d5847' }]
            },
            text: "Bouder, au début, c'est agréable. Après deux minutes, c'est un peu moins agréable. Après cinq minutes, on ne se souvient même plus très bien pourquoi on boude."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 524, s: 1.05, pose: 'point' },
                { t: 'roxane', x: 540, y: 522, s: 1.05, pose: 'point' }
              ],
              sfx: [{ t: 'EN MÊME TEMPS !', x: 420, y: 168, fs: 28, rot: -6, color: '#f7c518' }]
            },
            text: "Elles se levèrent en même temps. Elles firent trois pas en même temps. Elles ouvrirent la bouche en même temps. Et elles dirent « pardon » en même temps, ce qui les fit rire."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              back: [{ t: 'slide', x: 640, y: 522, s: 1.1 }],
              items: [
                { t: 'livia', x: 240, y: 524, s: 1.05, pose: 'hold' },
                { t: 'roxane', x: 430, y: 522, s: 1.05, pose: 'hold' }
              ]
            },
            text: "Elles remontèrent le toboggan jusqu'au soir, une fois chacune, en comptant à voix haute. Compter, ça ne rend pas le jeu plus rigolo. Mais ça évite les disputes."
          }
        ]
      },

      /* ---------- 3 ---------- */
      {
        id: 'secret',
        title: 'Le secret de Juliette',
        subtitle: 'Ce qu\'on garde pour soi',
        tag: 'Copines',
        themes: ['Amitié', 'Grandir'],
        minutes: 5,
        cover: {
          bg: 'forest',
          items: [
            { t: 'juliette', x: 300, y: 522, s: 1.05 },
            { t: 'livia', x: 520, y: 524, s: 1.05 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'forest',
              items: [
                { t: 'juliette', x: 300, y: 522, s: 1.1 },
                { t: 'livia', x: 540, y: 524, s: 1.1, mood: 'wow' }
              ],
              bubbles: [{ x: 60, y: 26, w: 320, t: 'Je te dis un secret. Un vrai.', tx: 300, ty: 246 }]
            },
            text: "Juliette prit Livia par la manche et l'emmena derrière le grand arbre. « Je te dis un secret », chuchota-t-elle. « Un vrai. Tu ne le répètes à personne. »"
          },
          {
            scene: {
              bg: 'forest',
              items: [
                { t: 'juliette', x: 320, y: 522, s: 1.1, mood: 'sad' },
                { t: 'livia', x: 560, y: 524, s: 1.1 }
              ],
              sfx: [{ t: 'CHUUUT…', x: 430, y: 166, fs: 30, rot: -5, color: '#a98cf0' }]
            },
            text: "Le secret était que Juliette avait encore peur du noir. Elle en avait un peu honte. Elle ne l'avait dit à personne, jamais, et là elle venait de le dire à Livia."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'roxane', x: 260, y: 522, s: 1.05, pose: 'point' },
                { t: 'livia', x: 520, y: 524, s: 1.05 }
              ],
              bubbles: [{ x: 60, y: 24, w: 320, t: 'Alors ? Elle t\'a dit quoi ?', tx: 265, ty: 240 }]
            },
            text: "À la récréation, Roxane arriva en courant. « Alors ? Elle t'a dit quoi ? » Livia sentit le secret remuer dans sa bouche comme un bonbon trop gros."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 400, y: 524, s: 1.2, mood: 'sad' }
              ],
              sfx: [{ t: 'MMMMH…', x: 400, y: 170, fs: 32, rot: -4, color: '#6d5847' }]
            },
            text: "Garder un secret, ce n'est pas ne rien dire. C'est se retenir de dire, pendant tout le temps où on a très envie de le dire. C'est beaucoup plus difficile."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'roxane', x: 280, y: 522, s: 1.05, mood: 'sad' },
                { t: 'livia', x: 540, y: 524, s: 1.05, pose: 'shrug' }
              ],
              bubbles: [{ x: 360, y: 24, w: 330, t: 'C\'est un secret. Alors je ne dis pas.', tx: 540, ty: 240 }]
            },
            text: "« C'est un secret », dit Livia. « Alors je ne dis pas. » Roxane fut vexée pendant huit minutes exactement. Puis elle passa à autre chose."
          },
          {
            scene: {
              bg: 'forest', time: 'sunset',
              items: [
                { t: 'juliette', x: 300, y: 522, s: 1.05, pose: 'hold' },
                { t: 'livia', x: 520, y: 524, s: 1.05, pose: 'hold' }
              ]
            },
            text: "Le soir, Juliette lui glissa : « Tu n'as rien dit. » Livia haussa les épaules, comme si c'était facile. Ce n'était pas facile du tout. C'est pour ça que ça valait quelque chose."
          }
        ]
      },

      /* ---------- 4 ---------- */
      {
        id: 'gouter',
        title: 'Le goûter et le petit frère',
        subtitle: 'Pablo n\'a pas fait exprès',
        tag: 'Copines',
        themes: ['Famille', 'Bêtises'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'livia', x: 240, y: 508, s: 1.05 },
            { t: 'juliette', x: 430, y: 506, s: 1 },
            { t: 'pablo', x: 620, y: 512, s: 1.05, pose: 'wave' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 240, y: 508, s: 1.05, pose: 'hold' },
                { t: 'roxane', x: 430, y: 506, s: 1, pose: 'hold' },
                { t: 'juliette', x: 620, y: 506, s: 1, pose: 'hold' }
              ],
              sfx: [{ t: 'LE GOÛTER !', x: 430, y: 150, fs: 30, rot: -5, color: '#f2803d' }]
            },
            text: "Ce mercredi, Roxane et Juliette venaient goûter. Il y avait des gâteaux, du jus de pomme, et une tour de coussins qu'il ne fallait surtout pas faire tomber."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 280, y: 508, s: 1.05 },
                { t: 'juliette', x: 480, y: 506, s: 1 },
                { t: 'pablo', x: 680, y: 512, s: 1.05, pose: 'quatrepattes' }
              ],
              sfx: [{ t: 'PABLO ARRIVE…', x: 420, y: 148, fs: 26, rot: -4, color: '#8ec9f0' }]
            },
            text: "Puis Pablo arriva. Pablo, c'est le petit frère de Livia. Il a un an et demi. Il ne marche pas encore très droit, et il attrape tout ce qui est à sa hauteur."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'roxane', x: 260, y: 506, s: 1, mood: 'wow' },
                { t: 'livia', x: 460, y: 508, s: 1.05, mood: 'wow' },
                { t: 'pablo', x: 660, y: 512, s: 1.05, pose: 'armsup', mood: 'wow' }
              ],
              sfx: [{ t: 'PLAAASH !', x: 430, y: 146, fs: 36, rot: -8, color: '#f2803d' }]
            },
            text: "En trois secondes, le verre de jus était par terre, la tour de coussins était par terre, et Pablo riait très fort, tout seul, très content de lui."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 508, s: 1.1, mood: 'sad' },
                { t: 'pablo', x: 560, y: 512, s: 1.05, mood: 'sad' }
              ],
              sfx: [{ t: 'PABLO !', x: 420, y: 150, fs: 34, rot: -6, color: '#e0453c' }]
            },
            text: "Livia devint toute rouge. Elle avait envie de crier très fort. Devant ses copines, en plus. Elle serra les poings et compta jusqu'à trois, comme sa maman lui avait montré."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'roxane', x: 240, y: 506, s: 1, pose: 'hold' },
                { t: 'juliette', x: 430, y: 506, s: 1, pose: 'hold' },
                { t: 'livia', x: 620, y: 508, s: 1.05, pose: 'hold' }
              ],
              bubbles: [{ x: 60, y: 24, w: 330, t: 'Mon frère fait pareil. C\'est les bébés.', tx: 250, ty: 240 }]
            },
            text: "« Mon frère fait pareil », dit Roxane en épongeant. « C'est les bébés. » Juliette ramassa les coussins. À trois, ça alla très vite, et personne ne se fâcha."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 320, y: 508, s: 1.05, pose: 'hold' },
                { t: 'pablo', x: 560, y: 512, s: 1.05, pose: 'hold' }
              ],
              sfx: [{ t: 'BI-YA !', x: 430, y: 150, fs: 30, rot: -5, color: '#f7c518' }]
            },
            text: "À la fin, Pablo tendit un coussin à Livia en disant « Bi-ya ! », ce qui voulait dire Livia. C'était son premier mot. Elle décida de ne plus être fâchée du tout."
          }
        ]
      },

      /* ---------- 5 ---------- */
      {
        id: 'cabane-copines',
        title: 'La cabane des quatre',
        subtitle: 'Quatre idées, une seule cabane',
        tag: 'Copines',
        themes: ['Amitié', 'Dehors', 'Règles'],
        minutes: 5,
        cover: {
          bg: 'forest',
          back: [{ t: 'cabane', x: 640, y: 522, s: .9 }],
          items: [
            { t: 'livia', x: 200, y: 524, s: 1.05, pose: 'point' },
            { t: 'isadora', x: 400, y: 522, s: 1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'forest',
              items: [
                { t: 'livia', x: 180, y: 524, s: 1, pose: 'point' },
                { t: 'roxane', x: 360, y: 522, s: 1 },
                { t: 'juliette', x: 540, y: 522, s: 1 },
                { t: 'isadora', x: 700, y: 522, s: 1 }
              ],
              sfx: [{ t: 'ON FAIT UNE CABANE !', x: 420, y: 166, fs: 26, rot: -4, color: '#7ac6a8' }]
            },
            text: "« On fait une cabane », dit Livia. Les quatre étaient d'accord. C'était la dernière fois de la journée qu'elles seraient toutes d'accord."
          },
          {
            scene: {
              bg: 'forest',
              items: [
                { t: 'roxane', x: 200, y: 522, s: 1.05, pose: 'point' },
                { t: 'juliette', x: 420, y: 522, s: 1.05, pose: 'point' },
                { t: 'isadora', x: 640, y: 522, s: 1.05, pose: 'point' }
              ],
              bubbles: [{ x: 60, y: 26, w: 300, t: 'Non ! Sous le grand arbre !', tx: 210, ty: 246 }]
            },
            text: "Roxane voulait la cabane sous le grand arbre. Juliette la voulait près du banc. Isadora, elle, la voulait ronde. Chacune expliqua pourquoi elle avait raison, en même temps."
          },
          {
            scene: {
              bg: 'forest',
              items: [
                { t: 'livia', x: 400, y: 524, s: 1.2, pose: 'shrug', mood: 'sad' }
              ],
              sfx: [{ t: 'BLA BLA BLA BLA', x: 400, y: 168, fs: 28, rot: -5, color: '#6d5847' }]
            },
            text: "Au bout d'un moment, il n'y avait toujours pas de cabane. Il y avait juste beaucoup de mots. Livia regarda le tas de branches, qui n'avait pas bougé d'un centimètre."
          },
          {
            scene: {
              bg: 'forest',
              items: [
                { t: 'livia', x: 250, y: 524, s: 1.05, pose: 'point' },
                { t: 'roxane', x: 460, y: 522, s: 1 },
                { t: 'juliette', x: 660, y: 522, s: 1 }
              ],
              bubbles: [{ x: 300, y: 24, w: 330, t: 'On vote. Chacune une voix.', tx: 260, ty: 240 }]
            },
            text: "« On vote », dit Livia. « Chacune une voix, et on prend celle qui en a le plus. » Personne n'avait jamais essayé. Ça parut étrange, puis raisonnable."
          },
          {
            scene: {
              bg: 'forest',
              back: [{ t: 'cabane', x: 420, y: 524, s: 1.7 }],
              items: [
                { t: 'roxane', x: 200, y: 522, s: 1, pose: 'hold' },
                { t: 'juliette', x: 400, y: 522, s: 1, pose: 'hold' },
                { t: 'isadora', x: 590, y: 522, s: 1, pose: 'hold' },
                { t: 'livia', x: 726, y: 524, s: .95, pose: 'hold' }
              ],
              sfx: [{ t: 'HOP ! HOP !', x: 420, y: 162, fs: 30, rot: -6, color: '#a9773f' }]
            },
            text: "Le grand arbre gagna, par deux voix contre une contre une. La cabane fut construite en quarante minutes, ce qui est beaucoup moins long que de discuter."
          },
          {
            scene: {
              bg: 'forest', time: 'sunset',
              back: [{ t: 'cabane', x: 400, y: 530, s: 1.9 }],
              items: [
                { t: 'roxane', x: 270, y: 508, s: .85, pose: 'sit' },
                { t: 'livia', x: 410, y: 506, s: .9, pose: 'sit' },
                { t: 'juliette', x: 550, y: 506, s: .85, pose: 'sit' }
              ]
            },
            text: "Elles s'installèrent dedans. Isadora fit remarquer qu'elle était quand même un peu ronde, la cabane. Tout le monde dit que oui, pour lui faire plaisir. Et c'était un peu vrai."
          }
        ]
      },

      /* ---------- 6 ---------- */
      {
        id: 'pas-gentille',
        title: 'Le jour où Livia n\'a pas été gentille',
        subtitle: 'Réparer, c\'est plus que dire pardon',
        tag: 'Copines',
        themes: ['Amitié', 'Grandir'],
        minutes: 5,
        cover: {
          bg: 'village',
          items: [
            { t: 'livia', x: 300, y: 524, s: 1.05, mood: 'sad' },
            { t: 'isadora', x: 520, y: 522, s: 1.05, mood: 'sad' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'roxane', x: 240, y: 522, s: 1.05 },
                { t: 'livia', x: 460, y: 524, s: 1.05, pose: 'point' },
                { t: 'isadora', x: 660, y: 522, s: 1, mood: 'sad' }
              ],
              sfx: [{ t: 'HÉHÉHÉ…', x: 380, y: 166, fs: 30, rot: -6, color: '#e0453c' }]
            },
            text: "Isadora avait mis un chapeau un peu bizarre. Roxane fit une grimace. Livia rit, et dit quelque chose de moqueur. Ce n'était pas très méchant. C'était quand même méchant."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'isadora', x: 400, y: 522, s: 1.2, mood: 'sad' }
              ],
              sfx: [{ t: '. . .', x: 400, y: 176, fs: 32, rot: 0, color: '#8a7768' }]
            },
            text: "Isadora ne dit rien. Elle enleva son chapeau et le mit dans son sac. Puis elle alla jouer toute seule, très loin, avec le dos très droit."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'roxane', x: 280, y: 522, s: 1.05 },
                { t: 'livia', x: 520, y: 524, s: 1.05, mood: 'sad' }
              ],
              sfx: [{ t: 'HA HA !', x: 300, y: 168, fs: 30, rot: -5, color: '#c9b9a8' }]
            },
            text: "Roxane riait encore. Livia, elle, avait quelque chose de lourd dans le ventre. Le rire était fini depuis longtemps, et la chose lourde restait."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 300, y: 524, s: 1.05, mood: 'sad' },
                { t: 'isadora', x: 540, y: 522, s: 1.05, mood: 'sad' }
              ],
              bubbles: [{ x: 60, y: 24, w: 300, t: 'Pardon. C\'était nul.', tx: 300, ty: 240 }]
            },
            text: "Livia traversa la cour. C'était très long, cette cour. « Pardon », dit-elle. « C'était nul, ce que j'ai dit. » Isadora haussa une épaule, ce qui ne veut pas dire oui."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 300, y: 524, s: 1.05, pose: 'hold' },
                { t: 'isadora', x: 540, y: 522, s: 1.05, hat: '#f2a0c2' }
              ],
              sfx: [{ t: 'ET HOP !', x: 420, y: 166, fs: 30, rot: -6, color: '#f7c518' }]
            },
            text: "Alors Livia sortit le chapeau du sac et le remit sur la tête d'Isadora. Puis elle demanda où on en trouvait un pareil, parce qu'elle en voulait un aussi. Ça, ce n'était plus des mots."
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'roxane', x: 230, y: 522, s: 1, hat: '#e0453c' },
                { t: 'livia', x: 420, y: 524, s: 1.05, hat: '#3ec9c9' },
                { t: 'isadora', x: 620, y: 522, s: 1, hat: '#f2a0c2' }
              ]
            },
            text: "Le lendemain, elles avaient toutes les trois un chapeau bizarre. Roxane trouva ça très laid. Elle en mit un quand même. C'est ça, réparer."
          }
        ]
      },

      /* ---------- 7 : prêter ce à quoi on tient ---------- */
      {
        id: 'prete-doudou',
        title: 'Prêter son doudou',
        subtitle: 'Prêter ce qui compte le plus',
        tag: 'Copines',
        themes: ['Partager', 'Amitié'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'livia', x: 300, y: 508, s: 1.05, pose: 'hold' },
            { t: 'isadora', x: 520, y: 506, s: 1, mood: 'sad' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 508, s: 1.2, pose: 'hold' }
              ],
              sfx: [{ t: 'MON DOUDOU', x: 400, y: 150, fs: 30, rot: -5, color: '#f2a0c2' }]
            },
            text: "Livia a un doudou. Il est gris, il sent la maison, et il ne va jamais nulle part sans elle. C'est la seule chose au monde qu'elle ne prête à personne."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'isadora', x: 300, y: 506, s: 1.05, mood: 'sad' },
                { t: 'livia', x: 540, y: 508, s: 1.05 }
              ],
              sfx: [{ t: 'LA SIESTE…', x: 420, y: 148, fs: 28, rot: -4, color: '#8a7768' }]
            },
            text: "Ce jour-là, Isadora dormait chez Livia. À l'heure de la sieste, elle s'assit sur le matelas sans rien dire. Elle avait oublié son doudou à elle, à la maison."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 508, s: 1.2, mood: 'sad', pose: 'hold' }
              ],
              sfx: [{ t: 'MMMH…', x: 400, y: 152, fs: 32, rot: -5, color: '#6d5847' }]
            },
            text: "Livia serra son doudou plus fort. Elle pensa : elle n'a qu'à dormir sans. Puis elle pensa : moi, je ne pourrais pas. Les deux pensées se battirent un moment."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 508, s: 1.1, pose: 'point' },
                { t: 'isadora', x: 540, y: 506, s: 1.05, mood: 'wow' }
              ],
              bubbles: [{ x: 60, y: 22, w: 330, t: 'Tu peux le prendre. Mais il revient après.', tx: 300, ty: 236 }]
            },
            text: "« Tu peux le prendre », dit Livia. « Mais il revient après. » Isadora hocha la tête très vite, comme on promet une chose extrêmement sérieuse."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'isadora', x: 300, y: 506, s: 1.05, mood: 'sleep' },
                { t: 'livia', x: 540, y: 508, s: 1.05, mood: 'sleep' }
              ],
              sfx: [{ t: 'ZZZ…', x: 430, y: 154, fs: 30, rot: -6, color: '#a98cf0' }]
            },
            text: "Isadora s'endormit en trois minutes. Livia, elle, mit plus longtemps. Elle regarda le plafond, les bras vides. Puis elle s'endormit quand même, ce qui la surprit beaucoup."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'isadora', x: 300, y: 506, s: 1.05, pose: 'hold' },
                { t: 'livia', x: 540, y: 508, s: 1.1, pose: 'hold' }
              ],
              sfx: [{ t: 'TIENS !', x: 420, y: 150, fs: 30, rot: -5, color: '#f7c518' }]
            },
            text: "Au réveil, Isadora lui rendit le doudou avant même de dire bonjour. Il sentait un peu Isadora, maintenant. Livia trouva que ce n'était pas si grave."
          }
        ]
      },

      /* ---------- 8 : les règles du jeu ---------- */
      {
        id: 'regles-du-jeu',
        title: 'Les règles du jeu',
        subtitle: 'On les dit avant, pas pendant',
        tag: 'Copines',
        themes: ['Règles', 'Amitié'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'roxane', x: 260, y: 522, s: 1.05, pose: 'point' },
            { t: 'livia', x: 470, y: 524, s: 1.05, mood: 'sad' },
            { t: 'juliette', x: 660, y: 522, s: 1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'roxane', x: 220, y: 522, s: 1.05, pose: 'point' },
                { t: 'livia', x: 430, y: 524, s: 1.05 },
                { t: 'juliette', x: 640, y: 522, s: 1 }
              ],
              front: [{ t: 'ball', x: 540, y: 540, s: .8 }],
              sfx: [{ t: 'ON JOUE À CHAT !', x: 400, y: 166, fs: 28, rot: -5, color: '#7ac6a8' }]
            },
            text: "« On joue à chat ! » dit Roxane. Tout le monde était d'accord. Personne n'avait dit les règles, parce que tout le monde croyait les connaître."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 250, y: 524, s: 1.05, pose: 'run' },
                { t: 'roxane', x: 560, y: 522, s: 1.05, pose: 'run' }
              ],
              sfx: [{ t: 'ATTRAPÉE !', x: 420, y: 164, fs: 32, rot: -7, color: '#e0453c' }]
            },
            text: "Livia courut très vite et toucha Roxane dans le dos. « Attrapée ! » cria-t-elle. C'était clair, c'était net, et c'était très satisfaisant."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'roxane', x: 280, y: 522, s: 1.1, pose: 'point' },
                { t: 'livia', x: 560, y: 524, s: 1.05, mood: 'wow' }
              ],
              bubbles: [{ x: 60, y: 24, w: 330, t: 'Non ! L\'arbre, c\'est la maison !', tx: 285, ty: 240 }]
            },
            text: "« Non ! » dit Roxane. « J'étais près de l'arbre, et l'arbre c'est la maison ! » Personne n'avait jamais parlé d'un arbre. L'arbre venait d'apparaître dans le jeu."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'juliette', x: 230, y: 522, s: 1, mood: 'sad' },
                { t: 'livia', x: 450, y: 524, s: 1.05, mood: 'sad' },
                { t: 'roxane', x: 660, y: 522, s: 1, mood: 'sad' }
              ],
              sfx: [{ t: 'C\'EST PAS JUSTE !', x: 400, y: 164, fs: 28, rot: -6, color: '#6d5847' }]
            },
            text: "Alors ce fut le banc, puis le portail, puis le bac à sable. À chaque fois que Roxane allait être attrapée, un nouvel endroit devenait la maison. Le jeu s'arrêta tout seul."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 524, s: 1.1, pose: 'point' },
                { t: 'roxane', x: 560, y: 522, s: 1.05 }
              ],
              bubbles: [{ x: 320, y: 22, w: 340, t: 'On dit les règles avant. Après, on n\'en change plus.', tx: 320, ty: 236 }]
            },
            text: "« On dit les règles avant », dit Livia. « Après, on n'en change plus, même quand ça nous arrange. » Roxane répondit que c'était nul. Elle savait très bien que c'était vrai."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'roxane', x: 220, y: 522, s: 1, pose: 'run' },
                { t: 'juliette', x: 430, y: 522, s: 1, pose: 'run' },
                { t: 'livia', x: 650, y: 524, s: 1.05, pose: 'run' }
              ],
              sfx: [{ t: 'LA MAISON, C\'EST LE BANC !', x: 400, y: 160, fs: 24, rot: -4, color: '#f7c518' }]
            },
            text: "Elles recommencèrent. Cette fois, la maison c'était le banc, et rien d'autre, et tout le monde l'avait dit à voix haute. Le jeu dura jusqu'à la nuit."
          }
        ]
      },

      /* ---------- 9 : prêter à quelqu'un qui casse ---------- */
      {
        id: 'jouet-casse',
        title: 'Le jouet cassé',
        subtitle: 'Prêter, et que ça finisse mal',
        tag: 'Copines',
        themes: ['Partager', 'Amitié'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'livia', x: 300, y: 510, s: 1.1, mood: 'sad' },
            { t: 'juliette', x: 540, y: 508, s: 1.05, mood: 'sad' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 510, s: 1.15, pose: 'hold' },
                { t: 'juliette', x: 560, y: 508, s: 1.1, pose: 'point' }
              ],
              sfx: [{ t: 'JE PEUX ?', x: 430, y: 146, fs: 30, rot: -5, color: '#a98cf0' }]
            },
            text: "Livia avait une boîte à musique. On tournait la clé, et une danseuse tournait aussi. C'était sa plus belle chose. Juliette demanda si elle pouvait la prendre."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 510, s: 1.15, mood: 'sad' },
                { t: 'juliette', x: 560, y: 508, s: 1.1, pose: 'hold' }
              ],
              sfx: [{ t: 'DOUCEMENT…', x: 430, y: 146, fs: 28, rot: -4, color: '#6d5847' }]
            },
            text: "Livia hésita. Elle dit oui quand même, en ajoutant « fais attention » trois fois de suite, ce qui ne sert à rien mais qu'on dit toujours."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'juliette', x: 320, y: 508, s: 1.1, mood: 'wow' },
                { t: 'livia', x: 580, y: 510, s: 1.15, mood: 'wow' }
              ],
              sfx: [{ t: 'CRAAAC !', x: 430, y: 144, fs: 36, rot: -8, color: '#e0453c' }]
            },
            text: "La boîte glissa. Elle tomba sur le carrelage. La danseuse partit d'un côté, la clé de l'autre, et la musique s'arrêta au milieu d'une note."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 510, s: 1.2, mood: 'sad' },
                { t: 'juliette', x: 570, y: 508, s: 1.1, mood: 'sad' }
              ],
              sfx: [{ t: 'JE T\'AVAIS DIT !', x: 430, y: 144, fs: 30, rot: -6, color: '#e0453c' }]
            },
            text: "Livia cria. Elle dit des choses très fortes, du genre « je t'avais dit » et « c'est de ta faute ». Juliette ne répondit rien. Elle regardait les morceaux par terre."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 492, s: 1.4, pose: 'sit' },
                { t: 'livia', x: 570, y: 494, s: 1.15, pose: 'sit', mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 22, w: 350, t: 'Elle est cassée. Ça, c\'est vrai. Et Juliette pleure.', tx: 305, ty: 236 }]
            },
            text: "Maman ne dit pas que ce n'était pas grave. « Elle est cassée », dit-elle. « Ça, c'est vrai, et tu as le droit d'être triste. Et pendant ce temps-là, Juliette pleure dans le couloir. »"
          },
          {
            scene: {
              bg: 'bedroom', time: 'sunset',
              items: [
                { t: 'livia', x: 300, y: 510, s: 1.15, pose: 'hold' },
                { t: 'juliette', x: 560, y: 508, s: 1.1, pose: 'hold' }
              ],
              sfx: [{ t: 'ON LA RECOLLE ?', x: 430, y: 146, fs: 28, rot: -5, color: '#f7c518' }]
            },
            text: "Elles recollèrent la danseuse ensemble. Elle penche un peu, maintenant, et la musique saute une note. Livia dit que c'est comme ça qu'elle la préfère. Ce n'est pas tout à fait vrai, et c'est un peu vrai."
          }
        ]
      },

      /* ---------- 10 : la règle qui protège les autres ---------- */
      {
        id: 'bibliotheque',
        title: 'À la bibliothèque',
        subtitle: 'Chuchoter, même quand on a envie de crier',
        tag: 'Copines',
        themes: ['Règles', 'Amitié'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          back: [{ t: 'etagere', x: 620, y: 400, s: 1.2 }],
          items: [
            { t: 'livia', x: 280, y: 510, s: 1.1 },
            { t: 'roxane', x: 480, y: 508, s: 1.05, pose: 'point' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              back: [{ t: 'etagere', x: 640, y: 396, s: 1.2 }],
              items: [
                { t: 'livia', x: 260, y: 510, s: 1.15, mood: 'wow' },
                { t: 'roxane', x: 480, y: 508, s: 1.1, mood: 'wow' }
              ],
              sfx: [{ t: 'DES LIVRES PARTOUT !', x: 400, y: 146, fs: 26, rot: -4, color: '#4a7fc1' }]
            },
            text: "La bibliothèque du village a trois murs de livres et un tapis rond. Livia et Roxane y allèrent le mercredi. Il y avait plus de livres que dans toutes leurs chambres réunies."
          },
          {
            scene: {
              bg: 'bedroom',
              back: [{ t: 'etagere', x: 660, y: 396, s: 1.1 }],
              items: [
                { t: 'livia', x: 280, y: 510, s: 1.15, pose: 'point' },
                { t: 'roxane', x: 540, y: 508, s: 1.1, pose: 'armsup' }
              ],
              sfx: [{ t: 'REGARDE CELUI-LÀ !!', x: 420, y: 146, fs: 28, rot: -5, color: '#e0453c' }]
            },
            text: "Livia trouva un livre avec un dragon. Elle cria le nom du dragon. Roxane cria encore plus fort qu'elle connaissait ce dragon. Toutes les têtes se levèrent en même temps."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mamie', x: 300, y: 508, s: 1.25, pose: 'point' },
                { t: 'livia', x: 570, y: 510, s: 1.15, mood: 'sad' }
              ],
              sfx: [{ t: 'CHUUUUT.', x: 430, y: 146, fs: 32, rot: -5, color: '#8a7768' }]
            },
            text: "La dame de la bibliothèque leva un doigt. « Chut. » Livia trouva ça injuste : elle ne faisait rien de mal, elle était juste contente, et être contente n'est pas interdit."
          },
          {
            scene: {
              bg: 'bedroom',
              back: [{ t: 'etagere', x: 680, y: 396, s: 1 }],
              items: [
                { t: 'mamie', x: 280, y: 496, s: 1.2, pose: 'sit' },
                { t: 'livia', x: 560, y: 496, s: 1.15, pose: 'sit' }
              ],
              bubbles: [{ x: 300, y: 22, w: 350, t: 'Ici, chacun est dans son histoire. On ne rentre pas dedans.', tx: 305, ty: 236 }]
            },
            text: "La dame s'accroupit à sa hauteur. « Ici, chacun est dans son histoire », dit-elle. « Quand tu cries, tu entres dans l'histoire des autres sans frapper. »"
          },
          {
            scene: {
              bg: 'bedroom',
              back: [{ t: 'etagere', x: 660, y: 396, s: 1.1 }],
              items: [
                { t: 'livia', x: 300, y: 496, s: 1.15, pose: 'sit' },
                { t: 'roxane', x: 560, y: 494, s: 1.1, pose: 'sit' }
              ],
              sfx: [{ t: 'psst… le dragon…', x: 430, y: 150, fs: 24, rot: -3, color: '#4a7fc1' }]
            },
            text: "Alors elles s'assirent sur le tapis, tout près l'une de l'autre, et se racontèrent le dragon en chuchotant. Chuchoter rend les histoires beaucoup plus secrètes, donc beaucoup mieux."
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'livia', x: 300, y: 522, s: 1.15, pose: 'hold' },
                { t: 'roxane', x: 560, y: 522, s: 1.1, pose: 'hold' }
              ],
              sfx: [{ t: 'AAAAH !!! LE DRAGON !!!', x: 430, y: 166, fs: 26, rot: -6, color: '#e0453c' }]
            },
            text: "Dehors, sur le trottoir, elles crièrent le nom du dragon aussi fort qu'elles voulaient. Une règle qui s'arrête à la porte, c'est une règle qu'on veut bien suivre."
          }
        ]
      },

      /* ---------- 11 : la jalousie du bébé ---------- */
      {
        id: 'tout-pour-pablo',
        title: 'Tout le monde regarde Pablo',
        subtitle: 'Quand un bébé prend toute la place',
        tag: 'Copines',
        themes: ['Émotions', 'Famille'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'roxane', x: 250, y: 508, s: 1.05 },
            { t: 'pablo', x: 440, y: 512, s: 1.1, pose: 'wave' },
            { t: 'livia', x: 640, y: 510, s: 1.1, mood: 'sad' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 510, s: 1.15, pose: 'wave' },
                { t: 'roxane', x: 540, y: 508, s: 1.1, pose: 'wave' }
              ],
              sfx: [{ t: 'ON JOUE AU MAGASIN !', x: 430, y: 146, fs: 26, rot: -4, color: '#3ec9c9' }]
            },
            text: "Roxane et Isadora venaient jouer. Livia avait tout préparé : le magasin, la caisse, les fausses pièces. Elle attendait ce mercredi depuis lundi."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'roxane', x: 250, y: 508, s: 1.1, mood: 'wow' },
                { t: 'pablo', x: 450, y: 512, s: 1.1, pose: 'wave' },
                { t: 'isadora', x: 650, y: 508, s: 1.1, mood: 'wow' }
              ],
              sfx: [{ t: 'OOOH, IL EST TROP MIGNON !', x: 420, y: 146, fs: 24, rot: -4, color: '#f2a0c2' }]
            },
            text: "Puis Pablo entra. « Oooh ! » firent les deux copines. Et pendant une heure entière, il n'y eut plus de magasin, plus de caisse, plus de fausses pièces. Il n'y eut que Pablo."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 510, s: 1.25, mood: 'sad' }
              ],
              sfx: [{ t: 'ET MOI ?', x: 400, y: 146, fs: 32, rot: -6, color: '#6d5847' }]
            },
            text: "Livia resta debout à côté du magasin. Elle avait dans le ventre quelque chose de piquant qui n'était pas de la tristesse et pas tout à fait de la colère non plus."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 510, s: 1.2, mood: 'fache' },
                { t: 'pablo', x: 560, y: 512, s: 1.1, mood: 'sad' }
              ],
              sfx: [{ t: 'VA-T\'EN, TOI !', x: 430, y: 146, fs: 30, rot: -6, color: '#e0453c' }]
            },
            text: "Alors elle poussa Pablo. Pas très fort. Assez pour qu'il tombe sur les fesses et qu'il pleure. Et à la seconde où il pleura, Livia sut qu'elle avait fait une bêtise."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'mummy', x: 300, y: 494, s: 1.4, pose: 'sit' },
                { t: 'livia', x: 570, y: 496, s: 1.15, pose: 'sit', mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 22, w: 350, t: 'Tu es jalouse. Ça a un nom, et ça arrive à tout le monde.', tx: 305, ty: 236 }]
            },
            text: "Maman l'emmena dans la chambre. « Ce que tu as là », dit-elle en montrant son ventre, « ça s'appelle la jalousie. Ça arrive à tout le monde. Pousser, non. Le dire, oui. »"
          },
          {
            scene: {
              bg: 'bedroom', time: 'sunset',
              items: [
                { t: 'roxane', x: 240, y: 508, s: 1.05 },
                { t: 'livia', x: 450, y: 510, s: 1.15, pose: 'point' },
                { t: 'isadora', x: 660, y: 508, s: 1.05 }
              ],
              bubbles: [{ x: 300, y: 22, w: 340, t: 'Vous venez ? Le magasin ouvre.', tx: 450, ty: 236 }]
            },
            text: "Livia retourna voir ses copines et leur dit, à voix haute : « Le magasin ouvre. » Elles arrivèrent en courant. Il suffisait de le demander, ce qui est fou quand on y pense."
          }
        ]
      },

      /* ---------- 12 : la peur du noir ---------- */
      {
        id: 'peur-du-noir',
        title: 'La nuit chez Livia',
        subtitle: 'Avoir peur, sans que personne ne se moque',
        tag: 'Copines',
        themes: ['Émotions', 'Amitié'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'juliette', x: 300, y: 508, s: 1.1, mood: 'sad' },
            { t: 'livia', x: 540, y: 510, s: 1.15 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 510, s: 1.15, pose: 'armsup' },
                { t: 'juliette', x: 560, y: 508, s: 1.1, pose: 'armsup' }
              ],
              sfx: [{ t: 'ON DORT ENSEMBLE !', x: 430, y: 146, fs: 26, rot: -5, color: '#a98cf0' }]
            },
            text: "Juliette dormait chez Livia pour la première fois. Elles avaient un matelas par terre, deux lampes de poche et l'autorisation de parler jusqu'à huit heures et demie."
          },
          {
            scene: {
              bg: 'bedroom', time: 'night',
              items: [
                { t: 'juliette', x: 300, y: 508, s: 1.1, mood: 'sad' },
                { t: 'livia', x: 560, y: 510, s: 1.15, mood: 'sleep' }
              ],
              sfx: [{ t: 'CLIC.', x: 430, y: 146, fs: 30, rot: -5, color: '#bfe8f7' }]
            },
            text: "À huit heures et demie, Maman éteignit. La chambre devint noire d'un coup. Livia bâilla. Juliette, elle, se raidit complètement sous la couverture."
          },
          {
            scene: {
              bg: 'bedroom', time: 'night',
              items: [
                { t: 'juliette', x: 400, y: 508, s: 1.25, mood: 'sad' }
              ],
              sfx: [{ t: 'ET SI…', x: 400, y: 146, fs: 32, rot: -5, color: '#8a7768' }]
            },
            text: "Dans le noir, le portemanteau devenait quelqu'un. Le rideau bougeait tout seul. Juliette connaissait son secret par cœur : elle a encore peur du noir, et elle a honte de l'avoir."
          },
          {
            scene: {
              bg: 'bedroom', time: 'night',
              items: [
                { t: 'livia', x: 300, y: 510, s: 1.15, pose: 'point' },
                { t: 'juliette', x: 560, y: 508, s: 1.1, mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 22, w: 340, t: 'Tu veux la petite lumière ? Moi je la garde aussi.', tx: 305, ty: 236 }]
            },
            text: "Livia sentit qu'elle ne dormait pas. Elle ne dit pas « n'aie pas peur ». Elle dit : « Tu veux la petite lumière ? Moi aussi je la garde, des fois. » Ce n'était même pas un mensonge."
          },
          {
            scene: {
              bg: 'bedroom', time: 'night',
              back: [{ t: 'lantern', x: 660, y: 300, s: 1 }],
              items: [
                { t: 'livia', x: 300, y: 496, s: 1.15, pose: 'sit' },
                { t: 'juliette', x: 550, y: 494, s: 1.1, pose: 'sit' }
              ],
              sfx: [{ t: 'C\'EST LE MANTEAU.', x: 420, y: 148, fs: 26, rot: -4, color: '#f7c518' }]
            },
            text: "Elles allumèrent la veilleuse et firent le tour de la chambre. Le monsieur était un manteau. Le monstre était une chaise. Le noir garde beaucoup moins de secrets quand on le visite."
          },
          {
            scene: {
              bg: 'bedroom', time: 'night',
              items: [
                { t: 'juliette', x: 300, y: 496, s: 1.1, pose: 'sit', mood: 'sleep' },
                { t: 'livia', x: 550, y: 496, s: 1.15, pose: 'sit', mood: 'sleep' }
              ],
              sfx: [{ t: 'ZZZ…', x: 430, y: 150, fs: 30, rot: -6, color: '#bfe8f7' }]
            },
            text: "Elles s'endormirent la veilleuse allumée. Au matin, Juliette dit qu'elle n'avait pas eu peur du tout. Livia dit que oui, bien sûr. Les deux savaient très bien à quoi s'en tenir."
          }
        ]
      },

      /* ---------- 13 : le départ d'une amie ---------- */
      {
        id: 'demenagement',
        title: 'Isadora s\'en va',
        subtitle: 'Quand une amie part habiter loin',
        tag: 'Copines',
        themes: ['Amitié', 'Émotions'],
        minutes: 5,
        cover: {
          bg: 'village',
          items: [
            { t: 'livia', x: 300, y: 524, s: 1.1, mood: 'sad' },
            { t: 'isadora', x: 540, y: 522, s: 1.05, mood: 'sad' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'isadora', x: 300, y: 522, s: 1.1, mood: 'sad' },
                { t: 'livia', x: 560, y: 524, s: 1.15, mood: 'wow' }
              ],
              bubbles: [{ x: 60, y: 24, w: 330, t: 'On déménage. À trois heures de route.', tx: 305, ty: 240 }]
            },
            text: "Un lundi, Isadora annonça la nouvelle sur le banc de la cour. « On déménage. À trois heures de route. » Livia ne savait pas ce que ça faisait, trois heures de route."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 400, y: 524, s: 1.25, mood: 'fache' }
              ],
              sfx: [{ t: 'C\'EST NUL !', x: 400, y: 166, fs: 34, rot: -6, color: '#e0453c' }]
            },
            text: "D'abord, Livia se fâcha. Elle dit que c'était nul, qu'Isadora aurait pu refuser, qu'on ne déménage pas comme ça. Se fâcher, c'est plus facile que d'être triste."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'roxane', x: 240, y: 522, s: 1.05, mood: 'sad' },
                { t: 'isadora', x: 450, y: 522, s: 1.05, mood: 'sad' },
                { t: 'juliette', x: 660, y: 522, s: 1.05, mood: 'sad' }
              ],
              sfx: [{ t: 'PLUS QUE SIX JOURS…', x: 400, y: 166, fs: 26, rot: -4, color: '#6d5847' }]
            },
            text: "Il restait six jours. Elles les comptèrent tous les matins, ce qui était une très mauvaise idée. Chaque jour compté partait plus vite que le précédent."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 510, s: 1.15, pose: 'hold' },
                { t: 'roxane', x: 560, y: 508, s: 1.1, pose: 'hold' }
              ],
              sfx: [{ t: 'ON FABRIQUE QUOI ?', x: 430, y: 146, fs: 26, rot: -5, color: '#3ec9c9' }]
            },
            text: "Alors elles fabriquèrent quelque chose. Un carnet, avec un dessin de chacune, la maison de chacune, et une phrase de chacune écrite tout de travers."
          },
          {
            scene: {
              bg: 'road',
              items: [
                { t: 'livia', x: 260, y: 522, s: 1.1, pose: 'hold' },
                { t: 'isadora', x: 480, y: 522, s: 1.1, pose: 'hold', mood: 'sad' },
                { t: 'roxane', x: 690, y: 522, s: 1.05, mood: 'sad' }
              ],
              front: [{ t: 'car', x: 640, y: 500, s: 1 }],
              sfx: [{ t: 'AU REVOIR…', x: 400, y: 166, fs: 30, rot: -5, color: '#8a7768' }]
            },
            text: "Le samedi, la voiture était pleine. Isadora prit le carnet et le serra contre elle. Personne ne trouva de belle phrase à dire. Elles se firent un signe très longtemps."
          },
          {
            scene: {
              bg: 'bedroom', time: 'sunset',
              items: [
                { t: 'livia', x: 400, y: 496, s: 1.2, pose: 'sit' }
              ],
              sfx: [{ t: 'DRIIING !', x: 420, y: 150, fs: 30, rot: -6, color: '#f7c518' }]
            },
            text: "Le dimanche soir, le téléphone sonna. C'était Isadora, qui voulait décrire sa nouvelle chambre. Habiter loin, ce n'est pas la même chose que disparaître."
          }
        ]
      },

      /* ---------- 14 : Maman est en retard ---------- */
      {
        id: 'maman-en-retard',
        title: 'Maman est en retard',
        title_es: 'Mamá llega tarde',
        subtitle: 'Attendre quand on ne sait pas combien de temps',
        subtitle_es: 'Esperar sin saber cuánto tiempo',
        tag: 'Copines',
        themes: ['Famille', 'Émotions'],
        minutes: 5,
        cover: {
          bg: 'village',
          items: [
            { t: 'livia', x: 320, y: 524, s: 1.1, mood: 'sad' },
            { t: 'maman', x: 560, y: 522, s: 1.2 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 300, y: 524, s: 1.1 },
                { t: 'roxane', x: 540, y: 522, s: 1.05, pose: 'wave' }
              ],
              sfx: [{ t: 'À DEMAIN !', x: 430, y: 166, fs: 28, rot: -5, color: '#7ac6a8' }]
            },
            text: "À la sortie de l'école, les enfants partent les uns après les autres. Roxane partit en courant vers son papa. Puis Juliette. Puis tous les autres.",
            es: "A la salida del colegio, los niños se van uno detrás de otro. Roxane salió corriendo hacia su papá. Luego Juliette. Luego todos los demás."
          },
          {
            scene: {
              bg: 'village',
              items: [{ t: 'livia', x: 400, y: 524, s: 1.2, mood: 'sad' }],
              sfx: [{ t: '. . .', x: 400, y: 172, fs: 34, rot: 0, color: '#8a7768' }]
            },
            text: "Livia resta seule devant le portail. Le trottoir était vide. Elle regarda le bout de la rue, très fort, comme si regarder pouvait faire apparaître une voiture.",
            es: "Livia se quedó sola delante de la verja. La acera estaba vacía. Miró el final de la calle, muy fuerte, como si mirar pudiera hacer aparecer un coche."
          },
          {
            scene: {
              bg: 'village',
              items: [{ t: 'livia', x: 400, y: 500, s: 1.2, pose: 'sit', mood: 'sad' }],
              sfx: [{ t: 'ET SI ELLE M\'AVAIT OUBLIÉE ?', x: 400, y: 166, fs: 22, rot: -4, color: '#6d5847' }]
            },
            text: "Dans sa tête, une petite phrase commença à tourner : « et si elle m'avait oubliée ? » Elle savait que c'était idiot. Ça tournait quand même, de plus en plus vite.",
            es: "En su cabeza empezó a dar vueltas una frasecita: «¿y si se ha olvidado de mí?». Sabía que era una tontería. Pero daba vueltas igual, cada vez más deprisa."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'mamie', x: 300, y: 508, s: 1.2, pose: 'sit' },
                { t: 'livia', x: 560, y: 500, s: 1.1, pose: 'sit', mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 22, w: 350, t: 'On compte les voitures rouges en attendant ?', tx: 305, ty: 236 }]
            },
            text: "La maîtresse vint s'asseoir à côté d'elle. Elle ne dit pas « ne t'inquiète pas ». Elle dit : « On compte les voitures rouges en attendant ? » Livia en compta quatre.",
            es: "La maestra se sentó a su lado. No dijo «no te preocupes». Dijo: «¿Contamos los coches rojos mientras esperamos?» Livia contó cuatro."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'maman', x: 300, y: 522, s: 1.25, pose: 'armsup', mood: 'wow' },
                { t: 'livia', x: 570, y: 524, s: 1.1, pose: 'armsup' }
              ],
              sfx: [{ t: 'ME VOILÀ !', x: 430, y: 164, fs: 32, rot: -6, color: '#d4622c' }]
            },
            text: "À la cinquième voiture rouge, Maman arriva en courant, décoiffée, avec des excuses plein la bouche. Livia lui sauta dessus sans écouter un seul mot de ses excuses.",
            es: "En el quinto coche rojo, mamá llegó corriendo, despeinada, con la boca llena de disculpas. Livia se le echó encima sin escuchar ni una sola de sus disculpas."
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'maman', x: 320, y: 522, s: 1.25, pose: 'hold' },
                { t: 'livia', x: 570, y: 524, s: 1.1, pose: 'hold' }
              ],
              bubbles: [{ x: 300, y: 22, w: 340, t: 'Je viens toujours. Même en retard.', tx: 320, ty: 236 }]
            },
            text: "Sur le chemin, Maman dit : « Je viens toujours. Même en retard, je viens toujours. » Livia rangea cette phrase quelque part, et la ressortit chaque fois qu'il le fallut.",
            es: "De camino, mamá dijo: «Yo siempre vengo. Aunque llegue tarde, siempre vengo.» Livia guardó esa frase en algún sitio, y la sacó cada vez que hizo falta."
          }
        ]
      },

      /* ---------- 15 : la cuisine de Papa ---------- */
      {
        id: 'papa-cuisine',
        title: 'Le gâteau de Papa',
        title_es: 'El pastel de papá',
        subtitle: 'À quatre mains, c\'est plus salissant et plus rigolo',
        subtitle_es: 'A cuatro manos, se mancha más y es más divertido',
        tag: 'Copines',
        themes: ['Famille', 'Partager', 'Bêtises'],
        minutes: 5,
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'papa', x: 280, y: 508, s: 1 },
            { t: 'livia', x: 500, y: 510, s: 1.1 },
            { t: 'roxane', x: 680, y: 508, s: 1.05 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'papa', x: 300, y: 508, s: 1.05, pose: 'point' },
                { t: 'livia', x: 560, y: 510, s: 1.1 }
              ],
              sfx: [{ t: 'ON FAIT UN GÂTEAU !', x: 430, y: 146, fs: 26, rot: -4, color: '#f2803d' }]
            },
            text: "« On fait un gâteau », annonça Papa en remontant ses manches. Sur son bras, le tatouage se plissa. Livia sortit le grand saladier, celui des grandes occasions.",
            es: "«Vamos a hacer un pastel», anunció papá subiéndose las mangas. En su brazo, el tatuaje se arrugó. Livia sacó el bol grande, el de las grandes ocasiones."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'papa', x: 260, y: 508, s: 1.05, pose: 'hold' },
                { t: 'livia', x: 480, y: 510, s: 1.1, pose: 'hold' },
                { t: 'roxane', x: 690, y: 508, s: 1.05, pose: 'hold' }
              ],
              sfx: [{ t: 'MOI ! MOI !', x: 430, y: 146, fs: 30, rot: -5, color: '#e0453c' }]
            },
            text: "Roxane était venue jouer. Deux enfants, un saladier, une cuillère en bois. « Moi ! Moi ! » dirent les deux en même temps, ce qui n'aide jamais personne.",
            es: "Roxane había venido a jugar. Dos niñas, un bol, una cuchara de madera. «¡Yo! ¡Yo!», dijeron las dos a la vez, lo cual nunca ayuda a nadie."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'papa', x: 300, y: 508, s: 1.05, pose: 'shrug' },
                { t: 'livia', x: 570, y: 510, s: 1.1, mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 22, w: 350, t: 'Il y a quatre choses à faire. Deux chacune.', tx: 305, ty: 236 }]
            },
            text: "Papa posa la cuillère. « Il y a quatre choses à faire », dit-il. « Casser, verser, mélanger, lécher le plat. Deux chacune. Vous choisissez dans quel ordre. »",
            es: "Papá dejó la cuchara. «Hay cuatro cosas que hacer», dijo. «Romper, verter, mezclar y rebañar el bol. Dos cada una. Vosotras elegís en qué orden.»"
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 300, y: 510, s: 1.1, mood: 'wow' },
                { t: 'roxane', x: 560, y: 508, s: 1.05, mood: 'wow' }
              ],
              sfx: [{ t: 'FLOTCH !', x: 430, y: 146, fs: 34, rot: -8, color: '#f7c518' }]
            },
            text: "Livia cassa les œufs. Un morceau de coquille tomba dedans. Roxane versa la farine trop vite, et un nuage blanc monta jusqu'au plafond. Personne ne se fâcha.",
            es: "Livia rompió los huevos. Un trocito de cáscara se cayó dentro. Roxane echó la harina demasiado rápido, y una nube blanca subió hasta el techo. Nadie se enfadó."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'papa', x: 280, y: 508, s: 1.05 },
                { t: 'livia', x: 500, y: 510, s: 1.1, pose: 'hold' },
                { t: 'roxane', x: 690, y: 508, s: 1.05, pose: 'hold' }
              ],
              sfx: [{ t: 'MIAM.', x: 430, y: 146, fs: 32, rot: -6, color: '#8a5a3b' }]
            },
            text: "Elles léchèrent le plat toutes les deux, chacune d'un côté, ce qui est la meilleure partie et tout le monde le sait. Papa fit semblant de ne pas regarder.",
            es: "Rebañaron el bol las dos, cada una por un lado, que es la mejor parte y todo el mundo lo sabe. Papá hizo como que no miraba."
          },
          {
            scene: {
              bg: 'bedroom', time: 'sunset',
              items: [
                { t: 'papa', x: 280, y: 508, s: 1.05, pose: 'hold' },
                { t: 'livia', x: 500, y: 510, s: 1.1, pose: 'hold' },
                { t: 'roxane', x: 690, y: 508, s: 1.05, pose: 'hold' }
              ]
            },
            text: "Le gâteau était un peu tordu et il craquait sous la dent, à cause de la coquille. Il fut mangé en entier. Personne n'a jamais réclamé de gâteau plus droit.",
            es: "El pastel salió un poco torcido y crujía al morderlo, por la cáscara. Se lo comieron entero. Nadie ha pedido nunca un pastel más recto."
          }
        ]
      },

      /* ---------- 16 : Isadora ne veut pas ---------- */
      {
        id: 'isadora-ne-veut-pas',
        title: 'Isadora ne veut pas jouer',
        subtitle: "Un non qui n'est pas contre toi",
        tag: 'Copines',
        themes: ['Amitié', 'Émotions'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'livia', x: 320, y: 524, s: 1.15, mood: 'sad' },
            { t: 'isadora', x: 570, y: 506, s: 1.05, pose: 'sit' }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 524, s: 1.15, pose: 'wave' },
                { t: 'isadora', x: 570, y: 506, s: 1.05, pose: 'sit' }
              ],
              sfx: [{ t: 'ISA ! ON JOUE ?', x: 430, y: 148, fs: 27, rot: -5, color: '#7ac6a8' }]
            },
            text: "Dans la cour, Isadora était assise contre le mur, toute seule, en train de regarder ses chaussures. Livia arriva en courant. « Isa ! On joue ? »"
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'isadora', x: 300, y: 506, s: 1.1, pose: 'sit' },
                { t: 'livia', x: 570, y: 524, s: 1.1, mood: 'wow' }
              ],
              bubbles: [{ x: 300, y: 22, w: 280, t: 'Non. Pas maintenant.', tx: 300, ty: 238 }]
            },
            text: "« Non », dit Isadora. « Pas maintenant. » Elle ne dit pas pourquoi, elle ne leva même pas la tête. Le non tomba sur Livia comme une porte qui se ferme sans prévenir."
          },
          {
            scene: {
              bg: 'garden',
              items: [{ t: 'livia', x: 400, y: 524, s: 1.25, mood: 'sad' }],
              sfx: [{ t: 'ELLE M\'AIME PLUS ?', x: 400, y: 148, fs: 25, rot: -4, color: '#6d5847' }]
            },
            text: "Livia s'éloigna avec une question qui pesait lourd : est-ce qu'Isadora ne l'aimait plus ? Elle repassa la matinée dans sa tête pour trouver ce qu'elle avait fait de mal. Elle ne trouva rien."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'roxane', x: 300, y: 522, s: 1.1, pose: 'shrug' },
                { t: 'livia', x: 570, y: 524, s: 1.1, mood: 'sad' }
              ],
              bubbles: [{ x: 300, y: 22, w: 340, t: 'Son chat est malade. Ça n\'a rien à voir avec toi.', tx: 310, ty: 238 }]
            },
            text: "Roxane, qui sait tout, expliqua : « son chat est malade. » Voilà. Le non n'était pas contre Livia. Il n'était même pas contre le jeu. Il était juste posé là, en attendant que ça passe."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'isadora', x: 300, y: 506, s: 1.1, pose: 'sit' },
                { t: 'livia', x: 560, y: 502, s: 1.15, pose: 'sit' }
              ],
              sfx: [{ t: '. . .', x: 430, y: 148, fs: 34, rot: 0, color: '#8a7768' }]
            },
            text: "Livia revint. Elle ne redemanda pas si on jouait. Elle s'assit contre le mur, à côté, à la bonne distance, et elle regarda ses chaussures aussi. Elles restèrent comme ça un long moment."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'isadora', x: 300, y: 522, s: 1.05, pose: 'hold' },
                { t: 'livia', x: 560, y: 524, s: 1.1, pose: 'hold' }
              ],
              sfx: [{ t: 'ON JOUE ?', x: 430, y: 148, fs: 28, rot: -5, color: '#f7c518' }]
            },
            text: "Au bout d'un temps qu'aucune des deux n'a compté, Isadora se leva et dit : « on joue ? » Il n'avait rien fallu de plus que rester assise à côté sans rien demander."
          }
        ]
      },

      /* ---------- 17 : le tour de Pablo ---------- */
      {
        id: 'le-tour-de-pablo',
        title: 'Le tour de Pablo',
        subtitle: "Le plus petit joue aussi",
        tag: 'Copines',
        themes: ['Famille', 'Partager'],
        minutes: 5,
        cover: {
          bg: 'garden',
          items: [
            { t: 'roxane', x: 260, y: 522, s: 1 },
            { t: 'livia', x: 450, y: 524, s: 1.05 },
            { t: 'pablo', x: 640, y: 528, s: 1 }
          ]
        },
        pages: [
          {
            scene: {
              bg: 'garden',
              back: [{ t: 'ball', x: 690, y: 540, s: 1 }],
              items: [
                { t: 'livia', x: 300, y: 524, s: 1.1, pose: 'point' },
                { t: 'roxane', x: 560, y: 522, s: 1.05 }
              ],
              sfx: [{ t: 'CHACUNE SON TOUR !', x: 430, y: 148, fs: 25, rot: -5, color: '#4ea8f0' }]
            },
            text: "Le jeu était simple : on lance le ballon dans le grand seau, chacune son tour, et on compte les points. Livia menait par trois à deux. Roxane contestait le premier point depuis dix minutes."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'roxane', x: 300, y: 522, s: 1.05 },
                { t: 'livia', x: 520, y: 524, s: 1.05 },
                { t: 'pablo', x: 710, y: 528, s: 1, pose: 'quatrepattes' }
              ],
              sfx: [{ t: 'BA ! BA !', x: 430, y: 148, fs: 30, rot: -5, color: '#f7c518' }]
            },
            text: "Pablo arriva à quatre pattes, à sa vitesse de bébé, qui est lente et absolument déterminée. Il montra le ballon avec toute sa main. « Ba ! Ba ! »"
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'roxane', x: 300, y: 522, s: 1.1, pose: 'shrug' },
                { t: 'livia', x: 570, y: 524, s: 1.1 }
              ],
              bubbles: [{ x: 300, y: 22, w: 340, t: 'Il va tout rater. On va plus jamais finir.', tx: 310, ty: 238 }]
            },
            text: "« Il va tout rater », dit Roxane, ce qui était rigoureusement exact. « On ne va plus jamais finir la partie. » Ça aussi, c'était vrai. Les deux filles se regardèrent."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 300, y: 524, s: 1.1, pose: 'hold' },
                { t: 'pablo', x: 560, y: 528, s: 1.05, pose: 'hold' }
              ],
              sfx: [{ t: 'ON CHANGE LA RÈGLE.', x: 430, y: 148, fs: 24, rot: -4, color: '#7ac6a8' }]
            },
            text: "« On change la règle », dit Livia. « Pablo tire de tout près. » Elle porta le seau jusqu'à trente centimètres de son frère, ce qui n'était pas du tout dans l'esprit du jeu d'origine."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'roxane', x: 280, y: 522, s: 1.05, pose: 'armsup' },
                { t: 'livia', x: 500, y: 524, s: 1.05, pose: 'armsup' },
                { t: 'pablo', x: 700, y: 528, s: 1, pose: 'armsup' }
              ],
              sfx: [{ t: 'DEDANS !!!', x: 430, y: 148, fs: 32, rot: -7, color: '#e0453c' }]
            },
            text: "Pablo poussa le ballon des deux mains. Il tomba dans le seau. Le cri que poussèrent les deux grandes fit sortir Maman sur le pas de la porte pour vérifier que personne n'était blessé."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'roxane', x: 280, y: 522, s: 1.05 },
                { t: 'livia', x: 490, y: 524, s: 1.05, pose: 'hold' },
                { t: 'pablo', x: 690, y: 528, s: 1, pose: 'hold' }
              ]
            },
            text: "La partie ne fut jamais finie et le score fut perdu. Pablo, lui, a marqué un point ce jour-là, et il ne le sait même pas. Les deux grandes, elles, s'en souviennent parfaitement."
          }
        ]
      }
    ]
  },

  /* ==========================================================
     UNIVERS 7 — LES HISTOIRES OÙ TU CHOISIS
     Chaque histoire est un petit réseau : la dernière planche d'un bloc
     propose deux boutons dessinés, et chaque bouton mène ailleurs. Tous
     les chemins font six planches — l'outil de contrôle le vérifie.
     Aucun choix n'est un piège : les quatre fins sont bonnes, elles ne
     racontent simplement pas la même chose.
     ========================================================== */
  {
    id: 'choix',
    name: 'Tu choisis !',
    tagline: "C'est Livia qui décide comment l'histoire continue",
    emoji: '🔀',
    vignette: { t: 'livia', ds: .5, dy: 178 },
    c1: '#8a79c4',
    c2: '#f7c518',
    cover: {
      bg: 'garden',
      items: [
        { t: 'cabanearbre', x: 150, y: 512, s: .62 },
        { t: 'livia', x: 420, y: 524, s: 1.15, pose: 'shrug' },
        { t: 'roxane', x: 640, y: 522, s: 1 }
      ]
    },
    stories: [

      /* ---------- 1 : la cabane ou la rivière ---------- */
      {
        id: 'cabane-ou-riviere',
        title: 'La cabane ou la rivière',
        subtitle: 'Une règle, un jardin, et deux chemins',
        tag: 'Tu choisis',
        themes: ['Règles', 'Dehors'],
        minutes: 6,
        debut: 'depart',
        cover: {
          bg: 'garden',
          items: [
            { t: 'cabanearbre', x: 180, y: 496, s: .85 },
            { t: 'livia', x: 460, y: 524, s: 1.15 },
            { t: 'roxane', x: 660, y: 522, s: 1.05 }
          ]
        },
        blocs: {

          depart: {
            pages: [
              {
                scene: {
                  bg: 'garden',
                  items: [
                    { t: 'mamie', x: 280, y: 522, s: 1.15, pose: 'point' },
                    { t: 'livia', x: 520, y: 524, s: 1.1 },
                    { t: 'roxane', x: 700, y: 522, s: 1 }
                  ],
                  bubbles: [{ x: 40, y: 22, w: 360, t: "Partout où vous voulez. Sauf au bord de l'eau sans un grand.", tx: 290, ty: 240 }]
                },
                text: "Chez Mamie, le jardin descend jusqu'à la rivière. « Partout où vous voulez », dit Mamie. « Sauf au bord de l'eau sans un grand. » Puis elle rentra faire des crêpes."
              },
              {
                scene: {
                  bg: 'garden',
                  items: [
                    { t: 'livia', x: 300, y: 524, s: 1.15, pose: 'shrug' },
                    { t: 'roxane', x: 560, y: 522, s: 1.05 }
                  ],
                  sfx: [{ t: 'ON VA OÙ ?', x: 430, y: 150, fs: 30, rot: -5, color: '#8a79c4' }]
                },
                text: "Les voilà toutes les deux au milieu de l'herbe. D'un côté, la vieille cabane dans le grand arbre. De l'autre, le bruit de l'eau, tout en bas. Alors ? On va où ?",
                choix: {
                  options: [
                    { v: 'cabanearbre', mot: 'La cabane', vers: 'cabane' },
                    { v: 'splash', mot: 'La rivière', vers: 'riviere' }
                  ]
                }
              }
            ]
          },

          /* --- branche A : la cabane --- */
          cabane: {
            pages: [
              {
                scene: {
                  bg: 'garden',
                  back: [{ t: 'cabanearbre', x: 200, y: 500, s: 1.05 }],
                  items: [
                    { t: 'livia', x: 480, y: 524, s: 1.1, pose: 'armsup' },
                    { t: 'roxane', x: 690, y: 522, s: 1, pose: 'armsup' }
                  ],
                  sfx: [{ t: 'À NOUS !', x: 480, y: 148, fs: 30, rot: -6, color: '#4f8a3d' }]
                },
                text: "Elles montèrent à l'échelle, une main après l'autre. En haut, ça sentait le bois chaud et un peu la fourmi. De là-haut, le jardin n'avait plus du tout la même tête."
              },
              {
                scene: {
                  bg: 'garden',
                  back: [{ t: 'cabanearbre', x: 220, y: 500, s: 1 }],
                  items: [
                    { t: 'livia', x: 500, y: 524, s: 1.1, mood: 'sad' },
                    { t: 'roxane', x: 700, y: 522, s: 1 }
                  ],
                  sfx: [{ t: 'ÇA PENCHE…', x: 480, y: 148, fs: 27, rot: -4, color: '#8a5a3b' }]
                },
                text: "Une planche manquait dans le mur, et la table penchait tellement que les cailloux glissaient tout seuls. Il fallait décider quelque chose.",
                choix: {
                  options: [
                    { v: 'papa', mot: 'Appeler Papa', vers: 'cab_papa' },
                    { v: 'roxane', mot: 'Se débrouiller', vers: 'cab_deux' }
                  ]
                }
              }
            ]
          },

          cab_papa: {
            pages: [
              {
                scene: {
                  bg: 'garden',
                  back: [{ t: 'cabanearbre', x: 190, y: 500, s: 1 }],
                  items: [
                    { t: 'papa', x: 470, y: 520, s: 1.05, pose: 'hold' },
                    { t: 'livia', x: 690, y: 524, s: 1.05, pose: 'point' }
                  ],
                  sfx: [{ t: 'TOC ! TOC !', x: 470, y: 148, fs: 30, rot: -6, color: '#4a7fc1' }]
                },
                text: "Livia cria le nom de Papa depuis la fenêtre de la cabane. Il arriva avec une planche sous le bras et son marteau. Il ne dit pas « poussez-vous » : il demanda où elles voulaient la mettre."
              },
              {
                scene: {
                  bg: 'garden', time: 'sunset',
                  back: [{ t: 'cabanearbre', x: 200, y: 500, s: 1 }],
                  items: [
                    { t: 'papa', x: 440, y: 520, s: 1.05 },
                    { t: 'livia', x: 640, y: 524, s: 1.05, pose: 'hold' },
                    { t: 'roxane', x: 726, y: 522, s: .95, pose: 'hold' }
                  ]
                },
                text: "À trois, le mur fut refermé avant les crêpes. Papa redescendit, mais il resta assis au pied de l'arbre un bon moment, à faire semblant de ne pas écouter ce qui se disait au-dessus."
              }
            ]
          },

          cab_deux: {
            pages: [
              {
                scene: {
                  bg: 'garden',
                  back: [{ t: 'cabanearbre', x: 200, y: 500, s: 1 }],
                  items: [
                    { t: 'livia', x: 470, y: 524, s: 1.1, pose: 'hold' },
                    { t: 'roxane', x: 690, y: 522, s: 1, pose: 'hold' }
                  ],
                  sfx: [{ t: 'ET SI ON…', x: 460, y: 148, fs: 28, rot: -5, color: '#7ac6a8' }]
                },
                text: "« On n'a qu'à mettre le tapis de l'entrée », dit Roxane, ce qui était une très mauvaise idée et une très bonne idée en même temps. Elles calèrent la table avec trois cailloux et un livre."
              },
              {
                scene: {
                  bg: 'garden', time: 'sunset',
                  back: [{ t: 'cabanearbre', x: 210, y: 500, s: 1 }],
                  items: [
                    { t: 'livia', x: 500, y: 524, s: 1.1 },
                    { t: 'roxane', x: 700, y: 522, s: 1 }
                  ]
                },
                text: "La table penchait encore un peu. Le mur avait toujours son trou, par lequel on voyait un bout de ciel. Elles trouvèrent que c'était mieux comme ça, et elles avaient tout fait toutes seules."
              }
            ]
          },

          /* --- branche B : la rivière --- */
          riviere: {
            pages: [
              {
                scene: {
                  bg: 'creek',
                  items: [
                    { t: 'livia', x: 320, y: 522, s: 1.15 },
                    { t: 'roxane', x: 580, y: 520, s: 1.05, pose: 'point' }
                  ],
                  sfx: [{ t: 'GLOU… GLOU…', x: 450, y: 150, fs: 28, rot: -4, color: '#3fa3c4' }]
                },
                text: "Le sentier descendait tout seul. En bas, l'eau passait sur les cailloux en faisant un bruit de bouche pleine. C'était joli. C'était vraiment très joli."
              },
              {
                scene: {
                  bg: 'creek',
                  items: [{ t: 'livia', x: 400, y: 522, s: 1.25, mood: 'sad' }],
                  sfx: [{ t: 'SANS UN GRAND…', x: 400, y: 150, fs: 26, rot: -4, color: '#6d5847' }]
                },
                text: "Livia s'arrêta net. La phrase de Mamie était revenue toute seule dans sa tête, sans qu'elle l'appelle : sans un grand. Roxane, elle, avait déjà un pied sur la première pierre.",
                choix: {
                  options: [
                    { v: 'mamie', mot: 'Chercher Mamie', vers: 'riv_mamie' },
                    { v: 'splash', mot: 'Juste les pieds', vers: 'riv_seules' }
                  ]
                }
              }
            ]
          },

          riv_mamie: {
            pages: [
              {
                scene: {
                  bg: 'garden',
                  items: [
                    { t: 'livia', x: 300, y: 524, s: 1.1, pose: 'point' },
                    { t: 'mamie', x: 560, y: 522, s: 1.15 }
                  ],
                  bubbles: [{ x: 300, y: 22, w: 340, t: 'On peut y aller si tu viens ?', tx: 310, ty: 238 }]
                },
                text: "Elles remontèrent en courant, essoufflées, pour poser une question de sept mots : « On peut y aller si tu viens ? » Mamie posa sa poêle et prit ses bottes sans discuter."
              },
              {
                scene: {
                  bg: 'creek', time: 'sunset',
                  items: [
                    { t: 'mamie', x: 260, y: 520, s: 1.1 },
                    { t: 'livia', x: 480, y: 522, s: 1.1, pose: 'jump' },
                    { t: 'roxane', x: 690, y: 520, s: 1 }
                  ],
                  sfx: [{ t: 'SPLATCH !', x: 460, y: 148, fs: 32, rot: -7, color: '#3fa3c4' }]
                },
                text: "Avec Mamie sur la berge, elles allèrent bien plus loin qu'elles n'auraient osé toutes seules — jusqu'à la grosse pierre plate. Demander, ce jour-là, avait agrandi la rivière."
              }
            ]
          },

          riv_seules: {
            pages: [
              {
                scene: {
                  bg: 'creek',
                  items: [
                    { t: 'livia', x: 330, y: 522, s: 1.15, mood: 'wow' },
                    { t: 'roxane', x: 590, y: 520, s: 1.05, mood: 'wow' }
                  ],
                  sfx: [{ t: 'SPLOTCH !', x: 460, y: 150, fs: 34, rot: -8, color: '#4a7fc1' }]
                },
                text: "Juste les pieds, avait dit Roxane. La pierre était glissante comme du savon. Livia se retrouva avec une chaussure au fond de l'eau et le cœur qui tapait beaucoup trop vite."
              },
              {
                scene: {
                  bg: 'garden', time: 'sunset',
                  items: [
                    { t: 'mamie', x: 300, y: 508, s: 1.15, pose: 'sit' },
                    { t: 'livia', x: 560, y: 500, s: 1.1, pose: 'sit', mood: 'sad' }
                  ],
                  bubbles: [{ x: 300, y: 22, w: 350, t: "La règle n'est pas contre toi. Elle est devant toi.", tx: 305, ty: 236 }]
                },
                text: "Mamie ne cria pas. Elle mit la chaussure près du radiateur et s'assit à côté. « La règle n'est pas contre toi », dit-elle. « Elle est devant toi. » Livia mit longtemps à comprendre, et elle a compris."
              }
            ]
          }
        }
      },

      /* ---------- 2 : le ballon tout neuf ---------- */
      {
        id: 'ballon-tout-neuf',
        title: 'Le ballon tout neuf',
        subtitle: 'Partager, oui — mais quand ?',
        tag: 'Tu choisis',
        themes: ['Partager', 'Amitié'],
        minutes: 6,
        debut: 'depart',
        cover: {
          bg: 'hill',
          items: [
            { t: 'livia', x: 340, y: 524, s: 1.15 },
            { t: 'ball', x: 520, y: 540, s: 1.1 },
            { t: 'isadora', x: 660, y: 522, s: 1.05 }
          ]
        },
        blocs: {

          depart: {
            pages: [
              {
                scene: {
                  bg: 'hill',
                  items: [
                    { t: 'livia', x: 400, y: 524, s: 1.25, pose: 'hold' },
                    { t: 'ball', x: 610, y: 542, s: 1.2 }
                  ],
                  sfx: [{ t: 'TOUT NEUF !', x: 400, y: 148, fs: 30, rot: -6, color: '#f2803d' }]
                },
                text: "Le ballon était neuf du matin même. Il rebondissait plus haut que les vieux, et il faisait un bruit net, comme un tambour. Livia l'avait porté jusqu'au parc dans ses deux bras."
              },
              {
                scene: {
                  bg: 'hill',
                  items: [
                    { t: 'livia', x: 300, y: 524, s: 1.1, pose: 'hold' },
                    { t: 'isadora', x: 580, y: 522, s: 1.05 }
                  ],
                  sfx: [{ t: 'ELLE REGARDE…', x: 440, y: 148, fs: 26, rot: -4, color: '#8a79c4' }]
                },
                text: "Isadora arriva sur le chemin, les mains vides. Elle ne demanda rien du tout. Elle s'assit sur le banc et elle regarda le ballon, exactement comme on regarde un gâteau.",
                choix: {
                  options: [
                    { v: 'isadora', mot: 'Je l\'appelle', vers: 'ensemble' },
                    { v: 'ball', mot: 'Je joue un peu', vers: 'seule' }
                  ]
                }
              }
            ]
          },

          /* --- branche A : je l'appelle tout de suite --- */
          ensemble: {
            pages: [
              {
                scene: {
                  bg: 'hill',
                  items: [
                    { t: 'livia', x: 300, y: 524, s: 1.1, pose: 'wave' },
                    { t: 'ball', x: 460, y: 542, s: 1 },
                    { t: 'isadora', x: 640, y: 522, s: 1.05, pose: 'armsup' }
                  ],
                  sfx: [{ t: 'ISA ! VIENS !', x: 440, y: 148, fs: 30, rot: -5, color: '#7ac6a8' }]
                },
                text: "« Isa ! Viens ! » Le mot était sorti avant que Livia ait fini d'y penser. Isadora traversa la pelouse si vite qu'elle perdit une chaussure en route, et elle s'en fichait complètement."
              },
              {
                scene: {
                  bg: 'hill',
                  items: [
                    { t: 'livia', x: 290, y: 524, s: 1.1 },
                    { t: 'ball', x: 470, y: 528, s: .9 },
                    { t: 'isadora', x: 650, y: 522, s: 1.05 }
                  ],
                  sfx: [{ t: 'ET MAINTENANT ?', x: 460, y: 148, fs: 27, rot: -4, color: '#8a79c4' }]
                },
                text: "Le ballon était au milieu de l'herbe, entre elles deux, et il attendait. Il restait une chose à décider, et cette fois elles la décideraient ensemble.",
                choix: {
                  options: [
                    { v: 'ball', mot: 'Des passes', vers: 'ens_passes' },
                    { v: 'tree', mot: 'Un jeu à nous', vers: 'ens_jeu' }
                  ]
                }
              }
            ]
          },

          ens_passes: {
            pages: [
              {
                scene: {
                  bg: 'hill',
                  items: [
                    { t: 'livia', x: 260, y: 524, s: 1.1, pose: 'point' },
                    { t: 'ball', x: 460, y: 470, s: .95 },
                    { t: 'isadora', x: 660, y: 522, s: 1.05, pose: 'armsup' }
                  ],
                  sfx: [{ t: 'POM ! POM !', x: 450, y: 148, fs: 32, rot: -6, color: '#f2803d' }]
                },
                text: "Elles se mirent loin l'une de l'autre et se firent des passes. Au début le ballon partait n'importe où, dans les orties, sous le banc, dans le dos d'un monsieur qui lisait."
              },
              {
                scene: {
                  bg: 'hill', time: 'sunset',
                  items: [
                    { t: 'livia', x: 300, y: 524, s: 1.1, pose: 'hold' },
                    { t: 'isadora', x: 560, y: 522, s: 1.05, pose: 'hold' }
                  ],
                  sfx: [{ t: 'VINGT-SIX !', x: 430, y: 148, fs: 30, rot: -5, color: '#4f8a3d' }]
                },
                text: "Puis elles en réussirent deux d'affilée. Puis six. Puis vingt-six, en comptant très fort. Un ballon neuf tout seul rebondit haut ; à deux, il compte jusqu'à vingt-six."
              }
            ]
          },

          ens_jeu: {
            pages: [
              {
                scene: {
                  bg: 'hill',
                  back: [{ t: 'tree', x: 170, y: 470, s: 1 }, { t: 'tree', x: 660, y: 470, s: .95 }],
                  items: [
                    { t: 'livia', x: 340, y: 524, s: 1.1, pose: 'point' },
                    { t: 'isadora', x: 540, y: 522, s: 1.05 }
                  ],
                  sfx: [{ t: 'RÈGLE NUMÉRO UN…', x: 440, y: 148, fs: 25, rot: -4, color: '#8a79c4' }]
                },
                text: "« On invente », dit Isadora. Les deux arbres devinrent des buts. Un pied dans la flaque, c'était moins un point. Toucher le banc, c'était rejouer. Les règles se rallongeaient à chaque tour."
              },
              {
                scene: {
                  bg: 'hill', time: 'sunset',
                  back: [{ t: 'tree', x: 180, y: 470, s: 1 }],
                  items: [
                    { t: 'livia', x: 380, y: 524, s: 1.1, pose: 'hold' },
                    { t: 'isadora', x: 610, y: 522, s: 1.05, pose: 'hold' }
                  ]
                },
                text: "À la fin, plus personne ne savait le score, et le jeu n'avait toujours pas de nom. Elles le rejouèrent tous les mercredis de cet été-là, sans jamais réussir à l'expliquer à quelqu'un d'autre."
              }
            ]
          },

          /* --- branche B : je joue un peu d'abord --- */
          seule: {
            pages: [
              {
                scene: {
                  bg: 'hill',
                  items: [
                    { t: 'livia', x: 330, y: 524, s: 1.15, pose: 'jump' },
                    { t: 'ball', x: 520, y: 460, s: 1 }
                  ],
                  sfx: [{ t: 'BOING ! BOING !', x: 430, y: 148, fs: 31, rot: -6, color: '#f7c518' }]
                },
                text: "Livia fit rebondir le ballon toute seule. Un tir haut. Un tir contre le mur. Un tir de la tête, raté. C'était bien. C'était très bien même, pendant un moment."
              },
              {
                scene: {
                  bg: 'hill',
                  items: [
                    { t: 'livia', x: 300, y: 524, s: 1.1 },
                    { t: 'isadora', x: 600, y: 508, s: 1.05, pose: 'sit', mood: 'sad' }
                  ],
                  sfx: [{ t: '. . .', x: 450, y: 150, fs: 34, rot: 0, color: '#8a7768' }]
                },
                text: "Puis Livia se retourna. Isadora était toujours sur le banc, avec ses mains posées à plat sur les genoux. Le ballon, tout à coup, rebondissait un peu moins haut.",
                choix: {
                  options: [
                    { v: 'isadora', mot: 'Tout de suite', vers: 'seul_maintenant' },
                    { v: 'ball', mot: 'Encore trois tirs', vers: 'seul_trois' }
                  ]
                }
              }
            ]
          },

          seul_maintenant: {
            pages: [
              {
                scene: {
                  bg: 'hill',
                  items: [
                    { t: 'livia', x: 300, y: 524, s: 1.1, pose: 'hold' },
                    { t: 'isadora', x: 570, y: 522, s: 1.05, mood: 'wow' }
                  ],
                  sfx: [{ t: 'TIENS !', x: 430, y: 148, fs: 32, rot: -6, color: '#7ac6a8' }]
                },
                text: "Livia prit le ballon et marcha jusqu'au banc. Elle ne dit pas de longue phrase. Elle dit « tiens », et elle le posa sur les genoux d'Isadora, qui n'en revenait pas."
              },
              {
                scene: {
                  bg: 'hill', time: 'sunset',
                  items: [
                    { t: 'isadora', x: 320, y: 522, s: 1.05, pose: 'jump' },
                    { t: 'ball', x: 500, y: 468, s: .95 },
                    { t: 'livia', x: 660, y: 524, s: 1.1, pose: 'armsup' }
                  ]
                },
                text: "Isadora tirait fort et complètement de travers. Elles coururent après le ballon plus longtemps qu'elles ne jouèrent avec. C'est souvent comme ça, et c'est très bien comme ça."
              }
            ]
          },

          seul_trois: {
            pages: [
              {
                scene: {
                  bg: 'hill',
                  items: [
                    { t: 'livia', x: 340, y: 524, s: 1.15, pose: 'point' },
                    { t: 'ball', x: 540, y: 466, s: .95 }
                  ],
                  sfx: [{ t: 'UN… DEUX… TROIS.', x: 430, y: 148, fs: 27, rot: -4, color: '#f2803d' }]
                },
                text: "« Encore trois », se dit Livia, et elle les compta pour de vrai. Un. Deux. Trois. Ce n'était pas beaucoup de temps, mais elle savait exactement quand ça s'arrêterait."
              },
              {
                scene: {
                  bg: 'hill', time: 'sunset',
                  items: [
                    { t: 'livia', x: 320, y: 522, s: 1.1, pose: 'hold' },
                    { t: 'isadora', x: 580, y: 520, s: 1.05, pose: 'hold' }
                  ],
                  bubbles: [{ x: 300, y: 22, w: 330, t: 'Je te regardais. Tu tires fort.', tx: 320, ty: 238 }]
                },
                text: "Au troisième, elle appela Isadora. « Je te regardais », dit Isadora en arrivant. « Tu tires fort. » Partager un peu plus tard, ce n'est pas partager un peu moins."
              }
            ]
          }
        }
      },

      /* ---------- 3 : le bruit dans le couloir ---------- */
      {
        id: 'bruit-dans-le-couloir',
        title: 'Le bruit dans le couloir',
        subtitle: 'Il est minuit et quelque chose a fait toc',
        tag: 'Tu choisis',
        themes: ['Nuit', 'Émotions'],
        minutes: 6,
        debut: 'depart',
        cover: {
          bg: 'bedroom', time: 'night',
          items: [
            { t: 'livia', x: 360, y: 512, s: 1.2, pose: 'sit', mood: 'sad' },
            { t: 'lantern', x: 590, y: 500, s: 1 }
          ]
        },
        blocs: {

          depart: {
            pages: [
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  items: [{ t: 'livia', x: 400, y: 508, s: 1.25, pose: 'sit', mood: 'wow' }],
                  sfx: [{ t: 'TOC.', x: 400, y: 146, fs: 38, rot: -6, color: '#bfa8e0' }]
                },
                text: "Toc. Un seul bruit, dans le couloir, et Livia fut assise dans son lit sans se souvenir de s'être réveillée. La maison était noire et parfaitement silencieuse, maintenant."
              },
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  items: [{ t: 'livia', x: 380, y: 508, s: 1.2, pose: 'sit' }],
                  back: [{ t: 'lantern', x: 630, y: 496, s: .95 }],
                  sfx: [{ t: 'ET SI…', x: 380, y: 146, fs: 30, rot: -5, color: '#8a79c4' }]
                },
                text: "Sur la table de nuit, il y avait la petite lampe. De l'autre côté du couloir, il y avait la chambre de Maman. Les deux étaient à la même distance : quatre pas.",
                choix: {
                  options: [
                    { v: 'lantern', mot: 'La lampe', vers: 'lampe' },
                    { v: 'maman', mot: 'Appeler Maman', vers: 'maman' }
                  ]
                }
              }
            ]
          },

          /* --- branche A : la lampe --- */
          lampe: {
            pages: [
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  back: [{ t: 'lantern', x: 620, y: 496, s: 1.05 }],
                  items: [{ t: 'livia', x: 340, y: 508, s: 1.2, pose: 'sit' }],
                  sfx: [{ t: 'CLIC.', x: 360, y: 146, fs: 32, rot: -5, color: '#f7c518' }]
                },
                text: "Clic. La chambre revint d'un coup : les livres, le tapis, la girafe en bois sur l'étagère. Rien n'avait bougé d'un millimètre. C'était rassurant et un peu vexant."
              },
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  back: [{ t: 'lantern', x: 640, y: 496, s: 1 }],
                  items: [{ t: 'livia', x: 340, y: 508, s: 1.2, pose: 'sit', mood: 'wow' }],
                  sfx: [{ t: 'TOC.', x: 400, y: 146, fs: 34, rot: -7, color: '#bfa8e0' }]
                },
                text: "Et puis, dans le couloir : toc. Encore. Exactement le même, ni plus fort ni plus doux. La lampe éclairait la chambre, mais elle n'éclairait pas du tout le couloir.",
                choix: {
                  options: [
                    { v: 'house', mot: 'Aller voir', vers: 'lamp_voir' },
                    { v: 'moon', fond: 'nuit', mot: 'Écouter', vers: 'lamp_ecouter' }
                  ]
                }
              }
            ]
          },

          lamp_voir: {
            pages: [
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  items: [{ t: 'livia', x: 400, y: 520, s: 1.2, pose: 'point' }],
                  sfx: [{ t: 'FLOP… FLOP…', x: 400, y: 146, fs: 28, rot: -4, color: '#9ecfe0' }]
                },
                text: "Livia posa un pied, puis l'autre, puis toute Livia. Dans le couloir, le grand rideau bougeait tout seul, gonflait, et retombait contre le mur. Flop. La fenêtre était restée entrouverte."
              },
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  items: [{ t: 'livia', x: 400, y: 508, s: 1.2, pose: 'sit' }],
                  sfx: [{ t: 'VOILÀ.', x: 400, y: 146, fs: 30, rot: -5, color: '#7ac6a8' }]
                },
                text: "Elle tira la fenêtre, et le toc s'arrêta pour de bon. En se recouchant, Livia repensa au monstre qu'elle avait imaginé, et elle se trouva un peu bête — ce qui est une façon très agréable de s'endormir."
              }
            ]
          },

          lamp_ecouter: {
            pages: [
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  back: [{ t: 'lantern', x: 630, y: 496, s: 1 }],
                  items: [{ t: 'livia', x: 360, y: 508, s: 1.2, pose: 'sit' }],
                  sfx: [{ t: 'TOC… TOC… TOC…', x: 400, y: 146, fs: 26, rot: -4, color: '#bfa8e0' }]
                },
                text: "Livia resta assise, la couette jusqu'au menton, et elle écouta pour de bon. Toc. Un temps. Toc. Un temps. Toc. Toujours pareil, toujours au même moment. Les monstres ne sont jamais réguliers."
              },
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  items: [{ t: 'livia', x: 400, y: 508, s: 1.2, pose: 'sit' }],
                  sfx: [{ t: 'AH, C\'EST LE RADIATEUR.', x: 400, y: 146, fs: 22, rot: -4, color: '#7ac6a8' }]
                },
                text: "C'était le radiateur du couloir, qui fait ça chaque nuit quand le chauffage s'arrête. Livia se rallongea. Le bruit continua encore longtemps, mais il n'était plus le même bruit du tout."
              }
            ]
          },

          /* --- branche B : appeler Maman --- */
          maman: {
            pages: [
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  items: [
                    { t: 'livia', x: 300, y: 508, s: 1.15, pose: 'sit' },
                    { t: 'maman', x: 570, y: 520, s: 1.2 }
                  ],
                  sfx: [{ t: 'MAMAAAN…', x: 430, y: 146, fs: 30, rot: -5, color: '#d4622c' }]
                },
                text: "« Mamaaan… » Ce n'était pas un cri, c'était juste assez fort. Maman arriva avec les cheveux dans tous les sens et sans allumer, parce qu'elle connaît le chemin par cœur."
              },
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  items: [
                    { t: 'maman', x: 300, y: 506, s: 1.15, pose: 'sit' },
                    { t: 'livia', x: 560, y: 508, s: 1.15, pose: 'sit' }
                  ],
                  bubbles: [{ x: 40, y: 22, w: 350, t: 'On va voir, ou je reste un peu ?', tx: 300, ty: 238 }]
                },
                text: "Elle s'assit au bord du lit sans rien dire pendant un moment. Puis elle demanda, tout bas : « On va voir ce que c'est, ou je reste un peu ? » Les deux étaient permis.",
                choix: {
                  options: [
                    { v: 'house', mot: 'On va voir', vers: 'mam_voir' },
                    { v: 'maman', mot: 'Reste un peu', vers: 'mam_reste' }
                  ]
                }
              }
            ]
          },

          mam_voir: {
            pages: [
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  items: [
                    { t: 'maman', x: 320, y: 520, s: 1.15, pose: 'hold' },
                    { t: 'livia', x: 560, y: 522, s: 1.1, pose: 'hold' }
                  ],
                  sfx: [{ t: 'FLOP… FLOP…', x: 440, y: 146, fs: 28, rot: -4, color: '#9ecfe0' }]
                },
                text: "Elles y allèrent la main dans la main, ce qui n'est pas de la triche. Dans le couloir, le grand rideau se gonflait et retombait contre le mur. La fenêtre était restée entrouverte."
              },
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  items: [
                    { t: 'maman', x: 320, y: 506, s: 1.15, pose: 'sit' },
                    { t: 'livia', x: 560, y: 508, s: 1.15, pose: 'sit' }
                  ],
                  sfx: [{ t: 'PFFF !', x: 440, y: 146, fs: 30, rot: -6, color: '#7ac6a8' }]
                },
                text: "Elles rirent toutes les deux, un peu trop fort pour l'heure qu'il était. En repartant se coucher, Livia savait maintenant à quoi ressemblait ce bruit-là. Elle ne l'a plus jamais entendu pareil."
              }
            ]
          },

          mam_reste: {
            pages: [
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  items: [
                    { t: 'maman', x: 320, y: 506, s: 1.15, pose: 'sit' },
                    { t: 'livia', x: 560, y: 508, s: 1.15, pose: 'sit' }
                  ],
                  sfx: [{ t: 'DEUX MINUTES.', x: 440, y: 146, fs: 26, rot: -4, color: '#d4622c' }]
                },
                text: "« Deux minutes », dit Maman, et elle resta assise dans le noir, une main posée sur la couette. Elle ne raconta rien. Elle ne chanta rien. Elle était juste là, et ça suffisait largement."
              },
              {
                scene: {
                  bg: 'bedroom', time: 'night',
                  items: [{ t: 'livia', x: 400, y: 508, s: 1.2, pose: 'sit' }],
                  sfx: [{ t: '. . .', x: 400, y: 146, fs: 34, rot: 0, color: '#8a7768' }]
                },
                text: "Le toc revint deux ou trois fois. Livia l'entendit de moins en moins fort, puis plus du tout. Les deux minutes de Maman avaient duré bien plus longtemps que deux minutes."
              }
            ]
          }
        }
      },

      /* ---------- 4 : le chien du voisin ---------- */
      {
        id: 'le-chien-du-voisin',
        title: 'Le chien du voisin',
        subtitle: "Demander avant, toujours",
        tag: 'Tu choisis',
        themes: ['Règles', 'Dehors'],
        minutes: 6,
        debut: 'depart',
        cover: {
          bg: 'road',
          items: [
            { t: 'livia', x: 340, y: 524, s: 1.15, mood: 'wow' },
            { t: 'bluey', x: 580, y: 520, s: 1.05 }
          ]
        },
        blocs: {

          depart: {
            pages: [
              {
                scene: {
                  bg: 'road',
                  items: [
                    { t: 'livia', x: 320, y: 524, s: 1.15, mood: 'wow' },
                    { t: 'bluey', x: 600, y: 504, s: 1.1, pose: 'sit' }
                  ],
                  sfx: [{ t: 'OH !', x: 450, y: 148, fs: 34, rot: -6, color: '#f7c518' }]
                },
                text: "Devant la maison d'à côté, il y avait un chien. Un vrai, gros, avec des oreilles molles et une langue rose qui pendait. Il était attaché près du portail et il regardait Livia."
              },
              {
                scene: {
                  bg: 'road',
                  items: [
                    { t: 'livia', x: 340, y: 524, s: 1.2, pose: 'shrug' },
                    { t: 'bluey', x: 620, y: 504, s: 1.05, pose: 'sit' }
                  ],
                  sfx: [{ t: 'IL EST TOUT SEUL…', x: 440, y: 148, fs: 24, rot: -4, color: '#8a79c4' }]
                },
                text: "Il n'y avait personne dans le jardin. Le chien remua la queue, ce qui ressemble beaucoup à une invitation. Les mains de Livia se levèrent toutes seules, à mi-chemin.",
                choix: {
                  options: [
                    { v: 'house', mot: 'Aller demander', vers: 'demander' },
                    { v: 'bluey', mot: 'Il a l\'air gentil', vers: 'toucher' }
                  ]
                }
              }
            ]
          },

          demander: {
            pages: [
              {
                scene: {
                  bg: 'road',
                  back: [{ t: 'house', x: 660, y: 480, s: .8 }],
                  items: [{ t: 'livia', x: 340, y: 524, s: 1.2, pose: 'point' }],
                  sfx: [{ t: 'TOC TOC TOC.', x: 400, y: 148, fs: 28, rot: -5, color: '#8a5a3b' }]
                },
                text: "Livia baissa les mains et alla frapper à la porte. Il fallut attendre longtemps, se dandiner d'un pied sur l'autre, et frapper une deuxième fois plus fort."
              },
              {
                scene: {
                  bg: 'road',
                  items: [
                    { t: 'papa', x: 300, y: 520, s: 1.1, pose: 'point' },
                    { t: 'livia', x: 570, y: 524, s: 1.1 }
                  ],
                  bubbles: [{ x: 40, y: 22, w: 350, t: "Il adore ça. Mais pas la tête : le dos.", tx: 300, ty: 240 }]
                },
                text: "Le voisin ouvrit, écouta la question, et sourit. « Il adore ça », dit-il. Puis il ajouta quelque chose que Livia n'aurait jamais deviné toute seule.",
                choix: {
                  options: [
                    { v: 'papa', mot: 'Il me montre', vers: 'dem_montre' },
                    { v: 'bluey', mot: "J'y vais doucement", vers: 'dem_seule' }
                  ]
                }
              }
            ]
          },

          dem_montre: {
            pages: [
              {
                scene: {
                  bg: 'road',
                  items: [
                    { t: 'papa', x: 300, y: 520, s: 1.1, pose: 'point' },
                    { t: 'bluey', x: 540, y: 504, s: 1.1, pose: 'sit' },
                    { t: 'livia', x: 720, y: 524, s: 1.05 }
                  ],
                  sfx: [{ t: 'LA MAIN À PLAT.', x: 430, y: 148, fs: 24, rot: -4, color: '#4a7fc1' }]
                },
                text: "Le voisin s'accroupit et montra : la main à plat, en dessous du museau, pour que le chien la sente d'abord. « On ne surprend jamais un chien par-dessus la tête », dit-il. « Même gentil. »"
              },
              {
                scene: {
                  bg: 'road', time: 'sunset',
                  items: [
                    { t: 'livia', x: 340, y: 524, s: 1.15, pose: 'hold' },
                    { t: 'bluey', x: 600, y: 520, s: 1.1 }
                  ],
                  sfx: [{ t: 'SLURP !', x: 440, y: 148, fs: 32, rot: -6, color: '#f2803d' }]
                },
                text: "Le chien renifla la main de Livia longuement, puis la lécha d'un coup de langue énorme et mouillé. Livia sait maintenant caresser tous les chiens du monde, et elle le sait pour de bon."
              }
            ]
          },

          dem_seule: {
            pages: [
              {
                scene: {
                  bg: 'road',
                  items: [
                    { t: 'livia', x: 340, y: 524, s: 1.2, pose: 'point' },
                    { t: 'bluey', x: 620, y: 504, s: 1.1, pose: 'sit' }
                  ],
                  sfx: [{ t: 'TOUT DOUCEMENT…', x: 440, y: 148, fs: 24, rot: -4, color: '#7ac6a8' }]
                },
                text: "Livia s'approcha toute seule, très lentement, en s'arrêtant à chaque pas. Le chien ne bougea pas. Il attendait, exactement comme elle, et c'était à celle des deux qui bougerait la première."
              },
              {
                scene: {
                  bg: 'road', time: 'sunset',
                  items: [
                    { t: 'livia', x: 340, y: 506, s: 1.15, pose: 'sit' },
                    { t: 'bluey', x: 600, y: 504, s: 1.1, pose: 'sit' }
                  ],
                  sfx: [{ t: 'AAAH…', x: 440, y: 148, fs: 30, rot: -5, color: '#f7c518' }]
                },
                text: "Sa main se posa enfin sur le dos, et le chien ferma les yeux à moitié. Livia resta accroupie très longtemps, sans bouger, pour ne pas gâcher ce qu'elle venait de gagner elle-même."
              }
            ]
          },

          toucher: {
            pages: [
              {
                scene: {
                  bg: 'road',
                  items: [
                    { t: 'livia', x: 340, y: 524, s: 1.2, pose: 'point' },
                    { t: 'bluey', x: 620, y: 520, s: 1.1 }
                  ],
                  sfx: [{ t: 'WAF !!!', x: 440, y: 148, fs: 38, rot: -8, color: '#e0453c' }]
                },
                text: "La main de Livia arriva par-dessus la tête du chien, d'un coup. Le chien ne l'avait pas vue venir. Il aboya une fois, très fort, et se leva d'un bond."
              },
              {
                scene: {
                  bg: 'road',
                  items: [{ t: 'livia', x: 400, y: 524, s: 1.25, mood: 'sad' }],
                  sfx: [{ t: 'BOUM-BOUM-BOUM.', x: 400, y: 148, fs: 26, rot: -5, color: '#6d5847' }]
                },
                text: "Livia recula de trois pas d'un seul mouvement. Il ne s'était rien passé de grave : le chien était attaché, il n'avait même pas montré les dents. Mais son cœur, lui, tapait à toute vitesse.",
                choix: {
                  options: [
                    { v: 'house', mot: 'Le dire', vers: 'tou_dire' },
                    { v: 'livia', mot: 'Rentrer vite', vers: 'tou_rentrer' }
                  ]
                }
              }
            ]
          },

          tou_dire: {
            pages: [
              {
                scene: {
                  bg: 'road',
                  items: [
                    { t: 'maman', x: 300, y: 504, s: 1.15, pose: 'sit' },
                    { t: 'livia', x: 570, y: 506, s: 1.1, pose: 'sit', mood: 'sad' }
                  ],
                  bubbles: [{ x: 300, y: 22, w: 350, t: "Tu as bien fait de me le dire. Il a eu peur, lui aussi.", tx: 305, ty: 236 }]
                },
                text: "Livia raconta tout à Maman, même la partie où elle n'avait rien demandé. « Tu as bien fait de me le dire », dit Maman. « Il a eu peur aussi, tu sais. Vous avez eu peur tous les deux. »"
              },
              {
                scene: {
                  bg: 'road', time: 'sunset',
                  items: [
                    { t: 'maman', x: 300, y: 520, s: 1.1 },
                    { t: 'livia', x: 520, y: 524, s: 1.1, pose: 'hold' },
                    { t: 'bluey', x: 710, y: 504, s: 1.05, pose: 'sit' }
                  ],
                  sfx: [{ t: 'ON Y RETOURNE ENSEMBLE.', x: 400, y: 148, fs: 21, rot: -4, color: '#7ac6a8' }]
                },
                text: "Elles y retournèrent ensemble, sonnèrent, demandèrent. Le voisin montra la main à plat, sous le museau. Le chien lécha la main de Livia, et la peur du matin ne resta nulle part."
              }
            ]
          },

          tou_rentrer: {
            pages: [
              {
                scene: {
                  bg: 'bedroom',
                  items: [{ t: 'livia', x: 400, y: 508, s: 1.25, pose: 'sit', mood: 'sad' }],
                  sfx: [{ t: 'JE DIS RIEN.', x: 400, y: 146, fs: 28, rot: -5, color: '#6d5847' }]
                },
                text: "Livia rentra sans rien dire et alla s'asseoir sur son lit. L'aboiement revenait dans sa tête toutes les cinq minutes, chaque fois un peu plus fort que la fois d'avant."
              },
              {
                scene: {
                  bg: 'bedroom', time: 'sunset',
                  items: [
                    { t: 'maman', x: 300, y: 506, s: 1.15, pose: 'sit' },
                    { t: 'livia', x: 570, y: 500, s: 1.15, pose: 'sit' }
                  ],
                  bubbles: [{ x: 40, y: 22, w: 350, t: "Une peur qu'on garde grossit. Une peur qu'on dit rétrécit.", tx: 300, ty: 236 }]
                },
                text: "Au dîner, ça sortit tout seul, en pleurant un peu. Maman écouta jusqu'au bout. « Une peur qu'on garde grossit », dit-elle. « Une peur qu'on dit rétrécit. » Ça marcha presque tout de suite."
              }
            ]
          }
        }
      },

      /* ---------- 5 : le dernier carré ---------- */
      {
        id: 'le-dernier-carre',
        title: 'Le dernier carré de chocolat',
        subtitle: "Il en reste un, et vous êtes deux",
        tag: 'Tu choisis',
        themes: ['Partager', 'Famille'],
        minutes: 6,
        debut: 'depart',
        cover: {
          bg: 'bedroom',
          items: [
            { t: 'livia', x: 340, y: 512, s: 1.15 },
            { t: 'pablo', x: 590, y: 516, s: 1.05 }
          ]
        },
        blocs: {

          depart: {
            pages: [
              {
                scene: {
                  bg: 'bedroom',
                  items: [{ t: 'livia', x: 400, y: 512, s: 1.25, pose: 'hold' }],
                  sfx: [{ t: 'LE DERNIER !', x: 400, y: 146, fs: 30, rot: -5, color: '#8a5a3b' }]
                },
                text: "Dans la tablette, il restait un carré. Un seul. Livia le tenait entre deux doigts et il commençait déjà à fondre un tout petit peu, ce qui donne un sentiment d'urgence."
              },
              {
                scene: {
                  bg: 'bedroom',
                  items: [
                    { t: 'livia', x: 300, y: 512, s: 1.15, pose: 'hold' },
                    { t: 'pablo', x: 570, y: 516, s: 1.05, pose: 'armsup' }
                  ],
                  sfx: [{ t: 'AH ! AH !', x: 430, y: 146, fs: 30, rot: -5, color: '#f7c518' }]
                },
                text: "Pablo entra dans la cuisine à ce moment précis, comme si quelqu'un l'avait prévenu. Il tendit les deux bras vers le carré et fit le bruit qu'il fait quand il veut quelque chose.",
                choix: {
                  options: [
                    { v: 'pablo', mot: 'Je lui donne', vers: 'donner' },
                    { v: 'mangue', mot: 'Je le mange', vers: 'manger' }
                  ]
                }
              }
            ]
          },

          donner: {
            pages: [
              {
                scene: {
                  bg: 'bedroom',
                  items: [
                    { t: 'livia', x: 300, y: 512, s: 1.15, pose: 'hold' },
                    { t: 'pablo', x: 570, y: 516, s: 1.05, pose: 'hold' }
                  ],
                  sfx: [{ t: 'MMMM !', x: 430, y: 146, fs: 32, rot: -6, color: '#8a5a3b' }]
                },
                text: "Livia posa le carré dans la petite main. Pablo le mit en bouche entier, papier compris, et fit une tête de bonheur si totale qu'elle en était presque insultante."
              },
              {
                scene: {
                  bg: 'bedroom',
                  items: [
                    { t: 'livia', x: 340, y: 512, s: 1.2, mood: 'sad' },
                    { t: 'pablo', x: 610, y: 516, s: 1 }
                  ],
                  sfx: [{ t: 'ET MOI, ALORS ?', x: 440, y: 146, fs: 25, rot: -4, color: '#6d5847' }]
                },
                text: "Puis Livia resta là, les mains vides. C'était bien, ce qu'elle avait fait. C'était bien, et en même temps il n'y avait plus de chocolat du tout, et ces deux choses étaient vraies ensemble.",
                choix: {
                  options: [
                    { v: 'maman', mot: 'Je le dis', vers: 'don_dire' },
                    { v: 'pablo', mot: 'Tant pis', vers: 'don_tantpis' }
                  ]
                }
              }
            ]
          },

          don_dire: {
            pages: [
              {
                scene: {
                  bg: 'bedroom',
                  items: [
                    { t: 'maman', x: 300, y: 508, s: 1.15, pose: 'sit' },
                    { t: 'livia', x: 570, y: 500, s: 1.15, pose: 'sit' }
                  ],
                  bubbles: [{ x: 300, y: 22, w: 340, t: "J'ai donné, mais ça m'a fait tout drôle.", tx: 310, ty: 236 }]
                },
                text: "« J'ai donné », dit Livia à Maman, « mais ça m'a fait tout drôle. » Elle avait peur que ça annule le geste. Maman lui expliqua que non : ça le rendait même plus grand."
              },
              {
                scene: {
                  bg: 'bedroom', time: 'sunset',
                  items: [
                    { t: 'maman', x: 300, y: 520, s: 1.1, pose: 'hold' },
                    { t: 'livia', x: 560, y: 524, s: 1.1, pose: 'hold' }
                  ],
                  sfx: [{ t: 'ON EN RACHÈTE DEMAIN.', x: 430, y: 146, fs: 22, rot: -4, color: '#7ac6a8' }]
                },
                text: "« Partager, ce n'est pas ne rien vouloir », dit Maman. « C'est vouloir, et donner quand même. » Le lendemain, elles rachetèrent une tablette, et Livia eut le premier carré."
              }
            ]
          },

          don_tantpis: {
            pages: [
              {
                scene: {
                  bg: 'bedroom',
                  items: [
                    { t: 'livia', x: 300, y: 512, s: 1.15 },
                    { t: 'pablo', x: 570, y: 516, s: 1.05, pose: 'hold' }
                  ],
                  sfx: [{ t: 'BON.', x: 430, y: 146, fs: 30, rot: -5, color: '#8a7768' }]
                },
                text: "Livia haussa les épaules et alla faire autre chose. Elle repensa au carré deux ou trois fois pendant l'après-midi, de moins en moins fort, comme un bruit qui s'éloigne."
              },
              {
                scene: {
                  bg: 'bedroom', time: 'sunset',
                  items: [
                    { t: 'livia', x: 320, y: 512, s: 1.15, pose: 'hold' },
                    { t: 'pablo', x: 590, y: 516, s: 1.05, pose: 'hold' }
                  ],
                  sfx: [{ t: 'IL M\'EN A GARDÉ UN BOUT.', x: 430, y: 146, fs: 21, rot: -4, color: '#f7c518' }]
                },
                text: "Le soir, Pablo lui tendit un bout de sa biscotte, tout mou et plein de bave. Ce n'était pas du chocolat, mais Livia comprit très bien de quoi il s'agissait. Elle le mangea."
              }
            ]
          },

          manger: {
            pages: [
              {
                scene: {
                  bg: 'bedroom',
                  items: [
                    { t: 'livia', x: 300, y: 512, s: 1.2 },
                    { t: 'pablo', x: 590, y: 516, s: 1.05, mood: 'sad' }
                  ],
                  sfx: [{ t: 'CROC.', x: 430, y: 146, fs: 34, rot: -6, color: '#8a5a3b' }]
                },
                text: "Livia mangea le carré. Il était très bon. Il était vraiment très bon, pendant environ quatre secondes, et ensuite il n'y avait plus rien du tout dans sa bouche."
              },
              {
                scene: {
                  bg: 'bedroom',
                  items: [
                    { t: 'pablo', x: 300, y: 516, s: 1.05, mood: 'sad' },
                    { t: 'livia', x: 570, y: 512, s: 1.15, mood: 'sad' }
                  ],
                  sfx: [{ t: '. . .', x: 430, y: 146, fs: 34, rot: 0, color: '#8a7768' }]
                },
                text: "Pablo ne pleura même pas. Il baissa les bras et repartit à quatre pattes vers le salon, sans rien dire, ce qui était nettement pire qu'un cri.",
                choix: {
                  options: [
                    { v: 'mangue', mot: 'Trouver autre chose', vers: 'man_autre' },
                    { v: 'pablo', mot: 'Aller le voir', vers: 'man_voir' }
                  ]
                }
              }
            ]
          },

          man_autre: {
            pages: [
              {
                scene: {
                  bg: 'bedroom',
                  items: [{ t: 'livia', x: 400, y: 512, s: 1.2, pose: 'point' }],
                  sfx: [{ t: 'IL Y A DES MANGUES !', x: 400, y: 146, fs: 24, rot: -4, color: '#f2803d' }]
                },
                text: "Livia ouvrit le placard, puis le frigo, puis le placard encore. Elle trouva une mangue. Elle demanda à Maman de la couper, ce qui prit un temps considérable et beaucoup de patience."
              },
              {
                scene: {
                  bg: 'bedroom', time: 'sunset',
                  items: [
                    { t: 'livia', x: 320, y: 512, s: 1.15, pose: 'hold' },
                    { t: 'pablo', x: 590, y: 516, s: 1.05, pose: 'hold' }
                  ],
                  sfx: [{ t: 'MIAM !', x: 430, y: 146, fs: 32, rot: -6, color: '#f7c518' }]
                },
                text: "Pablo mangea la mangue avec les mains, les joues, et un peu les cheveux. Réparer prend plus de temps que partager tout de suite. Ça marche quand même très bien."
              }
            ]
          },

          man_voir: {
            pages: [
              {
                scene: {
                  bg: 'bedroom',
                  items: [
                    { t: 'pablo', x: 300, y: 516, s: 1.05, pose: 'sit' },
                    { t: 'livia', x: 570, y: 500, s: 1.15, pose: 'sit' }
                  ],
                  sfx: [{ t: 'PARDON, PABLO.', x: 430, y: 146, fs: 25, rot: -4, color: '#7ac6a8' }]
                },
                text: "Livia le rejoignit dans le salon et s'assit par terre à côté de lui. « Pardon, Pablo. » Il ne comprend pas les mots, à son âge. Il comprend très bien qu'on vienne s'asseoir à côté."
              },
              {
                scene: {
                  bg: 'bedroom', time: 'sunset',
                  items: [
                    { t: 'livia', x: 320, y: 500, s: 1.15, pose: 'sit' },
                    { t: 'pablo', x: 590, y: 516, s: 1.05, pose: 'sit' }
                  ],
                  sfx: [{ t: 'BRRRM ! BRRRM !', x: 430, y: 146, fs: 26, rot: -5, color: '#4a7fc1' }]
                },
                text: "Ils firent rouler la petite voiture bleue l'un vers l'autre pendant une demi-heure. La prochaine fois qu'il restera un carré, Livia sait déjà ce qu'elle en fera. Enfin, elle croit."
              }
            ]
          }
        }
      }
    ]
  }
];
