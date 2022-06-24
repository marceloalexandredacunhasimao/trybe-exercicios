/*
Crie uma rota POST /hello

    Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
    Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.
*/
const port = 3003;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/hello', (req, res) => {
	const { name } = req.body;
	const resposta = { message: `Hello, ${name}!` };
	res.status(200).json(resposta);
});

app.listen(port, () => console.log(`Aplicação ouvindo na porta ${port}`));
