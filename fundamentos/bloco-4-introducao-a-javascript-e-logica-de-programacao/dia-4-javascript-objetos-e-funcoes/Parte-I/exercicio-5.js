let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let info2={
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

info['recorrente']='Sim';

let chave;
for(chave in info)
{
    if(chave==='recorrente' && info[chave]==='Sim')
        console.log('Ambos recorrentes');
    else console.log(info[chave]+' e '+info2[chave]);
};