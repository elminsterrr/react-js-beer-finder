import React from 'react';
import { CircularProgress } from 'material-ui/Progress';
import blue from 'material-ui/colors/blue';
import './style.css';

const ProgressIndicator = () => (
  <div className="ProgressIndicator-container">
    Fetching beers...
    <div className="ProgressIndicator-circular-progress">
      <CircularProgress style={{ color: blue[500] }} thickness={7} />
    </div>
  </div>
);

export default ProgressIndicator;
