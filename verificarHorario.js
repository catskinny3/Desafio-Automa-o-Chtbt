async function buscarFeriados(ano) {
  const resposta = await fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`);
  return await resposta.json();
}

function estaDentroDoHorario(data) {

  const dia = data.getDay(); // 0 = domingo | 6 = sábado

  if (dia === 0 || dia === 6) {
    return false;
  }

  const horaAtual = data.getHours() * 60 + data.getMinutes();

  const inicio = 8 * 60;
  const fim = 18 * 60;

  return horaAtual >= inicio && horaAtual <= fim;
}

function ehFeriado(data, feriados) {

  const hoje = data.toISOString().split("T")[0];

  return feriados.some(f => f.date === hoje);
}


// ===================
// EXECUÇÃO
// ===================

async function verificarFuncionamento() {

  // 👉 Data atual
  const agora = new Date();

  // 👉 Para testar cenários (opcional):
  // const agora = new Date("2025-12-30T10:15:00");
  // const agora = new Date("2025-12-30T19:10:00");
  // const agora = new Date("2025-12-28T11:00:00");
  // const agora = new Date("2025-12-25T10:00:00");

  const ano = agora.getFullYear();

  const feriados = await buscarFeriados(ano);

  if (ehFeriado(agora, feriados)) {
    console.log("❌ Fora do horário de funcionamento (feriado)");
    return;
  }

  if (estaDentroDoHorario(agora)) {
    console.log("✅ Dentro do horário de funcionamento");
  } else {
    console.log("❌ Fora do horário de funcionamento");
  }
}

verificarFuncionamento();
