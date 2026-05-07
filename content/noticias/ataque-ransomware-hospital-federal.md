# Ataque de ransomware expõe dados de 400 mil pacientes em hospital federal

Ataque de ransomware contra hospital federal resultou na exposição de dados pessoais de 400 mil pacientes. Saiba como ficaram vulneráveis dados de saúde e quais as implicações legais.

**Adriano Israel** · Análise editorial · Blog LGPD  
📅 28 fevereiro 2025 · ⏱ 10 min de leitura  
⚖ Segurança da Informação · Setor Público

| Pacientes afetados | Dados sensíveis expostos | Custo estimado |
|-------------------|--------------------------|----------------|
| 400 mil          | Diagnósticos, medicações | R$ 800 milhões |

## O que aconteceu?

### Cronologia do ataque

**22 de fevereiro - 3h45 (madrugada)**
- Atacantes exploram vulnerabilidade conhecida em VPN de acesso remoto
- Estabelecem acesso inicial com credenciais roubadas de funcionário
- Movem-se lateralmente pela rede sem detecção

**23 de fevereiro - 14h20**
- Ativam ransomware em múltiplos servidores simultaneamente
- Criptografam banco de dados de prontuários eletrônicos
- Bloqueiam acesso aos servidores de backup

**24 de fevereiro - 06h00**
- Hospital percebe indisponibilidade de sistemas críticos
- Ativa centro de operações de emergência
- Descobre nota de exigência de resgate (ransom note)

**25 de fevereiro - 10h00**
- Hospital comunica à ANPD sobre incidente
- Defesa Civil e Polícia Federal acionadas
- Hospital trabalha com sistemas legados e papel

## Qual foi o impacto?

### Dados expostos

Os atacantes conseguiram acessar:

| Tipo de Dado | Volume | Sensibilidade |
|---|---|---|
| Nomes completos | 400 mil | ⭐⭐ |
| CPF | 400 mil | ⭐⭐⭐⭐⭐ |
| Cartão de saúde/SUS | 380 mil | ⭐⭐⭐⭐ |
| Email e telefone | 398 mil | ⭐⭐⭐ |
| Endereço residencial | 400 mil | ⭐⭐⭐ |
| **Diagnósticos e CIDs** | 350 mil | ⭐⭐⭐⭐⭐ |
| **Medicações prescritas** | 320 mil | ⭐⭐⭐⭐⭐ |
| **Resultados de exames** | 280 mil | ⭐⭐⭐⭐⭐ |
| Dados bancários (alguns) | 12 mil | ⭐⭐⭐⭐⭐ |
| **Histórico de cirurgias** | 95 mil | ⭐⭐⭐⭐⭐ |

⭐ = nível de sensibilidade

### Impacto operacional

- **Atendimentos cancelados:** 45 mil cirurgias és reagendadas
- **Pacientes desviados:** 12 mil pacientes redirecionados a outras unidades
- **Custo de interrupção:** Estimado em R$ 800 milhões
- **Duração da indisponibilidade:** 8 dias até parcial restauração

### Impacto humano

- Pacientes diagnosticados com câncer, diabetes ou HIV tiveram informações expostas
- Mulheres em acompanhamento ginecológico tiveram privacidade violada
- Dependentes químicos e em psicoterapia tiveram historiais vazados
- Potencial exposição a discriminação, assédio ou golpes

## Como isso violou a LGPD?

### Falhas graves de segurança

Segundo análise da polícia federal e auditores de segurança:

1. **VPN sem MFA (multi-factor authentication):**
   - Credenciais roubadas foram suficientes para acesso
   - Banco de dados de senhas estava com hash fraco

2. **Falta de microsegmentação de rede:**
   - Uma vez dentro, atacantes acessaram tudo
   - Servidores críticos na mesma rede de workstations

3. **Backup inadequado:**
   - Backups conectados à rede produtiva
   - Ransomware criptografou também os backups
   - Sem cópia isolada e imutável (offline)

4. **Falta de detecção e resposta (EDR):**
   - Nenhum sistema detectou movimentação lateral por 24 horas
   - Processo de encriptação em massa passou despercebido

5. **Patch management deficiente:**
   - Vulnerabilidade da VPN era conhecida há 6 meses
   - Patch disponível, mas não aplicado

### Artigos da LGPD violados

- **Art. 6, III:** Controlador não garantiu a "finalidade, adequação e necessidade"
- **Art. 14, II:** Medidas de segurança "inadequadas ao risco"
- **Art. 18, I:** Falha na avaliação de impacto à proteção de dados
- **Art. 34:** Não comunicou incidente em 72h (comunicou com atraso)

## Implicações legais e financeiras

### Multas previstas
- **ANPD:** Até 2% do faturamento (para hospital federal: até R$ 50 milhões)
- **Órgão de controle (CGU/TCU):** Possível abertura de processo administrativo
- **Classes de consumidores:** Ações coletivas com indenizações massivas

### Responsabilidade criminal
Polícia Federal abriu inquérito sob:
- **Lei 12.737/2012:** Acesso não autorizado — até 3 anos de prisão
- **Lei 9.609/1998:** Fraude computacional — até 4 anos
- **Possível negligência administrativa:** Se houver responsável específico pela segurança

### Indenizações previstas
Baseado em jurisprudência recente do STJ:
- **Cada vítima:** Entre R$ 5 mil a R$ 50 mil por danos morais
- **400 mil pacientes:** Potencial exposição de R$ 2 a R$ 20 **bilhões** em ações judiciais

## Lições aprendidas para o setor público

### Falhas sistêmicas identificadas

1. **Orçamento insuficiente:** Hospital tinha TI sucateada, 70% dos servidores antes de 2015
2. **Falta de priorização:** Segurança era vista como custo, não como investimento
3. **RH deficiente:** Apenas 3 profissionais de TI para 2.000 servidores
4. **Terceirização inadequada:** Provedora de serviços não tinha SLA de segurança

### Recomendações da ANPD para setor público

✓ **Fazer auditoria urgente** — Identificar gaps de segurança
✓ **Implementar MFA** — Especialmente em acesso remoto
✓ **Backup imutável** — Pelo menos uma cópia offline
✓ **Monitoramento 24/7** — SOC ou contratação de MSSP
✓ **Plano de resposta testado** — Simulações mensais
✓ **Segregação de rede** — DMZ, VLANs, firewall interno
✓ **Gestão de patches** — Políticas automáticas de atualização
✓ **Treinamento de segurança** — Mensal, focado em setor público

## Comunicação aos pacientes: o que foi enviado

O hospital enviou aos 400 mil afetados:

> "Informamos sobre incidente de segurança que pode ter comprometido seus dados pessoais, incluindo nome, CPF, endereço e, em alguns casos, informações de saúde.
>
> **O que estamos fazendo:**
> - Investigação completa em andamento
> - Reforço de segurança nos sistemas
> - Cooperação total com autoridades
>
> **Seu direito:**
> - Acessar dados que colhemos de você
> - Solicitar correção de informações
> - Requerer exclusão de alguns dados
> - Revogar consentimento
>
> **Proteção após o incidente:**
> - Monitore sua conta bancária
> - Atenção a chamadas ou emails suspeitos
> - Denuncie tentativas de fraude à polícia
> - Contate nosso call center: [número]"

## Dúvidas frequentes

### Meus dados foram realmente expostos?
Sim, potencialmente. A ANPD fornece ferramenta de verificação no site (após privacidade com hashing).

### Posso processar o hospital?
Sim. Você pode:
- Ação individual por danos morais
- Participar de ação coletiva de consumidores
- Registrar denúncia na delegacia

### Meus dados de saúde serão usados para fraude?
É um risco. Identidades roubadas podem ser usadas para:
- Abrir conta bancária em seu nome
- Contratar serviços (telecomunicações, empréstimos)
- Comprar medicamentos controlados (sob investigação na polícia)

### O que devo fazer agora?
1. Monitore relatórios de crédito (Serasa, Equifax)
2. Considere colocar trava de crédito
3. Mude senhas de aplicativos sensíveis
4. Ative alertas de transações no banco
5. Guarde certificado do incidente para processo

## Referências

- **ANPD:** Comunicado oficial sobre incidente (25/2/2025)
- **Polícia Federal:** Inquérito nº [X]/2025
- **STJ:** Jurisprudência sobre danos morais em vazamento (vide artigo relacionado)
- **LGPD:** Arts. 6, 14, 18, 34, 42, 44
