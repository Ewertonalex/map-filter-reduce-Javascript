const lista = [
  {
    nome: "sabao em po",
    preco: 30,
  },
  {
    nome: "ceral",
    preco: 12,
  },
{
    nome: "tolaha",
    preco: 30,
  },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDiposnivel, lista) {
  return lista.reduce(function(prev, current, index) {
    console.log("rodada", index + 1);
    console.log({prev});
    console.log({current});
    return prev - current.preco;
  }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));