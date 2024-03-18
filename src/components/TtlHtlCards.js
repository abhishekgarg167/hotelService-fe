import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TtlHtlCards({ id, name }) {
  const emailId = localStorage.getItem("active_email");

  async function handleBookHtl() {
    var url = "https://hotelservice-be.onrender.com/bkd/save-bkdhtl-data";
    const obj = {
      id: id,
      emailId: emailId,
      name: name,
    };
    var response = await axios.post(url, obj);
    alert(response.data)
    var url1 = "https://hotelservice-be.onrender.com/ttl/delete-ttlhtl-data?id=" + id;
    var response1 = await axios.post(url1, id);
  }

  return (
    <Card className="shadow" style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          ID: {id}
        </Card.Text>
        <Button variant="primary" onClick={handleBookHtl}>Book Hotel</Button>
      </Card.Body>
    </Card>
  );
}

export default TtlHtlCards;
