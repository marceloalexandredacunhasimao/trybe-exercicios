// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['abacate', 'morango', 'uva'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit,...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
