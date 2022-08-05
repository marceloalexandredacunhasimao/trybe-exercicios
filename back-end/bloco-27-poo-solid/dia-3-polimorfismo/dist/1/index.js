"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const Teacher_1 = __importDefault(require("./Teacher"));
const Student_1 = __importDefault(require("./Student"));
const Subject_1 = __importDefault(require("./Subject"));
// tentar fazer isso agora deve gerar um erro
// já que nossa classe se tornou abstrata e não podemos criar instâncias de classes abstratas
const pessoa = new Person_1.default('Carolina da Silva', new Date('2005/03/17'));
// isso não deve gerar nenhum erro
const carolina = new Student_1.default('Carolina da Silva', new Date('2005/03/17'));
console.log(carolina);
const math = new Subject_1.default('Matemática');
// isso também não deve gerar nenhum erro
const marta = new Teacher_1.default('Marta da Silva', new Date('1980/03/30'), 2000, math);
console.log(marta);
