import React, {Component} from 'react';

class Estado extends Component {
  render() {
    const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    const { handleChanges, state } = this.props;
    return (
      <select name="countryState" onChange={handleChanges} required defaultValue="">
        <option value="">Selecione o estado</option>
        {
          states.map((state,index) => <option key={index} value={state}>{state}</option>)
        }
      </select>
    );
  }
}

export default Estado;
