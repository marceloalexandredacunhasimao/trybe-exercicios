
/*
    Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em
    conceitos de A a F. Siga essas regras:

    Porcentagem >= 90 -> A
    Porcentagem >= 80 -> B
    Porcentagem >= 70 -> C
    Porcentagem >= 60 -> D
    Porcentagem >= 50 -> E
    Porcentagem < 50 -> F
    O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor
    que 0 ou maior que 100.
*/
nota=75;
let x="F";

if(nota<0 || nota>100)x="Erro: nota inválida.";
else if(nota>=90)x='A';
else if(nota>=80)x="B";
else if(nota>=70)x='C';
else if(nota>=60)x="D";
else if(nota>=50)x='E';

console.log(x);
