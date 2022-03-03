import React, {Component} from 'react';

class Email extends Component {
  render() {
    const { handleChanges, state } = this.props;
    return <input
      type="text"
      name="email"
      maxLength="50"
      required
      onChange={handleChanges}
      value={state.email}
      />;
  }
}

export default Email;
