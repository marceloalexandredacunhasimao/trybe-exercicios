const { question, questionInt } = require('readline-sync');

function fsorteio() {
	let novoJogo;
	do{
		const rand = Math.floor(11*Math.random());
		const numero = questionInt('Digite um número de 0 a 10: ');
		if(numero === rand) {
			console.log("Parabéns, número correto!");
		} else {
			console.log(`Opa, não foi dessa vez. O número era ${rand}`);
		}
		novoJogo = question('Deseja jogar novamente (s/n)?');
	}while(novoJogo === 's' || novoJogo === 'S');
}

fsorteio();

module.exports=fsorteio;
