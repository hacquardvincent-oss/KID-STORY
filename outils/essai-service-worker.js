/* Teste utilisable() de sw.js directement : c'est la fonction qui empêche
   une page de connexion Cloudflare Access d'être mise en cache à la place
   d'un script de l'app. */
const fs = require('fs');
const src = fs.readFileSync('/home/user/KID-STORY/sw.js', 'utf8');

/* on charge sw.js avec juste assez de self pour qu'il s'évalue */
const self = { addEventListener: function () {}, location: { origin: 'https://x' },
               skipWaiting: function () {}, clients: { claim: function () {} } };
const caches = { open: function () { return Promise.resolve(); }, keys: function () { return Promise.resolve([]); } };
const utilisable = new Function('self', 'caches', src + '\nreturn utilisable;')(self, caches);

function rep(o) {
  return { ok: o.ok !== false, status: o.status === undefined ? 200 : o.status,
           type: o.type || 'basic', redirected: !!o.redirected,
           headers: { get: function (k) { return k.toLowerCase() === 'content-type' ? (o.ct || null) : null; } } };
}
function req(o) { return { mode: o.mode || 'no-cors', destination: o.destination || '' }; }

const CAS = [
  ['un vrai script',                     req({destination:'script'}), rep({ct:'text/javascript; charset=utf-8'}),      true],
  ['une vraie feuille de style',         req({destination:'style'}),  rep({ct:'text/css'}),                            true],
  ['une vraie police',                   req({destination:'font'}),   rep({ct:'font/woff2'}),                          true],
  ['le manifeste',                       req({destination:'manifest'}), rep({ct:'application/manifest+json'}),         true],
  ['la navigation, qui attend du HTML',  req({mode:'navigate',destination:'document'}), rep({ct:'text/html; charset=utf-8'}), true],
  ['PAGE DE CONNEXION à la place d\'un script', req({destination:'script'}), rep({ct:'text/html; charset=utf-8'}),     false],
  ['PAGE DE CONNEXION à la place du CSS',       req({destination:'style'}),  rep({ct:'TEXT/HTML'}),                    false],
  ['une redirection, même vers du bon',  req({destination:'script'}), rep({ct:'text/javascript', redirected:true}),    false],
  ['une réponse opaque (redirection inter-origine)', req({destination:'script'}), rep({type:'opaque', status:0, ok:false}), false],
  ['un 404',                             req({destination:'script'}), rep({ok:false, status:404, ct:'text/html'}),     false],
  ['un 500',                             req({destination:'script'}), rep({ok:false, status:500, ct:'text/javascript'}), false],
  ['pas de réponse du tout',             req({destination:'script'}), null,                                            false],
  ['sans content-type, un script',       req({destination:'script'}), rep({ct:null}),                                  true]
];

let ko = 0;
for (const [nom, q, r, attendu] of CAS) {
  const eu = utilisable(q, r);
  const bon = eu === attendu;
  if (!bon) ko++;
  console.log((bon ? '  ok   ' : '  ÉCHEC') + '  ' + (attendu ? 'à garder   ' : 'à refuser  ') + nom +
    (bon ? '' : '   → a répondu ' + eu));
}
console.log('\n' + CAS.length + ' cas, ' + ko + ' échec(s)');
process.exit(ko ? 1 : 0);
