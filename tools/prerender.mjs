/*
 * Prerender: bakes the default (EN) i18n text into index.html so the first paint
 * and the accessibility tree have real content (fixes CLS + a11y + SEO).
 * The JS i18n layer still overwrites text and switches languages at runtime.
 *
 * RUN THIS whenever you change EN strings in js/en.js, otherwise the baked HTML
 * goes stale until JS runs:
 *     node tools/prerender.mjs .
 * No dependencies required.
 */
import fs from 'fs';
const repo = process.argv[2] || '.';
const enSrc = fs.readFileSync(repo + '/js/en.js', 'utf8');
const window = {};
new Function('window', enSrc)(window);
const dict = window.translations.en;
const HTML_KEYS = new Set(["hero.title","hero.badge","platform.story.text","eco.hero.outcome"]);
const escText = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const escAttr = s => escText(s).replace(/"/g,'&quot;');
const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const collapse = s => String(s).replace(/\s+/g,' ').trim();
let html = fs.readFileSync(repo + '/index.html', 'utf8');
let filled = 0, placeholders = 0, labels = 0;
for (const key of Object.keys(dict)) {
  const val = dict[key];
  if (typeof val !== 'string') continue;
  const reContent = new RegExp('(<[a-zA-Z][\\w-]*\\b[^>]*?\\sdata-i18n="' + reEsc(key) + '"[^>]*>)([\\s\\S]*?)(<\\/[a-zA-Z][\\w-]*>)', 'g');
  if (reContent.test(html)) {
    const inner = HTML_KEYS.has(key) ? String(val).replace(/\n\n/g,'<br><br>') : escText(collapse(val));
    html = html.replace(reContent, (m,a,b,c)=> a + inner + c);
    filled++;
  }
  const rePh = new RegExp('data-i18n-placeholder="' + reEsc(key) + '"(?![^>]*\\splaceholder=)', 'g');
  if (rePh.test(html)) { html = html.replace(rePh, m => m + ' placeholder="' + escAttr(val) + '"'); placeholders++; }
  const reLb = new RegExp('data-i18n-label="' + reEsc(key) + '"(?![^>]*\\sdata-label=)', 'g');
  if (reLb.test(html)) { html = html.replace(reLb, m => m + ' data-label="' + escAttr(val) + '"'); labels++; }
}
fs.writeFileSync(repo + '/index.html', html);
console.log(`prerender: filled ${filled} text, ${placeholders} placeholders, ${labels} labels`);
