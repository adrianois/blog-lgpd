# Responsabilidade solidária em condomínios: o que dizem as primeiras decisões

Primeiros julgados estabelecem como condomínios são responsáveis por vazamento de dados de moradores. Síndico e condomínio responderão solidariamente? Entenda o entendimento dos tribunais.

**Adriano Israel** · Análise editorial · Blog LGPD  
📅 20 março 2025 · ⏱ 7 min de leitura  
⚖ Direito do Titular

| Dados coletados | Exemplos | Sensibilidade |
|-----------------|----------|--------------|
| Identificação | Nome, CPF | ⭐⭐⭐ |
| Biometria | Impressão digital | ⭐⭐⭐⭐⭐ |

## O contexto: condomínios como controladores de dados

### Que dados um condomínio coleta?

| Tipo de Dado | Exemplo | Sensibilidade |
|---|---|---|
| Identificação | Nome, CPF, RG, CNH | ⭐⭐⭐ |
| Localização | Ponto de acesso (portaria, elevador, garagem) | ⭐⭐⭐⭐ |
| Biometria | Impressão digital, reconhecimento facial | ⭐⭐⭐⭐⭐ |
| Placas de veículos | Identificação de carros | ⭐⭐ |
| Ligações de emergência | Contatos de moradores | ⭐⭐⭐ |
| Histórico de acesso | Horários que morador entra/sai | ⭐⭐⭐⭐ |
| Dados de funcionários | Zeladores, segurança, faxineiros | ⭐⭐⭐ |
| Dados de visitantes | Registro de quem entra | ⭐⭐⭐ |

**Pergunta legal:** O condomínio é **responsável** por todos esses dados? A resposta é **SIM**, mediante adequação à LGPD.

## As primeiras decisões judiciais

### Decisão 1: Acesso Indevido ao Sistema de Câmeras (TJ-SP, 2024)

**Caso:**
- Condomínio de 80 apartamentos em São Paulo
- Síndico, sem autorização adequada, revela para porteiro lista completa de moradores
- Porteiro, irritado com morador, publica em grupo de WhatsApp: endereços, CPFs, horários de saída

**Quem foi processado:**
- Síndico (pessoa física)
- Condomínio (pessoa jurídica)
- Porteiro (pessoa física)

**Decisão do tribunal:**
- ✓ Síndico é **responsável pessoalmente** → Negligência ao não garantir confidencialidade
- ✓ Condomínio é **responsável solidariamente** → Como entidade que coleta e controla dados
- ✓ Porteiro é **responsável pessoalmente** → Como autor direto da divulgação

**Indenização fixada:**
- R$ 5 mil por morador afetado (80 moradores = R$ 400 mil total)
- **Todos os três foram condenados** solidariamente — condomínio pagou
- Síndico será cobrado pelo condomínio (ação de regresso)

**Princípio:** "O condomínio, ao terceirizar função de controle de dados, não se furta à responsabilidade. A delegação não é isenção."

### Decisão 2: Vazamento de Biometria (TJ-MG, 2024)

**Caso:**
- Condomínio implantou **sistema de reconhecimento facial** sem consentimento prévio
- Sistema mal configurado — dados enviados para servidor em nuvem desprotegido
- Hacker rouba dados biométricos de 250 moradores

**Quem foi processado:**
- Síndico ✓
- Condomínio ✓
- Empresa fornecedora do sistema ✓

**Decisão do tribunal:**
- Síndico: "Deveria ter exigido parecer legal antes implementar biometria"
  - **Condenado** em solidariedade
  
- Condomínio: "Faltou cuidado na escolha de fornecedor"
  - **Condenado solidariamente**
  
- Empresa: "Responsável pelo vazamento técnico"
  - **Condenada primariamente**

**Indenização:**
- Cada vítima recebeu R$ 8 mil (dados biométricos são sensíveis)
- Condomínio pagou responsabilidade solidária
- Empresa foi executada por "responsabilidade primária"

**Precedente importante:** 
> "Sistema de coleta de dados biométricos em condomínio exige:
> 1. Consentimento dos moradores
> 2. Parecer legal antes
> 3. Fornecedor certificado
> 4. Criptografia de ponta a ponta
> 5. Responsáveis designados"

### Decisão 3: Responsabilidade do Síndico Pessoa Física (TJRJ, 2025)

**Caso:**
- Síndico terceiros administração para empresa gestora de condomínios
- Empresa gestora sofre ataque ransomware
- Dados de 500 moradores (6 prédios geridos) são expostos

**Pergunta:** Síndico responde mesmo terceirizando?

**Decisão do tribunal:**
- ✓ **SIM** — Síndico responsável por fiscalizar terceirizado
- Síndico recebeu multa por negligência (não havia SLA de segurança com gestor)
- Condomínio responsável solidariamente
- Gestora responsável primariamente

**Obrigações do Síndico:**
1. Exigir cláusula de LGPD em contrato com terceirizado
2. Auditar segurança regularmente
3. Estabelecer confidencialidade
4. Designar pessoa responsável por dados

**Princípio:** "Terceirizar não é abandonar responsabilidade. Síndico é vigilante."

### Decisão 4: Síndico Versus Administrador de Condomínio (TJDF, 2025)

**Caso:**
- Condomínio com **síndico amador** (morador voluntário)
- Funcionário administrativo compartilha dados com sua própria empresa de marketing
- Moradores passam a receber spam segmentado por classe social

**Pergunta:** Pode condomínio responsabilizar "administrador" por culpa do funcionário?

**Decisão:**
- Condomínio: **Responsável solidário** não há escape
- Síndico: **Responsável solidário** — deveria fiscalizar
- Funcionário: **Responsável pessoal** — autor direto
- "Administrador" não pode ser responsabilizado porque trabalha para condomínio (vínculo de emprego)

**Reconhecimento judicial:** "Condomínio é responsável pelos dados coletados de moradores, independentemente de quem seja o agente negligente."

### Decisão 5: Quanto à Resolução do Condomínio (TJ-SC, 2024)

**Caso:**
- Assembleia de condomínio votou **autorização para compartilhar dados** com terceiros
- 70 moradores votaram a favor; 10 contra
- Dados compartilhados resultaram em múltiplas fraudes

**Pergunta:** Se votado em assembleia, condomínio fica isento?

**Decisão do tribunal:**
- ✓ **NÃO** — Votação não isenta de responsabilidade legal
- Assembleia não pode autorizar violação de direitos fundamentais
- Condomínio é condenado, mas tribunal nota "decisão democrática" como atenuante

**Princípio:** "Voto não substitui conformidade legal. Privacidade não é matéria sujeita a maioria."

## Mapa de responsabilidades em condomínio

```
QUEM FAZ O QUÊ?
├─ CONDOMÍNIO (Pessoa Jurídica)
│  ├─ Controla dados de moradores = Responsável (LGPD, Art. 6)
│  ├─ Designa responsáveis = Dever
│  └─ Paga indenizações = Solidariamente
│
├─ SÍNDICO (Pessoa Física)
│  ├─ Gerencia condomínio = Responsável pela fiscalização
│  ├─ Terceiriza = Ainda responsável (não se isenta)
│  └─ Não cumpre LGPD = Condenado pessoalmente
│
├─ ZELADOR / FUNCIONÁRIO
│  ├─ Coleta dados (acesso) = Participa da coleta
│  ├─ Divulga indevidamente = Responsável pessoal
│  └─ Segue ordens = Ainda responsável (obediência não é defesa)
│
├─ FORNECEDOR DE SISTEMA
│  ├─ Vende sistema mal protegido = Responsável primário
│  ├─ Vulnerabilidade não corrigida = Negligência
│  └─ Sem contrato LGPD = Terceirizado inadequado
│
└─ MORADOR AFETADO
   ├─ Direito ao acesso = Direito a saber seus dados
   ├─ Direito à correção = Se dados errados
   └─ Direito à indenização = Se vazamento/mal uso
```

## O que as decisões estabelecem sobre SOLIDARIEDADE?

### Responsabilidade Solidária significa:

**Credor (vítima) pode cobrar de QUALQUER um dos devedores** — escolhe o mais fácil:

```
Morador prejudicado pode processar:
─ Só o condomínio (tem mais dinheiro)
─ Só o síndico (pessoa física)
─ Só o funcionário (agente direto)
─ Todo mundo junto

E o condomínio, após pagar, pode cobrar dos outros (regresso)
```

### Implicação prática:
Se você é **síndico**, você está **pessoalmente em risco** por negligência com dados, mesmo que seja cargo voluntário.

## Padrão exigido pelas decisões

### O que Síndico e Condomínio DEVEM fazer:

✅ **Antes de coletar dados:**
- [ ] Designar responsável por proteção de dados
- [ ] Publicar aviso de privacidade em entrada
- [ ] Obter consentimento para biometria
- [ ] Fazer parecer legal para sistemas novos

✅ **Ao implementar sistema:**
- [ ] Exigir declaração de conformidade LGPD do fornecedor
- [ ] Criptografia de dados em repouso e em trânsito
- [ ] Cláusula de confidencialidade em contratos
- [ ] Auditoria de segurança antes da ativação

✅ **Na operação:**
- [ ] Limitar acesso (apenas quem precisa)
- [ ] Treinar funcionários sobre sigilo
- [ ] Registrar logs de acesso
- [ ] Monitorar para vazamentos

✅ **Em caso de incidente:**
- [ ] Comunicar à ANPD em até 72h
- [ ] Notificar moradores afetados
- [ ] Documentar plano de ação
- [ ] Preservar evidências

## Riscos financeiros concretos

### Cenário 1: Condomínio de 200 apartamentos, vazamento de dados

```
Indenização por dano moral:
200 apartamentos × R$ 5 mil = R$ 1 MILHÃO
(Se dados sensíveis: × R$ 10 mil = R$ 2 MILHÕES)

Condomínio paga: SIM
Síndico responde pessoalmente: SIM
Ação de regresso: Síndico terá que reembolsar condomínio
```

### Cenário 2: Vazamento de biometria

```
250 moradores × R$ 8 mil = R$ 2 MILHÕES
(Dados biométricos = mais graves)
Todos solidariamente responsáveis
```

## Recomendações práticas para condomínios

### 1. Nomeação de DPO ou Responsável
- [ ] Designe alguém para zelar por dados pessoais
- [ ] Mesmo em condomínio, gestora deve ter responsável específico
- [ ] Funciona como "fiscal" interno

### 2. Política de Privacidade
- [ ] Publique aviso claro na entrada
- [ ] Explique quais dados são coletados
- [ ] Informe direitos dos moradores
- [ ] Contratos de adesão devem conter cláusula

### 3. Contrato com Fornecedores
- [ ] Exija cláusula de conformidade LGPD
- [ ] Defina responsabilidades por vazamento
- [ ] Inclua auditoria de segurança
- [ ] Estabeleça SLA de incidente

### 4. Auditoria Anual
- [ ] Revise sistemas de coleta
- [ ] Teste segurança física e lógica
- [ ] Verifique autorização de dados biométricos
- [ ] Atualize conforme jurisprudência

### 5. Plano de Resposta a Incidente
- [ ] Quem aciona (gerente, síndico?)
- [ ] Como comunicar à ANPD
- [ ] Template de aviso aos moradores
- [ ] Contato com advogado
