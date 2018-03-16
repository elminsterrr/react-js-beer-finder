import React, { Component } from 'react';
import ReduxLazyScroll from 'redux-lazy-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeers } from '../../actions/';

import BeersListItem from '../../components/BeersListItem';
import ProgressIndicator from '../../components/ProgressIndicator';

import './style.css';

class BeerListingScroll extends Component {
  constructor(props) {
    super(props);

    this.loadBeers = this.loadBeers.bind(this);
  }

  loadBeers() {
    const { skip, limit } = this.props.beers;
    this.props.fetchBeers(skip, limit);
  }

  render() {
    const { beersArray, isFetching, errorMessage, hasMore } = this.props.beers;
    return (
      <div className="container beers-lazy-scroll">
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
        <div className="row beers-lazy-scroll__messages">
          {isFetching && (
            <div className="alert alert-info">
              <ProgressIndicator />
            </div>
          )}

          {!hasMore &&
            !errorMessage && (
              <div className="alert alert-success">
                All the beers has been loaded successfully.
              </div>
            )}
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

// export default compose(
//   withStyles(styles, {
//     name: 'AppFrame',
//   }),
//   withWidth(),
//   connect(),
// )(AppFrame);
