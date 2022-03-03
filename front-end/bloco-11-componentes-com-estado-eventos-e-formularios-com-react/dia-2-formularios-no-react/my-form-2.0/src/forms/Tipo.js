import React, {Component} from 'react';

class Tipo extends Component {
  render() {
    const { handleChanges } = this.props;
    return (
    <div>
      <label htmlFor="casa">
        <input type="radio" name="addressType" value="casa" id="casa" onChange={handleChanges} />
        Casa
      </label>
      <label htmlFor="apartamento">
        <input type="radio" name="addressType" value="apartamento" id="apartamento" onChange={handleChanges} />
        Apartamento
      </label>
    </div>
    );
  }
}

export default Tipo;
