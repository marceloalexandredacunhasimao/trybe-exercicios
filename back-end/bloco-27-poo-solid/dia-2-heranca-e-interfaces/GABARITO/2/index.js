"use strict";
// Para testar!
// ,/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var carolina = new Student_1.default('Carolina da Silva', new Date('2005/03/17'));
var lucas = new Student_1.default('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
var jessica = new Student_1.default('Jéssica Bianca Nunes', new Date('2004/06/06'));
var tamires = new Student_1.default('Tamires Santos Bastos', new Date('2005/11/05'));
var fernando = new Student_1.default('Fernando Gonçalves', new Date('2006/09/11'));
carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.worksGrades = [50, 45];
tamires.worksGrades = [47, 42];
console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);
// deve retornar erro
// fernando.worksGrades = [45, 45, 45];
