import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './style.css';

import BeerListingEntry from '../../containers/BeerListingEntry';

class StartApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startWasClicked: false,
    };
    this.handleStartApp = this.handleStartApp.bind(this);
  }

  handleStartApp() {
    this.setState({ startWasClicked: true });
  }

  render() {
    return (
      <div>
        <div className="StartApp-container">
          {!this.state.startWasClicked && (
            <div className="StartApp-main">
              <Button variant="raised" onClick={this.handleStartApp}>
                Start Here
              </Button>
            </div>
          )}
        </div>
        {this.state.startWasClicked && <BeerListingEntry />}
      </div>
    );
  }
}

export default StartApp;
