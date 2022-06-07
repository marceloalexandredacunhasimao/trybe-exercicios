const { questionInt } = require('readline-sync');
const invalid = () => console.log(`Opção inválida: ${option}`);

console.log('1. imc');
console.log('2. velocidade');
console.log('3. sorteio');
console.log('4. fatorial');
console.log('5. fibonacci');

option = questionInt('Digite o número do script que deseja executar: ');
let func;
switch(option) {
	case 1:
//		func = require('./imc.js');
		require('./imc.js');
		break;
	case 2:
//		func = require('./velocidade.js');
		require('./velocidade.js');
		break;
	case 3:
//		func = require('./sorteio.js');
		require('./sorteio.js');
		break;
	case 4:
		require('./fatorial.js');
		break;
	case 5:
		require('./fibonacci.js');
		break;
	default:
//		func = () =>  console.log(`Opção inválida: ${option}`);
		console.log(`Opção inválida: ${option}`);
}

//func();
