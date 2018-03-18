import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { BrowserRouter, Link } from 'react-router-dom';
import 'react-router-modal/css/react-router-modal.css';
import './style.css';

import BeerProfile from '../BeerProfile';

class BeerListItem extends Component {
  constructor(props) {
    super(props);

    this.beerProfile = this.beerProfile.bind(this);
  }

  beerProfile() {
    const { beer } = this.props;
    return (
      <div>
        <BeerProfile beer={beer} />
      </div>
    );
  }

  render() {
    const { beer } = this.props;
    let cutStr = '';

    if (beer.name.length >= 27) {
      cutStr = `${beer.name.slice(0, 26)}...`;
    } else {
      cutStr = beer.name;
    }

    return (
      <BrowserRouter>
        <div>
          <Link to={`/details/${beer.id}`} className="BeerListItem-router-link">
            <Card raised className="BeerListItem-main-card">
              <CardContent>
                <img
                  src={beer.image_url}
                  alt="beer"
                  className="BeerListItem-img"
                />
                <div className="BeerListItem-h2-and-p-container">
                  <h2 className="BeerListItem-h2">{cutStr}</h2>
                  <p className="BeerListItem-p">{beer.tagline}</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <ModalRoute
            className="test-modal test-modal-foo"
            path={`/details/${beer.id}`}
            parentPath="/"
            component={this.beerProfile}
          />

          <ModalContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default BeerListItem;
