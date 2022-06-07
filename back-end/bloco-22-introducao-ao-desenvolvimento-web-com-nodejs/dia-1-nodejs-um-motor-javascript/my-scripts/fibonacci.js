const { questionInt } = require('readline-sync');
let x1 = 0;
let x2 = 1;
let x3;
let texto = '';

const n = questionInt('Digite o número de termos da série de fibonacci: ');
if(n <= 0) {
	console.log('Número precisa ser um inteiro maior que zero.');
} else {
	for(let i=0; i<n; ++i) {
		texto = `${texto} ${x2}`;
		x3 = x1 + x2;
		x1 = x2;
		x2 = x3;
	}
	console.log(`Sequência de fibonacci com ${n} números:`);
	console.log(texto);
}
