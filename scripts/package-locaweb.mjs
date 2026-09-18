import { cp, mkdir, rm, access } from 'node:fs/promises';
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
await cp('public/.htaccess', `${destination}/public_html/.htaccess`);
await cp('docs/locaweb-php.md', `${destination}/LEIA-ME.md`);
console.log('Pacote em release/locaweb: public_html + accesslift-private. Nenhuma credencial local foi copiada.');
