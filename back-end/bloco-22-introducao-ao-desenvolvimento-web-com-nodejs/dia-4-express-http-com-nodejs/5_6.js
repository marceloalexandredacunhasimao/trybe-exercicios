/*
5. Crie uma API de dados das personagens de Simpsons 🚀

    Utilize o modulo fs do Node para ler/escrever arquivos.
    Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
    Caso dê tudo certo, a resposta deve voltar com status 200 OK.
    Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman, Insomnia ou httpie.

6. Crie um endpoint GET /simpsons 🚀

    O endpoint deve retornar um array com todos os simpsons.
*/
port=3003;
const filename = 'simpsons.json';

const express = require('express');
const bodyParser = require('body-parser');
const { readJSON, writeJSON } = require('./json-io');

app = express();
app.use(bodyParser.json());

app.get('/simpsons', async (req, res) => {
	try
	{
		const simpsons = await readJSON(filename);
		res.status(200).json(simpsons);
	}
	catch(error) {
		res.status(500).send(error.message);
	}
});

app.listen(port,() => console.log(`Ouvindo na porta ${port}`));
