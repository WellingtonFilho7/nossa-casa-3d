import { chromium } from 'playwright';
import { existsSync, mkdirSync } from 'node:fs';

const baseUrl = process.env.APP_URL || 'http://127.0.0.1:5173';
const outDir = 'capturas';
mkdirSync(outDir, { recursive: true });
mkdirSync('dados', { recursive: true });

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

await page.locator('details.menu summary').click();
const downloadPromise = page.waitForEvent('download');
await page.locator('#exportJson').click();
const download = await downloadPromise;
await download.saveAs('dados/nossa-casa-projeto-v1.json');

const canvasStats = await page.evaluate(() => {
  const canvas = document.querySelector('#view3d canvas');
  if (!canvas) return { present: false };
  const ctx = canvas.getContext('webgl2') || canvas.getContext('webgl');
  return { present: true, width: canvas.width, height: canvas.height, hasWebGL: !!ctx };
});

await browser.close();

console.log(JSON.stringify({ baseUrl, screenshots: 3, exportedJson: 'dados/nossa-casa-projeto-v1.json', canvasStats, messages }, null, 2));
if (messages.some((m) => m.startsWith('pageerror'))) process.exit(1);
