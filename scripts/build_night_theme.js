/* Build app/styles/theme-night.css from app.css and ui-next.css.

   About 400 colours in the stylesheets are written out (#fff backgrounds,
   dark text), so a dark theme cannot come from the colour tokens alone.
   This re-emits every colour, background, border and shadow declaration
   under html[data-theme="night"], in the original order, so the cascade
   between rules stays the same (a highlighted answer still beats the plain
   one), with written-out colours turned dark-for-light:

   - backgrounds: light colours become dark surfaces of the same hue;
     strong and dark ones (buttons, badges) keep their colour;
   - text: dark and mid colours become light ones of the same hue;
     white text on coloured buttons stays white;
   - borders and outlines: lightness flipped;
   - token backgrounds that are light text colours at night (a button on
     var(--green-d)) use their --nbg-* background twin from themes.css.

   The palette itself (tokens, --nbg-*) is in themes.css. Run after any
   change to app.css or ui-next.css:  node scripts/build_night_theme.js
   (test/app.test.js fails while the output is stale). */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SOURCES = ['app/styles/app.css', 'app/styles/ui-next.css'];
const OUTPUT = 'app/styles/theme-night.css';
const SCOPE = 'html[data-theme="night"]';

// Tokens that are light text colours at night; as backgrounds they use --nbg-*.
const TEXT_TOKENS = ['green-d', 'green', 'blue', 'red', 'amber', 'ar', 'ink', 'ink-2',
  'ds-accent', 'ds-accent-strong', 'ds-accent-alt', 'ds-text', 'ds-text-soft',
  'ds-success', 'ds-warning', 'ds-danger'];
// Tokens that are dark surfaces at night; as text they use --ntx-*.
const SURFACE_TOKENS = ['card', 'bg', 'green-l', 'blue-l', 'red-l', 'amber-l', 'ar-l', 'line',
  'ds-surface', 'ds-surface-soft', 'ds-surface-raised', 'ds-page', 'ds-accent-soft'];

const TEXT_PROPS = /^(color|fill|stroke|caret-color|text-decoration-color|-webkit-text-fill-color|accent-color)$/;
const BACKGROUND_PROPS = /^background(-color|-image)?$/;
const LINE_PROPS = /^(border(-(top|right|bottom|left|inline|block)(-(start|end))?)?(-color)?|outline(-color)?|column-rule(-color)?)$/;
const SHADOW_PROPS = /^(box-shadow|text-shadow)$/;

// ---------------------------------------------------------------- parsing
function parse(css) {
  let i = 0;
  function skipComment() {
    if (css.startsWith('/*', i)) { i = css.indexOf('*/', i + 2) + 2; return true; }
    return false;
  }
  function block() {
    const nodes = [];
    while (i < css.length) {
      while (i < css.length && (/\s/.test(css[i]) || skipComment())) if (/\s/.test(css[i])) i++;
      if (i >= css.length || css[i] === '}') { i++; break; }
      let start = i;
      let depth = 0;
      let quote = null;
      while (i < css.length) {
        const c = css[i];
        if (quote) { if (c === quote && css[i - 1] !== '\\') quote = null; i++; continue; }
        if (c === '"' || c === "'") { quote = c; i++; continue; }
        if (css.startsWith('/*', i)) { skipComment(); continue; }
        if (c === '(') depth++;
        if (c === ')') depth--;
        if (c === '{' && depth === 0) break;
        if (c === ';' && depth === 0) break;
        i++;
      }
      const prelude = css.slice(start, i).replace(/\/\*[\s\S]*?\*\//g, '').trim();
      if (css[i] === ';') { i++; nodes.push({ type: 'statement', text: prelude }); continue; }
      i++; // {
      if (prelude.startsWith('@')) {
        const name = prelude.split(/[\s(]/)[0];
        if (name === '@media' || name === '@supports') nodes.push({ type: 'at', prelude, children: block() });
        else { skipBlock(); nodes.push({ type: 'skipped', prelude }); }
      } else {
        nodes.push({ type: 'rule', selectors: splitTop(prelude, ','), declarations: declarations(blockText()) });
      }
    }
    return nodes;
  }
  function blockText() {
    const start = i;
    let depth = 0;
    let quote = null;
    while (i < css.length) {
      const c = css[i];
      if (quote) { if (c === quote && css[i - 1] !== '\\') quote = null; i++; continue; }
      if (c === '"' || c === "'") { quote = c; i++; continue; }
      if (c === '{') depth++;
      if (c === '}') { if (depth === 0) break; depth--; }
      i++;
    }
    const text = css.slice(start, i);
    i++;
    return text;
  }
  function skipBlock() { blockText(); }
  return block();
}

function splitTop(text, separator) {
  const parts = [];
  let depth = 0;
  let quote = null;
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quote) { if (c === quote) quote = null; continue; }
    if (c === '"' || c === "'") quote = c;
    else if (c === '(' || c === '[') depth++;
    else if (c === ')' || c === ']') depth--;
    else if (c === separator && depth === 0) { parts.push(text.slice(start, i).trim()); start = i + 1; }
  }
  parts.push(text.slice(start).trim());
  return parts.filter(Boolean);
}

function declarations(text) {
  return splitTop(text.replace(/\/\*[\s\S]*?\*\//g, ''), ';').map(item => {
    const colon = item.indexOf(':');
    if (colon < 0) return null;
    let value = item.slice(colon + 1).trim();
    const important = /!important\s*$/.test(value);
    value = value.replace(/\s*!important\s*$/, '');
    return { prop: item.slice(0, colon).trim().toLowerCase(), value, important };
  }).filter(Boolean);
}

// ----------------------------------------------------------------- colour
const NAMED = { white: [255, 255, 255], black: [0, 0, 0] };
const toLinear = c => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const fromLinear = c => { const v = c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055; return Math.round(Math.min(1, Math.max(0, v)) * 255); };

function toOklch([r, g, b]) {
  [r, g, b] = [r, g, b].map(toLinear);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s;
  return [L, Math.hypot(A, B), Math.atan2(B, A)];
}

function fromOklch([L, C, H]) {
  for (let chroma = C; ; chroma *= 0.92) {
    const A = chroma * Math.cos(H);
    const B = chroma * Math.sin(H);
    const l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3;
    const m = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3;
    const s = (L - 0.0894841775 * A - 1.2914855480 * B) ** 3;
    const rgb = [4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s];
    if (rgb.every(v => v >= -0.001 && v <= 1.001) || chroma < 0.001) return rgb.map(fromLinear);
  }
}

// OKLab lightness at night, the hue kept: white surfaces -> about #1e2124,
// dark ink -> about #dfe3e6, light borders -> visible mid-dark lines.
const darkSurface = L => 0.22 + (1 - L) * 0.9;
const lightInk = L => 1 - L * 0.45;
const darkLine = L => 0.32 + (1 - L) * 0.6;

// [r, g, b, alpha]
function parseColor(text) {
  let m = /^#([0-9a-f]{3,8})$/i.exec(text);
  if (m) {
    let hex = m[1];
    if (hex.length === 3 || hex.length === 4) hex = [...hex].map(c => c + c).join('');
    if (hex.length !== 6 && hex.length !== 8) return null;
    const alpha = hex.length === 8 ? parseInt(hex.slice(6), 16) / 255 : 1;
    return [...[0, 2, 4].map(k => parseInt(hex.slice(k, k + 2), 16)), alpha];
  }
  m = /^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)(?:[\s,/]+([\d.]+%?))?\s*\)$/i.exec(text);
  if (m) {
    const alpha = m[4] === undefined ? 1 : parseFloat(m[4]) / (m[4].endsWith('%') ? 100 : 1);
    return [...[m[1], m[2], m[3]].map(Number), alpha];
  }
  return NAMED[text.toLowerCase()] ? [...NAMED[text.toLowerCase()], 1] : null;
}

const hex = rgb => '#' + rgb.map(v => v.toString(16).padStart(2, '0')).join('');

function mapColor(text, kind) {
  const color = parseColor(text);
  if (!color) return text;
  const alpha = color[3];
  // Faint washes (white at .08-.2 on a coloured header) work at night too;
  // a mostly opaque light panel is a surface and turns dark like one.
  if (alpha < (kind === 'background' ? 0.4 : 1)) return text;
  const [L, C, H] = toOklch(color.slice(0, 3));
  if (kind === 'text' && L >= 0.6) return text;        // already light: white on a button stays white
  if (kind === 'background' && L <= 0.6) return text;  // strong colours keep their colour
  const night = L > 0.6 ? (kind === 'line' ? darkLine(L) : darkSurface(L)) : lightInk(L);
  const rgb = fromOklch([night, C * 0.85, H]);
  return alpha < 1 ? `rgba(${rgb.join(',')},${+alpha.toFixed(3)})` : hex(rgb);
}

const COLOR = /#[0-9a-f]{3,8}\b|rgba?\([^)]*\)|\b(?:white|black)\b/gi;

function nightValue(prop, value) {
  let kind = null;
  if (TEXT_PROPS.test(prop)) kind = 'text';
  else if (BACKGROUND_PROPS.test(prop)) kind = 'background';
  else if (LINE_PROPS.test(prop)) kind = 'line';
  else if (SHADOW_PROPS.test(prop)) kind = 'shadow';
  if (!kind) return null;
  if (kind === 'line' && !/#|rgb|var\(|\bwhite\b|\bblack\b|currentcolor|transparent/i.test(value)) return null;
  let out = value.replace(/url\([^)]*\)/g, url => `\u0000${Buffer.from(url).toString('base64')}\u0000`);
  if (kind !== 'shadow') out = out.replace(COLOR, color => mapColor(color, kind));
  if (kind === 'background') {
    out = out.replace(/var\(--([\w-]+)/g, (all, token) => TEXT_TOKENS.includes(token) ? `var(--nbg-${token}` : all);
  }
  if (kind === 'text') {
    out = out.replace(/var\(--([\w-]+)/g, (all, token) => SURFACE_TOKENS.includes(token) ? `var(--ntx-${token}` : all);
  }
  return out.replace(/\u0000([^\u0000]*)\u0000/g, (all, data) => Buffer.from(data, 'base64').toString());
}

// --------------------------------------------------------------- emitting
function scoped(selector) {
  if (selector.startsWith(':root')) return SCOPE + selector.slice(5);
  if (/^html(?![\w-])/.test(selector)) return SCOPE + selector.slice(4);
  return `${SCOPE} ${selector}`;
}

function emit(nodes, indent = '') {
  const out = [];
  for (const node of nodes) {
    if (node.type === 'at') {
      const inner = emit(node.children, indent + '  ');
      if (inner.length) out.push(`${indent}${node.prelude}{`, ...inner, `${indent}}`);
    } else if (node.type === 'rule') {
      const decls = node.declarations
        .filter(d => !d.prop.startsWith('--'))
        .map(d => ({ ...d, night: nightValue(d.prop, d.value) }))
        .filter(d => d.night !== null)
        .map(d => `${d.prop}:${d.night}${d.important ? '!important' : ''}`);
      if (decls.length) out.push(`${indent}${node.selectors.map(scoped).join(',')}{${decls.join(';')}}`);
    }
  }
  return out;
}

function build() {
  const body = SOURCES.map(file => [`/* from ${file} */`, ...emit(parse(fs.readFileSync(path.join(ROOT, file), 'utf8')))].join('\n'));
  return `/* Generated by scripts/build_night_theme.js from app.css and ui-next.css. Do not edit:
   change those files (or the night palette in themes.css) and run the script again. */
${body.join('\n')}
`;
}

if (require.main === module) {
  const css = build();
  fs.writeFileSync(path.join(ROOT, OUTPUT), css);
  console.log(`${OUTPUT}: ${css.split('\n').length} lines, ${(css.length / 1024).toFixed(1)} KB`);
}

module.exports = { build, mapColor, OUTPUT };
