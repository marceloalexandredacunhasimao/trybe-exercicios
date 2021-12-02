//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-objetos-e-funcoes/5901c768-9dee-46e8-b23f-c03e76c5b8b3/exercicios/4c114d64-4ffe-4a19-9c99-b00bb38bf58d/parte-ii-funcoes/af7fb27e-2fba-4d0e-85c2-d0fa95f4bbf0?use_case=next_button
/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

    Array de teste: [2, 3, 6, 7, 10, 1]; .
    Valor esperado no retorno da função: 4 .
*/
arrayDeTeste=[2, 3, 6, 7, 10, 1];

function indiceDoMaiorValor(array)
{
    let indice,maior=array[0];
    for(let i in array)
        if(array[i]>maior)
        {
            maior=array[i];
            indice=i;
        };
    return indice;
}

console.log(indiceDoMaiorValor(arrayDeTeste));