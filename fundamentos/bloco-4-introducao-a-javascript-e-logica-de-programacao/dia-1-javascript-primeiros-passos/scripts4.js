//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-primeiros-passos/33d74e1e-05b9-4ce8-86e3-623c96afe64d/conteudos/06024c00-d20b-4d96-a047-452451483f5a/operadores-logicos/1f3fd03a-1c7b-4aaa-bf0c-f3a5ecb89882?use_case=next_button
/*const conditionOne = true;
  const conditionTwo = false;

  console.log(conditionOne && conditionTwo);
*/
/*

    Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua
    escolha, para representar as horas do dia. Crie uma variável chamada "message" que,
    inicialmente, é uma string vazia. Implemente condicionais para que:

    Se o horário for maior ou igual a 22, insira
    "Não deveríamos comer nada, é hora de dormir" na variável "message".
    Se o horário for maior ou igual a 18 e menor que 22, insira
    "Rango da noite, vamos jantar :D" na variável "message".
    Se o horário for maior ou igual a 14 e menor que 18, insira
    "Vamos fazer um bolo pro café da tarde?" na variável "message".
    Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
    Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado"
    na variável "message".

    Agora imprima a variável message fora das suas condições.
*/
/*

    Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
    Implemente condicionais para que:

    Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira",
    "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
    Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo.
Esse assunto é muito importante para seu aprendizado :).
*/
const  currentHour=4;
let message="";
if(currentHour>=22)
{
    message="Não deveríamos comer nada, é hora de dormir";
}
else if(currentHour>=18 && currentHour<22)
{
    message="Rango da noite, vamos jantar :D";
}
else if(currentHour>=14 && currentHour<18)
{
    message="Vamos fazer um bolo pro café da tarde?";
}
else if(currentHour>=11 && currentHour<14)
{
    message="Hora do almoço!!!";
}
else if(currentHour>=4 && currentHour<11)
{
    message="Hmmm, cheiro de café recém passado";
};

console.log(message);



weekDay="quarta-feira"; //weekDay="sabad";
if(weekDay==="segunda-feira" || weekDay==="terça-feira" || weekDay==="quarta-feira" || weekDay==="quinta-feira" || weekDay==="sexta-feira")
{
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else if(weekDay==="sabado" || weekDay==="domingo" )
{
    console.log("FINALMENTE, descanso merecido UwU");
}
else console.log("Variável weekDay com valor inválido.");

console.log(!(2 + 2) === 4);
console.log("");

const squirtle = "melhor pokemon inicial";
console.log(!squirtle); // false
console.log(!42); // false
console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
console.log(!null); // true
console.log(!undefined); // true
