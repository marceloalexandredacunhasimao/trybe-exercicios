/*
3. Crie uma rota POST /greetings 🚀

    Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }.
    Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK.
    Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized.
*/
const port = 3003;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/greetings', (req, res) => {
	const { name, age } = req.body;
	if(age > 17) return res.status(200).json({ message: `Hello, ${name}!` });
	res.status(401).json({ "message": "Unauthorized" });
});

app.listen(port, () => console.log(`Ouvindo na porta ${port}`));
