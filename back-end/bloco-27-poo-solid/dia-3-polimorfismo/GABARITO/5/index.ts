// ./index.ts

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const carolinaOrder = new Order(carolina, [sandwich, juice, dessert], 'dinheiro', 0.10);
const lucasOrder = new Order(lucas, [sandwich, juice], 'dinheiro', 0.10);
const martaOrder = new Order(marta, [sandwich, juice], 'cartão');
const joaoOrder = new Order(joao, [sandwich, juice, dessert], 'cartão');

console.log('Pedido da Carolina: ', carolinaOrder);
console.log('Pedido do Lucas: ', lucasOrder);
console.log('Pedido da Marta: ', martaOrder);
console.log('Pedido do João: ', joaoOrder);
