/*
 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |
*/

let romanos={
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
};

function valor(numeroRomano)
{
    numeroRomano=numeroRomano.toUpperCase();
    let anterior=romanos[numeroRomano[0]];
    let soma=anterior;
    for(let i=1;i<numeroRomano.length;++i)
        {
        if(romanos[numeroRomano[i]]<=anterior)soma+=romanos[numeroRomano[i]];
        else soma=romanos[numeroRomano[i]]-soma;
        anterior=romanos[numeroRomano[i]];
        };
    return soma;
}

console.log(valor('MMXVIII')); // 2018
console.log(valor('VI')); // 6
console.log(valor('IV')); // 4