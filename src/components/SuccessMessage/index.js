import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import './style.css';

const SuccessMessage = () => (
  <div>
    <Card className="SuccessMessage-card">
      <CardContent>
        <Typography variant="headline" component="h2">
          All the beers has been loaded successfully.
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default SuccessMessage;
