import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import beerLogo from './icon/beer.svg';
import './style.css';

import BeerListingEntry from '../../containers/BeerListingEntry';

const RootComponent = () => (
  <div className="App">
    <div>
      <header className="App-header">
        <h1 className="App-title">BeerFinder</h1>
        <p className="App-subtitle">powered by love for</p>
        <img src={beerLogo} className="App-beer-logo" alt="logo" />
      </header>
      <div className="App-start">
        <Router>
          <BeerListingEntry />
        </Router>
      </div>
    </div>
  </div>
);

export default RootComponent;
