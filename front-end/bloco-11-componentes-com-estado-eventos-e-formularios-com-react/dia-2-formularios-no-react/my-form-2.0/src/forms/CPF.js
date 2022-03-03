import React, {Component} from 'react';

class CPF extends Component {
  render() {
    const { handleChanges, state } = this.props;
    return <input
      type="text"
      name="CPF"
      maxLength="11"
      required
      onChange={handleChanges}
      value={state.CPF}
      />;
  }
}

export default CPF;
