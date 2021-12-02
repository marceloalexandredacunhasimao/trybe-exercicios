//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-objetos-e-funcoes/5901c768-9dee-46e8-b23f-c03e76c5b8b3/conteudos/f2e375aa-92c9-4726-8924-14651c48c9a6/forin/bc2d65f9-fb6f-42ee-8678-073ae4b158e8?use_case=next_button
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for(let person in names)console.log("Olá "+names[person]);