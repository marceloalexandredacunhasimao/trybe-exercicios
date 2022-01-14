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
//console.log(getValueByNumber(lesson1, 0));

//Opção um (funciona):
function verifyPair(obj,chave,valor) {
	for(let key in obj) {
		if(key === chave && obj[key] ===valor)return true;
	}
	return false;
}

/*
//Opção dois(não funciona:
const verifyPair = (obj,key,value) => Object.entries(obj).includes([key,value]);
function test(obj,key,value) {
	console.log(Object.entries(obj));
	console.log([key,value]);
}
test(lesson3, 'turno', 'noite');*/

/*Gabarito:
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
*/

/*console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false*/

function assistiramMatematica(obj) {
	let total = 0;
	for(key in obj) {
		const KeysValues = Object.entries(obj[key]);
		for(let i = 0; i < KeysValues.length; i++) {
			if(KeysValues[i][1] === 'Matemática')total += KeysValues[1][1];
		}
	}
	return total;
}
//console.log('Total de alunos que assistiram as aulas de matemática:',assistiramMatematica(allLessons));
/*
//Gabarito:
const getNumberOfStudentsMath = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    if(obj[array[index]].materia === 'Matemática'){
    total += obj[array[index]].numeroEstudantes;
    }
  }
  return total;
}
console.log(getNumberOfStudents(allLessons));
*/


function createReport(lessons,nome) {
	let alunos = 0;
	let aulas = [];
	for(let key in lessons) {
		if(lessons[key].professor === nome) {
			alunos += lessons[key].numeroEstudantes;
			aulas.push(lessons[key].materia);
		}
	}
	return {professor: nome, aulas: aulas, estudantes: alunos};
}
console.log(createReport(allLessons, 'Maria Clara'))

/*
//Gabarito:
const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
*/
