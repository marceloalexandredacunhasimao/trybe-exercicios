"use strict";
// EvaluationResult.ts
Object.defineProperty(exports, "__esModule", { value: true });
class EvaluationResult {
    constructor(evaluation, _score) {
        this._score = _score;
        this._evaluation = evaluation;
        this.score = _score;
    }
    get evaluation() {
        return this._evaluation;
    }
    set evaluation(value) {
        this._evaluation = value;
    }
    get score() {
        return this._score;
    }
    validateValueThreshold(value, type, threshold) {
        if (this.type === type && value > threshold) {
            throw new Error(`A pontuação deve ser menor que ${threshold} pontos.`);
        }
    }
    set score(value) {
        if (value < 0)
            throw new Error('A pontuação deve ser positiva.');
        this.validateValueThreshold(value, 'prova', 25);
        this.validateValueThreshold(value, 'trabalho', 50);
        this._score = value;
    }
}
exports.default = EvaluationResult;
