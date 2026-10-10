# Nossa Casa 3D

Protótipo local 2D/3D para revisar a distribuição interna preliminar da **Nossa Casa**, usando o app Floorplan 3D original como base e mantendo a licença MIT.

Esta versão implementa a alternativa A, revisada na v2: casa térrea em L, cozinha aberta integrada ao jantar/estar, grandes portas para o alpendre dos fundos, quintal livre, ala íntima reservada, suíte de hóspedes integrada e sala de homeschooling/trabalho/biblioteca dentro da casa.

## Estado do Estudo

As dimensões e áreas exibidas são **HIPÓTESES PROVISÓRIAS** para visualização e conversa familiar. Não são planta aprovada, projeto executivo, verificação de terreno, estrutura, orçamento, recuos, orientação solar ou atendimento normativo.

## Como Abrir

```bash
python3 -m http.server 5173
```

Acesse `http://127.0.0.1:5173`.

Também é possível abrir `index.html` diretamente para a planta 2D. Para usar a visualização 3D, mantenha internet disponível porque o Three.js é carregado por CDN.

## Como Navegar

- `Planta 2D`: pan com arraste no vazio, zoom com roda do mouse, seleção de ambientes/móveis por clique.
- `Cena 3D`: botão no topo alterna para modelo navegável; use `Orbitar`, `Topo` e `Aérea`.
- `Passeio`: modo de primeira pessoa com `WASD`, mouse para olhar, `Shift` para acelerar e `E` para portas.
- `Arquivo`: exporta imagem PNG e JSON; importa o JSON reabrível.
- `dados/nossa-casa-projeto-v2.json`: exportação inicial corrigida do protótipo.

## Entregas Geradas

- `capturas/01-planta-2d.png`
- `capturas/02-3d-aerea.png`
- `capturas/03-3d-social-alpendre.png`
- `dados/nossa-casa-projeto-v2.json`
- `dados/relatorio-portas-v2.json`
- `RELATORIO_DE_VALIDACAO.md`

## Arquivos de Referência

Os documentos do pacote ficam em `referencias/`. A prioridade de decisão está em `AGENTS.md`, especialmente:

1. Programa de necessidades aprovado.
2. Estudo de distribuição v0.4, com alternativa A escolhida para aprofundamento.
3. Esquema A como referência de relações, não de escala.

## Testes

```bash
npm test
npm run capture
```

O primeiro comando valida marcadores essenciais, conexões geométricas de portas, sobreposições, aberturas externas e áreas mínimas de estudo. O segundo abre um servidor local temporário, confere WebGL, gera capturas, exporta o JSON e importa o arquivo novamente para comparar o estado.

## Base Original

Projeto de origem: `https://github.com/wy51ai/floorplan-3d`.

Licença preservada: [MIT](LICENSE).
