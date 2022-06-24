/*
    Crie um endpoint GET /simpsons/:id 🚀

    O endpoint deve retornar o personagem com o id informado na URL da requisição.
    Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found.
*/
const port = 3003;
const filename = 'simpsons.json';
const express = require('express');
const bodyParser = require('body-parser');
const { readJSON } = require('./json-io.js');

const app = express();
app.use(bodyParser.json());

app.get('/simpsons/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const simpsons = await readJSON(filename);
		const person = simpsons.find((simpson) => simpson.id === id);
		if(person) {
			return res.status(202).json(person);
		} else {
			res.status(404).json({ message: 'simpson not found' });
		}
  	} catch (error) {
    	return res.status(500).send(error.message);
  	}

});

app.listen(port, () => console.log(`Ouvindo na porta ${port}`));
