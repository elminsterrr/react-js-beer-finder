import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import './style.css';

class BeerListItem extends Component {
  render() {
    const { beer } = this.props;
    let cutStr = '';

    if (beer.name.length >= 27) {
      cutStr = `${beer.name.slice(0, 26)}...`;
    } else {
      cutStr = beer.name;
    }

    return (
      <div>
        <Card raised className="BeerListItem-main-card">
          <CardContent>
            <img src={beer.image_url} alt="beer" className="BeerListItem-img" />
            <div className="BeerListItem-h2-and-p-container">
              <h2 className="BeerListItem-h2">{cutStr}</h2>
              <p className="BeerListItem-p">{beer.tagline}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default BeerListItem;
