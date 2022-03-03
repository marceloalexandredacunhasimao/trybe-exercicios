import React, {Component} from 'react';

class Nome extends Component {
  render() {
    const { handleChanges, state } = this.props;
    return <input
      type="text"
      name="name"
      maxLength="40"
      required
      onChange={handleChanges}
      value={state.name}
      />
  }
}

export default Nome;
