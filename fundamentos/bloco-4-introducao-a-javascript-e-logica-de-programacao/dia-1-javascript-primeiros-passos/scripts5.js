//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-primeiros-passos/33d74e1e-05b9-4ce8-86e3-623c96afe64d/conteudos/06024c00-d20b-4d96-a047-452451483f5a/switch-e-case/f8746c5a-3602-4724-88e8-c6ee41631ed3?use_case=next_button
/*
 Você com certeza está super feliz com seus novos conhecimentos sobre JS, não é?! 🎉
 Então vamos praticar mais um pouco antes de chegar na sessão de exercícios. Vamos!!!

    Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo,
    que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
    Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do
    exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou
    'reprovada' . Como default , imprima a mensagem de 'não se aplica' .

A estrutura switch/case é utilizada quando queremos executar diferentes ações.
A expressão que passamos para o switch é avaliada apenas uma vez, e o seu valor
é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é
executado. Se nenhum valor satisfizer os casos listados, é executado o código em default .
*/

let pessoa="apr";
pessoa="lis";
pessoa="rep";
pessoa="a";
switch(pessoa)
{
    case "apr":
        console.log('aprovada');
        break;
    case "lis":
        console.log('lista');
        break;
    case "rep":
        console.log('reprovada');
        break;
    default:
        console.log('não se aplica');
}
