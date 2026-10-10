import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const html = readFileSync(resolve('index.html'), 'utf8');
const readmeEn = readFileSync(resolve('README.en.md'), 'utf8');

const requiredText = [
  'Nossa Casa 3D',
  'HIPÓTESES PROVISÓRIAS',
  'Suíte casal',
  'Quarto meninos 1',
  'Quarto meninos 2',
  'Banheiro dos meninos',
  'duas cubas',
  'Suíte hóspedes',
  'Homeschooling',
  'Cozinha aberta',
  'Alpendre dos fundos',
  'Quintal livre',
  'Garagem coberta',
  'Vagas descobertas',
  'Varal reservado',
  'Churrasqueira simples',
  'Entrada social',
  'Entrada garagem'
];

const requiredIds = [
  'suite_casal',
  'quarto_meninos_1',
  'quarto_meninos_2',
  'banho_meninos',
  'suite_hospedes',
  'homeschool',
  'cozinha',
  'jantar',
  'estar',
  'alpendre',
  'quintal'
];

const missingText = requiredText.filter((token) => !html.includes(token));
const missingIds = requiredIds.filter((token) => !html.includes(`id:'${token}'`) && !html.includes(`id:"${token}"`));
const staleDocs = [];
if (!readmeEn.includes('Nossa Casa 3D')) staleDocs.push('README.en.md must describe Nossa Casa 3D');
if (!readmeEn.includes('PROVISIONAL ASSUMPTIONS')) staleDocs.push('README.en.md must mark dimensions as provisional');
if (readmeEn.includes('defaults to Chinese')) staleDocs.push('README.en.md still describes the original language behavior');

if (missingText.length || missingIds.length || staleDocs.length) {
  console.error('Validação Nossa Casa falhou.');
  if (missingText.length) console.error(`Textos ausentes: ${missingText.join(', ')}`);
  if (missingIds.length) console.error(`Ambientes ausentes: ${missingIds.join(', ')}`);
  if (staleDocs.length) console.error(`Documentação desatualizada: ${staleDocs.join('; ')}`);
  process.exit(1);
}

console.log('Validação Nossa Casa OK: ambientes e marcadores principais encontrados.');
