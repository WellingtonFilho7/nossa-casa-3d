import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import vm from 'node:vm';

const html = readFileSync(resolve('index.html'), 'utf8');

function extractConst(name) {
  const start = html.indexOf(`const ${name} =`);
  if (start < 0) throw new Error(`Constante ${name} não encontrada`);
  const eq = html.indexOf('=', start);
  let i = html.indexOf(name === 'R' ? '(' : '[', eq);
  if (name === 'R') {
    const end = html.indexOf(';', eq);
    return html.slice(start, end + 1);
  }
  const open = html[i];
  const close = open === '[' ? ']' : '}';
  let depth = 0;
  let quote = null;
  for (; i < html.length; i++) {
    const ch = html[i], prev = html[i - 1];
    if (quote) {
      if (ch === quote && prev !== '\\') quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      continue;
    }
    if (ch === open) depth++;
    if (ch === close) depth--;
    if (depth === 0) return html.slice(start, html.indexOf(';', i) + 1);
  }
  throw new Error(`Não foi possível extrair ${name}`);
}

const context = {};
vm.createContext(context);
for (const name of ['R', 'ROOMS', 'WALLS', 'WINS', 'DOORS', 'SLIDES']) {
  vm.runInContext(extractConst(name).replace(`const ${name}`, `this.${name}`), context);
}

const { ROOMS, WALLS, WINS, DOORS, SLIDES } = context;
const areaMm2 = (poly) => Math.abs(poly.reduce((sum, p, i) => {
  const q = poly[(i + 1) % poly.length];
  return sum + p[0] * q[1] - q[0] * p[1];
}, 0)) / 2;
const areaM2 = (poly) => areaMm2(poly) / 1e6;
const bbox = (poly) => {
  const xs = poly.map((p) => p[0]);
  const ys = poly.map((p) => p[1]);
  return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
};
const rectArea = ([x0, y0, x1, y1]) => Math.max(0, x1 - x0) * Math.max(0, y1 - y0);
function rectIntersection(a, b) {
  return [
    Math.max(a[0], b[0]),
    Math.max(a[1], b[1]),
    Math.min(a[2], b[2]),
    Math.min(a[3], b[3])
  ];
}
function blockedArea(rect) {
  return WALLS.reduce((sum, wall) => sum + rectArea(rectIntersection(rect, wall.slice(0, 4))), 0);
}
function contains(poly, x, y) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
    const hit = ((yi > y) !== (yj > y)) && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (hit) inside = !inside;
  }
  return inside;
}
function roomAt(x, y) {
  const hit = ROOMS.find((room) => contains(room.poly, x, y));
  return hit?.id || 'exterior';
}
const isOutdoor = (id) => id === 'exterior' || !!ROOMS.find((room) => room.id === id)?.outdoor;
function doorSides(entry) {
  const [x0, y0, x1, y1] = entry.rect;
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  const vertical = (x1 - x0) < (y1 - y0);
  const offset = 220;
  const a = vertical ? roomAt(cx - offset, cy) : roomAt(cx, cy - offset);
  const b = vertical ? roomAt(cx + offset, cy) : roomAt(cx, cy + offset);
  return [a, b].sort();
}
function hasExpectedConnection(name, expected) {
  const door = [...DOORS, ...SLIDES].find((d) => d.name === name);
  if (!door) return `porta ausente: ${name}`;
  const actual = doorSides(door);
  const wanted = [...expected].sort();
  return actual.join('|') === wanted.join('|')
    ? null
    : `${name}: esperado ${wanted.join(' <-> ')}, encontrado ${actual.join(' <-> ')}`;
}

const failures = [];
const expectedDoors = new Map([
  ['Entrada social', ['exterior', 'estar']],
  ['Entrada garagem', ['garagem_coberta', 'mudroom']],
  ['Porta lavanderia', ['jantar', 'lavanderia']],
  ['Saída lavanderia varal', ['lavanderia', 'varal']],
  ['Mudroom interno', ['cozinha', 'mudroom']],
  ['Depósito serviço', ['deposito', 'lavanderia']],
  ['Passagem ala íntima', ['cozinha', 'hall_intimo']],
  ['Despensa', ['cozinha', 'despensa']],
  ['Lavabo social', ['cozinha', 'lavabo']],
  ['Suíte hóspedes', ['cozinha', 'suite_hospedes']],
  ['Banho hóspedes', ['suite_hospedes', 'banho_hospedes']],
  ['Suíte casal', ['hall_intimo', 'suite_casal']],
  ['Closet casal', ['suite_casal', 'closet_casal']],
  ['Banho casal', ['suite_casal', 'banho_casal']],
  ['Quarto meninos 1', ['hall_intimo', 'quarto_meninos_1']],
  ['Quarto meninos 2', ['hall_intimo', 'quarto_meninos_2']],
  ['Banheiro meninos porta 1', ['quarto_meninos_1', 'banho_meninos']],
  ['Banheiro meninos porta 2', ['banho_meninos', 'quarto_meninos_2']],
  ['Portas de vidro estar', ['alpendre', 'estar']],
  ['Portas de vidro jantar', ['alpendre', 'jantar']],
  ['Portas de vidro cozinha', ['alpendre', 'cozinha']]
]);
for (const [name, expected] of expectedDoors) {
  const failure = hasExpectedConnection(name, expected);
  if (failure) failures.push(failure);
}

const doorsAndSlides = [...DOORS, ...SLIDES];
for (const d of doorsAndSlides) {
  const area = rectArea(d.rect);
  const blocked = blockedArea(d.rect);
  if (blocked > 1) {
    failures.push(`vão de porta bloqueado por parede: ${d.name} (${(blocked / area * 100).toFixed(1)}%)`);
  }
}
WINS.forEach((win, index) => {
  const area = rectArea(win);
  const blocked = blockedArea(win);
  if (blocked > 1) {
    failures.push(`vão de janela bloqueado por parede: WINS[${index}] (${(blocked / area * 100).toFixed(1)}%)`);
  }
});

function reachableFrom(start) {
  const graph = new Map();
  const add = (a, b) => {
    if (!graph.has(a)) graph.set(a, new Set());
    if (!graph.has(b)) graph.set(b, new Set());
    graph.get(a).add(b);
    graph.get(b).add(a);
  };
  for (const d of doorsAndSlides) {
    if (blockedArea(d.rect) > 1) continue;
    const [a, b] = doorSides(d);
    if (a !== b) add(a, b);
  }
  const seen = new Set([start]);
  const queue = [start];
  while (queue.length) {
    const node = queue.shift();
    for (const next of graph.get(node) || []) {
      if (!seen.has(next)) {
        seen.add(next);
        queue.push(next);
      }
    }
  }
  return seen;
}
const accessTargets = ROOMS.filter((room) => room.counted !== false).map((room) => room.id);
for (const [label, start] of [['entrada social', 'estar'], ['entrada garagem', 'mudroom']]) {
  const seen = reachableFrom(start);
  const missing = accessTargets.filter((roomId) => !seen.has(roomId));
  if (missing.length) failures.push(`grafo de acessibilidade desde ${label} não alcança: ${missing.join(', ')}`);
}

const internal = ROOMS.filter((r) => r.counted !== false);
for (let i = 0; i < ROOMS.length; i++) {
  for (let j = i + 1; j < ROOMS.length; j++) {
    const a = ROOMS[i], b = ROOMS[j];
    const xs = [...new Set([...a.poly, ...b.poly].map((p) => p[0]))].sort((m, n) => m - n);
    const ys = [...new Set([...a.poly, ...b.poly].map((p) => p[1]))].sort((m, n) => m - n);
    let overlapMm2 = 0;
    for (let xi = 0; xi < xs.length - 1; xi++) {
      for (let yi = 0; yi < ys.length - 1; yi++) {
        const cell = [xs[xi], ys[yi], xs[xi + 1], ys[yi + 1]];
        if (!rectArea(cell)) continue;
        const mx = (cell[0] + cell[2]) / 2, my = (cell[1] + cell[3]) / 2;
        if (contains(a.poly, mx, my) && contains(b.poly, mx, my)) overlapMm2 += rectArea(cell);
      }
    }
    const overlap = overlapMm2 / 1e6;
    if (overlap > 0.01) failures.push(`sobreposição ${a.id} x ${b.id}: ${overlap.toFixed(2)} m²`);
  }
}

const externalOpenings = [...WINS, ...SLIDES.map((s) => s.rect)];
function roomHasExteriorOpening(roomId) {
  const room = ROOMS.find((r) => r.id === roomId);
  const [rx0, ry0, rx1, ry1] = bbox(room.poly);
  return externalOpenings.some(([x0, y0, x1, y1]) => {
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    const horizontal = (x1 - x0) >= (y1 - y0);
    const near = horizontal
      ? x1 > rx0 && x0 < rx1 && (Math.abs(y0 - ry0) < 260 || Math.abs(y1 - ry1) < 260)
      : y1 > ry0 && y0 < ry1 && (Math.abs(x0 - rx0) < 260 || Math.abs(x1 - rx1) < 260);
    if (!near) return false;
    const a = horizontal ? roomAt(cx, cy - 320) : roomAt(cx - 320, cy);
    const b = horizontal ? roomAt(cx, cy + 320) : roomAt(cx + 320, cy);
    return [a, b].includes(roomId) && [a, b].some((id) => id !== roomId && isOutdoor(id));
  });
}
for (const roomId of ['suite_casal', 'suite_hospedes', 'quarto_meninos_1', 'quarto_meninos_2']) {
  if (!roomHasExteriorOpening(roomId)) failures.push(`sem abertura externa: ${roomId}`);
}

const minAreas = new Map([
  ['homeschool', 18],
  ['alpendre', 24],
  ['quarto_meninos_1', 12],
  ['quarto_meninos_2', 12]
]);
for (const [roomId, min] of minAreas) {
  const room = ROOMS.find((r) => r.id === roomId);
  const actual = areaM2(room.poly);
  if (actual < min) failures.push(`${roomId} com ${actual.toFixed(2)} m²; mínimo de estudo ${min.toFixed(2)} m²`);
}

const report = doorsAndSlides.map((d) => ({
  name: d.name || 'Porta de correr sem nome',
  sides: doorSides(d),
  blockedWallPercent: Number((blockedArea(d.rect) / rectArea(d.rect) * 100).toFixed(1))
}));
const output = {
  doors: report,
  windows: WINS.map((win, index) => ({
    index,
    blockedWallPercent: Number((blockedArea(win) / rectArea(win) * 100).toFixed(1))
  })),
  areasM2: Object.fromEntries(ROOMS.map((room) => [room.id, Number(areaM2(room.poly).toFixed(2))]))
};
mkdirSync('dados', { recursive: true });
writeFileSync('dados/relatorio-portas-v3.json', JSON.stringify(output, null, 2) + '\n');
console.log(JSON.stringify(output, null, 2));

if (failures.length) {
  console.error('Validação geométrica falhou:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Validação geométrica OK.');
