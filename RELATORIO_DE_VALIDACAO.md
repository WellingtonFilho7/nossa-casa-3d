# Relatório de Validação | Nossa Casa 3D v1

Data: 10/10/2026  
Escopo: primeira versão funcional para revisão familiar da alternativa A em L.  
Importante: todas as dimensões e áreas são **HIPÓTESES PROVISÓRIAS**.

## Testes Realizados

- `npm test`: OK. Validou presença dos ambientes e marcadores obrigatórios no `index.html`.
- `node scripts/capture-screenshots.mjs`: OK. Abriu `http://127.0.0.1:5173`, capturou 2D/3D, confirmou canvas WebGL e exportou JSON.
- Console do navegador durante captura: OK, sem mensagens.
- Capturas geradas:
  - `capturas/01-planta-2d.png`
  - `capturas/02-3d-aerea.png`
  - `capturas/03-3d-social-alpendre.png`
- JSON reabrível gerado pelo app: `dados/nossa-casa-projeto-v1.json`.

## Ambientes e Privacidade

- OK: suíte do casal com dormitório, banheiro e closet hipotético.
- OK: dois dormitórios infantis, com duas camas em cada quarto.
- OK: um banheiro compartilhado dos meninos com duas cubas e porta direta para cada quarto.
- OK: suíte interna de hóspedes com banheiro, afastada da ala íntima familiar.
- OK: sala de homeschooling/trabalho/biblioteca dentro da casa, com postos adultos, impressora, mesas e estantes.
- OK: estar de conversa/leitura sem TV social.
- OK: cozinha aberta e protagonista, integrada ao jantar e ao estar, com ilha de preparo e banquetas.
- OK: mesa de jantar de seis lugares, tratada como extensível.
- OK: lavabo social sem passagem pela ala íntima.
- OK: despensa distinta do depósito doméstico.
- OK: lavanderia fechada, varal reservado e mudroom marcado como hipótese.

## Acessos, Quintal e Externas

- OK: entrada social de pedestres indicada e conectada ao interior.
- OK: entrada pela garagem distinta, ligada ao mudroom/lavanderia.
- OK: quatro vagas indicadas, duas cobertas e duas descobertas, sem validação de lote.
- OK: grandes portas de vidro do estar/jantar/cozinha para o alpendre dos fundos.
- OK: alpendre com estar externo e churrasqueira simples, sem cozinha gourmet duplicada.
- OK: quintal livre predominante e observável pela área social.
- OK: sem piscina, chalé externo, edícula de estudo, sobrado ou TV social.

## Aplicação 2D/3D

- OK: planta 2D coerente em uma hipótese dimensional.
- OK: cena 3D usa os mesmos arrays `ROOMS`, `WALLS`, `WINS`, `DOORS` e `SLIDES` da planta.
- OK: navegação orbital e modo passeio disponíveis.
- OK: importação/exportação JSON disponível e arquivo inicial exportado.
- PARCIAL: a geometria de portas/janelas é suficiente para revisão espacial, mas ainda precisa de refinamento arquitetônico fino antes de qualquer etapa técnica.
- PARCIAL: não há verificação de terreno, orientação solar, recuos, estrutura, cobertura, custos ou norma.

## Tabela de Áreas Estimadas

Áreas internas estimadas pelo protótipo:

| Ambiente | Área |
|---|---:|
| Estar leitura sem TV | 28,60 m² |
| Jantar extensível | 20,90 m² |
| Cozinha aberta | 20,90 m² |
| Despensa | 3,30 m² |
| Lavabo social | 4,50 m² |
| Suíte hóspedes | 12,00 m² |
| Banho hóspedes | 4,40 m² |
| Homeschooling / trabalho / biblioteca | 13,00 m² |
| Lavanderia fechada | 9,50 m² |
| Depósito doméstico | 3,75 m² |
| Entrada garagem / mudroom hipótese | 5,75 m² |
| Circulação íntima reservada | 16,95 m² |
| Suíte casal | 19,95 m² |
| Banho casal | 6,60 m² |
| Closet casal | 3,90 m² |
| Quarto meninos 1 | 10,05 m² |
| Banheiro dos meninos - duas cubas | 5,10 m² |
| Quarto meninos 2 | 10,95 m² |
| **Total interno estimado** | **200,10 m²** |

Áreas externas/apoio visual, não somadas ao total interno:

| Área | Área |
|---|---:|
| Quintal livre | 90,85 m² |
| Alpendre dos fundos | 16,80 m² |
| Garagem coberta | 30,80 m² |
| Vagas descobertas | 31,36 m² |
| Varal reservado | 7,60 m² |

## Pontos Para Aprovação da Família

- Se a ala íntima no braço direito do L preserva privacidade suficiente sem excesso de corredor.
- Se a suíte de hóspedes está afastada o bastante e ainda prática para visitas.
- Se a sala de homeschooling tem área adequada para uso simultâneo de adultos e crianças.
- Se a cozinha/jantar/estar estão integrados na medida certa e se a ilha deve receber pia, fogão ou ficar livre.
- Se a posição da lavanderia, mudroom e varal funciona para chegada da garagem e rotina das crianças.
- Se o alpendre dos fundos está grande o suficiente para convívio e churrasqueira simples.
- Se o tamanho interno hipotético está compatível com o nível de casa desejado antes de estudar terreno/custos.

## Critério de Parada

Esta versão para na etapa de revisão familiar. Não deve ser tratada como planta aprovada nem como base para obra sem novo ciclo de decisão arquitetônica.
