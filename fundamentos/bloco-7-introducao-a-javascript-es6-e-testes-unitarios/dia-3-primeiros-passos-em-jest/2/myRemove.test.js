const myRemove = require('./myRemove.js');

describe('1-Testa função myRemove',() => {
	it('A função myRemove retorna o array esperado',() => {
		expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
		expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1,2,3,4]);
		expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4]);
	});
});
	/*
it('A chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado',()=>{
});
it('A chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]',()=>{
});
it('A chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado',()=>{
});
*/
