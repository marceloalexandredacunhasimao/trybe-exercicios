/*
Crie uma rota PUT /users/:name/:age. 🚀

    Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }.
*/
const port = 3003;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.put('/user/:name/:age', (req, res) => {
	const { name, age } = req.params;
	res.json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(port, () => console.log(`Ouvindo na porta ${port}`));
