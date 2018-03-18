import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import './style.css';

const SuccessMessage = () => (
  <div>
    <Card className="SuccessMessage-card">
      <CardContent>
        <p className="SuccessMessage-p">
          All the beers has been loaded successfully.
        </p>
      </CardContent>
    </Card>
  </div>
);

export default SuccessMessage;
