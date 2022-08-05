"use strict";
// OrderRepository.ts
Object.defineProperty(exports, "__esModule", { value: true });
class OrderRepository {
    constructor() {
        this._orders = [];
    }
    addOrder(value) {
        this._orders.push(value);
    }
    removeOrder(value) {
        const index = this._orders.findIndex((order) => order.id === value.id);
        this._orders.splice(index, 1);
    }
    listByClient(value) {
        return this._orders.filter((order) => order.client === value);
    }
    listBySortedValue(sort) {
        if (!['maior', 'menor'].includes(sort))
            throw new Error('Valor de ordenação inválido.');
        if (sort === 'menor') {
            return this._orders.sort((orderA, orderB) => {
                if (orderA.calculateTotalWithDiscount() > orderB.calculateTotalWithDiscount())
                    return 1;
                if (orderA.calculateTotalWithDiscount() < orderB.calculateTotalWithDiscount())
                    return -1;
                return 0;
            });
        }
        return this._orders.sort((orderA, orderB) => {
            if (orderA.calculateTotalWithDiscount() > orderB.calculateTotalWithDiscount())
                return -1;
            if (orderA.calculateTotalWithDiscount() < orderB.calculateTotalWithDiscount())
                return 1;
            return 0;
        });
    }
}
exports.default = OrderRepository;
