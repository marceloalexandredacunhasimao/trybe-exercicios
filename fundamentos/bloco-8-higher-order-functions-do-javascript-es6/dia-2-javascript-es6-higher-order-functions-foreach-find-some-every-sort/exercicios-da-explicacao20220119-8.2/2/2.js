const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find(nome => nome.length === 5);
}

console.log(findNameWithFiveLetters());
