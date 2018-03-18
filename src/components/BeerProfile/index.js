import React, { Component } from 'react';
import { Modal } from 'react-router-modal';
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
    const { id } = this.props.beer;
    return (
      <div>
        {this.state.show && (
          <Modal onBackdropClick={this.handleBackClick}>
            <h3>Child elements</h3>
            <p>{id}</p>
          </Modal>
        )}
      </div>
    );
  }
}

export default BeerProfile;
