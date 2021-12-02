/*
4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois
e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora
no 1° andar, apartamento 101".
*/

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

for(let chave in moradores)
    for(let morador of moradores[chave])
    console.log(morador.nome+' '+morador.sobrenome);