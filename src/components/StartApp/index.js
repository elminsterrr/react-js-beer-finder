import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
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
            <RaisedButton
              label="Start Here"
              className="StartApp-main"
              onClick={this.handleStartApp}
            />
          )}
        </div>
        {this.state.startWasClicked && <BeerListingEntry />}
      </div>
    );
  }
}

export default StartApp;
