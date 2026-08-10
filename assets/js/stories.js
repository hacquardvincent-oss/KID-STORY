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
                { t: 'livia', x: 694, y: 500, s: 1, pose: 'jump' },
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
        themes: ['Émotions', 'Amitié'],
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
        themes: ['Grandir', 'Bêtises'],
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
        themes: ['Grandir', 'Famille'],
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
        themes: ['Grandir', 'Amitié'],
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
    c1: '#5b9bd5',
    c2: '#f0a63c',
    cover: {
      bg: 'garden',
      items: [
        { t: 'sprinkler', x: 140, y: 512, s: 1.1 },
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
        themes: ['Dehors', 'Famille'],
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
            { t: 'pool', x: 620, y: 526, s: .9 }
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
        themes: ['Émotions', 'Bêtises'],
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
        themes: ['Amitié', 'Dehors'],
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
        themes: ['Amitié', 'Émotions'],
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
        themes: ['Amitié', 'Dehors'],
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
      }
    ]
  }
];
