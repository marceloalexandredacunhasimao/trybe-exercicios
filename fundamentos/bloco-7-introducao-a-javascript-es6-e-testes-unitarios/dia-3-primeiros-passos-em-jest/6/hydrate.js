function hydrate(texto) {
	let soma = 0;
	let numero;
	for(caracter of texto) {
		numero = parseInt(caracter);
		if(!isNaN(numero))soma+=numero;
	}
	if(soma === 1)return '1 copo de água';
	return `${soma} copos de água`;
}

module.exports = hydrate;
