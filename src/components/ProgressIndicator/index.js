import React from 'react';
import { CircularProgress } from 'material-ui/Progress';
import yellow from 'material-ui/colors/yellow';
import './style.css';

const ProgressIndicator = () => (
  <div className="ProgressIndicator-container">
    <CircularProgress style={{ color: yellow[700] }} thickness={7} />
  </div>
);

export default ProgressIndicator;
