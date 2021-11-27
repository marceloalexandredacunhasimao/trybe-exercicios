
const peca='Torre';
let lpeca,movimento;

lpeca=peca.toLowerCase();
switch(lpeca)
{
    case "bispo": movimento='diagonais';break;
    case "torre": movimento='laterais';break;
    default: movimento='Erro: peça inválida.'
}

console.log(movimento);