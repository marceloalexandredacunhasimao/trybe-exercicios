import React, {Component} from 'react';

class Cidade extends Component {
  render() {
    const { handleChanges, state, onBlurHandler } = this.props;
    return <input
      type="text"
      name="city"
      maxLength="28"
      required
      onBlur={onBlurHandler}
      onChange={handleChanges}
      value={state.city}
      />;
  }
}

export default Cidade;
