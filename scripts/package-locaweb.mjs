import { cp, mkdir, readFile, writeFile, rm, access } from 'node:fs/promises';
import { resolve } from 'node:path';

await access('php/vendor/autoload.php');
const destination = resolve('release/locaweb');
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp('dist', `${destination}/public_html`, { recursive: true });
await mkdir(`${destination}/accesslift-private`, { recursive: true });
for (const file of ['inquiries.php', 'config.example.php', 'composer.json', 'composer.lock', 'vendor']) {
  await cp(`php/${file}`, `${destination}/accesslift-private/${file}`, { recursive: true });
}
const { redirects } = JSON.parse(await readFile('vercel.json', 'utf8'));
const rules = redirects.map(({ source, destination, statusCode }) => {
  if (statusCode !== 301 || !source.startsWith('/') || !destination.startsWith('/')) throw new Error('Invalid legacy redirect');
  const pattern = source.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return `RewriteRule ^${pattern}/?$ ${destination} [R=301,END]`;
}).join('\n');
const htaccess = await readFile('public/.htaccess', 'utf8');
await writeFile(`${destination}/public_html/.htaccess`, htaccess.replace('RewriteEngine On', `RewriteEngine On\n${rules}`));
await cp('docs/locaweb-php.md', `${destination}/LEIA-ME.md`);
console.log('Pacote em release/locaweb: public_html + accesslift-private. Nenhuma credencial local foi copiada.');
