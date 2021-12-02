/*
2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
Através de um loop for , percorra essa variável, busque os números pares e os adicione
a um novo array que deverá ser retornado ao final pela pela função. */

const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];
function numerosPares(array)
{
    let pares=[];
    for(let i in array)
    for(let j in array[i])
        if(array[i][j]%2==0)pares.push(array[i][j]);
    
    return pares;
}

console.log(numerosPares(vector));
