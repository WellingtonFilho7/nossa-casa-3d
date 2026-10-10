import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { existsSync, mkdirSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const outDir = 'capturas';
const jsonPath = 'dados/nossa-casa-projeto-v2.json';
mkdirSync(outDir, { recursive: true });
mkdirSync('dados', { recursive: true });

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml; charset=utf-8'
};

async function startStaticServer() {
  if (process.env.APP_URL) return { baseUrl: process.env.APP_URL, close: async () => {} };
  const root = resolve('.');
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url || '/', 'http://127.0.0.1');
      const rel = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
      const file = resolve(join(root, rel));
      if (!file.startsWith(root)) throw new Error('path traversal');
      const data = await readFile(file);
      res.writeHead(200, { 'content-type': mime[extname(file)] || 'application/octet-stream' });
      res.end(data);
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      res.end('Not found');
    }
  });
  await new Promise((resolveListen) => server.listen(0, '127.0.0.1', resolveListen));
  const { port } = server.address();
  return {
    baseUrl: `http://127.0.0.1:${port}`,
    close: () => new Promise((resolveClose) => server.close(resolveClose))
  };
}

const { baseUrl, close } = await startStaticServer();
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser = await chromium.launch({
  executablePath: existsSync(chromePath) ? chromePath : undefined
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
const messages = [];

page.on('console', (msg) => {
  if (['error', 'warning'].includes(msg.type())) messages.push(`${msg.type()}: ${msg.text()}`);
});
page.on('pageerror', (err) => messages.push(`pageerror: ${err.message}`));

try {
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${outDir}/01-planta-2d.png`, fullPage: false });

  await page.getByRole('button', { name: /Cena 3D|3D Scene/ }).click();
  await page.waitForTimeout(3200);
  await page.screenshot({ path: `${outDir}/02-3d-aerea.png`, fullPage: false });

  await page.getByRole('button', { name: /Estar leitura|Living/ }).click();
  await page.waitForTimeout(1800);
  await page.mouse.move(760, 450);
  await page.mouse.down();
  await page.mouse.move(610, 390, { steps: 8 });
  await page.mouse.up();
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${outDir}/03-3d-social-alpendre.png`, fullPage: false });

  const beforeImport = await page.evaluate(() => window.NOSSA_CASA_TEST.getState());
  await page.locator('details.menu summary').click();
  const downloadPromise = page.waitForEvent('download');
  await page.locator('#exportJson').click();
  const download = await downloadPromise;
  await download.saveAs(jsonPath);

  await page.locator('#fileIn').setInputFiles(jsonPath);
  await page.waitForTimeout(500);
  const afterImport = await page.evaluate(() => window.NOSSA_CASA_TEST.getState());
  const importMatchesExport = JSON.stringify(beforeImport) === JSON.stringify(afterImport);

  const canvasStats = await page.evaluate(() => {
    const canvas = document.querySelector('#view3d canvas');
    if (!canvas) return { present: false };
    const ctx = canvas.getContext('webgl2') || canvas.getContext('webgl');
    return { present: true, width: canvas.width, height: canvas.height, hasWebGL: !!ctx };
  });

  const result = { baseUrl, screenshots: 3, exportedJson: jsonPath, importMatchesExport, canvasStats, messages };
  console.log(JSON.stringify(result, null, 2));
  if (!importMatchesExport) throw new Error('JSON importado diverge do estado exportado');
  if (messages.some((m) => m.startsWith('pageerror'))) process.exitCode = 1;
} finally {
  await browser.close();
  await close();
}
