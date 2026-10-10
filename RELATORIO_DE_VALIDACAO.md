# Relatório de Validação | Nossa Casa 3D v3

Data: 10/10/2026  
Escopo: versão funcional corrigida a partir de `07_RELATORIO_REVISAO_NOSSA_CASA_3D_v2.0.md` e `07_PROMPT_CORRECAO_CODEX_NOSSA_CASA_v3.md`.  
Importante: todas as dimensões, áreas e posições são **HIPÓTESES PROVISÓRIAS** para revisão familiar.

## Correções da v3

| Bloqueador da v2 | Ação aplicada na v3 |
|---|---|
| Garagem -> mudroom sem caminho interno | Criada a porta `Mudroom interno`, conectando mudroom à cozinha/apoio diário. |
| Depósito sem acesso verificável no grafo | Criada a porta `Depósito serviço`, conectando depósito à lavanderia. |
| Ala íntima fora do grafo de acessibilidade | Criada a `Passagem ala íntima`, conectando cozinha/hall íntimo por vão real. |
| Portas sobre paredes sólidas | Paredes foram segmentadas ao redor dos vãos de `Entrada garagem`, `Banho hóspedes`, `Lavabo social`, `Despensa` e demais portas. |
| Janelas desenhadas sobre paredes maciças | Paredes externas foram segmentadas para deixar vãos físicos livres nas janelas. |
| Quarto meninos 1 abria para faixa estreita | Criado `Jardim de luz íntimo` como hipótese de pátio linear externo para iluminação/ventilação do quarto. |
| Janela da suíte de hóspedes voltada à garagem | A janela principal da suíte de hóspedes foi movida para a lateral leste, afastada das vagas cobertas. |

## Testes Realizados

- Teste de regressão em estado v2: falhou como esperado, apontando `Entrada garagem`, `Banho hóspedes`, `Lavabo social`, `Despensa`, 7 janelas bloqueadas e grafo de acessibilidade incompleto.
- `npm test`: OK após correção v3.
- `node scripts/validate-nossa-casa.mjs`: OK, validou ambientes e marcadores principais.
- `node scripts/validate-geometry.mjs`: OK, validou adjacências, vãos físicos, janelas sem bloqueio, grafo de acessibilidade, sobreposições, aberturas externas e áreas mínimas.
- `npm run capture`: OK, abriu o app em servidor local temporário, capturou 2D/3D, confirmou WebGL, exportou JSON e importou o mesmo arquivo.
- Console do navegador durante captura: OK, sem mensagens.
- Importação real do JSON: OK, `importMatchesExport: true`.

## Evidências Geradas

- Planta 2D: `capturas/01-planta-2d.png`
- Modelo 3D aéreo: `capturas/02-3d-aerea.png`
- Modelo 3D social/alpendre: `capturas/03-3d-social-alpendre.png`
- JSON exportado/importável: `dados/nossa-casa-projeto-v3.json`
- Relatório automático de portas, janelas e áreas: `dados/relatorio-portas-v3.json`

## Validação de Portas e Vãos

Todas as portas e portas de correr ficaram com `blockedWallPercent: 0`.

- Entrada social: exterior <-> estar.
- Entrada pela garagem: garagem coberta <-> mudroom.
- Mudroom interno: cozinha <-> mudroom.
- Depósito serviço: lavanderia <-> depósito.
- Passagem ala íntima: cozinha <-> hall íntimo.
- Lavanderia: jantar <-> lavanderia.
- Saída de serviço: lavanderia <-> varal.
- Despensa: cozinha <-> despensa.
- Lavabo social: cozinha <-> lavabo.
- Suíte de hóspedes: cozinha <-> suíte de hóspedes.
- Banho hóspedes: suíte de hóspedes <-> banho hóspedes.
- Suíte casal: hall íntimo <-> suíte casal.
- Closet casal: suíte casal <-> closet casal.
- Banheiro dos meninos: duas portas diretas, uma para cada quarto.
- Portas de vidro: estar, jantar e cozinha <-> alpendre.

Todas as janelas ficaram com `blockedWallPercent: 0`.

## Grafo de Acessibilidade

O verificador constrói um grafo usando somente portas/passagens sem parede bloqueando o vão. A partir da entrada social e da entrada pela garagem, o grafo alcança todos os ambientes internos contados: estar, jantar, cozinha, despensa, lavabo, suíte de hóspedes, banho hóspedes, homeschool, lavanderia, depósito, mudroom, hall íntimo, suíte casal, banho casal, closet casal, quartos dos meninos e banheiro compartilhado.

## Tabela de Áreas Estimadas

Áreas internas estimadas pelo protótipo:

| Ambiente | Área |
|---|---:|
| Estar leitura sem TV | 28,60 m² |
| Jantar extensível | 20,90 m² |
| Cozinha aberta | 15,99 m² |
| Despensa | 3,30 m² |
| Lavabo social | 3,30 m² |
| Suíte hóspedes | 15,05 m² |
| Banho hóspedes | 4,84 m² |
| Homeschooling / trabalho / biblioteca | 18,60 m² |
| Lavanderia fechada | 10,80 m² |
| Depósito doméstico | 3,00 m² |
| Entrada garagem / mudroom hipótese | 4,50 m² |
| Circulação íntima reservada | 25,20 m² |
| Suíte casal | 16,12 m² |
| Banho casal | 4,00 m² |
| Closet casal | 2,50 m² |
| Quarto meninos 1 | 12,25 m² |
| Banheiro dos meninos - duas cubas | 5,95 m² |
| Quarto meninos 2 | 12,25 m² |
| **Total interno estimado** | **207,15 m²** |

Áreas externas/apoio visual, não somadas ao total interno:

| Área | Área |
|---|---:|
| Quintal livre | 96,80 m² |
| Alpendre dos fundos | 26,25 m² |
| Garagem coberta | 30,80 m² |
| Vagas descobertas | 30,80 m² |
| Varal reservado | 7,20 m² |
| Jardim de luz íntimo | 7,83 m² |

## Pontos Para Aprovação da Família

- Se o caminho garagem -> mudroom -> cozinha/serviço atende a rotina diária.
- Se o `Jardim de luz íntimo` é aceitável como hipótese para iluminar/ventilar o quarto dos meninos 1.
- Se a suíte de hóspedes ainda precisa de uma antecâmara mais reservada; na v3 ela continua integrada e acessível pela área social/cozinha.
- Se a redução provisória da suíte do casal, banho e closet compensa a criação do jardim de luz.
- Se o hall íntimo de 25,20 m² deve ser mantido, reduzido ou redesenhado.
- Se o homeschooling com 18,60 m² comporta os usos simultâneos com conforto.
- Se alpendre, churrasqueira simples e portas de vidro dão a conexão desejada com quintal.
- Se o tamanho interno estimado de 207,15 m² está compatível com orçamento e terreno futuro.

## Limitações

- Não há validação de lote real, recuos, topografia, orientação solar, estrutura, cobertura ou normas.
- A garagem, quintal e jardim de luz são massas de estudo para fluxo e proporção, não implantação aprovada.
- O passeio 3D foi verificado por renderização/captura e pelos testes geométricos de vãos/colliders; não foi gravado vídeo.
- Esta versão deve orientar conversa familiar, não obra nem aprovação técnica.
