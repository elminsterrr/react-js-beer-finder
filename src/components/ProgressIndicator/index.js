import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

// import './style.css';

const ProgressIndicator = () => (
  <div className="ProgressIndicator-div">
    Searching...
    <CircularProgress size={60} thickness={7} />
  </div>
);

export default ProgressIndicator;
