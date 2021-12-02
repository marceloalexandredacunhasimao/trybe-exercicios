//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-objetos-e-funcoes/5901c768-9dee-46e8-b23f-c03e76c5b8b3/exercicios/4c114d64-4ffe-4a19-9c99-b00bb38bf58d/parte-ii-funcoes/af7fb27e-2fba-4d0e-85c2-d0fa95f4bbf0?use_case=next_button
/* 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos
os números de 1 até N.

    Valor de teste: N = 5 .
    Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
*/
const N=5;

function somatorio(numero)
{
    let soma=0;
    for(let i=1;i<=numero;++i)soma+=i;
    return soma;
}

console.log(somatorio(N));
