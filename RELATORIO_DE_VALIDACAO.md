# Relatório de Validação | Nossa Casa 3D v2

Data: 10/10/2026  
Escopo: versão funcional corrigida a partir do relatório `06_RELATORIO_REVISAO_NOSSA_CASA_3D_v1.0.md` e do prompt `06_PROMPT_CORRECAO_CODEX_NOSSA_CASA_v2.md`.  
Importante: todas as dimensões, áreas e posições são **HIPÓTESES PROVISÓRIAS** para revisão familiar.

## Erros da v1 Tratados na v2

| Item revisado | Correção aplicada |
|---|---|
| Lavabo acessava área errada | Lavabo passou a abrir para a área social/cozinha. |
| Despensa acessava quarto de hóspedes | Despensa passou a abrir diretamente para a cozinha. |
| Lavanderia e varal sem fluxo prático | Lavanderia agora recebe porta interna e saída própria para varal reservado. |
| Garagem/vagas sobrepunham ambientes | Vagas foram movidas para a faixa externa inferior, sem sobreposição com dormitórios/circulação. |
| Entrada social caía no homeschooling | Entrada social agora acessa o estar. |
| Cozinha abria de forma incoerente | Cozinha permanece integrada ao jantar/estar e ganhou porta de vidro para o alpendre. |
| Closet sem acesso claro pela suíte | Closet do casal agora tem porta pela suíte. |
| Circulação íntima estreita | Hall íntimo foi redesenhado como circulação utilizável. |
| Quarto 1 e suíte de hóspedes sem abertura externa | Ambos receberam aberturas para exterior/áreas abertas. |
| Homeschool, alpendre e quartos pequenos | Homeschool, alpendre e quartos infantis foram ampliados como hipótese de estudo. |
| Quintal tratado como desenho fechado | Quintal foi ampliado e marcado como área livre conceitual, não lote aprovado. |

## Testes Realizados

- `npm test`: OK.
- `node scripts/validate-nossa-casa.mjs`: OK, validou ambientes e marcadores principais.
- `node scripts/validate-geometry.mjs`: OK, validou conexões reais de portas, ausência de sobreposição, aberturas externas dos dormitórios e áreas mínimas de estudo.
- `npm run capture`: OK, abriu o app em servidor local temporário, capturou 2D/3D, confirmou WebGL, exportou JSON e importou o mesmo arquivo.
- Console do navegador durante captura: OK, sem mensagens.
- Importação real do JSON: OK, `importMatchesExport: true`.

## Evidências Geradas

- Planta 2D: `capturas/01-planta-2d.png`
- Modelo 3D aéreo: `capturas/02-3d-aerea.png`
- Modelo 3D social/alpendre: `capturas/03-3d-social-alpendre.png`
- JSON exportado/importável: `dados/nossa-casa-projeto-v2.json`
- Relatório automático de portas e áreas: `dados/relatorio-portas-v2.json`

## Validação de Portas Principais

- Entrada social: exterior <-> estar.
- Entrada pela garagem: garagem coberta <-> mudroom.
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
| Suíte casal | 18,60 m² |
| Banho casal | 4,50 m² |
| Closet casal | 3,00 m² |
| Quarto meninos 1 | 12,25 m² |
| Banheiro dos meninos - duas cubas | 5,95 m² |
| Quarto meninos 2 | 12,25 m² |
| **Total interno estimado** | **210,63 m²** |

Áreas externas/apoio visual, não somadas ao total interno:

| Área | Área |
|---|---:|
| Quintal livre | 96,80 m² |
| Alpendre dos fundos | 26,25 m² |
| Garagem coberta | 30,80 m² |
| Vagas descobertas | 30,80 m² |
| Varal reservado | 7,20 m² |

## Pontos Para Aprovação da Família

- Se a entrada social pelo estar é a relação desejada para chegada de visitas.
- Se o acesso da suíte de hóspedes pela área social/cozinha é aceitável ou deve ter antecâmara.
- Se o hall íntimo ficou reservado o suficiente apesar da área de circulação maior.
- Se o homeschooling com 18,60 m² atende estudo, trabalho, biblioteca e uso simultâneo.
- Se a cozinha aberta deve manter ilha livre ou receber pia/fogão em ciclo futuro.
- Se alpendre, churrasqueira simples e portas de vidro dão a conexão desejada com quintal.
- Se lavanderia, varal, mudroom e garagem funcionam para chegada diária da família.
- Se o tamanho interno estimado de 210,63 m² está compatível com orçamento e terreno futuro.

## Limitações

- Não há validação de lote real, recuos, topografia, orientação solar, estrutura, cobertura ou normas.
- A garagem e o quintal são massas de estudo para fluxo e proporção, não implantação aprovada.
- O 3D usa a mesma geometria da planta, mas ainda é volumetria preliminar sem detalhamento construtivo.
- Esta versão deve orientar conversa familiar, não obra nem aprovação técnica.
