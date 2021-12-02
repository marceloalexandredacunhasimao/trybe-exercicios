//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-objetos-e-funcoes/5901c768-9dee-46e8-b23f-c03e76c5b8b3/conteudos/f2e375aa-92c9-4726-8924-14651c48c9a6/objetos/0b405bd6-363d-4024-bd3a-78b3adbc55f6?use_case=next_button
let player={
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : { golden: 2, silver: 3 }
}

//console.log("A jogadora "+player.name+" "+player.lastName+" tem "+player.age+" anos de idade.")
player.bestInTheWorld=[2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora "+player.name+" "+player.lastName+" foi eleita a melhor do mundo por "+player.bestInTheWorld.length+" vezes");
