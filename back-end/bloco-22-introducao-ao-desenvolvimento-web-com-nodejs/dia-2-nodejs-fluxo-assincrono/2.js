/*
2. Escreva um código para consumir a função construída no exercício anterior.

    Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um
    número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
        Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
        Utilize then e catch para manipular a Promise retornada pela função:
            Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
            Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
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

const random100 = () => Math.floor(Math.random() * 100 + 1);

function main() {
	let array = [0, 0, 0];
	array = array.map(random100);
	f3numbers(...array)
		.then((result) => console.log('Resultado:',result))
		.catch((error) => console.error(error.message));
}
	
main();
main();
main();
main();
main();
main();
