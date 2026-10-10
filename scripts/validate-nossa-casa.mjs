import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const html = readFileSync(resolve('index.html'), 'utf8');

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

if (missingText.length || missingIds.length) {
  console.error('Validação Nossa Casa falhou.');
  if (missingText.length) console.error(`Textos ausentes: ${missingText.join(', ')}`);
  if (missingIds.length) console.error(`Ambientes ausentes: ${missingIds.join(', ')}`);
  process.exit(1);
}

console.log('Validação Nossa Casa OK: ambientes e marcadores principais encontrados.');
