//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-objetos-e-funcoes/5901c768-9dee-46e8-b23f-c03e76c5b8b3/exercicios/4c114d64-4ffe-4a19-9c99-b00bb38bf58d/parte-i-objetos-e-forin/e308b859-c8ab-49e8-a18d-ad09e9a4566b?use_case=next_button
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
    }
)

/*
8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato:
"Julia tem 2 livros favoritos".*/

console.log(leitor.nome+' tem '+leitor.livrosFavoritos.length+' livros favoritos');
