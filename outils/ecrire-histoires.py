#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
dsl.py — écrire des histoires sans écrire de JavaScript.

Une histoire tient en quelques lignes :

    STORY frozen|ete-glace
    TITLE Le jour où la glace a fondu
    TITLE_EN The day the ice melted
    TITLE_ES El día en que el hielo se derritió
    SUB Ce qui compte, c'est après
    SUB_EN What matters is afterwards
    SUB_ES Lo que importa es después
    META Été|Été,Amitié|5
    COVER snow|day|elsa@320,512,1.1|livia@570,514,1.1
    PAGE snow|day|elsa@300,508,1.1,pose=point|livia@570,512,1.1
    BUB 40,22,330|Tu viens voir ?|300,240
    FR  ...
    ES  ...
    EN  ...

et ce script la transforme en l'objet JavaScript exact qu'attend
stories.js — mêmes clés, même indentation, mêmes guillemets.

    python3 dsl.py lot.txt            → vérifie et affiche le JS
    python3 dsl.py lot.txt --inserer  → l'insère dans assets/js/stories.js
"""
import json
import re
import sys
import os

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STORIES = os.path.join(RACINE, 'assets', 'js', 'stories.js')

DECORS = {'beach', 'sea', 'garden', 'hill', 'camp', 'forest', 'creek',
          'snow', 'village', 'road', 'bedroom', 'plain'}
HEURES = {'day', 'sunset', 'night', 'gris'}
POSES = {'sit', 'jump', 'point', 'wave', 'run', 'sleep', 'hold', 'magic',
         'porte', 'quatrepattes', 'shrug', 'swim', 'armsup'}
HUMEURS = {'happy', 'sad', 'fache', 'wow'}


def erreur(ligne, n, message):
    raise SystemExit('ligne %d : %s\n    %s' % (n, message, ligne))


def lire_item(bout, ligne, n):
    """ 'elsa@300,508,1.1,pose=point' → {t, x, y, s, pose} """
    if '@' not in bout:
        erreur(ligne, n, 'un personnage s\'écrit nom@x,y,taille : « %s »' % bout)
    nom, reste = bout.split('@', 1)
    morceaux = reste.split(',')
    if len(morceaux) < 3:
        erreur(ligne, n, 'il manque x, y ou la taille : « %s »' % bout)
    it = {'t': nom.strip()}
    try:
        it['x'] = float(morceaux[0])
        it['y'] = float(morceaux[1])
        it['s'] = float(morceaux[2])
    except ValueError:
        erreur(ligne, n, 'x, y et taille doivent être des nombres : « %s »' % bout)
    for sup in morceaux[3:]:
        sup = sup.strip()
        if not sup:
            continue
        if '=' not in sup:
            erreur(ligne, n, 'option inconnue « %s » (attendu pose=, mood=, flip=, rot=)' % sup)
        cle, val = sup.split('=', 1)
        cle, val = cle.strip(), val.strip()
        if cle == 'pose':
            if val not in POSES:
                erreur(ligne, n, 'pose inconnue « %s »' % val)
            it['pose'] = val
        elif cle == 'mood':
            if val not in HUMEURS:
                erreur(ligne, n, 'humeur inconnue « %s »' % val)
            it['mood'] = val
        elif cle == 'flip':
            it['flip'] = True
        elif cle == 'rot':
            it['rot'] = float(val)
        else:
            erreur(ligne, n, 'option inconnue « %s »' % cle)
    return it


def lire_scene(reste, ligne, n):
    champs = [c.strip() for c in reste.split('|')]
    if len(champs) < 2:
        erreur(ligne, n, 'une scène s\'écrit décor|heure|personnages…')
    sc = {'bg': champs[0]}
    if sc['bg'] not in DECORS:
        erreur(ligne, n, 'décor inconnu « %s » (connus : %s)' % (sc['bg'], ', '.join(sorted(DECORS))))
    if champs[1] and champs[1] != 'day':
        if champs[1] not in HEURES:
            erreur(ligne, n, 'heure inconnue « %s »' % champs[1])
        sc['time'] = champs[1]
    items = [lire_item(b, ligne, n) for b in champs[2:] if b]
    if items:
        sc['items'] = items
    return sc


def parser(texte):
    histoires = []
    cour = None
    page = None
    scene = None   # la dernière scène ouverte : une page, ou la une
    for n, ligne in enumerate(texte.split('\n'), 1):
        nu = ligne.strip()
        if not nu or nu.startswith('#'):
            continue
        if ' ' in nu:
            mot, reste = nu.split(' ', 1)
        else:
            mot, reste = nu, ''
        mot = mot.upper()
        reste = reste.strip()

        if mot == 'STORY':
            if '|' not in reste:
                erreur(ligne, n, 'STORY univers|identifiant')
            u, i = reste.split('|', 1)
            cour = {'univers': u.strip(), 'id': i.strip(), 'pages': []}
            histoires.append(cour)
            page = None
            scene = None
            bloc = None
            continue
        if cour is None:
            erreur(ligne, n, 'il faut commencer par une ligne STORY')

        if mot in ('TITLE', 'TITLE_EN', 'TITLE_ES', 'SUB', 'SUB_EN', 'SUB_ES'):
            cour[{'TITLE': 'title', 'TITLE_EN': 'title_en', 'TITLE_ES': 'title_es',
                  'SUB': 'subtitle', 'SUB_EN': 'subtitle_en', 'SUB_ES': 'subtitle_es'}[mot]] = reste
        elif mot == 'META':
            m = [c.strip() for c in reste.split('|')]
            if len(m) != 3:
                erreur(ligne, n, 'META étiquette|thème,thème|minutes')
            cour['tag'] = m[0]
            cour['themes'] = [t.strip() for t in m[1].split(',') if t.strip()]
            cour['minutes'] = int(m[2])
        elif mot == 'COVER':
            cour['cover'] = lire_scene(reste, ligne, n)
            scene = cour['cover']
        elif mot == 'BLOC':
            # Une histoire à choix n'est pas une suite de pages : c'est un
            # réseau de blocs, et chaque bloc se termine soit par un choix,
            # soit par une fin.
            if not re.match(r'^[a-z0-9_]+$', reste):
                erreur(ligne, n, 'BLOC identifiant (minuscules, chiffres, souligné)')
            cour.setdefault('blocs', {})
            if reste in cour['blocs']:
                erreur(ligne, n, 'bloc « %s » déjà ouvert' % reste)
            bloc = {'pages': []}
            cour['blocs'][reste] = bloc
            cour.setdefault('ordre', []).append(reste)
            if 'debut' not in cour:
                cour['debut'] = reste
            page = None
            scene = None
        elif mot == 'PAGE':
            page = {'scene': lire_scene(reste, ligne, n)}
            (bloc['pages'] if bloc is not None else cour['pages']).append(page)
            scene = page['scene']
        elif mot in ('BACK', 'FRONT'):
            if scene is None:
                erreur(ligne, n, '%s doit suivre une PAGE ou un COVER' % mot)
            scene[mot.lower()] = [lire_item(b.strip(), ligne, n)
                                  for b in reste.split('|') if b.strip()]
        elif mot == 'BUB':
            if scene is None:
                erreur(ligne, n, 'BUB doit suivre une PAGE ou un COVER')
            m = [c.strip() for c in reste.split('|')]
            if len(m) != 3:
                erreur(ligne, n, 'BUB x,y,largeur|texte|tx,ty')
            xy = m[0].split(',')
            tt = m[2].split(',')
            scene.setdefault('bubbles', []).append({
                'x': float(xy[0]), 'y': float(xy[1]), 'w': float(xy[2]),
                't': m[1], 'tx': float(tt[0]), 'ty': float(tt[1])})
        elif mot == 'SFX':
            if scene is None:
                erreur(ligne, n, 'SFX doit suivre une PAGE ou un COVER')
            m = [c.strip() for c in reste.split('|')]
            if len(m) != 2:
                erreur(ligne, n, 'SFX x,y,taille,rotation,couleur|TEXTE')
            v = m[0].split(',')
            scene.setdefault('sfx', []).append({
                't': m[1], 'x': float(v[0]), 'y': float(v[1]),
                'fs': float(v[2]), 'rot': float(v[3]), 'color': v[4].strip()})
        elif mot == 'CHOIX':
            if page is None:
                erreur(ligne, n, 'CHOIX doit suivre la dernière PAGE d\'un bloc')
            options = []
            for bout in reste.split(';'):
                bout = bout.strip()
                if not bout:
                    continue
                ch = [c.strip() for c in bout.split('|')]
                if len(ch) < 5:
                    erreur(ligne, n, 'une option s\'écrit dessin|mot|mot_es|mot_en|vers[|nuit]')
                o = {'v': ch[0], 'mot': ch[1], 'mot_es': ch[2], 'mot_en': ch[3], 'vers': ch[4]}
                if len(ch) > 5 and ch[5] == 'nuit':
                    o['fond'] = 'nuit'
                options.append(o)
            if len(options) < 2:
                erreur(ligne, n, 'un choix demande au moins deux options')
            page['choix'] = {'options': options}
        elif mot in ('FR', 'ES', 'EN'):
            if page is None:
                erreur(ligne, n, '%s doit suivre une PAGE' % mot)
            cle = {'FR': 'text', 'ES': 'es', 'EN': 'en'}[mot]
            if cle in page:
                page[cle] += ' ' + reste
            else:
                page[cle] = reste
        else:
            erreur(ligne, n, 'mot-clé inconnu « %s »' % mot)
    return histoires


def verifier(histoires):
    soucis = []
    vus = set()
    for h in histoires:
        ou = h['univers'] + '/' + h['id']
        if ou in vus:
            soucis.append(ou + ' : identifiant en double dans le lot')
        vus.add(ou)
        for cle in ('title', 'title_en', 'title_es', 'subtitle', 'subtitle_en',
                    'subtitle_es', 'tag', 'themes', 'minutes', 'cover'):
            if cle not in h:
                soucis.append(ou + ' : il manque ' + cle)
        if not re.match(r'^[a-z0-9-]+$', h['id']):
            soucis.append(ou + " : l'identifiant doit être en minuscules sans accent")
        if 'blocs' in h:
            soucis.extend(verifier_graphe(h, ou))
            continue
        if len(h['pages']) < 5:
            soucis.append('%s : %d pages seulement' % (ou, len(h['pages'])))
        for i, p in enumerate(h['pages'], 1):
            for cle, nom in (('text', 'le français'), ('es', "l'espagnol"), ('en', "l'anglais")):
                if not p.get(cle):
                    soucis.append('%s page %d : il manque %s' % (ou, i, nom))
            if not p['scene'].get('items'):
                soucis.append('%s page %d : aucun personnage' % (ou, i))
    return soucis



def verifier_graphe(h, ou):
    """Un réseau d'histoire à choix doit tenir debout : chaque « vers »
       désigne un bloc qui existe, aucun bloc n'est orphelin, tous les
       chemins font la même longueur, et un choix ne se pose que sur la
       dernière page d'un bloc."""
    soucis = []
    blocs = h['blocs']
    for nom, b in blocs.items():
        if not b['pages']:
            soucis.append('%s/%s : bloc vide' % (ou, nom))
            continue
        for i, p in enumerate(b['pages']):
            dernier = (i == len(b['pages']) - 1)
            if 'choix' in p and not dernier:
                soucis.append('%s/%s : un choix au milieu du bloc (page %d)' % (ou, nom, i + 1))
            for cle, nomlangue in (('text', 'le français'), ('es', "l'espagnol"), ('en', "l'anglais")):
                if not p.get(cle):
                    soucis.append('%s/%s p%d : il manque %s' % (ou, nom, i + 1, nomlangue))
        fin = b['pages'][-1]
        for o in fin.get('choix', {}).get('options', []):
            if o['vers'] not in blocs:
                soucis.append('%s/%s : « vers %s » ne mène nulle part' % (ou, nom, o['vers']))

    # tous les blocs doivent être atteignables depuis le début
    vus, pile = set(), [h['debut']]
    while pile:
        nom = pile.pop()
        if nom in vus or nom not in blocs:
            continue
        vus.add(nom)
        for o in blocs[nom]['pages'][-1].get('choix', {}).get('options', []):
            pile.append(o['vers'])
    for nom in blocs:
        if nom not in vus:
            soucis.append('%s/%s : bloc orphelin, aucun choix n\'y mène' % (ou, nom))

    # toutes les lectures doivent faire le même nombre de pages
    longueurs = set()

    def marcher(nom, deja, chemin):
        if nom in chemin:
            soucis.append('%s : boucle sur « %s »' % (ou, nom))
            return
        b = blocs[nom]
        total = deja + len(b['pages'])
        opts = b['pages'][-1].get('choix', {}).get('options', [])
        if not opts:
            longueurs.add(total)
            return
        for o in opts:
            if o['vers'] in blocs:
                marcher(o['vers'], total, chemin + [nom])

    marcher(h['debut'], 0, [])
    if len(longueurs) > 1:
        soucis.append('%s : les lectures n\'ont pas la même longueur (%s pages)'
                      % (ou, ', '.join(str(x) for x in sorted(longueurs))))
    return soucis


# ------------------------------------------------------------------
# l'écriture du JavaScript : on imite la main, pas une machine
# ------------------------------------------------------------------
def js_texte(s):
    """Une chaîne JS. On préfère les apostrophes doubles, sauf si le texte
       en contient — c'est la règle que suit déjà stories.js."""
    if "'" not in s:
        return "'" + s.replace('\\', '\\\\') + "'"
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'


def js_nombre(v):
    if v == int(v):
        return str(int(v))
    t = ('%g' % v)
    return t[1:] if t.startswith('0.') else t


def js_item(it):
    bouts = ["t: '%s'" % it['t'], 'x: ' + js_nombre(it['x']),
             'y: ' + js_nombre(it['y']), 's: ' + js_nombre(it['s'])]
    if 'pose' in it:
        bouts.append("pose: '%s'" % it['pose'])
    if 'mood' in it:
        bouts.append("mood: '%s'" % it['mood'])
    if it.get('flip'):
        bouts.append('flip: true')
    if 'rot' in it:
        bouts.append('rot: ' + js_nombre(it['rot']))
    return '{ ' + ', '.join(bouts) + ' }'


def js_scene(sc, ind):
    b = ' ' * ind
    lignes = []
    tete = "bg: '%s'" % sc['bg']
    if 'time' in sc:
        tete += ", time: '%s'" % sc['time']
    lignes.append(b + tete + ',')
    for couche in ('back', 'items', 'front'):
        if couche not in sc:
            continue
        lot = sc[couche]
        if len(lot) == 1:
            lignes.append(b + couche + ': [' + js_item(lot[0]) + '],')
        else:
            lignes.append(b + couche + ': [')
            for k, it in enumerate(lot):
                lignes.append(b + '  ' + js_item(it) + ('' if k == len(lot) - 1 else ','))
            lignes.append(b + '],')
    for bu in sc.get('bubbles', []):
        lignes.append(b + 'bubbles: [{ x: %s, y: %s, w: %s, t: %s, tx: %s, ty: %s }],' % (
            js_nombre(bu['x']), js_nombre(bu['y']), js_nombre(bu['w']),
            js_texte(bu['t']), js_nombre(bu['tx']), js_nombre(bu['ty'])))
    for sf in sc.get('sfx', []):
        lignes.append(b + "sfx: [{ t: %s, x: %s, y: %s, fs: %s, rot: %s, color: '%s' }]," % (
            js_texte(sf['t']), js_nombre(sf['x']), js_nombre(sf['y']),
            js_nombre(sf['fs']), js_nombre(sf['rot']), sf['color']))
    lignes[-1] = lignes[-1].rstrip(',')
    return '\n'.join(lignes)


def js_histoire(h, numero):
    L = []
    L.append("      /* ---------- %d : %s ---------- */" % (numero, h['title'].lower()))
    L.append('      {')
    L.append("        id: '%s'," % h['id'])
    L.append('        title: %s,' % js_texte(h['title']))
    L.append('        title_en: %s,' % js_texte(h['title_en']))
    L.append('        title_es: %s,' % js_texte(h['title_es']))
    L.append('        subtitle: %s,' % js_texte(h['subtitle']))
    L.append('        subtitle_en: %s,' % js_texte(h['subtitle_en']))
    L.append('        subtitle_es: %s,' % js_texte(h['subtitle_es']))
    L.append("        tag: '%s'," % h['tag'])
    L.append('        themes: [%s],' % ', '.join("'%s'" % t for t in h['themes']))
    L.append('        minutes: %d,' % h['minutes'])
    if 'blocs' in h:
        L.append("        debut: '%s'," % h['debut'])
    L.append('        cover: {')
    L.append(js_scene(h['cover'], 10))
    L.append('        },')
    if 'blocs' in h:
        L.append('        blocs: {')
        noms = h['ordre']
        for k, nom in enumerate(noms):
            L.append('')
            L.append('          %s: {' % nom)
            L.append('            pages: [')
            L.extend(js_pages(h['blocs'][nom]['pages'], 14))
            L.append('            ]')
            L.append('          }' + ('' if k == len(noms) - 1 else ','))
        L.append('        }')
        L.append('      }')
        return '\n'.join(L)
    L.append('        pages: [')
    L.extend(js_pages(h['pages'], 12))
    L.append('        ]')
    L.append('      }')
    return '\n'.join(L)


def js_pages(pages, ind):
    """Les pages d'une histoire ou d'un bloc, à l'indentation voulue."""
    b = ' ' * ind
    L = []
    for k, p in enumerate(pages):
        L.append(b + '{')
        L.append(b + '  scene: {')
        L.append(js_scene(p['scene'], ind + 4))
        L.append(b + '  },')
        L.append(b + '  text: %s,' % js_texte(p['text']))
        L.append(b + '  es: %s,' % js_texte(p['es']))
        virgule = ',' if 'choix' in p else ''
        L.append(b + '  en: %s%s' % (js_texte(p['en']), virgule))
        if 'choix' in p:
            L.append(b + '  choix: {')
            L.append(b + '    options: [')
            opts = p['choix']['options']
            for j, o in enumerate(opts):
                bouts = ["v: '%s'" % o['v'], 'mot: ' + js_texte(o['mot']),
                         'mot_es: ' + js_texte(o['mot_es']), 'mot_en: ' + js_texte(o['mot_en']),
                         "vers: '%s'" % o['vers']]
                if 'fond' in o:
                    bouts.append("fond: '%s'" % o['fond'])
                L.append(b + '      { ' + ', '.join(bouts) + ' }' + ('' if j == len(opts) - 1 else ','))
            L.append(b + '    ]')
            L.append(b + '  }')
        L.append(b + '}' + ('' if k == len(pages) - 1 else ','))
    return L


# ------------------------------------------------------------------
# l'insertion : on se glisse à la fin du tableau "stories" de l'univers
# ------------------------------------------------------------------
def inserer(histoires):
    src = open(STORIES, encoding='utf-8').read()
    par_univers = {}
    for h in histoires:
        par_univers.setdefault(h['univers'], []).append(h)

    for univers, lot in par_univers.items():
        marque = "\n    id: '%s',\n" % univers
        debut = src.find(marque)
        if debut < 0:
            raise SystemExit('univers introuvable : ' + univers)
        # la fin du tableau stories de cet univers : la ligne "    ]" qui
        # précède le "  }," fermant l'univers
        i = src.find('\n    stories: [', debut)
        if i < 0:
            raise SystemExit('tableau stories introuvable pour ' + univers)
        prof = 0
        j = src.index('[', i)
        k = j
        while True:
            if src[k] == '[':
                prof += 1
            elif src[k] == ']':
                prof -= 1
                if prof == 0:
                    break
            k += 1
        # k pointe sur le ] fermant. On compte les histoires déjà là.
        bloc = src[j:k]
        deja = len(re.findall(r"\n      \{\n        id: '", bloc))
        morceaux = []
        for n, h in enumerate(lot, deja + 1):
            morceaux.append(js_histoire(h, n))
        avant = src[:k].rstrip()
        if not avant.endswith(','):
            avant += ','
        src = avant + '\n\n' + ',\n\n'.join(morceaux) + '\n' + src[k:]

    open(STORIES, 'w', encoding='utf-8').write(src)


if __name__ == '__main__':
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    brut = open(sys.argv[1], encoding='utf-8').read()
    lot = parser(brut)
    soucis = verifier(lot)
    if soucis:
        print('\n'.join('  ✗ ' + s for s in soucis))
        raise SystemExit('%d souci(s) — rien n\'a été écrit.' % len(soucis))
    def pages(h):
        if 'blocs' in h:
            return sum(len(b['pages']) for b in h['blocs'].values())
        return len(h['pages'])
    print('%d histoire(s), %d page(s)' % (len(lot), sum(pages(h) for h in lot)))
    if '--inserer' in sys.argv:
        inserer(lot)
        print('inséré dans ' + STORIES)
    elif '--js' in sys.argv:
        k = int(sys.argv[sys.argv.index('--js') + 1]) if len(sys.argv) > sys.argv.index('--js') + 1 and sys.argv[sys.argv.index('--js') + 1].isdigit() else 0
        print(js_histoire(lot[k], 99))
