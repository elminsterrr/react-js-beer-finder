import React from 'react';
import beerLogo from './icon/beer.svg';
import './style.css';

import StartApp from '../StartApp';

const RootComponent = () => (
  <div className="App">
    <div>
      <header className="App-header">
        <h1 className="App-title">The Beer Finder</h1>
        <p className="App-subtitle">powered by love for</p>
        <img src={beerLogo} className="App-beer-logo" alt="logo" />
      </header>
      <div className="App-start">
        <StartApp />
      </div>
    </div>
  </div>
);

export default RootComponent;
