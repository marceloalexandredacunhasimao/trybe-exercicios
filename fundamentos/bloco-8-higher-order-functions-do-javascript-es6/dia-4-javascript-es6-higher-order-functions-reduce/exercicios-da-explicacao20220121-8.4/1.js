const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

function comFilter() {
	return numbers.filter(number => number%2 == 0)
	.reduce((acc,number) => acc + number);
}

function semFilter() {
	return numbers.reduce((acc,number) => number%2 == 0 ? acc+number : acc,0);
}

console.log(comFilter());
console.log(semFilter());
