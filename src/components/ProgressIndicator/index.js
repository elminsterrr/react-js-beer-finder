import React from 'react';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';
import './style.css';

const ProgressIndicator = () => (
  <div className="ProgressIndicator-container">
    Fetching beers...
    <div className="ProgressIndicator-circular-progress">
      <CircularProgress style={{ color: purple[500] }} thickness={7} />
    </div>
  </div>
);

export default ProgressIndicator;
