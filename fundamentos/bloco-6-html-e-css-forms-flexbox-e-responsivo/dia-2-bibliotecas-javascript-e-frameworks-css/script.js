function criaListaDeEstados(){
	const estados=['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
	const select=document.getElementById("select-estado");
	let option;
	for(estado of estados){
		option=document.createElement('option');
		option.innerText=estado;
		option.value=estado;
		select.appendChild(option);
	}
}

criaListaDeEstados();

document.getElementById("dataDeInicio").DatePickerX.init({
	format: "dd/mm/yyyy",
	mondayFirst: false,
	minDate    : new Date(2021, 5, 9),
	maxDate    : new Date(3000, 1, 1)
});
