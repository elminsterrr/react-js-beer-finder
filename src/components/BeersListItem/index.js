import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import './style.css';

function BeerListItem(props) {
  return (
    <div>
      <Card raised className="BeerListItem-main-card">
        <CardContent>
          <img src={props.beer.image_url} alt="beer" className="BeerListItem-img" />
          <Typography variant="headline" component="h2">
            {props.beer.name}
          </Typography>
          <Typography component="p">{props.beer.tagline}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default BeerListItem;
