/* Stamp the service-worker cache version with a hash of the precached app
   shell, so every deploy that changes a cached file refreshes installed PWAs
   without a manual CACHE_VERSION bump. Run in CI right before publishing. */
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const VERSION_PATTERN = /const CACHE_VERSION = '([^']*)';/;

function coreEntries(source) {
  const body = source.match(/const CORE = \[([\s\S]*?)\];/);
  if (!body) throw new Error('CORE precache list not found in sw.js');
  return [...body[1].matchAll(/'([^']+)'/g)].map(match => match[1]);
}

function shellVersion(appDir, source) {
  const base = source.match(VERSION_PATTERN)?.[1].split('-')[0];
  if (!base) throw new Error('CACHE_VERSION not found in sw.js');
  const hash = crypto.createHash('sha256');
  hash.update(source.replace(VERSION_PATTERN, ''));
  for (const entry of coreEntries(source)) {
    const file = path.join(appDir, entry === './' ? 'index.html' : entry);
    hash.update(entry);
    hash.update(fs.readFileSync(file));
  }
  return `${base}-${hash.digest('hex').slice(0, 10)}`;
}

function stamp(appDir) {
  const swPath = path.join(appDir, 'sw.js');
  const source = fs.readFileSync(swPath, 'utf8');
  const version = shellVersion(appDir, source);
  fs.writeFileSync(swPath, source.replace(VERSION_PATTERN, `const CACHE_VERSION = '${version}';`));
  return version;
}

if (require.main === module) {
  const version = stamp(path.resolve(__dirname, '..', 'app'));
  console.log(`Service worker cache version: ${version}`);
}

module.exports = { shellVersion, stamp };
