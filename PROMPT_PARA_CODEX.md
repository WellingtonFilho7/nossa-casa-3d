Quero que você implemente a PRIMEIRA VERSÃO FUNCIONAL do projeto **Nossa Casa 3D**, usando o repositório `https://github.com/wy51ai/floorplan-3d` como base, sob minha cópia/fork. Os arquivos deste pacote estão na raiz do repositório e em `referencias/`.

LEIA PRIMEIRO `AGENTS.md`, `LEIA_PRIMEIRO.md`, `referencias/03_PROGRAMA_DE_NECESSIDADES_v0.1_APROVADO.md`, `referencias/04_ESTUDOS_DISTRIBUICAO_v0.4.md` e `referencias/04_ESQUEMA_A_DISTRIBUICAO_v0.3.svg`. Consulte os demais arquivos como contexto. Não assuma que o SVG tenha escala.

NOSSO OBJETIVO É BEM ESPECÍFICO:
- Adaptar o visualizador 2D/3D de demonstração para a nossa casa térrea **em L, alternativa A**.
- Criar, com hipóteses dimensionais explicitadas, um arranjo espacial COERENTE dos ambientes definidos no programa de necessidades. A família escolheu o conceito em L, mas **ainda não aprovou nenhuma planta**.
- Fazer todos os ambientes, paredes, portas, aberturas e móveis aparecerem de forma congruente em 2D e 3D, com navegação virtual utilizável.
- Possibilitar que eu revise a distribuição, as distâncias e a convivência sala/cozinha/alpendre/quintal com minha família.

REGRAS INEGOCIÁVEIS:
1. Não inventar dados do terreno nem afirmar que a planta cabe em lote real. A rua na parte inferior do esquema é apenas convenção gráfica.
2. Não retirar nenhum ambiente obrigatório do programa; não transformar o banheiro compartilhado dos meninos em dois banheiros; são dois quartos ligados DIRETAMENTE a um mesmo banheiro com DUAS cubas.
3. Na alternativa A, a suíte de hóspedes FICA DENTRO da casa, mas afastada da ala familiar; não criar chalé externo ou edícula de estudos.
4. Cozinha aberta e protagonista, ilha de preparo com alguns lugares rápidos, mesa extensível, sala de estar sem TV, biblioteca/escritório/homeschooling integrada numa sala própria, alpendre principal nos fundos conectado por grandes portas de vidro, churrasqueira simples e quintal livre.
5. Entrada social funcional + entrada de garagem diferentes; quatro vagas (duas cobertas, duas descobertas); lavanderia fechada com varal reservado; mudroom apenas como hipótese revisável.
6. Não priorizar fachada, telhado ou cálculo de obra. Queremos primeiramente compreender a casa por dentro.
7. O projeto-base define sua planta no código. Verifique como atualizar `ROOMS`, `WALLS`, `WINS`, `DOORS` e afins; não suponha que a importação JSON padrão resolva a mudança de layout.
8. Toda metragem usada para viabilizar a modelagem deve estar claramente identificada como PROVISÓRIA, sem aprovação arquitetônica, técnica ou jurídica.

COMO EXECUTAR:
A. Examine o funcionamento e a arquitetura existentes e apresente em poucas linhas seu plano de implementação.
B. Implemente a casa em L com geometria coerente: limites das salas, paredes, vãos, portas, mobiliário; 2D e 3D sincronizados. Se for necessário, simplifique modelos decorativos, mas NÃO comprometa a coerência espacial e os acessos.
C. Faça a casa abrível localmente, com controles em português, e mantenha ou adapte importação/exportação em formato reabrível.
D. Teste o aplicativo no navegador e corrija falhas detectáveis. Verifique também os critérios em `referencias/CRITERIOS_DE_ACEITE.md`.
E. Entregue capturas de tela legíveis: vista superior 2D, vista 3D aérea, vista 3D da área social voltada para o alpendre; tabela das áreas hipotéticas, README de uso e RELATORIO_DE_VALIDACAO.md identificando requisitos atendidos, pendências e suposições.
F. Ao fim, pare para revisão da família. Não publique nem faça push sem minha autorização; não chame isso de planta final aprovada.

Se faltarem dados, proponha hipóteses explícitas e razoáveis para esta primeira visualização. Só me interrompa para perguntar se uma decisão for indispensável para manter os requisitos aprovados. Quero código e protótipo, não apenas um plano de trabalho.
