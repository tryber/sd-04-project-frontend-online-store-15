import React, { Component } from 'react';
import { freeIcon } from '../icons';

class Name extends Component {
  render() {
    return (
      <img
        src={freeIcon}
        alt="Free Shipping"
        className="free-ship"
        data-testid="free-shipping"
      />
    );
  }
}

export default Name;
