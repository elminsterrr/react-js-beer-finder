import React, { Component } from 'react';

import ProgressIndicator from '../ProgressIndicator';

class BeerListingEntry extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ProgressIndicator />
      </div>
    );
  }
}

export default BeerListingEntry;
