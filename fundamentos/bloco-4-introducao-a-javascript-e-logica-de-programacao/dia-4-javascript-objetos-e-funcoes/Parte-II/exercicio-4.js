//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-objetos-e-funcoes/5901c768-9dee-46e8-b23f-c03e76c5b8b3/exercicios/4c114d64-4ffe-4a19-9c99-b00bb38bf58d/parte-ii-funcoes/af7fb27e-2fba-4d0e-85c2-d0fa95f4bbf0?use_case=next_button
/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

    Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
    Valor esperado no retorno da função: Fernanda .
*/
arrayDeTeste=['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array)
{
    let indice,maior="";
    for(let nome of array)
        if(nome.length>maior.length)
        {
            maior=nome;
        };
    return maior;
}

console.log(maiorNome(arrayDeTeste));