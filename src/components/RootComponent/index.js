import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import beerLogo from './icon/beer.svg';
import './style.css';

import BeerListingEntry from '../../containers/BeerListingEntry';

const RootComponent = () => (
  <div className="RootComponent">
    <div>
      <header className="RootComponent-header">
        <h1 className="RootComponent-title">BeerFinder</h1>
        <p className="RootComponent-subtitle">powered by love for</p>
        <img src={beerLogo} className="RootComponent-beer-logo" alt="logo" />
      </header>
      <div className="RootComponent-start">
        <Router>
          <BeerListingEntry />
        </Router>
      </div>
    </div>
  </div>
);

export default RootComponent;
