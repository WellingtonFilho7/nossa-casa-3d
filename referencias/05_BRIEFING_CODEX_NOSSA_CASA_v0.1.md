# Nossa Casa | Briefing para Codex ou Claude Code

**Versão:** 0.1  
**Data:** 10/10/2026  
**Objetivo:** criar o primeiro protótipo interativo 2D/3D da alternativa A (casa térrea em L), usando como base o projeto MIT `https://github.com/wy51ai/floorplan-3d`.

## Arquivos de referência obrigatórios

1. `03_PROGRAMA_DE_NECESSIDADES_v0.1_APROVADO.md` (programa aprovado, fonte das exigências).
2. `04_ESTUDOS_DISTRIBUICAO_v0.4.md` (escolha da alternativa A, sem aprovação de planta).
3. `04_ESQUEMA_A_DISTRIBUICAO_v0.3.svg` (esquema ilustrativo de relações espaciais, SEM escala).
4. `02_PAINEL_DE_ANDAMENTO_v4.5.md` (somente para resolver dúvidas e identificar decisões já tomadas).

Não presuma que estes documentos estejam disponíveis automaticamente na sessão de Codex: anexe-os ou copie-os para a pasta de trabalho.

## Tarefa de desenvolvimento

1. Inspecione a arquitetura e as limitações do repositório-base antes de fazer alterações. A geometria dos ambientes, paredes, vãos e portas está definida no `index.html`. Exportar/importar JSON na implementação original não é equivalente a criar uma planta nova.
2. Trabalhe numa **cópia ou fork sob minha conta**, preservando licença e créditos MIT do projeto original. Não envie alterações para o repositório original. Antes de publicar ou efetuar alterações remotas, apresente as operações propostas para aprovação.
3. Substitua a configuração da planta de demonstração por uma proposta geométrica **provisória** para a Nossa Casa em L. Use dimensões indicativas coerentes entre si, declaradas no README e na interface como HIPÓTESES, **não medidas aprovadas** nem projeto arquitetônico executável.
4. Modele os espaços conforme os arquivos aprovados: suíte do casal; dois dormitórios para dois filhos cada, conectados a um único banheiro com duas pias e portas de ambos os quartos; suíte interna de hóspedes afastada da ala familiar; lavabo social; estar para conversa e leitura; jantar com mesa extensível para seis; cozinha aberta protagonista com ilha principalmente de preparo e algumas banquetas; despensa; depósito doméstico; lavanderia fechada e varal externo reservado; sala integrada de homeschooling, trabalho e biblioteca (dois computadores + impressora, mesa coletiva das crianças, mesa dos menores, estantes); entrada social útil; entrada independente por garagem; quatro vagas sendo duas cobertas; alpendre principal posterior conectado à sala e à cozinha por portas amplas; churrasqueira simples; quintal livre e observável.
5. **Não inclua** piscina, sala de TV, edícula de estudos, chalé de hóspedes externo, segundo pavimento ou cozinha gourmet completa. Mudroom integrada à lavanderia permanece hipótese, a ser representada claramente como sugestão revisável.
6. Garanta que 2D, 3D, portas, janelas, mobiliário e rótulos usem a **mesma geometria**, sem paredes desencontradas ou ambientes sem acesso. Permita navegar por todos os ambientes em 3D. Idealmente, separe os dados geométricos da lógica da interface para facilitar alterações futuras.
7. Preserve a capacidade de exportar a planta e imagem; se alterar o formato JSON, documente a compatibilidade e permita reabrir a versão criada. Use nomes e legenda em português, e forneça instruções simples para abrir localmente.
8. Não crie números de orçamento, dimensões do terreno, posição solar, recuos ou alegações de viabilidade legal. A fachada *farmhouse nordestina* (telhado tradicional, beirais, alpendre e pé-direito alto) é objetivo estético para etapa futura; o protótipo inicial é para **distribuição espacial e circulação**.

## Entregáveis esperados

- Protótipo local utilizável, abrindo no navegador em 2D e 3D.
- Capturas de tela da planta e de uma perspectiva 3D, com identificação de que são conceituais.
- README curto em português com instruções de uso e limites do protótipo.
- Relatório de validação: conferir todos os ambientes, acessos, portas dos quartos dos filhos ao banheiro compartilhado, circulações e abertura social para o alpendre; apontar pendências para nossa revisão antes de considerar planta aprovada.
- Lista clara de modificações efetuadas e, se autorizado, branch ou pull request em meu repositório.

**Ponto de parada:** entregue uma primeira versão funcional para revisão familiar. NÃO aprove a planta nem decida sozinho o layout final. O Chat do Projeto Nossa Casa receberá as imagens e o relatório para revisão da etapa 4; só depois serão fixadas proporções da etapa 5.
