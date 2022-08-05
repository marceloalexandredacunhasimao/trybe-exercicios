"use strict";
// Work.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Evaluation_1 = __importDefault(require("./Evaluation"));
class Work extends Evaluation_1.default {
    constructor(teacher, score) {
        super(teacher, score);
    }
    set score(value) {
        if (value > 50)
            throw new Error('A pontuação deve ser menor que 50 pontos.');
        super.score = value;
    }
}
exports.default = Work;
