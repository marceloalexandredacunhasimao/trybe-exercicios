let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

info['recorrente']='Sim';

let chave;
for(chave in info)console.log(info[chave]);