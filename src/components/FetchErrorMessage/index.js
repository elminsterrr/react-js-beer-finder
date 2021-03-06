import React from 'react';
import './style.css';

const FetchErrorMessage = () => (
  <div>
    <p className="FetchErrorMessage-p">
      Sorry, there was an error while fetching data.
    </p>
    <p>Please try again later.</p>
  </div>
);

export default FetchErrorMessage;
