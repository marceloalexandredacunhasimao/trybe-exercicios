"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ./index.ts
const Student_1 = __importDefault(require("./Student"));
const Teacher_1 = __importDefault(require("./Teacher"));
const carolina = new Student_1.default('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student_1.default('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
console.log(carolina);
console.log(lucas);
const math = new Subject('Matemática');
const history = new Subject('História');
const marta = new Teacher_1.default('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher_1.default('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
console.log(marta);
console.log(joao);
