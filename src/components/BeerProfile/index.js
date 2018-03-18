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
    console.log(beer.food_pairing);
    return (
      <div className="BeerProfile-main-container">

        <div className="BeerProfile-img-container">
          <img src={beer.image_url} className="BeerProfile-img" alt="beer" />
        </div>

        <div className="BeerProfile-text-container">
          <h2 className="BeerProfile-h2-name">{beer.name}</h2>
          <p className="BeerProfile-tagline">{beer.tagline}</p>
          <hr className="BeerProfile-hr" />
          <p className="BeerProfile-scales">IBU: {beer.ibu}, ABV: {beer.abv}%, EBC: {beer.ebc}</p>
          <p className="BeerProfile-description">{beer.description}</p>
        </div>

      </div>
    );
  }
}

export default BeerProfile;
