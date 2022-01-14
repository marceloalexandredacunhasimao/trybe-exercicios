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

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
