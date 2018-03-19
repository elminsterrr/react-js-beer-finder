import React, { Component } from 'react';
import 'react-router-modal/css/react-router-modal.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findSimilarBeers } from '../../actions/';
import './style.css';

import ProgressIndicator from '../../components/ProgressIndicator';
import SimilarBeers from '../../containers/SimilarBeers';

class BeerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    document.body.classList.add('BeerProfile-modal-open');

    const { ibu, abv, ebc } = this.props.beer;
    const floorIbu = Math.floor(ibu);
    const floorAbv = Math.floor(abv);
    const floorEbc = Math.floor(ebc);

    this.props.findSimilarBeers(floorIbu, floorAbv, floorEbc);
  }

  componentWillUnmount() {
    document.body.classList.remove('BeerProfile-modal-open');
  }

  render() {
    const { beer } = this.props;
    const { isFetchingSimilar, errorMessage } = this.props.beers;

    return (
      <div className="BeerProfile-main-container">
        <div className="BeerProfile-img-container">
          <img src={beer.image_url} className="BeerProfile-img" alt="beer" />
        </div>
        <div className="BeerProfile-text-container">
          <h2 className="BeerProfile-h2-name">{beer.name}</h2>
          <p className="BeerProfile-tagline">{beer.tagline}</p>
          <hr className="BeerProfile-hr" />
          <p className="BeerProfile-scales">
            <span className="BeerProfile-scales-span">IBU:</span>{' '}
            <span className="BeerProfile-scales-data">{beer.ibu} </span>
            <span className="BeerProfile-scales-span">ABV:</span>{' '}
            <span className="BeerProfile-scales-data">{beer.abv}% </span>
            <span className="BeerProfile-scales-span">EBC:</span>{' '}
            <span className="BeerProfile-scales-data">{beer.ebc}</span>
          </p>
          <p className="BeerProfile-description">{beer.description}</p>
          <p className="BeerProfile-description-tips">
            <span className="BeerProfile-brewers-tips">Brewers tips:</span>{' '}
            {beer.brewers_tips}
          </p>
          <p className="BeerProfile-try">You should also try:</p>
          {isFetchingSimilar && <ProgressIndicator />}
          {!isFetchingSimilar && !errorMessage && <SimilarBeers beer={beer} />}
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
  return bindActionCreators({ findSimilarBeers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerProfile);
