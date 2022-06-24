const fs = require('fs').promises;

function readJSON(filename) {
	return fs.readFile(filename, 'utf8').then((simpsons) => JSON.parse(simpsons));
}

function writeJSON(filename, content) {
	return fs.writeFile(filename, JSON.stringify(content));
}

module.exports = { readJSON, writeJSON };
