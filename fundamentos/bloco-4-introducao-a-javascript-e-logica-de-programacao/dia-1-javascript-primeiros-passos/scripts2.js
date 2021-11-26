//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-primeiros-passos/33d74e1e-05b9-4ce8-86e3-623c96afe64d/conteudos/06024c00-d20b-4d96-a047-452451483f5a/tipos-primitivos-tipagem-dinamica-e-operacoes-aritmeticas/86508223-2162-4553-878e-0658c55d2a84?use_case=next_button
/*
Agora é a hora da mão na massa no código!
No exemplo abaixo, temos as informações de um paciente.
Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number .

 Agora que você já conhece os operadores aritméticos básicos do JavaScript, vamos praticá-los? Você pode consultar a lista de operadores na tabela JavaScript Arithmetic Operators disponível nesse link se tiver dúvidas. Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

    Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
    Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
    Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
*/
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
console.log(typeof patientId);
console.log(typeof(isEnrolled))
console.log(typeof patientInfo);
console.log(typeof(patientEmail));
//console.log(typeof(typeof(5)));
console.log(typeof patientAge);
patientId = '50'
console.log(typeof patientId);

const base=5;
let height=8;
const area=base*height;
perimeter=base+height;
console.log(base);
console.log(height);
console.log(area);
console.log(perimeter);
