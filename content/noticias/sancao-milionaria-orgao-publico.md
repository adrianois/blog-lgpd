# ANPD aplica primeira sanção milionária a órgão público por vazamento de dados de servidores

A Autoridade Nacional de Proteção de Dados concluiu investigação e aplicou multa inédita a prefeitura que deixou exposto banco de dados com informações pessoais de 12 mil servidores. Decisão histórica que sinaliza endurecimento da fiscalização sobre o setor público municipal.

**Adriano Israel** · Análise editorial · Blog LGPD  
📅 03 maio 2025 · ⏱ 8 min de leitura  
⚖ Sanção · Setor Público

Em decisão inédita no Brasil, a **Autoridade Nacional de Proteção de Dados (ANPD) aplicou sanção administrativa milionária a um município brasileiro** por violação à Lei Geral de Proteção de Dados. O caso, que tramitou por quase dois anos no processo administrativo sancionador da autoridade, envolve a exposição não autorizada de um banco de dados com informações pessoais de aproximadamente 12 mil servidores municipais ativos e inativos.

A decisão, publicada no Diário Oficial da União, representa um marco no histórico de atuação da ANPD e estabelece precedente significativo para os cerca de 5.570 municípios brasileiros que, em sua maioria, ainda não iniciaram o processo de adequação à LGPD.

| Valor da multa aplicada | Servidores afetados | Duração do processo |
|-------------------------|---------------------|---------------------|
| R$ 1,2M                | 12 mil             | 23 meses           |

## O caso: o que aconteceu

O incidente foi identificado por pesquisadores de segurança que encontraram um banco de dados de acesso público na internet contendo informações de servidores municipais. Os dados expostos incluíam **nome completo, CPF, data de nascimento, matrícula funcional, dados bancários para pagamento de salário, histórico de férias e licenças, e registros de avaliação de desempenho** — alguns dos quais configuravam dados sensíveis nos termos do art. 5º, II da LGPD.

A exposição teria ocorrido por falha de configuração em um servidor de banco de dados durante uma migração de sistemas, deixando o banco de dados acessível sem autenticação por um período estimado de quatro meses. Nesse intervalo, não há como determinar com certeza quantos terceiros acessaram ou copiaram os dados.

> ⚠ **Dados expostos no caso**  
> Além de dados comuns (nome, CPF, matrícula), o banco de dados continha registros de afastamentos por razões de saúde, o que configura exposição de **dados sensíveis de saúde** — categoria que recebe proteção reforçada pela LGPD e exige base legal específica para tratamento (art. 11).

## As infrações identificadas pela ANPD

O processo administrativo sancionador identificou múltiplas infrações ao longo da investigação:

- **Ausência de medidas de segurança técnicas e administrativas** adequadas (art. 46 da LGPD) — o banco de dados estava sem autenticação, sem criptografia e sem monitoramento de acessos
- **Falta de comunicação tempestiva do incidente** à ANPD e aos titulares afetados (art. 48) — o município levou mais de 60 dias para comunicar o incidente após tomar ciência
- **Ausência de Encarregado de Proteção de Dados (DPO)** formalmente nomeado (art. 41) — o município não havia designado responsável até a data do incidente
- **Coleta e retenção excessiva de dados** (violação ao princípio da necessidade, art. 6º, III) — dados de servidores já desligados há mais de 10 anos permaneciam no banco de dados sem critério de descarte definido
- **Ausência de Política de Proteção de Dados** e de contratos com cláusulas LGPD com o fornecedor do sistema

## A decisão e as sanções aplicadas

A ANPD aplicou um conjunto de sanções conforme previsto no art. 52 da LGPD:

- **Multa simples** no valor de R$ 1,2 milhão — calculada com base no faturamento (receita corrente líquida) do município e no grau de culpa apurado
- **Publicização da infração** — a decisão foi divulgada com identificação do município no site da ANPD e publicada no DOU
- **Bloqueio temporário dos dados** do banco afetado até implementação das medidas corretivas determinadas
- **Determinação de adequação** em 180 dias, com obrigação de: nomear DPO, elaborar Política de Proteção de Dados, firmar contratos LGPD com todos os fornecedores de TI e implementar criptografia nos sistemas que tratam dados de servidores

> **Agravantes considerados pela ANPD:** A gravidade da infração foi agravada pela presença de dados sensíveis (histórico de saúde), pelo volume elevado de titulares afetados (12 mil), pela duração da exposição (4 meses) e pela ausência de qualquer programa de conformidade com a LGPD no município — o que demonstrou negligência sistemática, não apenas uma falha pontual.

## Cronologia do processo

- **Jun 2023** - Incidente identificado por pesquisadores  
  Banco de dados exposto é descoberto por pesquisadores de segurança e comunicado ao município.

- **Ago 2023** - Comunicação tardia à ANPD  
  Município comunica o incidente à ANPD com mais de 60 dias de atraso, configurando infração autônoma.

- **Set 2023** - Abertura do Processo Administrativo Sancionador  
  ANPD instaura formalmente o PAS e notifica o município para apresentação de defesa.

- **Mar 2024** - Fase de instrução e perícia  
  Peritos da ANPD realizam análise técnica dos sistemas e do banco de dados afetado.

- **Mai 2025** - Decisão final publicada  
  ANPD publica decisão com aplicação de multa de R$ 1,2 milhão e determinação de medidas corretivas.

## Implicações para outros municípios

A decisão tem impacto direto sobre os demais municípios brasileiros por várias razões:

- **Precedente de responsabilização pública:** Encerra a dúvida sobre se a ANPD efetivamente sanciona entes públicos municipais. Sim, sanciona.
- **Critérios de dosimetria revelados:** A fundamentação da decisão detalha os critérios usados para calcular a multa, permitindo que outros municípios avaliem sua própria exposição ao risco.
- **Lista de infrações como checklist invertido:** As infrações identificadas no caso são um espelho do que todos os municípios devem corrigir — DPO, política, contratos, criptografia, comunicação de incidentes.
- **Publicização como desincentivo:** A divulgação do nome do município é, em muitos casos, mais impactante politicamente do que a multa. Gestores atentos vão notar.

> 💡 **O que fazer agora se você gerencia um município**  
> Se sua câmara ou prefeitura ainda não tem DPO nomeado, política de proteção de dados e contratos LGPD com fornecedores de TI, esses são os três primeiros passos. Consulte o [roteiro de adequação para câmaras municipais](artigo.html?file=/blog-lgpd/content/artigos/camara-municipal-baixo-orcamento.md) publicado neste blog e os materiais gratuitos disponíveis na [Central de Downloads](downloads.html).

## Conclusão: o setor público não está imune

Durante anos, circulou no setor público a percepção informal de que a ANPD priorizaria empresas privadas nas sanções e que órgãos públicos estariam, na prática, protegidos pela lentidão burocrática dos processos administrativos. Esta decisão desfaz definitivamente essa percepção.

A ANPD mostrou que tem instrumentos, vontade técnica e fundamento legal para sancionar municípios. E que o faz com transparência: publicando a decisão, identificando o infrator e detalhando os fundamentos. É uma mensagem clara para os 5.570 gestores municipais do Brasil.

**Tags:** ANPD, Sanção, Setor Público, Vazamento de Dados, Multa, Processo Sancionador

---

**Adriano Israel**  
Especialista em LGPD com foco em setor público. Acompanha e analisa as decisões da ANPD com foco em impacto para municípios brasileiros.  
✉️ adriano.israel@live.com  
📸 [@adrianoisrael7](https://instagram.com/adrianoisrael7)

### Leia também

- **Setor Público:** Como adequar uma Câmara Municipal com baixo orçamento  
  Roteiro prático em 5 etapas para não ser o próximo caso de sanção.  
  *Adriano Israel* · [Ler →](artigo.html?file=/blog-lgpd/content/artigos/camara-municipal-baixo-orcamento.md)

  

- **Segurança:** Guia de Criptografia para não técnicos  
  Como garantir que seus sistemas tenham o mínimo de proteção técnica exigido.  
  *Adriano Israel* · [Ler →](artigo.html?file=/blog-lgpd/content/artigos/criptografia-nao-tecnicos.md)

  