import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import SimilarBeersItem from '../../components/SimilarBeersItem';

class SimilarBeers extends Component {
  render() {
    const { beers } = this.props;
    const cutArr = beers.similarBeersArray.slice(0, 3);

    if (cutArr.length === 0) {
      return (
        <div className="SimilarBeers-nothing-found">
          No similar beers were found!
        </div>
      );
    }

    return (
      <div className="SimilarBeers-main-container">
        {cutArr.map(beer => (
          <div key={beer.id}>
            <SimilarBeersItem beer={beer} />
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    beers: state.beers,
  };
}

export default connect(mapStateToProps, null)(SimilarBeers);
