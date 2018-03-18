import React, { Component } from 'react';
import 'react-router-modal/css/react-router-modal.css';
import './style.css';

class BeerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleBackClick() {
    this.setState({ show: false });
  }

  render() {

    console.log(this.props);

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
