function techList(array,nome) {
	if(array.length === 0)return 'Vazio!';
	const objetos=[];
	const ordenado = array.slice().sort();
	for (let tecnologia of ordenado) {
		objetos.push({tech:tecnologia,name:nome});
	}
	return objetos;
}

module.exports = techList;
