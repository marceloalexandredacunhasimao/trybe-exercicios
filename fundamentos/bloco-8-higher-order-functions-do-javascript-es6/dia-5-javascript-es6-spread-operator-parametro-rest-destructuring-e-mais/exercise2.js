function sum(...params) {
return params.reduce((acc,valor) => acc + valor);
}

console.log(sum(1,2,3,4));
