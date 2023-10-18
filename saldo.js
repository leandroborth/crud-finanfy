/*
var transacoes = [
  {
    id: 1,
    categoria: "Receitas",
    tipo: "Entrada",
    data: "2023-10-16",
    valor: 350.0,
    subCategoria: "Mesada",
    descricao: "Mesada da semana",
  },
  {
    id: 2,
    categoria: "Despesas",
    tipo: "Saída",
    data: "2023-10-16",
    valor: -100.0,
    subCategoria: "Poupança",
    descricao: "Dinheiro guardado",
  },
  {
    id: 3,
    categoria: "Despesas",
    tipo: "Saída",
    data: "2023-10-16",
    valor: -10.0,
    subCategoria: "Alimentação",
    descricao: "Cantina",
  },
];

var saldoAtual = 0;
for (var i = 0; i < transacoes.length; i++) {
  saldoAtual += transacoes[i].valor;
}
*/

const apiUrl = "https://jsonserver.leandroborth.repl.co/transacoes";

// carrega os dados a partir da API JSONServer
var db = [];
readTransacao((dados) => {
  db = dados;
  ListaTransacoes();
});
