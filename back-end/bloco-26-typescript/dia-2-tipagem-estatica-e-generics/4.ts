/*
Exercício 4: Vamos agora estender nossa interface Pizza com novos tipos de pizza. São eles:

    Pizza Comum - seus sabores são “Calabresa”, “Frango” e “Pepperoni”, podem ter 4, 6 ou 8 pedaços.
    Pizza Vegetariana - seus sabores são “Marguerita”, “Palmito” e “Cogumelo”, podem ter 4, 6 ou 8 pedaços.
    Pizza Doce - seus sabores são “Nutela”, “Goiabada com Queijo” e “Marshmallow”, podem ter somente 4 pedaços.

Você deve usar type alias e type unions para criar os possíveis sabores de cada tipo de pizza.
Agora crie:

    3 pizzas do tipo comum;
    2 pizzas do tipo vegetariana;
    1 pizza do tipo doce.
*/
import PizzaVegetarian from "./helper/PizzaVegetarian";
import PizzaCommon from "./helper/PizzaCommon";
import PizzaSugar from "./helper/PizzaSugar";

const calabresa: PizzaCommon = {
    flavor: "Calabresa",
    slices: 6
}

console.log(calabresa);

const frango: PizzaCommon = {
    flavor: "Frango",
    slices: 8
}

console.log(frango);

const pepperoni: PizzaCommon = {
    flavor: "Pepperoni",
    slices: 6
}

console.log(pepperoni);

const marguerita: PizzaVegetarian = {
    flavor: "Marguerita",
    slices: 8
}

console.log(marguerita);

const palmito: PizzaVegetarian = {
    flavor: "Palmito",
    slices: 8
}

console.log(palmito);

const goiabadaEQueijo: PizzaSugar = {
    flavor: "Goiabada com Queijo",
    slices: 4
}

console.log(goiabadaEQueijo);
