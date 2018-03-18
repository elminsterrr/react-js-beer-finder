import React, { Component } from 'react';
import 'react-router-modal/css/react-router-modal.css';
import './style.css';

class BeerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  render() {
    const { id } = this.props.beer;
    return (
      <div>
        <h3>Child elements</h3>
        <p>{id}</p>
      </div>
    );
  }
}

export default BeerProfile;
