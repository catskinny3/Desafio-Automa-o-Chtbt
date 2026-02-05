# Teste Prático — Automação

Projeto desenvolvido para o desafio de automação, contendo:

- Fluxograma de atendimento via WhatsApp com chatbot  
- Script em JavaScript que verifica o horário de funcionamento considerando:
  - Dias úteis
  - Horário comercial
  - Finais de semana
  - Feriados nacionais (via API)

---

## 📲 Fluxograma do Chatbot

O arquivo `fluxo-whatsapp.png` representa o fluxo de atendimento contendo:

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

## 💻 Script JavaScript

O arquivo `verificarHorario.js`:

- Obtém data e hora atual automaticamente  
- Verifica se é dia útil (segunda a sexta)  
- Confere se está dentro do horário de atendimento (08:00 às 18:00)  
- Consulta feriados nacionais usando a API BrasilAPI  

---

## ▶ Como executar

É necessário ter o Node.js instalado.

No terminal:

```bash
node verificarHorario.js
