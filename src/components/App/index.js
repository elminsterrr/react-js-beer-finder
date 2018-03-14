import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import beerLogo from './beer.svg';
import './style.css';

import StartButton from '../StartButton';

const App = () => (
  <MuiThemeProvider>
    <div className="App">
      <div>
        <header className="App-header">
          <h1 className="App-title">The Beer Finder</h1>
          <p className="App-subtitle">powered by love for</p>
          <img src={beerLogo} className="App-beer-logo" alt="logo" />
        </header>
        <div className="App-start-button">
          <StartButton />
        </div>
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
