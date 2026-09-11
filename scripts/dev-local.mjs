import { spawn, spawnSync } from 'node:child_process';
import net from 'node:net';
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { createServer, preview } from 'vite';

const php = process.env.PHP_BIN || 'php';
if (spawnSync(php, ['-v']).status !== 0 || !existsSync('php/vendor/autoload.php')) {
  console.error('PHP 8.2+ e dependencias obrigatorios: composer install --working-dir=php. Configure PHP_BIN se necessario.');
  process.exit(1);
}
const probe = net.createServer();
await new Promise(resolve => probe.listen(0, '127.0.0.1', resolve));
const port = probe.address().port;
await new Promise(resolve => probe.close(resolve));
const backend = spawn(php, ['-S', `127.0.0.1:${port}`, '-t', 'public'], {
  stdio: ['ignore', 'inherit', 'inherit'],
  env: { ...process.env, ACCESSLIFT_PRIVATE_DIR: resolve('php') },
});
let site;
let stopping = false;
async function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  if (site?.close) await site.close();
  else site?.httpServer?.close();
  backend.kill('SIGTERM');
  process.exit(code);
}
process.on('SIGINT', () => stop());
process.on('SIGTERM', () => stop());
backend.on('error', error => { console.error(error.message); stop(1); });
backend.on('exit', () => { if (!stopping) stop(1); });
try {
  const proxy = { '^/api/inquiries(?:\\.php)?/?(?:\\?.*)?$': {
    target: `http://127.0.0.1:${port}`, changeOrigin: false,
    rewrite: path => path.replace(/^\/api\/inquiries(?:\.php)?\/?/, '/api/inquiries.php'),
  } };
  const args = process.argv.slice(2);
  const index = args.indexOf('--port');
  const frontendPort = index >= 0 ? Number(args[index + 1]) : 3000;
  if (args.includes('--preview')) site = await preview({ preview: { host: '127.0.0.1', port: frontendPort, proxy } });
  else { site = await createServer({ server: { host: '127.0.0.1', port: frontendPort, proxy } }); await site.listen(); }
  site.printUrls();
} catch (error) { console.error(error); await stop(1); }
