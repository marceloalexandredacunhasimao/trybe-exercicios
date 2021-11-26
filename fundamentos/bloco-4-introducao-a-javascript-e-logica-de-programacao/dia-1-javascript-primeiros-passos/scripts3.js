//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-primeiros-passos/33d74e1e-05b9-4ce8-86e3-623c96afe64d/conteudos/06024c00-d20b-4d96-a047-452451483f5a/condicoes-if-e-else/36761295-295b-4e68-842d-8a312868bef2?use_case=next_button
/*
 Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito
 comum na sua carreira de pessoa desenvolvedora. Então vamos praticar o que aprendemos no
 vídeo?

    Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e
    atribua a ela um valor entre 1 e 100; Implemente uma lógica que verifique se a pessoa
    candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere
    as seguintes informações:

    Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
    Se a nota for menor que 80 e maior ou igual a 60, imprima
    "Você está na nossa lista de espera"
    Se a nota for menor que 60, imprima "Você foi reprovada(o)"

    Crie uma estrutura condicional utilizando o if , else if e else para criar o seu
    algoritmo, e os operadores lógicos que se aplicam a cada situação.
    Altere o valor da nota para verificar se as condições que você implementou funcionam;
*/
const nota = 70;
if(nota>=80)
    console.log("Parabéns, você foi aprovada(o)!");
else if(nota>=60)
    console.log("Você está na nossa lista de espera");
else{console.log("Você foi reprovada(o)");};