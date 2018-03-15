import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeers } from '../../actions/';
import './style.css';

import ProgressIndicator from '../../components/ProgressIndicator';
import BeerListingScroll from '../BeerListingScroll';

class BeerListingEntry extends Component {
  componentDidMount() {
    this.props.fetchBeers(1, 1);
  }

  render() {
    const { beers } = this.props;

    if (!beers.beersArray.length && !beers.errorMessage) {
      return (
        <div>
          <ProgressIndicator />
        </div>
      );
    }

    if (beers.errorMessage) {
      return (
        <div>
          <p className="BeerListingEntry-sorry">
            Sorry, there was an error while fetching data.
          </p>
          <p>Please try again later.</p>
        </div>
      );
    }

    return <BeerListingScroll />;
  }
}

function mapStateToProps(state) {
  return {
    beers: state.beers,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBeers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerListingEntry);
