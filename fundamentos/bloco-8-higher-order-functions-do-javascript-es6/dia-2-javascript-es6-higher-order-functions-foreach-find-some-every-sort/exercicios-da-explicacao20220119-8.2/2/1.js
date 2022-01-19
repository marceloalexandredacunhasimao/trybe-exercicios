const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbers.find(numero => numero%3 === 0 && numero%5 ===0);
}

console.log(findDivisibleBy3And5())
