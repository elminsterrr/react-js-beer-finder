import React from 'react';
import './style.css';

const ErrorMessage = () => (
  <div>
    <p className="ErrorMessage-p">
      Sorry, there was an error while fetching data.
    </p>
    <p>Please try again later.</p>
  </div>
);

export default ErrorMessage;
