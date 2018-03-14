import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './style.css';

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

  beerListingView() {
    if (this.state.startWasClicked) {
      return <div>YES! It was clicked!</div>;
    }
    // Else return just single <div />
    return <div />;
  }

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
        {this.beerListingView()}
      </div>
    );
  }
}

export default StartButton;
