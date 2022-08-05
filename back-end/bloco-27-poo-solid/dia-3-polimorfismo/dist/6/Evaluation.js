"use strict";
// Evaluation.ts
Object.defineProperty(exports, "__esModule", { value: true });
class Evaluation {
    constructor(teacher, _score) {
        this._score = _score;
        this._teacher = teacher;
        this.score = _score;
    }
    get teacher() {
        return this._teacher;
    }
    set teacher(value) {
        this._teacher = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        if (value < 0)
            throw new Error('A pontuação deve ser positiva.');
        this._score = value;
    }
}
exports.default = Evaluation;
