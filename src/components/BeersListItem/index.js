import React from 'react';

const BeerListItem = ({ beer }) => (
  <div className="col-md-3 beers-lazy-scroll__item" key={beer._id}>
    <article className="panel panel-success">
      <header className="panel-heading">
        <h2 className="panel-title"> {beer.name} </h2>
      </header>
      <p className="panel-body"> {beer.tagline} </p>
    </article>
  </div>
);

export default BeerListItem;
