const longestWord = frase =>{
	frase = frase.split(' ');
	let indiceDaMaior=0;
	let numeroDeCaracteresDaMaior=frase[0].length;
	for(let i=1;i<frase.length;++i){
		if(frase[i].length>numeroDeCaracteresDaMaior)
		{
			indiceDaMaior=i;
			numeroDeCaracteresDaMaior=frase[i].length;
		};
	};
	return frase[indiceDaMaior];
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));


/*
Gabarito:
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
*/
