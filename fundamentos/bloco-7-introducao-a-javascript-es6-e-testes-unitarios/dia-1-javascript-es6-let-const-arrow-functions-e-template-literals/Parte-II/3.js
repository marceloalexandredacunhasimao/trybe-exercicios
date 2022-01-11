let conta=0;

const mostraContagem = () => document.querySelector('p').innerText=conta;

mostraContagem();

document.querySelector('button').addEventListener('click',() =>document.querySelector('p').innerText=++conta);
