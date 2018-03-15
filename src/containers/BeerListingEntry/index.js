import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeers } from '../../actions/';
import './style.css';

import ProgressIndicator from '../../components/ProgressIndicator';

class BeerListingEntry extends Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    const { beers } = this.props;
    const { error } = this.props;

    if (!beers.length && !error) {
      return (
        <div>
          <ProgressIndicator />
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <p className="BeerListingEntry-sorry">
            Sorry, there was an error while fetching data.
          </p>
          <p>Please try again later.</p>
        </div>
      );
    }

    return <div>Fetching is done!</div>;
  }
}

function mapStateToProps(state) {
  return {
    beers: state.beers,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBeers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerListingEntry);
