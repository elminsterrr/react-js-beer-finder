import React, { Component } from 'react';
import 'react-router-modal/css/react-router-modal.css';
import './style.css';

class BeerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    document.body.classList.add('BeerProfile-modal-open');
  }

  componentWillUnmount() {
    document.body.classList.remove('BeerProfile-modal-open');
  }

  render() {
    const { beer } = this.props;
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
          <p className="BeerProfile-description">
            <span className="BeerProfile-brewers-tips">Brewers tips:</span>{' '}
            {beer.brewers_tips}
          </p>
        </div>
      </div>
    );
  }
}

export default BeerProfile;
