import React, { Component } from 'react';
import ReduxLazyScroll from 'redux-lazy-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeers } from '../../actions/';
import './style.css';

import BeersListItem from '../../components/BeersListItem';
import ProgressIndicator from '../../components/ProgressIndicator';
import SuccessMessage from '../../components/SuccessMessage';

class BeerListingScroll extends Component {
  constructor(props) {
    super(props);

    this.loadBeers = this.loadBeers.bind(this);
  }

  loadBeers() {
    const { page, limit } = this.props.beers;
    this.props.fetchBeers(page, limit);
  }

  render() {
    const { beersArray, isFetching, errorMessage, hasMore } = this.props.beers;
    return (
      <div>
        <ReduxLazyScroll
          isFetching={isFetching}
          errorMessage={errorMessage}
          loadMore={this.loadBeers}
          hasMore={hasMore}
        >
          <div className="BeerListingScroll-wrapper">
            {beersArray.map(beer => (
              <div key={beer.id} className="BeerListingScroll-info-box">
                <BeersListItem beer={beer} />
              </div>
            ))}
          </div>
        </ReduxLazyScroll>
        <div>
          {isFetching && <ProgressIndicator />}
          {!hasMore && !errorMessage && <SuccessMessage />}
        </div>
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
  return bindActionCreators({ fetchBeers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerListingScroll);
