/*
1. Crie uma rota GET /ping

    Sua rota deve retornar o seguinte JSON: { message: 'pong' }
*/
const port = 3003;

express = require('express');
const app = express();
app.get('/ping', funcao_mensagem);
app.all('*', (req, res) => res.status(404).send('O caminho especificado na url não pode ser encotrado.'));
app.listen(port, () => console.log(`Aplicação ouvindo na porta ${port}`));

function funcao_mensagem(req, res) {
	const mensagem = { message: 'pong' };
	res.status(200).json(mensagem);
}
