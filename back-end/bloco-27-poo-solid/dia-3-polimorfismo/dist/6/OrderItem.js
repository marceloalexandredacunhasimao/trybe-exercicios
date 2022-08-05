"use strict";
// OrderItem.ts
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(_name, _price) {
        this._name = _name;
        this._price = _price;
        this.name = _name;
        this.price = _price;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (value < 0)
            throw new Error('O preço deve ser positivo.');
        this._price = value;
    }
}
exports.default = OrderItem;
