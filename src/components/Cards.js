import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Cards({ id, name }) {
  return (
    <Card className="shadow mb-4" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Text>
          {name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
