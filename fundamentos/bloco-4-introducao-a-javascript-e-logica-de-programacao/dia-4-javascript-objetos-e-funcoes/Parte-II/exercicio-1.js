//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-objetos-e-funcoes/5901c768-9dee-46e8-b23f-c03e76c5b8b3/exercicios/4c114d64-4ffe-4a19-9c99-b00bb38bf58d/parte-ii-funcoes/af7fb27e-2fba-4d0e-85c2-d0fa95f4bbf0?use_case=next_button
/*1 - Crie uma função que receba uma string e retorne true se for um palíndromo ,
ou false , se não for.

Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/

function verificaPalindrome(texto)
{
  let splitTexto=Array.from(texto); //texto.split(""); //Converte string em array de caracteres.
  let reverso = splitTexto.reverse(); //Inverte a ordem dos elmentos do array.
  let joinTexto = reverso.join(""); //Converte o array em string.

  return joinTexto===texto; //Testa se a string invertida é igual à original.
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));