# Quando e como notificar um incidente de dados à ANPD?

Prazos, canais e conteúdo obrigatório da notificação de incidentes de segurança exigida pela LGPD.

**Adriano Israel** · Análise editorial · Blog LGPD  
📅 07 maio 2026 · ⏱ 5 min de leitura  
⚖ Segurança da Informação

| Tipo de incidente | Prazo | Obrigatoriedade |
|------------------|-------|-----------------|
| Vazamento        | 72h   | Sim             |
| Acesso não autorizado | 72h | Sim      |
| Corrupção de dados | 72h  | Sim             |

## O que é incidente de segurança

### Definição
Evento que compromete a confidencialidade, integridade ou disponibilidade de dados pessoais.

### Exemplos
- Hacker acessa servidor
- Ransomware criptografa dados
- Funcionário vende informações
- Backup corrompido
- Vazamento acidental em nuvem

## Quando notificar

### Obrigatório
- Há risco à privacidade do titular
- Dados sensíveis afetados
- Grande volume de titulares

### Opcional
- Incidente bloqueado antes do acesso
- Dados criptografados com chave segura
- Anonimizados conforme LGPD

## Prazo de notificação

### Contagem
- Início: quando toma ciência
- 72 horas corridas
- Inclui fim de semana

### Exemplo
De sexta-feira 14h → Segunda-feira 14h

## Como notificar

### Canal principal
- Portal do ANPD online
- Formulário digital
- Sistema seguro

### Canais alternativos
- Email certificado
- Protocolo presencial
- Atendimento telefônico

## Informações obrigatórias

### Identificação
- Nome completo da organização
- CNPJ ou CPF
- Contato responsável

### Incidente
- Descrição detalhada
- Data e hora aproximadas
- Dados afetados

### Titulares
- Quantidade estimada
- Categorias de pessoas
- Localização geográfica

### Ações tomadas
- Medidas imediatas
- Plano de resposta
- Investigação em andamento

## Modelo de notificação

### Estrutura básica
```
COMUNICAÇÃO DE INCIDENTE DE SEGURANÇA

Organização: [nome completo]
CNPJ: [número]
Data do incidente: [data]
Data da descoberta: [data]

DESCRIÇÃO:
[Descrever o que aconteceu]

DADOS AFETADOS:
- [tipo de dado e quantidade]
- [categorias de titulares]

AÇÕES EXECUTADAS:
- [ação 1]
- [ação 2]

CONTATO:
[Email e telefone]
```

## Exemplo prático

### Caso: Vazamento de email
```
COMUNICAÇÃO DE INCIDENTE DE SEGURANÇA

Organização: XYZ Comércio Eletrônico Ltda
CNPJ: 00.000.000/0000-00
Data do incidente: 05/05/2026
Data da descoberta: 06/05/2026

DESCRIÇÃO:
Bucket S3 mal configurado expôs arquivo CSV 
com dados de clientes por 18 horas.

DADOS AFETADOS:
- Nomes: 45.000
- Emails: 45.000
- Telefones: 45.000
- CPFs: 0 (não coletados)

AÇÕES EXECUTADAS:
- Bucket restringido em 2 horas
- Investigação iniciada
- Clientes notificados
- Auditoria de logs

CONTATO:
dpo@xyz.com.br
11 3000-0000
```

## Após a notificação

### Investigação contínua
- Identificar causa raiz
- Documentar todas as ações
- Atualizar ANPD se necessário

### Relatório final
- Entregar em até 60 dias
- Detalhar investigação
- Propor medidas futuras

## Penalidades

### Por atraso
- Multa de até 2% do faturamento
- Sem limite máximo aparente

### Por não notificar
- Mesma multa
- Agravo na sanção por infração original

### Por informação incompleta
- Penalidade por violação de obrigação

## Confidencialidade

### Você pode solicitar
- Não divulgar identidade
- Sigilo em comunicado oficial
- Restrição de publicidade

### ANPD vai respeitar
- Segurança operacional
- Proteger investigação
- Quando apropriado

## Comunicação com titulares

### Quando notificar
- Se houver risco real
- Dados sensíveis afetados
- Grandes volumes

### Como notificar
- Email preferencial
- SMS ou carta como alternativa
- Claro e transparente

### Conteúdo mínimo
- O que aconteceu
- Quais dados afetados
- Direitos do titular
- Contato para dúvidas

## Integração com plano de resposta

### Antes do incidente
- Definir responsáveis
- Estabelecer fluxo
- Treinar equipes

### Durante do incidente
- Ativar plano imediatamente
- Comunicação coordenada
- Documentação completa

### Após incidente
- Relatório completo
- Lições aprendidas
- Melhoria contínua

## Checklist para notificação

- [ ] Incidente confirmado
- [ ] Identificar dados afetados
- [ ] Estimar quantidade de titulares
- [ ] Descrever tecnicamente
- [ ] Documentar ações tomadas
- [ ] Acessar portal ANPD
- [ ] Preencher formulário
- [ ] Enviar em até 72h
- [ ] Manter comprovação
- [ ] Continuar investigação

## Conclusão

A notificação rápida e completa à ANPD é essencial para cumprir com a lei e proteger a privacidade dos titulares afetados.