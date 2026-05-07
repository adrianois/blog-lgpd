---
titulo: "Regulamento de Comunicação de Incidentes: prazo de 72h é confirmado"
categoria: Setor Público
tags: [ANPD, incidentes, comunicação, 72 horas, regulamento, vazamento]
autor: Adriano Israel
data: 2025-03-15
resumo: "A ANPD confirmou o regulamento que obriga notificação de incidentes de segurança em até 72 horas. Entenda as exceções, procedimentos e penalidades."
---

# Regulamento de Comunicação de Incidentes: prazo de 72h é confirmado

A **Autoridade Nacional de Proteção de Dados (ANPD)** finalizou e publicou a versão definitiva do **Regulamento de Comunicação de Incidentes de Segurança**, que estabelece o prazo máximo de **72 horas** para notificação de vazamentos de dados pessoais.

O regulamento, que já constava na **LGPD (art. 34)** de forma genérica, agora ganhou definições operacionais claras sobre quando contar, a quem informar e quais as exceções.

---

## O que é considerado "incidente de segurança"?

### Definição legal
Qualquer evento que resulte em:
- **Acesso não autorizado** a dados pessoais
- **Divulgação não intencional** para terceiros
- **Alteração não autorizada** de dados (colocar informação falsa, deletar, modificar)
- **Indisponibilidade temporária ou permanente** de acesso a dados (ransomware, falha de backup)

### Exemplos práticos

#### Incidentes de nível CRÍTICO (notificação obrigatória)
- Hacker acessa servidor e extrai 1 milhão de CPFs
- Ransomware criptografa banco de dados de pacientes
- Funcionário vende lista de clientes para concorrente
- Backup corrompido e dados não recuperáveis
- Vazamento acidental na nuvem (bucket S3 aberto)

#### Incidentes de nível MÉDIO (notificação recomendada)
- Acesso não autorizado a sistema, mas sem confirmação de exfiltração de dados
- Tentativa de phishing masivo contra colaboradores
- Descoberta de credenciais em repositório público do Git

#### Incidentes de nível BAIXO (documentação interna)
- Tentativa de força bruta bloqueada pelo firewall
- Detecção de malware em endpoint, removido antes de causar dano
- Suspeita de acesso físico não autorizado a sala de servidores

---

## O prazo de 72 horas: como funciona?

### Contagem
- **Início:** Momento em que o controlador **tem ciência** do incidente
- **Fim:** 72 horas corridas após essa ciência
- **Fim de semana:** Conta normalmente (não há pausa)

**Exemplo:** Se você descobrir um vazamento na sexta-feira às 14h, o prazo encerra na segunda-feira às 14h.

### O que fazer nessas 72 horas?

**Dentro de 72 horas, você DEVE:**

1. ✓ Notificar a **ANPD** (formulário no site www.gov.br/cidadania/anpd)
2. ✓ Informar os **cidadãos afetados** (se houver risco à privacidade)
3. ✓ Comunicar **órgãos competentes** (polícia federal, bancos, etc., conforme caso)

**Você NÃO precisa:**
- ✗ Fechar completamente a investigação em 72h
- ✗ Apresentar relatório final de causa raiz
- ✗ Implementar todas as medidas corretivas

---

## Notificação à ANPD

### Como fazer
1. Acesse o Portal da ANPD (www.gov.br/cidadania/anpd)
2. Preencha formulário de comunicação de incidente
3. Descreva: tipo de incidente, quantidade de titulares, dados afetados, medidas iniciais

### Informações mínimas exigidas
- Nome e CPF/CNPJ do responsável
- Descrição do incidente
- Data e hora aproximada da ocorrência
- Data e hora da descoberta
- Dados pessoais afetados (tipagem: nome, CPF, email, biometria, etc.)
- Quantidade estimada de pessoas afetadas
- Ações imediatas tomadas

### Confidencialidade
A ANPD mantém a comunicação em sigiloso. Você pode informar-se como preferir que a ANPD divulgue a informação — publicamente ou confidencialmente.

---

## Notificação aos cidadãos afetados

### Quando é OBRIGATÓRIO notificar?
Você deve informar os cidadãos quando há **risco efetivo à privacidade ou integridade**:
- Dados sensíveis foram expostos (saúde, origem étnica, orientação sexual)
- Dados financeiros (conta bancária, cartão de crédito)
- Qualquer incidente com grande impacto

### Quando NÃO é necessário notificar?
- Incidente foi detectado e bloqueado antes de acesso efetivo
- Dados foram criptografados de ponta a ponta e a chave não foi comprometida
- Dados foram vazados, mas se qualificam como "anônimos"

### Como notificar?

**Via e-mail (preferível):**
- Assunto claro: "Comunicado importante sobre proteção de dados"
- Linguagem simples e acessível
- Não dramatize, mas seja honesto

**Exemplo de estrutura:**
```
Prezado [Nome],

Recentemente, identificamos um incidente de segurança que pode ter afetado seus dados pessoais. [Descrição clara e honesta do que aconteceu]

Dados envolvidos: [CPF, email, telefone, etc.]

O que estamos fazendo:
- [Ação 1]
- [Ação 2]

O que você pode fazer:
- Monitore sua conta para atividades inusitadas
- Considere mudar a senha em outros serviços
- Denuncie tentativas de fraude

Contato: [email e telefone para questions]
```

**Outros canais:**
- SMS (para celular — use com cuidado com falsificações)
- Carta registrada (para dados de endereço importantes)
- Publicação no site (complementar, não substitui comunicação direto)

---

## Penalidades por não respeitar o prazo

### ANPD
- Multa de até 2% do faturamento anual (máximo R$ 50 milhões)
- Advertência pública
- Cancelamento de credenciamentos

### Judicialmente
- Ações coletivas de consumidores
- Indenizações por danos morais (conforme jurisprudência do STJ recente)

---

## Casos especiais e exceções

### Exceção de força maior
Se a ANPD confirmar que o atraso foi justificado por:
- Desastre natural
- Falha de infraestrutura de terceiro (provedor de cloud)
- Ato de autoridade pública

Então o prazo pode ser estendido com justificativa documentada.

### Órgãos públicos
Seguem mesmo prazo de 72h, mas precisam envolver:
- Defesa Civil (para incidentes críticos)
- Delegacia de Polícia Federal
- Controlador local (prefeito, governador)

---

## Checklist de preparação

Para estar pronto quando um incidente ocorrer:

- ☐ Equipe de resposta designada
- ☐ Plano de diagnóstico rápido (como detectar incidente)
- ☐ Contato lista do time de TI, ANPD, advogado
- ☐ Template de comunicação para vítimas
- ☐ Sistema de backup testado e documentado
- ☐ Isolamento de sistemas críticos planejado
- ☐ Logs centralizados e retenção adequada

---

## Próximos passos

1. **Revise seu plano de resposta a incidentes** — garanta que consegue notificar em 72h
2. **Designe responsável** — quem ativa o fluxo de crise?
3. **Configure alertas** — seu SOC consegue detectar em tempo real?
4. **Treine o time** — simulações de incidente são essenciais
5. **Documente tudo** — cada ação deve ser registrada
