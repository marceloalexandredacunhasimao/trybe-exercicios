const { questionInt } = require('readline-sync');

const fatorial = (n) => n>1 ? n*fatorial(n-1) : 1;

const numero = questionInt('Digite um número: ');

if(numero < 1) {
	console.log('Número precisa ser um inteiro maior que 0');
} else {
	console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);
}
