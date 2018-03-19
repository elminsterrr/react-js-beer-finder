import React, { Component } from 'react';
import './style.css';

class SimilarBeersItem extends Component {
  render() {
    const { beer } = this.props;
    let cutStr = '';

    if (beer.name.length >= 14) {
      cutStr = `${beer.name.slice(0, 13)}...`;
    } else {
      cutStr = beer.name;
    }
    return (
      <div>
        <div className="SimilarBeersItem-just-text">
          <li className="SimilarBeersItem-li">{cutStr}</li>
        </div>
        <div className="SimilarBeersItem-main-container">
          <img
            src={beer.image_url}
            alt="beer"
            className="SimilarBeersItem-img"
          />
          <div>
            <p className="SimilarBeersItem-p">{cutStr}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SimilarBeersItem;
