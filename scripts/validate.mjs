import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docs = path.join(root, 'docs');
const brands = { fr: 'Dalili fi al-Islam', en: 'Dalili fi al-Islam', ar: 'دَلِيلِي فِي الإِسْلَام' };
const languages = Object.keys(brands);
const base = 'https://aghitech92.github.io/dalili-fi-al-islam-privacy/';
const pages = ['index.html', ...languages.map(lang => `${lang}/index.html`), 'ios/index.html', ...languages.map(lang => `ios/${lang}/index.html`)];
const sectionIds = ['local', 'location', 'backup', 'ads', 'choices', 'retention', 'security', 'contact', 'website', 'changes'];

for (const page of pages) {
  const isIos = page.startsWith('ios/');
  const relativePage = isIos ? page.slice(4) : page;
  const lang = relativePage === 'index.html' ? 'fr' : relativePage.split('/')[0];
  const platformPath = isIos ? 'ios/' : '';
  const file = path.join(docs, page);
  const html = fs.readFileSync(file, 'utf8');
  assert(html.startsWith('<!doctype html>'), `${page}: doctype`);
  assert(html.includes(`<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">`), `${page}: language/direction`);
  assert(html.includes(`· ${brands[lang]}</title>`), `${page}: app name`);
  assert(html.includes(`rel="canonical" href="${base}${platformPath}${lang}/"`), `${page}: canonical`);
  assert(html.includes(`data-platform="${isIos ? 'ios' : 'android'}"`), `${page}: platform`);
  assert.equal((html.match(/<h1>/g) || []).length, 1, `${page}: one heading`);
  assert.equal((html.match(/<section id=/g) || []).length, 10, `${page}: complete policy`);
  assert.equal((html.match(/aria-current="page"/g) || []).length, 2, `${page}: selected language and platform`);
  assert.equal((html.match(/hreflang=/g) || []).length, 7, `${page}: language alternatives and navigation`);
  assert(html.includes('href="mailto:aghitech92@gmail.com"'), `${page}: contact`);
  assert(!/<script\b|<iframe\b|<form\b|http-equiv="refresh"/i.test(html), `${page}: no scripts, embeds, forms or redirects`);
  assert(!/\bTODO\b|\bPLACEHOLDER\b|\{\{CONTACT\}\}|\uFFFD/.test(html), `${page}: no unfinished content or encoding errors`);
  for (const id of sectionIds) assert(html.includes(`<section id="${id}"`), `${page}: missing section ${id}`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${page}: unique anchors`);
  for (const [, ref] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (ref.startsWith('https:') || ref.startsWith('mailto:')) continue;
    if (ref.startsWith('#')) {
      assert(ids.includes(ref.slice(1)), `${page}: ${ref}`);
      continue;
    }
    const target = path.resolve(path.dirname(file), ref);
    assert(target.startsWith(docs + path.sep), `${page}: contained link ${ref}`);
    assert(fs.existsSync(target), `${page}: missing ${ref}`);
    if (fs.statSync(target).isDirectory()) {
      assert(fs.existsSync(path.join(target, 'index.html')), `${page}: index ${ref}`);
    }
  }
  for (const code of languages) {
    assert(html.includes(`hreflang="${code}" href="${base}${platformPath}${code}/"`), `${page}: missing ${code} in the same platform`);
  }
  const policyHtml = html.slice(html.indexOf('<article'), html.indexOf('</article>'));
  if (isIos) {
    assert(policyHtml.includes('iCloud') && policyHtml.includes('Apple') && policyHtml.includes('iOS'), `${page}: iOS disclosure`);
    assert(!policyHtml.includes('admob/android/'), `${page}: no Android advertising documentation`);
    assert(policyHtml.includes('admob/ios/privacy/data-disclosure'), `${page}: iOS advertising documentation`);
  } else {
    assert(policyHtml.includes('Android') && policyHtml.includes('admob/android/privacy/play-data-disclosure'), `${page}: Android disclosure retained`);
    assert(!policyHtml.includes('iCloud'), `${page}: no iOS backup claim on Android`);
  }
  console.log(`OK ${page}: ${brands[lang]}, platform, 10 sections, language links, anchors, assets, contact`);
}

assert(fs.existsSync(path.join(docs, '.nojekyll')));
assert.equal((fs.readFileSync(path.join(docs, 'sitemap.xml'), 'utf8').match(/<url>/g) || []).length, 6);
assert(!fs.readFileSync(path.join(docs, 'styles.css'), 'utf8').includes('@import'));
console.log('All eight pages passed structural validation.');
