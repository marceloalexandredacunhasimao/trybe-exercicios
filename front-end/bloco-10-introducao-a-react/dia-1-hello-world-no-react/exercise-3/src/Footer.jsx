/*
Crie um novo arquivo Footer.jsx ;
No arquivo Footer.jsx , crie uma classe chamada Footer .
A classe Footer deve renderizar uma tag h1 com o texto "E isso é só o começo...". Não esqueça de exportar o componente criado.
Importe o componente Footer no app.js
Renderize o componente Footer no app.js .
*/
import React from 'react';

class Footer extends React.Component {
  render() {
    return <footer className='footer'><h1>E isso é só o começo...</h1></footer>;
  }
}

export default Footer;
