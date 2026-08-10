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
* **Un logo Kid Cartoon** présent partout, qui ramène à l'accueil d'un doigt
* **Deux rubriques** — Histoires et Jeux ; sous Histoires, les univers
  (Peppa Pig, La Reine des Neiges, Bluey, les Monsieur Madame, les cross-over,
  les copines… faciles à compléter)
* **Deux filtres** — par univers (les onglets) et par thème (Été, Amitié,
  Émotions, Grandir, Famille, Dehors, Nuit, Bêtises) ; les thèmes traversent
  les univers, et les onglets filtrent à l'intérieur d'un thème
* **Cover Flow infini** — on fait tourner les pochettes au doigt, ça boucle sans fin,
  avec le reflet façon iPod
* **Lecteur de BD** — une planche par page, bulles de dialogue, bruitages,
  navigation au doigt (swipe), aux flèches, ou avec les boutons
* **Lecture à voix haute** (bouton 🔊) via la synthèse vocale du téléphone
* **Reprise de lecture** — le site se souvient de la page où on s'est arrêté
  et marque les histoires déjà lues d'un ✓
* **Bouton 🎲** — une histoire au hasard
* **Quatre jeux** pour les 3-5 ans, avec les mêmes héros : relier chaque
  personnage à son objet, compter jusqu'à six, tracer au doigt les prénoms de
  la maison (Livia, Pablo, Maman, Papa, Mila, Antoine…) et chercher les six
  différences entre deux cases d'une histoire. Aucun texte à lire : tout est
  dit à voix haute.
* **Installable** sur l'écran d'accueil du téléphone (PWA légère)

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

Pablo apparaît aussi dans **Pablo veut faire pareil** (Peppa Pig, série *Grandir*).

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
# → dist/histoires-de-livia.html  (~170 Ko, aucune requête vers l'extérieur)
```

Le fichier est déjà présent dans `dist/` ; il suffit de relancer la commande après
avoir ajouté une histoire.

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
et `pablo`, le petit frère *(un bébé : plus petit, grosse tête, cheveux très
courts ; poses `stand`, `sit`, `wave`, `armsup`, `hold`, `quatrepattes`)*

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
`cube`, `tourcubes`, `cabane` *(`toit: '#bfe8f7'` pour le toit de glace,
`ecroulee: true` pour le tas de branches)*

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
  cover: { /* une scène */ },
  stories: [ /* … */ ]
}
```

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
assets/js/games.js          les quatre jeux et leur cadre commun
assets/js/app.js            navigation, couverture, Cover Flow, lecteur
assets/fonts/               Fredoka et Literata (SIL Open Font License 1.1)
assets/img/grain.png        le grain du papier, en surimpression
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
personnage retourné, une humeur changée, un élément ajouté), en veillant à ne
poser qu'une retouche par élément et à les espacer. Ajouter une planche au jeu
tient donc en une ligne dans `PLANCHES` : `{ u: 'bluey', s: 'crabes', p: 6 }`.

Le Cover Flow, lui, calcule pour chaque pochette son **écart circulaire** à la
position courante : c'est ce qui le rend infini dans les deux sens, avec aussi peu
d'éléments que d'histoires.

---

## Note

Les histoires et les dessins de ce dépôt sont des créations originales faites à la
maison pour une seule enfant, en hommage aux personnages qu'elle aime. Ce ne sont pas
des produits officiels, et il n'y a derrière aucune intention commerciale.
