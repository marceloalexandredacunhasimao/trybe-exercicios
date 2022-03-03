import React from 'react';
import Nome from './forms/Nome';
import Email from './forms/Email';
import CPF from './forms/CPF';
import Endereco from './forms/Endereco';
import Cidade from './forms/Cidade';
import Estado from './forms/Estado';
import Tipo from './forms/Tipo';

import Resumo from './forms/Resumo';
import Cargo from './forms/Cargo';
//import Descricao from './forms/Descricao';

const initialState = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
      formError: {},
      submitted: false,
}

class Form extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleChanges = this.handleChanges.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.alerta = this.alerta.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  handleChanges({target}) {
    const {name,type} = target;
    let value = type === 'checkbox' ? target.checked : target.value;
    value = name === "name" ? value.toUpperCase() : value; //Passa para maiúsculas.
    value = name === 'address' ? value.replace(/[^\w\s]/gi, '') : value; //Eliminar caracteres especiais.
    this.setState({[name]: value});
  }
  
  onBlurHandler(event) {
    let { name, value } = event.target;
    if (name === 'city') value = value.match(/^\d/) ? '' : value;
    this.setState({[name]: value});
  }

  alerta() {
    if(!this.state.submitted) {
      this.setState({submitted: true});
      alert('Preencha com cuidado esta informação.');
    }
  }
  
  clearAll() {
    this.setState(initialState);
  }

  render() {
	//          <Email handleChanges={this.handleChanges} state={this.state} />
	//          <CPF handleChanges={this.handleChanges} state={this.state} />
	//          <Endereco handleChanges={this.handleChanges} state={this.state} />
	//          <Cidade handleChanges={this.handleChanges} state={this.state} />
	//          <Estado handleChanges={this.handleChanges} state={this.state} />
	//          <Tipo handleChanges={this.handleChanges} state={this.state} />

	//          <Resumo handleChanges={this.handleChanges} state={this.state} />
	//          <Cargo handleChanges={this.handleChanges} state={this.state} />
	//          <Descricao handleChanges={this.handleChanges} state={this.state} />
    return (
      <>
      	<fieldset>
        	<form>
          	  <div><Nome handleChanges={this.handleChanges} state={this.state} /></div>
          	  <div><Email handleChanges={this.handleChanges} state={this.state} /></div>
          	  <div><CPF handleChanges={this.handleChanges} state={this.state} /></div>
          	  <div><Endereco handleChanges={this.handleChanges} state={this.state} /></div>
          	  <div><Cidade handleChanges={this.handleChanges} state={this.state} onBlur={this.onBlurHandler} /></div>
          	  <div><Estado handleChanges={this.handleChanges} state={this.state} /></div>
          	  <div><Tipo handleChanges={this.handleChanges} /></div>
        	</form>
      	</fieldset>
      	<fieldset>
        	<form>
        	  <div><Resumo handleChanges={this.handleChanges} state={this.state} /></div>
        	  <div><Cargo handleChanges={this.handleChanges} alerta={this.alerta} state={this.state} /></div>
	        </form>
      	</fieldset>
      	<button onClick={this.clearAll}>Clear all</button>
      	</>
    );
  }
}


export default Form;




/*
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
      formError: {},
      submitted: false,
    }
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges({target}) {
    const {name,type} = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value});
  }

  return (
    <Form state = {this.state} handleChanges = ${this.handleChanges} />
  );
*/
