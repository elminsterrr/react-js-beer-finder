import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './style.css';

import BeerListingEntry from '../BeerListingEntry';

class StartButton extends Component {
  constructor() {
    super();

    this.state = {
      startWasClicked: false,
    };
  }

  handleStartButton = () => {
    this.setState({ startWasClicked: true });
  };

  render() {
    return (
      <div>
        <div className="StartButton-container">
          {!this.state.startWasClicked && (
            <RaisedButton
              label="Start Here"
              className="StartButton-main"
              onClick={this.handleStartButton}
            />
          )}
        </div>
        {this.state.startWasClicked && <BeerListingEntry />}
      </div>
    );
  }
}

export default StartButton;
