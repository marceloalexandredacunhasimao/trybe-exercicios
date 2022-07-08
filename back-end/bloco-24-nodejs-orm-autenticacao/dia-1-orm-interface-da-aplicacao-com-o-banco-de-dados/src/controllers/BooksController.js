const BooksService = require('../services/BooksService');

async function getAll(_req, res) {
	const books = BooksService.getAll();
	res.status(200).json(books);
}

async function getById(req, res) {
	const { id } = req.params;
	const book = BooksService.getById(id);
	if (!book) return res.status(404).json({ message: 'Book not found' });
	res.status(200).json(book);
}

async function create(req, res) {
	const { title, author, pageQuantity } = req.body;
	const book = await BooksService.create( {title, author, pageQuantity} );

	res.status(201).json(book);
}

async function update(req, res) {
	const { id } = req.params;
	const { title, author, pageQuantity } = req.body;
	const updated = await BooksService.update(id, {title, author, pageQuantity} );
	if(!update)return res.status(404).json({ message: 'Book not found' });

	res.status(201).json({ message: 'Book updated' });
}

async function remove(req, res) {
	const { id } = req.params;
	const removed = BooksService.remove(id);
	if (!removed) return res.status(404).json({ message: 'Book not found' });

	res.status(200).json({ message: 'Book removed' });
}


module.exports = {
	getAll,
	getById,
	create,
	update,
	remove,
}

/*
 No controller BooksController crie o método getById sendo um middleware que recebe o id como parâmetro de rota e buscar o livro por meio do service. Se o livro não existir a resposta da requisição deve ter o status 404 e o json {"message": "Book not found"}.
*/
/*
No controller BooksController crie o método create sendo um middleware que recebe os atributos title, author, pageQuantity do body da requisição e salve os dados por meio do service.
*/
/*
A resposta da requisição deve ter o status 200 e retornar a mensagem 'Book updated'. Se o livro não for encontrado retornar a mensagem 'Book not found'.
*/
