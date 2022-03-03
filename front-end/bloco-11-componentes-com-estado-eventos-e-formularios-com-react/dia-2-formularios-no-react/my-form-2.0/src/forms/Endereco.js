import React, {Component} from 'react';

class Endereco extends Component {
  render() {
    const { handleChanges, state } = this.props;
    return <input
      type="text"
      name="address"
      maxLength="200"
      required
      onChange={handleChanges}
      value={state.address}
      />;
  }
}

export default Endereco;
