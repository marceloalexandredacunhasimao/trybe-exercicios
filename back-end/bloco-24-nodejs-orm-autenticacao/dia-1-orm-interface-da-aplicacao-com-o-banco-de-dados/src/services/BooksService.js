const { Book } = require('../models');

async function getAll() {
	const books = await Book.findAll();
	return books;
}

async function getById(id) {
	const book = await Book.findByPk(id);
	return book;
}

async function create({title, author, pageQuantity}) {
	const book = await Book.create({title, author, pageQuantity});
	return book;
}

async function update(id, {title, author, pageQuantity}) {
	const [updated] = await Book.update({title, author, pageQuantity}, { where: { id } });
	return updated;
}

async function remove(id) {
	const removed = await Book.destroy({ where: { id } });
	return removed;
}




module.exports = {
	getAll,
	getById,
	update,
	remove,
};
