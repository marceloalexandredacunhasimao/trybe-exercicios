import React, {Component} from 'react';

class Cargo extends Component {
  render() {
    const { handleChanges, alerta, state } = this.props;
    return (
      <textarea
      name="role"
      maxLength="40"
      rows="5" cols="8"
      required onChange={handleChanges}
      onMouseEnter={alerta}
      value={state.role}
      />
    );
  }
}

export default Cargo;
