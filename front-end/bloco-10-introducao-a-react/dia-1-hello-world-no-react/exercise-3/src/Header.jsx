/*
Na pasta src, crie um novo arquivo chamado Header.jsx , que representará o componente Header;
No arquivo Header.jsx , crie uma classe React, chamada Header . Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;
No arquivo App.js , importe o componente Header criado anteriormente;
Renderize o componente Header no App.js ;
*/
import React from 'react';

class Header extends React.Component {
  render() {
    return (
    <div>
      <header>
        <h1 className='title'>Conteúdos de Front-End</h1>
      </header>
    </div>
    );
  }
}

export default Header;
