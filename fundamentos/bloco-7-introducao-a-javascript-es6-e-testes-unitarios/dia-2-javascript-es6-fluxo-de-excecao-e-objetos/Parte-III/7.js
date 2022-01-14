const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


function adicionaChaveValor(objeto,chave,valor) {
	objeto[chave]=valor;
}


function adicionarOTurnoDaNoiteNaLesson2() {
	adicionaChaveValor(lesson2,'turno','noite');
	console.log(lesson2);
}
//adicionarOTurnoDaNoiteNaLesson2();

function listaChaves(objeto) {
	const chaves = Object.keys(objeto);
	console.log(chaves);
}
//listaChaves(lesson3);

function tamanhoDoObjeto(objeto) {
	console.log('Tamanho:',Object.keys(objeto).length);
}
//tamanhoDoObjeto(lesson2);

const valores = objeto => Object.values(objeto);
//console.log(valores(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
//console.log(allLessons);

function totalDeEstudantes(obj) {
	let total = 0;
	for(let key in obj) {
		total += obj[key].numeroEstudantes;
	}
	return total;
}
//console.log(totalDeEstudantes(allLessons));
/*
Gararito:
const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));
*/

const getValueByNumber = (obj,index) => Object.values(obj)[index];
console.log(getValueByNumber(lesson1, 0));
