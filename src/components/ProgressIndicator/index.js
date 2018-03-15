import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import './style.css';

const ProgressIndicator = () => (
  <div className="ProgressIndicator-container">
    Fetching beers...
    <div className="ProgressIndicator-circular-progress">
      <CircularProgress size={70} thickness={8} />
    </div>
  </div>
);

export default ProgressIndicator;
