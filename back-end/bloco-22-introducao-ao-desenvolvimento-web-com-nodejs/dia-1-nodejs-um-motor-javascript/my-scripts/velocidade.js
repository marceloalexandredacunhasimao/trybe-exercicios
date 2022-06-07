const { questionInt } = require('readline-sync');
function fvelocidade() {
	const dist = questionInt('Distância: ');
	const t = questionInt('Tempo: ');
	
	const vel = dist/t;
	console.log('Velocidade:',vel,'(m/s)');
}

fvelocidade();
module.exports = fvelocidade;
