# Nossa Casa 3D | Leia primeiro

Este pacote é o material para iniciar com o Codex um protótipo navegável da alternativa A, uma casa térrea em L. A família escolheu **aprofundar** essa alternativa em 10/10/2026. **A planta e as dimensões ainda não foram aprovadas.**

## Repositório de origem

https://github.com/wy51ai/floorplan-3d (licença MIT, preserve a licença e os créditos existentes).

O repositório contém um aplicativo de planta 2D/3D desenvolvido em HTML/JS, com sua planta de demonstração definida no código. Não basta importar um JSON: é necessário adaptar geometria, paredes, portas e 3D para a nova planta.

## Ordem de uso

1. Crie uma **cópia ou fork** do repositório original no seu GitHub (por exemplo, `nossa-casa-3d`) ou clone-o para uma pasta local. Não modifique o repositório original do autor.
2. Copie o conteúdo deste pacote para a **raiz do novo repositório** (o arquivo `AGENTS.md` deve ficar na raiz; os documentos devem ficar na pasta `referencias/`).
3. Abra esse repositório no Codex e envie o texto de `PROMPT_PARA_CODEX.md`, ou cole o prompt diretamente na conversa com o Codex.
4. Peça para o Codex testar o protótipo e entregar as imagens de planta e perspectiva 3D, relatório e instruções. Revise aqui no Projeto Nossa Casa antes de considerar qualquer layout aprovado.

**Se usar o Codex na nuvem:** primeiro disponibilize o repositório com os arquivos do pacote no GitHub e selecione-o no ambiente do Codex. Não presuma que o Codex tenha acesso automático aos arquivos deste ChatGPT ou a um ZIP que permaneça apenas baixado no seu computador.

**Se usar o Codex local/CLI:** extraia o pacote dentro da cópia local do repositório original; abra o Codex nessa pasta. Evite colocar o pacote numa subpasta extra, porque o `AGENTS.md` precisa estar na raiz do projeto.

## Fontes e limites

- `referencias/03_PROGRAMA_DE_NECESSIDADES_v0.1_APROVADO.md`: exigências **aprovadas**.
- `referencias/04_ESTUDOS_DISTRIBUICAO_v0.4.md`: alternativa A **preferida para aprofundamento**. Trechos referentes a C são apenas histórico e **não** devem ser implementados.
- `referencias/04_ESQUEMA_A_DISTRIBUICAO_v0.3.svg` e `.png`: esquema **sem escala**; referência de relações, não de medidas nem posição definitiva de paredes.
- `referencias/01_FICHA_FAMILIA_E_ROTINA_v0.1_APROVADA.md`: necessidades de uso aprovadas.
- `referencias/02_PAINEL_DE_ANDAMENTO_v4.5.md`: histórico e decisões. Havendo conflito, priorizar programa aprovado e escolha A mais recente.
- `referencias/05_BRIEFING_CODEX_NOSSA_CASA_v0.1.md`: briefing anterior complementar.

Leia `AGENTS.md` e `referencias/CRITERIOS_DE_ACEITE.md`. Não se deve inventar lote, orçamento, projeto executivo ou aprovação da família.

## O que esperamos de volta

Um protótipo local 2D/3D funcional, imagens de apresentação, arquivo de dados reabrível, instruções simples em português e relatório do que é hipótese e do que já está decidido. Deve parar para revisão da família, sem começar a etapa de projeto executivo.
