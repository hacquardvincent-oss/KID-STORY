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

/* Le lexique : tout ce qui n'appartient pas au texte des histoires — étiquettes,
   thèmes, noms d'univers. Une simple table du français vers les autres langues.
   Ce qui n'y figure pas est rendu tel quel : les noms propres n'ont pas besoin
   d'être traduits. */
var LEXIQUE = {
  es: {
    /* étiquettes et thèmes */
    'Été': 'Verano', 'Grandir': 'Crecer', 'Nuit': 'Noche', 'Amitié': 'Amistad',
    'Jardin': 'Jardín', 'Plage': 'Playa', 'Humeurs': 'Humores',
    'Monsieur Madame': 'Mr. Men', 'Tous ensemble': 'Todos juntos',
    'Mélange': 'Mezcla', 'Copines': 'Amigas', 'Tu choisis': 'Tú eliges',
    'Émotions': 'Emociones', 'Partager': 'Compartir', 'Règles': 'Reglas',
    'Famille': 'Familia', 'Dehors': 'Fuera', 'Bêtises': 'Travesuras',
    /* univers */
    'La Reine des Neiges': 'Frozen', 'Les Monsieur Madame': 'Los Mr. Men',
    'Le grand mélange': 'La gran mezcla', 'Les copines de Livia': 'Las amigas de Livia',
    'Tu choisis !': '¡Tú eliges!',
    'Livia, Peppa et toute la famille Pig': 'Livia, Peppa y toda la familia Pig',
    'Livia, Elsa, Anna et Olaf': 'Livia, Elsa, Anna y Olaf',
    'Livia, Bluey, Bingo et toute la famille Heeler': 'Livia, Bluey, Bingo y toda la familia Heeler',
    'Livia et les petits bonshommes ronds': 'Livia y los muñequitos redondos',
    'Quand tous les amis de Livia se retrouvent': 'Cuando se juntan todos los amigos de Livia',
    'Roxane, Juliette, Isadora — et le petit frère': 'Roxane, Juliette, Isadora — y el hermanito',
    "C'est Livia qui décide comment l'histoire continue": 'Livia decide cómo sigue el cuento'
  },
  en: {
    'Été': 'Summer', 'Grandir': 'Growing up', 'Nuit': 'Night', 'Amitié': 'Friendship',
    'Jardin': 'Garden', 'Plage': 'Beach', 'Humeurs': 'Moods',
    'Monsieur Madame': 'Mr. Men', 'Tous ensemble': 'All together',
    'Mélange': 'Mix-up', 'Copines': 'Friends', 'Tu choisis': 'You choose',
    'Émotions': 'Feelings', 'Partager': 'Sharing', 'Règles': 'Rules',
    'Famille': 'Family', 'Dehors': 'Outdoors', 'Bêtises': 'Mischief',
    'La Reine des Neiges': 'Frozen', 'Les Monsieur Madame': 'The Mr. Men',
    'Le grand mélange': 'The big mix-up', 'Les copines de Livia': "Livia's friends",
    'Tu choisis !': 'You choose!',
    'Livia, Peppa et toute la famille Pig': 'Livia, Peppa and the whole Pig family',
    'Livia, Elsa, Anna et Olaf': 'Livia, Elsa, Anna and Olaf',
    'Livia, Bluey, Bingo et toute la famille Heeler': 'Livia, Bluey, Bingo and the whole Heeler family',
    'Livia et les petits bonshommes ronds': 'Livia and the little round folk',
    'Quand tous les amis de Livia se retrouvent': "When all of Livia's friends get together",
    'Roxane, Juliette, Isadora — et le petit frère': 'Roxane, Juliette, Isadora — and the baby brother',
    "C'est Livia qui décide comment l'histoire continue": 'Livia decides how the story goes on'
  }
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
        title_en: "Livia and Peppa at the beach",
        title_es: "Livia y Peppa en la playa",
        subtitle: 'Le premier jour des vacances',
        subtitle_en: "The first day of the holidays",
        subtitle_es: "El primer día de vacaciones",
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
            text: "Le soleil se lève sur la maison de Peppa. C'est le tout premier jour des grandes vacances ! Livia sonne à la porte avec son sac de plage et son plus beau chapeau.",
            es: "El sol sale sobre la casa de Peppa. ¡Es el primerísimo día de las vacaciones de verano! Livia llama a la puerta con su bolsa de playa y su sombrero más bonito.",
            en: "The sun rises over Peppa's house. It is the very first day of the summer holidays! Livia rings the doorbell with her beach bag and her best hat."
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
            text: "Papa Pig charge la voiture rouge : le parasol, les serviettes, la glacière et un ballon énorme. George, lui, serre très fort son dinosaure. Il ne part jamais sans lui.",
            es: "Papá Pig carga el coche rojo: la sombrilla, las toallas, la nevera y una pelota enorme. George abraza fuerte a su dinosaurio. Nunca se va sin él.",
            en: "Daddy Pig loads the red car: the parasol, the towels, the cool box and an enormous ball. George is holding his dinosaur very tight. He never goes anywhere without him."
          },
          {
            scene: {
              bg: 'road',
              items: [{ t: 'car', x: 400, y: 500, s: 1.15 }],
              sfx: [{ t: 'VROUM !', x: 150, y: 380, fs: 52, rot: -10 }],
              bubbles: [{ x: 430, y: 50, w: 300, t: 'La mer ! Je vois la mer !', tx: 420, ty: 400 }]
            },
            text: "En route ! Pendant tout le trajet, Livia et Peppa chantent à tue-tête. Et puis, tout en haut de la colline, la mer apparaît : toute bleue, toute brillante.",
            es: "¡En marcha! Durante todo el viaje, Livia y Peppa cantan a grito pelado. Y entonces, en lo alto de la colina, aparece el mar: todo azul, todo brillante.",
            en: "Off they go! For the whole journey, Livia and Peppa sing at the tops of their voices. And then, at the top of the hill, the sea appears: all blue, all shiny."
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
            text: "Le sable est tout chaud sous les pieds. Peppa plante le parasol, Livia étale les serviettes, et toutes les deux se mettent à sauter partout. Les vacances, ça commence fort !",
            es: "La arena está calentita bajo los pies. Peppa clava la sombrilla, Livia extiende las toallas, y las dos se ponen a saltar por todas partes. ¡Las vacaciones empiezan fuerte!",
            en: "The sand is warm underfoot. Peppa plants the parasol, Livia lays out the towels, and both of them start jumping about everywhere. The holidays are off to a strong start!"
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
            text: "Ensemble, elles construisent un immense château de sable : cinq tours, un drapeau tout en haut, un fossé et même un pont-levis. C'est le plus beau château de toute la plage.",
            es: "Juntas construyen un castillo de arena inmenso: cinco torres, una bandera arriba del todo, un foso y hasta un puente levadizo. Es el castillo más bonito de toda la playa.",
            en: "Together they build an enormous sandcastle: five towers, a flag right at the top, a moat and even a drawbridge. It is the finest castle on the whole beach."
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
            text: "Mais une petite vague coquine arrive sur la pointe des pieds… et emporte une tour ! Peppa ouvre grand la bouche. Puis Livia éclate de rire, et tout le monde rigole avec elle.",
            es: "Pero llega una olita traviesa de puntillas… ¡y se lleva una torre! Peppa abre mucho la boca. Y entonces Livia se echa a reír, y todo el mundo se ríe con ella.",
            en: "But a cheeky little wave creeps up on tiptoe… and carries off a tower! Peppa's mouth falls open. Then Livia bursts out laughing, and everybody laughs with her."
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
            text: "Dans l'eau, Papa Pig fait un plongeon spectaculaire. PLOUF ! Une vague géante arrose absolument tout le monde. « C'est moi le champion ! » dit Papa Pig, très fier de lui.",
            es: "En el agua, papá Pig hace un salto espectacular. ¡PLAF! Una ola gigante salpica absolutamente a todos. «¡Soy el campeón!», dice papá Pig, orgullosísimo.",
            en: "In the water, Daddy Pig performs a spectacular dive. SPLASH! A giant wave soaks absolutely everybody. «I'm the champion!» says Daddy Pig, very pleased with himself."
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
            text: "Après la baignade, c'est l'heure du goûter : des tranches de pastèque bien fraîches et une glace à trois boules. Livia choisit fraise, vanille et myrtille. Peppa prend la même chose.",
            es: "Después del baño llega la merienda: rodajas de sandía bien fresquitas y un helado de tres bolas. Livia elige fresa, vainilla y arándano. Peppa pide lo mismo.",
            en: "After the swim it is time for a snack: cool slices of watermelon and a three-scoop ice cream. Livia chooses strawberry, vanilla and blueberry. Peppa has the same."
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
            text: "Le soleil descend tout doucement dans la mer. Livia a trouvé un coquillage rose : elle le gardera pour toujours. « Vivement demain », chuchote Peppa. Et voilà, l'été ne fait que commencer.",
            es: "El sol baja despacito hacia el mar. Livia ha encontrado una concha rosa: la guardará para siempre. «Que llegue ya mañana», susurra Peppa. Y el verano no ha hecho más que empezar.",
            en: "The sun slips gently down into the sea. Livia has found a pink shell: she will keep it forever. «I can't wait for tomorrow,» whispers Peppa. And the summer has only just begun."
          }
        ]
      },

      /* ---------- Histoire 2 ---------- */
      {
        id: 'camping',
        title: 'Le camping sous les étoiles',
        title_en: "Camping under the stars",
        title_es: "El campamento bajo las estrellas",
        subtitle: 'Une nuit dans la forêt',
        subtitle_en: "A night in the forest",
        subtitle_es: "Una noche en el bosque",
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
            text: "La voiture s'arrête au bord de la forêt. Ce soir, personne ne dort dans un lit : tout le monde dort sous la tente ! Peppa et Livia sautent de joie dans l'herbe.",
            es: "El coche se para al borde del bosque. Esta noche nadie duerme en una cama: ¡todo el mundo duerme en la tienda! Peppa y Livia dan saltos de alegría en la hierba.",
            en: "The car stops at the edge of the forest. Tonight nobody is sleeping in a bed: everybody is sleeping in the tent! Peppa and Livia jump for joy in the grass."
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
            text: "Papa Pig veut monter la tente tout seul. Il tire une ficelle, il pousse un piquet… et BADABOUM ! La tente s'écroule sur lui. On ne voit plus qu'un gros tas orange qui bouge.",
            es: "Papá Pig quiere montar la tienda él solo. Tira de una cuerda, empuja una estaca… ¡y CATAPLÚN! La tienda se le viene encima. Solo se ve un bulto naranja que se mueve.",
            en: "Daddy Pig wants to put the tent up by himself. He pulls a string, he pushes a peg… and CRASH! The tent collapses on top of him. All you can see is a big orange heap wriggling."
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
            text: "Heureusement, Maman Pig sait monter les tentes en trois minutes. Et devinez qui campe juste à côté ? Suzy Mouton ! La bande est au complet.",
            es: "Por suerte, mamá Pig sabe montar tiendas en tres minutos. ¿Y adivináis quién acampa justo al lado? ¡Suzy Oveja! La pandilla está completa.",
            en: "Luckily, Mummy Pig can put up a tent in three minutes. And guess who is camping right next door? Suzy Sheep! The gang is complete."
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
            text: "Il faut du bois pour le feu de camp. Dans la forêt, Livia ramasse les plus grosses branches et Peppa les plus petites. Un papillon orange les accompagne tout le long du chemin.",
            es: "Hace falta leña para la hoguera. En el bosque, Livia recoge las ramas más gordas y Peppa las más pequeñas. Una mariposa naranja las acompaña todo el camino.",
            en: "They need wood for the campfire. In the forest, Livia gathers the biggest branches and Peppa the smallest. An orange butterfly keeps them company the whole way."
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
            text: "La nuit tombe et le feu de camp crépite. Chacun fait griller un chamallow au bout d'un bâton. Celui de Livia est doré à point. Celui de Papa Pig est… tout noir.",
            es: "Cae la noche y la hoguera crepita. Cada uno tuesta una nube de azúcar en la punta de un palo. La de Livia queda dorada. La de papá Pig queda… completamente negra.",
            en: "Night falls and the campfire crackles. Everybody toasts a marshmallow on the end of a stick. Livia's comes out perfectly golden. Daddy Pig's comes out… completely black."
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
            text: "Soudain, CRAC ! Un bruit dans les buissons. Peppa se cache derrière Livia. Livia se cache derrière Peppa. Personne n'ose plus bouger un seul cil.",
            es: "De pronto, ¡CRAC! Un ruido entre los matorrales. Peppa se esconde detrás de Livia. Livia se esconde detrás de Peppa. Nadie se atreve a mover ni una pestaña.",
            en: "Suddenly, CRACK! A noise in the bushes. Peppa hides behind Livia. Livia hides behind Peppa. Nobody dares move a single eyelash."
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
            text: "Les buissons s'écartent… et un tout petit hérisson sort son museau. Il vient juste renifler les chamallows. Livia lui dit bonsoir tout doucement, et il repart en trottinant.",
            es: "Los matorrales se abren… y asoma el morro un erizo pequeñísimo. Solo viene a oler las nubes de azúcar. Livia le da las buenas noches muy bajito, y él se va trotando.",
            en: "The bushes part… and a very small hedgehog pokes his nose out. He has only come to sniff the marshmallows. Livia says good evening very softly, and off he trots."
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
            text: "Puis tout le monde s'allonge dans l'herbe pour regarder le ciel. Il y a des milliers d'étoiles. Une étoile file très vite au-dessus des arbres. « Vite, fais un vœu ! » dit Peppa.",
            es: "Después todos se tumban en la hierba a mirar el cielo. Hay miles de estrellas. Una estrella cruza muy rápido por encima de los árboles. «¡Rápido, pide un deseo!», dice Peppa.",
            en: "Then everybody lies down in the grass to look at the sky. There are thousands of stars. One shoots very fast above the trees. «Quick, make a wish!» says Peppa."
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
            text: "Dans la tente, les deux amies se glissent dans leurs sacs de couchage. Dehors, on entend juste les grillons. « Bonne nuit Livia. » « Bonne nuit Peppa. » Et tout le monde s'endort en souriant.",
            es: "Dentro de la tienda, las dos amigas se meten en sus sacos de dormir. Fuera solo se oyen los grillos. «Buenas noches, Livia.» «Buenas noches, Peppa.» Y todos se duermen sonriendo.",
            en: "In the tent, the two friends wriggle into their sleeping bags. Outside there are only crickets. «Good night, Livia.» «Good night, Peppa.» And everybody falls asleep smiling."
          }
        ]
      },

      /* ---------- Histoire 3 ---------- */
      {
        id: 'piscine',
        title: 'La grande journée à la piscine',
        title_en: "The big day at the pool",
        title_es: "El gran día en la piscina",
        subtitle: 'Le toboggan géant',
        subtitle_en: "The giant slide",
        subtitle_es: "El tobogán gigante",
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
            text: "Aujourd'hui, il fait vraiment très très chaud. Même les papillons cherchent de l'ombre. Alors Maman Pig a une idée formidable : direction la piscine !",
            es: "Hoy hace muchísimo, muchísimo calor. Hasta las mariposas buscan sombra. Así que mamá Pig tiene una idea estupenda: ¡a la piscina!",
            en: "Today it is really, really hot. Even the butterflies are looking for shade. So Mummy Pig has a brilliant idea: off to the pool!"
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
            text: "Au milieu du parc, il y a un toboggan orange. Un ÉNORME toboggan. Il monte si haut qu'on dirait qu'il touche les nuages.",
            es: "En medio del parque hay un tobogán naranja. Un tobogán ENORME. Sube tan alto que parece que toca las nubes.",
            en: "In the middle of the park there is an orange slide. An ENORMOUS slide. It goes up so high that it looks like it touches the clouds."
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
            text: "Peppa s'approche des marches. Puis elle regarde tout en haut. Puis elle regarde ses pieds. « Je crois que je préfère regarder », dit-elle tout doucement.",
            es: "Peppa se acerca a los escalones. Luego mira hacia arriba del todo. Luego se mira los pies. «Creo que prefiero mirar», dice muy bajito.",
            en: "Peppa goes over to the steps. Then she looks right to the top. Then she looks at her feet. «I think I'd rather watch,» she says very quietly."
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
            text: "Alors Livia vient tout près et lui prend la main. « On y va ensemble », dit-elle. « Toi devant, moi derrière. Et si tu as peur, tu fermes les yeux. »",
            es: "Entonces Livia se acerca y le da la mano. «Vamos juntas», dice. «Tú delante, yo detrás. Y si te da miedo, cierras los ojos.»",
            en: "So Livia comes right over and takes her hoof. «We'll go together,» she says. «You in front, me behind. And if you're scared, you close your eyes.»"
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
            text: "Une, deux, trois… c'est parti ! Le toboggan tourne à gauche, tourne à droite, et SPLAAASH ! Les deux amies atterrissent dans l'eau au milieu d'une gerbe d'éclaboussures.",
            es: "Una, dos, tres… ¡allá vamos! El tobogán gira a la izquierda, gira a la derecha, y ¡PLAAAF! Las dos amigas aterrizan en el agua entre una lluvia de salpicaduras.",
            en: "One, two, three… off they go! The slide turns left, turns right, and SPLAAASH! The two friends land in the water in a great fountain of spray."
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
            text: "Peppa remonte à la surface, les oreilles pleines d'eau, et elle crie : « ENCORE ! » Elles refont le toboggan onze fois. Onze !",
            es: "Peppa sale a la superficie con las orejas llenas de agua, y grita: «¡OTRA VEZ!» Repiten el tobogán once veces. ¡Once!",
            en: "Peppa comes up with her ears full of water, and shouts: «AGAIN!» They go down the slide eleven times. Eleven!"
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
            text: "George, lui, ne quitte pas sa bouée. Il a mis son dinosaure dedans, bien assis au milieu. « Dine-saure ! » dit George. Papa Pig fait la planche et ronfle un peu.",
            es: "George no suelta su flotador. Ha metido dentro a su dinosaurio, bien sentado en el centro. «¡Dino-saurio!», dice George. Papá Pig hace el muerto y ronca un poquito.",
            en: "George will not leave his rubber ring. He has put his dinosaur inside it, sitting up nicely in the middle. «Dine-saur!» says George. Daddy Pig floats on his back and snores a little."
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
            text: "Sur le chemin du retour, il y a une magnifique flaque de boue. Peppa saute dedans à pieds joints, évidemment. Livia saute aussi. Et Maman Pig soupire… en riant.",
            es: "De vuelta a casa hay un charco de barro magnífico. Peppa salta dentro con los dos pies, por supuesto. Livia salta también. Y mamá Pig suspira… riéndose.",
            en: "On the way home there is a magnificent muddy puddle. Peppa jumps in with both feet, obviously. Livia jumps in too. And Mummy Pig sighs… while laughing."
          }
        ]
      },

      /* ---------- Histoire 4 ---------- */
      {
        id: 'cerf-volant',
        title: 'Le cerf-volant de l\'été',
        title_en: "The summer kite",
        title_es: "La cometa del verano",
        subtitle: 'Un après-midi sur la colline',
        subtitle_en: "An afternoon on the hill",
        subtitle_es: "Una tarde en la colina",
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
            text: "Ce matin, le vent souffle sur la colline. Il fait danser l'herbe et décoiffe tout le monde. « Un vent pareil », dit Livia, « c'est un vent à cerf-volant ! »",
            es: "Esta mañana sopla el viento en la colina. Hace bailar la hierba y despeina a todo el mundo. «Un viento así», dice Livia, «¡es un viento de cometa!»",
            en: "This morning the wind is blowing on the hill. It makes the grass dance and messes up everybody's hair. «A wind like that,» says Livia, «is a kite wind!»"
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
            text: "Alors elles en fabriquent un : deux bâtons en croix, du papier rouge, une longue ficelle et une queue en rubans. Papa Pig aide un peu. Enfin… il essaie.",
            es: "Así que fabrican una: dos palos en cruz, papel rojo, un cordel largo y una cola de cintas. Papá Pig ayuda un poco. Bueno… lo intenta.",
            en: "So they make one: two sticks crossed over, red paper, a long string and a tail made of ribbons. Daddy Pig helps a bit. Well… he tries."
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
            text: "Premier essai : le cerf-volant monte de trois centimètres… et retombe dans l'herbe. Deuxième essai : pareil. Troisième essai : encore pareil.",
            es: "Primer intento: la cometa sube tres centímetros… y vuelve a caer en la hierba. Segundo intento: igual. Tercer intento: otra vez igual.",
            en: "First go: the kite rises three centimetres… and falls back into the grass. Second go: the same. Third go: exactly the same again."
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
            text: "Alors Livia se met à courir. Elle court, elle court, la ficelle se tend… et d'un coup, le cerf-volant s'envole ! Il monte, il monte, plus haut que les arbres.",
            es: "Entonces Livia se pone a correr. Corre, corre, el cordel se tensa… ¡y de golpe la cometa despega! Sube, sube, más alto que los árboles.",
            en: "So Livia starts to run. She runs and runs, the string goes tight… and all at once the kite takes off! Up it goes, up and up, higher than the trees."
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
            text: "Le cerf-volant rouge danse dans le ciel bleu. Il tourne, il plonge, il remonte. Les oiseaux viennent voir de plus près qui est ce drôle de nouvel ami.",
            es: "La cometa roja baila en el cielo azul. Gira, se lanza en picado, vuelve a subir. Los pájaros se acercan a ver quién es ese amigo nuevo tan raro.",
            en: "The red kite dances in the blue sky. It turns, it dives, it climbs again. The birds come for a closer look at this odd new friend."
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
            text: "Et puis, une grosse rafale ! Le cerf-volant part de travers et se coince tout en haut du grand arbre. Impossible de l'attraper, même sur la pointe des pieds.",
            es: "Y entonces, ¡una ráfaga! La cometa se va de lado y se engancha en lo más alto del árbol grande. Imposible alcanzarla, ni de puntillas.",
            en: "And then, a big gust! The kite goes sideways and gets stuck right at the top of the big tree. Impossible to reach, even on tiptoe."
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
            text: "Mais Papa Pig connaît un secret : il sait grimper aux arbres. Il monte branche après branche, tend le bras… et hop ! Le cerf-volant est sauvé. Tout le monde applaudit.",
            es: "Pero papá Pig tiene un secreto: sabe trepar a los árboles. Sube rama a rama, estira el brazo… ¡y hop! La cometa está salvada. Todo el mundo aplaude.",
            en: "But Daddy Pig has a secret: he can climb trees. Up he goes branch by branch, stretches out an arm… and there! The kite is saved. Everybody claps."
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
            text: "Pour finir, tout le monde s'installe sur la couverture, en haut de la colline. Pastèque pour tout le monde. Le ciel devient orange, et le cerf-volant se repose à côté d'elles.",
            es: "Para acabar, todos se instalan en la manta, arriba de la colina. Sandía para todos. El cielo se pone naranja, y la cometa descansa a su lado.",
            en: "To finish, everybody settles on the blanket at the top of the hill. Watermelon for all. The sky turns orange, and the kite rests beside them."
          }
        ]
      },

      /* ---------- 5 — la jalousie ---------- */
      {
        id: 'cadeau-george',
        title: 'Le cadeau de George',
        title_en: "George's present",
        title_es: "El regalo de George",
        subtitle: 'Quand on voudrait être le seul',
        subtitle_en: "When you'd rather be the only one",
        subtitle_es: "Cuando querrías ser el único",
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
            text: "Mamie Pig est venue voir George parce qu'il a été très malade toute la semaine. Elle lui a apporté un dinosaure tout neuf, vert, avec des piquants sur le dos.",
            es: "La abuela Pig ha venido a ver a George porque ha estado muy malito toda la semana. Le ha traído un dinosaurio nuevecito, verde, con pinchos en la espalda.",
            en: "Granny Pig has come to see George because he has been very poorly all week. She has brought him a brand new dinosaur, green, with spikes down its back."
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
            text: "Peppa regarde le dinosaure. Puis elle regarde ses pattes vides. Quelque chose de chaud et de serré monte dans son ventre. « Et moi alors ? » dit-elle tout bas.",
            es: "Peppa mira el dinosaurio. Luego se mira las manos vacías. Algo caliente y apretado le sube por la barriga. «¿Y yo qué?», dice bajito.",
            en: "Peppa looks at the dinosaur. Then she looks at her empty hooves. Something hot and tight rises in her tummy. «What about me?» she says quietly."
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
            text: "Alors Peppa dit quelque chose de méchant : « Il est moche, ton dinosaure. » George baisse les oreilles. Et Peppa, aussitôt, se sent encore plus mal qu'avant.",
            es: "Entonces Peppa dice algo feo: «Es feísimo, tu dinosaurio.» George baja las orejas. Y Peppa, en el acto, se siente todavía peor que antes.",
            en: "So Peppa says something unkind: «Your dinosaur is ugly.» George's ears droop. And straight away Peppa feels even worse than before."
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
            text: "Maman Pig s'assoit à côté d'elle. « Tu sais ce que tu as, là, dans le ventre ? Ça s'appelle la jalousie. C'est lourd à porter, et ça ne rend personne joyeux. »",
            es: "Mamá Pig se sienta a su lado. «¿Sabes lo que tienes ahí, en la barriga? Eso se llama celos. Pesa mucho de llevar, y no pone contento a nadie.»",
            en: "Mummy Pig sits down beside her. «Do you know what that is, there, in your tummy? It's called jealousy. It's heavy to carry, and it makes nobody happy.»"
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
            text: "« George a eu un cadeau parce qu'il a été malade », explique Maman. « Toi, pendant ce temps-là, tu courais dans le jardin. Ça aussi, c'est un beau cadeau. »",
            es: "«George ha tenido un regalo porque ha estado enfermo», explica mamá. «Tú, mientras tanto, corrías por el jardín. Eso también es un buen regalo.»",
            en: "«George got a present because he was ill,» explains Mummy. «You, meanwhile, were running about in the garden. That's a lovely present too.»"
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
            text: "Peppa va voir son petit frère. « Pardon George. Il est très beau, ton dinosaure. » George ne répond rien : il lui met simplement le dinosaure dans les pattes.",
            es: "Peppa va a ver a su hermanito. «Perdona, George. Es muy bonito, tu dinosaurio.» George no contesta nada: simplemente le pone el dinosaurio en las manos.",
            en: "Peppa goes to see her little brother. «Sorry, George. Your dinosaur is very nice.» George says nothing at all: he simply puts the dinosaur into her hooves."
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
            text: "Il voulait juste jouer avec elle depuis le début. Tout l'après-midi, le dinosaure attaque le jardin en rugissant. Et Peppa, dans son ventre, ne sent plus rien de lourd du tout.",
            es: "Lo único que quería desde el principio era jugar con ella. Toda la tarde, el dinosaurio ataca el jardín rugiendo. Y Peppa, en la barriga, ya no siente nada pesado.",
            en: "He had only ever wanted to play with her. All afternoon the dinosaur attacks the garden, roaring. And in Peppa's tummy there is nothing heavy left at all."
          }
        ]
      },

      /* ---------- 6 — le partage ---------- */
      {
        id: 'chacun-son-tour',
        title: 'Le vélo de Livia',
        title_en: "Livia's ball",
        title_es: "La pelota de Livia",
        subtitle: 'Ce qui est plus drôle à deux',
        subtitle_en: "What's more fun with two",
        subtitle_es: "Lo que es más divertido entre dos",
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
            text: "Livia arrive dans le jardin avec un ballon tout neuf, bleu et jaune, qui rebondit très haut. Peppa n'a jamais vu un aussi beau ballon de toute sa vie.",
            es: "Livia llega al jardín con una pelota nuevecita, azul y amarilla, que bota altísimo. Peppa no ha visto una pelota tan bonita en toda su vida.",
            en: "Livia arrives in the garden with a brand new ball, blue and yellow, that bounces very high. Peppa has never seen such a beautiful ball in her whole life."
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
            text: "Peppa attrape le ballon et le serre très fort contre elle. « C'est moi qui l'ai ! » Livia attend. Elle attend encore. Puis elle s'assoit dans l'herbe, toute seule.",
            es: "Peppa coge la pelota y la aprieta fuerte contra ella. «¡La tengo yo!» Livia espera. Sigue esperando. Luego se sienta en la hierba, sola.",
            en: "Peppa grabs the ball and hugs it tight. «I've got it!» Livia waits. She waits some more. Then she sits down in the grass, all by herself."
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
            text: "Peppa fait rebondir le ballon toute seule. Poc. Poc. Poc. C'est bizarre : le ballon est toujours aussi beau, mais ce n'est plus drôle du tout.",
            es: "Peppa bota la pelota ella sola. Poc. Poc. Poc. Es raro: la pelota sigue siendo igual de bonita, pero ya no tiene ninguna gracia.",
            en: "Peppa bounces the ball on her own. Bop. Bop. Bop. It's odd: the ball is just as beautiful, but it isn't fun any more at all."
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
            text: "Peppa regarde son amie assise dans l'herbe, le menton sur les genoux. Elle comprend quelque chose : le ballon est à Livia, et Livia ne joue même plus avec.",
            es: "Peppa mira a su amiga sentada en la hierba, con la barbilla en las rodillas. Y entiende una cosa: la pelota es de Livia, y Livia ya ni siquiera juega.",
            en: "Peppa looks at her friend sitting in the grass, chin on her knees. And she understands something: the ball is Livia's, and Livia isn't even playing with it."
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
            text: "Alors Peppa se lève et lui tend le ballon. « Chacun son tour, d'accord ? » Livia sourit tellement fort que ses joues deviennent toutes rondes.",
            es: "Entonces Peppa se levanta y le tiende la pelota. «Por turnos, ¿vale?» Livia sonríe tan fuerte que se le ponen los mofletes redondos.",
            en: "So Peppa gets up and holds out the ball. «Turn about, all right?» Livia smiles so hard that her cheeks go completely round."
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
            text: "Le ballon vole de l'une à l'autre. « À toi ! » « À moi ! » Elles inventent des règles compliquées, puis elles les oublient, puis elles en inventent d'autres.",
            es: "La pelota vuela de una a otra. «¡Para ti!» «¡Para mí!» Inventan reglas complicadísimas, luego se les olvidan, luego inventan otras.",
            en: "The ball flies from one to the other. «Yours!» «Mine!» They invent complicated rules, then forget them, then invent some more."
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
            text: "Le soir, elles sont couchées dans l'herbe, essoufflées. « Le ballon était plus rigolo à deux », dit Peppa. « Beaucoup plus », répond Livia. Et le ballon, lui, se repose.",
            es: "Por la tarde están tumbadas en la hierba, sin aliento. «La pelota tenía más gracia entre dos», dice Peppa. «Muchísima más», contesta Livia. Y la pelota descansa.",
            en: "That evening they lie in the grass, out of breath. «The ball was more fun with two,» says Peppa. «Much more,» answers Livia. And the ball has a rest."
          }
        ]
      },

      /* ---------- 7 — la colère ---------- */
      {
        id: 'grosse-colere',
        title: 'La grosse colère de Peppa',
        title_en: "Peppa's big temper",
        title_es: "El gran enfado de Peppa",
        subtitle: 'Souffler comme un dragon',
        subtitle_en: "Breathing out like a dragon",
        subtitle_es: "Soplar como un dragón",
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
            text: "Peppa a construit une tour de cubes immense. Elle a mis presque une heure. Elle est si haute qu'il faut monter sur le tabouret pour poser le dernier cube.",
            es: "Peppa ha construido una torre de cubos inmensa. Ha tardado casi una hora. Es tan alta que hay que subirse al taburete para poner el último cubo.",
            en: "Peppa has built an enormous tower of blocks. It took her nearly an hour. It is so tall that you have to stand on the stool to put the last block on."
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
            text: "George passe en courant. Sa queue accroche la tour. BADABOUM ! Les cubes roulent partout dans la chambre. George ne l'a pas fait exprès du tout.",
            es: "George pasa corriendo. Su rabo engancha la torre. ¡CATAPLÚN! Los cubos ruedan por toda la habitación. George no lo ha hecho aposta en absoluto.",
            en: "George runs past. His tail catches the tower. CRASH! The blocks roll all over the bedroom. George did not do it on purpose at all."
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
            text: "Alors Peppa devient toute rouge. Elle crie très fort, elle tape du pied, elle jette un cube contre le mur. La colère est arrivée d'un seul coup, comme un orage.",
            es: "Entonces Peppa se pone roja del todo. Grita muy fuerte, patalea, tira un cubo contra la pared. El enfado ha llegado de golpe, como una tormenta.",
            en: "So Peppa goes bright red. She shouts very loudly, she stamps her foot, she throws a block at the wall. The temper arrived all at once, like a storm."
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
            text: "Papa Pig entre et s'assoit par terre, sans crier. « Tu as le droit d'être en colère », dit-il. « Ça arrive à tout le monde. Mais la colère n'a pas le droit de faire mal. »",
            es: "Papá Pig entra y se sienta en el suelo, sin gritar. «Tienes derecho a estar enfadada», dice. «Le pasa a todo el mundo. Pero el enfado no tiene derecho a hacer daño.»",
            en: "Daddy Pig comes in and sits down on the floor, without shouting. «You're allowed to be angry,» he says. «It happens to everybody. But anger isn't allowed to hurt anyone.»"
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
            text: "« Regarde », dit Papa. « On respire par le nez, très fort, et on souffle par la bouche comme un dragon. Trois fois. » Ils soufflent tous les deux. Ça fait un bruit ridicule.",
            es: "«Mira», dice papá. «Se coge aire por la nariz, muy fuerte, y se suelta por la boca como un dragón. Tres veces.» Soplan los dos. Suena ridículo.",
            en: "«Look,» says Daddy. «You breathe in through your nose, very hard, and out through your mouth like a dragon. Three times.» They both breathe out. It sounds ridiculous."
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
            text: "Au troisième souffle, l'orage est parti. Peppa va voir George. « Pardon d'avoir crié. » George hausse les épaules : il avait déjà tout oublié.",
            es: "Al tercer soplido, la tormenta se ha ido. Peppa va a ver a George. «Perdona por haber gritado.» George se encoge de hombros: ya se le había olvidado todo.",
            en: "By the third breath, the storm has gone. Peppa goes to see George. «Sorry for shouting.» George shrugs: he had forgotten all about it already."
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
            text: "Ils reconstruisent la tour ensemble. Cette fois, elle est encore plus haute. Et quand elle retombe, à la fin, ce sont eux deux qui la font tomber, exprès, en riant.",
            es: "Reconstruyen la torre juntos. Esta vez sale aún más alta. Y cuando se cae, al final, son ellos dos quienes la tiran, a propósito, riéndose.",
            en: "They rebuild the tower together. This time it is even taller. And when it falls down, at the end, it is the two of them who knock it over, on purpose, laughing."
          }
        ]
      },

      /* ---------- 8 — écouter ses parents ---------- */
      {
        id: 'flaque-interdite',
        title: 'La flaque interdite',
        title_en: "The forbidden puddle",
        title_es: "El charco prohibido",
        subtitle: 'Pourquoi Maman avait dit non',
        subtitle_en: "Why Mummy had said no",
        subtitle_es: "Por qué mamá había dicho que no",
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
            text: "Cet après-midi, c'est la fête de l'école. Maman a sorti la belle robe de Peppa, celle qu'elle ne met presque jamais. « Et pas de flaques aujourd'hui », dit Maman.",
            es: "Esta tarde es la fiesta del colegio. Mamá ha sacado el vestido bonito de Peppa, el que casi nunca se pone. «Y hoy nada de charcos», dice mamá.",
            en: "This afternoon is the school fair. Mummy has got out Peppa's best dress, the one she hardly ever wears. «And no puddles today,» says Mummy."
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
            text: "Sur le chemin, il y a une flaque. Pas une petite : une flaque magnifique, toute ronde, toute marron, qui attend là comme si elle avait été faite exprès pour elle.",
            es: "Por el camino hay un charco. No uno pequeño: un charco magnífico, redondo, marrón, que espera ahí como si lo hubieran hecho a propósito para ella.",
            en: "On the way there is a puddle. Not a small one: a magnificent puddle, perfectly round, perfectly brown, waiting there as if it had been made specially for her."
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
            text: "« Ta maman a dit non », rappelle Livia. Peppa regarde la flaque. Puis sa robe. Puis la flaque encore. « Juste un tout petit saut », dit-elle. « Un minuscule. »",
            es: "«Tu mamá ha dicho que no», le recuerda Livia. Peppa mira el charco. Luego su vestido. Luego el charco otra vez. «Solo un saltito», dice. «Minúsculo.»",
            en: "«Your mummy said no,» Livia reminds her. Peppa looks at the puddle. Then at her dress. Then at the puddle again. «Just one tiny jump,» she says. «A minuscule one.»"
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
            text: "SPLATCH ! Le saut n'a rien de minuscule. La boue gicle jusqu'aux oreilles. Pendant une seconde, c'est le plus grand bonheur du monde entier.",
            es: "¡PLAF! El salto no tiene nada de minúsculo. El barro salpica hasta las orejas. Durante un segundo, es la mayor felicidad del mundo entero.",
            en: "SPLAT! The jump is not remotely minuscule. Mud flies up to her ears. For one second, it is the greatest happiness in the whole world."
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
            text: "Puis Peppa baisse les yeux. La belle robe est marron du col jusqu'en bas. Le bonheur, lui, est parti aussi vite qu'il était venu.",
            es: "Luego Peppa baja la mirada. El vestido bonito está marrón desde el cuello hasta abajo. La felicidad se ha ido tan rápido como había venido.",
            en: "Then Peppa looks down. The best dress is brown from the collar to the hem. The happiness has gone as fast as it came."
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
            text: "À la maison, Maman ne crie pas. Elle dit juste : « Je ne t'avais pas dit non pour t'embêter. C'était pour que tu puisses aller à la fête. » Peppa a la gorge serrée.",
            es: "En casa, mamá no grita. Solo dice: «No te dije que no para fastidiarte. Era para que pudieras ir a la fiesta.» A Peppa se le hace un nudo en la garganta.",
            en: "At home, Mummy does not shout. She only says: «I didn't say no to spoil your fun. It was so you could go to the fair.» Peppa's throat goes tight."
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
            text: "Elles arrivent à la fête à la toute fin, en bottes et en habits de tous les jours. « La prochaine fois, j'écoute », dit Peppa. Maman lui prend la patte. « Je sais. »",
            es: "Llegan a la fiesta al final del todo, con botas y ropa de diario. «La próxima vez hago caso», dice Peppa. Mamá le coge la mano. «Ya lo sé.»",
            en: "They get to the fair right at the very end, in wellies and everyday clothes. «Next time, I'll listen,» says Peppa. Mummy takes her hoof. «I know.»"
          }
        ]
      },

      /* ---------- 9 — dire la vérité ---------- */
      {
        id: 'verite',
        title: 'Le vase de Maman',
        title_en: "Mummy's vase",
        title_es: "El jarrón de mamá",
        subtitle: 'Le poids d\'un petit mensonge',
        subtitle_en: "The weight of a small lie",
        subtitle_es: "El peso de una mentira pequeña",
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
            text: "On ne joue pas au ballon dans le salon : c'est la règle. Mais Maman est dans le jardin, et Peppa fait juste un tout petit tir. Puis un deuxième. Puis un troisième.",
            es: "No se juega a la pelota en el salón: esa es la regla. Pero mamá está en el jardín, y Peppa solo da un tirito. Luego un segundo. Luego un tercero.",
            en: "You don't play ball in the living room: that is the rule. But Mummy is in the garden, and Peppa only takes one tiny shot. Then a second. Then a third."
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
            text: "CRAAAC ! Le vase bleu de Maman tombe de l'étagère et se casse en trois morceaux sur le tapis. Peppa reste immobile. Son cœur bat très, très vite.",
            es: "¡CRAAAC! El jarrón azul de mamá se cae del estante y se rompe en tres trozos sobre la alfombra. Peppa se queda inmóvil. El corazón le late muy, muy deprisa.",
            en: "CRASH! Mummy's blue vase falls off the shelf and breaks into three pieces on the rug. Peppa stands perfectly still. Her heart is beating very, very fast."
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
            text: "Maman arrive en courant. « Qui a cassé le vase ? » Le salon devient très silencieux. Et Peppa entend sa propre voix dire : « C'est George. »",
            es: "Mamá llega corriendo. «¿Quién ha roto el jarrón?» El salón se queda en absoluto silencio. Y Peppa oye su propia voz decir: «Ha sido George.»",
            en: "Mummy comes running in. «Who broke the vase?» The living room goes very quiet. And Peppa hears her own voice say: «It was George.»"
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
            text: "George ouvre grand les yeux. « C'est pas moi », dit-il tout doucement. Personne ne le croit. Il part dans sa chambre sans dinosaure, et sans jeu jusqu'au soir.",
            es: "George abre mucho los ojos. «No he sido yo», dice bajito. Nadie le cree. Se va a su cuarto sin dinosaurio, y sin jugar hasta la noche.",
            en: "George's eyes go wide. «Wasn't me,» he says very quietly. Nobody believes him. He goes to his room without his dinosaur, and without playing until evening."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'peppa', x: 420, y: 500, s: 1.25, pose: 'shrug', mood: 'sad' }
              ],
              sfx: [{ t: 'ÇA SERRE, DANS LE VENTRE…', x: 400, y: 170, fs: 26, rot: -4, color: '#c99a5f' }]
            },
            text: "Peppa va jouer dehors, mais rien ne marche. Le toboggan n'est pas drôle. Le goûter n'a pas de goût. Le mensonge est resté dans son ventre, et il pèse de plus en plus lourd.",
            es: "Peppa sale a jugar fuera, pero nada funciona. El tobogán no tiene gracia. La merienda no sabe a nada. La mentira se le ha quedado en la barriga, y pesa cada vez más.",
            en: "Peppa goes out to play, but nothing works. The slide isn't fun. Her snack has no taste. The lie has stayed in her tummy, and it gets heavier and heavier."
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
            text: "Alors Peppa revient dans le salon. Sa voix tremble un peu. « Maman… c'est moi qui l'ai cassé. » Voilà. C'est dit. Et d'un coup, son ventre redevient léger.",
            es: "Entonces Peppa vuelve al salón. Le tiembla un poco la voz. «Mamá… lo he roto yo.» Ya está. Ya lo ha dicho. Y de golpe la barriga se le queda ligera otra vez.",
            en: "So Peppa comes back into the living room. Her voice wobbles a bit. «Mummy… I broke it.» There. It is said. And all at once her tummy is light again."
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
            text: "Maman la serre dans ses bras. « Le vase, ce n'est qu'un vase. Dire la vérité quand c'est difficile, ça, c'est courageux. » Puis Peppa va présenter ses excuses à George.",
            es: "Mamá la abraza. «El jarrón solo es un jarrón. Decir la verdad cuando es difícil, eso sí que es valiente.» Y luego Peppa va a pedirle perdón a George.",
            en: "Mummy hugs her. «The vase is only a vase. Telling the truth when it's hard — that's the brave part.» Then Peppa goes to apologise to George."
          }
        ]
      },

      /* ---------- 10 — attendre son tour ---------- */
      {
        id: 'attendre-son-tour',
        title: 'La file du toboggan',
        title_en: "The queue for the slide",
        title_es: "La cola del tobogán",
        subtitle: 'Attendre sans que ce soit long',
        subtitle_en: "Waiting without it feeling long",
        subtitle_es: "Esperar sin que se haga largo",
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
            text: "Au parc, il n'y a qu'un seul toboggan, et il y a beaucoup de monde. Alors tout le monde fait la queue : Suzy devant, puis Peppa, puis Livia.",
            es: "En el parque solo hay un tobogán, y hay muchísima gente. Así que todo el mundo hace cola: Suzy delante, luego Peppa, luego Livia.",
            en: "At the park there is only one slide, and there are a lot of people. So everybody queues: Suzy in front, then Peppa, then Livia."
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
            text: "La queue avance tout doucement. Peppa se balance d'une patte sur l'autre. « C'est trop long », soupire-t-elle. « Beaucoup trop long. »",
            es: "La cola avanza despacísimo. Peppa se balancea de una pata a la otra. «Es demasiado largo», suspira. «Muchísimo demasiado largo.»",
            en: "The queue moves very slowly. Peppa shifts from one hoof to the other. «It's too long,» she sighs. «Much, much too long.»"
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
            text: "Alors Peppa fait quelque chose de rapide : elle contourne tout le monde et grimpe l'échelle avant son tour. Derrière elle, les autres crient. Suzy croise les bras.",
            es: "Entonces Peppa hace algo muy rápido: rodea a todo el mundo y sube la escalera antes de su turno. Detrás de ella, los demás gritan. Suzy se cruza de brazos.",
            en: "So Peppa does something very quick: she goes round everybody and climbs the ladder out of turn. Behind her, the others shout. Suzy folds her arms."
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
            text: "En bas du toboggan, plus personne ne lui parle. « On ne joue plus avec toi si tu triches », dit Suzy. C'est descendu très vite, et ce n'était même pas amusant.",
            es: "Abajo del tobogán, ya nadie le habla. «No jugamos contigo si haces trampas», dice Suzy. Ha bajado muy rápido, y ni siquiera ha tenido gracia.",
            en: "At the bottom of the slide, nobody is speaking to her. «We won't play with you if you cheat,» says Suzy. It went down very fast, and it wasn't even fun."
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
            text: "Maman lui explique un secret : quand on attend, on peut remplir l'attente. Compter les nuages. Chanter tout bas. Parler à celui qui est devant.",
            es: "Mamá le explica un secreto: cuando se espera, se puede llenar la espera. Contar nubes. Cantar bajito. Hablar con quien está delante.",
            en: "Mummy tells her a secret: when you wait, you can fill the waiting. Count clouds. Sing quietly. Talk to whoever is in front of you."
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
            text: "Peppa retourne se mettre à la fin de la file. Elle compte les nuages avec Livia. Un, deux, trois… et son tour arrive bien avant le septième.",
            es: "Peppa vuelve a ponerse al final de la cola. Cuenta nubes con Livia. Una, dos, tres… y le llega el turno mucho antes de la séptima.",
            en: "Peppa goes back to the end of the queue. She counts clouds with Livia. One, two, three… and her turn comes well before the seventh."
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
            text: "Et là, ça y est : c'est son tour, pour de vrai. Elle descend en criant, et tout le monde crie avec elle. Attendu, c'était bien meilleur.",
            es: "Y ya está: es su turno, de verdad. Baja gritando, y todo el mundo grita con ella. Esperado, era muchísimo mejor.",
            en: "And there it is: her turn, for real. She goes down shouting, and everybody shouts with her. Waited for, it was far better."
          }
        ]
      },

      /* ---------- 11 : le petit frère ---------- */
      {
        id: 'petit-frere',
        title: 'Pablo veut faire pareil',
        title_en: "Pablo wants to do it too",
        title_es: "Pablo quiere hacer lo mismo",
        subtitle: 'Un petit frère qui copie tout',
        subtitle_en: "A baby brother who copies everything",
        subtitle_es: "Un hermanito que lo copia todo",
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
            text: "Peppa était venue jouer chez Livia. Elles avaient sorti les crayons, les cubes et le grand tapis. C'était un après-midi parfait, qui allait durer trois minutes.",
            es: "Peppa había venido a jugar a casa de Livia. Habían sacado los lápices, los cubos y la alfombra grande. Era una tarde perfecta, que iba a durar tres minutos.",
            en: "Peppa had come to play at Livia's. They had got out the pencils, the blocks and the big rug. It was a perfect afternoon, which was going to last three minutes."
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
            text: "Pablo arriva en trottinant, les bras en avant. Pablo est le petit frère de Livia. Il a un an et demi, il ne parle presque pas, et il veut exactement ce que sa grande sœur a dans les mains.",
            es: "Pablo llegó trotando, con los brazos por delante. Pablo es el hermanito de Livia. Tiene año y medio, casi no habla, y quiere exactamente lo que su hermana mayor tiene en las manos.",
            en: "Pablo came toddling in, arms out in front. Pablo is Livia's baby brother. He is one and a half, he barely talks, and he wants exactly whatever his big sister is holding."
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
            text: "Il prit le crayon rouge. Il renversa la tour de cubes. Il s'assit au milieu du dessin. À chaque fois, il riait, comme si c'était le jeu le plus drôle du monde.",
            es: "Cogió el lápiz rojo. Tiró la torre de cubos. Se sentó encima del dibujo. Cada vez se reía, como si fuera el juego más divertido del mundo.",
            en: "He took the red pencil. He knocked over the tower of blocks. He sat down in the middle of the drawing. Every time, he laughed, as if it were the funniest game in the world."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 400, y: 522, s: 1.25, pose: 'armsup', mood: 'sad' }
              ],
              sfx: [{ t: 'IL FAIT TOUT COMME MOI !', x: 400, y: 164, fs: 24, rot: -4, color: '#e0453c' }]
            },
            text: "« Il fait tout comme moi ! » cria Livia. « Il ne sait rien faire tout seul ! » Elle avait la voix qui montait, et les joues qui chauffaient.",
            es: "«¡Lo hace todo como yo!», gritó Livia. «¡No sabe hacer nada él solo!» Le subía la voz y le ardían las mejillas.",
            en: "«He does everything like me!» shouted Livia. «He can't do anything on his own!» Her voice was going up and her cheeks were getting hot."
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
            text: "« George aussi faisait ça », dit Peppa. « Il copiait tout. Maintenant, il joue avec moi. » Livia n'avait jamais pensé qu'un petit frère, ça pouvait devenir quelqu'un avec qui jouer.",
            es: "«George también hacía eso», dijo Peppa. «Lo copiaba todo. Ahora juega conmigo.» A Livia nunca se le había ocurrido que un hermanito pudiera llegar a ser alguien con quien jugar.",
            en: "«George used to do that too,» said Peppa. «He copied everything. Now he plays with me.» Livia had never thought that a baby brother could turn into somebody to play with."
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
            text: "Alors Livia essaya autre chose. Elle empila trois cubes et dit : « À toi, Pablo. » Pablo posa le quatrième, tout doucement, la langue sortie. La tour tint debout.",
            es: "Entonces Livia probó otra cosa. Apiló tres cubos y dijo: «Te toca, Pablo.» Pablo puso el cuarto, despacito, con la lengua fuera. La torre aguantó.",
            en: "So Livia tried something else. She stacked three blocks and said: «Your turn, Pablo.» Pablo put the fourth one on, very slowly, tongue sticking out. The tower held."
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
            text: "Le soir, la tour faisait onze cubes. Pablo en renversa dix. Livia respira un grand coup, et recommença. C'est aussi ça, être une grande sœur.",
            es: "Por la tarde la torre tenía once cubos. Pablo tiró diez. Livia respiró hondo y volvió a empezar. Eso también es ser hermana mayor.",
            en: "By evening the tower was eleven blocks high. Pablo knocked ten of them over. Livia took a deep breath, and started again. That is part of being a big sister too."
          }
        ]
      },

      /* ---------- 12 : partager quand ça coûte ---------- */
      {
        id: 'dernier-gateau',
        title: 'Le dernier gâteau',
        title_en: "The last cake",
        title_es: "El último pastel",
        subtitle: 'Partager quand il n\'y en a qu\'un',
        subtitle_en: "Sharing when there's only one left",
        subtitle_es: "Compartir cuando solo queda uno",
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
            text: "Il y avait eu six gâteaux au chocolat. Livia en avait mangé deux. Peppa en avait mangé trois. Sur l'assiette, il en restait exactement un.",
            es: "Había habido seis pasteles de chocolate. Livia se había comido dos. Peppa se había comido tres. En el plato quedaba exactamente uno.",
            en: "There had been six chocolate cakes. Livia had eaten two. Peppa had eaten three. On the plate there was exactly one left."
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
            text: "Elles le regardèrent toutes les deux en même temps. Le dernier gâteau. Il n'y avait plus rien à dire, et pourtant il y avait beaucoup de choses à décider.",
            es: "Lo miraron las dos a la vez. El último pastel. Ya no quedaba nada que decir, y sin embargo había muchas cosas que decidir.",
            en: "They both looked at it at the same moment. The last cake. There was nothing left to say, and yet there was a great deal to decide."
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
            text: "« C'est moi qui l'ai vu en premier ! » dit Livia. « C'est moi qui ai apporté l'assiette ! » dit Peppa. Chacune avait une très bonne raison. C'est souvent comme ça, les très bonnes raisons.",
            es: "«¡Lo he visto yo primero!», dijo Livia. «¡Yo he traído el plato!», dijo Peppa. Cada una tenía una razón buenísima. Suele pasar con las razones buenísimas.",
            en: "«I saw it first!» said Livia. «I brought the plate!» said Peppa. Each had a very good reason. That is often the way with very good reasons."
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
            text: "Maman Pig passa par là. « Je ne choisis pas », dit-elle. « C'est votre gâteau. » Puis elle posa un couteau sur la table, et elle repartit, l'air de rien.",
            es: "Mamá Pig pasó por allí. «Yo no elijo», dijo. «Es vuestro pastel.» Y dejó un cuchillo en la mesa, y se fue como si nada.",
            en: "Mummy Pig came past. «I'm not choosing,» she said. «It's your cake.» Then she put a knife on the table, and wandered off, as if nothing had happened."
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
            text: "Livia prit le couteau. Elle coupa le gâteau en deux, tout doucement, en visant bien le milieu. Une moitié n'est pas un gâteau entier. Une moitié, c'est quand même beaucoup mieux que rien du tout.",
            es: "Livia cogió el cuchillo. Cortó el pastel en dos, despacito, apuntando bien al medio. Media parte no es un pastel entero. Pero media parte es muchísimo mejor que nada.",
            en: "Livia picked up the knife. She cut the cake in two, very carefully, aiming for the middle. Half is not a whole cake. But half is a great deal better than nothing at all."
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
            text: "« Prends la plus grosse », dit Peppa. « Toi tu as coupé, alors moi je choisis, et je choisis que tu prends la plus grosse. » Livia ne comprit pas très bien, mais ça lui plut beaucoup.",
            es: "«Coge la más grande», dijo Peppa. «Tú has cortado, así que elijo yo, y elijo que te quedes la más grande.» Livia no lo entendió del todo, pero le gustó mucho.",
            en: "«Take the bigger one,» said Peppa. «You cut it, so I choose, and I choose that you have the bigger one.» Livia did not entirely follow, but she liked it very much."
          },
          {
            scene: {
              bg: 'garden', time: 'sunset',
              items: [
                { t: 'peppa', x: 300, y: 508, s: 1.1, pose: 'sit' },
                { t: 'livia', x: 540, y: 506, s: 1.1, pose: 'sit' }
              ]
            },
            text: "Elles mangèrent leur moitié sur les marches, sans se presser. Livia trouva que ce demi-gâteau-là avait bien meilleur goût que les deux qu'elle avait mangés toute seule.",
            es: "Se comieron su mitad en los escalones, sin prisa. A Livia le pareció que aquella media porción sabía muchísimo mejor que las dos que se había comido sola.",
            en: "They ate their halves on the steps, taking their time. Livia thought that half a cake tasted far better than the two she had eaten all by herself."
          }
        ]
      },

      /* ---------- 13 : la règle qui protège ---------- */
      {
        id: 'donner-la-main',
        title: 'On donne la main',
        title_en: "We hold hands",
        title_es: "Se da la mano",
        subtitle: 'La règle qui ne se discute pas',
        subtitle_en: "The rule that isn't up for discussion",
        subtitle_es: "La regla que no se discute",
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
            text: "Pour aller à la boulangerie, il faut traverser la route. Avant de traverser, on donne la main. C'est comme ça depuis toujours, et personne n'a jamais demandé pourquoi.",
            es: "Para ir a la panadería hay que cruzar la carretera. Antes de cruzar, se da la mano. Es así desde siempre, y nadie ha preguntado nunca por qué.",
            en: "To get to the bakery you have to cross the road. Before crossing, you hold hands. It has always been that way, and nobody has ever asked why."
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
            text: "Ce jour-là, Livia retira sa main. « Je suis grande », dit-elle. « Je peux traverser toute seule. » Elle était très fière de sa phrase. Elle l'avait préparée dans sa tête.",
            es: "Ese día, Livia retiró la mano. «Soy mayor», dijo. «Puedo cruzar yo sola.» Estaba muy orgullosa de su frase. La había preparado en la cabeza.",
            en: "That day, Livia took her hand away. «I'm big,» she said. «I can cross on my own.» She was very proud of her sentence. She had prepared it in her head."
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
            text: "Elle fit deux pas sur la route. Une voiture arriva. Elle klaxonna très fort et s'arrêta d'un coup. Il ne s'est rien passé. Mais il aurait pu se passer quelque chose.",
            es: "Dio dos pasos en la carretera. Llegó un coche. Pitó muy fuerte y frenó de golpe. No pasó nada. Pero podría haber pasado algo.",
            en: "She took two steps into the road. A car came. It hooted very loudly and stopped dead. Nothing happened. But something could have happened."
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
            text: "Maman Pig cria son prénom très fort. Puis elle la serra très fort. Sa voix tremblait un peu. Livia comprit que ce n'était pas de la colère : c'était de la peur.",
            es: "Mamá Pig gritó su nombre muy fuerte. Y luego la abrazó muy fuerte. Le temblaba un poco la voz. Livia entendió que aquello no era enfado: era miedo.",
            en: "Mummy Pig shouted her name very loudly. Then she hugged her very tightly. Her voice was shaking slightly. Livia understood that this was not anger: it was fear."
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
            text: "Elles s'assirent sur le trottoir. « Certaines règles se discutent », dit Maman Pig. « Celle-là, non. La route, c'est la règle qui te ramène à la maison. »",
            es: "Se sentaron en la acera. «Algunas reglas se discuten», dijo mamá Pig. «Esta, no. La carretera es la regla que te trae de vuelta a casa.»",
            en: "They sat down on the pavement. «Some rules can be argued about,» said Mummy Pig. «That one can't. The road is the rule that brings you home.»"
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
            text: "Alors Livia reprit la main. Elle regarda à gauche, puis à droite, puis encore à gauche, comme on lui avait appris. Et c'est elle qui dit : « On peut y aller. »",
            es: "Entonces Livia volvió a darle la mano. Miró a la izquierda, luego a la derecha, luego otra vez a la izquierda, como le habían enseñado. Y fue ella quien dijo: «Podemos ir.»",
            en: "So Livia took her hand again. She looked left, then right, then left again, the way she had been taught. And it was she who said: «We can go.»"
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
            text: "Au retour, Livia tendit la main la première, sans qu'on lui demande. Être grande, ce n'est pas faire tout seul. C'est savoir quand on a besoin de quelqu'un.",
            es: "A la vuelta, Livia tendió la mano la primera, sin que nadie se lo pidiera. Ser mayor no es hacerlo todo solo. Es saber cuándo necesitas a alguien.",
            en: "On the way back, Livia held out her hand first, without being asked. Being big isn't doing everything on your own. It's knowing when you need somebody."
          }
        ]
      },

      /* ---------- 14 : le non des parents ---------- */
      {
        id: 'maman-dit-non',
        title: 'Quand Maman dit non',
        title_en: "When Mummy says no",
        title_es: "Cuando mamá dice que no",
        subtitle: 'Un non, et ce qui vient après',
        subtitle_en: "A no, and what comes after it",
        subtitle_es: "Un no, y lo que viene después",
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
            text: "Au magasin, il y avait un tout petit cheval en plastique. Livia le voulait. Elle le voulait tout de suite, elle le voulait beaucoup, et elle le dit très clairement.",
            es: "En la tienda había un caballito de plástico. Livia lo quería. Lo quería ya mismo, lo quería mucho, y lo dijo con toda claridad.",
            en: "In the shop there was a very small plastic horse. Livia wanted it. She wanted it right now, she wanted it a lot, and she said so very clearly."
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
            text: "« Non », dit Maman. « Pas aujourd'hui. » Elle ne dit pas peut-être. Elle ne dit pas on verra. Elle dit non, une seule fois, calmement, ce qui est très énervant.",
            es: "«No», dijo mamá. «Hoy no.» No dijo quizá. No dijo ya veremos. Dijo no, una sola vez, tranquilamente, lo cual resulta muy irritante.",
            en: "«No,» said Mummy. «Not today.» She did not say maybe. She did not say we'll see. She said no, once, calmly, which is extremely annoying."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 400, y: 496, s: 1.25, pose: 'sit', mood: 'wow' }
              ],
              sfx: [{ t: 'AAAAAAH !', x: 400, y: 156, fs: 44, rot: -9, color: '#e0453c' }]
            },
            text: "Alors Livia se coucha par terre. Elle cria. Elle tapa des pieds. Tout le magasin la regarda. Elle sentait bien que c'était très fort, ce qui sortait d'elle.",
            es: "Entonces Livia se tiró al suelo. Gritó. Pataleó. La tienda entera la miró. Notaba perfectamente que aquello que le salía era muy fuerte.",
            en: "So Livia lay down on the floor. She screamed. She kicked. The whole shop looked at her. She could tell that what was coming out of her was very big."
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
            text: "Maman ne cria pas. Elle s'assit à côté, sans rien dire, et elle attendit. La colère est comme une grosse vague : si personne ne la nourrit, elle finit par redescendre.",
            es: "Mamá no gritó. Se sentó al lado, sin decir nada, y esperó. El enfado es como una ola grande: si nadie lo alimenta, acaba bajando.",
            en: "Mummy did not shout. She sat down beside her, saying nothing, and waited. Anger is like a big wave: if nobody feeds it, it eventually goes back down."
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
            text: "Quand ce fut fini, Maman dit : « Tu as le droit d'être triste. Tu as le droit d'être en colère. Le non, lui, reste non. » Les deux choses tenaient ensemble, bizarrement.",
            es: "Cuando terminó, mamá dijo: «Tienes derecho a estar triste. Tienes derecho a estar enfadada. El no sigue siendo no.» Las dos cosas encajaban juntas, curiosamente.",
            en: "When it was over, Mummy said: «You're allowed to be sad. You're allowed to be angry. The no stays no.» The two things held together, oddly enough."
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
            text: "« On le note sur la liste des envies », dit Maman. « Pour ton anniversaire, tu choisiras dedans. » Ce n'était pas tout de suite. Mais ce n'était plus jamais non plus.",
            es: "«Lo apuntamos en la lista de deseos», dijo mamá. «Para tu cumpleaños eliges de ahí.» No era ahora mismo. Pero tampoco era nunca.",
            en: "«We'll put it on the wish list,» said Mummy. «For your birthday you can choose from it.» It was not right now. But it was not never any more either."
          },
          {
            scene: {
              bg: 'village', time: 'sunset',
              items: [
                { t: 'mummy', x: 300, y: 516, s: 1.35, pose: 'hold' },
                { t: 'livia', x: 540, y: 520, s: 1.15, pose: 'hold' }
              ]
            },
            text: "En sortant, Livia tenait la liste dans sa poche. Le petit cheval était resté au magasin. Il n'avait pas bougé, et Livia savait maintenant où le retrouver.",
            es: "Al salir, Livia llevaba la lista en el bolsillo. El caballito se había quedado en la tienda. No se había movido, y ahora Livia sabía dónde volver a encontrarlo.",
            en: "On the way out, Livia had the list in her pocket. The little horse had stayed in the shop. It had not moved, and now Livia knew where to find it again."
          }
        ]
      },

      /* ---------- 15 : le tour de parole ---------- */
      {
        id: 'tour-de-parole',
        title: 'Chacun son tour de parler',
        title_en: "Taking turns to talk",
        title_es: "Cada uno su turno de hablar",
        subtitle: 'On ne coupe pas, même quand c\'est urgent',
        subtitle_en: "You don't cut in, even when it's urgent",
        subtitle_es: "No se interrumpe, ni siquiera cuando es urgente",
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
            text: "À table, tout le monde avait quelque chose de très important à raconter. Peppa parlait. Livia parlait par-dessus. Maman n'entendait ni l'une ni l'autre.",
            es: "En la mesa, todo el mundo tenía algo importantísimo que contar. Peppa hablaba. Livia hablaba por encima. Mamá no oía ni a una ni a otra.",
            en: "At the table, everybody had something extremely important to tell. Peppa was talking. Livia was talking over her. Mummy could hear neither of them."
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
            text: "« Tu me coupes tout le temps ! » dit Peppa. Livia répondit qu'elle avait fini. Ce n'était pas vrai : Peppa n'avait dit que le début, et le début n'est pas la fin.",
            es: "«¡Me cortas todo el rato!», dijo Peppa. Livia contestó que ya había terminado. No era verdad: Peppa solo había dicho el principio, y el principio no es el final.",
            en: "«You keep cutting me off!» said Peppa. Livia replied that she had finished. That was not true: Peppa had only said the beginning, and the beginning is not the end."
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
            text: "Alors Maman posa une grande cuillère en bois au milieu de la table. « Celui qui a la cuillère parle », dit-elle. « Les autres écoutent. Puis on la passe. »",
            es: "Entonces mamá puso una cuchara grande de madera en medio de la mesa. «El que tiene la cuchara habla», dijo. «Los demás escuchan. Luego se pasa.»",
            en: "So Mummy put a big wooden spoon in the middle of the table. «Whoever has the spoon talks,» she said. «The others listen. Then you pass it on.»"
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
            text: "Peppa prit la cuillère et raconta toute son histoire, du début à la fin. Livia serra les lèvres très fort. Attendre son tour de parler, c'est presque aussi dur qu'attendre son tour de toboggan.",
            es: "Peppa cogió la cuchara y contó su historia entera, del principio al final. Livia apretó los labios muy fuerte. Esperar tu turno de hablar es casi tan duro como esperar tu turno de tobogán.",
            en: "Peppa took the spoon and told her whole story, beginning to end. Livia pressed her lips very tightly together. Waiting your turn to talk is nearly as hard as waiting your turn on the slide."
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
            text: "Puis ce fut son tour. Et là, quelque chose d'étonnant arriva : tout le monde se tut, et tout le monde l'écouta jusqu'au bout. Livia n'avait jamais été écoutée aussi longtemps.",
            es: "Luego le tocó a ella. Y ahí pasó algo asombroso: todo el mundo se calló, y todo el mundo la escuchó hasta el final. A Livia nunca la habían escuchado tanto rato.",
            en: "Then it was her turn. And something astonishing happened: everybody went quiet, and everybody listened right to the end. Livia had never been listened to for so long."
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
            text: "Depuis, la cuillère reste sur la table. On ne s'en sert presque plus. Il suffit de la regarder pour se rappeler qu'une histoire a un début, un milieu et une fin.",
            es: "Desde entonces, la cuchara sigue en la mesa. Casi no se usa. Basta con mirarla para acordarse de que una historia tiene principio, medio y final.",
            en: "Ever since, the spoon stays on the table. It hardly ever gets used. You only have to look at it to remember that a story has a beginning, a middle and an end."
          }
        ]
      },

      /* ---------- 16 : partager sa maman ---------- */
      {
        id: 'maman-est-prise',
        title: 'Maman est prise',
        title_en: "Mummy is busy",
        title_es: "Mamá está ocupada",
        subtitle: 'Quand il faut attendre son tour de câlin',
        subtitle_en: "When you have to wait your turn for a cuddle",
        subtitle_es: "Cuando hay que esperar tu turno de abrazo",
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
            text: "Livia avait fait un dessin. Un vrai, avec un soleil, un chien et une maison qui tenait debout. Elle courut le montrer à Maman tout de suite, parce que tout de suite c'est important.",
            es: "Livia había hecho un dibujo. Uno de verdad, con un sol, un perro y una casa que se tenía en pie. Corrió a enseñárselo a mamá enseguida, porque enseguida es importante.",
            en: "Livia had done a drawing. A proper one, with a sun, a dog and a house that stayed up. She ran to show Mummy straight away, because straight away matters."
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
            text: "Mais Maman avait Pablo dans les bras. Pablo pleurait. Pablo pleure souvent, et quand il pleure, il prend toute la place, tous les bras et toutes les oreilles.",
            es: "Pero mamá tenía a Pablo en brazos. Pablo lloraba. Pablo llora a menudo, y cuando llora ocupa todo el sitio, todos los brazos y todos los oídos.",
            en: "But Mummy had Pablo in her arms. Pablo was crying. Pablo cries often, and when he cries he takes up all the room, all the arms and all the ears."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 510, s: 1.25, mood: 'sad' }
              ],
              sfx: [{ t: 'DANS DEUX MINUTES…', x: 400, y: 148, fs: 26, rot: -4, color: '#6d5847' }]
            },
            text: "« Dans deux minutes, ma chérie. » Deux minutes, c'est très court quand on joue, et très long quand on attend. Livia s'assit par terre avec son dessin sur les genoux.",
            es: "«Dentro de dos minutos, cariño.» Dos minutos es muy poco cuando juegas, y larguísimo cuando esperas. Livia se sentó en el suelo con el dibujo sobre las rodillas.",
            en: "«In two minutes, darling.» Two minutes is very short when you're playing, and very long when you're waiting. Livia sat down on the floor with the drawing on her knees."
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
            text: "Alors, en attendant, elle ajouta un chat sur le toit. Puis un arbre. Puis un bonhomme avec un chapeau. Le dessin devint beaucoup plus beau qu'avant.",
            es: "Así que, mientras esperaba, añadió un gato en el tejado. Luego un árbol. Luego un señor con sombrero. El dibujo quedó mucho más bonito que antes.",
            en: "So, while she waited, she added a cat on the roof. Then a tree. Then a man in a hat. The drawing became much better than before."
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
            text: "Pablo s'endormit. Maman s'assit à côté de Livia. « Voilà », dit-elle. « Maintenant je suis toute à toi. » Et elle regarda le dessin très longtemps, en montrant chaque chose du doigt.",
            es: "Pablo se durmió. Mamá se sentó al lado de Livia. «Ya está», dijo. «Ahora soy toda tuya.» Y miró el dibujo muchísimo rato, señalando cada cosa con el dedo.",
            en: "Pablo fell asleep. Mummy sat down next to Livia. «There,» she said. «Now I'm all yours.» And she looked at the drawing for a very long time, pointing at each thing."
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
            text: "« Tu as attendu », dit Maman. « C'est difficile, d'attendre. » Livia répondit que oui, mais que ça lui avait laissé le temps d'ajouter le chat. Les deux étaient vraies.",
            es: "«Has esperado», dijo mamá. «Es difícil esperar.» Livia contestó que sí, pero que le había dado tiempo a añadir el gato. Las dos cosas eran verdad.",
            en: "«You waited,» said Mummy. «Waiting is hard.» Livia said yes, but that it had given her time to add the cat. Both were true."
          }
        ]
      },

      /* ---------- 17 : réparer ---------- */
      {
        id: 'reparer',
        title: 'Ce qu\'on fait après',
        title_en: "What you do afterwards",
        title_es: "Lo que se hace después",
        subtitle: 'Pardon, c\'est le début, pas la fin',
        subtitle_en: "Sorry is the beginning, not the end",
        subtitle_es: "Perdón es el principio, no el final",
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
            text: "Dans le jardin, il y avait une règle : on ne cueille pas les fleurs de Papa. Livia connaissait la règle. Elle la connaissait même très bien.",
            es: "En el jardín había una regla: no se cogen las flores de papá. Livia conocía la regla. La conocía incluso muy bien.",
            en: "In the garden there was a rule: you don't pick Daddy's flowers. Livia knew the rule. She knew it extremely well, in fact."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 400, y: 522, s: 1.25, pose: 'hold', mood: 'wow' }
              ],
              sfx: [{ t: 'CLAC !', x: 420, y: 164, fs: 34, rot: -7, color: '#e0453c' }]
            },
            text: "Elle en cueillit six. Six d'un coup. Elles étaient jaunes et elles sentaient bon, et sur le moment, ça valait vraiment le coup.",
            es: "Cogió seis. Seis de golpe. Eran amarillas y olían bien, y en aquel momento mereció totalmente la pena.",
            en: "She picked six. Six all at once. They were yellow and they smelled lovely, and at the time it was completely worth it."
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
            text: "Papa vit le trou dans le massif. Livia dit pardon tout de suite, très vite, plusieurs fois. Elle avait remarqué que pardon fait souvent s'arrêter les histoires.",
            es: "Papá vio el hueco en el parterre. Livia dijo perdón enseguida, muy deprisa, varias veces. Se había fijado en que perdón suele hacer que las historias se paren.",
            en: "Daddy saw the gap in the flowerbed. Livia said sorry straight away, very fast, several times. She had noticed that sorry usually makes these stories stop."
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
            text: "« Pardon, c'est le début », dit Papa. « Ce n'est pas la fin. Après pardon, il y a réparer. » Livia ne savait pas qu'il y avait quelque chose après pardon.",
            es: "«Perdón es el principio», dijo papá. «No es el final. Después de perdón viene reparar.» Livia no sabía que hubiera algo después de perdón.",
            en: "«Sorry is the beginning,» said Daddy. «It isn't the end. After sorry comes putting it right.» Livia had not known there was anything after sorry."
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
            text: "Ils allèrent chercher six graines. Livia creusa six trous, avec la petite pelle, à l'endroit exact des six fleurs. Ça prit tout l'après-midi, et c'était fatigant.",
            es: "Fueron a buscar seis semillas. Livia cavó seis agujeros, con la pala pequeña, en el sitio exacto de las seis flores. Les llevó toda la tarde, y fue cansado.",
            en: "They went to fetch six seeds. Livia dug six holes, with the little trowel, in the exact spot where the six flowers had been. It took all afternoon, and it was tiring."
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
            text: "Trois semaines plus tard, une première pousse sortit. Livia la surveilla tous les jours. Réparer, c'est plus long que dire pardon. C'est aussi ce dont on se souvient.",
            es: "Tres semanas más tarde salió el primer brote. Livia lo vigiló todos los días. Reparar lleva más tiempo que decir perdón. También es lo que se recuerda.",
            en: "Three weeks later, the first shoot came up. Livia checked on it every day. Putting things right takes longer than saying sorry. It is also the part you remember."
          }
        ]
      },

      /* ---------- 18 : quand un adulte se trompe ---------- */
      {
        id: 'papa-se-trompe',
        title: 'Le jour où Papa s\'est trompé',
        title_en: "The day Daddy got it wrong",
        title_es: "El día en que papá se equivocó",
        subtitle: 'Les grands aussi disent pardon',
        subtitle_en: "Grown-ups say sorry too",
        subtitle_es: "Los mayores también piden perdón",
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
            text: "Le mur du couloir avait un grand trait de feutre bleu. Papa n'était pas content du tout. « Qui a fait ça ? » demanda-t-il en regardant Livia.",
            es: "La pared del pasillo tenía una raya grande de rotulador azul. Papá no estaba nada contento. «¿Quién ha hecho esto?», preguntó mirando a Livia.",
            en: "The hallway wall had a long blue felt-tip line on it. Daddy was not at all pleased. «Who did this?» he asked, looking at Livia."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 510, s: 1.25, pose: 'shrug', mood: 'sad' }
              ],
              bubbles: [{ x: 210, y: 22, w: 340, t: 'Ce n\'est pas moi. Je te promets.', tx: 400, ty: 236 }]
            },
            text: "« Ce n'est pas moi », dit Livia. « Je te promets. » Papa dit que ce n'était pas la peine de mentir. Livia sentit quelque chose de très injuste lui monter dans la gorge.",
            es: "«No he sido yo», dijo Livia. «Te lo prometo.» Papá dijo que no hacía falta mentir. A Livia le subió a la garganta algo muy injusto.",
            en: "«It wasn't me,» said Livia. «I promise.» Daddy said there was no point lying. Something very unfair rose up in Livia's throat."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 494, s: 1.2, pose: 'sit', mood: 'sad' }
              ],
              sfx: [{ t: '. . .', x: 430, y: 152, fs: 32, rot: 0, color: '#8a7768' }]
            },
            text: "Elle alla dans sa chambre. Elle ne pleura même pas. C'est très particulier, d'être punie pour quelque chose qu'on n'a pas fait : ça ne ressemble à rien d'autre.",
            es: "Se fue a su cuarto. Ni siquiera lloró. Es muy particular que te castiguen por algo que no has hecho: no se parece a nada más.",
            en: "She went to her room. She did not even cry. Being told off for something you did not do is very particular: it is not like anything else."
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
            text: "Un peu plus tard, Papa trouva Pablo dans le couloir, un feutre bleu dans la main, en train d'ajouter un deuxième trait juste à côté du premier.",
            es: "Un rato después, papá encontró a Pablo en el pasillo, con un rotulador azul en la mano, añadiendo una segunda raya justo al lado de la primera.",
            en: "A little later, Daddy found Pablo in the hallway, a blue felt-tip in his hand, adding a second line right next to the first."
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
            text: "Papa vint s'asseoir sur le lit. « Je me suis trompé », dit-il. « Je ne t'ai pas crue, et j'aurais dû. Pardon, Livia. » Un papa qui dit pardon, ça fait un drôle d'effet.",
            es: "Papá vino a sentarse en la cama. «Me he equivocado», dijo. «No te he creído, y debería haberlo hecho. Perdona, Livia.» Un papá que pide perdón hace un efecto rarísimo.",
            en: "Daddy came and sat on the bed. «I got it wrong,» he said. «I didn't believe you, and I should have. Sorry, Livia.» A daddy saying sorry feels very strange indeed."
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
            text: "Ils nettoyèrent le mur tous les deux. Livia comprit ce jour-là que les grands ne savent pas tout, et que ce n'est pas grave, tant qu'ils savent le dire.",
            es: "Limpiaron la pared los dos. Livia entendió aquel día que los mayores no lo saben todo, y que no pasa nada, mientras sepan decirlo.",
            en: "They cleaned the wall together. That day Livia understood that grown-ups don't know everything, and that it doesn't matter, as long as they can say so."
          }
        ]
      },

      /* ---------- 19 : la honte ---------- */
      {
        id: 'la-honte',
        title: 'Devant tout le monde',
        title_en: "In front of everybody",
        title_es: "Delante de todo el mundo",
        subtitle: 'La honte, et comment elle s\'en va',
        subtitle_en: "Embarrassment, and how it goes away",
        subtitle_es: "La vergüenza, y cómo se va",
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
            text: "Livia avait appris à faire la roue. Enfin, presque. Devant toute la classe, elle annonça qu'elle allait la faire, et tout le monde s'arrêta pour regarder.",
            es: "Livia había aprendido a hacer la rueda. Bueno, casi. Delante de toda la clase anunció que iba a hacerla, y todo el mundo se paró a mirar.",
            en: "Livia had learned to do a cartwheel. Well, nearly. In front of the whole class she announced that she was going to do one, and everybody stopped to watch."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 400, y: 494, s: 1.25, pose: 'sit', mood: 'wow' }
              ],
              sfx: [{ t: 'BADABOUM !', x: 400, y: 164, fs: 36, rot: -8, color: '#e0453c' }]
            },
            text: "Elle prit son élan, leva les bras, et tomba sur les fesses. Tout le monde rit. Pas méchamment. Mais tout le monde rit, et elle entendit chaque rire séparément.",
            es: "Cogió carrerilla, levantó los brazos y se cayó de culo. Todo el mundo se rio. Sin maldad. Pero todo el mundo se rio, y ella oyó cada risa por separado.",
            en: "She took a run-up, put her arms up, and landed on her bottom. Everybody laughed. Not unkindly. But everybody laughed, and she heard each laugh separately."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 400, y: 522, s: 1.3, mood: 'sad' }
              ],
              sfx: [{ t: 'TOUT ROUGE…', x: 400, y: 166, fs: 30, rot: -5, color: '#e0453c' }]
            },
            text: "Ses joues devinrent brûlantes. Elle voulut disparaître, devenir toute petite, ou partir vivre ailleurs. C'est ça, la honte : ça chauffe, et ça donne envie de s'en aller.",
            es: "Se le pusieron las mejillas ardiendo. Quiso desaparecer, hacerse pequeñísima, o irse a vivir a otro sitio. Eso es la vergüenza: quema, y da ganas de marcharse.",
            en: "Her cheeks went burning hot. She wanted to disappear, to become tiny, or to go and live somewhere else. That is embarrassment: it burns, and it makes you want to leave."
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
            text: "Peppa vint s'asseoir à côté. « Moi je suis tombée à la piscine », dit-elle. « Devant tout le monde. Deux fois. » Livia releva la tête de deux centimètres.",
            es: "Peppa vino a sentarse a su lado. «Yo me caí en la piscina», dijo. «Delante de todo el mundo. Dos veces.» Livia levantó la cabeza dos centímetros.",
            en: "Peppa came and sat beside her. «I fell over at the pool,» she said. «In front of everybody. Twice.» Livia lifted her head two centimetres."
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
            text: "Alors Suzy raconta la fois du chapeau dans la soupe. Puis quelqu'un d'autre raconta autre chose. Il s'avéra que tout le monde était déjà tombé devant tout le monde.",
            es: "Entonces Suzy contó la vez del sombrero en la sopa. Luego otro contó otra cosa. Resultó que todo el mundo se había caído ya delante de todo el mundo.",
            en: "Then Suzy told the one about the hat in the soup. Then somebody else told another one. It turned out that everybody had already fallen over in front of everybody."
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
            text: "Livia réessaya la roue avant de rentrer. Elle retomba. Elle rit la première, cette fois, et c'était complètement différent. La honte n'aime pas beaucoup qu'on rie avec elle.",
            es: "Livia volvió a intentar la rueda antes de irse. Se volvió a caer. Esta vez se rio ella primero, y fue completamente distinto. A la vergüenza no le gusta nada que se rían con ella.",
            en: "Livia tried the cartwheel again before going home. She fell over again. This time she laughed first, and it was completely different. Embarrassment does not much like being laughed with."
          }
        ]
      },

      /* ---------- 20 : devenir grande sœur ---------- */
      {
        id: 'grande-soeur',
        title: 'Le jour où Pablo est arrivé',
        title_en: "The day Pablo arrived",
        title_es: "El día en que llegó Pablo",
        subtitle: 'Devenir grande sœur, ça ne se décide pas',
        subtitle_en: "Becoming a big sister isn't something you decide",
        subtitle_es: "Ser hermana mayor no se decide",
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
            text: "On avait prévenu Livia longtemps à l'avance : il allait y avoir un bébé. Elle avait dit oui, super, d'accord. Elle imaginait quelqu'un avec qui jouer tout de suite.",
            es: "A Livia se lo habían avisado con mucha antelación: iba a haber un bebé. Ella había dicho que sí, genial, vale. Se imaginaba a alguien con quien jugar enseguida.",
            en: "Livia had been warned a long time in advance: there was going to be a baby. She had said yes, great, fine. She imagined somebody to play with straight away."
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
            text: "Pablo arriva. Il ne jouait pas. Il ne parlait pas. Il dormait, il mangeait, il pleurait, et il prenait tous les bras de la maison. C'était très décevant.",
            es: "Pablo llegó. No jugaba. No hablaba. Dormía, comía, lloraba, y se llevaba todos los brazos de la casa. Fue muy decepcionante.",
            en: "Pablo arrived. He did not play. He did not talk. He slept, he ate, he cried, and he took up every pair of arms in the house. It was very disappointing."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 494, s: 1.25, pose: 'sit', mood: 'sad' }
              ],
              sfx: [{ t: 'ON PEUT LE RENDRE ?', x: 400, y: 148, fs: 26, rot: -4, color: '#8a7768' }]
            },
            text: "Un soir, Livia demanda si on pouvait le rendre. Personne ne se fâcha. Maman dit que non, et qu'on avait le droit de trouver ça difficile, les deux en même temps.",
            es: "Una noche, Livia preguntó si se podía devolver. Nadie se enfadó. Mamá dijo que no, y que se tenía derecho a que aquello resultara difícil, las dos cosas a la vez.",
            en: "One evening, Livia asked whether they could send him back. Nobody got cross. Mummy said no, and that she was allowed to find it hard, both at the same time."
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
            text: "Et puis un matin, Livia se pencha au-dessus du berceau, comme d'habitude, sans y croire. Et Pablo la regarda dans les yeux. Et Pablo lui sourit.",
            es: "Y entonces, una mañana, Livia se asomó por encima de la cuna, como siempre, sin ninguna esperanza. Y Pablo la miró a los ojos. Y Pablo le sonrió.",
            en: "And then one morning, Livia leaned over the cot, as usual, without expecting anything. And Pablo looked her in the eye. And Pablo smiled at her."
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
            text: "Pas à Maman. Pas à Papa. À elle. Livia resta là très longtemps, penchée, à refaire toutes les grimaces qu'elle connaissait, pour voir s'il recommençait.",
            es: "No a mamá. No a papá. A ella. Livia se quedó allí muchísimo rato, asomada, repitiendo todas las muecas que sabía, a ver si él lo hacía otra vez.",
            en: "Not at Mummy. Not at Daddy. At her. Livia stayed there a very long time, leaning over, doing every funny face she knew, to see whether he would do it again."
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
            text: "Devenir grande sœur, ça ne se décide pas le jour où le bébé arrive. Ça arrive plus tard, un matin, sans prévenir, quand quelqu'un vous sourit à vous.",
            es: "Ser hermana mayor no se decide el día en que llega el bebé. Llega más tarde, una mañana, sin avisar, cuando alguien te sonríe a ti.",
            en: "Becoming a big sister isn't something you decide on the day the baby arrives. It happens later, one morning, without warning, when somebody smiles at you."
          }
        ]
      },

      /* ---------- 21 : chez Mamie ---------- */
      {
        id: 'chez-mamie',
        title: 'Chez Mamie, ce n\'est pas pareil',
        title_en: "At Granny's it isn't the same",
        title_es: "En casa de la abuela no es igual",
        subtitle: 'Deux maisons, deux règles',
        subtitle_en: "Two houses, two sets of rules",
        subtitle_es: "Dos casas, dos reglas",
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
            text: "Chez Mamie, ça sent le gâteau et la lessive. Livia y va un dimanche sur deux. Et chez Mamie, les règles ne sont pas exactement les mêmes qu'à la maison.",
            es: "En casa de la abuela huele a bizcocho y a colada. Livia va un domingo de cada dos. Y en casa de la abuela las reglas no son exactamente las mismas que en la suya.",
            en: "At Granny's it smells of cake and washing. Livia goes every other Sunday. And at Granny's, the rules are not exactly the same as at home."
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
            text: "Chez Mamie, on a le droit à deux gâteaux. À la maison, c'est un. Livia vérifia trois fois, au cas où ce serait une erreur. Ce n'était pas une erreur.",
            es: "En casa de la abuela hay derecho a dos pasteles. En la suya, uno. Livia lo comprobó tres veces, por si fuera un error. No era un error.",
            en: "At Granny's you are allowed two cakes. At home it is one. Livia checked three times, in case it was a mistake. It was not a mistake."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 510, s: 1.25, pose: 'point' }
              ],
              bubbles: [{ x: 200, y: 22, w: 350, t: 'Alors chez Maman aussi, j\'ai le droit !', tx: 400, ty: 236 }]
            },
            text: "En rentrant, Livia annonça que désormais, ce serait deux gâteaux partout. Elle avait une preuve. Elle trouvait son raisonnement absolument imparable.",
            es: "Al volver, Livia anunció que a partir de ahora serían dos pasteles en todas partes. Tenía una prueba. Su razonamiento le parecía absolutamente indiscutible.",
            en: "When she got home, Livia announced that from now on it would be two cakes everywhere. She had proof. She found her reasoning absolutely watertight."
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
            text: "« Chez Mamie, c'est la règle de Mamie », dit Maman. « Ici, c'est la mienne. Les deux maisons ont le droit. » Livia trouva ça très mal organisé.",
            es: "«En casa de la abuela manda la regla de la abuela», dijo mamá. «Aquí manda la mía. Las dos casas tienen derecho.» A Livia le pareció muy mal organizado.",
            en: "«At Granny's, Granny's rule applies,» said Mummy. «Here, mine does. Both houses are allowed.» Livia thought that was very badly organised."
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
            text: "Le dimanche suivant, Livia posa la question à Mamie. Mamie rit très fort. « Chez ta maman, tu fais comme ta maman », dit-elle. « Et ici, tu fais comme moi. »",
            es: "El domingo siguiente, Livia se lo preguntó a la abuela. La abuela se rio muchísimo. «En casa de tu mamá haces como tu mamá», dijo. «Y aquí haces como yo.»",
            en: "The following Sunday, Livia put the question to Granny. Granny laughed a great deal. «At your mummy's, you do as your mummy does,» she said. «And here, you do as I do.»"
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
            text: "Alors Livia mangea son deuxième gâteau, chez Mamie, sans en parler à personne. Certaines règles changent de maison en maison. C'est ce qui rend les dimanches intéressants.",
            es: "Así que Livia se comió su segundo pastel, en casa de la abuela, sin decírselo a nadie. Algunas reglas cambian de casa en casa. Es lo que hace los domingos interesantes.",
            en: "So Livia ate her second cake, at Granny's, without telling anybody. Some rules change from house to house. That is what makes Sundays interesting."
          }
        ]
      }
,

      /* ---------- 22 : la télé s'éteint ---------- */
      {
        id: 'la-tele-seteint',
        title: "La télé s'éteint",
        title_en: "The telly goes off",
        title_es: "Se apaga la tele",
        subtitle: "Un non qui ne se négocie pas",
        subtitle_en: "A no that isn't up for negotiation",
        subtitle_es: "Un no que no se negocia",
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
            text: "Livia et Peppa étaient assises très près de l'écran, la bouche un peu ouverte. L'épisode se terminait. Un autre commençait tout seul, sans rien demander à personne.",
            es: "Livia y Peppa estaban sentadas muy cerca de la pantalla, con la boca un poco abierta. El episodio se acababa. Otro empezaba solo, sin pedirle permiso a nadie.",
            en: "Livia and Peppa were sitting very close to the screen, mouths slightly open. The episode was ending. Another one started by itself, without asking anybody."
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
            text: "« Celui-là, et on éteint », dit Maman Pig depuis la cuisine. Livia dit oui sans écouter, comme on dit oui quand on regarde ailleurs, et elle oublia la phrase en trois secondes.",
            es: "«Ese, y apagamos», dijo mamá Pig desde la cocina. Livia dijo que sí sin escuchar, como se dice que sí cuando estás mirando otra cosa, y se le olvidó la frase en tres segundos.",
            en: "«That one, and then it goes off,» said Mummy Pig from the kitchen. Livia said yes without listening, the way you say yes when you're looking elsewhere, and forgot the sentence in three seconds."
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
            text: "Clic. L'écran devint noir et refléta deux petites filles très en colère. « Mais il était PAS FINI ! » cria Livia, avec la voix qu'elle n'a que dans ces moments-là.",
            es: "Clic. La pantalla se puso negra y reflejó a dos niñas muy enfadadas. «¡Pero si NO SE HABÍA ACABADO!», gritó Livia, con la voz que solo tiene en esos momentos.",
            en: "Click. The screen went black and reflected two very cross little girls. «But it WASN'T FINISHED!» shouted Livia, in the voice she only has at moments like that."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [{ t: 'livia', x: 400, y: 512, s: 1.25, mood: 'fache' }],
              sfx: [{ t: 'C\'EST PAS JUSTE !', x: 400, y: 146, fs: 30, rot: -7, color: '#e0453c' }]
            },
            text: "Elle dit que ce n'était pas juste. Elle dit qu'elle n'avait rien demandé. Elle dit une chose méchante, aussi, qu'elle regretta avant même d'avoir fini de la dire.",
            es: "Dijo que no era justo. Dijo que ella no había pedido nada. Dijo también algo feo, de lo que se arrepintió antes incluso de acabar de decirlo.",
            en: "She said it wasn't fair. She said she hadn't asked for anything. She said something unkind too, which she regretted before she had even finished saying it."
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
            text: "Maman Pig s'assit à côté d'elle sans rien enlever et sans rien ajouter. « Tu peux être fâchée », dit-elle. « La télé reste éteinte. » Les deux phrases tenaient ensemble, curieusement.",
            es: "Mamá Pig se sentó a su lado sin quitar nada y sin añadir nada. «Puedes estar enfadada», dijo. «La tele se queda apagada.» Las dos frases encajaban juntas, curiosamente.",
            en: "Mummy Pig sat down beside her without taking anything back and without adding anything. «You're allowed to be cross,» she said. «The telly stays off.» The two sentences held together, oddly enough."
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
            text: "La colère mit onze minutes à partir. Ensuite, elles allèrent sauter dans les flaques. Livia n'a jamais su comment se terminait l'épisode, et ça ne lui a jamais manqué une seule fois.",
            es: "El enfado tardó once minutos en irse. Después se fueron a saltar en los charcos. Livia nunca supo cómo acababa el episodio, y no lo ha echado de menos ni una sola vez.",
            en: "The anger took eleven minutes to go. Afterwards, they went and jumped in puddles. Livia never found out how the episode ended, and she has never once missed it."
          }
        ]
      },

      /* ---------- 23 : le bain de George ---------- */
      {
        id: 'le-bain-de-george',
        title: 'Le bain de George',
        title_en: "George's bath",
        title_es: "El baño de George",
        subtitle: "Aider un petit, c'est un vrai travail",
        subtitle_en: "Looking after a little one is real work",
        subtitle_es: "Cuidar de un pequeño es un trabajo de verdad",
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
            text: "« Tu peux surveiller George deux minutes ? » demanda Maman Pig. Livia se redressa d'un coup. On ne lui avait encore jamais confié un enfant entier, même pour deux minutes.",
            es: "«¿Puedes vigilar a George dos minutos?», preguntó mamá Pig. Livia se irguió de golpe. Nunca le habían confiado un niño entero, ni siquiera durante dos minutos.",
            en: "«Can you watch George for two minutes?» asked Mummy Pig. Livia sat up straight. Nobody had ever put a whole child in her charge before, even for two minutes."
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
            text: "George voulait son dinosaure dans le bain. Le dinosaure était en bas, dans le panier, sous une pile de choses. George le voulait maintenant, et il le fit savoir avec beaucoup de conviction.",
            es: "George quería su dinosaurio en el baño. El dinosaurio estaba abajo, en la cesta, debajo de un montón de cosas. George lo quería ahora, y lo hizo saber con muchísima convicción.",
            en: "George wanted his dinosaur in the bath. The dinosaur was downstairs, in the basket, under a pile of things. George wanted it now, and he made that known with a great deal of conviction."
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
            text: "Livia dit non, parce qu'il ne fallait pas quitter la pièce. George se mit à hurler. Deux minutes, découvrit-elle, ça peut être extrêmement long quand on est responsable de quelqu'un.",
            es: "Livia dijo que no, porque no había que salir de la habitación. George se puso a berrear. Dos minutos, descubrió, pueden ser larguísimos cuando eres responsable de alguien.",
            en: "Livia said no, because she was not to leave the room. George began to howl. Two minutes, she discovered, can be extremely long when you are responsible for somebody."
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
            text: "Alors elle prit une poignée de mousse et se fit une barbe blanche. George s'arrêta net, la bouche encore ouverte sur un cri qui ne sortit jamais. Puis il rit, et il voulut une barbe aussi.",
            es: "Entonces cogió un puñado de espuma y se hizo una barba blanca. George se paró en seco, con la boca todavía abierta sobre un grito que no llegó a salir. Luego se rio, y quiso una barba también.",
            en: "So she took a handful of bubbles and gave herself a white beard. George stopped dead, his mouth still open on a shout that never came out. Then he laughed, and wanted a beard too."
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
            text: "Ils firent une barbe, des sourcils, et un chapeau de mousse. Le dinosaure fut complètement oublié, ce qui est le plus grand exploit qu'on puisse accomplir avec George.",
            es: "Se hicieron una barba, unas cejas y un sombrero de espuma. El dinosaurio quedó completamente olvidado, que es la mayor hazaña que se puede lograr con George.",
            en: "They made a beard, some eyebrows, and a hat out of bubbles. The dinosaur was entirely forgotten, which is the greatest feat anybody can achieve with George."
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
            text: "Maman Pig revint dans une salle de bain plus mouillée qu'elle ne l'avait laissée, et beaucoup plus calme. « Tu as fait ça toute seule ? » Livia dit oui, sans en rajouter. Elle n'en avait pas besoin.",
            es: "Mamá Pig volvió a un baño más mojado de como lo había dejado, y mucho más tranquilo. «¿Has hecho esto tú sola?» Livia dijo que sí, sin añadir nada. No le hacía falta.",
            en: "Mummy Pig came back to a bathroom wetter than she had left it, and a great deal calmer. «Did you do that all on your own?» Livia said yes, without adding anything. She did not need to."
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
        title_en: "A summer in Arendelle",
        title_es: "Un verano en Arendelle",
        subtitle: 'De la neige au mois de juillet',
        subtitle_en: "Snow in the middle of July",
        subtitle_es: "Nieve en pleno julio",
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
            text: "À Arendelle, c'est le plein été. Il fait si chaud que la glace des glaciers fond en gouttes. Anna s'évente avec son chapeau : « Je crois que je fonds », dit-elle.",
            es: "En Arendelle es pleno verano. Hace tanto calor que el hielo de los glaciares se derrite gota a gota. Anna se abanica con el sombrero: «Creo que me estoy derritiendo», dice.",
            en: "In Arendelle it is high summer. It is so hot that the ice on the glaciers is melting drop by drop. Anna fans herself with her hat. «I think I'm melting,» she says."
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
            text: "C'est ce moment-là que choisit Livia pour arriver au château, avec sa couronne toute neuve. Elsa et Anna courent l'accueillir. « Tu tombes très bien », sourit Elsa.",
            es: "Justo en ese momento llega Livia al castillo, con su corona nuevecita. Elsa y Anna corren a recibirla. «Llegas en el mejor momento», sonríe Elsa.",
            en: "That is exactly the moment Livia picks to arrive at the castle, wearing her brand new crown. Elsa and Anna run to meet her. «Perfect timing,» smiles Elsa."
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
            text: "Elsa lève les mains, et FRIIIISS ! Des flocons se mettent à tomber sur la cour du château. Un tout petit hiver, rien que pour elles. Livia n'en revient pas.",
            es: "Elsa levanta las manos y ¡FRIIIISS! Empiezan a caer copos sobre el patio del castillo. Un inviernecito, solo para ellas. Livia no se lo puede creer.",
            en: "Elsa lifts her hands, and WHOOSH! Snowflakes begin to fall over the castle courtyard. A tiny winter, just for them. Livia can hardly believe her eyes."
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
            text: "Olaf arrive en courant, les bras grands ouverts. « De la neige en été ! » dit-il. « C'est exactement ce que je préfère au monde ! » Et il fait trois tours sur lui-même.",
            es: "Olaf llega corriendo con los brazos abiertos. «¡Nieve en verano!», dice. «¡Es justo lo que más me gusta del mundo!» Y da tres vueltas sobre sí mismo.",
            en: "Olaf comes running with his arms wide open. «Snow in summer!» he says. «That is exactly my favourite thing in the whole world!» And he spins round three times."
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
            text: "Alors commence la plus grande bataille de boules de neige de l'histoire d'Arendelle. Anna vise Elsa. Elsa vise Livia. Livia vise… tout le monde à la fois !",
            es: "Entonces empieza la mayor batalla de bolas de nieve de la historia de Arendelle. Anna apunta a Elsa. Elsa apunta a Livia. Livia apunta… ¡a todas a la vez!",
            en: "Then begins the greatest snowball fight in the history of Arendelle. Anna aims at Elsa. Elsa aims at Livia. Livia aims… at everybody at once!"
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
            text: "Ensuite, Elsa dessine dans l'air un immense toboggan de glace qui descend jusqu'à la cour. Livia se lance la première. Olaf compte les tours : dix-sept !",
            es: "Después, Elsa dibuja en el aire un tobogán de hielo enorme que baja hasta el patio. Livia se tira la primera. Olaf cuenta las bajadas: ¡diecisiete!",
            en: "Next, Elsa draws a huge ice slide in the air, running all the way down to the courtyard. Livia goes first. Olaf counts the goes: seventeen!"
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
            text: "Puis Elsa gèle la fontaine du château : ça fait une patinoire ronde et brillante. Elles patinent en se tenant la main, toutes les trois, en tournant de plus en plus vite.",
            es: "Luego Elsa congela la fuente del castillo: queda una pista de patinaje redonda y brillante. Patinan cogidas de la mano, las tres, girando cada vez más deprisa.",
            en: "Then Elsa freezes the castle fountain, and it becomes a round, shining ice rink. All three of them skate holding hands, spinning faster and faster."
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
            text: "Pour le goûter, tout le monde mange une glace. Une glace, dans la neige, en plein été : c'est très bizarre et c'est très délicieux. Olaf en prend deux, pour être sûr.",
            es: "Para merendar, todo el mundo toma un helado. Un helado, en la nieve, en pleno verano: es rarísimo y está riquísimo. Olaf se toma dos, por si acaso.",
            en: "For tea, everyone has an ice cream. An ice cream, in the snow, in the middle of summer: very strange and very delicious. Olaf has two, just to be sure."
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
            text: "Le soir, la neige d'Elsa fond doucement et l'été revient. Toutes les quatre regardent le ciel s'allumer. « Reviens l'été prochain », dit Elsa. Livia promet, la main sur le cœur.",
            es: "Al anochecer, la nieve de Elsa se derrite despacio y vuelve el verano. Las cuatro miran cómo se enciende el cielo. «Vuelve el verano que viene», dice Elsa. Livia lo promete, con la mano en el corazón.",
            en: "In the evening, Elsa's snow melts away and summer comes back. All four of them watch the sky light up. «Come back next summer,» says Elsa. Livia promises, hand on heart."
          }
        ]
      },

      {
        id: 'nuit-etoiles-glacees',
        title: 'La nuit des étoiles glacées',
        title_en: "The night of the frozen stars",
        title_es: "La noche de las estrellas heladas",
        subtitle: 'Une aurore pour Livia',
        subtitle_en: "An aurora just for Livia",
        subtitle_es: "Una aurora para Livia",
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
            text: "Ce soir-là, Elsa réveille Livia tout doucement. « Habille-toi bien chaud », murmure-t-elle. « Cette nuit, le ciel va danser. » Livia enfile son manteau en trois secondes.",
            es: "Esa noche, Elsa despierta a Livia muy despacito. «Abrígate bien», susurra. «Esta noche el cielo va a bailar.» Livia se pone el abrigo en tres segundos.",
            en: "That evening, Elsa wakes Livia very gently. «Wrap up warm,» she whispers. «Tonight the sky is going to dance.» Livia is in her coat in three seconds flat."
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
            text: "Elles traversent la forêt endormie avec une petite lanterne. La neige fait crunch-crunch sous les bottes. Olaf marche devant : il dit qu'il connaît le chemin par cœur.",
            es: "Cruzan el bosque dormido con un farolillo. La nieve hace crunch-crunch bajo las botas. Olaf va delante: dice que se sabe el camino de memoria.",
            en: "They cross the sleeping forest with a little lantern. The snow goes crunch-crunch under their boots. Olaf walks ahead: he says he knows the way by heart."
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
            text: "Au bout du sentier, une voix crie : « Vous partiez sans moi ?! » C'est Anna, avec sa luge et deux couvertures. Bien sûr qu'elle vient aussi.",
            es: "Al final del sendero, una voz grita: «¿¡Os ibais sin mí!?» Es Anna, con su trineo y dos mantas. Claro que ella también viene.",
            en: "At the end of the path, a voice shouts: «You were leaving without me?!» It is Anna, with her sledge and two blankets. Of course she is coming too."
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
            text: "Pour monter en haut de la montagne, il faut d'abord descendre une pente. Alors elles descendent en luge, très vite, en riant si fort que la neige tombe des sapins.",
            es: "Para subir a lo alto de la montaña, primero hay que bajar una cuesta. Así que bajan en trineo, muy rápido, riéndose tan fuerte que la nieve cae de los abetos.",
            en: "To get to the top of the mountain, you first have to go down a slope. So down they go on the sledge, very fast, laughing so hard that snow falls off the fir trees."
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
            text: "En chemin, Olaf perd ses pieds dans une congère. Livia les retrouve tout de suite : ils étaient juste derrière lui. « Merci ! » dit Olaf. « Ça m'arrive tout le temps. »",
            es: "Por el camino, Olaf pierde los pies en un montón de nieve. Livia los encuentra enseguida: estaban justo detrás de él. «¡Gracias!», dice Olaf. «Me pasa todo el rato.»",
            en: "On the way, Olaf loses his feet in a snowdrift. Livia finds them straight away: they were just behind him. «Thank you!» says Olaf. «That happens to me all the time.»"
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
            text: "Enfin, elles arrivent au sommet. Elsa souffle sur ses mains et lance mille flocons vers le ciel. Les flocons montent, montent… et se transforment en lumières vertes et violettes.",
            es: "Por fin llegan a la cima. Elsa sopla sobre sus manos y lanza mil copos hacia el cielo. Los copos suben, suben… y se convierten en luces verdes y moradas.",
            en: "At last they reach the summit. Elsa breathes on her hands and throws a thousand snowflakes at the sky. Up they go, up and up… and turn into green and purple lights."
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
            text: "L'aurore boréale danse au-dessus de la montagne, comme un immense rideau de lumière. Toutes les quatre se serrent l'une contre l'autre et ne disent plus rien du tout.",
            es: "La aurora boreal baila sobre la montaña, como una cortina de luz enorme. Las cuatro se aprietan una contra otra y ya no dicen nada de nada.",
            en: "The northern lights dance above the mountain, like an enormous curtain of light. All four huddle together and say nothing at all any more."
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
            text: "Au retour, Livia a les yeux qui se ferment tout seuls. Elsa la borde et pose un flocon de glace sur sa table de nuit : un flocon qui ne fond jamais. « Bonne nuit, petite princesse. »",
            es: "A la vuelta, a Livia se le cierran los ojos solos. Elsa la arropa y deja un copo de hielo en su mesilla: un copo que no se derrite nunca. «Buenas noches, princesita.»",
            en: "On the way home, Livia's eyes close all by themselves. Elsa tucks her in and sets an ice flake on her bedside table: a flake that never melts. «Good night, little princess.»"
          }
        ]
      },

      /* ---------- 3 : Papa à Arendelle ---------- */
      {
        id: 'papa-na-pas-froid',
        title: 'Papa n\'a pas froid',
        title_en: "Daddy isn't cold",
        title_es: 'Papá no tiene frío',
        subtitle: 'Dire qu\'on a froid, c\'est déjà se réchauffer',
        subtitle_en: "Saying you're cold is already getting warmer",
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
            es: "Papá había venido a Arendelle en camiseta. «Yo nunca tengo frío», dijo enseñando los brazos. Livia miró la nieve, luego los brazos de papá, y no dijo nada.",
            en: "Daddy had come to Arendelle in a T-shirt. «Me, I never get cold,» he said, showing off his arms. Livia looked at the snow, then at Daddy's arms, and said nothing."
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
            es: "Elsa levantó una mano para saludar. Empezó a nevar un poco más fuerte, así, sin avisar. Papá sonrió con una sonrisa que temblaba un poquito en las esquinas.",
            en: "Elsa raised a hand to say hello. It began to snow a little harder, just like that, without warning. Daddy smiled a smile that wobbled slightly at the corners."
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
            es: "«Tienes los labios azules», dijo Livia. Papá contestó que era la luz. La luz no tenía nada que ver: le castañeteaban los dientes desde hacía un buen rato.",
            en: "«Your lips have gone all blue,» said Livia. Daddy replied that it was the light. The light had nothing to do with it: his teeth had been chattering for a good minute."
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
            es: "Anna llegó con una manta muy gorda. No dijo «te lo dije». Simplemente se la puso sobre los hombros a papá, y esperó.",
            en: "Anna arrived with a big thick blanket. She did not say «I told you so». She simply laid it over Daddy's shoulders, and waited."
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
            es: "«Bueno», dijo papá. «Tengo un poco de frío.» Solo eran cinco palabras, y sin embargo tuvo que prepararlas mucho rato en la cabeza antes de dejarlas salir.",
            en: "«All right,» said Daddy. «I am a little bit cold.» It was only five words, and yet he had to get them ready in his head for a long time before letting them out."
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
            es: "Volvieron todos juntos a tomar un chocolate. Livia notó que papá, debajo de la manta, había recuperado su color de verdad. Y que sonreía en serio, esta vez.",
            en: "They all went in for hot chocolate together. Livia noticed that Daddy, under the blanket, had got his real colour back. And that he was smiling properly this time."
          }
        ]
      },

      /* ---------- 4 : la règle du lac ---------- */
      {
        id: 'glace-qui-craque',
        title: 'La glace qui craque',
        title_en: "The ice that cracks",
        title_es: 'El hielo que cruje',
        subtitle: 'Une règle qu\'on ne comprend qu\'après',
        subtitle_en: "A rule you only understand afterwards",
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
            es: "«Nunca se camina sobre el lago», dijo Elsa. Livia preguntó por qué. Elsa contestó: «Porque el hielo miente.» No era una respuesta muy clara.",
            en: "«We never walk on the lake,» said Elsa. Livia asked why. Elsa answered: «Because the ice lies.» It was not a very clear answer."
          },
          {
            scene: {
              bg: 'snow',
              items: [{ t: 'livia', x: 400, y: 522, s: 1.2 }],
              sfx: [{ t: 'ELLE A L\'AIR SOLIDE…', x: 400, y: 168, fs: 26, rot: -4, color: '#6d5847' }]
            },
            text: "Le lendemain, Livia retourna voir le lac toute seule. La glace était blanche, lisse et parfaitement immobile. Elle avait vraiment l'air solide. C'est bien ça, le problème.",
            es: "Al día siguiente, Livia volvió al lago sola. El hielo estaba blanco, liso y completamente quieto. Parecía de verdad muy sólido. Ese es justamente el problema.",
            en: "The next day, Livia went back to the lake on her own. The ice was white, smooth and perfectly still. It really did look solid. That is exactly the problem."
          },
          {
            scene: {
              bg: 'snow',
              items: [{ t: 'livia', x: 400, y: 522, s: 1.2, mood: 'wow' }],
              sfx: [{ t: 'CRAAAC.', x: 400, y: 164, fs: 40, rot: -8, color: '#4a7fc1' }]
            },
            text: "Elle posa un pied. Puis deux. Au troisième pas, quelque chose craqua sous elle, un bruit sec et très net, qui n'avait rien d'un bruit de jeu.",
            es: "Puso un pie. Luego dos. Al tercer paso, algo crujió debajo de ella, un ruido seco y muy claro, que no tenía nada de ruido de juego.",
            en: "She put one foot down. Then two. On the third step, something cracked underneath her, a dry, very clear sound, nothing like the sound of a game."
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
            es: "«¡No te muevas!», gritó Elsa desde la orilla. Livia no se movió nada. Elsa extendió la mano, despacito, y el hielo se cerró bajo sus pies como quien cose una tela.",
            en: "«Don't move!» shouted Elsa from the shore. Livia did not move at all. Elsa stretched out her hand, gently, and the ice closed under her feet the way you sew up cloth."
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
            es: "Se sentaron en la orilla. «El hielo miente», repitió Elsa. «Es bonito, es blanco, y en algunos sitios es fino como una hoja.» Esta vez, Livia lo entendió.",
            en: "They sat down on the bank. «The ice lies,» Elsa said again. «It is beautiful, it is white, and in places it is as thin as a leaf.» This time, Livia understood."
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
            es: "Algunas reglas se explican y se entienden enseguida. Otras esperan a que hayas oído el crujido. Livia nunca volvió a pisar el lago.",
            en: "Some rules can be explained, and you understand them straight away. Others wait until you have heard the crack. Livia never went back onto the lake."
          }
        ]
      },

      /* ---------- 5 : le secret d'Anna ---------- */
      {
        id: 'secret-danna',
        title: "Le secret d'Anna",
        title_en: "Anna's secret",
        title_es: "El secreto de Anna",
        subtitle: 'Tenir sa langue quand ça démange',
        subtitle_en: "Holding your tongue when it itches",
        subtitle_es: "Morderse la lengua cuando pica",
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
            text: "Anna prit Livia par le bras et l'emmena derrière la grande porte. « Je prépare une surprise pour Elsa », chuchota-t-elle. « Tu ne dis rien ? » Livia fit non de la tête, très fort.",
            es: "Anna cogió a Livia del brazo y se la llevó detrás de la puerta grande. «Estoy preparando una sorpresa para Elsa», susurró. «¿No dices nada?» Livia dijo que no con la cabeza, muy fuerte.",
            en: "Anna took Livia by the arm and led her behind the big door. «I'm getting a surprise ready for Elsa,» she whispered. «You won't say anything?» Livia shook her head very hard."
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
            text: "Deux minutes plus tard, Elsa arriva. Le secret se mit à gratter à l'intérieur de Livia, juste derrière les dents, comme une chose vivante qui veut sortir.",
            es: "Dos minutos después llegó Elsa. El secreto empezó a picar dentro de Livia, justo detrás de los dientes, como una cosa viva que quiere salir.",
            en: "Two minutes later, Elsa arrived. The secret began to itch inside Livia, right behind her teeth, like a living thing that wants to get out."
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
            text: "« Tu as l'air bizarre », dit Elsa. « Il se passe quelque chose ? » C'était la question la plus difficile de toute la journée, et Livia n'avait rien préparé du tout.",
            es: "«Tienes cara rara», dijo Elsa. «¿Pasa algo?» Era la pregunta más difícil del día entero, y Livia no había preparado nada de nada.",
            en: "«You look odd,» said Elsa. «Is something going on?» It was the hardest question of the whole day, and Livia had not prepared a single thing."
          },
          {
            scene: {
              bg: 'village',
              items: [{ t: 'liviaPrincess', x: 400, y: 522, s: 1.25 }],
              sfx: [{ t: 'OUI. MAIS JE NE PEUX PAS.', x: 400, y: 150, fs: 22, rot: -4, color: '#4a7fc1' }]
            },
            text: "Livia respira un grand coup. « Oui », dit-elle. « Mais je ne peux pas te le dire. » Ce n'était pas un mensonge, et ce n'était pas non plus le secret. C'était juste la vérité, en plus petit.",
            es: "Livia respiró hondo. «Sí», dijo. «Pero no te lo puedo contar.» No era mentira, y tampoco era el secreto. Era simplemente la verdad, en pequeñito.",
            en: "Livia took a big breath. «Yes,» she said. «But I can't tell you.» It was not a lie, and it was not the secret either. It was just the truth, in a smaller size."
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
            text: "Elsa la regarda un moment. Puis elle sourit. « Alors j'attendrai », dit-elle, et elle parla d'autre chose, ce qui est une façon très élégante de laisser quelqu'un tranquille.",
            es: "Elsa la miró un momento. Luego sonrió. «Pues esperaré», dijo, y se puso a hablar de otra cosa, que es una manera muy elegante de dejar en paz a alguien.",
            en: "Elsa looked at her for a moment. Then she smiled. «Then I'll wait,» she said, and she talked about something else, which is a very elegant way of leaving someone alone."
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
            text: "Le soir, la surprise sortit enfin de sa cachette. Elsa fit semblant de ne pas s'y attendre. Livia, elle, avait gardé quelque chose de lourd pendant tout un après-midi — et elle avait tenu.",
            es: "Por la noche, la sorpresa salió por fin de su escondite. Elsa hizo como que no se lo esperaba. Livia, en cambio, había cargado con algo pesado toda una tarde — y había aguantado.",
            en: "That evening, the surprise came out of its hiding place at last. Elsa pretended not to be expecting it. Livia had carried something heavy all afternoon — and she had held on."
          }
        ]
      },

      /* ---------- 6 : Olaf a trop chaud ---------- */
      {
        id: 'olaf-a-trop-chaud',
        title: 'Olaf a trop chaud',
        title_en: "Olaf is far too hot",
        title_es: "Olaf tiene demasiado calor",
        subtitle: "Aider, même quand ça ne nous arrange pas",
        subtitle_en: "Helping, even when it doesn't suit you",
        subtitle_es: "Ayudar, aunque no nos venga bien",
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
            text: "Elsa avait fabriqué une glissade de glace qui descendait jusqu'en bas de la colline. Livia s'apprêtait à la prendre pour la sixième fois quand elle entendit quelqu'un souffler.",
            es: "Elsa había fabricado un tobogán de hielo que bajaba hasta el pie de la colina. Livia iba a tirarse por sexta vez cuando oyó que alguien resoplaba.",
            en: "Elsa had built an ice slide that ran all the way down the hill. Livia was about to take it for the sixth time when she heard somebody puffing."
          },
          {
            scene: {
              bg: 'snow',
              items: [{ t: 'olaf', x: 400, y: 520, s: 1.3, mood: 'sad' }],
              sfx: [{ t: 'PFOUUU…', x: 400, y: 148, fs: 32, rot: -5, color: '#f2803d' }]
            },
            text: "C'était Olaf. Il s'était assis au soleil, et il avait la tête un peu penchée, comme une bougie qu'on aurait laissée trop près du feu. « Ça va », dit-il, ce qui n'était pas vrai du tout.",
            es: "Era Olaf. Se había sentado al sol y tenía la cabeza un poco torcida, como una vela que se ha dejado demasiado cerca del fuego. «Estoy bien», dijo, lo cual no era verdad en absoluto.",
            en: "It was Olaf. He had sat down in the sun, and his head was leaning over a bit, like a candle left too close to the fire. «I'm fine,» he said, which was not true at all."
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
            text: "Livia regarda la glissade. Puis Olaf. Puis la glissade. Personne ne lui demandait rien, et c'est bien ça qui était embêtant : elle aurait pu partir, et personne n'aurait rien su.",
            es: "Livia miró el tobogán. Luego a Olaf. Luego el tobogán. Nadie le pedía nada, y eso era justamente lo incómodo: podría haberse ido, y nadie se habría enterado.",
            en: "Livia looked at the slide. Then at Olaf. Then at the slide. Nobody was asking her for anything, and that was the awkward part: she could have gone, and nobody would have known."
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
            text: "Elle prit Olaf par le bâton qui lui sert de bras et l'emmena derrière le grand rocher, là où la neige reste dure toute la journée. Le trajet dura longtemps : Olaf ne va pas vite.",
            es: "Lo cogió por el palo que le hace de brazo y se lo llevó detrás de la roca grande, donde la nieve se queda dura todo el día. El camino duró mucho: Olaf no va deprisa.",
            en: "She took Olaf by the stick that serves as his arm and led him behind the big rock, where the snow stays hard all day. The journey took a long time: Olaf is not fast."
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
            text: "À l'ombre, Olaf se redressa d'un coup, comme une plante qu'on arrose. « Aaah », dit-il. Ils restèrent là un moment, à ne rien faire, ce qui est parfois exactement ce qu'il faut faire.",
            es: "A la sombra, Olaf se enderezó de golpe, como una planta a la que riegan. «Aaah», dijo. Se quedaron allí un rato, sin hacer nada, que es a veces exactamente lo que hay que hacer.",
            en: "In the shade, Olaf straightened up all at once, like a plant being watered. «Aaah,» he said. They stayed there a while, doing nothing, which is sometimes exactly the thing to do."
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
            text: "La glissade était toujours là après. Livia la prit trois fois, avec Olaf qui comptait en bas. Ce qu'elle avait laissé passer ne s'était pas perdu — ça l'attendait, tout simplement.",
            es: "El tobogán seguía allí después. Livia se tiró tres veces, con Olaf contando abajo. Lo que había dejado pasar no se había perdido: simplemente la estaba esperando.",
            en: "The slide was still there afterwards. Livia took it three times, with Olaf counting at the bottom. What she had let go had not been lost — it had simply been waiting for her."
          }
        ]
      },

      /* ---------- 7 : la couronne cassée ---------- */
      {
        id: 'couronne-cassee',
        title: 'La couronne cassée',
        title_en: "The broken crown",
        title_es: "La corona rota",
        subtitle: "Le dire avant qu'on le découvre",
        subtitle_en: "Saying it before anyone finds out",
        subtitle_es: "Decirlo antes de que lo descubran",
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
            text: "La couronne d'Elsa était posée sur l'étagère du haut. On n'y touche pas, c'était dit depuis longtemps. Livia n'y toucha pas non plus : elle monta seulement sur le tabouret pour mieux la voir.",
            es: "La corona de Elsa estaba en el estante de arriba. No se toca, eso estaba dicho desde hacía tiempo. Livia tampoco la tocó: solo se subió al taburete para verla mejor.",
            en: "Elsa's crown sat on the top shelf. You don't touch it — that had been said long ago. Livia didn't touch it either: she only climbed onto the stool for a better look."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [{ t: 'liviaPrincess', x: 400, y: 512, s: 1.25, mood: 'wow' }],
              sfx: [{ t: 'CLING !', x: 400, y: 146, fs: 40, rot: -8, color: '#e0453c' }]
            },
            text: "Le tabouret glissa. La couronne fit un bruit très court et très clair en touchant le sol, et une petite branche de glace se détacha net. La chambre devint extrêmement silencieuse.",
            es: "El taburete resbaló. La corona hizo un ruido muy corto y muy claro al tocar el suelo, y una ramita de hielo se partió del todo. La habitación se quedó extremadamente silenciosa.",
            en: "The stool slipped. The crown made a very short, very clear sound as it hit the floor, and a little branch of ice snapped clean off. The room went extremely quiet."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [{ t: 'liviaPrincess', x: 400, y: 498, s: 1.2, pose: 'sit', mood: 'sad' }],
              sfx: [{ t: 'PERSONNE N\'A VU.', x: 400, y: 146, fs: 24, rot: -4, color: '#6d5847' }]
            },
            text: "Personne n'avait rien vu. Livia remit la couronne en place, le morceau caché derrière. On ne voyait rien, vraiment rien. Elle s'assit par terre et ce fut le plus long moment de sa vie.",
            es: "Nadie había visto nada. Livia volvió a colocar la corona con el trozo escondido detrás. No se notaba nada, nada de nada. Se sentó en el suelo y fue el rato más largo de su vida.",
            en: "Nobody had seen anything. Livia put the crown back with the broken piece hidden behind it. You couldn't see a thing, not a thing. She sat down on the floor and it was the longest moment of her life."
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
            text: "Quand Elsa entra, Livia dit tout, très vite, avant que le courage ne reparte : « J'ai cassé ta couronne. » Elle avait préparé les larmes, et elles arrivèrent quand même.",
            es: "Cuando entró Elsa, Livia lo dijo todo, muy deprisa, antes de que se le fuera el valor: «He roto tu corona.» Había preparado las lágrimas, y llegaron igual.",
            en: "When Elsa came in, Livia said it all, very fast, before the courage went away again: «I broke your crown.» She had got the tears ready, and they came anyway."
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
            text: "Elsa s'assit à côté d'elle et regarda le morceau au creux de sa main. « Ça, je peux le réparer », dit-elle. « L'autre chose, non. Et l'autre chose, tu ne l'as pas faite. »",
            es: "Elsa se sentó a su lado y miró el trozo en la palma de su mano. «Esto lo puedo arreglar», dijo. «Lo otro, no. Y lo otro no lo has hecho.»",
            en: "Elsa sat down beside her and looked at the piece in the hollow of her hand. «That, I can mend,» she said. «The other thing, I can't. And the other thing, you didn't do.»"
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
            text: "La glace se recolla toute seule sous les doigts d'Elsa. On voit encore le trait, si on cherche bien. Livia le cherche à chaque fois, et à chaque fois elle est contente de le trouver.",
            es: "El hielo se pegó solo bajo los dedos de Elsa. Todavía se ve la línea, si uno la busca bien. Livia la busca siempre, y siempre se alegra de encontrarla.",
            en: "The ice knitted itself back together under Elsa's fingers. You can still see the line, if you look properly. Livia looks for it every time, and every time she is glad to find it."
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
        title_en: "The great sprinkler battle",
        title_es: "La gran batalla del aspersor",
        subtitle: 'Le jour le plus chaud de l\'été',
        subtitle_en: "The hottest day of the summer",
        subtitle_es: "El día más caluroso del verano",
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
            text: "Dans le jardin, l'herbe est chaude et l'air ne bouge pas. Bingo s'est couchée dans l'ombre. Bluey, elle, a le regard de quelqu'un qui a une idée. Une idée très mouillée.",
            es: "En el jardín, la hierba está caliente y el aire no se mueve. Bingo se ha tumbado a la sombra. Bluey, en cambio, tiene la mirada de quien tiene una idea. Una idea muy mojada.",
            en: "In the garden, the grass is hot and the air is not moving. Bingo has lain down in the shade. Bluey, though, has the look of somebody with an idea. A very wet idea."
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
            text: "« Papa ! L'arroseur ! » Papa Heeler pose sa tasse en soupirant, mais il sourit déjà. Il visse le tuyau, tourne le robinet… et rien ne se passe. Pas une goutte.",
            es: "«¡Papá! ¡El aspersor!» Papá Heeler deja la taza suspirando, pero ya está sonriendo. Enrosca la manguera, abre el grifo… y no pasa nada. Ni una gota.",
            en: "«Dad! The sprinkler!» Dad Heeler puts his mug down with a sigh, but he is already smiling. He screws on the hose, turns the tap… and nothing happens. Not a drop."
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
            text: "Papa se penche tout près pour regarder dans le trou. C'est exactement à ce moment que l'arroseur se réveille. TCHIIIII ! Papa reçoit tout, en pleine figure.",
            es: "Papá se agacha muy cerca para mirar por el agujero. Es justo entonces cuando el aspersor se despierta. ¡TCHIIIII! Papá se lo lleva todo, en plena cara.",
            en: "Dad leans right in to look into the hole. That is exactly the moment the sprinkler wakes up. WHOOSH! Dad gets the lot, full in the face."
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
            text: "Bluey et Livia sautent par-dessus le jet en criant. Bingo, elle, reste au bord. L'eau fait un bruit de pluie et elle n'est pas sûre du tout que ce soit une bonne idée.",
            es: "Bluey y Livia saltan por encima del chorro gritando. Bingo se queda en el borde. El agua hace ruido de lluvia y no está nada segura de que sea buena idea.",
            en: "Bluey and Livia jump over the spray, shouting. Bingo stays at the edge. The water sounds like rain and she is not at all sure this is a good idea."
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
            text: "Alors Livia lui tend la main. « On y va ensemble ? » Bingo réfléchit très fort, puis attrape sa patte. Une, deux, trois…",
            es: "Entonces Livia le tiende la mano. «¿Vamos juntas?» Bingo se lo piensa muchísimo, y luego le coge la pata. Una, dos, tres…",
            en: "So Livia holds out her hand. «Shall we go together?» Bingo thinks very hard, then takes her paw. One, two, three…"
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
            text: "Elles traversent le jet en hurlant de rire. C'est froid ! C'est glacé ! C'est le meilleur froid du monde ! Bingo veut recommencer tout de suite, et encore, et encore.",
            es: "Cruzan el chorro muertas de risa. ¡Está fría! ¡Está heladísima! ¡Es el mejor frío del mundo! Bingo quiere repetir ahora mismo, y otra vez, y otra.",
            en: "They run through the spray shrieking with laughter. It's cold! It's freezing! It's the best cold in the world! Bingo wants to go again right now, and again, and again."
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
            text: "Le soleil descend et tout le monde dégouline sur la terrasse. Maman arrive avec quatre glaces. « Glaces pour les mouillés ! » Papa, lui, essore encore ses oreilles.",
            es: "El sol baja y todo el mundo chorrea en la terraza. Mamá llega con cuatro helados. «¡Helados para los mojados!» Papá sigue escurriéndose las orejas.",
            en: "The sun goes down and everybody drips on the terrace. Mum arrives with four ice creams. «Ice creams for the wet ones!» Dad is still wringing out his ears."
          }
        ]
      },

      /* ---------- 2 ---------- */
      {
        id: 'ruisseau',
        title: 'Le ruisseau secret',
        title_en: "The secret creek",
        title_es: "El arroyo secreto",
        subtitle: 'Des cailloux, des têtards et un barrage',
        subtitle_en: "Stones, tadpoles and a dam",
        subtitle_es: "Piedras, renacuajos y una presa",
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
            text: "Au fond du jardin, il y a un chemin. Et au bout du chemin, il y a le ruisseau. Papa écarte les branches : « Voilà. Le ruisseau secret. » Personne ne dit rien pendant trois secondes.",
            es: "Al fondo del jardín hay un camino. Y al final del camino está el arroyo. Papá aparta las ramas: «Aquí está. El arroyo secreto.» Nadie dice nada durante tres segundos.",
            en: "At the bottom of the garden there is a path. And at the end of the path there is the creek. Dad pushes the branches aside: «There. The secret creek.» Nobody says anything for three seconds."
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
            text: "L'eau arrive juste aux genoux, et elle est glacée. Les cailloux du fond sont tout lisses et tout glissants. Chaque pas fait « splitch », et chaque « splitch » fait rire.",
            es: "El agua llega justo a las rodillas, y está helada. Las piedras del fondo son lisas y resbaladizas. Cada paso hace «splitch», y cada «splitch» hace reír.",
            en: "The water comes up to your knees, and it is freezing. The stones at the bottom are smooth and slippery. Every step goes «splitch», and every «splitch» makes them laugh."
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
            text: "Soudain, Livia s'arrête net et montre l'eau du doigt. Un tout petit poisson tourne entre deux cailloux. Tout le monde se penche, sans bouger, sans respirer.",
            es: "De pronto, Livia se para en seco y señala el agua. Un pececito da vueltas entre dos piedras. Todo el mundo se asoma, sin moverse, sin respirar.",
            en: "Suddenly Livia stops dead and points at the water. A tiny fish is circling between two stones. Everybody leans over, not moving, not breathing."
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
            text: "Puis Bluey déclare qu'il faut un barrage. Alors tout le monde transporte des cailloux, un par un, en les posant bien droit. Bingo choisit les plus petits, mais elle en apporte le plus.",
            es: "Luego Bluey declara que hace falta una presa. Así que todos acarrean piedras, una a una, colocándolas bien rectas. Bingo elige las más pequeñas, pero es la que más trae.",
            en: "Then Bluey declares that they need a dam. So everybody carries stones, one at a time, setting them down straight. Bingo picks the smallest ones, but she brings the most."
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
            text: "Le barrage monte, l'eau s'accumule derrière… et puis CRAAAC ! Tout s'écroule d'un coup. La vague part droit sur Papa, qui s'était assis juste en dessous.",
            es: "La presa sube, el agua se acumula detrás… y entonces ¡CRAAAC! Todo se derrumba de golpe. La ola va derecha hacia papá, que se había sentado justo debajo.",
            en: "The dam grows, the water builds up behind it… and then CRACK! It all collapses at once. The wave goes straight at Dad, who had sat down just below."
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
            text: "Papa reste immobile, trempé de la truffe à la queue. Les trois autres rient tellement qu'elles n'arrivent plus à se relever. « On en refait un plus grand ! » crie Bluey.",
            es: "Papá se queda quieto, empapado de la nariz al rabo. Los otros tres se ríen tanto que no consiguen levantarse. «¡Hacemos otra más grande!», grita Bluey.",
            en: "Dad sits perfectly still, soaked from nose to tail. The other three laugh so much they can't get up. «Let's build a bigger one!» shouts Bluey."
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
            text: "Ils rentrent à la nuit tombante, les pieds mouillés et les poches pleines de cailloux plats. « On revient demain ? » demande Bingo. Papa dit oui avant même d'y avoir réfléchi.",
            es: "Vuelven al caer la noche, con los pies mojados y los bolsillos llenos de piedras planas. «¿Volvemos mañana?», pregunta Bingo. Papá dice que sí antes incluso de pensarlo.",
            en: "They head home at dusk, with wet feet and pockets full of flat stones. «Can we come back tomorrow?» asks Bingo. Dad says yes before he has even thought about it."
          }
        ]
      },

      /* ---------- 3 ---------- */
      {
        id: 'ballon',
        title: 'Le ballon qui ne doit pas tomber',
        title_en: "The balloon that mustn't land",
        title_es: "La pelota que no debe caer",
        subtitle: 'Une seule règle, et elle est difficile',
        subtitle_en: "One single rule, and it's a hard one",
        subtitle_es: "Una sola regla, y es difícil",
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
            text: "Bluey tient un ballon rouge au bout des pattes. « Une seule règle », annonce-t-elle très sérieusement. « Il ne doit jamais toucher le sol. Jamais. »",
            es: "Bluey sostiene una pelota roja entre las patas. «Una sola regla», anuncia muy seria. «No puede tocar el suelo nunca. Nunca.»",
            en: "Bluey is holding a red balloon between her paws. «One single rule,» she announces very seriously. «It must never touch the ground. Never.»"
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
            text: "POC ! Le ballon monte tout droit vers le ciel. Bingo le rattrape du bout de la truffe. POC ! Il repart de l'autre côté. Un, deux, trois… déjà onze coups.",
            es: "¡POC! La pelota sube derechita hacia el cielo. Bingo la devuelve con la punta del morro. ¡POC! Se va para el otro lado. Uno, dos, tres… ya van once golpes.",
            en: "BOP! The balloon goes straight up towards the sky. Bingo gets it back with the tip of her nose. BOP! Off it goes the other way. One, two, three… eleven hits already."
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
            text: "Un coup de vent emporte le ballon vers le fond du jardin. Livia part en courant, les bras tendus, la langue sortie par l'effort. Elle l'attrape au tout dernier moment.",
            es: "Una ráfaga de viento se lleva la pelota al fondo del jardín. Livia sale corriendo, con los brazos estirados y la lengua fuera del esfuerzo. La atrapa en el último instante.",
            en: "A gust of wind carries the balloon to the bottom of the garden. Livia sets off running, arms out, tongue out with the effort. She catches it at the very last moment."
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
            text: "Mais au coup suivant, le ballon part de travers et atterrit en plein milieu du gros buisson piquant. Il est posé là, tout rouge au milieu des épines. Personne n'ose y aller.",
            es: "Pero al golpe siguiente la pelota sale torcida y aterriza en mitad del arbusto con pinchos. Ahí está, roja entre las espinas. Nadie se atreve a ir.",
            en: "But on the next hit the balloon goes sideways and lands right in the middle of the big prickly bush. There it sits, bright red among the thorns. Nobody dares go in."
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
            text: "C'est là que Papa surgit de la maison en criant « J'arriiiive ! ». Il plonge dans le buisson tête la première. On n'aperçoit plus que sa queue qui dépasse et qui remue.",
            es: "Y entonces papá sale de casa gritando «¡Voooy!». Se lanza de cabeza al arbusto. Solo se le ve el rabo asomando y moviéndose.",
            en: "That is when Dad bursts out of the house shouting «Coming through!» He dives into the bush head first. All you can see is his tail sticking out and wagging."
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
            text: "Papa ressort couvert de brindilles, une feuille sur l'oreille… et le ballon bien serré entre les pattes. « Il n'a pas touché le sol », dit-il, très digne. Tout le monde applaudit.",
            es: "Papá sale cubierto de ramitas, con una hoja en la oreja… y la pelota bien agarrada entre las patas. «No ha tocado el suelo», dice, muy digno. Todo el mundo aplaude.",
            en: "Dad comes out covered in twigs, a leaf on one ear… and the balloon held tight between his paws. «It did not touch the ground,» he says, very dignified. Everybody claps."
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
            text: "Ils continuent jusqu'à ce que le ciel devienne orange. Au centième coup, tout le monde crie « CENT ! » en même temps. Et le ballon, lui, n'a toujours pas touché le sol.",
            es: "Siguen hasta que el cielo se pone naranja. En el golpe número cien, todos gritan «¡CIEN!» a la vez. Y la pelota sigue sin haber tocado el suelo.",
            en: "They carry on until the sky turns orange. On the hundredth hit, everybody shouts «A HUNDRED!» at once. And the balloon still hasn't touched the ground."
          }
        ]
      },

      /* ---------- 4 ---------- */
      {
        id: 'crabes',
        title: 'La plage aux mille crabes',
        title_en: "The beach of a thousand crabs",
        title_es: "La playa de los mil cangrejos",
        subtitle: 'Un trou, un seau et beaucoup de pinces',
        subtitle_en: "One hole, one bucket and a lot of pincers",
        subtitle_es: "Un agujero, un cubo y muchísimas pinzas",
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
            text: "Le sable est si chaud qu'il faut courir sur la pointe des pattes. Bluey, Bingo et Livia foncent droit vers l'eau sans même poser les serviettes.",
            es: "La arena está tan caliente que hay que correr de puntillas. Bluey, Bingo y Livia salen disparadas hacia el agua sin dejar siquiera las toallas.",
            en: "The sand is so hot you have to run on tiptoe. Bluey, Bingo and Livia charge straight for the water without even putting the towels down."
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
            text: "Puis Bluey annonce le programme : creuser un trou. Pas un petit trou. Un trou immense, qui descendrait jusqu'à l'autre bout du monde.",
            es: "Luego Bluey anuncia el plan: cavar un agujero. No un agujero pequeño. Un agujero inmenso, que llegue hasta la otra punta del mundo.",
            en: "Then Bluey announces the plan: dig a hole. Not a small hole. An enormous hole, that would go all the way to the other side of the world."
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
            text: "Papa creuse, parce que Papa creuse toujours. Le sable vole partout, le trou grandit, et bientôt on ne voit plus que ses oreilles qui dépassent.",
            es: "Papá cava, porque papá siempre cava. La arena vuela por todas partes, el agujero crece, y pronto solo se le ven las orejas asomando.",
            en: "Dad digs, because Dad always digs. Sand flies everywhere, the hole gets bigger, and soon all you can see is his ears sticking out."
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
            text: "Et là, au fond du trou, quelque chose bouge. Deux petites pinces, deux yeux sur des tiges. Un crabe ! Bingo fait trois pas en arrière, très vite.",
            es: "Y entonces, en el fondo del agujero, algo se mueve. Dos pincitas, dos ojos sobre palitos. ¡Un cangrejo! Bingo da tres pasos atrás, muy deprisa.",
            en: "And then, at the bottom of the hole, something moves. Two little pincers, two eyes on stalks. A crab! Bingo takes three steps back, very quickly."
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
            text: "Puis un deuxième crabe sort. Puis un troisième. Puis toute une famille de crabes qui trottinent de côté. Papa saute sur place en tenant sa queue bien haut.",
            es: "Luego sale un segundo cangrejo. Y un tercero. Y una familia entera de cangrejos que trotan de lado. Papá da saltos con el rabo bien alto.",
            en: "Then a second crab comes out. Then a third. Then a whole family of crabs scuttling sideways. Dad hops on the spot holding his tail up high."
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
            text: "« Ils ne sont pas méchants », dit Livia doucement. « On a creusé dans leur maison, c'est tout. » Alors tout le monde s'écarte, et les crabes repartent tranquillement vers la mer.",
            es: "«No son malos», dice Livia bajito. «Hemos cavado en su casa, nada más.» Así que todos se apartan, y los cangrejos vuelven tranquilamente hacia el mar.",
            en: "«They're not nasty,» says Livia gently. «We dug into their house, that's all.» So everybody moves aside, and the crabs head calmly back to the sea."
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
            text: "Le soir, ils rebouchent le trou tous ensemble, pour que les crabes retrouvent leur chemin. Bingo garde un coquillage. « C'est pour leur dire pardon », explique-t-elle.",
            es: "Por la tarde tapan el agujero entre todos, para que los cangrejos encuentren el camino. Bingo se guarda una concha. «Es para pedirles perdón», explica.",
            en: "That evening they fill the hole in together, so the crabs can find their way. Bingo keeps a shell. «It's to say sorry to them,» she explains."
          }
        ]
      },

      /* ---------- 5 ---------- */
      {
        id: 'camping-jardin',
        title: 'Le camping dans le jardin',
        title_en: "Camping in the garden",
        title_es: "Acampada en el jardín",
        subtitle: 'Dormir dehors, à trois mètres de la maison',
        subtitle_en: "Sleeping outside, three metres from the house",
        subtitle_es: "Dormir fuera, a tres metros de casa",
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
            text: "Ce soir, on dort dans le jardin. Papa monte la tente pendant une heure entière. Quand il a fini, elle penche tellement qu'on dirait qu'elle a sommeil.",
            es: "Esta noche se duerme en el jardín. Papá monta la tienda durante una hora entera. Cuando acaba, está tan torcida que parece que tiene sueño.",
            en: "Tonight they are sleeping in the garden. Dad puts the tent up for a whole hour. When he has finished, it leans so much that it looks sleepy."
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
            text: "Livia arrive avec son sac de couchage sous le bras. Bingo, elle, a apporté onze peluches. « C'est le minimum », explique-t-elle très sérieusement.",
            es: "Livia llega con su saco de dormir bajo el brazo. Bingo ha traído once peluches. «Es lo mínimo», explica muy seria.",
            en: "Livia arrives with her sleeping bag under her arm. Bingo has brought eleven cuddly toys. «That's the minimum,» she explains very seriously."
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
            text: "La nuit tombe et Papa allume un petit feu. Chacun fait griller un chamallow au bout d'un bâton. Celui de Bingo tombe dans les braises. Elle en reprend un autre, sans un mot.",
            es: "Cae la noche y papá enciende un fuego pequeño. Cada uno tuesta una nube de azúcar en la punta de un palo. La de Bingo se cae a las brasas. Coge otra, sin decir palabra.",
            en: "Night falls and Dad lights a small fire. Everybody toasts a marshmallow on the end of a stick. Bingo's falls in the embers. She takes another, without a word."
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
            text: "Puis un bruit sort du buisson. FRRRT. Les trois se serrent l'une contre l'autre. « C'est peut-être un dragon », chuchote Bingo, qui n'y croit pas vraiment. Ou peut-être un peu.",
            es: "Entonces sale un ruido del arbusto. FRRRT. Las tres se aprietan una contra otra. «A lo mejor es un dragón», susurra Bingo, que no se lo cree del todo. O quizá un poco.",
            en: "Then a noise comes out of the bush. RUSTLE. The three of them huddle together. «It might be a dragon,» whispers Bingo, who doesn't really believe it. Or maybe a bit."
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
            text: "Bluey approche la lanterne tout doucement. Ce n'est pas un dragon : c'est un hérisson, venu voir si les chamallows tombaient souvent. Livia lui laisse un morceau de pomme.",
            es: "Bluey acerca el farol despacito. No es un dragón: es un erizo, que ha venido a ver si las nubes de azúcar se caen a menudo. Livia le deja un trozo de manzana.",
            en: "Bluey brings the lantern over slowly. It is not a dragon: it is a hedgehog, come to see whether marshmallows fall often. Livia leaves it a piece of apple."
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
            text: "Ensuite, tout le monde s'allonge dans l'herbe. Le ciel est plein d'étoiles, bien plus que d'habitude. Une étoile file au-dessus du toit. Chacun fait un vœu, en silence.",
            es: "Después, todos se tumban en la hierba. El cielo está lleno de estrellas, muchas más de lo normal. Una estrella fugaz cruza por encima del tejado. Cada uno pide un deseo, en silencio.",
            en: "Then everybody lies down in the grass. The sky is full of stars, far more than usual. A shooting star crosses above the roof. Everybody makes a wish, silently."
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
            text: "Dans la tente, les trois amies parlent encore un peu, de moins en moins fort. Dehors, on entend juste les grillons. Et à trois mètres de là, la maison veille sur elles.",
            es: "Dentro de la tienda, las tres amigas hablan todavía un rato, cada vez más bajito. Fuera solo se oyen los grillos. Y a tres metros, la casa las vigila.",
            en: "Inside the tent, the three friends talk a little longer, quieter and quieter. Outside there are only crickets. And three metres away, the house keeps watch over them."
          }
        ]
      },

      /* ---------- 6 ---------- */
      {
        id: 'glaces',
        title: 'La course des glaces fondues',
        title_en: "The melting ice cream race",
        title_es: "La carrera de los helados derretidos",
        subtitle: 'Manger vite, mais pas trop vite',
        subtitle_en: "Eat fast, but not too fast",
        subtitle_es: "Comer rápido, pero no demasiado",
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
            text: "Il fait trente-quatre degrés. Maman s'arrête devant le marchand de glaces et propose une glace pour tout le monde. La réponse arrive avant la fin de sa phrase.",
            es: "Hace treinta y cuatro grados. Mamá se para delante del heladero y propone un helado para todos. La respuesta llega antes de que acabe la frase.",
            en: "It is thirty-four degrees. Mum stops in front of the ice cream van and offers an ice cream for everybody. The answer arrives before the end of her sentence."
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
            text: "Bluey prend fraise-vanille-chocolat. Bingo prend trois fois la même parfum myrtille, pour être sûre. Livia hésite si longtemps que le marchand s'assoit.",
            es: "Bluey pide fresa-vainilla-chocolate. Bingo pide tres veces el mismo sabor de arándano, para asegurarse. Livia duda tanto rato que el heladero se sienta.",
            en: "Bluey has strawberry-vanilla-chocolate. Bingo has the same blueberry flavour three times, to be on the safe side. Livia takes so long deciding that the ice cream man sits down."
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
            text: "Mais dehors, le soleil ne plaisante pas. Au bout de dix secondes, les glaces commencent à couler sur les pattes. « Course ! » crie Bluey. « Le dernier propre a perdu ! »",
            es: "Pero fuera, el sol no bromea. A los diez segundos, los helados empiezan a chorrear por las patas. «¡Carrera!», grita Bluey. «¡El último limpio pierde!»",
            en: "But outside, the sun is not joking. After ten seconds, the ice creams start running down their paws. «Race!» shouts Bluey. «Last one clean loses!»"
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
            text: "Et puis, PLOP. La boule du haut de Bingo tombe par terre. Tout devient très silencieux. Bingo regarde sa glace, puis le trottoir, puis sa glace encore.",
            es: "Y entonces, PLOP. La bola de arriba de Bingo se cae al suelo. Todo se queda muy silencioso. Bingo mira su helado, luego la acera, luego su helado otra vez.",
            en: "And then, PLOP. Bingo's top scoop falls on the ground. Everything goes very quiet. Bingo looks at her ice cream, then at the pavement, then at her ice cream again."
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
            text: "Alors Livia tend sa glace à Bingo. « On partage, elle est trop grande pour moi. » Bingo regarde Livia comme si elle venait d'inventer quelque chose de très important.",
            es: "Entonces Livia le tiende el suyo a Bingo. «Lo compartimos, es demasiado grande para mí.» Bingo mira a Livia como si acabara de inventar algo importantísimo.",
            en: "So Livia holds hers out to Bingo. «Let's share, it's too big for me.» Bingo looks at Livia as if she had just invented something extremely important."
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
            text: "C'est le moment que choisit la glace de Papa pour tomber entièrement. Toutes les boules d'un coup, sur sa chaussure. Cette fois, c'est lui qui a l'air d'avoir quatre ans.",
            es: "Es el momento que elige el helado de papá para caerse entero. Todas las bolas de golpe, sobre su zapato. Esta vez es él quien parece tener cuatro años.",
            en: "That is the moment Dad's ice cream chooses to fall off entirely. Every scoop at once, onto his shoe. This time it is him who looks about four years old."
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
            text: "Le marchand, qui avait tout vu, en offre une nouvelle à Papa. Une toute petite, avec une seule boule. « Comme ça elle tiendra », dit-il. Elle a tenu douze secondes.",
            es: "El heladero, que lo había visto todo, le regala otro a papá. Uno pequeñito, de una sola bola. «Así aguantará», dice. Aguantó doce segundos.",
            en: "The ice cream man, who had seen the whole thing, gives Dad a new one. A very small one, with a single scoop. «That way it'll stay on,» he says. It stayed on for twelve seconds."
          }
        ]
      },

      /* ---------- 7 ---------- */
      {
        id: 'toboggan-eau',
        title: 'Le toboggan d\'eau du jardin',
        title_en: "The garden water slide",
        title_es: "El tobogán de agua del jardín",
        subtitle: 'Une bâche, du savon, et beaucoup de courage',
        subtitle_en: "A tarpaulin, some soap, and a lot of courage",
        subtitle_es: "Una lona, jabón y mucho valor",
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
            text: "Papa a trouvé une grande bâche bleue dans le garage. Bluey, elle, a trouvé quoi en faire : l'étaler sur la pente du jardin et verser de l'eau dessus.",
            es: "Papá ha encontrado una lona azul grande en el garaje. Bluey ha encontrado qué hacer con ella: extenderla en la cuesta del jardín y echarle agua por encima.",
            en: "Dad has found a big blue tarpaulin in the garage. Bluey has found what to do with it: spread it down the slope of the garden and pour water on it."
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
            text: "Puis Livia ajoute une idée : du savon. Beaucoup de savon. La bâche devient si glissante qu'on ne peut même plus marcher à côté sans partir en arrière.",
            es: "Luego Livia añade una idea: jabón. Mucho jabón. La lona se vuelve tan resbaladiza que ya ni siquiera se puede caminar al lado sin salir despedido hacia atrás.",
            en: "Then Livia adds an idea: soap. Lots of soap. The tarpaulin becomes so slippery that you can't even walk beside it without going over backwards."
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
            text: "Bluey passe la première. Elle prend de l'élan, saute sur la bâche et file comme une fusée jusque dans la pataugeoire du bas. WOUUUUH !",
            es: "Bluey va la primera. Coge carrerilla, salta sobre la lona y sale disparada como un cohete hasta la piscinita de abajo. ¡UUUUUH!",
            en: "Bluey goes first. She takes a run-up, jumps onto the tarpaulin and shoots off like a rocket into the paddling pool at the bottom. WHOOOOSH!"
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
            text: "Bingo monte en haut de la pente. Elle regarde en bas. Elle redescend. Elle remonte. « C'est trop rapide pour moi », dit-elle tout bas.",
            es: "Bingo sube hasta lo alto de la cuesta. Mira hacia abajo. Vuelve a bajar. Vuelve a subir. «Es demasiado rápido para mí», dice bajito.",
            en: "Bingo climbs to the top of the slope. She looks down. She comes back down. She climbs up again. «It's too fast for me,» she says quietly."
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
            text: "Alors Livia s'assoit derrière elle et l'entoure de ses bras. « À deux, on va moins vite », promet-elle. Ce n'est pas vrai du tout, mais ça marche quand même.",
            es: "Entonces Livia se sienta detrás de ella y la rodea con los brazos. «Entre dos vamos más despacio», le promete. No es verdad en absoluto, pero funciona igual.",
            en: "So Livia sits behind her and puts her arms round her. «Two of us go slower,» she promises. That is not true at all, but it works anyway."
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
            text: "Papa voulait juste ramasser une chaussette au bord de la bâche. Il ne l'a jamais ramassée. On l'a retrouvé assis dans la pataugeoire, l'air très surpris.",
            es: "Papá solo quería recoger un calcetín del borde de la lona. No lo recogió nunca. Lo encontraron sentado en la piscinita, con cara de mucha sorpresa.",
            en: "Dad only wanted to pick up a sock from the edge of the tarpaulin. He never picked it up. They found him sitting in the paddling pool, looking extremely surprised."
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
            text: "Le soir, tout le monde s'enroule dans une serviette sur la terrasse, les cheveux qui sentent le savon. Maman coupe une mangue en morceaux. C'est la fin parfaite d'une journée trempée.",
            es: "Por la tarde, todos se envuelven en una toalla en la terraza, con el pelo oliendo a jabón. Mamá corta un mango en trocitos. Es el final perfecto de un día empapado.",
            en: "That evening everybody wraps up in a towel on the terrace, hair smelling of soap. Mum cuts up a mango. It is the perfect end to a soaking wet day."
          }
        ]
      },

      /* ---------- 8 ---------- */
      {
        id: 'tresor',
        title: 'La chasse au trésor du jardin',
        title_en: "The garden treasure hunt",
        title_es: "La búsqueda del tesoro del jardín",
        subtitle: 'Une carte dessinée par Bingo',
        subtitle_en: "A map drawn by Bingo",
        subtitle_es: "Un mapa dibujado por Bingo",
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
            text: "Bingo a passé toute la matinée à dessiner une carte. Il y a un arbre, une croix, un serpent et quelque chose qui pourrait être un dragon. « C'est un caillou », précise-t-elle.",
            es: "Bingo se ha pasado toda la mañana dibujando un mapa. Hay un árbol, una cruz, una serpiente y algo que podría ser un dragón. «Es una piedra», aclara.",
            en: "Bingo has spent the whole morning drawing a map. There is a tree, a cross, a snake and something that might be a dragon. «It's a rock,» she explains."
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
            text: "Première étape : sept pas vers le grand arbre. Ils comptent tous ensemble, très fort. Bingo fait des pas minuscules, alors elle arrive bien après les autres.",
            es: "Primera etapa: siete pasos hacia el árbol grande. Cuentan todos juntos, muy fuerte. Bingo da pasos diminutos, así que llega bastante después que los demás.",
            en: "Stage one: seven steps towards the big tree. They count together, very loudly. Bingo takes tiny steps, so she arrives well after the others."
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
            text: "Deuxième étape : suivre le papillon orange. Ce n'était pas écrit sur la carte, mais le papillon passait par là, alors ça devenait forcément une étape.",
            es: "Segunda etapa: seguir a la mariposa naranja. Eso no estaba escrito en el mapa, pero la mariposa pasaba por allí, así que se convertía necesariamente en una etapa.",
            en: "Stage two: follow the orange butterfly. That was not written on the map, but the butterfly was going past, so it necessarily became a stage."
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
            text: "Troisième étape : la croix rouge. Sauf qu'au bon endroit, il n'y a rien du tout. Juste de l'herbe. Bingo retourne la carte dans tous les sens, l'air très ennuyé.",
            es: "Tercera etapa: la cruz roja. Solo que en el sitio correcto no hay nada de nada. Solo hierba. Bingo le da vueltas al mapa en todos los sentidos, con cara de fastidio.",
            en: "Stage three: the red cross. Except that in the right place there is nothing at all. Just grass. Bingo turns the map every which way, looking very put out."
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
            text: "C'est Livia qui comprend : la carte était à l'envers. En la retournant, la croix tombe pile sur le vieux coffre en bois, près de la remise. Il est là depuis toujours.",
            es: "Es Livia quien lo entiende: el mapa estaba del revés. Al girarlo, la cruz cae justo sobre el viejo baúl de madera, junto al cobertizo. Lleva ahí desde siempre.",
            en: "It is Livia who works it out: the map was upside down. Turned round, the cross lands exactly on the old wooden chest by the shed. It has been there forever."
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
            text: "Le couvercle grince en s'ouvrant. À l'intérieur : trois vieilles photos, une balle de tennis toute plate, et un dessin fait par Papa quand il avait leur âge.",
            es: "La tapa chirría al abrirse. Dentro: tres fotos viejas, una pelota de tenis completamente aplastada, y un dibujo hecho por papá cuando tenía su edad.",
            en: "The lid creaks as it opens. Inside: three old photographs, a completely flat tennis ball, and a drawing Dad did when he was their age."
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
            text: "Papa s'assoit dans l'herbe avec le dessin dans les pattes. « C'était mon trésor à moi », dit-il doucement. Bingo décide alors que la carte servira encore demain.",
            es: "Papá se sienta en la hierba con el dibujo entre las patas. «Ese era mi tesoro», dice bajito. Bingo decide entonces que el mapa servirá también mañana.",
            en: "Dad sits down in the grass with the drawing in his paws. «That was my treasure,» he says quietly. Bingo decides then and there that the map will do again tomorrow."
          }
        ]
      },

      /* ---------- 9 ---------- */
      {
        id: 'pique-nique',
        title: 'Le pique-nique tout en haut',
        title_en: "The picnic right at the top",
        title_es: "El picnic allá arriba",
        subtitle: 'Une colline, un panier, et beaucoup de vent',
        subtitle_en: "A hill, a basket, and a lot of wind",
        subtitle_es: "Una colina, una cesta y mucho viento",
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
            text: "La colline est haute et l'herbe sèche crisse sous les pattes. « Le premier en haut ! » crie Bluey. Maman monte tranquillement derrière, avec la glacière.",
            es: "La colina es alta y la hierba seca cruje bajo las patas. «¡El primero arriba!», grita Bluey. Mamá sube tranquilamente detrás, con la nevera.",
            en: "The hill is high and the dry grass crunches underfoot. «First one to the top!» shouts Bluey. Mum climbs up calmly behind, with the cool box."
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
            text: "Papa arrive bon dernier, la glacière dans une patte et le parasol dans l'autre. Il s'assoit dans l'herbe sans un mot pendant un long moment.",
            es: "Papá llega el último de todos, con la nevera en una pata y la sombrilla en la otra. Se sienta en la hierba sin decir palabra durante un buen rato.",
            en: "Dad arrives dead last, cool box in one paw and parasol in the other. He sits down in the grass without a word for a long while."
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
            text: "La nappe est étalée, et le festin commence : sandwiches, pastèque, chips et jus de fruits. On voit toute la ville en bas, minuscule, avec les toits qui brillent.",
            es: "El mantel está extendido y empieza el festín: bocadillos, sandía, patatas fritas y zumo. Se ve toda la ciudad abajo, minúscula, con los tejados brillando.",
            en: "The rug is spread out and the feast begins: sandwiches, watermelon, crisps and fruit juice. You can see the whole town below, tiny, with the roofs shining."
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
            text: "Et puis le vent se lève. D'un seul coup, la nappe décolle avec tout ce qu'il y avait dessus. Les serviettes partent vers le bas de la colline, en tourbillonnant.",
            es: "Y entonces se levanta el viento. De golpe, el mantel despega con todo lo que había encima. Las servilletas salen colina abajo, dando vueltas.",
            en: "And then the wind gets up. All at once, the rug takes off with everything that was on it. The napkins go tumbling down the hill, spinning."
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
            text: "Tout le monde part à la poursuite du pique-nique. Papa court après une serviette, Bluey après un sandwich, et Livia rattrape le sachet de chips en plein vol.",
            es: "Todo el mundo sale a perseguir el picnic. Papá corre detrás de una servilleta, Bluey detrás de un bocadillo, y Livia atrapa la bolsa de patatas en pleno vuelo.",
            en: "Everybody sets off after the picnic. Dad chases a napkin, Bluey chases a sandwich, and Livia catches the crisp packet in mid-air."
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
            text: "Mais un vent pareil, ça ne se gâche pas. Livia sort le cerf-volant du sac. Il monte du premier coup, si haut qu'il devient un petit point rouge dans le bleu.",
            es: "Pero un viento así no se desaprovecha. Livia saca la cometa de la mochila. Sube a la primera, tan alto que se convierte en un puntito rojo en el azul.",
            en: "But you don't waste a wind like that. Livia gets the kite out of the bag. It goes up first time, so high it becomes a small red dot in the blue."
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
            text: "Ils restent tout en haut jusqu'à ce que le soleil touche les toits. Personne ne parle. En bas, les lumières de la ville s'allument une par une, comme des étoiles à l'envers.",
            es: "Se quedan allá arriba hasta que el sol toca los tejados. Nadie habla. Abajo, las luces de la ciudad se encienden una a una, como estrellas del revés.",
            en: "They stay right at the top until the sun touches the roofs. Nobody speaks. Below, the town lights come on one by one, like upside-down stars."
          }
        ]
      },

      /* ---------- 10 ---------- */
      {
        id: 'lucioles',
        title: 'La nuit des lucioles',
        title_en: "The night of the fireflies",
        title_es: "La noche de las luciérnagas",
        subtitle: 'Rester réveillé jusqu\'à la nuit noire',
        subtitle_en: "Staying awake until it's properly dark",
        subtitle_es: "Aguantar despierto hasta que sea noche cerrada",
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
            text: "Ce soir, Maman a dit une phrase incroyable : « Vous vous couchez plus tard. » Personne n'a osé demander pourquoi, de peur qu'elle change d'avis.",
            es: "Esta noche, mamá ha dicho una frase increíble: «Os acostáis más tarde.» Nadie se ha atrevido a preguntar por qué, por miedo a que cambiara de idea.",
            en: "Tonight, Mum said an unbelievable sentence: «You can go to bed later.» Nobody dared ask why, in case she changed her mind."
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
            text: "Ils attendent dans le jardin, assis en rond dans l'herbe. Il ne se passe rien. Rien du tout. Bingo commence à se demander si Maman s'est trompée.",
            es: "Esperan en el jardín, sentados en corro sobre la hierba. No pasa nada. Nada de nada. Bingo empieza a preguntarse si mamá se habrá equivocado.",
            en: "They wait in the garden, sitting in a ring on the grass. Nothing happens. Nothing at all. Bingo starts to wonder whether Mum got it wrong."
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
            text: "Et puis Livia voit la première : une minuscule lumière verte, qui s'allume et s'éteint au-dessus de l'herbe. Une luciole. Puis deux. Puis dix.",
            es: "Y entonces Livia la ve la primera: una lucecita verde diminuta, que se enciende y se apaga por encima de la hierba. Una luciérnaga. Luego dos. Luego diez.",
            en: "And then Livia sees the first one: a tiny green light, blinking on and off above the grass. A firefly. Then two. Then ten."
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
            text: "Le jardin entier se met à clignoter. Les trois amies tournent sur elles-mêmes, les bras en l'air, au milieu des petites lumières qui montent et qui descendent.",
            es: "El jardín entero se pone a parpadear. Las tres amigas giran sobre sí mismas, con los brazos en alto, entre las lucecitas que suben y bajan.",
            en: "The whole garden begins to twinkle. The three friends spin round with their arms in the air, in the middle of the little lights going up and down."
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
            text: "Une luciole se pose sur la patte de Bingo. Bingo ne bouge plus du tout, même pas les oreilles. La lumière s'allume, s'éteint, s'allume encore. Puis elle repart.",
            es: "Una luciérnaga se posa en la pata de Bingo. Bingo no mueve ni una oreja. La luz se enciende, se apaga, se enciende otra vez. Y luego se va.",
            en: "A firefly lands on Bingo's paw. Bingo does not move a muscle, not even her ears. The light comes on, goes off, comes on again. Then it flies away."
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
            text: "Papa explique tout bas que les lucioles ne brillent que quelques nuits dans l'année. « Alors c'est une nuit rare », dit Bluey. Papa hoche la tête : « Très rare. »",
            es: "Papá explica bajito que las luciérnagas solo brillan unas pocas noches al año. «Entonces es una noche rara», dice Bluey. Papá asiente: «Rarísima.»",
            en: "Dad explains quietly that fireflies only glow on a few nights a year. «So it's a rare night,» says Bluey. Dad nods: «Very rare.»"
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
            text: "Dans la chambre, les trois amies ont encore des petites lumières plein les yeux. « Bonne nuit les lucioles », murmure Bingo. Elles dorment avant la fin de la phrase.",
            es: "En la habitación, las tres amigas todavía tienen lucecitas en los ojos. «Buenas noches, luciérnagas», susurra Bingo. Se duermen antes del final de la frase.",
            en: "In the bedroom, the three friends still have little lights in their eyes. «Good night, fireflies,» whispers Bingo. They are asleep before the end of the sentence."
          }
        ]
      },

      /* ---------- 11 : partager le temps ---------- */
      {
        id: 'balancoire',
        title: 'La balançoire pour deux',
        title_en: "One swing for two",
        title_es: "El columpio para dos",
        subtitle: 'Une seule balançoire, et vingt secondes chacun',
        subtitle_en: "One single swing, and twenty seconds each",
        subtitle_es: "Un solo columpio, y veinte segundos cada una",
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
            text: "Papa avait accroché une balançoire à la branche du grand arbre. Une seule. Bluey et Livia la regardèrent, puis se regardèrent, et comprirent le problème en même temps.",
            es: "Papá había colgado un columpio de la rama del árbol grande. Uno solo. Bluey y Livia lo miraron, luego se miraron, y entendieron el problema a la vez.",
            en: "Dad had hung a swing from the branch of the big tree. Just one. Bluey and Livia looked at it, then looked at each other, and understood the problem at the same moment."
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
            text: "« Moi d'abord ! » dirent-elles exactement en même temps, ce qui ne réglait rien du tout. Elles le redirent une deuxième fois, plus fort, ce qui ne régla rien non plus.",
            es: "«¡Yo primero!», dijeron exactamente a la vez, lo cual no arreglaba nada. Lo repitieron una segunda vez, más fuerte, lo cual tampoco arregló nada.",
            en: "«Me first!» they said at exactly the same time, which settled nothing at all. They said it again, louder, which settled nothing either."
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
            text: "Papa arriva avec une idée à la place d'une punition. « Vingt », dit-il. « On compte jusqu'à vingt à voix haute, et on change. Celle qui pousse compte. »",
            es: "Papá llegó con una idea en lugar de un castigo. «Veinte», dijo. «Se cuenta hasta veinte en voz alta, y se cambia. Cuenta la que empuja.»",
            en: "Dad arrived with an idea instead of a telling-off. «Twenty,» he said. «We count to twenty out loud, then we swap. Whoever pushes does the counting.»"
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
            text: "Livia poussa, et compta. Un, deux, trois. Au début elle compta très vite, en espérant que ça irait plus vite. Papa lui fit remarquer qu'après, ce serait pareil pour elle.",
            es: "Livia empujó y contó. Uno, dos, tres. Al principio contó muy rápido, esperando que fuera más deprisa. Papá le hizo notar que después le tocaría a ella igual.",
            en: "Livia pushed, and counted. One, two, three. At first she counted very fast, hoping it would go quicker. Dad pointed out that afterwards it would be the same for her."
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
            text: "Alors Bluey compta lentement, très lentement, en traînant sur chaque nombre. Livia fut d'accord pour dire que c'était la meilleure façon de compter jusqu'à vingt.",
            es: "Así que Bluey contó despacio, muy despacio, alargando cada número. Livia estuvo de acuerdo en que esa era la mejor manera de contar hasta veinte.",
            en: "So Bluey counted slowly, very slowly, dragging out every number. Livia agreed that this was the best way of counting to twenty."
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
            text: "Elles firent ça tout l'après-midi. Vingt pour l'une, vingt pour l'autre. Attendre son tour est beaucoup moins long quand on sait exactement combien de temps ça dure.",
            es: "Lo hicieron toda la tarde. Veinte para una, veinte para la otra. Esperar tu turno se hace mucho menos largo cuando sabes exactamente cuánto dura.",
            en: "They did that all afternoon. Twenty for one, twenty for the other. Waiting your turn feels far shorter when you know exactly how long it lasts."
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
            text: "Le soir, Papa demanda qui avait gagné. Personne ne comprit la question. On ne gagne pas à la balançoire : on y va chacun son tour, et c'est déjà beaucoup.",
            es: "Por la noche, papá preguntó quién había ganado. Nadie entendió la pregunta. En el columpio no se gana: se va por turnos, y ya es bastante.",
            en: "That evening, Dad asked who had won. Nobody understood the question. You don't win at swings: you take turns, and that is quite enough."
          }
        ]
      },

      /* ---------- 12 : donner ce dont on ne se sert plus ---------- */
      {
        id: 'donner',
        title: 'Les jouets qu\'on donne',
        title_en: "The toys you give away",
        title_es: "Los juguetes que se regalan",
        subtitle: 'Se séparer de ce dont on ne joue plus',
        subtitle_en: "Parting with what you don't play with any more",
        subtitle_es: "Separarse de aquello con lo que ya no se juega",
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
            text: "Le coffre à jouets ne fermait plus. Maman proposa de trier : ce qu'on garde d'un côté, ce qu'on donne de l'autre. Bluey et Livia trouvèrent l'idée très raisonnable, en théorie.",
            es: "El baúl de los juguetes ya no cerraba. Mamá propuso ordenar: lo que se queda a un lado, lo que se regala al otro. A Bluey y a Livia les pareció muy razonable, en teoría.",
            en: "The toy chest would not close any more. Mum suggested sorting: keep on one side, give away on the other. Bluey and Livia thought that was very sensible, in theory."
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
            text: "En pratique, ce fut différent. Chaque jouet sorti du coffre redevenait immédiatement le jouet préféré du monde. Même celui à qui il manquait une roue depuis deux ans.",
            es: "En la práctica fue distinto. Cada juguete que salía del baúl se convertía inmediatamente en el juguete preferido del mundo. Incluso al que le faltaba una rueda desde hacía dos años.",
            en: "In practice it was different. Every toy that came out of the chest immediately became the best toy in the world. Even the one that had been missing a wheel for two years."
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
            text: "« Quand y as-tu joué la dernière fois ? » demanda Maman. Livia réfléchit très fort. Elle ne trouva pas. C'était une question désagréable et très efficace.",
            es: "«¿Cuándo jugaste con eso por última vez?», preguntó mamá. Livia se lo pensó mucho. No lo encontró. Era una pregunta desagradable y muy eficaz.",
            en: "«When did you last play with it?» asked Mum. Livia thought very hard. She could not come up with an answer. It was an unpleasant and highly effective question."
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
            text: "Elles remplirent quand même un carton. Puis elles le portèrent, toutes les trois, jusqu'à la salle du bas de la rue, où des gens donnent des jouets à des enfants qui n'en ont pas.",
            es: "Aun así llenaron una caja. Y la llevaron entre las tres hasta el local del final de la calle, donde hay gente que da juguetes a niños que no tienen.",
            en: "They filled a box anyway. Then all three of them carried it to the hall at the end of the road, where people give toys to children who haven't any."
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
            text: "Une petite fille prit le camion à trois roues dans ses bras comme si c'était un trésor. Livia eut envie de dire que c'était le sien. Elle ne le dit pas, et elle regarda.",
            es: "Una niña pequeña cogió el camión de tres ruedas en brazos como si fuera un tesoro. Livia tuvo ganas de decir que era suyo. No lo dijo, y se quedó mirando.",
            en: "A little girl took the three-wheeled truck in her arms as if it were treasure. Livia wanted to say it was hers. She did not say it, and she watched."
          },
          {
            scene: {
              bg: 'bedroom', time: 'sunset',
              items: [
                { t: 'bluey', x: 300, y: 496, s: 1.15, pose: 'sit' },
                { t: 'livia', x: 560, y: 496, s: 1.1, pose: 'sit' }
              ]
            },
            text: "Le soir, le coffre fermait. Il y avait de la place pour jouer par terre. Livia pensa au camion, de temps en temps, et à chaque fois ça lui faisait quelque chose de doux.",
            es: "Por la noche, el baúl cerraba. Había sitio para jugar en el suelo. Livia pensó en el camión, de vez en cuando, y cada vez le hacía algo dulce por dentro.",
            en: "That evening, the chest closed. There was room to play on the floor. Livia thought about the truck now and then, and every time it gave her a soft sort of feeling."
          }
        ]
      },

      /* ---------- 13 : dedans, dehors ---------- */
      {
        id: 'dedans-dehors',
        title: 'Dedans on marche, dehors on court',
        title_en: "Inside we walk, outside we run",
        title_es: "Dentro se anda, fuera se corre",
        subtitle: 'Les règles changent d\'endroit',
        subtitle_en: "Rules change with the place",
        subtitle_es: "Las reglas cambian según el sitio",
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
            text: "Il pleuvait. Alors Bluey et Livia inventèrent la course du couloir : quinze pas, demi-tour, quinze pas. Le sol tremblait un peu, et c'était justement ce qui était bien.",
            es: "Llovía. Así que Bluey y Livia inventaron la carrera del pasillo: quince pasos, media vuelta, quince pasos. El suelo temblaba un poco, y eso era justamente lo bueno.",
            en: "It was raining. So Bluey and Livia invented the corridor race: fifteen steps, turn round, fifteen steps. The floor shook slightly, and that was precisely the good part."
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
            text: "« On ne court pas dedans ! » dit Papa. Bluey répondit qu'hier, au parc, personne ne lui avait rien dit. Elle trouvait ça parfaitement contradictoire.",
            es: "«¡Dentro no se corre!», dijo papá. Bluey contestó que ayer, en el parque, nadie le había dicho nada. Le parecía perfectamente contradictorio.",
            en: "«We don't run indoors!» said Dad. Bluey replied that yesterday, at the park, nobody had said a word to her. She found that perfectly contradictory."
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
            text: "« Dehors, il y a de la place », dit Papa. « Dedans, il y a des coins de table, des vases, et un bébé par terre. La règle ne change pas pour t'embêter : elle change parce que l'endroit change. »",
            es: "«Fuera hay sitio», dijo papá. «Dentro hay esquinas de mesa, jarrones y un bebé en el suelo. La regla no cambia para fastidiarte: cambia porque cambia el sitio.»",
            en: "«Outside, there's room,» said Dad. «Inside, there are table corners, vases, and a baby on the floor. The rule doesn't change to annoy you: it changes because the place changes.»"
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
            text: "Alors elles firent la liste. Dans l'escalier ? On marche. Au supermarché ? On marche. À la bibliothèque ? On chuchote. Dans le jardin ? On fait ce qu'on veut, ou presque.",
            es: "Así que hicieron la lista. ¿En la escalera? Se anda. ¿En el supermercado? Se anda. ¿En la biblioteca? Se susurra. ¿En el jardín? Lo que quieras, o casi.",
            en: "So they made the list. On the stairs? Walk. In the supermarket? Walk. At the library? Whisper. In the garden? Whatever you like, or nearly."
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
            text: "La pluie s'arrêta en fin d'après-midi. Elles sortirent en courant. Personne ne dit rien, parce que dehors, courir est exactement ce qu'il faut faire.",
            es: "La lluvia paró al final de la tarde. Salieron corriendo. Nadie dijo nada, porque fuera, correr es exactamente lo que hay que hacer.",
            en: "The rain stopped at the end of the afternoon. They ran outside. Nobody said anything, because outdoors, running is exactly the thing to do."
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
            text: "Le soir, Bluey fit remarquer que la course du couloir aurait été bien meilleure dehors, avec de la place. Papa dit que oui. C'était toute la question depuis le début.",
            es: "Por la noche, Bluey comentó que la carrera del pasillo habría sido mucho mejor fuera, con sitio. Papá dijo que sí. De eso se trataba desde el principio.",
            en: "That evening, Bluey pointed out that the corridor race would have been much better outside, with room. Dad said yes. That had been the whole point all along."
          }
        ]
      },

      /* ---------- 14 : l'ennui ---------- */
      {
        id: 'ennui',
        title: 'Je m\'ennuie',
        title_en: "I'm bored",
        title_es: "Me aburro",
        subtitle: 'Ce qu\'on trouve quand il n\'y a rien à faire',
        subtitle_en: "What you find when there's nothing to do",
        subtitle_es: "Lo que se encuentra cuando no hay nada que hacer",
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
            text: "C'était un mercredi sans rien. Pas d'école, pas de copains, pas de sortie. Bluey et Livia étaient assises dans l'herbe et n'avaient absolument rien à faire.",
            es: "Era un miércoles sin nada. Sin cole, sin amigos, sin plan. Bluey y Livia estaban sentadas en la hierba y no tenían absolutamente nada que hacer.",
            en: "It was a Wednesday with nothing in it. No school, no friends, no outing. Bluey and Livia sat in the grass with absolutely nothing to do."
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
            text: "Elles allèrent se plaindre à Maman. Maman ne proposa rien du tout. « Tant mieux », dit-elle. « L'ennui, c'est là que ça commence. » Puis elle repartit étendre le linge.",
            es: "Fueron a quejarse a mamá. Mamá no propuso nada de nada. «Mejor», dijo. «El aburrimiento es donde empieza la cosa.» Y se fue a tender la ropa.",
            en: "They went to complain to Mum. Mum suggested nothing whatsoever. «Good,» she said. «Boredom is where it starts.» Then she went back to hanging out the washing."
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
            text: "Elles restèrent là un long moment, sans rien faire, ce qui est très inconfortable. Livia arracha trois brins d'herbe. Bluey regarda une fourmi traverser tout le jardin.",
            es: "Se quedaron allí un buen rato, sin hacer nada, lo cual resulta muy incómodo. Livia arrancó tres briznas de hierba. Bluey miró a una hormiga cruzar el jardín entero.",
            en: "They stayed there a long while, doing nothing, which is very uncomfortable. Livia pulled up three blades of grass. Bluey watched an ant cross the entire garden."
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
            text: "Et puis Bluey dit : « Et si l'herbe c'était la mer, et le banc une île ? » Livia répondit que dans ce cas la fourmi était un crocodile. Le mercredi venait de changer complètement.",
            es: "Y entonces Bluey dijo: «¿Y si la hierba fuera el mar, y el banco una isla?» Livia contestó que en ese caso la hormiga era un cocodrilo. El miércoles acababa de cambiar por completo.",
            en: "And then Bluey said: «What if the grass was the sea, and the bench was an island?» Livia replied that in that case the ant was a crocodile. The Wednesday had just changed completely."
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
            text: "Elles construisirent un radeau avec deux planches. Elles fuirent le crocodile. Elles fondèrent un pays sur l'île, avec des lois compliquées et un drapeau en torchon.",
            es: "Construyeron una balsa con dos tablas. Huyeron del cocodrilo. Fundaron un país en la isla, con leyes complicadas y una bandera hecha con un trapo.",
            en: "They built a raft out of two planks. They fled the crocodile. They founded a country on the island, with complicated laws and a flag made from a tea towel."
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
            text: "Le soir, Maman demanda si elles s'étaient ennuyées. Elles dirent que non, pas du tout, pas une seconde. Elles avaient oublié le début de la journée.",
            es: "Por la noche, mamá preguntó si se habían aburrido. Dijeron que no, para nada, ni un segundo. Se habían olvidado del principio del día.",
            en: "That evening, Mum asked whether they had been bored. They said no, not at all, not for a second. They had forgotten the beginning of the day."
          }
        ]
      },

      /* ---------- 15 : le jeu qui s'arrête ---------- */
      {
        id: 'le-jeu-sarrete',
        title: "Le jeu qui s'arrête",
        title_en: "The game that stops",
        title_es: "El juego que se acaba",
        subtitle: "Encore cinq minutes, et puis vraiment plus",
        subtitle_en: "Five more minutes, and then really no more",
        subtitle_es: "Cinco minutos más, y luego de verdad no",
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
            text: "Le jeu du château durait depuis une heure. Il avait des rois, des dragons, un pont qui s'écroule, et surtout il n'était pas fini : personne ne savait encore comment il devait se terminer.",
            es: "El juego del castillo llevaba una hora. Tenía reyes, dragones, un puente que se derrumba, y sobre todo no estaba acabado: nadie sabía todavía cómo tenía que terminar.",
            en: "The castle game had been going for an hour. It had kings, dragons, a bridge that collapses, and above all it was not finished: nobody yet knew how it was supposed to end."
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
            text: "Papa apparut à la porte. « Cinq minutes », dit-il, « et on rentre. » Il ne cria pas, il ne discuta pas. Il dit cinq minutes, et il retourna à l'intérieur.",
            es: "Papá apareció en la puerta. «Cinco minutos», dijo, «y entramos.» No gritó, no discutió. Dijo cinco minutos y volvió adentro.",
            en: "Dad appeared at the door. «Five minutes,» he said, «and then we come in.» He did not shout, he did not argue. He said five minutes, and went back inside."
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
            text: "Les cinq minutes devinrent les plus remplies de la journée. Le dragon fut vaincu, le pont réparé, la princesse changée en boulangère. On peut faire énormément de choses en cinq minutes.",
            es: "Los cinco minutos fueron los más llenos del día. El dragón fue vencido, el puente reparado, la princesa convertida en panadera. Se pueden hacer muchísimas cosas en cinco minutos.",
            en: "The five minutes turned out to be the fullest of the day. The dragon was defeated, the bridge repaired, the princess turned into a baker. You can do an enormous amount in five minutes."
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
            text: "Puis Papa revint. « C'est l'heure. » Bluey sentit monter la chose chaude et injuste qui monte toujours à ce moment-là, et il ouvrit la bouche pour dire que ce n'était pas juste.",
            es: "Luego papá volvió. «Es la hora.» Bluey notó subir esa cosa caliente e injusta que sube siempre en ese momento, y abrió la boca para decir que no era justo.",
            en: "Then Dad came back. «Time's up.» Bluey felt the hot, unfair thing rise up that always rises at that moment, and opened her mouth to say it wasn't fair."
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
            text: "Livia le prit de vitesse. « On le laisse là », dit-elle. « Il nous attend, le château. » Elle posa la couronne en carton sur la marche, bien en évidence, comme un signet dans un livre.",
            es: "Livia se le adelantó. «Lo dejamos aquí», dijo. «Nos espera, el castillo.» Puso la corona de cartón en el escalón, bien a la vista, como un marcapáginas en un libro.",
            en: "Livia got in first. «We'll leave it here,» she said. «It'll wait for us, the castle.» She put the cardboard crown on the step, well in view, like a bookmark in a book."
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
            text: "Ils rentrèrent sans crier. Le lendemain, la couronne était toujours sur la marche, un peu humide de rosée. Le jeu reprit exactement où il s'était arrêté, ce qui n'arrive presque jamais.",
            es: "Entraron sin gritar. Al día siguiente, la corona seguía en el escalón, un poco húmeda de rocío. El juego se reanudó exactamente donde se había parado, cosa que casi nunca pasa.",
            en: "They went in without shouting. The next day, the crown was still on the step, slightly damp with dew. The game picked up exactly where it had stopped, which almost never happens."
          }
        ]
      },

      /* ---------- 16 : Bingo a peur du noir ---------- */
      {
        id: 'bingo-a-peur-du-noir',
        title: 'Bingo a peur du noir',
        title_en: "Bingo is scared of the dark",
        title_es: "Bingo tiene miedo a la oscuridad",
        subtitle: "Être la grande, pour une fois",
        subtitle_en: "Being the big one, for once",
        subtitle_es: "Ser la mayor, por una vez",
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
            text: "Livia dormait chez Bluey. Trois matelas par terre, une lampe éteinte, et l'excitation terrible de dormir ailleurs que chez soi. Bonne nuit, dit Chilli en fermant la porte.",
            es: "Livia dormía en casa de Bluey. Tres colchones en el suelo, una lámpara apagada, y la emoción tremenda de dormir en otra casa. Buenas noches, dijo Chilli al cerrar la puerta.",
            en: "Livia was sleeping over at Bluey's. Three mattresses on the floor, a lamp switched off, and the terrific excitement of sleeping somewhere that isn't home. Good night, said Chilli, closing the door."
          },
          {
            scene: {
              bg: 'bedroom', time: 'night',
              items: [{ t: 'bingo', x: 400, y: 496, s: 1.2, pose: 'sit', mood: 'sad' }],
              sfx: [{ t: 'SNIF.', x: 400, y: 146, fs: 30, rot: -5, color: '#bfa8e0' }]
            },
            text: "Au bout d'un moment, il y eut un petit bruit dans le noir. Ce n'était pas un monstre : c'était Bingo, qui reniflait le plus discrètement possible, ce qui ne marche jamais très bien.",
            es: "Al cabo de un rato se oyó un ruidito en la oscuridad. No era un monstruo: era Bingo, que sorbía lo más discretamente posible, cosa que nunca funciona muy bien.",
            en: "After a while there was a small noise in the dark. It was not a monster: it was Bingo, sniffing as discreetly as possible, which never works very well."
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
            text: "Livia s'assit. Elle allait dire « n'aie pas peur », et puis elle se souvint que ça n'aide personne. Alors elle dit : « moi aussi, des fois. » Le reniflement s'arrêta une seconde.",
            es: "Livia se incorporó. Iba a decir «no tengas miedo», y entonces se acordó de que eso no ayuda a nadie. Así que dijo: «yo también, a veces.» El sorbido se paró un segundo.",
            en: "Livia sat up. She was going to say «don't be scared», and then she remembered that this helps nobody. So she said: «me too, sometimes.» The sniffing stopped for a second."
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
            text: "Elles allumèrent la petite lampe et firent le tour de la chambre en nommant tout : ça, c'est le manteau ; ça, c'est la chaise ; ça, c'est le poisson en peluche. Les choses nommées deviennent plus petites.",
            es: "Encendieron la lamparita y dieron la vuelta a la habitación nombrándolo todo: eso es el abrigo; eso es la silla; eso es el pez de peluche. Las cosas con nombre se vuelven más pequeñas.",
            en: "They switched on the little lamp and went round the room naming everything: that's the coat; that's the chair; that's the toy fish. Named things get smaller."
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
            text: "« Je ne dormais pas non plus », dit une voix depuis le troisième matelas. Bluey était réveillé depuis le début, et il n'avait rien dit, pour laisser Livia s'en occuper.",
            es: "«Yo tampoco dormía», dijo una voz desde el tercer colchón. Bluey llevaba despierta desde el principio, y no había dicho nada, para dejar que Livia se ocupara.",
            en: "«I wasn't asleep either,» said a voice from the third mattress. Bluey had been awake the whole time, and had said nothing, to let Livia handle it."
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
            text: "Ils laissèrent la lampe allumée, tout en bas. Livia s'endormit la dernière, et elle eut le temps de penser qu'être la grande, ce n'est pas ne pas avoir peur : c'est le dire en premier.",
            es: "Dejaron la lámpara encendida, muy bajita. Livia se durmió la última, y le dio tiempo a pensar que ser la mayor no es no tener miedo: es decirlo la primera.",
            en: "They left the lamp on, turned right down. Livia fell asleep last, and had time to think that being the big one isn't about not being scared: it's about saying it first."
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
        title_en: "Mr Grumpy and the lost smile",
        title_es: "Don Gruñón y la sonrisa perdida",
        subtitle: 'On peut être grognon et se laisser attraper',
        subtitle_en: "You can be grumpy and still get caught out",
        subtitle_es: "Se puede ser gruñón y dejarse pillar",
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
            text: "Monsieur Grognon était grognon. Le matin, il était grognon. Le soir, il était grognon. Même le jour de son anniversaire, il était grognon. C'était comme ça.",
            es: "Don Gruñón era gruñón. Por la mañana era gruñón. Por la noche era gruñón. Incluso el día de su cumpleaños era gruñón. Así era él.",
            en: "Mr Grumpy was grumpy. In the morning he was grumpy. In the evening he was grumpy. Even on his birthday he was grumpy. That was just how it was."
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
            text: "Ce matin-là, Livia le croisa sur le chemin. « Bonjour Monsieur Grognon ! » Monsieur Grognon répondit : « Mmpf. » Ce qui, dans sa langue, voulait dire bonjour.",
            es: "Esa mañana, Livia se lo cruzó por el camino. «¡Buenos días, don Gruñón!» Don Gruñón contestó: «Mmpf.» Que, en su idioma, quería decir buenos días.",
            en: "That morning, Livia met him on the path. «Good morning, Mr Grumpy!» Mr Grumpy replied: «Mmpf.» Which, in his language, meant good morning."
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
            text: "« Tu as perdu ton sourire ? » demanda Livia. Monsieur Grognon réfléchit. Il ne se souvenait pas d'en avoir eu un. « On va le chercher », décida Livia.",
            es: "«¿Has perdido tu sonrisa?», preguntó Livia. Don Gruñón se lo pensó. No recordaba haber tenido ninguna. «Vamos a buscarla», decidió Livia.",
            en: "«Have you lost your smile?» asked Livia. Mr Grumpy thought about it. He could not remember ever having one. «We'll go and look for it,» decided Livia."
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
            text: "Ils cherchèrent sous une pierre. Rien. Ils cherchèrent dans un arbre. Rien. Ils cherchèrent dans la poche de Monsieur Grognon. Il n'y avait qu'un vieux bouton.",
            es: "Buscaron debajo de una piedra. Nada. Buscaron en un árbol. Nada. Buscaron en el bolsillo de don Gruñón. Solo había un botón viejo.",
            en: "They looked under a stone. Nothing. They looked in a tree. Nothing. They looked in Mr Grumpy's pocket. There was only an old button."
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
            text: "Et puis Livia glissa sur l'herbe mouillée et tomba sur les fesses. Elle rit très fort. Alors il se passa quelque chose d'extraordinaire dans le visage de Monsieur Grognon.",
            es: "Y entonces Livia resbaló en la hierba mojada y se cayó de culo. Se rio muchísimo. Y en la cara de don Gruñón pasó algo extraordinario.",
            en: "And then Livia slipped on the wet grass and landed on her bottom. She laughed very loudly. And something extraordinary happened in Mr Grumpy's face."
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
            text: "Un coin de sa bouche monta. Puis l'autre. Monsieur Grognon souriait. « Il était là depuis le début », dit Livia. Le lendemain, il était de nouveau grognon. Mais un peu moins.",
            es: "Una esquina de su boca subió. Luego la otra. Don Gruñón sonreía. «Estaba ahí desde el principio», dijo Livia. Al día siguiente volvía a estar gruñón. Pero un poquito menos.",
            en: "One corner of his mouth went up. Then the other. Mr Grumpy was smiling. «It was there all along,» said Livia. The next day he was grumpy again. But a little bit less."
          }
        ]
      },

      /* ---------- 2 ---------- */
      {
        id: 'chipie',
        title: 'Madame Chipie fait une farce',
        title_en: "Little Miss Naughty plays a trick",
        title_es: "Doña Traviesa hace una broma",
        subtitle: 'La blague qui va trop loin',
        subtitle_en: "The joke that goes too far",
        subtitle_es: "La broma que se pasa de la raya",
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
            text: "Madame Chipie adorait les farces. Elle nouait les lacets. Elle cachait les chapeaux. Elle mettait du sel dans le sucre. Et elle riait, riait, riait.",
            es: "A doña Traviesa le encantaban las bromas. Ataba los cordones. Escondía los sombreros. Ponía sal en el azúcar. Y se reía, se reía, se reía.",
            en: "Little Miss Naughty adored tricks. She tied shoelaces together. She hid hats. She put salt in the sugar. And she laughed, and laughed, and laughed."
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
            text: "Ce jour-là, elle prit le chapeau de Monsieur Lent et le posa tout en haut d'un arbre. Monsieur Lent mit une heure à s'en apercevoir. Madame Chipie riait déjà depuis longtemps.",
            es: "Ese día cogió el sombrero de don Lento y lo puso en lo alto de un árbol. Don Lento tardó una hora en darse cuenta. Doña Traviesa llevaba riéndose un buen rato.",
            en: "That day she took Mr Slow's hat and put it right at the top of a tree. It took Mr Slow an hour to notice. Little Miss Naughty had been laughing for ages already."
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
            text: "Puis elle décida de faire une farce à Livia. Elle attendit qu'elle ait le dos tourné, et cacha son doudou dans le grand buisson.",
            es: "Luego decidió gastarle una broma a Livia. Esperó a que se diera la vuelta y escondió su peluche en el arbusto grande.",
            en: "Then she decided to play a trick on Livia. She waited until her back was turned, and hid her cuddly toy in the big bush."
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
            text: "Livia chercha partout. Elle ne riait pas du tout. Ses yeux devinrent brillants, et sa bouche fit une drôle de forme. Madame Chipie sentit son propre rire s'éteindre.",
            es: "Livia buscó por todas partes. No se reía nada. Se le pusieron los ojos brillantes y la boca hizo una forma rara. Doña Traviesa notó cómo se le apagaba su propia risa.",
            en: "Livia looked everywhere. She was not laughing at all. Her eyes went shiny, and her mouth made a funny shape. Little Miss Naughty felt her own laugh go out."
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
            text: "Madame Chipie courut au buisson, rapporta le doudou et le rendit à Livia. « Pardon », dit-elle. « Je croyais que c'était drôle. Je ne savais pas que ça piquait. »",
            es: "Doña Traviesa corrió al arbusto, sacó el peluche y se lo devolvió a Livia. «Perdona», dijo. «Creía que tenía gracia. No sabía que picaba.»",
            en: "Little Miss Naughty ran to the bush, fetched the cuddly toy and gave it back to Livia. «Sorry,» she said. «I thought it was funny. I didn't know it stung.»"
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
            text: "Depuis, Madame Chipie fait toujours des farces. Mais avant, elle se pose une question : est-ce qu'on va rire à deux ? Si la réponse est non, elle en cherche une autre.",
            es: "Desde entonces, doña Traviesa sigue gastando bromas. Pero antes se hace una pregunta: ¿nos vamos a reír las dos? Si la respuesta es no, busca otra.",
            en: "Ever since, Little Miss Naughty still plays tricks. But first she asks herself a question: are we both going to laugh? If the answer is no, she finds a different one."
          }
        ]
      },

      /* ---------- 3 ---------- */
      {
        id: 'etourdi',
        title: 'Monsieur Étourdi perd tout',
        title_en: "Mr Muddle loses everything",
        title_es: "Don Despistado lo pierde todo",
        subtitle: 'Une place pour chaque chose',
        subtitle_en: "A place for everything",
        subtitle_es: "Un sitio para cada cosa",
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
            text: "Monsieur Étourdi perdait tout. Ses clés. Ses chaussures. Une fois, il a perdu son chapeau alors qu'il l'avait sur la tête. Il a cherché toute la journée.",
            es: "Don Despistado lo perdía todo. Las llaves. Los zapatos. Una vez perdió el sombrero cuando lo llevaba puesto. Estuvo buscándolo todo el día.",
            en: "Mr Muddle lost everything. His keys. His shoes. Once he lost his hat while he was wearing it. He looked for it all day long."
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
            text: "Livia le trouva assis par terre, au milieu d'un grand désordre. « Il est sur ta tête », dit-elle. Monsieur Étourdi toucha sa tête. Le chapeau y était.",
            es: "Livia lo encontró sentado en el suelo, en medio de un desorden enorme. «Lo tienes en la cabeza», dijo. Don Despistado se tocó la cabeza. Ahí estaba.",
            en: "Livia found him sitting on the floor, in the middle of a great mess. «It's on your head,» she said. Mr Muddle touched his head. The hat was there."
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
            text: "« J'ai un secret », dit Livia. « Une place pour chaque chose, et chaque chose à sa place. » Les clés sur le crochet. Les chaussures près de la porte. Le chapeau sur la tête.",
            es: "«Tengo un secreto», dijo Livia. «Un sitio para cada cosa, y cada cosa en su sitio.» Las llaves en el gancho. Los zapatos junto a la puerta. El sombrero en la cabeza.",
            en: "«I have a secret,» said Livia. «A place for everything, and everything in its place.» Keys on the hook. Shoes by the door. Hat on the head."
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
            text: "Ils rangèrent tout l'après-midi. Chaque objet trouva son endroit. Monsieur Étourdi était très fier. Il avait même inventé une place pour son parapluie.",
            es: "Estuvieron ordenando toda la tarde. Cada objeto encontró su sitio. Don Despistado estaba muy orgulloso. Hasta había inventado un sitio para el paraguas.",
            en: "They tidied all afternoon. Every object found its spot. Mr Muddle was very proud. He had even invented a place for his umbrella."
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
            text: "Le lendemain matin, Monsieur Étourdi sortit de chez lui d'un pas décidé. Puis il s'arrêta. Il avait oublié son chapeau. Il était bien rangé, sur le crochet de l'entrée.",
            es: "A la mañana siguiente, don Despistado salió de casa muy decidido. Luego se paró. Se había olvidado el sombrero. Estaba bien colocado, en el gancho de la entrada.",
            en: "The next morning, Mr Muddle strode out of his house full of purpose. Then he stopped. He had forgotten his hat. It was neatly put away, on the hook by the door."
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
            text: "« Au moins, tu sais où il est ! » dit Livia. Monsieur Étourdi trouva que c'était un très bon point. Il retourna le chercher en chantant.",
            es: "«¡Por lo menos sabes dónde está!», dijo Livia. A don Despistado le pareció un muy buen argumento. Volvió a buscarlo cantando.",
            en: "«At least you know where it is!» said Livia. Mr Muddle thought that was a very good point. He went back for it, singing."
          }
        ]
      },

      /* ---------- 4 ---------- */
      {
        id: 'timide',
        title: 'Madame Timide dit bonjour',
        title_en: "Little Miss Shy says hello",
        title_es: "Doña Tímida dice hola",
        subtitle: 'Le mot le plus difficile du monde',
        subtitle_en: "The hardest word in the world",
        subtitle_es: "La palabra más difícil del mundo",
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
            text: "Madame Timide était timide. Très timide. Tellement timide qu'elle habitait au fond des bois, dans une maison que personne ne trouvait jamais.",
            es: "Doña Tímida era tímida. Muy tímida. Tan tímida que vivía en lo hondo del bosque, en una casa que nadie encontraba nunca.",
            en: "Little Miss Shy was shy. Very shy. So shy that she lived deep in the woods, in a house nobody ever found."
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
            text: "Un jour, quelqu'un frappa à sa porte. C'était Livia, qui s'était perdue en cherchant des châtaignes. Madame Timide devint toute rouge. Puis elle se cacha derrière la porte.",
            es: "Un día, alguien llamó a su puerta. Era Livia, que se había perdido buscando castañas. Doña Tímida se puso roja del todo. Luego se escondió detrás de la puerta.",
            en: "One day, somebody knocked at her door. It was Livia, who had got lost looking for conkers. Little Miss Shy went completely red. Then she hid behind the door."
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
            text: "« Ce n'est pas grave », dit Livia. « Tu peux juste faire coucou de la main. » Madame Timide y réfléchit très longtemps. Puis elle leva une toute petite main.",
            es: "«No pasa nada», dijo Livia. «Puedes solo saludar con la mano.» Doña Tímida se lo pensó muchísimo rato. Luego levantó una manita muy pequeña.",
            en: "«That's all right,» said Livia. «You can just wave.» Little Miss Shy thought about it for a very long time. Then she raised one very small hand."
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
            text: "Livia fit coucou aussi. Elles restèrent là, à se faire coucou, pendant un temps ridicule. Et Madame Timide s'aperçut que son cœur battait moins fort qu'avant.",
            es: "Livia la saludó también. Se quedaron allí, saludándose, durante un rato ridículo. Y doña Tímida notó que el corazón le latía menos fuerte que antes.",
            en: "Livia waved back. They stayed there, waving at each other, for a ridiculous length of time. And Little Miss Shy noticed her heart was beating less hard than before."
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
            text: "Le lendemain, Livia l'emmena au village. Il y avait du monde partout. Madame Timide serra très fort la main de Livia. Puis elle dit, tout bas : « B… bonjour. »",
            es: "Al día siguiente, Livia la llevó al pueblo. Había gente por todas partes. Doña Tímida le apretó la mano muy fuerte. Luego dijo, bajito: «H… hola.»",
            en: "The next day, Livia took her to the village. There were people everywhere. Little Miss Shy squeezed Livia's hand very tight. Then she said, very quietly: «H… hello.»"
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
            text: "Personne ne se moqua. Personne ne fit d'histoires. Quelqu'un répondit simplement : « Bonjour ! » « C'était le plus dur », dit Livia. « Maintenant, le reste est facile. »",
            es: "Nadie se rio. Nadie hizo un drama. Alguien contestó simplemente: «¡Hola!» «Eso era lo difícil», dijo Livia. «Ahora lo demás es fácil.»",
            en: "Nobody laughed. Nobody made a fuss. Somebody simply answered: «Hello!» «That was the hard part,» said Livia. «Now the rest is easy.»"
          }
        ]
      },

      /* ---------- 5 ---------- */
      {
        id: 'rapide-lent',
        title: 'Monsieur Rapide et Monsieur Lent',
        title_en: "Mr Rush and Mr Slow",
        title_es: "Don Rápido y don Lento",
        subtitle: 'Deux vitesses, une seule promenade',
        subtitle_en: "Two speeds, one single walk",
        subtitle_es: "Dos velocidades, un solo paseo",
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
            text: "Monsieur Rapide faisait tout vite. Monsieur Lent faisait tout lentement. Monsieur Rapide avait déjà fini son petit-déjeuner que Monsieur Lent cherchait encore sa cuillère.",
            es: "Don Rápido lo hacía todo deprisa. Don Lento lo hacía todo despacio. Don Rápido ya había acabado el desayuno cuando don Lento todavía buscaba la cuchara.",
            en: "Mr Rush did everything fast. Mr Slow did everything slowly. Mr Rush had already finished his breakfast while Mr Slow was still looking for his spoon."
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
            text: "Un matin, Livia leur proposa une promenade. Tous les trois. Monsieur Rapide dit oui avant la fin de la question. Monsieur Lent dit oui bien après.",
            es: "Una mañana, Livia les propuso dar un paseo. Los tres. Don Rápido dijo que sí antes de que acabara la pregunta. Don Lento dijo que sí bastante después.",
            en: "One morning, Livia suggested a walk. All three of them. Mr Rush said yes before the end of the question. Mr Slow said yes quite a while afterwards."
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
            text: "Au bout de dix pas, Monsieur Rapide était déjà en haut de la colline. Au bout de dix pas, Monsieur Lent était encore en bas. Livia était au milieu, toute seule.",
            es: "A los diez pasos, don Rápido ya estaba en lo alto de la colina. A los diez pasos, don Lento seguía abajo. Livia estaba en medio, solita.",
            en: "After ten steps, Mr Rush was already at the top of the hill. After ten steps, Mr Slow was still at the bottom. Livia was in the middle, all on her own."
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
            text: "Monsieur Rapide arriva le premier. Il n'y avait personne pour regarder le paysage avec lui. Monsieur Lent arriva le dernier. Il n'y avait plus personne pour l'attendre.",
            es: "Don Rápido llegó el primero. No había nadie para mirar el paisaje con él. Don Lento llegó el último. Ya no quedaba nadie esperándolo.",
            en: "Mr Rush arrived first. There was nobody to look at the view with him. Mr Slow arrived last. There was nobody left to wait for him."
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
            text: "Alors Livia eut une idée. « On va à la vitesse du milieu. » Monsieur Rapide ralentit un peu. Monsieur Lent accéléra un peu. Ce fut un peu difficile pour les deux.",
            es: "Entonces Livia tuvo una idea. «Vamos a la velocidad de en medio.» Don Rápido frenó un poco. Don Lento aceleró un poco. Les costó un poco a los dos.",
            en: "So Livia had an idea. «We'll go at the middle speed.» Mr Rush slowed down a bit. Mr Slow sped up a bit. It was a little difficult for both of them."
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
            text: "Ils marchèrent côte à côte jusqu'au sommet. Ils virent le même coucher de soleil, en même temps. Monsieur Rapide trouva que c'était très long. Et très bien.",
            es: "Caminaron uno al lado del otro hasta la cima. Vieron la misma puesta de sol, a la vez. A don Rápido le pareció larguísimo. Y estupendo.",
            en: "They walked side by side to the top. They saw the same sunset, at the same time. Mr Rush thought it was very long. And very good."
          }
        ]
      },

      /* ---------- 6 ---------- */
      {
        id: 'rangetout',
        title: 'Madame Range-Tout et le grand désordre',
        title_en: "Little Miss Tidy and the great mess",
        title_es: "Doña Ordenada y el gran desorden",
        subtitle: 'Quand tout est trop bien rangé',
        subtitle_en: "When everything is far too neat",
        subtitle_es: "Cuando todo está demasiado ordenado",
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
            text: "Chez Madame Range-Tout, tout était rangé. Les livres par ordre de taille. Les crayons par ordre de couleur. Les petits pois par ordre de rondeur.",
            es: "En casa de doña Ordenada todo estaba ordenado. Los libros por tamaño. Los lápices por color. Los guisantes por redondez.",
            en: "At Little Miss Tidy's house, everything was in order. The books by size. The pencils by colour. The peas by roundness."
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
            text: "Livia vint jouer chez elle. Elle apporta des cubes, des crayons et un ballon. Madame Range-Tout regarda tout cela avec un peu d'inquiétude.",
            es: "Livia fue a jugar a su casa. Llevó cubos, lápices y una pelota. Doña Ordenada miró todo aquello con cierta inquietud.",
            en: "Livia came to play. She brought blocks, pencils and a ball. Little Miss Tidy looked at all this with a certain amount of worry."
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
            text: "Elles construisirent une tour. Puis un pont. Puis un château qui s'écroula sur le tapis. Il y avait des cubes partout. Madame Range-Tout ne respirait plus très bien.",
            es: "Construyeron una torre. Luego un puente. Luego un castillo que se desplomó sobre la alfombra. Había cubos por todas partes. Doña Ordenada casi no respiraba.",
            en: "They built a tower. Then a bridge. Then a castle that collapsed all over the rug. There were blocks everywhere. Little Miss Tidy was not breathing very well."
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
            text: "« On range après », dit Livia. « Pas pendant. Sinon on ne joue jamais. » Madame Range-Tout trouva cette phrase très dérangeante. Et un peu vraie.",
            es: "«Se ordena después», dijo Livia. «No mientras. Si no, no se juega nunca.» A doña Ordenada esa frase le pareció muy molesta. Y un poco verdad.",
            en: "«You tidy afterwards,» said Livia. «Not during. Otherwise you never play.» Little Miss Tidy found that sentence very unsettling. And slightly true."
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
            text: "Alors elle essaya. Elle laissa un cube par terre. Puis deux. Puis elle renversa la tour elle-même, exprès, en riant très fort. C'était absolument délicieux.",
            es: "Así que lo intentó. Dejó un cubo en el suelo. Luego dos. Luego tiró ella misma la torre, a propósito, riéndose a carcajadas. Fue absolutamente delicioso.",
            en: "So she tried. She left one block on the floor. Then two. Then she knocked the tower over herself, on purpose, laughing out loud. It was absolutely delicious."
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
            text: "Le soir, elles rangèrent tout, ensemble, en dix minutes. « Voilà », dit Madame Range-Tout. « Après. » Et elle laissa un seul cube dehors, juste pour voir.",
            es: "Por la noche lo ordenaron todo, juntas, en diez minutos. «Ya está», dijo doña Ordenada. «Después.» Y dejó un solo cubo fuera, solo por ver.",
            en: "That evening they tidied everything up together, in ten minutes. «There,» said Little Miss Tidy. «Afterwards.» And she left one single block out, just to see."
          }
        ]
      },

      /* ---------- 7 ---------- */
      {
        id: 'costaud',
        title: 'Monsieur Costaud n\'y arrive pas',
        title_en: "Mr Strong can't do it",
        title_es: "Don Fuerte no puede",
        subtitle: 'Demander de l\'aide, c\'est permis',
        subtitle_en: "Asking for help is allowed",
        subtitle_es: "Pedir ayuda está permitido",
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
            text: "Monsieur Costaud était le plus fort de tous. Il soulevait les arbres. Il portait les maisons. Une fois, il a déplacé une colline parce qu'elle le gênait.",
            es: "Don Fuerte era el más fuerte de todos. Levantaba árboles. Cargaba casas. Una vez movió una colina porque le estorbaba.",
            en: "Mr Strong was the strongest of them all. He lifted trees. He carried houses. Once he moved a hill because it was in his way."
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
            text: "Ce jour-là, il trouva un rocher. Il tira. Le rocher ne bougea pas. Il tira encore. Le rocher ne bougea toujours pas. Monsieur Costaud devint tout rouge.",
            es: "Ese día se encontró una roca. Tiró. La roca no se movió. Tiró otra vez. La roca siguió sin moverse. Don Fuerte se puso todo rojo.",
            en: "That day he came across a rock. He pulled. The rock did not move. He pulled again. The rock still did not move. Mr Strong went completely red."
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
            text: "Livia passa par là. « Tu veux un coup de main ? » Monsieur Costaud répondit non. Il était Monsieur Costaud. Monsieur Costaud n'avait besoin de personne.",
            es: "Livia pasaba por allí. «¿Te echo una mano?» Don Fuerte dijo que no. Él era don Fuerte. Don Fuerte no necesitaba a nadie.",
            en: "Livia came past. «Do you want a hand?» Mr Strong said no. He was Mr Strong. Mr Strong did not need anybody."
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
            text: "Il tira toute la matinée. Il tira tout l'après-midi. Le rocher resta exactement où il était. Le soir, Monsieur Costaud était encore devant lui, très fatigué et un peu triste.",
            es: "Tiró toda la mañana. Tiró toda la tarde. La roca se quedó exactamente donde estaba. Por la noche, don Fuerte seguía delante de ella, cansadísimo y un poco triste.",
            en: "He pulled all morning. He pulled all afternoon. The rock stayed exactly where it was. By evening, Mr Strong was still standing in front of it, very tired and a little sad."
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
            text: "Alors il dit une phrase toute petite : « Tu peux m'aider ? » Livia appela Monsieur Grognon, qui grogna, mais qui vint. Ils poussèrent tous les trois. « Un, deux, trois ! »",
            es: "Entonces dijo una frase pequeñita: «¿Me ayudas?» Livia llamó a don Gruñón, que gruñó, pero que vino. Empujaron los tres. «¡Un, dos, tres!»",
            en: "So he said a very small sentence: «Can you help me?» Livia called Mr Grumpy, who grumbled, but came. All three of them pushed. «One, two, three!»"
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
            text: "Le rocher bougea. Puis il roula. Puis il descendit la colline tout seul. « Je suis toujours le plus fort », dit Monsieur Costaud. « Mais à trois, c'est encore mieux. »",
            es: "La roca se movió. Luego rodó. Luego bajó la colina ella sola. «Sigo siendo el más fuerte», dijo don Fuerte. «Pero entre tres es todavía mejor.»",
            en: "The rock moved. Then it rolled. Then it went down the hill all by itself. «I'm still the strongest,» said Mr Strong. «But with three of us it's even better.»"
          }
        ]
      },

      /* ---------- 8 ---------- */
      {
        id: 'bonheur',
        title: 'Madame Bonheur et le jour gris',
        title_en: "Little Miss Sunshine and the grey day",
        title_es: "Doña Felicidad y el día gris",
        subtitle: 'Ce qu\'on fait quand rien ne va',
        subtitle_en: "What you do when nothing is going right",
        subtitle_es: "Qué se hace cuando nada va bien",
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
            text: "Madame Bonheur était heureuse. Tous les jours. Sans exception. Même sous la pluie, elle trouvait que les flaques faisaient de jolis miroirs.",
            es: "Doña Felicidad era feliz. Todos los días. Sin excepción. Incluso bajo la lluvia le parecía que los charcos hacían de espejo, y muy bonitos.",
            en: "Little Miss Sunshine was happy. Every day. Without exception. Even in the rain, she thought the puddles made lovely mirrors."
          },
          {
            scene: {
              bg: 'village', time: 'gris',
              items: [
                { t: 'bonheur', x: 400, y: 524, s: 1.15, mood: 'sad' }
              ],
              sfx: [{ t: 'ET PUIS UN JOUR…', x: 400, y: 170, fs: 28, rot: -4, color: '#6d5847' }]
            },
            text: "Et puis un matin, elle se réveilla toute grise. Elle ne savait pas pourquoi. Rien de grave n'était arrivé. Simplement, le bonheur n'était pas venu.",
            es: "Y una mañana se despertó toda gris. No sabía por qué. No había pasado nada grave. Simplemente, la felicidad no había venido.",
            en: "And then one morning she woke up all grey. She did not know why. Nothing bad had happened. The happiness simply had not come."
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
            text: "Livia la trouva devant sa porte, sans rien faire. Elle ne dit pas « souris ». Elle ne dit pas « ce n'est rien ». Elle demanda seulement : « Tu veux qu'on reste là un peu ? »",
            es: "Livia la encontró delante de su puerta, sin hacer nada. No le dijo «sonríe». No le dijo «no es nada». Solo preguntó: «¿Quieres que nos quedemos aquí un rato?»",
            en: "Livia found her outside her door, doing nothing. She did not say «smile». She did not say «it's nothing». She only asked: «Shall we just stay here a bit?»"
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
            text: "Elles restèrent là un long moment, sans rien dire. Le ciel était gris. Le vent était froid. Livia ne partit pas. C'était tout ce qu'il y avait à faire.",
            es: "Se quedaron allí un buen rato, sin decir nada. El cielo estaba gris. El viento era frío. Livia no se fue. Era todo lo que había que hacer.",
            en: "They stayed there a long while, saying nothing. The sky was grey. The wind was cold. Livia did not leave. That was all there was to do."
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
            text: "Puis les autres arrivèrent. Monsieur Grognon apporta un caillou, parce qu'il ne savait pas quoi apporter. Madame Timide dit bonjour. Monsieur Costaud apporta une fleur.",
            es: "Luego llegaron los demás. Don Gruñón trajo una piedra, porque no sabía qué traer. Doña Tímida dijo hola. Don Fuerte trajo una flor.",
            en: "Then the others came. Mr Grumpy brought a stone, because he did not know what to bring. Little Miss Shy said hello. Mr Strong brought a flower."
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
            text: "Le soir venu, Madame Bonheur n'était pas redevenue joyeuse. Mais elle n'était plus toute seule. « Demain, ça ira peut-être mieux », dit-elle. Et le lendemain, ça allait mieux.",
            es: "Al caer la noche, doña Felicidad no había vuelto a estar alegre. Pero ya no estaba sola. «Mañana a lo mejor va mejor», dijo. Y al día siguiente iba mejor.",
            en: "By evening, Little Miss Sunshine had not turned cheerful again. But she was not on her own any more. «Tomorrow it might be better,» she said. And the next day it was."
          }
        ]
      },

      /* ---------- 9 : Madame Chipie dit pardon ---------- */
      {
        id: 'chipie-dit-pardon',
        title: 'Madame Chipie dit pardon',
        title_en: "Little Miss Naughty says sorry",
        title_es: "Doña Traviesa pide perdón",
        subtitle: "Le mot le plus court et le plus lourd",
        subtitle_en: "The shortest, heaviest word there is",
        subtitle_es: "La palabra más corta y más pesada",
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
            text: "Livia et Monsieur Timide avaient empilé douze cubes. C'était la plus haute tour de la matinée, et il avait fallu s'y mettre à deux, en retenant sa respiration sur les trois derniers.",
            es: "Livia y don Tímido habían apilado doce cubos. Era la torre más alta de la mañana, y habían tenido que hacerlo entre los dos, aguantando la respiración en los tres últimos.",
            en: "Livia and Mr Shy had stacked twelve blocks. It was the tallest tower of the morning, and it had taken the two of them, holding their breath for the last three."
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
            text: "Madame Chipie passa par là. Elle donna un tout petit coup de pied — vraiment tout petit — et les douze cubes se répandirent dans l'herbe avec un bruit magnifique.",
            es: "Doña Traviesa pasó por allí. Dio una patadita — de verdad, pequeñísima — y los doce cubos se desparramaron por la hierba con un ruido magnífico.",
            en: "Little Miss Naughty came past. She gave it a tiny kick — really tiny — and the twelve blocks scattered across the grass with a magnificent noise."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'chipie', x: 400, y: 508, s: 1.2 }
              ],
              sfx: [{ t: 'HÉ HÉ !', x: 400, y: 146, fs: 32, rot: -6, color: '#f2803d' }]
            },
            text: "Elle rit très fort pendant deux secondes. Puis elle regarda autour d'elle. Personne d'autre ne riait. C'est un moment que Madame Chipie connaît bien, et qu'elle n'aime pas du tout.",
            es: "Se rio muy fuerte durante dos segundos. Luego miró alrededor. Nadie más se reía. Es un momento que doña Traviesa conoce bien, y que no le gusta nada.",
            en: "She laughed very loudly for two seconds. Then she looked around. Nobody else was laughing. It is a moment Little Miss Naughty knows well, and does not like at all."
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
            text: "Monsieur Timide ne dit rien, ce qui est sa spécialité. Livia non plus. Elles se mirent simplement à ramasser les cubes, l'une après l'autre, sans regarder Madame Chipie.",
            es: "Don Tímido no dijo nada, que es su especialidad. Livia tampoco. Se pusieron simplemente a recoger los cubos, uno detrás de otro, sin mirar a doña Traviesa.",
            en: "Mr Shy said nothing, which is his speciality. Livia said nothing either. They simply began to pick the blocks up, one after another, without looking at Little Miss Naughty."
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
            text: "Madame Chipie s'accroupit à côté d'eux. Le mot mit longtemps à sortir, et il sortit tout petit : « pardon ». Puis, encore plus petit : « je peux aider ? »",
            es: "Doña Traviesa se agachó a su lado. La palabra tardó mucho en salir, y salió muy pequeñita: «perdón». Y luego, aún más pequeñita: «¿puedo ayudar?»",
            en: "Little Miss Naughty crouched down beside them. The word took a long time to come out, and it came out very small: «sorry». Then, smaller still: «can I help?»"
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
            text: "La deuxième tour monta jusqu'à quatorze cubes, parce qu'ils étaient trois. Madame Chipie tint le bas pendant que les autres posaient le haut. Elle ne donna aucun coup de pied.",
            es: "La segunda torre llegó hasta catorce cubos, porque eran tres. Doña Traviesa sujetaba abajo mientras los otros ponían arriba. No dio ni una patada.",
            en: "The second tower reached fourteen blocks, because there were three of them. Little Miss Naughty held the bottom while the others put on the top. She did not kick it once."
          }
        ]
      },

      /* ---------- 10 : Monsieur Lent arrive quand même ---------- */
      {
        id: 'lent-arrive-quand-meme',
        title: 'Monsieur Lent arrive quand même',
        title_en: "Mr Slow gets there anyway",
        title_es: "Don Lento llega igualmente",
        subtitle: "Aller à son rythme, jusqu'au bout",
        subtitle_en: "Going at your own pace, all the way",
        subtitle_es: "Ir a tu ritmo, hasta el final",
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
            text: "« Course jusqu'au grand arbre ! » cria Monsieur Rapide, et il était déjà parti avant la fin de sa phrase. Livia partit deuxième. Monsieur Lent leva une jambe.",
            es: "«¡Carrera hasta el árbol grande!», gritó don Rápido, y ya había salido antes de acabar la frase. Livia salió la segunda. Don Lento levantó una pierna.",
            en: "«Race you to the big tree!» shouted Mr Rush, and he was off before the end of his sentence. Livia set off second. Mr Slow lifted one leg."
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
            text: "Monsieur Rapide toucha l'arbre, puis retourna au départ, puis revint à l'arbre, pour occuper le temps. Livia arriva deuxième, essoufflée et contente.",
            es: "Don Rápido tocó el árbol, volvió a la salida y volvió otra vez al árbol, para pasar el rato. Livia llegó la segunda, sin aliento y contenta.",
            en: "Mr Rush touched the tree, went back to the start, then came back to the tree again, to pass the time. Livia arrived second, out of breath and pleased."
          },
          {
            scene: {
              bg: 'hill',
              items: [{ t: 'lent', x: 400, y: 512, s: 1.2 }],
              sfx: [{ t: 'UN PAS. PUIS UN PAS.', x: 400, y: 148, fs: 24, rot: -4, color: '#6d5847' }]
            },
            text: "Monsieur Lent, lui, en était au quatrième pas. Un pas. Puis un pas. Il ne regardait ni derrière ni devant : il regardait exactement là où il posait le pied.",
            es: "Don Lento, en cambio, iba por el cuarto paso. Un paso. Y otro paso. No miraba ni atrás ni adelante: miraba exactamente donde ponía el pie.",
            en: "Mr Slow, meanwhile, was on his fourth step. One step. Then one step. He looked neither behind nor ahead: he looked exactly where he was putting his foot."
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
            text: "« On l'attend, ou on recommence sans lui ? » demanda Monsieur Rapide, qui n'était pas méchant, seulement pressé. Livia s'assit dans l'herbe et dit : « on attend. »",
            es: "«¿Lo esperamos o volvemos a empezar sin él?», preguntó don Rápido, que no era malo, solo tenía prisa. Livia se sentó en la hierba y dijo: «lo esperamos.»",
            en: "«Do we wait for him, or start again without him?» asked Mr Rush, who was not unkind, only in a hurry. Livia sat down in the grass and said: «we wait.»"
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
            text: "Ils attendirent longtemps. Assis, ils remarquèrent trois choses qu'ils n'avaient jamais vues en courant : un nid, une pierre en forme de cœur, et une fourmi qui portait une miette énorme.",
            es: "Esperaron mucho rato. Sentados, se fijaron en tres cosas que nunca habían visto corriendo: un nido, una piedra con forma de corazón y una hormiga que cargaba una miga enorme.",
            en: "They waited a long time. Sitting there, they noticed three things they had never seen while running: a nest, a heart-shaped stone, and an ant carrying an enormous crumb."
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
            text: "Quand Monsieur Lent toucha enfin l'arbre, ils crièrent tous les deux comme s'il avait gagné. D'une certaine façon, il avait gagné : il était le seul à ne s'être arrêté à aucun moment.",
            es: "Cuando don Lento tocó por fin el árbol, los dos gritaron como si hubiera ganado. En cierto modo había ganado: era el único que no se había parado en ningún momento.",
            en: "When Mr Slow finally touched the tree, they both cheered as if he had won. In a way he had won: he was the only one who had not stopped at any point."
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
        title_en: "Livia's three friends",
        title_es: "Las tres amigas de Livia",
        subtitle: 'Trois jeux différents, un seul après-midi',
        subtitle_en: "Three different games, one single afternoon",
        subtitle_es: "Tres juegos distintos, una sola tarde",
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
            text: "Ce mercredi-là, Livia avait invité ses amies. Toutes ses amies. Celles de la boue, celles du jardin, et celle de la neige. Elle attendait devant la maison, le cœur qui sautait.",
            es: "Ese miércoles, Livia había invitado a sus amigas. A todas sus amigas. Las del barro, las del jardín y la de la nieve. Esperaba delante de casa, con el corazón dando saltos.",
            en: "That Wednesday, Livia had invited her friends. All of her friends. The muddy one, the garden one, and the snowy one. She waited outside the house with her heart jumping."
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
            text: "Peppa arriva la première. Elle avait mis ses bottes. « J'ai vu une flaque en chemin », dit-elle. « Une très bonne flaque. » Peppa connaissait les bonnes flaques.",
            es: "Peppa llegó la primera. Se había puesto las botas. «He visto un charco por el camino», dijo. «Un charco buenísimo.» Peppa sabía reconocer los buenos charcos.",
            en: "Peppa arrived first. She had put her boots on. «I saw a puddle on the way,» she said. «A very good puddle.» Peppa knew a good puddle when she saw one."
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
            text: "Bluey arriva ensuite, en courant. Bluey n'arrivait jamais autrement. « On invente un jeu ! » dit-elle. Elle avait déjà un nom pour le jeu. Elle n'avait pas encore de règles.",
            es: "Bluey llegó después, corriendo. Bluey nunca llegaba de otra manera. «¡Inventamos un juego!», dijo. Ya tenía nombre para el juego. Todavía no tenía reglas.",
            en: "Bluey arrived next, at a run. Bluey never arrived any other way. «Let's invent a game!» she said. She already had a name for the game. She did not yet have any rules."
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
            text: "Elsa arriva la dernière, sans bruit. Sur son passage, l'herbe fit de tout petits cristaux. Peppa la regarda. Bluey la regarda. Personne ne savait quoi dire.",
            es: "Elsa llegó la última, sin hacer ruido. A su paso, la hierba se llenó de cristalitos. Peppa la miró. Bluey la miró. Nadie sabía qué decir.",
            en: "Elsa arrived last, without a sound. Where she walked, the grass grew tiny crystals. Peppa looked at her. Bluey looked at her. Nobody knew what to say."
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
            text: "Peppa voulait sauter dans la flaque. Bluey voulait inventer. Elsa voulait la neige. Chacune tirait de son côté, et l'après-midi commençait à se casser en trois morceaux.",
            es: "Peppa quería saltar en el charco. Bluey quería inventar. Elsa quería nieve. Cada una tiraba para su lado, y la tarde empezaba a partirse en tres trozos.",
            en: "Peppa wanted to jump in the puddle. Bluey wanted to invent. Elsa wanted snow. Each pulled her own way, and the afternoon began to break into three pieces."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 400, y: 524, s: 1.15, pose: 'point' }
              ],
              bubbles: [{ x: 230, y: 24, w: 340, t: 'Et si on faisait les trois à la fois ?', tx: 400, ty: 236 }]
            },
            text: "Alors Livia leva le doigt. « Et si on faisait les trois à la fois ? » Une flaque, inventée par Bluey, gelée par Elsa. Ça n'existait pas. C'est bien pour ça que c'était une bonne idée.",
            es: "Entonces Livia levantó el dedo. «¿Y si hacemos las tres cosas a la vez?» Un charco, inventado por Bluey, congelado por Elsa. No existía. Justo por eso era una buena idea.",
            en: "So Livia put a finger up. «What if we did all three at once?» A puddle, invented by Bluey, frozen by Elsa. It did not exist. That is exactly why it was a good idea."
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
            text: "Elles glissèrent, tombèrent, recommencèrent. La flaque était gelée sur le dessus et boueuse en dessous : exactement ce qu'il fallait. Le soir, elles étaient sales, mouillées et amies.",
            es: "Resbalaron, se cayeron, volvieron a empezar. El charco estaba helado por encima y embarrado por debajo: exactamente lo que hacía falta. Por la noche estaban sucias, mojadas y amigas.",
            en: "They slid, they fell, they started again. The puddle was frozen on top and muddy underneath: exactly right. By evening they were dirty, soaked and friends."
          }
        ]
      },

      /* ---------- 2 ---------- */
      {
        id: 'neige-plage',
        title: 'De la neige sur la plage',
        title_en: "Snow on the beach",
        title_es: "Nieve en la playa",
        subtitle: 'Un cadeau qui fond, et ce qu\'on en fait',
        subtitle_en: "A present that melts, and what you do about it",
        subtitle_es: "Un regalo que se derrite, y qué hacer con eso",
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
            text: "C'était le jour le plus chaud de l'été. Le sable brûlait les pieds. Peppa s'éventait avec une feuille. Livia n'avait plus envie de rien, même pas d'une glace.",
            es: "Era el día más caluroso del verano. La arena quemaba los pies. Peppa se abanicaba con una hoja. Livia ya no tenía ganas de nada, ni siquiera de un helado.",
            en: "It was the hottest day of the summer. The sand burned your feet. Peppa fanned herself with a leaf. Livia did not feel like anything at all, not even an ice cream."
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
            text: "Et puis Elsa arriva, avec sa robe qui ne se froissait jamais. « Elsa ! » cria Livia. « Tu peux faire quelque chose ? » Elsa regarda le ciel, puis le sable, et sourit.",
            es: "Y entonces llegó Elsa, con su vestido que nunca se arruga. «¡Elsa!», gritó Livia. «¿Puedes hacer algo?» Elsa miró el cielo, luego la arena, y sonrió.",
            en: "And then Elsa arrived, in her dress that never creases. «Elsa!» cried Livia. «Can you do something?» Elsa looked at the sky, then at the sand, and smiled."
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
            text: "Elsa leva les deux mains. Il se mit à neiger. Sur la plage. En plein mois d'août. Les flocons tombaient sur le sable chaud comme des confettis très sérieux.",
            es: "Elsa levantó las dos manos. Empezó a nevar. En la playa. En pleno agosto. Los copos caían sobre la arena caliente como confeti muy serio.",
            en: "Elsa raised both hands. It began to snow. On the beach. In the middle of August. The flakes fell on the hot sand like very serious confetti."
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
            text: "Dans la neige, quelque chose bougea. Deux brindilles, un nez de carotte, et un très large sourire. « Bonjour tout le monde ! » dit Olaf. « J'adore l'été. C'est ma première fois. »",
            es: "En la nieve, algo se movió. Dos ramitas, una nariz de zanahoria y una sonrisa amplísima. «¡Hola a todos!», dijo Olaf. «Me encanta el verano. Es mi primera vez.»",
            en: "Something moved in the snow. Two twigs, a carrot nose, and an extremely wide smile. «Hello everybody!» said Olaf. «I love summer. This is my first one.»"
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
            text: "Mais la neige n'est pas faite pour le sable chaud. Elle devint de l'eau. Olaf devint plus petit. Livia sentit sa gorge se serrer. « Ne t'en va pas », dit-elle tout bas.",
            es: "Pero la nieve no está hecha para la arena caliente. Se volvió agua. Olaf se hizo más pequeño. A Livia se le cerró la garganta. «No te vayas», dijo bajito.",
            en: "But snow is not made for hot sand. It turned into water. Olaf got smaller. Livia felt her throat go tight. «Don't go,» she said quietly."
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
            text: "Elsa posa une main sur l'épaule de Livia. « Je peux le refaire », dit-elle. « Autant de fois que tu veux. » Elle souffla, et Olaf redevint entier, avec un flocon au-dessus de la tête pour le garder au frais.",
            es: "Elsa puso una mano en el hombro de Livia. «Puedo volver a hacerlo», dijo. «Todas las veces que quieras.» Sopló, y Olaf volvió a estar entero, con un copo encima de la cabeza para mantenerlo fresco.",
            en: "Elsa put a hand on Livia's shoulder. «I can make him again,» she said. «As many times as you like.» She breathed out, and Olaf was whole again, with a snowflake over his head to keep him cool."
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
            text: "Ils restèrent jusqu'au coucher du soleil, à moitié dans le sable et à moitié dans la neige. « Le plus beau jour de ma vie », dit Olaf. C'était aussi le seul, mais personne ne le lui fit remarquer.",
            es: "Se quedaron hasta la puesta de sol, medio en la arena y medio en la nieve. «El día más bonito de mi vida», dijo Olaf. También era el único, pero nadie se lo hizo notar.",
            en: "They stayed until sunset, half in the sand and half in the snow. «The best day of my life,» said Olaf. It was also the only one, but nobody pointed that out."
          }
        ]
      },

      /* ---------- 3 ---------- */
      {
        id: 'grande-cabane',
        title: 'La cabane de tous les amis',
        title_en: "The hut everyone built",
        title_es: "La cabaña de todos los amigos",
        subtitle: 'Chacun apporte ce qu\'il sait faire',
        subtitle_en: "Each one brings what they're good at",
        subtitle_es: "Cada uno trae lo que sabe hacer",
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
            text: "« On construit une cabane », annonça Bluey. « Une immense. » Livia demanda comment. Bluey répondit qu'on verrait bien. C'est souvent comme ça que commencent les meilleures constructions.",
            es: "«Vamos a construir una cabaña», anunció Bluey. «Enorme.» Livia preguntó cómo. Bluey contestó que ya se vería. Así empiezan a menudo las mejores construcciones.",
            en: "«We're building a hut,» announced Bluey. «An enormous one.» Livia asked how. Bluey said they'd see. That is often how the best builds begin."
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
            text: "Elles portèrent des branches. Peppa en laissa tomber deux. Bluey en laissa tomber trois. Le tas ressemblait à un tas, pas encore à une cabane.",
            es: "Cargaron ramas. Peppa se le cayeron dos. A Bluey se le cayeron tres. El montón parecía un montón, todavía no una cabaña.",
            en: "They carried branches. Peppa dropped two. Bluey dropped three. The pile looked like a pile, not yet like a hut."
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
            text: "Alors Livia alla chercher Monsieur Costaud. Il souleva le tronc le plus gros comme si c'était une cuillère. « Fastoche », dit-il. Il aimait bien qu'on ait besoin de lui.",
            es: "Entonces Livia fue a buscar a Don Fuerte. Levantó el tronco más gordo como si fuera una cuchara. «Facilísimo», dijo. Le gustaba que lo necesitaran.",
            en: "So Livia went to fetch Mr Strong. He lifted the biggest log as if it were a teaspoon. «Easy,» he said. He rather liked being needed."
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
            text: "Il manquait un toit. Elsa souffla doucement au-dessus des branches, et la glace se posa entre elles comme du ciment. Un toit transparent, où l'on voyait passer les nuages.",
            es: "Faltaba un tejado. Elsa sopló despacio por encima de las ramas, y el hielo se coló entre ellas como si fuera cemento. Un tejado transparente, por donde se veían pasar las nubes.",
            en: "A roof was missing. Elsa breathed gently over the branches, and ice settled between them like cement. A see-through roof, with clouds drifting past above."
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
            text: "Elles entrèrent toutes en même temps. La cabane fit un bruit, pencha, et s'écroula sur leurs têtes. Il y eut un grand silence, puis un très grand fou rire.",
            es: "Entraron todas a la vez. La cabaña hizo un ruido, se inclinó y se les cayó encima. Hubo un gran silencio, y luego un ataque de risa enorme.",
            en: "They all went in at once. The hut made a noise, tilted, and collapsed on their heads. There was a great silence, and then a very great fit of giggles."
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
            text: "« On recommence », dit Livia. « Mais on entre un par un. » Bluey trouva que c'était une règle un peu ennuyeuse. Elle trouva aussi que c'était sûrement une bonne règle.",
            es: "«Otra vez», dijo Livia. «Pero entramos de uno en uno.» A Bluey le pareció una regla un poco aburrida. También le pareció que seguramente era una buena regla.",
            en: "«Again,» said Livia. «But we go in one at a time.» Bluey thought that was a slightly boring rule. She also thought it was probably a good rule."
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
            text: "La deuxième cabane tint jusqu'au soir. Elles s'assirent dedans, serrées, sous le toit de glace qui gouttait un peu. Monsieur Costaud resta dehors : il ne rentrait pas. « C'est la plus belle maison du monde », dit Peppa, et personne ne dit le contraire.",
            es: "La segunda cabaña aguantó hasta la noche. Se sentaron dentro, apretadas, bajo el tejado de hielo que goteaba un poco. Don Fuerte se quedó fuera: no cabía. «Es la casa más bonita del mundo», dijo Peppa, y nadie la contradijo.",
            en: "The second hut held until evening. They sat inside, squashed together, under the ice roof that dripped a little. Mr Strong stayed outside: he didn't fit. «It's the finest house in the world,» said Peppa, and nobody disagreed."
          }
        ]
      },

      /* ---------- 4 ---------- */
      {
        id: 'grande-course',
        title: 'La grande course des amis',
        title_en: "The great friends' race",
        title_es: "La gran carrera de los amigos",
        subtitle: 'Gagner, ce n\'est pas toujours arriver devant',
        subtitle_en: "Winning isn't always coming first",
        subtitle_es: "Ganar no siempre es llegar delante",
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
            text: "« Le premier en haut de la colline ! » cria Bluey. Livia trouva l'idée excellente. C'était une longue colline, et un très beau matin pour courir.",
            es: "«¡El primero arriba de la colina!», gritó Bluey. A Livia le pareció una idea excelente. Era una colina larga, y una mañana preciosa para correr.",
            en: "«First one to the top of the hill!» shouted Bluey. Livia thought it was an excellent idea. It was a long hill, and a very fine morning for running."
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
            text: "Tout le monde vint. Peppa, Bluey, Livia, et même Monsieur Rapide, qui était déjà arrivé avant le départ. Il fallut lui demander de revenir se mettre sur la ligne.",
            es: "Vinieron todos. Peppa, Bluey, Livia, y hasta Don Rápido, que ya había llegado antes de la salida. Hubo que pedirle que volviera a la línea.",
            en: "Everybody came. Peppa, Bluey, Livia, and even Mr Rush, who had already arrived before the start. They had to ask him to come back to the line."
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
            text: "Monsieur Rapide partit comme une flèche. Bluey partit comme un chien. Livia partit comme une fille de quatre ans, c'est-à-dire très vite, mais pas très longtemps.",
            es: "Don Rápido salió como una flecha. Bluey salió como un perro. Livia salió como una niña de cuatro años, es decir muy rápido, pero no mucho rato.",
            en: "Mr Rush shot off like an arrow. Bluey shot off like a dog. Livia shot off like a four-year-old, which is to say very fast, but not for very long."
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
            text: "Au milieu de la montée, Peppa s'assit dans l'herbe. Elle avait un caillou dans la botte et plus du tout envie. Livia s'arrêta net, alors qu'elle était deuxième.",
            es: "A media cuesta, Peppa se sentó en la hierba. Tenía una piedra en la bota y ya no le apetecía nada. Livia se paró en seco, y eso que iba segunda.",
            en: "Halfway up, Peppa sat down in the grass. She had a stone in her boot and no wish to go on. Livia stopped dead, and she was in second place."
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
            text: "Livia enleva le caillou de la botte. Puis elle prit la main de Peppa. « On monte ensemble, doucement. » Elles montèrent doucement. Elles arrivèrent dernières.",
            es: "Livia le sacó la piedra de la bota. Luego le dio la mano. «Subimos juntas, despacito.» Subieron despacito. Llegaron las últimas.",
            en: "Livia took the stone out of the boot. Then she took Peppa's hand. «We'll go up together, slowly.» They went up slowly. They came last."
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
            text: "En haut, Bluey et Monsieur Rapide les attendaient. Ils ne s'étaient pas assis. Ils avaient regardé toute la montée, et ils applaudirent les dernières comme on applaudit les premières.",
            es: "Arriba, Bluey y Don Rápido las esperaban. No se habían sentado. Habían mirado toda la subida, y aplaudieron a las últimas como se aplaude a las primeras.",
            en: "At the top, Bluey and Mr Rush were waiting. They had not sat down. They had watched the whole climb, and they clapped the last ones the way you clap the first."
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
            text: "Ils s'assirent tous en haut pour regarder le soleil descendre. « Qui a gagné ? » demanda Peppa. Personne ne s'en souvenait. Monsieur Rapide trouva ça très reposant.",
            es: "Se sentaron todos arriba a ver bajar el sol. «¿Quién ha ganado?», preguntó Peppa. Nadie se acordaba. A Don Rápido le pareció muy descansado.",
            en: "They all sat at the top to watch the sun go down. «Who won?» asked Peppa. Nobody could remember. Mr Rush found that very restful."
          }
        ]
      },

      /* ---------- 5 ---------- */
      {
        id: 'nuit-etoiles',
        title: 'La nuit où tout le monde a dormi dehors',
        title_en: "The night everybody slept outside",
        title_es: "La noche en que todos durmieron fuera",
        subtitle: 'Une tente, quatre amis, et le noir',
        subtitle_en: "One tent, four friends, and the dark",
        subtitle_es: "Una tienda, cuatro amigos y la oscuridad",
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
            text: "La tente était montée au fond du jardin. Un peu de travers, mais montée. « On dort dehors ! » criaient Livia et Bluey, qui n'avaient encore jamais dormi dehors.",
            es: "La tienda estaba montada al fondo del jardín. Un poco torcida, pero montada. «¡Dormimos fuera!», gritaban Livia y Bluey, que nunca habían dormido fuera.",
            en: "The tent was up at the bottom of the garden. A bit crooked, but up. «We're sleeping outside!» shouted Livia and Bluey, who had never slept outside."
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
            text: "Il y eut des chamallows au bout des bâtons. Peppa fit brûler le sien et dit que c'était exprès. Personne ne la crut, et tout le monde fit semblant.",
            es: "Hubo nubes de azúcar en la punta de unos palos. Peppa quemó la suya y dijo que era a propósito. Nadie la creyó, y todo el mundo hizo como que sí.",
            en: "There were marshmallows on the ends of sticks. Peppa burnt hers and said she had meant to. Nobody believed her, and everybody pretended to."
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
            text: "Puis la nuit tomba pour de bon. Le jardin qu'elles connaissaient par cœur devint un endroit inconnu. Il y eut un craquement. Trois amies se rapprochèrent en même temps.",
            es: "Luego cayó la noche de verdad. El jardín que se sabían de memoria se convirtió en un sitio desconocido. Se oyó un crujido. Tres amigas se acercaron a la vez.",
            en: "Then night fell properly. The garden they knew by heart became somewhere unknown. There was a crack. Three friends moved closer together at the same moment."
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
            text: "Alors Elsa arriva. Elle ne dit pas qu'il ne fallait pas avoir peur. Elle leva la main, et de tout petits flocons se mirent à briller dans l'air, comme des lampes de poche minuscules.",
            es: "Entonces llegó Elsa. No dijo que no había que tener miedo. Levantó la mano, y unos copos pequeñísimos se pusieron a brillar en el aire, como linternas diminutas.",
            en: "Then Elsa arrived. She did not say there was nothing to be afraid of. She raised her hand, and tiny snowflakes began to glow in the air, like miniature torches."
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
            text: "À la lumière des flocons, elles allèrent voir le craquement de plus près. C'était une branche. Une simple branche, posée par le vent. Le jardin redevint le jardin.",
            es: "A la luz de los copos fueron a ver el crujido de cerca. Era una rama. Una simple rama, dejada por el viento. El jardín volvió a ser el jardín.",
            en: "By the light of the flakes they went to look at the crack close up. It was a branch. Just a branch, put there by the wind. The garden turned back into the garden."
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
            text: "Elles s'installèrent devant la tente pour compter les étoiles. Peppa s'arrêta à douze. Bluey s'arrêta à cinquante. Livia s'endormit à sept, la tête sur l'épaule d'Elsa.",
            es: "Se instalaron delante de la tienda a contar estrellas. Peppa se paró en doce. Bluey se paró en cincuenta. Livia se durmió en siete, con la cabeza en el hombro de Elsa.",
            en: "They settled down outside the tent to count stars. Peppa stopped at twelve. Bluey stopped at fifty. Livia fell asleep at seven, her head on Elsa's shoulder."
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
            text: "Au matin, il restait un peu de givre sur la tente et beaucoup de miettes de chamallow. « On recommence ce soir ? » demanda Bluey. Livia dormait encore. Elle dit oui quand même.",
            es: "Por la mañana quedaba un poco de escarcha en la tienda y muchísimas migas de nube de azúcar. «¿Repetimos esta noche?», preguntó Bluey. Livia seguía dormida. Dijo que sí igualmente.",
            en: "In the morning there was a little frost on the tent and a great many marshmallow crumbs. «Shall we do it again tonight?» asked Bluey. Livia was still asleep. She said yes anyway."
          }
        ]
      },

      /* ---------- 6 : le goûter à quatre ---------- */
      {
        id: 'gouter-a-quatre',
        title: 'Le goûter à quatre',
        title_en: "Tea for four",
        title_es: "La merienda de cuatro",
        subtitle: "Une part de plus qu'il n'y a de mains",
        subtitle_en: "One more slice than there are hands",
        subtitle_es: "Un trozo más que manos",
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
            text: "Il y avait cinq gâteaux sur l'assiette, et quatre invités autour. Peppa fit le calcul à voix haute, deux fois, pour être bien sûre du problème.",
            es: "Había cinco pasteles en el plato y cuatro invitados alrededor. Peppa hizo la cuenta en voz alta, dos veces, para estar segura del problema.",
            en: "There were five cakes on the plate and four guests around it. Peppa did the sum out loud, twice, to be quite sure of the problem."
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
            text: "Peppa dit que le cinquième revenait à celle qui avait apporté l'assiette. Bluey dit qu'il revenait à celui qui avait mis la table. Les deux avaient raison, ce qui n'aidait absolument personne.",
            es: "Peppa dijo que el quinto era para quien había traído el plato. Bluey dijo que era para quien había puesto la mesa. Los dos tenían razón, lo cual no ayudaba absolutamente a nadie.",
            en: "Peppa said the fifth belonged to whoever had brought the plate. Bluey said it belonged to whoever had laid the table. They were both right, which helped absolutely nobody."
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
            text: "Elsa attendit que ça se calme. « On peut aussi le couper en quatre », dit-elle. Personne n'y avait pensé, parce que tout le monde était très occupé à avoir raison.",
            es: "Elsa esperó a que se calmara la cosa. «También lo podemos cortar en cuatro», dijo. Nadie había pensado en eso, porque todo el mundo estaba muy ocupado teniendo razón.",
            en: "Elsa waited for it to settle down. «We could also cut it into four,» she said. Nobody had thought of that, because everybody was very busy being right."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 400, y: 516, s: 1.2, pose: 'point' }
              ],
              sfx: [{ t: 'CROC. CROC. CROC. CROC.', x: 400, y: 148, fs: 23, rot: -4, color: '#8a5a3b' }]
            },
            text: "Livia coupa. Ce n'était pas très droit : un morceau était nettement plus gros que les autres, et tout le monde le vit en même temps, avec beaucoup d'attention.",
            es: "Livia cortó. No salió muy recto: un trozo era claramente más grande que los demás, y todo el mundo lo vio a la vez, con muchísima atención.",
            en: "Livia cut. It was not very straight: one piece was clearly bigger than the others, and everybody saw it at the same moment, with a great deal of attention."
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
            text: "Peppa prit le plus gros. Puis elle le regarda, soupira, et le posa dans la main de Bluey. « À toi », dit-elle très vite, comme on arrache un pansement.",
            es: "Peppa cogió el más grande. Luego lo miró, suspiró, y lo puso en la mano de Bluey. «Para ti», dijo muy deprisa, como quien se arranca una tirita.",
            en: "Peppa took the biggest. Then she looked at it, sighed, and put it into Bluey's hand. «Yours,» she said very quickly, the way you pull off a plaster."
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
            text: "Les quatre parts furent mangées en trois minutes. Personne ne se souvient de qui a eu la plus grosse. Tout le monde se souvient que Peppa l'a donnée, et c'est une chose qui reste.",
            es: "Los cuatro trozos se comieron en tres minutos. Nadie se acuerda de quién tuvo el más grande. Todo el mundo se acuerda de que Peppa lo regaló, y eso es algo que se queda.",
            en: "The four pieces were eaten in three minutes. Nobody remembers who got the biggest. Everybody remembers that Peppa gave it away, and that is the kind of thing that stays."
          }
        ]
      },

      /* ---------- 7 : chacun ses règles ---------- */
      {
        id: 'chacun-ses-regles',
        title: 'Chacun ses règles',
        title_en: "Every house has its rules",
        title_es: "Cada casa, sus reglas",
        subtitle: "Chez toi ce n'est pas pareil que chez moi",
        subtitle_en: "At yours it isn't the same as at mine",
        subtitle_es: "En tu casa no es igual que en la mía",
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
            text: "Bluey et Peppa venaient jouer à la maison pour la première fois. Ils entrèrent en courant, et Bluey sauta sur le lit avant même d'avoir enlevé ses chaussures.",
            es: "Bluey y Peppa venían a jugar a casa por primera vez. Entraron corriendo, y Bluey saltó sobre la cama antes incluso de quitarse los zapatos.",
            en: "Bluey and Peppa were coming to play at the house for the first time. They ran in, and Bluey jumped on the bed before he had even taken his shoes off."
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
            text: "« Pas sur le lit ! » Le cri sortit tout seul de Livia, plus fort qu'elle ne voulait. Bluey descendit d'un bond, l'air surpris. Chez lui, on saute sur le lit. C'est même le jeu principal.",
            es: "«¡Sobre la cama no!» El grito le salió solo a Livia, más fuerte de lo que quería. Bluey bajó de un salto, con cara de sorpresa. En su casa se salta sobre la cama. Es hasta el juego principal.",
            en: "«Not on the bed!» The shout came out of Livia all by itself, louder than she meant. Bluey hopped down, looking surprised. At his house you jump on the bed. It is practically the main game."
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
            text: "Il y eut un silence pas agréable du tout. Livia se sentit méchante, et Bluey se sentit bête, alors que ni l'un ni l'autre n'avait rien fait de mal.",
            es: "Hubo un silencio nada agradable. Livia se sintió mala, y Bluey se sintió tonto, cuando ninguno de los dos había hecho nada malo.",
            en: "There was a silence that was not at all pleasant. Livia felt mean, and Bluey felt silly, when neither of them had done anything wrong."
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
            text: "Peppa haussa les épaules. « Chez moi non plus on ne saute pas », dit-elle. « Mais on a le droit de crier. » Il apparut que chaque maison avait ses règles, et qu'aucune n'était la bonne.",
            es: "Peppa se encogió de hombros. «En mi casa tampoco se salta», dijo. «Pero se puede gritar.» Resultó que cada casa tenía sus reglas, y que ninguna era la buena.",
            en: "Peppa shrugged. «We don't jump at my house either,» she said. «But we're allowed to shout.» It turned out that every house had its rules, and that none of them was the right one."
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
            text: "Livia montra le tapis. « Ici, on saute là », dit-elle. « C'est mou et Maman ne dit rien. » Bluey trouva que c'était une règle très acceptable, et il l'essaya immédiatement.",
            es: "Livia señaló la alfombra. «Aquí se salta ahí», dijo. «Es blanda y mamá no dice nada.» A Bluey le pareció una regla muy aceptable, y la probó inmediatamente.",
            en: "Livia pointed at the rug. «Here, we jump there,» she said. «It's soft and Mummy doesn't mind.» Bluey found that a very acceptable rule, and tried it out immediately."
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
            text: "Ils sautèrent sur le tapis jusqu'à ce qu'on leur demande d'arrêter. Depuis, quand Livia va chez quelqu'un, elle commence par demander : « chez toi, on fait comment ? »",
            es: "Saltaron en la alfombra hasta que les pidieron parar. Desde entonces, cuando Livia va a casa de alguien, empieza por preguntar: «en tu casa, ¿cómo se hace?»",
            en: "They jumped on the rug until somebody asked them to stop. Ever since, when Livia goes to somebody's house, she starts by asking: «at your house, how do you do it?»"
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
        title_en: "The new girl",
        title_es: "La nueva",
        subtitle: 'Quand on est déjà deux et qu\'une troisième arrive',
        subtitle_en: "When you're already two and a third arrives",
        subtitle_es: "Cuando ya sois dos y llega una tercera",
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
            text: "Livia et Roxane faisaient tout ensemble. Le toboggan ensemble, le goûter ensemble, les bêtises ensemble. On les appelait « les deux ».",
            es: "Livia y Roxane lo hacían todo juntas. El tobogán juntas, la merienda juntas, las travesuras juntas. Las llamaban «las dos».",
            en: "Livia and Roxane did everything together. The slide together, tea together, mischief together. People called them «the two»."
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
            text: "Un lundi, une fille nouvelle arriva. Elle s'appelait Isadora. Elle restait près du portail, avec son manteau encore boutonné. « C'est qui, celle-là ? » demanda Roxane.",
            es: "Un lunes llegó una niña nueva. Se llamaba Isadora. Se quedaba junto a la verja, con el abrigo todavía abrochado. «¿Y esa quién es?», preguntó Roxane.",
            en: "One Monday, a new girl arrived. Her name was Isadora. She stood by the gate with her coat still buttoned up. «Who's that, then?» asked Roxane."
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
            text: "Livia voulait l'inviter. Roxane, non. « Si elle joue, moi je ne joue plus », dit Roxane. Livia se retrouva au milieu, avec deux envies qui tiraient dans deux directions.",
            es: "Livia quería invitarla. Roxane, no. «Si juega ella, yo no juego», dijo Roxane. Livia se quedó en medio, con dos ganas que tiraban en dos direcciones.",
            en: "Livia wanted to invite her over. Roxane did not. «If she plays, I'm not playing,» said Roxane. Livia found herself in the middle, with two wishes pulling in two directions."
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
            text: "À la récréation, Livia alla s'asseoir à côté d'Isadora. Elles ne dirent rien pendant longtemps. Puis Isadora sortit de sa poche trois billes, et en donna une.",
            es: "En el recreo, Livia fue a sentarse al lado de Isadora. No dijeron nada durante un buen rato. Luego Isadora sacó del bolsillo tres canicas y le dio una.",
            en: "At break, Livia went and sat down next to Isadora. Neither of them said anything for a long while. Then Isadora took three marbles out of her pocket, and gave one away."
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
            text: "« À trois, on peut faire des équipes », dit Livia. « À deux, on ne peut pas. » Roxane réfléchit. C'était embêtant, parce que c'était vrai.",
            es: "«Siendo tres podemos hacer equipos», dijo Livia. «Siendo dos, no.» Roxane se lo pensó. Era fastidioso, porque era verdad.",
            en: "«With three you can make teams,» said Livia. «With two you can't.» Roxane thought about it. It was annoying, because it was true."
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
            text: "Le soir, elles rentrèrent toutes les trois. Roxane marchait au milieu, ce qui l'arrangeait bien. On ne les appela plus jamais « les deux ».",
            es: "Por la tarde volvieron las tres a casa. Roxane iba en medio, cosa que le venía muy bien. Nunca más las llamaron «las dos».",
            en: "That evening all three of them walked home. Roxane walked in the middle, which suited her nicely. Nobody ever called them «the two» again."
          }
        ]
      },

      /* ---------- 2 ---------- */
      {
        id: 'toboggan',
        title: 'La dispute du toboggan',
        title_en: "The slide argument",
        title_es: "La pelea del tobogán",
        subtitle: 'Bouder, c\'est long',
        subtitle_en: "Sulking takes a long time",
        subtitle_es: "Enfadarse se hace largo",
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
            text: "Le toboggan du parc était le meilleur du monde. Livia et Roxane y montaient depuis une heure. Tout allait très bien.",
            es: "El tobogán del parque era el mejor del mundo. Livia y Roxane llevaban una hora subiendo. Todo iba estupendamente.",
            en: "The slide in the park was the best in the world. Livia and Roxane had been going up it for an hour. Everything was going very well."
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
            text: "Et puis elles voulurent monter en même temps. « C'était mon tour ! » dit Livia. « Non, c'était le mien ! » dit Roxane. Les deux étaient sûres. Les deux avaient tort, un peu.",
            es: "Y entonces quisieron subir a la vez. «¡Era mi turno!», dijo Livia. «¡No, era el mío!», dijo Roxane. Las dos estaban seguras. Las dos se equivocaban, un poco.",
            en: "And then they both wanted to go up at the same time. «It was my turn!» said Livia. «No, it was mine!» said Roxane. Both were sure. Both were a bit wrong."
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
            text: "Alors chacune partit de son côté. Livia s'assit tout à gauche du parc. Roxane s'assit tout à droite. Elles se tournèrent le dos, très fort, pour bien montrer.",
            es: "Así que cada una se fue por su lado. Livia se sentó en el extremo izquierdo del parque. Roxane en el extremo derecho. Se dieron la espalda, muy fuerte, para que se notara.",
            en: "So each went off her own way. Livia sat at the far left of the park. Roxane sat at the far right. They turned their backs, very firmly, to make the point."
          },
          {
            scene: {
              bg: 'garden',
              items: [
                { t: 'livia', x: 400, y: 500, s: 1.15, pose: 'sit', mood: 'sad' }
              ],
              sfx: [{ t: 'C\'EST LONG…', x: 400, y: 172, fs: 28, rot: -4, color: '#6d5847' }]
            },
            text: "Bouder, au début, c'est agréable. Après deux minutes, c'est un peu moins agréable. Après cinq minutes, on ne se souvient même plus très bien pourquoi on boude.",
            es: "Enfadarse, al principio, resulta agradable. A los dos minutos, ya menos. A los cinco, ni te acuerdas muy bien de por qué te enfadaste.",
            en: "Sulking is pleasant at first. After two minutes, rather less so. After five minutes, you can't even really remember what you're sulking about."
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
            text: "Elles se levèrent en même temps. Elles firent trois pas en même temps. Elles ouvrirent la bouche en même temps. Et elles dirent « pardon » en même temps, ce qui les fit rire.",
            es: "Se levantaron a la vez. Dieron tres pasos a la vez. Abrieron la boca a la vez. Y dijeron «perdón» a la vez, y eso les dio la risa.",
            en: "They stood up at the same moment. They took three steps at the same moment. They opened their mouths at the same moment. And they said «sorry» at the same moment, which made them laugh."
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
            text: "Elles remontèrent le toboggan jusqu'au soir, une fois chacune, en comptant à voix haute. Compter, ça ne rend pas le jeu plus rigolo. Mais ça évite les disputes.",
            es: "Subieron al tobogán hasta la noche, una vez cada una, contando en voz alta. Contar no hace el juego más divertido. Pero evita las peleas.",
            en: "They went up the slide until evening, one turn each, counting out loud. Counting does not make the game more fun. But it does stop the arguing."
          }
        ]
      },

      /* ---------- 3 ---------- */
      {
        id: 'secret',
        title: 'Le secret de Juliette',
        title_en: "Juliette's secret",
        title_es: "El secreto de Juliette",
        subtitle: 'Ce qu\'on garde pour soi',
        subtitle_en: "What you keep to yourself",
        subtitle_es: "Lo que uno se guarda",
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
            text: "Juliette prit Livia par la manche et l'emmena derrière le grand arbre. « Je te dis un secret », chuchota-t-elle. « Un vrai. Tu ne le répètes à personne. »",
            es: "Juliette cogió a Livia de la manga y se la llevó detrás del árbol grande. «Te cuento un secreto», susurró. «Uno de verdad. No se lo cuentas a nadie.»",
            en: "Juliette took Livia by the sleeve and led her behind the big tree. «I'm telling you a secret,» she whispered. «A real one. You don't tell anybody.»"
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
            text: "Le secret était que Juliette avait encore peur du noir. Elle en avait un peu honte. Elle ne l'avait dit à personne, jamais, et là elle venait de le dire à Livia.",
            es: "El secreto era que Juliette todavía tenía miedo a la oscuridad. Le daba un poco de vergüenza. No se lo había dicho nunca a nadie, y acababa de decírselo a Livia.",
            en: "The secret was that Juliette was still afraid of the dark. She was a bit ashamed of it. She had never told anybody, ever, and now she had just told Livia."
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
            text: "À la récréation, Roxane arriva en courant. « Alors ? Elle t'a dit quoi ? » Livia sentit le secret remuer dans sa bouche comme un bonbon trop gros.",
            es: "En el recreo, Roxane llegó corriendo. «¿Y bien? ¿Qué te ha dicho?» Livia notó el secreto moviéndose en su boca como un caramelo demasiado grande.",
            en: "At break, Roxane came running up. «Well? What did she say?» Livia felt the secret shifting about in her mouth like a sweet that is too big."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 400, y: 524, s: 1.2, mood: 'sad' }
              ],
              sfx: [{ t: 'MMMMH…', x: 400, y: 170, fs: 32, rot: -4, color: '#6d5847' }]
            },
            text: "Garder un secret, ce n'est pas ne rien dire. C'est se retenir de dire, pendant tout le temps où on a très envie de le dire. C'est beaucoup plus difficile.",
            es: "Guardar un secreto no es no decir nada. Es aguantarse las ganas de decirlo, todo el rato que tienes muchísimas ganas de decirlo. Es mucho más difícil.",
            en: "Keeping a secret is not saying nothing. It is holding back from saying it, for the whole time you very much want to say it. That is a great deal harder."
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
            text: "« C'est un secret », dit Livia. « Alors je ne dis pas. » Roxane fut vexée pendant huit minutes exactement. Puis elle passa à autre chose.",
            es: "«Es un secreto», dijo Livia. «Así que no lo digo.» Roxane se ofendió durante ocho minutos exactos. Luego pasó a otra cosa.",
            en: "«It's a secret,» said Livia. «So I'm not saying.» Roxane was offended for exactly eight minutes. Then she moved on to something else."
          },
          {
            scene: {
              bg: 'forest', time: 'sunset',
              items: [
                { t: 'juliette', x: 300, y: 522, s: 1.05, pose: 'hold' },
                { t: 'livia', x: 520, y: 524, s: 1.05, pose: 'hold' }
              ]
            },
            text: "Le soir, Juliette lui glissa : « Tu n'as rien dit. » Livia haussa les épaules, comme si c'était facile. Ce n'était pas facile du tout. C'est pour ça que ça valait quelque chose.",
            es: "Por la tarde, Juliette le susurró: «No has dicho nada.» Livia se encogió de hombros, como si fuera fácil. No había sido nada fácil. Por eso valía algo.",
            en: "That evening, Juliette murmured: «You didn't say anything.» Livia shrugged, as if it had been easy. It had not been easy at all. That is why it was worth something."
          }
        ]
      },

      /* ---------- 4 ---------- */
      {
        id: 'gouter',
        title: 'Le goûter et le petit frère',
        title_en: "Tea time and the baby brother",
        title_es: "La merienda y el hermanito",
        subtitle: 'Pablo n\'a pas fait exprès',
        subtitle_en: "Pablo didn't do it on purpose",
        subtitle_es: "Pablo no lo hizo a propósito",
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
            text: "Ce mercredi, Roxane et Juliette venaient goûter. Il y avait des gâteaux, du jus de pomme, et une tour de coussins qu'il ne fallait surtout pas faire tomber.",
            es: "Ese miércoles venían a merendar Roxane y Juliette. Había pasteles, zumo de manzana y una torre de cojines que no había que tirar bajo ningún concepto.",
            en: "That Wednesday, Roxane and Juliette were coming for tea. There were cakes, apple juice, and a tower of cushions that absolutely must not be knocked over."
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
            text: "Puis Pablo arriva. Pablo, c'est le petit frère de Livia. Il a un an et demi. Il ne marche pas encore très droit, et il attrape tout ce qui est à sa hauteur.",
            es: "Entonces llegó Pablo. Pablo es el hermanito de Livia. Tiene año y medio. Todavía no anda muy recto, y agarra todo lo que está a su altura.",
            en: "Then Pablo came in. Pablo is Livia's baby brother. He is one and a half. He does not walk very straight yet, and he grabs everything at his height."
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
            text: "En trois secondes, le verre de jus était par terre, la tour de coussins était par terre, et Pablo riait très fort, tout seul, très content de lui.",
            es: "En tres segundos, el vaso de zumo estaba en el suelo, la torre de cojines estaba en el suelo, y Pablo se reía a carcajadas, él solo, contentísimo consigo mismo.",
            en: "In three seconds, the glass of juice was on the floor, the tower of cushions was on the floor, and Pablo was laughing very loudly, all by himself, extremely pleased."
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
            text: "Livia devint toute rouge. Elle avait envie de crier très fort. Devant ses copines, en plus. Elle serra les poings et compta jusqu'à trois, comme sa maman lui avait montré.",
            es: "Livia se puso roja del todo. Tenía ganas de gritar muy fuerte. Y delante de sus amigas, encima. Apretó los puños y contó hasta tres, como le había enseñado su mamá.",
            en: "Livia went bright red. She wanted to shout very loudly. In front of her friends, too. She clenched her fists and counted to three, the way her mummy had shown her."
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
            text: "« Mon frère fait pareil », dit Roxane en épongeant. « C'est les bébés. » Juliette ramassa les coussins. À trois, ça alla très vite, et personne ne se fâcha.",
            es: "«Mi hermano hace lo mismo», dijo Roxane mientras secaba. «Son los bebés.» Juliette recogió los cojines. Entre tres fue muy rápido, y nadie se enfadó.",
            en: "«My brother does the same,» said Roxane, mopping up. «That's babies.» Juliette picked up the cushions. With three of them it went very fast, and nobody got cross."
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
            text: "À la fin, Pablo tendit un coussin à Livia en disant « Bi-ya ! », ce qui voulait dire Livia. C'était son premier mot. Elle décida de ne plus être fâchée du tout.",
            es: "Al final, Pablo le tendió un cojín a Livia diciendo «¡Bi-ya!», que quería decir Livia. Fue su primera palabra. Ella decidió no estar enfadada en absoluto.",
            en: "At the end, Pablo held out a cushion to Livia and said «Bi-ya!», which meant Livia. It was his first word. She decided not to be cross at all any more."
          }
        ]
      },

      /* ---------- 5 ---------- */
      {
        id: 'cabane-copines',
        title: 'La cabane des quatre',
        title_en: "The four girls' den",
        title_es: "La cabaña de las cuatro",
        subtitle: 'Quatre idées, une seule cabane',
        subtitle_en: "Four ideas, one single den",
        subtitle_es: "Cuatro ideas, una sola cabaña",
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
            text: "« On fait une cabane », dit Livia. Les quatre étaient d'accord. C'était la dernière fois de la journée qu'elles seraient toutes d'accord.",
            es: "«Hacemos una cabaña», dijo Livia. Las cuatro estaban de acuerdo. Fue la última vez en todo el día que estarían de acuerdo.",
            en: "«Let's build a den,» said Livia. All four agreed. It was the last time that day that they would all agree on anything."
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
            text: "Roxane voulait la cabane sous le grand arbre. Juliette la voulait près du banc. Isadora, elle, la voulait ronde. Chacune expliqua pourquoi elle avait raison, en même temps.",
            es: "Roxane la quería bajo el árbol grande. Juliette la quería junto al banco. Isadora la quería redonda. Cada una explicó por qué tenía razón, todas a la vez.",
            en: "Roxane wanted the den under the big tree. Juliette wanted it by the bench. Isadora wanted it round. Each explained why she was right, all at once."
          },
          {
            scene: {
              bg: 'forest',
              items: [
                { t: 'livia', x: 400, y: 524, s: 1.2, pose: 'shrug', mood: 'sad' }
              ],
              sfx: [{ t: 'BLA BLA BLA BLA', x: 400, y: 168, fs: 28, rot: -5, color: '#6d5847' }]
            },
            text: "Au bout d'un moment, il n'y avait toujours pas de cabane. Il y avait juste beaucoup de mots. Livia regarda le tas de branches, qui n'avait pas bougé d'un centimètre.",
            es: "Al cabo de un rato seguía sin haber cabaña. Solo había muchísimas palabras. Livia miró el montón de ramas, que no se había movido ni un centímetro.",
            en: "After a while there was still no den. There were just a great many words. Livia looked at the pile of branches, which had not moved a centimetre."
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
            text: "« On vote », dit Livia. « Chacune une voix, et on prend celle qui en a le plus. » Personne n'avait jamais essayé. Ça parut étrange, puis raisonnable.",
            es: "«Votamos», dijo Livia. «Un voto cada una, y gana la que tenga más.» Nadie lo había probado nunca. Pareció raro, y luego razonable.",
            en: "«We vote,» said Livia. «One vote each, and the one with the most wins.» Nobody had ever tried it. It seemed odd, and then reasonable."
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
            text: "Le grand arbre gagna, par deux voix contre une contre une. La cabane fut construite en quarante minutes, ce qui est beaucoup moins long que de discuter.",
            es: "Ganó el árbol grande, por dos votos contra uno contra uno. La cabaña se construyó en cuarenta minutos, que es mucho menos rato que discutir.",
            en: "The big tree won, by two votes to one to one. The den was built in forty minutes, which is a great deal less time than arguing."
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
            text: "Elles s'installèrent dedans. Isadora fit remarquer qu'elle était quand même un peu ronde, la cabane. Tout le monde dit que oui, pour lui faire plaisir. Et c'était un peu vrai.",
            es: "Se metieron dentro. Isadora hizo notar que, mira, la cabaña sí que había quedado un poco redonda. Todas dijeron que sí, por darle gusto. Y era un poco verdad.",
            en: "They settled inside. Isadora pointed out that the den had come out slightly round after all. Everybody said yes, to please her. And it was slightly true."
          }
        ]
      },

      /* ---------- 6 ---------- */
      {
        id: 'pas-gentille',
        title: 'Le jour où Livia n\'a pas été gentille',
        title_en: "The day Livia wasn't kind",
        title_es: "El día en que Livia no fue buena",
        subtitle: 'Réparer, c\'est plus que dire pardon',
        subtitle_en: "Making up for it is more than saying sorry",
        subtitle_es: "Reparar es más que decir perdón",
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
            text: "Isadora avait mis un chapeau un peu bizarre. Roxane fit une grimace. Livia rit, et dit quelque chose de moqueur. Ce n'était pas très méchant. C'était quand même méchant.",
            es: "Isadora se había puesto un gorro un poco raro. Roxane hizo una mueca. Livia se rio y dijo algo burlón. No fue muy malo. Aun así fue malo.",
            en: "Isadora was wearing a rather odd hat. Roxane pulled a face. Livia laughed, and said something mocking. It was not very nasty. It was nasty all the same."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'isadora', x: 400, y: 522, s: 1.2, mood: 'sad' }
              ],
              sfx: [{ t: '. . .', x: 400, y: 176, fs: 32, rot: 0, color: '#8a7768' }]
            },
            text: "Isadora ne dit rien. Elle enleva son chapeau et le mit dans son sac. Puis elle alla jouer toute seule, très loin, avec le dos très droit.",
            es: "Isadora no dijo nada. Se quitó el gorro y lo metió en la mochila. Luego se fue a jugar sola, muy lejos, muy tiesa.",
            en: "Isadora said nothing. She took off the hat and put it in her bag. Then she went off to play on her own, a long way away, holding herself very straight."
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
            text: "Roxane riait encore. Livia, elle, avait quelque chose de lourd dans le ventre. Le rire était fini depuis longtemps, et la chose lourde restait.",
            es: "Roxane seguía riéndose. Livia, en cambio, tenía algo pesado en la barriga. La risa se había acabado hacía rato, y la cosa pesada seguía ahí.",
            en: "Roxane was still laughing. Livia, though, had something heavy in her tummy. The laugh had finished long ago, and the heavy thing was still there."
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
            text: "Livia traversa la cour. C'était très long, cette cour. « Pardon », dit-elle. « C'était nul, ce que j'ai dit. » Isadora haussa une épaule, ce qui ne veut pas dire oui.",
            es: "Livia cruzó el patio. Era larguísimo, ese patio. «Perdón», dijo. «Estuvo fatal lo que dije.» Isadora encogió un hombro, cosa que no quiere decir que sí.",
            en: "Livia crossed the playground. It was a very long playground. «Sorry,» she said. «That was rubbish, what I said.» Isadora lifted one shoulder, which does not mean yes."
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
            text: "Alors Livia sortit le chapeau du sac et le remit sur la tête d'Isadora. Puis elle demanda où on en trouvait un pareil, parce qu'elle en voulait un aussi. Ça, ce n'était plus des mots.",
            es: "Entonces Livia sacó el gorro de la mochila y se lo volvió a poner en la cabeza. Y le preguntó dónde se compraban, porque ella quería uno igual. Eso ya no eran palabras.",
            en: "So Livia took the hat out of the bag and put it back on Isadora's head. Then she asked where you could get one, because she wanted one too. That was no longer just words."
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
            text: "Le lendemain, elles avaient toutes les trois un chapeau bizarre. Roxane trouva ça très laid. Elle en mit un quand même. C'est ça, réparer.",
            es: "Al día siguiente, las tres llevaban un gorro raro. A Roxane le pareció feísimo. Se lo puso igualmente. Eso es reparar.",
            en: "The next day, all three of them had an odd hat. Roxane thought it was hideous. She wore one anyway. That is what making up for it looks like."
          }
        ]
      },

      /* ---------- 7 : prêter ce à quoi on tient ---------- */
      {
        id: 'prete-doudou',
        title: 'Prêter son doudou',
        title_en: "Lending your cuddly toy",
        title_es: "Prestar el peluche",
        subtitle: 'Prêter ce qui compte le plus',
        subtitle_en: "Lending the thing that matters most",
        subtitle_es: "Prestar lo que más importa",
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
            text: "Livia a un doudou. Il est gris, il sent la maison, et il ne va jamais nulle part sans elle. C'est la seule chose au monde qu'elle ne prête à personne.",
            es: "Livia tiene un peluche. Es gris, huele a casa, y no va nunca a ninguna parte sin ella. Es la única cosa del mundo que no le presta a nadie.",
            en: "Livia has a cuddly toy. It is grey, it smells of home, and it never goes anywhere without her. It is the one thing in the world she lends to nobody."
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
            text: "Ce jour-là, Isadora dormait chez Livia. À l'heure de la sieste, elle s'assit sur le matelas sans rien dire. Elle avait oublié son doudou à elle, à la maison.",
            es: "Ese día, Isadora dormía en casa de Livia. A la hora de la siesta se sentó en el colchón sin decir nada. Se había dejado su peluche en su casa.",
            en: "That day, Isadora was sleeping over at Livia's. At nap time she sat down on the mattress without saying anything. She had left her own cuddly toy at home."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 508, s: 1.2, mood: 'sad', pose: 'hold' }
              ],
              sfx: [{ t: 'MMMH…', x: 400, y: 152, fs: 32, rot: -5, color: '#6d5847' }]
            },
            text: "Livia serra son doudou plus fort. Elle pensa : elle n'a qu'à dormir sans. Puis elle pensa : moi, je ne pourrais pas. Les deux pensées se battirent un moment.",
            es: "Livia apretó el suyo más fuerte. Pensó: que duerma sin él. Luego pensó: yo no podría. Los dos pensamientos se pelearon un rato.",
            en: "Livia held hers tighter. She thought: she can just sleep without one. Then she thought: I couldn't. The two thoughts fought each other for a while."
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
            text: "« Tu peux le prendre », dit Livia. « Mais il revient après. » Isadora hocha la tête très vite, comme on promet une chose extrêmement sérieuse.",
            es: "«Puedes cogerlo», dijo Livia. «Pero después vuelve.» Isadora asintió muy deprisa, como se promete una cosa extremadamente seria.",
            en: "«You can have him,» said Livia. «But he comes back afterwards.» Isadora nodded very fast, the way you promise something extremely serious."
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
            text: "Isadora s'endormit en trois minutes. Livia, elle, mit plus longtemps. Elle regarda le plafond, les bras vides. Puis elle s'endormit quand même, ce qui la surprit beaucoup.",
            es: "Isadora se durmió en tres minutos. Livia tardó más. Se quedó mirando el techo, con los brazos vacíos. Luego se durmió igualmente, lo cual la sorprendió mucho.",
            en: "Isadora fell asleep in three minutes. Livia took longer. She looked at the ceiling with empty arms. Then she fell asleep anyway, which surprised her a great deal."
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
            text: "Au réveil, Isadora lui rendit le doudou avant même de dire bonjour. Il sentait un peu Isadora, maintenant. Livia trouva que ce n'était pas si grave.",
            es: "Al despertar, Isadora le devolvió el peluche antes incluso de decir buenos días. Ahora olía un poco a Isadora. A Livia le pareció que no era para tanto.",
            en: "When they woke, Isadora gave the cuddly toy back before even saying good morning. It smelled a bit of Isadora now. Livia decided that was not so terrible."
          }
        ]
      },

      /* ---------- 8 : les règles du jeu ---------- */
      {
        id: 'regles-du-jeu',
        title: 'Les règles du jeu',
        title_en: "The rules of the game",
        title_es: "Las reglas del juego",
        subtitle: 'On les dit avant, pas pendant',
        subtitle_en: "You say them before, not during",
        subtitle_es: "Se dicen antes, no durante",
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
            text: "« On joue à chat ! » dit Roxane. Tout le monde était d'accord. Personne n'avait dit les règles, parce que tout le monde croyait les connaître.",
            es: "«¡Jugamos al pilla-pilla!», dijo Roxane. Todo el mundo estaba de acuerdo. Nadie había dicho las reglas, porque todos creían conocerlas.",
            en: "«Let's play tag!» said Roxane. Everybody agreed. Nobody had said the rules, because everybody thought they knew them."
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
            text: "Livia courut très vite et toucha Roxane dans le dos. « Attrapée ! » cria-t-elle. C'était clair, c'était net, et c'était très satisfaisant.",
            es: "Livia corrió muy rápido y tocó a Roxane en la espalda. «¡Pillada!», gritó. Estaba clarísimo, y era muy satisfactorio.",
            en: "Livia ran very fast and touched Roxane on the back. «Caught you!» she shouted. It was clear, it was clean, and it was very satisfying."
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
            text: "« Non ! » dit Roxane. « J'étais près de l'arbre, et l'arbre c'est la maison ! » Personne n'avait jamais parlé d'un arbre. L'arbre venait d'apparaître dans le jeu.",
            es: "«¡No!», dijo Roxane. «¡Yo estaba cerca del árbol, y el árbol es casa!» Nadie había hablado nunca de ningún árbol. El árbol acababa de aparecer en el juego.",
            en: "«No!» said Roxane. «I was near the tree, and the tree is home!» Nobody had ever mentioned a tree. The tree had just appeared in the game."
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
            text: "Alors ce fut le banc, puis le portail, puis le bac à sable. À chaque fois que Roxane allait être attrapée, un nouvel endroit devenait la maison. Le jeu s'arrêta tout seul.",
            es: "Luego fue el banco, luego la verja, luego el arenero. Cada vez que iban a pillar a Roxane, un sitio nuevo se convertía en casa. El juego se paró solo.",
            en: "Then it was the bench, then the gate, then the sandpit. Every time Roxane was about to be caught, a new place became home. The game stopped all by itself."
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
            text: "« On dit les règles avant », dit Livia. « Après, on n'en change plus, même quand ça nous arrange. » Roxane répondit que c'était nul. Elle savait très bien que c'était vrai.",
            es: "«Las reglas se dicen antes», dijo Livia. «Después no se cambian, ni siquiera cuando nos conviene.» Roxane contestó que vaya rollo. Sabía perfectamente que era verdad.",
            en: "«You say the rules before,» said Livia. «After that you don't change them, not even when it suits us.» Roxane said that was rubbish. She knew perfectly well that it was true."
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
            text: "Elles recommencèrent. Cette fois, la maison c'était le banc, et rien d'autre, et tout le monde l'avait dit à voix haute. Le jeu dura jusqu'à la nuit.",
            es: "Volvieron a empezar. Esta vez casa era el banco, y nada más, y todo el mundo lo había dicho en voz alta. El juego duró hasta que se hizo de noche.",
            en: "They started again. This time home was the bench, and nothing else, and everybody had said it out loud. The game lasted until dark."
          }
        ]
      },

      /* ---------- 9 : prêter à quelqu'un qui casse ---------- */
      {
        id: 'jouet-casse',
        title: 'Le jouet cassé',
        title_en: "The broken toy",
        title_es: "El juguete roto",
        subtitle: 'Prêter, et que ça finisse mal',
        subtitle_en: "Lending, and it ending badly",
        subtitle_es: "Prestar, y que acabe mal",
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
            text: "Livia avait une boîte à musique. On tournait la clé, et une danseuse tournait aussi. C'était sa plus belle chose. Juliette demanda si elle pouvait la prendre.",
            es: "Livia tenía una caja de música. Girabas la llave y una bailarina giraba también. Era su cosa más bonita. Juliette preguntó si podía cogerla.",
            en: "Livia had a music box. You turned the key and a dancer turned too. It was her most beautiful thing. Juliette asked if she could hold it."
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
            text: "Livia hésita. Elle dit oui quand même, en ajoutant « fais attention » trois fois de suite, ce qui ne sert à rien mais qu'on dit toujours.",
            es: "Livia dudó. Aun así dijo que sí, añadiendo «ten cuidado» tres veces seguidas, cosa que no sirve de nada pero que siempre se dice.",
            en: "Livia hesitated. She said yes anyway, adding «be careful» three times in a row, which is no use at all but which people always say."
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
            text: "La boîte glissa. Elle tomba sur le carrelage. La danseuse partit d'un côté, la clé de l'autre, et la musique s'arrêta au milieu d'une note.",
            es: "La caja resbaló. Cayó sobre las baldosas. La bailarina salió por un lado, la llave por el otro, y la música se paró en mitad de una nota.",
            en: "The box slipped. It fell on the tiles. The dancer went one way, the key the other, and the music stopped in the middle of a note."
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
            text: "Livia cria. Elle dit des choses très fortes, du genre « je t'avais dit » et « c'est de ta faute ». Juliette ne répondit rien. Elle regardait les morceaux par terre.",
            es: "Livia gritó. Dijo cosas muy fuertes, del estilo «te lo había dicho» y «es culpa tuya». Juliette no contestó nada. Miraba los trozos en el suelo.",
            en: "Livia shouted. She said very loud things, along the lines of «I told you» and «it's your fault». Juliette said nothing back. She was looking at the pieces on the floor."
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
            text: "Maman ne dit pas que ce n'était pas grave. « Elle est cassée », dit-elle. « Ça, c'est vrai, et tu as le droit d'être triste. Et pendant ce temps-là, Juliette pleure dans le couloir. »",
            es: "Mamá no dijo que no pasaba nada. «Está rota», dijo. «Eso es verdad, y tienes derecho a estar triste. Y mientras tanto, Juliette está llorando en el pasillo.»",
            en: "Mummy did not say it didn't matter. «It's broken,» she said. «That's true, and you're allowed to be sad. And meanwhile, Juliette is crying in the hallway.»"
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
            text: "Elles recollèrent la danseuse ensemble. Elle penche un peu, maintenant, et la musique saute une note. Livia dit que c'est comme ça qu'elle la préfère. Ce n'est pas tout à fait vrai, et c'est un peu vrai.",
            es: "Pegaron la bailarina entre las dos. Ahora se inclina un poco, y la música se salta una nota. Livia dice que así le gusta más. No es del todo verdad, y es un poco verdad.",
            en: "They glued the dancer back together. She leans a bit now, and the music skips a note. Livia says that is how she likes it best. That is not entirely true, and it is a bit true."
          }
        ]
      },

      /* ---------- 10 : la règle qui protège les autres ---------- */
      {
        id: 'bibliotheque',
        title: 'À la bibliothèque',
        title_en: "At the library",
        title_es: "En la biblioteca",
        subtitle: 'Chuchoter, même quand on a envie de crier',
        subtitle_en: "Whispering, even when you want to shout",
        subtitle_es: "Susurrar, aunque te apetezca gritar",
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
            text: "La bibliothèque du village a trois murs de livres et un tapis rond. Livia et Roxane y allèrent le mercredi. Il y avait plus de livres que dans toutes leurs chambres réunies.",
            es: "La biblioteca del pueblo tiene tres paredes de libros y una alfombra redonda. Livia y Roxane fueron el miércoles. Había más libros que en todas sus habitaciones juntas.",
            en: "The village library has three walls of books and a round rug. Livia and Roxane went on Wednesday. There were more books than in all their bedrooms put together."
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
            text: "Livia trouva un livre avec un dragon. Elle cria le nom du dragon. Roxane cria encore plus fort qu'elle connaissait ce dragon. Toutes les têtes se levèrent en même temps.",
            es: "Livia encontró un libro con un dragón. Gritó el nombre del dragón. Roxane gritó aún más fuerte que ella conocía ese dragón. Todas las cabezas se levantaron a la vez.",
            en: "Livia found a book with a dragon in it. She shouted the dragon's name. Roxane shouted even louder that she knew that dragon. Every head went up at once."
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
            text: "La dame de la bibliothèque leva un doigt. « Chut. » Livia trouva ça injuste : elle ne faisait rien de mal, elle était juste contente, et être contente n'est pas interdit.",
            es: "La señora de la biblioteca levantó un dedo. «Chis.» A Livia le pareció injusto: no hacía nada malo, solo estaba contenta, y estar contenta no está prohibido.",
            en: "The library lady raised a finger. «Shh.» Livia thought that was unfair: she wasn't doing anything wrong, she was just happy, and being happy is not against the rules."
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
            text: "La dame s'accroupit à sa hauteur. « Ici, chacun est dans son histoire », dit-elle. « Quand tu cries, tu entres dans l'histoire des autres sans frapper. »",
            es: "La señora se agachó a su altura. «Aquí cada uno está dentro de su historia», dijo. «Cuando gritas, entras en la historia de los demás sin llamar.»",
            en: "The lady crouched down to her level. «In here, everybody is inside their own story,» she said. «When you shout, you walk into other people's stories without knocking.»"
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
            text: "Alors elles s'assirent sur le tapis, tout près l'une de l'autre, et se racontèrent le dragon en chuchotant. Chuchoter rend les histoires beaucoup plus secrètes, donc beaucoup mieux.",
            es: "Así que se sentaron en la alfombra, muy juntas, y se contaron el dragón susurrando. Susurrar hace las historias mucho más secretas, o sea mucho mejores.",
            en: "So they sat on the rug, very close together, and told each other about the dragon in whispers. Whispering makes stories much more secret, and therefore much better."
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
            text: "Dehors, sur le trottoir, elles crièrent le nom du dragon aussi fort qu'elles voulaient. Une règle qui s'arrête à la porte, c'est une règle qu'on veut bien suivre.",
            es: "Fuera, en la acera, gritaron el nombre del dragón todo lo fuerte que quisieron. Una regla que se acaba en la puerta es una regla que uno cumple de buena gana.",
            en: "Outside on the pavement, they shouted the dragon's name as loudly as they liked. A rule that stops at the door is a rule you don't mind following."
          }
        ]
      },

      /* ---------- 11 : la jalousie du bébé ---------- */
      {
        id: 'tout-pour-pablo',
        title: 'Tout le monde regarde Pablo',
        title_en: "Everybody's looking at Pablo",
        title_es: "Todos miran a Pablo",
        subtitle: 'Quand un bébé prend toute la place',
        subtitle_en: "When a baby takes up all the room",
        subtitle_es: "Cuando un bebé ocupa todo el sitio",
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
            text: "Roxane et Isadora venaient jouer. Livia avait tout préparé : le magasin, la caisse, les fausses pièces. Elle attendait ce mercredi depuis lundi.",
            es: "Roxane e Isadora venían a jugar. Livia lo tenía todo preparado: la tienda, la caja, las monedas de mentira. Llevaba esperando ese miércoles desde el lunes.",
            en: "Roxane and Isadora were coming to play. Livia had got everything ready: the shop, the till, the pretend coins. She had been waiting for this Wednesday since Monday."
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
            text: "Puis Pablo entra. « Oooh ! » firent les deux copines. Et pendant une heure entière, il n'y eut plus de magasin, plus de caisse, plus de fausses pièces. Il n'y eut que Pablo.",
            es: "Entonces entró Pablo. «¡Oooh!», hicieron las dos amigas. Y durante una hora entera no hubo tienda, ni caja, ni monedas de mentira. Solo hubo Pablo.",
            en: "Then Pablo came in. «Ooooh!» went both friends. And for a whole hour there was no shop, no till, no pretend coins. There was only Pablo."
          },
          {
            scene: {
              bg: 'bedroom',
              items: [
                { t: 'livia', x: 400, y: 510, s: 1.25, mood: 'sad' }
              ],
              sfx: [{ t: 'ET MOI ?', x: 400, y: 146, fs: 32, rot: -6, color: '#6d5847' }]
            },
            text: "Livia resta debout à côté du magasin. Elle avait dans le ventre quelque chose de piquant qui n'était pas de la tristesse et pas tout à fait de la colère non plus.",
            es: "Livia se quedó de pie junto a la tienda. Tenía en la barriga algo punzante que no era tristeza y tampoco era del todo rabia.",
            en: "Livia stayed standing next to the shop. She had something prickly in her tummy that was not sadness and was not quite anger either."
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
            text: "Alors elle poussa Pablo. Pas très fort. Assez pour qu'il tombe sur les fesses et qu'il pleure. Et à la seconde où il pleura, Livia sut qu'elle avait fait une bêtise.",
            es: "Entonces empujó a Pablo. No muy fuerte. Lo justo para que se cayera de culo y llorara. Y en el segundo en que lloró, Livia supo que había hecho una tontería.",
            en: "So she pushed Pablo. Not very hard. Just enough for him to sit down suddenly and cry. And the second he cried, Livia knew she had done something silly."
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
            text: "Maman l'emmena dans la chambre. « Ce que tu as là », dit-elle en montrant son ventre, « ça s'appelle la jalousie. Ça arrive à tout le monde. Pousser, non. Le dire, oui. »",
            es: "Mamá se la llevó al cuarto. «Eso que tienes ahí», dijo señalándole la barriga, «se llama celos. Le pasa a todo el mundo. Empujar, no. Decirlo, sí.»",
            en: "Mummy took her into the bedroom. «That thing you've got there,» she said, pointing at her tummy, «is called jealousy. It happens to everybody. Pushing, no. Saying it, yes.»"
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
            text: "Livia retourna voir ses copines et leur dit, à voix haute : « Le magasin ouvre. » Elles arrivèrent en courant. Il suffisait de le demander, ce qui est fou quand on y pense.",
            es: "Livia volvió con sus amigas y les dijo, en voz alta: «La tienda abre.» Vinieron corriendo. Bastaba con pedirlo, lo cual es una locura si lo piensas.",
            en: "Livia went back to her friends and said, out loud: «The shop is open.» They came running. All she had had to do was ask, which is astonishing when you think about it."
          }
        ]
      },

      /* ---------- 12 : la peur du noir ---------- */
      {
        id: 'peur-du-noir',
        title: 'La nuit chez Livia',
        title_en: "The night at Livia's",
        title_es: "La noche en casa de Livia",
        subtitle: 'Avoir peur, sans que personne ne se moque',
        subtitle_en: "Being scared, without anybody laughing",
        subtitle_es: "Tener miedo, sin que nadie se ría",
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
            text: "Juliette dormait chez Livia pour la première fois. Elles avaient un matelas par terre, deux lampes de poche et l'autorisation de parler jusqu'à huit heures et demie.",
            es: "Juliette dormía en casa de Livia por primera vez. Tenían un colchón en el suelo, dos linternas y permiso para hablar hasta las ocho y media.",
            en: "Juliette was sleeping over at Livia's for the first time. They had a mattress on the floor, two torches, and permission to talk until half past eight."
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
            text: "À huit heures et demie, Maman éteignit. La chambre devint noire d'un coup. Livia bâilla. Juliette, elle, se raidit complètement sous la couverture.",
            es: "A las ocho y media, mamá apagó. La habitación se quedó negra de golpe. Livia bostezó. Juliette, en cambio, se puso completamente rígida bajo la manta.",
            en: "At half past eight, Mummy switched the light off. The room went black all at once. Livia yawned. Juliette went completely stiff under the blanket."
          },
          {
            scene: {
              bg: 'bedroom', time: 'night',
              items: [
                { t: 'juliette', x: 400, y: 508, s: 1.25, mood: 'sad' }
              ],
              sfx: [{ t: 'ET SI…', x: 400, y: 146, fs: 32, rot: -5, color: '#8a7768' }]
            },
            text: "Dans le noir, le portemanteau devenait quelqu'un. Le rideau bougeait tout seul. Juliette connaissait son secret par cœur : elle a encore peur du noir, et elle a honte de l'avoir.",
            es: "En la oscuridad, el perchero se convertía en alguien. La cortina se movía sola. Juliette se sabía su secreto de memoria: todavía tiene miedo del noche, y le da vergüenza tenerlo.",
            en: "In the dark, the coat rack turned into somebody. The curtain moved on its own. Juliette knew her secret by heart: she is still afraid of the dark, and ashamed of being afraid."
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
            text: "Livia sentit qu'elle ne dormait pas. Elle ne dit pas « n'aie pas peur ». Elle dit : « Tu veux la petite lumière ? Moi aussi je la garde, des fois. » Ce n'était même pas un mensonge.",
            es: "Livia notó que no dormía. No dijo «no tengas miedo». Dijo: «¿Quieres la lucecita? Yo también la dejo, a veces.» Ni siquiera era mentira.",
            en: "Livia could tell she wasn't sleeping. She did not say «don't be scared». She said: «Do you want the little light? I keep it on too, sometimes.» That was not even a lie."
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
            text: "Elles allumèrent la veilleuse et firent le tour de la chambre. Le monsieur était un manteau. Le monstre était une chaise. Le noir garde beaucoup moins de secrets quand on le visite.",
            es: "Encendieron la lamparita y dieron la vuelta al cuarto. El señor era un abrigo. El monstruo era una silla. La oscuridad guarda muchos menos secretos cuando la visitas.",
            en: "They switched on the night light and went round the room. The man was a coat. The monster was a chair. The dark keeps far fewer secrets once you visit it."
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
            text: "Elles s'endormirent la veilleuse allumée. Au matin, Juliette dit qu'elle n'avait pas eu peur du tout. Livia dit que oui, bien sûr. Les deux savaient très bien à quoi s'en tenir.",
            es: "Se durmieron con la lamparita encendida. Por la mañana, Juliette dijo que no había tenido nada de miedo. Livia dijo que claro que no. Las dos sabían perfectamente a qué atenerse.",
            en: "They fell asleep with the night light on. In the morning, Juliette said she hadn't been scared at all. Livia said of course not. Both of them knew exactly where they stood."
          }
        ]
      },

      /* ---------- 13 : le départ d'une amie ---------- */
      {
        id: 'demenagement',
        title: 'Isadora s\'en va',
        title_en: "Isadora is moving away",
        title_es: "Isadora se va",
        subtitle: 'Quand une amie part habiter loin',
        subtitle_en: "When a friend goes to live far off",
        subtitle_es: "Cuando una amiga se va a vivir lejos",
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
            text: "Un lundi, Isadora annonça la nouvelle sur le banc de la cour. « On déménage. À trois heures de route. » Livia ne savait pas ce que ça faisait, trois heures de route.",
            es: "Un lunes, Isadora dio la noticia en el banco del patio. «Nos mudamos. A tres horas de coche.» Livia no sabía cómo era eso de tres horas de coche.",
            en: "One Monday, Isadora announced the news on the playground bench. «We're moving. Three hours' drive away.» Livia did not know what three hours' drive felt like."
          },
          {
            scene: {
              bg: 'village',
              items: [
                { t: 'livia', x: 400, y: 524, s: 1.25, mood: 'fache' }
              ],
              sfx: [{ t: 'C\'EST NUL !', x: 400, y: 166, fs: 34, rot: -6, color: '#e0453c' }]
            },
            text: "D'abord, Livia se fâcha. Elle dit que c'était nul, qu'Isadora aurait pu refuser, qu'on ne déménage pas comme ça. Se fâcher, c'est plus facile que d'être triste.",
            es: "Primero, Livia se enfadó. Dijo que era horrible, que Isadora podría haberse negado, que uno no se muda así como así. Enfadarse es más fácil que estar triste.",
            en: "First, Livia got cross. She said it was rubbish, that Isadora could have refused, that you don't just move away like that. Getting cross is easier than being sad."
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
            text: "Il restait six jours. Elles les comptèrent tous les matins, ce qui était une très mauvaise idée. Chaque jour compté partait plus vite que le précédent.",
            es: "Quedaban seis días. Los contaron todas las mañanas, lo cual fue una idea malísima. Cada día contado se iba más rápido que el anterior.",
            en: "There were six days left. They counted them every morning, which was a very bad idea. Each counted day went faster than the one before."
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
            text: "Alors elles fabriquèrent quelque chose. Un carnet, avec un dessin de chacune, la maison de chacune, et une phrase de chacune écrite tout de travers.",
            es: "Así que fabricaron algo. Un cuaderno, con un dibujo de cada una, la casa de cada una, y una frase de cada una escrita torcidísima.",
            en: "So they made something. A notebook, with a drawing of each of them, each of their houses, and a sentence from each of them written all crooked."
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
            text: "Le samedi, la voiture était pleine. Isadora prit le carnet et le serra contre elle. Personne ne trouva de belle phrase à dire. Elles se firent un signe très longtemps.",
            es: "El sábado, el coche estaba lleno. Isadora cogió el cuaderno y se lo apretó contra el pecho. Nadie encontró una frase bonita que decir. Se dijeron adiós con la mano durante muchísimo rato.",
            en: "On the Saturday, the car was full. Isadora took the notebook and hugged it to her. Nobody could find a fine thing to say. They waved at each other for a very long time."
          },
          {
            scene: {
              bg: 'bedroom', time: 'sunset',
              items: [
                { t: 'livia', x: 400, y: 496, s: 1.2, pose: 'sit' }
              ],
              sfx: [{ t: 'DRIIING !', x: 420, y: 150, fs: 30, rot: -6, color: '#f7c518' }]
            },
            text: "Le dimanche soir, le téléphone sonna. C'était Isadora, qui voulait décrire sa nouvelle chambre. Habiter loin, ce n'est pas la même chose que disparaître.",
            es: "El domingo por la noche sonó el teléfono. Era Isadora, que quería describir su habitación nueva. Vivir lejos no es lo mismo que desaparecer.",
            en: "On the Sunday evening the phone rang. It was Isadora, who wanted to describe her new bedroom. Living far away is not the same thing as disappearing."
          }
        ]
      },

      /* ---------- 14 : Maman est en retard ---------- */
      {
        id: 'maman-en-retard',
        title: 'Maman est en retard',
        title_en: "Mummy is late",
        title_es: 'Mamá llega tarde',
        subtitle: 'Attendre quand on ne sait pas combien de temps',
        subtitle_en: "Waiting when you don't know how long for",
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
            es: "A la salida del colegio, los niños se van uno detrás de otro. Roxane salió corriendo hacia su papá. Luego Juliette. Luego todos los demás.",
            en: "At the school gates, the children leave one after another. Roxane ran off to her daddy. Then Juliette. Then all the others."
          },
          {
            scene: {
              bg: 'village',
              items: [{ t: 'livia', x: 400, y: 524, s: 1.2, mood: 'sad' }],
              sfx: [{ t: '. . .', x: 400, y: 172, fs: 34, rot: 0, color: '#8a7768' }]
            },
            text: "Livia resta seule devant le portail. Le trottoir était vide. Elle regarda le bout de la rue, très fort, comme si regarder pouvait faire apparaître une voiture.",
            es: "Livia se quedó sola delante de la verja. La acera estaba vacía. Miró el final de la calle, muy fuerte, como si mirar pudiera hacer aparecer un coche.",
            en: "Livia was left alone in front of the gate. The pavement was empty. She stared at the end of the street, very hard, as if staring could make a car appear."
          },
          {
            scene: {
              bg: 'village',
              items: [{ t: 'livia', x: 400, y: 500, s: 1.2, pose: 'sit', mood: 'sad' }],
              sfx: [{ t: 'ET SI ELLE M\'AVAIT OUBLIÉE ?', x: 400, y: 166, fs: 22, rot: -4, color: '#6d5847' }]
            },
            text: "Dans sa tête, une petite phrase commença à tourner : « et si elle m'avait oubliée ? » Elle savait que c'était idiot. Ça tournait quand même, de plus en plus vite.",
            es: "En su cabeza empezó a dar vueltas una frasecita: «¿y si se ha olvidado de mí?». Sabía que era una tontería. Pero daba vueltas igual, cada vez más deprisa.",
            en: "In her head, a small sentence began going round: «what if she's forgotten me?» She knew it was silly. It went round anyway, faster and faster."
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
            es: "La maestra se sentó a su lado. No dijo «no te preocupes». Dijo: «¿Contamos los coches rojos mientras esperamos?» Livia contó cuatro.",
            en: "Her teacher came and sat down beside her. She did not say «don't worry». She said: «Shall we count the red cars while we wait?» Livia counted four."
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
            es: "En el quinto coche rojo, mamá llegó corriendo, despeinada, con la boca llena de disculpas. Livia se le echó encima sin escuchar ni una sola de sus disculpas.",
            en: "At the fifth red car, Mummy came running up, hair everywhere, her mouth full of apologies. Livia jumped on her without listening to a single word of them."
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
            es: "De camino, mamá dijo: «Yo siempre vengo. Aunque llegue tarde, siempre vengo.» Livia guardó esa frase en algún sitio, y la sacó cada vez que hizo falta.",
            en: "On the way home, Mummy said: «I always come. Even when I'm late, I always come.» Livia put that sentence away somewhere, and took it out whenever she needed it."
          }
        ]
      },

      /* ---------- 15 : la cuisine de Papa ---------- */
      {
        id: 'papa-cuisine',
        title: 'Le gâteau de Papa',
        title_en: "Daddy's cake",
        title_es: 'El pastel de papá',
        subtitle: 'À quatre mains, c\'est plus salissant et plus rigolo',
        subtitle_en: "Four hands means messier and funnier",
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
            es: "«Vamos a hacer un pastel», anunció papá subiéndose las mangas. En su brazo, el tatuaje se arrugó. Livia sacó el bol grande, el de las grandes ocasiones.",
            en: "«We're making a cake,» announced Daddy, rolling up his sleeves. On his arm, the tattoo creased up. Livia got out the big mixing bowl, the special-occasions one."
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
            es: "Roxane había venido a jugar. Dos niñas, un bol, una cuchara de madera. «¡Yo! ¡Yo!», dijeron las dos a la vez, lo cual nunca ayuda a nadie.",
            en: "Roxane had come to play. Two children, one bowl, one wooden spoon. «Me! Me!» said them both at once, which has never helped anybody."
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
            es: "Papá dejó la cuchara. «Hay cuatro cosas que hacer», dijo. «Romper, verter, mezclar y rebañar el bol. Dos cada una. Vosotras elegís en qué orden.»",
            en: "Daddy put the spoon down. «There are four jobs,» he said. «Cracking, pouring, mixing, and licking the bowl. Two each. You choose the order.»"
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
            es: "Livia rompió los huevos. Un trocito de cáscara se cayó dentro. Roxane echó la harina demasiado rápido, y una nube blanca subió hasta el techo. Nadie se enfadó.",
            en: "Livia cracked the eggs. A bit of shell fell in. Roxane poured the flour too fast, and a white cloud went up to the ceiling. Nobody got cross."
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
            es: "Rebañaron el bol las dos, cada una por un lado, que es la mejor parte y todo el mundo lo sabe. Papá hizo como que no miraba.",
            en: "They both licked the bowl, one on each side, which is the best part and everybody knows it. Daddy pretended not to be looking."
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
            es: "El pastel salió un poco torcido y crujía al morderlo, por la cáscara. Se lo comieron entero. Nadie ha pedido nunca un pastel más recto.",
            en: "The cake came out a bit crooked and it crunched, because of the shell. It was eaten to the last crumb. Nobody has ever asked for a straighter cake."
          }
        ]
      },

      /* ---------- 16 : Isadora ne veut pas ---------- */
      {
        id: 'isadora-ne-veut-pas',
        title: 'Isadora ne veut pas jouer',
        title_en: "Isadora doesn't want to play",
        title_es: "Isadora no quiere jugar",
        subtitle: "Un non qui n'est pas contre toi",
        subtitle_en: "A no that isn't about you",
        subtitle_es: "Un no que no va contra ti",
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
            text: "Dans la cour, Isadora était assise contre le mur, toute seule, en train de regarder ses chaussures. Livia arriva en courant. « Isa ! On joue ? »",
            es: "En el patio, Isadora estaba sentada contra la pared, sola, mirándose los zapatos. Livia llegó corriendo. «¡Isa! ¿Jugamos?»",
            en: "In the playground, Isadora was sitting against the wall, all alone, looking at her shoes. Livia came running up. «Isa! Shall we play?»"
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
            text: "« Non », dit Isadora. « Pas maintenant. » Elle ne dit pas pourquoi, elle ne leva même pas la tête. Le non tomba sur Livia comme une porte qui se ferme sans prévenir.",
            es: "«No», dijo Isadora. «Ahora no.» No dijo por qué, ni siquiera levantó la cabeza. El no le cayó encima a Livia como una puerta que se cierra sin avisar.",
            en: "«No,» said Isadora. «Not now.» She did not say why, she did not even lift her head. The no landed on Livia like a door closing without warning."
          },
          {
            scene: {
              bg: 'garden',
              items: [{ t: 'livia', x: 400, y: 524, s: 1.25, mood: 'sad' }],
              sfx: [{ t: 'ELLE M\'AIME PLUS ?', x: 400, y: 148, fs: 25, rot: -4, color: '#6d5847' }]
            },
            text: "Livia s'éloigna avec une question qui pesait lourd : est-ce qu'Isadora ne l'aimait plus ? Elle repassa la matinée dans sa tête pour trouver ce qu'elle avait fait de mal. Elle ne trouva rien.",
            es: "Livia se alejó con una pregunta que pesaba mucho: ¿es que Isadora ya no la quería? Repasó la mañana entera buscando qué había hecho mal. No encontró nada.",
            en: "Livia walked away with a question that weighed a lot: had Isadora stopped liking her? She went back over the whole morning to find what she had done wrong. She found nothing."
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
            text: "Roxane, qui sait tout, expliqua : « son chat est malade. » Voilà. Le non n'était pas contre Livia. Il n'était même pas contre le jeu. Il était juste posé là, en attendant que ça passe.",
            es: "Roxane, que lo sabe todo, se lo explicó: «su gato está malito.» Ya está. El no no iba contra Livia. Ni siquiera iba contra el juego. Estaba ahí puesto, esperando a que pasara.",
            en: "Roxane, who knows everything, explained: «her cat's poorly.» There. The no was not about Livia. It was not even about the game. It was simply sitting there, waiting to pass."
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
            text: "Livia revint. Elle ne redemanda pas si on jouait. Elle s'assit contre le mur, à côté, à la bonne distance, et elle regarda ses chaussures aussi. Elles restèrent comme ça un long moment.",
            es: "Livia volvió. No preguntó otra vez si jugaban. Se sentó contra la pared, al lado, a la distancia justa, y se miró los zapatos también. Se quedaron así un buen rato.",
            en: "Livia came back. She did not ask again about playing. She sat against the wall beside her, at the right distance, and looked at her shoes too. They stayed like that a long while."
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
            text: "Au bout d'un temps qu'aucune des deux n'a compté, Isadora se leva et dit : « on joue ? » Il n'avait rien fallu de plus que rester assise à côté sans rien demander.",
            es: "Al cabo de un tiempo que ninguna de las dos contó, Isadora se levantó y dijo: «¿jugamos?» No había hecho falta más que quedarse sentada al lado sin pedir nada.",
            en: "After a length of time neither of them counted, Isadora stood up and said: «shall we play?» Nothing more had been needed than sitting beside her and asking for nothing."
          }
        ]
      },

      /* ---------- 17 : le tour de Pablo ---------- */
      {
        id: 'le-tour-de-pablo',
        title: 'Le tour de Pablo',
        title_en: "Pablo's turn",
        title_es: "El turno de Pablo",
        subtitle: "Le plus petit joue aussi",
        subtitle_en: "The littlest one plays too",
        subtitle_es: "El más pequeño también juega",
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
            text: "Le jeu était simple : on lance le ballon dans le grand seau, chacune son tour, et on compte les points. Livia menait par trois à deux. Roxane contestait le premier point depuis dix minutes.",
            es: "El juego era sencillo: se lanza la pelota dentro del cubo grande, por turnos, y se cuentan los puntos. Livia iba ganando tres a dos. Roxane llevaba diez minutos discutiendo el primer punto.",
            en: "The game was simple: you throw the ball into the big bucket, taking turns, and you count the points. Livia was leading three to two. Roxane had been disputing the first point for ten minutes."
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
            text: "Pablo arriva à quatre pattes, à sa vitesse de bébé, qui est lente et absolument déterminée. Il montra le ballon avec toute sa main. « Ba ! Ba ! »",
            es: "Pablo llegó a gatas, a su velocidad de bebé, que es lenta y absolutamente decidida. Señaló la pelota con la mano entera. «¡Ba! ¡Ba!»",
            en: "Pablo arrived on all fours, at his baby speed, which is slow and absolutely determined. He pointed at the ball with his whole hand. «Ba! Ba!»"
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
            text: "« Il va tout rater », dit Roxane, ce qui était rigoureusement exact. « On ne va plus jamais finir la partie. » Ça aussi, c'était vrai. Les deux filles se regardèrent.",
            es: "«Lo va a fallar todo», dijo Roxane, lo cual era rigurosamente exacto. «Ya no acabamos la partida en la vida.» Eso también era verdad. Las dos niñas se miraron.",
            en: "«He'll miss every time,» said Roxane, which was strictly accurate. «We'll never finish the game.» That was true too. The two girls looked at each other."
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
            text: "« On change la règle », dit Livia. « Pablo tire de tout près. » Elle porta le seau jusqu'à trente centimètres de son frère, ce qui n'était pas du tout dans l'esprit du jeu d'origine.",
            es: "«Cambiamos la regla», dijo Livia. «Pablo tira desde muy cerca.» Llevó el cubo hasta treinta centímetros de su hermano, cosa que no iba nada con el espíritu del juego original.",
            en: "«We change the rule,» said Livia. «Pablo throws from really close.» She carried the bucket to within thirty centimetres of her brother, which was not at all in the spirit of the original game."
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
            text: "Pablo poussa le ballon des deux mains. Il tomba dans le seau. Le cri que poussèrent les deux grandes fit sortir Maman sur le pas de la porte pour vérifier que personne n'était blessé.",
            es: "Pablo empujó la pelota con las dos manos. Cayó dentro del cubo. El grito que dieron las dos mayores hizo salir a mamá a la puerta para comprobar que nadie se había hecho daño.",
            en: "Pablo pushed the ball with both hands. It fell into the bucket. The shout the two big girls let out brought Mummy to the doorway to check that nobody was hurt."
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
            text: "La partie ne fut jamais finie et le score fut perdu. Pablo, lui, a marqué un point ce jour-là, et il ne le sait même pas. Les deux grandes, elles, s'en souviennent parfaitement.",
            es: "La partida no se acabó nunca y el resultado se perdió. Pablo, en cambio, marcó un punto aquel día, y ni siquiera lo sabe. Las dos mayores se acuerdan perfectamente.",
            en: "The game was never finished and the score was lost. Pablo, though, scored a point that day, and he doesn't even know it. The two big girls remember it perfectly."
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
