const myFizzBuzz = require('./myFizzBuzz.js');

describe('1-Testa função myFizzBuzz',() => {
	it('Verifica se função myFizzBuzz retorna valores corretos',() => {
		expect(myFizzBuzz(15)).toBe('fizzbuzz');
		expect(myFizzBuzz(3)).toBe('fizz');
		expect(myFizzBuzz(5)).toBe('buzz');
		expect(myFizzBuzz(7)).toBe(7);
		expect(myFizzBuzz('')).toBe(false);
	});
});
