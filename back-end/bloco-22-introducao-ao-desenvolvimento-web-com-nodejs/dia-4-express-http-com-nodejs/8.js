/*
8. Crie um endpoint POST /simpsons. 🚀

    Este endpoint deve cadastrar novos personagens.
    O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' }.
    Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict.
    Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content. Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();.
*/
const port = 3003;
const filename = 'simpsons.json';

const express = require('express');
const bodyParser = require('body-parser');
const { readJSON, writeJSON } = require('./json-io.js');

const app = express();
app.use(bodyParser.json());

app.post('/simpsons', async(req, res) => {
	try {
			const { id, name } = req.body;
			let simpsons = await readJSON(filename);
			if(simpsons.some((person) => Number(person.id) === Number(id))) {
				return res.status(409).json({ message: 'id already exists' });
			}
			simpsons = [...simpsons, { id, name} ];
			await writeJSON(filename, simpsons);
			return res.status(204).end();
		} catch(error) {
			res.send(error.message);
		}
});

app.listen(port, () => console.log(`Ouvindo na porta ${port}`));
