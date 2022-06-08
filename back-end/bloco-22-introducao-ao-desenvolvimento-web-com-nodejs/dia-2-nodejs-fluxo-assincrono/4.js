/*
4. 🚀 Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.

    Você pode utilizar then/catch ou async/await para escrever seu código. Procure não utilizar callbacks.
        Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
        Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
        Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
        Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
        Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
        Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
*/
const { readFile, writeFile } = require('fs').promises;
const { existsSync } = require('fs');
//const path = require('path');
//console.log(readFile);
//console.log(writeFile);
const fileName = 'simpsons.json';

async function main() {

// 1:
	async function readAll(fileName) {
		try {
			const fileContent = await readFile(fileName,'utf8');
			return JSON.parse(fileContent);
		} catch(error) {
			console.error(error.message);
		}
	}
	
	async function printSimpsons() {
		const simpsons = await readAll(fileName);
		simpsons.forEach(({id,name}) => console.log(`${id} - ${name}`));
	}

	await printSimpsons();
//	console.log(await readAll(fileName));

// 2:
	async function getSimpson(id) {
		const simpsons = await readAll(fileName);
		return new Promise((resolve, reject) => {
			if(!simpsons.some((simpson) => Number(simpson.id) === id)) {
				return reject(new Error(`id não encontrado: ${id}`));
			} else {
				const name = simpsons.find((simpson) => Number(simpson.id) === id).name;
				resolve(name);
			}
		});
	}
	
	function testGetSimpson(...ids) {
		ids.forEach(async (id) => {
			try{
				const info = await getSimpson(id);
				console.log(`Informações do id ${id}:`, info);
			} catch (error) {
				console.error(error.message);
			}
		});
	}
	await testGetSimpson(1, 11, 3);

// 3:
	async function retiraPersonagens(...ids) {
		let simpsons = await readAll(fileName);
		ids.forEach((id) => {
			simpsons = simpsons.filter((simpson) => Number(simpson.id) !== id);
		});
		writeFile(fileName,JSON.stringify(simpsons));
	}
	await retiraPersonagens(10,6);

//4:
	async function simpsonFamily(newFileName, ...ids) {
		const simpsons = await readAll(fileName);
		let filtrado = [];
		if(existsSync(newFileName)) {
			filtrado = await readAll(newFileName);
		}
		ids.forEach((id) => {
			filtrado = [...filtrado, simpsons.find((simpson) => Number(simpson.id) === id)];
		});
		filtrado = filtrado.filter((element, index) => filtrado.indexOf(element) === index); //Retira elementos repetidos do array.
		writeFile(newFileName,JSON.stringify(filtrado));
	}
	await simpsonFamily('simpsonFamily.json', 1, 4);

//5:
	async function addPerson(newFileName, personName) {
		const simpsons = await readAll(fileName);
		let filtrado = [];
		if(existsSync(newFileName)) {
			filtrado = await readAll(newFileName);
		}
		const person = simpsons.find(({name}) => name === personName);
		filtrado = [...filtrado, person];
		filtrado = filtrado.filter((element, index, arr) => arr.indexOf(element) === index); //Retira elementos repetidos do array.
		writeFile(newFileName,JSON.stringify(filtrado));
	}
	await addPerson('simpsonFamily.json', 'Nelson Muntz');

//5:
	async function replacePerson(newFileName, oldPersonName, newPersonName) {
		const simpsons = await readAll(fileName);
		filtrado = await readAll(newFileName);
		const newPersonIndex = simpsons.findIndex(({name}) => name === newPersonName);
		const oldPersonIndex = filtrado.findIndex(({name}) => name === oldPersonName);
		filtrado[oldPersonIndex] = simpsons[newPersonIndex];
		writeFile(newFileName,JSON.stringify(filtrado));
	}
	await replacePerson('simpsonFamily.json', 'Nelson Muntz', 'Maggie Simpson');
	
}

main();
