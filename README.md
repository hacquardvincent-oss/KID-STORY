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

* **Une couverture** — le site s'ouvre sur la une du mois : gros titre, illustration
  rassemblant tous les personnages, pastille du nombre d'histoires, et le mois
  courant qui se met à jour tout seul
* **Menu des univers** — Peppa Pig, La Reine des Neiges… (facile d'en rajouter)
* **Cover Flow infini** — on fait tourner les pochettes au doigt, ça boucle sans fin,
  avec le reflet façon iPod
* **Lecteur de BD** — une planche par page, bulles de dialogue, bruitages,
  navigation au doigt (swipe), aux flèches, ou avec les boutons
* **Lecture à voix haute** (bouton 🔊) via la synthèse vocale du téléphone
* **Reprise de lecture** — le site se souvient de la page où on s'est arrêté
  et marque les histoires déjà lues d'un ✓
* **Bouton 🎲** — une histoire au hasard
* **Trois jeux** pour les 3-5 ans, avec les mêmes héros : relier chaque
  personnage à son objet, compter jusqu'à six, et tracer les lettres de son
  prénom au doigt. Aucun texte à lire : tout est dit à voix haute.
* **Installable** sur l'écran d'accueil du téléphone (PWA légère)

### Les histoires déjà écrites

**Peppa Pig** (spécial vacances d'été)

| Histoire | Planches |
|---|---|
| Livia et Peppa à la plage | 9 |
| Le camping sous les étoiles | 9 |
| La grande journée à la piscine | 8 |
| Le cerf-volant de l'été | 8 |

**La Reine des Neiges**

| Histoire | Planches |
|---|---|
| Un été à Arendelle | 9 |
| La nuit des étoiles glacées | 8 |

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
  tag: 'Été',
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
  time: 'sunset',       // day (défaut) | morning | sunset | night
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
`beach`, `sea`, `garden`, `hill`, `camp`, `forest`, `snow`, `village`, `road`,
`bedroom`, `plain`

**Personnages**
`peppa`, `george`, `mummy`, `daddy`, `suzy`, `livia`, `liviaPrincess`, `elsa`, `anna`,
`olaf`, `dino`

**Poses** (`pose`)
`stand`, `wave`, `armsup`, `jump`, `run`, `sit`, `point`, `hold`, `shrug`, `swim`,
`magic` *(pour Elsa)*

**Humeurs** (`mood`)
`happy` (défaut), `wow`, `sad`, `sleep`

**Objets et décors secondaires**
`sun`, `moon`, `cloud`, `palm`, `parasol`, `ball`, `sandcastle`, `bucket`, `spade`,
`starfish`, `shell`, `seagull`, `crab`, `towel`, `icecream`, `watermelon`, `float`,
`tent`, `campfire`, `log`, `tree`, `pine`, `snowpine`, `bush`, `flower`, `butterfly`,
`kite`, `tether` *(la ficelle d'un cerf-volant)*, `boat`, `car`, `suitcase`,
`marshmallow`, `hedgehog`, `snowball`, `star`, `snowflake`, `rock`, `fish`, `slide`,
`pool`, `sled`, `castleIce`, `house`, `sparkle`, `splash`, `lantern`, `balloon`,
`mudpuddle`, `wave`, `aurora`

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
assets/js/games.js          les trois jeux et leur cadre commun
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

Les adresses suivent la lecture : `#/` la couverture, `#/sommaire` les univers,
`#/u/peppa` le présentoir d'un univers, `#/u/peppa/plage` une histoire ouverte,
`#/jeux/compter` un jeu. Chaque page a donc son lien direct, partageable tel quel.

Les jeux partagent un même cadre (`jouer()` dans `games.js`) qui gère les manches,
les étoiles et les félicitations ; un jeu n'a qu'à fournir sa fonction `manche()`
et appeler `api.reussi()`. Trois principes les gouvernent : on ne perd jamais, on
n'a rien à lire, et une manche se joue en un seul geste.

Le Cover Flow, lui, calcule pour chaque pochette son **écart circulaire** à la
position courante : c'est ce qui le rend infini dans les deux sens, avec aussi peu
d'éléments que d'histoires.

---

## Note

Les histoires et les dessins de ce dépôt sont des créations originales faites à la
maison pour une seule enfant, en hommage aux personnages qu'elle aime. Ce ne sont pas
des produits officiels, et il n'y a derrière aucune intention commerciale.
