# Mettre l'app en ligne, en privé

Le dépôt est privé, et il doit le rester : les personnages viennent de dessins
animés qui ne nous appartiennent pas, et cette app est un cadeau pour une seule
enfant. Il faut donc une URL qui marche depuis n'importe quel téléphone, mais
que seules les personnes autorisées puissent ouvrir.

**Cloudflare Pages** publie le site depuis le dépôt privé. **Cloudflare Access**
met une porte devant. Les deux sont gratuits à cette échelle.

> **À lire avant de commencer.** Access demande une **connexion**. Une enfant de
> quatre ans ne se connecte pas. Ce qui la protège d'un écran de connexion un
> soir de vacances, ce n'est pas Access : c'est l'app installée sur son
> téléphone, qui fonctionne hors connexion, et le fichier
> `dist/histoires-de-livia.html` posé à côté. Garde les deux. Access sert à toi,
> à sa mère, à sa grand-mère — aux adultes qui ouvrent le site depuis un
> appareil neuf.

---

## 1. Cloudflare Pages

Il faut un compte Cloudflare (gratuit, sans carte).

1. **dash.cloudflare.com** → **Workers & Pages** → **Create** → onglet **Pages**
   → **Connect to Git**.
2. Autoriser Cloudflare sur GitHub. Au moment de choisir les dépôts, prendre
   **Only select repositories** et cocher **KID-STORY**. Un dépôt privé
   fonctionne : c'est tout l'intérêt.
3. Réglages de construction :

   | Champ | Valeur |
   |---|---|
   | Production branch | `claude/stories-gallery-site-4zdcps` (ou `main` après fusion) |
   | Framework preset | **None** |
   | Build command | `node outils/construire-deploiement.js` |
   | Build output directory | `public` |
   | Root directory | *(vide)* |

   Aucune variable d'environnement, aucune dépendance à installer : le script
   n'utilise que la bibliothèque standard de Node.

4. **Save and Deploy.** Une minute plus tard le site répond sur
   `https://<nom-du-projet>.pages.dev`.

Chaque `git push` sur la branche de production reconstruit et republie tout
seul. Les autres branches donnent des aperçus sur leur propre URL — pratique
pour vérifier une fournée d'histoires avant de la montrer.

### Ce que la construction publie, et ce qu'elle laisse

`outils/construire-deploiement.js` ne copie dans `public/` que ce que l'app a
besoin de servir : `index.html`, `manifest.webmanifest`, `sw.js` et `assets/`.
Restent délibérément à terre : `outils/` (les outils d'écriture), `dist/` (2,8
Mo de doublon), le README et l'historique Git. Rien de secret là-dedans, mais un
hébergeur n'a pas à servir ce qu'on ne lui demande pas.

Le script écrit aussi `public/_headers`, que Cloudflare lit pour poser les
en-têtes HTTP. Deux choix y sont délibérés et expliqués en commentaire dans le
script :

* **`Cache-Control: no-cache` partout.** Les fichiers portent des noms fixes
  (`stories.js`, et non `stories.a1b2c3.js`). Un cache long les figerait, et une
  nouvelle version du service worker réinstallerait les anciens fichiers depuis
  le cache du navigateur sans jamais voir la mise à jour. `no-cache` veut dire
  « revalide avant de servir », pas « ne garde rien » : le navigateur reçoit un
  304 vide. Et entre deux mises à jour, c'est le service worker qui sert tout
  depuis le cache local : ces en-têtes ne concernent que la première visite.
* **Une politique de sécurité serrée**, parce que l'app ne charge rien de
  l'extérieur — ni police, ni script, ni image. `'unsafe-inline'` reste
  nécessaire deux fois, pour le script qui enregistre le service worker et pour
  le `mix-blend-mode` du grain de papier.

Le script refuse de finir si le service worker réclame un fichier qui n'a pas
été copié : sans ce garde-fou, l'installation échouerait en silence sur le
téléphone et l'app perdrait son mode hors connexion.

---

## 2. Cloudflare Access

Sans cette étape, l'URL `.pages.dev` est **publique**. C'est elle qui ferme la
porte.

1. Dans le menu de gauche : **Zero Trust**. Au premier passage, Cloudflare
   demande de choisir un nom d'équipe (`<équipe>.cloudflareaccess.com`) et un
   plan — prendre **Free**, qui couvre jusqu'à 50 personnes.
2. **Access** → **Applications** → **Add an application** → **Self-hosted**.
3. Configuration :

   | Champ | Valeur |
   |---|---|
   | Application name | `Les histoires de Livia` |
   | Session duration | **1 month** (le maximum) |
   | Public hostname | le domaine `*.pages.dev` du projet |

   La durée de session est le réglage qui compte le plus : c'est le temps avant
   qu'un adulte doive se reconnecter. Un mois, c'est douze connexions par an.

4. **Policies** → **Add a policy** :

   | Champ | Valeur |
   |---|---|
   | Policy name | `La famille` |
   | Action | **Allow** |
   | Include | **Emails** → les adresses autorisées, une par ligne |

   Avec le seul fournisseur d'identité activé par défaut, la connexion se fait
   par **code à usage unique** : Cloudflare envoie un chiffre par mail, on le
   recopie une fois, et c'est bon pour un mois. Si tu préfères un seul geste,
   active **Google** ou **Apple** dans *Settings → Authentication* : sur un
   téléphone déjà connecté à ce compte, la porte s'ouvre d'un doigt — c'est ce
   que je recommande pour les grands-parents.

5. **Save**. Ouvrir l'URL dans une fenêtre privée pour vérifier qu'elle demande
   bien à se connecter. **Tant que cette vérification n'est pas faite, considère
   le site comme public.**

### Un nom plus court (facultatif)

Si tu as un nom de domaine chez Cloudflare, **Custom domains** dans le projet
Pages permet `histoires.mondomaine.fr`. Plus facile à taper, et ça découple
l'adresse de l'hébergeur si tu déménages un jour.

---

## 3. Le service worker derrière une porte

C'est le point technique qui ne se devine pas, et il est traité dans le code.

Quand une session Access expire, le réseau ne répond pas par une erreur : il
répond par **la page de connexion**, parfois avec un franc code 200. Un service
worker naïf mettrait cette page en cache **à la place de `stories.js`**, et
l'app resterait cassée jusqu'à la mise à jour suivante — y compris hors
connexion, donc y compris au moment où l'enfant en a besoin.

`sw.js` ne garde donc une réponse que si elle est bien ce qui avait été demandé :
pas de redirection sur un fichier de même origine, pas de réponse opaque, et pas
de HTML là où un script était attendu. La règle tient en une fonction,
`utilisable()`, et elle est testée :

```bash
node outils/essai-service-worker.js   # 13 cas
```

Conséquence voulue : si la session expire, l'enfant **ne voit rien**. L'app
s'ouvre sur son cache et les histoires se lisent. L'adulte qui ouvre le site sur
un autre appareil tombe, lui, sur l'écran de connexion.

---

## 4. Publier une mise à jour

```bash
node outils/verifier-compo.js && node outils/verifier-langue.js \
  && node outils/verifier-choix.js && node outils/traductions.js
# changer VERSION dans sw.js  (livia-AAAA-MM-JJx → x+1)
node outils/construire-page-unique.js      # refait dist/, pour le hors-ligne
git add -A && git commit && git push
```

**Changer `VERSION` dans `sw.js` n'est pas optionnel.** C'est le seul signal qui
dit aux téléphones de jeter leur cache et de reprendre les fichiers. Sans ça,
Cloudflare sert bien la nouvelle version, et l'app continue d'afficher
l'ancienne — indéfiniment.

Sur le téléphone, la mise à jour arrive à la deuxième ouverture : la première
réinstalle le cache en arrière-plan.

---

## Ce que ça coûte

Rien, à cette échelle. Cloudflare Pages : 500 constructions par mois et du
trafic illimité sur le plan gratuit. Access : 50 personnes. Le site pèse 3 Mo,
dont 2,6 de JavaScript — surtout les 350 histoires, qui sont du texte et
compressent bien.

## Si tu préfères ne rien héberger

`dist/histoires-de-livia.html` est tout le site dans un fichier : les 350
histoires, les onze jeux, les trois langues, les polices et les dessins, et zéro
requête vers l'extérieur. Posé sur le téléphone, il s'ouvre et marche pour
toujours, sans compte, sans réseau et sans hébergeur. C'est la version qui
survivra à tout le reste.
