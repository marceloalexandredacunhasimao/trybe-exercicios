/*
1. Crie uma função que receba três parâmetros e retorna uma Promise.

    Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
    Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
    Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
    Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

Escreva um código para consumir a função construída no exercício anterior.
*/
function f3numbers(a,b,c) {
	return new Promise((resolve, reject) => {
		const types = typeof(a) + typeof(b) + typeof(c);
		if(types !== 'numbernumbernumber') {
			return reject(new Error("Informe apenas números"));
		} else {
			const soma = (a + b) * c;
			if(soma < 50) {
				return reject(new Error("Valor muito baixo"));
			} else {
				resolve(soma);
			}
		}
	});
}

f3numbers(1,1,'a')
	.then((result) => console.log('Resultado:',result))
	.catch((error) => console.error(error.message));

f3numbers(1,1,1)
	.then((result) => console.log('Resultado:',result))
	.catch((error) => console.error(error.message));

f3numbers(10,20,30)
	.then((result) => console.log('Resultado:',result))
	.catch((error) => console.error(error.message));
