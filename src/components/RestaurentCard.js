import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestaurentCard({data}) {
  return (
    <Link style={{textDecoration:'none',color:'white'}} to={`restaurant/${data.id}`}>
    <Card style={{ width: '18rem',height:'37rem'}}>
      <Card.Img variant="top" src={data.photograph} style={{padding:"5px"}} />
      <Card.Body>
        <Card.Title> {data.name}</Card.Title>
        <Card.Text>
          Cuisine:{data.cuisine_type}
        </Card.Text>
        <p>Neighberhood : {data.neighborhood}</p>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default RestaurentCard