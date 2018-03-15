import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeers } from '../../actions/';

import ProgressIndicator from '../../components/ProgressIndicator';

class BeerListingEntry extends Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    const { beers } = this.props;
    if (!beers.length) {
      return (
        <div>
          <ProgressIndicator />
        </div>
      );
    }

    return <div>Fetching is done!</div>;
  }
}

function mapStateToProps(state) {
  return { beers: state.beers };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBeers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerListingEntry);
