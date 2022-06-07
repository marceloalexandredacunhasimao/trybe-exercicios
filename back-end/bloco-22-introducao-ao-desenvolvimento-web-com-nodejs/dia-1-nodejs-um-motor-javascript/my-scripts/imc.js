//peso=98;
//altura=1.75;
readLine = require('readline-sync');

function fimc() {
	const peso=readLine.questionFloat("Qual seu peso? ");
	const altura=readLine.questionFloat("Qual sua altura? ");
	
	const imc = peso / Math.pow(altura,2);
	
	console.log('IMC:',imc);
	
	if(imc < 18.5)console.log('Abaixo do peso (magreza)');
	else if(imc>=18.5 && imc<25)console.log('Peso normal');
	else if(imc>=25 && imc<30)console.log('Acima do peso (sobrepeso)');
	else if(imc>=30 && imc<35)console.log('Obesidade grau I');
	else if(imc>=35 && imc< 40)console.log('Obesidade grau II');
	else console.log('Obesidade graus III e IV');
}

fimc();

module.exports = fimc;
