//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-objetos-e-funcoes/5901c768-9dee-46e8-b23f-c03e76c5b8b3/exercicios/4c114d64-4ffe-4a19-9c99-b00bb38bf58d/parte-ii-funcoes/af7fb27e-2fba-4d0e-85c2-d0fa95f4bbf0?use_case=next_button
/* 7 - Crie uma função que receba uma string word e outra string ending .
Verifique se a string ending é o final da string word . Considere que a string ending
sempre será menor que a string word .

    Valor de teste: 'trybe' e 'be'
    Valor esperado no retorno da função: true
    verificaFimPalavra('trybe', 'be') ;
    Retorno esperado: true
    verificaFimPalavra('joaofernando', 'fernan') ;
    Retorno esperado: false
*/

function verificaFimPalavra(word,ending)
{
    return word.substring(word.length-ending.length)===ending;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));