const fs = require('fs');

function escreveArquivo(filename, content) {
	try {
		fs.writeFileSync(filename, content);
		return 'ok';
	}
	catch(error) {
		console.error(`Falha ao escrever no arquivo "${filename}"\nMensagem de erro: ${error.message}`);
		return null;
	}
}

module.exports = escreveArquivo;
