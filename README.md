# 📖 Les histoires de Livia

Un petit site (pensé pour le téléphone) qui répertorie les histoires du soir de Livia,
rangées par univers, feuilletables en **Cover Flow** façon iPod, et lisibles sous
forme de **bande dessinée**.

Tout est dessiné en SVG à la main par un petit moteur maison : **aucune image
externe, aucune dépendance, aucun build**. On ouvre `index.html` et ça marche.

La direction artistique reprend celle des magazines de lecture jeunesse :
papier crème et grain d'impression, bandeau rouge, titres ronds, palette gouache,
trait d'encre légèrement tremblé, et le texte des histoires composé dans un vrai
caractère de lecture. Chaque histoire porte son numéro, comme un numéro de revue.

---

## Ce qu'il y a dedans

* **Une couverture plein écran** — le site s'ouvre sur la une du mois : gros titre,
  illustration qui occupe tout l'écran, pastille du nombre d'histoires, et le mois
  courant qui se met à jour tout seul. L'illustration existe en deux compositions,
  une pour les écrans larges et une pour les écrans hauts, choisies à l'ouverture :
  un cadrage unique couperait les personnages sur un téléphone.
* **Le nom Kid Cartoon** en haut de chaque page, qui ramène à l'accueil d'un doigt
* **Deux rubriques** — Histoires et Jeux ; sous Histoires, les univers
  (Peppa Pig, La Reine des Neiges, Bluey, les Monsieur Madame, les cross-over,
  les copines… faciles à compléter)
* **Des onglets illustrés** — chaque univers est un rond dessiné (Peppa, Elsa,
  Bluey, Monsieur Bonheur, Olaf, Roxane) et non un mot : un enfant qui ne lit
  pas choisit son univers du premier coup d'œil. Le nom reste dessous, en petit.
* **Deux filtres** — par univers (les onglets) et par thème (Été, Amitié,
  Émotions, Grandir, Partager, Règles, Famille, Dehors, Nuit, Bêtises) ; les
  thèmes traversent les univers, et les onglets filtrent à l'intérieur d'un
  thème. Le filtre par thème est **replié** derrière un bouton discret : c'est
  un réglage d'adulte, il ne doit pas encombrer le chemin de l'enfant.
* **Français et espagnol** — un sélecteur de langue dans le même volet replié.
  En espagnol, l'interface et le texte des histoires changent, et la voix passe
  en `es-ES`. Une histoire n'apparaît que si elle est **entièrement traduite** :
  mieux vaut une bibliothèque plus courte qu'une histoire à moitié en français.
* **Cover Flow infini** — on fait tourner les pochettes au doigt, ça boucle sans fin,
  avec le reflet façon iPod
* **Lecteur de BD** — une planche par page, bulles de dialogue, bruitages,
  navigation au doigt (swipe), aux flèches, ou avec les boutons
* **Lecture à voix haute** (bouton 🔊) via la synthèse vocale du téléphone —
  le texte est découpé en phrases et envoyé une par une, un peu ralenti, avec la
  voix la plus soignée que le téléphone propose dans la langue courante : on
  gagne les respirations entre les phrases, qui manquaient le plus
* **Reprise de lecture** — le site se souvient de la page où on s'est arrêté
  et marque les histoires déjà lues d'un ✓
* **Bouton 🎲** — une histoire au hasard
* **Le compte du soir** — sur la couverture, on choisit combien d'histoires on
  lit ce soir (1 à 6). Un 🌙 dans le bandeau montre ce qu'il reste ; il diminue
  quand une histoire est terminée (relire la même n'en consomme pas une
  deuxième), et la dernière page annonce « C'était la dernière ». Les boutons
  **− et +** ajustent le total en cours de soirée, pour le « allez, encore
  une » — sans effacer ce qui a déjà été lu. Le compte disparaît tout seul le
  lendemain.
* **Des boutons d'abord visuels** — à quatre ans on ne lit pas encore : les
  boutons que l'enfant utilise portent une grande image (▶ ↻ ⌂), le mot reste
  dessous en petit pour l'adulte.
* **Huit jeux** pour les 3-5 ans, rangés en **cinq familles** — Observer,
  Lettres, Nombres, Créer, Réfléchir :

  | Famille | Jeux |
  |---|---|
  | 👀 Observer | relier chaque personnage à son objet, les 6 différences |
  | 🔤 Lettres | écrire les prénoms de la maison, apprendre l'alphabet |
  | 🔢 Nombres | compter jusqu'à six |
  | 🎨 Créer | le coloriage, le puzzle |
  | 🧩 Réfléchir | le labyrinthe |

  Aucun texte à lire : tout est dit à voix haute. Un rang de boutons permet de
  passer d'un jeu à l'autre sans revenir en arrière, et les jeux de lettres
  commencent par un choix : quel prénom, quelle lettre.
* **Installable** sur l'écran d'accueil du téléphone : icône, plein écran, et
  **fonctionnement hors connexion** — un service worker garde tout le site en
  cache, y compris les polices et les images

### Les histoires déjà écrites

**Peppa Pig** — l'été

| Histoire | Planches |
|---|---|
| Livia et Peppa à la plage | 9 |
| Le camping sous les étoiles | 9 |
| La grande journée à la piscine | 8 |
| Le cerf-volant de l'été | 8 |

**Peppa Pig** — grandir : six épisodes sur ce qui se joue à trois ans, chacun
autour d'une émotion nommée et d'une réparation concrète, sans morale plaquée

| Histoire | Ce qu'elle raconte |
|---|---|
| Le cadeau de George | la jalousie |
| Le vélo de Livia | le partage |
| La grosse colère de Peppa | la colère, et souffler comme un dragon |
| La flaque interdite | écouter ses parents, et la conséquence |
| Le vase de Maman | dire la vérité |
| La file du toboggan | attendre son tour |

**La Reine des Neiges**

| Histoire | Planches |
|---|---|
| Un été à Arendelle | 9 |
| La nuit des étoiles glacées | 8 |
| Papa n'a pas froid | 6 |
| La glace qui craque | 6 |

**Bluey** (dix histoires, tout l'été australien)

| Histoire | Planches |
|---|---|
| La grande bataille d'arroseur | 7 |
| Le ruisseau secret | 7 |
| Le ballon qui ne doit pas tomber | 7 |
| La plage aux mille crabes | 7 |
| Le camping dans le jardin | 7 |
| La course des glaces fondues | 7 |
| Le toboggan d'eau du jardin | 7 |
| La chasse au trésor du jardin | 7 |
| Le pique-nique tout en haut | 7 |
| La nuit des lucioles | 7 |

**Les Monsieur Madame** (huit histoires, une humeur chacune)

| Histoire | Ce qu'elle raconte |
|---|---|
| Monsieur Grognon et le sourire perdu | on peut être grognon, et se laisser attraper |
| Madame Chipie fait une farce | une farce n'est drôle que si on rit à deux |
| Monsieur Étourdi perd tout | une place pour chaque chose |
| Madame Timide dit bonjour | commencer tout petit |
| Monsieur Rapide et Monsieur Lent | la vitesse du milieu |
| Madame Range-Tout et le grand désordre | on range après, pas pendant |
| Monsieur Costaud n'y arrive pas | demander de l'aide |
| Madame Bonheur et le jour gris | rester là quand ça ne va pas |

**Le grand mélange** — les cross-over : les amis de Livia ne viennent pas du
même dessin animé, et ils se rencontrent quand même

| Histoire | Qui s'y retrouve |
|---|---|
| Les trois amies de Livia | Peppa, Bluey et Elsa, trois jeux à réconcilier |
| De la neige sur la plage | Peppa, Elsa et Olaf, un jour de canicule |
| La cabane de tous les amis | Bluey, Peppa, Elsa et Monsieur Costaud |
| La grande course des amis | Peppa, Bluey et Monsieur Rapide |
| La nuit où tout le monde a dormi dehors | Peppa, Bluey et Elsa sous la tente |

**Les copines de Livia** — Roxane, Juliette, Isadora, et Pablo le petit frère

| Histoire | Ce qu'elle raconte |
|---|---|
| La nouvelle | quand on est déjà deux et qu'une troisième arrive |
| La dispute du toboggan | bouder, c'est long |
| Le secret de Juliette | se retenir de répéter |
| Le goûter et le petit frère | un bébé renverse tout, et ce n'est pas grave |
| La cabane des quatre | décider à plusieurs, en votant |
| Le jour où Livia n'a pas été gentille | réparer, c'est plus que dire pardon |
| Prêter son doudou | prêter ce à quoi on tient le plus |
| Les règles du jeu | on les dit avant, pas pendant |
| Maman est en retard | attendre sans savoir combien de temps |
| Le gâteau de Papa | à quatre mains, c'est plus salissant et plus rigolo |

Pablo apparaît aussi dans **Pablo veut faire pareil** (Peppa Pig, série *Grandir*).

**En espagnol** — quatre histoires sont pour l'instant traduites de bout en
bout : *Papá no tiene frío*, *El hielo que cruje*, *Mamá llega tarde* et
*El pastel de papá*. Elles n'apparaissent qu'en mode espagnol, et le reste de la
bibliothèque se remplit une histoire à la fois (les consignes des jeux, elles,
restent en français pour le moment).

**Partager et les règles** — la série la plus demandée à la maison

| Histoire | Univers | Ce qu'elle raconte |
|---|---|---|
| Le dernier gâteau | Peppa Pig | partager quand il n'y en a qu'un |
| La balançoire pour deux | Bluey | vingt secondes chacun, et l'attente devient courte |
| Prêter son doudou | Les copines | prêter ce à quoi on tient |
| On donne la main | Peppa Pig | la règle qui ne se discute pas |
| Quand Maman dit non | Peppa Pig | un non qui tient, et la colère qui redescend |
| Les règles du jeu | Les copines | changer les règles en cours de partie |
| Chacun son tour de parler | Peppa Pig | on ne coupe pas, même quand c'est urgent |
| Maman est prise | Peppa Pig | attendre son tour de câlin |
| Les jouets qu'on donne | Bluey | se séparer de ce dont on ne joue plus |
| Le jouet cassé | Les copines | prêter, et que ça finisse mal |
| Ce qu'on fait après | Peppa Pig | pardon est le début, réparer est la suite |
| Le jour où Papa s'est trompé | Peppa Pig | les grands aussi disent pardon |
| Dedans on marche, dehors on court | Bluey | la règle change parce que l'endroit change |
| À la bibliothèque | Les copines | chuchoter, la règle qui protège les autres |
| Chez Mamie, ce n'est pas pareil | Peppa Pig | deux maisons, deux règles |

**Les émotions et la famille**

| Histoire | Univers | Ce qu'elle raconte |
|---|---|---|
| Devant tout le monde | Peppa Pig | la honte, et comment elle s'en va |
| Le jour où Pablo est arrivé | Peppa Pig | devenir grande sœur, ça ne se décide pas |
| Tout le monde regarde Pablo | Les copines | la jalousie a un nom |
| La nuit chez Livia | Les copines | avoir peur du noir sans qu'on se moque |
| Isadora s'en va | Les copines | une amie qui déménage |
| Je m'ennuie | Bluey | ce qu'on trouve quand il n'y a rien à faire |

---

## Lancer le site

En local, un simple serveur statique suffit :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

(Ouvrir `index.html` directement en `file://` marche aussi dans la plupart des cas.)

### Une seule page à partager

Pour envoyer le site par message, le déposer sur n'importe quel hébergeur ou le
garder sur le téléphone sans connexion, on peut tout replier dans un seul fichier
(CSS, JavaScript et police compris) :

```bash
node outils/construire-page-unique.js
# → dist/histoires-de-livia.html  (~700 Ko, aucune requête vers l'extérieur)
```

Le fichier est déjà présent dans `dist/` ; il suffit de relancer la commande après
avoir ajouté une histoire.

### L'installer sur un téléphone

Le site est une **PWA** : il s'installe sans passer par un store.

* **iPhone** — ouvrir le lien dans **Safari** (pas Chrome), bouton Partager,
  « Sur l'écran d'accueil ».
* **Android** — ouvrir dans Chrome ; une bannière « Installer » apparaît, ou
  menu ⋮ → « Installer l'application ».

Chacun l'installe depuis le même lien, sur autant d'appareils qu'il veut : il
n'y a ni compte, ni licence, ni synchronisation. En revanche, la progression de
lecture et le compte du soir vivent dans le téléphone : chaque appareil a le
sien.

Après une mise à jour, il faut changer `VERSION` en tête de `sw.js`, sinon les
appareils déjà installés continuent de servir l'ancienne version depuis leur
cache.

### Le mettre en ligne (GitHub Pages)

Le dépôt est un site statique posé à la racine : il se publie sans rien construire.

**Settings → Pages → Source : Deploy from a branch**, puis la branche du projet et
le dossier **`/ (root)`**. Le site est en ligne une minute plus tard, et chaque
`git push` le met à jour tout seul.

Deux choses à savoir : Pages est gratuit sur un dépôt **public** mais demande un
compte Pro sur un dépôt privé ; et GitHub refuse qu'un jeton automatique crée le
site — cette première activation revient au propriétaire du dépôt. Le fichier
`.nojekyll` est déjà là pour éviter que GitHub ne bricole les fichiers.

---

## Ajouter une nouvelle histoire

Tout se passe dans **`assets/js/stories.js`**. Une histoire, c'est un objet à coller
dans le tableau `stories` de l'univers voulu :

```js
{
  id: 'ma-nouvelle-histoire',        // identifiant unique dans l'univers (sert à l'URL)
  title: 'Livia et le grand toboggan',
  subtitle: 'Un mercredi au parc',
  tag: 'Été',                        // l'étiquette affichée sur la vignette
  themes: ['Été', 'Amitié'],         // les thèmes du filtre (voir THEMES dans stories.js)
  minutes: 5,
  cover: { /* une scène, sert de pochette */ },
  pages: [
    {
      scene: { /* le dessin */ },
      text: "Le texte lu à voix haute, 2 à 4 phrases simples."
    }
    // …autant de pages que voulu
  ]
}
```

**La traduire.** Trois champs facultatifs suffisent : `title_es`, `subtitle_es`,
et un `es:` à côté du `text:` de **chaque** page. L'histoire n'apparaît en mode
espagnol que si les trois y sont, page par page — une traduction à moitié faite
reste invisible plutôt que de mélanger les deux langues.

### Écrire une scène

```js
scene: {
  bg: 'beach',          // le décor
  time: 'sunset',       // day (défaut) | morning | sunset | night | gris (ciel couvert)
  neige: 24,            // il neige : nombre de flocons (true = 26)
  aurora: true,         // (décor 'snow' de nuit uniquement) affiche une aurore boréale

  back:  [ /* éléments dessinés derrière les personnages */ ],
  items: [ /* le plan principal */ ],
  front: [ /* éléments dessinés par-dessus (vagues, éclaboussures…) */ ],

  sfx: [ { t: 'PLOUF !', x: 620, y: 240, fs: 50, rot: -8, color: '#ffd93d' } ],

  bubbles: [
    { x: 330, y: 40, w: 300, t: 'On y va !',
      tx: 430, ty: 218,     // pointe de la bulle : vers la tête de qui parle
      think: false,         // true = bulle de pensée
      fill: '#fff' }
  ]
}
```

Le repère va de **0 à 800 en largeur** et de **0 à 560 en hauteur**, l'origine en haut
à gauche. Pour un personnage, `x` / `y` désignent **le point où ses pieds touchent le
sol** (en général `y` entre 470 et 520 selon le décor).

Chaque élément s'écrit :

```js
{ t: 'peppa', x: 330, y: 500, s: 1, flip: true, pose: 'wave', mood: 'wow', rot: 0, op: 1 }
```

* `s` — échelle (1 ≈ 230 px de haut pour un personnage)
* `flip` — retourne l'élément (les personnages regardent vers la droite par défaut)
* `rot` — rotation en degrés, `op` — opacité

### Les briques disponibles

**Décors (`bg`)**
`beach`, `sea`, `garden`, `hill`, `creek` *(le ruisseau)*, `camp`, `forest`, `snow`,
`village`, `road`, `bedroom`, `plain`

**Personnages**
`peppa`, `george`, `mummy`, `daddy`, `suzy`, `livia`, `liviaPrincess`, `elsa`, `anna`,
`olaf`, `dino`, la famille bouvier : `bluey`, `bingo`, `bandit`, `chilli`,
`muffin`, `coco`, et les Monsieur Madame : `grognon`, `chipie`, `etourdi`,
`timide`, `rapide`, `lent`, `rangetout`, `costaud`, `bonheur`, `curieux`
*(ces derniers acceptent `sansChapeau: true` quand l'histoire leur fait perdre
leur chapeau)*, les vraies copines : `roxane` *(brune au carré)*, `juliette`
*(blonde, queue de cheval haute)*, `isadora` *(châtain, queue de cheval)*,
`mamie` *(carré gris et lunettes)*, et `pablo`, le petit frère *(un bébé :
plus petit, grosse tête, cheveux très courts ; poses `stand`, `sit`, `wave`,
`armsup`, `hold`, `quatrepattes`)*, enfin les parents : `papa` *(grand et
large, barbe rousse qui suit la mâchoire, débardeur, et un tatouage sur le bras
gauche)* et `maman` *(rousse, un peu plus petite, queue de cheval en bataille)*

**Poses** (`pose`)
`stand`, `wave`, `armsup`, `jump`, `run`, `sit`, `point`, `hold`, `shrug`, `swim`,
`magic` *(pour Elsa)*

**Humeurs** (`mood`)
`happy` (défaut), `wow`, `sad`, `sleep`, `fache`

**Objets et décors secondaires**
`sun`, `moon`, `cloud`, `palm`, `parasol`, `ball`, `sandcastle`, `bucket`, `spade`,
`starfish`, `shell`, `seagull`, `crab`, `towel`, `icecream`, `watermelon`, `float`,
`tent`, `campfire`, `log`, `tree`, `pine`, `snowpine`, `bush`, `flower`, `butterfly`,
`kite`, `tether` *(la ficelle d'un cerf-volant)*, `boat`, `car`, `suitcase`,
`marshmallow`, `hedgehog`, `snowball`, `star`, `snowflake`, `rock`, `fish`, `slide`,
`pool`, `sled`, `castleIce`, `house`, `sparkle`, `splash`, `lantern`, `balloon`,
`mudpuddle`, `wave`, `aurora`, `sprinkler`, `trampoline`, `mangue`, `esky`,
`cube`, `tourcubes`, `etagere` *(une rangée de livres)*, `cabane`
*(`toit: '#bfe8f7'` pour le toit de glace, `ecroulee: true` pour le tas de
branches)*

La plupart acceptent une `color` (`{ t: 'flower', x: 90, y: 520, color: '#ffd93d' }`),
`tether` prend `dx` / `dy` (et éventuellement `qx` / `qy` pour la courbure).

### Changer la couverture

L'illustration de la une est la scène `COUVERTURE`, tout en haut de
`stories.js`. C'est une scène ordinaire : on y met les personnages du moment.
Attention au cadrage, elle est recadrée en 4/3 — gardez l'essentiel entre
`x = 30` et `x = 770`.

### Ajouter un univers

Toujours dans `stories.js`, un nouvel objet en haut du tableau `UNIVERSES` :

```js
{
  id: 'pat-patrouille',
  name: 'Pat\' Patrouille',
  tagline: 'Livia part en mission',
  emoji: '🐶',
  c1: '#4ea8f0',            // les deux couleurs du dégradé de l'univers
  c2: '#ffd166',
  vignette: { t: 'stella', ds: 1, dy: 0 },   // le personnage du rond illustré
  cover: { /* une scène */ },
  stories: [ /* … */ ]
}
```

`vignette` désigne le personnage qui représente l'univers dans les onglets :
`t` est son nom, `ds` ajuste l'échelle et `dy` le recentre verticalement (le
rond cadre sur le visage, un personnage plus grand demande un `ds` plus petit).

Le menu, la page d'accueil et les couleurs se mettent à jour tout seuls.

### Voir ses planches pendant qu'on écrit

`outils/apercu-histoire.html` affiche toutes les planches côte à côte —
pratique pour régler les positions sans relancer le lecteur à chaque fois :

```
http://localhost:8000/outils/apercu-histoire.html
http://localhost:8000/outils/apercu-histoire.html?u=peppa&s=plage
```

---

## Comment c'est fait

```
index.html                  la coquille (accueil, cover flow, lecteur)
manifest.webmanifest        pour l'installation sur l'écran d'accueil
assets/css/style.css        toute la mise en page, mobile d'abord
assets/js/art.js            le moteur de dessin SVG (décors, personnages, objets, bulles)
assets/js/stories.js        les histoires (c'est ici qu'on écrit)
assets/js/games.js          les huit jeux, leurs familles et leur cadre commun
assets/js/app.js            navigation, couverture, Cover Flow, lecteur
assets/fonts/               Fredoka et Literata (SIL Open Font License 1.1)
assets/img/grain.png        le grain du papier, en surimpression
sw.js                       le service worker : mise en cache et hors connexion
assets/icons/               les icônes de l'application (visage de Livia)
outils/apercu-histoire.html planche de contrôle pour les dessins
outils/construire-page-unique.js  replie tout le site dans un fichier
dist/histoires-de-livia.html      le résultat, prêt à partager
```

Rien n'est chargé depuis un serveur extérieur : ni police, ni script, ni image.
Le site fonctionne hors connexion une fois la page ouverte.

Le moteur de dessin repose sur une astuce simple : chaque forme est tracée deux fois,
d'abord en gros trait d'encre puis remplie par-dessus. Le contour obtenu épouse
l'**union** des formes, ce qui permet de coller une tête, un museau et deux oreilles
sans jamais voir les traits de construction.

Le grain de papier est un carré de bruit de 64 pixels, répété et posé en
`multiply` par-dessus la page ; le tremblé du trait vient d'un `feTurbulence`
qui déplace légèrement chaque contour. Deux effets qui coûtent presque rien et
qui suffisent à sortir le dessin du rendu vectoriel trop lisse.

Les adresses suivent la lecture : `#/` la couverture, `#/histoires` les univers,
`#/theme/emotions` un thème, `#/theme/emotions/peppa` un thème dans un univers,
`#/u/peppa` le présentoir d'un univers, `#/u/peppa/plage` une histoire ouverte,
`#/jeux/compter` un jeu. Chaque page a donc son lien direct, partageable tel quel.

Les jeux partagent un même cadre (`jouer()` dans `games.js`) qui gère les manches,
les étoiles et les félicitations ; un jeu n'a qu'à fournir sa fonction `manche()`
et appeler `api.reussi()`. Trois principes les gouvernent : on ne perd jamais, on
n'a rien à lire, et une manche se joue en un seul geste.

Deux d'entre eux méritent un mot. **Écrire un prénom** : chaque lettre est une
suite de tracés SVG, et c'est le navigateur qui échantillonne le chemin
(`getPointAtLength`) pour poser les points de passage — les courbes sont donc de
vraies courbes, et un enfant qui apprend le S n'apprend pas un polygone. Pour
ajouter un prénom, il suffit de l'écrire en majuscules dans `PRENOMS` ; les 26
lettres plus `É` et `È` sont déjà tracées.

**Les 6 différences** ne sont pas dessinées à la main : le jeu prend une case
existante et la retouche lui-même (un objet retiré, un autre agrandi, un
personnage retourné, une humeur ou une pose changée, un élément ajouté), en
veillant à ne poser qu'une retouche par élément et à les espacer. Ajouter une
planche au jeu tient donc en une ligne dans `PLANCHES` :
`{ u: 'bluey', s: 'crabes', p: 6 }`.

L'ordre des opérations y compte : le jeu choisit **d'abord la fenêtre** — la
portion de case qu'il va montrer — et ne retouche ensuite que ce qui s'y
trouve. C'est l'inverse de l'intuition, mais c'est ce qui garantit un dessin
assez grand sur un téléphone : une fenêtre de 520 unités sur 800, c'est un
dessin une fois et demie plus gros. Si six différences n'y tiennent pas, la
fenêtre s'élargit d'un cran.

Ce jeu se joue **à l'écran entier** (`plein: true` dans sa définition) : ni
bandeau, ni titre, ni défilement. Les deux cases vides sont posées d'abord, on
mesure la place réellement disponible, et la fenêtre prend ce format-là — sur
un téléphone elle est donc plus haute que large. Un enfant de quatre ans ne
fait pas défiler une page pour trouver le reste du jeu.

**Le coloriage** ne demande pas de dessins supplémentaires : le moteur sait
rendre n'importe quelle case **en mode contour** (`contour: true`), c'est-à-dire
en remplaçant tous les remplissages de couleur par du blanc et en ne gardant que
le trait d'encre. Une histoire de plus, c'est donc un coloriage de plus, sans
rien redessiner. L'enfant touche une zone, elle prend la couleur de la palette.

**Le puzzle** découpe la même case en morceaux grâce au cadrage libre du moteur
(`cadre`), chaque pièce étant simplement la même scène vue par une autre
fenêtre. On échange deux pièces en les touchant l'une après l'autre — pas de
glisser-déposer, qui demande une précision qu'on n'a pas à quatre ans.

**Le labyrinthe** est engendré à chaque partie (parcours en profondeur avec
retour arrière), donc jamais deux fois le même. On garde le doigt appuyé et on
avance case par case ; les murs arrêtent le trait au lieu de faire perdre.

Le Cover Flow, lui, calcule pour chaque pochette son **écart circulaire** à la
position courante : c'est ce qui le rend infini dans les deux sens, avec aussi peu
d'éléments que d'histoires.

---

## Note

Les histoires et les dessins de ce dépôt sont des créations originales faites à la
maison pour une seule enfant, en hommage aux personnages qu'elle aime. Ce ne sont pas
des produits officiels, et il n'y a derrière aucune intention commerciale.
