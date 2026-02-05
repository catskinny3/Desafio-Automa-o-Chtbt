# TESTE PRÁTICO — AUTOMAÇÃO

Este projeto foi desenvolvido como parte de um desafio prático de automação, com o objetivo de:

- Criar um fluxo de atendimento via WhatsApp com chatbot  
- Desenvolver um script em JavaScript que verifica o horário de funcionamento considerando:
  - Dias úteis  
  - Horário comercial  
  - Finais de semana  
  - Feriados nacionais (via API)  

---

## Estrutura do Projeto

Desafio-Automacao/

- verificarHorario.js  
- fluxo-whatsapp.png  
- README.md  

---

## Desafio 1 — Fluxograma do Chatbot

O arquivo `fluxo-whatsapp.png` representa o fluxo de atendimento do chatbot, contendo:

- Mensagens automáticas do bot  
- Decisão de horário (dentro e fora do atendimento)  
- Coleta de dados do cliente:
  - Nome  
  - Telefone  
  - Motivo do contato  
- Menu de atendimento:
  - Suporte  
  - Financeiro  
  - Comercial  
  - Outros  

---

## Desafio 2 — Script JavaScript

O arquivo `verificarHorario.js` realiza as seguintes verificações:

- Obtém automaticamente a data e hora atual  
- Verifica se é dia útil (segunda a sexta)  
- Confere se está dentro do horário de atendimento (08:00 às 18:00)  
- Consulta feriados nacionais por meio da API BrasilAPI  

---

## Como executar

É necessário ter o Node.js instalado.

No terminal, execute:

```bash
node verificarHorario.js
