"use strict";
// Para testar!
// ./index.ts
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("./Subject");
var math = new Subject_1.default('Matemática');
var story = new Subject_1.default('História');
var philosophy = new Subject_1.default('Filosofia');
console.log(math);
console.log(story);
console.log(philosophy);
// deve retornar erro
// const invalidSubjectName = new Subject('Po');
