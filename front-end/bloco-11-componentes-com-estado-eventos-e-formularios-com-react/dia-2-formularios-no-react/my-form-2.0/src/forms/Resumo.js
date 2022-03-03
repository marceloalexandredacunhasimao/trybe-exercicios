import React, {Component} from 'react';

class Resumo extends Component {
  render() {
    const { handleChanges, state } = this.props;
    return (
      <textarea name="resume" maxLength="1000" rows="20" cols="50" required onChange={handleChanges} value={state.resume} />
    );
  }
}

export default Resumo;
