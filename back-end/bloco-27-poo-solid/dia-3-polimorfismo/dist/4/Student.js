"use strict";
// Student.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = String();
        this.enrollment = this.generateEnrollment();
        this._evaluationsResults = [];
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        if (value.length < 16) {
            throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
        }
        this._enrollment = value;
    }
    get evaluationsResults() {
        return this._evaluationsResults;
    }
    sumGrades() {
        return [...this._evaluationsResults]
            .reduce((previousNote, note) => note.score + previousNote, 0);
    }
    sumAverageGrade() {
        const sumGrades = this.sumGrades();
        const divider = this._evaluationsResults.length;
        return Math.round(sumGrades / divider);
    }
    generateEnrollment() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `STU${randomStr}`;
    }
    addEvaluationResult(value) {
        this._evaluationsResults.push(value);
    }
}
exports.default = Student;
