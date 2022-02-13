let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor=numbers[0];

for(let i=1;i<numbers.length;i++)
    if(numbers[i]<maiorValor)maiorValor=numbers[i];

console.log('Vetor:',numbers);
console.log('Menor valor:',maiorValor);
