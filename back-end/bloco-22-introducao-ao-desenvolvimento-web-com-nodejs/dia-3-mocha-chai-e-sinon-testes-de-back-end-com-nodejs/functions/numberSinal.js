/*
Exercício 2: Implemente a função apresentada no exercício 1, garantindo que ela vai passar em todos os testes que você escreveu.
⚠️ Lembre-se de adicionar o script de test no package.json e de instalar as dependências.
*/
function numberSinal(number) {
//	return "string";
	if(typeof(number) !== 'number')return 'o valor deve ser um número';
	if(number > 0)return 'positivo';
	if(number < 0)return 'negativo';
	return 'neutro';
}

module.exports = numberSinal;
