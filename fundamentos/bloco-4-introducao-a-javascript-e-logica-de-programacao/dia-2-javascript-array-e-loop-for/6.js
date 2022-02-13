let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contaImpares=0;

for(numero of numbers)
    if(numero%2===1)contaImpares++;

console.log('Vetor:',numbers);
if(contaImpares>0)
    console.log('O vetor tem',contaImpares,'números ímpares.');
else
    console.log('O vetor não tem números ímpares.');
