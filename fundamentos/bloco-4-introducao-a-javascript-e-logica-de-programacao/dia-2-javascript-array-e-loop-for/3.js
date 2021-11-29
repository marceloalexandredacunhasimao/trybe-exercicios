let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let media;
for(let n of numbers)soma+=n;
media=soma/numbers.length;

console.log('Vetor:',numbers);
console.log('Média aritimética:',media);
