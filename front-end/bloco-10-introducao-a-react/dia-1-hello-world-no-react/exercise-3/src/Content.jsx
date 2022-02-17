/*
Na pasta src, crie um novo arquivo chamado Content.jsx , que representará o componente Content ;
Dentro do arquivo Content.jsx , crie uma classe React chamada Content ;
Ainda no arquivo Content.jsx , adicione o seguinte array:
*/
import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
      const divs = conteudos.map(({conteudo,bloco,status}) => (
          <div key={conteudo} className="card">
          <h4>O conteúdo é: {conteudo}</h4>
          <p>Status: {status}</p>
          <p>Bloco: {bloco}</p>
          </div>
          )
        );
    return <div className="content">{divs}</div>;
  }
}

export default Content;
