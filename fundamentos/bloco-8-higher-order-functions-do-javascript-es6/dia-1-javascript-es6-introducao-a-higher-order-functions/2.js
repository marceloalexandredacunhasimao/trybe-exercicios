/*2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros
o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").*/

const ehIgual = (a,b) => a === b;
function resultadoSorteio(numeroApostado,checaNumero) {
	const sorteado = Math.floor(5*Math.random())+1;
	return checaNumero(numeroApostado,sorteado) ? 'Parabéns você ganhou':'Tente novamente';
}

console.log(resultadoSorteio(1,ehIgual));
console.log(resultadoSorteio(2,ehIgual));
console.log(resultadoSorteio(3,ehIgual));
console.log(resultadoSorteio(4,ehIgual));
console.log(resultadoSorteio(5,ehIgual));
