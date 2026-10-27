import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const source = path.join(root, 'public');
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const rawUrl = process.env.SITE_URL || (host ? `https://${host}` : 'http://localhost:3000');
const url = new URL(rawUrl);
if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) {
  throw new Error('SITE_URL deve ser um endereço público http:// ou https://, sem credenciais.');
}
const siteUrl = url.origin;
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
const html = (await readFile(path.join(source, 'index.html'), 'utf8')).replaceAll('__SITE_URL__', siteUrl);
await writeFile(path.join(output, 'index.html'), html);
await writeFile(path.join(output, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
await writeFile(path.join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}/</loc></url></urlset>\n`);
console.log(`Site pronto em dist/ — endereço: ${siteUrl}`);
