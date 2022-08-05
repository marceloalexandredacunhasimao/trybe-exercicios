"use strict";
// Order.ts
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(client, items, _paymentMethod, discount) {
        this._paymentMethod = _paymentMethod;
        this._items = [];
        this._discount = 0;
        this._id = Math.trunc(Date.now() * (Math.random() + 1));
        this._createdAt = new Date();
        this._client = client;
        this.items = items;
        this.paymentMethod = _paymentMethod;
        if (discount)
            this.discount = discount;
    }
    get id() {
        return this._id;
    }
    get createdAt() {
        return this._createdAt;
    }
    get client() {
        return this._client;
    }
    set client(value) {
        this._client = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        if (value.length === 0) {
            throw new Error('O pedido deve ter pelo meno um item.');
        }
        this._items = value;
    }
    get paymentMethod() {
        return this._paymentMethod;
    }
    set paymentMethod(value) {
        if (!['dinheiro', 'cartão', 'vale'].includes(value)) {
            throw new Error('A forma de pagamento não é válida.');
        }
        this._paymentMethod = value;
    }
    get discount() {
        return this._discount;
    }
    set discount(value) {
        if (value < 0) {
            throw new Error('O desconto não pode ser um valor negativo.');
        }
        this._discount = value;
    }
    calculateTotal() {
        return this.items
            .reduce((previousValue, item) => previousValue + item.price, 0);
    }
    calculateTotalWithDiscount() {
        return this.calculateTotal() * (1 - this.discount);
    }
}
exports.default = Order;
