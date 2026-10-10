# AGENTS.md | Nossa Casa 3D

## Contexto
Projeto de estudo preliminar arquitetônico para uma casa térrea familiar no Agreste paraibano. Objetivo atual: transformar a alternativa A em L, escolhida como **direção de estudo**, em protótipo de planta 2D/3D navegável. **Não há planta aprovada, lote definido ou medidas aprovadas.** O propósito é revisar disposição, fluxos e espacialidade com a família, não produzir projeto de obra.

## Prioridade das fontes
1. `referencias/03_PROGRAMA_DE_NECESSIDADES_v0.1_APROVADO.md`, programa expressamente aprovado.
2. `referencias/04_ESTUDOS_DISTRIBUICAO_v0.4.md`, preferência A expressa em 10/10/2026 e suas regras para refinamento.
3. `referencias/01_FICHA_FAMILIA_E_ROTINA_v0.1_APROVADA.md`, usos aprovados.
4. `referencias/04_ESQUEMA_A_DISTRIBUICAO_v0.3.svg` e `.png`, **somente relações funcionais** (sem escala).
5. `referencias/02_PAINEL_DE_ANDAMENTO_v4.5.md`, histórico, principalmente decisões recentes.
6. `referencias/05_BRIEFING_CODEX_NOSSA_CASA_v0.1.md`, briefing técnico auxiliar.
Se parecer haver conflito entre fontes, declare a interpretação e escolha a versão aprovada/mais recente. Não silencie conflitos substanciais.

## Confirmado e obrigatório
- Casa térrea em L como direção conceitual de estudo, não geometria exata.
- Quatro dormitórios no programa: suíte do casal, dois quartos com dois filhos em cada um, banheiro compartilhado Jack and Jill acessível **diretamente de ambos** e com **duas cubas**, e suíte interna de hóspedes afastada da ala íntima.
- Homeschooling + trabalho + biblioteca em **um ambiente na casa principal**: dois postos adultos, impressora, mesa grande infantil, mesa pequena, estantes.
- Cozinha **aberta, protagonista**, ilha principalmente para preparo e também refeições rápidas; sala de jantar com mesa extensível de seis lugares; estar de leitura e conversa, sem TV social.
- Portas de vidro amplas ligando estar/jantar/cozinha ao alpendre sombreado **nos fundos**, com churrasqueira simples e quintal livre observável de dentro.
- Despensa, depósito doméstico, lavabo social, lavanderia fechada, varal reservado; mudroom na lavanderia **somente como hipótese a testar**.
- Entrada social de pedestres verdadeiramente funcional e entrada independente a partir da garagem; quatro vagas, duas cobertas e duas descobertas.
- Estética futura: campo nordestino + farmhouse, telhado tradicional e pé-direito alto. Priorizar interiores e fluxos nesta entrega.

## Não fazer
- Não incluir piscina, segunda cozinha gourmet, sala de TV, chalé independente, edícula de estudos ou segundo pavimento.
- Não representar a imagem de referência como planta medida, nem criar cotas reais a partir do SVG.
- Não afirmar compatibilidade com terreno de 600 m²/1.000 m², orientação solar, normas, recuos, estrutura ou orçamento.
- Não substituir o programa aprovado por uma planta de demonstração; adaptar paredes, portas, janelas, cômodos e cena 3D.
- Não enviar commits, criar PR ou publicar sem confirmação do usuário, salvo se houver autorização explícita na tarefa. Trabalhe em branch local quando possível e preserve a licença MIT e atribuições.

## Engenharia de software
- Inspecionar o código existente; documentar limitações encontradas.
- Uma fonte de dados geométricos deve dirigir tanto 2D quanto 3D, inclusive paredes, vãos, portas e ambientes; se refatoração completa for excessiva, manter sincronização verificável e registrar limitações.
- Não descaracterizar sem necessidade os controles básicos originais (movimentar móveis, selecionar áreas, 2D/3D, importação/exportação quando disponíveis).
- Etiquetas e instruções de uso em português; dados persistentes e exportáveis em arquivo reabrível.
- Testar execução local no navegador, inspecionar console e renderização. Se teste automatizado de browser não for viável, dizer exatamente o que foi testado e o que ficou sem verificar.
- Rotular medidas usadas para modelar como **HIPÓTESES PROVISÓRIAS** e fornecer tabela de áreas estimadas a revisar, não como área final aprovada.
- Entregar prints 2D e 3D, checklist completo e pontos para decisão familiar.
- Parar após a primeira versão utilizável e pedir revisão; não concluir a etapa arquitetônica por conta própria.
