import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findSimilarBeers } from '../../actions/';
import './style.css';

import SimilarBeersItem from '../../components/SimilarBeersItem';

class SimilarBeers extends Component {
  componentDidMount() {
    const { ibu, abv, ebc } = this.props.beer;
    const floorIbu = Math.floor(ibu);
    const floorAbv = Math.floor(abv);
    const floorEbc = Math.floor(ebc);
    this.props.findSimilarBeers(floorIbu, floorAbv, floorEbc);
  }

  render() {
    const { beers } = this.props;
    const cutArr = beers.similarBeersArray.slice(0, 3);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ findSimilarBeers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SimilarBeers);
